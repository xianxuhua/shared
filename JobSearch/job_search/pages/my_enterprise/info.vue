<template>
<div>
  <menus active-index="/my_enterprise/info"></menus>
  <div style="display: flex;justify-content: space-around;margin-top: 50px">
    <div style="height: 400px;display: flex;flex-direction: column;justify-content: space-around;align-items: center">
      <el-avatar :size="200" v-if="current_head_img" :src="current_head_img"></el-avatar>
      <el-avatar :size="200" v-else src="../gopher04.png"></el-avatar>
      <el-button @click="changeHeadImg">更换头像</el-button>
      <input type="file" accept="image/*" @change="getHeadImg" ref="headImg" style="display: none">
      <el-button type="text" @click="dialogEnterpriseLicenseVisible=true">查看企业证明</el-button>
    </div>
    <el-dialog title="企业证明" :visible.sync="dialogEnterpriseLicenseVisible">
      <el-image :src="enterpriseForm.license"></el-image>
    </el-dialog>

    <div style="height: 400px;width: 350px;display: flex;flex-direction: column;justify-content: space-around">
      <p>名称：{{ enterpriseForm.name }}</p>
      <p>slogan：{{ enterpriseForm.slogan }}</p>
      <p>领域：{{ enterpriseForm.field }}</p>
      <p>阶段：{{ enterpriseForm.finance }}</p>
      <p>规模：{{ enterpriseForm.worker_num|worker_num }}</p>
      <p>地址：{{ enterpriseForm.address }}</p>
      <p>联系方式：{{ enterpriseForm.contact}}</p>
      <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">简介：{{ enterpriseForm.desc }}</p>
      <el-button @click="dialogEnterpriseInfoVisible = true">修改信息</el-button>
    </div>


    <el-dialog title="更新企业信息" :visible.sync="dialogEnterpriseInfoVisible" :fullscreen="true">
      <el-form :model="enterpriseForm" :rules="enterpriseRules" ref="enterpriseForm" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="enterpriseForm.name"></el-input>
        </el-form-item>
        <el-form-item label="领域" prop="field">
          <el-input v-model="enterpriseForm.field"></el-input>
        </el-form-item>
        <el-form-item label="员工数" prop="worker_num">
          <el-input v-model="enterpriseForm.worker_num"></el-input>
        </el-form-item>
        <el-form-item label="融资阶段" prop="finance">
          <el-select v-model="enterpriseForm.finance" :placeholder="enterpriseForm.finance">
            <el-option label="未融资" value="未融资"></el-option>
            <el-option label="天使轮" value="天使轮"></el-option>
            <el-option label="A轮" value="A轮"></el-option>
            <el-option label="B轮" value="B轮"></el-option>
            <el-option label="C轮" value="C轮"></el-option>
            <el-option label="D轮" value="D轮"></el-option>
            <el-option label="上市企业" value="上市企业"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <el-input v-model="enterpriseForm.contact"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" >
          <el-cascader
            :options="city"
            :props="{ checkStrictly: true }"
            filterable
            :placeholder="enterpriseForm.address"
            @change="citySelect"
            ref="cascader"
            size="small"
            clearable
            >
          </el-cascader>
        </el-form-item>
        <el-form-item label="slogan" prop="slogan">
          <el-input v-model="enterpriseForm.slogan"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="desc">
          <el-input type="textarea" :rows="3" v-model="enterpriseForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEnterpriseInfoVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEnterpriseForm('enterpriseForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
import city from "assets/json/city.json";

export default {
  name: "info",
  components: {
    menus
  },
  data() {
    return {
      city: city,
      current_head_img: '',
      dialogEnterpriseInfoVisible: false,
      dialogEnterpriseLicenseVisible: false,
      enterpriseForm: {
        name: '',
        field: '',
        worker_num: 0,
        address: '',
        desc: '',
        finance: '',
        contact: '',
        slogan: '',
        license: ''
      },
      enterpriseRules: {
        name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' },
        ],
        field: [
          { required: true, message: '请输入企业领域', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请选择地址', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入企业简介', trigger: 'blur' },
        ],
        contact: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ],
        worker_num: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ],
        slogan: [
          { required: true, message: '请输入口号', trigger: 'blur' },
        ],
        finance: [
          { required: true, message: '请选择融资阶段', trigger: 'blur' },
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
    this.$axios.get("enterprise/"+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          this.current_head_img = rep.data.head_img
          this.enterpriseForm = rep.data
          break
      }
    })

  },
  methods: {
    submitEnterpriseForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.patch("enterprise/"+this.$store.state.user.enterprise_id+"/", {
            name: this.enterpriseForm.name,
            field: this.enterpriseForm.field,
            worker_num: this.enterpriseForm.worker_num,
            address: this.enterpriseForm.address,  // TODO: 获取id
            desc: this.enterpriseForm.desc,
            finance: this.enterpriseForm.finance,
            contact: this.enterpriseForm.contact,
            slogan: this.enterpriseForm.slogan,
          }).then(rep => {
            switch (rep.status) {
              case 200:
                this.$notify.success("更新成功")
                break
            }
          }).catch(err => {
            console.log(err.response.data)
          })
          // this.$notify.success("修改成功");
          this.dialogEnterpriseInfoVisible = false
        } else {
          return false;
        }
      });
    },
    changeHeadImg() {
      console.log("change head img")
      this.$refs.headImg.click()
    },
    getHeadImg(event) {
      const formData = new FormData()
      formData.append("head_img", event.target.files[0])
      this.$axios.patch("enterprise/"+this.$store.state.user.enterprise_id+"/", formData).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_head_img = rep.data.head_img
            this.$notify.success("更新成功")
            break
        }
      })
    },
    citySelect() {
      this.enterpriseForm.address = this.$refs['cascader'].getCheckedNodes()[0].pathLabels.join("/")
    },
  }
}
</script>

<style scoped>

</style>
