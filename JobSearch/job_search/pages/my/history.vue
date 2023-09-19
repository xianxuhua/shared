<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/history"></my_menus>
  <el-table
      :data="histories"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="obj.name"
        label="职位/宣讲会"
        :filters="[{ text: '职位', value: '职位' },
        { text: '宣讲会', value: '宣讲会' },]"
        :filter-method="filterHandler"
        column-key="content_type"
        width="300">
        <template slot-scope="scope">
          <nuxt-link v-if="scope.row.content_type===content_type.position" :to="{path: '/position/'+scope.row.obj.id, params: {id: scope.row.obj.id}}">{{ scope.row.obj.name }}</nuxt-link>
          <nuxt-link v-else :to="{path: '/lecture/'+scope.row.obj.id, params: {id: scope.row.obj.id}}">{{ scope.row.obj.name }}</nuxt-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="添加时间"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="deleteHistory(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "history",
  components: {
    menus,
    my_menus
  },
  data() {
    return {
      histories: [
        {
          id: 0,
          obj: {
            id: 0,
            name: ''
          },
          add_time: '',
          content_type: 0
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
    this.$axios.get("history/").then(rep => {
      switch (rep.status) {
        case 200:
          this.histories = rep.data.results
          console.log(this.histories)
          break
      }
    })
  },
  methods: {
    filterHandler(value, row, column) {
      return row.content_type === value;
    },
    deleteHistory(row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("history/"+row.id).then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.histories, this.histories.indexOf(this.histories.filter(v => v.id===row.id)[0]))
              this.$notify.success("取消关注")
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
