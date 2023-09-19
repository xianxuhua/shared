<template>
  <div>
    <menus active-index="/activity/lecture"></menus>
    <activity_menu active-index="/activity/fair"></activity_menu>
    <div style="margin-top: 10px">
      <div>
        <small style="margin-right: 10px">举办时间：</small>
        <el-button size="small" @click="cancelFairDate">不限</el-button>
        <el-date-picker
          v-model="fair_date"
          type="date"
          size="small"
          @change="dateSelect"
          value-format="yyyy-MM-dd"
          placeholder="选择日期时间">
        </el-date-picker>
      </div>
      <div style="display: flex;margin-top: 10px;align-items: center">
        <small style="margin-right: 14px">举办地点：</small>
        <el-button size="small" style="margin-right: 7px" @click="cancelFairSchool">不限</el-button>
        <el-input style="width: 220px" size="small" v-model="fair_school"></el-input>
        <el-button size="small" @click="searchFairBySchool">搜索</el-button>
      </div>
    </div>

    <el-divider></el-divider>

    <el-row :gutter="20">
      <el-col :span="6" v-for="fair in fairs" :key="fair.id">
        <nuxt-link :to="{path: '/activity/fair/'+fair.id, params: {id: fair.id}}">
          <fair :fair=fair></fair>
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
import fair from "@/components/fair";
import activity_menu from "../../../components/activity_menu";

export default {
  name: "index",
  components: {
    menus,
    page,
    to_top,
    fair,
    activity_menu
  },
  data() {
    return {
      count: 0,
      fair_date: '',
      fair_school: '',
      fairs: [
        {
          id: 0,
          date: '',
          school: '',
          start_time: '',
        }
      ],
      fair_url: 'fair/',
      current_page: 1
    }
  },
  created() {
    this.reRequestFair()
  },
  methods: {
    reRequestFair() {
      this.fair_url = `fair/?page=${this.current_page}&search=${this.fair_school}&date=${this.fair_date}`
      this.$axios.get(this.fair_url).then(rep => {
        switch (rep.status) {
          case 200:
            this.fairs = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.reRequestFair()
    },
    dateSelect() {
      this.reRequestFair()
    },
    searchFairBySchool() {
      this.reRequestFair()
    },
    cancelFairDate() {
      this.fair_date = ''
      this.reRequestFair()
    },
    cancelFairSchool() {
      this.fair_school = ''
      this.reRequestFair()
    },
  }
}
</script>

<style scoped>

</style>
