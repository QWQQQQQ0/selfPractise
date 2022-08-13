<template>
  <div style="padding:30px;" data-VWW="|views|nested|menu1|menu1-2|index|.vue">
    <el-alert :closable="false" title="menu 1-2" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
