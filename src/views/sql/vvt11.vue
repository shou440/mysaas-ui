﻿<template>
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
    <div id="item61"><el-button size="mini" type="primary"><span class="iconfont icon-nian" />&nbsp;年</el-button></div>
    <div id="item71"><el-button size="mini" type="success"><span class="iconfont icon-yue" />&nbsp;月</el-button></div>
    <div id="item81"><el-button size="mini" type="info"><span class="iconfont icon-ri" />&nbsp;日</el-button></div>
    <div id="item8" />
    <div id="item9" />
    <div id="item10">
      <el-input v-model="input" size="mini" placeholder="请输入关键字进行过滤" />
    </div>
    <div id="item11">
      <el-checkbox-group v-model="checkList" style="display:block;">
        <el-checkbox label="D201 电能管理事业部" />
        <el-checkbox label="D205 IT配电事业部" />
        <el-checkbox label="D206 基础研发部" />
        <el-checkbox label="D207 智能照明事业部" />
        <el-checkbox label="D208 消防电气事业部" />
      </el-checkbox-group>
    </div>
    <div id="item13">
      <el-table
        :data="tableData"
        height="100%"
        border
        style="width: 100%"
        :header-cell-style="{background:'#49C6DA',height:'15px',color:'white'}"
      >
        <el-table-column prop="date" label="回路名称" width="200" />
        <el-table-column prop="name" label="1时" width="80" />
        <el-table-column prop="name" label="2时" width="80" />
        <el-table-column prop="name" label="3时" width="80" />
        <el-table-column prop="name" label="4时" width="80" />
        <el-table-column prop="name" label="5时" width="80" />
        <el-table-column prop="name" label="6时" width="80" />
        <el-table-column prop="name" label="7时" width="80" />
        <el-table-column prop="name" label="8时" width="80" />
        <el-table-column prop="name" label="9时" width="80" />
        <el-table-column prop="name" label="10时" width="80" />
        <el-table-column prop="name" label="11时" width="80" />
        <el-table-column prop="name" label="12时" width="80" />
        <el-table-column prop="name" label="13时" width="80" />
        <el-table-column prop="name" label="14时" width="80" />
        <el-table-column prop="name" label="15时" width="80" />
        <el-table-column prop="name" label="16时" width="80" />
        <el-table-column prop="name" label="17时" width="80" />
        <el-table-column prop="name" label="18时" width="80" />
        <el-table-column prop="name" label="19时" width="80" />
        <el-table-column prop="name" label="20时" width="80" />
        <el-table-column prop="name" label="21时" width="80" />
        <el-table-column prop="name" label="22时" width="80" />
        <el-table-column prop="name" label="23时" width="80" />
        <el-table-column prop="name" label="24时" width="80" />
      </el-table>
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
      checkList: ['选中且禁用', '复选框 A']
    }
  },
  mounted() {

  },
  created() {},
  methods: {
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
  grid-row: 3/9;
  grid-column: 75/87;
}
#item71 {
  grid-row: 3/9;
  grid-column: 83/90;
}
#item81 {
  grid-row: 3/9;
  grid-column: 91/100;
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
  grid-row: 10/101;
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
  grid-row: 17/100;
  grid-column: 3/24;
}

#item13 {
  grid-row: 15/98;
  grid-column: 28/100;
}
</style>
