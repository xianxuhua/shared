<template>
  <div>
    <menus active-index="/activity/lecture"></menus>
    <el-page-header @back="$router.back()"></el-page-header>
    <div class="fair" style="display: flex;justify-content: space-around">
      <p>地点：{{ fair.school }} {{ fair.address }}</p>
      <p>时间：{{ fair.date }} {{ fair.start_time|timeFormat }}-{{ fair.end_time|timeFormat }}</p>
    </div>
    <el-divider></el-divider>
    <el-table
      :data="enterprises"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="250">
      </el-table-column>
      <el-table-column
        prop="field"
        label="领域"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="位置"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="lookPosition(scope.row)" >查看招聘岗位</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="在招岗位" :visible.sync="dialogLookPositionVisible">
      <p v-for="(position, index) in positions">{{ index+1 }}. <nuxt-link :to="{path: '/position/'+position.id}">{{ position.name }}</nuxt-link></p>
    </el-dialog>
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
      dialogLookPositionVisible: false,
      fair: {
        id: 0,
        school: '',
        address: '',
        start_time: '',
        end_time: '',
        date: '',
        desc: ''
      },
      enterprises: [

      ],
      positions: [
        {
          id: '',
          name: ''
        }
      ]
    }
  },
  created() {
    const fair_id = this.$route.params.id
    this.$axios.get("fair/"+fair_id).then(rep => {
      switch (rep.status) {
        case 200:
          this.fair = rep.data
          break
      }
    })

    this.$axios.get("enterprise_fair/?fair="+fair_id).then(rep => {
      switch (rep.status) {
        case 200:
          for (let i = 0; i < rep.data.results.length; i++) {
            this.enterprises.push(rep.data.results[i].enterprise)
          }
          break
      }
    })
  },
  methods: {
    lookPosition(row) {
      this.$axios.get("position/?enterprise="+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.positions = rep.data.results
            this.dialogLookPositionVisible = true
            break
        }
      })
    }
  }
}
</script>

<style scoped>
.fair p {
  margin-top: 10px;
}
.el-dialog p {
  margin-bottom: 10px;
}
</style>
