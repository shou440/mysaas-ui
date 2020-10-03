<template>
  <div id="main">
    <div id="container">
      <div id="top_left">
        <div id="top_left_title">建筑信息</div>
        <div id="top_left_body">
          <div class="top_left_body_r1">
            <div class="top_left_body_r1col1">建筑名称：</div>
            <div class="top_left_body_r1col2">
              <el-cascader placeholder="请选择建筑" :options="options" filterable />
            </div>
          </div>
          <div class="top_left_body_r1">
            <div class="top_left_body_r1col1">建筑地点：</div>
            <div class="top_left_body_r1col2" style="margin:9px 8px 3px 8px;">{{ top_left_title1 }}</div>
          </div>
          <div class="top_left_body_r1">
            <div class="top_left_body_r1col1">建筑面积：</div>
            <div class="top_left_body_r1col2" style="margin:8px;">{{ top_left_title2 }}</div>
          </div>
          <div class="top_left_body_r2">
            <div class="top_left_body_r2col">
              <div class="r1">
                <span class="iconfont icon-zhubiantaishu" style=" font-size:65px;color:#F6684E" />
              </div>
              <div class="r2">{{ top_left_body_r2[0].value }}</div>
              <div cloass="r3">{{ top_left_body_r2[0].title }}</div>
            </div>
            <div class="top_left_body_r2col">
              <div class="r1">
                <span class="iconfont icon-zhuangjirongliang" style=" font-size:65px;color:#36CF89" />
              </div>
              <div class="r2">{{ top_left_body_r2[1].value }}</div>
              <div class="r3">{{ top_left_body_r2[1].title }}</div>
            </div>
            <div class="top_left_body_r2col">
              <div class="r1">
                <span class="iconfont icon-rongliang" style=" font-size:65px;color:#FFA73C" />
              </div>
              <div class="r2">{{ top_left_body_r2[2].value }}</div>
              <div class="r3">{{ top_left_body_r2[2].title }}</div>
            </div>
            <div class="top_left_body_r2col">
              <div class="r1">
                <span class="iconfont icon-jiliangdianshu" style=" font-size:65px;color:#3EBCF8" />
              </div>
              <div class="r2">{{ top_left_body_r2[3].value }}</div>
              <div class="r3">{{ top_left_body_r2[3].title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="top_right">
        <div id="top_right_title">分类能耗</div>
        <div id="top_right_body">
          <div id="brc1">
            <div class="tcell">
              <div class="brr1">
                <span class="iconfont icon-ziyuan" />
              </div>
              <div class="brr2">可再生资源</div>
            </div>
            <div class="tcell">
              <div class="brr1">
                <span class="iconfont icon-dian" />
              </div>
              <div class="brr2">电</div>
            </div>
            <div class="tcell">
              <div class="brr1">
                <span class="iconfont icon-biaozhunmei" />
              </div>
              <div class="brr2">标准煤</div>
            </div>
          </div>
          <div id="brc2">
            <div v-for="item in kpi" :key="item.kpi_name" class="c2cell">
              <div> {{ item.ct1 + ':' + item.value1 + item.dw1 }} </div>
              <div> {{ item.ct2 + ':'+ item.value2 + item.dw2 }} </div>
              <div>
                <span v-if="item.dw3=='上升'" style="color:green;font-size:9px"> {{ item.ct3 + ':' + item.value3 + '%' }}</span>
                <span v-if="item.dw3=='下降'" style="color:green;font-size:9px"> {{ item.ct3 + ':' + item.value3 + '%' }}</span>
                <span v-if="item.dw3=='上升'" class="el-icon-caret-bottom" style="color:green;font-size:16px" />
                <span v-if="item.dw3=='下降'" class="el-icon-caret-bottom" style="color:red;font-size:16px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bt">
      <div id="bt_title">
        <div id="bt_title_text">用能趋势</div>
        <div id="bt_title_switch">
          <div id="bt_title_bt">
            <el-select v-if="bt_text==true" v-model="bt_value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in bt_select"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <el-switch
              v-model="bt_text"
              style="display: block"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="总电能"
              inactive-text="分时段"
            />
          </div>
        </div>
      </div>
      <div id="bt_body">
        <div v-show="bt_text==true" class="b_cl1">
          <div id="myChart1" :style="{width: '100%', height: '90%'}" />
          <div id="myChart2" :style="{width: '100%', height: '90%'}" />
        </div>
        <div v-show="bt_text==false" class="b_cl2">
          <div id="myChart3" :style="{width: '850px', height: '180px'}" />
          <div id="myChart4" :style="{width: '350px', height: '180px'}" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      top_left_title1: '珠海市南屏科技创新园',
      top_left_title2: '156721平方',
      top_left_body_r2: [
        { title: '主变电台', value: '6台' },
        { title: '装机容量', value: '9000KVA' },
        { title: '运行容量', value: '2000KVA' },
        { title: '计量点数', value: '238只' }
      ],
      options: [
        {
          value: 'zhinan',
          label: '屏西街道',
          children: [
            {
              value: 'shejiyuanze',
              label: '蕊维科技园',
              children: [
                {
                  value: 'yizhi',
                  label: '1栋'
                },
                {
                  value: 'fankui',
                  label: '2栋'
                },
                {
                  value: 'xiaolv',
                  label: '3栋'
                },
                {
                  value: 'kekong',
                  label: '4栋'
                }
              ]
            },
            {
              value: 'daohang',
              label: '屏东街道',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '测试园区1'
                },
                {
                  value: 'dingbudaohang',
                  label: '测试园区2'
                }
              ]
            }
          ]
        }

      ],
      kpi: [{ kpi_name: '建筑用水td', ct1: '当日', value1: 1980, dw1: 'KW/h', ct2: '昨日', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '上升' },
        { kpi_name: '建筑用水mt', ct1: '当月', value1: 1980, dw1: 'KW/h', ct2: '上月', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' },
        { kpi_name: '建筑用水yt', ct1: '当年', value1: 1980, dw1: 'KW/h', ct2: '上年', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' },
        { kpi_name: '用电td', ct1: '当日', value1: 1980, dw1: 'KW/h', ct2: '昨日', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '上升' },
        { kpi_name: '用电mt', ct1: '当月', value1: 1980, dw1: 'KW/h', ct2: '上月', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' },
        { kpi_name: '用电yt', ct1: '当年', value1: 1980, dw1: 'KW/h', ct2: '上年', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' },
        { kpi_name: '燃气td', ct1: '当日', value1: 1980, dw1: 'KW/h', ct2: '昨日', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '上升' },
        { kpi_name: '燃气mt', ct1: '当月', value1: 1980, dw1: 'KW/h', ct2: '上月', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' },
        { kpi_name: '燃气yt', ct1: '当年', value1: 1980, dw1: 'KW/h', ct2: '上年', value2: 1980, dw2: 'KW/h', ct3: '同比', value3: 15, dw3: '下降' }
      ],
      bt_text: true,
      bt_select: [{
        title: '可再生资源',
        value: '可再生资源'
      }, {
        title: '电',
        value: '电'
      }, {
        title: '标准煤',
        value: '标准煤'
      }],
      bt_value: '标准煤',
      query: {
        sql: ''
      }
    }
  },
  mounted() {
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
  },
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
          text: '当日逐时趋势',
          left: 'center',
          top: 'top',
          textStyle: {
            fontSize: 16,
            color: '#23A8F2'
          }
        },
        grid: {
          show: true,
          left: '6%',
          top: '25%',
          bottom: '12%',
          right: '10%'
        },
        xAxis: {
          type: 'category',
          data: ['0时', '2时', '4时', '8时', '10时', '12时', '14时', '16时', '18时', '20时', '22时', '24时'],
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
          name: '单位：kw/h',
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
        tooltip: { // 提示框组件
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
            name: '今日',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              color: '#49C6DA'
            }
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654],
            name: '昨日',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              color: '#36CF89'
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
        title: {
          text: '当日逐时趋势',
          left: 'center',
          top: 'top',
          textStyle: {
            fontSize: 16,
            color: '#23A8F2'
          }
        },
        grid: {
          show: true,
          left: '6%',
          top: '25%',
          bottom: '12%',
          right: '2%'
        },
        xAxis: {
          type: 'category',
          data: ['1日', '3日', '5日', '7日', '9日', '11时', '13日', '15日', '17日', '19日', '21日', '23日', '25日', '27日', '29日'],
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
        tooltip: { // 提示框组件
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
          formatter: '{a0}: {c0}<br />', // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
          backgroundColor: '#3C3C3C', // 标题背景色
          borderColor: '#ccc', // 边框颜色
          borderWidth: 0, // 边框线宽
          padding: 5 // 图例内边距，单位px  5  [5, 10]  [5,10,5,10]
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1109, 1233],
            type: 'line',
            name: '本月',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              color: '#C6B9EE'
            }
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654],
            name: '上月',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              color: '#18DAD1'
            }
          }
        ]
      })
    },
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      const myChart3 = this.$echarts.init(
        document.getElementById('myChart3'),
        'wonderland'
      )
      // 绘制图表
      myChart3.setOption({
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
          left: '10%',
          top: '25%',
          bottom: '15%',
          right: '6%'
        },
        xAxis: {
          type: 'category',
          data: ['1日', '3日', '5日', '7日', '9日', '11时', '13日', '15日', '17日', '19日', '21日', '23日', '25日', '27日', '29日'],
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
        tooltip: { // 提示框组件
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
            name: '本月',
            barWidth: '60%',
            color: '#18DAD1'
          },
          {
            data: [840, 789, 931, 904, 1590, 1320, 1120, 1409, 1133, 1654],
            name: '上月',
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
              color: '#36CF89'
            }
          }
        ]
      })
    },
    drawLine4() {
      // 基于准备好的dom，初始化echarts实例
      const myChart4 = this.$echarts.init(
        document.getElementById('myChart4'),
        'wonderland'
      )
      // 绘制图表
      myChart4.setOption({
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
          show: false,
          left: '10%',
          top: '25%',
          bottom: '15%',
          right: '6%'
        },
        tooltip: { // 提示框组件
          trigger: 'item', // 触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          triggerOn: 'mousemove', // 提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
          showContent: true, // 是否显示提示框浮层
          //     alwaysShowContent:true,                     //是否永远显示提示框内容
          showDelay: 0, // 浮层显示的延迟，单位为 ms
          hideDelay: 100, // 浮层隐藏的延迟，单位为 ms
          enterable: false, // 鼠标是否可进入提示框浮层中
          confine: false, // 是否将 tooltip 框限制在图表的区域内
          transitionDuration: 0.4, // 提示框浮层的移动动画过渡时间，单位是 s,设置为 0 的时候会紧跟着鼠标移动
          //       position:['10', '10'],                    //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置,[10, 10],回掉函数，inside鼠标所在图形的内部中心位置，top、left、bottom、right鼠标所在图形上侧，左侧，下侧，右侧，
          formatter: '{a0}: {c0}<br />', // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
          backgroundColor: '#3C3C3C', // 标题背景色
          borderColor: '#ccc', // 边框颜色
          borderWidth: 0, // 边框线宽
          padding: 5 // 图例内边距，单位px  5  [5, 10]  [5,10,5,10]
        },
        color: ['#6CDCA9', '#C6B9EE', '#95DEE9', '#3EBCF8'],
        series: [
          {
            data: [820, 932, 901, 934],
            type: 'pie',
            name: '本月'
          }
        ]
      })
    }
  }
}
</script>
<style scoped>
#main{
  height: 100%;
  width:100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
#container {
  color: black;
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100%;
  width:100%;
}
#container > #top_left {
  height: 100%;
}
#container > #top_left > #top_left_title {
  height: 10%;
  background-color: #49c6da;
  margin: 5px 5px 0px 5px;
  padding: 10px 5px 10px 5px;
  border-radius: 2px;
  color: white;
}
#container > #top_left > #top_left_body {
  height: 90%;
  background-color: white;
  margin: 0px 5px 0px 5px;
  padding: 10px 5px 10px 5px;
  border-radius: 0px 0px 5px 5px;
  border-left: #dcdddd 1px solid;
  border-right: #dcdddd 1px solid;
  border-bottom: #dcdddd 1px solid;
  display: grid;
  align-content: start;
}
#container > #top_left > #top_left_body > .top_left_body_r1 {
  height: 35px;
  display: grid;
  grid-template-columns: 25% 75%;
}
#container
  > #top_left
  > #top_left_body
  > .top_left_body_r1
  > .top_left_body_r1col1 {
  margin: 8px;
}
.top_left_body_r1col2 > .el-cascader {
  width: 220px;
}
#container > #top_left > #top_left_body > .top_left_body_r2 {
  display: grid;
  height: 100%;
  grid-template-columns: 25% 25% 25% 25%;
}
#container
  > #top_left
  > #top_left_body
  > .top_left_body_r2
  > .top_left_body_r2col {
  margin: 1px auto;
}
.top_left_body_r2col > .r1 {
  text-align: center;
  font-size: 48px;
}
.top_left_body_r2col > .r2 {
  text-align: center;
  font-size: 16px;
  color: seagreen;
}
.top_left_body_r2col > .r3 {
  text-align: center;
}
#top_right {
  height: 100%;
}
#top_right > #top_right_title {
  height: 10%;
  background-color: #49c6da;
  margin: 5px 5px 0px 5px;
  padding: 10px 5px 10px 5px;
  border-radius: 2px;
  color: white;
}
#top_right > #top_right_body {
  height: 90%;
  background-color: white;
  margin: 0px 5px 0px 5px;
  padding: 10px 5px 10px 5px;
  border-radius: 0px 0px 5px 5px;
  border-left: #dcdddd 1px solid;
  border-right: #dcdddd 1px solid;
  border-bottom: #dcdddd 1px solid;
  display: grid;
  grid-template-columns: 15% 85%;
}
#top_right > #top_right_body > #brc1 {
  height: 95%;
  display: grid;
  align-content: space-between;
  grid-template-rows: 30% 30% 30%;
}
#top_right_body > #brc1 > .tcell {
  height: 100%;
  background-color: #f2fbfb;
}
#top_right_body > #brc1 > .tcell > .brr1 {
  height: 75%;
  text-align: center;
  font-size: 30px;
}
.brr1 > span {
  font-size: 30px;
  color: #3ebcf8;
}
#top_right_body > #brc1 > .tcell > .brr2 {
  height: 25%;
  text-align: center;
  display: grid;
}

#top_right > #top_right_body > #brc2 {
  margin-left: 15px;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
#brc2 > .c2cell {
  width: 90%;
  height: 80%;
  border: 1px solid #49c6da;
  display: grid;
  grid-template-rows: 33.33% 33.33% 33.33%;
  font-size: 8px;
  padding: 3px 2px 1px 28px;
}
#bt {
  height: 100%;
  width: 100%;
  margin-top: 10px;
}
#bt > #bt_title {
  height: 14%;
  background-color: #49c6da;
  margin: 5px 5px 0px 5px;
  padding: 4px 5px 4px 5px;
  border-radius: 2px;
  color: white;
  display: grid;
  grid-template-columns: 70% 30%;
}
#bt > #bt_title > #bt_title_switch {
  display: grid;
  text-align: right;
  grid-template-columns: 1fr 1fr;
}

#bt > #bt_body {
  height: 86%;
  background-color: white;
  margin: 0px 5px 0px 5px;
  padding: 10px 5px 10px 5px;
  border-radius: 0px 0px 5px 5px;
  border-left: #dcdddd 1px solid;
  border-right: #dcdddd 1px solid;
  border-bottom: #dcdddd 1px solid;
}
#bt > #bt_body > .b_cl1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 99%;
}
#bt > #bt_body > .b_cl2{
  display: grid;
  grid-template-columns: 65% 30%;
  height: 99%;
}
</style>
