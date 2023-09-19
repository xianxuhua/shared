<template>
<div>
  <menus active-index="/admin/policy"></menus>
  <el-button type="success" style="float: right" size="small" @click="dialogCreatePolicyVisible=true">新建</el-button>
  <el-table
      :data="policies"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="address"
        label="城市"
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="lookRow(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="changeRow(scope.row)" >编辑</el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.row)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-dialog :title="current_policy.title" :visible.sync="dialogLookPolicyVisible" :fullscreen="true">
    <p style="margin: 20px 0">城市：{{ current_policy.address }}</p>
    <pre>内容：{{ current_policy.content }}</pre>
  </el-dialog>
  <el-dialog :title="current_policy.title" :visible.sync="dialogChangePolicyVisible" :fullscreen="true">
    <el-input v-model="current_policy.title" style="margin-bottom: 10px"></el-input>
    <el-cascader
      :options="city"
      :props="{ checkStrictly: true }"
      filterable
      :placeholder="current_policy.address"
      @change="citySelect"
      ref="cascader"
      size="small"
      clearable
      >
    </el-cascader>
    <el-input :rows="10" type="textarea" v-model="current_policy.content" style="margin-bottom: 10px"></el-input>
    <div style="float:right;">
      <el-button @click="dialogChangePolicyVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUpdatePolicyForm">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="新建就业政策" :visible.sync="dialogCreatePolicyVisible" :fullscreen="true">
    <el-input v-model="current_policy.title" style="margin-bottom: 10px" placeholder="标题"></el-input>
    <el-cascader
      :options="city"
      :props="{ checkStrictly: true }"
      filterable
      placeholder="城市"
      @change="citySelect"
      ref="cascader"
      size="small"
      clearable
      >
    </el-cascader>
    <el-input :rows="18" type="textarea" v-model="current_policy.content" placeholder="内容" style="margin-bottom: 10px"></el-input>
    <div style="float:right;">
      <el-button @click="dialogCreatePolicyVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitPolicyForm">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/admin/menus";
import city from "assets/json/city.json";

export default {
  name: "policy",
  components: {
    menus
  },
  data() {
    return {
      city: city,
      dialogCreatePolicyVisible: false,
      dialogLookPolicyVisible: false,
      dialogChangePolicyVisible: false,
      policies: [
        {
          id: 0,
          title: '',
          content: '',
          address: ''
        }
      ],
      current_policy: {
        id: 0,
        title: '',
        content: '',
        address: ''
      }
    }
  },
  created() {
    this.$axios.get("policy/").then(rep => {
      switch (rep.status) {
        case 200:
          this.policies = rep.data.results
          break
      }
    })
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    lookRow(row) {
      this.$axios.get("policy/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_policy = rep.data
            this.dialogLookPolicyVisible = true
            break
        }
      })
      console.log(row)
    },
    changeRow(row) {
      this.$axios.get("policy/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_policy = rep.data
            this.dialogChangePolicyVisible = true
            break
        }
      })
    },
    deleteRow(row) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("policy/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.policies, this.policies.indexOf(this.policies.filter(v => v.id===row.id)[0]))
              this.$notify.success('删除成功!')
              break
          }
        })
      }).catch(() => {
      })
    },
    submitUpdatePolicyForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("policy/"+this.current_policy.id+"/", {
        title: this.current_policy.title,
        content: this.current_policy.content,
        address: this.current_policy.address
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("更新成功")
            this.dialogChangePolicyVisible = false
            this.$set(this.policies, this.policies.indexOf(this.policies.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    submitPolicyForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.post("policy/", {
        title: this.current_policy.title,
        content: this.current_policy.content,
        address: this.current_policy.address
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("创建成功")
            this.dialogCreatePolicyVisible = false
            this.policies.unshift(rep.data)
            break
        }
      })
    },
    citySelect() {
      this.current_policy.address = this.$refs['cascader'].getCheckedNodes()[0].pathLabels.join("/")
    },
  }
}
</script>

<style scoped>

</style>
