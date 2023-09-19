<template>
<div>
  <el-menu menu-trigger="click" router :default-active="activeIndex" style="margin-bottom: 15px" mode="horizontal">
    <el-menu-item index="/my_enterprise/attend_fair">参与招聘会</el-menu-item>
    <el-menu-item index="/my_enterprise/fair">招聘会管理</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "fair_lecture_menu",
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
