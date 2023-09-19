<template>
  <div>
    <el-menu menu-trigger="click" router :default-active="activeIndex" style="margin-bottom: 15px" mode="horizontal">
      <el-menu-item index="/">职位</el-menu-item>
      <el-menu-item index="/activity/lecture">招聘活动</el-menu-item>
      <el-menu-item index="/guide">就业指导</el-menu-item>
      <el-menu-item index="/policy">就业政策</el-menu-item>
      <el-menu-item index="/community">交流板块</el-menu-item>
      <el-submenu v-if="$store.state.user.token && !$store.state.user.is_enterprise" index="/my" style="float: right">
        <template slot="title">我的</template>
        <el-menu-item index="/my/resume">个人中心</el-menu-item>
        <el-menu-item @click="logout">退出登录</el-menu-item>
      </el-submenu>
      <el-submenu  v-else-if="$store.state.user.token && $store.state.user.is_enterprise" index="/my_enterprise" style="float: right">
        <template slot="title">我的</template>
        <el-menu-item index="/my_enterprise/info">企业中心</el-menu-item>
        <el-menu-item @click="logout">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item v-else index="/login" style="float: right">登录</el-menu-item>
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
