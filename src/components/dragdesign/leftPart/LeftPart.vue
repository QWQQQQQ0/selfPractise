<template>
  <el-aside id="formDesignLeft" width="200px">
    <draggable
      v-model="formTypeConfig.basic"
      class="optionBox basicForm"
      :sort="false"
      tag="ul"
      :group="formDesignConfig"
      @start="handleDragStart"
    >
      <li v-for="item in formTypeConfig.basic" :key="item.type" class="optionItem" :data-item="'basic'">
        {{ item.name }}{{ item.selected }}
      </li>
    </draggable>
    <draggable
      v-model="formTypeConfig.advance"
      class="optionBox advanceForm"
      tag="ul"
      :sort="false"
      :group="formDesignConfig"
      @start="handleDragStart"
    >
      <li v-for="item in formTypeConfig.advance" :key="item.type" class="optionItem" :data-item="'advance'">
        {{ item.name }}
      </li>
    </draggable>
    <draggable
      v-model="formTypeConfig.layout"
      class="optionBox layoutForm"
      tag="ul"
      :group="formDesignConfig"
      @start="handleDragStart"
    >
      <li v-for="item in formTypeConfig.layout" :key="item.type" class="optionItem" :data-item="'layout'">
        {{ item.name }}
      </li>
    </draggable>
  </el-aside>
</template>

<script>
import formConfig from '@/utils/formType.config'
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  props: {
    bindValues: {
      type: Object,
      default: () => {}
    },
    choseItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      formDesignConfig: {
        name: 'designForm',
        put: false,
        pull: 'clone'
      }
    }
  },
  created() {
    this.formTypeConfig = formConfig
  },
  methods: {
    handleDragStart(e) {
      const item = this.formTypeConfig[e.item.dataset.item][e.oldIndex]
      const record = new Date().getTime()
      item['model'] = `${item.type}_${record}`
      item['key'] = `${record}`
      this.formTypeConfig[e.item.dataset.item][e.oldIndex] = this.deepClone(item)
    },
    deepClone(T) {
      var newObj = {};
      if (val instanceof Date) { // 拷贝Date对象会造成栈溢出
        newObj = val;
      } else {
        if (T instanceof Array) {
          newObj = [];
        }
        for (var key in T) {
          var val = T[key];
          if (val == null) {
            newObj[key] = '';
          } else {
            newObj[key] = typeof val === 'object' ? this.deepClone(val) : val;
          }
        }
      }
      return newObj;
    }
  }

}
</script>

<style>

</style>
