<template>
<div>
  <menus active-index="/admin/user"></menus>
  <el-table
    :data="users"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="email"
      label="用户"
      width="300">
    </el-table-column>
    <el-table-column
      label="身份"
      width="200">
      <template slot-scope="scope">
        <p v-if="scope.row.is_enterprise">企业账号</p>
        <p v-else>求职者账号</p>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="deleteUser(scope.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import menus from "../../components/admin/menus";
export default {
  name: "user",
  components: {
    menus
  },
  data() {
    return {
      users: [
        {
          id: 0,
          email: '',
          username: ''
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
    this.$axios.get("user/").then(rep => {
      switch (rep.status) {
        case 200:
          this.users = rep.data.results
          break
      }
    })
  },
  methods: {
    deleteUser(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("user/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$notify.success("删除成功")
              this.$delete(this.users, this.users.indexOf(this.users.filter(v => v.id===row.id)[0]))
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
