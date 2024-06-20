Vue.component("slide-show", {
    template: "#slideshowTemplate",
    props: {
        data: null,
        text: null,
        startIndex: {
            default: function () {
                return 0
            }
        },
        autoplay: {
            default: function () {
                return null
            }
        },
        classChange: {
            default: function () {
                return null
            }
        },
        options: {
            default: function () {
                return {
                    autoplay: {
                        delay: 3e3,
                        isActive: !0
                    },
                    pagination: {
                        isActive: !0
                    },
                    nextPrev: {
                        isActive: !0
                    },
                    mouseOver: {
                        isActive: !0,
                        overChange: !1
                    },
                    progressBar: {
                        isActive: !1
                    },
                    timer: {
                        isActive: !1
                    }
                }
            }
        }
    },
    data: function () {
        return {
            slideDirection: null,
            current: 0,
            isClicked: !1,
            hover: -1,
            isSwiping: !1,
            isRotation: !1,
            element: null,
            parentElement: null
        }
    },
    computed: {
        canClick: function () {
            return !0 !== this.isClicked
        },
        hoverStop: function () {
            return !0 === this.options.mouseOver.isActive
        },
        timerActive: function () {
            return !0 === this.options.timer.isActive
        },
        className: function () {
            return null === this.classChange ? "slide-show" : "slide-show " + this.classChange
        },
        classSelect: function () {
            return null === this.classChange ? ".slide-show" : ".slide-show." + this.classChange
        }
    },
    mounted: function () {
        console.log(this.data), this.current = this.startIndex, !0 === this.timerActive && (this.parentElement = document.querySelector(this.classSelect + " .svgBorder"), this.parentElement && (this.element = this.parentElement.querySelectorAll("path"))), this.startRotation()
    },
    methods: {
        directionCheck: function (t) {
            this.slideDirection = t
        },
        paginationMouseEvent: function () {
            var t = this;
            return {
                mouseOver: function (e) {
                    !0 === t.options.mouseOver.overChange ? t.suddenSlideTo(e) : t.hover = e
                },
                mouseLeave: function () {
                    if (!0 === t.options.mouseOver.overChange) return !1;
                    t.hover = -1
                }
            }
        },
        panstart: function () {
            this.isSwiping = !0
        },
        panend: function () {
            this.isSwiping = !1
        },
        progressClass: function () {
            return "progress" + (this.current + 1) + "-" + this.data.length + " hover" + (this.hover + 1) + "-" + this.data.length
        },
        prev: function () {
            if (!0 === this.isClicked) return !1;
            var t;
            this.isClicked = !0, this.directionCheck("left"), this.stopRotation(), t = this.current - 1 < 0 ? this.data.length - 1 : this.current - 1, this.changeIndex(t), this.returnNormalClick()
        },
        next: function () {
            if (!0 === this.isClicked) return !1;
            var t;
            this.isClicked = !0, this.stopRotation(), this.directionCheck("right"), t = this.current < this.data.length - 1 ? this.current + 1 : 0, this.changeIndex(t), this.returnNormalClick()
        },
        preventDoubleClick: function () {
            return 1 != this.isClicked && (this.isClicked = !0, !0)
        },
        returnNormalClick: function () {
            var t = this;
            setTimeout(function () {
                t.startRotation(), t.isClicked = !1
            }, 400)
        },
        changeIndex: function (t) {
            var e = this;
            setTimeout(function () {
                e.current = t
            }, 100)
        },
        startRotation: function () {
            var t = this;
            if (!1 === this.options.autoplay.isActive) return !1;
            clearTimeout(this.timer), !0 === this.timerActive && this.element && (new TimelineMax).add(TweenMax.to(this.parentElement, .01, {
                scaleX: -1
            })).add(TweenMax.fromTo(this.element, .4, {
                strokeDashoffset: 0
            }, {
                strokeDashoffset: 138.24948120117188
            })).add(TweenMax.to(this.parentElement, .01, {
                scaleX: 1
            })).add(TweenMax.fromTo(this.element, this.options.autoplay.delay / 1e3, {
                strokeDashoffset: 138.24948120117188
            }, {
                strokeDashoffset: 0
            }).delay(.2)), t.timer = setTimeout(function () {
                t.next()
            }, t.options.autoplay.delay)
        },
        back: function () {
            !0 === this.timerActive && this.element && TweenMax.to(this.element, .2, {
                strokeDashoffset: 0
            })
        },
        stopRotation: function () {
            if (null === this.options.autoplay.isActive) return !1;
            this.back(), clearTimeout(this.timer), this.timer = null
        },
        slideTo: function (t) {
            if (!0 === this.isClicked) return !1;
            this.isClicked = !0, this.stopRotation(), t < this.current ? this.directionCheck("left") : this.directionCheck("right"), this.changeIndex(t), this.returnNormalClick()
        },
        suddenSlideTo: function (t) {
            if (!0 === this.isClicked) return !1;
            this.isClicked = !0, this.stopRotation(), t < this.current ? this.directionCheck("left") : this.directionCheck("right"), this.current = t, this.startRotation(), this.isClicked = !1
        },
        mouseOver: function () {
            if (!1 === this.hoverStop) return !1;
            this.stopRotation()
        },
        mouseLeave: function () {
            if (!1 === this.hoverStop) return !1;
            this.startRotation()
        },
        bgStyle: function (t) {
            return t ? "background:url('" + t + "') center center / cover no-repeat;" : t
        },
        base64decode: function (t) {
            return t ? Base64.decode(t) : t
        }
    }
});