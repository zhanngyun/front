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
  }
}
