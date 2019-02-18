import request from '../util/request'

export function getNoticeList () {
  return request({
    url: '/notice/info/page',
    method: 'get',
    params: {
      current: 1,
      size: 4
    }
  })
}

/**
 * 获取分页公告数据
 */
export function getNoticePage (current, size) {
  return request({
    url: '/notice/info/page',
    method: 'get',
    params: {
      current: current,
      size: size
    }
  })
}

/**
 * 获取公告详情
 * @param newsId
 */
export function getNoticeById (noticeId) {
  return request({
    url: '/notice/info/getNoticeById',
    method: 'get',
    params: {
      noticeId: noticeId
    }
  })
}
/**
 * 获取公告前一篇和后一篇
 * @param newsId
 */
export function getPreAndAft (noticeId) {
  return request({
    url: '/notice/info/getPreAndAft',
    method: 'get',
    params: {
      noticeId: noticeId
    }
  })
}

/**
 * 增加点击率
 * @param newsId
 */
export function updateClickNum (data) {
  return request({
    url: '/notice/info/updateClickNum',
    method: 'post',
    data
  })
}
