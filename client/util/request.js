import axios from 'axios'
import { Message } from 'element-ui'
import { removeToken } from './auth'
// import store from '../store/store'

// 创建axios实例
const service = axios.create({
  baseURL: '"https://www.hnsqmkyy.com/api"', // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  console.log('request.... start...')
  if (config.method === 'post') {
    if (config.headers && config.headers['Content-Type'] === 'application/json') {
      config.params = {
        _t: new Date().getMilliseconds(),
        ...config.params
      }
    }
  } else if (config.method === 'get') {
    config.params = {
      _t: new Date().getMilliseconds(),
      ...config.params
    }
  }
  // console.log('store1===', store)
  // if (store.getters.token) {
  //   config.headers['Authorization'] = store.getters.token // 让每个请求携带自定义token 请根据实际情况自行修改
  //   config.headers['AuthorizationType'] = '2'
  // } else {
  //   config.headers['Authorization'] = process.env.COMMON_TOKEN // 让每个请求携带自定义token 请根据实际情况自行修改
  //   config.headers['AuthorizationType'] = '2'
  // }
  config.headers['Authorization'] = process.env.COMMON_TOKEN // 让每个请求携带自定义token 请根据实际情况自行修改
  config.headers['AuthorizationType'] = '2'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response.data,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (res.data.code === 'BIZ-8888') {
      Message({
        message: '登录失效',
        type: 'warning',
        duration: 1 * 1000,
        onClose () {
          this.$store.dispatch('FedLogOut').then(() => {})
        }
      })
    } else if (res.data.status === 411) {
      Message({
        message: res.data.message,
        type: 'warning',
        duration: 2 * 1000,
        onClose () {
          removeToken()
        }
      })
    } else if (res.data.status === 400) {
      Message({
        message: res.data.message,
        type: 'error',
        duration: 2 * 1000
      })
    } else {
      Message({
        message: res.data.message,
        type: 'error',
        duration: 2 * 1000
      })
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
