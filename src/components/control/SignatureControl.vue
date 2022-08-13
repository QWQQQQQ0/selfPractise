<template>
    <el-button type="primary" size="small">签名</el-button>
</template>

<script>
export default {
    props: {
        preInfo: {
            type: Object,
            required: true,
        },
        bindValues: {
            type: Object,
            require: true
        },
        intable: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>