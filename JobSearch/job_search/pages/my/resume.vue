<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/resume"></my_menus>
  <div style="display: flex;justify-content: space-around">
    <div class="resume" style="width: 400px">
      <p>姓名：{{ resume.name }}</p>
      <p>性别：{{ resume.gender }}</p>
      <p>年龄：{{ resume.age }}</p>
      <p>学历：{{ resume.edu }}</p>
      <p>毕业学校：{{ resume.university }}</p>
      <p>专业：{{ resume.profession }}</p>
      <p>求职意向：{{ resume.want }}</p>
      <p>个人简介：{{ resume.desc }}</p>
      <p>联系方式：{{ resume.contact }}</p>
    </div>
    <el-form style="width: 500px" :model="resumeForm" :rules="resumeRules" ref="resumeForm" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="resumeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="resumeForm.gender"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="resumeForm.age"></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="edu">
        <el-input v-model="resumeForm.edu"></el-input>
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
      <el-form-item>
        <el-button type="primary" @click="submitResumeForm('resumeForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "resume",
  components: {
    menus,
    my_menus
  },
  data() {
    return {
      resume: {
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
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (!token) {
      this.$notify.error("请先登录")
      return
    }

    this.$axios.setToken(token, 'Bearer')
    this.$axios.get("resume/"+this.$store.state.user.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.resume = rep.data
          this.resumeForm = rep.data
          break
      }
    })
  },
  methods: {
    submitResumeForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.patch("resume/"+this.$store.state.user.id+"/", this.resumeForm).then(rep => {
            switch (rep.status) {
              case 200:
                this.resume = rep.data
                this.$notify.success("修改成功")
                setTimeout(() => {
                  location.reload()
                }, 1000)
                break
            }
          })
        } else {
          return false
        }
      })
    },
  }
}
</script>

<style scoped>
.resume p {
  margin: 10px;
}
</style>
