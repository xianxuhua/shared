<template>
  <div>
    <menus active-index="/policy"></menus>
    <el-page-header @back="$router.back()"></el-page-header>
    <div>
      <p style="font-size: 20px;margin: 20px;text-align: center">{{ policy.title }}</p>
      <pre>{{ policy.content }}</pre>
    </div>
  </div>
</template>

<script>
import menus from "@/components/menus";
export default {
  name: "id",
  components: {
    menus
  },
  data() {
    return {
      policy: {
        id: 0,
        title: '',
        content: '',
        address: '',
        add_time: ''
      }
    }
  },
  created() {
    this.$axios.get("policy/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.policy = rep.data
          break
      }
    })
  }
}
</script>

<style scoped>

</style>
