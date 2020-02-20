import {  getRoomWMeterList,bindWMeter, unbindWMeter} from '@/api/wmeter'


const wmeter = {
  state: {
    currentwmeter:null,     //当前水表
    wmeters:[],             //当前所有的水表
  },

  mutations: {
      SET_CUR_WMETER: (state, wmeter) => {
        state.currentwmeter = wmeter
      },
      SET_WMETERS: (state, wmeters) => {
        state.wmeters = wmeters
      } 
  },

  actions: {


    // 获取房间所有的水表
    GetRoomWMeters({ commit },roomid) {
        
        debugger
      return new Promise((resolve, reject) => {
        getRoomWMeterList(roomid).then(response => {
         
          const data = response.data
          commit('SET_WMETERS', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 绑定水表
    BindWMeter({ commit },wmeterinfo) {
      return new Promise((resolve, reject) => {
        bindWMeter(wmeterinfo).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
      
      // 解绑水表
       UnbindWMeter({ commit },wmeterid) {
        
        return new Promise((resolve, reject) => {
          unbindWMeter(wmeterid).then(response => {
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
  }
}

export default wmeter
