<template>
  <el-container style="height: calc(100% - 11px);">
    <left-part :choseItem.sync="choseDragItem"/>
    <middle-part
      :selectedItem.sync="selectedForm"
      :bindvalues="bindvalues"
      :choseItem.sync="choseDragItem"
    />
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

