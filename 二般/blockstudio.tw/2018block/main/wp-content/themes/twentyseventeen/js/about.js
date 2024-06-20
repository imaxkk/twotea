! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";

    function e(e, t) {
        var a = [],
            s = 0;
        if (e && !t && e instanceof i) return e;
        if (e)
            if ("string" == typeof e) {
                var r, n, o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (n = document.createElement(l)).innerHTML = o, s = 0; s < n.childNodes.length; s += 1) a.push(n.childNodes[s])
                } else
                    for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], s = 0; s < r.length; s += 1) r[s] && a.push(r[s])
            } else if (e.nodeType || e === window || e === document) a.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (s = 0; s < e.length; s += 1) a.push(e[s]);
        return new i(a)
    }

    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    var a = "undefined" == typeof window ? {
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {}
            },
            Image: function () {},
            Date: function () {},
            screen: {}
        } : window,
        i = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };
    e.fn = i.prototype, e.Class = i, e.Dom7 = i, "resize scroll".split(" ");
    var s = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function (e, t) {
            var a = arguments,
                i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var s = 0; s < this.length; s += 1)
                    if (2 === a.length) i[s].setAttribute(e, t);
                    else
                        for (var r in e) i[s][r] = e[r], i[s].setAttribute(r, e[r]);
                return this
            }
            if (this[0]) return this[0].getAttribute(e)
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                if (s) return s
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        },
        on: function () {
            function t(t) {
                var a = t.target;
                if (a) {
                    var i = t.target.dom7EventData || [];
                    if (i.unshift(t), e(a).is(o)) l.apply(a, i);
                    else
                        for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i)
                }
            }

            function a(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.unshift(e), l.apply(this, t)
            }
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            var r, n = i[0],
                o = i[1],
                l = i[2],
                d = i[3];
            "function" == typeof i[1] && (n = (r = i)[0], l = r[1], d = r[2], o = void 0);
            d || (d = !1);
            for (var p, c = n.split(" "), u = 0; u < this.length; u += 1) {
                var h = this[u];
                if (o)
                    for (p = 0; p < c.length; p += 1) h.dom7LiveListeners || (h.dom7LiveListeners = []), h.dom7LiveListeners.push({
                        type: n,
                        listener: l,
                        proxyListener: t
                    }), h.addEventListener(c[p], t, d);
                else
                    for (p = 0; p < c.length; p += 1) h.dom7Listeners || (h.dom7Listeners = []), h.dom7Listeners.push({
                        type: n,
                        listener: l,
                        proxyListener: a
                    }), h.addEventListener(c[p], a, d)
            }
            return this
        },
        off: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i = e[0],
                s = e[1],
                r = e[2],
                n = e[3];
            "function" == typeof e[1] && (i = (a = e)[0], r = a[1], n = a[2], s = void 0);
            n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var p = this[d];
                    if (s) {
                        if (p.dom7LiveListeners)
                            for (var c = 0; c < p.dom7LiveListeners.length; c += 1) r ? p.dom7LiveListeners[c].listener === r && p.removeEventListener(o[l], p.dom7LiveListeners[c].proxyListener, n) : p.dom7LiveListeners[c].type === o[l] && p.removeEventListener(o[l], p.dom7LiveListeners[c].proxyListener, n)
                    } else if (p.dom7Listeners)
                        for (var u = 0; u < p.dom7Listeners.length; u += 1) r ? p.dom7Listeners[u].listener === r && p.removeEventListener(o[l], p.dom7Listeners[u].proxyListener, n) : p.dom7Listeners[u].type === o[l] && p.removeEventListener(o[l], p.dom7Listeners[u].proxyListener, n)
                }
            return this
        },
        trigger: function () {
            for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r], {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (o = document.createEvent("Event")).initEvent(i[r], !0, !0), o.detail = s
                    }
                    e[n].dom7EventData = t.filter(function (e, t) {
                        return t > 0
                    }), e[n].dispatchEvent(o), e[n].dom7EventData = [], delete e[n].dom7EventData
                }
            return this
        },
        transitionEnd: function (e) {
            function t(r) {
                if (r.target === this)
                    for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t)
            }
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e)
                for (a = 0; a < i.length; a += 1) s.on(i[a], t);
            return this
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = document.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === window ? window.scrollY : e.scrollTop,
                    n = e === window ? window.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            var t = this;
            if (!e) return this;
            for (var a = 0; a < this.length; a += 1)
                if (!1 === e.call(t[a], a, t[a])) return t;
            return this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (t) {
            var a, s, r = this[0];
            if (!r || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (r.matches) return r.matches(t);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                if (r.msMatchesSelector) return r.msMatchesSelector(t);
                for (a = e(t), s = 0; s < a.length; s += 1)
                    if (a[s] === r) return !0;
                return !1
            }
            if (t === document) return r === document;
            if (t === window) return r === window;
            if (t.nodeType || t instanceof i) {
                for (a = t.nodeType ? [t] : t, s = 0; s < a.length; s += 1)
                    if (a[s] === r) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return e > a - 1 ? new i([]) : e < 0 ? new i((t = a + e) < 0 ? [] : [this[t]]) : new i([this[e]])
        },
        append: function () {
            for (var e = this, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var s, r = 0; r < t.length; r += 1) {
                s = t[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof s) {
                        var o = document.createElement("div");
                        for (o.innerHTML = s; o.firstChild;) e[n].appendChild(o.firstChild)
                    } else if (s instanceof i)
                    for (var l = 0; l < s.length; l += 1) e[n].appendChild(s[l]);
                else e[n].appendChild(s)
            }
            return this
        },
        prepend: function (e) {
            var t, a, s = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var r = document.createElement("div");
                    for (r.innerHTML = e, a = r.childNodes.length - 1; a >= 0; a -= 1) s[t].insertBefore(r.childNodes[a], s[t].childNodes[0])
                } else if (e instanceof i)
                for (a = 0; a < e.length; a += 1) s[t].insertBefore(e[a], s[t].childNodes[0]);
            else s[t].insertBefore(e, s[t].childNodes[0]);
            return this
        },
        next: function (t) {
            return new i(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        },
        nextAll: function (t) {
            var a = [],
                s = this[0];
            if (!s) return new i([]);
            for (; s.nextElementSibling;) {
                var r = s.nextElementSibling;
                t ? e(r).is(t) && a.push(r) : a.push(r), s = r
            }
            return new i(a)
        },
        prev: function (t) {
            if (this.length > 0) {
                var a = this[0];
                return new i(t ? a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : [] : a.previousElementSibling ? [a.previousElementSibling] : [])
            }
            return new i([])
        },
        prevAll: function (t) {
            var a = [],
                s = this[0];
            if (!s) return new i([]);
            for (; s.previousElementSibling;) {
                var r = s.previousElementSibling;
                t ? e(r).is(t) && a.push(r) : a.push(r), s = r
            }
            return new i(a)
        },
        parent: function (a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
            return e(t(s))
        },
        parents: function (a) {
            for (var i = [], s = 0; s < this.length; s += 1)
                for (var r = this[s].parentNode; r;) a ? e(r).is(a) && i.push(r) : i.push(r), r = r.parentNode;
            return e(t(i))
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var s = this[a].querySelectorAll(e), r = 0; r < s.length; r += 1) t.push(s[r]);
            return new i(t)
        },
        children: function (a) {
            for (var s = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) a ? 1 === n[o].nodeType && e(n[o]).is(a) && s.push(n[o]) : 1 === n[o].nodeType && s.push(n[o]);
            return new i(t(s))
        },
        remove: function () {
            for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this
        },
        add: function () {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i, s, r = this;
            for (i = 0; i < t.length; i += 1) {
                var n = e(t[i]);
                for (s = 0; s < n.length; s += 1) r[r.length] = n[s], r.length += 1
            }
            return r
        },
        styles: function () {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(s).forEach(function (t) {
        e.fn[t] = s[t]
    });
    var r = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e, t) {
                void 0 === t && (t = "x");
                var i, s, r, n = a.getComputedStyle(e, null);
                return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
            },
            parseUrlQuery: function (e) {
                var t, i, s, r, n = {},
                    o = e || a.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e
                        })).length, t = 0; t < r; t += 1) s = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return n
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var n = Object.keys(Object(s)), o = 0, l = n.length; o < l; o += 1) {
                            var d = n[o],
                                p = Object.getOwnPropertyDescriptor(s, d);
                            void 0 !== p && p.enumerable && (r.isObject(a[d]) && r.isObject(s[d]) ? r.extend(a[d], s[d]) : !r.isObject(a[d]) && r.isObject(s[d]) ? (a[d] = {}, r.extend(a[d], s[d])) : a[d] = s[d])
                        }
                }
                return a
            }
        },
        n = "undefined" == typeof document ? {
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return {}
            },
            querySelectorAll: function () {
                return []
            },
            createElement: function () {
                return {
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        o = {
            touch: a.Modernizr && !0 === a.Modernizr.touch || !!("ontouchstart" in a || a.DocumentTouch && n instanceof a.DocumentTouch),
            transforms3d: a.Modernizr && !0 === a.Modernizr.csstransforms3d || function () {
                var e = n.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function () {
                for (var e = n.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
            passiveListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    a.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in a
        },
        l = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
                t.on(e, t.params.on[e])
            })
        },
        d = {
            components: {}
        };
    l.prototype.on = function (e, t) {
        var a = this;
        return "function" != typeof t ? a : (e.split(" ").forEach(function (e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t)
        }), a)
    }, l.prototype.once = function (e, t) {
        var a = this;
        return "function" != typeof t ? a : a.on(e, function i() {
            for (var s = [], r = arguments.length; r--;) s[r] = arguments[r];
            t.apply(a, s), a.off(e, i)
        })
    }, l.prototype.off = function (e, t) {
        var a = this;
        return e.split(" ").forEach(function (e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e].forEach(function (i, s) {
                i === t && a.eventsListeners[e].splice(s, 1)
            })
        }), a
    }, l.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, i)
                })
            }
        }), r) : r
    }, l.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a];
            i.params && r.extend(e, i.params)
        })
    }, l.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a],
                s = e[a] || {};
            i.instance && Object.keys(i.instance).forEach(function (e) {
                var a = i.instance[e];
                t[e] = "function" == typeof a ? a.bind(t) : a
            }), i.on && t.on && Object.keys(i.on).forEach(function (e) {
                t.on(e, i.on[e])
            }), i.create && i.create.bind(t)(s)
        })
    }, d.components.set = function (e) {
        this.use && this.use(e)
    }, l.installModule = function (e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = e.name || Object.keys(i.prototype.modules).length + "_" + r.now();
        return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            i.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function (t) {
            i[t] = e.static[t]
        }), e.install && e.install.apply(i, t), i
    }, l.use = function (e) {
        for (var t = [], a = arguments.length - 1; a-- > 0;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(l, d);
    var p = {
            updateSize: function () {
                var e, t, a = this,
                    i = a.$el;
                e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), r.extend(a, {
                    width: e,
                    height: t,
                    size: a.isHorizontal() ? e : t
                }))
            },
            updateSlides: function () {
                var e = this,
                    t = e.params,
                    a = e.$wrapperEl,
                    i = e.size,
                    s = e.rtl,
                    n = e.wrongRTL,
                    l = a.children("." + e.params.slideClass),
                    d = e.virtual && t.virtual.enabled ? e.virtual.slides.length : l.length,
                    p = [],
                    c = [],
                    u = [],
                    h = t.slidesOffsetBefore;
                "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
                var f = t.slidesOffsetAfter;
                "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                var v = d,
                    m = e.snapGrid.length,
                    g = e.snapGrid.length,
                    b = t.spaceBetween,
                    w = -h,
                    y = 0,
                    x = 0;
                if (void 0 !== i) {
                    var T, E;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, s ? l.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : l.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && (T = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var S, C = t.slidesPerColumn, M = T / C, z = M - (t.slidesPerColumn * M - d), P = 0; P < d; P += 1) {
                        S = 0;
                        var k = l.eq(P);
                        if (t.slidesPerColumn > 1) {
                            var $ = void 0,
                                I = void 0,
                                L = void 0;
                            "column" === t.slidesPerColumnFill ? (L = P - (I = Math.floor(P / C)) * C, (I > z || I === z && L === C - 1) && (L += 1) >= C && (L = 0, I += 1), $ = I + L * T / C, k.css({
                                "-webkit-box-ordinal-group": $,
                                "-moz-box-ordinal-group": $,
                                "-ms-flex-order": $,
                                "-webkit-order": $,
                                order: $
                            })) : I = P - (L = Math.floor(P / M)) * M, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", L)
                        }
                        "none" !== k.css("display") && ("auto" === t.slidesPerView ? (S = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0), t.roundLengths && (S = Math.floor(S))) : (S = (i - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (S = Math.floor(S)), l[P] && (e.isHorizontal() ? l[P].style.width = S + "px" : l[P].style.height = S + "px")), l[P] && (l[P].swiperSlideSize = S), u.push(S), t.centeredSlides ? (w = w + S / 2 + y / 2 + b, 0 === y && 0 !== P && (w = w - i / 2 - b), 0 === P && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), x % t.slidesPerGroup == 0 && p.push(w), c.push(w)) : (x % t.slidesPerGroup == 0 && p.push(w), c.push(w), w = w + S + b), e.virtualSize += S + b, y = S, x += 1)
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, i) + f, s && n && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }), o.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : a.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (S + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : a.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        E = [];
                        for (var D = 0; D < p.length; D += 1) p[D] < e.virtualSize + p[0] && E.push(p[D]);
                        p = E
                    }
                    if (!t.centeredSlides) {
                        E = [];
                        for (var O = 0; O < p.length; O += 1) p[O] <= e.virtualSize - i && E.push(p[O]);
                        p = E, Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
                    }
                    0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: b + "px"
                    }) : l.css({
                        marginRight: b + "px"
                    }) : l.css({
                        marginBottom: b + "px"
                    })), r.extend(e, {
                        slides: l,
                        snapGrid: p,
                        slidesGrid: c,
                        slidesSizesGrid: u
                    }), d !== v && e.emit("slidesLengthChange"), p.length !== m && e.emit("snapGridLengthChange"), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function () {
                var e, t = this,
                    a = [],
                    i = 0;
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                        var s = t.activeIndex + e;
                        if (s > t.slides.length) break;
                        a.push(t.slides.eq(s)[0])
                    } else a.push(t.slides.eq(t.activeIndex)[0]);
                for (e = 0; e < a.length; e += 1)
                    if (void 0 !== a[e]) {
                        var r = a[e].offsetHeight;
                        i = r > i ? r : i
                    } i && t.$wrapperEl.css("height", i + "px")
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.slides,
                    s = t.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    s && (r = e), i.removeClass(a.slideVisibleClass);
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                        if (a.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset),
                                p = d + t.slidesSizesGrid[n];
                            (d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass)
                        }
                        o.progress = s ? -l : l
                    }
                }
            },
            updateProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    n = t.isBeginning,
                    o = t.isEnd,
                    l = n,
                    d = o;
                0 === i ? (s = 0, n = !0, o = !0) : (n = (s = (e - t.minTranslate()) / i) <= 0, o = s >= 1), r.extend(t, {
                    progress: s,
                    isBeginning: n,
                    isEnd: o
                }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !n || d && !o) && t.emit("fromEdge"), t.emit("progress", s)
            },
            updateSlidesClasses: function () {
                var e, t = this,
                    a = t.slides,
                    i = t.params,
                    s = t.$wrapperEl,
                    r = t.activeIndex,
                    n = t.realIndex,
                    o = t.virtual && i.virtual.enabled;
                a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
                var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
                var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (e) {
                var t, a = this,
                    i = a.rtl ? a.translate : -a.translate,
                    s = a.slidesGrid,
                    n = a.snapGrid,
                    o = a.params,
                    l = a.activeIndex,
                    d = a.realIndex,
                    p = a.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? c = u : i >= s[u] && i < s[u + 1] && (c = u + 1) : i >= s[u] && (c = u);
                    o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((t = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(c / o.slidesPerGroup)) >= n.length && (t = n.length - 1), c !== l) {
                    var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    r.extend(a, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: l,
                        activeIndex: c
                    }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange")
                } else t !== p && (a.snapIndex = t, a.emit("snapIndexChange"))
            },
            updateClickedSlide: function (t) {
                var a = this,
                    i = a.params,
                    s = e(t.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (s)
                    for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
                if (!s || !r) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
                a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
            }
        },
        c = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    a = t.params,
                    i = t.rtl,
                    s = t.translate,
                    n = t.$wrapperEl;
                if (a.virtualTranslate) return i ? -s : s;
                var o = r.getTranslate(n[0], e);
                return i && (o = -o), o || 0
            },
            setTranslate: function (e, t) {
                var a = this,
                    i = a.rtl,
                    s = a.params,
                    r = a.$wrapperEl,
                    n = a.progress,
                    l = 0,
                    d = 0;
                a.isHorizontal() ? l = i ? -e : e : d = e, s.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.virtualTranslate || (o.transforms3d ? r.transform("translate3d(" + l + "px, " + d + "px, 0px)") : r.transform("translate(" + l + "px, " + d + "px)")), a.translate = a.isHorizontal() ? l : d;
                var p = a.maxTranslate() - a.minTranslate();
                (0 === p ? 0 : (e - a.minTranslate()) / p) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
            },
            minTranslate: function () {
                return -this.snapGrid[0]
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        u = function () {
            return {
                isSafari: (e = a.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent),
                ie: a.navigator.pointerEnabled || a.navigator.msPointerEnabled,
                ieTouch: a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints > 1 || a.navigator.pointerEnabled && a.navigator.maxTouchPoints > 1,
                lteIE9: function () {
                    var e = n.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === e.getElementsByTagName("i").length
                }()
            };
            var e
        }(),
        h = {
            slideTo: function (e, t, a, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                var s = this,
                    r = e;
                r < 0 && (r = 0);
                var n = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    d = s.previousIndex,
                    p = s.activeIndex,
                    c = s.rtl,
                    h = s.$wrapperEl,
                    f = Math.floor(r / n.slidesPerGroup);
                f >= o.length && (f = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
                var v = -o[f];
                if (s.updateProgress(v), n.normalizeSlideIndex)
                    for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m);
                return !(!s.allowSlideNext && v < s.translate && v < s.minTranslate() || !s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r || (c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1) : (0 === t || u.lteIE9 ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a)) : (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.animating || (s.animating = !0, h.transitionEnd(function () {
                    s && !s.destroyed && s.transitionEnd(a)
                }))), 0)))
            },
            slideNext: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
            },
            slidePrev: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a)
            },
            slideReset: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                return this.slideTo(this.activeIndex, e, t, a)
            },
            slideToClickedSlide: function () {
                var t, a = this,
                    i = a.params,
                    s = a.$wrapperEl,
                    n = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
                    o = a.clickedIndex;
                if (i.loop) {
                    if (a.animating) return;
                    t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < a.loopedSlides - n / 2 || o > a.slides.length - a.loopedSlides + n / 2 ? (a.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick(function () {
                        a.slideTo(o)
                    })) : a.slideTo(o) : o > a.slides.length - n ? (a.loopFix(), o = s.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick(function () {
                        a.slideTo(o)
                    })) : a.slideTo(o)
                } else a.slideTo(o)
            }
        },
        f = {
            loopCreate: function () {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl;
                i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                var s = i.children("." + a.slideClass);
                if (a.loopFillGroupWithBlank) {
                    var r = a.slidesPerGroup - s.length % a.slidesPerGroup;
                    if (r !== a.slidesPerGroup) {
                        for (var o = 0; o < r; o += 1) {
                            var l = e(n.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                            i.append(l)
                        }
                        s = i.children("." + a.slideClass)
                    }
                }
                "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10), t.loopedSlides += a.loopAdditionalSlides, t.loopedSlides > s.length && (t.loopedSlides = s.length);
                var d = [],
                    p = [];
                s.each(function (a, i) {
                    var r = e(i);
                    a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && d.push(i), r.attr("data-swiper-slide-index", a)
                });
                for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
                for (var u = d.length - 1; u >= 0; u -= 1) i.prepend(e(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass))
            },
            loopFix: function () {
                var e, t = this,
                    a = t.params,
                    i = t.activeIndex,
                    s = t.slides,
                    r = t.loopedSlides,
                    n = t.allowSlidePrev,
                    o = t.allowSlideNext;
                t.allowSlidePrev = !0, t.allowSlideNext = !0, i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0)) : ("auto" === a.slidesPerView && i >= 2 * r || i > s.length - 2 * a.slidesPerView) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0)), t.allowSlidePrev = n, t.allowSlideNext = o
            },
            loopDestroy: function () {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides;
                t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        v = {
            setGrabCursor: function (e) {
                if (!o.touch && this.params.simulateTouch) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function () {
                o.touch || (this.el.style.cursor = "")
            }
        },
        m = {
            appendSlide: function (e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && o.observer || t.update()
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && o.observer || t.update(), t.slideTo(r, 0, !1)
            },
            removeSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var l = 0; l < e.length; l += 1) r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && o.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        g = function () {
            var e = a.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: a.cordova || a.phonegap,
                    phonegap: a.cordova || a.phonegap
                },
                i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var d = t.osVersion.split("."),
                    p = n.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = a.devicePixelRatio || 1, t
        }(),
        b = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                o = a.touches,
                l = t;
            if (l.originalEvent && (l = l.originalEvent), i.isTouchEvent = "touchstart" === l.type, (i.isTouchEvent || !("which" in l) || 3 !== l.which) && (!i.isTouched || !i.isMoved))
                if (s.noSwiping && e(l.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
                else if (!s.swipeHandler || e(l).closest(s.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var d = o.currentX,
                    p = o.currentY;
                if (!(g.ios && !g.cordova && s.iOSEdgeSwipeDetection && d <= s.iOSEdgeSwipeThreshold && d >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                    if (r.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), o.startX = d, o.startY = p, i.touchStartTime = r.now(), a.allowClick = !0, a.updateSize(), a.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var c = !0;
                        e(l.target).is(i.formElements) && (c = !1), n.activeElement && e(n.activeElement).is(i.formElements) && n.activeElement.blur(), c && a.allowTouchMove && l.preventDefault()
                    }
                    a.emit("touchStart", l)
                }
            }
        },
        w = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                o = a.touches,
                l = a.rtl,
                d = t;
            if (d.originalEvent && (d = d.originalEvent), !i.isTouchEvent || "mousemove" !== d.type) {
                var p = "touchmove" === d.type ? d.targetTouches[0].pageX : d.pageX,
                    c = "touchmove" === d.type ? d.targetTouches[0].pageY : d.pageY;
                if (d.preventedByNestedSwiper) return o.startX = p, void(o.startY = c);
                if (!a.allowTouchMove) return a.allowClick = !1, void(i.isTouched && (r.extend(o, {
                    startX: p,
                    startY: c,
                    currentX: p,
                    currentY: c
                }), i.touchStartTime = r.now()));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (a.isVertical()) {
                        if (c < o.startY && a.translate <= a.maxTranslate() || c > o.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (p < o.startX && a.translate <= a.maxTranslate() || p > o.startX && a.translate >= a.minTranslate()) return;
                if (i.isTouchEvent && n.activeElement && d.target === n.activeElement && e(d.target).is(i.formElements)) return i.isMoved = !0, void(a.allowClick = !1);
                if (i.allowTouchCallbacks && a.emit("touchMove", d), !(d.targetTouches && d.targetTouches.length > 1)) {
                    o.currentX = p, o.currentY = c;
                    var u, h = o.currentX - o.startX,
                        f = o.currentY - o.startY;
                    if (void 0 === i.isScrolling) a.isHorizontal() && o.currentY === o.startY || a.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (u = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = a.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle);
                    if (i.isScrolling && a.emit("touchMoveOpposite", d), "undefined" == typeof startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isTouched)
                        if (i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                        a.allowClick = !1, d.preventDefault(), s.touchMoveStopPropagation && !s.nested && d.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", d)), a.emit("sliderMove", d), i.isMoved = !0;
                        var v = a.isHorizontal() ? h : f;
                        o.diff = v, v *= s.touchRatio, l && (v = -v), a.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                        var m = !0,
                            g = s.resistanceRatio;
                        if (s.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > a.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < a.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - v, g))), m && (d.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                            if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = a.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: o[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: o[a.isHorizontal() ? "currentX" : "currentY"],
                            time: r.now()
                        })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate))
                    }
                }
            }
        },
        y = function () {
            var e = this,
                t = e.params,
                a = e.el;
            if (!a || 0 !== a.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext,
                    s = e.allowSlidePrev;
                if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                    var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                e.allowSlidePrev = s, e.allowSlideNext = i
            }
        },
        x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: p,
            translate: c,
            transition: {
                setTransition: function (e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function (e) {
                    void 0 === e && (e = !0);
                    var t = this,
                        a = t.activeIndex,
                        i = t.params,
                        s = t.previousIndex;
                    i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
                },
                transitionEnd: function (e) {
                    void 0 === e && (e = !0);
                    var t = this,
                        a = t.activeIndex,
                        i = t.previousIndex;
                    t.animating = !1, t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
                }
            },
            slide: h,
            loop: f,
            grabCursor: v,
            manipulation: m,
            events: {
                attachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    e.onTouchStart = b.bind(e), e.onTouchMove = w.bind(e), e.onTouchEnd = function (e) {
                        var t = this,
                            a = t.touchEventsData,
                            i = t.params,
                            s = t.touches,
                            n = t.rtl,
                            o = t.$wrapperEl,
                            l = t.slidesGrid,
                            d = t.snapGrid,
                            p = e;
                        if (p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), a.allowTouchCallbacks = !1, a.isTouched) {
                            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var c, u = r.now(),
                                h = u - a.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), h < 300 && u - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = r.nextTick(function () {
                                    t && !t.destroyed && t.emit("click", p)
                                }, 300)), h < 300 && u - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))), a.lastClickTime = r.now(), r.nextTick(function () {
                                    t.destroyed || (t.allowClick = !0)
                                }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, void(a.isMoved = !1);
                            if (a.isTouched = !1, a.isMoved = !1, c = i.followFinger ? n ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                                if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                                if (c > -t.maxTranslate()) return void(t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                                if (i.freeModeMomentum) {
                                    if (a.velocities.length > 1) {
                                        var f = a.velocities.pop(),
                                            v = a.velocities.pop(),
                                            m = f.position - v.position,
                                            g = f.time - v.time;
                                        t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || r.now() - f.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                                    var b = 1e3 * i.freeModeMomentumRatio,
                                        w = t.velocity * b,
                                        y = t.translate + w;
                                    n && (y = -y);
                                    var x, T = !1,
                                        E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                    if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.maxTranslate();
                                    else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), x = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : y = t.minTranslate();
                                    else if (i.freeModeSticky) {
                                        for (var S, C = 0; C < d.length; C += 1)
                                            if (d[C] > -y) {
                                                S = C;
                                                break
                                            } y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1])
                                    }
                                    if (0 !== t.velocity) b = n ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                                    else if (i.freeModeSticky) return void t.slideReset();
                                    i.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating = !0, o.transitionEnd(function () {
                                        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), o.transitionEnd(function () {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(), t.animating || (t.animating = !0, o.transitionEnd(function () {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                                }(!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            } else {
                                for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < l.length; P += i.slidesPerGroup) void 0 !== l[P + i.slidesPerGroup] ? c >= l[P] && c < l[P + i.slidesPerGroup] && (M = P, z = l[P + i.slidesPerGroup] - l[P]) : c >= l[P] && (M = P, z = l[l.length - 1] - l[l.length - 2]);
                                var k = (c - l[M]) / z;
                                if (h > i.longSwipesMs) {
                                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                                } else {
                                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                    "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                                }
                            }
                        }
                    }.bind(e), e.onClick = function (e) {
                        var t = this;
                        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    var l = "container" === t.touchEventsTarget ? i : s,
                        d = !!t.nested;
                    if (u.ie) l.addEventListener(a.start, e.onTouchStart, !1), (o.touch ? l : n).addEventListener(a.move, e.onTouchMove, d), (o.touch ? l : n).addEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var p = !("touchstart" !== a.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(a.start, e.onTouchStart, p), l.addEventListener(a.move, e.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: d
                            } : d), l.addEventListener(a.end, e.onTouchEnd, p)
                        }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !o.touch && g.ios) && (l.addEventListener("mousedown", e.onTouchStart, !1), n.addEventListener("mousemove", e.onTouchMove, d), n.addEventListener("mouseup", e.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", y)
                },
                detachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        l = !!t.nested;
                    if (u.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (o.touch ? r : n).removeEventListener(a.move, e.onTouchMove, l), (o.touch ? r : n).removeEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var d = !("onTouchStart" !== a.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(a.start, e.onTouchStart, d), r.removeEventListener(a.move, e.onTouchMove, l), r.removeEventListener(a.end, e.onTouchEnd, d)
                        }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !o.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), n.removeEventListener("mousemove", e.onTouchMove, l), n.removeEventListener("mouseup", e.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", y)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        a = e.loopedSlides;
                    void 0 === a && (a = 0);
                    var i = e.params,
                        s = i.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var n = e.getBreakpoint(s);
                        if (n && e.currentBreakpoint !== n) {
                            var o = n in s ? s[n] : e.originalParams,
                                l = i.loop && o.slidesPerView !== i.slidesPerView;
                            r.extend(e.params, o), r.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = n, l && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var t = !1,
                            i = [];
                        Object.keys(e).forEach(function (e) {
                            i.push(e)
                        }), i.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var s = 0; s < i.length; s += 1) {
                            var r = i[s];
                            r >= a.innerWidth && !t && (t = r)
                        }
                        return t || "max"
                    }
                }
            },
            classes: {
                addClasses: function () {
                    var e = this,
                        t = e.classNames,
                        i = e.params,
                        s = e.rtl,
                        r = e.$el,
                        n = [];
                    n.push(i.direction), i.freeMode && n.push("free-mode"), o.flexbox || n.push("no-flexbox"), i.autoHeight && n.push("autoheight"), s && n.push("rtl"), i.slidesPerColumn > 1 && n.push("multirow"), g.android && n.push("android"), g.ios && n.push("ios"), (a.navigator.pointerEnabled || a.navigator.msPointerEnabled) && n.push("wp8-" + i.direction), n.forEach(function (e) {
                        t.push(i.containerModifierClass + e)
                    }), r.addClass(t.join(" "))
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, i, s, r, n) {
                    function o() {
                        n && n()
                    }
                    var l;
                    e.complete && r ? o() : t ? ((l = new a.Image).onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : o()
                },
                preloadImages: function () {
                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                        var a = e.imagesToLoad[t];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        })
                    }
                }
            }
        },
        E = {},
        S = function (t) {
            function i() {
                for (var s = [], n = arguments.length; n--;) s[n] = arguments[n];
                var l, d, p;
                1 === s.length && s[0].constructor && s[0].constructor === Object ? d = s[0] : (l = (p = s)[0], d = p[1]);
                d || (d = {}), d = r.extend({}, d), l && !d.el && (d.el = l), t.call(this, d), Object.keys(T).forEach(function (e) {
                    Object.keys(T[e]).forEach(function (t) {
                        i.prototype[t] || (i.prototype[t] = T[e][t])
                    })
                });
                var c = this;
                void 0 === c.modules && (c.modules = {}), Object.keys(c.modules).forEach(function (e) {
                    var t = c.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i) return;
                        if (!(a in d && "enabled" in i)) return;
                        !0 === d[a] && (d[a] = {
                            enabled: !0
                        }), "object" != typeof d[a] || "enabled" in d[a] || (d[a].enabled = !0), d[a] || (d[a] = {
                            enabled: !1
                        })
                    }
                });
                var u = r.extend({}, x);
                c.useModulesParams(u), c.params = r.extend({}, u, E, d), c.originalParams = r.extend({}, c.params), c.passedParams = r.extend({}, d);
                var h = e(c.params.el);
                if (l = h[0]) {
                    if (h.length > 1) {
                        var f = [];
                        return h.each(function (e, t) {
                            var a = r.extend({}, d, {
                                el: t
                            });
                            f.push(new i(a))
                        }), f
                    }
                    l.swiper = c, h.data("swiper", c);
                    var v = h.children("." + c.params.wrapperClass);
                    return r.extend(c, {
                        $el: h,
                        el: l,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === c.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === c.params.direction
                        },
                        rtl: "horizontal" === c.params.direction && ("rtl" === l.dir.toLowerCase() || "rtl" === h.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: c.params.allowSlideNext,
                        allowSlidePrev: c.params.allowSlidePrev,
                        touchEvents: function () {
                            var e = ["touchstart", "touchmove", "touchend"],
                                t = ["mousedown", "mousemove", "mouseup"];
                            return a.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : a.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]), {
                                start: o.touch || !c.params.simulateTouch ? e[0] : t[0],
                                move: o.touch || !c.params.simulateTouch ? e[1] : t[1],
                                end: o.touch || !c.params.simulateTouch ? e[2] : t[2]
                            }
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: r.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: c.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), c.useModules(), c.params.init && c.init(), c
                }
            }
            t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
            var s = {
                extendedDefaults: {},
                defaults: {},
                Class: {},
                $: {}
            };
            return i.prototype.slidesPerViewDynamic = function () {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, (l += a[d].swiperSlideSize) > s && (o = !0));
                    for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && (n += 1, (l += a[p].swiperSlideSize) > s && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, i.prototype.update = function () {
                function e() {
                    t = Math.min(Math.max(a.translate, a.maxTranslate()), a.minTranslate()), a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
                var t, a = this;
                a && !a.destroyed && (a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (e(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || e(), a.emit("update"))
            }, i.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, i.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    n = a.$wrapperEl,
                    o = a.slides;
                a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), n.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), r.deleteProps(a)), a.destroyed = !0
            }, i.extendDefaults = function (e) {
                r.extend(E, e)
            }, s.extendedDefaults.get = function () {
                return E
            }, s.defaults.get = function () {
                return x
            }, s.Class.get = function () {
                return t
            }, s.$.get = function () {
                return e
            }, Object.defineProperties(i, s), i
        }(l),
        C = {
            name: "device",
            proto: {
                device: g
            },
            static: {
                device: g
            }
        },
        M = {
            name: "support",
            proto: {
                support: o
            },
            static: {
                support: o
            }
        },
        z = {
            name: "browser",
            proto: {
                browser: u
            },
            static: {
                browser: u
            }
        },
        P = {
            name: "resize",
            create: function () {
                var e = this;
                r.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        k = {
            func: a.MutationObserver || a.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new(0, k.func)(function (e) {
                        e.forEach(function (e) {
                            a.emit("observerUpdate", e)
                        })
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function () {
                var e = this;
                if (o.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: !1
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        $ = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    observer: {
                        init: k.init.bind(e),
                        attach: k.attach.bind(e),
                        destroy: k.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        I = {
            update: function (e) {
                function t() {
                    a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load()
                }
                var a = this,
                    i = a.params,
                    s = i.slidesPerView,
                    n = i.slidesPerGroup,
                    o = i.centeredSlides,
                    l = a.virtual,
                    d = l.from,
                    p = l.to,
                    c = l.slides,
                    u = l.slidesGrid,
                    h = l.renderSlide,
                    f = l.offset;
                a.updateActiveIndex();
                var v, m, g, b = a.activeIndex || 0;
                v = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top", o ? (m = Math.floor(s / 2) + n, g = Math.floor(s / 2) + n) : (m = s + (n - 1), g = n);
                var w = Math.max((b || 0) - g, 0),
                    y = Math.min((b || 0) + m, c.length - 1),
                    x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
                if (r.extend(a.virtual, {
                        from: w,
                        to: y,
                        offset: x,
                        slidesGrid: a.slidesGrid
                    }), d === w && p === y && !e) return a.slidesGrid !== u && x !== f && a.slides.css(v, x + "px"), void a.updateProgress();
                if (a.params.virtual.renderExternal) return a.params.virtual.renderExternal.call(a, {
                    offset: x,
                    from: w,
                    to: y,
                    slides: function () {
                        for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void t();
                var T = [],
                    E = [];
                if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
                else
                    for (var S = d; S <= p; S += 1)(S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
                E.forEach(function (e) {
                    a.$wrapperEl.append(h(c[e], e))
                }), T.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    a.$wrapperEl.prepend(h(c[e], e))
                }), a.$wrapperEl.children(".swiper-slide").css(v, x + "px"), t()
            },
            renderSlide: function (t, a) {
                var i = this,
                    s = i.params.virtual;
                if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
                var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r
            },
            appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function (e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        L = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    virtual: {
                        update: I.update.bind(e),
                        appendSlide: I.appendSlide.bind(e),
                        prependSlide: I.prependSlide.bind(e),
                        renderSlide: I.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        r.extend(e.params, t), r.extend(e.originalParams, t), e.virtual.update()
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        D = {
            handle: function (e) {
                var t = this,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                    if (37 === s || 39 === s || 38 === s || 40 === s) {
                        var r = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var o = {
                                left: a.pageXOffset,
                                top: a.pageYOffset
                            },
                            l = a.innerWidth,
                            d = a.innerHeight,
                            p = t.$el.offset();
                        t.rtl && (p.left -= t.$el[0].scrollLeft);
                        for (var c = [
                                [p.left, p.top],
                                [p.left + t.width, p.top],
                                [p.left, p.top + t.height],
                                [p.left + t.width, p.top + t.height]
                            ], u = 0; u < c.length; u += 1) {
                            var h = c[u];
                            h[0] >= o.left && h[0] <= o.left + l && h[1] >= o.top && h[1] <= o.top + d && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !t.rtl || 37 === s && t.rtl) && t.slideNext(), (37 === s && !t.rtl || 39 === s && t.rtl) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function () {
                var t = this;
                t.keyboard.enabled || (e(n).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
            },
            disable: function () {
                var t = this;
                t.keyboard.enabled && (e(n).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
            }
        },
        O = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: D.enable.bind(e),
                        disable: D.disable.bind(e),
                        handle: D.handle.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        A = {
            lastScrollTime: r.now(),
            event: a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = "onwheel" in n;
                if (!e) {
                    var t = n.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (e = n.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handle: function (e) {
                var t = e,
                    i = this,
                    s = i.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var n = 0,
                    o = i.rtl ? -1 : 1,
                    l = A.normalize(t);
                if (s.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                        n = l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                        n = l.pixelY
                    }
                else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 === n) return !0;
                if (s.invert && (n = -n), i.params.freeMode) {
                    var d = i.getTranslate() + n * s.sensitivity,
                        p = i.isBeginning,
                        c = i.isEnd;
                    if (d >= i.minTranslate() && (d = i.minTranslate()), d <= i.maxTranslate() && (d = i.maxTranslate()), i.setTransition(0), i.setTranslate(d), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!p && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = r.nextTick(function () {
                            i.slideReset()
                        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), 0 === d || d === i.maxTranslate()) return !0
                } else {
                    if (r.now() - i.mousewheel.lastScrollTime > 60)
                        if (n < 0)
                            if (i.isEnd && !i.params.loop || i.animating) {
                                if (s.releaseOnEdges) return !0
                            } else i.slideNext(), i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (s.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new a.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function () {
                var t = this;
                if (!A.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(A.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
            },
            disable: function () {
                var t = this;
                if (!A.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(A.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
            }
        },
        H = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: A.enable.bind(e),
                        disable: A.disable.bind(e),
                        handle: A.handle.bind(e),
                        lastScrollTime: r.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        },
        N = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
                }
            },
            init: function () {
                var t, a, i = this,
                    s = i.params.navigation;
                (s.nextEl || s.prevEl) && (s.nextEl && (t = e(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && t.length > 1 && 1 === i.$el.find(s.nextEl).length && (t = i.$el.find(s.nextEl))), s.prevEl && (a = e(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && a.length > 1 && 1 === i.$el.find(s.prevEl).length && (a = i.$el.find(s.prevEl))), t && t.length > 0 && t.on("click", function (e) {
                    e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
                }), a && a.length > 0 && a.on("click", function (e) {
                    e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
                }), r.extend(i.navigation, {
                    $nextEl: t,
                    nextEl: t && t[0],
                    $prevEl: a,
                    prevEl: a && a[0]
                }))
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        X = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    navigation: {
                        init: N.init.bind(e),
                        update: N.update.bind(e),
                        destroy: N.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (t) {
                    var a = this,
                        i = a.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
                }
            }
        },
        Y = {
            update: function () {
                var t = this,
                    a = t.rtl,
                    i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var s, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== t.params.paginationType && (s = o + s)) : s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        var l = t.pagination.bullets;
                        if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")), l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), n.length > 1) l.each(function (t, a) {
                            var r = e(a);
                            r.index() === s && (r.addClass(i.bulletActiveClass), i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        });
                        else {
                            var d = l.eq(s);
                            d.addClass(i.bulletActiveClass), i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var p = Math.min(l.length, 5),
                                c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
                                u = a ? "right" : "left";
                            l.css(t.isHorizontal() ? u : "top", c + "px")
                        }
                    }
                    if ("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type) {
                        var h = (s + 1) / o,
                            f = h,
                            v = 1;
                        t.isHorizontal() || (v = h, f = 1), n.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + f + ") scaleY(" + v + ")").transition(t.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0])
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function () {
                var t = this,
                    a = t.params.pagination;
                if (a.el) {
                    var i = e(a.el);
                    0 !== i.length && (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)), "bullets" === a.type && a.clickable && i.addClass(a.clickableClass), i.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"), a.clickable && i.on("click", "." + a.bulletClass, function (a) {
                        a.preventDefault();
                        var i = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                    }), r.extend(t.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        G = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    pagination: {
                        init: Y.init.bind(e),
                        render: Y.render.bind(e),
                        update: Y.update.bind(e),
                        destroy: Y.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function () {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                },
                snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function () {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function () {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function () {
                    this.pagination.destroy()
                },
                click: function (t) {
                    var a = this;
                    a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
                }
            }
        },
        B = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtl,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        l = t.$el,
                        d = e.params.scrollbar,
                        p = s,
                        c = (r - s) * i;
                    a && e.isHorizontal() ? (c = -c) > 0 ? (p = s - c, c = 0) : -c + s > r && (p = r + c) : c < 0 ? (p = s + c, c = 0) : c + s > r && (p = r - c), e.isHorizontal() ? (o.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), n[0].style.width = p + "px") : (o.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), n[0].style.height = p + "px"), d.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                        l[0].style.opacity = 0, l.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function (e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, n = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        o = e.size / e.virtualSize,
                        l = o * (n / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? n * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = o >= 1 ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), r.extend(t, {
                        trackSize: n,
                        divider: o,
                        moveDivider: l,
                        dragSize: s
                    })
                }
            },
            setDragPosition: function (e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[a.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), a.rtl && (t = 1 - t);
                var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    s = a.$el,
                    r = a.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = r.nextTick(function () {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideReset())
            },
            enableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = o.touch ? a[0] : document;
                    a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                }
            },
            disableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = o.touch ? a[0] : document;
                    a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end)
                }
            },
            init: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = t.$el,
                        s = t.touchEvents,
                        n = t.params.scrollbar,
                        l = e(n.el);
                    t.params.uniqueNavElements && "string" == typeof n.el && l.length > 1 && 1 === i.find(n.el).length && (l = i.find(n.el));
                    var d = l.find(".swiper-scrollbar-drag");
                    0 === d.length && (d = e('<div class="swiper-scrollbar-drag"></div>'), l.append(d)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || o.touch ? s : {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    }, r.extend(a, {
                        $el: l,
                        el: l[0],
                        $dragEl: d,
                        dragEl: d[0]
                    }), n.draggable && a.enableDraggable()
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        V = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    scrollbar: {
                        init: B.init.bind(e),
                        destroy: B.destroy.bind(e),
                        updateSize: B.updateSize.bind(e),
                        setTranslate: B.setTranslate.bind(e),
                        setTransition: B.setTransition.bind(e),
                        enableDraggable: B.enableDraggable.bind(e),
                        disableDraggable: B.disableDraggable.bind(e),
                        setDragPosition: B.setDragPosition.bind(e),
                        onDragStart: B.onDragStart.bind(e),
                        onDragMove: B.onDragMove.bind(e),
                        onDragEnd: B.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function () {
                    this.scrollbar.updateSize()
                },
                resize: function () {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize()
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate()
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        },
        R = {
            setTransform: function (t, a) {
                var i = this.rtl,
                    s = e(t),
                    r = i ? -1 : 1,
                    n = s.attr("data-swiper-parallax") || "0",
                    o = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    d = s.attr("data-swiper-parallax-scale"),
                    p = s.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * a * r + "%" : o * a * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a + "%" : l * a + "px", null != p) {
                    var c = p - (p - 1) * (1 - Math.abs(a));
                    s[0].style.opacity = c
                }
                if (null == d) s.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var u = d - (d - 1) * (1 - Math.abs(a));
                    s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
                }
            },
            setTranslate: function () {
                var t = this,
                    a = t.$el,
                    i = t.slides,
                    s = t.progress,
                    r = t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
                    t.parallax.setTransform(a, s)
                }), i.each(function (a, i) {
                    var n = i.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
                        t.parallax.setTransform(a, n)
                    })
                })
            },
            setTransition: function (t) {
                void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (a, i) {
                    var s = e(i),
                        r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (r = 0), s.transition(r)
                })
            }
        },
        W = {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    parallax: {
                        setTransform: R.setTransform.bind(e),
                        setTranslate: R.setTranslate.bind(e),
                        setTransition: R.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.watchSlidesProgress = !0
                },
                init: function () {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function () {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function (e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        },
        F = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function (t) {
                var a = this,
                    i = a.params.zoom,
                    s = a.zoom,
                    r = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !o.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, r.scaleStart = F.getDistanceBetweenTouches(t)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), a.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio), s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    n = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = r.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = r.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX), t.rtl && (s.startY = -s.startY));
                    var o = s.width * a.scale,
                        l = s.height * a.scale;
                    if (!(o < i.slideWidth && l < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - o / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (t) {
                var a, i, s, r, n, o, l, d, p, c, u, h, f, v, m, g, b = this,
                    w = b.zoom,
                    y = b.params.zoom,
                    x = w.gesture,
                    T = w.image;
                (x.$slideEl || (x.$slideEl = b.clickedSlide ? e(b.clickedSlide) : b.slides.eq(b.activeIndex), x.$imageEl = x.$slideEl.find("img, svg, canvas"), x.$imageWrapEl = x.$imageEl.parent("." + y.containerClass)), x.$imageEl && 0 !== x.$imageEl.length) && (x.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === T.touchesStart.x && t ? (a = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (a = T.touchesStart.x, i = T.touchesStart.y), w.scale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, w.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, t ? (m = x.$slideEl[0].offsetWidth, g = x.$slideEl[0].offsetHeight, s = x.$slideEl.offset().left + m / 2 - a, r = x.$slideEl.offset().top + g / 2 - i, l = x.$imageEl[0].offsetWidth, d = x.$imageEl[0].offsetHeight, p = l * w.scale, c = d * w.scale, f = -(u = Math.min(m / 2 - p / 2, 0)), v = -(h = Math.min(g / 2 - c / 2, 0)), (n = s * w.scale) < u && (n = u), n > f && (n = f), (o = r * w.scale) < h && (o = h), o > v && (o = v)) : (n = 0, o = 0), x.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + w.scale + ")"))
            },
            out: function () {
                var t = this,
                    a = t.zoom,
                    i = t.params.zoom,
                    s = a.gesture;
                s.$slideEl || (s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (a.scale = 1, a.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
            },
            enable: function () {
                var t = this,
                    a = t.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !o.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.gestures ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove)
                    })
                }
            },
            disable: function () {
                var t = this,
                    a = t.zoom;
                if (a.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !o.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.gestures ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)), t.slides.each(function (i, s) {
                        var r = e(s);
                        r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove)
                    })
                }
            }
        },
        j = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
                    t[a] = F[a].bind(e)
                }), r.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function () {
                    this.zoom.disable()
                },
                touchStart: function (e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function (e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function (e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                },
                transitionEnd: function () {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                }
            }
        },
        q = {
            loadInSlide: function (t, a) {
                void 0 === a && (a = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== t && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                        n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (t, n) {
                        var o = e(n);
                        o.addClass(s.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            p = o.attr("data-srcset"),
                            c = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, p, c, !1, function () {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && a) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function () {
                function t(e) {
                    if (l) {
                        if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (n[e]) return !0;
                    return !1
                }

                function a(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }
                var i = this,
                    s = i.$wrapperEl,
                    r = i.params,
                    n = i.slides,
                    o = i.activeIndex,
                    l = i.virtual && r.virtual.enabled,
                    d = r.lazy,
                    p = r.slidesPerView;
                if ("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) s.children("." + r.slideVisibleClass).each(function (t, a) {
                    var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                    i.lazy.loadInSlide(s)
                });
                else if (p > 1)
                    for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
                else i.lazy.loadInSlide(o);
                if (d.loadPrevNext)
                    if (p > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                        for (var u = d.loadPrevNextAmount, h = p, f = Math.min(o + h + Math.max(u, h), n.length), v = Math.max(o - Math.max(h, u), 0), m = o + p; m < f; m += 1) t(m) && i.lazy.loadInSlide(m);
                        for (var g = v; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
                    } else {
                        var b = s.children("." + r.slideNextClass);
                        b.length > 0 && i.lazy.loadInSlide(a(b));
                        var w = s.children("." + r.slidePrevClass);
                        w.length > 0 && i.lazy.loadInSlide(a(w))
                    }
            }
        },
        K = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: q.load.bind(e),
                        loadInSlide: q.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                },
                scroll: function () {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                }
            }
        },
        U = {
            LinearSpline: function (e, t) {
                var a, i, s = function () {
                    var e, t, a;
                    return function (i, s) {
                        for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= s ? t = a : e = a;
                        return e
                    }
                }();
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new U.LinearSpline(t.slidesGrid, e.slidesGrid) : new U.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                function a(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), s = -r.controller.spline.interpolate(-t)), s && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), s = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                var i, s, r = this,
                    n = r.controller.control;
                if (Array.isArray(n))
                    for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof S && a(n[o]);
                else n instanceof S && t !== n && a(n)
            },
            setTransition: function (e, t) {
                function a(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
                        r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                var i, s = this,
                    r = s.controller.control;
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof S && a(r[i]);
                else r instanceof S && t !== r && a(r)
            }
        },
        _ = {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: U.getInterpolateFunction.bind(e),
                        setTranslate: U.setTranslate.bind(e),
                        setTransition: U.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function (e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function (e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        },
        Z = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function (t) {
                var a = this,
                    i = a.params.a11y;
                if (13 === t.keyCode) {
                    var s = e(t.target);
                    a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)), a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)), a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function () {
                var t = this,
                    a = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, s) {
                    var r = e(s);
                    t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function () {
                var e, t, a = this;
                a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            }
        },
        Q = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var t = this;
                r.extend(t, {
                    a11y: {
                        liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(Z).forEach(function (e) {
                    t.a11y[e] = Z[e].bind(t)
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        },
        J = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!a.history || !a.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = J.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || a.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function () {
                this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                var e = this;
                e.history.paths = J.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            },
            getPathValues: function () {
                var e = a.location.pathname.slice(1).split("/").filter(function (e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function (e, t) {
                var i = this;
                if (i.history.initialized && i.params.history.enabled) {
                    var s = i.slides.eq(t),
                        r = J.slugify(s.attr("data-history"));
                    a.location.pathname.includes(e) || (r = e + "/" + r);
                    var n = a.history.state;
                    n && n.value === r || (i.params.history.replaceState ? a.history.replaceState({
                        value: r
                    }, null, r) : a.history.pushState({
                        value: r
                    }, null, r))
                }
            },
            slugify: function (e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (J.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        ee = {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    history: {
                        init: J.init.bind(e),
                        setHistory: J.setHistory.bind(e),
                        setHistoryPopState: J.setHistoryPopState.bind(e),
                        scrollToSlide: J.scrollToSlide.bind(e),
                        destroy: J.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function () {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        },
        te = {
            onHashCange: function () {
                var e = this,
                    t = n.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            i = t.attr("data-hash") || t.attr("data-history");
                        n.location.hash = i || ""
                    }
            },
            init: function () {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var i = n.location.hash.replace("#", "");
                    if (i)
                        for (var s = 0, r = t.slides.length; s < r; s += 1) {
                            var o = t.slides.eq(s);
                            if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(t.params.slideDuplicateClass)) {
                                var l = o.index();
                                t.slideTo(l, 0, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && e(a).on("hashchange", t.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && e(a).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ae = {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: te.init.bind(e),
                        destroy: te.destroy.bind(e),
                        setHash: te.setHash.bind(e),
                        onHashCange: te.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        },
        ie = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = r.nextTick(function () {
                    e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 === e ? (t.autoplay.paused = !1, t.autoplay.run()) : t.$wrapperEl.transitionEnd(function () {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                })))
            }
        },
        se = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ie.run.bind(e),
                        start: ie.start.bind(e),
                        stop: ie.stop.bind(e),
                        pause: ie.pause.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function (e, t) {
                    var a = this;
                    a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop())
                },
                sliderFirstMove: function () {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        },
        re = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    a.transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a])
                        }
                    })
                }
            }
        },
        ne = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    fadeEffect: {
                        setTranslate: re.setTranslate.bind(e),
                        setTransition: re.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        r.extend(e.params, t), r.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        },
        oe = {
            setTranslate: function () {
                var t, a = this,
                    i = a.$el,
                    s = a.$wrapperEl,
                    r = a.slides,
                    n = a.width,
                    o = a.height,
                    l = a.rtl,
                    d = a.size,
                    p = a.params.cubeEffect,
                    c = a.isHorizontal(),
                    h = a.virtual && a.params.virtual.enabled,
                    f = 0;
                p.shadow && (c ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
                    height: n + "px"
                })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
                for (var v = 0; v < r.length; v += 1) {
                    var m = r.eq(v),
                        g = v;
                    h && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
                    var b = 90 * g,
                        w = Math.floor(b / 360);
                    l && (b = -b, w = Math.floor(-b / 360));
                    var y = Math.max(Math.min(m[0].progress, 1), -1),
                        x = 0,
                        T = 0,
                        E = 0;
                    g % 4 == 0 ? (x = 4 * -w * d, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -w * d) : (g - 2) % 4 == 0 ? (x = d + 4 * w * d, E = d) : (g - 3) % 4 == 0 && (x = -d, E = 3 * d + 4 * d * w), l && (x = -x), c || (T = x, x = 0);
                    var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                    if (y <= 1 && y > -1 && (f = 90 * g + 90 * y, l && (f = 90 * -g - 90 * y)), m.transform(S), p.slideShadows) {
                        var C = c ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            M = c ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), m.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), m.append(M)), C.length && (C[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }), p.shadow)
                    if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                    else {
                        var z = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
                            k = p.shadowScale,
                            $ = p.shadowScale / P,
                            I = p.shadowOffset;
                        t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)")
                    } var L = u.isSafari || u.isUiWebView ? -d / 2 : 0;
                s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : f) + "deg) rotateY(" + (a.isHorizontal() ? -f : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this,
                    a = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e)
            }
        },
        le = {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    cubeEffect: {
                        setTranslate: oe.setTranslate.bind(e),
                        setTransition: oe.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        r.extend(e.params, t), r.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        },
        de = {
            setTranslate: function () {
                for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                    var s = a.eq(i),
                        r = s[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (t.isHorizontal() ? t.rtl && (n = -n) : (d = l, l = 0, o = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length, t.params.flipEffect.slideShadows) {
                        var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    a.eq(i).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a])
                        }
                    })
                }
            }
        },
        pe = {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    flipEffect: {
                        setTranslate: de.setTranslate.bind(e),
                        setTransition: de.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        r.extend(e.params, t), r.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function (e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        },
        ce = {
            setTranslate: function () {
                for (var t = this, a = t.width, i = t.height, s = t.slides, r = t.$wrapperEl, n = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, p = l ? a / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, h = o.depth, f = 0, v = s.length; f < v; f += 1) {
                    var m = s.eq(f),
                        g = n[f],
                        b = (p - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
                        w = l ? c * b : 0,
                        y = l ? 0 : c * b,
                        x = -h * Math.abs(b),
                        T = l ? 0 : o.stretch * b,
                        E = l ? o.stretch * b : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
                    if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(b)), o.slideShadows) {
                        var C = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            M = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(C)), 0 === M.length && (M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(M)), C.length && (C[0].style.opacity = b > 0 ? b : 0), M.length && (M[0].style.opacity = -b > 0 ? -b : 0)
                    }
                }
                u.ie && (r[0].style.perspectiveOrigin = p + "px 50%")
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ue = {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                var e = this;
                r.extend(e, {
                    coverflowEffect: {
                        setTranslate: ce.setTranslate.bind(e),
                        setTransition: ce.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function (e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        };
    return S.use([C, M, z, P, $, L, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue]), S
});