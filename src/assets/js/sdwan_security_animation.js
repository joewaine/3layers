/* eslint-disable no-eval,camelcase,new-cap,no-undef,new-parens,no-unexpected-multiline */
(function (cjs, an) {
  let p // shortcut to reference prototypes
  let lib = {}
  let ss = {}
  let img = {}
  lib.ssMetadata = []
  // symbols:
  // helper functions:
  function mcSymbolClone () {
    let clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop))
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }

  function getMCSymbolPrototype (symbol, nominalBounds, frameBounds) {
    let prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mcSymbolClone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }

  (lib.mc_square_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#52AADD').s().p('AhVGMQghgHgTgdIj3l+QgTgdAHgiQAIghAdgTIF+j3QAdgTAiAHQAhAIATAdID3F+QATAdgIAiQgHAhgdATIl+D3QgVAOgXAAQgJAAgKgDg')
    this.shape.setTransform(0.0101, 0.0101)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_square_Layer_1, null, null);

  (lib.mc_letter_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#1E4F70').s().p('AkSCOIIElNIAhAzIoFFMg')
    this.shape.setTransform(7.825, 3.375)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#1E4F70').s().p('AkSCOIIElNIAhAzIoFFMg')
    this.shape_1.setTransform(0.075, -8.675)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#1E4F70').s().p('AgiClQgMgDgHgKIhrikQgHgKADgNQADgMALgHICjhqQALgGAMACQAMADAHAKIBqCkQAHAKgDANQgDAMgKAHIikBqQgHAFgIAAIgHgBgAhcgTIBJBxIBxhKIhKhxg')
    this.shape_2.setTransform(-49.975, 13.7353)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#F0AC42').s().p('AiGgcICjhqIBrCjIilBqg')
    this.shape_3.setTransform(-49.95, 13.725)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#1E4F70').s().p('AqkBjIQWqhIEzHdIwWKggApQB1IDxF3IOwpgIjyl3g')
    this.shape_4.setTransform(0.025, 0)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#FFFFFF').s().p('Ap6BsIPjqBIESGqIviKBg')
    this.shape_5.setTransform(0, 0.025)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_5
      }, {
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_letter_Layer_1, null, null);
  (lib.mc_dottedLines = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#1E4F70').s().p('AAZB0IBHgtIAtBGIhGAugAg5gMIBGgtIAtBGIhGAtgAiMiNIBGgtIAuBGIhHAtg')
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_dottedLines, new cjs.Rectangle(-14.1, -18.7, 28.2, 37.4), null);
  (lib.mc_docPaper_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#1E4F70').s().p('Al1CCIKFmgIBmCeIqFGfgAkhCUIAkA3IIfleIgkg3g')
    this.shape.setTransform(29.275, 43.775)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AlLCLIJSl/IBFBqIpTF/g')
    this.shape_1.setTransform(29.3, 43.775)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#1E4F70').s().p('Al1CBIKGmfIBlCdIqFGggAkhCTIAkA4IIgleIgkg4g')
    this.shape_2.setTransform(11.875, 16.8)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#FFFFFF').s().p('AlLCKIJSl+IBFBqIpSF/g')
    this.shape_3.setTransform(11.9, 16.8)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#1E4F70').s().p('Al1CCIKFmgIBmCeIqFGfgAkhCUIAkA3IIfldIgkg4g')
    this.shape_4.setTransform(-22.875, -37.175)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#FFFFFF').s().p('AlLCLIJSl/IBFBrIpSF+g')
    this.shape_5.setTransform(-22.85, -37.15)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#1E4F70').s().p('Al1CBIKFmfIBmCdIqFGggAkhCTIAkA4IIfleIgkg3g')
    this.shape_6.setTransform(-5.475, -10.175)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#FFFFFF').s().p('AlLCKIJSl+IBFBqIpSF/g')
    this.shape_7.setTransform(-5.5, -10.2)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#1E4F70').s().p('AgLSMQgMgDgHgKIwG4+QgGgKACgMQADgMAKgHIQRqfQAKgGALACQANADAGAKIQGY+QAHAKgDAMQgCANgLAGIwQKfQgHAFgIAAIgHgBgAvhnGIPkYLIPep+Ivk4Lg')
    this.shape_8.setTransform(0.3103, -1.2147)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#50B9E5').s().p('AwKnPIQPqeIQGY9IwPKeg')
    this.shape_9.setTransform(0.3, -1.225)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_9
      }, {
        t: this.shape_8
      }, {
        t: this.shape_7
      }, {
        t: this.shape_6
      }, {
        t: this.shape_5
      }, {
        t: this.shape_4
      }, {
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_docPaper_Layer_1, null, null);
  (lib.mc_docBg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.lf(['#E5E1E3', '#CCCCCC', '#FFFFFF'], [0, 0.494, 1], -28.5, 134.5, 29.6, -134.3).s().p('AgnV6QgngIgWgiIyc8mQgVghAIgnQAIgnAigVITEsSQAhgWAmAIQAnAJAWAhISbcmQAWAigIAnQgJAmghAWIzEMSQgYAQgaAAQgKAAgLgDg')
    this.shape.setTransform(0.9131, 0.3119)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AgpWDQgngJgWghIyi8wQgVghAIgnQAIgnAigWITOsZQAggVAnAIQAoAJAVAhISicwQAVAhgIAoQgIAmgiAWIzOMZQgYAPgaAAQgKAAgLgCg')
    this.shape_1.setTransform(-0.025, 0.025)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_docBg, new cjs.Rectangle(-130.4, -141.3, 260.9, 282.70000000000005), null);
  (lib.mc_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('rgba(242, 242, 242, 0)').s().p('A5df4MAAAg/vMAy7AAAMAAAA/vg')
    this.shape.setTransform(163, 204)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_bg, new cjs.Rectangle(0, 0, 326, 408), null);
  (lib.mc_arrowThing_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#1E4F70').s().p('AgsDRQhXgSgwhLQgwhKAShWQAThXBLgwQBKgwBWATQBXATAwBKQAwBLgTBVQgTBXhKAwQg1Ajg8AAQgWAAgZgGgAhSiAQg2AigNA/QgOA9AjA1QAiA2A+ANQA+AOA1gjQA2giANg+QAOg+gjg1Qgig2g/gNQgRgEgQAAQgrAAgmAZg')
    this.shape.setTransform(-0.1379, -0.125)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#81BB59').s().p('AgmC0QhLgQgphAQgphAAQhKQAQhKBAgqQBAgpBKAQQBLAQApBAQApBAgQBKQgQBLhAApQguAdgzAAQgUAAgVgEg')
    this.shape_1.setTransform(-0.125, -0.1149)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#1E4F70').s().p('AiQitIEhDKIiaAHIhGCKg')
    this.shape_2.setTransform(-7, -81.5)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#1E4F70').s().p('AhAFjIDUiJIl7pOIAyghIGdKBIkHCqg')
    this.shape_3.setTransform(10.7, -42.025)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_3
      }, {
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_arrowThing_Layer_1, null, null);
  (lib.Scene_1_cover = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // cover
    this.mc_cover = new lib.mc_bg()
    this.mc_cover.name = 'mc_cover'
    this.mc_cover.parent = this
    this.timeline.addTween(cjs.Tween.get(this.mc_cover).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_cover, null, null);
  (lib.Scene_1_bg_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // bg
    this.mc_bg = new lib.mc_bg()
    this.mc_bg.name = 'mc_bg'
    this.mc_bg.parent = this
    this.timeline.addTween(cjs.Tween.get(this.mc_bg).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_bg_1, null, null);
  (lib.Scene_1_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // bg
    this.instance = new lib.mc_bg()
    this.instance.parent = this
    this.instance.alpha = 0.6016
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_bg, null, null);
  (lib.mc_square = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1_obj_
    this.Layer_1 = new lib.mc_square_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_square, new cjs.Rectangle(-39.8, -39.8, 79.69999999999999, 79.69999999999999), null);
  (lib.mc_letter = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1_obj_
    this.Layer_1 = new lib.mc_letter_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_letter, new cjs.Rectangle(-67.6, -57.5, 135.3, 115.1), null);
  (lib.mc_docPaper_Layer_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_2
    this.mc_docBg = new lib.mc_docBg()
    this.mc_docBg.name = 'mc_docBg'
    this.mc_docBg.parent = this
    this.mc_docBg.shadow = new cjs.Shadow('rgba(0,0,0,0.098)', 14, 4, 8)
    this.timeline.addTween(cjs.Tween.get(this.mc_docBg).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_docPaper_Layer_2, null, null);
  (lib.mc_docPaper = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // timeline functions:
    this.frame_0 = function () {
      this.mc_docBg = this.Layer_2.mc_docBg
    }
    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1))
    // Layer_1_obj_
    this.Layer_1 = new lib.mc_docPaper_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(0.3, -1.2, 1, 1, 0, 0, 0, 0.3, -1.2)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
    // Layer_2_obj_
    this.Layer_2 = new lib.mc_docPaper_Layer_2()
    this.Layer_2.name = 'Layer_2'
    this.Layer_2.parent = this
    this.Layer_2.depth = 0
    this.Layer_2.isAttachedToCamera = 0
    this.Layer_2.isAttachedToMask = 0
    this.Layer_2.layerDepth = 0
    this.Layer_2.layerIndex = 1
    this.Layer_2.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_docPaper, new cjs.Rectangle(-130.4, -147.3, 286, 304), null);
  (lib.mc_arrowThing = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // Layer_1_obj_
    this.Layer_1 = new lib.mc_arrowThing_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(6.2, -38.8, 1, 1, 0, 0, 0, 6.2, -38.8)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_arrowThing, new cjs.Rectangle(-21.6, -98.9, 55.5, 120.30000000000001), null);
  (lib.mc_doc = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // letters
    this.mc_letter02 = new lib.mc_letter()
    this.mc_letter02.name = 'mc_letter02'
    this.mc_letter02.parent = this
    this.mc_letter02.setTransform(76.4, -44.6, 1, 1, 32.9997)
    this.mc_letter01 = new lib.mc_letter()
    this.mc_letter01.name = 'mc_letter01'
    this.mc_letter01.parent = this
    this.mc_letter01.setTransform(-80, 68.9, 1, 1, 32.9997)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.mc_letter01
      }, {
        t: this.mc_letter02
      }]
    }).wait(1))
    // arrowThing
    this.mc_arrowThing = new lib.mc_arrowThing()
    this.mc_arrowThing.name = 'mc_arrowThing'
    this.mc_arrowThing.parent = this
    this.mc_arrowThing.setTransform(46.1, 93, 1, 1, 32.9997)
    this.timeline.addTween(cjs.Tween.get(this.mc_arrowThing).wait(1))
    // doc
    this.mc_doc01 = new lib.mc_docPaper()
    this.mc_doc01.name = 'mc_doc01'
    this.mc_doc01.parent = this
    this.mc_doc01.setTransform(0, 0, 1, 1, 32.9997)
    this.timeline.addTween(cjs.Tween.get(this.mc_doc01).wait(1))
    // square
    this.mc_square = new lib.mc_square()
    this.mc_square.name = 'mc_square'
    this.mc_square.parent = this
    this.mc_square.setTransform(-78.85, -98.9, 1, 1, 32.9997)
    this.timeline.addTween(cjs.Tween.get(this.mc_square).wait(1))
    // dottedLines
    this.mc_dottedLines02 = new lib.mc_dottedLines()
    this.mc_dottedLines02.name = 'mc_dottedLines02'
    this.mc_dottedLines02.parent = this
    this.mc_dottedLines02.setTransform(104.55, -502.9, 1, 1, 32.9997)
    this.mc_dottedLines01 = new lib.mc_dottedLines()
    this.mc_dottedLines01.name = 'mc_dottedLines01'
    this.mc_dottedLines01.parent = this
    this.mc_dottedLines01.setTransform(-111.1, -296.15, 1, 1, 32.9997)
    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.mc_dottedLines01
      }, {
        t: this.mc_dottedLines02
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_doc, new cjs.Rectangle(-186.4, -526.3, 398, 730.8), null);
  (lib.Scene_1_icons_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // icons
    this.mc_doc02 = new lib.mc_doc()
    this.mc_doc02.name = 'mc_doc02'
    this.mc_doc02.parent = this
    this.mc_doc02.setTransform(87.05, 404.1, 0.54, 0.54, -31.9995, 0, 0, 0.1, 0.2)
    this.timeline.addTween(cjs.Tween.get(this.mc_doc02).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_icons_1, null, null);
  (lib.Scene_1_icons = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})
    // icons
    this.mc_doc01 = new lib.mc_doc()
    this.mc_doc01.name = 'mc_doc01'
    this.mc_doc01.parent = this
    this.mc_doc01.setTransform(244.05, 172, 0.9999, 0.9999, -31.9995, 0, 0, 0.1, 0.1)
    this.timeline.addTween(cjs.Tween.get(this.mc_doc01).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_icons, null, null);
  (lib.initialize = function (mode, startPosition, loop) {
    // stage content:
    this.initialize(mode, startPosition, loop, {})
    this.___GetDepth___ = function (obj) {
      let depth = obj.depth
      let cameraObj = this.___camera___instance
      if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
        depth += depth + cameraObj.depth
      }
      return depth
    }
    this.___needSorting___ = function () {
      for (let i = 0; i < this.numChildren - 1; i++) {
        let prevDepth = this.___GetDepth___(this.getChildAt(i))
        let nextDepth = this.___GetDepth___(this.getChildAt(i + 1))
        if (prevDepth < nextDepth) {
          return true
        }
      }
      return false
    }
    this.___sortFunction___ = function (obj1, obj2) {
      return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1))
    }
    this.on('tick', function (event) {
      let curTimeline = event.currentTarget
      if (curTimeline.___needSorting___()) {
        this.sortChildren(curTimeline.___sortFunction___)
      }
    })
    // timeline functions:
    this.frame_0 = function () {
      this.mc_cover = this.cover.mc_cover
      this.mc_doc01 = this.icons.mc_doc01
      this.mc_doc02 = this.icons_1.mc_doc02
      this.mc_bg = this.bg_1.mc_bg
      s = this
      mc_cover = s.mc_cover
      mc_doc01 = s.mc_doc01
      mc_doc02 = s.mc_doc02
      mc_doc01_doc = s.mc_doc01.mc_doc01
      mc_doc01_letter01 = s.mc_doc01.mc_letter01
      mc_doc01_letter02 = s.mc_doc01.mc_letter02
      mc_doc01_arrowThing = s.mc_doc01.mc_arrowThing
      mc_doc01_dottedLines01 = s.mc_doc01.mc_dottedLines01
      mc_doc01_dottedLines02 = s.mc_doc01.mc_dottedLines02
      mc_doc01_square = s.mc_doc01.mc_square
      mc_doc02_doc = s.mc_doc02.mc_doc01
      mc_doc02_letter01 = s.mc_doc02.mc_letter01
      mc_doc02_letter02 = s.mc_doc02.mc_letter02
      mc_doc02_arrowThing = s.mc_doc02.mc_arrowThing
      mc_doc02_dottedLines01 = s.mc_doc02.mc_dottedLines01
      mc_doc02_dottedLines02 = s.mc_doc02.mc_dottedLines02
      mc_doc02_square = s.mc_doc02.mc_square
      TweenMax.delayedCall(0, goDoc01)
      TweenMax.delayedCall(0.5, goDoc02)

      function goDoc01 () {
        TweenMax.to(mc_doc01, 4, {
          scaleX: 1.05,
          scaleY: 1.05,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          delay: 0
        })
        TweenMax.to(mc_doc01_doc, 1.5, {
          y: '-=20', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc01_letter01, 2.5, {
          y: '+=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc01_letter02, 2, {
          y: '-=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc01_dottedLines01, 1, {
          y: '+=700', yoyo: false, repeat: -1, ease: Power2.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc01_dottedLines02, 1, {
          y: '+=700', yoyo: false, repeat: -1, ease: Power2.easeInOut, delay: 0
        })
        TweenMax.set(mc_doc01_arrowThing, {
          rotation: '+=4', delay: 0
        })
        TweenMax.to(mc_doc01_arrowThing, 1, {
          rotation: '-=8',
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          delay: 0
        })
        TweenMax.set(mc_doc01_square, {
          y: '-=20', delay: 0
        })
        TweenMax.to(mc_doc01_square, 4, {
          y: '+=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
      }

      function goDoc02 () {
        TweenMax.to(mc_cover, 1, {
          alpha: 0, delay: 0
        })
        TweenMax.to(mc_doc01, 4.5, {
          scaleX: 0.95,
          scaleY: 0.95,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          delay: 0
        })
        TweenMax.to(mc_doc02_doc, 1.5, {
          y: '-=20', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc02_letter01, 2.5, {
          y: '+=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc02_letter02, 2, {
          y: '-=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc02_dottedLines01, 1, {
          y: '+=700', yoyo: false, repeat: -1, ease: Power2.easeInOut, delay: 0
        })
        TweenMax.to(mc_doc02_dottedLines02, 1, {
          y: '+=700', yoyo: false, repeat: -1, ease: Power2.easeInOut, delay: 0
        })
        TweenMax.set(mc_doc02_arrowThing, {
          rotation: '+=4', delay: 0
        })
        TweenMax.to(mc_doc02_arrowThing, 1, {
          rotation: '-=8',
          yoyo: true,
          repeat: -1,
          ease: Power1.easeInOut,
          delay: 0
        })
        TweenMax.set(mc_doc02_square, {
          y: '-=20', delay: 0
        })
        TweenMax.to(mc_doc02_square, 4, {
          y: '+=10', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
        })
      }

      this.stop()
    }
    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1))
    // cover_obj_
    this.cover = new lib.Scene_1_cover()
    this.cover.name = 'cover'
    this.cover.parent = this
    this.cover.setTransform(163, 204, 1, 1, 0, 0, 0, 163, 204)
    this.cover.depth = 0
    this.cover.isAttachedToCamera = 0
    this.cover.isAttachedToMask = 0
    this.cover.layerDepth = 0
    this.cover.layerIndex = 0
    this.cover.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.cover).wait(1))
    // icons_obj_
    this.icons = new lib.Scene_1_icons()
    this.icons.name = 'icons'
    this.icons.parent = this
    this.icons.setTransform(154.7, 29.2, 1, 1, 0, 0, 0, 154.7, 29.2)
    this.icons.depth = 0
    this.icons.isAttachedToCamera = 0
    this.icons.isAttachedToMask = 0
    this.icons.layerDepth = 0
    this.icons.layerIndex = 1
    this.icons.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.icons).wait(1))
    // bg_obj_
    this.bg = new lib.Scene_1_bg()
    this.bg.name = 'bg'
    this.bg.parent = this
    this.bg.setTransform(163, 204, 1, 1, 0, 0, 0, 163, 204)
    this.bg.depth = 0
    this.bg.isAttachedToCamera = 0
    this.bg.isAttachedToMask = 0
    this.bg.layerDepth = 0
    this.bg.layerIndex = 2
    this.bg.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.bg).wait(1))
    // icons_obj_
    this.icons_1 = new lib.Scene_1_icons_1()
    this.icons_1.name = 'icons_1'
    this.icons_1.parent = this
    this.icons_1.setTransform(38.8, 326.9, 1, 1, 0, 0, 0, 38.8, 326.9)
    this.icons_1.depth = 0
    this.icons_1.isAttachedToCamera = 0
    this.icons_1.isAttachedToMask = 0
    this.icons_1.layerDepth = 0
    this.icons_1.layerIndex = 3
    this.icons_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.icons_1).wait(1))
    // bg_obj_
    this.bg_1 = new lib.Scene_1_bg_1()
    this.bg_1.name = 'bg_1'
    this.bg_1.parent = this
    this.bg_1.setTransform(163, 204, 1, 1, 0, 0, 0, 163, 204)
    this.bg_1.depth = 0
    this.bg_1.isAttachedToCamera = 0
    this.bg_1.isAttachedToMask = 0
    this.bg_1.layerDepth = 0
    this.bg_1.layerIndex = 4
    this.bg_1.maskLayerName = 0
    this.timeline.addTween(cjs.Tween.get(this.bg_1).wait(1))
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(106.6, -124.9, 295.5, 622.4)
  // library properties:
  lib.properties = {
    id: '6DEC752EC97C4A7B9A6B4C1B61DD3C28',
    width: 326,
    height: 408,
    fps: 60,
    color: 'rgba(0,0,0,0)',
    opacity: 1.00,
    manifest: [],
    preloads: []
  };
  // bootstrap callback support:
  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function (ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function (ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000)
  }
  p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000 }
  p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000 }
  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (let i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }
  an.compositions = an.compositions || {}
  an.compositions['6DEC752EC97C4A7B9A6B4C1B61DD3C28'] = {
    getStage: function () { return exportRoot.getStage() },
    getLibrary: function () { return lib },
    getSpriteSheet: function () { return ss },
    getImages: function () { return img }
  }
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (let j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }
  an.getComposition = function (id) {
    return an.compositions[id]
  }
  // Layer depth API :
  AdobeAn2.Layer = new function () {
    this.getLayerZDepth = function (timeline, layerName) {
      if (layerName === 'Camera') {
        layerName = '___camera___instance'
      }
      let script = 'if(timeline.' + layerName + ') timeline.' + layerName + '.depth; else 0;'
      return eval(script)
    }
    this.setLayerZDepth = function (timeline, layerName, zDepth) {
      const MAX_zDepth = 10000
      const MIN_zDepth = -5000
      if (zDepth > MAX_zDepth) {
        zDepth = MAX_zDepth
      } else if (zDepth < MIN_zDepth) {
        zDepth = MIN_zDepth
      }
      if (layerName === 'Camera') {
        layerName = '___camera___instance'
      }
      let script = 'if(timeline.' + layerName + ') timeline.' + layerName + '.depth = ' + zDepth + ';'
      eval(script)
    }
    this.removeLayer = function (timeline, layerName) {
      if (layerName === 'Camera') {
        layerName = '___camera___instance'
      }
      let script = 'if(timeline.' + layerName + ') timeline.removeChild(timeline.' + layerName + ');'
      eval(script)
    }
    this.addNewLayer = function (timeline, layerName, zDepth) {
      if (layerName === 'Camera') {
        layerName = '___camera___instance'
      }
      zDepth = typeof zDepth !== 'undefined' ? zDepth : 0
      let layer = new createjs.MovieClip()
      layer.name = layerName
      layer.depth = zDepth
      layer.layerIndex = 0
      timeline.addChild(layer)
    }
  }
})(createjs = createjs || {}, window.AdobeAn2 = {})
