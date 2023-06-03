import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Loading from './plugin/loading/index';//加载组件
// 注意点: 如果想通过use的方式来注册组件, 那么必须先将组件封装成插件
Vue.use(Loading, {
  title: '正在加载...'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
