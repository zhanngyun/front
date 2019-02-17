export default {
  notice (state, notice) {
    state.notice = notice
  },
  noticePre (state, noticePre) {
    state.noticePre = noticePre
  },
  noticeAft (state, noticeAft) {
    state.noticeAft = noticeAft
  },
  news (state, news) {
    state.news = news
  },
  newsPre (state, newsPre) {
    state.newsPre = newsPre
  },
  newsAft (state, newsAft) {
    state.newsAft = newsAft
  },
  healthy (state, healthy) {
    state.healthy = healthy
  },
  healthyPre (state, healthyPre) {
    state.healthyPre = healthyPre
  },
  healthyAft (state, healthyAft) {
    state.healthyAft = healthyAft
  },
  startLoading (state) {
    state.loading = true
  },
  endLoading (state) {
    state.loading = false
  },
  bannerList (state, bannerList) {
    state.bannerList = bannerList
  },
  noticeList (state, noticeList) {
    state.noticeList = noticeList
  },
  newsList (state, newsList) {
    state.newsList = newsList
  },
  healthyList (state, healthyList) {
    state.healthyList = healthyList
  },
  doctorList (state, doctorList) {
    state.doctorList = doctorList
  },
  selectList1 (state, selectList1) {
    state.selectList1 = selectList1
  },
  selectList2 (state, selectList2) {
    state.selectList2 = selectList2
  },
  selectList3 (state, selectList3) {
    state.selectList3 = selectList3
  },
  envList (state, envList) {
    state.envList = envList
  },
  envAllList (state, envAllList) {
    state.envAllList = envAllList
  },
  doctorAll (state, doctorAll) {
    state.doctorAll = doctorAll
  },
  sectionInfo (state, sectionInfo) {
    state.sectionInfo = sectionInfo
  },
  sectionDoctors (state, sectionDoctors) {
    state.sectionDoctors = sectionDoctors
  },
  SET_MOBILE (state, mobile) {
    state.mobile = mobile
  },
  userInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  doctor (state, doctor) {
    state.doctor = doctor
  }
}
