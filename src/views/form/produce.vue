<template>
  <main-part/>
</template>

<script>
import MainPart from '@/components/dragdesign/MainPart.vue'
export default {
  components: { MainPart },
  data() {
    return {
      text: '',
      dialogVisible: false
    }
  },
  created() {

  },
  methods: {
  }
}
</script>

<style>
/* 表单 */
.customform {
  background: rgb(70, 70, 70);
  display: flex;
  flex-direction: column;
}
.customform > .el-dialog__body {
  flex: 1;
}
#formDesign {
  background: inherit;
  height: 100%;
  max-height: 660px;
}
#formDesignLeft {
  flex: 1.4;
  height: 100%;
  padding: 15px;
  background: inherit;
  color: rgb(61, 61, 61);
}
#formDesignLeft::-webkit-scrollbar-thumb {
    background-color: rgb(199, 199, 199);
    border-radius: 10px;
}
#formDesignLeft::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.optionBox {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 5px;
  justify-items: center;
}
.optionItem {
  cursor: move;
  height: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  border: 1px solid rgb(175, 175, 175);
  font-size: 12px;
  box-shadow: 0 1px 0px rgb(158, 158, 158);
}
.optionItem:hover {
  background: rgb(224, 224, 224);
  color: rgb(87, 87, 87);
}
.designPart {
  border: 1px dashed rgb(188, 220, 241);
}
.designPart .el-form-item__label {
  color: #fff;
}

#formDesignMiddle {
  border-top: 1px solid rgb(175, 175, 175);
  border-bottom: 1px solid rgb(175, 175, 175);
  background: inherit;
  flex: 3.6;
  height: 100%;
  color: rgb(216, 216, 216);
}
.middleDragItem {
  min-height: 40px;
  line-height: 40px;
  background: rgb(24, 59, 56);
  border: 1px dashed rgb(188, 220, 241);
  margin-top: 2px;
  padding: 10px;
  cursor: move;
}
.middleDragItem .el-form-item {
  margin: 0;
  pointer-events: none;
}
.middleDragItem:hover {
  background: rgb(55, 68, 78);
}
#formDesignRight {
  background: inherit;
  flex: 1;
  height: 100%;
  color: rgb(216, 216, 216);
}
.el_span_drag > .el-col {
  padding: 5px;
}

</style>
