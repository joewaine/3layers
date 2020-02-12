<template>
  <div id="animationContainer" ref="animationContainer">
    <canvas ref="canvas" id="canvas" width="287" height="360"></canvas>
    <div id="domOverlayContainer" ref="domOverlayContainer"></div>
  </div>
</template>

<script>
  /* eslint-disable no-undef,new-parens,new-cap */
  import createjs from 'latest-createjs'
  import * as animation from '@/assets/js/sdwan_security_animation.js'
  import { TweenMax, Power4, Back, Power1 } from 'gsap/all'

  let plugins = [Power4, Back, Power1, animation]
  let stage
  let exportRoot
  let fnStartAnimation
  let canvas
  let animContainer
  let domOverlayContainer
  let lib
  let comp

  export default {
    mounted () {
      this.$nextTick(() => {
        /* eslint-disable no-eval,camelcase,new-cap,no-undef,new-parens */
        canvas = this.$refs.canvas
        animContainer = this.$refs.animationContainer
        domOverlayContainer = this.$refs.domOverlayContainer
        comp = AdobeAn2.getComposition('6DEC752EC97C4A7B9A6B4C1B61DD3C28')
        lib = comp.getLibrary()
        this.handleComplete({}, comp)
      })
    },
    methods: {
      handleComplete (evt, comp) {
        // This function is always called, irrespective of the content. You can use the letiable "stage" after it is created in token create_stage.
        let lib = comp.getLibrary()
        let ss = comp.getSpriteSheet()
        exportRoot = new lib.initialize()
        stage = new lib.Stage(canvas)
        // Registers the "tick" event listener.
        fnStartAnimation = function () {
          stage.addChild(exportRoot)
          createjs.Ticker.framerate = lib.properties.fps
          createjs.Ticker.addEventListener('tick', stage)
          stage.addEventListener('tick', handleTick)

          function getProjectionMatrix (container, totalDepth) {
            let focalLength = 528.25
            let projectionCenter = {
              x: lib.properties.width / 2, y: lib.properties.height / 2
            }
            let scale = (totalDepth + focalLength) / focalLength
            let scaleMat = new createjs.Matrix2D
            scaleMat.a = 1 / scale
            scaleMat.d = 1 / scale
            let projMat = new createjs.Matrix2D
            projMat.tx = -projectionCenter.x
            projMat.ty = -projectionCenter.y
            projMat = projMat.prependMatrix(scaleMat)
            projMat.tx += projectionCenter.x
            projMat.ty += projectionCenter.y
            return projMat
          }

          function handleTick () {
            let cameraInstance = exportRoot.___camera___instance
            if (cameraInstance !== undefined && cameraInstance.pinToObject !== undefined) {
              cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX
              cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY
              if (cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined) {
                cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ
              }
            }
            applyLayerZDepth(exportRoot)
          }

          function applyLayerZDepth (parent) {
            let cameraInstance = parent.___camera___instance
            let focalLength = 528.25
            let projectionCenter = {
              'x': 0,
              'y': 0
            }
            if (parent === exportRoot) {
              let stageCenter = {
                'x': lib.properties.width / 2,
                'y': lib.properties.height / 2
              }
              projectionCenter.x = stageCenter.x
              projectionCenter.y = stageCenter.y
            }
            for (let child in parent.children) {
              let layerObj = parent.children[child]
              if (layerObj === cameraInstance) {
                continue
              }
              applyLayerZDepth(layerObj, cameraInstance)
              if (layerObj.layerDepth === undefined) {
                continue
              }
              if (layerObj.currentFrame !== layerObj.parent.currentFrame) {
                layerObj.gotoAndPlay(layerObj.parent.currentFrame)
              }
              let matToApply = new createjs.Matrix2D
              let cameraMat = new createjs.Matrix2D
              let totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0
              let cameraDepth = 0
              if (cameraInstance && !layerObj.isAttachedToCamera) {
                let mat = cameraInstance.getMatrix()
                mat.tx -= projectionCenter.x
                mat.ty -= projectionCenter.y
                cameraMat = mat.invert()
                cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0)
                cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0)
                if (cameraInstance.depth) {
                  cameraDepth = cameraInstance.depth
                }
              }
              if (layerObj.depth) {
                totalDepth = layerObj.depth
              }
              // Offset by camera depth
              totalDepth -= cameraDepth
              if (totalDepth < -focalLength) {
                matToApply.a = 0
                matToApply.d = 0
              } else {
                if (layerObj.layerDepth) {
                  let sizeLockedMat = getProjectionMatrix(parent, layerObj.layerDepth)
                  if (sizeLockedMat) {
                    sizeLockedMat.invert()
                    matToApply.prependMatrix(sizeLockedMat)
                  }
                }
                matToApply.prependMatrix(cameraMat)
                let projMat = getProjectionMatrix(parent, totalDepth)
                if (projMat) {
                  matToApply.prependMatrix(projMat)
                }
              }
              layerObj.transformMatrix = matToApply
            }
          }
        }

        // Code to support hidpi screens and responsive scaling.
        function makeResponsive (isResp, respDim, isScale, scaleType) {
          let lastW
          let lastH
          let lastS = 1
          window.addEventListener('resize', resizeCanvas)
          resizeCanvas()

          function resizeCanvas () {
            let w = lib.properties.width
            let h = lib.properties.height
            let iw = window.innerWidth
            let ih = window.innerHeight
            let pRatio = window.devicePixelRatio || 1
            let xRatio = iw / w
            let yRatio = ih / h
            let sRatio = 1
            if (isResp) {
              if ((respDim === 'width' && lastW === iw) || (respDim === 'height' && lastH === ih)) {
                sRatio = lastS
              } else if (!isScale) {
                if (iw < w || ih < h) {
                  sRatio = Math.min(xRatio, yRatio)
                }
              } else if (scaleType === 1) {
                sRatio = Math.min(xRatio, yRatio)
              } else if (scaleType === 2) {
                sRatio = Math.max(xRatio, yRatio)
              }
            }
            canvas.width = w * pRatio * sRatio
            canvas.height = h * pRatio * sRatio
            canvas.style.width = domOverlayContainer.style.width = animContainer.style.width = w * sRatio + 'px'
            canvas.style.height = animContainer.style.height = domOverlayContainer.style.height = h * sRatio + 'px'
            stage.scaleX = pRatio * sRatio
            stage.scaleY = pRatio * sRatio
            lastW = iw
            lastH = ih
            lastS = sRatio
            stage.tickOnUpdate = false
            stage.update()
            stage.tickOnUpdate = true
            // stage.setClearColor('rgba(0,0,0,0)')
          }
        }

        makeResponsive(false, 'both', false, 1)
        AdobeAn2.compositionLoaded(lib.properties.id)
        fnStartAnimation()
      }
    }
  }
</script>

<style scoped lang="scss">
  #animationContainer,
  #domOverlayContainer,
  canvas {
    width: 287px;
    height: 360px;
  }

  #animationContainer {
    /*background-color: rgba(2, 76, 110, 1.00);*/
  }

  #domOverlayContainer {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

  canvas {
    position: absolute;
    display: block;
    background-color: transparent;
  }
</style>
