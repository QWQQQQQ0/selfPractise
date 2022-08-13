<template>
   <el-form-item
      :prop="preInfo.model"
      :label="intable?'' :preInfo.name"
      :label-width="preInfo.labelWidth?preInfo.labelWidth:''"
      :error="preInfo.error?preInfo.error:''"
      :required="preInfo.required?preInfo.required:false"
      :inlineMessage="preInfo.inlineMessage?preInfo.inlineMssage:false"
      :showMessage="preInfo.showMessage?preInfo.showMessage:true"
      :size="preInfo.size?preInfo.size:''">
      <el-radio-group
      v-model="bindValues[preInfo.model]"
      :disabled="(preInfo.options&&preInfo.options.disabled)?preInfo.options.disabled:false"
      :size="(preInfo.options&&preInfo.options.size)?preInfo.options.size:'medium'"
      :fill="(preInfo.options&&preInfo.options.fill)?preInfo.options.fill:'#409EFF'"
      :text-color="(preInfo.options&&preInfo.options.textColor)?preInfo.options.textColor:'#409EFF'"
      >
        <el-radio v-for="itemRadio in preInfo.options.options" :key="itemRadio.value" 
        :label="itemRadio.value"
        :border="(itemRadio.border)?itemRadio.border:false"
        :size="(itemRadio.size)?itemRadio.size:''"
        :name	="(itemRadio.name)?itemRadio.name:''">{{itemRadio.value}}</el-radio>
      </el-radio-group>
    </el-form-item>
</template>

<script>
export default {
    props: {
        preInfo: {
            type: Object,
            required: true,
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