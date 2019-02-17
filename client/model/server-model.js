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
      console.log('---------------', resp)
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}
const getHeaders = () => {
  return {
    'Authorization': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJtb2JpbGUiOiIxODg4ODg4ODg4OCJ9.lZ9vi8sthuGwSCBAqhMuKVoP26UjQd74uHz9RWKepPI',
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
  // 首页api
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
  }
}
