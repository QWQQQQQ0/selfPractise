<template>
  <el-aside v-if="selectedFormItem.name" id="formDesignRight" width="200px">
    <div>
      name: <el-input v-model="selectedFormItem.name"/>
    </div>
    <div>
      宽度: <el-input :key="selectedFormItem.model" v-model="selectedFormItem.options.width" v-wheelModel="{key: 'width', option: selectedFormItem.options}" placeholder="请输入内容"/>
    </div>
    <template v-if="selectedFormItem.type === 'grid'">
      <el-input-number
        v-for="(span, index) in selectedFormItem.columns"
        :key="index"
        v-model="span.span"
        v-wheelModel="{key: 'span', option: span}"
        controls-position="right"
        :min="1"
        :max="24"
        size="small"
      />
    </template>
  </el-aside>
</template>

<script>
export default {
  props: {
    selectedFormItem: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    selectedFormItem: {
      handler(newV, oldV) {
        console.log(newV, 'watch');
      }
    }
  }
}
</script>

<style lang="less" scoped>
#formDesignRight {
    color: rgb(43, 43, 43);
}
</style>>
