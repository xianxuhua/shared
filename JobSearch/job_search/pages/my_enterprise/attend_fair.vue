<template>
<div>
  <menus active-index="/my_enterprise/attend_fair"></menus>
  <fair_lecture_menu active-index="/my_enterprise/attend_fair"></fair_lecture_menu>
  <el-table
    :data="fairs"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="school"
      label="学校"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date"
      label="举办日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="start_time"
      label="开始时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="end_time"
      label="结束时间"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="lookFair(scope.row)">查看</el-button>
        <el-button type="text" size="small" @click="attendFair(scope.row)">参加招聘会</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="招聘会详情" :visible.sync="dialogLookFairVisible">
    <p>学校：{{ current_fair.school }}</p>
    <p>地点：{{ current_fair.address }}</p>
    <p>日期：{{ current_fair.school }}</p>
    <p>开始时间：{{ current_fair.start_time }}</p>
    <p>结束时间：{{ current_fair.end_time }}</p>
    <p>简介：{{ current_fair.desc }}</p>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
import fair_lecture_menu from "../../components/my_enterprise/fair_lecture_menu";
export default {
  name: "attend_fair",
  components: {
    menus,
    fair_lecture_menu
  },
  data() {
    return {
      dialogLookFairVisible: false,
      fairs: [
        {
          id: 0,
          school: '',
          date: ''
        }
      ],
      current_fair: {
        id: '',
        school: '',
        date: '',
        start_time: '',
        end_time: '',
        address: '',
        desc: ''
      }
    }
  },
  created() {
    this.$axios.get("fair/").then(rep => {
      switch (rep.status) {
        case 200:
          this.fairs = rep.data.results
          break
      }
    })
  },
  methods: {
    lookFair(row) {
      this.$axios.get("fair/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_fair = rep.data
            this.dialogLookFairVisible = true
            break
        }
      })
    },
    attendFair(row) {
      this.$axios.post("enterprise_fair/", {
        enterprise: this.$store.state.user.enterprise_id,
        fair: row.id,
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("已参加")
            break
        }
      })
    },
  }
}
</script>

<style scoped>
.el-dialog p {
  margin-bottom: 10px;
}
</style>
