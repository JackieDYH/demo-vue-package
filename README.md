# vue3-global-eventbus vue3版本eventBus全局事件总线

## [npm 组件包地址](https://www.npmjs.com/package/vue3-global-eventbus)

<!-- ## 示例 -->

<!-- ![示例](https://img-blog.csdnimg.cn/6408745254394a2a986bc12ddbf47bb8.gif) -->

## 安装

```
npm i vue3-global-eventbus
```

### 使配置

```
入口文件默认是main.js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
// 1、引入事件类
// 自己编写的或者mitt皆可
import EventBus from 'vue3-global-eventbus'
// 或者：import EventBus from 'mitt'
const $bus = new EventBus()

// 2、挂载
// 1.使用provide提供
app.provide('$bus', $bus)
// 2.挂载到this上
app.config.globalProperties.$bus = $bus

组件中引入并使用

1、在created中使用
// Button.vue
export default {
  created() {
      this.$bus.emit('ButtonCreated')
  }
}

2、在setup中使用

注意： 因为在setup中无法访问到应用实例（this），如果你需要在setup中使用eventBus，则需要通过provide/inject方式引入

// Button.vue
import { inject } from 'vue'
export default {
  setup() {
      const $bus = inject('$bus')
      $bus.emit('ButtonSetup')
  }
}

不过也能看到在挂载的时候需要多写两行代码，使用的时候，每个组件在setup内都要引入inject函数，并且初始化一次


-----------------------------------------------------------------------
<template>
  <div class="home">
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

```
