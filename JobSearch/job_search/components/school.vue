<template>
  <div>
    <div style="display: flex;flex-direction: column;">
      <p style="font-size: 18px;margin-bottom: 10px">{{ school.name }}</p>
      <div style="display: flex">
        <el-image v-if="school.head_img" :src="school.head_img" style="width: 100px;height: 100px"></el-image>
        <el-image v-else src="/sdkj.jpeg" style="width: 100px;height: 100px;border-radius: 50%;margin-right: 15px"></el-image>
        <div style="display: flex;flex-direction: column;justify-content: space-around;margin-left: 10px">
          <p>{{ school.profession_num }}个专业交流</p>
          <p>{{ school.post_num }}条帖子</p>
          <p>{{ school.member_num }}人加入</p>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "school",
  props: [
    "school"
  ],
}
</script>

<style scoped>

</style>
