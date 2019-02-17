import Layout from '../layout/Layout.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '',
    children: [
      {
        path: '',
        alwaysShow: true,
        meta: { title: '首页', icon: 'table' },
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/doctorList',
        meta: { title: '院内医生', icon: 'form' },
        component: () => import('../views/doctor/index.vue')
      },
      {
        path: '/sectionList',
        meta: { title: '院内科室', icon: 'form' },
        component: () => import('../views/section/index.vue')
      },
      {
        path: '/noticeList',
        meta: { title: '院内公告', icon: 'form' },
        component: () => import('../views/noticeList/index.vue')
      },
      {
        path: '/newsList',
        meta: { title: '院内新闻', icon: 'form' },
        component: () => import('../views/newsList/index.vue')
      },
      {
        path: '/healthyList',
        meta: { title: '健康资讯', icon: 'form' },
        component: () => import('../views/healthyList/index.vue')
      },
      {
        path: '/envList',
        meta: { title: '医疗环境', icon: 'form' },
        component: () => import('../views/env/index.vue')
      },
      {
        path: '/noticeDetail/:id(\\d+)',
        hidden: true,
        meta: { title: '公告详情', icon: 'form' },
        component: () => import('../views/noticeDetail/index.vue')
      },
      {
        path: '/newsDetail/:id(\\d+)',
        hidden: true,
        meta: { title: '新闻详情', icon: 'form' },
        component: () => import('../views/newsDetail/index.vue')
      },
      {
        path: '/healthyDetail/:id(\\d+)',
        hidden: true,
        meta: { title: '健康资讯详情', icon: 'form' },
        component: () => import('../views/healthyDetail/index.vue')
      },
      {
        path: '/sectionInfo/:id(\\d+)',
        hidden: true,
        meta: { title: '科室详情', icon: 'form' },
        component: () => import('../views/sectionInfo/index.vue')
      },
      {
        path: '/doctorInfo/:id(\\d+)',
        hidden: true,
        meta: { title: '医生详情', icon: 'form' },
        component: () => import('../views/doctorInfo/index.vue')
      }
    ]
  },
  {
    path: '/login',
    hidden: true,
    meta: { title: '用户登录', icon: 'form' },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    hidden: true,
    meta: { title: '完善信息', icon: 'form' },
    component: () => import('../views/login/register.vue')
  }
]
