<template>
  <div v-if="wxparam.ret === 0">
    <div v-if="wxparam.iscallback === false">
        <p>地址:{{wxparam.url}}</p>
        <p>fun:{{wxparam.fun}}</p>
        <p>param:{{wxparam.param}}</p>
    </div>
    <div v-else>
        <p>地址:{{wxparam.url}}</p>
        <p>code:{{wxparam.code}}</p>
        <p>state:{{wxparam.state}}</p>
    </div>
  </div>
   <div v-else-if="wxparam.ret === 1">
    <p>验证成功</p>
  </div>
  <div v-else-if="wxparam.ret === 2">
    <p>请求参数错误</p>
  </div>
</template>      
 
<script>  

import {GetWeixinAPPID,GetRequest,GetServerURL,uuidGenerator} from '@/api/common'

export default {
  name:'addroom',
   data() {
     return{
      wxparam:
      {
         ret:0,      //执行结果:-0执行中,-1执行成功，-2执行失败
         url:'',
         fun:'',
         param:'',
         code:'',
         state:'',
         iscallback:false,
         isfailed:false,
      },
     }
  },
   methods: {


     //解析参数
     parse()
     {
       

          var _this = this
       
 
        //获取参数，用于判断是否为客户请求或者微信回调
          var fun = GetRequest("fun");
          var code = GetRequest("code");

          if(fun != null)
          {
              var param = GetRequest("param");
              var state = fun+param

              //根据不同的功能码请求微信服务器和填充跳转页面
              if (fun == "fu")        //获取用户参数：微信用户绑定、登录等
              {
                  var redirect_uri = encodeURIComponent( GetServerURL() + "/myweixin");
                  var url = "https://open.weixin.qq.com/connect/oauth2/authorize?";
                  var sParam = "appid=" + GetWeixinAPPID() + "&";
                  sParam = sParam + "redirect_uri=" + redirect_uri + "&";
                  sParam = sParam + "response_type=code&";
                  sParam = sParam + "scope=snsapi_userinfo&";
                  sParam = sParam + "state=" + state + "#wechat_redirect";
                  url += sParam;

                  this.wxparam.url = location.href
                  this.wxparam.fun = fun
                  this.wxparam.param = param
                  location.href = url
              }
              
          }
          else if (code != null)
          {
              
              var state = GetRequest("state");
              this.wxparam.iscallback = true
              this.wxparam.code = code
              this.wxparam.state = state

             
             
                //提取功能码
              if (_this.wxparam.state != null && _this.wxparam.state.length >= 2)
              {
                  var funcode = _this.wxparam.state.slice(0,2);
                  var param = ""
                  if (funcode == "fu")
                  {
                      param = _this.wxparam.state.slice(2,_this.wxparam.state.length);
                      var userparam = { code:code,param:param};

                       //调用后台添加房间
                      _this.$store.dispatch('FetchWXUserInfoByCode',userparam).then((data) => {

                        _this.wxparam.ret = 1

                          //提取附加数据

                        }).catch((ex)=>{
                    
                            _this.wxparam.ret = 2
                        })
                  }
              }

              

             
          }

     }
   },
  mounted() {
    var _this = this
    this.$nextTick(() => {

      _this.parse()
    })
  }
}
</script>

<style lang="scss" scoped>
.el-row1 {
  margin-top:10px;
  padding: 0px; 
}
.el-row2 {
  margin-right: 10px;
  margin-top:0px;
  padding: 0px; 
  
}
.el-row-title {
  margin-right: 10px;
  margin-top:10px;
  padding: 0px; 
  font-size: 20px;
  color: #333333;
}
 
  .el-calendar-day{
      height: 45px;  
    }
</style>
