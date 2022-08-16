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
    <el-checkbox-group
      v-model="bindValues[preInfo.model]"
    >
      <el-checkbox v-for="checkBox in preInfo.options.options" :key="checkBox.name" :label="checkBox.label">{{ checkBox.value }}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
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
  created() {
    if (!this.bindValues[this.preInfo.model]) {
      this.$set(this.bindValues, this.preInfo.model, [])
    }
  }

}
</script>

<style>

</style>
