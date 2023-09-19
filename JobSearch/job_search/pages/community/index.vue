<template>
  <div>
    <menus active-index="/community"></menus>
  <!--    学校、专业交流板块-->

  <el-tabs v-model="activeTabName" :active-name="activeTabName">
    <el-tab-pane label="不限" name="不限">
      <div style="display: flex;justify-content: space-between">
        <p></p>
        <el-button type="primary" @click="dialogPostVisible = true">发帖</el-button>
      </div>
      <el-tabs v-model="activePostTabName" @tab-click="handleClick">
        <el-link type="primary" style="margin-right: 10px" @click="getPostByViewNum">最热</el-link>
        <el-link type="success" @click="getPostByAddTime">最新</el-link>
        <el-tab-pane label="全部" name="全部">
          <p style="height: 20px"></p>
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="职位推荐" name="职位推荐">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="面试经验" name="面试经验">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="问题求助" name="问题求助">
          <el-row>
            <el-col :span="24" v-for="post in posts" :key="post.id">
              <post :post="post"></post>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="学校交流" name="学校交流">
      <div>
        <div style="display:flex;align-items: center;justify-content: space-between;margin-bottom: 20px">
          <p style="font-size: 20px;">所有学校</p>
          <div>
            <el-input v-model="searchName" style="width: 200px" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="searchSchool">搜索</el-button>
            <el-button @click="dialogNewSchoolVisible = true">新建</el-button>
          </div>

          <el-dialog title="新建学校交流区" :visible.sync="dialogNewSchoolVisible">
            <el-form :model="schoolForm" ref="schoolForm" :rules="schoolFormRules" label-width="60px">
              <el-form-item label="名称" prop="name">
                <el-input v-model="schoolForm.name"></el-input>
              </el-form-item>
              <el-form-item label="简介" prop="desc">
                <el-input type="textarea" v-model="schoolForm.desc"></el-input>
              </el-form-item>
              <el-form-item label="封面" prop="head_img">
                <el-upload
                  ref="upload"
                  :auto-upload="false"
                  :limit="1"
                  accept='.png,.jpg,.jpeg'
                  action=""
                  :on-change="beforeUpload">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogNewSchoolVisible = false">取 消</el-button>
              <el-button type="primary" @click="newSchool('schoolForm')">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="school in school_results" :key="school.id">
            <nuxt-link :to="{path: '/community/school/'+school.id+'/profession', params: {id: school.id}}">
              <school :school="school"></school>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
      <page :total="school_count" @pageChange="pageChange" :page-size="10" v-if="school_count>10"></page>

    </el-tab-pane>
    <el-tab-pane label="企业交流" name="企业交流">
      <div>
        <div style="display:flex;align-items: center;justify-content: space-between;margin-bottom: 20px">
          <p style="font-size: 20px;">所有企业</p>
          <div>
            <el-input v-model="searchEnterpriseName" style="width: 200px" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="searchEnterprise">搜索</el-button>
            <el-button @click="dialogNewEnterpriseVisible=true">新建</el-button>
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="community_enterprise in enterprise_results" :key="community_enterprise.id">
            <nuxt-link  :to="{path: '/community/enterprise/'+community_enterprise.id, params: {id: community_enterprise.id}}">
              <community_enterprise :community_enterprise="community_enterprise"></community_enterprise>
              <el-divider></el-divider>
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
      <page :total="enterprise_count" @pageChange="enterprisePageChange" :page-size="10" v-if="enterprise_count>10"></page>

      <el-dialog title="新建企业交流区" :visible.sync="dialogNewEnterpriseVisible">
        <el-form :model="enterpriseForm" ref="enterpriseForm" :rules="enterpriseFormRules" label-width="60px">
          <el-form-item label="名称" prop="name">
            <el-input v-model="enterpriseForm.name"></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="desc">
            <el-input type="textarea" v-model="enterpriseForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="封面" prop="head_img">
            <el-upload
              ref="upload"
              :auto-upload="false"
              :limit="1"
              accept='.png,.jpg,.jpeg'
              action=""
              :on-change="beforeUploadEnterprise">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogNewEnterpriseVisible = false">取 消</el-button>
          <el-button type="primary" @click="newEnterprise('enterpriseForm')">确 定</el-button>
        </div>
      </el-dialog>
    </el-tab-pane>
  </el-tabs>

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
import school from "@/components/school";
import community_enterprise from "@/components/community_enterprise";
import page from "@/components/page";
import post from "../../components/post";
export default {
  name: "index",
  components: {
    menus,
    school,
    page,
    community_enterprise,
    post
  },
  data() {
    return {
      dialogPostVisible: false,
      activePostTabName: '全部',
      activeTabName: '学校交流',
      searchName: '',
      dialogNewSchoolVisible: false,
      dialogNewEnterpriseVisible: false,
      schoolForm: {
        name: '',
        desc: '',
        head_img: ''
      },
      schoolFormRules: {
        name: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ]
      },
      enterpriseForm: {
        name: '',
        desc: '',
        head_img: ''
      },
      enterpriseFormRules: {
        name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ]
      },
      school_results: [],
      school_count: 0,
      enterprise_results: [],
      enterprise_count: 0,
      schoolUrl: 'school/',
      current_page: 1,
      enterpriseUrl: 'community_enterprise/',
      searchEnterpriseName: '',
      current_enterprise_page: 1,
      head_img_file: '',
      enterprise_head_img_file: '',
      posts: [
        {
          id: 0,
          add_time: "",
          category: "",
          title: "",
          content: "",
          like_num: 0,
          view_num: 0,
          comment_num: 0,
          user: 1,
        }
      ],
      post_category: '',
      post_order: '-view_num',
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
    }
  },
  created() {
    this.reRequestSchool()
    this.reRequestEnterprise()
    this.$axios.get("post/?object_id=0").then(rep => {
      switch (rep.status) {
        case 200:
          this.posts = rep.data.results
          break
      }
    })
  },
  methods: {
    getPostByViewNum() {
      this.post_order = '-view_num'
      this.reRequestPost()
    },
    getPostByAddTime() {
      this.post_order = '-add_time'
      this.reRequestPost()
    },
    handleClick() {
      if (this.activePostTabName === "全部") {
        this.post_category = ''
        this.reRequestPost()
      } else {
        this.post_category = this.activePostTabName
        this.reRequestPost()
      }
    },
    reRequestPost() {
      this.postUrl = `post/?object_id=0&category=${this.post_category}&ordering=${this.post_order}`
      this.$axios.get(this.postUrl).then(rep => {
        switch (rep.status) {
          case 200:
            this.posts = rep.data.results
            break
        }
      })
    },
    reRequestSchool() {
      this.schoolUrl = `school/?search=${this.searchName}&page=${this.current_page}`
      this.$axios.get(this.schoolUrl).then(rep=>{
        switch (rep.status) {
          case 200:
            this.school_results = rep.data.results
            this.school_count = rep.data.count
            break
        }
      })
    },
    reRequestEnterprise() {
      this.enterpriseUrl = `community_enterprise/?search=${this.searchEnterpriseName}&page=${this.current_enterprise_page}`
      this.$axios.get(this.enterpriseUrl).then(rep=>{
        switch (rep.status) {
          case 200:
            this.enterprise_results = rep.data.results
            this.enterprise_count = rep.data.count
            break
        }
      })
    },
    beforeUpload(file) {
      this.head_img_file = file.raw
    },
    newSchool(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')

      const formData = new FormData()
      formData.append("head_img", this.head_img_file)
      formData.append("desc", this.schoolForm.desc)
      formData.append("name", this.schoolForm.name)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("school/", formData).then(rep => {
            switch (rep.status) {
              case 201:
                this.school_results.push(rep.data)
                this.$notify.success("创建成功")
                this.dialogNewSchoolVisible = false
                break
            }
          })
        } else {
          return false
        }
      })
    },
    searchSchool() {
      this.current_page = 1
      this.reRequestSchool()
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.reRequestSchool()
    },
    searchEnterprise() {
      this.current_enterprise_page = 1
      this.reRequestEnterprise()
    },
    enterprisePageChange(current_page) {
      this.current_enterprise_page = current_page
      this.reRequestEnterprise()
    },
    beforeUploadEnterprise(file) {
      this.enterprise_head_img_file = file.raw
    },
    newEnterprise(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')

      const formData = new FormData()
      formData.append("head_img", this.enterprise_head_img_file)
      formData.append("desc", this.enterpriseForm.desc)
      formData.append("name", this.enterpriseForm.name)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("community_enterprise/", formData).then(rep => {
            switch (rep.status) {
              case 201:
                this.enterprise_results.push(rep.data)
                this.$notify.success("创建成功")
                this.dialogNewEnterpriseVisible = false
                break
            }
          })
        } else {
          return false
        }
      })
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
          content_type: null,
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
