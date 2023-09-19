<template>
  <div>
      <div style="display: flex;flex-direction: column;align-items: center">
        <p style="font-size: 18px;margin-bottom: 10px">{{ profession.name }}</p>
        <p>{{ profession.post_num }}条帖子</p>
        <p>{{ profession.member_num }}人加入</p>
      </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "profession",
  props: [
      "profession"
  ]
}
</script>

<style scoped>

</style>
