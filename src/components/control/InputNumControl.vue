<template>
  <el-form-item
    :prop="preInfo.model"
    :label="intable?'' :preInfo.name"
    :label-width="preInfo.labelWidth?preInfo.labelWidth:''"
    :error="preInfo.error?preInfo.error:''"
    :required="preInfo.required?preInfo.required:false"
    :inline-message="preInfo.inlineMessage?preInfo.inlineMessage:false"
    :show-message="preInfo.shoMessage?preInfo.shoMessage:true"
    :size="preInfo.size?preInfo.size:''"
  >
    <el-input-number
      v-model="bindValues[preInfo.model]"
      :style="{width:preInfo.options?preInfo.options.width:'auto'}"
      :placeholder="(preInfo.options&&preInfo.options.placeholder)?preInfo.options.placeholder:''"
      :name="(preInfo.options&&preInfo.options.name)?preInfo.options.name:''"
      :max="(preInfo.options&&preInfo.options.max)?preInfo.options.max:''"
      :min="(preInfo.options&&preInfo.options.min)?preInfo.options.min:0"
      :step="(preInfo.options&&preInfo.options.step)?preInfo.options.step:''"
      :precision="(preInfo.options&&preInfo.options.precision)?preInfo.options.precision:0"
      :label="(preInfo.options&&preInfo.options.label)?preInfo.options.label:''"
      :step-strictly="(preInfo.options&&preInfo.options.stepStrictly)?preInfo.options.stepStrictly:false"
      :readonly="(preInfo.options&&preInfo.options.readonly)?preInfo.options.readonly:false"
      :controls="(preInfo.options&&preInfo.options.controls)?preInfo.options.controls:true"
      :controls-position="(preInfo.options&&preInfo.options.controlsPosition)?preInfo.options.controlsPosition:''"
      :disabled="(preInfo.options&&preInfo.options.disabled)?preInfo.options.disabled:false"
    />
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
  }
}
</script>

<style>

</style>
