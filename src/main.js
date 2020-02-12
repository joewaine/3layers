import Vue from 'vue'
import App from './App.vue'
import { ObserveVisibility } from 'vue-observe-visibility'
import VueSimpleBreakpoints from 'vue-simple-breakpoints'
import { TweenMax, Power3 } from 'gsap/all'

Vue.prototype.$Power3 = Power3
Vue.prototype.$TweenMax = TweenMax

Vue.config.productionTip = false
Vue.use(VueSimpleBreakpoints, {
  mobile: 767,
  tablet: 1023,
  small_desktop: 1279,
  large_desktop: 1600
})

// Mobile :: 320 - 599
// Small Tablet :: 600 - 767
// Tablet :: 768 - 1023
// Desktop :: 1024 - 1279
// Large Desktop :: 1280 - 1600

Vue.directive('observe-visibility', ObserveVisibility)
Vue.directive('scroll', {
  inserted (el, binding) {
    let f = (event) => {
      ticking = false
      if (binding.value(event, el)) {
        window.removeEventListener('scroll', f, false)
      }
    }
    let ticking = false
    let onScroll = () => {
      requestTick()
    }
    let requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(f)
      }
      ticking = true
    }
    window.addEventListener('scroll', onScroll, {
      capture: false,
      passive: true
    })
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
