<template>
  <div>
    <menus active-index="/activity/lecture"></menus>
    <el-page-header @back="$router.back()"></el-page-header>

    <div style="height: 150px;margin: 20px auto;display: flex;justify-content: space-between">
      <div style="display: flex;">
        <el-image v-if="lecture.enterprise.head_img" :src="lecture.enterprise.head_img" style="width: 150px;height: 150px;border-radius: 50%"></el-image>
        <el-image v-else src="/gopher04.png" style="width: 150px;height: 150px;border-radius: 50%"></el-image>
        <div style="display: flex;flex-direction: column;justify-content: space-around;margin-left: 20px">
          <p>{{ lecture.enterprise.name }}</p>
<!--          <p>{{ lecture.enterprise.desc }}</p>-->
          <div>
            <el-tag style="margin-right: 10px">{{ lecture.enterprise.field }}</el-tag>
          </div>
        </div>
      </div>
      <el-button v-if="isFollowLecture" @click="followLecture(lecture.id)" style="height: 50px">取消关注</el-button>
      <el-button v-else @click="followLecture(lecture.id)" style="height: 50px">关注宣讲会</el-button>
    </div>

    <el-divider></el-divider>

    <el-row>
      <el-col :span="17">
        <el-tabs v-model="activeName">
          <el-tab-pane label="宣讲会简介" name="first" class="lecture">
            <p>举办学校：{{ lecture.school }} &nbsp; {{ lecture.address }}</p>
            <p>举办时间：{{ lecture.date }} &nbsp; {{ lecture.start_time }} - {{ lecture.end_time }}</p>
            <p>招聘流程：</p>
            <el-steps :active="activeStep"  finish-status="process">
              <el-step title="简历投递"></el-step>
              <el-step title="简历筛选"></el-step>
              <el-step title="笔试"></el-step>
              <el-step title="面试"></el-step>
              <el-step title="发放offer"></el-step>
            </el-steps>
            <p>联系方式：{{ lecture.enterprise.contact }}</p>
            <p>简介：{{ lecture.desc }}</p>
          </el-tab-pane>

          <el-tab-pane label="企业简介" name="second" class="lecture">
            <pre>{{ lecture.enterprise.desc }}</pre>
          </el-tab-pane>

          <el-tab-pane label="薪资福利" name="third">
            <pre>{{ lecture.desc }}</pre>
          </el-tab-pane>
          <el-tab-pane label="在招职位" name="four">
            <p style="margin: 15px 0 20px 0">招聘职位:</p>
            <div v-for="position in positions" :key="position.id">
              <div style="display: flex;justify-content: space-between">
                <p class="name"><nuxt-link :to="{path: '/position/'+position.id, params: {id: position.id}}">{{ position.name }}</nuxt-link></p>
                <p>发布时间：{{ position.add_time }}</p>
              </div>
              <el-divider></el-divider>
            </div>
            <page v-if="position_count>10" @pageChange="pageChange" :total="item.position_set.length"></page>
          </el-tab-pane>
        </el-tabs>

      </el-col>

      <el-col :span="6" :offset="1">
        <p>企业基本信息：</p>
        <div style="height:200px;display: flex;flex-direction: column;justify-content: space-around">
          <p>slogan：{{ lecture.enterprise.slogan }}</p>
          <p>融资阶段：{{ lecture.enterprise.finance }}</p>
          <p>员工数：{{ lecture.enterprise.worker_num|worker_num }}人以上</p>
          <p>地址：{{ lecture.enterprise.address }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menus from "@/components/menus";
import page from "@/components/page";

export default {
  name: "id",
  components: {
    menus,
    page,
  },
  data() {
    return {
      activeName: 'first',
      activeStep: 5,
      lecture: {
        id: 0,
        enterprise: {
          id: 0,
          finance: '',
          name: '',
          head_img: '',
          field: '',
          worker_num: '',
          desc: '',
          contact: '',
          slogan: '',
          address: ''
        },
        date: '',
        start_time: '',
        end_time: '',
        school: '',
        address: '',
        desc: '',
        collection: {
          id: 0
        }
      },
      isFollowLecture: false,
      positions: [
        {
          id: 0,
          name: '',
          add_time: ''
        }
      ],
      position_count: 0
    }
  },
  created() {
    const token = this.$store.state.user.token
    if (token) {
      this.$axios.setToken(token, 'Bearer')
    }
    this.$axios.get("lecture/"+this.$route.params.id).then(rep => {
      switch (rep.status) {
        case 200:
          this.lecture = rep.data
          console.log(rep.data)
          if (rep.data.collection) {
            this.isFollowLecture = true
          } else {
            this.lecture.collection = {
              id: 0
            }
          }
          this.$axios.get("position/?lecture="+this.lecture.enterprise.id).then(rep => {
            switch (rep.status) {
              case 200:
                this.positions = rep.data.results
                this.position_count = rep.data.count
                break
            }
          })
          break
      }
    })
  },
  methods: {
    followLecture(lecture_id) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      if (this.isFollowLecture) {
        // 取消关注
        this.$axios.delete("collection/"+this.lecture.collection.id).then(rep => {
          switch(rep.status) {
            case 204:
              this.isFollowLecture = false
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
          content_type: this.content_type.lecture,
          object_id: lecture_id
        }).then(rep => {
          switch(rep.status) {
            case 201:
              this.isFollowLecture = true
              // 保存收藏记录的id
              this.lecture.collection.id = rep.data.id
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
    pageChange(current_page) {

    }
  }
}
</script>

<style scoped>
.lecture p {
  margin: 15px 0;
}
</style>
