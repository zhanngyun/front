// import { login, logout, getInfo, perfect } from '../../api/login'
// import { getToken, setToken, removeToken } from '../../util/auth'
// import Cookies from 'js-cookie'
//
// const user = {
//   state: {
//     tokenFront: getToken(),
//     userName: Cookies.get('sidebarStatus'),
//     avatar: Cookies.get('avatar'),
//     roles: [],
//     mobile: Cookies.get('mobile'),
//     userId: Cookies.get('userId'),
//     idCard: Cookies.get('idCard'),
//     age: Cookies.get('age'),
//     sex: Cookies.get('sex'),
//     userStatus: Cookies.get('userStatus'),
//     onlineStatus: Cookies.get('onlineStatus')
//   },
//
//   mutations: {
//     SET_TOKEN: (state, tokenFront) => {
//       state.tokenFront = tokenFront
//     },
//     SET_USERID: (state, userId) => {
//       state.userId = userId
//       Cookies.set('userId', userId)
//     },
//     SET_IDCARD: (state, idCard) => {
//       state.idCard = idCard
//       Cookies.set('idCard', idCard)
//     },
//     SET_AGE: (state, age) => {
//       state.age = age
//       Cookies.set('age', age)
//     },
//     SET_SEX: (state, sex) => {
//       state.sex = sex
//       Cookies.set('sex', sex)
//     },
//     SET_UserStatus: (state, userStatus) => {
//       state.userStatus = userStatus
//       Cookies.set('userStatus', userStatus)
//     },
//     SET_OnlineStatus: (state, onlineStatus) => {
//       state.onlineStatus = onlineStatus
//       Cookies.set('onlineStatus', onlineStatus)
//     },
//     SET_NAME: (state, name) => {
//       state.userName = name
//       Cookies.set('userName', name)
//     },
//     SET_AVATAR: (state, avatar) => {
//       state.avatar = avatar
//       Cookies.set('avatar', avatar)
//     },
//     SET_ROLES: (state, roles) => {
//       state.roles = roles
//     },
//     SET_MOBILE: (state, mobile) => {
//       state.mobile = mobile
//       Cookies.set('mobile', mobile)
//     }
//   }
// }
//
// export default user
