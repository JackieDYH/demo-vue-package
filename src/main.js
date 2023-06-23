/*
 * @Author: Jackie
 * @Date: 2023-06-23 12:18:15
 * @LastEditTime: 2023-06-23 12:50:44
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /demo-vue-package/src/main.js
 * @version: 
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ① 引入事件类
// 自己编写的或者mitt皆可
import EventBus from './plugin/eventBus'
// 或者：import EventBus from 'mitt' 或者Vue3-Eventbus
const $bus = new EventBus()

const app = createApp(App);

// ② 挂载
// 1.使用provide提供
app.provide('$bus', $bus)
// 2.挂载到this上
app.config.globalProperties.$bus = $bus

app.use(router).mount("#app");
