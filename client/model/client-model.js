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
  }
}
