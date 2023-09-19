<template>
<div>
  <div style="display: flex;flex-direction: column;width: 250px">
    <div style="display: flex;flex-direction: row;justify-content: space-around">
      <el-image :src="message.user.head_img" style="width: 50px;height: 50px;border-radius: 50%"></el-image>
      <div style="display: flex;flex-direction: column;justify-content: space-around">
        <p style="font-size: 13px">{{ message.user.username }}</p>
        <p style="font-size: 13px">{{ message.add_time|dateTimeFormat }}</p>
      </div>
    </div>
    <p style="word-break: break-all;margin: 10px;text-indent: 2em">
      {{ message.content }}</p>
  </div>
  <el-divider></el-divider>
</div>
</template>

<script>
export default {
  name: "user_message",
  props: [
    'message'
  ]
}
</script>

<style scoped>

</style>
