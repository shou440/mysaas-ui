import request from '@/utils/request'


// 获取房间的电表列表
export function getRoomMeterList(roomid) {

    debugger
  var meterfilter = {room_id:roomid+''}
  return request({
    url: '/meter/getroommeters',
    method: 'post',
    params: meterfilter
  })
}

// 绑定电表到房间
export function bindMeter(meter) {
debugger
return request({
  url: '/meter/bindmeter',
  method: 'post',
  params: meter
})
}

// 解绑释放电表
export function unbindMeter(meterid) {
  var meterfilter = {room_id:0,meter_id:meterid}
  return request({
    url: '/meter/unbindmeter',
    method: 'post',
    params: meterfilter
  })
  }