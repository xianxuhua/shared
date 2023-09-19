<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/password"></my_menus>
  <el-form style="margin-left: 50px;" :model="passwordForm" :rules="passwordRules" ref="passwordForm" label-width="80px">
    <el-form-item label="原密码" prop="rawPassword">
      <el-input show-password v-model="passwordForm.rawPassword"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword">
      <el-input show-password v-model="passwordForm.newPassword"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmNewPassword">
      <el-input show-password v-model="passwordForm.confirmNewPassword"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitPasswordForm('passwordForm')">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "password",
  components: {
    menus,
    my_menus
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.passwordForm.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      passwordForm: {
        rawPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      passwordRules: {
        rawPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
        ],
        confirmNewPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {

    submitPasswordForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.patch("user/"+this.$store.state.user.id+"/", {
            raw_password: this.passwordForm.rawPassword,
            new_password: this.passwordForm.newPassword,
            new_password_confirm: this.passwordForm.confirmNewPassword
          }).then(rep => {
            switch (rep.status) {
              case 200:
                this.$notify.success("修改成功，请重新登陆")
                this.$cookies.removeAll()
                this.$store.commit("setToken", {
                  id: 0,
                  token: "",
                  is_enterprise: false,
                  enterprise_id: 0,
                  is_admin: false,
                })
                setTimeout(() => {
                  location.href = "/login"
                }, 1000)
                console.log(rep.data)
                break
            }
          }).catch(err => {
            this.$notify.error(err.response.data[0])
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

</style>
