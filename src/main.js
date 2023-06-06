/*
 * @Author: Jackie
 * @Date: 2023-06-06 13:58:58
 * @LastEditTime: 2023-06-06 14:04:27
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /demo-vue-package/src/main.js
 * @version: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './plugin/auto-update';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
