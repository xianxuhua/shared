<template>
  <div>
    <menus activeIndex="/register"></menus>
    <el-page-header @back="$router.back()"></el-page-header>

    <h3 style="text-align: center">注册求职者账号</h3>
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button style="float: right" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <div style="display: flex;justify-content:flex-end;align-items: center;">
        <p>注册企业账号</p><i class="el-icon-right"></i>&nbsp<nuxt-link to="/enterprise_register">入口</nuxt-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import menus from "@/components/menus";

export default {
  name: "register",
  components: {
    menus
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
        passwordConfirm: '',
        code: '',
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("user/", {
            email: this.ruleForm.email,
            code: this.ruleForm.code,
            password: this.ruleForm.password,
            password_confirm: this.ruleForm.passwordConfirm
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.$notify.success("注册成功")
                setTimeout(() => {
                  this.$router.replace("/login")
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
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
