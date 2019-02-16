import request from '../util/request'

/**
 * 获取banner图
 */
export function getList () {
  return request({
    url: '/banner/info/list',
    method: 'get',
    params: {}
  })
}
