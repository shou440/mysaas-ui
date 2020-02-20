<template>
  <div class="app-container">
    <el-dialog
         
            title="注册房间"
            :visible.sync="dialogVisible"
            width="30%"
          >
          <addroom ref="roomlg" v-on:onclickOK="onNewDlgOK" v-on:onNewRoomDlgclickCancel="onNewRoomDlgclickCancel" />
         
     </el-dialog>
     <el-dialog
         
            title="绑定电表"
            :visible.sync="dlgMeterVisible"
            width="30%"
          >
          <addmeter ref="meterdlg" v-on:onBindMeterOK="onBindMeterOK" v-on:onBindMeterCancel="onBindMeterCancel" />
         
     </el-dialog>
      <el-dialog
         
            title="绑定水表"
            :visible.sync="dlgWMeterVisible"
            width="30%"
          >
          <addwmeter ref="wmeterdlg" v-on:onBindWMeterOK="onBindWMeterOK" v-on:onBindWMeterCancel="onBindWMeterCancel" />
         
     </el-dialog>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12">
         <el-card class="user-center">
          <el-row type="flex" justify="space-start">   
            <el-col :span="4" class="room-filter">
                <el-input v-model="roomfilter.roomname" placeholder="房间号" size="mini"></el-input>
            </el-col>
              <el-col :span="8" class="room-filter">
                <el-input v-model="roomfilter.roomdec" placeholder="租户名称" size="mini"></el-input>
            </el-col>  
            <el-col :span="3" class="room-filter">
              <el-button type="primary" icon="el-icon-search" size="mini" @click="loadRoom" >查询</el-button>
            </el-col>
           <el-col :span="3" class="room-filter">
              <el-button type="primary" icon="el-icon-plus" size="mini" @click="onNewRoom" >添加</el-button>
            </el-col>
            <el-col  :span="6" class="room-exportcol">
                <el-button icon="el-icon-search" size="mini" @click="loadRoom" >导出Excel...</el-button>
            </el-col>
             

          </el-row>
          <el-row>
               <el-col :span="24">
                  <div class="room-row-gap"/>
               </el-col>
          </el-row>
          <el-row type="flex" justify="space-start">   
             <el-col :span="24" class="room-filter">
              <el-table
                :data="roomlist"
                element-loading-text="加载房间数据中..."
                border
                fit
                max-height="550"
                highlight-current-row
                :row-style="{height:'16px'}"
                :cell-style="{padding:'0px'}"
                @row-click="handleRoomChange"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
              >
              <el-table-column align="center" label="序号" width="60">
                  <template slot-scope="scope">
                    {{ scope.$index+1 }}
                  </template>
                </el-table-column>
                  
                <el-table-column align="center" label="房号"  width="95">
                  <template slot-scope="scope">
                      <span v-if="scope.row.room_status === 1 " style="color:#555555">
                      {{scope.row.room_name}}</span>
                      <span v-else style="color:#cccccc">
                      {{scope.row.room_name}}</span>
                </template>
                </el-table-column>
                <el-table-column label="租户"  width="125">
                  <template slot-scope="scope">
                      <span v-if="scope.row.room_status === 1 " style="color:#555555">
                      {{scope.row.tenant_name}}</span>
                      <span v-else style="color:#cccccc">
                      {{scope.row.tenant_name}}</span>
                </template>
                </el-table-column>
                <el-table-column label="状态" width="90" align="center">
                  <template slot-scope="scope">
                      <span v-if="scope.row.room_status === 1 " style="color:#555555">
                      出租</span>
                      <span v-else style="color:#cccccc">
                      空置</span>
                </template>
                </el-table-column>
               <el-table-column label="操作" prop="managefee" width="220" align="center">
                <template slot-scope="scope">
                   <el-link type="success"  icon="el-icon-s-open" v-if="scope.row.room_status===1" @click="unlessor(scope.row)" >退租</el-link>
                   <el-link type="primary" icon="el-icon-table-lamp" v-else @click="lessor(scope.row)" >出租</el-link>
                   <el-link type="danger"  icon="el-icon-delete" @click="handleDelete(scope.$index,scope.row)" >删除</el-link>  
                </template>
            </el-table-column>
              </el-table>
             </el-col>
          </el-row>
         </el-card>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-card class="user-center">
          <div v-if="hasSelRoom === false" style="color:red">
              请点击左边表格选择房间
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick" v-else>
            <el-tab-pane label="房间信息" name="first">
              <div class="user" style="width: 600px">
                <el-form ref="form" 
                  :model="currentroominfo" 
                  label-width="80px"
                  :rules="feeRules"
                  >

                  <el-form-item label="房间编号" >
                    <el-input v-model="currentroominfo.room_name" />
                  </el-form-item>
                  <el-form-item label="月租金"  prop="tenant_fee">
                    <el-input v-model="currentroominfo.tenant_fee"/>
                  </el-form-item>
                  <el-form-item label="管理费" prop="tenant_manage_fee">
                    <el-input v-model="currentroominfo.tenant_manage_fee" />
                  </el-form-item>
                  <el-form-item label="其他费用" prop="tenant_other_fee">
                    <el-input v-model="currentroominfo.tenant_other_fee"  />
                  </el-form-item>

                  <el-form-item>
                    
                    <el-button type="primary" v-if="currentroominfo.has_edit===true" @click="modifyRoom">提交</el-button>
                    <el-button type="primary" v-if="currentroominfo.has_edit===false"  :disabled="true" @click="modifyRoom">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>

            </el-tab-pane>

            <el-tab-pane label="电表" name="second">
               <el-row type="flex" justify="space-end">   
                  <el-col :span="24" class="room-filter" >
                     
                      <div class="col-align-right">
                          <el-button type="primary" icon="el-icon-plus" size="mini"  @click="bindMeter">绑定新电表</el-button>
                      </div>
                       <div class="room-row-gap"/>
                  </el-col>
               </el-row>
              <el-row type="flex" justify="space-start">   
                <el-col :span="24" class="room-filter">
                  <el-table
                  :data="meterlist"
                  element-loading-text="加载房间电表..."
                  border   
                  fit
                  max-height="550"
                  highlight-current-row
                  :row-style="{height:'16px'}"
                  :cell-style="{padding:'0px'}"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  >
                 <el-table-column align="center" label="电表编号" width="90">
                    <template slot-scope="scope">
                        {{meterid2str(scope.row.meter_id)}}
                    </template>
                  </el-table-column>
                    
                  <el-table-column prop="meter_type"  align="center" label="电表类型"  width="120">
                   
                  </el-table-column>
                
                  <el-table-column prop="meter_signal" label="信号" width="70" align="center">
                    <template slot-scope="scope">
                      
                           {{scope.row.m_cur_ep}}
                        
                    </template>
                  </el-table-column>
                  <el-table-column prop="m_cur_ep"  align="center" label="读数"  width="120">
                      <template slot-scope="scope">
                           <div style="color:#8888FF">
                              {{scope.row.m_cur_ep}}度
                           </div>
                      </template>
                  </el-table-column>
                  <el-table-column  align="center" label="读取时间"  width="120">
                    <template slot-scope="scope">
                        {{sec2Time(scope.row.meter_fresh_tick)}}
                    </template>
                  </el-table-column>
                <el-table-column label="操作" prop="managefee" width="90" align="center">
                  <template slot-scope="scope">
                    <el-link type="danger"  icon="el-icon-scissors" @click="unBindMeter(scope.row)" >解绑</el-link>  
                  </template>
                </el-table-column>
                </el-table>
                </el-col>
              </el-row>
              
            </el-tab-pane>
            <el-tab-pane label="水表" name="third">

              <el-row type="flex" justify="space-end">   
                  <el-col :span="24" class="room-filter" >
                     
                      <div class="col-align-right">
                          <el-button type="primary" icon="el-icon-plus" size="mini"  @click="bindWMeter">绑定新水表</el-button>
                      </div>
                       <div class="room-row-gap"/>
                  </el-col>
               </el-row>
              <el-row type="flex" justify="space-start">   
                <el-col :span="24" class="room-filter">
                  <el-table
                  :data="wmeterlist"
                  element-loading-text="加载房间水表..."
                  border   
                  fit
                  max-height="550"
                  highlight-current-row
                  :row-style="{height:'16px'}"
                  :cell-style="{padding:'0px'}"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                  >
                 <el-table-column align="center" label="水表编号" width="90">
                    <template slot-scope="scope">
                        {{meterid2str(scope.row.meter_id)}}
                    </template>
                  </el-table-column>
                    
                  <el-table-column prop="meter_type"  align="center" label="水表类型"  width="120">
                   
                  </el-table-column>
                
                  <el-table-column prop="meter_signal" label="信号" width="70" align="center">
                    <template slot-scope="scope">
                      
                           {{scope.row.m_cur_water}}
                        
                    </template>
                  </el-table-column>
                  <el-table-column prop="m_cur_water"  align="center" label="读数"  width="120">
                      <template slot-scope="scope">
                           <div style="color:#8888FF">
                              {{scope.row.m_cur_water}}吨
                           </div>
                      </template>
                  </el-table-column>
                  <el-table-column  align="center" label="读取时间"  width="120">
                    <template slot-scope="scope">
                        {{sec2Time(scope.row.meter_fresh_tick)}}
                    </template>
                  </el-table-column>
                <el-table-column label="操作" prop="managefee" width="90" align="center">
                  <template slot-scope="scope">
                    <el-link type="danger"  icon="el-icon-scissors" @click="unBindWMeter(scope.row)" >解绑</el-link>  
                  </template>
                </el-table-column>
                </el-table>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="租户" name="forth">

              <div style="width: 500px">
                <el-form ref="mailForm" :model="talentInfo" label-width="100px" class="demo-ruleForm">
                  <el-form-item
                    prop="talent_name"
                    label="租户名称"
                  >
                    <el-input v-model="talentInfo.talent_name" style="width: 250px;" />
                  </el-form-item>

                  <el-form-item
                    label="手机号"
                    prop="talent_tel"
                  >
                    <el-input v-model="talentInfo.talent_tel" type="tel" autocomplete="off" />
                  </el-form-item>
                  <el-form-item
                    label="联系人"
                  >
                    <el-input v-model="talentInfo.talent_contactor"  autocomplete="off" />
                  </el-form-item >
                  <el-form-item label="租户微信">
                       <el-row>
                        <el-col :span="8">
                          <el-avatar shape="circle" :src='talentInfo.talent_img' :size="40"  ></el-avatar>
                        </el-col>
                        <el-col justify="end" align="middle" :span="16" type="flex" >
                          <el-popover
                            placement="left"
                            width="160"
                            v-model="QSvisible"
                            @show="showQCtrl"
                            @hide="hideQCtrl">
                            <div  ref="qrCodeDiv">
                            </div>
                            <div style="color:#FF0000">
                                请租户扫码绑定
                            </div>
                            <el-button slot="reference">绑定微信</el-button>
                         </el-popover>
                        </el-col>
                      </el-row>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >提交</el-button>
                    <el-button @click="resetForm('mailForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import QRCode from 'qrcodejs2'
import {SecToDateTime,PrefixInteger,GetServerURL,uuidGenerator} from '@/api/common'
import { getwxuserinfobyuuid } from '@/api/user'
import { Message} from 'element-ui' 
import  addroom  from './addroom'
import  addmeter  from './addmeter'
import  addwmeter  from './addwmeter'
import PanThumb from '@/components/PanThumb'  
import { getUserInfo, updatePass, resetEmail } from '@/api/user'
import { isvalidFP } from '@/utils/validate'
import { Loading } from 'element-ui'
let loading;

export default {
  name: 'Index',
  components: { PanThumb,addroom,addmeter,addwmeter },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.passForm.checkPass !== '') {
          this.$refs.passForm.validateField('checkPass')  
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passForm.newPass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
     const validateRoomfee = (rule, value, callback) => {

       
       this.currentroominfo.has_edit = true
      if (!isvalidFP(value)) {
        callback(new Error('请输入正确的金额'))
      }  else {
        callback()
      }
    }
    
    return {
         dialogVisible:false,
         dlgMeterVisible:false,
         dlgWMeterVisible:false,
         QSvisible:false,                //绑定微信扫码
         isShowQCtrl:false,
         Qcodectrl:null,
         uuid:"",
         roomfilter:{                            //费单过滤器
          areaid:10,
          roomname:'',
          roomdec:"",
        }  ,
      roomlist:new Array(),
      meterlist:new Array,
      wmeterlist:new Array,
      hasSelRoom:false,
      isNeedFetchUserinfo:false,
      currentroominfo:      //当前房间基本信息
      { 
          room_id:0,
          area_id:0,
          room_name:'',
          room_status:0,
          tenant_id:0,
          tenant_name:'',
          tenant_fee:0,
          tenant_manage_fee:0,
          tenant_other_fee:0,
          has_edit:false
      },
      talentInfo:
      {
          talent_id:0,
          room_id:0,
          user_id:'',
          talent_name:'',
          talent_tel:'',
          talent_contactor:'',
          talent_openid:'',
          talent_img:'',
          talent_nickname:'',
      },
      feeRules: {
        tenant_fee: [{  trigger: 'blur',validator: validateRoomfee }],
        tenant_manage_fee: [{  trigger: 'blur',validator: validateRoomfee }],
        tenant_other_fee: [{  trigger: 'blur',validator: validateRoomfee }],

      },
      user: {
        avatar: '',
        username: '',
        phone: 0,
        email: '',
        deptName: '',
        jobName: '',
        createTime: ''
      },
      activeName: 'first',
      passForm: {
        oldPass: '',
        newPass: '',
        checkPass: ''
      },
      
      rules: {
        oldPass: [{ required: true, message: '原密码不能为空', trigger: 'blur' }],
        newPass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      },
      mailForm: {
        email: '',
        code: '',
        pass: ''
      },
      buttonName: '发送验证码',
      isDisabled: false,
      codeLoading: false,
      time: 60,
      logo: [
        { img: 'gitee.png', name: 'gitee', bind: false, radius: true },
        { img: 'github.png', name: 'github', bind: false, radius: true },
        { img: 'tencent_cloud.png', name: 'tencent_cloud', bind: false, radius: true },
        { img: 'qq.png', name: 'qq', bind: false, radius: false },
        { img: 'dingtalk.png', name: 'dingtalk', bind: false, radius: true },
        { img: 'microsoft.png', name: 'microsoft', bind: false, radius: false }
      ]
    }
  },
  computed: {
    avatar() {
      return require(`@/assets/avatar/c7c4ee7be3eb4e73a19887dc713505145.jpg`)
    }
  },
  created() {
    
    var tt = SecToDateTime(220)
    this.findUserInfo()
  },
  mounted()
  {
    this.loadRoom()

  },
 

     
      
   
  methods: {
     showQCtrl()
       {
           
           var _this = this
           this.isShowQCtrl = true
           this.uuid = uuidGenerator()
               
            //判断是否需要创建二维码
            if(_this.$refs.qrCodeDiv != null)
            {
                _this.$refs.qrCodeDiv.innerHTML = "";
    
                if (null != _this.Qcodectrl)
                {
                    _this.Qcodectrl.clear();
                }
                _this.Qcodectrl =  new QRCode(_this.$refs.qrCodeDiv, {
                        text: GetServerURL()+"/myweixin?fun=fu&param="+_this.uuid,  
                        width: 200,
                        height: 200,
                        colorDark: "#333333", //二维码颜色
                        colorLight: "#ffffff", //二维码背景色
                        correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
                });

                _this.isNeedFetchUserinfo = true
                _this.queryRegiste()

            }
       },
       //定时访问服务器，请求绑定的用户信息
      queryRegiste()
      {
          
         var _this = this 
         var paramfilter = {param:_this.uuid,code:''}

          
         if (!_this.isNeedFetchUserinfo)
         {
            return
         }
          
         new Promise(() => {
            getwxuserinfobyuuid(paramfilter).then(response => {

                debugger
                if (response.data != null)
                {
                    var userinfo = JSON.parse(response.data.data);
                    _this.talentInfo.talent_img = userinfo.headimgurl
                    _this.talentInfo.talent_openid = userinfo.openid
                    _this.talentInfo.talent_nickname = userinfo.nickname
                    _this.isNeedFetchUserinfo = false

                    //完后后隐藏二维码
                    _this.QSvisible = false
                    return
                }
                 setTimeout(() => {
                        _this.queryRegiste();
                        }, 1000);

             /*   if (!response.IsError) {
                 
                  if (response.Data != null)
                    {
                        _this.cust = response.Data
                        _this.imgurl = response.Data.headimgurl
                        _this.hasregistewx = true
                        Message({ 
                            message: '微信绑定成功!',
                            type: 'success',
                            duration:  500
                        })
                    }
                    else
                    {
                          if ( !_this.hasregistewx && _this.isWorking)
                            {
                                setTimeout(() => {
                                _this.queryRegiste();
                                }, 1000);
                            }
                    }
                
                }
                else
                {
                    if ( !_this.hasregistewx && _this.isWorking)
                    {
                        setTimeout(() => {
                        _this.queryRegiste();
                        }, 1000);
                    }
                }*/
            }).catch(error => {

               setTimeout(() => {
                    _this.queryRegiste();
                    }, 1000);

             /*    if ( !_this.hasregistewx && _this.isWorking)
                {
                    setTimeout(() => {
                    _this.queryRegiste();
                    }, 3000);
                }
               if ( !_this.hasregistewx && _this.isWorking)
                {
                    setTimeout(() => {
                    _this.queryRegiste();
                    }, 3000);    */
            })
          })
       },
       hideQCtrl()
       {
           
           this.isShowQCtrl = false
           this.QSvisible = false
           this.isNeedFetchUserinfo = false
       },
     sec2Time(tick)
     {
       return  SecToDateTime(tick);
     },
     meterid2str(meterid)
     {
        return PrefixInteger(meterid,6)
     },
     startLoading(title) {
       loading = Loading.service({
      lock: true,
      text: title,
      background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    loadRoom()
    { 
        
        var _this = this
        
        if (null != _this.$store.state.area.currentarea)
         {
           
           _this.roomfilter.areaid = _this.$store.state.area.currentarea.area_id
           this.startLoading('加载园区数据……')

            _this.$store.dispatch('GetTalentRoomList',_this.roomfilter).then(() => {

              
                _this.roomlist = _this.$store.state.room.rooms
                if (null != _this.roomlist)      //如果有园区则选择默认园区
                {
                  //  _this.selArea = _this.areas[0].area_id
                }

                loading.close()

              }).catch((ex)=>{
          
                loading.close()
              })

         }
          
    },
    //装置电表
    loadMeter()     
    { 
        
        var _this = this
        if (null != _this.$store.state.area.currentarea
          && null != _this.$store.state.room.currentroom)
         {
            
            this.startLoading('加载电表数据....')
            _this.$store.dispatch('GetRoomMeters',_this.$store.state.room.currentroom.room_id).then(() => {

              
                _this.meterlist = _this.$store.state.meter.meters
                loading.close()

              }).catch((ex)=>{
          
                loading.close()
              })

         }
          
    },
    bindMeter()    //绑定电表
    {
      this.dlgMeterVisible = true
    },
    unBindMeter(meter)   //解除电表绑定
    {
        var _this = this

        
        if (null == meter)
        {
            return
        }

         _this.$confirm('确认解绑电表？') 
          .then(_ => {
            
               this.startLoading('解绑电表....')
               _this.$store.dispatch('UnbindMeter',meter.meter_id).then(() => {

              this.$message({
                type: 'success',
                message: '解绑成功'
              })

              _this.loadMeter()

                loading.close()

              }).catch((ex)=>{
          
                loading.close()
              })

          })
          .catch(_ => {});
    },
     //装载水表
    loadWMeter()     
    { 
        
        var _this = this
        if (null != _this.$store.state.area.currentarea
          && null != _this.$store.state.room.currentroom)
         {
            
            this.startLoading('加载水表数据....')
            _this.$store.dispatch('GetRoomWMeters',_this.$store.state.room.currentroom.room_id).then(() => {

              
                _this.wmeterlist = _this.$store.state.wmeter.wmeters
                loading.close()

              }).catch((ex)=>{
          
                loading.close()
              })

         }
          
    },
     bindWMeter()           //绑定水表
    {
       this.dlgWMeterVisible = true
    },
     unBindWMeter(wmeter)   //解绑水表
    {
         var _this = this

        
        if (null == wmeter)
        {
            return
        }

         _this.$confirm('确认解绑水表？') 
          .then(_ => {
            
               this.startLoading('解绑水表....')
               _this.$store.dispatch('UnbindWMeter',wmeter.meter_id).then(() => {

              this.$message({
                type: 'success',
                message: '解绑水表成功'
              })

              _this.loadWMeter()

                loading.close()

              }).catch((ex)=>{
          
                loading.close()
              })

          })
          .catch(_ => {});
    },
    onBindWMeterOK()        //绑定成功后，刷新水表列表
    {
        this.dlgWMeterVisible = false
        this.loadWMeter()
    },
   
    onBindWMeterCancel()   // 
    {
        this.dlgWMeterVisible = false
    },
    onNewRoom()
    {
        this.dialogVisible = true
    },
    onBindMeterOK()
    {
  
        this.dlgMeterVisible = false
        this.loadMeter()
    },
    onBindMeterCancel()
    {
      this.dlgMeterVisible = false
    },
    onNewDlgOK()            //创建房间成功
    {
        this.dialogVisible = false
        this.loadRoom()
    },
    onNewRoomDlgclickCancel()     //用户点击取消
    {
        this.dialogVisible = false
    },
     lessor(row)
    {

        if (null != row)
         {
          
         //   this.$refs.lessordlg.innerHTML="请选择出租日期"
         //   this.$store.commit('room/SET_CURRENTROOM',row)
           
         //   this.lessordlgvisible = true; 
         }
        
    },
    unlessor(row)
    {
        
      /*  this.$confirm('是否退租?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
              }).then(() => {
                  
              this.$store.dispatch('room/unlessorroom',row).then(() => {
                 row.IsLessor = true;
                  Message({ 
                          message: '房间退租成功!', 
                          type: 'error',
                          duration:  1000
                      })
              }).catch((err)=>{
              })
              this.$message({ 
                  type: 'success',
                  message: '退租成功!'
              });
              }).catch(() => {
                 
              this.$message({ 
                  type: 'info',
                  message: '取消'
              });          
              });        */
    },
    //删除
      handleDelete(index, row) {
        
           this.$confirm('确认删除？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    resolveLogo(logo) {
      return require(`@/assets/logo/${logo}`)
    },
    // 加载用户个人信息
    findUserInfo: function() {
      getUserInfo().then((res) => {
        this.user = res.data.data
      })
    },

    // 修改密码
    updatePass: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = new URLSearchParams()
          params.append('oldPass', this.passForm.oldPass)
          params.append('newPass', this.passForm.newPass)
          updatePass(params).then((res) => {
            if (res.data.code === 200) {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.activeName = 'second'
              this.$refs['passForm'].resetFields()
            } else {
              this.$message({
                type: 'error',
                message: res.data.msg
              })
            }
          })
        } else {
          return false
        }
      })
    },
   

    // 发送邮箱验证码
    sendCode() {
      if (this.mailForm.email && this.mailForm.email !== '') {
        this.codeLoading = true
        this.buttonName = '验证码发送中'
        const params = new URLSearchParams()
        params.append('to', this.mailForm.email)
        const _this = this
        resetEmail(params).then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: '发送成功，验证码有效期5分钟',
              type: 'success'
            })
            this.codeLoading = false
            this.isDisabled = true
            this.buttonName = this.time-- + '秒后重新发送'
            this.timer = window.setInterval(function() {
              _this.buttonName = _this.time + '秒后重新发送'
              --_this.time
              if (_this.time < 0) {
                _this.buttonName = '重新发送'
                _this.time = 60
                _this.isDisabled = false
                window.clearInterval(_this.timer)
              }
            }, 1000)
          }
        }).catch(err => {
          this.resetForm()
          this.codeLoading = false
          console.log(err.data.message)
        })
      }
    },
    // handleSuccess(response, file, fileList) {
    //   this.$notify({
    //     title: '头像修改成功',
    //     type: 'success',
    //     duration: 2500
    //   })
    //   store.dispatch('GetInfo').then(() => {
    //   })
    // },
    // 监听上传失败
    // handleError(e, file, fileList) {
    //   const msg = JSON.parse(e.message)
    //   this.$notify({
    //     title: msg.message,
    //     type: 'error',
    //     duration: 2500
    //   })
    // },
    refresh() {
      this.ico = 'el-icon-loading'
      this.$refs.log.init()
      setTimeout(() => {
        this.ico = 'el-icon-refresh'
      }, 300)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields()
      }
    },
    handleClick(tab, event) {
      
      if (tab.name == "second")
      {
          this.loadMeter()
      }
      else if (tab.name == "third")
      {
          this.loadWMeter()
      }
      else if (tab.name == "forth")
      {
         // this.loadWMeter()
      }
      
    },
    modifyRoom()
    {
        var _this = this

        

        //调用后台添加房间
        _this.$store.dispatch('UpdateRoom',_this.currentroominfo).then(() => {

              Message({ 
                    message: '修改房间成功!', 
                    type: 'success',
                    duration:  1000
                })

                this.$emit('onclickOK')

        }).catch((ex)=>{
    
              Message({ 
                    message: '修改房间失败!', 
                    type: 'error',
                    duration:  1000
                })
        })
    },
    handleRoomChange(row, event, column)
    { 
        this.$store.commit('SET_ROOM', row)
        this.currentroominfo.has_edit = false
        this.hasSelRoom = true
        this.currentroominfo.area_id = row.area_id
        this.currentroominfo.room_id = row.room_id
        this.currentroominfo.room_name = row.room_name
        this.currentroominfo.tenant_fee = row.tenant_fee
        this.currentroominfo.tenant_manage_fee = row.tenant_manage_fee
        this.currentroominfo.tenant_other_fee = row.tenant_other_fee
        this.activeName = 'first'
    },
    // handleAvatarSuccess(res, file) {
    //   // this.imageUrl = URL.createObjectURL(file.raw)
    //   const data = new FormData()
    //   data.append('token', '')
    //   data.append('file', file[0])
    //   axiosInstance({
    //     method: 'POST',
    //     url: 'http://up.qiniu.com',
    //     data: data
    //   })
    //     .then(function(res) {
    //       // console.log('res',res)
    //       const { base_url, path } = res.data
    //       // 页面所用字段
    //       self.previewAvatar = `${base_url}${path}?imageView2/1/w/154/h/154`
    //       // 传给后台不完整
    //       self.formData.avatar = `${path}`
    //     })
    //     .catch(function(err) {
    //       console.log('err', err)
    //     })
    // },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
  .room-filter{
  margin-left: 5px;
  }
  .room-exportcol{
  text-align: right;
  }
 
  .col-align-right
  {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items:center;
    width:100%;

  }

  .room-row-gap
    {
      display: flex;
      height: 15px;
      width:100%;

    }

  .user-center{
    height: 100%;
  }
  .box-center {
    margin: 0 auto;
    display: table;
  }

  .text-muted {
    color: #777;
  }

  .user-profile {
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
      font-size: 14px;
    }

    .box-social {
      padding-top: 30px;

      .el-table {
        border-top: 1px solid #dfe6ec;
      }
    }

    .user-follow {
      padding-top: 20px;
    }
  }

  .user-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }
    .logo-wrapper {
      display: inline-block;
      margin: 10px 0;
      img {
        width: 1.4rem;
        display: inline-block;
        margin: 0 .6rem;
        cursor: pointer;
        &.unbind {
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          -o-filter: grayscale(100%);
          filter: grayscale(100%);
        }
        &.radius {
          border-radius: 50%;
        }
      }
    }
    .user-bio-section {
      font-size: 14px;
      padding: 15px 0;

      .user-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px; 
        font-weight: bold;
      }
    }
  }
</style>
