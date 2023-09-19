<template>
<div>
  <menus active-index="/my_enterprise/resume"></menus>
  <el-table
      :data="resumes"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="position.name"
        label="职位"
        :filters="positionNameFilters"
        :filter-method="filterPositionName"
        width="200">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        :filters="[{ text: '在线简历', value: '在线简历' },
        { text: '简历附件', value: '简历附件' }]"
        :filter-method="filterHandler"
        column-key="category"
        width="150">
      </el-table-column>
      <el-table-column
        label="简历"
        width="100">
        <template  slot-scope="scope">
          <p v-if="scope.row.resume.id"><a href="javascript:" @click="lookResume(scope.row.resume.id)">查看</a></p>
          <p v-else><a :href="scope.row.file_resume.file">查看</a></p>
        </template>
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="申请时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        :filters="[{ text: '待审核', value: '待审核' },
        { text: '审核通过', value: '审核通过' },
        { text: '已通过', value: '已通过' },
        { text: '面试中', value: '面试中' },
        { text: '邀请中', value: '邀请中' },
        { text: '未通过', value: '未通过' }]"
        :filter-method="filterHandler"
        column-key="status"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status==='待审核'" type="text" size="small" @click="agreeResume(scope.row.id)">通过</el-button>
          <el-button v-if="scope.row.status==='待审核'" type="text" size="small" @click="disAgreeResume(scope.row.id)">拒绝</el-button>
          <el-button type="text" size="small" @click="deleteResume(scope.row.id)">删除</el-button>
          <el-button v-if="scope.row.status==='审核通过'" type="text" size="small" @click="inviteInterview(scope.row)">邀请面试</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-dialog title="简历详情" :visible.sync="dialogLookResumeVisible">
    <p>姓名：{{ current_resume.name }}</p>
    <p>性别：{{ current_resume.gender }}</p>
    <p>年龄：{{ current_resume.age }}</p>
    <p>学历：{{ current_resume.edu }}</p>
    <p>学校：{{ current_resume.university }}</p>
    <p>专业：{{ current_resume.profession }}</p>
    <p>求职意向：{{ current_resume.want }}</p>
    <p>个人简介：{{ current_resume.desc }}</p>
    <p>联系方式：{{ current_resume.contact }}</p>
  </el-dialog>

  <el-dialog title="邀请面试" :visible.sync="dialogInviteInterviewVisible">
    <p>发送给：{{ current_invite_user.email }}</p>
    <el-date-picker
      v-model="current_interview.date"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期">
    </el-date-picker>
    <el-time-select
      placeholder="开始时间"
      v-model="current_interview.start_time"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }">
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="current_interview.end_time"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }">
    </el-time-select>
    <p>地点<el-input v-model="current_interview.address"></el-input></p>
    <p>留言<el-input v-model="current_interview.leave_message"></el-input></p>
    <p>联系方式<el-input v-model="current_interview.contact"></el-input></p>
    <div style="float:right;">
      <el-button @click="dialogCreateInterviewVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitInterviewForm">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
export default {
  name: "resume",
  components: {
    menus
  },
  data() {
    return {
      dialogLookResumeVisible: false,
      dialogInviteInterviewVisible: false,
      resumes: [
        {
          id: 0,
          position: {
            id: 0,
            name: ''
          },
          add_time: '',
          resume: {
            id: 0,
          },
          file_resume: {
            id: 0,
            file: ''
          },
          status: '',
          category: '',
          user: 0
        }
      ],
      current_resume: {
        id: 0,
        name: '',
        gender: '',
        age: 0,
        edu: '',
        university: '',
        profession: '',
        want: '',
        desc: '',
        contact: ''
      },
      positions: [
        {
          id: 0,
          name: ''
        }
      ],
      positionNameFilters: [
      ],
      current_invite_user: {
        id: 0,
        username: '',
        email: ''
      },
      current_interview: {
        receiver: 0,
        position: 0,
        date: '',
        start_time: '',
        end_time: '',
        address: '',
        leave_message: '',
        contact: '',
        resume_position: 0
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
    this.$axios.get("apply/").then(rep => {
      switch (rep.status) {
        case 200:
          this.resumes = rep.data.results
          for (let i = 0; i < this.resumes.length; i++) {
            if (this.resumes[i].file_resume === null) {
              this.resumes[i].file_resume = {
                id: 0,
                file: ''
              }
            } else {
              this.resumes[i].resume = {
                id: ''
              }
            }
          }
          break
      }
    })
    this.$axios.get("position/?enterprise="+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          this.positions = rep.data.results
          this.positions.forEach(v => {
            this.positionNameFilters.push({
              text: v.name,
              value: v.name
            })
          })
          break
      }
    })
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    filterPositionName(value, row, column) {
      return row.position.name === value;
    },
    lookResume(resume_id) {
      this.dialogLookResumeVisible = true
      this.$axios.get("resume/"+resume_id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_resume = rep.data
            break
        }
      })
    },
    agreeResume(record_id) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("apply/"+record_id+"/", {
        status: "审核通过"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.resumes[this.resumes.indexOf(this.resumes.filter(v => v.id===record_id)[0])].status = rep.data.status
            break
        }
      })
    },
    disAgreeResume(record_id) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("apply/"+record_id+"/", {
        status: "未通过"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.resumes[this.resumes.indexOf(this.resumes.filter(v => v.id===record_id)[0])].status = rep.data.status
            break
        }
      })
    },
    deleteResume(record_id) {
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
        this.$axios.delete("apply/"+record_id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.resumes, this.resumes.indexOf(this.resumes.filter(v => v.id===record_id)[0]))
              this.$notify.success('删除成功!')
              break
          }
        })
      }).catch(() => {
      })
    },
    inviteInterview(row) {
      this.dialogInviteInterviewVisible = true
      this.current_resume = row
     // 添加邀请职位
      this.current_interview.position = row.position.id
      this.current_interview.resume_position = row.id
     //  获取record.user.email
      this.$axios.get("user/"+row.user).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_invite_user = rep.data
            this.current_interview.receiver = rep.data.id
            break
        }
      })
    },
    submitInterviewForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.post("interview/", {
        receiver: this.current_interview.receiver,
        position: this.current_interview.position,
        date: this.current_interview.date,
        start_time: this.current_interview.start_time,
        end_time: this.current_interview.end_time,
        address: this.current_interview.address,
        leave_message: this.current_interview.leave_message,
        contact: this.current_interview.contact,
        resume_position: this.current_interview.resume_position
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("发送成功")
            this.dialogInviteInterviewVisible = false
            this.$axios.patch("apply/"+this.current_resume.id+"/", {
              status: "邀请中"
            }).then(rep => {
              switch (rep.status) {
                case 200:
                  // 这里不能$set rep.data，rep为interview的数据
                  this.resumes[this.resumes.indexOf(this.resumes.filter(v=>v.id===this.current_resume.id)[0])].status = "邀请中"
                  break
              }
            })
            break
        }
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
