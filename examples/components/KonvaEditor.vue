<template>
  <div class="konva-editor">
    <a-layout class="components-layout">
      <a-layout-sider
        breakpoint="lg"
        v-model="collapsed"
        collapsible
        class="components-layout-side"
      >
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="defaultKeys"
          @click="changeMenu"
        >
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
      <a-layout class="components-layout-center">
        <Container v-if="selectedKeys == 'container'" />
        <Unordered v-if="selectedKeys == 'unordered'" />
        <Verticle v-if="selectedKeys == 'verticle'" />
        <Editor v-if="selectedKeys == 'codepen'" :code="code" :randomkey="randomkey" />
      </a-layout>
      <a-layout class="components-layout-right">
        <a-layout-header class="components-layout-right-header">
          <a-button type="primary" @click.native="downImg()">
            导出为图片
          </a-button>
          <input
            type="file"
            @change="onFileChange($event)"
            ref="file"
            style="display: none"
          />
          <a-button type="default" @click.native="uploadJson()">
            加载外部json
          </a-button
          >
        </a-layout-header>
        <a-layout-content class="components-layout-right-content">
          <div id="konva" ref="konva"></div>
        </a-layout-content>
        <a-layout-footer class="components-layout-right-footer">
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
import Container from "./components/Container/index";
import Unordered from "./components/Unordered/index";
import Verticle from "./components/Verticle/index";
import Editor from "./components/Editor/index";

export default {
  name: "konva-editor",
  data() {
    return {
      defaultKeys: ["verticle"],
      selectedKeys: "verticle",
      loadJson: demoJson,
      collapsed: false,
      randomkey: Math.floor(Math.random() * (10, 1000000012313))
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Editor,
    Container,
    Unordered,
    Verticle
  },
  computed: {
    code: function() {
      const formatJson = JSON.stringify(this.loadJson, null, 2);
      console.log(formatJson);
      return formatJson;
    }
  },
  mounted() {
    this.initKonva(demoJson);
  },
  watch: {
    loadJson: {
      handler() {
        this.randomkey = Math.floor(Math.random() * (10, 1000000012313));
      },
      immediate: true
    }
  },
  methods: {
    changeMenu(e) {
      console.log(e);
      this.selectedKeys = e.key;
    },
    onFileChange(e) {
      const _this = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      const ext = file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase();
      if ("json" != ext) {
        this.$message.error("只能上传json文件");
        return false;
      } else {
        reader.readAsText(file, "utf8"); //gbk编码
        reader.onload = function() {
          const jsonObj = JSON.parse(this.result);
          _this.loadJson = jsonObj;
          console.log(reader, jsonObj, _this.$refs.file);
          _this.initKonva(this.jsonObj);
        };
      }
    },
    uploadJson() {
      this.$refs.file.click();
    },
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
@import "ant-design-vue/dist/antd.css";

.konva-editor {
  ::v-deep {
    .components-layout {
      &-side {
      }

      &-center {
        width: 400px;
      }

      &-right {
        &-header {
          background: #fff;
          height: 5vh;
          padding: 0;
        }

        &-content {
          height: 90vh;
          padding: 0;
          margin: 0;
          overflow: scroll;
          background: #fff;
        }

        &-footer {
          padding: 0;
          height: 5vh;
          text-align: center;
        }
      }
    }
  }
}
</style>
