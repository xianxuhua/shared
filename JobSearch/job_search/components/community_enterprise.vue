<template>
    <div>
    <div style="display: flex;flex-direction: column;">
      <p style="font-size: 18px;margin-bottom: 10px">{{ community_enterprise.name }}</p>
      <div style="display: flex">
        <el-image v-if="community_enterprise.head_img" :src="community_enterprise.head_img" style="width: 100px;height: 100px"></el-image>
        <el-image v-else src="/sdkj.jpeg" style="width: 100px;height: 100px;border-radius: 50%;margin-right: 15px"></el-image>
        <div style="display: flex;flex-direction: column;justify-content: space-around;margin-left: 10px">
          <p>{{ community_enterprise.post_num }}条帖子</p>
          <p>{{ community_enterprise.member_num }}人加入</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "community_enterprise",
  props: [
    'community_enterprise'
  ]
}
</script>

<style scoped>
</style>
