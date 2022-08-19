<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="handleSeletcRow"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        label="创建日期"
        prop="createData"
      />
      <el-table-column
        prop="formName"
        label="表单名称"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >导出</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="handlePageChange"
    />

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
      append-to-body
    >
      <dynamic-form-show :key="activeForm.formId" v-el-drag-dialog :activeForm="activeForm.controlList"/>
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>

import DynamicFormShow from '@/components/DynamicFormShow.vue'
export default {
  components: { DynamicFormShow },
  data() {
    return {
      fileList: [],
      tableData: [],
      pageCache: {},
      options: [
        { label: '覆盖', value: 0 }, { label: '放弃', value: 1 }, { label: '混合', value: 2 }, { label: '原始', value: 3 }
      ],
      uploadMethod: '',
      totalCount: 0,
      currentPage: 0,
      selectedRow: {},
      dialogVisible: false,
      activeForm: []
    }
  },
  mounted() {
    this.requestByPage(1)
  },
  destroyed() {

  },
  methods: {
    requestByPage(page) {
      if (this.pageCache[page]) {
        this.currentPage = page
        this.tableData = this.pageCache[page]
        return this.tableData
      }
      this.$request({
        url: '/vue-self/form/list',
        method: 'get',
        params: { page: page, limit: 10 }
      }).then(res => {
        this.tableData = res.data
        this.totalCount = res.totalCount
        this.currentPage = page
      })
    },
    handleEdit(index, item) {
      for (let i = 0; i < item.controlList.length; i++) {
        item.controlList[i]['model'] = item.controlList[i].type + '_' + parseInt(Math.random() * 100000)
      }
      this.dialogVisible = true
      this.activeForm = item
      console.log(item.controlList);
    },
    handleDelete() {

    },
    handlePageChange(page) {
      this.pageCache[this.currentPage] = this.tableData
      this.requestByPage(page)
      this.$nextTick(() => {
        if (this.selectedRow[page]) {
          for (const i in this.selectedRow[page]) {
            const row = this.selectedRow[page][i]
            this.$refs.multipleTable.toggleRowSelection(row);
            console.log(i);
          }
        }
      })
    },
    handleSeletcRow(selection, row) {
      if (!this.selectedRow[this.currentPage]) {
        this.selectedRow[this.currentPage] = {}
      }
      if (this.selectedRow[this.currentPage][row.formId]) {
        delete this.selectedRow[this.currentPage][row.formId]
      } else {
        this.selectedRow[this.currentPage][row.formId] = row
      }
    }
  }
}
</script>

<style>

</style>
