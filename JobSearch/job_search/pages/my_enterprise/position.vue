<template>
<div>
  <menus active-index="/my_enterprise/position"></menus>
  <el-button @click="dialogCreatePositionVisible = true" style="float: right" size="small" type="success">新建</el-button>
  <div style="margin-left: 50px">
  <!--            所有职位-->
    <el-table
      :data="positions"
      ref="filterTable"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        width="100">
      </el-table-column>
      <el-table-column
        prop="work_kind"
        label="工作性质"
        width="150">
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="发布时间"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="changePosition(scope.row.id)" >编辑</el-button>
          <el-button type="text" size="small" @click="deletePosition(scope.row.id)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  <el-dialog title="新建职位" :visible.sync="dialogCreatePositionVisible" :fullscreen="true">
    <el-form :model="createPositionForm" :rules="positionRules" ref="createPositionForm" label-width="80px" style="width: 900px;margin: 0 auto">
      <el-form-item label="名称" prop="name">
        <el-input v-model="createPositionForm.name"></el-input>
      </el-form-item>
      <el-form-item label="宣讲会" prop="lecture">
        <el-select v-model="createPositionForm.lecture" placeholder="请选择">
          <el-option
            v-for="lecture in lectures"
            :key="lecture.value"
            :label="lecture.label"
            :value="lecture.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="createPositionForm.category" placeholder="分类" style="margin-bottom: 10px">
          <el-option
            v-for="item in [{
              value: '技术',
              label: '技术'
            }, {
              value: '产品',
              label: '产品'
            }, {
              value: '设计',
              label: '设计'
            }, {
              value: '运营',
              label: '运营'
            }, {
              value: '市场',
              label: '市场'
            }, {
              value: '销售',
              label: '销售'
            }, {
              value: '职能',
              label: '职能'
            }, {
              value: '游戏',
              label: '游戏'
            }]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位描述" prop="desc">
        <el-input v-model="createPositionForm.desc" type="textarea" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="任职要求" prop="skill_require">
        <el-input v-model="createPositionForm.skill_require" type="textarea" :rows="5"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围">
        <el-input v-model="createPositionForm.min_salary" style="width: 100px"></el-input>---
        <el-input v-model="createPositionForm.max_salary" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="学历要求" prop="edu_require">
        <el-select v-model="createPositionForm.edu_require" :placeholder="createPositionForm.edu_require">
          <el-option
            v-for='item in [
              {
                value: "大专",
                label: "大专"
              }, {
                value: "本科",
                label: "本科"
              }, {
                value: "硕士",
                label: "硕士"
              }, {
                value: "博士",
                label: "博士"
              }
            ]'
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作性质" prop="work_kind">
        <el-select v-model="createPositionForm.work_kind" :placeholder="changePositionForm.work_kind">
          <el-option
            v-for='item in [
              {
                value: "全职",
                label: "全职"
              }, {
                value: "实习",
                label: "实习"
              }
            ]'
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作经验" prop="min_work_year">
        <el-input v-model="createPositionForm.min_work_year" style="width: 100px;margin-right: 10px"></el-input><span>年</span>
      </el-form-item>
      <el-form-item label="招聘人数" prop="num">
        <el-input v-model="createPositionForm.num" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="面试次数" prop="num">
        <el-input v-model="createPositionForm.interview_times" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="开始日期">
        <el-date-picker
          v-model="createPositionForm.start_date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker
          v-model="createPositionForm.end_date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="tags" prop="tags">
        <position_tag :dynamicTags="createPositionForm.tags"></position_tag>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogCreatePositionVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitCreatePositionForm('createPositionForm')">确 定</el-button>
    </div>
  </el-dialog>

  <el-dialog title="编辑职位" :visible.sync="dialogChangePositionVisible" :fullscreen="true">
    <el-form :model="changePositionForm" :rules="positionRules" ref="changePositionForm" label-width="80px" style="width: 900px;margin: 0 auto">
      <el-form-item label="名称" prop="name">
        <el-input v-model="changePositionForm.name"></el-input>
      </el-form-item>
      <el-form-item label="宣讲会" prop="lecture">
        <el-select v-model="changePositionForm.lecture" placeholder="请选择">
          <el-option
            v-for="lecture in lectures"
            :key="lecture.value"
            :label="lecture.label"
            :value="lecture.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="changePositionForm.category" :placeholder="changePositionForm.category" style="margin-bottom: 10px">
          <el-option
            v-for="item in [{
              value: '技术',
              label: '技术'
            }, {
              value: '产品',
              label: '产品'
            }, {
              value: '设计',
              label: '设计'
            }, {
              value: '运营',
              label: '运营'
            }, {
              value: '市场',
              label: '市场'
            }, {
              value: '销售',
              label: '销售'
            }, {
              value: '职能',
              label: '职能'
            }, {
              value: '游戏',
              label: '游戏'
            }]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位描述" prop="desc">
        <el-input v-model="changePositionForm.desc" type="textarea" :rows="3"></el-input>
      </el-form-item>
      <el-form-item label="任职要求" prop="skill_require">
        <el-input v-model="changePositionForm.skill_require" type="textarea" :rows="5"></el-input>
      </el-form-item>
      <el-form-item label="薪资范围">
        <el-input v-model="changePositionForm.min_salary" style="width: 100px"></el-input>---
        <el-input v-model="changePositionForm.max_salary" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="学历要求" prop="edu_require">
        <el-select v-model="changePositionForm.edu_require" :placeholder="changePositionForm.edu_require">
          <el-option
            v-for='item in [
              {
                value: "大专",
                label: "大专"
              }, {
                value: "本科",
                label: "本科"
              }, {
                value: "硕士",
                label: "硕士"
              }, {
                value: "博士",
                label: "博士"
              }
            ]'
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作性质" prop="work_kind">
        <el-select v-model="changePositionForm.work_kind" :placeholder="changePositionForm.work_kind">
          <el-option
            v-for='item in [
              {
                value: "全职",
                label: "全职"
              }, {
                value: "实习",
                label: "实习"
              }
            ]'
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作经验" prop="min_work_year">
        <el-input v-model="changePositionForm.min_work_year" style="width: 100px;margin-right: 10px"></el-input><span>年</span>
      </el-form-item>
      <el-form-item label="招聘人数" prop="num">
        <el-input v-model="changePositionForm.num" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="面试次数" prop="interview_times">
        <el-input v-model="changePositionForm.interview_times" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="开始日期">
        <el-date-picker
          v-model="changePositionForm.start_date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker
          v-model="changePositionForm.end_date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
    </el-form>

    <el-form label-width="80px" style="width: 900px;margin: 0 auto">
      <el-form-item label="tags" prop="tags">
        <position_tag :dynamicTags="changePositionForm.tags"></position_tag>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogChangePositionVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitChangePositionForm('changePositionForm')">确 定</el-button>
    </div>
  </el-dialog>
</div>

</div>
</template>

<script>
import menus from "../../components/my_enterprise/menus";
import position_tag from "../../components/position_tag";
export default {
  name: "position",
  components: {
    menus,
    position_tag
  },
  data() {
    return {
      searchName: '',
      dialogCreatePositionVisible: false,
      dialogChangePositionVisible: false,
      createPositionForm: {
        id: 0,
        name: '',
        desc: '',
        num: 0,
        skill_require: '',
        edu_require: '',
        min_work_year: 0,
        min_salary: 0,
        max_salary: 0,
        category: '',
        interview_times: 1,
        lecture: '',
        tags: ['五险一金'],
        work_kind: '',
        start_date: '',
        end_date: ''
      },
      changePositionForm: {
        id: 0,
        name: '',
        desc: '',
        num: 0,
        skill_require: '',
        edu_require: '',
        min_work_year: 0,
        min_salary: 0,
        max_salary: 0,
        category: '',
        interview_times: 1,
        lecture: '',
        tags: [],
        work_kind: '',
        start_date: '',
        end_date: ''
      },
      positionRules: {
        name: [
          { required: true, message: '请输入职位名称', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入职位描述', trigger: 'blur' },
        ],
        skill_require: [
          { required: true, message: '请输入技能要求', trigger: 'blur' },
        ],
        edu_require: [
          { required: true, message: '请选择学历要求', trigger: 'blur' },
        ],
        category: [
          { required: true, message: '请输入职位分类', trigger: 'blur' },
        ],
      },
      positions: [
        {
          id: 0,
          name: '',
          add_time: '',
        }
      ],
      position_count: 0,
      lectures: [
      ]
    }
  },
  created() {
    this.$axios.get("lecture/?enterprise="+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          for (let lecture of rep.data.results) {
            this.lectures.push({
              label: lecture.school,
              value: lecture.id
            })
          }
          break
      }
    })
    this.$axios.get("position/?enterprise="+this.$store.state.user.enterprise_id).then(rep => {
      switch (rep.status) {
        case 200:
          this.positions = rep.data.results
          this.position_count = rep.data.count
          break
      }
    })
  },
  methods: {
    deletePosition(pos_id) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$confirm('是否删除职位, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete("position/"+pos_id).then(rep => {
          switch (rep.status) {
            case 204:
              this.$delete(this.positions, this.positions.indexOf(this.positions.filter(v => v.id==pos_id)[0]))
              this.$notify.success('删除成功!');
              break
          }
        })
      }).catch(() => {
      });
    },
    changePosition(pos_id) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$axios.get("position/"+pos_id).then(rep => {
        switch (rep.status) {
          case 200:
            this.changePositionForm = rep.data
            break
        }
      })
      this.dialogChangePositionVisible=true
    },
    submitCreatePositionForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("position/", {
              name: this.createPositionForm.name,
              desc: this.createPositionForm.desc,
              skill_require: this.createPositionForm.skill_require,
              min_salary: this.createPositionForm.min_salary,
              max_salary: this.createPositionForm.max_salary,
              edu_require: this.createPositionForm.edu_require,
              min_work_year: this.createPositionForm.min_work_year,
              num: this.createPositionForm.num,
              category: this.createPositionForm.category,
              interview_times: this.createPositionForm.interview_times,
              lecture: this.createPositionForm.lecture,
              tags: this.createPositionForm.tags,
              work_kind: this.createPositionForm.work_kind,
              start_date: this.createPositionForm.start_date,
              end_date: this.createPositionForm.end_date
            }).then(rep => {
              switch (rep.status) {
                case 201:
                  this.$notify.success("创建成功")
                  this.positions.unshift(rep.data)
                  this.dialogCreatePositionVisible = false
                  break
              }
            })
          }
      });
    },
    submitChangePositionForm(formName) {
      const token = this.$store.state.user.token
      if (!token) {
        this.$notify.error("请先登录")
        return
      }

      this.$axios.setToken(token, 'Bearer')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 修改职位
            this.$axios.patch("position/"+this.changePositionForm.id+"/", {
              name: this.changePositionForm.name,
              desc: this.changePositionForm.desc,
              skill_require: this.changePositionForm.skill_require,
              min_salary: this.changePositionForm.min_salary,
              max_salary: this.changePositionForm.max_salary,
              edu_require: this.changePositionForm.edu_require,
              min_work_year: this.changePositionForm.min_work_year,
              num: this.changePositionForm.num,
              category: this.changePositionForm.category,
              lecture: this.changePositionForm.lecture,
              tags: this.changePositionForm.tags,
              work_kind: this.changePositionForm.work_kind,
              start_date: this.changePositionForm.start_date,
              end_date: this.changePositionForm.end_date,
              interview_times: this.changePositionForm.interview_times
            }).then(rep => {
              switch (rep.status) {
                case 200:
                  this.$set(this.positions, this.positions.indexOf(this.positions.filter(v => v.id===this.changePositionForm.id)[0]), rep.data)
                  this.$notify.success("修改成功")
                  this.dialogChangePositionVisible = false
                  break
              }
            })
        }
      });
    },
    searchPosition() {
      this.$axios.get("position/?enterprise="+this.$store.state.user.enterprise_id+"&name="+this.searchName).then(rep => {
        switch (rep.status) {
          case 200:
            this.positions = rep.data.results
            break
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
