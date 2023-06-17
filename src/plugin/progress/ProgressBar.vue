<!--
 * @Author: Jackie
 * @Date: 2023-06-15 09:21:39
 * @LastEditTime: 2023-06-17 11:47:46
 * @LastEditors: Jackie
 * @Description: vue3环形进度条
 * @FilePath: /demo-vue-package/src/plugin/progress/ProgressBar.vue
 * @version: 
-->
<template>
  <div class="warp">
    <!-- 环形进度条 -->
    <div class="chartsWrap">
      <div
        id="pieCharts"
        :style="{ width: props.wh + 'px', height: props.wh + 'px' }"
      ></div>
      <div
        id="pieChartsShadow"
        :style="{ width: props.wh + 'px', height: props.wh + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  pieValue: {
    type: Number,
    required: true,
    default: 20,
  },
  pieNmae: {
    type: String,
    default: "异常分数",
  },
  wh: {
    type: Number,
    default: 200,
  },
});

// 加载仪表盘
const getPieCharts = (num) => {
  // console.log(total, pieData);
  echarts.init(document.getElementById("pieCharts")).dispose();
  let chartDom = document.getElementById("pieCharts");
  let myChart = echarts.init(chartDom);
  let pieConf;
  const gaugeData = [
    {
      value: num,
      name: props.pieNmae, //"异常分数",
      title: {
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-10%"],
      },
      itemStyle: {
        color: {
          type: "linear",
          name: props.pieNmae, //"异常分数",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgb(147,114,241)",
            },
            {
              offset: 1,
              color: "rgba(167,142,242,.6)", // 100% 处的颜色
            },
          ],
        },
        global: false,
      },
    },
  ];
  pieConf = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        radius: "100%",
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
        },
        axisLine: {
          lineStyle: {
            width: 25,
            color: [[1, "rgb(230,233,241)"]],
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          fontSize: 18,
          color: "rgb(72,72,124)",
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 40,
          color: "rgb(147,114,241)",
          formatter: "{value}%",
        },
      },
    ],
  };

  pieConf && myChart.setOption(pieConf);
};
// 叠加仪表盘底图
const getPieChartsShadow = (num) => {
  // console.log(total, pieData);
  echarts.init(document.getElementById("pieChartsShadow")).dispose();
  var chartDom = document.getElementById("pieChartsShadow");
  var myChart = echarts.init(chartDom);
  var pieConf;
  const gaugeData = [
    {
      value: 0,
      name: props.pieNmae, //"异常分数",
      title: {
        show: false,
        offsetCenter: ["0%", "30%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "-10%"],
      },
      min: 0,
      progress: false,
      itemStyle: {
        color: {
          type: "linear",
          name: props.pieNmae, //"异常分数",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(147,114,241,0)",
            },
            {
              offset: 1,
              color: "rgba(167,142,242,0)", // 100% 处的颜色
            },
          ],
        },
        global: false,
      },
    },
  ];
  pieConf = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        radius: "100%",
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
        },
        axisLine: {
          lineStyle: {
            width: 25,
            color: [[1, "rgb(221,221,236)"]],
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: gaugeData,
        title: {
          fontSize: 18,
          color: "rgb(72,72,124)",
        },
        detail: {
          show: false,
          width: 50,
          height: 14,
          fontSize: 30,
          color: "rgb(147,114,241)",
          formatter: "{value}%",
        },
      },
    ],
  };
  pieConf && myChart.setOption(pieConf);
};

// 监听
watch(props, (nweProps) => {
  getPieCharts(props.pieValue);
  getPieChartsShadow(props.pieValue);
});

// 挂载完成
onMounted(() => {
  getPieCharts(props.pieValue);
  getPieChartsShadow(props.pieValue);
});
</script>

<style scoped lang='scss'>
.warp {
  .chartsWrap {
    position: relative;
    /* width: 200px;
    height: 200px;

    #pieCharts,
    #pieChartsShadow {
      width: 200px;
      height: 200px;
    } */

    #pieChartsShadow {
      position: absolute;
      top: 4px;
      left: 0;
      z-index: -1;
    }
  }
}
</style>