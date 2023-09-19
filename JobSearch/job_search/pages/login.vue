<template>
  <div class="login">
    <menus active-index="/login"></menus>
    <el-form style="margin: 80px auto; width: 500px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button style="float:right;" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <div style="display: flex;justify-content:flex-end;align-items: center;">
          <p>没有账号？</p><i class="el-icon-right"></i>&nbsp<nuxt-link to="/register">注册</nuxt-link>
        </div>
      </el-form>

  </div>
<!--    form   -->

</template>

<script>
import menus from "@/components/menus";

export default {
  name: "login",
  components: {
    menus
  },
  data() {
    return {
      ruleForm: {
        email: '',
        password: '',
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
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({url: "login/", method: "post", data: {
            username: this.ruleForm.email,
            password: this.ruleForm.password
          }}).then(rep => {
            switch (rep.status) {
              case 200:
                this.$cookies.set("user", {
                  id: rep.data.id,
                  token: rep.data.access,
                  is_enterprise: rep.data.is_enterprise,
                  enterprise_id: rep.data.enterprise_id,
                  is_admin: rep.data.is_admin
                }, {
                  path: "/",
                  maxAge: 60 * 60 * 24 * 7
                })
                this.$store.commit("setToken", {
                  id: rep.data.id,
                  token: rep.data.access,
                  is_enterprise: rep.data.is_enterprise,
                  enterprise_id: rep.data.enterprise_id,
                  is_admin: rep.data.is_admin
                })
                this.$notify.success({
                  message: "登录成功",
                  duration: 1000
                })
                if (rep.data.is_admin) {
                  setTimeout(() => {
                    this.$router.replace("/admin/guide")
                  })
                } else if (rep.data.is_enterprise) {
                  setTimeout(()=>{
                    this.$router.replace("/my_enterprise/info")
                   }, 1000)
                } else {
                  setTimeout(()=>{
                    this.$router.replace("/")
                   }, 1000)
                }
                break
            }
          }).catch(err => {
            switch (err.response.status) {
              case 401:
                this.$notify.error("用户名或密码错误")
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
  }
}
</script>

<style scoped>
</style>
