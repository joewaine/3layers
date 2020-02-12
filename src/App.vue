<template>
  <div id="app" v-scroll="scrollHandler">
    <div id="fw-content" class="container">
      <hero :scroll="scroll"></hero>
<question-answer color="gray"
:questions="['Core data centers','Edge locations','The cloud','A hybrid of the above']"
:answers="[answers.question1.answer1,answers.question1.answer1,answers.question1.answer1,answers.question1.answer1]"
:icon="1" alt="Cloud Security">'"
>
        <div slot="questionTitle">
         When running your business applications, which environment are you most concerned with?
        </div>
        <div slot="question" v-observe-visibility="ioHandler" data-index="1">

<div class="svg-mobile">
      <CloudDots />
</div>

          <h4>Optimizing</h4>
          <h2>Environments</h2>
<img src="~@/assets/images/anim/fingerprint_745x340.gif" alt="Cloud Security" class="animated-image">
        </div>
      </question-answer>
      <question-answer color="gray" :colorFlip="true" :addBackground="'background-color: #3EC7E6;'" :questions="['SAP apps or HANA database','Oracle database','Microsoft SQL','Other application or database','No current migration plans']" :answers="[answers.question2.answer1+answers.question2.underlist+answers.question2.links,answers.question2.answer2+answers.question2.underlist+answers.question2.links,answers.question2.answer3+answers.question2.underlist+answers.question2.links,answers.question2.answer4+answers.question2.underlist+answers.question2.links,answers.question2.answer5+answers.question2.underlist+answers.question2.links]"
      :icon="2">
        <div slot="questionTitle" class="darker-color">
          From the outside, your biggest threat is:
        </div>
        <div slot="question" v-observe-visibility="ioHandler" data-index="2">
                
<div class="svg-mobile">
                <DotPath />
                </div>
          <h4 class="darker-color">Migrating</h4>
          <h2 class="darker-color">Applications or databases</h2>
<img src="~@/assets/images/anim/cloud_625x465.gif" alt="Cloud Applications" class="animated-image">
        </div>

      </question-answer>

      <question-answer color="gray" :questions="['Yes, currently using AI and machine learning applications.','Yes, we are exploring a   few use cases of AI and machine learning to implement in the future.','No, AI and machine learning are not for us.']" :answers="[answers.question3.answer1,answers.question3.answer2,answers.question3.answer3]"
      :icon="3" alt="Cloud Security">'">
        <div slot="questionTitle">
          Your biggest internal threat is:
        </div>
        <div slot="question" v-observe-visibility="ioHandler" data-index="3">

<div class="svg-mobile">
      <BrainCog />
      </div>
          <h4>Powering</h4>
          <h2>Machine learning and AI</h2>
<img src="~@/assets/images/anim/brain_625x360.gif" alt="Machine Learning and AI" class="animated-image">

        </div>




      </question-answer>
      <full-blade :background="'gray'">
        <h3>Modernize your present application environment and simplify your future.</h3>
        <p>Cisco can help you control any workload on any environment, including SAP, Oracle, Microsoft, big data apps, AI and machine learning, virtual desktops, enterprise communications, electronicmedical records, and more.</p>
        <pill-button link="https://www.cisco.com/c/en/us/solutions/data-center-virtualization/data-center-applications/index.html" color="dk-blue">Discover data center applications</pill-button>
      </full-blade>
<Footer />
    </div>
  </div>
</template>

<script>
  import Hero from '@/components/Hero'
  import AnimationCanvas from '@/components/AnimationCanvas'
  import QuestionAnswer from '@/components/QuestionAnswer'
  import FullBlade from '@/components/FullBlade'
  import PillButton from '@/components/PillButton'
  import HyperLink from '@/components/HyperLink'
  import Footer from '@/components/Footer'
  import CloudDots from '@/components/CloudDots'
  import DotPath from '@/components/DotPath'
  import BrainCog from '@/components/BrainCog'
  import { TimelineMax, Power3, AttrPlugin, CSSPlugin } from 'gsap/all'

  let plugins = [Power3, AttrPlugin, CSSPlugin]

  export default {
    name: 'app',
    data () {
      return {
        tl: null,
        show1: false,
        show2: false,
        show3: false,
        scroll: 0,
        answers: {
          question1: {
            answer1: '<p>Optimizing applications across all environments will ensure that your app users have the best experience possible, but this can be a complex undertaking.</p><p>Optimization tools reduce this complexity by providing actionable intelligence and the option for automated action.</p><a href="https://www.cisco.com/c/en/us/products/servers-unified-computing/workload-optimization-manager/index.html" target="_blank">Discover workload optimization</a>'
          },
          question2: {
answer1: '<p>Migrating to SAP apps or the HANA database without disruption is critical to keeping your business running smoothly. That’s why Cisco’s application performance tools are specifically designed to reduce and prevent downtime risks.</p>',
answer2: '<p>Migrating to Oracle Database without disruption is critical to keeping your business running smoothly. That’s why Cisco’s application performance tools are specifically designed to reduce and prevent downtime risks.</p>',
answer3: '<p>Migrating to Microsoft SQL without disruption is critical to keeping your business runningsmoothly. That’s why Cisco’s application performance tools are specifically designed to reduce and prevent downtime risks.</p>',
answer4: '<p>Migrating to any database or application without disruption is critical to keeping your businessrunning smoothly. That’s why Cisco’s application performance tools are specifically designed to reduce and prevent downtime risks.</p>',
answer5: '<p>When you have migrations that come up in the future, keep in mind that migrating to any database or application without disruption is critical to keeping your business running smoothly. That’s why Cisco’s application performance tools are specifically designed to reduce and prevent downtime risks.</p>',
underlist: '<ul><li>Cisco Tetration provides real-time data to view connections between enterprise data and applications.</li><li>AppDynamics monitors, correlates, analyzes, and acts on application data to understand performance and the user experience.</li></ul>',
links: '<a class="dark-blue-link" href="https://www.cisco.com/c/en/us/products/security/tetration/index.html" target="_blank">Learn about Tetration ></a><br /><a class="dark-blue-link" href="https://www.appdynamics.com/lp/gartner-magic-quadrant-apm/?utm_source=adwords&utm_medium=ppc&utm_campaign=new.search.apm.exact&utm_content=new.search.apm.exact&utm_term=apm%20software%20vendors&utm_budget=digital&gclid=EAIaIQobChMI5Ni5urTv5gIVhK_sCh1zpgc4EAAYASAAEgIHC_D_BwE" target="_blank">View AppDynamics Gartner MQ Report ></a>'
},
question3: {
  answer1: '<p>Perfect. Cisco can make it even better.</p><p>With a unified approach across the complete lifecycle of AI data, Cisco can help demystify the AI stack for early adopters, as well as provide the hardware and integrations to go from machine learning to deep learning.</p><a href="https://www.cisco.com/c/en/us/solutions/data-center/artificial-intelligence-machine-learning/index.html" target="_blank">Discover AI and Machine Learning ></a>',
  answer2: '<p>Great. Cisco can help you do even more with AI and machine learning, because we understand that data is the most prevalent challenge when developing these types of applications.</p><p>With a unified approach across the complete lifecycle of AI data, Cisco can help demystify the AI stack for early adopters, as well as provide the hardware and integrations to go from machine learning to deep learning.</p><a href="https://www.cisco.com/c/en/us/solutions/data-center/artificial-intelligence-machine-learning/index.html" target="_blank">Discover AI and Machine Learning ></a>',
  answer3: '<p>Virtually every industry is benefiting from advancements in AI and machine learning. You’d be surprised how Cisco can help.</p><p>With a unified approach across the complete lifecycle of AI data, Cisco can help demystify the AI stack for early adopters, as well as provide the hardware and integrations to go from machine learning to deep learning.</p><a href="https://www.cisco.com/c/en/us/solutions/data-center/artificial-intelligence-machine-learning/index.html" target="_blank">Discover AI and Machine Learning ></a>'
}
        }
      }
    },
    components: {
      Hero,
      AnimationCanvas,
      QuestionAnswer,
      FullBlade,
      HyperLink,
      PillButton,
      Footer,
      CloudDots,
      DotPath,
      BrainCog
    
    },
    computed: {
      tablet () {
        return this.$breakpoints.isGreaterThanEqualTo('tablet')
      },
      mobile () {
        return this.$breakpoints.isMobile()
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (!this.tl) {
          this.tl = new TimelineMax({
            paused: true
          })

          if (this.tablet) {
            this.tl.to(this.$refs.building, 1, { x: '-=70', ease: Power3.easeOut }, 0.125)
            this.tl.to(this.$refs.cloudOne, 1, { x: '-=80', ease: Power3.easeOut }, 0.25)
            this.tl.to(this.$refs.cloudTwo, 2, { x: '-=80', ease: Power3.easeOut }, 0.25)
          }
        }
      })
    },
    methods: {
      ioHandler (isVisible, entry) {
        let idx = entry.target.dataset.index
        this[`show${idx}`] = (isVisible)
      },
      scrollHandler (evt, el) {
        let scrollPercent = window.scrollY / (el.getBoundingClientRect().height - window.innerHeight)
        if (scrollPercent < 0 || scrollPercent > 1) return
        this.scroll = scrollPercent
        window.requestAnimationFrame(() => {
          this.tl.progress(scrollPercent)
        })
      }
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: $cisco-sans-reg;
    color: $cisco-dk-gray;
    font-size: 18px;
    line-height: 1.3333333333;
    > .container {
      overflow: hidden;
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .building {
    position: absolute;
    top: 170px;
    z-index: 100;
    display: none;

    @media (min-width: $small_desktop) {
      display: block;
    }
    @media (min-width: $small_desktop) {
      left: -60px;
    }
    @media (min-width: $large_desktop) {
      left: 0;
    }

    .small-clouds {
      position: absolute;
      top: 45%;
      left: 150px;
    }
  }

  p {
    a {
      text-decoration: underline;
    }
  }

  .blue-well,
  .gray-well {
    padding: 20px;
    margin: 20px auto;
    border-radius: 6px;
    p {
      margin: 0;
      line-height: 1.5;
    }
  }

  .gray-well {
    background-color: $cisco-gray;
    color: $cisco-dk-gray;
  }

  .blue-well {
    background-color: $cisco-lt-blue;
    color: $white;
  }

  sup {
    font-size: 0.7em;
    vertical-align: super;
  }

  .hide {
    opacity: 0;
  }

  .blue-stroke {
    stroke: $cisco-lt-blue;
  }

  .blue-fill {
    fill: $cisco-lt-blue;
  }

  .dk-blue-fill {
    fill: $cisco-dk-blue;
  }

  .white-fill {
    fill: $white;
  }

  .gray-fill {
    fill: rgba($cisco-dk-gray, 0.2);
    mix-blend-mode: multiply;
  }




.svg-mobile{

  display: none;
  width: 80px;
  height: 80px;
  float: left;

      @media (max-width: $tablet) {
          display: inline-block;
      }
      @media (max-width: $mobile) {
          display: inline-block;
      }


}




.answer-blade{

  a.dark-blue-link,
  a[href].dark-blue-link,
  a.dark-blue-link[href]:visited{
  color: #0D274D;
  }

}

  h4.darker-color,
  h2.darker-color,
  .darker-color{
    color: #4D4C4C;
  }



 

</style>
