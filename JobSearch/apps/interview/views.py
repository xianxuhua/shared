from rest_framework import viewsets, mixins, permissions, response, status
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import InterviewRecordSerializer, InterviewCreateSerializer, InterviewUpdateSerializer
from .models import InterviewRecord
from user.models import User
from resume.models import ResumePosition
from enterprise.models import Enterprise
from common.permissions import IsEnterpriseUser
from common.aliyun import ALiYunEmail


class InterviewView(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_serializer_class(self):
        if self.action == "create":
            return InterviewCreateSerializer
        elif self.action in ['update', 'partial_update']:
            return InterviewUpdateSerializer
        return InterviewRecordSerializer

    def get_permissions(self):
        if self.action in ["create", "destroy"]:
            return [permissions.IsAuthenticated(), IsEnterpriseUser()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        if self.request.user.is_enterprise:
            return InterviewRecord.objects.filter(sender=self.request.user)

        return InterviewRecord.objects.filter(receiver=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # 修改简历记录状态为邀请中
        resume_record = ResumePosition.objects.get(id=serializer.data['resume_position'])
        resume_record.status = "邀请中"
        resume_record.save()

        # 给求职者发面试邀请邮件
        aliyun = ALiYunEmail()
        receiver_user = User.objects.filter(id=serializer.data['receiver']).first()
        sender_enterprise = Enterprise.objects.filter(position=serializer.data['position']).first()

        interview_email_content = f"""
        您好，{sender_enterprise.name}邀请您参加第{serializer.data['times']}轮面试
        时间：{serializer.data['date']} {serializer.data['start_time']}
        地点：{serializer.data['address']}
        联系方式：{serializer.data['contact']}
        企业留言：{serializer.data['leave_message']}
        """
        res = aliyun.send_mail(receiver_user.email, "面试邀请", interview_email_content)
        headers = self.get_success_headers(serializer.data)

        if 200 <= res.status_code < 400:
            return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return response.Response({"message": "服务器出错"}, status=res.status_code)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        aliyun = ALiYunEmail()

        resume_record = ResumePosition.objects.get(id=instance.resume_position.id)

        if serializer.data['status'] == "已通过":
            # 已通过前轮面试，但后续还有面试
            if serializer.data['times'] < instance.position.interview_times:
                # 修改简历记录为面试中
                resume_record.status = "面试中"

                # 面试通过，给求职者发邮件
                res = aliyun.send_mail(instance.receiver.email,
                                       "面试结果通知",
                                       f"恭喜您申请的{instance.position.enterprise.name}的岗位{instance.position.name}，第{serializer.data['times']}轮面试已通过，请等待后续面试")
            else:
                # 面试完全通过
                # 修改简历记录为已通过
                resume_record.status = "已通过"

                res = aliyun.send_mail(instance.receiver.email,
                                       "面试结果通知",
                                       f"恭喜您申请的{instance.position.enterprise.name}的岗位{instance.position.name}，第{serializer.data['times']}轮面试已通过，请等待offer通知")
        elif serializer.data['status'] == "未通过":
            # 修改简历记录为未通过
            resume_record.status = "未通过"

            res = aliyun.send_mail(instance.receiver.email,
                                   "面试结果通知",
                                   f"很遗憾您申请的{instance.position.enterprise.name}的岗位{instance.position.name}，第{serializer.data['times']}轮面试未通过，谢谢关注")
        elif serializer.data['status'] == '已接受面试':
            resume_record.status = "已接受面试"
        #     给企业发邮件
            res = aliyun.send_mail(instance.sender.email, "面试邀请结果", f"{instance.receiver.email}已接受{instance.position.name}的面试邀请")
        elif serializer.data['status'] == '已拒绝面试':
            resume_record.status = "未通过"
            #     给企业发邮件
            res = aliyun.send_mail(instance.sender.email, "面试邀请结果",
                                   f"{instance.receiver.email}已拒绝{instance.position.name}的面试邀请")
        else:
            # 修改简历记录为面试中
            resume_record.status = "面试中"

            # 继续邀请面试操作
            interview_email_content = f"""
                    您好，{instance.position.enterprise.name}邀请您参加第{serializer.data['times']}轮面试
                    时间：{serializer.data['date']} {serializer.data['start_time']}
                    地点：{serializer.data['address']}
                    联系方式：{serializer.data['contact']}
                    企业留言：{serializer.data['leave_message']}
                    """
            res = aliyun.send_mail(instance.receiver.email, "面试邀请", interview_email_content)

        resume_record.save()

        if 200 <= res.status_code < 400:
            return response.Response(serializer.data)
        else:
            return response.Response({"message": "服务器出错"}, status=res.status_code)
