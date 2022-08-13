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
      <el-upload
        class="upload-demo"
        :action="preInfo.options.action?preInfo.options.action:''"
        :headers="preInfo.options.headers?preInfo.options.headers:{}"
        :multiple="preInfo.options.multiple?preInfo.options.multiple:false"
        :drag="preInfo.options.drag?preInfo.options.drag:false"
        :with-credentials="preInfo.options.withCredentials?preInfo.options.withCredentials:false"
        :show-file-list="preInfo.options.showFileList?preInfo.options.showFileList:true"
        :auto-upload="preInfo.options.autoUpload?preInfo.options.autoUpload:true"
        :disabled="preInfo.options.disabled?preInfo.options.disabled:false"
        :limit="preInfo.options.limit?preInfo.options.limit:1"
        :data="preInfo.options.data?preInfo.options.data:{}"
        :name="preInfo.options.name?preInfo.options.name:''"
        :list-type="preInfo.options.listType?preInfo.options.listType:'text'"
        :on-success="handleUpSuccess"
        :on-remove="handleRemove"
        :on-error="handleError"
        :on-preview="handlePreview"
        :on-change="handleChange"
        :before-upload="handleBefore"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :accept="preInfo && preInfo.type==='image_upload'?'image/jpg,png':'*'">
        <el-button size="small" type="primary" @click="handleUpInfo(preInfo)">{{preInfo.name}}上传</el-button>
        <div slot="tip" class="el-upload__tip">{{preInfo.name==='图片'?'只能上传jpg/png文件，且不超过1M':'上传的附件大小不允许超过10M'}}</div>
      </el-upload>
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
          fileList:[]
        }
    },
    methods: {
      handleUpSuccess() {

      },
      handlePreview() {

      },
      beforeRemove() {

      },
      handleRemove() {

      },
      handleError() {

      },
      handleChange() {

      },
      handleBefore() {
        
      },
      handleExceed() {
        
      }
    }
}
</script>

<style>

</style>