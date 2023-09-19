<template>
  <div class="fair">
    <el-image v-if="lecture.enterprise.head_img" :src="lecture.enterprise.head_img" style="width: 100px;height: 100px;border-radius: 50%"></el-image>
    <el-image v-else src="/gopher04.png" style="width: 100px;height: 100px;border-radius: 50%"></el-image>
    <p>{{ lecture.enterprise.name }}</p>
    <p>
      {{ lecture.enterprise.field }}/{{ lecture.enterprise.finance }}/{{ lecture.enterprise.worker_num|worker_num }}人以上
    </p>
    <p>{{ lecture.school }}</p>
    <p style="font-size: 12px">{{ lecture.date }}  {{ lecture.start_time }}</p>
  </div>
</template>

<script>
export default {
  name: "lecture",
  props: [
    "lecture"
  ],
}
</script>

<style scoped>
.fair {
  display: flex;flex-direction:column;align-items: center;justify-content:space-around;border: solid 1px #DCDFE6;height: 250px;
}
.fair p {
  font-size: 14px;
}
</style>
