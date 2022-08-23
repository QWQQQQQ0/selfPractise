<template>
  <gis-vue
    v-if="dialogItem.type === 'gis_location'"
    :dialogItem="dialogItem"
    @handleInfoSelect="handleBindValue"
  />
</template>

<script>
import GisVue from '@/components/Widgets/GisVue.vue'
export default {
  components: { GisVue },
  props: {
    dialogItem: {
      type: Object,
      required: true
    },
    bindValues: {
      type: Object,
      default: () => {}
    },
    handleBindMethod: {
      type: Function,
      required: false
    }
  },
  created() {
    console.log(this.dialogItem)
  },
  methods: {
    handleBindValue(Info, ischeck, isChild) {
      if (this.handleBindMethod) {
        this.handleBindMethod({ oriItem: this.dialogItem, bindObject: this.bindValues, selectInfo: Info })
        return
      }
    }
  }

}
</script>

<style>

</style>
