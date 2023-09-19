<template>
<div>
  <el-menu menu-trigger="click" router :default-active="activeIndex" style="margin-bottom: 15px" mode="horizontal">
    <el-menu-item index="/activity/lecture">宣讲会</el-menu-item>
    <el-menu-item index="/activity/fair">招聘会</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "activity_menu",
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
::v-deep .el-menu-item {
	height: 35px;
	line-height: 35px;
}
::v-deep .el-submenu__title{
	height: 35px;
	line-height: 35px;
}
</style>
