<template>
  <div>
    <menus active-index="/community"></menus>
    <el-page-header @back="$router.back()"></el-page-header>
    <div>
      <div style="display: flex;margin-bottom: 20px">
        <el-image v-if="school.head_img" :src="school.head_img" style="width: 100px;height: 100px;border-radius: 50%;margin: 20px"></el-image>
        <el-image v-else src="/sdkj.jpeg" style="width: 100px;height: 100px;border-radius: 50%;margin: 20px"></el-image>
        <div style="display: flex;flex-direction: column;justify-content: space-around">
          <p style="font-size: 20px;">{{ school.name }}</p>
          <p>{{ school.desc }}</p>
        </div>
      </div>
      <div>
        <div style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 20px">
          <p style="font-size: 20px">专业交流板块：</p>
          <div>
            <el-input v-model="searchName" style="width: 200px" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="searchProfession">搜索</el-button>
            <el-button @click="dialogNewProfessionVisible = true">新建</el-button>
          </div>
          <el-dialog title="新建专业交流区" :visible.sync="dialogNewProfessionVisible">
            <el-form :model="professionForm" :rules="professionFormRules" ref="professionForm" label-width="80">
              <el-form-item label="名称" prop="name">
                <el-input v-model="professionForm.name"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogNewProfessionVisible = false">取 消</el-button>
              <el-button type="primary" @click="newProfession('professionForm')">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <el-row :gutter="20">
          <el-col :span="6" v-for="profession in professions" :key="profession.id">
            <nuxt-link :to="{path: '/community/school/'+$route.params.id+'/profession/'+profession.id+'/post', params: {id: profession.id}}"><profession :profession="profession"></profession></nuxt-link>
          </el-col>
        </el-row>
      </div>

    </div>
    <page :total="count" @pageChange="pageChange" :page-size="10" v-if="count>10"></page>
  </div>
</template>

<script>
import menus from "@/components/menus";
import profession from "@/components/profession";
import page from "@/components/page";
export default {
  name: "index",
  components: {
    menus,
    profession,
    page
  },
  data() {
    return {
      dialogNewProfessionVisible: false,
      professionForm: {
        name: ''
      },
      professionFormRules: {
        name: [
          { required: true, message: '请输入专业名称', trigger: 'blur' }
        ]
      },
      searchName: '',
      count: 0,
      school: {
        id: 0,
        name: '',
        desc: '',
        head_img: '',
      },
      professions: [
        {
          id: 0,
          member_num: 0,
          name: '',
          post_num: 0,
        }
      ],
      profession_url: 'profession/?school='+this.$route.params.id,
      current_page: 1
    }
  },
  created() {
    this.$axios.get("school/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.school = rep.data
          break
      }
    })
    this.reRequestProfession()
  },
  methods: {
    updateProfessionUrl() {
      this.profession_url = `profession/?school=${this.$route.params.id}&search=${this.searchName}&page=${this.current_page}`
    },
    reRequestProfession() {
      this.$axios.get(this.profession_url).then(rep => {
        switch (rep.status) {
          case 200:
            this.count = rep.data.count
            this.professions = rep.data.results
            break
        }
      })
    },
    searchProfession() {
      this.current_page = 1
      this.updateProfessionUrl()
      this.reRequestProfession()
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.updateProfessionUrl()
      this.reRequestProfession()
    },
    newProfession(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }
      this.$axios.setToken(token, 'Bearer')

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("profession/", {
            school: this.$route.params.id,
            name: this.professionForm.name
          }).then(rep => {
            switch (rep.status) {
              case 201:
                this.professions.push(rep.data)
                this.$notify.success("创建成功")
                this.dialogNewProfessionVisible = false
                break
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
