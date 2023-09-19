<template>
  <div style="display: flex;justify-content: space-between;height: 80px">

<!--    position info-->
    <div style="display: flex;flex-direction: column;justify-content: space-around;">
      <div style="display: flex">
        <p><nuxt-link :to="{path: '/position/'+position.id, params: {id: position.id}}">{{ position.name }}</nuxt-link></p>
        <small style="margin-left: 10px;color: #3b8070">发布时间：{{ position.add_time }}</small>
      </div>

      <div style="display: flex;">
        <el-tag style="margin-right: 10px" size="mini">{{ position.min_salary/1000 }}k-{{ position.max_salary/1000 }}k</el-tag>
        <el-tag style="margin-right: 10px" size="mini">{{ position.min_work_year | min_work_year }}</el-tag>
        <el-tag style="margin-right: 10px" size="mini">{{ position.edu_require }}</el-tag>
        <el-tag style="margin-right: 10px" size="mini">{{ position.category }}</el-tag>
        <el-tag style="margin-right: 10px" size="mini">{{ position.work_kind }}</el-tag>
      </div>
      <div style="display: flex;">
        <el-tag v-for="tag in position.tags" style="margin-right: 10px" size="mini">{{ tag }}</el-tag>

      </div>
    </div>

<!--enterprise info-->
    <div style="display: flex">
      <div style="width:300px;display: flex;flex-direction: column;justify-content: space-around;">
        <p>{{ position.enterprise.name }}</p>
        <div style="display: flex;">
          <el-tag style="margin-right: 10px" size="mini">{{ position.enterprise.field }}</el-tag>
          <el-tag style="margin-right: 10px" size="mini">{{ position.enterprise.finance }}</el-tag>
          <el-tag style="margin-right: 10px" size="mini">{{ position.enterprise.worker_num | worker_num }}人以上</el-tag>
        </div>

        <small>{{ position.enterprise.slogan }}</small>
      </div>
      <el-image v-if="position.enterprise.head_img" :src="position.enterprise.head_img" style="width: 80px; height: 80px;margin-left: 10px;border-radius: 50%"></el-image>
      <el-image v-else src="gopher04.png" style="width: 100px; height: 100px;margin-left: 10px;border-radius: 50%"></el-image>
    </div>

  </div>
</template>

<script>
export default {
  name: "position",
  props: [
    "position"
  ],
}
</script>

<style scoped>

</style>
