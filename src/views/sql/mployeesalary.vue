<template>
  <div class="app-main">
    <div id="z-header">
      <div id="h-item1">建筑名称：</div>
      <div id="h-item2">
        <el-select />
      </div>
      <div id="h-item3">分类耗能：</div>
      <div id="h-item4">
        <el-select />
      </div>
      <div id="h-item5">年份：</div>
      <div id="h-item6">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
      </div>
    </div>
    <div id="z-content1">
      <div id="t1-item1">
        <div id="myChart1" :style="{width: '100%', height: '100%'}" />
      </div>
    </div>
    <div id="z-content2">
      <div id="t2-item1">
        <el-table
          :data="tableData"
          height="100%"
          border
          style="width: 100%"
          :header-cell-style="{background:'#49C6DA',height:'15px',color:'white'}"
        >
          <el-table-column prop="date" label="月份" width="250" />
          <el-table-column prop="name" label="2020年用电量" width="250" />
          <el-table-column prop="name" label="2019年用电量" width="250" />
          <el-table-column prop="address" label="同比" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  mounted() {
    this.drawLine1()
  },
  created() {},
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      const myChart1 = this.$echarts.init(
        document.getElementById('myChart1'),
        'wonderland'
      )
      // 绘制图表
      myChart1.setOption({
        title: {
          text: '当月逐日趋势',
          left: 'center',
          top: 'top',
          textStyle: {
            fontSize: 16,
            color: '#23A8F2'
          }
        },
        grid: {
          show: true,
          left: '8%',
          top: '15%',
          bottom: '15%',
          right: '6%'
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisLine: {
            lineStyle: {
              color: '#23A8F2'
            }
          },
          // 设置网格线颜色
          splitLine: {
            show: true,
            lineStyle: {
              color: '#A6E1FC',
              width: 1,
              type: 'solid'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '单位：KW/h',
          axisLine: {
            lineStyle: {
              color: '#23A8F2'
            }
          },
          // 设置网格线颜色
          splitLine: {
            show: true,
            lineStyle: {
              color: '#A6E1FC',
              width: 1,
              type: 'solid'
            }
          }
        },
        tooltip: {
          // 提示框组件
          trigger: 'axis', // 触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          triggerOn: 'mousemove', // 提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
          showContent: true, // 是否显示提示框浮层
          //     alwaysShowContent:true,                     //是否永远显示提示框内容
          showDelay: 0, // 浮层显示的延迟，单位为 ms
          hideDelay: 100, // 浮层隐藏的延迟，单位为 ms
          enterable: false, // 鼠标是否可进入提示框浮层中
          confine: false, // 是否将 tooltip 框限制在图表的区域内
          transitionDuration: 0.4, // 提示框浮层的移动动画过渡时间，单位是 s,设置为 0 的时候会紧跟着鼠标移动
          //       position:['10', '10'],                    //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置,[10, 10],回掉函数，inside鼠标所在图形的内部中心位置，top、left、bottom、right鼠标所在图形上侧，左侧，下侧，右侧，
          formatter: '{a0}: {c0}<br />{a1}: {c1}', // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
          backgroundColor: '#3C3C3C', // 标题背景色
          borderColor: '#ccc', // 边框颜色
          borderWidth: 0, // 边框线宽
          padding: 5 // 图例内边距，单位px  5  [5, 10]  [5,10,5,10]
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1109, 1233],
            type: 'bar',
            name: '本年',
            color: '#18DAD1'
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654],
            type: 'bar',
            name: '上年',
            color: '#36CF89'
          }
        ]
      })
    }
  }
}
</script>
<style scoped>
.app-main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr 4fr;
}
#z-header {
  border: 1px solid #DCDCDC;
  background-color: white;
  margin: 2px 2px 2px 2px;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  grid-template-rows: 5px 5px 5px 5px 5px 5px auto;
  color: #333333;
}
#h-item1 {
  grid-column: 2/5;
  grid-row: 4/7;
}
#h-item2 {
  grid-column: 6/14;
  grid-row: 2/5;
}
#h-item3 {
  grid-column: 15/18;
  grid-row: 4/7;
}
#h-item4 {
  grid-column: 19/27;
  grid-row: 2/5;
}
#h-item5 {
  grid-column: 28/30;
  grid-row: 4/7;
}
#h-item6 {
  grid-column: 31/36;
  grid-row: 2/5;
}

#z-content1 {
  border: 1px solid #DCDCDC;
  background-color: white;
  margin: 2px 2px 2px 2px;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(48, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
#t1-item1 {
  grid-column: 2/48;
  grid-row: 2/12;
}

#z-content2 {
  border: 1px solid #DCDCDC;
  background-color: white;
  margin: 2px 2px 2px 2px;
  padding:10px 10px 10px 10px;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 98%

}
#t2_item1 {
  border: 1px solid red;
}
</style>

