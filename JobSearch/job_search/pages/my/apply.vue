<template>
<div>
  <menus active-index="/my/resume"></menus>
  <my_menus active-index="/my/apply"></my_menus>
    <el-table
      :data="applies"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="position.name"
        label="职位"
        width="200">
        <template slot-scope="scope">
          <nuxt-link :to="{path: '/position/'+scope.row.position.id, params: {id: scope.row.position.id}}">{{ scope.row.position.name }}</nuxt-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="添加时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        width="150">
      </el-table-column>
      <el-table-column
        label="简历"
        width="100">
        <template  slot-scope="scope">
          <p v-if="scope.row.resume.id"><a href="javascript:" @click="lookResume(scope.row.resume.id)">查看</a></p>
          <p v-else><a :href="scope.row.file_resume.file">查看</a></p>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="200">
      </el-table-column>
    </el-table>
  <el-dialog title="简历详情" :visible.sync="dialogLookResumeVisible">
    <p>姓名：{{ current_resume.name }}</p>
    <p>性别：{{ current_resume.gender }}</p>
    <p>年龄：{{ current_resume.age }}</p>
    <p>学历：{{ current_resume.edu }}</p>
    <p>学校：{{ current_resume.university }}</p>
    <p>专业：{{ current_resume.profession }}</p>
    <p>求职意向：{{ current_resume.want }}</p>
    <p>个人简介：{{ current_resume.desc }}</p>
    <p>联系方式：{{ current_resume.contact }}</p>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/menus";
import my_menus from "../../components/my_menus";
export default {
  name: "apply",
  components: {
    menus,
    my_menus
  },
  data() {
    return {
      dialogLookResumeVisible: false,
      applies: [
        {
          id: 0,
          position: {
            id: 0,
            name: ''
          },
          add_time: '',
          resume: {
            id: 0,
            name: '',
            gender: '',
            age: 0,
            edu: '',
            university: '',
            profession: '',
            want: '',
            desc: '',
            contact: ''
          },
          file_resume: {
            id: 0,
            file: ''
          },
          status: '',
          category: ''
        }
      ],
      current_resume: {}
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (!token) {
      this.$notify.error("请先登录")
      return
    }

    this.$axios.setToken(token, 'Bearer')
    this.$axios.get("apply").then(rep => {
      switch (rep.status) {
        case 200:
          this.applies = rep.data.results
          for (let i = 0; i < this.applies.length; i++) {
            if (this.applies[i].file_resume === null) {
              this.applies[i].file_resume = {
                id: 0,
                file: ''
              }
            } else {
              this.applies[i].resume = {
                id: ''
              }
            }
          }
          break
      }
    })
  },
  methods: {
    lookResume(resume_id) {
      this.dialogLookResumeVisible = true
      this.$axios.get("resume/"+resume_id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_resume = rep.data
            break
        }
      })
    },
    deleteResumeRecord(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.delete("apply/"+row.id+"/").then(rep => {
        console.log(rep.data)
      })
    }
  }
}
</script>

<style scoped>
.el-dialog p {
  margin-bottom: 10px;
}
</style>
