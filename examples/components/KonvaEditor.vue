<template>
  <div class="konva-editor">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider breakpoint="lg" v-model="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item key="verticle">
            <a-icon type="border-verticle" />
            <span class="nav-text">大纲</span>
          </a-menu-item>
          <a-menu-item key="container">
            <a-icon type="container" />
            <span class="nav-text">组件</span>
          </a-menu-item>
          <a-menu-item key="unordered">
            <a-icon type="unordered-list" />
            <span class="nav-text">名字</span>
          </a-menu-item>
          <a-menu-item key="codepen">
            <a-icon type="codepen" />
            <span class="nav-text">代码</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-button type="primary" @click.native="downImg()">
            导出为图片
          </a-button>
          <a-button type="default">
            加载外部json
          </a-button>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px',height:'85vh' }">
            <div id="konva" ref="konva"></div>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Konva from "konva";
import { downloadURI } from "../utils/file.js";

const demoJson = require("../assets/demo.json");
export default {
  name: "konva-editor",
  data() {
    return {
      loadJson: demoJson,
      collapsed: false
    };
  },
  mounted() {
    this.initKonva(demoJson);
  },
  methods: {
    async downImg() {
      const dataURL = Konva.stages[0].toDataURL({ pixelRatio: 3 });
      await downloadURI(dataURL, "stage.png");
    },
    initKonva(Json) {
      Konva.Node.create(Json, "konva");
    }
  }
};
</script>

<style scoped lang="scss">
@import 'ant-design-vue/dist/antd.css';

.konva-editor {
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
