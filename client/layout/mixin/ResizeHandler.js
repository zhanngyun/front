// const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route (route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount () {
  },
  mounted () {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.$store.dispatch('ToggleDevice', 'mobile')
      this.$store.dispatch('CloseSideBar', {withoutAnimation: true})
    }
  },
  methods: {
    isMobile () {
      // const rect = document.body.getBoundingClientRect()
      // return rect.width - RATIO < WIDTH
      return document.documentElement.clientWidth - RATIO < WIDTH
    },
    resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.$store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          this.$store.dispatch('CloseSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
