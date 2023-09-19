<template>
<div>
  <menus active-index="/my_enterprise/interview"></menus>
  <el-table
      :data="interviews"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="position.name"
        label="职位"
        width="120">
      </el-table-column>
      <el-table-column
        prop="receiver.email"
        label="求职者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="面试日期"
        width="100">
      </el-table-column>
     <el-table-column
        prop="start_time"
        label="面试时间"
        width="100">
      </el-table-column>
     <el-table-column
        prop="address"
        label="面试地点"
        width="150">
      </el-table-column>
      <el-table-column
        prop="times"
        label="轮次"
        width="50">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        :filters="[{ text: '待面试', value: '待面试' },
          { text: '已通过', value: '已通过' },
          { text: '未通过', value: '未通过' },]"
        :filter-method="filterHandler"
        column-key="status"
        width="80">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="lookRow(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="changeRow(scope.row)" >编辑</el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.row)" >删除</el-button>
          <el-button v-if="scope.row.status==='待面试'||scope.row.status==='已接受面试'" type="text" size="small" @click="agreeInterview(scope.row)" >同意</el-button>
          <el-button v-if="scope.row.status==='待面试'||scope.row.status==='已接受面试'" type="text" size="small" @click="disagreeInterview(scope.row)" >拒绝</el-button>
          <el-button v-if="scope.row.status==='已通过' && scope.row.times < scope.row.position.interview_times " type="text" size="small" @click="continueInvite(scope.row)" >继续邀请</el-button>
          <el-button v-if="scope.row.status==='已通过' && scope.row.times === scope.row.position.interview_times " type="text" size="small" @click="giveOffer(scope.row)" >发放offer</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-dialog title="面试邀请" :visible.sync="dialogLookInterviewVisible">
    <p>职位：{{ current_interview.position.name }}</p>
    <p>求职者：{{ current_interview.receiver.email }}</p>
    <p>日期：{{ current_interview.date }}</p>
    <p>开始时间：{{ current_interview.start_time }}</p>
    <p>地点：{{ current_interview.address }}</p>
    <p>联系方式：{{ current_interview.contact }}</p>
    <p>留言：{{ current_interview.leave_message }}</p>
    <p>轮次：{{ current_interview.times }}/{{ current_interview.position.interview_times }}</p>
    <p>状态：{{ current_interview.status }}</p>
  </el-dialog>
  <el-dialog title="修改面试邀请" :visible.sync="dialogChangeInterviewVisible" :fullscreen="true">
    <p>职位：{{ current_interview.position.name }}</p>
    <p>求职者：{{ current_interview.receiver.email }}</p>
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
    <p style="margin: 10px 0">地点<el-input v-model="current_interview.address"></el-input></p>
    <p>联系方式<el-input v-model="current_interview.contact"></el-input></p>
    <p>留言<el-input type="textarea" :rows="4" v-model="current_interview.leave_message"></el-input></p>
    <div style="float:right;">
      <el-button @click="dialogChangeInterviewVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUpdateInterviewForm">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="面试邀请" :visible.sync="dialogContinueInterviewVisible">
    <p>职位：{{ current_interview.position.name }}</p>
    <p>求职者：{{ current_interview.receiver.email }}</p>
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
    <p style="margin: 10px 0">地点<el-input v-model="current_interview.address"></el-input></p>
    <p>联系方式<el-input v-model="current_interview.contact"></el-input></p>
    <p>留言<el-input type="textarea" :rows="4" v-model="current_interview.leave_message"></el-input></p>
    <div style="float:right;">
      <el-button @click="dialogContinueInterviewVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitContinueInvite">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="发放offer" :visible.sync="dialogOfferVisible">
    <p>求职者：{{ current_interview.receiver.email }}</p>
    <p>职位：{{ current_interview.position.name }}</p>
    <span>录用通知文件：</span>
    <el-upload
      ref="upload"
      :auto-upload="false"
      :limit="1"
      accept='.docx,.doc'
      action=""
      :on-change="beforeUploadOfferFile">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div style="float:right;">
      <el-button @click="dialogContinueInterviewVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitOfferForm">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";

export default {
  name: "interview",
  components: {
    menus
  },
  data() {
    return {
      dialogLookInterviewVisible: false,
      dialogChangeInterviewVisible: false,
      dialogContinueInterviewVisible: false,
      dialogOfferVisible: false,
      interviews: [
        {
          id: 0,
          receiver: {
            id: 0,
            email: ''
          },
          date: '',
          start_time: '',
          address: '',
          leave_message: '',
          add_time: '',
          times: 0,
          status: '',
          contact: '',
          position: {
            id: 0,
            name: '',
            interview_times: 0
          }
        }
      ],
      current_interview: {
        id: 0,
        receiver: {
          id: 0,
          email: ''
        },
        date: '',
        start_time: '',
        address: '',
        leave_message: '',
        times: 0,
        status: '',
        contact: '',
        position: {
          id: 0,
          name: '',
          interview_times: 0
        }
      },
      offer: {
        file: ''
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
    this.$axios.get("interview/").then(rep => {
      switch (rep.status) {
        case 200:
          this.interviews = rep.data.results
          break
      }
    })
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    lookRow(row) {
      this.$axios.get("interview/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_interview = rep.data
            this.dialogLookInterviewVisible = true
            break
        }
      })
    },
    changeRow(row) {
      this.$axios.get("interview/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_interview = rep.data
            this.dialogChangeInterviewVisible = true
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
        this.$axios.delete("interview/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.interviews, this.interviews.indexOf(this.interviews.filter(v => v.id===row.id)[0]))
              this.$notify.success('删除成功!')
              break
          }
        })
      }).catch(() => {
      })
    },
    submitUpdateInterviewForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("interview/"+this.current_interview.id+"/", {
        date: this.current_interview.date,
        start_time: this.current_interview.start_time,
        address: this.current_interview.address,
        leave_message: this.current_interview.leave_message,
        contact: this.current_interview.contact
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("更新成功")
            this.dialogChangeInterviewVisible = false
            this.$set(this.interviews, this.interviews.indexOf(this.interviews.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    agreeInterview(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("interview/"+row.id+"/", {
        status: "已通过"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.interviews[this.interviews.indexOf(this.interviews.filter(v => v.id===row.id)[0])].status = rep.data.status
            break
        }
      })
    },
    disagreeInterview(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("interview/"+row.id+"/", {
        status: "未通过"
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("修改成功")
            this.interviews[this.interviews.indexOf(this.interviews.filter(v => v.id===row.id)[0])].status = rep.data.status
            break
        }
      })
    },
    continueInvite(row) {
      this.$axios.get("interview/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.dialogContinueInterviewVisible = true
            this.current_interview = rep.data
        }
      })
    },
    submitContinueInvite() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.current_interview.times += 1
      this.$axios.patch("interview/"+this.current_interview.id+"/", {
        times: this.current_interview.times,
        status: "邀请中",
        date: this.current_interview.date,
        start_time: this.current_interview.start_time,
        address: this.current_interview.address,
        leave_message: this.current_interview.leave_message,
        contact: this.current_interview.contact,
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_interview = rep.data
            this.dialogContinueInterviewVisible = false
            this.$notify.success("发送成功")
            this.$set(this.interviews, this.interviews.indexOf(this.interviews.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    giveOffer(row) {
      this.dialogOfferVisible = true
      this.$axios.get("interview/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_interview = rep.data
        }
      })
    },
    submitOfferForm() {
      const formData = new FormData()
      formData.append("file", this.offer.file)
      formData.append("receiver", this.current_interview.receiver.id)
      formData.append("position", this.current_interview.position.id)
      this.$axios.post("offer/", formData).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("发送成功")
            this.dialogOfferVisible = false
            this.interviews[this.interviews.indexOf(this.interviews.filter(v => v.id===this.current_interview.id)[0])].status = "已发放offer"
            break
        }
      })
    },
    beforeUploadOfferFile(file) {
      this.offer.file = file.raw
    },
  }
}
</script>

<style scoped>
.el-dialog p {
  margin-bottom: 10px;
}
</style>
