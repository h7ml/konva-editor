<template>
  <div id="app">
    <KonvaEditor />
  </div>
</template>

<script>
import KonvaEditor from "./components/KonvaEditor.vue";
export default {
  name: "App",
  components: {
    KonvaEditor,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%
}
</style>
