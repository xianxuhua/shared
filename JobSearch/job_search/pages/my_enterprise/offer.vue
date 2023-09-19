<template>
<div>
  <menus active-index="/my_enterprise/offer"></menus>
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
      prop="receiver.email"
      label="求职者"
      width="200">
    </el-table-column>
    <el-table-column
      prop="add_time"
      label="添加时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="150">
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
        <el-button type="text" size="small" @click="deleteOffer(scope.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";

export default {
  name: "offer",
  components: {
    menus
  },
  data() {
    return {
      offers: [
        {
          id: 0,
          receiver: {
            id: 0,
            username: '',
            email: ''
          },
          position: {
            id: 0,
            name: ''
          },
          work_date: '',
          work_address: '',
          status: '',
          salary: 0,
          report_data: '',
          report_date: '',
          probation_month: 0,
          contract_year: 0,
          other_message: ''
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
    deleteOffer(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$confirm('是否删除该记录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("offer/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.offers, this.offers.indexOf(this.offers.filter(v => v.id===row.id)[0]))
              this.$notify.success('删除成功!')
              break
          }
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>

</style>
