(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0f5c"],{"/gXl":function(e,t,l){"use strict";l.d(t,"d",function(){return r}),l.d(t,"b",function(){return a}),l.d(t,"c",function(){return o}),l.d(t,"e",function(){return i}),l.d(t,"a",function(){return s});var n=l("t3Un"),r=function(e){return Object(n.a)({url:"/dept",method:"post",data:e})},a=function(){return Object(n.a)({url:"/dept",method:"get"})},o=function(){return Object(n.a)({url:"/dept/tree",method:"get"})},i=function(e){return Object(n.a)({url:"/dept",method:"put",data:e})},s=function(e){return Object(n.a)({url:"/dept/"+e,method:"delete"})}},Uz2U:function(e,t,l){"use strict";l.r(t);var n=l("XVEU"),r=l("Hycs"),a=l("7Qib"),o=l("/gXl"),i=l("TUcR"),s=l.n(i),d=(l("PR6w"),{components:{Treeselect:s.a},data:function(){return{tableData:[],keyword:"",title:"",dialogFormVisible:!1,formLabelWidth:"120px",isEditForm:!1,dateScopes:[{id:1,des:"全部"},{id:2,des:"本级"},{id:3,des:"本级以及子级"},{id:4,des:"自定义"}],deptData:[],deptTreeProps:{label:"name",children:"children"},query:{roleName:""},form:{roleId:0,roleName:"",roleCode:"",roleDesc:"",roleMenus:[],dsType:0,deptName:"",deptId:1},menuData:[],defaultProps:{children:"children",label:"name"},selectRole:{},checkAll:!1,menuIds:[],dataRule:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleDesc:[{required:!0,message:"角色介绍不能为空",trigger:"blur"}],roleCode:[{required:!0,message:"角色标识不能为空",trigger:"blur"}]},loading:!1,deptIds:[]}},created:function(){this.findTreeData(),this.roleList()},methods:{parseTime:a.b,roleList:function(){var e=this;this.loading=!0;var t=new URLSearchParams;t.append("roleName",this.query.roleName),Object(n.d)(t).then(function(t){e.tableData=t.data.data,e.loading=!1})},findTreeData:function(){var e=this;this.menuLoading=!0,Object(r.c)().then(function(t){e.menuData=t.data.data,e.menuLoading=!1})},handleMenuCheckChange:function(e,t){var l=this;if(t){var n=e.parentId;this.$refs.menuTree.setChecked(n,!0,!1)}else null!=e.children&&e.children.forEach(function(e){l.$refs.menuTree.setChecked(e.id,!1,!1)})},handleCheckAll:function(){if(this.checkAll){var e=[];this.checkAllMenu(this.menuData,e),this.$refs.menuTree.setCheckedNodes(e)}else this.$refs.menuTree.setCheckedNodes([])},checkAllMenu:function(e,t){var l=this;e.forEach(function(e){t.push(e),e.children&&l.checkAllMenu(e.children,t)})},handleFind:function(){this.roleList()},handleReset:function(){this.query={roleName:""},this.roleList()},handleAdd:function(){this.dialogFormVisible=!0,this.title="增加角色",this.form={roleId:0,roleName:"",roleCode:"",roleDesc:"",roleMenus:[],roleDepts:[],dsType:"",deptName:"",deptId:1},this.isEditForm=!1},handleEdit:function(e){this.dialogFormVisible=!0,this.isEditForm=!0,this.title="编辑角色",this.form=e,this.handleRoleSelectChange(e.roleId),this.deptIds=[],4===this.form.dsType&&this.findDeptTree();for(var t=0;t<this.form.roleDepts.length;t++)this.deptIds[t]=this.form.roleDepts[t]},handleRoleSelectChange:function(e){var t=this;console.log(e),this.selectRole.id=e,Object(n.c)(e).then(function(e){t.$refs.menuTree.setCheckedNodes(e.data.data)})},handleDelete:function(e){var t=this,l=this;this.$confirm("此操作将把角色删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)(e.roleId).then(function(e){200===e.data.code?(t.$message({type:"success",message:"操作成功"}),l.roleList()):t.$message({type:"error",message:e.data.msg})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},submitForm:function(){var e=this;if(4!==this.form.dsType||0!==this.deptIds.length){var t=[];if(4===this.form.dsType){for(var l=0;l<this.deptIds.length;l++)t.push(this.deptIds[l]);this.form.roleDepts=t}for(var r=""!==this.selectRole.id?this.selectRole.id:"0",a=this.$refs.menuTree.getCheckedNodes(!1,!0),o=[],i=0,s=a.length;i<s;i++){var d={roleId:r,menuId:a[i].menuId};o.push(d)}this.form.roleMenus=o,this.$refs.form.validate(function(t){t&&(e.isEditForm?Object(n.e)(e.form).then(function(t){200===t.data.code?(e.$message({type:"success",message:"操作成功"}),e.dialogFormVisible=!1,e.roleList()):e.$message({type:"error",message:t.data})}):Object(n.a)(e.form).then(function(t){200===t.data.code?(e.$message({type:"success",message:"操作成功"}),e.dialogFormVisible=!1,e.roleList()):e.$message({type:"error",message:t.data.msg})}))})}else this.$message({message:"自定义数据权限不能为空",type:"warning"})},findDeptTree:function(){var e=this;Object(o.c)().then(function(t){console.log(t),e.deptData=t.data.data})},changeScope:function(){this.deptIds=[],4===this.form.dsType&&this.findDeptTree()}}}),c=l("ZrdR"),u=Object(c.a)(d,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"filter-container",staticStyle:{margin:"10px 0 10px 0"}},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:6}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",size:"small",placeholder:"请输入角色名称"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFind(t):null}},model:{value:e.query.roleName,callback:function(t){e.$set(e.query,"roleName",t)},expression:"query.roleName"}})],1)]),e._v(" "),l("el-col",{attrs:{span:9}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFind}},[e._v("搜索\n          ")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-refresh"},on:{click:e.handleReset}},[e._v("重置\n          ")]),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加\n          ")])],1)])],1)],1),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{type:"selection"}}),e._v(" "),l("el-table-column",{attrs:{label:"序号",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"角色名称",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.roleName))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"角色标识",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.roleCode))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"角色介绍",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.roleDesc))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"创建时间",width:"160",align:"center",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.dataRule}},[l("el-form-item",{attrs:{label:"角色名称","label-width":e.formLabelWidth,prop:"roleName"}},[l("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"角色标识","label-width":e.formLabelWidth,prop:"roleCode"}},[l("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色标识"},model:{value:e.form.roleCode,callback:function(t){e.$set(e.form,"roleCode",t)},expression:"form.roleCode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"角色介绍","label-width":e.formLabelWidth,prop:"roleDesc"}},[l("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入角色介绍"},model:{value:e.form.roleDesc,callback:function(t){e.$set(e.form,"roleDesc",t)},expression:"form.roleDesc"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"数据范围","label-width":e.formLabelWidth}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择数据范围"},on:{change:e.changeScope},model:{value:e.form.dsType,callback:function(t){e.$set(e.form,"dsType",t)},expression:"form.dsType"}},e._l(e.dateScopes,function(e){return l("el-option",{key:e.id,attrs:{label:e.des,value:e.id}})}))],1),e._v(" "),4===e.form.dsType?l("el-form-item",{attrs:{label:"数据权限","label-width":e.formLabelWidth}},[l("treeselect",{attrs:{options:e.deptData,multiple:"",placeholder:"请选择"},model:{value:e.deptIds,callback:function(t){e.deptIds=t},expression:"deptIds"}})],1):e._e(),e._v(" "),l("el-form-item",{attrs:{label:"访问菜单","label-width":e.formLabelWidth}},[l("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.menuLoading,expression:"menuLoading"}],ref:"menuTree",attrs:{data:e.menuData,size:"mini","show-checkbox":"","node-key":"menuId",props:e.defaultProps,"element-loading-text":"拼命加载中","check-strictly":!0},on:{"check-change":e.handleMenuCheckChange}}),e._v(" "),l("div",{staticStyle:{"padding-left":"24px","padding-top":"12px"}},[l("el-checkbox",{attrs:{disabled:!1},on:{change:e.handleCheckAll},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[l("b",[e._v("全选")])])],1)],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},[],!1,null,null,null);u.options.__file="role.vue";t.default=u.exports},XVEU:function(e,t,l){"use strict";l.d(t,"d",function(){return r}),l.d(t,"b",function(){return a}),l.d(t,"a",function(){return o}),l.d(t,"e",function(){return i}),l.d(t,"c",function(){return s});var n=l("t3Un");function r(e){return Object(n.a)({url:"/role",method:"get",params:e})}function a(e){return Object(n.a)({url:"/role/"+e,method:"delete"})}function o(e){return Object(n.a)({url:"/role",method:"post",data:e})}function i(e){return Object(n.a)({url:"role",method:"put",data:e})}function s(e){return Object(n.a)({url:"/role/findRoleMenus/"+e,method:"get"})}}}]);