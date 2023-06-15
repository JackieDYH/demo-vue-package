# vue2-circular-progress-bar 环形进度条组件

## [npm 组件包地址](https://www.npmjs.com/package/vue2-circle-progress-bar)

## 示例

![示例](https://img-blog.csdnimg.cn/6408745254394a2a986bc12ddbf47bb8.gif)

## 安装

```
npm i vue2-circle-progress-bar
```

### 使配置 在 对应的 vue 文件中引入组件和样式

```
<template>
  <div class="home">
    <ProgressBar :pieValue="v" />
  </div>
</template>
<script>
import ProgressBar from 'vue2-circle-progress-bar';
import 'vue2-circle-progress-bar/dist/vue2-circle-progress-bar.css';
export default {
  name: "HomeView",
  components: {
    ProgressBar,
  },
  data() {
    return {
      v: 30,
    };
  },
};
</script>
```
