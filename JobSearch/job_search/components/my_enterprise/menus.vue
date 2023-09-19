<template>
<div>
  <el-menu menu-trigger="click" router :default-active="activeIndex" style="margin-bottom: 15px" mode="horizontal">
    <el-menu-item index="/my_enterprise/info">企业信息</el-menu-item>
    <el-menu-item index="/my_enterprise/attend_fair">参与招聘会</el-menu-item>
    <el-menu-item index="/my_enterprise/lecture">宣讲会管理</el-menu-item>
    <el-menu-item index="/my_enterprise/position">职位管理</el-menu-item>
    <el-menu-item index="/my_enterprise/resume">简历管理</el-menu-item>
    <el-menu-item index="/my_enterprise/interview">面试管理</el-menu-item>
    <el-menu-item index="/my_enterprise/offer">offer管理</el-menu-item>
    <el-menu-item index="/my_enterprise/message">咨询消息</el-menu-item>
    <el-menu-item style="float: right" @click="logout">退出登录</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "menus",
  props: {
    activeIndex: ""
  },
  methods: {
    logout() {
      this.$cookies.removeAll()
      this.$store.commit("setToken", {
        id: 0,
        token: "",
        is_enterprise: false,
        enterprise_id: 0,
        is_admin: false,
      })
      this.$notify.success({
        message: "成功退出登录",
        duration: 1000
      })
      setTimeout(() => {
        location.href = "/"
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
