import {  getTalentRooms,createroom,updateroominfo } from '@/api/room'


const room = {
  state: {
    currentroom:null,     //当前房间
    rooms:[],           //用户有权限的房间
  },

  mutations: {
      SET_ROOM: (state, currentroom) => {
        state.currentroom = currentroom
      },
      SET_TALENT_ROOMS: (state, rooms) => {
        state.rooms = rooms
      }
  },

  actions: {


    // 通过Token获取业主指定园区的所有房间
    GetTalentRoomList({ commit },roomfilter) {
        
      return new Promise((resolve, reject) => {
        getTalentRooms(roomfilter).then(response => {
          console.log(response)
          const data = response.data
          commit('SET_TALENT_ROOMS', data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 创建新得房间
    CreateNewRoom({ commit },roomparam) {
        
      return new Promise((resolve, reject) => {
        createroom(roomparam).then(response => {
          const data = response.data
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

     // 创建新得房间
     UpdateRoom({ commit },room) {
        
      return new Promise((resolve, reject) => {
        updateroominfo(room).then(response => {
          const data = response.data
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
      
  }
}

export default room
