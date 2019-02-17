import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: 'https://www.hnsqmkyy.com/api'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      if (resp.status === 411) {
        reject(createError(411, 'need perfect'))
      } else if (resp.status === 500) {
        reject(createError(500, 'need auth'))
      } else {
        console.log('err', err)
        reject(createError(400, resp.message))
      }
    })
  })
}
const getHeaders = () => {
  return {
    // 'Authorization': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJtb2JpbGUiOiIxODg4ODg4ODg4OCJ9.lZ9vi8sthuGwSCBAqhMuKVoP26UjQd74uHz9RWKepPI',
    'Authorization': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJtb2JpbGUiOiIxNzYyMTY2OTQ1NiIsInVzZXJOYW1lIjoi5byg5LqRIiwidXNlcklkIjoiMjUiLCJleHAiOjE1NTA1MDg5NDMsIm5iZiI6MTU1MDQyMjU0M30.Moi5u9gqwGc7fTed7tkVD0CrxOWhkqR0bX7JF2E2BwE',
    'AuthorizationType': '2'
  }
}
export default {
  getNoticeById (id) {
    return handleRequest(request.get(`/notice/info/getNoticeById?noticeId=${id}`, {
      headers: getHeaders()
    }))
  },
  getPreAndAft (id) {
    return handleRequest(request.get(`/notice/info/getPreAndAft?noticeId=${id}`, {
      headers: getHeaders()
    }))
  },
  updateClickNum (id) {
    return handleRequest(request({
      url: '/notice/info/updateClickNum',
      method: 'post',
      data: {
        id
      },
      headers: getHeaders()
    }))
  },
  getBannerList () {
    return handleRequest(request({
      url: '/banner/info/list',
      method: 'get',
      headers: getHeaders()
    }))
  },
  getNoticeList (current, size) {
    return handleRequest(request({
      url: '/notice/info/page',
      method: 'get',
      params: {
        current: current,
        size: size
      },
      headers: getHeaders()
    }))
  },
  getNewsList (current, size) {
    return handleRequest(request({
      url: '/news/info/page',
      method: 'get',
      params: {
        current: current,
        size: size
      },
      headers: getHeaders()
    }))
  },
  getHealthyList (current, size) {
    return handleRequest(request({
      url: '/healthy/info/page',
      method: 'get',
      params: {
        current: current,
        size: size
      },
      headers: getHeaders()
    }))
  },
  queryDoctorList (current, size) {
    return handleRequest(request({
      url: '/doctor/info/page',
      method: 'get',
      params: {
        current: current,
        size: size
      },
      headers: getHeaders()
    }))
  },
  SectionInfoByType (sectionType) {
    return handleRequest(request({
      url: '/section/info/getSelectionByType',
      method: 'get',
      params: {
        sectionType
      },
      headers: getHeaders()
    }))
  },
  getEnvList (current, size) {
    return handleRequest(request({
      url: '/env/info/page',
      method: 'get',
      params: {
        current: current,
        size: size
      },
      headers: getHeaders()
    }))
  },
  // 院内新闻
  getNewsById (id) {
    return handleRequest(request.get(`/news/info/getNewsById?newsId=${id}`, {
      headers: getHeaders()
    }))
  },
  getNewsPreAndAft (id) {
    return handleRequest(request.get(`/news/info/getPreAndAft?newsId=${id}`, {
      headers: getHeaders()
    }))
  },
  updateNewsClickNum (id) {
    return handleRequest(request({
      url: '/news/info/updateClickNum',
      method: 'post',
      data: {
        id
      },
      headers: getHeaders()
    }))
  },
  // 健康资讯
  getHealthyById (id) {
    return handleRequest(request.get(`/healthy/info/getHealthyById?healthyId=${id}`, {
      headers: getHeaders()
    }))
  },
  getHealthyPreAndAft (id) {
    return handleRequest(request.get(`/healthy/info/getPreAndAft?healthyId=${id}`, {
      headers: getHeaders()
    }))
  },
  updateHealthyClickNum (id) {
    return handleRequest(request({
      url: '/healthy/info/updateClickNum',
      method: 'post',
      data: {
        id
      },
      headers: getHeaders()
    }))
  },
  // 院内医疗环境
  getAllEnvList () {
    return handleRequest(request({
      url: '/env/info/list',
      method: 'get',
      headers: getHeaders()
    }))
  },
  // 医生全部列表
  getSectionsAndDoctors () {
    return handleRequest(request({
      url: '/doctor/info/getSectionsAndDoctors',
      method: 'get',
      headers: getHeaders()
    }))
  },
  // 科室详情
  getSectionById (id) {
    return handleRequest(request({
      url: `/section/info/getSectionById?sectionId=${id}`,
      method: 'get',
      headers: getHeaders()
    }))
  },
  queryDoctorsBySectionId (id) {
    return handleRequest(request({
      url: '/doctor/info/page',
      method: 'get',
      params: {
        current: 1,
        size: 5,
        sectionId: id
      },
      headers: getHeaders()
    }))
  },
  // 发送短信
  sendMsg (mobile) {
    return handleRequest(request({
      url: '/msgCode/send',
      method: 'post',
      data: {
        mobile
      },
      headers: getHeaders()
    }))
  },
  // 登录
  login (mobile, authCode) {
    return handleRequest(request({
      url: '/user/info/login',
      method: 'post',
      data: {
        mobile,
        authCode
      },
      headers: getHeaders()
    }))
  },
  // 完善信息
  perfect (data) {
    return handleRequest(request({
      url: '/user/info/perfect',
      method: 'post',
      data,
      headers: getHeaders()
    }))
  },
  // 获取用户信息
  getInfo (mobile) {
    return handleRequest(request({
      url: '/user/info/getInfo',
      method: 'get',
      params: {
        mobile: mobile
      },
      headers: getHeaders()
    }))
  },
  // 医生相关
  queryListByDoctorId (doctorId, userId) {
    return handleRequest(request({
      url: '/visitingTime/info/queryListByDoctorId',
      method: 'get',
      params: {
        doctorId: doctorId,
        userId: userId
      },
      headers: getHeaders()
    }))
  },
  queryListByDoctorByDoctorId (doctorId) {
    return handleRequest(request({
      url: '/visitingTime/info/queryListByDoctorId',
      method: 'get',
      params: {
        doctorId: doctorId
      },
      headers: getHeaders()
    }))
  },
  getDoctorById (doctorId) {
    return handleRequest(request({
      url: '/doctor/info/getDoctorById',
      method: 'get',
      params: {
        doctorId: doctorId
      },
      headers: getHeaders()
    }))
  },
  ordering (data) {
    return handleRequest(request({
      url: '/order/info/ordering',
      method: 'post',
      data,
      headers: getHeaders()
    }))
  }
}
