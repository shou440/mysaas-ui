import request from '@/utils/request'


// 获取房间的水表列表
export function getRoomWMeterList(roomid) {

  
  var watermeterfilter = {room_id:roomid+''}
  return request({
    url: '/wmeter/getroomwmeters',
    method: 'post',
    params: watermeterfilter
  })
}

// 绑定水表到房间
export function bindWMeter(wmeter) {

return request({
  url: '/wmeter/bindwmeter',
  method: 'post',
  params: wmeter
})
}

// 解绑释放水表
export function unbindWMeter(wmeterid) {
  var wmeterfilter = {room_id:0,meter_id:wmeterid}
  return request({
    url: '/wmeter/unbindwmeter',
    method: 'post',
    params: wmeterfilter
  })
  }