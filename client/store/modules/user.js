import { login, logout, getInfo, perfect } from '../../api/login'
import { getToken, setToken, removeToken } from '../../util/auth'
import Cookies from 'js-cookie'

const user = {
  state: {
    tokenFront: getToken(),
    userName: Cookies.get('sidebarStatus'),
    avatar: Cookies.get('avatar'),
    roles: [],
    mobile: Cookies.get('mobile'),
    userId: Cookies.get('userId'),
    idCard: Cookies.get('idCard'),
    age: Cookies.get('age'),
    sex: Cookies.get('sex'),
    userStatus: Cookies.get('userStatus'),
    onlineStatus: Cookies.get('onlineStatus')
  },

  mutations: {
    SET_TOKEN: (state, tokenFront) => {
      state.tokenFront = tokenFront
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
      Cookies.set('userId', userId)
    },
    SET_IDCARD: (state, idCard) => {
      state.idCard = idCard
      Cookies.set('idCard', idCard)
    },
    SET_AGE: (state, age) => {
      state.age = age
      Cookies.set('age', age)
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
      Cookies.set('sex', sex)
    },
    SET_UserStatus: (state, userStatus) => {
      state.userStatus = userStatus
      Cookies.set('userStatus', userStatus)
    },
    SET_OnlineStatus: (state, onlineStatus) => {
      state.onlineStatus = onlineStatus
      Cookies.set('onlineStatus', onlineStatus)
    },
    SET_NAME: (state, name) => {
      state.userName = name
      Cookies.set('userName', name)
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
      Cookies.set('avatar', avatar)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
      Cookies.set('mobile', mobile)
    }
  },

  actions: {
    // 登录
    Login ({ dispatch, commit }, userInfo) {
      const mobile = userInfo.mobile.trim()
      commit('SET_MOBILE', mobile)
      return new Promise((resolve, reject) => {
        login(mobile, userInfo.verificationCode).then(response => {
          const data = response.data
          setToken(data)
          commit('SET_TOKEN', data)
          resolve()
          dispatch('GetInfo', mobile)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 完善信息
    Perfect ({ dispatch, commit }, userInfo) {
      userInfo.mobile = user.state.mobile
      return new Promise((resolve, reject) => {
        perfect(userInfo).then(response => {
          const data = response.data
          setToken(data)
          commit('SET_TOKEN', data)
          resolve()
          dispatch('GetInfo', user.state.mobile)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }, mobile) {
      return new Promise((resolve, reject) => {
        getInfo(mobile).then(response => {
          const data = response.data
          commit('SET_NAME', data.userName)
          commit('SET_AVATAR', data.portrait)
          commit('SET_USERID', data.id)
          commit('SET_IDCARD', data.idCard)
          commit('SET_UserStatus', data.userStatus)
          commit('SET_OnlineStatus', data.onlineStatus)
          commit('SET_AGE', data.age)
          commit('SET_SEX', data.sex)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_USERID', '')
          commit('SET_IDCARD', '')
          commit('SET_UserStatus', '')
          commit('SET_OnlineStatus', '')
          commit('SET_AGE', '')
          commit('SET_SEX', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_AVATAR', '')
        commit('SET_USERID', '')
        commit('SET_IDCARD', '')
        commit('SET_UserStatus', '')
        commit('SET_OnlineStatus', '')
        commit('SET_AGE', '')
        commit('SET_SEX', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
