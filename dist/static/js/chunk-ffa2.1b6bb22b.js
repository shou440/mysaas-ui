(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ffa2"],{"/4S1":function(e,t,r){"use strict";var a=r("MO82"),o=Object.prototype.hasOwnProperty,n=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:a.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},c=function(e,t,r){if(e){var a=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(a),l=i?a.slice(0,i.index):a,c=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var s=0;r.depth>0&&null!==(i=n.exec(a))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+a.slice(i.index)+"]"),function(e,t,r){for(var a=t,o=e.length-1;o>=0;--o){var n,i=e[o];if("[]"===i&&r.parseArrays)n=[].concat(a);else{n=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(n=[])[c]=a:n[l]=a:n={0:a}}a=n}return a}(c,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){var r,c={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,d=s.split(t.delimiter,u),p=-1,f=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[r]?f="utf-8":"utf8=%26%2310003%3B"===d[r]&&(f="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var m,b,h=d[r],y=h.indexOf("]="),g=-1===y?h.indexOf("="):y+1;-1===g?(m=t.decoder(h,i.decoder,f,"key"),b=t.strictNullHandling?null:""):(m=t.decoder(h.slice(0,g),i.decoder,f,"key"),b=t.decoder(h.slice(g+1),i.decoder,f,"value")),b&&t.interpretNumericEntities&&"iso-8859-1"===f&&(b=l(b)),b&&"string"==typeof b&&t.comma&&b.indexOf(",")>-1&&(b=b.split(",")),h.indexOf("[]=")>-1&&(b=n(b)?[b]:b),o.call(c,m)?c[m]=a.combine(c[m],b):c[m]=b}return c}(e,r):e,u=r.plainObjects?Object.create(null):{},d=Object.keys(s),p=0;p<d.length;++p){var f=d[p],m=c(f,s[f],r);u=a.merge(u,m,r)}return a.compact(u)}},F5OA:function(e,t,r){"use strict";var a=r("MO82"),o=r("LpsE"),n=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,c=Array.prototype.push,s=function(e,t){c.apply(e,l(t)?t:[t])},u=Date.prototype.toISOString,d=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,format:d,formatter:o.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,o,n,i,c,u,d,f,m,b,h,y){var g=t;if("function"==typeof u?g=u(r,g):g instanceof Date?g=m(g):"comma"===o&&l(g)&&(g=g.join(",")),null===g){if(n)return c&&!h?c(r,p.encoder,y,"key"):r;g=""}if(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==typeof e||"bigint"==typeof e}(g)||a.isBuffer(g))return c?[b(h?r:c(r,p.encoder,y,"key"))+"="+b(c(g,p.encoder,y,"value"))]:[b(r)+"="+b(String(g))];var v,w=[];if(void 0===g)return w;if(l(u))v=u;else{var _=Object.keys(g);v=d?_.sort(d):_}for(var O=0;O<v.length;++O){var j=v[O];i&&null===g[j]||(l(g)?s(w,e(g[j],"function"==typeof o?o(r,j):r,o,n,i,c,u,d,f,m,b,h,y)):s(w,e(g[j],r+(f?"."+j:"["+j+"]"),o,n,i,c,u,d,f,m,b,h,y)))}return w};e.exports=function(e,t){var r,a=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!n.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var a=o.formatters[r],i=p.filter;return("function"==typeof e.filter||l(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,formatter:a,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?a=(0,c.filter)("",a):l(c.filter)&&(r=c.filter);var u,d=[];if("object"!=typeof a||null===a)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=i[u];r||(r=Object.keys(a)),c.sort&&r.sort(c.sort);for(var b=0;b<r.length;++b){var h=r[b];c.skipNulls&&null===a[h]||s(d,f(a[h],h,m,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var y=d.join(c.delimiter),g=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),y.length>0?g+y:""}},LpsE:function(e,t,r){"use strict";var a=String.prototype.replace,o=/%20/g,n=r("MO82"),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=n.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return a.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},MO82:function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty,o=Array.isArray,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var n=t[a],i=n.obj[n.prop],l=Object.keys(i),c=0;c<l.length;++c){var s=l[c],u=i[s];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:s}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var a=[],n=0;n<r.length;++n)void 0!==r[n]&&a.push(r[n]);t.obj[t.prop]=a}}}(t),e},decode:function(e,t,r){var a=e.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(e){return a}},encode:function(e,t,r){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<a.length;++i){var l=a.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=a.charAt(i):l<128?o+=n[l]:l<2048?o+=n[192|l>>6]+n[128|63&l]:l<55296||l>=57344?o+=n[224|l>>12]+n[128|l>>6&63]+n[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&a.charCodeAt(i)),o+=n[240|l>>18]+n[128|l>>12&63]+n[128|l>>6&63]+n[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var l=t;return o(t)&&!o(r)&&(l=i(t,n)),o(t)&&o(r)?(r.forEach(function(r,o){if(a.call(t,o)){var i=t[o];i&&"object"==typeof i&&r&&"object"==typeof r?t[o]=e(i,r,n):t.push(r)}else t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return a.call(t,o)?t[o]=e(t[o],i,n):t[o]=i,t},l)}}},MhVL:function(e,t,r){},Oc90:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r("gsbZ");function a(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[""])[1].replace(/\+/g,"%20"))||null}},gsbZ:function(e,t,r){"use strict";var a=r("F5OA"),o=r("/4S1"),n=r("LpsE");e.exports={formats:n,parse:o,stringify:a}},"n8/r":function(e,t,r){"use strict";r.r(t);var a=r("t3Un");r("Oc90");var o={data:function(){return{tableData:[],dictDetailData:[],keyword:"",dialog:!1,loading:!1,tableDialog:!1,dialogVisible:!1,editLoading:!1,dataForm:{tableSchema:"",tableName:"",author:"",moduleName:"",packageName:""},dataRule:{author:[{required:!0,message:"作者不能为空",trigger:"blur"}],moduleName:[{required:!0,message:"模块名称不能为空",trigger:"blur"}],packageName:[{required:!0,message:"项目包名称不能为空",trigger:"blur"}]}}},created:function(){this.dataList()},methods:{dataList:function(){var e=this;this.loading=!0;var t=new URLSearchParams;t.append("tableSchema","pre"),function(e){return Object(a.a)({url:"/codegen/getTableList",method:"get",params:e})}(t).then(function(t){console.log(t.data.data),e.loading=!1,e.tableData=t.data.data})},handleFind:function(){this.dataList()},handleView:function(e){var t=this;if(e){this.tableDialog=!0;var r=new URLSearchParams;r.append("tableName",e.tableName),r.append("tableSchema",e.tableSchema),function(e){return Object(a.a)({url:"/codegen/getTableColumnList",method:"get",params:e})}(r).then(function(e){t.dictDetailData=e.data.data})}},handleCodeGen:function(e){e&&(this.dialogVisible=!0,this.dataForm=e)},codegen:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0,function(e){return Object(a.a)({url:"/codegen/codegen",method:"post",data:e})}(e.dataForm).then(function(t){200===t.data.code?e.$message({message:"操作成功",type:"success"}):e.$message({message:t.data.msg,type:"error"}),e.editLoading=!1,e.$refs.dataForm.resetFields()})})})}}},n=(r("q2YS"),r("ZrdR")),i=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[r("el-table-column",{attrs:{type:"selection"}}),e._v(" "),r("el-table-column",{attrs:{label:"序号",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"所属库",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.tableSchema))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"表名称",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.tableName))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"表注释",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.comments))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",width:"180",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作","header-align":"center",fixed:"right","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-view"},on:{click:function(r){e.handleView(t.row)}}},[e._v("表详情")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-check"},on:{click:function(r){e.handleCodeGen(t.row)}}},[e._v("代码生成")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{"append-to-body":!0,visible:e.tableDialog,title:"表详情",width:"800px","max-height":"800px"},on:{"update:visible":function(t){e.tableDialog=t}}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.dictDetailData,border:""}},[r("el-table-column",{attrs:{prop:"columnName",label:"字段名"}}),e._v(" "),r("el-table-column",{attrs:{prop:"dataType",label:"数据类型"}}),e._v(" "),r("el-table-column",{attrs:{prop:"columnComment",label:"备注"}}),e._v(" "),r("el-table-column",{attrs:{prop:"characterSetName",label:"字符集"}}),e._v(" "),r("el-table-column",{attrs:{prop:"columnType",label:"列类型"}})],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"代码生成",width:"40%",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"dataForm",staticStyle:{"text-align":"left"},attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm()}}},[r("el-form-item",{attrs:{label:"数据库"}},[r("el-input",{attrs:{disabled:!0,placeholder:"请输入作者"},model:{value:e.dataForm.tableSchema,callback:function(t){e.$set(e.dataForm,"tableSchema",t)},expression:"dataForm.tableSchema"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"表名称"}},[r("el-input",{attrs:{disabled:!0,placeholder:"请输入表名称"},model:{value:e.dataForm.tableName,callback:function(t){e.$set(e.dataForm,"tableName",t)},expression:"dataForm.tableName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"作者",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入作者,例如小东啊"},model:{value:e.dataForm.author,callback:function(t){e.$set(e.dataForm,"author",t)},expression:"dataForm.author"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[r("el-row",[r("el-col",{attrs:{span:22}},[r("el-input",{attrs:{placeholder:"请输入模块名称,例如pre-admin"},model:{value:e.dataForm.moduleName,callback:function(t){e.$set(e.dataForm,"moduleName",t)},expression:"dataForm.moduleName"}})],1),e._v(" "),r("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[r("el-tooltip",{staticStyle:{padding:"10px"},attrs:{placement:"top",effect:"light"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[e._v("模块名称说明：")]),e._v(" "),r("p",[e._v("1.指项目的多模块项目")]),e._v(" "),r("p",[e._v("2.比如本项目 pre下有两个模块pre-admin,pre-common")]),e._v(" "),r("p",[e._v("示例：pre-admin")])]),e._v(" "),r("i",{staticClass:"el-icon-warning"})])],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"项目包名称",prop:"packageName"}},[r("el-row",[r("el-col",{attrs:{span:22}},[r("el-input",{attrs:{placeholder:"请输入项目包名称 例如:com.xd.pre.modules.codegen"},model:{value:e.dataForm.packageName,callback:function(t){e.$set(e.dataForm,"packageName",t)},expression:"dataForm.packageName"}})],1),e._v(" "),r("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[r("el-tooltip",{staticStyle:{padding:"10px"},attrs:{placement:"top",effect:"light"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[e._v("项目包名称说明：")]),e._v(" "),r("p",[e._v("1.指模块下的包结构")]),e._v(" "),r("p",[e._v("2.比如com.xd.pre.modules.codegen")])]),e._v(" "),r("i",{staticClass:"el-icon-warning"})])],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.codegen}},[e._v("生成")])],1)],1)],1)},[],!1,null,"24971ddc",null);i.options.__file="codegen.vue";t.default=i.exports},q2YS:function(e,t,r){"use strict";var a=r("MhVL");r.n(a).a}}]);