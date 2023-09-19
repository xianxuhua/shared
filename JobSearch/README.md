#### 请将setting_example.py改为setting.py
#### 配置mysql、redis数据库 、阿里云邮件服务、oss服务
#### 安装docker并安装sentry错误日志监控

- 阿里云邮件服务配置：
1. 设置发信域名
2. 点进域名，找到解析要求，添加dns解析
3. 配置发信地址
4. 阿里云右上角头像accessKey管理，添加子账户，添加AliyunDirectMailFullAccess权限

docker启动：docker-compose build
