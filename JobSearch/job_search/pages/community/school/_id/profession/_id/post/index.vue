<template>
  <div>
    <menus active-index="/community"></menus>
    <el-page-header @back="$router.back()"></el-page-header>
    <div>
      <div style="display:flex;justify-content: space-between;align-items: center;margin: 30px 0;">
        <p style="font-size: 20px">{{ profession.name }}</p>
        <div style="display:flex;align-items: center">
          <el-button type="primary" @click="dialogPostVisible = true">发帖</el-button>
          <el-input v-model="searchName" style="margin-left: 20px"></el-input>
          <el-button @click="searchPost">搜索</el-button>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-link type="primary" style="margin-right: 10px" @click="getPostByViewNum">最热</el-link>
        <el-link type="success" @click="getPostByAddTime">最新</el-link>
        <el-tab-pane label="全部" name="全部">
          <p style="height: 20px"></p>
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
          <page :total="count" :page-size="10" @pageChange="pageChange" v-if="count>10"></page>
        </el-tab-pane>
        <el-tab-pane label="职位推荐" name="职位推荐">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
          <page :total="count" :page-size="10" @pageChange="pageChange" v-if="count>10"></page>
        </el-tab-pane>
        <el-tab-pane label="面试经验" name="面试经验">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
          <page :total="count" :page-size="10" @pageChange="pageChange" v-if="count>10"></page>
        </el-tab-pane>
        <el-tab-pane label="问题求助" name="问题求助">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
          <page :total="count" :page-size="10" @pageChange="pageChange" v-if="count>10"></page>
        </el-tab-pane>
      </el-tabs>
    </div>
    <to_top></to_top>

    <el-dialog title="发帖" :visible.sync="dialogPostVisible" :fullscreen="true">
      <el-form  ref="postForm" :model="postForm" label-width="80px" :rules="postFormRules">
        <el-form-item label="标题" prop="title">
          <el-input v-model="postForm.title"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="category">
          <el-select v-model="postForm.category" placeholder="请选择">
            <el-option
              v-for="(item, index) in ['职位推荐', '面试经验', '问题求助']"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" :rows="10" v-model="postForm.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPostVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitPostForm('postForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import menus from "@/components/menus";
import post from "@/components/post";
import page from "@/components/page";
import to_top from "@/components/to_top";
export default {
  name: "index",
  components: {
    menus,
    post,
    page,
    to_top
  },
  data() {
    return {
      activeName: '全部',
      searchName: '',
      dialogPostVisible: false,
      count: 0,
      profession: {
        id: 0,
        name: '',
        school: 0,
      },
      posts: [
        {
          id: 0,
          title: '',
          add_time: ''
        }
      ],
      postForm: {
        title: '',
        category: '',
        content: ''
      },
      postFormRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
        ],
        category: [
          { required: true, message: '请选择分类', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' },
        ]
      },
      postUrl: 'post/?content_type='+this.content_type.profession+"&object_id="+this.$route.params.id,
      post_category: '',
      current_page: 1,
      post_order: '-view_num'
    }
  },
  created() {
    this.$axios.get("profession/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.profession = rep.data
          break
      }
    })
    this.reRequestPost()
  },
  methods: {
    reRequestPost() {
      this.postUrl = `post/?content_type=${this.content_type.profession}&object_id=${this.$route.params.id}&search=${this.searchName}&category=${this.post_category}&page=${this.current_page}&ordering=${this.post_order}`
      this.$axios.get(this.postUrl).then(rep => {
        switch (rep.status) {
          case 200:
            this.posts = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    },
    handleClick() {
      if (this.activeName === "全部") {
        this.post_category = ''
        this.current_page = 1
        this.reRequestPost()
      } else {
        this.post_category = this.activeName
        this.current_page = 1
        this.reRequestPost()
      }
    },
    searchPost() {
      this.current_page = 1
      this.reRequestPost()
    },
    submitPostForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName].validate((valid) => {
        this.dialogPostVisible = false
        this.$axios.post("post/", {
          title: this.postForm.title,
          content: this.postForm.content,
          content_type: this.content_type.profession,
          object_id: this.profession.id,
          category: this.postForm.category
        }).then(rep => {
          switch (rep.status) {
            case 201:
              this.$notify.success("创建成功")
              this.posts.unshift(rep.data)
              break
          }
        })
      })
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.reRequestPost()
    },
    getPostByAddTime() {
      this.post_order = '-add_time'
      this.reRequestPost()
    },
    getPostByViewNum() {
      this.post_order = '-view_num'
      this.reRequestPost()
    }
  }
}
</script>

<style scoped>

</style>
