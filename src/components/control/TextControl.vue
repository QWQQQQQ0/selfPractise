<template>
  <el-form-item
    :prop="preInfo.model"
    :label="intable?'' :preInfo.name"
  >
    <span>{{ preInfo.options.defaultValue }}</span>
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
    console.log('created');
  }
}
</script>

<style>

</style>
