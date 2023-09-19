<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/interview"></my_menus>
  <el-table
    :data="interviews"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="position.name"
      label="职位"
      width="150">
      <template slot-scope="scope">
        <nuxt-link :to="{path: '/position/'+scope.row.position.id, params: {id: scope.row.position.id}}">{{ scope.row.position.name }}</nuxt-link>
      </template>
    </el-table-column>
    <el-table-column
      label="面试时间"
      width="250">
      <template slot-scope="scope">
        <p>{{ scope.row.date }} {{ scope.row.start_time }}-{{ scope.row.end_time }}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地点"
      width="150">
    </el-table-column>
    <el-table-column
      label="面试轮次"
      width="100">
      <template slot-scope="scope">
        <p>{{ scope.row.times }}/{{ scope.row.position.interview_times }}</p>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status==='邀请中'" @click="agreeInvite(scope.row)" type="text" size="small">接受</el-button>
        <el-button v-if="scope.row.status==='邀请中'" @click="disagreeInvite(scope.row)" type="text" size="small">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "interview",
  components: {
    menus,
    my_menus
  },
  data() {
    return {
      interviews: [
        {
          id: 0,
          position: {
            id: 0,
            name: '',
            interview_times: 0,
          },
          date: '',
          start_time: '',
          end_time: '',
          address: '',
          leave_message: '',
          contact: '',
          times: 0,
          status: '',
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
    this.$axios.get("interview/").then(rep => {
      switch (rep.status) {
        case 200:
          this.interviews = rep.data.results
          break
      }
    })
  },
  methods: {
    agreeInvite(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("interview/"+row.id+"/", {
        status: "已接受面试"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("已接受面试")
            this.$set(this.interviews, this.interviews.indexOf(this.interviews.filter(v => v.id===row.id)[0]), rep.data)
            break
        }
      })
    },
    disagreeInvite(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("interview/"+row.id+"/", {
        status: "已拒绝面试"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("已拒绝面试")
            this.$set(this.interviews, this.interviews.indexOf(this.interviews.filter(v => v.id===row.id)[0]), rep.data)
            break
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
