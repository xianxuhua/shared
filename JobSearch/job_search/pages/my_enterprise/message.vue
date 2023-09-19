<template>
<div>
  <menus active-index="/my_enterprise/message"></menus>
  <el-table
    :data="messages"
    ref="filterTable"
    style="width: 100%">
    <el-table-column
      prop="sender.email"
      label="发送者"
      width="200">
    </el-table-column>
    <el-table-column
      prop="position.name"
      label="职位"
      width="150">
      <template slot-scope="scope">
        <nuxt-link :to="{path: '/position/'+scope.row.position.id, params: {id: scope.row.position.id}}">{{ scope.row.position.name }}</nuxt-link>
      </template>
    </el-table-column>
    <el-table-column
      prop="add_time"
      label="添加时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="lookMessage(scope.row)" >查看</el-button>
        <el-button type="text" size="small" @click="deleteMessage(scope.row)" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="咨询内容" :visible.sync="dialogLookMessageVisible">
    <p>求职者：{{ current_message.sender.username }}</p>
    <p>咨询职位：{{ current_message.position.name }}</p>
    <pre>咨询内容：{{ current_message.content }}</pre>
    <el-button style="float: right" size="small" @click="IsShowReplyInput=true">回复</el-button>
    <div v-if="IsShowReplyInput">
      <el-input v-model="replyContent" type="textarea"></el-input>
      <el-button style="float: right" @click="submitReplyMessage">提交</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";

export default {
  name: "message",
  components: {
    menus
  },
  data() {
    return {
      dialogLookMessageVisible: false,
      IsShowReplyInput: false,
      replyContent: '',
      messages: [
        {
          id: 0,
          add_time: '',
          content: '',
          position: {
            id: 0,
            name: ''
          },
          receiver: {
            id: 0,
            email: ''
          },
          status: ''
        }
      ],
      current_message: {
        id: 0,
        add_time: '',
        content: '',
        position: {
          id: 0,
          name: ''
        },
        receiver: {
          id: 0,
          email: ''
        },
        sender: {
          id: 0,
          email: ''
        },
        status: ''
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
    this.$axios.get("consult/").then(rep => {
      switch (rep.status) {
        case 200:
          this.messages = rep.data.results
          break
      }
    })
  },
  methods: {
    lookMessage(row) {
      this.$axios.get("consult/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_message = rep.data
            this.dialogLookMessageVisible = true
            break
        }
      })
      this.$axios.patch("consult/"+row.id+"/", {
        status: '已读'
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$set(this.messages, this.messages.indexOf(this.messages.filter(v => v.id===row.id)[0]), rep.data)
            break
        }
      })
    },
    deleteMessage(row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("consult/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.messages, this.messages.indexOf(this.messages.filter(v => v.id===row.id)[0]))
              this.$notify.success("删除成功")
          }
        })
      }).catch(() => {
      })
    },
    submitReplyMessage() {
      this.$axios.post("consult/", {
        content: this.replyContent,
        parent: this.current_message.id,
        position: this.current_message.position.id,
        receiver: this.current_message.sender.id
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("已回复")
            this.dialogLookMessageVisible = false
            break
        }
      })
      this.$axios.patch("consult/"+this.current_message.id+"/", {
        status: '已回复'
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$set(this.messages, this.messages.indexOf(this.messages.filter(v => v.id===this.current_message.id)[0]), rep.data)
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
