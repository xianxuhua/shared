<template>
<div>
  <menus active-index="/guide"></menus>
  <el-page-header @back="$router.back()"></el-page-header>
  <div>
    <h2 style="margin: 20px;text-align: center">{{ guide.title }}</h2>
    <pre>{{ guide.content }}</pre>
  </div>
</div>
</template>

<script>
import menus from "../../components/menus";
export default {
  name: "id",
  components: {
    menus
  },
  data() {
    return {
      guide: {
        id: 0,
        title: '',
        content: '',
        category: ''
      }
    }
  },
  created() {
    this.$axios.get("guide/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.guide = rep.data
          break
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
