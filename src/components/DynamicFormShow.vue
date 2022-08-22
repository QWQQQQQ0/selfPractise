<template>
  <el-form
    ref="bindValue"
    :key="rulesLength"
    :model="bindValue"
    class="demo-dynamic"
    :rules="rules"
    :label-position="'left'"
    :label-width="'100px'"
  >
    <form-producer
      v-for="item in activeForm"
      :key="item.model"
      :preInfo="item"
      :bindValues="bindValue"
    />
    <div style="height:40px"><el-button style="position:absolute;right: 30px;" type="primary" right @click="submitForm('dynamicValidateForm')">提交</el-button></div>
    <el-dialog
      v-dialogDrag
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
      append-to-body
    >
      <component
        :is="dialogComponent"
        :key="dialogItem.key"
        :dialogItem="dialogItem"
        :bindValues="bindValue"
        @receiveSelect="handleDialogInfoSelect"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </el-form>
</template>

<script>
import FormProducer from '@/components/dragdesign/FormProducer.vue';
import DialogBox from '@/components/formdialog/DialogBox.vue';
export default {
  components: { FormProducer, DialogBox },
  props: {
    activeForm: {
      type: Array,
      required: true
    },
    dialogComponent: {
      type: Object,
      required: false,
      default: () => DialogBox
    }
  },
  provide() {
    return {
      handleRule: (item) => {
        return
        // if (item.rules.length) {
        //   item.rules.forEach(ele => {
        //     if (ele.pattern) {
        //       let reg = ele.pattern.toString().replace(/\//g, '')
        //       ele.pattern = new RegExp(reg)
        //     } else {
        //       this.$set(ele, 'trigger', 'blur')
        //     }
        //   })
        // }
        // if (!this.rules[item.model]) {
        //   this.$set(this.rules, item.model, item.rules)
        // }
        // this.rulesLength = Object.keys(this.rules).length
      },
      handleDialog: (item) => {
        this.dialogItem = item
        this.dialogVisible = true
      }
    }
  },
  data() {
    return {
      bindValue: {},
      rules: {},
      rulesLength: 0,
      dialogVisible: false,
      dialogItem: {}
    };
  },
  mounted() {
    const tempRuleBox = {}
    for (const i in this.activeForm) {
      if (this.activeForm[i].rules) {
        if (this.activeForm[i].rules.length) {
          this.activeForm[i].rules.forEach(ele => {
            if (ele.pattern) {
              const reg = ele.pattern.toString().replace(/\//g, '')
              ele.pattern = new RegExp(reg)
            } else {
              this.$set(ele, 'trigger', 'blur')
            }
          })
        }
      }
      tempRuleBox[this.activeForm[i].model] = this.activeForm[i].rules
    }
    this.rules = tempRuleBox
  },
  methods: {
    submitForm(formName) {
      console.log(this.rules, 'rulerule', this.bindValue)
    },
    handleReceiveChange(emit) {

    },
    handleConfirm() {
      this.dialogVisible = false
    },
    handleDialogInfoSelect(params) {
    }
  }
}

/**
 * <template>
    <el-form
    :model="bindValue"
    ref="bindValue"
    class="demo-dynamic"
    :size="CompleteInformation.config?CompleteInformation.config.size:'small'"
    :rules="rules"
    :label-position="'left'"
    :label-width="'100px'"
    :key="rulesLength"
    >
    <dynamic-form @forminfo="handleReceiveChange" :key="activeForm.length" :preInfo="activeForm" :bindValues="bindValue" :CompleteInformation="CompleteInformation" :formInfo="formInfo"></dynamic-form>
      <!-- <process-form
      v-for="item in activeForm"
      :key="item.key"
      :preInfo="item"
      :bindValues="bindValue"
      :CompleteInformation="CompleteInformation"
      :formInfo="formInfo">
      </process-form> -->
        <div style="height:40px"><el-button style="position:absolute;right: 30px;" type="primary" @click="submitForm('dynamicValidateForm')" right>提交</el-button></div>
    </el-form>
</template>

<script>
import { handleResult } from '@/util/handleForm'
import Gaode from '@/components/map/gaode';
import SelectUser from '@/components/Widget/SelectUser';
import TreeSelect from '@/components/Widget/TreeSelect';
import AddressSelect from '@/components/Widget/AddressSelect.vue';
import GeneralData from '@/components/Widget/GeneralData.vue';
import WriteBoard from '@/components/Widget/WriteBoard.vue';
import axios from 'axios'
import ProcessForm from '@/components/process/ProcessForm.vue';
export default {
    props: ["formInfo"],
    components: { SelectUser, TreeSelect, Gaode, AddressSelect, GeneralData, WriteBoard },
    provide() {
      return {
        handleRule: (item) => {
          if (item.rules.length) {
            item.rules.forEach(ele => {
              if (ele.pattern) {
                let reg = ele.pattern.toString().replace(/\//g, '')
                ele.pattern = new RegExp(reg)
              } else {
                this.$set(ele, 'trigger', 'blur')
              }
            })
          }
          if (!this.rules[item.model]) {

            this.$set(this.rules, item.model, item.rules)
          }
          this.$set(this.bindValue, item.model,'')
          this.rulesLength = Object.keys(this.bindValue).length
        }
      }
    },
    data() {
          return {
              activeForm: {},
              CompleteInformation: {},
              bindValue: {},
              rules: {},
              formId: '',
              rulesLength:0
          };
      },
    mounted() {
        this.CompleteInformation = JSON.parse(this.formInfo.formMeta);
      this.formId = this.formInfo.formId
      this.activeForm = this.CompleteInformation.list
      console.log(this.activeForm);
      let temRule = {}
    },
    methods: {
      submitForm(formName) {
        console.log(this.rules, 'rulerule', this.bindValue)
      // console.log(this.bindValue, 'dynamic');
      // axios({
      //   url: 'http://127.0.0.1:3688/api/public/address.json',
      //   method: 'get'
      // }).then(res => {
      //     let result = handleResult(this.bindValue, res.data);
          // console.log(result)
        // axios({
        //   url: `/api/form/startformflow/${this.formId}`,
        //   method: 'post',
        //   data: { parent: result.parent, child: result.child }
        // }).then(res => {
        //   console.log(result);
        //   console.log(res);
        // })
      // })

      },
      handleReceiveChange(emit) {
      },
      handleRuleLength() {
        console.log(Object.keys(this.rules), 'ruleLength', this.rules)
        return Object.keys(this.rules).length
      }
    },
    components: {ProcessForm  }
}
/script>

<style>
.el-form-item__content > .el-button  {

}

</style>
 *
 */

</script>

<style>
.el-form-item__content > .el-button  {

}

</style>

