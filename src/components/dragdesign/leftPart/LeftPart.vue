<template>
    <el-aside width="200px" id="formDesignLeft">
          <draggable class="optionBox basicForm"
            @start="handleDragStart"
            :sort="false"
            v-model="formTypeConfig.basic"
            tag="ul"
            :group="formDesignConfig"
            >
              <li class="optionItem" :data-item="'basic'" v-for="item in formTypeConfig.basic" :key="item.type">
                  {{item.name}}{{item.selected}}
              </li>
          </draggable>
          <draggable class="optionBox advanceForm"
            v-model="formTypeConfig.advance"
            @start="handleDragStart"
            tag="ul"
            :sort="false"
            :group="formDesignConfig">
              <li class="optionItem" :data-item="'advance'" v-for="item in formTypeConfig.advance" :key="item.type">
                  {{item.name}}
              </li>
          </draggable>
          <draggable class="optionBox layoutForm"
            @start="handleDragStart"
            v-model="formTypeConfig.layout"
            tag="ul"
            :group="formDesignConfig">
              <li class="optionItem" :data-item="'layout'" v-for="item in formTypeConfig.layout" :key="item.type">
                  {{item.name}}
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
      default:() => {}
    }
  },
  data() {
    return {
      formDesignConfig: {
        name: 'designForm',
        put: false,
        pull: 'clone',
      },
    }
  },
  methods: {
    handleDragStart(e) {
      let item = this.formTypeConfig[e.item.dataset.item][e.oldIndex]
      let record = new Date().getTime()
      item['model'] = `${item.type}_${record}`
      item['key'] = `${record}`
      this.formTypeConfig[e.item.dataset.item][e.oldIndex] = this.deepClone(item)
    },
    deepClone(T) {
      var newObj = {};
      if (val instanceof Date) { //拷贝Date对象会造成栈溢出
          newObj = val;
      } else {
          if (T instanceof Array) {
              newObj = [];
          }
          for (var key in T) {
              var val = T[key];
              if (null == val) {
                  newObj[key] = "";
              } else {
                  newObj[key] = typeof val === 'object' ? this.deepClone(val) : val;
              }
          }
      }
      return newObj;
    }
  },
  created() {
    this.formTypeConfig = formConfig
  },

}
</script>

<style>

</style>