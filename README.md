# vue-loading-ui 加载中弹窗组件

## [npm 组件包地址](https://www.npmjs.com/package/vue-loading-ui)

## 示例

![示例](https://img-blog.csdnimg.cn/d9fa51e029dc40a49911194c36c53f9a.gif)

## 安装

```
npm i vue-loading-ui
```

### 使配置 在 main.js 文件中引入组件和样式

```
import Loading from 'vue-loading-ui';
import 'vue-loading-ui/dist/vue-loading-ui.css';
Vue.use(Loading, {
  title: '正在加载...'
});
```

### 使用 页面中使用

```
<template>
  <div class="home">
    <button @click="show">显示加载</button>
    <button @click="hidden">关闭加载</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    show() {
      this.$showLoading();
    },
    hidden() {
      this.$hiddenLoading();
    },
  },
};
</script>
```

### 在网络请求中使用加载器 - 案例

```
let count = 0
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    count++
    Vue.showLoading()//在插件的index.js中定义的方法 显示插件
    return config
}, function (error) {
    // 对请求错误做些什么
    Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    count--
    if (count === 0) {
        Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
    }
    return response
}, function (error) {
    // 对响应错误做点什么
    Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
    return Promise.reject(error)
})
```