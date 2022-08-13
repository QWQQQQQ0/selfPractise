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
        <el-select v-model="bindValues[preInfo.model]"
        :style="{width:preInfo.options?preInfo.options.width:'auto'}"
        :multiple="(preInfo.options && preInfo.options.multiple)?preInfo.options.multiple:false"
        :placeholder="(preInfo.options&&preInfo.options.placeholder)?preInfo.options.placeholder:''"
        :disabled="(preInfo.options&&preInfo.options.disabled)?preInfo.options.disabled:false"
        :size="(preInfo.options&&preInfo.options.size)?preInfo.options.size:'small'"
        :clearable="(preInfo.options&&preInfo.options.clearable)?preInfo.options.clearable:false"
        :filterable="(preInfo.options&&preInfo.options.filterable)?preInfo.options.filterable:false"
        :filter-method="(preInfo.options&&preInfo.options.filterable)?handleFilter:()=>{}"
        :allow-create="(preInfo.options&&preInfo.options.allowCreate)?preInfo.options.allowCreate:false"
        :remote="(preInfo.options&&preInfo.options.remote)?preInfo.options.remote:false"
        :remote-method="(preInfo.options&&preInfo.options.remote)?handleRemoteFilter:() =>{}"
        :multiple-limit="(preInfo.options&&preInfo.options.multipleLimit)?preInfo.options.multipleLimit:0"
        :collapse-tags="(preInfo.options&&preInfo.options.collapseTags)?preInfo.options.collapseTags:false"
        :autocomplete="(preInfo.options&&preInfo.options.autocomplete)?preInfo.options.autocomplete:'off'"
        :name="(preInfo.options&&preInfo.options.name)?preInfo.options.name:''"
        @change="handleChange">
            <el-option
            v-for="option in preInfo.options.options"
            :key="option.value"
            :label="option.label"
            :value="option.value">
            </el-option>
        </el-select>
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
    },
    methods: {
        handleFilter() {

        },
        handleChange() {

        },
        handleRemoteFilter() {
            
        }
    }
}
</script>

<style>

</style>