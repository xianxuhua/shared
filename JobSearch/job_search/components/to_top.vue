<template>

  <el-backtop :bottom="100">
    <div class="up">
      UP
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: "to_top"
}
</script>

<style scoped>
.up {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>
