<template>
  <el-main id="formDesignMiddle">
    <el-button type="text" @click="preview=true">
      预览
    </el-button>
    <el-button type="text">
      发布
    </el-button>
    <el-button type="text">
      导入json
    </el-button>
    <el-button type="text" @click="dialogShow=true">
      导出json
    </el-button>
    <el-button type="text" @click="resultForm=[]">
      清空
    </el-button>
    <el-form
      ref="bindValue"
      :model="bindvalues"
      class="demo-dynamic"
    >
      <draggable
        v-model="resultForm"
        :group="resultDesign"
        class="designPart"
        :sort="true"
        @unchoose="handleUnchoose"
        @start="handleStart"
      >
        <transition-group style="height:660px; display: block;">
          <template v-for="(item, itemIndex) in resultForm">
            <el-row
              v-if="item.type === 'grid'"
              :key="item.key"
              class="el_span_drag"
              :align="item.options.align"
              :gutter="item.options.gutter"
              :justify="item.options.justify"
              @click.native="handleItemInfo(item)"
            >
              <el-col v-for="(col, index) in item.columns" :key="index" :span="col.span">
                <draggable
                  v-model="col.list"
                  :group="resultDesign"
                  class="designPart"
                  @unchoose="handleUnchoose"
                  @start="handleStart"
                >
                  <transition-group style="min-height:60px; display: block;">
                    <template v-for="(span, index) in col.list">
                      <div :key="span.key" class="middleDragItem" @click.stop="handleItemInfo(span)">
                        <i class="el-icon-close" @click.self.stop="handleDeleteForm(col.list, index)"/>
                        <form-producer :preInfo="span" :bindValues="bindvalues"/>
                      </div>
                    </template>
                  </transition-group>
                </draggable>
              </el-col>
            </el-row>
            <div v-else :key="item.key" class="middleDragItem" @click="handleItemInfo(item)" >
              <i class="el-icon-close" @click.self.stop="handleDeleteForm(resultForm, itemIndex)"/>
              <form-producer :key="item.key" :preInfo="item" :bindValues="bindvalues"/>
            </div>
          </template>
        </transition-group>
      </draggable>
    </el-form>
    <el-dialog
      v-dialogDrag="{delay:300}"
      :visible.sync="dialogShow"
      width="60%"
      top="10vh"
      append-to-body
      :close-on-click-modal="false"
    >
      <json-show v-if="dialogShow" :data="resultForm" :readOnly="true"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="copyClass" data-clipboard-action="copy" :data-clipboard-text="JSON.stringify(resultForm)" @click="handleCopy">复制内容</el-button>
      </span>
    </el-dialog>
    <el-dialog
      v-dialogDrag="{delay:300}"
      :visible.sync="preview"
      width="60%"
      top="10vh"
      append-to-body
      :close-on-click-modal="false"
    >
      <dynamic-form-show :activeForm="resultForm"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="preview = false">返回</el-button>
      </span>
    </el-dialog>
  </el-main>
</template>

<script>
let sign = false
import JsonShow from '@/components/dragdesign/JsonShow.vue'
import FormProducer from '@/components/dragdesign/FormProducer.vue'
import DynamicFormShow from '@/components/DynamicFormShow.vue';
import Clipboard from 'clipboard';
import draggable from 'vuedraggable'
export default {
  components: { JsonShow, draggable, FormProducer, DynamicFormShow },
  props: {
    bindvalues: {
      type: Object,
      default: () => {}
    },
    selectedItem: {
      type: Object
    }

  },
  data() {
    return {
      resultForm: [],
      resultDesign: {
        name: 'designForm',
        put: (to, from, dragEl, evt) => {
          if (sign) {
            return false
          }
        },
        pull: true
      },
      dialogShow: false,
      preview: false
    }
  },
  mounted() {

  },
  methods: {
    handleStart(item) {
      if (item.item._underlying_vm_.type === 'grid') {
        sign = true
      }
    },
    handleUnchoose() {
      sign = false
    },
    handleItemInfo(item) {
      console.log(item, this.resultForm)
      this.$emit('update:selectedItem', item)
    },
    async handleCopy() {
      const clipboardUrl = new Clipboard('.copyClass');
      clipboardUrl.on('success', function() {
        console.log('success');
      });
      clipboardUrl.on('error', function(err) {
        if (err)console.log(err)
      });
    },
    handleDeleteForm(list, index) {
      list.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
  ::v-deep .el_span_drag {
    margin-top: 5px;
    border: 1px dashed rgb(149, 173, 189);
  }
  i.el-icon-close {
    cursor: default;
    float: right;
    color: rgb(255, 51, 0);
    font-size: 24px;
  }
</style>>
