import request from '../util/request'

export function login (mobile, authCode) {
  return request({
    url: '/user/info/login',
    method: 'post',
    data: {
      mobile,
      authCode
    }
  })
}

/**
 * 完善用户信息
 * @param data
 */
export function perfect (data) {
  return request({
    url: '/user/info/perfect',
    method: 'post',
    data
  })
}

export function getInfo (mobile) {
  return request({
    url: '/user/info/getInfo',
    method: 'get',
    params: {
      mobile: mobile
    }
  })
}

export function logout (data) {
  return request({
    url: '/user/info/logout',
    method: 'post',
    data
  })
}

/**
 * 发送短信验证码
 * @param data
 */
export function sendMsg (mobile) {
  return request({
    url: '/msgCode/send',
    method: 'post',
    data: {
      mobile
    }
  })
}

/**
 * 修改头像
 * @param userId
 * @param imgUrl
 */
export function alertImg (userId, imgUrl) {
  return request({
    url: '/user/info/alertImg',
    method: 'post',
    data: {
      userId,
      imgUrl
    }
  })
}
