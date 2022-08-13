<template>
  <el-tree
  ref="tree"
    :props="props"
    :load="loadNode"
    :data="nodeData"
    node-key="id"
    lazy
    show-checkbox
    :getCheckedNodes="handleCheckedNodes"
    @check-change="handleCheckChange">
  </el-tree>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      props: {
        label: 'roleName',
      },
      nodeData:[]
    }
  },
  methods: {
    loadNode(node, resolve) {
      console.log(node, resolve);
      resolve([])
    },
    handleCheckedNodes(list,r) {
      console.log(list,r);
    },
    handleCheckChange(item, ischecked, isChildCheck) {
      if(ischecked && this.item.type === 'role_select')
      this.$emit('handleInfoSelect',item, isChildCheck)
      // console.log(item,ischeck, isChildCheck, this.item);
    }
  },

  mounted() {
    this.$request({
      url:'http://127.0.0.1:3688/api/public/listRole.json'
    }).then(res => {
      this.nodeData = res.list
      console.log(this.nodeData);
    })
  },
}
</script>

<style>

</style>