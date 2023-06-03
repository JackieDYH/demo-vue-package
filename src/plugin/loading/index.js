/*
 * @Author: Jackie
 * @Date: 2023-06-03 12:51:03
 * @LastEditTime: 2023-06-03 13:05:34
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Loading-demo/src/plugin/loading/index.js
 * @version: 
 */
import Loading from './Loading.vue';

export default {
  // 注意点: 如果要将一个组件封装成一个插件, 那么必须提供一个install方法
  //         那么必须在install方法中注册当前的这个组件
  install: function (Vue, Options) {

    // 1.根据我们的组件生成一个构造函数
    let LoadingContructor = Vue.extend(Loading);
    // 2.根据构造函数创建实例对象
    let LoadingInstance = new LoadingContructor();
    // 3.随便创建一个标签(元素)
    let oDiv = document.createElement('div');
    // 4.将创建好的标签添加到界面上
    document.body.appendChild(oDiv);
    // 5.将创建好的实例对象挂载到创建好的元素上
    LoadingInstance.$mount(oDiv);

    // 添加初始化值
    if (Options && Options.title !== null && Options.title !== undefined) {
      LoadingInstance.title = Options.title;
    }
    // 添加全局方法
    Vue.showLoading = function () {
      LoadingInstance.isShow = true;
    };
    Vue.hiddenLoading = function () {
      LoadingInstance.isShow = false;
    };
    // 添加实例方法
    Vue.prototype.$showLoading = function () {
      LoadingInstance.isShow = true;
    };
    Vue.prototype.$hiddenLoading = function () {
      LoadingInstance.isShow = false;
    };
  }
};


// 在网络请求中使用加载器

// let count = 0
// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     count++
//     Vue.showLoading()//在插件的index.js中定义的方法 显示插件
//     return config
// }, function (error) {
//     // 对请求错误做些什么
//     Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
//     return Promise.reject(error)
// })

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     count--
//     if (count === 0) {
//         Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
//     }
//     return response
// }, function (error) {
//     // 对响应错误做点什么
//     Vue.hiddenLoading()//在插件的index.js中定义的方法 隐藏插件
//     return Promise.reject(error)
// })