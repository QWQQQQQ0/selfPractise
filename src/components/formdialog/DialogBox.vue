<template>
  <select-org
    v-if="dialogItem.type === 'org_select' || dialogItem.type === 'm_org_select'"
    :item="dialogItem"
    @handleInfoSelect="handleBindValue"
  />
  <select-role
    v-else-if="dialogItem.type === 'role_select' || dialogItem.type === 'm_role_select'"
    :item="dialogItem"
    @handleInfoSelect="handleBindValue"
  />
  <select-data
    v-else-if="dialogItem.type === 'data_select' || dialogItem.type === 'm_data_select'"
    :item="dialogItem"
    @handleInfoSelect="handleBindValue"
  />
  <select-user
    v-else-if="dialogItem.type === 'user_select' || dialogItem.type === 'm_user_select'"
    :item="dialogItem"
    @handleInfoSelect="handleBindValue"
  />
</template>

<script>
import SelectData from './SelectData.vue';
import SelectOrg from './SelectOrg.vue';
// import SelectRefData from './SelectRefData.vue';
import SelectRole from './SelectRole.vue';
import SelectUser from './SelectUser.vue';
export default {
  components: { SelectRole, SelectData, SelectOrg, SelectUser },
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
