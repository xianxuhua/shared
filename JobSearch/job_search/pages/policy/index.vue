<template>
<div>
  <menus active-index="/policy"></menus>
  <div style="margin-top: 10px">
    <div>
      <small style="margin-right: 10px">城市：</small>
      <el-button size="small" @click="cancelAddress">不限</el-button>
      <el-cascader
        :options="city"
        :props="{ checkStrictly: true }"
        filterable
        :placeholder="select_address"
        @change="citySelect"
        ref="cascader"
        size="small"
        clearable
        >
      </el-cascader>
    </div>
  </div>

  <el-divider></el-divider>
  <div>
    <div v-for="policy in policies" :key="policy.id">
      <div style="display: flex;justify-content: space-between">
        <p><nuxt-link :to="{path: '/policy/'+policy.id, params: {id: policy.id}}">{{ policy.title }}</nuxt-link></p>
        <p>{{ policy.add_time }}</p>
      </div>
      <el-divider></el-divider>
    </div>
    <page :total="count" v-if="count > 10" @pageChange="pageChange"></page>
  </div>
</div>
</template>

<script>
import menus from "@/components/menus";
import city from "@/assets/json/city.json"
import page from "@/components/page";
export default {
  name: "index",
  components: {
    menus,
    page
  },
  data() {
    return {
      city: city,
      count: 0,
      policies: [
        {
          id: 0,
          add_time: '',
          address: '',
          title: '',
          content: ''
        }
      ],
      current_page: 1,
      policy_url: 'policy/',
      select_address: ''
    }
  },
  created() {
    this.reRequestPolicy()
  },
  methods: {
    citySelect() {
      this.select_address = this.$refs['cascader'].getCheckedNodes()[0].pathLabels.join("/")
      this.reRequestPolicy()
    },
    pageChange(current_page) {
      this.current_page = current_page
      this.reRequestPolicy()
    },
    cancelAddress() {
      this.select_address = ''
      this.reRequestPolicy()
    },
    reRequestPolicy() {
      this.policy_url = `policy/?address=${this.select_address}&page=${this.current_page}`
      this.$axios.get(this.policy_url).then(rep => {
        switch (rep.status) {
          case 200:
            this.policies = rep.data.results
            this.count = rep.data.count
            break
        }
      })
    }
  }
}
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
