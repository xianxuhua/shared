from django.db.models import *
from common.models import BaseModel
from position.models import Position
from user.models import User


class Offer(BaseModel):
    sender = ForeignKey(User, on_delete=CASCADE, verbose_name="发放企业账号", related_name="offer_sender", null=True)
    position = ForeignKey(Position, on_delete=DO_NOTHING, verbose_name="发放职位")
    receiver = ForeignKey(User, on_delete=CASCADE, verbose_name="发放用户", related_name="offer_receiver")
    status = CharField(max_length=10, choices=(("待接受", "待接受"),
                                               ("已接受", "已接受"),
                                               ("已拒绝", "已拒绝")), default="待接受", verbose_name="状态")
    file = FileField(null=True, verbose_name="录用通知")
