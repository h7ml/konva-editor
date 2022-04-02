import KonvaEditor from './src'
KonvaEditor.install = function (Vue) {
  Vue.component(KonvaEditor.name, KonvaEditor)
}
export default KonvaEditor
