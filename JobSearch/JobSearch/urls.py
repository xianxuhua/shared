from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter

from user.views import UserView, CodeView, UserLoginView, EnterpriseRegisterView
from user_opt.views import HistoryView, CollectionView, CommentView, ConsultView
from position.views import PositionView
from enterprise.views import EnterpriseView, LectureView, FairView, EnterpriseFairView
from resume.views import ResumeView, ApplyPositionView, FileResumeView
from community.views import SchoolView, PostLikeView, ProfessionView, PostView, EnterpriseView \
                            as communityEnterpriseView
from policy.views import PolicyView
from guide.views import GuideView
from interview.views import InterviewView
from offer.views import OfferView

router = DefaultRouter()
router.register(r'user', UserView, basename="user")
router.register("enterprise_register", EnterpriseRegisterView, basename="enterprise_register")
router.register(r'code', CodeView, basename="code")

router.register(r'history', HistoryView, basename="history")
router.register(r'collection', CollectionView, basename="collection")
router.register(r'comment', CommentView, basename="comment")
router.register(r'consult', ConsultView, basename="consult")

router.register(r'position', PositionView, basename="position")

router.register(r'enterprise', EnterpriseView, basename="enterprise")
router.register(r'fair', FairView, basename="fair")
router.register(r'lecture', LectureView, basename="lecture")
router.register(r'enterprise_fair', EnterpriseFairView, basename="enterprise_fair")

router.register(r'resume', ResumeView, basename="resume")
router.register(r'apply', ApplyPositionView, basename="apply")
router.register(r'file_resume', FileResumeView, basename="file_resume")

router.register(r'post', PostView, basename="post")
router.register(r'profession', ProfessionView, basename="profession")
router.register(r'school', SchoolView, basename="school")
router.register(r'community_enterprise', communityEnterpriseView, basename="community_enterprise")
router.register("post_like", PostLikeView, basename="post_like")

router.register("policy", PolicyView, basename="policy")
router.register("guide", GuideView, basename="guide")

router.register("interview", InterviewView, basename="interview")
router.register("offer", OfferView, basename="offer")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('docs/', include_docs_urls()),
    path('', include(router.urls)),
    path('login/', UserLoginView.as_view()),
    re_path('media/(?P<path>.*)', serve, {'document_root': settings.MEDIA_ROOT}),
]

if not settings.DEBUG:
    urlpatterns.append(re_path('static/(?P<path>.*)', serve, {'document_root': settings.STATIC_ROOT}))
else:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()
