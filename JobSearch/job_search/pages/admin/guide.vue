<template>
<div>
  <menus active-index="/admin/guide"></menus>
  <el-button type="success" style="float: right" size="small" @click="dialogCreateGuideVisible=true">新建</el-button>
  <el-table
      :data="guides"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="500">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        :filters="[{ text: '简历指导', value: '简历指导' },
        { text: '就业协议', value: '就业协议' },
         { text: '户口档案', value: '户口档案' },
          { text: '职业规划', value: '职业规划' },]"
        :filter-method="filterHandler"
        column-key="category"
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
  <el-dialog :title="current_guide.title" :visible.sync="dialogLookGuideVisible" :fullscreen="true">
    <pre>{{ current_guide.content }}</pre>
  </el-dialog>
  <el-dialog :title="current_guide.title" :visible.sync="dialogChangeGuideVisible" :fullscreen="true">
    <el-input v-model="current_guide.title" style="margin-bottom: 10px"></el-input>
    <el-select v-model="current_guide.category" placeholder="分类" style="margin-bottom: 10px">
      <el-option
        v-for="item in [{
          value: '简历指导',
          label: '简历指导'
        }, {
          value: '就业协议',
          label: '就业协议'
        }, {
          value: '户口档案',
          label: '户口档案'
        }, {
          value: '职业规划',
          label: '职业规划'
        }]"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input :rows="20" type="textarea" v-model="current_guide.content" style="margin-bottom: 10px"></el-input>
    <div style="float:right;">
      <el-button @click="dialogChangeGuideVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUpdateGuideForm">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="新建就业指导" :visible.sync="dialogCreateGuideVisible" :fullscreen="true">
    <el-input v-model="current_guide.title" style="margin-bottom: 10px" placeholder="标题"></el-input>
    <el-select v-model="current_guide.category" placeholder="分类" style="margin-bottom: 10px">
      <el-option
        v-for="item in [{
          value: '简历指导',
          label: '简历指导'
        }, {
          value: '就业协议',
          label: '就业协议'
        }, {
          value: '户口档案',
          label: '户口档案'
        }, {
          value: '职业规划',
          label: '职业规划'
        }]"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input :rows="18" type="textarea" v-model="current_guide.content" placeholder="内容" style="margin-bottom: 10px"></el-input>
    <div style="float:right;">
      <el-button @click="dialogCreateGuideVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitGuideForm">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import menus from "../../components/admin/menus";
export default {
  name: "guide",
  components: {
    menus
  },
  data() {
    return {
      guides: [
        {
          id: 1,
          title: '',
          content: '',
          category: ''
        }
      ],
      dialogLookGuideVisible: false,
      dialogChangeGuideVisible: false,
      dialogCreateGuideVisible: false,
      current_guide: {
        id: 1,
        title: '',
        content: '',
        category: ''
      }
    }
  },
  created() {
    this.$axios.get("guide/").then(rep => {
      switch (rep.status) {
        case 200:
          this.guides = rep.data.results
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
      this.$axios.get("guide/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_guide = rep.data
            this.dialogLookGuideVisible = true
            break
        }
      })
    },
    changeRow(row) {
      this.$axios.get("guide/"+row.id).then(rep => {
        switch (rep.status) {
          case 200:
            this.current_guide = rep.data
            this.dialogChangeGuideVisible = true
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
        this.$axios.delete("guide/"+row.id+"/").then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.guides, this.guides.indexOf(this.guides.filter(v => v.id===row.id)[0]))
              this.$notify.success('删除成功!')
              break
          }
        })
      }).catch(() => {
      })
    },

    submitUpdateGuideForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.patch("guide/"+this.current_guide.id+"/", {
        title: this.current_guide.title,
        category: this.current_guide.category,
        content: this.current_guide.content
      }).then(rep => {
        switch (rep.status) {
          case 200:
            this.$notify.success("更新成功")
            this.dialogChangeGuideVisible = false
            this.$set(this.guides, this.guides.indexOf(this.guides.filter(v=>v.id===rep.data.id)[0]), rep.data)
            break
        }
      })
    },
    submitGuideForm() {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.post("guide/", {
        title: this.current_guide.title,
        content: this.current_guide.content,
        category: this.current_guide.category
      }).then(rep => {
        switch (rep.status) {
          case 201:
            this.$notify.success("创建成功")
            this.dialogCreateGuideVisible = false
            this.guides.unshift(rep.data)
            break
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
