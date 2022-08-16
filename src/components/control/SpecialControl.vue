<template>
  <el-form-item
    :prop="preInfo.model"
    :label="intable?'' :preInfo.name"
    :label-width="preInfo.labelWidth?preInfo.labelWidth:''"
    :error="preInfo.error?preInfo.error:''"
    :required="preInfo.required?preInfo.required:false"
    :inlineMessage="preInfo.inlineMessage?preInfo.inlineMssage:false"
    :showMessage="preInfo.showMessage?preInfo.showMessage:true"
    :size="preInfo.size?preInfo.size:''"
  >
    <el-input
      readonly
      :value="bindValues[preInfo.model]"
      :style="{width:preInfo.options?preInfo.options.width:'auto'}"
      @focus="handleSelectDialog(preInfo.type,preInfo)"
    />
  </el-form-item>
</template>

<script>
export default {
  inject: {
    handleDialog: {
      default: () => () => {}
    }
  },
  props: {
    preInfo: {
      type: Object,
      required: true
    },
    bindValues: {
      type: Object,
      require: true
    },
    intable: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleSelectDialog(type, item) {
      if (this.handleDialog) {
        this.handleDialog(item, this.bindValues[item.model])
      }
    }
  }
}
</script>

<style>

</style>
