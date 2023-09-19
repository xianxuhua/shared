<template>
<div style="margin-left: 20px">
  <div style="display:flex;align-items: center;justify-content: space-between;margin: 20px 0">
    <p style="font-size: 20px;">常见问题</p>
    <div style="display: flex;align-items: center">
      <el-input></el-input>
      <el-button>搜索</el-button>
    </div>
  </div>
  <div>
    <el-row v-for="guide in guides" :key="guide.id">
      <el-col :span="24">
        <div>
          <p><nuxt-link :to="{path: '/guide/'+guide.id, params: {id: guide.id}}">{{ guide.title }}</nuxt-link></p>
          <el-divider></el-divider>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
name: "guide_questions",
  props: [
    'guides'
  ],
}
</script>

<style scoped>

</style>
