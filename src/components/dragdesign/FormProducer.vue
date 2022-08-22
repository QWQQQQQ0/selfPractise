<template>
  <div v-if="preInfo.type && preInfo.type === 'grid'">
    <el-row :align="preInfo.options.align" :gutter="preInfo.options.gutter" :justify="preInfo.options.justify">
      <el-col v-for="(col, index) in preInfo.columns" :key="index" :span="col.span">
        <form-producer v-for="item in col.list" :key="item.model" :preInfo="item" :bindValues="bindValues" :intable="intable"/>
      </el-col>
    </el-row>
  </div>
  <table-control
    v-else-if="preInfo.type && preInfo.type === 'table'"
    :preInfo="preInfo"
    :bindValues="bindValues"
    :columData="preInfo.tableColumns"
    :tableData="preInfo.tableData"
  />
  <component
    :is="currentControl"
    v-else
    :intable="intable"
    :preInfo="preInfo"
    :bindValues="bindValues"
    :columData="preInfo.tableColumns"
    :tableData="preInfo.tableData"
  />
</template>

<script>
import BasicControl from '@/components/control/BasicControl.vue';
import InputNumControl from '@/components/control/InputNumControl.vue';
import CheckBoxControl from '@/components/control/CheckBoxControl.vue';
import FileControl from '@/components/control/FileControl.vue';
import RadioControl from '@/components/control/RadioControl.vue';
import SelectControl from '@/components/control/SelectControl.vue';
import SwitchControl from '@/components/control/SwitchControl.vue';
import TimeControl from '@/components/control/TimeControl.vue';
import SpecialControl from '@/components/control/SpecialControl.vue';
import RegionControl from '@/components/control/RegionControl.vue';
import TextControl from '@/components/control/TextControl.vue'
import SignatureControl from '@/components/control/SignatureControl.vue'
import TableControl from '@/components/control/TableControl.vue';
export default {
  name: 'FormProducer',
  components: {
    BasicControl, InputNumControl, CheckBoxControl, FileControl, RadioControl, SelectControl,
    SwitchControl, TimeControl, SpecialControl, RegionControl, TextControl, SignatureControl,
    TableControl
  },
  inject: {
    handleRule: {
      default: null
    }
  },
  props: {
    preInfo: {
      type: Object,
      required: true
    },
    bindValues: {
      type: [Object, Array],
      default: () => {}
    },
    intable: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      selectedItem: {
      },
      fileList: [],
      currentControl: '',
      component: {}
    }
  },
  created() {
    console.log(this.preInfo, 'preinfo');
    if (this.handleRule && !this.intable) {
      this.handleRule(this.preInfo)
    }
    console.log('process', this.preInfo.type);
  },
  beforeMount() {

  },
  mounted() {
    const handleFormType = (type) => {
      if (type === 'number') {
        return 'InputNumControl'
      }
      if (type === 'radio') {
        return 'RadioControl'
      }
      if (type === 'text') {
        return 'TextControl'
      }
      if (type === 'file_upload' || type === 'image_upload') {
        return 'FileControl'
      }
      if (type === 'signature') {
        return `SignatureControl`
      }
      if (type === 'year' || type === 'datetime' || type === 'month' || type === 'dates' || type === 'date' ||
        type === 'year_month' || type === 'week' || type === 'datetimerange' || type === 'daterange' || type === 'monthrange') {
        return 'TimeControl'
      }
      if (type === 'switch') {
        return 'SwitchControl'
      }
      if (type === 'checkbox') {
        return 'CheckBoxControl'
      }
      if (type === 'multiple_select' || type === 'select') {
        return 'SelectControl'
      }
      if (type === 'region_select') {
        return 'RegionControl'
      }
      if (!this.checkType(this.preInfo.type) && !this.preInfo.slot) {
        return 'SpecialControl'
      }
      return `BasicControl`
    }
    this.currentControl = handleFormType(this.preInfo.type)
    if (this.preInfo.type === 'table') {
      console.log(this.preInfo);
    }
  },
  methods: {
    checkType(type) {
      const typeDic = {
        number: true, radio: true, text: true, current_user: true, file_upload: true,
        image_upload: true, year: true, datetime: true, month: true, datas: true,
        data: true, year_mounth: true, switch: true, checkbox: true, multiple_select: true,
        select: true, grid: true, table: true, region_select: true, input: true, textarea: true,
        mobile: true, telephone: true, email: true, postalCode: true, intFloat: true,
        int: true, intLong: true, website: true
      }
      return typeDic[type]
    }
  }
}
</script>

<style lang="less">

#uploadFile {
  display: none;
}
#uploadFileBTN {
  position: absolute;
}
.el-input {
    width: 50%;
  }
.el-input-number > .el-input {
  width: 100%;
}
.dynamicAddress > .el-form-item__content {
  display: flex;
  justify-content:flex-start;
  .el-input {
    width: auto;
  }
}
.el-form-item {
  text-align: left;
}
</style>
