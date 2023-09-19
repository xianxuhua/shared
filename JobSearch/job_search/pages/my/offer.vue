<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/offer"></my_menus>
  <el-table
    :data="offers"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="position.name"
      label="职位"
      width="150">
    </el-table-column>
    <el-table-column
      prop="enterprise.name"
      label="企业"
      width="220">
    </el-table-column>
    <el-table-column
      prop="add_time"
      label="添加时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="file"
      label="录用通知"
      width="150">
      <template slot-scope="scope">
        <a :href="scope.row.file" target="_blank">查看</a>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status==='待接受'" type="text" size="small" @click="agreeOffer(scope.row)" >接受</el-button>
        <el-button v-if="scope.row.status==='待接受'" type="text" size="small" @click="disagreeOffer(scope.row)" >拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "offer",
  components: {
    menus,
    my_menus
  },
  data() {
    return {
      offers: [
        {
          id: 0,
          position: {
            id: 0,
            name: ''
          },
          enterprise: {
            id: 0,
            name: ''
          },
          add_time: '',
          status: '',
          file: '',
          sender: {
            id: 0,
            email: ''
          },
          receiver: {
            id: 0,
            email: ''
          },
        }
      ]
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (!token) {
      this.$notify.error("请先登录")
      return
    }

    this.$axios.setToken(token, 'Bearer')
    this.$axios.get("offer/").then(rep => {
      switch (rep.status) {
        case 200:
          this.offers = rep.data.results
          break
      }
    })
  },
  methods: {
    agreeOffer(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("offer/"+row.id+"/", {
        status: "已接受"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("已接受")
            this.$set(this.offers, this.offers.indexOf(this.offers.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    disagreeOffer(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("offer/"+row.id+"/", {
        status: "已拒绝"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("已拒绝")
            this.$set(this.offers, this.offers.indexOf(this.offers.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
