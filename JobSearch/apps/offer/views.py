from rest_framework import viewsets, mixins, response, status, permissions
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import OfferSerializer, OfferCreateSerializer
from .models import Offer
from interview.models import InterviewRecord
from common.permissions import IsEnterpriseUser
from common.aliyun import ALiYunEmail


class OfferView(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_permissions(self):
        if self.action in ['create', 'destroy']:
            return [permissions.IsAuthenticated(), IsEnterpriseUser()]
        return [permissions.IsAuthenticated()]

    def get_serializer_class(self):
        if self.action == "create":
            return OfferCreateSerializer
        return OfferSerializer

    def get_queryset(self):
        if self.request.user.is_enterprise:
            return Offer.objects.filter(sender=self.request.user)
        return Offer.objects.filter(receiver=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # 给求职者发邮件，修改面试记录状态
        interview_record = InterviewRecord.objects.filter(sender=self.request.user,
                                                          receiver=serializer.data['receiver']).first()

        interview_record.status = "已发放offer"
        interview_record.save()

        aliyun = ALiYunEmail()
        res = aliyun.send_mail(interview_record.receiver.email, "发放offer通知",
                               f"恭喜您获得{interview_record.position.enterprise.name}"
                               f"{interview_record.position.name}的offer，请前往个人中心查收")

        if 200 <= res.status_code < 400:
            headers = self.get_success_headers(serializer.data)
            return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return response.Response({"message": "发送失败"}, status=res.status_code)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        aliyun = ALiYunEmail()
        # 求职者接受或拒绝offer，给企业发邮件
        if serializer.data['status'] == "已接受":
            res = aliyun.send_mail(instance.sender.email, "offer收取通知", f"{self.request.user.email}已接受{instance.position.name}的offer")
        elif serializer.data['status'] == "已拒绝":
            res = aliyun.send_mail(instance.sender.email, "offer收取通知", f"{self.request.user.email}已拒绝{instance.position.name}的offer")

        if 200 <= res.status_code < 400:
            return response.Response(serializer.data)
        else:
            return response.Response({"message": "发送失败"}, status=res.status_code)
