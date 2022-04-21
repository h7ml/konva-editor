<template>
  <div class="container-container">
    <div class="container">
      <components/>
    </div>
  </div>
</template>

<script>
import components from "./components/index";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
  components: {
    components
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container-container {
  width: 100%;
  heigth: 100%;
}
</style>