<template>
  <div>
    <menus active-index="/community"></menus>
    <el-page-header @back="$router.back()"></el-page-header>

    <div>
      <div style="display: flex;margin-bottom: 20px">
        <el-image v-if="community_enterprise.head_img" :src="community_enterprise.head_img" style="width: 100px;height: 100px;border-radius: 50%;margin: 20px"></el-image>
        <el-image v-else src="/gopher04.png" style="width: 100px;height: 100px;border-radius: 50%;margin: 20px"></el-image>
        <div style="display: flex;flex-direction: column;justify-content: space-around">
          <p style="font-size: 20px;">{{ community_enterprise.name }}</p>
          <p>{{ community_enterprise.desc }}</p>
        </div>
      </div>
      <div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 20px">
          <p style="font-size: 20px">企业交流帖子：</p>
          <div>
            <el-button type="primary" @click="dialogPostVisible=true">发帖</el-button>
            <el-input v-model="searchName" style="width: 200px" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="searchPost">搜索</el-button>
          </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="全部">
            <el-link type="primary" style="margin-right: 10px">最热</el-link>
            <el-link type="success">最新</el-link>
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

    </div>

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
import page from "../../../../components/page";
import post from "../../../../components/post";
export default {
  name: "id",
  components: {
    menus,
    page,
    post
  },
  data() {
    return {
      dialogPostVisible: false,
      searchName: '',
      activeName: '全部',
      count: 0,
      community_enterprise: {
        name: '',
        head_img: '',
        desc: '',
      },
      posts: [
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
      postUrl: 'post/?content_type='+this.content_type.community_enterprise+"&object_id="+this.$route.params.id,
      post_category: '',
      current_page: 1,
      post_order: '-view_num'
    }
  },
  created() {
    this.$axios.get("community_enterprise/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.community_enterprise = rep.data
          break
      }
    })
    this.reRequestPost()
  },
  methods: {
    updatePostUrl() {
      this.postUrl = `post/?content_type=${this.content_type.community_enterprise}&object_id=${this.$route.params.id}&search=${this.searchName}&category=${this.post_category}&page=${this.current_page}&ordering=${this.post_order}`
    },
    reRequestPost() {
      this.$axios.get(this.postUrl).then(rep => {
        switch (rep.status) {
          case 200:
            this.posts = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    },
    searchPost() {
      this.current_page = 1
      this.updatePostUrl()
      this.reRequestPost()
    },
    handleClick() {
      if (this.activeName === "全部") {
        this.post_category = ''
        this.current_page = 1
        this.updatePostUrl()
        this.reRequestPost()
      } else {
        this.post_category = this.activeName
        this.current_page = 1
        this.updatePostUrl()
        this.reRequestPost()
      }
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.updatePostUrl()
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
          content_type: this.content_type.community_enterprise,
          object_id: this.community_enterprise.id,
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
  }
}
</script>

<style scoped>

</style>
