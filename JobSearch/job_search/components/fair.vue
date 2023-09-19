<template>
  <div class="fair">
    <p>{{ fair.school }}</p>
    <p style="font-size: 12px">{{ fair.date }}  {{ fair.start_time }}</p>
  </div>
</template>

<script>
export default {
  name: "fair",
  props: [
    "fair"
  ],
}
</script>

<style scoped>
</style>
