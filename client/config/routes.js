import Layout from '../layout/Layout.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '',
    children: [{
      path: '',
      alwaysShow: true,
      meta: { title: '首页', icon: 'table' },
      component: () => import('../views/index/index.vue')
    },
    {
      path: '/noticeDetail/:id(\\d+)',
      meta: { title: '公告详情', icon: 'form' },
      component: () => import('../views/noticeDetail/index.vue')
    }]
  }
]
