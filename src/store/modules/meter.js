import {  getRoomMeterList,bindMeter, unbindMeter} from '@/api/meter'


const meter = {
  state: {
    currentmeter:null,     //当前电表
    meters:[],             //当前所有的电表
  },

  mutations: {
      SET_CUR_METER: (state, meter) => {
        state.currentmeter = meter
      },
      SET_METERS: (state, meters) => {
        state.meters = meters
      } 
  },

  actions: {


    // 获取房间所有的电表
    GetRoomMeters({ commit },roomid) {
        debugger
      return new Promise((resolve, reject) => {
        getRoomMeterList(roomid).then(response => {
         
          const data = response.data
          commit('SET_METERS', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 绑定电表
    BindMeter({ commit },meterinfo) {
      return new Promise((resolve, reject) => {
        bindMeter(meterinfo).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
      
      // 绑定电表
       UnbindMeter({ commit },meterid) {
        
        return new Promise((resolve, reject) => {
          unbindMeter(meterid).then(response => {
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
  }
}

export default meter
