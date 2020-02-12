/* eslint-disable no-eval,camelcase,new-cap,no-undef,new-parens */
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

  (lib.mc_lines03_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AgGH7QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGGDQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGELQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGCTQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGAbQgDgDAAgEIAAg7QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgDAAgDgDgAgGhcQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGjUQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGlMQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGnEQgDgDAAgEIAAgoQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAoQAAAEgDADQgDADgEAAQgDAAgDgDg')
    this.shape.setTransform(0, 49.975)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines03_Layer_1, null, null);
  (lib.mc_lines02a_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AgBLwQgDgDAAgEIAAg8QAAgEADgDQACgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgCgDgAgBJ4QgDgDAAgEIAAg8QAAgEADgDQACgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgCgDgAgBIAQgDgDAAgEIAAg8QAAgEADgDQACgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgCgDgAgCGIQgDgDAAgEIAAg8QAAgEADgDQACgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgCgDgAgDEQQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgECYQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgFAgQgDgDAAgEIAAg7QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgDAAgDgDgAgGhXQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgHjPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgIlHQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJm/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgKo3QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgLqvQgDgDAAgEIAAgyQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEIAAAyQAAAEgDADQgCADgEAAQgEAAgDgDg')
    this.shape.setTransform(0, -74.475)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines02a_Layer_1, null, null);
  (lib.mc_lines01_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AgGYBQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGWJQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGURQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGSZQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGQhQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGOpQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGMxQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGK5QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGJBQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGHJQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGFRQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGDZQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGBhQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGgWQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGiOQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGkGQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGl+QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGn2QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGpuQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGrmQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGteQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGvWQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGxOQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGzGQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgG0+QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgG22QgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDg')
    this.shape.setTransform(0, 157)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines01_Layer_1, null, null);
  (lib.mc_joint = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg')

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_joint, new cjs.Rectangle(-10, -10, 20, 20), null);
  (lib.mc_dropShadow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.lf(['#010A21', 'rgba(30,79,112,0)'], [0, 1], -28.1, -35.6, 20, 22.1).s().p('AoUhCQBbBHBfACQBXACCdhMQBvg3Abi5QAJg5gBhAIgDg1IHlHlQAvDgkTCVQhVAvhsAhIhaAYg')
    this.shape.setTransform(53.2868, 48.15)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_dropShadow, new cjs.Rectangle(0, 0, 106.6, 96.3), null);
  (lib.mc_cloudSmall02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.rf(['#ABC9E8', '#B0CDE9', '#CCDFF1', '#E3EDF7', '#F3F7FC', '#FCFDFE', '#FFFFFF'], [0, 0.027, 0.196, 0.369, 0.553, 0.753, 1], -34.4, -2.7, 0, -34.4, -2.7, 112).s().p('AkTCuQgfAAgWgWQgWgWAAgfQAAggAWgVQAWgXAfAAIBTAAQgEgLAAgMQAAgeAWgWQAWgXAfAAIB9AAQgEgJAAgNQAAgfAWgXQAWgWAfAAIBWAAQAfAAAXAWQAWAXAAAfQAAALgEAMQAcACAUAWQAUAWAAAcQAAAMgFAOQAYAHAQAUQAPAUAAAaQAAAfgWAWQgWAWgfAAg')
    this.shape.setTransform(35.125, 17.4)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_cloudSmall02, new cjs.Rectangle(0, 0, 70.3, 34.8), null);
  (lib.mc_cloudSmall01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.rf(['#ABC9E8', '#B0CDE9', '#CCDFF1', '#E3EDF7', '#F3F7FC', '#FCFDFE', '#FFFFFF'], [0, 0.027, 0.196, 0.369, 0.553, 0.753, 1], 25.1, 20.6, 0, 25.1, 20.6, 74.8).s().p('AjFB9QgWAAgQgQQgPgQAAgWQAAgWAPgQQAQgQAWAAIA7AAQgCgIAAgJQgBgVARgQQAPgQAXAAIBZAAQgDgJAAgIQAAgWAQgQQAQgQAWAAIA9AAQAXAAAQAQQAPAQAAAWQAAAKgCAHQAUACAPAQQANAPAAAUQAAALgDAIQARAFALAOQALAPAAASQAAAWgPAQQgQAQgWAAg')
    this.shape.setTransform(25.15, 12.475)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_cloudSmall01, new cjs.Rectangle(0, 0, 50.3, 25), null);
  (lib.mc_clouds02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.rf(['#ABC9E8', '#B6D1EB', '#D4E4F3', '#FFFFFF'], [0, 0.2, 0.565, 1], 0, 78.8, 0, 0, 78.8, 810.5).s().p('Eg+aAxZQhfhjAAiHQAAiGBfhfQBfhfCGAAQAsAAAoALQgGggAAgeQAAibBuhtQBthuCcAAQByAABeA/QAphUBQgyQBSg0BgAAIAKABQgqgqgWg2QgXg4AAg9QgBh9BZhYQBYhZB9AAQBcAABNA0QAuhGBKgpQBMgpBXAAQBBAAA7AXQA6AXAuApQAUg6AxgkQAzgmA/AAQA1AAAuAcQAsAaAZAtQBginChhwQhIgngshGQgshIAAhWQAAgtAOgrQiZguhiiBQhiiDgBikQAAjMCQiQQCRiPDMAAQCAAAByBAQgeg6AAhAQAAhqBIhMQBJhNBogGQgPgyAAg1QAAhJAdhDQAahBAxgyQg1haAAhqQAAifBxhxQBwhxCgAAQBeAABRAqQASg+AzgoQA1gpBCAAQBEAAA3AtQANg3AggvQAggtAvgfQiCghhUhnQhYhogIiHQhoA1h3AAQjIAAiMiNQiOiOAAjIQAAjBCGiNQCFiNDAgJQAGiXBthrQBthsCWAAQAIAAAPgFQAQgFAHAAMA++AAAMAAABhFMh1rAAAQgCBqheBiQhlBqh/AAQiFAAhghlg')
    this.shape.setTransform(409, 326.175)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_clouds02, new cjs.Rectangle(0, 0, 818, 652.4), null);
  (lib.mc_clouds01_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.rf(['#ABC9E8', '#C4D9EF', '#E4EEF7', '#F8FAFD', '#FFFFFF'], [0, 0.22, 0.553, 0.824, 1], 260.1, 68.1, 0, 260.1, 68.1, 928.4).s().p('EhGABMIQjCjCAAkSQAAjyCbi4QCai3DpgqQhWiZAAiuQAAkSDCjCQDCjCESAAQCCAAB3AwQBzAwBaBVQA7g7BNghQBQgiBXAAQBuAABgA1QBdAzA6BaQAUhWBFg4QBFg5BbAAQAjABAgAIQAOhsBBhaQBAhXBhgvQg0h7AAiHQAAkTDCjCQDCjCESAAQBDAABEAOQhViAAAicQAAjWCXiXQCXiXDWAAQBSAABNAaQBLAXBBAuQgMgwAAgvQAAh4BDhjQBBhgBrgtQgxgwgdg/QgehAgFhHQhgA/h1AAQhKAAhFgbQhCgag1gwQhXBziBBBQiEBEiWAAQkDgBi2i2Qi3i3AAkCQAAi9BoicQBmiZCohJQg2g5gdhJQgehKAAhSQAAisB6h6QB5h6CtABQAwgBAzAMIAAgGQAAjDCLiLQCKiKDDgBQCTABB5BTIgCgoQAAiIBQhvQBNhsB9gsQgkgrgUg0QgVg3AAg6QAAiFBeheQBdheCFAAQBAAAA6AYQA5AYAsAqQAliBBrhSQBthTCKAAQCLAABuBVQBsBUAkCCQB/hbCcgDQhChygMiBQhBAmhMAAQg2AAgxgUQgwgTglgkQgrAJgrAAQiqAAh4h5Qh5h4AAirQAAiqB5h4QB4h5CqAAQB8AABnBFQATinB9hwQB+hyCrAAQANAAAmAFQhoiHAAinQAAjNCSiPQCQiODPAAQALgBAVAJQAVAHAKABMAn+AAAMAAACPfMh+oAAAQAjABAYBmQAUBaAABiQAAERjCC4Qi/C3kVgBQkSAAjCjBg')
    this.shape.setTransform(467.525, 506.55)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_clouds01_Layer_1, null, null);
  (lib.mc_circle02_icon = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // icon
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AimBvQgHAAgFgGQgGgFAAgHIAAi5QAAgIAGgEQAFgGAHAAIFMAAQAIAAAGAGQAFAEAAAIIAAC5QAAAHgFAFQgGAGgIAAgAikBaIFJAAIAAi0IlJAAg')
    this.shape.setTransform(0.15, -1.7)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AjUAJQgEAAgDgCQgCgDAAgEQAAgDACgCQADgDAEAAIGoAAQAFAAACADQADADAAACQAAAEgDADQgCACgFAAg')
    this.shape_1.setTransform(0.15, 11.625)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#FFFFFF').s().p('AhrBDQgNAAgIgIQgJgJAAgMQAAgMAJgJQAIgJANAAIAgAAQgBgEgBgEQAAgMAJgIQAJgJAMAAIAxAAQgCgDAAgFQAAgMAJgJQAJgJAMAAIAiAAQAMAAAIAJQAJAJAAAMIgBAIQAMABAHAJQAIAJAAAKQgBAFgBAFQAJACAGAIQAGAIAAAKQAAAMgJAJQgIAIgMAAg')
    this.shape_2.setTransform(0.15, -1.85)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_2
      }, {
        t: this.shape_1
      }, {
        t: this.shape
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle02_icon, null, null);
  (lib.mc_circle02_circleBg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // circleBg
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#024D6E').s().p('AkBECQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAQiWAAhrhrg')
    this.shape.setTransform(0.025, -0.025)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle02_circleBg, null, null);
  (lib.mc_circle = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f().s('#FFFFFF').ss(2).p('AFtAAQAAiWhrhrQhrhriXAAQiWAAhrBrQhrBrAACWQAACXBrBrQBrBrCWAAQCXAABrhrQBrhrAAiXg')
    this.shape.setTransform(0.025, 0.025)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle, new cjs.Rectangle(-37.5, -37.5, 75.1, 75.1), null);
  (lib.mc_buildings_Layer_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#1E4F70').s().p('AgYMXIAA4TIAxgaIgBYtg')
    this.shape.setTransform(321.85, 125.175)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_1.setTransform(331.725, 187.75)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_2.setTransform(341.975, 187.75)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_3.setTransform(352.225, 187.75)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_4.setTransform(331.725, 177.45)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_5.setTransform(341.975, 177.45)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_6.setTransform(352.225, 177.45)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_7.setTransform(331.725, 167.15)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_8.setTransform(341.975, 167.15)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_9.setTransform(352.225, 167.15)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_10.setTransform(331.725, 156.85)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_11.setTransform(341.975, 156.85)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_12.setTransform(352.225, 156.85)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_13.setTransform(331.725, 146.55)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_14.setTransform(341.975, 146.55)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_15.setTransform(352.225, 146.55)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_16.setTransform(331.725, 136.375)

    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_17.setTransform(341.975, 136.375)

    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_18.setTransform(352.225, 136.375)

    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_19.setTransform(331.725, 126.05)

    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_20.setTransform(341.925, 126.05)

    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_21.setTransform(352.125, 126.05)

    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_22.setTransform(331.725, 115.6)

    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_23.setTransform(341.975, 115.6)

    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_24.setTransform(352.225, 115.6)

    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_25.setTransform(331.725, 105.3)

    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_26.setTransform(341.975, 105.3)

    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_27.setTransform(352.225, 105.3)

    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_28.setTransform(331.725, 95)

    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_29.setTransform(341.975, 95)

    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_30.setTransform(352.225, 95)

    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_31.setTransform(331.725, 84.675)

    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_32.setTransform(341.975, 84.675)

    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_33.setTransform(352.225, 84.675)

    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_34.setTransform(331.725, 74.35)

    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_35.setTransform(341.975, 74.35)

    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_36.setTransform(352.225, 74.35)

    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_37.setTransform(331.725, 64.2)

    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_38.setTransform(341.975, 64.2)

    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_39.setTransform(352.225, 64.2)

    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_40.setTransform(331.725, 53.85)

    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_41.setTransform(341.925, 53.85)

    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_42.setTransform(352.125, 53.85)

    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics.f('#4DAFDB').s().p('AjDMYIgB4SIAygbIFWgCIABYvg')
    this.shape_43.setTransform(339.025, 125.075)

    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics.f('#1E4F70').s().p('AgcMsIgE4SIBBhGIAAZZg')
    this.shape_44.setTransform(309.9, 123.1)

    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics.f('#50BAE6').s().p('AkkMqIgD4SIA/hGIINADIAEZag')
    this.shape_45.setTransform(336.45, 123.325)

    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics.f('#1E4F70').s().p('AgUJcIgEyEIAwg0IABS5g')
    this.shape_46.setTransform(317.575, 60.475)

    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics.f('#FFFFFF').s().p('Ah+AMQgGAAgDgEQgEgDAAgFQAAgEAEgEQADgDAGAAID9AAQAFAAAEADQAEAEgBAEQABAFgEADQgEAEgFAAg')
    this.shape_47.setTransform(339.15, 31.85)

    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics.f('#FFFFFF').s().p('Ah+AMQgGAAgDgDQgEgEAAgFQAAgEAEgDQADgEAGAAID9AAQAFAAAEAEQAEADgBAEQABAFgEAEQgEADgFAAg')
    this.shape_48.setTransform(339.15, 20.9)

    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics.f('#FFFFFF').s().p('Ah+AMQgGAAgDgDQgEgEAAgFQAAgEAEgEQADgDAGAAID9AAQAFAAAEADQAEAEgBAEQABAFgEAEQgEADgFAAg')
    this.shape_49.setTransform(339.15, 9.95)

    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics.f('#50BAE6').s().p('AjZJaIgDyDIAwg1IGGADIADS6g')
    this.shape_50.setTransform(337.325, 60.65)

    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics.f('#1E4F70').s().p('AgZKvIAC0zIAxgqIAAVdg')
    this.shape_51.setTransform(111.575, 136.05)

    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics.f('#50BAE6').s().p('AhEgPQAegWAmAAQAmABAfAUQAeAUAKAfIjZADQAKgiAegTg')
    this.shape_52.setTransform(128.25, 64.35)

    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_53.setTransform(128.4, 182.6)

    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_54.setTransform(123.7, 182.6)

    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_55.setTransform(119, 182.6)

    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_56.setTransform(137.75, 182.6)

    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_57.setTransform(133.05, 182.6)

    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_58.setTransform(128.4, 151.55)

    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_59.setTransform(123.7, 151.55)

    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_60.setTransform(119, 151.55)

    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_61.setTransform(137.75, 151.55)

    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_62.setTransform(133.05, 151.55)

    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_63.setTransform(128.4, 120.55)

    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_64.setTransform(123.7, 120.55)

    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_65.setTransform(119, 120.55)

    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_66.setTransform(137.75, 120.55)

    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_67.setTransform(133.05, 120.55)

    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_68.setTransform(128.4, 89.525)

    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_69.setTransform(123.7, 89.525)

    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_70.setTransform(119, 89.525)

    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_71.setTransform(137.75, 89.525)

    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics.f('#F2F2F2').s().p('AgLCFIAAkJIAXAAIAAEJg')
    this.shape_72.setTransform(133.05, 89.525)

    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics.f('#50BAE6').s().p('AinKvIAC0zIAzgrIEZAAIAAVeg')
    this.shape_73.setTransform(125.75, 136.1)

    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics.f('#50BAE6').s().p('AgUCnIAOlNIANAAIAOFNg')
    this.shape_74.setTransform(128.2, 58.225)

    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics.f('#1E4F70').s().p('AgdPnIgD+VIBBg5IAAfPg')
    this.shape_75.setTransform(228.05, 104.45)

    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics.f('#FFFFFF').s().p('AixAOQgFgBgEgEQgEgDAAgGQAAgFAEgDQAEgEAFAAIFiAAQAFAAAFAEQAEADAAAFQAAAGgEADQgFAEgFABg')
    this.shape_76.setTransform(257.6, 75.2)

    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgFAAgFQAAgFAEgEQAEgEAFAAIFiAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAg')
    this.shape_77.setTransform(257.6, 62.975)

    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics.f('#FFFFFF').s().p('AixANQgFAAgEgDQgEgEAAgGQAAgEAEgEQAEgFAFAAIFiAAQAFAAAFAFQAEAEAAAEQAAAGgEAEQgFADgFAAg')
    this.shape_78.setTransform(257.6, 50.7)

    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgFAAgFQAAgFAEgEQAEgEAFAAIFiAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAg')
    this.shape_79.setTransform(257.6, 38.475)

    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgFQgEgEAAgFQAAgFAEgEQAEgDAFAAIFiAAQAFAAAFADQAEAEAAAFQAAAFgEAEQgFAFgFAAg')
    this.shape_80.setTransform(257.6, 26.25)

    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics.f('#FFFFFF').s().p('AixAOQgFgBgEgEQgEgDAAgGQAAgFAEgDQAEgEAFAAIFiAAQAFAAAFAEQAEADAAAFQAAAGgEADQgFAEgFABg')
    this.shape_81.setTransform(257.6, 14)

    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgFAAgFQAAgFAEgEQAEgEAFAAIFiAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAg')
    this.shape_82.setTransform(257.6, 185.325)

    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics.f('#FFFFFF').s().p('AixANQgFAAgEgDQgEgEAAgGQAAgEAEgEQAEgFAFAAIFiAAQAFAAAFAFQAEAEAAAEQAAAGgEAEQgFADgFAAg')
    this.shape_83.setTransform(257.6, 173.1)

    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAIFiAAQAFAAAFAEQAEAFAAAEQAAAGgEAEQgFAEgFAAg')
    this.shape_84.setTransform(257.6, 160.825)

    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics.f('#FFFFFF').s().p('AixANQgFAAgEgDQgEgEAAgGQAAgEAEgEQAEgFAFAAIFiAAQAFAAAFAFQAEAEAAAEQAAAGgEAEQgFADgFAAg')
    this.shape_85.setTransform(257.6, 148.6)

    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics.f('#FFFFFF').s().p('AixANQgFABgEgEQgEgFAAgFQAAgEAEgFQAEgEAFABIFiAAQAFgBAFAEQAEAFAAAEQAAAFgEAFQgFAEgFgBg')
    this.shape_86.setTransform(257.6, 136.35)

    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAIFiAAQAFAAAFAEQAEAFAAAEQAAAGgEAEQgFAEgFAAg')
    this.shape_87.setTransform(257.6, 124.125)

    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics.f('#FFFFFF').s().p('AixANQgFAAgEgDQgEgEAAgGQAAgEAEgEQAEgFAFAAIFiAAQAFAAAFAFQAEAEAAAEQAAAGgEAEQgFADgFAAg')
    this.shape_88.setTransform(257.6, 111.9)

    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics.f('#FFFFFF').s().p('AixANQgFAAgEgDQgEgFAAgFQAAgEAEgEQAEgFAFAAIFiAAQAFAAAFAFQAEAEAAAEQAAAFgEAFQgFADgFAAg')
    this.shape_89.setTransform(257.6, 99.65)

    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics.f('#FFFFFF').s().p('AixAOQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAIFiAAQAFAAAFAEQAEAFAAAEQAAAGgEAEQgFAEgFAAg')
    this.shape_90.setTransform(257.6, 87.425)

    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics.f('#50BAE6').s().p('AkpPmIgE+VIBBg6IIWADIAEfQg')
    this.shape_91.setTransform(255.1, 104.65)

    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics.f('#1E4F70').s().p('AgYMWIAA4SIAxgaIAAYsg')
    this.shape_92.setTransform(172.05, 125.8)

    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_93.setTransform(181.925, 188.4)

    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_94.setTransform(192.175, 188.4)

    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_95.setTransform(202.475, 188.4)

    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_96.setTransform(181.925, 178.1)

    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_97.setTransform(192.175, 178.1)

    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_98.setTransform(202.475, 178.1)

    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_99.setTransform(181.925, 167.8)

    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_100.setTransform(192.175, 167.8)

    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_101.setTransform(202.475, 167.8)

    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_102.setTransform(181.925, 157.5)

    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_103.setTransform(192.175, 157.5)

    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_104.setTransform(202.475, 157.5)

    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_105.setTransform(181.925, 147.15)

    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_106.setTransform(192.175, 147.15)

    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_107.setTransform(202.475, 147.15)

    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_108.setTransform(181.925, 137)

    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_109.setTransform(192.175, 137)

    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_110.setTransform(202.475, 137)

    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_111.setTransform(181.925, 126.65)

    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_112.setTransform(192.125, 126.65)

    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_113.setTransform(202.375, 126.65)

    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_114.setTransform(181.925, 116.2)

    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_115.setTransform(192.175, 116.2)

    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_116.setTransform(202.475, 116.2)

    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_117.setTransform(181.925, 105.9)

    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_118.setTransform(192.175, 105.9)

    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_119.setTransform(202.475, 105.9)

    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_120.setTransform(181.925, 95.6)

    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_121.setTransform(192.175, 95.6)

    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_122.setTransform(202.475, 95.6)

    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_123.setTransform(181.925, 85.3)

    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_124.setTransform(192.175, 85.3)

    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_125.setTransform(202.475, 85.3)

    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_126.setTransform(181.925, 75)

    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_127.setTransform(192.175, 75)

    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_128.setTransform(202.475, 75)

    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_129.setTransform(181.925, 64.8)

    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_130.setTransform(192.175, 64.8)

    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_131.setTransform(202.475, 64.8)

    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_132.setTransform(181.925, 54.475)

    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_133.setTransform(192.125, 54.475)

    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_134.setTransform(202.375, 54.475)

    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics.f('#4DAFDB').s().p('AjDMYIgB4SIAygbIFWgCIABYvg')
    this.shape_135.setTransform(189.275, 125.675)

    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics.f('#1E4F70').s().p('AgYGGIAArxIAxgaIgBMLg')
    this.shape_136.setTransform(2.5, 165.825)

    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_137.setTransform(12.375, 196.25)

    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_138.setTransform(22.6, 196.25)

    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics.f('#FFFFFF').s().p('AgUAkIAAhHIApAAIAABHg')
    this.shape_139.setTransform(32.825, 196.25)

    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_140.setTransform(12.375, 185.95)

    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_141.setTransform(22.6, 185.95)

    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_142.setTransform(32.825, 185.95)

    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_143.setTransform(12.375, 175.65)

    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_144.setTransform(22.6, 175.65)

    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_145.setTransform(32.825, 175.65)

    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_146.setTransform(12.375, 165.35)

    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_147.setTransform(22.6, 165.35)

    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_148.setTransform(32.825, 165.35)

    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_149.setTransform(12.375, 155.05)

    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_150.setTransform(22.6, 155.05)

    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics.f('#FFFFFF').s().p('AgUAjIAAhGIApAAIAABGg')
    this.shape_151.setTransform(32.825, 155.05)

    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_152.setTransform(12.375, 144.85)

    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_153.setTransform(22.6, 144.85)

    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics.f('#FFFFFF').s().p('AgUAkIAAhGIApAAIAABGg')
    this.shape_154.setTransform(32.825, 144.85)

    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_155.setTransform(12.375, 134.55)

    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_156.setTransform(22.55, 134.55)

    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics.f('#FFFFFF').s().p('AgUAjIAAhFIApAAIAABFg')
    this.shape_157.setTransform(32.725, 134.55)

    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics.f('#4DAFDB').s().p('AjDGHIgBrxIAzgbIFVgBIABMNg')
    this.shape_158.setTransform(19.65, 165.725)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_158
      }, {
        t: this.shape_157
      }, {
        t: this.shape_156
      }, {
        t: this.shape_155
      }, {
        t: this.shape_154
      }, {
        t: this.shape_153
      }, {
        t: this.shape_152
      }, {
        t: this.shape_151
      }, {
        t: this.shape_150
      }, {
        t: this.shape_149
      }, {
        t: this.shape_148
      }, {
        t: this.shape_147
      }, {
        t: this.shape_146
      }, {
        t: this.shape_145
      }, {
        t: this.shape_144
      }, {
        t: this.shape_143
      }, {
        t: this.shape_142
      }, {
        t: this.shape_141
      }, {
        t: this.shape_140
      }, {
        t: this.shape_139
      }, {
        t: this.shape_138
      }, {
        t: this.shape_137
      }, {
        t: this.shape_136
      }, {
        t: this.shape_135
      }, {
        t: this.shape_134
      }, {
        t: this.shape_133
      }, {
        t: this.shape_132
      }, {
        t: this.shape_131
      }, {
        t: this.shape_130
      }, {
        t: this.shape_129
      }, {
        t: this.shape_128
      }, {
        t: this.shape_127
      }, {
        t: this.shape_126
      }, {
        t: this.shape_125
      }, {
        t: this.shape_124
      }, {
        t: this.shape_123
      }, {
        t: this.shape_122
      }, {
        t: this.shape_121
      }, {
        t: this.shape_120
      }, {
        t: this.shape_119
      }, {
        t: this.shape_118
      }, {
        t: this.shape_117
      }, {
        t: this.shape_116
      }, {
        t: this.shape_115
      }, {
        t: this.shape_114
      }, {
        t: this.shape_113
      }, {
        t: this.shape_112
      }, {
        t: this.shape_111
      }, {
        t: this.shape_110
      }, {
        t: this.shape_109
      }, {
        t: this.shape_108
      }, {
        t: this.shape_107
      }, {
        t: this.shape_106
      }, {
        t: this.shape_105
      }, {
        t: this.shape_104
      }, {
        t: this.shape_103
      }, {
        t: this.shape_102
      }, {
        t: this.shape_101
      }, {
        t: this.shape_100
      }, {
        t: this.shape_99
      }, {
        t: this.shape_98
      }, {
        t: this.shape_97
      }, {
        t: this.shape_96
      }, {
        t: this.shape_95
      }, {
        t: this.shape_94
      }, {
        t: this.shape_93
      }, {
        t: this.shape_92
      }, {
        t: this.shape_91
      }, {
        t: this.shape_90
      }, {
        t: this.shape_89
      }, {
        t: this.shape_88
      }, {
        t: this.shape_87
      }, {
        t: this.shape_86
      }, {
        t: this.shape_85
      }, {
        t: this.shape_84
      }, {
        t: this.shape_83
      }, {
        t: this.shape_82
      }, {
        t: this.shape_81
      }, {
        t: this.shape_80
      }, {
        t: this.shape_79
      }, {
        t: this.shape_78
      }, {
        t: this.shape_77
      }, {
        t: this.shape_76
      }, {
        t: this.shape_75
      }, {
        t: this.shape_74
      }, {
        t: this.shape_73
      }, {
        t: this.shape_72
      }, {
        t: this.shape_71
      }, {
        t: this.shape_70
      }, {
        t: this.shape_69
      }, {
        t: this.shape_68
      }, {
        t: this.shape_67
      }, {
        t: this.shape_66
      }, {
        t: this.shape_65
      }, {
        t: this.shape_64
      }, {
        t: this.shape_63
      }, {
        t: this.shape_62
      }, {
        t: this.shape_61
      }, {
        t: this.shape_60
      }, {
        t: this.shape_59
      }, {
        t: this.shape_58
      }, {
        t: this.shape_57
      }, {
        t: this.shape_56
      }, {
        t: this.shape_55
      }, {
        t: this.shape_54
      }, {
        t: this.shape_53
      }, {
        t: this.shape_52
      }, {
        t: this.shape_51
      }, {
        t: this.shape_50
      }, {
        t: this.shape_49
      }, {
        t: this.shape_48
      }, {
        t: this.shape_47
      }, {
        t: this.shape_46
      }, {
        t: this.shape_45
      }, {
        t: this.shape_44
      }, {
        t: this.shape_43
      }, {
        t: this.shape_42
      }, {
        t: this.shape_41
      }, {
        t: this.shape_40
      }, {
        t: this.shape_39
      }, {
        t: this.shape_38
      }, {
        t: this.shape_37
      }, {
        t: this.shape_36
      }, {
        t: this.shape_35
      }, {
        t: this.shape_34
      }, {
        t: this.shape_33
      }, {
        t: this.shape_32
      }, {
        t: this.shape_31
      }, {
        t: this.shape_30
      }, {
        t: this.shape_29
      }, {
        t: this.shape_28
      }, {
        t: this.shape_27
      }, {
        t: this.shape_26
      }, {
        t: this.shape_25
      }, {
        t: this.shape_24
      }, {
        t: this.shape_23
      }, {
        t: this.shape_22
      }, {
        t: this.shape_21
      }, {
        t: this.shape_20
      }, {
        t: this.shape_19
      }, {
        t: this.shape_18
      }, {
        t: this.shape_17
      }, {
        t: this.shape_16
      }, {
        t: this.shape_15
      }, {
        t: this.shape_14
      }, {
        t: this.shape_13
      }, {
        t: this.shape_12
      }, {
        t: this.shape_11
      }, {
        t: this.shape_10
      }, {
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
  }).prototype = getMCSymbolPrototype(lib.mc_buildings_Layer_1, null, null);
  (lib.Scene_1_clouds02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // clouds02
    this.mc_clouds02 = new lib.mc_clouds02()
    this.mc_clouds02.name = 'mc_clouds02'
    this.mc_clouds02.parent = this
    this.mc_clouds02.setTransform(852, -8)
    this.mc_clouds02.shadow = new cjs.Shadow('rgba(0,0,0,0.247)', -4, 0, 100)

    this.timeline.addTween(cjs.Tween.get(this.mc_clouds02).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_clouds02, null, null);
  (lib.Scene_1_clouds_small = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // clouds_small
    this.mc_cloudSmall01 = new lib.mc_cloudSmall01()
    this.mc_cloudSmall01.name = 'mc_cloudSmall01'
    this.mc_cloudSmall01.parent = this
    this.mc_cloudSmall01.setTransform(861, 490)
    this.mc_cloudSmall01.shadow = new cjs.Shadow('rgba(0,0,0,0.247)', 3, 3, 10)

    this.mc_cloudSmall02 = new lib.mc_cloudSmall02()
    this.mc_cloudSmall02.name = 'mc_cloudSmall02'
    this.mc_cloudSmall02.parent = this
    this.mc_cloudSmall02.setTransform(826, 487)
    this.mc_cloudSmall02.shadow = new cjs.Shadow('rgba(0,0,0,0.247)', 3, 3, 10)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.mc_cloudSmall02
      }, {
        t: this.mc_cloudSmall01
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_clouds_small, null, null);
  (lib.mc_shadow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1
    this.mc_dropShadow = new lib.mc_dropShadow()
    this.mc_dropShadow.name = 'mc_dropShadow'
    this.mc_dropShadow.parent = this
    this.mc_dropShadow.setTransform(21.8, 11.6, 1, 1, 0, 0, 0, 21.8, 11.6)

    this.timeline.addTween(cjs.Tween.get(this.mc_dropShadow).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_shadow, new cjs.Rectangle(0, 0, 106.6, 96.3), null);
  (lib.mc_lines03 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1_obj_
    this.Layer_1 = new lib.mc_lines03_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(0, 50, 1, 1, 0, 0, 0, 0, 50)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines03, new cjs.Rectangle(-1, -1, 2, 102), null);
  (lib.mc_lines02a = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1_obj_
    this.Layer_1 = new lib.mc_lines02a_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(0, -74.5, 1, 1, 0, 0, 0, 0, -74.5)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines02a, new cjs.Rectangle(-1.5, -149.9, 3, 150.9), null);
  (lib.mc_lines01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1_obj_
    this.Layer_1 = new lib.mc_lines01_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(0, 157, 1, 1, 0, 0, 0, 0, 157)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_lines01, new cjs.Rectangle(-1, 3, 2, 308), null);
  (lib.mc_clouds01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1_obj_
    this.Layer_1 = new lib.mc_clouds01_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(467.5, 506.6, 1, 1, 0, 0, 0, 467.5, 506.6)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_clouds01, new cjs.Rectangle(0, 0, 935.1, 1013.1), null);
  (lib.mc_circle03 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // icon
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('AiyBxQgUAAgPgOQgOgOAAgVQAAgUAOgOQAPgOAUAAIA1AAQgCgJAAgHQAAgOAIgMQAIgMANgFIAABXIgJgJQgCgDgEAAQgEAAgCADQgDACAAAEQAAADADADIAZAZIABABIAAAAIABABIAFAAIACgBIABgBIABgBIAYgYQACgDAAgDQAAgEgCgCQgCgDgEAAQgEAAgDADIgIAJIAAhcIBIAAIAABcIgIgJQgDgDgEAAQgEAAgCADQgGAGAGAGIAYAYIABABIABABIACABIAEAAIABgBIAAAAIABgBIAZgZQADgDAAgDQAAgEgDgCQgCgDgEAAQgEAAgCADIgJAJIAAiHQAPgVAZAAIAhAAIAACcIgJgJQgDgDgDAAQgEAAgDADQgCACAAAEQAAADACADIAYAYIACABIAAABIABAAIABABIAFAAIACgBIAAgBIACgBIAYgYQACgDAAgDQAAgEgCgCQgDgDgEAAQgDAAgDADIgJAJIAAicIAGAAQAUAAAOAPQAPAOAAAUQAAAKgDAFQATACANAOQANAOAAASQAAAKgDAHQAPAFAKANQAKANAAAQQAAAUgOAPQgOAOgUAAg')
    this.shape.setTransform(-0.175, -2.85)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    // circle
    this.instance = new lib.mc_circle()
    this.instance.parent = this
    this.instance.setTransform(0, -0.05)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // circleBg
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#024D6E').s().p('AkBECQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAQiWAAhrhrg')
    this.shape_1.setTransform(0.025, -0.025)

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1))

    // shadow
    this.mc_shadow = new lib.mc_shadow()
    this.mc_shadow.name = 'mc_shadow'
    this.mc_shadow.parent = this
    this.mc_shadow.setTransform(0, 0, 1, 1, 0, 0, 0, 22, 12)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.lf(['#010A21', 'rgba(30,79,112,0)'], [0, 1], 29.6, -24.5, 77.7, 33.2).s().p('AgsgrIBYBYQgsgkgsg0g')
    this.shape_2.setTransform(-26.2, 25.4)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_2
      }, {
        t: this.mc_shadow
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle03, new cjs.Rectangle(-37.5, -37.5, 122.1, 121.8), null);
  (lib.mc_circle02_shadow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // shadow
    this.mc_shadow = new lib.mc_shadow()
    this.mc_shadow.name = 'mc_shadow'
    this.mc_shadow.parent = this
    this.mc_shadow.setTransform(0, 0, 1, 1, 0, 0, 0, 22, 12)

    this.shape = new cjs.Shape()
    this.shape.graphics.lf(['#010A21', 'rgba(30,79,112,0)'], [0, 1], 29.6, -24.5, 77.7, 33.2).s().p('AgsgrIBYBYQgsgkgsg0g')
    this.shape.setTransform(-26.2, 25.4)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape
      }, {
        t: this.mc_shadow
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle02_shadow, null, null);
  (lib.mc_circle02_circle = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // circle
    this.instance = new lib.mc_circle()
    this.instance.parent = this
    this.instance.setTransform(0, -0.05)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle02_circle, null, null);
  (lib.mc_circle02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // timeline functions:
    this.frame_0 = function () {
      this.mc_shadow = this.shadow.mc_shadow
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1))

    // icon_obj_
    this.icon = new lib.mc_circle02_icon()
    this.icon.name = 'icon'
    this.icon.parent = this
    this.icon.setTransform(0.1, -0.1, 1, 1, 0, 0, 0, 0.1, -0.1)
    this.icon.depth = 0
    this.icon.isAttachedToCamera = 0
    this.icon.isAttachedToMask = 0
    this.icon.layerDepth = 0
    this.icon.layerIndex = 0
    this.icon.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.icon).wait(1))

    // circle_obj_
    this.circle = new lib.mc_circle02_circle()
    this.circle.name = 'circle'
    this.circle.parent = this
    this.circle.depth = 0
    this.circle.isAttachedToCamera = 0
    this.circle.isAttachedToMask = 0
    this.circle.layerDepth = 0
    this.circle.layerIndex = 1
    this.circle.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.circle).wait(1))

    // circleBg_obj_
    this.circleBg = new lib.mc_circle02_circleBg()
    this.circleBg.name = 'circleBg'
    this.circleBg.parent = this
    this.circleBg.depth = 0
    this.circleBg.isAttachedToCamera = 0
    this.circleBg.isAttachedToMask = 0
    this.circleBg.layerDepth = 0
    this.circleBg.layerIndex = 2
    this.circleBg.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.circleBg).wait(1))

    // shadow_obj_
    this.shadow = new lib.mc_circle02_shadow()
    this.shadow.name = 'shadow'
    this.shadow.parent = this
    this.shadow.setTransform(26.9, 36.1, 1, 1, 0, 0, 0, 26.9, 36.1)
    this.shadow.depth = 0
    this.shadow.isAttachedToCamera = 0
    this.shadow.isAttachedToMask = 0
    this.shadow.layerDepth = 0
    this.shadow.layerIndex = 3
    this.shadow.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle02, new cjs.Rectangle(-142, -37.5, 226.6, 317.5), null);
  (lib.mc_circle01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // icon
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#FFFFFF').s().p('ABjBxIAAhIIAJAIQAHAHAGgHQACgCAAgEQAAgEgCgCIgZgZIgCgBIgBAAIgBgBIgDAAIgBABIgBAAIgBAAIAAABIgCABIgYAYQgCACAAAEQAAAEACACQAHAHAGgHIAJgIIAABIIhJAAIAAhIIAJAIQAGAHAGgHQADgCAAgEQAAgEgDgCIgZgZIgBgBIAAAAIgBAAIgBgBIgDAAIAAABIgBAAIgBAAIgBABIgBABIgYAYQgDACAAAEQAAAEADACQACADAEAAQAEAAACgDIAJgIIAABIIhIAAIAAhIIAIAIQAHAHAGgHQACgCAAgEQAAgEgCgCIgZgZIgBgBIgBAAIgBAAIgBgBIgDAAIgBABIgBAAIgBAAIAAABIgCABIgYAYQgCACAAAEQAAAEACACQADADAEAAQAEAAACgDIAJgIIAABIIhRAAQgUAAgOgOQgPgOAAgVQAAgUAPgOQAOgPAUAAIA2AAQgCgFAAgKQAAgTAOgOQAPgPAUAAIBRAAQgDgGAAgJQAAgUAPgPQAOgOAUAAIA4AAQAVAAAOAOQAOAPAAAUQAAAHgCAIQATACAMAOQANAOAAASQAAAJgDAIQAQAEAKANQAKAOAAAQQAAAVgPAOQgOAOgUAAg')
    this.shape.setTransform(-0.575, -4.725)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))

    // circle
    this.instance = new lib.mc_circle()
    this.instance.parent = this
    this.instance.setTransform(0, -0.05)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))

    // circleBg
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#024D6E').s().p('AkBECQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAQiWAAhrhrg')
    this.shape_1.setTransform(0.025, -0.025)

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1))

    // shadow
    this.mc_shadow = new lib.mc_shadow()
    this.mc_shadow.name = 'mc_shadow'
    this.mc_shadow.parent = this
    this.mc_shadow.setTransform(0, 0, 1, 1, 0, 0, 0, 22, 12)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.lf(['#010A21', 'rgba(30,79,112,0)'], [0, 1], 29.6, -24.5, 77.7, 33.2).s().p('AgsgrIBYBYQgsgkgsg0g')
    this.shape_2.setTransform(-26.2, 25.4)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.shape_2
      }, {
        t: this.mc_shadow
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_circle01, new cjs.Rectangle(-37.5, -37.5, 122.1, 348.5), null);
  (lib.mc_buildings = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer_1_obj_
    this.Layer_1 = new lib.mc_buildings_Layer_1()
    this.Layer_1.name = 'Layer_1'
    this.Layer_1.parent = this
    this.Layer_1.setTransform(183.1, 102.4, 1, 1, 0, 0, 0, 183.1, 102.4)
    this.Layer_1.depth = 0
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_buildings, new cjs.Rectangle(0, 0, 366.1, 204.9), null);
  (lib.mc_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Sec1

    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('rgba(0,0,0,0)').s().p('EhljAuuMAAAhdbMDLHAAAMAAABdbg')
    this.shape.setTransform(650, 299)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
  }).prototype = getMCSymbolPrototype(lib.mc_bg, new cjs.Rectangle(0, 0, 1351.8, 600.5), null);
  (lib.Scene_1_lines = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // lines
    this.mc_lines02b = new lib.mc_lines02a()
    this.mc_lines02b.name = 'mc_lines02b'
    this.mc_lines02b.parent = this
    this.mc_lines02b.setTransform(892.95, 313.95, 0.9999, 0.9999, 45)

    this.mc_lines02a = new lib.mc_lines02a()
    this.mc_lines02a.name = 'mc_lines02a'
    this.mc_lines02a.parent = this
    this.mc_lines02a.setTransform(893, 465)

    this.mc_joint = new lib.mc_joint()
    this.mc_joint.name = 'mc_joint'
    this.mc_joint.parent = this
    this.mc_joint.setTransform(893, 314)

    this.mc_lines03 = new lib.mc_lines03()
    this.mc_lines03.name = 'mc_lines03'
    this.mc_lines03.parent = this
    this.mc_lines03.setTransform(1100.05, 411.05, 0.9999, 0.9999, 134.9994, 0, 0, 0, -0.1)

    this.mc_lines01 = new lib.mc_lines01()
    this.mc_lines01.name = 'mc_lines01'
    this.mc_lines01.parent = this
    this.mc_lines01.setTransform(800, 532, 1, 1, 180)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.mc_lines01
      }, {
        t: this.mc_lines03
      }, {
        t: this.mc_joint
      }, {
        t: this.mc_lines02a
      }, {
        t: this.mc_lines02b
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_lines, null, null);
  (lib.Scene_1_clouds01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // clouds01
    this.mc_clouds01 = new lib.mc_clouds01()
    this.mc_clouds01.name = 'mc_clouds01'
    this.mc_clouds01.parent = this
    this.mc_clouds01.setTransform(918.4, -280.1)
    this.mc_clouds01.shadow = new cjs.Shadow('rgba(0,0,0,0.247)', 0, 0, 100)

    this.timeline.addTween(cjs.Tween.get(this.mc_clouds01).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_clouds01, null, null);
  (lib.Scene_1_circles = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // circles
    this.mc_circle03 = new lib.mc_circle03()
    this.mc_circle03.name = 'mc_circle03'
    this.mc_circle03.parent = this
    this.mc_circle03.setTransform(1024, 335)

    this.mc_circle02 = new lib.mc_circle02()
    this.mc_circle02.name = 'mc_circle02'
    this.mc_circle02.parent = this
    this.mc_circle02.setTransform(1024, 184)

    this.mc_circle01 = new lib.mc_circle01()
    this.mc_circle01.name = 'mc_circle01'
    this.mc_circle01.parent = this
    this.mc_circle01.setTransform(800, 213)

    this.timeline.addTween(cjs.Tween.get({}).to({
      state: [{
        t: this.mc_circle01
      }, {
        t: this.mc_circle02
      }, {
        t: this.mc_circle03
      }]
    }).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_circles, null, null);
  (lib.Scene_1_buildings = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // buildings
    this.mc_buildings = new lib.mc_buildings()
    this.mc_buildings.name = 'mc_buildings'
    this.mc_buildings.parent = this
    this.mc_buildings.setTransform(769, 393)

    this.timeline.addTween(cjs.Tween.get(this.mc_buildings).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_buildings, null, null);
  (lib.Scene_1_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // bg
    this.instance = new lib.mc_bg()
    this.instance.parent = this

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Scene_1_bg, null, null);

  // stage content:
  (lib.initialize = function (mode, startPosition, loop) {
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
      this.mc_cloudSmall02 = this.clouds_small.mc_cloudSmall02
      this.mc_cloudSmall01 = this.clouds_small.mc_cloudSmall01
      this.mc_buildings = this.buildings.mc_buildings
      this.mc_circle01 = this.circles.mc_circle01
      this.mc_circle02 = this.circles.mc_circle02
      this.mc_circle03 = this.circles.mc_circle03
      this.mc_lines01 = this.lines.mc_lines01
      this.mc_lines03 = this.lines.mc_lines03
      this.mc_joint = this.lines.mc_joint
      this.mc_lines02a = this.lines.mc_lines02a
      this.mc_lines02b = this.lines.mc_lines02b
      this.mc_clouds01 = this.clouds01.mc_clouds01
      this.mc_clouds02 = this.clouds02.mc_clouds02
      s = this

      mc_clouds01 = s.mc_clouds01
      mc_clouds02 = s.mc_clouds02

      mc_circle01 = s.mc_circle01
      mc_circle02 = s.mc_circle02
      mc_circle03 = s.mc_circle03

      mc_cloudSmall01 = s.mc_cloudSmall01
      mc_cloudSmall02 = s.mc_cloudSmall02

      mc_lines01 = s.mc_lines01
      mc_lines02a = s.mc_lines02a
      mc_lines02b = s.mc_lines02b
      mc_lines03 = s.mc_lines03

      mc_joint = s.mc_joint

      mc_shadow01 = s.mc_circle01.mc_shadow
      mc_shadow02 = s.mc_circle02.mc_shadow
      mc_shadow03 = s.mc_circle03.mc_shadow

      TweenMax.to(mc_clouds01, 10, {
        x: '-=50', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
      })
      TweenMax.to(mc_clouds02, 12, {
        x: '-=50', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
      })

      TweenMax.set(mc_cloudSmall01, {
        x: '-=100', delay: 0
      })
      TweenMax.to(mc_cloudSmall01, 12, {
        x: '+=50', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
      })

      TweenMax.set(mc_cloudSmall02, {
        x: '-=100', delay: 0
      })
      TweenMax.to(mc_cloudSmall02, 10, {
        x: '+=50', yoyo: true, repeat: -1, ease: Power1.easeInOut, delay: 0
      })

      TweenMax.from(mc_lines01, 1, {
        scaleY: 0, ease: Power4.easeInOut, delay: 0
      })
      TweenMax.from(mc_circle01, 0.5, {
        scaleX: 0, scaleY: 0, ease: Back.easeOut, delay: 0.7
      })

      TweenMax.from(mc_lines02a, 0.75, {
        scaleY: 0, ease: Power4.easeIn, delay: 1
      })
      TweenMax.from(mc_joint, 0.5, {
        alpha: 0, scaleX: 0, scaleY: 0, ease: Back.easeOut, delay: 1.7
      })
      TweenMax.from(mc_lines02b, 0.75, {
        scaleY: 0, ease: Power4.easeOut, delay: 1.7
      })
      TweenMax.from(mc_circle02, 0.5, {
        scaleX: 0, scaleY: 0, ease: Back.easeOut, delay: 1.95
      })

      TweenMax.from(mc_lines03, 1, {
        scaleY: 0, ease: Power4.easeInOut, delay: 0.5
      })
      TweenMax.from(mc_circle03, 0.5, {
        scaleX: 0, scaleY: 0, ease: Back.easeOut, delay: 1.2
      })

      TweenMax.to(mc_circle01, 1, {
        scaleX: 1.05,
        scaleY: 1.05,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        delay: 2
      })
      TweenMax.to(mc_circle02, 1, {
        scaleX: 1.05,
        scaleY: 1.05,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        delay: 2.35
      })
      TweenMax.to(mc_circle03, 1, {
        scaleX: 1.05,
        scaleY: 1.05,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        delay: 2.65
      })

      this.stop()
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1))

    // clouds_small_obj_
    this.clouds_small = new lib.Scene_1_clouds_small()
    this.clouds_small.name = 'clouds_small'
    this.clouds_small.parent = this
    this.clouds_small.setTransform(868.6, 504.4, 1, 1, 0, 0, 0, 868.6, 504.4)
    this.clouds_small.depth = 0
    this.clouds_small.isAttachedToCamera = 0
    this.clouds_small.isAttachedToMask = 0
    this.clouds_small.layerDepth = 0
    this.clouds_small.layerIndex = 0
    this.clouds_small.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.clouds_small).wait(1))

    // buildings_obj_
    this.buildings = new lib.Scene_1_buildings()
    this.buildings.name = 'buildings'
    this.buildings.parent = this
    this.buildings.setTransform(952.1, 495.4, 1, 1, 0, 0, 0, 952.1, 495.4)
    this.buildings.depth = 0
    this.buildings.isAttachedToCamera = 0
    this.buildings.isAttachedToMask = 0
    this.buildings.layerDepth = 0
    this.buildings.layerIndex = 1
    this.buildings.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.buildings).wait(1))

    // circles_obj_
    this.circles = new lib.Scene_1_circles()
    this.circles.name = 'circles'
    this.circles.parent = this
    this.circles.setTransform(935.5, 282.9, 1, 1, 0, 0, 0, 935.5, 282.9)
    this.circles.depth = 0
    this.circles.isAttachedToCamera = 0
    this.circles.isAttachedToMask = 0
    this.circles.layerDepth = 0
    this.circles.layerIndex = 2
    this.circles.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.circles).wait(1))

    // lines_obj_
    this.lines = new lib.Scene_1_lines()
    this.lines.name = 'lines'
    this.lines.parent = this
    this.lines.setTransform(950.2, 369.4, 1, 1, 0, 0, 0, 950.2, 369.4)
    this.lines.depth = 0
    this.lines.isAttachedToCamera = 0
    this.lines.isAttachedToMask = 0
    this.lines.layerDepth = 0
    this.lines.layerIndex = 3
    this.lines.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.lines).wait(1))

    // clouds01_obj_
    this.clouds01 = new lib.Scene_1_clouds01()
    this.clouds01.name = 'clouds01'
    this.clouds01.parent = this
    this.clouds01.setTransform(1385.9, 226.5, 1, 1, 0, 0, 0, 1385.9, 226.5)
    this.clouds01.depth = 0
    this.clouds01.isAttachedToCamera = 0
    this.clouds01.isAttachedToMask = 0
    this.clouds01.layerDepth = 0
    this.clouds01.layerIndex = 4
    this.clouds01.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.clouds01).wait(1))

    // clouds02_obj_
    this.clouds02 = new lib.Scene_1_clouds02()
    this.clouds02.name = 'clouds02'
    this.clouds02.parent = this
    this.clouds02.setTransform(1261, 318.2, 1, 1, 0, 0, 0, 1261, 318.2)
    this.clouds02.depth = 0
    this.clouds02.isAttachedToCamera = 0
    this.clouds02.isAttachedToMask = 0
    this.clouds02.layerDepth = 0
    this.clouds02.layerIndex = 5
    this.clouds02.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.clouds02).wait(1))

    // bg_obj_
    this.bg = new lib.Scene_1_bg()
    this.bg.name = 'bg'
    this.bg.parent = this
    this.bg.setTransform(675.9, 300.2, 1, 1, 0, 0, 0, 675.9, 300.2)
    this.bg.depth = 0
    this.bg.isAttachedToCamera = 0
    this.bg.isAttachedToMask = 0
    this.bg.layerDepth = 0
    this.bg.layerIndex = 6
    this.bg.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.bg).wait(1))
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(650, -86.1, 1312.4, 928)
  // library properties:
  lib.properties = {
    id: '75E5B44073054A3BB18A39FF12D81F5E',
    width: 1300,
    height: 598,
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
  an.compositions['75E5B44073054A3BB18A39FF12D81F5E'] = {
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

  // Layer depth API:
  AdobeAn.Layer = new function () {
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
})(createjs = createjs || {}, window.AdobeAn = {})
