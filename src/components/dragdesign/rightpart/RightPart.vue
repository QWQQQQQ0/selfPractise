<template>
  <el-aside v-if="selectedFormItem.model" id="formDesignRight" width="200px">
    <div>
      name: <el-input v-model="selectedFormItem.name"/>
    </div>
    <div>
      宽度: <el-input :key="selectedFormItem.model" v-model="selectedFormItem.options.width" v-wheelModel="{key: 'width', option: selectedFormItem.options}" placeholder="请输入内容"/>
    </div>
    <div>
      计算公式: <el-input :key="selectedFormItem.model" v-model="selectedFormItem.options.method" placeholder="请输入内容" @focus="computedShow = true"/>
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
    <el-dialog
      title="提示"
      :visible.sync="computedShow"
      width="60%"
    >
      <computed-control
        :computedShow.sync="computedShow"
        :resultBox="$parent.$children[1].resultForm"
        :target="selectedFormItem"
      />
    </el-dialog>
  </el-aside>
</template>

<script>
import ComputedControl from '@/components/control/ComputedControl.vue'

export default {
  components: { ComputedControl },
  props: {
    selectedFormItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      computedShow: false,
      resultBox: []
    }
  },
  watch: {
    selectedFormItem: {
      handler(newV, oldV) {
        console.log(newV, 'watch');
      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
#formDesignRight {
    color: rgb(43, 43, 43);
}
</style>>
