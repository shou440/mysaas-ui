<template>
  <div class="app-main">
    <div id="item1" />
    <div id="item1_1"><span class="iconfont icon-yibiao" style="font-size:40px;color:#19A15F" /></div>
    <div id="item1_2"><span style="font-size:24px;color:#49C6DA">23</span></div>
    <div id="item1_3"><span class="iconfont icon-dianbiao" style="font-size:40px;color:#19A15F" /></div>
    <div id="item1_4"><span style="font-size:24px;color:#49C6DA">282</span></div>
    <div id="item1_5"><span style="color:black">网关（个）</span></div>
    <div id="item1_6"><span style="color:black">电表（个）</span></div>
    <div id="item2">平台运行状态</div>
    <div id="item3" />
    <div id="item3_1"><span class="iconfont icon-eryanghuatan" style="font-size:40px;color:#22A7F2" /></div>
    <div id="item3_2"><span style="font-size:24px;color:#49C6DA">436</span><span style=";color:black">(吨)</span></div>
    <div id="item3_3"><span class="iconfont icon-meikuang" style="font-size:40px;color:#22A7F2" /></div>
    <div id="item3_4"><span style="font-size:24px;color:#49C6DA">96571</span><span style=";color:black">(kwh)</span></div>
    <div id="item3_5"><span style="color:black">用水</span></div>
    <div id="item3_6"><span style="color:black">用电</span></div>
    <div id="item4">水电合计(月)</div>
    <div id="item5" />
    <div id="item5_1"> <div id="myChart2" :style="{width: '100%', height: '100%'}" /></div>
    <div id="item6">逐时用电趋势(kw.h)</div>
    <div id="item7"><iframe id="iframe1" src="https://map.baidu.com/@12646658,2528558,13z" style="width:100%;height:100%" /></div>
    <div id="item8" />
    <div id="item9">逐日用电趋势(kw.h)</div>
    <div id="item8_1">
      <div id="myChart1" :style="{width: '100%', height: '100%'}" />
    </div>
    <div id="item10" />
    <div id="item11">用电日同比分析</div>
    <div id="item14">当日用电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">16</span>&nbsp;kw.h</div>
    <div id="item15">昨日用电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">17</span>kw.h</div>
    <div id="item16">同期对比&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">12%</span>
      <span class="el-icon-caret-bottom" style="font-size:18px;color:red" /></div>
    <div id="item12" />
    <div id="item13">用电月同比分析</div>
    <div id="item17">当月用电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">16</span>&nbsp;kw.h</div>
    <div id="item18">上月用电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">17</span>kw.h</div>
    <div id="item19">同期对比&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;color:#253243">12%</span>
      <span class="el-icon-caret-bottom" style="font-size:18px;color:red" /></div>

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
      checkList: ['选中且禁用', '复选框 A']
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
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1109, 1233, 0],
            type: 'line',
            areaStyle: { color: '#D5F3F7' },
            name: '本年'
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654, 129, 0, 1895],
            type: 'line',
            name: '上年',
            areaStyle: { color: '#C9E4F4' }
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
            type: 'line',
            areaStyle: { color: '#18DAD1' },
            name: '本年'
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654],
            type: 'line',
            name: '上年',
            areaStyle: { color: '#18DAD1' }
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
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
}
#item1 {
  grid-row: 1/33;
  grid-column: 1/28;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item1_1{
      grid-row: 9/18;
      grid-column: 6/15;
}
#item1_2{
      grid-row: 17/22;
      grid-column: 7/15;
}
#item1_3{
      grid-row: 9/18;
      grid-column: 18/25;
}
#item1_4{
      grid-row: 17/22;
      grid-column: 18/25;
}
#item1_5{
      grid-row: 22/28;
      grid-column: 5/15;
}
#item1_6{
      grid-row: 22/28;
      grid-column: 18/25;
}
#item2{
     grid-row: 1/7;
     grid-column: 1/28;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}

#item3 {
  grid-row: 34/66;
  grid-column: 1/28;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item3_1{
      grid-row: 45/52;
      grid-column: 6/15;
}
#item3_2{
      grid-row: 53/60;
      grid-column: 7/15;
}
#item3_3{
      grid-row: 45/52;
      grid-column: 18/25;
}
#item3_4{
      grid-row: 53/60;
      grid-column: 18/25;
}
#item3_5{
      grid-row: 59/70;
      grid-column: 7/15;
}
#item3_6{
      grid-row: 59/70;
      grid-column: 18/25;
}
#item4{
     grid-row: 34/40;
     grid-column: 1/28;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}
#item5 {
  grid-row: 67/100;
  grid-column: 1/28;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item5_1 {
  grid-row: 74/99;
  grid-column: 2/27;
}
#item6{
     grid-row: 67/73;
     grid-column: 1/28;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}

#item7{
  grid-row: 1/67;
  grid-column: 29/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item8 {
  grid-row: 67/100;
  grid-column: 29/56;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item8_1 {
  grid-row: 74/99;
  grid-column: 30/55;

}
#item9{
     grid-row: 67/73;
     grid-column: 29/56;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}
#item10 {
  grid-row: 67/100;
  grid-column: 57/78;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item11{
     grid-row: 67/73;
     grid-column: 57/78;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}
#item12 {
  grid-row: 67/100;
  grid-column: 79/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 1px 5px;
}
#item13{
     grid-row: 67/73;
     grid-column: 79/101;
     background-color: #49C6DA;
     border-radius: 3px;
     margin: 1px 1px 1px 5px;
     padding:7px 0px 2px 5px;
}
#item14{
     grid-row: 73/81;
     grid-column: 58/78;
     background-color: #D8E4FB;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}
#item15{
     grid-row: 81/89;
     grid-column: 58/78;
     background-color: #FBE0DE;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}
#item16{
     grid-row: 89/97;
     grid-column: 58/78;
     background-color: #DDF3DC;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}
#item17{
     grid-row: 73/81;
     grid-column: 80/101;
     background-color: #D8E4FB;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}
#item18{
     grid-row: 81/89;
     grid-column: 80/101;
     background-color: #FBE0DE;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}
#item19{
     grid-row: 89/97;
     grid-column:80/101;
     background-color: #DDF3DC;
     border-radius: 3px;
     margin: 8px 12px 1px 8px;
     padding:12px 0px 2px 8px;
     color:darkcyan;
}

</style>

