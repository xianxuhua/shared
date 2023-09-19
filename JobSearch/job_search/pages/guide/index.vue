<template>
  <div>
    <menus active-index="/guide"></menus>
    <div>
      <el-tabs tab-position="left">
        <el-tab-pane label="简历指导">
          <guide_questions :guides="guides.filter(v=>v.category==='简历指导')"></guide_questions>
        </el-tab-pane>
        <el-tab-pane label="就业协议">
          <guide_questions :guides="guides.filter(v=>v.category==='就业协议')"></guide_questions>
        </el-tab-pane>
        <el-tab-pane label="户口档案">
          <guide_questions :guides="guides.filter(v=>v.category==='户口档案')"></guide_questions>
        </el-tab-pane>
        <el-tab-pane label="职业规划">
          <guide_questions :guides="guides.filter(v=>v.category==='职业规划')"></guide_questions>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
import menus from "@/components/menus";
import page from "@/components/page";
import guide_questions from "../../components/guide_questions";
export default {
  name: "index",
  components: {
    menus,
    page,
    guide_questions
  },
  data() {
    return {
      guides: [
        {
          id: 0,
          category: '',
          title: '',
          content: ''
        }
      ]
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
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
