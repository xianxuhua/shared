from django.db.models import *
from common.models import BaseModel
from user.models import User
from position.models import Position
from resume.models import ResumePosition


class InterviewRecord(BaseModel):
    sender = ForeignKey(User, on_delete=DO_NOTHING, related_name="interview_sender")
    receiver = ForeignKey(User, on_delete=DO_NOTHING, related_name="interview_receiver")
    position = ForeignKey(Position, on_delete=DO_NOTHING, null=True)
    resume_position = ForeignKey(ResumePosition, on_delete=DO_NOTHING, null=True)
    date = DateField()
    start_time = TimeField()
    end_time = TimeField(null=True)
    address = CharField(max_length=20, verbose_name="地点")
    leave_message = CharField(max_length=100, verbose_name="留言")
    contact = CharField(max_length=20, null=True)
    times = IntegerField(default=1, verbose_name="面试第几轮")
    status = CharField(max_length=10, choices=(("邀请中", "邀请中"),
                                               ("已通过", "已通过"),
                                               ("未通过", "未通过"),
                                               ("已接受面试", "已接受面试"),
                                               ("已拒绝面试", "已拒绝面试"),
                                               ("已发放offer", "已发放offer"),
                                               ("已接受offer", "已接受offer"),
                                               ("已拒接offer", "已拒接offer"),
                                               ), default="邀请中", verbose_name="是否通过")

    class Meta:
        verbose_name = "面试邀请记录"
        verbose_name_plural = verbose_name
