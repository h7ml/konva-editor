module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "konva-editor",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: true,
  productionSourceMap: true,
  crossorigin: "",
  integrity: false,
  chainWebpack: config => {
    config.module
      .rule("js")
      .include
      .add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader");
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 80,
    https: false
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  }
};