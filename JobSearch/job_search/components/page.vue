<template>
  <el-pagination
          background
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total"
          @current-change="currentChange"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "page",
  props: [
    "total",
    "pageSize"
  ],
  methods: {
    currentChange(currentPage) {
      this.$emit("pageChange", currentPage);  // currentPage传递给父组件
    }
  }
}
</script>

<style scoped>

</style>
