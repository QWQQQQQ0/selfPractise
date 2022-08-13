<template>
<el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
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
        nodeData:[]

      }
    }
  },
  methods: {
    loadNode(node, resolve) {
      console.log(node, resolve);
    }
  },

  mounted() {
    this.$request({
      url:'http://127.0.0.1:3688/api/public/listRole.json'
    }).then(res => {
      console.log(res);
    })
  },
}
</script>

<style>

</style>