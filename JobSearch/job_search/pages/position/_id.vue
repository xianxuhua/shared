<template>
  <div class="position_detail">
    <menus active-index="/"></menus>
    <el-page-header @back="$router.back()"></el-page-header>


    <div style="height: 180px;display: flex;justify-content: space-between">
      <div class="left" style="display: flex;flex-direction: column;justify-content: space-around">
        <p style="font-size: 30px">{{ item.name }}</p>
        <div style="display: flex;">
          <el-tag style="margin-right: 10px">{{ item.category }}</el-tag>
          <el-tag style="margin-right: 10px">{{ item.edu_require }}</el-tag>
          <el-tag style="margin-right: 10px">{{ item.min_work_year|min_work_year }}</el-tag>
          <el-tag style="margin-right: 10px">{{ item.min_salary/1000 }}k-{{ item.max_salary/1000 }}k</el-tag>
        </div>
        <p>发布于 {{ item.add_time }}</p>
      </div>

      <div class="right" style="margin-top: 20px">
        <el-button v-if="isFollowPosition" @click="followPosition(item.id)">取消关注</el-button>
        <el-button v-else @click="followPosition(item.id)">关注</el-button>

        <el-button type="primary" @click="submitOnlineResume">投递在线简历</el-button>
        <el-button type="primary" @click="dialogResumeFileVisible = true">投递附件简历</el-button>

        <el-button type="primary" @click="dialogConsultVisible = true">职位咨询</el-button>
        <el-dialog title="投递在线简历" center :visible.sync="dialogResumeFileVisible">
          <el-upload
            ref="upload"
            drag
            style="text-align: center"
            :auto-upload="false"
            :limit="1"
            accept='.doc,.docx'
            action=""
            :http-request="uploadFileResume"
            >
            <i class="el-icon-upload"></i>
            <div>只能上传doc/docx文件，<em>点击上传</em></div>
            <div slot="tip"></div>
          </el-upload>
          <el-button style="text-align: center" slot="footer" @click="submitFileResume">提交</el-button>
        </el-dialog>
        <el-dialog title="职位咨询" center :visible.sync="dialogConsultVisible">
          <el-input type="textarea" :rows="6" resize="none" v-model="consultContent" maxlength=200 show-word-limit></el-input>
          <el-button @click="submitConsult" style="text-align: center" slot="footer">提交</el-button>
        </el-dialog>
      </div>
    </div>

    <el-divider></el-divider>
    <el-row>
      <el-col :span="18" style="margin-bottom: 30px">
        <p>职位描述：</p>
        <ul style="margin-top:10px">
          <li v-for="(val, index) in item.desc.split('\n')" :key="index">{{ index+1 }}.{{ val }}</li>
        </ul>
        <p style="height: 20px"></p>
        <p>任职要求：</p>
        <ul style="margin-top:10px">
          <li v-for="(val, index) in item.skill_require.split('\n')" :key="index">{{ index+1 }}.{{ val }}</li>
        </ul>
        <p style="height: 20px"></p>
        <p>工作地址：</p>
        <p style="text-indent: 2rem;margin-top:10px">{{ item.enterprise.address }}</p>

      </el-col>
<!--      enterprise info-->
      <el-col :span="6">
        <div style="display: flex;flex-direction: column;justify-content: space-around;height: 300px">
          <div style="display: flex;justify-content: space-between;align-items: center">
            <el-image v-if="item.enterprise.head_img" :src="item.enterprise.head_img" style="width: 80px; height: 80px"></el-image>
            <el-image v-else src="/gopher04.png" style="width: 80px; height: 80px"></el-image>
          </div>
          <p>企业：{{ item.enterprise.name }}</p>
          <p>领域：{{ item.enterprise.field }}</p>
          <p>阶段：{{ item.enterprise.finance }}</p>
          <p>规模：{{ item.enterprise.worker_num|worker_num }}以上</p>
          <p>官网：<a :href="item.enterprise.link" target="_blank">{{ item.enterprise.link }}</a></p>
        </div>
      </el-col>
    </el-row>

    <el-dialog width="80%" title="在线简历" :visible.sync="dialogResumeVisible">
      <el-form style="margin-left: 50px;" :model="resumeForm" :rules="resumeRules" ref="resumeForm" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="resumeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="resumeForm.gender" placeholder="性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="resumeForm.age"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="edu">
          <el-select v-model="resumeForm.edu" placeholder="学历">
            <el-option label="大专" value="大专"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="硕士" value="硕士"></el-option>
            <el-option label="博士" value="博士"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="毕业学校" prop="university">
          <el-input v-model="resumeForm.university"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="profession">
          <el-input v-model="resumeForm.profession"></el-input>
        </el-form-item>
        <el-form-item label="求职意向" prop="want">
          <el-input v-model="resumeForm.want"></el-input>
        </el-form-item>
        <el-form-item label="个人简介" prop="desc">
          <el-input :rows="3" type="textarea" v-model="resumeForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <el-input v-model="resumeForm.contact"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogResumeVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitResumeForm('resumeForm')">保存并提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import menus from "@/components/menus";
export default {
name: "id",
  components: {
    menus,
  },
  data() {
    return {
      dialogResumeFileVisible: false,
      dialogConsultVisible: false,
      consultContent: '',
      dialogResumeVisible: false,
      resumeForm: {
        name: '',
        gender: '',
        age: '',
        edu: '',
        university: '',
        profession: '',
        want: '',
        desc: '',
        contact: ''
      },
      resumeRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        edu: [
          { required: true, message: '请输入学历', trigger: 'blur' },
        ],
        university: [
          { required: true, message: '请输入毕业学校', trigger: 'blur' },
        ],
        profession: [
          { required: true, message: '请输入专业', trigger: 'blur' },
        ],
        want: [
          { required: true, message: '请输入求职意向', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入个人简介', trigger: 'blur' },
        ],
        contact: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ],
      },
      item: {
        id: 0,
        name: '',
        add_time: '',
        category: '',
        min_salary: '',
        max_salary: '',
        desc: '',
        skill_require: '',
        num: '',
        min_work_year: '',
        enterprise: {
          id: 0,
          name: '',
          head_img: '',
          field: '',
          worker_num: 0,
          finance: '',
          slogan: '',
          address: '',
          user: {
            id: 0,
            email: ''
          },
          link: ''
        },
        collection: {
          id: 0
        }
      },
      isFollowPosition: false,
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (token) {
      this.$axios.setToken(token, 'Bearer')
    }

    const positionID = this.$route.params.id
    this.$axios.get("position/"+positionID).then(rep => {
      switch (rep.status) {
        case 200:
          this.item = rep.data
          if (rep.data.collection) {
            this.isFollowPosition = true
          } else {
            // rep.data.collection = null, this.item的
            // collection定义被null覆盖
            this.item.collection = {
              id: 0
            }
          }

          this.resumeForm.want = this.item.name
          break
      }
    })
  },
  methods: {
    followPosition(positionID) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      if (this.isFollowPosition) {
        // 取消关注
        this.$axios.delete("collection/"+this.item.collection.id).then(rep => {
          switch(rep.status) {
            case 204:
              this.isFollowPosition = false
              this.$notify.success("取消关注")
              break
          }
        }).catch(err => {
          switch (err.response.status) {
            case 401:
              this.$notify.error("请先登录")
              break
          }
        })
      }else {
        // 关注
        this.$axios.post("collection/", {
          content_type: this.content_type.position,
          object_id: positionID
        }).then(rep => {
          switch(rep.status) {
            case 201:
              this.isFollowPosition = true
              // 保存收藏记录的id
              this.item.collection.id = rep.data.id
              this.$notify.success("关注成功")
              break
          }
        }).catch(err => {
          switch (err.response.status) {
            case 401:
              this.$notify.error("请先登录")
              break
          }
        })
      }
    },
    submitOnlineResume() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')
      // 是否完善简历
      this.$axios.get("resume/1").then(rep => {
        if (rep.data.name == "") {
          this.$confirm('简历未完善, 是否完善简历?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.dialogResumeVisible = true
          })
        }  else {
          // 已有在线简历，直接提交
          this.$axios.post("apply/", {
            position: this.item.id,
            resume: rep.data.id,
            category: '在线简历'
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.$notify.success("提交成功")
            }
          })
        }
      })
    },
    submitResumeForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 创建简历
          this.$axios.post("resume/", {
            name: this.resumeForm.name,
            gender: this.resumeForm.gender,
            age: this.resumeForm.age,
            edu: this.resumeForm.edu,
            university: this.resumeForm.university,
            profession: this.resumeForm.profession,
            want: this.resumeForm.want,
            desc: this.resumeForm.desc,
            contact: this.resumeForm.contact
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.$axios.post("apply/", {
                  position: this.item.id,
                  resume: rep.data.id,
                  category: '在线简历'
                }).then(rep => {
                  switch (rep.status) {
                    case 201:
                      this.$notify.success("提交成功")
                      this.dialogResumeVisible = false
                      break
                  }
                })
            }
          })
        } else {
          return false;
        }
      });
    },
    submitConsult() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')

      this.$axios.post("consult/", {
        position: this.item.id,
        content: this.consultContent,
        receiver: this.item.enterprise.user.id,
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("提交成功")
            this.dialogConsultVisible = false
            this.consultContent = ""
            break
        }
      })
    },
    uploadFileResume(params) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')

      const formData = new FormData()
      formData.append("file", params.file)
      this.$axios.post("file_resume/", formData).then(rep => {
        switch (rep.status) {
          case 201:
            this.$refs.upload.clearFiles()
            this.dialogResumeFileVisible = false
            this.$axios.post("apply/", {
              position: this.item.id,
              file_resume: rep.data.id,
              category: '简历附件'
            }).then(rep => {
              switch (rep.status) {
                case 201:
                  this.$notify.success("提交成功")
                  break
              }
            })
            break
        }
      })
    },
    submitFileResume() {
      this.$refs.upload.submit()
    }
  }
}
</script>

<style scoped>
.back:hover {
  color: #409EFF;
}
</style>
