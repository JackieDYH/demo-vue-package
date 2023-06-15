<!--
 * @Author: Jackie
 * @Date: 2023-06-06 13:58:58
 * @LastEditTime: 2023-06-15 11:25:23
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /demo-vue-package/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ProgressBar :pieValue="v" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ProgressBar from "../plugin/progress";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    ProgressBar,
  },
  data() {
    return {
      v: 30,
    };
  },
};
</script>
<style lang="scss" scoped>
.bar {
  width: 200px;
  height: 200px;
}
</style>