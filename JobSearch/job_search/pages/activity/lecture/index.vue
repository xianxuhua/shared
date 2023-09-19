<template>
  <div>
    <menus active-index="/activity/lecture"></menus>
    <activity_menu active-index="/activity/lecture"></activity_menu>
    <div style="margin-top: 10px">
      <div>
        <small style="margin-right: 10px">宣讲时间：</small>
        <el-button size="small" @click="cancelLectureDate">不限</el-button>
        <el-date-picker
          v-model="lecture_date"
          type="date"
          size="small"
          @change="dateSelect"
          value-format="yyyy-MM-dd"
          placeholder="选择日期时间">
        </el-date-picker>
      </div>
      <div style="display: flex;margin-top: 10px;align-items: center">
        <small style="margin-right: 14px">举办地点：</small>
        <el-button size="small" style="margin-right: 7px" @click="cancelLectureSchool">不限</el-button>
        <el-input style="width: 220px" size="small" v-model="lecture_school"></el-input>
        <el-button size="small" @click="searchLectureBySchool">搜索</el-button>
      </div>
      <div style="display: flex;margin-top: 10px;align-items: center">
        <small style="margin-right: 14px">举办企业：</small>
        <el-button size="small" style="margin-right: 7px" @click="cancelEnterprise">不限</el-button>
        <el-input style="width: 220px" size="small" v-model="enterprise_name"></el-input>
        <el-button size="small" @click="searchLectureByEnterprise">搜索</el-button>
      </div>
    </div>

    <el-divider></el-divider>

    <el-row :gutter="20">
      <el-col :span="6" v-for="lecture in lectures" :key="lecture.id">
        <nuxt-link :to="{path: '/activity/lecture/'+lecture.id, params: {id: lecture.id}}">
          <lecture :lecture=lecture></lecture>
        </nuxt-link>
        <el-divider></el-divider>
      </el-col>
    </el-row>

    <page @pageChange="pageChange" v-if="count>10" :total="count" :page-size="16"></page>
    <to_top></to_top>
  </div>
</template>

<script>
import menus from "@/components/menus";
import page from "@/components/page";
import to_top from "@/components/to_top";
import lecture from "@/components/lecture";
import activity_menu from "../../../components/activity_menu";

export default {
  name: "index",
  components: {
    menus,
    page,
    to_top,
    lecture,
    activity_menu
  },
  data() {
    return {
      count: 0,
      lecture_date: '',
      lecture_school: '',
      lectures: [
        {
          id: 0,
          enterprise: {
            id: 0,
            name: '',
            finance: '',
            worker_num: 0,
            field: '',
            head_img: ''
          },
          date: '',
          school: '',
          start_time: '',
        }
      ],
      lecture_url: 'lecture/',
      current_page: 1,
      enterprise_name: ''
    }
  },
  created() {
    this.reRequestLecture()
  },
  methods: {
    reRequestLecture() {
      this.lecture_url = `lecture/?page=${this.current_page}&search=${this.lecture_school}&date=${this.lecture_date}&enterprise_name=${this.enterprise_name}`
      this.$axios.get(this.lecture_url).then(rep => {
        switch (rep.status) {
          case 200:
            this.lectures = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.reRequestLecture()
    },
    dateSelect() {
      this.reRequestLecture()
    },
    searchLectureBySchool() {
      this.reRequestLecture()
    },
    cancelLectureDate() {
      this.lecture_date = ''
      this.reRequestLecture()
    },
    cancelLectureSchool() {
      this.lecture_school = ''
      this.reRequestLecture()
    },
    cancelEnterprise() {
      this.enterprise_name = ''
      this.reRequestLecture()
    },
    searchLectureByEnterprise() {
      this.reRequestLecture()
    }
  }
}
</script>

<style scoped>

</style>
