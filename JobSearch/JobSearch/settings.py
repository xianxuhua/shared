import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE_DIR)
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

SECRET_KEY = 'xxx'

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'django_filters',
    'corsheaders',
    'user',
    'user_opt',
    'resume',
    'enterprise',
    'community',
    'position',
    'guide',
    'policy',
    'interview',
    'offer'
]

AUTH_USER_MODEL = 'user.User'

REST_FRAMEWORK = {
    'DATETIME_FORMAT': "%Y-%m-%d %H:%M",
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'DEFAULT_AUTHENTICATION_CLASSES': (
     'rest_framework.authentication.BasicAuthentication',
     'rest_framework.authentication.SessionAuthentication',
    )
}

from datetime import timedelta
SIMPLE_JWT = {
 'ACCESS_TOKEN_LIFETIME': timedelta(days=7),
 'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
 'ALGORITHM': 'HS256',
 'SIGNING_KEY': SECRET_KEY,
}


CORS_ORIGIN_ALLOW_ALL = True


MIDDLEWARE = [
 'corsheaders.middleware.CorsMiddleware',
 'django.middleware.security.SecurityMiddleware',
 'django.contrib.sessions.middleware.SessionMiddleware',
 'django.middleware.common.CommonMiddleware',
 'django.middleware.csrf.CsrfViewMiddleware',
 'django.contrib.auth.middleware.AuthenticationMiddleware',
 'django.contrib.messages.middleware.MessageMiddleware',
 'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'JobSearch.urls'

TEMPLATES = [
 {
     'BACKEND': 'django.template.backends.django.DjangoTemplates',
     'DIRS': [],
     'APP_DIRS': True,
     'OPTIONS': {
         'context_processors': [
             'django.template.context_processors.debug',
             'django.template.context_processors.request',
             'django.contrib.auth.context_processors.auth',
             'django.contrib.messages.context_processors.messages',
         ],
     },
 },
]

WSGI_APPLICATION = 'JobSearch.wsgi.application'

DATABASES = {
    'default': {
     'ENGINE': 'django.db.backends.mysql',
     'NAME': 'jobSearch',
     'USER': 'root',
     'PASSWORD': '1160576878',
     'HOST': '127.0.0.1',
     'PORT': '3306',
    }
}

CACHES = {
    "default": {
         "BACKEND": "django_redis.cache.RedisCache",
         "LOCATION": "redis://127.0.0.1:6379/0",
         "OPTIONS": {
             "CLIENT_CLASS": "django_redis.client.DefaultClient",
         }
    }
}


AUTH_PASSWORD_VALIDATORS = [
 {
     'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
 },
 {
     'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
 },
 {
     'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
 },
 {
     'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
 },
]

LANGUAGE_CODE = 'zh-Hans'
TIME_ZONE = 'Asia/Shanghai'
USE_I18N = True
USE_L10N = True
USE_TZ = False

STATIC_URL = '/static/'

# 设置上传文件的路径
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# 邮件服务

ALIYUN_EMAIL_REPLY_TO_ADDRESS = "false"
ALIYUN_EMAIL_ADDRESS_TYPE = "1"


# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'handlers': {
#         'console':{
#             'level':'DEBUG',
#             'class':'logging.StreamHandler',
#         },
#     },
#     'loggers': {
#         'django.db.backends': {
#             'handlers': ['console'],
#             'propagate': True,
#             'level':'DEBUG',
#         },
#     }
# }