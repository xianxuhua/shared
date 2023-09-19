<template>
  <div>
    <menus activeIndex="/register"></menus>
    <el-page-header @back="$router.back()"></el-page-header>

    <h3 style="text-align: center">注册企业账号</h3>
    <el-form style="width: 500px;margin: 30px auto" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="邮箱" prop="email" :error="backErr.email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="backErr.password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordConfirm" :error="backErr.passwordConfirm">
        <el-input type="password" v-model="ruleForm.passwordConfirm"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code" :error="backErr.code">
        <div style="display: flex">
          <el-input style="width: 300px;margin-right: 80px" v-model="ruleForm.code"></el-input>
          <el-button v-if="showSendCode" @click="getCode" style="width: 150px">发生验证码</el-button>
          <el-button v-else disabled style="width: 150px">{{ count }}s</el-button>
        </div>
      </el-form-item>

      <el-form-item label="企业凭证" prop="license" :error="backErr.license">
        <div style="display: flex">
          <el-upload
            :limit="1"
            action=""
            accept='.jpg,.png'
            :http-request="uploadLicense">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button style="float: right" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import menus from "@/components/menus"

export default {
  name: "enterprise_register",
  components: {
    menus
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        password: '',
        passwordConfirm: '',
        code: '',
        license: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
        ],
        passwordConfirm: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 5, max: 5, message: '验证码必须为5个字符', trigger: 'blur' },
        ],
        license: [
          { required: true, message: '请上传企业凭证', trigger: 'blur' },
        ]
      },
      backErr: {
        email: '',
        password: '',
        passwordConfirm: '',
        code: ''
      },
      showSendCode: true,
      count: '',
      timer: null,
    }
  },
  methods: {
    uploadLicense(params) {
      this.ruleForm.license = params.file
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          formData.append("email", this.ruleForm.email)
          formData.append("code", this.ruleForm.code)
          formData.append("password", this.ruleForm.password)
          formData.append("password_confirm", this.ruleForm.passwordConfirm)
          formData.append("license", this.ruleForm.license)
          this.$axios.post("enterprise_register/", formData).then(rep => {
            switch (rep.status) {
              case 201:
                this.$notify.success("注册成功，请等待审核")
                setTimeout(()=> {
                  location.href = "/"
                }, 1000)
                break
            }
          }).catch(err => {
            switch (err.response.status) {
              case 400:
                for (const e in err.response.data) {
                  err.response.data[e] = err.response.data[e].join(",")
                }
                this.backErr = err.response.data
                break
            }
          })
        } else {
          return false
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getCode(){
      this.$refs['ruleForm'].validateField(['email'], err => {
        if (err) return false
        const TIME_COUNT = 60
        if (this.timer) return
        this.$axios.post("code/", {
          email: this.ruleForm.email
        }).then(rep => {
          switch (rep.status) {
            case 200:
              this.$notify.success("发送成功")
              this.count = TIME_COUNT
              this.showSendCode = false
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--
                } else {
                  this.showSendCode = true
                  clearInterval(this.timer)
                  this.timer = null
                }
              }, 1000)
              break
          }
        }).catch(err => {
          switch (err.response.status) {
            case 400:
              for (const e in err.response.data) {
                err.response.data[e] = err.response.data[e].join(",")
              }
              this.backErr = err.response.data
              break
          }
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
