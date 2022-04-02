import Vue from 'vue'
import App from './App.vue'
import { Button,Layout,Menu ,Breadcrumb,Icon} from 'ant-design-vue';
Vue.config.productionTip = false
Vue.component(Icon.name, Icon);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Button.name, Button);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
new Vue({
  render: h => h(App),
}).$mount('#app')
