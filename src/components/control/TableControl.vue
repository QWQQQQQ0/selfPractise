<template>
  <div>
    <div class="tableWidget">
      <el-button type="text" size="small" @click="handleAddRow()">增加</el-button>
    </div>
    <el-table
      :data="Data"
      border
      :row-key="handleRowKey"
      style="width: 100%"
    >
      <el-table-column
        fixed="left"
        label="序号"
        width="50"
        type="index"
      />
      <template v-for="(item,index) in columData" >
        <el-table-column
          :key="index"
          :label="item.name"
          :fixed="item.fixed?item.fixed:false"
          :align="item.position?item.position:'center'"
          :width="item.width?item.width:'140'"
          :show-overflow-tooltip="item.hidden?item.hidden:false"
          :sortable="item.sortable?item.sortable:false"
        >
          <template slot-scope="scope">
            <form-producer :intable="true" :preInfo="scope.row[index]" :bindValues="test[scope.row[index].sign]"/>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handledelete(scope)">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
let columnData
export default {
  props: {
    preInfo: {
      type: Object,
      required: false
    },
    bindValues: {
      type: Object,
      require: false
    },
    intable: {
      type: Boolean,
      default: () => false
    },
    columData: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      Data: [],
      test: {}
    }
  },
  created() {
    this.bindValues[this.preInfo.model] = this.test
    this.Data = this.tableData.slice()
  },
  mounted() {
    console.log(this);
  },
  destroyed() {

  },
  methods: {
    handleAddRow(row) {
      const key = new Date().getTime()
      this.$set(this.test, key, {})
      columnData = this.columData.slice().map((item) => {
        return { ...item, sign: key }
      })
      this.Data.push(columnData)
      console.log(row, this.columData, this.Data);
    },
    handledelete(scope) {
      this.Data.splice(scope.$index, 1)
      delete this.test[scope.row[0].sign]
      console.log(scope, 'delete');
    },
    handleRowKey(row) {
      return row[0].sign
    }
  }
}
</script>

<style lang="less" scoped>
 ::v-deep .el-form-item__content {
  margin-left:0 !important;
 }
</style>
