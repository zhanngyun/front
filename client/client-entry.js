import createApp from './create-app'
import bus from './util/bus'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

bus.$on('auth', () => {
  if (typeof window !== 'undefined') {
    const href = window.location.href
    window.location.replace(href.substring(0, href.indexOf('/')) + '/login')
  }
})
bus.$on('perfect', () => {
  if (typeof window !== 'undefined') {
    const href = window.location.href
    window.location.replace(href.substring(0, href.indexOf('/')) + '/register')
  }
})

router.onReady(() => {
  app.$mount('#app')
})
