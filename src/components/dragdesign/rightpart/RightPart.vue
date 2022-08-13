<template>
    <el-aside width="200px" id="formDesignRight" v-if="selectedFormItem.name">
        <div>
         name: <el-input v-model="selectedFormItem.name"></el-input>
        </div>
        <div>
         宽度: <el-input :key="selectedFormItem.model" v-wheelModel="{key: 'width', option: selectedFormItem.options}" v-model="selectedFormItem.options.width" placeholder="请输入内容"></el-input>
        </div>
        <template v-if="selectedFormItem.type === 'grid'">
             <el-input-number v-for="(span, index) in selectedFormItem.columns" :key="index"
             v-wheelModel="{key: 'span', option: span}"
             v-model="span.span"
             controls-position="right"
             :min="1" 
             :max="24"
             size="small"></el-input-number>
        </template>
    </el-aside>
</template>

<script>
export default {
    props: {
        selectedFormItem: {
            type: Object,
            default: () => {} 
        }
    },
    watch: {
        selectedFormItem: {
            handler(newV, oldV) {
                console.log(newV, 'watch');
            }
        }
    }
}
</script>

<style lang="less" scoped>
#formDesignRight {
    color: rgb(43, 43, 43);
}
</style>>
