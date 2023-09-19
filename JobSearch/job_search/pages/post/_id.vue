<template>
  <div>
    <menus active-index="/community"></menus>
    <el-page-header @back="$router.back()"></el-page-header>
    <el-row style="margin: 20px 0">
      <el-col :span="3">
        <div style="display: flex;flex-direction: column;align-items: center">
          <p>楼主</p>
          <el-image v-if="item.user.head_img" :src="item.user.head_img" style="width: 100px;height: 100px"></el-image>
          <el-image v-else src="/gopher04.png" style="width: 100px;height: 100px"></el-image>
          <p style="margin-top: 10px">{{ item.user.username }}</p>
        </div>
      </el-col>
      <el-col :span="20" :offset="1">
        <div>
          <div style="display: flex;justify-content: space-between">
            <p style="font-size: 23px">[{{item.category}}]  {{ item.title }}</p>
            <p style="margin: 10px 0">发表于：{{ item.add_time }}</p>
          </div>
          <pre style="margin: 20px 0">{{ item.content }}</pre>
          <div>
            <i style="font-size: 30px;" v-if="is_like" class="el-icon-star-on" @click="cancelLike"></i>
            <i style="font-size: 30px" v-else class="el-icon-star-off" @click="like"></i>
            <span style="font-size: 20px">{{ item.like_num }}</span>
          </div>
          <div style="margin-top: 10px">
            <i class="el-icon-view"></i>
            <span style="margin-right: 10px">{{ item.view_num }}</span>
            <i class="el-icon-chat-round"></i>
            <span style="margin-right: 20px">{{ item.comment_num }}</span>
          </div>
          <el-button size="mini" style="margin-top: 20px" @click="isShowTopReplyInput = true">评论</el-button>
          <div v-if="isShowTopReplyInput">
            <el-form :model="commentForm" :rules="commentFormRules" ref="commentForm">
              <el-form-item prop="content">
                <el-input type="textarea" v-model="commentForm.content" style="margin: 10px 0"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitCommentForm('commentForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>

    </el-row>
    <el-divider></el-divider>

<!--    comment list-->
    <div v-for="(comment, index) in comments" :key="comment.id">
      <el-row style="margin: 20px 0">
        <el-col :span="3">
          <div style="display: flex;flex-direction: column;align-items: center">
            <p v-if="comment.user.id=item.user.id">楼主</p>
            <el-image v-if="comment.user.head_img" :src="comment.user.head_img" style="width: 100px;height: 100px"></el-image>
            <el-image v-else src="/gopher04.png" style="width: 100px;height: 100px"></el-image>
            <p style="margin-top: 10px">{{ comment.user.username }}</p>
          </div>
        </el-col>
        <el-col :span="20" :offset="1">
          <div style="margin-bottom: 20px">
            <div style="display: flex;justify-content: space-between">
              <p v-if="comment.reply_to">回复给：{{ comment.reply_to.username }}</p>
              <p v-else></p>
              <p style="margin-bottom: 10px">回复于：{{ comment.add_time }}</p>
            </div>
            <pre style="margin: 5px 0 20px 0">{{ comment.content }}</pre>
            <div v-if="comment.parent" style="text-indent: 2em;padding: 15px 0;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
              <p style="font-size: 10px;color: darkgray">{{ comment.parent.user.username }}</p>
              <p style="font-size: 10px;color: darkgray">{{ comment.parent.content }}</p>
            </div>
          </div>
          <div>
            <el-button size="mini" style="margin-top: 10px" @click="showReplyInput(comment)">回复</el-button>
            <div v-if="current_parent_id===comment.id">
              <el-form :model="replyForm" :rules="replyFormRules" ref="replyForm">
                <el-form-item prop="content">
                  <el-input v-model="replyForm.content" type="textarea" :rows="4" style="margin: 10px 0"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="submitReplyForm('replyForm')">提交</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
    <page @pageChange="pageChange" :total="comments_count" :page-size="10"></page>
    <to_top></to_top>
  </div>
</template>

<script>
import menus from "@/components/menus";
import page from "@/components/page";
import to_top from "@/components/to_top";
export default {
  name: "id",
  components: {
    menus,
    page,
    to_top
  },
  data() {
    return {
      isShowTopReplyInput: false,
      isShowReplyInput: false,
      is_like: false,
      like_record_id: 0,

      item: {
        id: 0,
        title: '',
        content: '',
        add_time: '',
        category: '',
        like_num: 0,
        view_num: 0,
        comment_num: 0,
        user: {
          id: 0,
          username: '',
          head_img: ''
        }
      },
      comments: [
        {
          user: {
            id: 0,
            username: '',
            head_img: ''
          },
          id: 0,
          content: '',
          add_time: '',
          parent: {
            id: 0,
            content: '',
            user: {
              id: 0,
              username: '',
              head_img: ''
            }
          },
          reply_to: null,
          root: null
        }
      ],
      comments_count: 0,
      current_reply_id: null, // 当前点击回复给哪条评论，用于只显示一条回复框
      current_root_id: null,
      current_parent_id: null,
      commentForm: {
        content: ''
      },
      commentFormRules: {
        content: [
          {required: true, message: '请输入内容', trigger: 'blur' }
        ]
      },
      replyForm: {
        content: ''
      },
      replyFormRules: {
        content: [
          {required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (token) {
      this.$axios.setToken(token, 'Bearer')
    }
    this.$axios.get("post/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.item = rep.data
          if (rep.data.like) {  // 是否点赞
            this.like_record_id = rep.data.like.id
            this.is_like = true
          }
          break
      }
    })
    this.$axios.get("comment/?content_type="+this.content_type.post+"&object_id="+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.comments = rep.data.results
          this.comments_count = rep.data.count
          break
      }
    })
  },
  methods: {
    like() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.is_like = true
      this.item.like_num += 1
      this.$axios.patch("post/"+this.item.id+"/", {
        like_num: this.item.like_num
      }).then(rep => {
      })
      this.$axios.post("post_like/", {
        post: this.item.id,
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.like_record_id = rep.data.id
            this.$notify.success("已点赞")
            break
        }
      })
    },
    cancelLike() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.is_like = false
      this.item.like_num -= 1
      this.$axios.patch("post/"+this.item.id+"/", {
        like_num: this.item.like_num
      }).then(rep => {
      })
      this.$axios.delete("post_like/"+this.like_record_id+"/").then(rep => {
        switch (rep.status) {
          case 204:
            this.$notify.success("取消点赞")
            break
        }
      })
    },
    pageChange(current_page) {
      this.$axios.get("comment/?content_type="+this.content_type.post+"&object_id="+this.$route.params.id+"&page="+current_page).then(rep => {
        switch (rep.status) {
          case 200:
            this.comments = rep.data.results
            this.comments_count = rep.data.count
            break
        }
      })
    },
    showReplyInput(comment) {
      this.current_reply_id = comment.user.id
      this.current_parent_id = comment.id
      if (comment.root) {
        this.current_root_id = comment.root
      } else {
        this.current_root_id = comment.id
      }
      this.isShowReplyInput = false
    },
    submitReplyForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName][0].validate((valid) => {
        if (valid) {
          this.$axios.post("comment/", {
            content: this.replyForm.content,
            root: this.current_root_id,
            parent: this.current_parent_id,
            content_type: this.content_type.post,
            object_id: this.item.id,
            reply_to: this.current_reply_id
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.comments.push(rep.data)
                this.$notify.success("已回复")
                this.isShowReplyInput = false
                this.isShowTopReplyInput = false
                this.replyForm.content = ''

                this.item.comment_num += 1
                this.$axios.patch("post/"+this.item.id+"/", {
                  comment_num: this.item.comment_num
                }).then(rep => {
                  console.log(rep.data)
                })
                break
            }
          })
        } else {
          return false
        }
      })
    },
    submitCommentForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("comment/", {
            content: this.commentForm.content,
            content_type: this.content_type.post,
            object_id: this.item.id,
            reply_to: null,
            parent: null,
            root: null
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.$notify.success("已评论")
                this.comments.unshift(rep.data)
                this.commentForm.content = ''
                this.isShowTopReplyInput = false

                this.item.comment_num += 1
                this.$axios.patch("post/"+this.item.id+"/", {
                  comment_num: this.item.comment_num
                }).then(rep => {
                  console.log(rep.data)
                })
                break
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
