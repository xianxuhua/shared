<template>
<div>
  <menus active-index="/my_enterprise/lecture"></menus>
  <el-button @click="dialogCreateLectureVisible = true" style="float: right" size="small" type="success">新建</el-button>

  <div style="margin-left: 50px">
  <!--            所有职位-->
    <el-table
      :data="lectures"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="school"
        label="举办学校"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地点"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="举办日期"
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
          <el-button type="text" size="small" @click="changeRow(scope.row)" >编辑</el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.row)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑宣讲会" :visible.sync="dialogChangeLectureVisible" :fullscreen="true">
      <el-input v-model="current_lecture.school" style="margin-bottom: 10px" placeholder="举办学校"></el-input>
      <el-input v-model="current_lecture.address" style="margin-bottom: 10px" placeholder="地点"></el-input>
      <el-date-picker
        v-model="current_lecture.date"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
      <el-time-select
        placeholder="开始时间"
        v-model="current_lecture.start_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="current_lecture.end_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }">
      </el-time-select>
      <el-input v-model="current_lecture.desc" style="margin: 10px 0" :rows="5" type="textarea" placeholder="简介"></el-input>
      <div style="float:right;">
        <el-button @click="dialogChangeLectureVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitChangeLectureForm">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="新建宣讲会" :visible.sync="dialogCreateLectureVisible" :fullscreen="true">
      <el-input v-model="current_lecture.school" style="margin-bottom: 10px" placeholder="举办学校"></el-input>
      <el-input v-model="current_lecture.address" style="margin-bottom: 10px" placeholder="地点"></el-input>
      <el-date-picker
        v-model="current_lecture.date"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
      <el-time-select
        placeholder="开始时间"
        v-model="current_lecture.start_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="current_lecture.end_time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }">
      </el-time-select>
      <el-input v-model="current_lecture.desc" style="margin: 10px 0" :rows="5" type="textarea" placeholder="简介"></el-input>
      <div style="float:right;">
        <el-button @click="dialogCreateLectureVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitCreateLectureForm">确 定</el-button>
      </div>
    </el-dialog>
</div>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
export default {
  name: "lecture",
  components: {
    menus
  },
  data() {
    return {
      dialogCreateLectureVisible: false,
      dialogChangeLectureVisible: false,
      lectures: [
        {
          id: 0,
          start_time: '',
          end_time: '',
          school: '',
          address: '',
          desc: '',
          date: '',
        }
      ],
      current_lecture: {
        id: 0,
        start_time: '',
        end_time: '',
        school: '',
        address: '',
        desc: '',
        date: '',
        fair: ''
      },
      fairs: [
        {
          id: 0,
          school: ''
        }
      ]
    }
  },
  created() {
    this.$axios.get("lecture/?enterprise="+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          console.log(rep.data)
          this.lectures = rep.data.results
          break
      }
    })
    this.$axios.get("fair/").then(rep => {
      switch (rep.status) {
        case 200:
          this.fairs = rep.data.results
          break
      }
    })
  },
  methods: {
    changeRow(row) {
      this.$axios.get("lecture/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_lecture = rep.data
            this.dialogChangeLectureVisible = true
            break
        }
      })
    },
    deleteRow(row) {
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
        this.$axios.delete("lecture/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$notify.success('删除成功!')
              this.$delete(this.lectures, this.lectures.indexOf(this.lectures.filter(v => v.id===row.id)[0]))
              break
          }
        })
      }).catch(() => {
      })
    },
    submitChangeLectureForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("lecture/"+this.current_lecture.id+"/", {
        school: this.current_lecture.school,
        address: this.current_lecture.address,
        date: this.current_lecture.date,
        start_time: this.current_lecture.start_time,
        end_time: this.current_lecture.end_time,
        desc: this.current_lecture.desc,
        enterprise: this.$store.state.user.enterprise_id,
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("更新成功")
            this.dialogChangeLectureVisible = false
            this.$set(this.lectures, this.lectures.indexOf(this.lectures.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    submitCreateLectureForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')
      this.$axios.post("lecture/", {
        school: this.current_lecture.school,
        address: this.current_lecture.address,
        date: this.current_lecture.date,
        start_time: this.current_lecture.start_time,
        end_time: this.current_lecture.end_time,
        desc: this.current_lecture.desc,
        enterprise: this.$store.state.user.enterprise_id,
        fair: this.current_lecture.fair
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("创建成功")
            this.lectures.unshift(rep.data)
            this.dialogCreateLectureVisible = false
            break
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
