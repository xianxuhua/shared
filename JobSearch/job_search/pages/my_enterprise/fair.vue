<template>
<div>
  <menus active-index="/my_enterprise/attend_fair"></menus>
  <fair_lecture_menu active-index="/my_enterprise/fair"></fair_lecture_menu>
  <el-table
    :data="enterprise_fairs"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="fair.school"
      label="学校"
      width="150">
    </el-table-column>
    <el-table-column
      prop="fair.date"
      label="举办日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="fair.start_time"
      label="开始时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="fair.end_time"
      label="结束时间"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="cancelAttendFair(scope.row)">退出招聘会</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
import fair_lecture_menu from "../../components/my_enterprise/fair_lecture_menu";
export default {
  name: "fair",
  components: {
    menus,
    fair_lecture_menu
  },
  data() {
    return {
      enterprise_fairs: [
        {
          id: 0,
          fair: {
            id: 0,
            school: '',
            date: '',
            start_time: '',
            end_time: ''
          }
        }
      ],
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (!token) {
      this.$notify.error("请先登录")
      return
    }

    this.$axios.setToken(token, 'Bearer')
    this.$axios.get("enterprise_fair/?enterprise="+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          this.enterprise_fairs = rep.data.results
          break
      }
    })
  },
  methods: {
    cancelAttendFair(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$confirm('是否退出该招聘会?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("enterprise_fair/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$notify.success("退出成功")
              this.$delete(this.enterprise_fairs, this.enterprise_fairs.indexOf(this.enterprise_fairs.filter(v => v.id===row.id)[0]))
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
