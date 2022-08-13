<template>
  <div id="app" data-VWW="|App|.vue">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$request('/jindong/user').then(res => {
      console.log(res, 'resres');
    })
  },

}
</script>
