import Cookies from 'js-cookie'

const TokenKey = 'Front-Token'

const mobileKey = 'Front-Mobile'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function setMobile (mobile) {
  return Cookies.set(mobileKey, mobile)
}

export function getMobile () {
  return Cookies.get(mobileKey)
}
