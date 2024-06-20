window.CanvasSlideshow = function (e) {
    var t = this;
    (e = e || {}).stageWidth = e.hasOwnProperty("stageWidth") ? e.stageWidth : 2e3, e.stageHeight = e.hasOwnProperty("stageHeight") ? e.stageHeight : 1125, 
    e.pixiSprites = e.hasOwnProperty("sprites") ? e.sprites : [], 
    e.centerSprites = !!e.hasOwnProperty("centerSprites") && e.centerSprites, e.texts = e.hasOwnProperty("texts") ? e.texts : [],
    e.autoPlay = !e.hasOwnProperty("autoPlay") || e.autoPlay, e.autoPlaySpeed = e.hasOwnProperty("autoPlaySpeed") ? e.autoPlaySpeed : [10, 3], 
    e.fullScreen = !e.hasOwnProperty("fullScreen") || e.fullScreen, e.displaceScale = e.hasOwnProperty("displaceScale") ? e.displaceScale : [200, 70], 
    e.displacementImage = e.hasOwnProperty("displacementImage") ? e.displacementImage : "", e.navElement = e.hasOwnProperty("navElement") ? 
    e.navElement : document.querySelectorAll(".scene-nav"), e.displaceAutoFit = !!e.hasOwnProperty("displaceAutoFit") && e.displaceAutoFit, 
    e.wacky = !!e.hasOwnProperty("wacky") && e.wacky, e.interactive = !!e.hasOwnProperty("interactive") && e.interactive, 
    e.interactionEvent = e.hasOwnProperty("interactionEvent") ? e.interactionEvent : "", e.displaceScaleTo = !1 === e.autoPlay ? [0, 0] : [20, 20], 
    e.textColor = e.hasOwnProperty("textColor") ? e.textColor : "#fff", e.displacementCenter = !!e.hasOwnProperty("displacementCenter") && e.displacementCenter, 
    e.dispatchPointerOver = !!e.hasOwnProperty("dispatchPointerOver") && e.dispatchPointerOver;
    var a = new PIXI.autoDetectRenderer(e.stageWidth, e.stageHeight, {
            transparent: !0
        }),
        n = new PIXI.Container,
        i = new PIXI.Container,
        r = new PIXI.Sprite.fromImage(e.displacementImage),
        o = new PIXI.filters.DisplacementFilter(r);
    this.initPixi = function () 
    {
        document.getElementById("mapParallax").appendChild(a.view), n.addChild(i), n.interactive = !0, a.view.style.width = "100%", 
        a.view.style.height = "100%", a.view.style.top = "50%", a.view.style.left = "50%", a.view.style.webkitTransform = "translate( -50%, -50% ) scale(1.2)", 
        a.view.style.transform = "translate( -50%, -50% ) scale(1.2)", a.view.style.touchAction = "auto", 
        a.plugins.interaction.autoPreventDefault = !1, r.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, n.filters = [o], !0 === e.wacky && (r.anchor.set(.5), 
        r.x = a.width / 2, r.y = a.height / 2), 
        r.scale.x = 2, r.scale.y = 2, o.autoFit = e.displaceAutoFit, n.addChild(r)
    }, 
    this.loadPixiSprites = function (t) {
        for (var n = e.sprites, r = (e.texts, 0); r < n.length; r++) {
            var o = new PIXI.Texture.fromImage(t[r]),
                s = new PIXI.Sprite(o);
            !0 === e.centerSprites && (s.anchor.set(.5), s.x = a.width / 2, s.y = a.height / 2), 0 !== r && TweenMax.set(s, {
                alpha: 0
            }), i.addChild(s)
        }
    };
    var s, l, c, p = new PIXI.ticker.Ticker;
    (p.autoStart = e.autoPlay, p.add(function (t) {
        r.x += e.autoPlaySpeed[0] * t * .1, r.y += .1 * e.autoPlaySpeed[1], a.render(n)
    }), this.init = function () {
        t.initPixi(), t.loadPixiSprites(e.pixiSprites)
    }, !0 === e.interactive) && (i.interactive = !0, i.buttonMode = !0, "hover" !== e.interactionEvent && "both" !== e.interactionEvent || (i.pointerover = function (e) {
        l = e.data.global.x, c = e.data.global.y, TweenMax.to(o.scale, 1, {
            x: "+=" + 100 * Math.sin(l),
            y: "+=" + 100 * Math.cos(c)
        })
    }, i.pointerout = function (t) {
        !0 === e.dispatchPointerOver ? TweenMax.to(o.scale, 1, {
            x: 0,
            y: 0,
            onComplete: function () {
                TweenMax.to(o.scale, 1, {
                    x: 20,
                    y: 20
                })
            }
        }) : (TweenMax.to(o.scale, 1, {
            x: 0,
            y: 0
        }), cancelAnimationFrame(s))
    }), "click" !== e.interactionEvent && "both" !== e.interactionEvent || (i.pointerup = function (t) {
        !0 === e.dispatchPointerOver ? TweenMax.to(o.scale, 1, {
            x: 0,
            y: 0,
            onComplete: function () {
                TweenMax.to(o.scale, 1, {
                    x: 20,
                    y: 20
                })
            }
        }) : (TweenMax.to(o.scale, 1, {
            x: 0,
            y: 0
        }), cancelAnimationFrame(s))
    }, i.pointerdown = function (e) {
        l = e.data.global.x, c = e.data.global.y, TweenMax.to(o.scale, 1, {
            x: "+=" + 1200 * Math.sin(l),
            y: "+=" + 200 * Math.cos(c)
        })
    }));
    !0 === e.displacementCenter && (r.anchor.set(.5), r.x = a.view.width / 2, r.y = a.view.height / 2), this.init()
};


