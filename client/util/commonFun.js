import Cookies from 'js-cookie'
export default{
  getId: function () {
    return window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  },
  getUserInfo: function (that) {
    const userInfo = Cookies.get('Front-UserInfo')
    that.$store.commit('userInfo', JSON.parse(userInfo))
    return userInfo
  },
  getToken: function () {
    let token = Cookies.get('Front-Token')
    if (token === '' || (typeof token) === 'undefined') {
      token = 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJtb2JpbGUiOiIxODg4ODg4ODg4OCJ9.lZ9vi8sthuGwSCBAqhMuKVoP26UjQd74uHz9RWKepPI'
    }
    return token
  }
}
