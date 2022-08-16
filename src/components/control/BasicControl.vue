<template>
  <el-form-item
    :prop="preInfo.model"
    :label="intable?'' :preInfo.name"
    :label-width="preInfo.labelWidth?preInfo.labelWidth:''"
    :error="preInfo.error?preInfo.error:''"
    :required="preInfo.required?preInfo.required:false"
    :inlineMessage="preInfo.inlineMessage?preInfo.inlineMssage:false"
    :showMessage="preInfo.showMessage?preInfo.showMessage:true"
    label-position="left"
    :size="preInfo.size?preInfo.size:''"
  >
    <el-input
      v-model="bindValues[preInfo.model]"
      :style="{width:preInfo.options.width}"
      :maxlength="(preInfo.options&&preInfo.options.maxlength)?preInfo.options.maxlength:''"
      :minlength="(preInfo.options&&preInfo.options.minlength)?preInfo.options.minlength:''"
      :placeholder="(preInfo.options&&preInfo.options.placeholder)?preInfo.options.placeholder:''"
      :prefix-icon="(preInfo.options&&preInfo.options.prefixIcon)?preInfo.options.prefixIcon:''"
      :suffix-icon="(preInfo.options&&preInfo.options.suffixIcon)?preInfo.options.suffixIcon:''"
      :autocomplete="(preInfo.options&&preInfo.options.autocomplete)?preInfo.options.autocomplete:'off'"
      :name="(preInfo.options&&preInfo.options.name)?preInfo.options.name:''"
      :max="(preInfo.options&&preInfo.options.max)?preInfo.options.max:''"
      :min="(preInfo.options&&preInfo.options.min)?preInfo.options.min:0"
      :step="(preInfo.options&&preInfo.options.step)?preInfo.options.step:''"
      :form="(preInfo.options&&preInfo.options.form)?preInfo.options.form:''"
      :label="(preInfo.options&&preInfo.options.label)?preInfo.options.label:''"
      :readonly="(preInfo.options&&preInfo.options.readonly)?preInfo.options.readonly:false"
      :clearable="(preInfo.options&&preInfo.options.clearable)?preInfo.options.clearable:false"
      :show-password="(preInfo.options&&preInfo.options.showPassword)?preInfo.options.showPassword:false"
      :disabled="(preInfo.options&&preInfo.options.disabled)?preInfo.options.disabled:false"
      :size="(preInfo.options&&preInfo.options.size)?preInfo.options.size:''"
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
  },
  watch: {
    'preInfo.options.width': {
      handler(newV, oldV) {
        console.log('change', newV);
      }
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
