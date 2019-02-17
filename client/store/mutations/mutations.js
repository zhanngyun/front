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
  }
}
