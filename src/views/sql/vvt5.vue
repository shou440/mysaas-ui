<template>
  <div class="app-main">
    <div id="item1" />
    <div id="item2">建筑面积：</div>
    <div id="item3">
      <el-select size="mini" />
    </div>
    <div id="item4">分类能耗：</div>
    <div id="item5">
      <el-select size="mini" />
    </div>
    <div id="item6">起始日期：</div>
    <div id="item7">
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期" size="mini" />
    </div>
    <div id="item61">截止日期：</div>
    <div id="item71">
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期" size="mini" />
    </div>
    <div id="item8" />
    <div id="item9" />
    <div id="item10">
      <el-input v-model="input" size="mini" placeholder="请输入关键字进行过滤" />
    </div>
    <div id="item11">
      <el-tree
        ref="tree"
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        show-checkbox
      />
    </div>
    <div id="item13">
      <el-table
        :data="tableData"
        height="100%"
        border
        style="width: 100%"
        :header-cell-style="{background:'#49C6DA',height:'15px',color:'white'}"
      >
        <el-table-column prop="date" label="回路" width="250" />
        <el-table-column prop="name" label="工时" width="330" />
        <el-table-column prop="name" label="非工时" width="330" />
      </el-table>
    </div>
    <div id="item14" />
    <div id="item15">
      <div id="myChart1" :style="{width: '100%', height: '100%'}" />
    </div>
    <div id="item16">
      <div id="myChart2" :style="{width: '100%', height: '100%'}" />
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      query: {
        sql: ''
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      filterText: '',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.drawLine1()
    this.drawLine2()
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
        grid: {
          left: '8%',
          top: '16%',
          bottom: '8%',
          right: '3%'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['工时', '非工时']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '工时', itemStyle: { color: '#49C6DA' }},
              { value: 310, name: '非工时', itemStyle: { color: '#159F5C' }}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      const myChart2 = this.$echarts.init(
        document.getElementById('myChart2'),
        'wonderland'
      )
      // 绘制图表
      myChart2.setOption({
        grid: {
          left: '8%',
          top: '16%',
          bottom: '8%',
          right: '3%'
        },
        xAxis: {
          type: 'category',
          data: [
            '0时',
            '2时',
            '4时',
            '8时',
            '10时',
            '12时',
            '14时',
            '16时',
            '18时',
            '20时',
            '22时',
            '24时'
          ],
          axisLine: {
            lineStyle: {
              color: '#23A8F2'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '单位：kw/h',
          axisLine: {
            lineStyle: {
              color: '#23A8F2'
            }
          },
          splitLine: {
            show: false // 去掉网格线
          }
        },
        dataZoom: [
          {
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
            startValue: 0,
            endValue: 20
          }
        ],
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
            name: '今日',
            color: '#B6A2DE',
            barWidth: '50%'
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
  border: 1px solid green;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
#item1 {
  grid-row: 1/10;
  grid-column: 1/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 0px 1px;
}
#item2 {
  grid-row: 4/8;
  grid-column: 4/15;
  color: black;
}
#item3 {
  grid-row: 3/8;
  grid-column: 13/28;
}
#item4 {
  grid-row: 4/8;
  grid-column: 29/37;
  color: black;
}
#item5 {
  grid-row: 3/8;
  grid-column: 37/48;
}
#item6 {
  grid-row: 4/8;
  grid-column: 49/58;
  color: black;
}
#item7 {
  grid-row: 3/8;
  grid-column: 55/66;
}
#item61 {
  grid-row: 4/8;
  grid-column: 75/87;
  color: black;
}
#item71 {
  grid-row: 3/8;
  grid-column: 81/100;
}
#item8 {
  grid-row: 10/101;
  grid-column: 1/26;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 1px;
}
#item9 {
  grid-row: 10/61;
  grid-column: 26/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 0px;
}
#item10 {
  grid-row: 11/20;
  grid-column: 2/24;
}
#item11 {
  grid-row: 20/100;
  grid-column: 2/24;
}

#item13 {
  grid-row: 13/58;
  grid-column: 27/100;
}
#item14 {
  grid-row: 61/101;
  grid-column: 26/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 0px;
}
#item15 {
  grid-row: 62/100;
  grid-column: 27/60;
}
#item16 {
  grid-row: 62/100;
  grid-column: 61/100;
}
</style>
