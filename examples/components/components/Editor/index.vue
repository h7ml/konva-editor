<template>
  <MonacoEditor
    :code="code"
    :key="randomkey"
    :language="language"
    :editorOptions="options"
    @mounted="onMounted"
    @codeChange="onCodeChange">
  </MonacoEditor>
</template>
<script>
import MonacoEditor from "vue-monaco-editor";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Editor",
  props: {
    code: {
      type: String,
      default: "",
      require: false
    },
    language: {
      type: String,
      default: "json",
      require: false
    },
    randomkey: {
      type: Number,
      default: Math.floor(Math.random() * (10, 1000000012313)),
      require: false
    }
  },
  data() {
    return {
      editor: null,
      options: {
        selectOnLineNumbers: false
      }
    };
  },
  components: {
    MonacoEditor
  },
  methods: {
    onMounted(editor) {
      this.editor = editor;
    },
    // eslint-disable-next-line no-unused-vars
    onCodeChange(editor) {
      console.log(this.editor.getValue());
    }
  }
};
</script>