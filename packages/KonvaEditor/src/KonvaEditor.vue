<template>
  <div class="konva-editor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'konva-editor',
  props: {
    type: String
  }
}
</script>

<style scoped>
.konva-editor {
  display: inline-block;
  padding: 4px 8px;
  background: #000;
  color: #fff;
}
</style>
