<template>
  <el-menu
    default-active="/"
    mode="horizontal"
    :default-active="activeIndex"
    style="margin-bottom: 20px"
    router>
    <el-menu-item index="/my/resume">在线简历</el-menu-item>
    <el-menu-item index="/my/password">修改密码</el-menu-item>
    <el-menu-item index="/my/history">浏览历史</el-menu-item>
    <el-menu-item index="/my/collection">我的关注</el-menu-item>
    <el-menu-item index="/my/apply">我的申请</el-menu-item>
    <el-menu-item index="/my/interview">面试记录</el-menu-item>
    <el-menu-item index="/my/offer">offer管理</el-menu-item>
    <el-menu-item index="/my/message">咨询消息</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "my_menus",
  props: {
    activeIndex: ""
  },
}
</script>

<style scoped>
::v-deep .el-menu-item {
	height: 35px;
	line-height: 35px;
}
::v-deep .el-submenu__title{
	height: 35px;
	line-height: 35px;
}
</style>
