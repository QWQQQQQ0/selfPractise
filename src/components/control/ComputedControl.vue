<template>
  <div>
    <div class="methodDisplay">
      <draggable
        v-model="methodBox"
        :group="{put: false, pull: false, name: 'method'}"
        :sort="true"
      >
        <template v-for="(methodItem, index) in methodBox">
          <el-input
            v-if="methodItem.model === 'editNum'"
            :key="methodItem.key"
            v-model="methodItem.name"
            style="width:50px"
            class="optionArea"
            placeholder="请输入数字"
            type="number"
          />
          <el-tag
            v-else
            :key="methodItem.key"
            :type="methodItem.type"
            class="optionArea"
            closable
            @close="handleClose(index)"
          >
            {{ methodItem.name }}
          </el-tag>
        </template>

      </draggable>

    </div>
    <template v-for="item in formItems">
      <el-tag v-if="item.model !== target.model && item.type !== 'grid' && item.type !== 'table'" :key="item.model" class="optionArea" @click="addParams(item)">{{ item.name }}</el-tag>
      <template v-else-if="item.type === 'grid'">
        <template v-for="col in item.columns">
          <template v-for="colitem in col.list">
            <el-tag v-if="colitem.model !== target.model" :key="colitem.model" class="optionArea" @click="addParams(colitem)">{{ colitem.name }}</el-tag>
          </template>
        </template>
      </template>
    </template>
    <el-tag v-for="operationItem in symbol" :key="operationItem" class="optionArea" @click="addParams(operationItem)">{{ operationItem }}</el-tag>
    <el-tag class="optionArea" @click="addParams({model:'editNum', name:''})">数字</el-tag>
    <div>
      <el-button type="primary" @click="confirm">确认</el-button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  props: {
    resultBox: {
      type: Array,
      default: () => []
    },
    target: Object,
    default: () => {}
  },
  data() {
    return {
      methodBox: [],
      symbol: ['+', '-', '/', '*', '(', ')'],
      formItems: []

    }
  },
  created() {
    this.formItems = this.addCalculateForm(this.resultBox)
  },
  mounted() {
    console.log(this.formItems)
  },
  methods: {
    addCalculateForm(forms) {
      const validForm = []
      const validItem = { int: true, intLong: true, intFloat: true }
      const loop = (formBox) => {
        formBox.forEach(item => {
          if (item.type === 'grid') {
            for (const i in item.columns) {
              loop(item.columns[i].list)
            }
          }
          if (validItem[item.type]) {
            validForm.push(item)
          }
        })
      }
      loop(forms)
      return validForm
    },
    addParams(params) {
      if (!params.model) {
        this.methodBox.push({ model: params, name: params, type: 'danger', key: new Date().getTime() })
      } else {
        this.methodBox.push({ model: params.model, name: params.name, key: new Date().getTime() })
      }
    },
    handleClose(index) {
      this.methodBox.splice(index, 1)
    },
    confirm() {
      this.target.options['method'] = ''
      this.target.options['calculaFormula'] = `this.bindValues.${this.target.model}=`
      let calculaFormula = `this.bindValues.${this.target.model}=`
      const relativeForm = {}
      for (let i = 0; i < this.methodBox.length; i++) {
        this.target.options['method'] += this.methodBox[i].name
        if (this.symbol.indexOf(this.methodBox[i].model) === -1) {
          if (this.methodBox[i].model === 'editNum') {
            calculaFormula += this.methodBox[i].name
          } else {
            calculaFormula += `Number(this.bindValues.${this.methodBox[i].model})`
            relativeForm[this.methodBox[i].model] = true
          }
        } else {
          calculaFormula += this.methodBox[i].model
        }
      }
      this.formItems.forEach(item => {
        if (relativeForm[item.model]) {
          if (!item.options.calculaFormula) {
            item.options['calculaFormula'] = {}
          }
          item.options['calculaFormula'][this.target.model] = calculaFormula
        }
      })
      this.$emit('update:computedShow', false)
    }
  }
}
</script>

<style lang="less" scoped>
  .methodDisplay {
    width: 100%;
    border: 1px solid red;
    padding: 10px;
  }
  .optionArea {
    cursor: pointer;
    margin-left: 10px;
  }
  .optionArea /deep/ .el-input__inner::-webkit-inner-spin-button, .optionArea /deep/ .el-input__inner::-webkit-outer-spin-button {
    -webkit-appearance: none;
     -moz-appearance: textfield;
  }
</style>>

