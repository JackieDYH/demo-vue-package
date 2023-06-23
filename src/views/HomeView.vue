<!--
 * @Author: Jackie
 * @Date: 2023-06-17 10:54:29
 * @LastEditTime: 2023-06-23 12:51:19
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /demo-vue-package/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="increment" />
    <button @click="sk">触发事件</button>
  </div>
</template>

<script setup>
import { reactive, inject,onMounted,onBeforeUnmount } from "vue";
const $bus = inject("$bus");
const sk=()=>{
  $bus.emit("ButtonSetup",123);
}

onMounted(() => {
  console.log(`the component is now mounted.`)
  $bus.on('ButtonSetup',(h)=>{
    console.log('this ButtonSetup',h);
  })
})

onBeforeUnmount(()=>{
  console.log('the component is now un-mounted.')
  $bus.off('ButtonSetup')
})



</script>
