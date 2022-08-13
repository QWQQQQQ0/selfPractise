<template>
  <div>
    
  </div>
</template>

<script>
export default {

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