<template>
  <transition @enter="transitionIn" @after-enter="transitionInComplete" @leave="transitionOut"
              @after-leave="transitionOutComplete" :css="false" mode="out-in">
    <svg viewBox="0 0 82 82" :width="width" :height="height" class="icon">
      <defs>
        <g id="cloud-up">
          <circle class="cls-1" cx="40.92" cy="40.92" r="22.32"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="29.76"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="40.58"></circle>
          <path class="cls-3"
                d="M54.92,41.25A3.62,3.62,0,0,0,55.14,40h0A3.54,3.54,0,0,0,52,36.52a3.38,3.38,0,0,0,.18-1.1,3.52,3.52,0,0,0-3.51-3.52h-4a3.53,3.53,0,0,0-3.52,3.52,3.61,3.61,0,0,0,.18,1.09H35.4A3.52,3.52,0,0,0,31.89,40h0a3.55,3.55,0,0,0,.17,1.09H28.21a3.53,3.53,0,0,0-3.51,3.52h0a3.52,3.52,0,0,0,3.51,3.51H34V42.92l-.62.63a.64.64,0,0,1-.9-.9l1.71-1.72h0l.1-.08.05,0,.06,0,.06,0h.36l.06,0s0,0,.06,0l.05,0,.1.08h0l1.71,1.72a.64.64,0,0,1-.9.9l-.62-.63v5.22h5.21V42.92l-.63.63a.64.64,0,0,1-.9-.9l1.71-1.72h0l.1-.08,0,0,.06,0,.06,0h.36l.07,0,.06,0,.05,0,.09.08h0l1.72,1.72a.64.64,0,0,1-.9.9l-.63-.63v5.22h5.21V42.92l-.63.63a.64.64,0,0,1-.9-.9l1.71-1.72h0l.1-.08.05,0,.06,0,.07,0h.35l.07,0,.06,0,0,0,.1.08h0l1.71,1.72a.64.64,0,0,1-.9.9l-.63-.63v5.22H54a3.52,3.52,0,0,0,3.51-3.51h0A3.52,3.52,0,0,0,54.92,41.25Z"></path>
        </g>
        <g id="computer">
          <circle class="cls-1" cx="40.92" cy="40.92" r="22.32"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="29.76"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="40.58"></circle>
          <path class="cls-3"
                d="M47.46,44.36H33.86a1.86,1.86,0,1,1,0-3.71h2a2.25,2.25,0,0,1-.07-.52,1.85,1.85,0,0,1,1.86-1.85h3.08a1.82,1.82,0,0,1-.08-.52,1.87,1.87,0,0,1,1.86-1.86h2.12a1.86,1.86,0,0,1,1.85,1.86,2.33,2.33,0,0,1-.07.53,1.85,1.85,0,0,1,1.66,1.84,1.63,1.63,0,0,1-.1.59,1.86,1.86,0,0,1-.52,3.64Z"></path>
          <rect class="cls-3" x="26.5" y="48" width="27.83" height="1.16" rx="0.5" ry="0.5"></rect>
          <path class="cls-3"
                d="M51,34.53V45.9H30.32V34.53H51m.11-1.27H30.21a1.16,1.16,0,0,0-1.16,1.15V46a1.16,1.16,0,0,0,1.16,1.16H51.08A1.16,1.16,0,0,0,52.24,46V34.41a1.16,1.16,0,0,0-1.16-1.15Z"></path>
        </g>
        <g id="cloud-down">
          <circle class="cls-1" cx="40.92" cy="40.92" r="22.32"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="29.76"></circle>
          <circle class="cls-2" cx="40.92" cy="40.92" r="40.58"></circle>
          <path class="cls-3"
                d="M52.76,41.91a2.88,2.88,0,0,0,.18-1h0A2.94,2.94,0,0,0,50.27,38a2.92,2.92,0,0,0-2.78-3.87h-.34v9.39l.52-.52a.54.54,0,0,1,.76,0,.54.54,0,0,1,0,.75L47,45.15h0a.27.27,0,0,1-.08.07l0,0,0,0h0l-.05,0h-.21l0,0h-.06l0,0,0,0-.08-.07h0l-1.43-1.43a.53.53,0,0,1,.75-.75l.52.52V34.1H44.13a2.93,2.93,0,0,0-2.4,1.26v8.13l.52-.52A.54.54,0,0,1,43,43a.53.53,0,0,1,0,.75l-1.43,1.43h0a.27.27,0,0,1-.08.07l0,0-.05,0h0l-.05,0h-.21l0,0H41l-.05,0,0,0-.08-.07h0l-1.43-1.43a.53.53,0,0,1,.75-.75l.53.52V38H36.31v5.53l.53-.52a.53.53,0,0,1,.75.75l-1.43,1.43h0l-.08.07,0,0-.05,0h0l0,0h-.2l0,0h-.05l0,0-.05,0-.08-.07h0L34,43.72a.53.53,0,0,1,.75-.75l.53.52V38.21a2.94,2.94,0,0,0-1.75,2.68h0a3,3,0,0,0,.15.91H30.43a2.94,2.94,0,0,0-2.93,2.94h0a3,3,0,0,0,2.93,2.94H52a3,3,0,0,0,2.94-2.94h0A3,3,0,0,0,52.76,41.91Z"></path>
        </g>
        <filter id="shadow-filter" x="-23%" y="-105%" width="146%" height="311%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="5" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <radialGradient id="radial-gradient" cx="60.57" cy="-760.05" r="60.57"
                        gradientTransform="translate(0 165) scale(1 0.2)" gradientUnits="userSpaceOnUse">
          <stop offset="0"></stop>
          <stop offset="0.05" stop-color="#050505" stop-opacity="0.8"></stop>
          <stop offset="0.85" stop-color="#050505" stop-opacity="1"></stop>
        </radialGradient>
        <linearGradient x1="29.44411%" y1="12.98027%" x2="71.0988657%" y2="72.9179647%" id="cast-shadow">
          <stop stop-color="#000A23" offset="0%"></stop>
          <stop stop-color="#025073" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g v-if="cast" stroke="none" fill="none" fill-rule="evenodd" transform="translate(15 15) scale(0.66)">
        <path
          d="M19.0177049,69.9058598 L70.94,121.82 L122.09,74.06 L73.54,25.52 C71.7756886,24.0429516 79.8793452,50.5092593 61.5,65.2968358 C49.2178668,75.178743 35.0571018,76.7150844 19.0177049,69.9058598 Z"
          fill="url(#cast-shadow)"></path>
      </g>
      <use :xlink:href="`#${iconName}`"></use>
      <g v-if="shadow" stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0.5"
         transform="translate(8, 110) scale(0.75, 0.5)" filter="url(#shadow-filter)">
        <path fill="rgba(0,0,0,0.6)" fill-rule="nonzero"
              d="M41,27.3381295 C53.9878134,27.3381295 65.7460717,24.8920863 76.2747748,20 C65.7460717,15.1079137 53.9878134,12.6618705 41,12.6618705 C28.0121866,12.6618705 16.2539283,15.1079137 5.72522523,20 C16.2539283,24.8920863 28.0121866,27.3381295 41,27.3381295 Z"></path>
      </g>
    </svg>
  </transition>
</template>

<script>
  import { TweenMax, Elastic } from 'gsap/all'

  let plugins = [Elastic]

  export default {
    name: 'Icons',
    props: {
      iconName: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      shadow: {
        type: Boolean,
        default: false
      },
      cast: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      width () {
        return this.size
      },
      height () {
        let multiplier = (this.shadow) ? 2.3 : 1
        return this.size * multiplier
      }
    },
    methods: {
      transitionIn (el, done) {
        this.$nextTick(() => {
          TweenMax.from(this.$el, 1, {
            scale: 0.2,
            opacity: 0,
            ease: Elastic.easeOut,
            onComplete: done
          })
        })
      },
      transitionInComplete () {
        // console.log('transitionInComplete')
      },
      transitionOut (el, done) {
        this.$nextTick(() => {
          TweenMax.to(this.$el, 1, {
            scale: 0.2,
            opacity: 0,
            onComplete: done
          })
        })
      },
      transitionOutComplete () {
        // console.log('transitionOutComplete')
      }
    }
  }
</script>

<style scoped lang="scss">
  .cls-1 {
    fill: $cisco-blue;
    stroke: $white;
    stroke-width: 2px;

    @media (min-width: $tablet) {
      fill: $cisco-lt-blue;
      stroke: none;
    }
  }

  .cls-2 {
    fill: none;
    stroke: none;
    stroke-miterlimit: 10;
    stroke-width: 1px;

    @media (min-width: $tablet) {
      stroke: #00bcea;
    }
  }

  .cls-3 {
    fill: #fff;
  }
</style>
