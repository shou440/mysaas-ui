import request from '@/utils/request'


// 获取业主园区的房间列表
export function getTalentRooms(roomfilter) {
  return request({
    url: '/room/gettalentrooms',
    method: 'post',
    params: roomfilter
  })
}

// 创建房间
export function createroom(roomparam) {
  
return request({
  url: '/room/createroom',
  method: 'post',
  params: roomparam
})
}

// 创建房间
export function updateroominfo(room) {
  
return request({
  url: '/room/updateroominfo',
  method: 'post',
  params: room
})
}