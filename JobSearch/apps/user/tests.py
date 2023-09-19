from django.test import TestCase


class TestUser(TestCase):
    def test_send_code(self):
        rep = self.client.post("/code", {
            "email": "1160576878@qq.com"
        })
        self.assertEqual(rep.status_code, 200)