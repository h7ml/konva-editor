<!--
* @Author: dgiot-fe <dgiot@foxmail.com>
* @Date: 2022-04-16 00:45:17
* @LastEditors: 0:45
* @LastEditTime: 2022-04-16 00:45:17
* @Description:
* @FilePath: examples\components\components\Container\components\index.vue
* @DocumentLink: https://dev.iotn2n.com
* @github: https://github.com/dgiot/dgiot-dashboard.git
* @name: index
-->
<template>
  <div class="index-container">
    <div class="index">
      <v-stage :config="option.Konva">
        <v-layer>
          <v-circle :config="option.config[0]"/>
          <v-rect :config="option.config[0]"/>
          <!--          <v-ellipse :config="configCircle" />-->
          <!--          <v-line :config="configCircle" />-->
          <!--          <v-image :config="configCircle" />-->
          <!--          <v-text :config="configCircle" />-->
          <!--          <v-text-path :config="configCircle" />-->
          <!--          <v-star :config="configCircle" />-->
          <!--          <v-label :config="configCircle" />-->
          <!--          <v-path :config="configCircle" />-->
          <!--          <v-regular-polygon :config="configCircle" />-->
          <!--          <v-image :config="configCircle" />-->
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  props: {},
  data() {
    return {
      option: {
        Konva: {
          width: 100,
          height: 100
        },
        config: [
          {
            type: 'circle',
            x: 50,
            y: 50,
            radius: 35,
            fill: "red",
            stroke: "black",
            strokeWidth: 4
          }
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  heigth: 100%;
}
</style>