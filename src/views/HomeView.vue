<!--
 * @Author: Jackie
 * @Date: 2023-06-03 14:40:12
 * @LastEditTime: 2023-06-03 14:51:48
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /demo-vue-package/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="show">显示加载</button>
    <button @click="hidden">关闭加载</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  mounted() {},
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
