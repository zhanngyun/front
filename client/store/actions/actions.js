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
        return data
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
        return data
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
        return data
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
  },
  getEnvList ({ commit }, {current, size}) {
    commit('startLoading')
    return model.getEnvList(current, size)
      .then(data => {
        commit('endLoading')
        commit('envList', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  SectionInfoByType ({ commit }, sectionType) {
    commit('startLoading')
    return model.SectionInfoByType(sectionType)
      .then(data => {
        commit('endLoading')
        if (sectionType === 1) {
          commit('selectList1', data)
        } else if (sectionType === 2) {
          commit('selectList2', data)
        } else {
          commit('selectList3', data)
        }
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  // 院内新闻详情
  getNewsById ({ dispatch, commit }, id) {
    commit('startLoading')
    return model.getNewsById(id)
      .then(data => {
        commit('endLoading')
        commit('news', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateNewsClickNum ({ commit }, id) {
    commit('startLoading')
    return model.updateNewsClickNum(id)
      .then(data => {
        commit('endLoading')
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getNewsPreAndAft ({ commit }, id) {
    commit('startLoading')
    return model.getNewsPreAndAft(id)
      .then(data => {
        commit('endLoading')
        commit('newsPre', '')
        commit('newsAft', '')
        data.forEach(function (value, index) {
          if (value.id < id) {
            commit('newsPre', value)
          } else {
            commit('newsAft', value)
          }
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  // 健康资讯详情
  getHealthyById ({ dispatch, commit }, id) {
    commit('startLoading')
    return model.getHealthyById(id)
      .then(data => {
        commit('endLoading')
        commit('healthy', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateHealthyClickNum ({ commit }, id) {
    commit('startLoading')
    return model.updateHealthyClickNum(id)
      .then(data => {
        commit('endLoading')
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  getHealthyPreAndAft ({ commit }, id) {
    commit('startLoading')
    return model.getHealthyPreAndAft(id)
      .then(data => {
        commit('endLoading')
        commit('healthyPre', '')
        commit('healthyAft', '')
        data.forEach(function (value, index) {
          if (value.id < id) {
            commit('healthyPre', value)
          } else {
            commit('healthyAft', value)
          }
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  // 院内医疗环境
  getAllEnvList ({ commit }) {
    commit('startLoading')
    return model.getAllEnvList()
      .then(data => {
        commit('endLoading')
        commit('envAllList', data)
        return data
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  // 医生全部列表
  getSectionsAndDoctors ({ commit }) {
    commit('startLoading')
    return model.getSectionsAndDoctors()
      .then(data => {
        commit('endLoading')
        commit('doctorAll', data)
        return data
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  }
}
