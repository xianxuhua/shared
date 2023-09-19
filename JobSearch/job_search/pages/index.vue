<template>
  <div class="index">
    <menus active-index="/"></menus>

    <div style="display: flex;margin-top: 20px">
      <el-input v-model="searchName" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="searchPosition">搜索</el-button>
    </div>

    <div v-for="filter in filters" :key="filter.id" style="display: flex;align-items: center;flex-wrap: wrap;margin-top: 10px">
      <small>{{ filter.name }}：</small>
      <el-radio-group @change="processFilter"  v-model="filter.model" :key="index" v-for="(val,index) in filter.values" size="small">
        <el-radio-button :label="val" style="margin: 5px 5px;"></el-radio-button>
      </el-radio-group>
      <el-cascader
        v-if="filter.more"
        :options="city"
        :props="{ checkStrictly: true }"
        filterable
        v-model="filter.model"
        @change="citySelect"
        ref="cascader"
        size="small"
        clearable
        >
      </el-cascader>
    </div>

    <el-divider></el-divider>


    <el-row style="margin: 20px auto">
      <el-col :span="20">
        <!--    position list-->
        <div v-for="(position,index) in positions" :key="index">
          <position :position=position></position>
          <el-divider></el-divider>
        </div>
<!--        page -->
        <page v-if="count>10" @pageChange="pageChange" :total="count"></page>
      </el-col>
    </el-row>

    <to_top></to_top>
<!--    <chat></chat>-->
  </div>
</template>

<script>
import menus from "@/components/menus";
import position from "@/components/position";
import to_top from "@/components/to_top";
import page from "@/components/page";
import city from "assets/json/city.json";
import chat from "../components/chat/index";

export default {
  components: {
    menus,
    position,
    to_top,
    page,
    chat
  },
  data() {
    return {
      url: 'position',
      count: 0,
      positions: [
      ],
      searchName: '',
      current_page: 1,
      city: city,
      filtered_result: {
        min_salary: '',
        max_salary: '',
        min_num: '',
        max_num: '',
        category: '',
        edu_require: '',
        finance: '',
        address: '',
        work_kind: ''
      },
      filters: [
        {
          id: 1,
          name: "所在城市",
          model: '不限',
          values: [
            "不限",
          ],
          more: true
        },
        {
          id: 2,
          name: "学历要求",
          model: '不限',
          values: [
            "不限","大专","本科","硕士","博士",
          ]
        },
        {
          id: 3,
          name: "融资阶段",
          model: '不限',
          values: [
            "不限","未融资","天使轮","A轮","B轮", "C轮", "D轮", "上市企业"
          ]
        },
        {
          id: 4,
          name: "公司规模",
          model: '不限',
          values: [
            "不限","少于15人","15-50人","50-150人","150-500人", "500-2000人", "2000人以上"
          ]
        },
        {
          id: 5,
          name: "薪资范围",
          model: "不限",
          values: [
            "不限", "少于2k", "2k-5k", "5k-10k", "10k-15k", "15-25k", "25k-50k", "50k以上"
          ]
        },
        {
          id: 6,
          name: "行业领域",
          model: '不限',
          values: [
            "不限","技术","产品","设计","运营","市场","销售","职能","游戏"
          ],
        },
        {
          id: 7,
          name: "工作性质",
          model: '不限',
          values: [
            "不限","全职","实习"
          ],
        },
      ]
    };
  },
  created() {
    this.reRequestPositionList()
  },
  methods: {
    pageChange(currentPage) {
      this.current_page = currentPage
      this.reRequestPositionList()
    },
    citySelect(){
      this.filtered_result.address = this.$refs['cascader'][0].getCheckedNodes()[0].pathLabels.join("/")
      this.reRequestPositionList()
    },
    reRequestPositionList() {
      this.url = `position/?page=${this.current_page}&name=${this.searchName}&min_salary=${this.filtered_result.min_salary}&max_salary=${this.filtered_result.max_salary}&min_num=${this.filtered_result.min_num}&max_num=${this.filtered_result.max_num}&category=${this.filtered_result.category}&edu_require=${this.filtered_result.edu_require}&enterprise__finance=${this.filtered_result.finance}&enterprise__address=${this.filtered_result.address}&work_kind=${this.filtered_result.work_kind}`
      this.$axios.get(this.url).then(rep=>{

        switch (rep.status) {
          case 200:
            this.positions = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    },
    searchPosition() {
      this.reRequestPositionList()
    },
    removeDefaultVal(val) {
      if (val === "不限")
        return ""
      return val
    },
    processMatch(min_max_num) {
      const match_min_max_num = min_max_num.match(/\d+/g)
      let min_num = ""
      let max_num = ""
      if (match_min_max_num) {
        if (min_max_num.startsWith("少于")) {
          max_num = match_min_max_num[0]
        } else if (min_max_num.endsWith("以上")) {
          min_num = match_min_max_num[0]
        } else {
          min_num = match_min_max_num[0]
          max_num = match_min_max_num[1]
        }
      }
      return [min_num, max_num]
    },
    processFilter() {
      if (this.filters[0].model === "不限") {
        this.filtered_result.address = ""
      }
      this.filtered_result.edu_require = this.removeDefaultVal(this.filters[1].model)
      this.filtered_result.finance =  this.removeDefaultVal(this.filters[2].model)
      const min_max_num = this.removeDefaultVal(this.filters[3].model)
      const min_max_salary = this.removeDefaultVal(this.filters[4].model)
      this.filtered_result.category = this.removeDefaultVal(this.filters[5].model)
      let [min_num, max_num] = this.processMatch(min_max_num)
      this.filtered_result.min_num = min_num
      this.filtered_result.max_num = max_num
      let [min_salary, max_salary] = this.processMatch(min_max_salary)
      if (min_salary) {
        this.filtered_result.min_salary = (parseInt(min_salary) * 1000).toString()
      } else {
        this.filtered_result.min_salary = ""
      }
      if (max_salary) {
        this.filtered_result.max_salary = (parseInt(max_salary) * 1000).toString()
      } else {
        this.filtered_result.max_salary = ""
      }
      this.filtered_result.work_kind = this.removeDefaultVal(this.filters[6].model)
      this.reRequestPositionList()
    },
  }
}
</script>

<style scoped>
</style>
