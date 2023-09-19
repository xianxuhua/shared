<template>
<div>
  <menus active-index="/admin/enterprise"></menus>
    <el-table
      :data="enterprise_registers"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="user.email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="license"
        label="营业执照"
        width="200">
        <template slot-scope="scope">
          <a :href="scope.row.license" target="_blank">查看</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        :filters="[{ text: '待审核', value: '待审核' },
        { text: '已通过', value: '已通过' },
         { text: '未通过', value: '未通过' },]"
        :filter-method="filterHandler"
        column-key="status"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==='待处理'" @click="agreeLicense(scope.row)" type="text" size="small">通过</el-button>
          <el-button v-if="scope.row.status==='待处理'" @click="disagreeLicense(scope.row)" type="text" size="small">拒绝</el-button>
          <el-button @click="deleteLicense(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>

</template>

<script>
import menus from "../../components/admin/menus";
export default {
  name: "enterprise",
  components: {
    menus
  },
  data() {
    return {
      enterprise_registers: [
        {
          id: 0,
          license: '',
          status: '',
          user: {
            id: 0,
            email: '',
            username: ''
          }
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
    this.$axios.get("enterprise_register").then(rep => {
      switch (rep.status) {
        case 200:
          this.enterprise_registers = rep.data.results
          break
      }
    })
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    agreeLicense(row) {
      this.$axios.patch("enterprise_register/"+row.id+"/", {
        status: '已通过'
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.enterprise_registers[this.enterprise_registers.indexOf(this.enterprise_registers.filter(v => v.id===row.id)[0])].status = rep.data.status
        }
      })
    },
    disagreeLicense(row) {
      this.$axios.patch("enterprise_register/"+row.id+"/", {
        status: '未通过'
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.enterprise_registers[this.enterprise_registers.indexOf(this.enterprise_registers.filter(v => v.id===row.id)[0])].status = rep.data.status
        }
      })
    },
    deleteLicense(row) {
      this.$axios.delete("enterprise_register/"+row.id+"/").then(rep => {
        switch (rep.status) {
          case 204:
            this.$delete(this.enterprise_registers, this.enterprise_registers.indexOf(this.enterprise_registers.filter(v => v.id===row.id)[0]))
            this.$notify.success("删除成功")
            break
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
