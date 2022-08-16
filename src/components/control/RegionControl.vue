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
    <region-select :handleRegionSelect="handleRegionInfo" :intable="intable"/>
  </el-form-item>
</template>

<script>

import RegionSelect from '@/components/control/RegionSelect.vue'
export default {
  components: { RegionSelect },
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
  mounted() {
    console.log(this.bindValues);
  },
  destroyed() {
  },
  methods: {
    handleRegionInfo(region) {
      this.bindValues[this.preInfo.model] = region
      console.log(this.bindValues, 'bindvv', region);
    }
  }

}

</script>

<style>

</style>
