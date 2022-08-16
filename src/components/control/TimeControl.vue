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
    <el-date-picker
      v-model="bindValues[preInfo.model]"
      :style="{width:preInfo.options?preInfo.options.width:'auto'}"
      :type="preInfo.type"
      :readonly="(preInfo.options&&preInfo.options.readonly)?preInfo.options.readonly:false"
      :editable="(preInfo.options&&preInfo.options.editable)?preInfo.options.editable:false"
      :clearable="(preInfo.options&&preInfo.options.clearable)?preInfo.options.clearable:true"
      :unlink-panels="(preInfo.options&&preInfo.options.unlinkPanels)?preInfo.options.unlinkPanels:true"
      :validate-event="(preInfo.options&&preInfo.options.validateEvent)?preInfo.options.validateEvent:true"
      :size="(preInfo.options&&preInfo.options.size)?preInfo.options.size:''"
      :start-placeholder="(preInfo.options&&preInfo.options.startPlaceholder)?preInfo.options.startPlaceholder:''"
      :end-placeholder="(preInfo.options&&preInfo.options.endPlaceholder)?preInfo.options.endPlaceholder:''"
      :prefix-icon="(preInfo.options&&preInfo.options.prefixIcon)?preInfo.options.prefixIcon:''"
      :clear-icon="(preInfo.options&&preInfo.options.clearIcon)?preInfo.options.clearIcon:''"
      :placeholder="(preInfo.options&&preInfo.options.placeholder)?preInfo.options.placeholder:''"
      :align="(preInfo.options&&preInfo.options.align)?preInfo.options.align:'center'"
      :popper-class="(preInfo.options&&preInfo.options.popperClass)?preInfo.options.popperClass:''"
      :picker-options="(preInfo.options&&preInfo.options.pickerOptions)?preInfo.options.pickerOptions:{}"
      :range-separator="(preInfo.options&&preInfo.options.rangeSeparator)?preInfo.options.rangeSeparator:'-'"
      :default-value="(preInfo.options&&preInfo.options.defaultValue)?preInfo.options.defaultValue:data"
      :default-time="(preInfo.options&&preInfo.options.defaultTime)?preInfo.options.defaultTime:''"
      :value-format="(preInfo.options&&preInfo.options.valueFormat)?preInfo.options.valueFormat:'yyyy-MM-dd-HH-mm-ss'"
      :format="(preInfo.options&&preInfo.options.format)?preInfo.options.format:'yyyy-MM-dd-HH-mm-ss'"
      :name="(preInfo.options&&preInfo.options.name)?preInfo.options.name:''"
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
      data: {}
    }
  },
  mounted() {
    this.data = new Date()
  }

}
</script>

<style>

</style>
