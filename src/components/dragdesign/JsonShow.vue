<template>
  <div class="json-editor" style="max-height:60vh;overflow: auto;" data-VWW="|components|JsonEditor|index|.vue">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
// require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

export default {
  /* eslint-disable vue/require-prop-types */
  props: {
    data: {
      required: true,
      type: Array
    },
    readOnly: {
      Boolean,
      default: false
    }
  },
  data() {
    return {
      jsonEditor: false
    }
  },
  watch: {
    data(data) {
      this.jsonEditor.setValue(JSON.stringify(data, null, 2))
    }
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: 'application/json',
      theme: 'rubyblue',
      foldGutter: true,
      lineWrapping: true,
      readOnly: this.readOnly,
      gutters: [
        'CodeMirror-lint-markers',
        'CodeMirror-linenumbers',
        'CodeMirror-foldgutter'
      ]
    })
    this.jsonEditor.setValue(JSON.stringify(this.data, null, 2))
    this.jsonEditor.on('change', cm => {
      this.$emit('changed', cm.getValue())
      this.$emit('input', cm.getValue())
      console.log(this.getValue());
    })
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue()
    }
  }
}
</script>

<style lang="less" scoped>
.json-editor {
  height: 100%;
  position: relative;

  ::v-deep {
    .CodeMirror {
      height: auto;
      min-height: 300px;
    }

    .CodeMirror-scroll {
      min-height: 300px;
    }

    .cm-s-rubyblue span.cm-string {
      color: #F08047;
    }
  }
}
</style>
