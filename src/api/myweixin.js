import request from '@/utils/request'


// 通过code获取微信用户信息
export function getWXUserInfo(codeparam) {
    debugger
  return request({
    url: '/weixin/getwxuserinfo',
    method: 'post',
    params: codeparam
  })
}

// 用户扫码后通过功能码+uuid的方式获取用户信息
export function getwxuserinfobyuuid(uuidparam) {
return request({
  url: '/weixin/getwxuserinfobyuuid',
  method: 'post',
  params: uuidparam
})
}

