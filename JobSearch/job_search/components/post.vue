<template>
  <div>
    <div style="display: flex;justify-content: space-between">
      <p><nuxt-link :to="{path: '/post/'+post.id}">{{ post.title }}</nuxt-link></p>
      <div style="display: flex;align-items: baseline">
        <p style="margin-right: 20px">回复：{{ post.comment_num }}</p>
        <p style="margin-right: 20px">收藏：{{ post.like_num }}</p>
        <p style="margin-right: 20px">浏览：{{ post.view_num }}</p>
        <p>{{ post.add_time }}</p>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
name: "post",
  props: [
    "post"
  ],
}
</script>

<style scoped>

</style>
