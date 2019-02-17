// import model from '../../model/client-model'
import model from 'model'
import bus from '../../util/bus'

const handleError = (err) => {
  // handle error
  if (err.code === 401) {
    // notify({
    //   content: '你得先登录啊！'
    // })
    bus.$emit('auth')
  }
}

export default {
  getNoticeById ({ dispatch, commit }, id) {
    commit('startLoading')
    console.log('getNoticeByIdStart', id)
    return model.getNoticeById(id)
      .then(data => {
        commit('endLoading')
        commit('notice', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateClickNum ({ commit }, id) {
    commit('startLoading')
    console.log('updateClickNumStart', id)
    return model.updateClickNum(id)
      .then(data => {
        commit('endLoading')
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getPreAndAft ({ commit }, id) {
    commit('startLoading')
    console.log('getPreAndAftStart', id)
    return model.getPreAndAft(id)
      .then(data => {
        commit('endLoading')
        commit('noticePre', '')
        commit('noticeAft', '')
        data.forEach(function (value, index) {
          if (value.id < id) {
            commit('noticePre', value)
          } else {
            commit('noticeAft', value)
          }
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  // 首页
  getBannerList ({ commit }) {
    commit('startLoading')
    return model.getBannerList()
      .then(data => {
        commit('endLoading')
        commit('bannerList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getNoticeList ({ commit }, {current, size}) {
    commit('startLoading')
    return model.getNoticeList(current, size)
      .then(data => {
        commit('endLoading')
        commit('noticeList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getNewsList ({ commit }, {current, size}) {
    commit('startLoading')
    return model.getNewsList(current, size)
      .then(data => {
        commit('endLoading')
        commit('newsList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getHealthyList ({ commit }, {current, size}) {
    commit('startLoading')
    return model.getHealthyList(current, size)
      .then(data => {
        commit('endLoading')
        commit('healthyList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  queryDoctorList ({ commit }, {current, size}) {
    commit('startLoading')
    return model.queryDoctorList(current, size)
      .then(data => {
        commit('endLoading')
        commit('doctorList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  }
}
