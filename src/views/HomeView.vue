<!--
 * @Author: Jackie
 * @Date: 2023-06-17 10:54:29
 * @LastEditTime: 2023-06-17 11:34:39
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /vue3-demo/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="increment" />
    <ProgressBar :pieValue="state.count" />
  </div>
</template>

<script setup>
import ProgressBar from "../plugin/progress";
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}

// import ProgressBar from "vue2-circle-progress-bar";
// import "vue2-circle-progress-bar/dist/vue2-circle-progress-bar.css";
</script>
