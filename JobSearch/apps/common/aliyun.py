import base64
import hmac
from hashlib import sha1
import urllib.parse
import time
import uuid
import random
import requests
from django.conf import settings


# 阿里云创建子账号，添加AliyunDirectMailFullAccess权限
class ALiYunEmail(object):
    def __init__(self):
        self.access_id = settings.ALIYUN_EMAIL_ACCESS_KEY_ID
        self.access_secret = settings.ALIYUN_EMAIL_ACCESS_KEY_SECRET
        self.url = settings.ALIYUN_EMAIL_API_URL

    def sign(self, access_key_secret, parameter):
        sorted_parameters = sorted(parameter.items(), key=lambda parameter: parameter[0])
        canonicalized_query_string = ''

        for (k, v) in sorted_parameters:
            canonicalized_query_string += '&' + self.percent_encode(k) + '=' + self.percent_encode(v)

        string_to_sign = 'GET&%2F&' + self.percent_encode(canonicalized_query_string[1:])

        h = hmac.new(bytes((access_key_secret + "&").encode("utf-8")), string_to_sign.encode('utf-8'), sha1)
        signature = base64.encodebytes(h.digest()).strip()
        return signature

    def percent_encode(self, encode_str):
        encode_str = str(encode_str)
        res = urllib.parse.quote(encode_str.encode('utf-8'), '')
        res = res.replace('+', '%20')
        res = res.replace('*', '%2A')
        res = res.replace('%7E', '~')
        return res

    def make_url(self, params: dict) -> str:
        timestamp = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        parameters = {
            'Format': 'JSON',
            'Version': '2015-11-23',
            'AccessKeyId': self.access_id,
            'SignatureVersion': '1.0',
            'SignatureMethod': 'HMAC-SHA1',
            'SignatureNonce': str(uuid.uuid1()),
            'Timestamp': timestamp,
        }
        for key in params.keys():
            parameters[key] = params[key]
        signature = self.sign(self.access_secret, parameters)
        parameters['Signature'] = signature
        url = self.url + "/?" + urllib.parse.urlencode(parameters)
        return url

    def send_mail(self, email: str, title: str, content: str) -> requests.Response:
        data = {
            'Action': 'SingleSendMail',
            'AccountName': settings.ALIYUN_EMAIL_FROM_EMAIL,
            'ReplyToAddress': settings.ALIYUN_EMAIL_REPLY_TO_ADDRESS,
            'AddressType': settings.ALIYUN_EMAIL_ADDRESS_TYPE,
            'ToAddress': email,
            'Subject': title,
            'TextBody': content
        }
        url = self.make_url(data)
        response = requests.get(url)
        return response
