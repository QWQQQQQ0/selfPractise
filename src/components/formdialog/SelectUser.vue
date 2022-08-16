<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
  />
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
        nodeData: []

      }
    }
  },

  mounted() {
    this.$request({
      url: 'http://127.0.0.1:3688/api/public/listRole.json'
    }).then(res => {
      console.log(res);
    })
  },
  methods: {
    loadNode(node, resolve) {
      console.log(node, resolve);
    }
  }
}
</script>

<style>

</style>
