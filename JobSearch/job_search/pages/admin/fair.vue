<template>
<div>
  <menus active-index="/admin/fair"></menus>
  <el-button type="success" style="float: right" size="small" @click="dialogCreateFairVisible=true">新建</el-button>
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
      prop="address"
      label="地点"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="150">
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
        <el-button @click="lookFair(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="changeFair(scope.row)" >编辑</el-button>
        <el-button type="text" size="small" @click="deleteFair(scope.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="招聘会信息" :visible.sync="dialogLookFairVisible">
    <p>举办学校：{{ current_fair.school }}</p>
    <p>地点：{{ current_fair.address }}</p>
    <p>日期：{{ current_fair.date }}</p>
    <p>开始时间：{{ current_fair.start_time }}</p>
    <p>结束时间：{{ current_fair.end_time }}</p>
    <p>简介：{{ current_fair.desc }}</p>

  </el-dialog>

    <el-dialog title="编辑招聘会" :visible.sync="dialogChangeFairVisible" :fullscreen="true">
      <el-input v-model="current_fair.school" style="margin-bottom: 10px" placeholder="举办学校"></el-input>
      <el-input v-model="current_fair.address" style="margin-bottom: 10px" placeholder="地点"></el-input>
      <el-date-picker
        v-model="current_fair.date"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
      <el-time-select
        placeholder="开始时间"
        v-model="current_fair.start_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="current_fair.end_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }">
      </el-time-select>
      <el-input v-model="current_fair.desc" style="margin: 10px 0" :rows="5" type="textarea" placeholder="简介"></el-input>
      <div style="float:right;">
        <el-button @click="dialogChangeFairVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitChangeFairForm">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="新建招聘会" :visible.sync="dialogCreateFairVisible" :fullscreen="true">
      <el-input v-model="current_fair.school" style="margin-bottom: 10px" placeholder="举办学校"></el-input>
      <el-input v-model="current_fair.address" style="margin-bottom: 10px" placeholder="地点"></el-input>
      <el-date-picker
        v-model="current_fair.date"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
      <el-time-select
        placeholder="开始时间"
        v-model="current_fair.start_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="current_fair.end_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }">
      </el-time-select>
      <el-input v-model="current_fair.desc" style="margin: 10px 0" :rows="5" type="textarea" placeholder="简介"></el-input>
      <div style="float:right;">
        <el-button @click="dialogCreateFairVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitFairForm">确 定</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
import menus from "../../components/admin/menus";
export default {
  name: "fair",
  components: {
    menus
  },
  data() {
    return {
      dialogLookFairVisible: false,
      dialogCreateFairVisible: false,
      dialogChangeFairVisible: false,
      fairs: [
        {
          id: 0,
          add_time: '',
          date: '',
          start_time: '',
          end_time: '',
          school: '',
          address: '',
          desc: ''
        }
      ],
      current_fair: {
        id: 0,
        add_time: '',
        date: '',
        start_time: '',
        end_time: '',
        school: '',
        address: '',
        desc: ''
      }
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (!token) {
      this.$notify.error("请先登录")
      return
    }

    this.$axios.setToken(token, 'Bearer')
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
    changeFair(row) {
      this.$axios.get("fair/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_fair = rep.data
            this.dialogChangeFairVisible = true
            break
        }
      })
    },
    deleteFair(row) {
      this.$confirm('是否取消关注?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("fair/"+row.id).then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.fairs, this.fairs.indexOf(this.fairs.filter(v => v.id===row.id)[0]))
              this.$notify.success("删除成功")
              break
          }
        })
      }).catch(() => {
      })
    },
    submitFairForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.post("fair/", {
        school: this.current_fair.school,
        address: this.current_fair.address,
        desc: this.current_fair.desc,
        date: this.current_fair.date,
        start_time: this.current_fair.start_time,
        end_time: this.current_fair.end_time
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("添加成功")
            this.dialogCreateFairVisible = false
            this.fairs.unshift(rep.data)
            break
        }
      })
    },
    submitChangeFairForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("fair/"+this.current_fair.id+"/", {
        school: this.current_fair.school,
        address: this.current_fair.address,
        desc: this.current_fair.desc,
        date: this.current_fair.date,
        start_time: this.current_fair.start_time,
        end_time: this.current_fair.end_time
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.dialogChangeFairVisible = false
            this.$set(this.fairs, this.fairs.indexOf(this.fairs.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
        console.log(rep.data)
      })
    }
  }
}
</script>

<style scoped>
.el-dialog p {
  margin-bottom: 10px;
}
</style>
