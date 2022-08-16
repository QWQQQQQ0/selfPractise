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
    <el-switch
      v-model="bindValues[preInfo.model]"
      :width="(preInfo.options&&preInfo.options.width)?preInfo.options.width:40"
      :name="(preInfo.options&&preInfo.options.name)?preInfo.options.name:''"
      :validate-event="(preInfo.options&&preInfo.options.validatEvent)?preInfo.options.validateEvent:true"
      :show-password="(preInfo.options&&preInfo.options.showPassword)?preInfo.options.showPassword:false"
      :disabled="(preInfo.options&&preInfo.options.disabled)?preInfo.options.disabled:false"
      :size="(preInfo.options&&preInfo.options.size)?preInfo.options.size:''"
      :active-text="(preInfo.options&&preInfo.options.activeText)?preInfo.options.activeText:''"
      :inactive-text="(preInfo.options&&preInfo.options.inactiveText)?preInfo.options.inactiveText:''"
      :active-value="(preInfo.options&&preInfo.options.activeValue)?preInfo.options.activeValue:true"
      :inactive-value="(preInfo.options&&preInfo.options.inactiveValue)?preInfo.options.inactiveValue:false"
      :active-color="(preInfo.options&&preInfo.options.activeColor)?preInfo.options.activeColor:'#409EFF'"
      :inactive-color="(preInfo.options&&preInfo.options.inactiveColor)?preInfo.options.inactiveColor:'#C0CCDA'"
      @change="handleChange"
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
  methods: {
    handleChange() {

    }
  }
}
</script>

<style>

</style>
