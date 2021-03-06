import Cookies from 'js-cookie'

const TokenKey = 'Front-Token'

const mobileKey = 'Front-Mobile'

const userInfoKey = 'Front-UserInfo'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function removeMobile () {
  return Cookies.remove(mobileKey)
}

export function removeUserInfo () {
  return Cookies.remove(userInfoKey)
}

export function setMobile (mobile) {
  return Cookies.set(mobileKey, mobile)
}

export function getMobile () {
  return Cookies.get(mobileKey)
}

export function setUserInfo (userInfo) {
  return Cookies.set(userInfoKey, userInfo)
}
