<template>
<div>
  <el-menu menu-trigger="click" router :default-active="activeIndex" style="margin-bottom: 15px" mode="horizontal">
    <el-menu-item index="/admin/guide">就业指导管理</el-menu-item>
    <el-menu-item index="/admin/policy">就业政策管理</el-menu-item>
    <el-menu-item index="/admin/fair">招聘会管理</el-menu-item>
    <el-menu-item index="/admin/enterprise">企业账号审核</el-menu-item>
    <el-menu-item index="/admin/user">用户管理</el-menu-item>
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
