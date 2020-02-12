<template>
  <div class="hero container">
<img class="servers-image" src="~@/assets/images/anim/servers_670x530.gif" alt="servers" style="float: right;">
    <div class="intro">
<h1>
Top concerns for application modernization
</h1>
<h3 class="subtitle">
  Quick assessment
</h3>
<p>
Application modernization is growing in complexity. And with businesses expected to simultaneously maintain and migrate legacy systems while implementing new applications across on-premises, edge, and cloud environments, it’s easy to see why.
</p>
 <p>
  Answer the following three questions to discover how Cisco can help you tackle application modernization.
</p>
    </div>
    <div v-if="mobile" class="mobile-icons" v-observe-visibility="ioHandler">
      <icons class="icon icon-1" iconName="cloud-up" :cast="true" size="100"></icons>
      <icons class="icon icon-2" iconName="cloud-down" :cast="true" size="100"></icons>
      <icons class="icon icon-3" iconName="computer" :cast="true" size="100"></icons>
    </div>
  </div>
</template>

<script>
  import { TweenMax, TimelineMax, Elastic, Power3 } from 'gsap/all'
  import HeroCanvas from '@/components/HeroCanvas.vue'
  // import Icons from '@/components/Icons.vue'

  let plugins = [Elastic, Power3]

  export default {
    data () {
      return {
        tl2: null
      }
    },
    props: {
      scroll: {
        type: Number
      }
    },
    computed: {
      desktop () {
        return this.$breakpoints.isGreaterThan('tablet')
      },
      tablet () {
        return this.$breakpoints.isGreaterThanEqualTo('tablet')
      },
      mobile () {
        return this.$breakpoints.isMobile()
      }
    },
    components: {
      // Icons,
      HeroCanvas
    },
    mounted () {
      this.$nextTick(() => {
        if (!this.tl2) {
          this.tl2 = new TimelineMax({ paused: true })

          if (this.tablet) {
            this.tl2.to(this.$refs.cloudWhite, 2, { x: '+=80', ease: Power3.easeOut }, 0)
            this.tl2.to(this.$refs.cloudBlue, 3, { x: '+=70', ease: Power3.easeOut }, 0)
          }
        }
      })
    },
    methods: {
      ioHandler (isVisible) {
        let icons = Array.from(document.querySelectorAll('.icon'))
        if (isVisible) {
          TweenMax.staggerFrom(icons, 1, {
            scale: 0.2,
            opacity: 0,
            ease: Elastic.easeOut
          }, 0.2)
        }
      }
    },
    watch: {
      scroll (newVal) {
        window.requestAnimationFrame(() => {
          this.tl2.progress(newVal)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .hero {
    width: 100%;
    padding: 60px 40px;
    background: $cisco-lt-blue;
    @media (min-width: $small_desktop) {
      height: 598px;
      padding-top: 50px;
      padding-left: 150px;
      padding-bottom: 30px;
    }
    @media (max-width: $tablet) {
      padding: 30px 40px 150px 40px;
    }
  }

  .hero-animation {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  .intro {
    max-width: 600px;
    position: relative;
    z-index: 20;

    @media (max-width: $large_desktop) {
      max-width: 50%;
    }


    @media (max-width: $tablet) {
      max-width: 100%;
    }

  }

  h1, h3 {
    font-size: 42px;
    line-height: 1;
    font-family: $cisco-sans-light;
  }

  h1 {
    color: $titleText;
    font-size: 40px;
    margin-top: 32px;
  }

  h3 {
    line-height: 54px;
    color: $white;
    &.subtitle {
      color: #4D4C4C;
      font-family: $cisco-sans-bold;
      font-size: 18px;
      font-weight: bold;
      line-height: 27px;
      margin-top: 24px;
      
    }
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: $grey-body-text;
    &.bold-cta {
      margin-top: 30px;
      font-size: 22px;
      line-height: 1.2;
      font-weight: bold;
    }
    // margin-bottom: 32px;
  }

  #top-clouds {
    position: absolute;
    right: 0;
    bottom: -80px;
    z-index: 200;
  }

  .mobile-icons {
    width: 90%;
    height: 120px;
    margin: 0 auto;

    .icon {
      display: none;
    }

    @for $i from 1 through 3 {
      $per: 25 * $i - 12;
      .icon-#{$i} {
        position: absolute;
        display: block;
        left: $per +%;
      }
    }
  }

  @media (max-width: $tablet) {
    .top-clouds,
    .hero-animation {
      display: none;
    }
  }






.servers-image{
    @media (max-width: $large_desktop) {
        // display: none;

        float: right;
        position: absolute;
        width: 50%;
        right: -5%;
        bottom: 0%;
    }
}

</style>








