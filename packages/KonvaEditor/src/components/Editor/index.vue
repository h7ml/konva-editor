<template>
  <MonacoEditor
    :code="code"
    :key="randomkey"
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
  data() {
    return {
      editor: null,
      code: "",
      options: {
        selectOnLineNumbers: false
      },
      randomkey: Math.floor(Math.random() * (10, 1000000012313))
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