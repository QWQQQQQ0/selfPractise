<template>
  <div id="JDHome">
    <iframe src="JDhomePage/index.html" frameborder="0" height="100%" width="100%"></iframe>
  </div>
</template>

<script>

export default {
  mounted() {
    document.querySelector('#JDHome').style.height = `${document.documentElement.clientHeight - document.querySelector('#JDHome').getClientRects()[0].top}px`
    console.log(document.documentElement.clientHeight , document.querySelector('#JDHome').getClientRects(), 'toptopo');
    console.log(document.querySelector('#JDHome').style.height);
  },
}
</script>

<style>

</style>