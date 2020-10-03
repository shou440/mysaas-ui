<template>
  <div class="app-main">
    <div id="item1" />
    <div id="item2">建筑名称:</div>
    <div id="item3">
      <el-select size="mini" />
    </div>
    <div id="item4">日期：</div>
    <div id="item5">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="mini" />
    </div>
    <div id="item6">
      <el-button type="goon" plain size="mini">
        <span class="iconfont icon-nian">&nbsp;&nbsp;&nbsp;&nbsp;年</span>
      </el-button>
    </div>
    <div id="item7">
      <el-button type="goon" plain size="mini">
        <span class="iconfont icon-yue">&nbsp;&nbsp;&nbsp;&nbsp;月</span>
      </el-button>
    </div>
    <div id="item8">
      <el-button type="goon" plain size="mini">
        <span class="iconfont icon-ri">&nbsp;&nbsp;&nbsp;&nbsp;日</span>
      </el-button>
    </div>
    <div id="item9" />
    <div id="item10">
      <el-input v-model="input" size="mini" placeholder="请输入关键字进行过滤" />
    </div>
    <div id="item11">
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
    </div>
    <div id="item12" />
    <div id="item13">
      <el-table
        :data="tableData"
        height="100%"
        style="width: 100%"
        :header-cell-style="{background:'#49C6DA',height:'15px',color:'white'}"
      >
        <el-table-column prop="date" label="回路名称" width="220" />
        <el-table-column label="尖">
          <el-table-column prop="name" label="电量" width="80" />
          <el-table-column prop="name" label="电费" width="80" />
        </el-table-column>
        <el-table-column label="峰">
          <el-table-column prop="name" label="电量" width="80" />
          <el-table-column prop="name" label="电费" width="80" />
        </el-table-column>
        <el-table-column label="平">
          <el-table-column prop="name" label="电量" width="80" />
          <el-table-column prop="name" label="电费" width="80" />
        </el-table-column>
        <el-table-column label="谷">
          <el-table-column prop="name" label="电量" width="80" />
          <el-table-column prop="name" label="电费" width="80" />
        </el-table-column>
        <el-table-column label="合计">
          <el-table-column prop="name" label="电量" width="80" />
          <el-table-column prop="name" label="电费" width="80" />
        </el-table-column>
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
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  mounted() {
    this.drawLine0()
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
  },
  created() {},
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
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
  grid-column: 11/36;
}
#item4 {
  grid-row: 4/8;
  grid-column: 30/39;
  color: black;
}
#item5 {
  grid-row: 3/8;
  grid-column: 35/58;
}
#item6 {
  grid-row: 3/9;
  grid-column: 55/65;
}
#item7 {
  grid-row: 3/9;
  grid-column: 66/76;
}
#item8 {
  grid-row: 3/9;
  grid-column: 77/87;
}
#item9 {
  grid-row: 10/101;
  grid-column: 1/26;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 0px 1px;
}
#item10 {
  grid-row: 11/20;
  grid-column: 2/24;
}
#item11 {
  grid-row: 20/100;
  grid-column: 2/24;
}
#item12 {
  grid-row: 10/101;
  grid-column: 26/101;
  background-color: white;
  color: darkgray;
  border: darkgray 1px solid;
  border-radius: 3px;
  margin: 1px 1px 0px 1px;
}
#item13 {
  grid-row: 12/100;
  grid-column: 27/100;
}

.el-button--goon.is-active,
.el-button--goon:active {
  background: #49c6da;
  border-color: #49c6da;
  color: #fff;
}

.el-button--goon:focus,
.el-button--goon:hover {
  background: #48d1cc;
  border-color: #48d1cc;
  color: #fff;
}

.el-button--goon {
  color: #fff;
  background-color: #49c6da;
  border-color: #49c6da;
}
</style>

