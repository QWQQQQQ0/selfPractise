<template>
  <el-container style="height: calc(100% - 11px);">
    <left-part :choseItem.sync="choseDragItem"/>
    <middle-part
      :selectedItem.sync="selectedForm"
      :bindvalues="bindvalues"
      :choseItem.sync="choseDragItem"
    >
      <template slot="middleButton" slot-scope="BTNinfo">
        <el-button type="text" @click="BTNinfo.BTNinfo.preview = true">
          预览
        </el-button>
        <el-button type="text" @click="BTNinfo.BTNinfo.dialogShow=true">
          导出json
        </el-button>
        <el-button type="text" @click="BTNinfo.BTNinfo.resultForm=[]">
          清空
        </el-button>
      </template>
    </middle-part>
    <right-part :selectedFormItem="selectedForm"/>
  </el-container>
</template>

<script>
import LeftPart from './leftPart/LeftPart.vue'
import MiddlePart from './middlepart/MiddlePart.vue'
import RightPart from './rightpart/RightPart.vue'

export default {
  components: {
    LeftPart, MiddlePart, RightPart
  },
  data() {
    return {
      bindvalues: {},
      selectedForm: {},
      selectedFormItem: {},
      choseDragItem: {}
    }
  },
  methods: {
    handleMiddleBtn(btn) {
      console.log(btn)
    }
  }
}
</script>

<style lang="less" scoped>
  ::v-deep .el-form-item {
    margin-bottom: 5px;
  }

</style>>
<style>
.customform > .el-dialog__body {
  height: calc(100% - 117px);
}
</style>

