<template>
  <div class="full question-blade" :class="color" :style="addBackground">
    <div class="question-intro">
      <slot name="icon" class="icon"></slot>
      <slot name="question"></slot>
    </div>
    <div class="question-list">
      <h3 class="question-title">
        <slot name="questionTitle"></slot>
      </h3>
      <ul v-observe-visibility="inView">
        <li v-if="colorFlip" class="darken-text-color">
          Select one of the following:
        </li>

        <li v-else>
          Select one of the following:
        </li>



        <li v-for="(question, index) in questions" :key="index" class="question" @click="showCorrectAnswer(index)">
          <a>
            <svg viewBox="0 0 28 28" height="28" width="28">
              <g transform="translate(1, 0)">
                <circle class="white-fill" cx="12" cy="14" r="12" stroke="#BDB9B9" stroke-width="1"></circle>
                <circle class="gray-fill hide" cx="12" cy="14" r="8" stroke="#BDB9B9" stroke-width="1"></circle>
              </g>
            </svg>
          </a>
          <div v-if="colorFlip" class="question-text darken-text-color">
          {{question}}
          </div>
          <div v-else class="question-text">
          {{question}}
          </div>



        </li>
      </ul>
    </div>
    <slot name="image-background"></slot>
    <transition name="fade" @enter="transitionIn" @after-enter="transitionInComplete" @leave="transitionOut"
                @after-leave="transitionOutComplete">
      <div class="full answer-blade" v-if="showAnswer" :style="addBackground">
        <div class="answer-intro">
        <div class="answer-child-icon" v-if="icon === 1">
          <CloudDots />
        </div>
        <div class="answer-child-icon" v-if="icon === 2">
            <DotPath />
        </div>
        <div class="answer-child-icon" v-if="icon === 3">
          <BrainCog />
        </div>
        </div>
        <div v-if="colorFlip" class="answer-list darkened-text">

        <div v-if="icon === 1">
          <div class="svg-mobile">
          <CloudDots />
          </div>
        </div>
        <div v-if="icon === 2">
          <div class="svg-mobile">
          <DotPath />
          </div>
        </div>
        <div v-if="icon === 3">
          <div class="svg-mobile">
          <BrainCog />
          </div>
        </div>

        <div>
        <h2>Answer:</h2>
        <div v-for="(answer, index) in answers" :key="index" class="answers" v-if="index === currentAnswer">
        <div v-html="answer"></div>
        </div>
        </div>
        </div>

        <div v-else class="answer-list">

        <div v-if="icon === 1">
          <div class="svg-mobile">
          <CloudDots />
          </div>
        </div>
        <div v-if="icon === 2">
          <div class="svg-mobile">
          <DotPath />
          </div>
        </div>
        <div v-if="icon === 3">
          <div class="svg-mobile">
          <BrainCog />
          </div>
        </div>

        <div>
        <h2>Answer:</h2>
        <div v-for="(answer, index) in answers" :key="index" class="answers" v-if="index === currentAnswer">
        <div v-html="answer"></div>
        </div>
        </div>
        </div>








        <a @click="showAnswer = false" class="close" v-if="colorFlip" style="color: #ffffff;">
<svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
    <title>chevron</title>
    <desc>Created with Sketch.</desc>
    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Top-3-LP-Answers" transform="translate(-369.000000, -2307.000000)">
            <!-- <rect fill="transparent" x="0" y="0" width="480" height="2900"></rect> -->
            <g id="Blade-4_Powering-Answer" transform="translate(0.000000, 1767.000000)">
                <!-- <rect id="Background-Panel" fill="#F2F2F2" x="0" y="0.00181488203" width="480" height="550"></rect> -->
                <g id="Back_Button" transform="translate(371.000000, 538.000000)" stroke="#ffffff" stroke-linecap="round" stroke-width="3">
                    <g id="Icon/chevron/indigo" transform="translate(3.000000, 8.500000) rotate(-180.000000) translate(-3.000000, -8.500000) translate(0.000000, 3.000000)">
                        <polyline id="chevron" transform="translate(3.000000, 5.500000) rotate(-90.000000) translate(-3.000000, -5.500000) " points="-2 3 3 8 8 3"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>



          Back
        </a>

        <a @click="showAnswer = false" class="close" v-else>
<svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
    <title>chevron</title>
    <desc>Created with Sketch.</desc>
    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Top-3-LP-Answers" transform="translate(-369.000000, -2307.000000)">
            <!-- <rect fill="transparent" x="0" y="0" width="480" height="2900"></rect> -->
            <g id="Blade-4_Powering-Answer" transform="translate(0.000000, 1767.000000)">
                <!-- <rect id="Background-Panel" fill="#F2F2F2" x="0" y="0.00181488203" width="480" height="550"></rect> -->
                <g id="Back_Button" transform="translate(371.000000, 538.000000)" stroke="#0175A2" stroke-linecap="round" stroke-width="3">
                    <g id="Icon/chevron/indigo" transform="translate(3.000000, 8.500000) rotate(-180.000000) translate(-3.000000, -8.500000) translate(0.000000, 3.000000)">
                        <polyline id="chevron" transform="translate(3.000000, 5.500000) rotate(-90.000000) translate(-3.000000, -5.500000) " points="-2 3 3 8 8 3"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>



          Back
        </a>


      </div>
    </transition>
  </div>
</template>

<script>
import CloudDots from '@/components/CloudDots'
import DotPath from '@/components/DotPath'
import BrainCog from '@/components/BrainCog'
  import Icons from '@/components/Icons'
  import { TweenMax, Power3 } from 'gsap/all'

  let plugins = [Power3]

  export default {
    name: 'QuestionAnswer',
    data () {
      return {
        showAnswer: false,
        currentAnswer: null
      }
    },
    components: {
      Icons,
      CloudDots,
      DotPath,
      BrainCog
    },
    props: {
      questions: {
        type: Array
      },
      answers: {
        type: Array
      },
      color: {
        type: String
      },
      icon: {
        type: String
      },
      addBackground: {
        type: String
      },
      colorFlip: {
        type: Boolean
      }
    },
    methods: {
      showCorrectAnswer(i){
        this.currentAnswer = i;
        this.showAnswer = true;
      },
      inView (isVisible) {
        if (isVisible) {
          let circles = Array.from(document.querySelectorAll('.gray-fill'))
          TweenMax.staggerTo(circles, 0.5, {
            opacity: 0.5,
            onCompleteParams: ['{self}'],
            onComplete () {
              TweenMax.to(this.target, 0.5, {
                opacity: 0,
                delay: 0.2,
                onCompleteParams: ['{self}'],
                onComplete () {
                  this.target.style = ''
                }
              })
            }
          }, 0.1)
        }
      },
      transitionIn (el, done) {
        TweenMax.from(el, 0.6, {
          xPercent: -100,
          ease: Power3.easeIn,
          onComplete: done
        })
      },
      transitionInComplete () {},
      transitionOut (el, done) {
        TweenMax.to(el, 0.6, {
          xPercent: -100,
          ease: Power3.easeIn,
          onComplete: done
        })
      },
      transitionOutComplete () {}
    }
  }
</script>

<style lang="scss">
  .question-blade {
    position: relative;
    overflow: auto;
    display: flex;
    // align-items: center;
    align-items: top;
    justify-content: flex-start;
    flex-direction: column;
    padding: 40px 20px;

    @media (min-width: $tablet) {
      flex-direction: row;
      justify-content: center;
      padding: 0;
    }

    &.gray {
      background-color: $cisco-lt-gray;
      .answer-blade {
        background-color: $cisco-lt-gray;
      }
    }
    &.white {
      background-color: $white;
      .answer-blade {
        background-color: $white;
      }
    }
    &.blue {
      background: $cisco-dk-blue url("~@/assets/images/blue-tile.jpg") repeat;
      * {
        color: $white;
      }
      .answer-blade {
        background: $cisco-dk-blue url("~@/assets/images/blue-tile.jpg") repeat;
      }
    }
    &.lightblue{
        background: $cisco-lt-blue;
    }
    .corner-media {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      canvas {
        transform-origin: right bottom;
        transform: translateY(50px) scale(0.5);
      }

      @media (min-width: $tablet) {
        canvas {
          transform: scale(0.7);
        }
      }
      @media (min-width: $small_desktop) {
        bottom: 0;
      }
    }

    .question-intro {
      position: relative;
      display: inline-block;
      @media (min-width: $tablet) {
        width: 50vw;
        margin-left: 40px;
        margin-top: 0;
        > h4, h2, p {
          width: 80%;
        }
      }
      width: calc(50%);
      margin-left: 0;
      @media (min-width: $small_desktop) {
        width: calc(50% - 200px);
        margin-left: 150px;
      }
      @media (max-width: $tablet) {
            width: calc(100%);
      }
      .icon {
        position: absolute;
        top: -10px;
        left: -20px;
        width: 100px;
        height: 100px;
        float: left;
        margin-right: -20px;

        @media (min-width: $tablet) {
          top: -100px;
          width: 82px;
          height: 82px;
          margin: 0;
          float: none;
        }
      }
      img.animated-image{
        width: 100%;
         @media (max-width: $tablet) {
           display: none;
         }
      }
    }

    h4 {
      font-family: $cisco-sans-light;
      margin-bottom: 0;
      margin-top: 10px;
      &:not(.answer-title) {
        margin-left: 80px;
      }
      @media (min-width: $tablet) {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 24px;
        &:not(.answer-title) {
          margin-left: 0;
        }
      }
    }

    h3.question-title {
      margin-bottom: 40px;
      > div {
        width: 80%;
      }
      @media (min-width: $tablet) {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }

    h2 {
      font-family: $cisco-sans-extra-light;
      margin-bottom: 15px;
      // margin-left: 80px;
      margin-left: 0;
      font-size: 36px;
      line-height: 1;
      @media (max-width: $tablet) {
        margin-left: 0;
        font-size: 32px;
      }
    }

    p {
      font-size: 18px;
      clear: both;
    }

    .question-list {
      position: relative;
      display: inline-block;
      z-index: 10;
      @media (min-width: $tablet) {
        width: calc(50% + 200px);
        margin-left: 50px;
      }
      @media (min-width: $small_desktop) {
        width: calc(50% + 50px);
        margin-left: 50px;
      }
      ul {
        li {
          display: flex;
          align-items: flex-start;
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 20px;
          @media (min-width: $tablet) {
            width: 80%;
          }
          @media (min-width: $small_desktop) {
            width: 70%;
          }
          svg {
            margin-right: 20px;
            @media (max-width: $tablet) {
              margin-top: 10px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }

    li.question {
      cursor: pointer;
      .hide {
        transition: opacity 300ms ease-in-out;
      }
      &:hover {
        .hide {
          // opacity: 0.5;
          opacity: 0.75;
        }
      }
      &:active {
        .hide {
          opacity: 1;
        }
      }
    }
    &.full {
      padding-bottom: 30vw;
      @media (max-width: $tablet) {
        padding-bottom: 10vw;
      }
    }
    .full,
    &.full {
      position: relative;
      overflow: hidden;
      height: 650px;

      @media (min-width: $tablet) {
        height: 525px;
        padding-bottom: 40px;
        padding-top: 120px;
      }

      @media (max-width: $tablet) {
        height: auto;
        min-height: auto;
      }

    }

    .answer-blade {
      position: absolute;
      top: 120px;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 40;
      min-height: 670px;

      @media (min-width: $tablet) {
        top: 0;
        min-height: 525px;
      }

      .answer-intro {
        width: calc(50% - 50px);
        display: none;
        min-height: 200px;
        .icon {
          position: absolute;
          transform: translate3d(-50%, -50%, 0);
          top: 30%;
        }
        .answer-icon-1 {
          left: 35%;
        }
        .answer-icon-2 {
          left: 10%;
        }
        .answer-icon-3 {
          left: 22.5%;
          top: 50%;
        }
        @media (min-width: $tablet) {
          display: block;
        }
        @media (min-width: $small_desktop) {
          .answer-icon-1 {
            left: 32%;
          }
          .answer-icon-2 {
            left: 18%;
          }
          .answer-icon-3 {
            left: 25%;
          }
        }
        @media (min-width: $small_desktop) {
          margin-left: 250px;
          width: calc(50% - 300px);
        }
        @media (max-width: $small_desktop) {
          margin-left: 0px;
          width: calc(50%);
        }

      }
      .answer-list {
        // padding: 20px;
        h4.answer-title {
          color: $cisco-lt-blue;
          margin-bottom: 20px;
        }
        .pill-button {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        @media (min-width: $tablet) {
          width: calc(50%);
          > div {
            width: 85%;
          }
        }
        @media (min-width: $small_desktop) {
          width: calc(50% + 50px);
          > div {
            width: 80%;
          }
        }

      .svg-mobile{

        display: none;
        width: 80px;
        height: 80px;
        float: left;
    margin-top: -16px;
            @media (max-width: $tablet) {
                display: inline-block;
            }
            @media (max-width: $mobile) {
                display: inline-block;
            }


      }


      }

      top: 0;
      min-height: 100%;


      @media (max-width: $tablet) {
        height: auto;
        min-height: auto !important;
      }

    }

    .close {
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
      svg {
        margin-right: 10px;
      }
      .blue & {
        color: $white;
      }

        bottom: 20px;
        right: 20px;
        right: 20px;
        position: absolute;


    }
  }
.question{

    background: rgba(77, 76, 76, 0.05);
    // padding: 12px 11px 9px;
    padding: 15px 14px 8px;
    border-radius: 28px;
    position: relative;
    transition: all .5s ease;
    .question-text{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
      width: 85%;

      @media (max-width: $small_desktop) {
        position: initial;
        top: initial;
        transform: initial;

        margin-left: 35px;
        margin-top: -2px;

      }

    }
    &:hover{
    background: rgba(77, 76, 76, 0.075);
    }
    @media (max-width: $large_desktop) {
      padding: 30px 14px 16px;
    }
    @media (max-width: $small_desktop) {
      padding: 16px 14px 13px;
    }
  }





.answer-blade a,
.answer-blade a[href],
.answer-blade a[href]:visited{
color: #007493;
}

.answer-list ul{
    list-style: initial;
    padding-left: .8em;
    margin-bottom: 14px;
    li{
      font-size: 18px;
      line-height: 1.375em;
    }
}



.answer-list .answers a{
  line-height: 1.8em;


  transition: all .5s ease;



}



.question-blade .answer-blade{

      @media (max-width: $tablet) {
    align-items: initial;


    padding: 56px 20px 40px 20px;

      }

}

.answer-child-icon{
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

li.question a{
    @media (max-width: $small_desktop) {
      position: absolute;
      // top: 50%;
      top: calc(50% + 3px);
      transform: translateY(-50%);
    }
  }



.answer-list{

&.darkened-text{
h2, p, li{
color: #403C3D;
}
}
}


.darken-text-color{
 color: #1B1B1B;
}


</style>
