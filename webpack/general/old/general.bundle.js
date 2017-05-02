! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    n(1), n(4), t.exports = n(5)
}, function (t, e, n) {
    var i, r;
    (function (s, $) {
        ! function (s, o) {
            "use strict";
            var a = s.GreenSockGlobals = s.GreenSockGlobals || s;
            if (!a.TweenLite) {
                var l, u, c, f, p, h = function (t) {
                        var e, n = t.split("."),
                            i = a;
                        for (e = 0; n.length > e; e++) i[n[e]] = i = i[n[e]] || {};
                        return i
                    },
                    d = h("com.greensock"),
                    g = 1e-10,
                    m = function (t) {
                        var e, n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n
                    },
                    v = function () {},
                    y = function () {
                        var t = Object.prototype.toString,
                            e = t.call([]);
                        return function (n) {
                            return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
                        }
                    }(),
                    x = {},
                    _ = function (s, l, u, c) {
                        this.sc = x[s] ? x[s].sc : [], x[s] = this, this.gsClass = null, this.func = u;
                        var f = [];
                        this.check = function (p) {
                            for (var d, g, m, v, y, b = l.length, w = b; --b > -1;)(d = x[l[b]] || new _(l[b], [])).gsClass ? (f[b] = d.gsClass, w--) : p && d.sc.push(this);
                            if (0 === w && u)
                                for (g = ("com.greensock." + s).split("."), m = g.pop(), v = h(g.join("."))[m] = this.gsClass = u.apply(u, f), c && (a[m] = v, y = "undefined" != typeof t && t.exports, !y && n(3) ? (i = [], r = function () {
                                        return v
                                    }.apply(e, i), !(void 0 !== r && (t.exports = r))) : s === o && y && (t.exports = v)), b = 0; this.sc.length > b; b++) this.sc[b].check()
                        }, this.check(!0)
                    },
                    b = s._gsDefine = function (t, e, n, i) {
                        return new _(t, e, n, i)
                    },
                    w = d._class = function (t, e, n) {
                        return e = e || function () {}, b(t, [], function () {
                            return e
                        }, n), e
                    };
                b.globals = a;
                var T = [0, 0, 1, 1],
                    k = [],
                    P = w("easing.Ease", function (t, e, n, i) {
                        this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? T.concat(e) : T
                    }, !0),
                    C = P.map = {},
                    O = P.register = function (t, e, n, i) {
                        for (var r, s, o, a, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                            for (s = l[u], r = i ? w("easing." + s, null, !0) : d.easing[s] || {}, o = c.length; --o > -1;) a = c[o], C[s + "." + a] = C[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                    };
                for (c = P.prototype, c._calcEnd = !1, c.getRatio = function (t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            n = this._power,
                            i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                        return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
                    }, l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = l.length; --u > -1;) c = l[u] + ",Power" + u, O(new P(null, null, 1, u), c, "easeOut", !0), O(new P(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), O(new P(null, null, 3, u), c, "easeInOut");
                C.linear = d.easing.Linear.easeIn, C.swing = d.easing.Quad.easeInOut;
                var S = w("events.EventDispatcher", function (t) {
                    this._listeners = {}, this._eventTarget = t || this
                });
                c = S.prototype, c.addEventListener = function (t, e, n, i, r) {
                    r = r || 0;
                    var s, o, a = this._listeners[t],
                        l = 0;
                    for (null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) s = a[o], s.c === e && s.s === n ? a.splice(o, 1) : 0 === l && r > s.pr && (l = o + 1);
                    a.splice(l, 0, {
                        c: e,
                        s: n,
                        up: i,
                        pr: r
                    }), this !== f || p || f.wake()
                }, c.removeEventListener = function (t, e) {
                    var n, i = this._listeners[t];
                    if (i)
                        for (n = i.length; --n > -1;)
                            if (i[n].c === e) return void i.splice(n, 1)
                }, c.dispatchEvent = function (t) {
                    var e, n, i, r = this._listeners[t];
                    if (r)
                        for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i && (i.up ? i.c.call(i.s || n, {
                            type: t,
                            target: n
                        }) : i.c.call(i.s || n))
                };
                var A = s.requestAnimationFrame,
                    E = s.cancelAnimationFrame,
                    N = Date.now || function () {
                        return (new Date).getTime()
                    },
                    D = N();
                for (l = ["ms", "moz", "webkit", "o"], u = l.length; --u > -1 && !A;) A = s[l[u] + "RequestAnimationFrame"], E = s[l[u] + "CancelAnimationFrame"] || s[l[u] + "CancelRequestAnimationFrame"];
                w("Ticker", function (t, e) {
                    var n, i, r, s, o, a = this,
                        l = N(),
                        u = e !== !1 && A,
                        c = 500,
                        h = 33,
                        d = "tick",
                        m = function (t) {
                            var e, u, f = N() - D;
                            f > c && (l += f - h), D += f, a.time = (D - l) / 1e3, e = a.time - o, (!n || e > 0 || t === !0) && (a.frame++, o += e + (e >= s ? .004 : s - e), u = !0), t !== !0 && (r = i(m)), u && a.dispatchEvent(d)
                        };
                    S.call(a), a.time = a.frame = 0, a.tick = function () {
                        m(!0)
                    }, a.lagSmoothing = function (t, e) {
                        c = t || 1 / g, h = Math.min(e, c, 0)
                    }, a.sleep = function () {
                        null != r && (u && E ? E(r) : clearTimeout(r), i = v, r = null, a === f && (p = !1))
                    }, a.wake = function () {
                        null !== r ? a.sleep() : a.frame > 10 && (D = N() - c + 5), i = 0 === n ? v : u && A ? A : function (t) {
                            return setTimeout(t, 0 | 1e3 * (o - a.time) + 1)
                        }, a === f && (p = !0), m(2)
                    }, a.fps = function (t) {
                        return arguments.length ? (n = t, s = 1 / (n || 60), o = this.time + s, void a.wake()) : n
                    }, a.useRAF = function (t) {
                        return arguments.length ? (a.sleep(), u = t, void a.fps(n)) : u
                    }, a.fps(t), setTimeout(function () {
                        u && 5 > a.frame && a.useRAF(!1)
                    }, 1500)
                }), c = d.Ticker.prototype = new d.events.EventDispatcher, c.constructor = d.Ticker;
                var R = w("core.Animation", function (t, e) {
                    if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, J) {
                        p || f.wake();
                        var n = this.vars.useFrames ? Z : J;
                        n.add(this, n._time), this.vars.paused && this.paused(!0)
                    }
                });
                f = R.ticker = new d.Ticker, c = R.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
                var j = function () {
                    p && N() - D > 2e3 && f.wake(), setTimeout(j, 2e3)
                };
                j(), c.play = function (t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, c.pause = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, c.resume = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!1)
                }, c.seek = function (t, e) {
                    return this.totalTime(Number(t), e !== !1)
                }, c.restart = function (t, e) {
                    return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                }, c.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, c.render = function () {}, c.invalidate = function () {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                }, c.isActive = function () {
                    var t, e = this._timeline,
                        n = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && n + this.totalDuration() / this._timeScale > t
                }, c._enabled = function (t, e) {
                    return p || f.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                }, c._kill = function () {
                    return this._enabled(!1, !1)
                }, c.kill = function (t, e) {
                    return this._kill(t, e), this
                }, c._uncache = function (t) {
                    for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                    return this
                }, c._swapSelfInParams = function (t) {
                    for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
                    return n
                }, c._callback = function (t) {
                    var e = this.vars;
                    e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || k)
                }, c.eventCallback = function (t, e, n, i) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }, c.delay = function (t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                }, c.duration = function (t) {
                    return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, c.totalDuration = function (t) {
                    return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                }, c.totalTime = function (t, e, n) {
                    if (p || f.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var i = this._totalDuration,
                                r = this._timeline;
                            if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && tt(), this.render(t, e, !1), I.length && tt())
                    }
                    return this
                }, c.progress = c.totalProgress = function (t, e) {
                    var n = this.duration();
                    return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
                }, c.startTime = function (t) {
                    return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                }, c.endTime = function (t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                }, c.timeScale = function (t) {
                    if (!arguments.length) return this._timeScale;
                    if (t = t || g, this._timeline && this._timeline.smoothChildTiming) {
                        var e = this._pauseTime,
                            n = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = n - (n - this._startTime) * this._timeScale / t
                    }
                    return this._timeScale = t, this._uncache(!1)
                }, c.reversed = function (t) {
                    return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, c.paused = function (t) {
                    if (!arguments.length) return this._paused;
                    var e, n, i = this._timeline;
                    return t != this._paused && i && (p || t || f.wake(), e = i.rawTime(), n = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                };
                var M = w("core.SimpleTimeline", function (t) {
                    R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                c = M.prototype = new R, c.constructor = M, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function (t, e) {
                    var n, i;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                        for (i = t._startTime; n && n._startTime > i;) n = n._prev;
                    return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
                }, c._remove = function (t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, c.render = function (t, e, n) {
                    var i, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
                }, c.rawTime = function () {
                    return p || f.wake(), this._totalTime
                };
                var F = w("TweenLite", function (t, e, n) {
                        if (R.call(this, e, n), this.render = F.prototype.render, null == t) throw "Cannot tween a null target.";
                        this.target = t = "string" != typeof t ? t : F.selector(t) || t;
                        var i, r, o, a = t.jquery || t.length && t !== s && t[0] && (t[0] === s || t[0].nodeType && t[0].style && !t.nodeType),
                            l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? $[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                            for (this._targets = o = m(t), this._propLookup = [], this._siblings = [], i = 0; o.length > i; i++) r = o[i], r ? "string" != typeof r ? r.length && r !== s && r[0] && (r[0] === s || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(m(r))) : (this._siblings[i] = et(r, this, !1), 1 === l && this._siblings[i].length > 1 && it(r, this, null, 1, this._siblings[i])) : (r = o[i--] = F.selector(r), "string" == typeof r && o.splice(i + 1, 1)) : o.splice(i--, 1);
                        else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && it(t, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -g, this.render(-this._delay))
                    }, !0),
                    L = function (t) {
                        return t && t.length && t !== s && t[0] && (t[0] === s || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    q = function (t, e) {
                        var n, i = {};
                        for (n in t) Q[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!V[n] || V[n] && V[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                        t.css = i
                    };
                c = F.prototype = new R, c.constructor = F, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, F.version = "1.18.0", F.defaultEase = c._ease = new P(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = f, F.autoSleep = 120, F.lagSmoothing = function (t, e) {
                    f.lagSmoothing(t, e)
                }, F.selector = s.$ || s.jQuery || function (t) {
                    var e = s.$ || s.jQuery;
                    return e ? (F.selector = e, e(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                };
                var I = [],
                    X = {},
                    H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    z = function (t) {
                        for (var e, n = this._firstPT, i = 1e-6; n;) e = n.blob ? t ? this.join("") : this.start : n.c * t + n.s, n.r ? e = Math.round(e) : i > e && e > -i && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                    },
                    B = function (t, e, n, i) {
                        var r, s, o, a, l, u, c, f = [t, e],
                            p = 0,
                            h = "",
                            d = 0;
                        for (f.start = t, n && (n(f), t = f[0], e = f[1]), f.length = 0, r = t.match(H) || [], s = e.match(H) || [], i && (i._next = null, i.blob = 1, f._firstPT = i), l = s.length, a = 0; l > a; a++) c = s[a], u = e.substr(p, e.indexOf(c, p) - p), h += u || !a ? u : ",", p += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || a >= r.length ? h += c : (h && (f.push(h), h = ""), o = parseFloat(r[a]), f.push(o), f._firstPT = {
                            _next: f._firstPT,
                            t: f,
                            p: f.length - 1,
                            s: o,
                            c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                            f: 0,
                            r: d && 4 > d
                        }), p += c.length;
                        return h += e.substr(p), h && f.push(h), f.setRatio = z, f
                    },
                    W = function (t, e, n, i, r, s, o, a) {
                        var l, u, c = "get" === n ? t[e] : n,
                            f = typeof t[e],
                            p = "string" == typeof i && "=" === i.charAt(1),
                            h = {
                                t: t,
                                p: e,
                                s: c,
                                f: "function" === f,
                                pg: 0,
                                n: r || e,
                                r: s,
                                pr: 0,
                                c: p ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - c || 0
                            };
                        return "number" !== f && ("function" === f && "get" === n && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), h.s = c = o ? t[u](o) : t[u]()), "string" == typeof c && (o || isNaN(c)) ? (h.fp = o, l = B(c, i, a || F.defaultStringFilter, h), h = {
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: r || e,
                            pr: 0
                        }) : p || (h.c = parseFloat(i) - parseFloat(c) || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h, h) : void 0
                    },
                    Y = F._internals = {
                        isArray: y,
                        isSelector: L,
                        lazyTweens: I,
                        blobDif: B
                    },
                    V = F._plugins = {},
                    U = Y.tweenLookup = {},
                    G = 0,
                    Q = Y.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1
                    },
                    $ = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    Z = R._rootFramesTimeline = new M,
                    J = R._rootTimeline = new M,
                    K = 30,
                    tt = Y.lazyRender = function () {
                        var t, e = I.length;
                        for (X = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        I.length = 0
                    };
                J._startTime = f.time, Z._startTime = f.frame, J._active = Z._active = !0, setTimeout(tt, 1), R._updateRoot = F.render = function () {
                    var t, e, n;
                    if (I.length && tt(), J.render((f.time - J._startTime) * J._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), I.length && tt(), f.frame >= K) {
                        K = f.frame + (parseInt(F.autoSleep, 10) || 120);
                        for (n in U) {
                            for (e = U[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete U[n]
                        }
                        if (n = J._first, (!n || n._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
                            for (; n && n._paused;) n = n._next;
                            n || f.sleep()
                        }
                    }
                }, f.addEventListener("tick", R._updateRoot);
                var et = function (t, e, n) {
                        var i, r, s = t._gsTweenID;
                        if (U[s || (t._gsTweenID = s = "t" + G++)] || (U[s] = {
                                target: t,
                                tweens: []
                            }), e && (i = U[s].tweens, i[r = i.length] = e, n))
                            for (; --r > -1;) i[r] === e && i.splice(r, 1);
                        return U[s].tweens
                    },
                    nt = function (t, e, n, i) {
                        var r, s, o = t.vars.onOverwrite;
                        return o && (r = o(t, e, n, i)), o = F.onOverwrite, o && (s = o(t, e, n, i)), r !== !1 && s !== !1
                    },
                    it = function (t, e, n, i, r) {
                        var s, o, a, l;
                        if (1 === i || i >= 4) {
                            for (l = r.length, s = 0; l > s; s++)
                                if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                                else if (5 === i) break;
                            return o
                        }
                        var u, c = e._startTime + g,
                            f = [],
                            p = 0,
                            h = 0 === e._duration;
                        for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || rt(e, 0, h), 0 === rt(a, u, h) && (f[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((h || !a._initted) && 2e-10 >= c - a._startTime || (f[p++] = a)));
                        for (s = p; --s > -1;)
                            if (a = f[s], 2 === i && a._kill(n, t, e) && (o = !0), 2 !== i || !a._firstPT && a._initted) {
                                if (2 !== i && !nt(a, e)) continue;
                                a._enabled(!1, !1) && (o = !0)
                            }
                        return o
                    },
                    rt = function (t, e, n) {
                        for (var i = t._timeline, r = i._timeScale, s = t._startTime; i._timeline;) {
                            if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
                            i = i._timeline
                        }
                        return s /= r, s > e ? s - e : n && s === e || !t._initted && 2 * g > s - e ? g : (s += t.totalDuration() / t._timeScale / r) > e + g ? 0 : s - e - g
                    };
                c._init = function () {
                    var t, e, n, i, r, s = this.vars,
                        o = this._overwrittenProps,
                        a = this._duration,
                        l = !!s.immediateRender,
                        u = s.ease;
                    if (s.startAt) {
                        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                        for (i in s.startAt) r[i] = s.startAt[i];
                        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = F.to(this.target, 0, r), l)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== a) return
                    } else if (s.runBackwards && 0 !== a)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            0 !== this._time && (l = !1), n = {};
                            for (i in s) Q[i] && "autoCSS" !== i || (n[i] = s[i]);
                            if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && s.lazy !== !1, n.immediateRender = l, this._startAt = F.to(this.target, 0, n), l) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = u = u ? u instanceof P ? u : "function" == typeof u ? new P(u, s.easeParams) : C[u] || F.defaultEase : F.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                    if (e && F._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                        for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                    this._onUpdate = s.onUpdate, this._initted = !0
                }, c._initProps = function (t, e, n, i) {
                    var r, o, a, l, u, c;
                    if (null == t) return !1;
                    X[t._gsTweenID] && tt(), this.vars.css || t.style && t !== s && t.nodeType && V.css && this.vars.autoCSS !== !1 && q(this.vars, t);
                    for (r in this.vars)
                        if (c = this.vars[r], Q[r]) c && (c instanceof Array || c.push && y(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                        else if (V[r] && (l = new V[r])._onInitTween(t, this.vars[r], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: r,
                                pg: 1,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) e[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                    } else e[r] = W.call(this, t, r, "get", c, r, 0, null, this.vars.stringFilter);
                    return i && this._kill(i, t) ? this._initProps(t, e, n, i) : this._overwrite > 1 && this._firstPT && n.length > 1 && it(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, i)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), a)
                }, c.render = function (t, e, n) {
                    var i, r, s, o, a = this._time,
                        l = this._duration,
                        u = this._rawPrevTime;
                    if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === g && "isPause" !== this.data) && u !== t && (n = !0, u > g && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : g);
                    else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== g || "isPause" !== this.data) && (n = !0), this._rawPrevTime = o = !e || t || u === t ? t : g)), this._initted || (n = !0);
                    else if (this._totalTime = this._time = t, this._easeType) {
                        var c = t / l,
                            f = this._easeType,
                            p = this._easePower;
                        (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : .5 > t / l ? c / 2 : 1 - c / 2
                    } else this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== a || n) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, I.push(this), void(this._lazy = [t, e]);
                            this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                        this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== a || i) && this._callback("onUpdate")), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === g && o !== g && (this._rawPrevTime = 0))
                    }
                }, c._kill = function (t, e, n) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
                    var i, r, s, o, a, l, u, c, f, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                    if ((y(e) || L(e)) && "number" != typeof e[0])
                        for (i = e.length; --i > -1;) this._kill(t, e[i], n) && (l = !0);
                    else {
                        if (this._targets) {
                            for (i = this._targets.length; --i > -1;)
                                if (e === this._targets[i]) {
                                    a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                    break
                                }
                        } else {
                            if (e !== this.target) return !1;
                            a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (a) {
                            if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), n && (F.onOverwrite || this.vars.onOverwrite)) {
                                for (s in u) a[s] && (f || (f = []), f.push(s));
                                if ((f || !t) && !nt(this, n, e, f)) return !1
                            }
                            for (s in u)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
                }, c.invalidate = function () {
                    return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -g, this.render(-this._delay)), this
                }, c._enabled = function (t, e) {
                    if (p || f.wake(), t && this._gc) {
                        var n, i = this._targets;
                        if (i)
                            for (n = i.length; --n > -1;) this._siblings[n] = et(i[n], this, !0);
                        else this._siblings = et(this.target, this, !0)
                    }
                    return R.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }, F.to = function (t, e, n) {
                    return new F(t, e, n)
                }, F.from = function (t, e, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new F(t, e, n)
                }, F.fromTo = function (t, e, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new F(t, e, i)
                }, F.delayedCall = function (t, e, n, i, r) {
                    return new F(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: e,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, F.set = function (t, e) {
                    return new F(t, 0, e)
                }, F.getTweensOf = function (t, e) {
                    if (null == t) return [];
                    t = "string" != typeof t ? t : F.selector(t) || t;
                    var n, i, r, s;
                    if ((y(t) || L(t)) && "number" != typeof t[0]) {
                        for (n = t.length, i = []; --n > -1;) i = i.concat(F.getTweensOf(t[n], e));
                        for (n = i.length; --n > -1;)
                            for (s = i[n], r = n; --r > -1;) s === i[r] && i.splice(n, 1)
                    } else
                        for (i = et(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                    return i
                }, F.killTweensOf = F.killDelayedCallsTo = function (t, e, n) {
                    "object" == typeof e && (n = e, e = !1);
                    for (var i = F.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
                };
                var st = w("plugins.TweenPlugin", function (t, e) {
                    this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype
                }, !0);
                if (c = st.prototype, st.version = "1.18.0", st.API = 2, c._firstPT = null, c._addTween = W, c.setRatio = z, c._kill = function (t) {
                        var e, n = this._overwriteProps,
                            i = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
                        for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                        return !1
                    }, c._roundProps = function (t, e) {
                        for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
                    }, F._onPluginEvent = function (t, e) {
                        var n, i, r, s, o, a = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; a;) {
                                for (o = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                                (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = o
                            }
                            a = e._firstPT = r
                        }
                        for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
                        return n
                    }, st.activate = function (t) {
                        for (var e = t.length; --e > -1;) t[e].API === st.API && (V[(new t[e])._propName] = t[e]);
                        return !0
                    }, b.plugin = function (t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, n = t.propName,
                            i = t.priority || 0,
                            r = t.overwriteProps,
                            s = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_roundProps",
                                initAll: "_onInitAllProps"
                            },
                            o = w("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                                st.call(this, n, i), this._overwriteProps = r || []
                            }, t.global === !0),
                            a = o.prototype = new st(n);
                        a.constructor = o, o.API = t.API;
                        for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                        return o.version = t.version, st.activate([o]), o
                    }, l = s._gsQueue) {
                    for (u = 0; l.length > u; u++) l[u]();
                    for (c in x) x[c].func || s.console.log("GSAP encountered missing dependency: com.greensock." + c)
                }
                p = !1
            }
        }("undefined" != typeof t && t.exports && "undefined" != typeof s ? s : this || window, "TweenLite")
    }).call(e, function () {
        return this
    }(), n(2))
}, function (t, e, n) {
    var i, r;
    ! function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, s) {
        "use strict";

        function o(t, e) {
            e = e || ot;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function a(t) {
            var e = !!t && "length" in t && t.length,
                n = xt.type(t);
            return "function" !== n && !xt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function l(t, e, n) {
            return xt.isFunction(e) ? xt.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? xt.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? xt.grep(t, function (t) {
                return ft.call(e, t) > -1 !== n
            }) : At.test(e) ? xt.filter(e, t, n) : (e = xt.filter(e, t), xt.grep(t, function (t) {
                return ft.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function u(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function c(t) {
            var e = {};
            return xt.each(t.match(Mt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function f(t) {
            return t
        }

        function p(t) {
            throw t
        }

        function h(t, e, n) {
            var i;
            try {
                t && xt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && xt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
            } catch (t) {
                n.call(void 0, t)
            }
        }

        function d() {
            ot.removeEventListener("DOMContentLoaded", d), n.removeEventListener("load", d), xt.ready()
        }

        function g() {
            this.expando = xt.expando + g.uid++
        }

        function m(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : zt.test(t) ? JSON.parse(t) : t)
        }

        function v(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Bt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = m(n)
                    } catch (t) {}
                    Ht.set(t, e, n)
                } else n = void 0;
            return n
        }

        function y(t, e, n, i) {
            var r, s = 1,
                o = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return xt.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (xt.cssNumber[e] ? "" : "px"),
                c = (xt.cssNumber[e] || "px" !== u && +l) && Yt.exec(xt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do s = s || ".5", c /= s, xt.style(t, e, c + u); while (s !== (s = a() / l) && 1 !== s && --o)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function x(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = Gt[i];
            return r ? r : (e = n.body.appendChild(n.createElement(i)), r = xt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Gt[i] = r, r)
        }

        function _(t, e) {
            for (var n, i, r = [], s = 0, o = t.length; s < o; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (r[s] = Xt.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && Vt(i) && (r[s] = x(i))) : "none" !== n && (r[s] = "none", Xt.set(i, "display", n)));
            for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
            return t
        }

        function b(t, e) {
            var n;
            return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && xt.nodeName(t, e) ? xt.merge([t], n) : n
        }

        function w(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Xt.set(t[n], "globalEval", !e || Xt.get(e[n], "globalEval"))
        }

        function T(t, e, n, i, r) {
            for (var s, o, a, l, u, c, f = e.createDocumentFragment(), p = [], h = 0, d = t.length; h < d; h++)
                if (s = t[h], s || 0 === s)
                    if ("object" === xt.type(s)) xt.merge(p, s.nodeType ? [s] : s);
                    else if (te.test(s)) {
                for (o = o || f.appendChild(e.createElement("div")), a = (Zt.exec(s) || ["", ""])[1].toLowerCase(), l = Kt[a] || Kt._default, o.innerHTML = l[1] + xt.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
                xt.merge(p, o.childNodes), o = f.firstChild, o.textContent = ""
            } else p.push(e.createTextNode(s));
            for (f.textContent = "", h = 0; s = p[h++];)
                if (i && xt.inArray(s, i) > -1) r && r.push(s);
                else if (u = xt.contains(s.ownerDocument, s), o = b(f.appendChild(s), "script"), u && w(o), n)
                for (c = 0; s = o[c++];) Jt.test(s.type || "") && n.push(s);
            return f
        }

        function k() {
            return !0
        }

        function P() {
            return !1
        }

        function C() {
            try {
                return ot.activeElement
            } catch (t) {}
        }

        function O(t, e, n, i, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) O(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = P;
            else if (!r) return t;
            return 1 === s && (o = r, r = function (t) {
                return xt().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = xt.guid++)), t.each(function () {
                xt.event.add(this, e, r, i, n)
            })
        }

        function S(t, e) {
            return xt.nodeName(t, "table") && xt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function A(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function E(t) {
            var e = le.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function N(t, e) {
            var n, i, r, s, o, a, l, u;
            if (1 === e.nodeType) {
                if (Xt.hasData(t) && (s = Xt.access(t), o = Xt.set(e, s), u = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; n < i; n++) xt.event.add(e, r, u[r][n])
                }
                Ht.hasData(t) && (a = Ht.access(t), l = xt.extend({}, a), Ht.set(e, l))
            }
        }

        function D(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Qt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function R(t, e, n, i) {
            e = ut.apply([], e);
            var r, s, a, l, u, c, f = 0,
                p = t.length,
                h = p - 1,
                d = e[0],
                g = xt.isFunction(d);
            if (g || p > 1 && "string" == typeof d && !vt.checkClone && ae.test(d)) return t.each(function (r) {
                var s = t.eq(r);
                g && (e[0] = d.call(this, r, s.html())), R(s, e, n, i)
            });
            if (p && (r = T(e, t[0].ownerDocument, !1, t, i),
                    s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                for (a = xt.map(b(r, "script"), A), l = a.length; f < p; f++) u = r, f !== h && (u = xt.clone(u, !0, !0), l && xt.merge(a, b(u, "script"))), n.call(t[f], u, f);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, xt.map(a, E), f = 0; f < l; f++) u = a[f], Jt.test(u.type || "") && !Xt.access(u, "globalEval") && xt.contains(c, u) && (u.src ? xt._evalUrl && xt._evalUrl(u.src) : o(u.textContent.replace(ue, ""), c))
            }
            return t
        }

        function j(t, e, n) {
            for (var i, r = e ? xt.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || xt.cleanData(b(i)), i.parentNode && (n && xt.contains(i.ownerDocument, i) && w(b(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function M(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || pe(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || xt.contains(t.ownerDocument, t) || (o = xt.style(t, e)), !vt.pixelMarginRight() && fe.test(o) && ce.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
        }

        function F(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function L(t) {
            if (t in ve) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = me.length; n--;)
                if (t = me[n] + e, t in ve) return t
        }

        function q(t, e, n) {
            var i = Yt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function I(t, e, n, i, r) {
            var s, o = 0;
            for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (o += xt.css(t, n + $t[s], !0, r)), i ? ("content" === n && (o -= xt.css(t, "padding" + $t[s], !0, r)), "margin" !== n && (o -= xt.css(t, "border" + $t[s] + "Width", !0, r))) : (o += xt.css(t, "padding" + $t[s], !0, r), "padding" !== n && (o += xt.css(t, "border" + $t[s] + "Width", !0, r)));
            return o
        }

        function X(t, e, n) {
            var i, r = !0,
                s = pe(t),
                o = "border-box" === xt.css(t, "boxSizing", !1, s);
            if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
                if (i = M(t, e, s), (i < 0 || null == i) && (i = t.style[e]), fe.test(i)) return i;
                r = o && (vt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
            }
            return i + I(t, e, n || (o ? "border" : "content"), r, s) + "px"
        }

        function H(t, e, n, i, r) {
            return new H.prototype.init(t, e, n, i, r)
        }

        function z() {
            xe && (n.requestAnimationFrame(z), xt.fx.tick())
        }

        function B() {
            return n.setTimeout(function () {
                ye = void 0
            }), ye = xt.now()
        }

        function W(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = $t[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function Y(t, e, n) {
            for (var i, r = (G.tweeners[e] || []).concat(G.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function V(t, e, n) {
            var i, r, s, o, a, l, u, c, f = "width" in e || "height" in e,
                p = this,
                h = {},
                d = t.style,
                g = t.nodeType && Vt(t),
                m = Xt.get(t, "fxshow");
            n.queue || (o = xt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, p.always(function () {
                p.always(function () {
                    o.unqueued--, xt.queue(t, "fx").length || o.empty.fire()
                })
            }));
            for (i in e)
                if (r = e[i], _e.test(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || xt.style(t, i)
                }
            if (l = !xt.isEmptyObject(e), l || !xt.isEmptyObject(h)) {
                f && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = m && m.display, null == u && (u = Xt.get(t, "display")), c = xt.css(t, "display"), "none" === c && (u ? c = u : (_([t], !0), u = t.style.display || u, c = xt.css(t, "display"), _([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === xt.css(t, "float") && (l || (p.done(function () {
                    d.display = u
                }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function () {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                })), l = !1;
                for (i in h) l || (m ? "hidden" in m && (g = m.hidden) : m = Xt.access(t, "fxshow", {
                    display: u
                }), s && (m.hidden = !g), g && _([t], !0), p.done(function () {
                    g || _([t]), Xt.remove(t, "fxshow");
                    for (i in h) xt.style(t, i, h[i])
                })), l = Y(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function U(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = xt.camelCase(n), r = e[i], s = t[n], xt.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = xt.cssHooks[i], o && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function G(t, e, n) {
            var i, r, s = 0,
                o = G.prefilters.length,
                a = xt.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var e = ye || B(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(s);
                    return a.notifyWith(t, [u, s, n]), s < 1 && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: xt.extend({}, e),
                    opts: xt.extend(!0, {
                        specialEasing: {},
                        easing: xt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ye || B(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = xt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (U(c, u.opts.specialEasing); s < o; s++)
                if (i = G.prefilters[s].call(u, t, c, u.opts)) return xt.isFunction(i.stop) && (xt._queueHooks(u.elem, u.opts.queue).stop = xt.proxy(i.stop, i)), i;
            return xt.map(c, Y, u), xt.isFunction(u.opts.start) && u.opts.start.call(t, u), xt.fx.timer(xt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function Q(t) {
            var e = t.match(Mt) || [];
            return e.join(" ")
        }

        function Z(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function J(t, e, n, i) {
            var r;
            if (xt.isArray(e)) xt.each(e, function (e, r) {
                n || Ne.test(t) ? i(t, r) : J(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== xt.type(e)) i(t, e);
            else
                for (r in e) J(t + "[" + r + "]", e[r], n, i)
        }

        function K(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match(Mt) || [];
                if (xt.isFunction(n))
                    for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function tt(t, e, n, i) {
            function r(a) {
                var l;
                return s[a] = !0, xt.each(t[a] || [], function (t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var s = {},
                o = t === Be;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function et(t, e) {
            var n, i, r = xt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && xt.extend(!0, t, i), t
        }

        function nt(t, e, n) {
            for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) s = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        s = r;
                        break
                    }
                    o || (o = r)
                }
                s = s || o
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function it(t, e, n, i) {
            var r, s, o, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = u[l + " " + s] || u["* " + s], !o)
                    for (r in u)
                        if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t.throws) e = o(e);
                    else try {
                        e = o(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: o ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function rt(t) {
            return xt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var st = [],
            ot = n.document,
            at = Object.getPrototypeOf,
            lt = st.slice,
            ut = st.concat,
            ct = st.push,
            ft = st.indexOf,
            pt = {},
            ht = pt.toString,
            dt = pt.hasOwnProperty,
            gt = dt.toString,
            mt = gt.call(Object),
            vt = {},
            yt = "3.1.1",
            xt = function (t, e) {
                return new xt.fn.init(t, e)
            },
            _t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            bt = /^-ms-/,
            wt = /-([a-z])/g,
            Tt = function (t, e) {
                return e.toUpperCase()
            };
        xt.fn = xt.prototype = {
            jquery: yt,
            constructor: xt,
            length: 0,
            toArray: function () {
                return lt.call(this)
            },
            get: function (t) {
                return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = xt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return xt.each(this, t)
            },
            map: function (t) {
                return this.pushStack(xt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return this.pushStack(lt.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: ct,
            sort: st.sort,
            splice: st.splice
        }, xt.extend = xt.fn.extend = function () {
            var t, e, n, i, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || xt.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = o[e], i = t[e], o !== i && (u && i && (xt.isPlainObject(i) || (r = xt.isArray(i))) ? (r ? (r = !1, s = n && xt.isArray(n) ? n : []) : s = n && xt.isPlainObject(n) ? n : {}, o[e] = xt.extend(u, s, i)) : void 0 !== i && (o[e] = i));
            return o
        }, xt.extend({
            expando: "jQuery" + (yt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === xt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = xt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== ht.call(t)) && (!(e = at(t)) || (n = dt.call(e, "constructor") && e.constructor, "function" == typeof n && gt.call(n) === mt))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[ht.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                o(t)
            },
            camelCase: function (t) {
                return t.replace(bt, "ms-").replace(wt, Tt)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var n, i = 0;
                if (a(t))
                    for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
                else
                    for (i in t)
                        if (e.call(t[i], i, t[i]) === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(_t, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (a(Object(t)) ? xt.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : ft.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i, r = [], s = 0, o = t.length, a = !n; s < o; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
                return r
            },
            map: function (t, e, n) {
                var i, r, s = 0,
                    o = [];
                if (a(t))
                    for (i = t.length; s < i; s++) r = e(t[s], s, n), null != r && o.push(r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && o.push(r);
                return ut.apply([], o)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), xt.isFunction(t)) return i = lt.call(arguments, 2), r = function () {
                    return t.apply(e || this, i.concat(lt.call(arguments)))
                }, r.guid = t.guid = t.guid || xt.guid++, r
            },
            now: Date.now,
            support: vt
        }), "function" == typeof Symbol && (xt.fn[Symbol.iterator] = st[Symbol.iterator]), xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            pt["[object " + e + "]"] = e.toLowerCase()
        });
        var kt = function (t) {
            function e(t, e, n, i) {
                var r, s, o, a, l, u, c, p = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                if (!i && ((e ? e.ownerDocument || e : H) !== R && D(e), e = e || R, M)) {
                    if (11 !== d && (l = yt.exec(t)))
                        if (r = l[1]) {
                            if (9 === d) {
                                if (!(o = e.getElementById(r))) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (p && (o = p.getElementById(r)) && I(e, o) && o.id === r) return n.push(o), n
                        } else {
                            if (l[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (w.qsa && !V[t + " "] && (!F || !F.test(t))) {
                        if (1 !== d) p = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(wt, Tt) : e.setAttribute("id", a = X), u = C(t), s = u.length; s--;) u[s] = "#" + a + " " + h(u[s]);
                            c = u.join(","), p = xt.test(t) && f(e.parentNode) || e
                        }
                        if (c) try {
                            return K.apply(n, p.querySelectorAll(c)), n
                        } catch (t) {} finally {
                            a === X && e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[X] = !0, t
            }

            function r(t) {
                var e = R.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
            }

            function o(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Pt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function f(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function p() {}

            function h(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    s = r || i,
                    o = n && "parentNode" === s,
                    a = B++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r);
                    return !1
                } : function (e, n, l) {
                    var u, c, f, p = [z, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (f = e[X] || (e[X] = {}), c = f[e.uniqueID] || (f[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[s]) && u[0] === z && u[1] === a) return p[2] = u[2];
                                    if (c[s] = p, p[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function g(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
                return i
            }

            function v(t, e, n, i, r) {
                for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
                return o
            }

            function y(t, e, n, r, s, o) {
                return r && !r[X] && (r = y(r)), s && !s[X] && (s = y(s, o)), i(function (i, o, a, l) {
                    var u, c, f, p = [],
                        h = [],
                        d = o.length,
                        g = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? g : v(g, p, t, a, l),
                        x = n ? s || (i ? t : d || r) ? [] : o : y;
                    if (n && n(y, x, a, l), r)
                        for (u = v(x, h), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (x[h[c]] = !(y[h[c]] = f));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (u = [], c = x.length; c--;)(f = x[c]) && u.push(y[c] = f);
                                s(null, x = [], u, l)
                            }
                            for (c = x.length; c--;)(f = x[c]) && (u = s ? et(i, f) : p[c]) > -1 && (i[u] = !(o[u] = f))
                        }
                    } else x = v(x === o ? x.splice(d, x.length) : x), s ? s(null, o, x, l) : K.apply(o, x)
                })
            }

            function x(t) {
                for (var e, n, i, r = t.length, s = T.relative[t[0].type], o = s || T.relative[" "], a = s ? 1 : 0, l = d(function (t) {
                        return t === e
                    }, o, !0), u = d(function (t) {
                        return et(e, t) > -1
                    }, o, !0), c = [function (t, n, i) {
                        var r = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; a < r; a++)
                    if (n = T.relative[t[a].type]) c = [d(g(c), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[X]) {
                            for (i = ++a; i < r && !T.relative[t[i].type]; i++);
                            return y(a > 1 && g(c), a > 1 && h(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, a < i && x(t.slice(a, i)), i < r && x(t = t.slice(i)), i < r && h(t))
                        }
                        c.push(n)
                    }
                return g(c)
            }

            function _(t, n) {
                var r = n.length > 0,
                    s = t.length > 0,
                    o = function (i, o, a, l, u) {
                        var c, f, p, h = 0,
                            d = "0",
                            g = i && [],
                            m = [],
                            y = A,
                            x = i || s && T.find.TAG("*", u),
                            _ = z += null == y ? 1 : Math.random() || .1,
                            b = x.length;
                        for (u && (A = o === R || o || u); d !== b && null != (c = x[d]); d++) {
                            if (s && c) {
                                for (f = 0, o || c.ownerDocument === R || (D(c), a = !M); p = t[f++];)
                                    if (p(c, o || R, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (z = _)
                            }
                            r && ((c = !p && c) && h--, i && g.push(c))
                        }
                        if (h += d, r && d !== h) {
                            for (f = 0; p = n[f++];) p(g, m, o, a);
                            if (i) {
                                if (h > 0)
                                    for (; d--;) g[d] || m[d] || (m[d] = Z.call(l));
                                m = v(m)
                            }
                            K.apply(l, m), u && !i && m.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (z = _, A = y), g
                    };
                return r ? i(o) : o
            }
            var b, w, T, k, P, C, O, S, A, E, N, D, R, j, M, F, L, q, I, X = "sizzle" + 1 * new Date,
                H = t.document,
                z = 0,
                B = 0,
                W = n(),
                Y = n(),
                V = n(),
                U = function (t, e) {
                    return t === e && (N = !0), 0
                },
                G = {}.hasOwnProperty,
                Q = [],
                Z = Q.pop,
                J = Q.push,
                K = Q.push,
                tt = Q.slice,
                et = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ut = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ft = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                pt = new RegExp(ot),
                ht = new RegExp("^" + rt + "$"),
                dt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt + "|[*])"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xt = /[+~]/,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                bt = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Tt = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                kt = function () {
                    D()
                },
                Pt = d(function (t) {
                    return t.disabled === !0 && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(Q = tt.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
            } catch (t) {
                K = {
                    apply: Q.length ? function (t, e) {
                        J.apply(t, tt.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, P = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : H;
                return i !== R && 9 === i.nodeType && i.documentElement ? (R = i, j = R.documentElement, M = !P(R), H !== R && (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), w.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function (t) {
                    return t.appendChild(R.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(R.getElementsByClassName), w.getById = r(function (t) {
                    return j.appendChild(t).id = X, !R.getElementsByName || !R.getElementsByName(X).length
                }), w.getById ? (T.filter.ID = function (t) {
                    var e = t.replace(_t, bt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, T.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (T.filter.ID = function (t) {
                    var e = t.replace(_t, bt);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, T.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                        var n, i, r, s = e.getElementById(t);
                        if (s) {
                            if (n = s.getAttributeNode("id"), n && n.value === t) return [s];
                            for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                                if (n = s.getAttributeNode("id"), n && n.value === t) return [s]
                        }
                        return []
                    }
                }), T.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, T.find.CLASS = w.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && M) return e.getElementsByClassName(t)
                }, L = [], F = [], (w.qsa = vt.test(R.querySelectorAll)) && (r(function (t) {
                    j.appendChild(t).innerHTML = "<a id='" + X + "'></a><select id='" + X + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll("[id~=" + X + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + X + "+*").length || F.push(".#.+[+~]")
                }), r(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = R.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), j.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
                })), (w.matchesSelector = vt.test(q = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (t) {
                    w.disconnectedMatch = q.call(t, "*"), q.call(t, "[s!='']:x"), L.push("!=", ot)
                }), F = F.length && new RegExp(F.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(j.compareDocumentPosition), I = e || vt.test(j.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === R || t.ownerDocument === H && I(H, t) ? -1 : e === R || e.ownerDocument === H && I(H, e) ? 1 : E ? et(E, t) - et(E, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return N = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !s) return t === R ? -1 : e === R ? 1 : r ? -1 : s ? 1 : E ? et(E, t) - et(E, e) : 0;
                    if (r === s) return o(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? o(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
                }, R) : R
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== R && D(t), n = n.replace(ft, "='$1']"), w.matchesSelector && M && !V[n + " "] && (!L || !L.test(n)) && (!F || !F.test(n))) try {
                    var i = q.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, R, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== R && D(t), I(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== R && D(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && G.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
                return void 0 !== i ? i : w.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function (t) {
                return (t + "").replace(wt, Tt)
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (N = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(U), N) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return E = null, t
            }, k = e.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += k(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(_t, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(_t, bt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && W(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, n, i) {
                        return function (r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var u, c, f, p, h, d, g = s !== o ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                x = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (p = e; p = p[g];)
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        d = g = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                    for (p = m, f = p[X] || (p[X] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), u = c[t] || [], h = u[0] === z && u[1], x = h && u[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (x = h = 0) || d.pop();)
                                        if (1 === p.nodeType && ++x && p === e) {
                                            c[t] = [z, h, x];
                                            break
                                        }
                                } else if (y && (p = e, f = p[X] || (p[X] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), u = c[t] || [], h = u[0] === z && u[1], x = h), x === !1)
                                    for (;
                                        (p = ++h && p && p[g] || (x = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[X] || (p[X] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[t] = [z, x]), p !== e)););
                                return x -= r, x === i || x % i === 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, n) {
                        var r, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[X] ? s(n) : s.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, r = s(t, n), o = r.length; o--;) i = et(t, r[o]), t[i] = !(e[i] = r[o])
                        }) : function (t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [],
                            n = [],
                            r = O(t.replace(lt, "$1"));
                        return r[X] ? i(function (t, e, n, i) {
                            for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, i, s) {
                            return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function (t) {
                        return t = t.replace(_t, bt),
                            function (e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function (t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, bt).toLowerCase(),
                            function (e) {
                                var n;
                                do
                                    if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === j
                    },
                    focus: function (t) {
                        return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function (t) {
                        return mt.test(t.nodeName)
                    },
                    input: function (t) {
                        return gt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (t, e) {
                        return [e - 1]
                    }),
                    eq: c(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: c(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[b] = l(b);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, C = e.tokenize = function (t, n) {
                var i, r, s, o, a, l, u, c = Y[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    i && !(r = ut.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ct.exec(a)) && (i = r.shift(), s.push({
                        value: i,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(i.length));
                    for (o in T.filter) !(r = dt[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                        value: i,
                        type: o,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : Y(t, l).slice(0)
            }, O = e.compile = function (t, e) {
                var n, i = [],
                    r = [],
                    s = V[t + " "];
                if (!s) {
                    for (e || (e = C(t)), n = e.length; n--;) s = x(e[n]), s[X] ? i.push(s) : r.push(s);
                    s = V(t, _(r, i)), s.selector = t
                }
                return s
            }, S = e.select = function (t, e, n, i) {
                var r, s, o, a, l, u = "function" == typeof t && t,
                    c = !i && C(t = u.selector || t);
                if (n = n || [], 1 === c.length) {
                    if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && 9 === e.nodeType && M && T.relative[s[1].type]) {
                        if (e = (T.find.ID(o.matches[0].replace(_t, bt), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !T.relative[a = o.type]);)
                        if ((l = T.find[a]) && (i = l(o.matches[0].replace(_t, bt), xt.test(s[0].type) && f(e.parentNode) || e))) {
                            if (s.splice(r, 1), t = i.length && h(s), !t) return K.apply(n, i), n;
                            break
                        }
                }
                return (u || O(t, c))(i, e, !M, n, !e || xt.test(t) && f(e.parentNode) || e), n
            }, w.sortStable = X.split("").sort(U).join("") === X, w.detectDuplicates = !!N, D(), w.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(R.createElement("fieldset"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(nt, function (t, e, n) {
                var i;
                if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(n);
        xt.find = kt, xt.expr = kt.selectors, xt.expr[":"] = xt.expr.pseudos, xt.uniqueSort = xt.unique = kt.uniqueSort, xt.text = kt.getText, xt.isXMLDoc = kt.isXML, xt.contains = kt.contains, xt.escapeSelector = kt.escape;
        var Pt = function (t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && xt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            Ct = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            Ot = xt.expr.match.needsContext,
            St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            At = /^.[^:#\[\.,]*$/;
        xt.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? xt.find.matchesSelector(i, t) ? [i] : [] : xt.find.matches(t, xt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, xt.fn.extend({
            find: function (t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(xt(t).filter(function () {
                    for (e = 0; e < i; e++)
                        if (xt.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) xt.find(t, r[e], n);
                return i > 1 ? xt.uniqueSort(n) : n
            },
            filter: function (t) {
                return this.pushStack(l(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(l(this, t || [], !0))
            },
            is: function (t) {
                return !!l(this, "string" == typeof t && Ot.test(t) ? xt(t) : t || [], !1).length
            }
        });
        var Et, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Dt = xt.fn.init = function (t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || Et, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Nt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof xt ? e[0] : e, xt.merge(this, xt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)),
                            St.test(i[1]) && xt.isPlainObject(e))
                            for (i in e) xt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return r = ot.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : xt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(xt) : xt.makeArray(t, this)
            };
        Dt.prototype = xt.fn, Et = xt(ot);
        var Rt = /^(?:parents|prev(?:Until|All))/,
            jt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        xt.fn.extend({
            has: function (t) {
                var e = xt(t, this),
                    n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)
                        if (xt.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                var n, i = 0,
                    r = this.length,
                    s = [],
                    o = "string" != typeof t && xt(t);
                if (!Ot.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && xt.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? xt.uniqueSort(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? ft.call(xt(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), xt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return Pt(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return Pt(t, "parentNode", n)
            },
            next: function (t) {
                return u(t, "nextSibling")
            },
            prev: function (t) {
                return u(t, "previousSibling")
            },
            nextAll: function (t) {
                return Pt(t, "nextSibling")
            },
            prevAll: function (t) {
                return Pt(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return Pt(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return Pt(t, "previousSibling", n)
            },
            siblings: function (t) {
                return Ct((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return Ct(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || xt.merge([], t.childNodes)
            }
        }, function (t, e) {
            xt.fn[t] = function (n, i) {
                var r = xt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = xt.filter(i, r)), this.length > 1 && (jt[t] || xt.uniqueSort(r), Rt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var Mt = /[^\x20\t\r\n\f]+/g;
        xt.Callbacks = function (t) {
            t = "string" == typeof t ? c(t) : xt.extend({}, t);
            var e, n, i, r, s = [],
                o = [],
                a = -1,
                l = function () {
                    for (r = t.once, i = e = !0; o.length; a = -1)
                        for (n = o.shift(); ++a < s.length;) s[a].apply(n[0], n[1]) === !1 && t.stopOnFalse && (a = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                u = {
                    add: function () {
                        return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) {
                            xt.each(n, function (n, i) {
                                xt.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== xt.type(i) && e(i)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function () {
                        return xt.each(arguments, function (t, e) {
                            for (var n;
                                (n = xt.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function (t) {
                        return t ? xt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return r = o = [], s = n = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return r = o = [], n || e || (s = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], o.push(n), e || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, xt.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2], ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending",
                    r = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return r.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return xt.Deferred(function (n) {
                                xt.each(e, function (e, i) {
                                    var r = xt.isFunction(t[i[4]]) && t[i[4]];
                                    s[i[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && xt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function (t, i, r) {
                            function s(t, e, i, r) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        u = function () {
                                            var n, u;
                                            if (!(t < o)) {
                                                if (n = i.apply(a, l), n === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, xt.isFunction(u) ? r ? u.call(n, s(o, e, f, r), s(o, e, p, r)) : (o++, u.call(n, s(o, e, f, r), s(o, e, p, r), s(o, e, f, e.notifyWith))) : (i !== f && (a = void 0, l = [n]), (r || e.resolveWith)(a, l))
                                            }
                                        },
                                        c = r ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (i !== p && (a = void 0, l = [n]), e.rejectWith(a, l))
                                            }
                                        };
                                    t ? c() : (xt.Deferred.getStackHook && (c.stackTrace = xt.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var o = 0;
                            return xt.Deferred(function (n) {
                                e[0][3].add(s(0, n, xt.isFunction(r) ? r : f, n.notifyWith)), e[1][3].add(s(0, n, xt.isFunction(t) ? t : f)), e[2][3].add(s(0, n, xt.isFunction(i) ? i : p))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? xt.extend(t, r) : r
                        }
                    },
                    s = {};
                return xt.each(e, function (t, n) {
                    var o = n[2],
                        a = n[5];
                    r[n[1]] = o.add, a && o.add(function () {
                        i = a
                    }, e[3 - t][2].disable, e[0][2].lock), o.add(n[3].fire), s[n[0]] = function () {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[n[0] + "With"] = o.fireWith
                }), r.promise(s), t && t.call(s, s), s
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = lt.call(arguments),
                    s = xt.Deferred(),
                    o = function (t) {
                        return function (n) {
                            i[t] = this, r[t] = arguments.length > 1 ? lt.call(arguments) : n, --e || s.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (h(t, s.done(o(n)).resolve, s.reject), "pending" === s.state() || xt.isFunction(r[n] && r[n].then))) return s.then();
                for (; n--;) h(r[n], o(n), s.reject);
                return s.promise()
            }
        });
        var Ft = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        xt.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && Ft.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, xt.readyException = function (t) {
            n.setTimeout(function () {
                throw t
            })
        };
        var Lt = xt.Deferred();
        xt.fn.ready = function (t) {
            return Lt.then(t).catch(function (t) {
                xt.readyException(t)
            }), this
        }, xt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? xt.readyWait++ : xt.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --xt.readyWait : xt.isReady) || (xt.isReady = !0, t !== !0 && --xt.readyWait > 0 || Lt.resolveWith(ot, [xt]))
            }
        }), xt.ready.then = Lt.then, "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? n.setTimeout(xt.ready) : (ot.addEventListener("DOMContentLoaded", d), n.addEventListener("load", d));
        var qt = function (t, e, n, i, r, s, o) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === xt.type(n)) {
                    r = !0;
                    for (a in n) qt(t, e, a, n[a], !0, s, o)
                } else if (void 0 !== i && (r = !0, xt.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(xt(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
            },
            It = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        g.uid = 1, g.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, It(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[xt.camelCase(e)] = n;
                else
                    for (i in e) r[xt.camelCase(i)] = e[i];
                return r
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][xt.camelCase(e)]
            },
            access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        xt.isArray(e) ? e = e.map(xt.camelCase) : (e = xt.camelCase(e), e = e in i ? [e] : e.match(Mt) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || xt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !xt.isEmptyObject(e)
            }
        };
        var Xt = new g,
            Ht = new g,
            zt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Bt = /[A-Z]/g;
        xt.extend({
            hasData: function (t) {
                return Ht.hasData(t) || Xt.hasData(t)
            },
            data: function (t, e, n) {
                return Ht.access(t, e, n)
            },
            removeData: function (t, e) {
                Ht.remove(t, e)
            },
            _data: function (t, e, n) {
                return Xt.access(t, e, n)
            },
            _removeData: function (t, e) {
                Xt.remove(t, e)
            }
        }), xt.fn.extend({
            data: function (t, e) {
                var n, i, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Ht.get(s), 1 === s.nodeType && !Xt.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = xt.camelCase(i.slice(5)), v(s, i, r[i])));
                        Xt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    Ht.set(this, t)
                }) : qt(this, function (e) {
                    var n;
                    if (s && void 0 === e) {
                        if (n = Ht.get(s, t), void 0 !== n) return n;
                        if (n = v(s, t), void 0 !== n) return n
                    } else this.each(function () {
                        Ht.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    Ht.remove(this, t)
                })
            }
        }), xt.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Xt.get(t, e), n && (!i || xt.isArray(n) ? i = Xt.access(t, e, xt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = xt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    s = xt._queueHooks(t, e),
                    o = function () {
                        xt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Xt.get(t, n) || Xt.access(t, n, {
                    empty: xt.Callbacks("once memory").add(function () {
                        Xt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), xt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? xt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = xt.queue(this, t, e);
                    xt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && xt.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    xt.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = xt.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Xt.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Yt = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"),
            $t = ["Top", "Right", "Bottom", "Left"],
            Vt = function (t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && xt.contains(t.ownerDocument, t) && "none" === xt.css(t, "display")
            },
            Ut = function (t, e, n, i) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = n.apply(t, i || []);
                for (s in e) t.style[s] = o[s];
                return r
            },
            Gt = {};
        xt.fn.extend({
            show: function () {
                return _(this, !0)
            },
            hide: function () {
                return _(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Vt(this) ? xt(this).show() : xt(this).hide()
                })
            }
        });
        var Qt = /^(?:checkbox|radio)$/i,
            Zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Jt = /^$|\/(?:java|ecma)script/i,
            Kt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, Kt.th = Kt.td;
        var te = /<|&#?\w+;/;
        ! function () {
            var t = ot.createDocumentFragment(),
                e = t.appendChild(ot.createElement("div")),
                n = ot.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), vt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var ee = ot.documentElement,
            ne = /^key/,
            ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            re = /^([^.]*)(?:\.(.+)|)/;
        xt.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var s, o, a, l, u, c, f, p, h, d, g, m = Xt.get(t);
                if (m)
                    for (n.handler && (s = n, n = s.handler, r = s.selector), r && xt.find.matchesSelector(ee, r), n.guid || (n.guid = xt.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function (e) {
                            return "undefined" != typeof xt && xt.event.triggered !== e.type ? xt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Mt) || [""], u = e.length; u--;) a = re.exec(e[u]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h && (f = xt.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = xt.event.special[h] || {}, c = xt.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && xt.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, s), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, f.setup && f.setup.call(t, i, d, o) !== !1 || t.addEventListener && t.addEventListener(h, o)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), xt.event.global[h] = !0)
            },
            remove: function (t, e, n, i, r) {
                var s, o, a, l, u, c, f, p, h, d, g, m = Xt.hasData(t) && Xt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Mt) || [""], u = e.length; u--;)
                        if (a = re.exec(e[u]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                            for (f = xt.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            o && !p.length && (f.teardown && f.teardown.call(t, d, m.handle) !== !1 || xt.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) xt.event.remove(t, h + e[u], n, i, !0);
                    xt.isEmptyObject(l) && Xt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, n, i, r, s, o, a = xt.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Xt.get(this, "events") || {})[a.type] || [],
                    c = xt.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                    for (o = xt.event.handlers.call(this, a, u), e = 0;
                        (r = o[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((xt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, s, o, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || u.disabled !== !0)) {
                            for (s = [], o = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === o[r] && (o[r] = i.needsContext ? xt(r, this).index(u) > -1 : xt.find(r, this, null, [u]).length), o[r] && s.push(i);
                            s.length && a.push({
                                elem: u,
                                handlers: s
                            })
                        }
                return u = this, l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function (t, e) {
                Object.defineProperty(xt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: xt.isFunction(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function (t) {
                return t[xt.expando] ? t : new xt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== C() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === C() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && xt.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return xt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, xt.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, xt.Event = function (t, e) {
            return this instanceof xt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? k : P, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && xt.extend(this, e), this.timeStamp = t && t.timeStamp || xt.now(), void(this[xt.expando] = !0)) : new xt.Event(t, e)
        }, xt.Event.prototype = {
            constructor: xt.Event,
            isDefaultPrevented: P,
            isPropagationStopped: P,
            isImmediatePropagationStopped: P,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, xt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && ne.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ie.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, xt.event.addProp), xt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            xt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return r && (r === i || xt.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), xt.fn.extend({
            on: function (t, e, n, i) {
                return O(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return O(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, xt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = P), this.each(function () {
                    xt.event.remove(this, t, n, e)
                })
            }
        });
        var se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            oe = /<script|<style|<link/i,
            ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            le = /^true\/(.*)/,
            ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        xt.extend({
            htmlPrefilter: function (t) {
                return t.replace(se, "<$1></$2>")
            },
            clone: function (t, e, n) {
                var i, r, s, o, a = t.cloneNode(!0),
                    l = xt.contains(t.ownerDocument, t);
                if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || xt.isXMLDoc(t)))
                    for (o = b(a), s = b(t), i = 0, r = s.length; i < r; i++) D(s[i], o[i]);
                if (e)
                    if (n)
                        for (s = s || b(t), o = o || b(a), i = 0, r = s.length; i < r; i++) N(s[i], o[i]);
                    else N(t, a);
                return o = b(a, "script"), o.length > 0 && w(o, !l && b(t, "script")), a
            },
            cleanData: function (t) {
                for (var e, n, i, r = xt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (It(n)) {
                        if (e = n[Xt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? xt.event.remove(n, i) : xt.removeEvent(n, i, e.handle);
                            n[Xt.expando] = void 0
                        }
                        n[Ht.expando] && (n[Ht.expando] = void 0)
                    }
            }
        }), xt.fn.extend({
            detach: function (t) {
                return j(this, t, !0)
            },
            remove: function (t) {
                return j(this, t)
            },
            text: function (t) {
                return qt(this, function (t) {
                    return void 0 === t ? xt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return R(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return R(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return R(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return R(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (xt.cleanData(b(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return xt.clone(this, t, e)
                })
            },
            html: function (t) {
                return qt(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !oe.test(t) && !Kt[(Zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = xt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (xt.cleanData(b(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return R(this, arguments, function (e) {
                    var n = this.parentNode;
                    xt.inArray(this, t) < 0 && (xt.cleanData(b(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), xt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            xt.fn[t] = function (t) {
                for (var n, i = [], r = xt(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), xt(r[o])[e](n), ct.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ce = /^margin/,
            fe = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"),
            pe = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            };
        ! function () {
            function t() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ee.appendChild(o);
                    var t = n.getComputedStyle(a);
                    e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, ee.removeChild(o), a = null
                }
            }
            var e, i, r, s, o = ot.createElement("div"),
                a = ot.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), xt.extend(vt, {
                pixelPosition: function () {
                    return t(), e
                },
                boxSizingReliable: function () {
                    return t(), i
                },
                pixelMarginRight: function () {
                    return t(), r
                },
                reliableMarginLeft: function () {
                    return t(), s
                }
            }))
        }();
        var he = /^(none|table(?!-c[ea]).+)/,
            de = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ge = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            me = ["Webkit", "Moz", "ms"],
            ve = ot.createElement("div").style;
        xt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = M(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = xt.camelCase(e),
                        l = t.style;
                    return e = xt.cssProps[a] || (xt.cssProps[a] = L(a) || a), o = xt.cssHooks[e] || xt.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = Yt.exec(n)) && r[1] && (n = y(t, e, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (xt.cssNumber[a] ? "" : "px")), vt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n)), void 0)
                }
            },
            css: function (t, e, n, i) {
                var r, s, o, a = xt.camelCase(e);
                return e = xt.cssProps[a] || (xt.cssProps[a] = L(a) || a), o = xt.cssHooks[e] || xt.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = M(t, e, i)), "normal" === r && e in ge && (r = ge[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
            }
        }), xt.each(["height", "width"], function (t, e) {
            xt.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return !he.test(xt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? X(t, e, i) : Ut(t, de, function () {
                        return X(t, e, i)
                    })
                },
                set: function (t, n, i) {
                    var r, s = i && pe(t),
                        o = i && I(t, e, i, "border-box" === xt.css(t, "boxSizing", !1, s), s);
                    return o && (r = Yt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = xt.css(t, e)), q(t, n, o)
                }
            }
        }), xt.cssHooks.marginLeft = F(vt.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(M(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), xt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            xt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + $t[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            }, ce.test(t) || (xt.cssHooks[t + e].set = q)
        }), xt.fn.extend({
            css: function (t, e) {
                return qt(this, function (t, e, n) {
                    var i, r, s = {},
                        o = 0;
                    if (xt.isArray(e)) {
                        for (i = pe(t), r = e.length; o < r; o++) s[e[o]] = xt.css(t, e[o], !1, i);
                        return s
                    }
                    return void 0 !== n ? xt.style(t, e, n) : xt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), xt.Tween = H, H.prototype = {
            constructor: H,
            init: function (t, e, n, i, r, s) {
                this.elem = t, this.prop = n, this.easing = r || xt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (xt.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = H.propHooks[this.prop];
                return t && t.get ? t.get(this) : H.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = e = xt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = xt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    xt.fx.step[t.prop] ? xt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[xt.cssProps[t.prop]] && !xt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : xt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, xt.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, xt.fx = H.prototype.init, xt.fx.step = {};
        var ye, xe, _e = /^(?:toggle|show|hide)$/,
            be = /queueHooks$/;
        xt.Animation = xt.extend(G, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return y(n.elem, t, Yt.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    xt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Mt);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(e)
                },
                prefilters: [V],
                prefilter: function (t, e) {
                    e ? G.prefilters.unshift(t) : G.prefilters.push(t)
                }
            }), xt.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? xt.extend({}, t) : {
                    complete: n || !n && e || xt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !xt.isFunction(e) && e
                };
                return xt.fx.off || ot.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in xt.fx.speeds ? i.duration = xt.fx.speeds[i.duration] : i.duration = xt.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    xt.isFunction(i.old) && i.old.call(this), i.queue && xt.dequeue(this, i.queue)
                }, i
            }, xt.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Vt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var r = xt.isEmptyObject(t),
                        s = xt.speed(e, n, i),
                        o = function () {
                            var e = G(this, xt.extend({}, t), s);
                            (r || Xt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = xt.timers,
                            o = Xt.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && be.test(r) && i(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                        !e && n || xt.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = Xt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            s = xt.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, xt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), xt.each(["toggle", "show", "hide"], function (t, e) {
                var n = xt.fn[e];
                xt.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, i, r)
                }
            }), xt.each({
                slideDown: W("show"),
                slideUp: W("hide"),
                slideToggle: W("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                xt.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), xt.timers = [], xt.fx.tick = function () {
                var t, e = 0,
                    n = xt.timers;
                for (ye = xt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || xt.fx.stop(), ye = void 0
            }, xt.fx.timer = function (t) {
                xt.timers.push(t), t() ? xt.fx.start() : xt.timers.pop()
            }, xt.fx.interval = 13, xt.fx.start = function () {
                xe || (xe = n.requestAnimationFrame ? n.requestAnimationFrame(z) : n.setInterval(xt.fx.tick, xt.fx.interval))
            }, xt.fx.stop = function () {
                n.cancelAnimationFrame ? n.cancelAnimationFrame(xe) : n.clearInterval(xe), xe = null
            }, xt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, xt.fn.delay = function (t, e) {
                return t = xt.fx ? xt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function () {
                        n.clearTimeout(r)
                    }
                })
            },
            function () {
                var t = ot.createElement("input"),
                    e = ot.createElement("select"),
                    n = e.appendChild(ot.createElement("option"));
                t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = n.selected, t = ot.createElement("input"), t.value = "t", t.type = "radio", vt.radioValue = "t" === t.value
            }();
        var we, Te = xt.expr.attrHandle;
        xt.fn.extend({
            attr: function (t, e) {
                return qt(this, xt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    xt.removeAttr(this, t)
                })
            }
        }), xt.extend({
            attr: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? xt.prop(t, e, n) : (1 === s && xt.isXMLDoc(t) || (r = xt.attrHooks[e.toLowerCase()] || (xt.expr.match.bool.test(e) ? we : void 0)), void 0 !== n ? null === n ? void xt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = xt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!vt.radioValue && "radio" === e && xt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i = 0,
                    r = e && e.match(Mt);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), we = {
            set: function (t, e, n) {
                return e === !1 ? xt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, xt.each(xt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Te[e] || xt.find.attr;
            Te[e] = function (t, e, i) {
                var r, s, o = e.toLowerCase();
                return i || (s = Te[o], Te[o] = r, r = null != n(t, e, i) ? o : null, Te[o] = s), r
            }
        });
        var ke = /^(?:input|select|textarea|button)$/i,
            Pe = /^(?:a|area)$/i;
        xt.fn.extend({
            prop: function (t, e) {
                return qt(this, xt.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[xt.propFix[t] || t]
                })
            }
        }), xt.extend({
            prop: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && xt.isXMLDoc(t) || (e = xt.propFix[e] || e, r = xt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = xt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ke.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), vt.optSelected || (xt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            xt.propFix[this.toLowerCase()] = this
        }), xt.fn.extend({
            addClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (xt.isFunction(t)) return this.each(function (e) {
                    xt(this).addClass(t.call(this, e, Z(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Mt) || []; n = this[l++];)
                        if (r = Z(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = Q(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (xt.isFunction(t)) return this.each(function (e) {
                    xt(this).removeClass(t.call(this, e, Z(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Mt) || []; n = this[l++];)
                        if (r = Z(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (o = 0; s = e[o++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = Q(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : xt.isFunction(t) ? this.each(function (n) {
                    xt(this).toggleClass(t.call(this, n, Z(this), e), e);
                }) : this.each(function () {
                    var e, i, r, s;
                    if ("string" === n)
                        for (i = 0, r = xt(this), s = t.match(Mt) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = Z(this), e && Xt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Xt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + Q(Z(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Ce = /\r/g;
        xt.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = xt.isFunction(t), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, xt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : xt.isArray(r) && (r = xt.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), e = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = xt.valHooks[r.type] || xt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ce, "") : null == n ? "" : n)
                }
            }
        }), xt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = xt.find.attr(t, "value");
                        return null != e ? e : Q(xt.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, n, i, r = t.options,
                            s = t.selectedIndex,
                            o = "select-one" === t.type,
                            a = o ? null : [],
                            l = o ? s + 1 : r.length;
                        for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                            if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !xt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = xt(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, s = xt.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = xt.inArray(xt.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), xt.each(["radio", "checkbox"], function () {
            xt.valHooks[this] = {
                set: function (t, e) {
                    if (xt.isArray(e)) return t.checked = xt.inArray(xt(t).val(), e) > -1
                }
            }, vt.checkOn || (xt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Oe = /^(?:focusinfocus|focusoutblur)$/;
        xt.extend(xt.event, {
            trigger: function (t, e, i, r) {
                var s, o, a, l, u, c, f, p = [i || ot],
                    h = dt.call(t, "type") ? t.type : t,
                    d = dt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = a = i = i || ot, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(h + xt.event.triggered) && (h.indexOf(".") > -1 && (d = h.split("."), h = d.shift(), d.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[xt.expando] ? t : new xt.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : xt.makeArray(e, [t]), f = xt.event.special[h] || {}, r || !f.trigger || f.trigger.apply(i, e) !== !1)) {
                    if (!r && !f.noBubble && !xt.isWindow(i)) {
                        for (l = f.delegateType || h, Oe.test(l + h) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                        a === (i.ownerDocument || ot) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0;
                        (o = p[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : f.bindType || h, c = (Xt.get(o, "events") || {})[t.type] && Xt.get(o, "handle"), c && c.apply(o, e), c = u && o[u], c && c.apply && It(o) && (t.result = c.apply(o, e), t.result === !1 && t.preventDefault());
                    return t.type = h, r || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), e) !== !1 || !It(i) || u && xt.isFunction(i[h]) && !xt.isWindow(i) && (a = i[u], a && (i[u] = null), xt.event.triggered = h, i[h](), xt.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function (t, e, n) {
                var i = xt.extend(new xt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                xt.event.trigger(i, null, e)
            }
        }), xt.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    xt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return xt.event.trigger(t, e, n, !0)
            }
        }), xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            xt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), xt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), vt.focusin = "onfocusin" in n, vt.focusin || xt.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                xt.event.simulate(e, t.target, xt.event.fix(t))
            };
            xt.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = Xt.access(i, e);
                    r || i.addEventListener(t, n, !0), Xt.access(i, e, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = Xt.access(i, e) - 1;
                    r ? Xt.access(i, e, r) : (i.removeEventListener(t, n, !0), Xt.remove(i, e))
                }
            }
        });
        var Se = n.location,
            Ae = xt.now(),
            Ee = /\?/;
        xt.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || xt.error("Invalid XML: " + t), e
        };
        var Ne = /\[\]$/,
            De = /\r?\n/g,
            Re = /^(?:submit|button|image|reset|file)$/i,
            je = /^(?:input|select|textarea|keygen)/i;
        xt.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    var n = xt.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (xt.isArray(t) || t.jquery && !xt.isPlainObject(t)) xt.each(t, function () {
                r(this.name, this.value)
            });
            else
                for (n in t) J(n, t[n], e, r);
            return i.join("&")
        }, xt.fn.extend({
            serialize: function () {
                return xt.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = xt.prop(this, "elements");
                    return t ? xt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !xt(this).is(":disabled") && je.test(this.nodeName) && !Re.test(t) && (this.checked || !Qt.test(t))
                }).map(function (t, e) {
                    var n = xt(this).val();
                    return null == n ? null : xt.isArray(n) ? xt.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        });
        var Me = /%20/g,
            Fe = /#.*$/,
            Le = /([?&])_=[^&]*/,
            qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Xe = /^(?:GET|HEAD)$/,
            He = /^\/\//,
            ze = {},
            Be = {},
            We = "*/".concat("*"),
            Ye = ot.createElement("a");
        Ye.href = Se.href, xt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: Ie.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": We,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": xt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? et(et(t, xt.ajaxSettings), e) : et(xt.ajaxSettings, t)
            },
            ajaxPrefilter: K(ze),
            ajaxTransport: K(Be),
            ajax: function (t, e) {
                function i(t, e, i, a) {
                    var u, p, h, _, b, w = e;
                    c || (c = !0, l && n.clearTimeout(l), r = void 0, o = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (_ = nt(d, T, i)), _ = it(d, _, T, u), u ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (xt.lastModified[s] = b), b = T.getResponseHeader("etag"), b && (xt.etag[s] = b)), 204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, p = _.data, h = _.error, u = !h)) : (h = w, !t && w || (w = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || w) + "", u ? v.resolveWith(g, [p, w, T]) : v.rejectWith(g, [T, w, h]), T.statusCode(x), x = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? p : h]), y.fireWith(g, [T, w]), f && (m.trigger("ajaxComplete", [T, d]), --xt.active || xt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, s, o, a, l, u, c, f, p, h, d = xt.ajaxSetup({}, e),
                    g = d.context || d,
                    m = d.context && (g.nodeType || g.jquery) ? xt(g) : xt.event,
                    v = xt.Deferred(),
                    y = xt.Callbacks("once memory"),
                    x = d.statusCode || {},
                    _ = {},
                    b = {},
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = qe.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return c ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == c && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, _[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == c && (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (c) T.always(t[T.status]);
                                else
                                    for (e in t) x[e] = [x[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || w;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(T), d.url = ((t || d.url || Se.href) + "").replace(He, Se.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(Mt) || [""], null == d.crossDomain) {
                    u = ot.createElement("a");
                    try {
                        u.href = d.url, u.href = u.href, d.crossDomain = Ye.protocol + "//" + Ye.host != u.protocol + "//" + u.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = xt.param(d.data, d.traditional)), tt(ze, d, e, T), c) return T;
                f = xt.event && d.global, f && 0 === xt.active++ && xt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Xe.test(d.type), s = d.url.replace(Fe, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Me, "+")) : (h = d.url.slice(s.length), d.data && (s += (Ee.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (s = s.replace(Le, "$1"), h = (Ee.test(s) ? "&" : "?") + "_=" + Ae++ + h), d.url = s + h), d.ifModified && (xt.lastModified[s] && T.setRequestHeader("If-Modified-Since", xt.lastModified[s]), xt.etag[s] && T.setRequestHeader("If-None-Match", xt.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + We + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers) T.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(g, T, d) === !1 || c)) return T.abort();
                if (w = "abort", y.add(d.complete), T.done(d.success), T.fail(d.error), r = tt(Be, d, e, T)) {
                    if (T.readyState = 1, f && m.trigger("ajaxSend", [T, d]), c) return T;
                    d.async && d.timeout > 0 && (l = n.setTimeout(function () {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        c = !1, r.send(_, i)
                    } catch (t) {
                        if (c) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function (t, e, n) {
                return xt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return xt.get(t, void 0, e, "script")
            }
        }), xt.each(["get", "post"], function (t, e) {
            xt[e] = function (t, n, i, r) {
                return xt.isFunction(n) && (r = r || i, i = n, n = void 0), xt.ajax(xt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, xt.isPlainObject(t) && t))
            }
        }), xt._evalUrl = function (t) {
            return xt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, xt.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (xt.isFunction(t) && (t = t.call(this[0])), e = xt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function (t) {
                return xt.isFunction(t) ? this.each(function (e) {
                    xt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = xt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = xt.isFunction(t);
                return this.each(function (n) {
                    xt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    xt(this).replaceWith(this.childNodes)
                }), this
            }
        }), xt.expr.pseudos.hidden = function (t) {
            return !xt.expr.pseudos.visible(t)
        }, xt.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, xt.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var $e = {
                0: 200,
                1223: 204
            },
            Ve = xt.ajaxSettings.xhr();
        vt.cors = !!Ve && "withCredentials" in Ve, vt.ajax = Ve = !!Ve, xt.ajaxTransport(function (t) {
            var e, i;
            if (vt.cors || Ve && !t.crossDomain) return {
                send: function (r, s) {
                    var o, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) a.setRequestHeader(o, r[o]);
                    e = function (t) {
                        return function () {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout(function () {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            }
        }), xt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), xt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return xt.globalEval(t), t
                }
            }
        }), xt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), xt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = xt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), ot.head.appendChild(e[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ue = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        xt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ue.pop() || xt.expando + "_" + Ae++;
                return this[t] = !0, t
            }
        }), xt.ajaxPrefilter("json jsonp", function (t, e, i) {
            var r, s, o, a = t.jsonp !== !1 && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = xt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + r) : t.jsonp !== !1 && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return o || xt.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = n[r], n[r] = function () {
                o = arguments
            }, i.always(function () {
                void 0 === s ? xt(n).removeProp(r) : n[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Ue.push(r)), o && xt.isFunction(s) && s(o[0]), o = s = void 0
            }), "script"
        }), vt.createHTMLDocument = function () {
            var t = ot.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), xt.parseHTML = function (t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, r, s;
            return e || (vt.createHTMLDocument ? (e = ot.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = ot.location.href, e.head.appendChild(i)) : e = ot), r = St.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = T([t], e, s), s && s.length && xt(s).remove(), xt.merge([], r.childNodes))
        }, xt.fn.load = function (t, e, n) {
            var i, r, s, o = this,
                a = t.indexOf(" ");
            return a > -1 && (i = Q(t.slice(a)), t = t.slice(0, a)), xt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && xt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, o.html(i ? xt("<div>").append(xt.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                o.each(function () {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            xt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), xt.expr.pseudos.animated = function (t) {
            return xt.grep(xt.timers, function (e) {
                return t === e.elem
            }).length
        }, xt.offset = {
            setOffset: function (t, e, n) {
                var i, r, s, o, a, l, u, c = xt.css(t, "position"),
                    f = xt(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), a = f.offset(), s = xt.css(t, "top"), l = xt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = f.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), xt.isFunction(e) && (e = e.call(t, n, xt.extend({}, a))), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : f.css(p)
            }
        }, xt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    xt.offset.setOffset(this, t, e)
                });
                var e, n, i, r, s = this[0];
                if (s) return s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (r = s.ownerDocument, n = rt(r), e = r.documentElement, {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === xt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), xt.nodeName(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + xt.css(t[0], "borderTopWidth", !0),
                        left: i.left + xt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - xt.css(n, "marginTop", !0),
                        left: e.left - i.left - xt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === xt.css(t, "position");) t = t.offsetParent;
                    return t || ee
                })
            }
        }), xt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = "pageYOffset" === e;
            xt.fn[t] = function (i) {
                return qt(this, function (t, i, r) {
                    var s = rt(t);
                    return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
                }, t, i, arguments.length)
            }
        }), xt.each(["top", "left"], function (t, e) {
            xt.cssHooks[e] = F(vt.pixelPosition, function (t, n) {
                if (n) return n = M(t, e), fe.test(n) ? xt(t).position()[e] + "px" : n
            })
        }), xt.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            xt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                xt.fn[i] = function (r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || s === !0 ? "margin" : "border");
                    return qt(this, function (e, n, r) {
                        var s;
                        return xt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? xt.css(e, n, a) : xt.style(e, n, r, a)
                    }, e, o ? r : void 0, o)
                }
            })
        }), xt.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), xt.parseJSON = JSON.parse, i = [], r = function () {
            return xt
        }.apply(e, i), !(void 0 !== r && (t.exports = r));
        var Qe = n.jQuery,
            Ze = n.$;
        return xt.noConflict = function (t) {
            return n.$ === xt && (n.$ = Ze), t && n.jQuery === xt && (n.jQuery = Qe), xt
        }, s || (n.jQuery = n.$ = xt), xt
    })
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(e, {})
}, function (t, e) {
    (function (e) {
        var n = "undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window;
        (n._gsQueue || (n._gsQueue = [])).push(function () {
                "use strict";
                n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                    var i, r, s, o, a = function () {
                            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                        },
                        l = n._gsDefine.globals,
                        u = {},
                        c = a.prototype = new t("css");
                    c.constructor = a, a.version = "1.19.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = {
                        top: c,
                        right: c,
                        bottom: c,
                        left: c,
                        width: c,
                        height: c,
                        fontSize: c,
                        padding: c,
                        margin: c,
                        perspective: c,
                        lineHeight: ""
                    };
                    var f, p, h, d, g, m, v, y, x = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        T = /(?:\d|\-|\+|=|#|\.)*/g,
                        k = /opacity *= *([^)]*)/i,
                        P = /opacity:([^;]*)/i,
                        C = /alpha\(opacity *=.+?\)/i,
                        O = /^(rgb|hsl)/,
                        S = /([A-Z])/g,
                        A = /-([a-z])/gi,
                        E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        N = function (t, e) {
                            return e.toUpperCase()
                        },
                        D = /(?:Left|Right|Width)/i,
                        R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        M = /,(?=[^\)]*(?:\(|$))/gi,
                        F = /[\s,\(]/i,
                        L = Math.PI / 180,
                        q = 180 / Math.PI,
                        I = {},
                        X = document,
                        H = function (t) {
                            return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                        },
                        z = H("div"),
                        B = H("img"),
                        W = a._internals = {
                            _specialProps: u
                        },
                        Y = navigator.userAgent,
                        V = function () {
                            var t = Y.indexOf("Android"),
                                e = H("a");
                            return h = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), g = h && Number(Y.substr(Y.indexOf("Version/") + 8, 1)) < 6, d = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                        }(),
                        $ = function (t) {
                            return k.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                        },
                        U = function (t) {
                            window.console && console.log(t)
                        },
                        G = "",
                        Q = "",
                        Z = function (t, e) {
                            e = e || z;
                            var n, i, r = e.style;
                            if (void 0 !== r[t]) return t;
                            for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
                            return i >= 0 ? (Q = 3 === i ? "ms" : n[i], G = "-" + Q.toLowerCase() + "-", Q + t) : null
                        },
                        J = X.defaultView ? X.defaultView.getComputedStyle : function () {},
                        K = a.getStyle = function (t, e, n, i, r) {
                            var s;
                            return V || "opacity" !== e ? (!i && t.style[e] ? s = t.style[e] : (n = n || J(t)) ? s = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : $(t)
                        },
                        tt = W.convertToPixels = function (t, n, i, r, s) {
                            if ("px" === r || !r) return i;
                            if ("auto" === r || !i) return 0;
                            var o, l, u, c = D.test(n),
                                f = t,
                                p = z.style,
                                h = 0 > i,
                                d = 1 === i;
                            if (h && (i = -i), d && (i *= 100), "%" === r && -1 !== n.indexOf("border")) o = i / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && f.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                                else {
                                    if (f = t.parentNode || X.body, l = f._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * i / 100;
                                    p[c ? "width" : "height"] = i + r
                                }
                                f.appendChild(z), o = parseFloat(z[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(z), c && "%" === r && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = u, l.width = o / i * 100), 0 !== o || s || (o = tt(t, n, i, r, !0))
                            }
                            return d && (o /= 100), h ? -o : o
                        },
                        et = W.calculateOffset = function (t, e, n) {
                            if ("absolute" !== K(t, "position", n)) return 0;
                            var i = "left" === e ? "Left" : "Top",
                                r = K(t, "margin" + i, n);
                            return t["offset" + i] - (tt(t, e, parseFloat(r), r.replace(T, "")) || 0)
                        },
                        nt = function (t, e) {
                            var n, i, r, s = {};
                            if (e = e || J(t, null))
                                if (n = e.length)
                                    for (; --n > -1;) r = e[n], (-1 === r.indexOf("-transform") || At === r) && (s[r.replace(A, N)] = e.getPropertyValue(r));
                                else
                                    for (n in e)(-1 === n.indexOf("Transform") || St === n) && (s[n] = e[n]);
                            else if (e = t.currentStyle || t.style)
                                for (n in e) "string" == typeof n && void 0 === s[n] && (s[n.replace(A, N)] = e[n]);
                            return V || (s.opacity = $(t)), i = zt(t, e, !1), s.rotation = i.rotation, s.skewX = i.skewX, s.scaleX = i.scaleX, s.scaleY = i.scaleY, s.x = i.x, s.y = i.y, Nt && (s.z = i.z, s.rotationX = i.rotationX, s.rotationY = i.rotationY, s.scaleZ = i.scaleZ), s.filters && delete s.filters, s
                        },
                        it = function (t, e, n, i, r) {
                            var s, o, a, l = {},
                                u = t.style;
                            for (o in n) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = n[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : et(t, o), void 0 !== u[o] && (a = new yt(u, o, u[o], a)));
                            if (i)
                                for (o in i) "className" !== o && (l[o] = i[o]);
                            return {
                                difs: l,
                                firstMPT: a
                            }
                        },
                        rt = {
                            width: ["Left", "Right"],
                            height: ["Top", "Bottom"]
                        },
                        st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        ot = function (t, e, n) {
                            if ("svg" === (t.nodeName + "").toLowerCase()) return (n || J(t))[e] || 0;
                            if (t.getBBox && It(t)) return t.getBBox()[e] || 0;
                            var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                r = rt[e],
                                s = r.length;
                            for (n = n || J(t, null); --s > -1;) i -= parseFloat(K(t, "padding" + r[s], n, !0)) || 0, i -= parseFloat(K(t, "border" + r[s] + "Width", n, !0)) || 0;
                            return i
                        },
                        at = function (t, e) {
                            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                            (null == t || "" === t) && (t = "0 0");
                            var n, i = t.split(" "),
                                r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                                s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                            if (i.length > 3 && !e) {
                                for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(at(i[n]));
                                return t.join(",")
                            }
                            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(s.replace(w, "")), e.v = t), e || t
                        },
                        lt = function (t, e) {
                            return "function" == typeof t && (t = t(y, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                        },
                        ut = function (t, e) {
                            return "function" == typeof t && (t = t(y, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                        },
                        ct = function (t, e, n, i) {
                            var r, s, o, a, l, u = 1e-6;
                            return "function" == typeof t && (t = t(y, v)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : q) - (l ? 0 : e), s.length && (i && (i[n] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                        },
                        ft = {
                            aqua: [0, 255, 255],
                            lime: [0, 255, 0],
                            silver: [192, 192, 192],
                            black: [0, 0, 0],
                            maroon: [128, 0, 0],
                            teal: [0, 128, 128],
                            blue: [0, 0, 255],
                            navy: [0, 0, 128],
                            white: [255, 255, 255],
                            fuchsia: [255, 0, 255],
                            olive: [128, 128, 0],
                            yellow: [255, 255, 0],
                            orange: [255, 165, 0],
                            gray: [128, 128, 128],
                            purple: [128, 0, 128],
                            green: [0, 128, 0],
                            red: [255, 0, 0],
                            pink: [255, 192, 203],
                            cyan: [0, 255, 255],
                            transparent: [255, 255, 255, 0]
                        },
                        pt = function (t, e, n) {
                            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                        },
                        ht = a.parseColor = function (t, e) {
                            var n, i, r, s, o, a, l, u, c, f, p;
                            if (t)
                                if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                                else {
                                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) n = ft[t];
                                    else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + i + i + r + r + s + s), t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (n = p = t.match(x), e) {
                                            if (-1 !== t.indexOf("=")) return t.match(_)
                                        } else o = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, l = Number(n[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, i = 2 * l - r, n.length > 3 && (n[3] = Number(t[3])), n[0] = pt(o + 1 / 3, i, r), n[1] = pt(o, i, r), n[2] = pt(o - 1 / 3, i, r);
                                    else n = t.match(x) || ft.transparent;
                                    n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                                }
                            else n = ft.black;
                            return e && !p && (i = n[0] / 255, r = n[1] / 255, s = n[2] / 255, u = Math.max(i, r, s), c = Math.min(i, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (f = u - c, a = l > .5 ? f / (2 - u - c) : f / (u + c), o = u === i ? (r - s) / f + (s > r ? 6 : 0) : u === r ? (s - i) / f + 2 : (i - r) / f + 4, o *= 60), n[0] = o + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                        },
                        dt = function (t, e) {
                            var n, i, r, s = t.match(gt) || [],
                                o = 0,
                                a = s.length ? "" : t;
                            for (n = 0; n < s.length; n++) i = s[n], r = t.substr(o, t.indexOf(i, o) - o), o += r.length + i.length, i = ht(i, e), 3 === i.length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                            return a + t.substr(o)
                        },
                        gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (c in ft) gt += "|" + c + "\\b";
                    gt = new RegExp(gt + ")", "gi"), a.colorStringFilter = function (t) {
                        var e, n = t[0] + t[1];
                        gt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = dt(t[0], e), t[1] = dt(t[1], e)), gt.lastIndex = 0
                    }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                    var mt = function (t, e, n, i) {
                            if (null == t) return function (t) {
                                return t
                            };
                            var r, s = e ? (t.match(gt) || [""])[0] : "",
                                o = t.split(s).join("").match(b) || [],
                                a = t.substr(0, t.indexOf(o[0])),
                                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                u = -1 !== t.indexOf(" ") ? " " : ",",
                                c = o.length,
                                f = c > 0 ? o[0].replace(x, "") : "";
                            return c ? r = e ? function (t) {
                                var e, p, h, d;
                                if ("number" == typeof t) t += f;
                                else if (i && M.test(t)) {
                                    for (d = t.replace(M, "|").split("|"), h = 0; h < d.length; h++) d[h] = r(d[h]);
                                    return d.join(",")
                                }
                                if (e = (t.match(gt) || [s])[0], p = t.split(e).join("").match(b) || [], h = p.length, c > h--)
                                    for (; ++h < c;) p[h] = n ? p[(h - 1) / 2 | 0] : o[h];
                                return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                            } : function (t) {
                                var e, s, p;
                                if ("number" == typeof t) t += f;
                                else if (i && M.test(t)) {
                                    for (s = t.replace(M, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]);
                                    return s.join(",")
                                }
                                if (e = t.match(b) || [], p = e.length, c > p--)
                                    for (; ++p < c;) e[p] = n ? e[(p - 1) / 2 | 0] : o[p];
                                return a + e.join(u) + l
                            } : function (t) {
                                return t
                            }
                        },
                        vt = function (t) {
                            return t = t.split(","),
                                function (e, n, i, r, s, o, a) {
                                    var l, u = (n + "").split(" ");
                                    for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                    return r.parse(e, a, s, o)
                                }
                        },
                        yt = (W._setPluginRatio = function (t) {
                            this.plugin.setRatio(t);
                            for (var e, n, i, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
                            if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                    if (n = l.t, n.type) {
                                        if (1 === n.type) {
                                            for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                            n[s] = r
                                        }
                                    } else n[s] = n.s + n.xs0;
                                    l = l._next
                                }
                        }, function (t, e, n, i, r) {
                            this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                        }),
                        xt = (W._parseToProxy = function (t, e, n, i, r, s) {
                            var o, a, l, u, c, f = i,
                                p = {},
                                h = {},
                                d = n._transform,
                                g = I;
                            for (n._transform = null, I = e, i = c = n.parse(t, e, i, r), I = g, s && (n._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
                                if (i.type <= 1 && (a = i.p, h[a] = i.s + i.c, p[a] = i.s, s || (u = new yt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                                    for (o = i.l; --o > 0;) l = "xn" + o, a = i.p + "_" + l, h[a] = i.data[l], p[a] = i[l], s || (u = new yt(i, l, a, u, i.rxp[l]));
                                i = i._next
                            }
                            return {
                                proxy: p,
                                end: h,
                                firstMPT: u,
                                pt: c
                            }
                        }, W.CSSPropTween = function (t, e, n, r, s, a, l, u, c, f, p) {
                            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof xt || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === f ? n : f, this.e = void 0 === p ? n + r : p, s && (this._next = s, s._prev = this)
                        }),
                        _t = function (t, e, n, i, r, s) {
                            var o = new xt(t, e, n, i - n, r, -1, s);
                            return o.b = n, o.e = o.xs0 = i, o
                        },
                        bt = a.parseComplex = function (t, e, n, i, r, s, o, l, u, c) {
                            n = n || s || "", "function" == typeof i && (i = i(y, v)), o = new xt(t, e, 0, 0, o, c ? 2 : 1, null, !1, l, n, i), i += "", r && gt.test(i + n) && (i = [n, i], a.colorStringFilter(i), n = i[0], i = i[1]);
                            var p, h, d, g, m, b, w, T, k, P, C, O, S, A = n.split(", ").join(",").split(" "),
                                E = i.split(", ").join(",").split(" "),
                                N = A.length,
                                D = f !== !1;
                            for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (A = A.join(" ").replace(M, ", ").split(" "), E = E.join(" ").replace(M, ", ").split(" "), N = A.length), N !== E.length && (A = (s || "").split(" "), N = A.length), o.plugin = u, o.setRatio = c, gt.lastIndex = 0, p = 0; N > p; p++)
                                if (g = A[p], m = E[p], T = parseFloat(g), T || 0 === T) o.appendXtra("", T, lt(m, T), m.replace(_, ""), D && -1 !== m.indexOf("px"), !0);
                                else if (r && gt.test(g)) O = m.indexOf(")") + 1, O = ")" + (O ? m.substr(O) : ""), S = -1 !== m.indexOf("hsl") && V, g = ht(g, S), m = ht(m, S), k = g.length + m.length > 6, k && !V && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(E[p]).join("transparent")) : (V || (k = !1), S ? o.appendXtra(k ? "hsla(" : "hsl(", g[0], lt(m[0], g[0]), ",", !1, !0).appendXtra("", g[1], lt(m[1], g[1]), "%,", !1).appendXtra("", g[2], lt(m[2], g[2]), k ? "%," : "%" + O, !1) : o.appendXtra(k ? "rgba(" : "rgb(", g[0], m[0] - g[0], ",", !0, !0).appendXtra("", g[1], m[1] - g[1], ",", !0).appendXtra("", g[2], m[2] - g[2], k ? "," : O, !0), k && (g = g.length < 4 ? 1 : g[3], o.appendXtra("", g, (m.length < 4 ? 1 : m[3]) - g, O, !1))), gt.lastIndex = 0;
                            else if (b = g.match(x)) {
                                if (w = m.match(_), !w || w.length !== b.length) return o;
                                for (d = 0, h = 0; h < b.length; h++) C = b[h], P = g.indexOf(C, d), o.appendXtra(g.substr(d, P - d), Number(C), lt(w[h], C), "", D && "px" === g.substr(P + C.length, 2), 0 === h), d = P + C.length;
                                o["xs" + o.l] += g.substr(d)
                            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + m : m;
                            if (-1 !== i.indexOf("=") && o.data) {
                                for (O = o.xs0 + o.data.s, p = 1; p < o.l; p++) O += o["xs" + p] + o.data["xn" + p];
                                o.e = O + o["xs" + p]
                            }
                            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                        },
                        wt = 9;
                    for (c = xt.prototype, c.l = c.pr = 0; --wt > 0;) c["xn" + wt] = 0, c["xs" + wt] = "";
                    c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (t, e, n, i, r, s) {
                        var o = this,
                            a = o.l;
                        return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", n || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = i || "", a > 0 ? (o.data["xn" + a] = e + n, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new xt(o, "xn" + a, e, n, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                            s: e + n
                        }, o.rxp = {}, o.s = e, o.c = n, o.r = r, o)) : (o["xs" + a] += e + (i || ""), o)
                    };
                    var Tt = function (t, e) {
                            e = e || {}, this.p = e.prefix ? Z(t) || t : t, u[t] = u[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                        },
                        kt = W._registerComplexSpecialProp = function (t, e, n) {
                            "object" != typeof e && (e = {
                                parser: n
                            });
                            var i, r, s = t.split(","),
                                o = e.defaultValue;
                            for (n = n || [o], i = 0; i < s.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || o,
                                r = new Tt(s[i], e)
                        },
                        Pt = W._registerPluginProp = function (t) {
                            if (!u[t]) {
                                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                kt(t, {
                                    parser: function (t, n, i, r, s, o, a) {
                                        var c = l.com.greensock.plugins[e];
                                        return c ? (c._cssRegister(), u[i].parse(t, n, i, r, s, o, a)) : (U("Error: " + e + " js file not loaded."), s)
                                    }
                                })
                            }
                        };
                    c = Tt.prototype, c.parseComplex = function (t, e, n, i, r, s) {
                        var o, a, l, u, c, f, p = this.keyword;
                        if (this.multi && (M.test(n) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = n.replace(M, "|").split("|")) : p && (a = [e], l = [n])), l) {
                            for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, n = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), f = n.indexOf(p), c !== f && (-1 === f ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                            e = a.join(", "), n = l.join(", ")
                        }
                        return bt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, s)
                    }, c.parse = function (t, e, n, i, r, o, a) {
                        return this.parseComplex(t.style, this.format(K(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                    }, a.registerSpecialProp = function (t, e, n) {
                        kt(t, {
                            parser: function (t, i, r, s, o, a, l) {
                                var u = new xt(t, r, 0, 0, o, 2, r, !1, n);
                                return u.plugin = a, u.setRatio = e(t, i, s._tween, r), u
                            },
                            priority: n
                        })
                    }, a.useSVGTransformAttr = h || d;
                    var Ct, Ot = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        St = Z("transform"),
                        At = G + "transform",
                        Et = Z("transformOrigin"),
                        Nt = null !== Z("perspective"),
                        Dt = W.Transform = function () {
                            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !Nt) && (a.defaultForce3D || "auto")
                        },
                        Rt = window.SVGElement,
                        jt = function (t, e, n) {
                            var i, r = X.createElementNS("http://www.w3.org/2000/svg", t),
                                s = /([a-z])([A-Z])/g;
                            for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
                            return e.appendChild(r), r
                        },
                        Mt = X.documentElement,
                        Ft = function () {
                            var t, e, n, i = m || /Android/i.test(Y) && !window.chrome;
                            return X.createElementNS && !i && (t = jt("svg", Mt), e = jt("rect", t, {
                                width: 100,
                                height: 50,
                                x: 100
                            }), n = e.getBoundingClientRect().width, e.style[Et] = "50% 50%", e.style[St] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(d && Nt), Mt.removeChild(t)), i
                        }(),
                        Lt = function (t, e, n, i, r, s) {
                            var o, l, u, c, f, p, h, d, g, m, v, y, x, _, b = t._gsTransform,
                                w = Ht(t, !0);
                            b && (x = b.xOrigin, _ = b.yOrigin), (!i || (o = i.split(" ")).length < 2) && (h = t.getBBox(), e = at(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), n.xOrigin = c = parseFloat(o[0]), n.yOrigin = f = parseFloat(o[1]), i && w !== Xt && (p = w[0], h = w[1], d = w[2], g = w[3], m = w[4], v = w[5], y = p * g - h * d, l = c * (g / y) + f * (-d / y) + (d * v - g * m) / y, u = c * (-h / y) + f * (p / y) - (p * v - h * m) / y, c = n.xOrigin = o[0] = l, f = n.yOrigin = o[1] = u), b && (s && (n.xOffset = b.xOffset, n.yOffset = b.yOffset, b = n), r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (l = c - x, u = f - _, b.xOffset += l * w[0] + u * w[2] - l, b.yOffset += l * w[1] + u * w[3] - u) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                        },
                        qt = function (t) {
                            try {
                                return t.getBBox()
                            } catch (t) {}
                        },
                        It = function (t) {
                            return !!(Rt && t.getBBox && t.getCTM && qt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                        },
                        Xt = [1, 0, 0, 1, 0, 0],
                        Ht = function (t, e) {
                            var n, i, r, s, o, a, l = t._gsTransform || new Dt,
                                u = 1e5,
                                c = t.style;
                            if (St ? i = K(t, At, null, !0) : t.currentStyle && (i = t.currentStyle.filter.match(R), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, n && St && ((a = "none" === J(t).display) || !t.parentNode) && (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, Mt.appendChild(t)), i = K(t, At, null, !0), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, s ? c.display = s : a && $t(c, "display"), o && Mt.removeChild(t)), (l.svg || t.getBBox && It(t)) && (n && -1 !== (c[St] + "").indexOf("matrix") && (i = c[St], n = 0), r = t.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Xt;
                            for (r = (i || "").match(x) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (o * u + (0 > o ? -.5 : .5) | 0) / u + s : s;
                            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                        },
                        zt = W.getTransform = function (t, n, i, r) {
                            if (t._gsTransform && i && !r) return t._gsTransform;
                            var s, o, l, u, c, f, p = i ? t._gsTransform || new Dt : new Dt,
                                h = p.scaleX < 0,
                                d = 2e-5,
                                g = 1e5,
                                m = Nt ? parseFloat(K(t, Et, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                                v = parseFloat(a.defaultTransformPerspective) || 0;
                            if (p.svg = !(!t.getBBox || !It(t)), p.svg && (Lt(t, K(t, Et, n, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Ct = a.useSVGTransformAttr || Ft), s = Ht(t), s !== Xt) {
                                if (16 === s.length) {
                                    var y, x, _, b, w, T = s[0],
                                        k = s[1],
                                        P = s[2],
                                        C = s[3],
                                        O = s[4],
                                        S = s[5],
                                        A = s[6],
                                        E = s[7],
                                        N = s[8],
                                        D = s[9],
                                        R = s[10],
                                        j = s[12],
                                        M = s[13],
                                        F = s[14],
                                        L = s[11],
                                        I = Math.atan2(A, R);
                                    p.zOrigin && (F = -p.zOrigin, j = N * F - s[12], M = D * F - s[13], F = R * F + p.zOrigin - s[14]), p.rotationX = I * q, I && (b = Math.cos(-I), w = Math.sin(-I), y = O * b + N * w, x = S * b + D * w, _ = A * b + R * w, N = O * -w + N * b, D = S * -w + D * b, R = A * -w + R * b, L = E * -w + L * b, O = y, S = x, A = _), I = Math.atan2(-P, R), p.rotationY = I * q, I && (b = Math.cos(-I), w = Math.sin(-I), y = T * b - N * w, x = k * b - D * w, _ = P * b - R * w, D = k * w + D * b, R = P * w + R * b, L = C * w + L * b, T = y, k = x, P = _), I = Math.atan2(k, T), p.rotation = I * q, I && (b = Math.cos(-I), w = Math.sin(-I), T = T * b + O * w, x = k * b + S * w, S = k * -w + S * b, A = P * -w + A * b, k = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(T * T + k * k) * g + .5 | 0) / g, p.scaleY = (Math.sqrt(S * S + D * D) * g + .5 | 0) / g, p.scaleZ = (Math.sqrt(A * A + R * R) * g + .5 | 0) / g, p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = O || S ? Math.atan2(O, S) * q + p.rotation : p.skewX || 0, Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (h ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180))), p.perspective = L ? 1 / (0 > L ? -L : L) : 0, p.x = j, p.y = M, p.z = F, p.svg && (p.x -= p.xOrigin - (p.xOrigin * T - p.yOrigin * O), p.y -= p.yOrigin - (p.yOrigin * k - p.xOrigin * S))
                                } else if (!Nt || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                                    var X = s.length >= 6,
                                        H = X ? s[0] : 1,
                                        z = s[1] || 0,
                                        B = s[2] || 0,
                                        W = X ? s[3] : 1;
                                    p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(H * H + z * z), u = Math.sqrt(W * W + B * B), c = H || z ? Math.atan2(z, H) * q : p.rotation || 0, f = B || W ? Math.atan2(B, W) * q + c : p.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (h ? (l *= -1, f += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = l, p.scaleY = u, p.rotation = c, p.skewX = f, Nt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * B), p.y -= p.yOrigin - (p.xOrigin * z + p.yOrigin * W))
                                }
                                p.zOrigin = m;
                                for (o in p) p[o] < d && p[o] > -d && (p[o] = 0)
                            }
                            return i && (t._gsTransform = p, p.svg && (Ct && t.style[St] ? e.delayedCall(.001, function () {
                                $t(t.style, St)
                            }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function () {
                                t.removeAttribute("transform")
                            }))), p
                        },
                        Bt = function (t) {
                            var e, n, i = this.data,
                                r = -i.rotation * L,
                                s = r + i.skewX * L,
                                o = 1e5,
                                a = (Math.cos(r) * i.scaleX * o | 0) / o,
                                l = (Math.sin(r) * i.scaleX * o | 0) / o,
                                u = (Math.sin(s) * -i.scaleY * o | 0) / o,
                                c = (Math.cos(s) * i.scaleY * o | 0) / o,
                                f = this.t.style,
                                p = this.t.currentStyle;
                            if (p) {
                                n = l, l = -u, u = -n, e = p.filter, f.filter = "";
                                var h, d, g = this.t.offsetWidth,
                                    v = this.t.offsetHeight,
                                    y = "absolute" !== p.position,
                                    x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                    _ = i.x + g * i.xPercent / 100,
                                    b = i.y + v * i.yPercent / 100;
                                if (null != i.ox && (h = (i.oxp ? g * i.ox * .01 : i.ox) - g / 2, d = (i.oyp ? v * i.oy * .01 : i.oy) - v / 2, _ += h - (h * a + d * l), b += d - (h * u + d * c)), y ? (h = g / 2, d = v / 2, x += ", Dx=" + (h - (h * a + d * l) + _) + ", Dy=" + (d - (h * u + d * c) + b) + ")") : x += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = e.replace(j, x) : f.filter = x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === x.indexOf("Dx=0, Dy=0") || k.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && f.removeAttribute("filter")), !y) {
                                    var w, P, C, O = 8 > m ? 1 : -1;
                                    for (h = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + _), i.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > u ? -u : u) * g)) / 2 + b), wt = 0; 4 > wt; wt++) P = st[wt], w = p[P], n = -1 !== w.indexOf("px") ? parseFloat(w) : tt(this.t, P, parseFloat(w), w.replace(T, "")) || 0, C = n !== i[P] ? 2 > wt ? -i.ieOffsetX : -i.ieOffsetY : 2 > wt ? h - i.ieOffsetX : d - i.ieOffsetY, f[P] = (i[P] = Math.round(n - C * (0 === wt || 2 === wt ? 1 : O))) + "px"
                                }
                            }
                        },
                        Wt = W.set3DTransformRatio = W.setTransformRatio = function (t) {
                            var e, n, i, r, s, o, a, l, u, c, f, p, h, g, m, v, y, x, _, b, w, T, k, P = this.data,
                                C = this.t.style,
                                O = P.rotation,
                                S = P.rotationX,
                                A = P.rotationY,
                                E = P.scaleX,
                                N = P.scaleY,
                                D = P.scaleZ,
                                R = P.x,
                                j = P.y,
                                M = P.z,
                                F = P.svg,
                                q = P.perspective,
                                I = P.force3D;
                            if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !M && !q && !A && !S && 1 === D || Ct && F || !Nt) return void(O || P.skewX || F ? (O *= L, T = P.skewX * L, k = 1e5, e = Math.cos(O) * E, r = Math.sin(O) * E, n = Math.sin(O - T) * -N, s = Math.cos(O - T) * N, T && "simple" === P.skewType && (y = Math.tan(T - P.skewY * L), y = Math.sqrt(1 + y * y), n *= y, s *= y, P.skewY && (y = Math.tan(P.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y)), F && (R += P.xOrigin - (P.xOrigin * e + P.yOrigin * n) + P.xOffset, j += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset, Ct && (P.xPercent || P.yPercent) && (g = this.t.getBBox(), R += .01 * P.xPercent * g.width, j += .01 * P.yPercent * g.height), g = 1e-6, g > R && R > -g && (R = 0), g > j && j > -g && (j = 0)), _ = (e * k | 0) / k + "," + (r * k | 0) / k + "," + (n * k | 0) / k + "," + (s * k | 0) / k + "," + R + "," + j + ")", F && Ct ? this.t.setAttribute("transform", "matrix(" + _) : C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + _) : C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + N + "," + R + "," + j + ")");
                            if (d && (g = 1e-4, g > E && E > -g && (E = D = 2e-5), g > N && N > -g && (N = D = 2e-5), !q || P.z || P.rotationX || P.rotationY || (q = 0)), O || P.skewX) O *= L, m = e = Math.cos(O), v = r = Math.sin(O), P.skewX && (O -= P.skewX * L, m = Math.cos(O), v = Math.sin(O), "simple" === P.skewType && (y = Math.tan((P.skewX - P.skewY) * L), y = Math.sqrt(1 + y * y), m *= y, v *= y, P.skewY && (y = Math.tan(P.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y))), n = -v, s = m;
                            else {
                                if (!(A || S || 1 !== D || q || F)) return void(C[St] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + j + "px," + M + "px)" + (1 !== E || 1 !== N ? " scale(" + E + "," + N + ")" : ""));
                                e = s = 1, n = r = 0
                            }
                            u = 1, i = o = a = l = c = f = 0, p = q ? -1 / q : 0, h = P.zOrigin, g = 1e-6, b = ",", w = "0", O = A * L, O && (m = Math.cos(O), v = Math.sin(O), a = -v, c = p * -v, i = e * v, o = r * v, u = m, p *= m, e *= m, r *= m), O = S * L, O && (m = Math.cos(O), v = Math.sin(O), y = n * m + i * v, x = s * m + o * v, l = u * v, f = p * v, i = n * -v + i * m, o = s * -v + o * m, u *= m, p *= m, n = y, s = x), 1 !== D && (i *= D, o *= D, u *= D, p *= D), 1 !== N && (n *= N, s *= N, l *= N, f *= N), 1 !== E && (e *= E, r *= E, a *= E, c *= E), (h || F) && (h && (R += i * -h, j += o * -h, M += u * -h + h), F && (R += P.xOrigin - (P.xOrigin * e + P.yOrigin * n) + P.xOffset, j += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset), g > R && R > -g && (R = w), g > j && j > -g && (j = w), g > M && M > -g && (M = 0)), _ = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", _ += (g > e && e > -g ? w : e) + b + (g > r && r > -g ? w : r) + b + (g > a && a > -g ? w : a), _ += b + (g > c && c > -g ? w : c) + b + (g > n && n > -g ? w : n) + b + (g > s && s > -g ? w : s), S || A || 1 !== D ? (_ += b + (g > l && l > -g ? w : l) + b + (g > f && f > -g ? w : f) + b + (g > i && i > -g ? w : i), _ += b + (g > o && o > -g ? w : o) + b + (g > u && u > -g ? w : u) + b + (g > p && p > -g ? w : p) + b) : _ += ",0,0,0,0,1,0,", _ += R + b + j + b + M + b + (q ? 1 + -M / q : 1) + ")", C[St] = _
                        };
                    c = Dt.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function (t, e, n, i, r, o, l) {
                            if (i._lastParsedTransform === l) return r;
                            i._lastParsedTransform = l;
                            var u;
                            "function" == typeof l[n] && (u = l[n], l[n] = e);
                            var c, f, p, h, d, g, m, x, _, b = t._gsTransform,
                                w = t.style,
                                T = 1e-6,
                                k = Ot.length,
                                P = l,
                                C = {},
                                O = "transformOrigin",
                                S = zt(t, s, !0, P.parseTransform),
                                A = P.transform && ("function" == typeof P.transform ? P.transform(y, v) : P.transform);
                            if (i._transform = S, A && "string" == typeof A && St) f = z.style, f[St] = A, f.display = "block", f.position = "absolute", X.body.appendChild(z), c = zt(z, null, !1), S.svg && (g = S.xOrigin, m = S.yOrigin, c.x -= S.xOffset, c.y -= S.yOffset, (P.transformOrigin || P.svgOrigin) && (A = {}, Lt(t, at(P.transformOrigin), A, P.svgOrigin, P.smoothOrigin, !0), g = A.xOrigin, m = A.yOrigin, c.x -= A.xOffset - S.xOffset, c.y -= A.yOffset - S.yOffset), (g || m) && (x = Ht(z, !0), c.x -= g - (g * x[0] + m * x[2]), c.y -= m - (g * x[1] + m * x[3]))), X.body.removeChild(z), c.perspective || (c.perspective = S.perspective), null != P.xPercent && (c.xPercent = ut(P.xPercent, S.xPercent)), null != P.yPercent && (c.yPercent = ut(P.yPercent, S.yPercent));
                            else if ("object" == typeof P) {
                                if (c = {
                                        scaleX: ut(null != P.scaleX ? P.scaleX : P.scale, S.scaleX),
                                        scaleY: ut(null != P.scaleY ? P.scaleY : P.scale, S.scaleY),
                                        scaleZ: ut(P.scaleZ, S.scaleZ),
                                        x: ut(P.x, S.x),
                                        y: ut(P.y, S.y),
                                        z: ut(P.z, S.z),
                                        xPercent: ut(P.xPercent, S.xPercent),
                                        yPercent: ut(P.yPercent, S.yPercent),
                                        perspective: ut(P.transformPerspective, S.perspective)
                                    }, d = P.directionalRotation, null != d)
                                    if ("object" == typeof d)
                                        for (f in d) P[f] = d[f];
                                    else P.rotation = d;
                                "string" == typeof P.x && -1 !== P.x.indexOf("%") && (c.x = 0, c.xPercent = ut(P.x, S.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (c.y = 0, c.yPercent = ut(P.y, S.yPercent)), c.rotation = ct("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", C), Nt && (c.rotationX = ct("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", C), c.rotationY = ct("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", C)), c.skewX = ct(P.skewX, S.skewX - S.skewY), (c.skewY = ct(P.skewY, S.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                            }
                            for (Nt && null != P.force3D && (S.force3D = P.force3D, h = !0), S.skewType = P.skewType || S.skewType || a.defaultSkewType, p = S.force3D || S.z || S.rotationX || S.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == P.scale || (c.scaleZ = 1); --k > -1;) _ = Ot[k], A = c[_] - S[_], (A > T || -T > A || null != P[_] || null != I[_]) && (h = !0, r = new xt(S, _, S[_], A, r), _ in C && (r.e = C[_]), r.xs0 = 0, r.plugin = o, i._overwriteProps.push(r.n));
                            return A = P.transformOrigin, S.svg && (A || P.svgOrigin) && (g = S.xOffset, m = S.yOffset, Lt(t, at(A), c, P.svgOrigin, P.smoothOrigin), r = _t(S, "xOrigin", (b ? S : c).xOrigin, c.xOrigin, r, O), r = _t(S, "yOrigin", (b ? S : c).yOrigin, c.yOrigin, r, O), (g !== S.xOffset || m !== S.yOffset) && (r = _t(S, "xOffset", b ? g : S.xOffset, S.xOffset, r, O), r = _t(S, "yOffset", b ? m : S.yOffset, S.yOffset, r, O)), A = Ct ? null : "0px 0px"), (A || Nt && p && S.zOrigin) && (St ? (h = !0, _ = Et, A = (A || K(t, _, s, !1, "50% 50%")) + "", r = new xt(w, _, 0, 0, r, -1, O), r.b = w[_], r.plugin = o, Nt ? (f = S.zOrigin, A = A.split(" "), S.zOrigin = (A.length > 2 && (0 === f || "0px" !== A[2]) ? parseFloat(A[2]) : f) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", r = new xt(S, "zOrigin", 0, 0, r, -1, r.n), r.b = f, r.xs0 = r.e = S.zOrigin) : r.xs0 = r.e = A) : at(A + "", S)), h && (i._transformType = S.svg && Ct || !p && 3 !== this._transformType ? 2 : 3), u && (l[n] = u), r
                        },
                        prefix: !0
                    }), kt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), kt("borderRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, n, i, o, a) {
                            e = this.format(e);
                            var l, u, c, f, p, h, d, g, m, v, y, x, _, b, w, T, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                P = t.style;
                            for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < k.length; u++) this.p.indexOf("border") && (k[u] = Z(k[u])), p = f = K(t, k[u], s, !1, "0px"), -1 !== p.indexOf(" ") && (f = p.split(" "), p = f[0], f = f[1]), h = c = l[u], d = parseFloat(p), x = p.substr((d + "").length), _ = "=" === h.charAt(1), _ ? (g = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), g *= parseFloat(h), y = h.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(h), y = h.substr((g + "").length)), "" === y && (y = r[n] || x), y !== x && (b = tt(t, "borderLeft", d, x), w = tt(t, "borderTop", d, x), "%" === y ? (p = b / m * 100 + "%", f = w / v * 100 + "%") : "em" === y ? (T = tt(t, "borderLeft", 1, "em"), p = b / T + "em", f = w / T + "em") : (p = b + "px", f = w + "px"), _ && (h = parseFloat(p) + g + y, c = parseFloat(f) + g + y)), o = bt(P, k[u], p + " " + f, h + " " + c, !1, "0px", o);
                            return o
                        },
                        prefix: !0,
                        formatter: mt("0px 0px 0px 0px", !1, !0)
                    }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, n, i, r, o) {
                            return bt(t.style, n, this.format(K(t, n, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                        },
                        prefix: !0,
                        formatter: mt("0px 0px", !1, !0)
                    }), kt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (t, e, n, i, r, o) {
                            var a, l, u, c, f, p, h = "background-position",
                                d = s || J(t, null),
                                g = this.format((d ? m ? d.getPropertyValue(h + "-x") + " " + d.getPropertyValue(h + "-y") : d.getPropertyValue(h) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e);
                            if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (p = K(t, "backgroundImage").replace(E, ""), p && "none" !== p)) {
                                for (a = g.split(" "), l = v.split(" "), B.setAttribute("src", p), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (f = 0 === u ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[u] = c ? parseFloat(g) / 100 * f + "px" : parseFloat(g) / f * 100 + "%");
                                g = a.join(" ")
                            }
                            return this.parseComplex(t.style, g, v, r, o)
                        },
                        formatter: at
                    }), kt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (t) {
                            return t += "", at(-1 === t.indexOf(" ") ? t + " " + t : t)
                        }
                    }), kt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), kt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), kt("transformStyle", {
                        prefix: !0
                    }), kt("backfaceVisibility", {
                        prefix: !0
                    }), kt("userSelect", {
                        prefix: !0
                    }), kt("margin", {
                        parser: vt("marginTop,marginRight,marginBottom,marginLeft")
                    }), kt("padding", {
                        parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), kt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, n, i, r, o) {
                            var a, l, u;
                            return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                        }
                    }), kt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), kt("autoRound,strictUnits", {
                        parser: function (t, e, n, i, r) {
                            return r
                        }
                    }), kt("border", {
                        defaultValue: "0px solid #000",
                        parser: function (t, e, n, i, r, o) {
                            var a = K(t, "borderTopWidth", s, !1, "0px"),
                                l = this.format(e).split(" "),
                                u = l[0].replace(T, "");
                            return "px" !== u && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", s, !1, "solid") + " " + K(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                        },
                        color: !0,
                        formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
                        }
                    }), kt("borderWidth", {
                        parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), kt("float,cssFloat,styleFloat", {
                        parser: function (t, e, n, i, r, s) {
                            var o = t.style,
                                a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new xt(o, a, 0, 0, r, -1, n, !1, 0, o[a], e)
                        }
                    });
                    var Yt = function (t) {
                        var e, n = this.t,
                            i = n.filter || K(this.data, "filter") || "",
                            r = this.s + this.c * t | 0;
                        100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !K(this.data, "filter")) : (n.filter = i.replace(C, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(k, "opacity=" + r))
                    };
                    kt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function (t, e, n, i, r, o) {
                            var a = parseFloat(K(t, "opacity", s, !1, "1")),
                                l = t.style,
                                u = "autoAlpha" === n;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === K(t, "visibility", s) && 0 !== e && (a = 0), V ? r = new xt(l, "opacity", a, e - a, r) : (r = new xt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = u ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Yt), u && (r = new xt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                        }
                    });
                    var $t = function (t, e) {
                            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                        },
                        Vt = function (t) {
                            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : $t(n, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    kt("className", {
                        parser: function (t, e, n, r, o, a, l) {
                            var u, c, f, p, h, d = t.getAttribute("class") || "",
                                g = t.style.cssText;
                            if (o = r._classNamePT = new xt(t, n, 0, 0, o, 2), o.setRatio = Vt, o.pr = -11, i = !0, o.b = d, c = nt(t, s), f = t._gsClassPT) {
                                for (p = {}, h = f.data; h;) p[h.p] = 1, h = h._next;
                                f.setRatio(1)
                            }
                            return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = it(t, c, nt(t), l, p), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = g, o = o.xfirst = r.parse(t, u.difs, o, a)
                        }
                    });
                    var Ut = function (t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, n, i, r, s, o = this.t.style,
                                a = u.transform.parse;
                            if ("all" === this.e) o.cssText = "", r = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], u[n] && (u[n].parse === a ? r = !0 : n = "transformOrigin" === n ? Et : u[n].p), $t(o, n);
                            r && ($t(o, St), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    };
                    for (kt("clearProps", {
                            parser: function (t, e, n, r, s) {
                                return s = new xt(t, n, 0, 0, s, 2), s.setRatio = Ut, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                            }
                        }), c = "bezier,throwProps,physicsProps,physics2D".split(","), wt = c.length; wt--;) Pt(c[wt]);
                    c = a.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (t, e, n, l) {
                        if (!t.nodeType) return !1;
                        this._target = v = t, this._tween = n, this._vars = e, y = l, f = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = J(t, ""), o = this._overwriteProps;
                        var c, d, m, x, _, b, w, T, k, C = t.style;
                        if (p && "" === C.zIndex && (c = K(t, "zIndex", s), ("auto" === c || "" === c) && this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (x = C.cssText, c = nt(t, s), C.cssText = x + ";" + e, c = it(t, c, nt(t)).difs, !V && P.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, C.cssText = x), e.className ? this._firstPT = d = u.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                            for (k = 3 === this._transformType, St ? h && (p = !0, "" === C.zIndex && (w = K(t, "zIndex", s), ("auto" === w || "" === w) && this._addLazySet(C, "zIndex", 0)), g && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : C.zoom = 1, m = d; m && m._next;) m = m._next;
                            T = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = St ? Wt : Bt, T.data = this._transform || zt(t, s, !0), T.tween = n, T.pr = -1, o.pop()
                        }
                        if (i) {
                            for (; d;) {
                                for (b = d._next, m = x; m && m.pr > d.pr;) m = m._next;
                                (d._prev = m ? m._prev : _) ? d._prev._next = d: x = d, (d._next = m) ? m._prev = d : _ = d, d = b
                            }
                            this._firstPT = x
                        }
                        return !0
                    }, c.parse = function (t, e, n, i) {
                        var o, a, l, c, p, h, d, g, m, x, _ = t.style;
                        for (o in e) h = e[o], "function" == typeof h && (h = h(y, v)), a = u[o], a ? n = a.parse(t, h, o, this, n, i, e) : (p = K(t, o, s) + "", m = "string" == typeof h, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && O.test(h) ? (m || (h = ht(h), h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), n = bt(_, o, p, h, !0, "transparent", n, 0, i)) : m && F.test(h) ? n = bt(_, o, p, h, !0, null, n, 0, i) : (l = parseFloat(p), d = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (l = ot(t, o, s), d = "px") : "left" === o || "top" === o ? (l = et(t, o, s), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), x = m && "=" === h.charAt(1), x ? (c = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), c *= parseFloat(h), g = h.replace(T, "")) : (c = parseFloat(h), g = m ? h.replace(T, "") : ""), "" === g && (g = o in r ? r[o] : d), h = c || 0 === c ? (x ? c + l : c) + g : e[o], d !== g && "" !== g && (c || 0 === c) && l && (l = tt(t, o, l, d), "%" === g ? (l /= tt(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? l /= tt(t, o, 1, g) : "px" !== g && (c = tt(t, o, c, g), g = "px"), x && (c || 0 === c) && (h = c + l + g)), x && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== _[o] && (h || h + "" != "NaN" && null != h) ? (n = new xt(_, o, c || l || 0, 0, n, -1, o, !1, 0, p, h), n.xs0 = "none" !== h || "display" !== o && -1 === o.indexOf("Style") ? h : p) : U("invalid " + o + " tween value: " + e[o]) : (n = new xt(_, o, l, c - l, n, 0, o, f !== !1 && ("px" === g || "zIndex" === o), 0, p, h), n.xs0 = g))), i && n && !n.plugin && (n.plugin = i);
                        return n
                    }, c.setRatio = function (t) {
                        var e, n, i, r = this._firstPT,
                            s = 1e-6;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                for (; r;) {
                                    if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                        if (1 === r.type)
                                            if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                    else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                    else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                    else {
                                        for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                        r.t[r.p] = n
                                    } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                    else r.t[r.p] = e + r.xs0;
                                    r = r._next
                                } else
                                    for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                            else
                                for (; r;) {
                                    if (2 !== r.type)
                                        if (r.r && -1 !== r.type)
                                            if (e = Math.round(r.s + r.c), r.type) {
                                                if (1 === r.type) {
                                                    for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                    r.t[r.p] = n
                                                }
                                            } else r.t[r.p] = e + r.xs0;
                                    else r.t[r.p] = r.e;
                                    else r.setRatio(t);
                                    r = r._next
                                }
                    }, c._enableTransforms = function (t) {
                        this._transform = this._transform || zt(this._target, s, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                    };
                    var Gt = function (t) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    c._addLazySet = function (t, e, n) {
                        var i = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                        i.e = n, i.setRatio = Gt, i.data = this
                    }, c._linkCSSP = function (t, e, n, i) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
                    }, c._mod = function (t) {
                        for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                    }, c._kill = function (e) {
                        var n, i, r, s = e;
                        if (e.autoAlpha || e.alpha) {
                            s = {};
                            for (i in e) s[i] = e[i];
                            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                        }
                        for (e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(e), i = n.plugin), n = n._next;
                        return t.prototype._kill.call(this, s)
                    };
                    var Qt = function (t, e, n) {
                        var i, r, s, o;
                        if (t.slice)
                            for (r = t.length; --r > -1;) Qt(t[r], e, n);
                        else
                            for (i = t.childNodes, r = i.length; --r > -1;) s = i[r], o = s.type, s.style && (e.push(nt(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Qt(s, e, n)
                    };
                    return a.cascadeTo = function (t, n, i) {
                        var r, s, o, a, l = e.to(t, n, i),
                            u = [l],
                            c = [],
                            f = [],
                            p = [],
                            h = e._internals.reservedProps;
                        for (t = l._targets || l.target, Qt(t, c, p), l.render(n, !0, !0), Qt(t, f), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                            if (s = it(p[r], c[r], f[r]), s.firstMPT) {
                                s = s.difs;
                                for (o in i) h[o] && (s[o] = i[o]);
                                a = {};
                                for (o in s) a[o] = c[r][o];
                                u.push(e.fromTo(p[r], n, a, s))
                            }
                        return u
                    }, t.activate([a]), a
                }, !0)
            }), n._gsDefine && n._gsQueue.pop()(),
            function (e) {
                "use strict";
                t.exports = (n.GreenSockGlobals || n).SplitText
            }("CSSPlugin")
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (e) {
        var n = "undefined" != typeof t && t.exports && "undefined" != typeof e ? e : this || window;
        (n._gsQueue || (n._gsQueue = [])).push(function () {
            "use strict";
            n._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, r, s = n.GreenSockGlobals || n,
                    o = s.com.greensock,
                    a = 2 * Math.PI,
                    l = Math.PI / 2,
                    u = o._class,
                    c = function (e, n) {
                        var i = u("easing." + e, function () {}, !0),
                            r = i.prototype = new t;
                        return r.constructor = i, r.getRatio = n, i
                    },
                    f = t.register || function () {},
                    p = function (t, e, n, i) {
                        var r = u("easing." + t, {
                            easeOut: new e,
                            easeIn: new n,
                            easeInOut: new i
                        }, !0);
                        return f(r, t), r
                    },
                    h = function (t, e, n) {
                        this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
                    },
                    d = function (e, n) {
                        var i = u("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = i.prototype = new t;
                        return r.constructor = i, r.getRatio = n, r.config = function (t) {
                            return new i(t)
                        }, i
                    },
                    g = p("Back", d("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function (t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = u("easing.SlowMo", function (t, e, n) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                    }, !0),
                    v = m.prototype = new t;
                return v.constructor = m, v.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), v.config = m.config = function (t, e, n) {
                    return new m(t, e, n)
                }, e = u("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, v.config = e.config = function (t) {
                    return new e(t)
                }, i = u("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var n, i, r, s, o, a, l = e.taper || "none", u = [], c = 0, f = 0 | (e.points || 20), p = f, d = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) n = d ? Math.random() : 1 / f * p, i = m ? m.getRatio(n) : n, "none" === l ? r = v : "out" === l ? (s = 1 - n, r = s * s * v) : "in" === l ? r = n * n * v : .5 > n ? (s = 2 * n, r = .5 * s * s * v) : (s = 2 * (1 - n), r = .5 * s * s * v), d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, g && (i > 1 ? i = 1 : 0 > i && (i = 0)), u[c++] = {
                        x: n,
                        y: i
                    };
                    for (u.sort(function (t, e) {
                            return t.x - e.x
                        }), a = new h(1, 1, null), p = f; --p > -1;) o = u[p], a = new h(o.x, o.y, a);
                    this._prev = new h(0, 0, 0 !== a.t ? a : a.next)
                }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, v.config = function (t) {
                    return new i(t)
                }, i.ease = new i, p("Bounce", c("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function (t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), p("Circ", c("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), r = function (e, n, i) {
                    var r = u("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = n, s.config = function (t, e) {
                        return new r(t, e)
                    }, r
                }, p("Elastic", r("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), r("ElasticInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), p("Expo", c("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function (t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), p("Sine", c("SineOut", function (t) {
                    return Math.sin(t * l)
                }), c("SineIn", function (t) {
                    return -Math.cos(t * l) + 1
                }), c("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), u("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), f(s.SlowMo, "SlowMo", "ease,"), f(i, "RoughEase", "ease,"), f(e, "SteppedEase", "ease,"), g
            }, !0)
        }), n._gsDefine && n._gsQueue.pop()()
    }).call(e, function () {
        return this
    }())
}]);