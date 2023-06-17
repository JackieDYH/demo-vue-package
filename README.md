# vue3x-circular-progress-bar 环形进度条组件

## [npm 组件包地址 vue2 版本](https://www.npmjs.com/package/vue2-circle-progress-bar)

## [npm 组件包地址 vue3 版本](https://www.npmjs.com/package/vue3x-circle-progress-bar)

## 示例

![示例](https://img-blog.csdnimg.cn/6408745254394a2a986bc12ddbf47bb8.gif)

## 安装

```
npm i vue3x-circle-progress-bar
```

### 使配置 在 对应的 vue 文件中引入组件和样式

```
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="increment" />
    <ProgressBar :pieValue="state.count" />
  </div>
</template>

<script setup>
import ProgressBar from "vue3x-circle-progress-bar";
import "vue3x-circle-progress-bar/dist/vue3x-circle-progress-bar.css";
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
</script>
```
