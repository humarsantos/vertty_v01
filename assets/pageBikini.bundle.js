! function (t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function (t, e, i) {
    (function ($) {
        i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(23), i(8), $(document).ready(function () {
            void 0 !== $(".fancybox")[0] && $(".fancybox").fancybox({
                height: 600,
                maxHeight: 600,
                fitToView: !0
            })
        })
    }).call(e, i(2))
}, , function (t, e, i) {
    var n, s;
    ! function (e, i) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, function (i, o) {
        "use strict";

        function a(t, e) {
            e = e || at;
            var i = e.createElement("script");
            i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
        }

        function r(t) {
            var e = !!t && "length" in t && t.length,
                i = _t.type(t);
            return "function" !== i && !_t.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function l(t, e, i) {
            return _t.isFunction(e) ? _t.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? _t.grep(t, function (t) {
                return t === e !== i
            }) : "string" != typeof e ? _t.grep(t, function (t) {
                return ut.call(e, t) > -1 !== i
            }) : Nt.test(e) ? _t.filter(e, t, i) : (e = _t.filter(e, t), _t.grep(t, function (t) {
                return ut.call(e, t) > -1 !== i && 1 === t.nodeType
            }))
        }

        function h(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function c(t) {
            var e = {};
            return _t.each(t.match(Ht) || [], function (t, i) {
                e[i] = !0
            }), e
        }

        function u(t) {
            return t
        }

        function d(t) {
            throw t
        }

        function p(t, e, i) {
            var n;
            try {
                t && _t.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && _t.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
            } catch (t) {
                i.call(void 0, t)
            }
        }

        function f() {
            at.removeEventListener("DOMContentLoaded", f), i.removeEventListener("load", f), _t.ready()
        }

        function m() {
            this.expando = _t.expando + m.uid++
        }

        function g(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : jt.test(t) ? JSON.parse(t) : t)
        }

        function v(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(qt, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = g(i)
                    } catch (t) {}
                    Rt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function b(t, e, i, n) {
            var s, o = 1,
                a = 20,
                r = n ? function () {
                    return n.cur()
                } : function () {
                    return _t.css(t, e, "")
                },
                l = r(),
                h = i && i[3] || (_t.cssNumber[e] ? "" : "px"),
                c = (_t.cssNumber[e] || "px" !== h && +l) && $t.exec(_t.css(t, e));
            if (c && c[3] !== h) {
                h = h || c[3], i = i || [], c = +l || 1;
                do o = o || ".5", c /= o, _t.style(t, e, c + h); while (o !== (o = r() / l) && 1 !== o && --a)
            }
            return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
        }

        function _(t) {
            var e, i = t.ownerDocument,
                n = t.nodeName,
                s = Xt[n];
            return s ? s : (e = i.body.appendChild(i.createElement(n)), s = _t.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), Xt[n] = s, s)
        }

        function y(t, e) {
            for (var i, n, s = [], o = 0, a = t.length; o < a; o++) n = t[o], n.style && (i = n.style.display, e ? ("none" === i && (s[o] = Bt.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && Ut(n) && (s[o] = _(n))) : "none" !== i && (s[o] = "none", Bt.set(n, "display", i)));
            for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o]);
            return t
        }

        function x(t, e) {
            var i;
            return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && _t.nodeName(t, e) ? _t.merge([t], i) : i
        }

        function w(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Bt.set(t[i], "globalEval", !e || Bt.get(e[i], "globalEval"))
        }

        function C(t, e, i, n, s) {
            for (var o, a, r, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === _t.type(o)) _t.merge(d, o.nodeType ? [o] : o);
                    else if (te.test(o)) {
                for (a = a || u.appendChild(e.createElement("div")), r = (Qt.exec(o) || ["", ""])[1].toLowerCase(), l = Zt[r] || Zt._default, a.innerHTML = l[1] + _t.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
                _t.merge(d, a.childNodes), a = u.firstChild, a.textContent = ""
            } else d.push(e.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if (n && _t.inArray(o, n) > -1) s && s.push(o);
                else if (h = _t.contains(o.ownerDocument, o), a = x(u.appendChild(o), "script"), h && w(a), i)
                for (c = 0; o = a[c++];) Jt.test(o.type || "") && i.push(o);
            return u
        }

        function k() {
            return !0
        }

        function T() {
            return !1
        }

        function D() {
            try {
                return at.activeElement
            } catch (t) {}
        }

        function I(t, e, i, n, s, o) {
            var a, r;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (r in e) I(t, r, i, n, e[r], o);
                return t
            }
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), s === !1) s = T;
            else if (!s) return t;
            return 1 === o && (a = s, s = function (t) {
                return _t().off(t), a.apply(this, arguments)
            }, s.guid = a.guid || (a.guid = _t.guid++)), t.each(function () {
                _t.event.add(this, e, s, n, i)
            })
        }

        function S(t, e) {
            return _t.nodeName(t, "table") && _t.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function N(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function P(t) {
            var e = le.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function E(t, e) {
            var i, n, s, o, a, r, l, h;
            if (1 === e.nodeType) {
                if (Bt.hasData(t) && (o = Bt.access(t), a = Bt.set(e, o), h = o.events)) {
                    delete a.handle, a.events = {};
                    for (s in h)
                        for (i = 0, n = h[s].length; i < n; i++) _t.event.add(e, s, h[s][i])
                }
                Rt.hasData(t) && (r = Rt.access(t), l = _t.extend({}, r), Rt.set(e, l))
            }
        }

        function M(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Gt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function O(t, e, i, n) {
            e = ht.apply([], e);
            var s, o, r, l, h, c, u = 0,
                d = t.length,
                p = d - 1,
                f = e[0],
                m = _t.isFunction(f);
            if (m || d > 1 && "string" == typeof f && !vt.checkClone && re.test(f)) return t.each(function (s) {
                var o = t.eq(s);
                m && (e[0] = f.call(this, s, o.html())), O(o, e, i, n)
            });
            if (d && (s = C(e, t[0].ownerDocument, !1, t, n), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
                for (r = _t.map(x(s, "script"), N), l = r.length; u < d; u++) h = s, u !== p && (h = _t.clone(h, !0, !0), l && _t.merge(r, x(h, "script"))), i.call(t[u], h, u);
                if (l)
                    for (c = r[r.length - 1].ownerDocument, _t.map(r, P), u = 0; u < l; u++) h = r[u], Jt.test(h.type || "") && !Bt.access(h, "globalEval") && _t.contains(c, h) && (h.src ? _t._evalUrl && _t._evalUrl(h.src) : a(h.textContent.replace(he, ""), c))
            }
            return t
        }

        function A(t, e, i) {
            for (var n, s = e ? _t.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || _t.cleanData(x(n)), n.parentNode && (i && _t.contains(n.ownerDocument, n) && w(x(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function H(t, e, i) {
            var n, s, o, a, r = t.style;
            return i = i || de(t), i && (a = i.getPropertyValue(e) || i[e], "" !== a || _t.contains(t.ownerDocument, t) || (a = _t.style(t, e)), !vt.pixelMarginRight() && ue.test(a) && ce.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function L(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function z(t) {
            if (t in ve) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ge.length; i--;)
                if (t = ge[i] + e, t in ve) return t
        }

        function W(t, e, i) {
            var n = $t.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function F(t, e, i, n, s) {
            var o, a = 0;
            for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (a += _t.css(t, i + Vt[o], !0, s)), n ? ("content" === i && (a -= _t.css(t, "padding" + Vt[o], !0, s)), "margin" !== i && (a -= _t.css(t, "border" + Vt[o] + "Width", !0, s))) : (a += _t.css(t, "padding" + Vt[o], !0, s), "padding" !== i && (a += _t.css(t, "border" + Vt[o] + "Width", !0, s)));
            return a
        }

        function B(t, e, i) {
            var n, s = !0,
                o = de(t),
                a = "border-box" === _t.css(t, "boxSizing", !1, o);
            if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
                if (n = H(t, e, o), (n < 0 || null == n) && (n = t.style[e]), ue.test(n)) return n;
                s = a && (vt.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
            }
            return n + F(t, e, i || (a ? "border" : "content"), s, o) + "px"
        }

        function R(t, e, i, n, s) {
            return new R.prototype.init(t, e, i, n, s)
        }

        function j() {
            _e && (i.requestAnimationFrame(j), _t.fx.tick())
        }

        function q() {
            return i.setTimeout(function () {
                be = void 0
            }), be = _t.now()
        }

        function Y(t, e) {
            var i, n = 0,
                s = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Vt[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function V(t, e, i) {
            for (var n, s = (X.tweeners[e] || []).concat(X.tweeners["*"]), o = 0, a = s.length; o < a; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function U(t, e, i) {
            var n, s, o, a, r, l, h, c, u = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                m = t.nodeType && Ut(t),
                g = Bt.get(t, "fxshow");
            i.queue || (a = _t._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function () {
                a.unqueued || r()
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--, _t.queue(t, "fx").length || a.empty.fire()
                })
            }));
            for (n in e)
                if (s = e[n], ye.test(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || _t.style(t, n)
                }
            if (l = !_t.isEmptyObject(e), l || !_t.isEmptyObject(p)) {
                u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], h = g && g.display, null == h && (h = Bt.get(t, "display")), c = _t.css(t, "display"), "none" === c && (h ? c = h : (y([t], !0), h = t.style.display || h, c = _t.css(t, "display"), y([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === _t.css(t, "float") && (l || (d.done(function () {
                    f.display = h
                }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1;
                for (n in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Bt.access(t, "fxshow", {
                    display: h
                }), o && (g.hidden = !m), m && y([t], !0), d.done(function () {
                    m || y([t]), Bt.remove(t, "fxshow");
                    for (n in p) _t.style(t, n, p[n])
                })), l = V(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function K(t, e) {
            var i, n, s, o, a;
            for (i in t)
                if (n = _t.camelCase(i), s = e[n], o = t[i], _t.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = _t.cssHooks[n], a && "expand" in a) {
                    o = a.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function X(t, e, i) {
            var n, s, o = 0,
                a = X.prefilters.length,
                r = _t.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (s) return !1;
                    for (var e = be || q(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; a < l; a++) h.tweens[a].run(o);
                    return r.notifyWith(t, [h, o, i]), o < 1 && l ? i : (r.resolveWith(t, [h]), !1)
                },
                h = r.promise({
                    elem: t,
                    props: _t.extend({}, e),
                    opts: _t.extend(!0, {
                        specialEasing: {},
                        easing: _t.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: be || q(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = _t.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i < n; i++) h.tweens[i].run(1);
                        return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (K(c, h.opts.specialEasing); o < a; o++)
                if (n = X.prefilters[o].call(h, t, c, h.opts)) return _t.isFunction(n.stop) && (_t._queueHooks(h.elem, h.opts.queue).stop = _t.proxy(n.stop, n)), n;
            return _t.map(c, V, h), _t.isFunction(h.opts.start) && h.opts.start.call(t, h), _t.fx.timer(_t.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function G(t) {
            var e = t.match(Ht) || [];
            return e.join(" ")
        }

        function Q(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function J(t, e, i, n) {
            var s;
            if (_t.isArray(e)) _t.each(e, function (e, s) {
                i || Ee.test(t) ? n(t, s) : J(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== _t.type(e)) n(t, e);
            else
                for (s in e) J(t + "[" + s + "]", e[s], i, n)
        }

        function Z(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(Ht) || [];
                if (_t.isFunction(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function tt(t, e, i, n) {
            function s(r) {
                var l;
                return o[r] = !0, _t.each(t[r] || [], function (t, r) {
                    var h = r(e, i, n);
                    return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
                }), l
            }
            var o = {},
                a = t === qe;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function et(t, e) {
            var i, n, s = _t.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && _t.extend(!0, t, n), t
        }

        function it(t, e, i) {
            for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (s in r)
                    if (r[s] && r[s].test(n)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    a || (a = s)
                }
                o = o || a
            }
            if (o) return o !== l[0] && l.unshift(o), i[o]
        }

        function nt(t, e, i, n) {
            var s, o, a, r, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = h[l + " " + o] || h["* " + o], !a)
                    for (s in h)
                        if (r = s.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                            a === !0 ? a = h[s] : h[s] !== !0 && (o = r[0], c.unshift(r[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t.throws) e = a(e);
                    else try {
                        e = a(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: a ? t : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function st(t) {
            return _t.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var ot = [],
            at = i.document,
            rt = Object.getPrototypeOf,
            lt = ot.slice,
            ht = ot.concat,
            ct = ot.push,
            ut = ot.indexOf,
            dt = {},
            pt = dt.toString,
            ft = dt.hasOwnProperty,
            mt = ft.toString,
            gt = mt.call(Object),
            vt = {},
            bt = "3.1.1",
            _t = function (t, e) {
                return new _t.fn.init(t, e)
            },
            yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            xt = /^-ms-/,
            wt = /-([a-z])/g,
            Ct = function (t, e) {
                return e.toUpperCase()
            };
        _t.fn = _t.prototype = {
            jquery: bt,
            constructor: _t,
            length: 0,
            toArray: function () {
                return lt.call(this)
            },
            get: function (t) {
                return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function (t) {
                var e = _t.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function (t) {
                return _t.each(this, t)
            },
            map: function (t) {
                return this.pushStack(_t.map(this, function (e, i) {
                    return t.call(e, i, e)
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
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: ct,
            sort: ot.sort,
            splice: ot.splice
        }, _t.extend = _t.fn.extend = function () {
            var t, e, i, n, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || _t.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
                if (null != (t = arguments[r]))
                    for (e in t) i = a[e], n = t[e], a !== n && (h && n && (_t.isPlainObject(n) || (s = _t.isArray(n))) ? (s ? (s = !1, o = i && _t.isArray(i) ? i : []) : o = i && _t.isPlainObject(i) ? i : {}, a[e] = _t.extend(h, o, n)) : void 0 !== n && (a[e] = n));
            return a
        }, _t.extend({
            expando: "jQuery" + (bt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === _t.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = _t.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function (t) {
                var e, i;
                return !(!t || "[object Object]" !== pt.call(t)) && (!(e = rt(t)) || (i = ft.call(e, "constructor") && e.constructor, "function" == typeof i && mt.call(i) === gt))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? dt[pt.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                a(t)
            },
            camelCase: function (t) {
                return t.replace(xt, "ms-").replace(wt, Ct)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var i, n = 0;
                if (r(t))
                    for (i = t.length; n < i && e.call(t[n], n, t[n]) !== !1; n++);
                else
                    for (n in t)
                        if (e.call(t[n], n, t[n]) === !1) break; return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(yt, "")
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (r(Object(t)) ? _t.merge(i, "string" == typeof t ? [t] : t) : ct.call(i, t)), i
            },
            inArray: function (t, e, i) {
                return null == e ? -1 : ut.call(e, t, i)
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function (t, e, i) {
                for (var n, s = [], o = 0, a = t.length, r = !i; o < a; o++) n = !e(t[o], o), n !== r && s.push(t[o]);
                return s
            },
            map: function (t, e, i) {
                var n, s, o = 0,
                    a = [];
                if (r(t))
                    for (n = t.length; o < n; o++) s = e(t[o], o, i), null != s && a.push(s);
                else
                    for (o in t) s = e(t[o], o, i), null != s && a.push(s);
                return ht.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, s;
                if ("string" == typeof e && (i = t[e], e = t, t = i), _t.isFunction(t)) return n = lt.call(arguments, 2), s = function () {
                    return t.apply(e || this, n.concat(lt.call(arguments)))
                }, s.guid = t.guid = t.guid || _t.guid++, s
            },
            now: Date.now,
            support: vt
        }), "function" == typeof Symbol && (_t.fn[Symbol.iterator] = ot[Symbol.iterator]), _t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            dt["[object " + e + "]"] = e.toLowerCase()
        });
        var kt = function (t) {
            function e(t, e, i, n) {
                var s, o, a, r, l, h, c, d = e && e.ownerDocument,
                    f = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
                if (!n && ((e ? e.ownerDocument || e : R) !== O && M(e), e = e || O, H)) {
                    if (11 !== f && (l = bt.exec(t)))
                        if (s = l[1]) {
                            if (9 === f) {
                                if (!(a = e.getElementById(s))) return i;
                                if (a.id === s) return i.push(a), i
                            } else if (d && (a = d.getElementById(s)) && F(e, a) && a.id === s) return i.push(a), i
                        } else {
                            if (l[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i
                        }
                    if (w.qsa && !U[t + " "] && (!L || !L.test(t))) {
                        if (1 !== f) d = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((r = e.getAttribute("id")) ? r = r.replace(wt, Ct) : e.setAttribute("id", r = B), h = D(t), o = h.length; o--;) h[o] = "#" + r + " " + p(h[o]);
                            c = h.join(","), d = _t.test(t) && u(e.parentNode) || e
                        }
                        if (c) try {
                            return Z.apply(i, d.querySelectorAll(c)), i
                        } catch (t) {} finally {
                            r === B && e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[B] = !0, t
            }

            function s(t) {
                var e = O.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) C.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function r(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function c(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {}

            function p(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    s = e.next,
                    o = s || n,
                    a = i && "parentNode" === o,
                    r = q++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || a) return t(e, i, s);
                    return !1
                } : function (e, i, l) {
                    var h, c, u, d = [j, r];
                    if (l) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || a)
                                if (u = e[B] || (e[B] = {}), c = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((h = c[o]) && h[0] === j && h[1] === r) return d[2] = h[2];
                                    if (c[o] = d, d[2] = t(e, i, l)) return !0
                                } return !1
                }
            }

            function m(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, i, n) {
                for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
                return n
            }

            function v(t, e, i, n, s) {
                for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), h && e.push(r)));
                return a
            }

            function b(t, e, i, s, o, a) {
                return s && !s[B] && (s = b(s)), o && !o[B] && (o = b(o, a)), n(function (n, a, r, l) {
                    var h, c, u, d = [],
                        p = [],
                        f = a.length,
                        m = n || g(e || "*", r.nodeType ? [r] : r, []),
                        b = !t || !n && e ? m : v(m, d, t, r, l),
                        _ = i ? o || (n ? t : f || s) ? [] : a : b;
                    if (i && i(b, _, r, l), s)
                        for (h = v(_, p), s(h, [], r, l), c = h.length; c--;)(u = h[c]) && (_[p[c]] = !(b[p[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = _.length; c--;)(u = _[c]) && h.push(b[c] = u);
                                o(null, _ = [], h, l)
                            }
                            for (c = _.length; c--;)(u = _[c]) && (h = o ? et(n, u) : d[c]) > -1 && (n[h] = !(a[h] = u))
                        }
                    } else _ = v(_ === a ? _.splice(f, _.length) : _), o ? o(null, a, _, l) : Z.apply(a, _)
                })
            }

            function _(t) {
                for (var e, i, n, s = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], r = o ? 1 : 0, l = f(function (t) {
                        return t === e
                    }, a, !0), h = f(function (t) {
                        return et(e, t) > -1
                    }, a, !0), c = [function (t, i, n) {
                        var s = !o && (n || i !== N) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, s
                    }]; r < s; r++)
                    if (i = C.relative[t[r].type]) c = [f(m(c), i)];
                    else {
                        if (i = C.filter[t[r].type].apply(null, t[r].matches), i[B]) {
                            for (n = ++r; n < s && !C.relative[t[n].type]; n++);
                            return b(r > 1 && m(c), r > 1 && p(t.slice(0, r - 1).concat({
                                value: " " === t[r - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, r < n && _(t.slice(r, n)), n < s && _(t = t.slice(n)), n < s && p(t))
                        }
                        c.push(i)
                    }
                return m(c)
            }

            function y(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    a = function (n, a, r, l, h) {
                        var c, u, d, p = 0,
                            f = "0",
                            m = n && [],
                            g = [],
                            b = N,
                            _ = n || o && C.find.TAG("*", h),
                            y = j += null == b ? 1 : Math.random() || .1,
                            x = _.length;
                        for (h && (N = a === O || a || h); f !== x && null != (c = _[f]); f++) {
                            if (o && c) {
                                for (u = 0, a || c.ownerDocument === O || (M(c), r = !H); d = t[u++];)
                                    if (d(c, a || O, r)) {
                                        l.push(c);
                                        break
                                    }
                                h && (j = y)
                            }
                            s && ((c = !d && c) && p--, n && m.push(c))
                        }
                        if (p += f, s && f !== p) {
                            for (u = 0; d = i[u++];) d(m, g, a, r);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || g[f] || (g[f] = Q.call(l));
                                g = v(g)
                            }
                            Z.apply(l, g), h && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (j = y, N = b), m
                    };
                return s ? n(a) : a
            }
            var x, w, C, k, T, D, I, S, N, P, E, M, O, A, H, L, z, W, F, B = "sizzle" + 1 * new Date,
                R = t.document,
                j = 0,
                q = 0,
                Y = i(),
                V = i(),
                U = i(),
                K = function (t, e) {
                    return t === e && (E = !0), 0
                },
                X = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                J = G.push,
                Z = G.push,
                tt = G.slice,
                et = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ot = "\\[" + nt + "*(" + st + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + nt + "*\\]",
                at = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                rt = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ht = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(at),
                pt = new RegExp("^" + st + "$"),
                ft = {
                    ID: new RegExp("^#(" + st + ")"),
                    CLASS: new RegExp("^\\.(" + st + ")"),
                    TAG: new RegExp("^(" + st + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + it + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _t = /[+~]/,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Ct = function (t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                kt = function () {
                    M()
                },
                Tt = f(function (t) {
                    return t.disabled === !0 && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Z.apply(G = tt.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: G.length ? function (t, e) {
                        J.apply(t, tt.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, T = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, M = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : R;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, A = O.documentElement, H = !T(O), R !== O && (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", kt, !1) : i.attachEvent && i.attachEvent("onunload", kt)), w.attributes = s(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function (t) {
                    return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(O.getElementsByClassName), w.getById = s(function (t) {
                    return A.appendChild(t).id = B, !O.getElementsByName || !O.getElementsByName(B).length
                }), w.getById ? (C.filter.ID = function (t) {
                    var e = t.replace(yt, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, C.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (C.filter.ID = function (t) {
                    var e = t.replace(yt, xt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, C.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if (i = o.getAttributeNode("id"), i && i.value === t) return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                if (i = o.getAttributeNode("id"), i && i.value === t) return [o]
                        }
                        return []
                    }
                }), C.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && H) return e.getElementsByClassName(t)
                }, z = [], L = [], (w.qsa = vt.test(O.querySelectorAll)) && (s(function (t) {
                    A.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll("[id~=" + B + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || L.push(".#.+[+~]")
                }), s(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = O.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), A.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (w.matchesSelector = vt.test(W = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function (t) {
                    w.disconnectedMatch = W.call(t, "*"), W.call(t, "[s!='']:x"), z.push("!=", at)
                }), L = L.length && new RegExp(L.join("|")), z = z.length && new RegExp(z.join("|")), e = vt.test(A.compareDocumentPosition), F = e || vt.test(A.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, K = e ? function (t, e) {
                    if (t === e) return E = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === O || t.ownerDocument === R && F(R, t) ? -1 : e === O || e.ownerDocument === R && F(R, e) ? 1 : P ? et(P, t) - et(P, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return E = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        r = [t],
                        l = [e];
                    if (!s || !o) return t === O ? -1 : e === O ? 1 : s ? -1 : o ? 1 : P ? et(P, t) - et(P, e) : 0;
                    if (s === o) return a(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; r[n] === l[n];) n++;
                    return n ? a(r[n], l[n]) : r[n] === R ? -1 : l[n] === R ? 1 : 0
                }, O) : O
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== O && M(t), i = i.replace(ut, "='$1']"), w.matchesSelector && H && !U[i + " "] && (!z || !z.test(i)) && (!L || !L.test(i))) try {
                    var n = W.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, O, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== O && M(t), F(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== O && M(t);
                var i = C.attrHandle[e.toLowerCase()],
                    n = i && X.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
                return void 0 !== n ? n : w.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.escape = function (t) {
                return (t + "").replace(wt, Ct)
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (E = !w.detectDuplicates, P = !w.sortStable && t.slice(0), t.sort(K), E) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return P = null, t
            }, k = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += k(e);
                return i
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
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
                        return t[1] = t[1].replace(yt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(yt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = Y[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && Y(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var h, c, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                b = !l && !r,
                                _ = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && b) {
                                    for (d = g, u = d[B] || (d[B] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === j && h[1], _ = p && h[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (_ = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++_ && d === e) {
                                            c[t] = [j, p, _];
                                            break
                                        }
                                } else if (b && (d = e, u = d[B] || (d[B] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === j && h[1], _ = p), _ === !1)
                                    for (;
                                        (d = ++p && d && d[m] || (_ = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (b && (u = d[B] || (d[B] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[t] = [j, _]), d !== e)););
                                return _ -= s, _ === n || _ % n === 0 && _ / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, i) {
                        var s, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[B] ? o(i) : o.length > 1 ? (s = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, s = o(t, i), a = s.length; a--;) n = et(t, s[a]), t[n] = !(e[n] = s[a])
                        }) : function (t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            s = I(t.replace(lt, "$1"));
                        return s[B] ? n(function (t, e, i, n) {
                            for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function (t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function (t) {
                        return t = t.replace(yt, xt),
                            function (e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, xt).toLowerCase(),
                            function (e) {
                                var i;
                                do
                                    if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === A
                    },
                    focus: function (t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: h(!1),
                    disabled: h(!0),
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
                        return !C.pseudos.empty(t)
                    },
                    header: function (t) {
                        return gt.test(t.nodeName)
                    },
                    input: function (t) {
                        return mt.test(t.nodeName)
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
                    eq: c(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: c(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[x] = r(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[x] = l(x);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, D = e.tokenize = function (t, i) {
                var n, s, o, a, r, l, h, c = V[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (r = t, l = [], h = C.preFilter; r;) {
                    n && !(s = ht.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ct.exec(r)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(lt, " ")
                    }), r = r.slice(n.length));
                    for (a in C.filter) !(s = ft[a].exec(r)) || h[a] && !(s = h[a](s)) || (n = s.shift(), o.push({
                        value: n,
                        type: a,
                        matches: s
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return i ? r.length : r ? e.error(t) : V(t, l).slice(0)
            }, I = e.compile = function (t, e) {
                var i, n = [],
                    s = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = D(t)), i = e.length; i--;) o = _(e[i]), o[B] ? n.push(o) : s.push(o);
                    o = U(t, y(s, n)), o.selector = t
                }
                return o
            }, S = e.select = function (t, e, i, n) {
                var s, o, a, r, l, h = "function" == typeof t && t,
                    c = !n && D(t = h.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && H && C.relative[o[1].type]) {
                        if (e = (C.find.ID(a.matches[0].replace(yt, xt), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !C.relative[r = a.type]);)
                        if ((l = C.find[r]) && (n = l(a.matches[0].replace(yt, xt), _t.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && p(o), !t) return Z.apply(i, n), i;
                            break
                        }
                }
                return (h || I(t, c))(n, e, !H, i, !e || _t.test(t) && u(e.parentNode) || e), i
            }, w.sortStable = B.split("").sort(K).join("") === B, w.detectDuplicates = !!E, M(), w.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(O.createElement("fieldset"))
            }), s(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), s(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(it, function (t, e, i) {
                var n;
                if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(i);
        _t.find = kt, _t.expr = kt.selectors, _t.expr[":"] = _t.expr.pseudos, _t.uniqueSort = _t.unique = kt.uniqueSort, _t.text = kt.getText, _t.isXMLDoc = kt.isXML, _t.contains = kt.contains, _t.escapeSelector = kt.escape;
        var Tt = function (t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && _t(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            Dt = function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            It = _t.expr.match.needsContext,
            St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Nt = /^.[^:#\[\.,]*$/;
        _t.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? _t.find.matchesSelector(n, t) ? [n] : [] : _t.find.matches(t, _t.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, _t.fn.extend({
            find: function (t) {
                var e, i, n = this.length,
                    s = this;
                if ("string" != typeof t) return this.pushStack(_t(t).filter(function () {
                    for (e = 0; e < n; e++)
                        if (_t.contains(s[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) _t.find(t, s[e], i);
                return n > 1 ? _t.uniqueSort(i) : i
            },
            filter: function (t) {
                return this.pushStack(l(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(l(this, t || [], !0))
            },
            is: function (t) {
                return !!l(this, "string" == typeof t && It.test(t) ? _t(t) : t || [], !1).length
            }
        });
        var Pt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Mt = _t.fn.init = function (t, e, i) {
                var n, s;
                if (!t) return this;
                if (i = i || Pt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Et.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof _t ? e[0] : e, _t.merge(this, _t.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : at, !0)), St.test(n[1]) && _t.isPlainObject(e))
                            for (n in e) _t.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return s = at.getElementById(n[2]), s && (this[0] = s, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : _t.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(_t) : _t.makeArray(t, this)
            };
        Mt.prototype = _t.fn, Pt = _t(at);
        var Ot = /^(?:parents|prev(?:Until|All))/,
            At = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _t.fn.extend({
            has: function (t) {
                var e = _t(t, this),
                    i = e.length;
                return this.filter(function () {
                    for (var t = 0; t < i; t++)
                        if (_t.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                var i, n = 0,
                    s = this.length,
                    o = [],
                    a = "string" != typeof t && _t(t);
                if (!It.test(t))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && _t.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            }
                return this.pushStack(o.length > 1 ? _t.uniqueSort(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? ut.call(_t(t), this[0]) : ut.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(_t.uniqueSort(_t.merge(this.get(), _t(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), _t.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return Tt(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return Tt(t, "parentNode", i)
            },
            next: function (t) {
                return h(t, "nextSibling")
            },
            prev: function (t) {
                return h(t, "previousSibling")
            },
            nextAll: function (t) {
                return Tt(t, "nextSibling")
            },
            prevAll: function (t) {
                return Tt(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return Tt(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return Tt(t, "previousSibling", i)
            },
            siblings: function (t) {
                return Dt((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return Dt(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || _t.merge([], t.childNodes)
            }
        }, function (t, e) {
            _t.fn[t] = function (i, n) {
                var s = _t.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = _t.filter(n, s)), this.length > 1 && (At[t] || _t.uniqueSort(s), Ot.test(t) && s.reverse()), this.pushStack(s)
            }
        });
        var Ht = /[^\x20\t\r\n\f]+/g;
        _t.Callbacks = function (t) {
            t = "string" == typeof t ? c(t) : _t.extend({}, t);
            var e, i, n, s, o = [],
                a = [],
                r = -1,
                l = function () {
                    for (s = t.once, n = e = !0; a.length; r = -1)
                        for (i = a.shift(); ++r < o.length;) o[r].apply(i[0], i[1]) === !1 && t.stopOnFalse && (r = o.length, i = !1);
                    t.memory || (i = !1), e = !1, s && (o = i ? [] : "")
                },
                h = {
                    add: function () {
                        return o && (i && !e && (r = o.length - 1, a.push(i)), function e(i) {
                            _t.each(i, function (i, n) {
                                _t.isFunction(n) ? t.unique && h.has(n) || o.push(n) : n && n.length && "string" !== _t.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function () {
                        return _t.each(arguments, function (t, e) {
                            for (var i;
                                (i = _t.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= r && r--
                        }), this
                    },
                    has: function (t) {
                        return t ? _t.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        return o && (o = []), this
                    },
                    disable: function () {
                        return s = a = [], o = i = "", this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        return s = a = [], i || e || (o = i = ""), this
                    },
                    locked: function () {
                        return !!s
                    },
                    fireWith: function (t, i) {
                        return s || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || l()), this
                    },
                    fire: function () {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return h
        }, _t.extend({
            Deferred: function (t) {
                var e = [
                        ["notify", "progress", _t.Callbacks("memory"), _t.Callbacks("memory"), 2],
                        ["resolve", "done", _t.Callbacks("once memory"), _t.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", _t.Callbacks("once memory"), _t.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    s = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function (t) {
                            return s.then(null, t)
                        },
                        pipe: function () {
                            var t = arguments;
                            return _t.Deferred(function (i) {
                                _t.each(e, function (e, n) {
                                    var s = _t.isFunction(t[n[4]]) && t[n[4]];
                                    o[n[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && _t.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function (t, n, s) {
                            function o(t, e, n, s) {
                                return function () {
                                    var r = this,
                                        l = arguments,
                                        h = function () {
                                            var i, h;
                                            if (!(t < a)) {
                                                if (i = n.apply(r, l), i === e.promise()) throw new TypeError("Thenable self-resolution");
                                                h = i && ("object" == typeof i || "function" == typeof i) && i.then, _t.isFunction(h) ? s ? h.call(i, o(a, e, u, s), o(a, e, d, s)) : (a++, h.call(i, o(a, e, u, s), o(a, e, d, s), o(a, e, u, e.notifyWith))) : (n !== u && (r = void 0, l = [i]), (s || e.resolveWith)(r, l))
                                            }
                                        },
                                        c = s ? h : function () {
                                            try {
                                                h()
                                            } catch (i) {
                                                _t.Deferred.exceptionHook && _t.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= a && (n !== d && (r = void 0, l = [i]), e.rejectWith(r, l))
                                            }
                                        };
                                    t ? c() : (_t.Deferred.getStackHook && (c.stackTrace = _t.Deferred.getStackHook()), i.setTimeout(c))
                                }
                            }
                            var a = 0;
                            return _t.Deferred(function (i) {
                                e[0][3].add(o(0, i, _t.isFunction(s) ? s : u, i.notifyWith)), e[1][3].add(o(0, i, _t.isFunction(t) ? t : u)), e[2][3].add(o(0, i, _t.isFunction(n) ? n : d))
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? _t.extend(t, s) : s
                        }
                    },
                    o = {};
                return _t.each(e, function (t, i) {
                    var a = i[2],
                        r = i[5];
                    s[i[1]] = a.add, r && a.add(function () {
                        n = r
                    }, e[3 - t][2].disable, e[0][2].lock), a.add(i[3].fire), o[i[0]] = function () {
                        return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[i[0] + "With"] = a.fireWith
                }), s.promise(o), t && t.call(o, o), o
            },
            when: function (t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    s = lt.call(arguments),
                    o = _t.Deferred(),
                    a = function (t) {
                        return function (i) {
                            n[t] = this, s[t] = arguments.length > 1 ? lt.call(arguments) : i, --e || o.resolveWith(n, s)
                        }
                    };
                if (e <= 1 && (p(t, o.done(a(i)).resolve, o.reject), "pending" === o.state() || _t.isFunction(s[i] && s[i].then))) return o.then();
                for (; i--;) p(s[i], a(i), o.reject);
                return o.promise()
            }
        });
        var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        _t.Deferred.exceptionHook = function (t, e) {
            i.console && i.console.warn && t && Lt.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, _t.readyException = function (t) {
            i.setTimeout(function () {
                throw t
            })
        };
        var zt = _t.Deferred();
        _t.fn.ready = function (t) {
            return zt.then(t).catch(function (t) {
                _t.readyException(t)
            }), this
        }, _t.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? _t.readyWait++ : _t.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --_t.readyWait : _t.isReady) || (_t.isReady = !0, t !== !0 && --_t.readyWait > 0 || zt.resolveWith(at, [_t]))
            }
        }), _t.ready.then = zt.then, "complete" === at.readyState || "loading" !== at.readyState && !at.documentElement.doScroll ? i.setTimeout(_t.ready) : (at.addEventListener("DOMContentLoaded", f), i.addEventListener("load", f));
        var Wt = function (t, e, i, n, s, o, a) {
                var r = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === _t.type(i)) {
                    s = !0;
                    for (r in i) Wt(t, e, r, i[r], !0, o, a)
                } else if (void 0 !== n && (s = !0, _t.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                        return h.call(_t(t), i)
                    })), e))
                    for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
            },
            Ft = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        m.uid = 1, m.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e) s[_t.camelCase(e)] = i;
                else
                    for (n in e) s[_t.camelCase(n)] = e[n];
                return s
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][_t.camelCase(e)]
            },
            access: function (t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function (t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        _t.isArray(e) ? e = e.map(_t.camelCase) : (e = _t.camelCase(e), e = e in n ? [e] : e.match(Ht) || []), i = e.length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || _t.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !_t.isEmptyObject(e)
            }
        };
        var Bt = new m,
            Rt = new m,
            jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            qt = /[A-Z]/g;
        _t.extend({
            hasData: function (t) {
                return Rt.hasData(t) || Bt.hasData(t)
            },
            data: function (t, e, i) {
                return Rt.access(t, e, i)
            },
            removeData: function (t, e) {
                Rt.remove(t, e)
            },
            _data: function (t, e, i) {
                return Bt.access(t, e, i)
            },
            _removeData: function (t, e) {
                Bt.remove(t, e)
            }
        }), _t.fn.extend({
            data: function (t, e) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = Rt.get(o), 1 === o.nodeType && !Bt.get(o, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = _t.camelCase(n.slice(5)), v(o, n, s[n])));
                        Bt.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function () {
                    Rt.set(this, t)
                }) : Wt(this, function (e) {
                    var i;
                    if (o && void 0 === e) {
                        if (i = Rt.get(o, t), void 0 !== i) return i;
                        if (i = v(o, t), void 0 !== i) return i
                    } else this.each(function () {
                        Rt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    Rt.remove(this, t)
                })
            }
        }), _t.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = Bt.get(t, e), i && (!n || _t.isArray(i) ? n = Bt.access(t, e, _t.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = _t.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = _t._queueHooks(t, e),
                    a = function () {
                        _t.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return Bt.get(t, i) || Bt.access(t, i, {
                    empty: _t.Callbacks("once memory").add(function () {
                        Bt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), _t.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? _t.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = _t.queue(this, t, e);
                    _t._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && _t.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    _t.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    s = _t.Deferred(),
                    o = this,
                    a = this.length,
                    r = function () {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = Bt.get(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e)
            }
        });
        var Yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $t = new RegExp("^(?:([+-])=|)(" + Yt + ")([a-z%]*)$", "i"),
            Vt = ["Top", "Right", "Bottom", "Left"],
            Ut = function (t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && _t.contains(t.ownerDocument, t) && "none" === _t.css(t, "display")
            },
            Kt = function (t, e, i, n) {
                var s, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []);
                for (o in e) t.style[o] = a[o];
                return s
            },
            Xt = {};
        _t.fn.extend({
            show: function () {
                return y(this, !0)
            },
            hide: function () {
                return y(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Ut(this) ? _t(this).show() : _t(this).hide()
                })
            }
        });
        var Gt = /^(?:checkbox|radio)$/i,
            Qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Jt = /^$|\/(?:java|ecma)script/i,
            Zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td;
        var te = /<|&#?\w+;/;
        ! function () {
            var t = at.createDocumentFragment(),
                e = t.appendChild(at.createElement("div")),
                i = at.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), vt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var ee = at.documentElement,
            ie = /^key/,
            ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            se = /^([^.]*)(?:\.(.+)|)/;
        _t.event = {
            global: {},
            add: function (t, e, i, n, s) {
                var o, a, r, l, h, c, u, d, p, f, m, g = Bt.get(t);
                if (g)
                    for (i.handler && (o = i, i = o.handler, s = o.selector), s && _t.find.matchesSelector(ee, s), i.guid || (i.guid = _t.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                            return "undefined" != typeof _t && _t.event.triggered !== e.type ? _t.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Ht) || [""], h = e.length; h--;) r = se.exec(e[h]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (u = _t.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = _t.event.special[p] || {}, c = _t.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && _t.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, a) !== !1 || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), _t.event.global[p] = !0)
            },
            remove: function (t, e, i, n, s) {
                var o, a, r, l, h, c, u, d, p, f, m, g = Bt.hasData(t) && Bt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(Ht) || [""], h = e.length; h--;)
                        if (r = se.exec(e[h]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (u = _t.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !s && m !== c.origType || i && i.guid !== c.guid || r && !r.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                            a && !d.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || _t.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) _t.event.remove(t, p + e[h], i, n, !0);
                    _t.isEmptyObject(l) && Bt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                var e, i, n, s, o, a, r = _t.event.fix(t),
                    l = new Array(arguments.length),
                    h = (Bt.get(this, "events") || {})[r.type] || [],
                    c = _t.event.special[r.type] || {};
                for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (r.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, r) !== !1) {
                    for (a = _t.event.handlers.call(this, r, h), e = 0;
                        (s = a[e++]) && !r.isPropagationStopped();)
                        for (r.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, n = ((_t.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l), void 0 !== n && (r.result = n) === !1 && (r.preventDefault(), r.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, r), r.result
                }
            },
            handlers: function (t, e) {
                var i, n, s, o, a, r = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || h.disabled !== !0)) {
                            for (o = [], a = {}, i = 0; i < l; i++) n = e[i], s = n.selector + " ", void 0 === a[s] && (a[s] = n.needsContext ? _t(s, this).index(h) > -1 : _t.find(s, this, null, [h]).length), a[s] && o.push(n);
                            o.length && r.push({
                                elem: h,
                                handlers: o
                            })
                        }
                return h = this, l < e.length && r.push({
                    elem: h,
                    handlers: e.slice(l)
                }), r
            },
            addProp: function (t, e) {
                Object.defineProperty(_t.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: _t.isFunction(e) ? function () {
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
                return t[_t.expando] ? t : new _t.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== D() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === D() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && _t.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return _t.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, _t.removeEvent = function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, _t.Event = function (t, e) {
            return this instanceof _t.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? k : T, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _t.extend(this, e), this.timeStamp = t && t.timeStamp || _t.now(), void(this[_t.expando] = !0)) : new _t.Event(t, e)
        }, _t.Event.prototype = {
            constructor: _t.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
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
        }, _t.each({
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
                return null == t.which && ie.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ne.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, _t.event.addProp), _t.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            _t.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return s && (s === n || _t.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), _t.fn.extend({
            on: function (t, e, i, n) {
                return I(this, t, e, i, n)
            },
            one: function (t, e, i, n) {
                return I(this, t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, _t(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = T), this.each(function () {
                    _t.event.remove(this, t, i, e)
                })
            }
        });
        var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ae = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            le = /^true\/(.*)/,
            he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        _t.extend({
            htmlPrefilter: function (t) {
                return t.replace(oe, "<$1></$2>")
            },
            clone: function (t, e, i) {
                var n, s, o, a, r = t.cloneNode(!0),
                    l = _t.contains(t.ownerDocument, t);
                if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _t.isXMLDoc(t)))
                    for (a = x(r), o = x(t), n = 0, s = o.length; n < s; n++) M(o[n], a[n]);
                if (e)
                    if (i)
                        for (o = o || x(t), a = a || x(r), n = 0, s = o.length; n < s; n++) E(o[n], a[n]);
                    else E(t, r);
                return a = x(r, "script"), a.length > 0 && w(a, !l && x(t, "script")), r
            },
            cleanData: function (t) {
                for (var e, i, n, s = _t.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (Ft(i)) {
                        if (e = i[Bt.expando]) {
                            if (e.events)
                                for (n in e.events) s[n] ? _t.event.remove(i, n) : _t.removeEvent(i, n, e.handle);
                            i[Bt.expando] = void 0
                        }
                        i[Rt.expando] && (i[Rt.expando] = void 0)
                    }
            }
        }), _t.fn.extend({
            detach: function (t) {
                return A(this, t, !0)
            },
            remove: function (t) {
                return A(this, t)
            },
            text: function (t) {
                return Wt(this, function (t) {
                    return void 0 === t ? _t.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return O(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return O(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return O(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return O(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_t.cleanData(x(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return _t.clone(this, t, e)
                })
            },
            html: function (t) {
                return Wt(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ae.test(t) && !Zt[(Qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = _t.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (_t.cleanData(x(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return O(this, arguments, function (e) {
                    var i = this.parentNode;
                    _t.inArray(this, t) < 0 && (_t.cleanData(x(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), _t.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            _t.fn[t] = function (t) {
                for (var i, n = [], s = _t(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), _t(s[a])[e](i), ct.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var ce = /^margin/,
            ue = new RegExp("^(" + Yt + ")(?!px)[a-z%]+$", "i"),
            de = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = i), e.getComputedStyle(t)
            };
        ! function () {
            function t() {
                if (r) {
                    r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", ee.appendChild(a);
                    var t = i.getComputedStyle(r);
                    e = "1%" !== t.top, o = "2px" === t.marginLeft, n = "4px" === t.width, r.style.marginRight = "50%", s = "4px" === t.marginRight, ee.removeChild(a), r = null
                }
            }
            var e, n, s, o, a = at.createElement("div"),
                r = at.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === r.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(r), _t.extend(vt, {
                pixelPosition: function () {
                    return t(), e
                },
                boxSizingReliable: function () {
                    return t(), n
                },
                pixelMarginRight: function () {
                    return t(), s
                },
                reliableMarginLeft: function () {
                    return t(), o
                }
            }))
        }();
        var pe = /^(none|table(?!-c[ea]).+)/,
            fe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            me = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ge = ["Webkit", "Moz", "ms"],
            ve = at.createElement("div").style;
        _t.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = H(t, "opacity");
                            return "" === i ? "1" : i
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
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, r = _t.camelCase(e),
                        l = t.style;
                    return e = _t.cssProps[r] || (_t.cssProps[r] = z(r) || r), a = _t.cssHooks[e] || _t.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : (o = typeof i, "string" === o && (s = $t.exec(i)) && s[1] && (i = b(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (_t.cssNumber[r] ? "" : "px")), vt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function (t, e, i, n) {
                var s, o, a, r = _t.camelCase(e);
                return e = _t.cssProps[r] || (_t.cssProps[r] = z(r) || r), a = _t.cssHooks[e] || _t.cssHooks[r], a && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = H(t, e, n)), "normal" === s && e in me && (s = me[e]), "" === i || i ? (o = parseFloat(s), i === !0 || isFinite(o) ? o || 0 : s) : s
            }
        }), _t.each(["height", "width"], function (t, e) {
            _t.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i) return !pe.test(_t.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? B(t, e, n) : Kt(t, fe, function () {
                        return B(t, e, n)
                    })
                },
                set: function (t, i, n) {
                    var s, o = n && de(t),
                        a = n && F(t, e, n, "border-box" === _t.css(t, "boxSizing", !1, o), o);
                    return a && (s = $t.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = _t.css(t, e)), W(t, i, a)
                }
            }
        }), _t.cssHooks.marginLeft = L(vt.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(H(t, "marginLeft")) || t.getBoundingClientRect().left - Kt(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), _t.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            _t.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Vt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, ce.test(t) || (_t.cssHooks[t + e].set = W)
        }), _t.fn.extend({
            css: function (t, e) {
                return Wt(this, function (t, e, i) {
                    var n, s, o = {},
                        a = 0;
                    if (_t.isArray(e)) {
                        for (n = de(t), s = e.length; a < s; a++) o[e[a]] = _t.css(t, e[a], !1, n);
                        return o
                    }
                    return void 0 !== i ? _t.style(t, e, i) : _t.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), _t.Tween = R, R.prototype = {
            constructor: R,
            init: function (t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || _t.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (_t.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = R.propHooks[this.prop];
                return this.options.duration ? this.pos = e = _t.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _t.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    _t.fx.step[t.prop] ? _t.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[_t.cssProps[t.prop]] && !_t.cssHooks[t.prop] ? t.elem[t.prop] = t.now : _t.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, _t.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, _t.fx = R.prototype.init, _t.fx.step = {};
        var be, _e, ye = /^(?:toggle|show|hide)$/,
            xe = /queueHooks$/;
        _t.Animation = _t.extend(X, {
                tweeners: {
                    "*": [function (t, e) {
                        var i = this.createTween(t, e);
                        return b(i.elem, t, $t.exec(e), i), i
                    }]
                },
                tweener: function (t, e) {
                    _t.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ht);
                    for (var i, n = 0, s = t.length; n < s; n++) i = t[n], X.tweeners[i] = X.tweeners[i] || [], X.tweeners[i].unshift(e)
                },
                prefilters: [U],
                prefilter: function (t, e) {
                    e ? X.prefilters.unshift(t) : X.prefilters.push(t)
                }
            }), _t.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? _t.extend({}, t) : {
                    complete: i || !i && e || _t.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !_t.isFunction(e) && e
                };
                return _t.fx.off || at.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _t.fx.speeds ? n.duration = _t.fx.speeds[n.duration] : n.duration = _t.fx.speeds._default), null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    _t.isFunction(n.old) && n.old.call(this), n.queue && _t.dequeue(this, n.queue)
                }, n
            }, _t.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(Ut).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function (t, e, i, n) {
                    var s = _t.isEmptyObject(t),
                        o = _t.speed(e, i, n),
                        a = function () {
                            var e = X(this, _t.extend({}, t), o);
                            (s || Bt.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = _t.timers,
                            a = Bt.get(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && xe.test(s) && n(a[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        !e && i || _t.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, i = Bt.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = _t.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, _t.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), _t.each(["toggle", "show", "hide"], function (t, e) {
                var i = _t.fn[e];
                _t.fn[e] = function (t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Y(e, !0), t, n, s)
                }
            }), _t.each({
                slideDown: Y("show"),
                slideUp: Y("hide"),
                slideToggle: Y("toggle"),
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
                _t.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), _t.timers = [], _t.fx.tick = function () {
                var t, e = 0,
                    i = _t.timers;
                for (be = _t.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || _t.fx.stop(), be = void 0
            }, _t.fx.timer = function (t) {
                _t.timers.push(t), t() ? _t.fx.start() : _t.timers.pop()
            }, _t.fx.interval = 13, _t.fx.start = function () {
                _e || (_e = i.requestAnimationFrame ? i.requestAnimationFrame(j) : i.setInterval(_t.fx.tick, _t.fx.interval))
            }, _t.fx.stop = function () {
                i.cancelAnimationFrame ? i.cancelAnimationFrame(_e) : i.clearInterval(_e), _e = null
            }, _t.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, _t.fn.delay = function (t, e) {
                return t = _t.fx ? _t.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var s = i.setTimeout(e, t);
                    n.stop = function () {
                        i.clearTimeout(s)
                    }
                })
            },
            function () {
                var t = at.createElement("input"),
                    e = at.createElement("select"),
                    i = e.appendChild(at.createElement("option"));
                t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = i.selected, t = at.createElement("input"), t.value = "t", t.type = "radio", vt.radioValue = "t" === t.value
            }();
        var we, Ce = _t.expr.attrHandle;
        _t.fn.extend({
            attr: function (t, e) {
                return Wt(this, _t.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    _t.removeAttr(this, t)
                })
            }
        }), _t.extend({
            attr: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? _t.prop(t, e, i) : (1 === o && _t.isXMLDoc(t) || (s = _t.attrHooks[e.toLowerCase()] || (_t.expr.match.bool.test(e) ? we : void 0)), void 0 !== i ? null === i ? void _t.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = _t.find.attr(t, e), null == n ? void 0 : n))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!vt.radioValue && "radio" === e && _t.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var i, n = 0,
                    s = e && e.match(Ht);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++];) t.removeAttribute(i)
            }
        }), we = {
            set: function (t, e, i) {
                return e === !1 ? _t.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, _t.each(_t.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Ce[e] || _t.find.attr;
            Ce[e] = function (t, e, n) {
                var s, o, a = e.toLowerCase();
                return n || (o = Ce[a], Ce[a] = s, s = null != i(t, e, n) ? a : null, Ce[a] = o), s
            }
        });
        var ke = /^(?:input|select|textarea|button)$/i,
            Te = /^(?:a|area)$/i;
        _t.fn.extend({
            prop: function (t, e) {
                return Wt(this, _t.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[_t.propFix[t] || t]
                })
            }
        }), _t.extend({
            prop: function (t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _t.isXMLDoc(t) || (e = _t.propFix[e] || e, s = _t.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = _t.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ke.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), vt.optSelected || (_t.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), _t.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            _t.propFix[this.toLowerCase()] = this
        }), _t.fn.extend({
            addClass: function (t) {
                var e, i, n, s, o, a, r, l = 0;
                if (_t.isFunction(t)) return this.each(function (e) {
                    _t(this).addClass(t.call(this, e, Q(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Ht) || []; i = this[l++];)
                        if (s = Q(i), n = 1 === i.nodeType && " " + G(s) + " ") {
                            for (a = 0; o = e[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r = G(n), s !== r && i.setAttribute("class", r)
                        }
                return this
            },
            removeClass: function (t) {
                var e, i, n, s, o, a, r, l = 0;
                if (_t.isFunction(t)) return this.each(function (e) {
                    _t(this).removeClass(t.call(this, e, Q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Ht) || []; i = this[l++];)
                        if (s = Q(i), n = 1 === i.nodeType && " " + G(s) + " ") {
                            for (a = 0; o = e[a++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            r = G(n), s !== r && i.setAttribute("class", r)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : _t.isFunction(t) ? this.each(function (i) {
                    _t(this).toggleClass(t.call(this, i, Q(this), e), e)
                }) : this.each(function () {
                    var e, n, s, o;
                    if ("string" === i)
                        for (n = 0, s = _t(this), o = t.match(Ht) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = Q(this), e && Bt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Bt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + G(Q(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var De = /\r/g;
        _t.fn.extend({
            val: function (t) {
                var e, i, n, s = this[0]; {
                    if (arguments.length) return n = _t.isFunction(t), this.each(function (i) {
                        var s;
                        1 === this.nodeType && (s = n ? t.call(this, i, _t(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : _t.isArray(s) && (s = _t.map(s, function (t) {
                            return null == t ? "" : t + ""
                        })), e = _t.valHooks[this.type] || _t.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return e = _t.valHooks[s.type] || _t.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(De, "") : null == i ? "" : i)
                }
            }
        }), _t.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = _t.find.attr(t, "value");
                        return null != e ? e : G(_t.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        var e, i, n, s = t.options,
                            o = t.selectedIndex,
                            a = "select-one" === t.type,
                            r = a ? null : [],
                            l = a ? o + 1 : s.length;
                        for (n = o < 0 ? l : a ? o : 0; n < l; n++)
                            if (i = s[n], (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !_t.nodeName(i.parentNode, "optgroup"))) {
                                if (e = _t(i).val(), a) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function (t, e) {
                        for (var i, n, s = t.options, o = _t.makeArray(e), a = s.length; a--;) n = s[a], (n.selected = _t.inArray(_t.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), _t.each(["radio", "checkbox"], function () {
            _t.valHooks[this] = {
                set: function (t, e) {
                    if (_t.isArray(e)) return t.checked = _t.inArray(_t(t).val(), e) > -1
                }
            }, vt.checkOn || (_t.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ie = /^(?:focusinfocus|focusoutblur)$/;
        _t.extend(_t.event, {
            trigger: function (t, e, n, s) {
                var o, a, r, l, h, c, u, d = [n || at],
                    p = ft.call(t, "type") ? t.type : t,
                    f = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = r = n = n || at, 3 !== n.nodeType && 8 !== n.nodeType && !Ie.test(p + _t.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, t = t[_t.expando] ? t : new _t.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : _t.makeArray(e, [t]), u = _t.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, e) !== !1)) {
                    if (!s && !u.noBubble && !_t.isWindow(n)) {
                        for (l = u.delegateType || p, Ie.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), r = a;
                        r === (n.ownerDocument || at) && d.push(r.defaultView || r.parentWindow || i)
                    }
                    for (o = 0;
                        (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || p, c = (Bt.get(a, "events") || {})[t.type] && Bt.get(a, "handle"), c && c.apply(a, e), c = h && a[h], c && c.apply && Ft(a) && (t.result = c.apply(a, e), t.result === !1 && t.preventDefault());
                    return t.type = p, s || t.isDefaultPrevented() || u._default && u._default.apply(d.pop(), e) !== !1 || !Ft(n) || h && _t.isFunction(n[p]) && !_t.isWindow(n) && (r = n[h], r && (n[h] = null), _t.event.triggered = p, n[p](), _t.event.triggered = void 0, r && (n[h] = r)), t.result
                }
            },
            simulate: function (t, e, i) {
                var n = _t.extend(new _t.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                _t.event.trigger(n, null, e)
            }
        }), _t.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    _t.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return _t.event.trigger(t, e, i, !0)
            }
        }), _t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            _t.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), _t.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), vt.focusin = "onfocusin" in i, vt.focusin || _t.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                _t.event.simulate(e, t.target, _t.event.fix(t))
            };
            _t.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        s = Bt.access(n, e);
                    s || n.addEventListener(t, i, !0), Bt.access(n, e, (s || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        s = Bt.access(n, e) - 1;
                    s ? Bt.access(n, e, s) : (n.removeEventListener(t, i, !0), Bt.remove(n, e))
                }
            }
        });
        var Se = i.location,
            Ne = _t.now(),
            Pe = /\?/;
        _t.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || _t.error("Invalid XML: " + t), e
        };
        var Ee = /\[\]$/,
            Me = /\r?\n/g,
            Oe = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        _t.param = function (t, e) {
            var i, n = [],
                s = function (t, e) {
                    var i = _t.isFunction(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (_t.isArray(t) || t.jquery && !_t.isPlainObject(t)) _t.each(t, function () {
                s(this.name, this.value)
            });
            else
                for (i in t) J(i, t[i], e, s);
            return n.join("&")
        }, _t.fn.extend({
            serialize: function () {
                return _t.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = _t.prop(this, "elements");
                    return t ? _t.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !_t(this).is(":disabled") && Ae.test(this.nodeName) && !Oe.test(t) && (this.checked || !Gt.test(t))
                }).map(function (t, e) {
                    var i = _t(this).val();
                    return null == i ? null : _t.isArray(i) ? _t.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Me, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Me, "\r\n")
                    }
                }).get()
            }
        });
        var He = /%20/g,
            Le = /#.*$/,
            ze = /([?&])_=[^&]*/,
            We = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Be = /^(?:GET|HEAD)$/,
            Re = /^\/\//,
            je = {},
            qe = {},
            Ye = "*/".concat("*"),
            $e = at.createElement("a");
        $e.href = Se.href, _t.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: Fe.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ye,
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
                    "text xml": _t.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? et(et(t, _t.ajaxSettings), e) : et(_t.ajaxSettings, t)
            },
            ajaxPrefilter: Z(je),
            ajaxTransport: Z(qe),
            ajax: function (t, e) {
                function n(t, e, n, r) {
                    var h, d, p, y, x, w = e;
                    c || (c = !0, l && i.clearTimeout(l), s = void 0, a = r || "", C.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, n && (y = it(f, C, n)), y = nt(f, y, C, h), h ? (f.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (_t.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (_t.etag[o] = x)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, d = y.data, p = y.error, h = !p)) : (p = w, !t && w || (w = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || w) + "", h ? v.resolveWith(m, [d, w, C]) : v.rejectWith(m, [C, w, p]), C.statusCode(_), _ = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : p]), b.fireWith(m, [C, w]), u && (g.trigger("ajaxComplete", [C, f]), --_t.active || _t.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var s, o, a, r, l, h, c, u, d, p, f = _t.ajaxSetup({}, e),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? _t(m) : _t.event,
                    v = _t.Deferred(),
                    b = _t.Callbacks("once memory"),
                    _ = f.statusCode || {},
                    y = {},
                    x = {},
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (c) {
                                if (!r)
                                    for (r = {}; e = We.exec(a);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return c ? a : null
                        },
                        setRequestHeader: function (t, e) {
                            return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, y[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return null == c && (f.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else
                                    for (e in t) _[e] = [_[e], t[e]];
                            return this
                        },
                        abort: function (t) {
                            var e = t || w;
                            return s && s.abort(e), n(0, e), this
                        }
                    };
                if (v.promise(C), f.url = ((t || f.url || Se.href) + "").replace(Re, Se.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ht) || [""], null == f.crossDomain) {
                    h = at.createElement("a");
                    try {
                        h.href = f.url, h.href = h.href, f.crossDomain = $e.protocol + "//" + $e.host != h.protocol + "//" + h.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = _t.param(f.data, f.traditional)), tt(je, f, e, C), c) return C;
                u = _t.event && f.global, u && 0 === _t.active++ && _t.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Be.test(f.type), o = f.url.replace(Le, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(He, "+")) : (p = f.url.slice(o.length), f.data && (o += (Pe.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(ze, "$1"), p = (Pe.test(o) ? "&" : "?") + "_=" + Ne++ + p), f.url = o + p), f.ifModified && (_t.lastModified[o] && C.setRequestHeader("If-Modified-Since", _t.lastModified[o]), _t.etag[o] && C.setRequestHeader("If-None-Match", _t.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (f.beforeSend.call(m, C, f) === !1 || c)) return C.abort();
                if (w = "abort", b.add(f.complete), C.done(f.success), C.fail(f.error), s = tt(qe, f, e, C)) {
                    if (C.readyState = 1, u && g.trigger("ajaxSend", [C, f]), c) return C;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function () {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        c = !1, s.send(y, n)
                    } catch (t) {
                        if (c) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return C
            },
            getJSON: function (t, e, i) {
                return _t.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return _t.get(t, void 0, e, "script")
            }
        }), _t.each(["get", "post"], function (t, e) {
            _t[e] = function (t, i, n, s) {
                return _t.isFunction(i) && (s = s || n, n = i, i = void 0), _t.ajax(_t.extend({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                }, _t.isPlainObject(t) && t))
            }
        }), _t._evalUrl = function (t) {
            return _t.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, _t.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (_t.isFunction(t) && (t = t.call(this[0])), e = _t(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function (t) {
                return _t.isFunction(t) ? this.each(function (e) {
                    _t(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = _t(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = _t.isFunction(t);
                return this.each(function (i) {
                    _t(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    _t(this).replaceWith(this.childNodes)
                }), this
            }
        }), _t.expr.pseudos.hidden = function (t) {
            return !_t.expr.pseudos.visible(t)
        }, _t.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, _t.ajaxSettings.xhr = function () {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        };
        var Ve = {
                0: 200,
                1223: 204
            },
            Ue = _t.ajaxSettings.xhr();
        vt.cors = !!Ue && "withCredentials" in Ue, vt.ajax = Ue = !!Ue, _t.ajaxTransport(function (t) {
            var e, n;
            if (vt.cors || Ue && !t.crossDomain) return {
                send: function (s, o) {
                    var a, r = t.xhr();
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) r[a] = t.xhrFields[a];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    for (a in s) r.setRequestHeader(a, s[a]);
                    e = function (t) {
                        return function () {
                            e && (e = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Ve[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), n = r.onerror = e("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function () {
                        4 === r.readyState && i.setTimeout(function () {
                            e && n()
                        })
                    }, e = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            }
        }), _t.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), _t.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return _t.globalEval(t), t
                }
            }
        }), _t.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), _t.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function (n, s) {
                        e = _t("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function (t) {
                            e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                        }), at.head.appendChild(e[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            }
        });
        var Ke = [],
            Xe = /(=)\?(?=&|$)|\?\?/;
        _t.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ke.pop() || _t.expando + "_" + Ne++;
                return this[t] = !0, t
            }
        }), _t.ajaxPrefilter("json jsonp", function (t, e, n) {
            var s, o, a, r = t.jsonp !== !1 && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
            if (r || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = _t.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Xe, "$1" + s) : t.jsonp !== !1 && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
                return a || _t.error(s + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = i[s], i[s] = function () {
                a = arguments
            }, n.always(function () {
                void 0 === o ? _t(i).removeProp(s) : i[s] = o, t[s] && (t.jsonpCallback = e.jsonpCallback, Ke.push(s)), a && _t.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), vt.createHTMLDocument = function () {
            var t = at.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), _t.parseHTML = function (t, e, i) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (i = e, e = !1);
            var n, s, o;
            return e || (vt.createHTMLDocument ? (e = at.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = at.location.href, e.head.appendChild(n)) : e = at), s = St.exec(t), o = !i && [], s ? [e.createElement(s[1])] : (s = C([t], e, o), o && o.length && _t(o).remove(), _t.merge([], s.childNodes))
        }, _t.fn.load = function (t, e, i) {
            var n, s, o, a = this,
                r = t.indexOf(" ");
            return r > -1 && (n = G(t.slice(r)), t = t.slice(0, r)), _t.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && _t.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, a.html(n ? _t("<div>").append(_t.parseHTML(t)).find(n) : t)
            }).always(i && function (t, e) {
                a.each(function () {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, _t.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            _t.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), _t.expr.pseudos.animated = function (t) {
            return _t.grep(_t.timers, function (e) {
                return t === e.elem
            }).length
        }, _t.offset = {
            setOffset: function (t, e, i) {
                var n, s, o, a, r, l, h, c = _t.css(t, "position"),
                    u = _t(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), r = u.offset(), o = _t.css(t, "top"), l = _t.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, h ? (n = u.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), _t.isFunction(e) && (e = e.call(t, i, _t.extend({}, r))), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, _t.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    _t.offset.setOffset(this, t, e)
                });
                var e, i, n, s, o = this[0];
                if (o) return o.getClientRects().length ? (n = o.getBoundingClientRect(), n.width || n.height ? (s = o.ownerDocument, i = st(s), e = s.documentElement, {
                    top: n.top + i.pageYOffset - e.clientTop,
                    left: n.left + i.pageXOffset - e.clientLeft
                }) : n) : {
                    top: 0,
                    left: 0
                }
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _t.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), _t.nodeName(t[0], "html") || (n = t.offset()), n = {
                        top: n.top + _t.css(t[0], "borderTopWidth", !0),
                        left: n.left + _t.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - n.top - _t.css(i, "marginTop", !0),
                        left: e.left - n.left - _t.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === _t.css(t, "position");) t = t.offsetParent;
                    return t || ee
                })
            }
        }), _t.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var i = "pageYOffset" === e;
            _t.fn[t] = function (n) {
                return Wt(this, function (t, n, s) {
                    var o = st(t);
                    return void 0 === s ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
                }, t, n, arguments.length)
            }
        }), _t.each(["top", "left"], function (t, e) {
            _t.cssHooks[e] = L(vt.pixelPosition, function (t, i) {
                if (i) return i = H(t, e), ue.test(i) ? _t(t).position()[e] + "px" : i
            })
        }), _t.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            _t.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                _t.fn[n] = function (s, o) {
                    var a = arguments.length && (i || "boolean" != typeof s),
                        r = i || (s === !0 || o === !0 ? "margin" : "border");
                    return Wt(this, function (e, i, s) {
                        var o;
                        return _t.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? _t.css(e, i, r) : _t.style(e, i, s, r)
                    }, e, a ? s : void 0, a)
                }
            })
        }), _t.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), _t.parseJSON = JSON.parse, n = [], s = function () {
            return _t
        }.apply(e, n), !(void 0 !== s && (t.exports = s));
        var Ge = i.jQuery,
            Qe = i.$;
        return _t.noConflict = function (t) {
            return i.$ === _t && (i.$ = Qe), t && i.jQuery === _t && (i.jQuery = Ge), _t
        }, o || (i.jQuery = i.$ = _t), _t
    })
}, , , , , , function (t, e, i) {
    (function (t) {
        ! function (t, e, i, n) {
            "use strict";
            var s = i("html"),
                o = i(t),
                a = i(e),
                r = i.fancybox = function () {
                    r.open.apply(this, arguments)
                },
                l = navigator.userAgent.match(/msie/i),
                h = null,
                c = e.createTouch !== n,
                u = function (t) {
                    return t && t.hasOwnProperty && t instanceof i
                },
                d = function (t) {
                    return t && "string" === i.type(t)
                },
                p = function (t) {
                    return d(t) && t.indexOf("%") > 0
                },
                f = function (t) {
                    return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
                },
                m = function (t, e) {
                    var i = parseInt(t, 10) || 0;
                    return e && p(t) && (i = r.getViewport()[e] / 100 * i), Math.ceil(i)
                },
                g = function (t, e) {
                    return m(t, e) + "px"
                };
            i.extend(r, {
                version: "2.1.5",
                defaults: {
                    padding: 15,
                    margin: 20,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1,
                    autoSize: !0,
                    autoHeight: !1,
                    autoWidth: !1,
                    autoResize: !0,
                    autoCenter: !c,
                    fitToView: !0,
                    aspectRatio: !1,
                    topRatio: .5,
                    leftRatio: .5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: !0,
                    closeBtn: !0,
                    closeClick: !1,
                    nextClick: !1,
                    mouseWheel: !0,
                    autoPlay: !1,
                    playSpeed: 3e3,
                    preload: 3,
                    modal: !1,
                    loop: !0,
                    ajax: {
                        dataType: "html",
                        headers: {
                            "X-fancyBox": !0
                        }
                    },
                    iframe: {
                        scrolling: "auto",
                        preload: !0
                    },
                    swf: {
                        wmode: "transparent",
                        allowfullscreen: "true",
                        allowscriptaccess: "always"
                    },
                    keys: {
                        next: {
                            13: "left",
                            34: "up",
                            39: "left",
                            40: "up"
                        },
                        prev: {
                            8: "right",
                            33: "down",
                            37: "right",
                            38: "down"
                        },
                        close: [27],
                        play: [32],
                        toggle: [70]
                    },
                    direction: {
                        next: "left",
                        prev: "right"
                    },
                    scrollOutside: !0,
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },
                    openEffect: "fade",
                    openSpeed: 250,
                    openEasing: "swing",
                    openOpacity: !0,
                    openMethod: "zoomIn",
                    closeEffect: "fade",
                    closeSpeed: 250,
                    closeEasing: "swing",
                    closeOpacity: !0,
                    closeMethod: "zoomOut",
                    nextEffect: "elastic",
                    nextSpeed: 250,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "elastic",
                    prevSpeed: 250,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    helpers: {
                        overlay: !0,
                        title: !0
                    },
                    onCancel: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeChange: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop
                },
                group: {},
                opts: {},
                previous: null,
                coming: null,
                current: null,
                isActive: !1,
                isOpen: !1,
                isOpened: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null,
                player: {
                    timer: null,
                    isActive: !1
                },
                ajaxLoad: null,
                imgPreload: null,
                transitions: {},
                helpers: {},
                open: function (t, e) {
                    return t && (i.isPlainObject(e) || (e = {}), !1 !== r.close(!0)) ? (i.isArray(t) || (t = u(t) ? i(t).get() : [t]), i.each(t, function (s, o) {
                        var a, l, h, c, p, f, m, g = {};
                        "object" === i.type(o) && (o.nodeType && (o = i(o)), u(o) ? (g = {
                            href: o.data("fancybox-href") || o.attr("href"),
                            title: o.data("fancybox-title") || o.attr("title"),
                            isDom: !0,
                            element: o
                        }, i.metadata && i.extend(!0, g, o.metadata())) : g = o), a = e.href || g.href || (d(o) ? o : null), l = e.title !== n ? e.title : g.title || "", h = e.content || g.content, c = h ? "html" : e.type || g.type, !c && g.isDom && (c = o.data("fancybox-type"), c || (p = o.prop("class").match(/fancybox\.(\w+)/), c = p ? p[1] : null)), d(a) && (c || (r.isImage(a) ? c = "image" : r.isSWF(a) ? c = "swf" : "#" === a.charAt(0) ? c = "inline" : d(o) && (c = "html", h = o)), "ajax" === c && (f = a.split(/\s+/, 2), a = f.shift(), m = f.shift())), h || ("inline" === c ? a ? h = i(d(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : g.isDom && (h = o) : "html" === c ? h = a : c || a || !g.isDom || (c = "inline", h = o)), i.extend(g, {
                            href: a,
                            type: c,
                            content: h,
                            title: l,
                            selector: m
                        }), t[s] = g
                    }), r.opts = i.extend(!0, {}, r.defaults, e), e.keys !== n && (r.opts.keys = !!e.keys && i.extend({}, r.defaults.keys, e.keys)), r.group = t, r._start(r.opts.index)) : void 0
                },
                cancel: function () {
                    var t = r.coming;
                    t && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(t))
                },
                close: function (t) {
                    r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && t !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
                },
                play: function (t) {
                    var e = function () {
                            clearTimeout(r.player.timer)
                        },
                        i = function () {
                            e(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                        },
                        n = function () {
                            e(), a.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                        },
                        s = function () {
                            r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, a.bind({
                                "onCancel.player beforeClose.player": n,
                                "onUpdate.player": i,
                                "beforeLoad.player": e
                            }), i(), r.trigger("onPlayStart"))
                        };
                    t === !0 || !r.player.isActive && t !== !1 ? s() : n()
                },
                next: function (t) {
                    var e = r.current;
                    e && (d(t) || (t = e.direction.next), r.jumpto(e.index + 1, t, "next"))
                },
                prev: function (t) {
                    var e = r.current;
                    e && (d(t) || (t = e.direction.prev), r.jumpto(e.index - 1, t, "prev"))
                },
                jumpto: function (t, e, i) {
                    var s = r.current;
                    s && (t = m(t), r.direction = e || s.direction[t >= s.index ? "next" : "prev"], r.router = i || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== n && (r.cancel(), r._start(t)))
                },
                reposition: function (t, e) {
                    var n, s = r.current,
                        o = s ? s.wrap : null;
                    o && (n = r._getPosition(e), t && "scroll" === t.type ? (delete n.position, o.stop(!0, !0).animate(n, 200)) : (o.css(n), s.pos = i.extend({}, s.dim, n)))
                },
                update: function (t) {
                    var e = t && t.type,
                        i = !e || "orientationchange" === e;
                    i && (clearTimeout(h), h = null), r.isOpen && !h && (h = setTimeout(function () {
                        var n = r.current;
                        n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && r._setDimension(), "scroll" === e && n.canShrink || r.reposition(t), r.trigger("onUpdate"), h = null)
                    }, i && !c ? 0 : 300))
                },
                toggle: function (t) {
                    r.isOpen && (r.current.fitToView = "boolean" === i.type(t) ? t : !r.current.fitToView, c && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
                },
                hideLoading: function () {
                    a.unbind(".loading"), i("#fancybox-loading").remove()
                },
                showLoading: function () {
                    var t, e;
                    r.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), a.bind("keydown.loading", function (t) {
                        27 === (t.which || t.keyCode) && (t.preventDefault(), r.cancel())
                    }), r.defaults.fixed || (e = r.getViewport(), t.css({
                        position: "absolute",
                        top: .5 * e.h + e.y,
                        left: .5 * e.w + e.x
                    }))
                },
                getViewport: function () {
                    var e = r.current && r.current.locked || !1,
                        i = {
                            x: o.scrollLeft(),
                            y: o.scrollTop()
                        };
                    return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = c && t.innerWidth ? t.innerWidth : o.width(), i.h = c && t.innerHeight ? t.innerHeight : o.height()), i
                },
                unbindEvents: function () {
                    r.wrap && u(r.wrap) && r.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
                },
                bindEvents: function () {
                    var t, e = r.current;
                    e && (o.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), r.update), t = e.keys, t && a.bind("keydown.fb", function (s) {
                        var o = s.which || s.keyCode,
                            a = s.target || s.srcElement;
                        return (27 !== o || !r.coming) && void(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || a && (a.type || i(a).is("[contenteditable]")) || i.each(t, function (t, a) {
                            return e.group.length > 1 && a[o] !== n ? (r[t](a[o]), s.preventDefault(), !1) : i.inArray(o, a) > -1 ? (r[t](), s.preventDefault(), !1) : void 0
                        }))
                    }), i.fn.mousewheel && e.mouseWheel && r.wrap.bind("mousewheel.fb", function (t, n, s, o) {
                        for (var a = t.target || null, l = i(a), h = !1; l.length && !(h || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) h = f(l[0]), l = i(l).parent();
                        0 === n || h || r.group.length > 1 && !e.canShrink && (o > 0 || s > 0 ? r.prev(o > 0 ? "down" : "left") : (0 > o || 0 > s) && r.next(0 > o ? "up" : "right"), t.preventDefault())
                    }))
                },
                trigger: function (t, e) {
                    var n, s = e || r.coming || r.current;
                    if (s) {
                        if (i.isFunction(s[t]) && (n = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                        s.helpers && i.each(s.helpers, function (e, n) {
                            n && r.helpers[e] && i.isFunction(r.helpers[e][t]) && r.helpers[e][t](i.extend(!0, {}, r.helpers[e].defaults, n), s)
                        }), a.trigger(t)
                    }
                },
                isImage: function (t) {
                    return d(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                },
                isSWF: function (t) {
                    return d(t) && t.match(/\.(swf)((\?|#).*)?$/i)
                },
                _start: function (t) {
                    var e, n, s, o, a, l = {};
                    if (t = m(t), e = r.group[t] || null, !e) return !1;
                    if (l = i.extend(!0, {}, r.opts, e), o = l.margin, a = l.padding, "number" === i.type(o) && (l.margin = [o, o, o, o]), "number" === i.type(a) && (l.padding = [a, a, a, a]), l.modal && i.extend(!0, l, {
                            closeBtn: !1,
                            closeClick: !1,
                            nextClick: !1,
                            arrows: !1,
                            mouseWheel: !1,
                            keys: null,
                            helpers: {
                                overlay: {
                                    closeClick: !1
                                }
                            }
                        }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = t, r.coming = l, !1 === r.trigger("beforeLoad")) return void(r.coming = null);
                    if (s = l.type, n = l.href, !s) return r.coming = null, !(!r.current || !r.router || "jumpto" === r.router) && (r.current.index = t, r[r.router](r.direction));
                    if (r.isActive = !0, ("image" === s || "swf" === s) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === s && (l.aspectRatio = !0), "iframe" === s && c && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                            skin: i(".fancybox-skin", l.wrap),
                            outer: i(".fancybox-outer", l.wrap),
                            inner: i(".fancybox-inner", l.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
                            l.skin.css("padding" + e, g(l.padding[t]))
                        }), r.trigger("onReady"), "inline" === s || "html" === s) {
                        if (!l.content || !l.content.length) return r._error("content")
                    } else if (!n) return r._error("href");
                    "image" === s ? r._loadImage() : "ajax" === s ? r._loadAjax() : "iframe" === s ? r._loadIframe() : r._afterLoad()
                },
                _error: function (t) {
                    i.extend(r.coming, {
                        type: "html",
                        autoWidth: !0,
                        autoHeight: !0,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: "no",
                        hasError: t,
                        content: r.coming.tpl.error
                    }), r._afterLoad()
                },
                _loadImage: function () {
                    var t = r.imgPreload = new Image;
                    t.onload = function () {
                        this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                    }, t.onerror = function () {
                        this.onload = this.onerror = null, r._error("image")
                    }, t.src = r.coming.href, t.complete !== !0 && r.showLoading()
                },
                _loadAjax: function () {
                    var t = r.coming;
                    r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, t.ajax, {
                        url: t.href,
                        error: function (t, e) {
                            r.coming && "abort" !== e ? r._error("ajax", t) : r.hideLoading()
                        },
                        success: function (e, i) {
                            "success" === i && (t.content = e, r._afterLoad())
                        }
                    }))
                },
                _loadIframe: function () {
                    var t = r.coming,
                        e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : t.iframe.scrolling).attr("src", t.href);
                    i(t.wrap).bind("onReset", function () {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch (t) {}
                    }), t.iframe.preload && (r.showLoading(), e.one("load", function () {
                        i(this).data("ready", 1), c || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
                    })), t.content = e.appendTo(t.inner), t.iframe.preload || r._afterLoad()
                },
                _preloadImages: function () {
                    var t, e, i = r.group,
                        n = r.current,
                        s = i.length,
                        o = n.preload ? Math.min(n.preload, s - 1) : 0;
                    for (e = 1; o >= e; e += 1) t = i[(n.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
                },
                _afterLoad: function () {
                    var t, e, n, s, o, a, l = r.coming,
                        h = r.current,
                        c = "fancybox-placeholder";
                    if (r.hideLoading(), l && r.isActive !== !1) {
                        if (!1 === r.trigger("afterLoad", l, h)) return l.wrap.stop(!0).trigger("onReset").remove(), void(r.coming = null);
                        switch (h && (r.trigger("beforeChange", h), h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), t = l, e = l.content, n = l.type, s = l.scrolling, i.extend(r, {
                            wrap: t.wrap,
                            skin: t.skin,
                            outer: t.outer,
                            inner: t.inner,
                            current: t,
                            previous: h
                        }), o = t.href, n) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? e = i("<div>").html(e).find(t.selector) : u(e) && (e.data(c) || e.data(c, i('<div class="' + c + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function () {
                                i(this).find(e).length && e.hide().replaceAll(e.data(c)).data(c, !1)
                            }));
                            break;
                        case "image":
                            e = t.tpl.image.replace("{href}", o);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", i.each(t.swf, function (t, i) {
                                e += '<param name="' + t + '" value="' + i + '"></param>', a += " " + t + '="' + i + '"'
                            }), e += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                        }
                        u(e) && e.parent().is(t.inner) || t.inner.append(e), r.trigger("beforeShow"), t.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? h.prevMethod && r.transitions[h.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? t.nextMethod : t.openMethod](), r._preloadImages()
                    }
                },
                _setDimension: function () {
                    var t, e, n, s, o, a, l, h, c, u, d, f, v, b, _, y = r.getViewport(),
                        x = 0,
                        w = !1,
                        C = !1,
                        k = r.wrap,
                        T = r.skin,
                        D = r.inner,
                        I = r.current,
                        S = I.width,
                        N = I.height,
                        P = I.minWidth,
                        E = I.minHeight,
                        M = I.maxWidth,
                        O = I.maxHeight,
                        A = I.scrolling,
                        H = I.scrollOutside ? I.scrollbarWidth : 0,
                        L = I.margin,
                        z = m(L[1] + L[3]),
                        W = m(L[0] + L[2]);
                    if (k.add(T).add(D).width("auto").height("auto").removeClass("fancybox-tmp"), t = m(T.outerWidth(!0) - T.width()), e = m(T.outerHeight(!0) - T.height()), n = z + t, s = W + e, o = p(S) ? (y.w - n) * m(S) / 100 : S, a = p(N) ? (y.h - s) * m(N) / 100 : N, "iframe" === I.type) {
                        if (b = I.content, I.autoHeight && 1 === b.data("ready")) try {
                            b[0].contentWindow.document.location && (D.width(o).height(9999), _ = b.contents().find("body"), H && _.css("overflow-x", "hidden"), a = _.outerHeight(!0))
                        } catch (t) {}
                    } else(I.autoWidth || I.autoHeight) && (D.addClass("fancybox-tmp"), I.autoWidth || D.width(o), I.autoHeight || D.height(a), I.autoWidth && (o = D.width()), I.autoHeight && (a = D.height()), D.removeClass("fancybox-tmp"));
                    if (S = m(o), N = m(a), c = o / a, P = m(p(P) ? m(P, "w") - n : P), M = m(p(M) ? m(M, "w") - n : M), E = m(p(E) ? m(E, "h") - s : E), O = m(p(O) ? m(O, "h") - s : O), l = M, h = O, I.fitToView && (M = Math.min(y.w - n, M), O = Math.min(y.h - s, O)), f = y.w - z, v = y.h - W, I.aspectRatio ? (S > M && (S = M, N = m(S / c)), N > O && (N = O, S = m(N * c)), P > S && (S = P, N = m(S / c)), E > N && (N = E, S = m(N * c))) : (S = Math.max(P, Math.min(S, M)), I.autoHeight && "iframe" !== I.type && (D.width(S), N = D.height()), N = Math.max(E, Math.min(N, O))), I.fitToView)
                        if (D.width(S).height(N), k.width(S + t), u = k.width(), d = k.height(), I.aspectRatio)
                            for (;
                                (u > f || d > v) && S > P && N > E && !(x++ > 19);) N = Math.max(E, Math.min(O, N - 10)), S = m(N * c), P > S && (S = P, N = m(S / c)), S > M && (S = M, N = m(S / c)), D.width(S).height(N), k.width(S + t), u = k.width(), d = k.height();
                        else S = Math.max(P, Math.min(S, S - (u - f))), N = Math.max(E, Math.min(N, N - (d - v)));
                    H && "auto" === A && a > N && f > S + t + H && (S += H), D.width(S).height(N), k.width(S + t), u = k.width(), d = k.height(), w = (u > f || d > v) && S > P && N > E, C = I.aspectRatio ? l > S && h > N && o > S && a > N : (l > S || h > N) && (o > S || a > N), i.extend(I, {
                        dim: {
                            width: g(u),
                            height: g(d)
                        },
                        origWidth: o,
                        origHeight: a,
                        canShrink: w,
                        canExpand: C,
                        wPadding: t,
                        hPadding: e,
                        wrapSpace: d - T.outerHeight(!0),
                        skinSpace: T.height() - N
                    }), !b && I.autoHeight && N > E && O > N && !C && D.height("auto")
                },
                _getPosition: function (t) {
                    var e = r.current,
                        i = r.getViewport(),
                        n = e.margin,
                        s = r.wrap.width() + n[1] + n[3],
                        o = r.wrap.height() + n[0] + n[2],
                        a = {
                            position: "absolute",
                            top: n[0],
                            left: n[3]
                        };
                    return e.autoCenter && e.fixed && !t && o <= i.h && s <= i.w ? a.position = "fixed" : e.locked || (a.top += i.y, a.left += i.x), a.top = g(Math.max(a.top, a.top + (i.h - o) * e.topRatio)), a.left = g(Math.max(a.left, a.left + (i.w - s) * e.leftRatio)), a
                },
                _afterZoomIn: function () {
                    var t = r.current;
                    t && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (t.closeClick || t.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function (e) {
                        i(e.target).is("a") || i(e.target).parent().is("a") || (e.preventDefault(), r[t.closeClick ? "close" : "next"]())
                    }), t.closeBtn && i(t.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function (t) {
                        t.preventDefault(), r.close()
                    }), t.arrows && r.group.length > 1 && ((t.loop || t.index > 0) && i(t.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (t.loop || t.index < r.group.length - 1) && i(t.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
                },
                _afterZoomOut: function (t) {
                    t = t || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }), r.trigger("afterClose", t)
                }
            }), r.transitions = {
                getOrigPosition: function () {
                    var t = r.current,
                        e = t.element,
                        i = t.orig,
                        n = {},
                        s = 50,
                        o = 50,
                        a = t.hPadding,
                        l = t.wPadding,
                        h = r.getViewport();
                    return !i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), u(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), o = i.outerHeight())) : (n.top = h.y + (h.h - o) * t.topRatio, n.left = h.x + (h.w - s) * t.leftRatio), ("fixed" === r.wrap.css("position") || t.locked) && (n.top -= h.y, n.left -= h.x), n = {
                        top: g(n.top - a * t.topRatio),
                        left: g(n.left - l * t.leftRatio),
                        width: g(s + l),
                        height: g(o + a)
                    }
                },
                step: function (t, e) {
                    var i, n, s, o = e.prop,
                        a = r.current,
                        l = a.wrapSpace,
                        h = a.skinSpace;
                    ("width" === o || "height" === o) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), r.isClosing && (i = 1 - i), n = "width" === o ? a.wPadding : a.hPadding, s = t - n, r.skin[o](m("width" === o ? s : s - l * i)), r.inner[o](m("width" === o ? s : s - l * i - h * i)))
                },
                zoomIn: function () {
                    var t = r.current,
                        e = t.pos,
                        n = t.openEffect,
                        s = "elastic" === n,
                        o = i.extend({
                            opacity: 1
                        }, e);
                    delete o.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), r.wrap.css(e).animate(o, {
                        duration: "none" === n ? 0 : t.openSpeed,
                        easing: t.openEasing,
                        step: s ? this.step : null,
                        complete: r._afterZoomIn
                    })
                },
                zoomOut: function () {
                    var t = r.current,
                        e = t.closeEffect,
                        i = "elastic" === e,
                        n = {
                            opacity: .1
                        };
                    i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                        duration: "none" === e ? 0 : t.closeSpeed,
                        easing: t.closeEasing,
                        step: i ? this.step : null,
                        complete: r._afterZoomOut
                    })
                },
                changeIn: function () {
                    var t, e = r.current,
                        i = e.nextEffect,
                        n = e.pos,
                        s = {
                            opacity: 1
                        },
                        o = r.direction,
                        a = 200;
                    n.opacity = .1, "elastic" === i && (t = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (n[t] = g(m(n[t]) - a), s[t] = "+=" + a + "px") : (n[t] = g(m(n[t]) + a), s[t] = "-=" + a + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(s, {
                        duration: e.nextSpeed,
                        easing: e.nextEasing,
                        complete: r._afterZoomIn
                    })
                },
                changeOut: function () {
                    var t = r.previous,
                        e = t.prevEffect,
                        n = {
                            opacity: .1
                        },
                        s = r.direction,
                        o = 200;
                    "elastic" === e && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=" + o + "px"), t.wrap.animate(n, {
                        duration: "none" === e ? 0 : t.prevSpeed,
                        easing: t.prevEasing,
                        complete: function () {
                            i(this).trigger("onReset").remove()
                        }
                    })
                }
            }, r.helpers.overlay = {
                defaults: {
                    closeClick: !0,
                    speedOut: 200,
                    showEarly: !0,
                    css: {},
                    locked: !c,
                    fixed: !0
                },
                overlay: null,
                fixed: !1,
                el: i("html"),
                create: function (t) {
                    t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : t.parent), this.fixed = !1, t.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
                },
                open: function (t) {
                    var e = this;
                    t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (o.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
                        return i(t.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : e.close(), !1) : void 0
                    }), this.overlay.css(t.css).show()
                },
                close: function () {
                    var t, e;
                    o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = o.scrollTop(), e = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                        overlay: null,
                        fixed: !1
                    })
                },
                update: function () {
                    var t, i = "100%";
                    this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), a.width() > t && (i = a.width())) : a.width() > o.width() && (i = a.width()), this.overlay.width(i).height(a.height())
                },
                onReady: function (t, e) {
                    var n = this.overlay;
                    i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = a.height() > o.height() && i("html").css("margin-right").replace("px", "")), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function (t, e) {
                    var n, s;
                    e.locked && (this.margin !== !1 && (i("*").filter(function () {
                        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = o.scrollTop(), s = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(n).scrollLeft(s)), this.open(t)
                },
                onUpdate: function () {
                    this.fixed || this.update()
                },
                afterClose: function (t) {
                    this.overlay && !r.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
                }
            }, r.helpers.title = {
                defaults: {
                    type: "float",
                    position: "bottom"
                },
                beforeShow: function (t) {
                    var e, n, s = r.current,
                        o = s.title,
                        a = t.type;
                    if (i.isFunction(o) && (o = o.call(s.element, s)), d(o) && "" !== i.trim(o)) {
                        switch (e = i('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + o + "</div>"), a) {
                        case "inside":
                            n = r.skin;
                            break;
                        case "outside":
                            n = r.wrap;
                            break;
                        case "over":
                            n = r.inner;
                            break;
                        default:
                            n = r.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(m(e.css("margin-bottom")))
                        }
                        e["top" === t.position ? "prependTo" : "appendTo"](n)
                    }
                }
            }, i.fn.fancybox = function (t) {
                var e, n = i(this),
                    s = this.selector || "",
                    o = function (o) {
                        var a, l, h = i(this).blur(),
                            c = e;
                        o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || h.is(".fancybox-wrap") || (a = t.groupAttr || "data-fancybox-group", l = h.attr(a), l || (a = "rel", l = h.get(0)[a]), l && "" !== l && "nofollow" !== l && (h = s.length ? i(s) : n, h = h.filter("[" + a + '="' + l + '"]'), c = h.index(this)), t.index = c, r.open(h, t) !== !1 && o.preventDefault())
                    };
                return t = t || {}, e = t.index || 0, s && t.live !== !1 ? a.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : n.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
            }, a.ready(function () {
                var e, o;
                i.scrollbarWidth === n && (i.scrollbarWidth = function () {
                    var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        e = t.children(),
                        n = e.innerWidth() - e.height(99).innerWidth();
                    return t.remove(), n
                }), i.support.fixedPosition === n && (i.support.fixedPosition = function () {
                    var t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                        e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                    return t.remove(), e
                }()), i.extend(r.defaults, {
                    scrollbarWidth: i.scrollbarWidth(),
                    fixed: i.support.fixedPosition,
                    parent: i("body")
                }), e = i(t).width(), s.addClass("fancybox-lock-test"), o = i(t).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (o - e) + "px;}</style>").appendTo("head")
            })
        }(window, document, t)
    }).call(e, i(2))
}, , , function (t, e, i) {
    var n, s, o;
    ! function (a) {
        s = [i(2)], n = a, o = "function" == typeof n ? n.apply(e, s) : n, !(void 0 !== o && (t.exports = o))
    }(function (t) {
        function e(t) {
            for (var e = t.css("visibility");
                "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }

        function i(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function $() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function () {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, s)
        }

        function s() {
            t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function o(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }

        function a(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.ui = t.ui || {};
        var r = (t.ui.version = "1.12.1", 0),
            l = Array.prototype.slice;
        t.cleanData = function (e) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (t) {}
                e(i)
            }
        }(t.cleanData), t.widget = function (e, i, n) {
            var s, o, a, r = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var h = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function (e) {
                return !!t.data(e, h)
            }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function (t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
                return t.isFunction(n) ? void(r[e] = function () {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function () {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(r[e] = n)
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || e : e
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: h
            }), s ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function (e) {
            for (var i, n, s = l.call(arguments, 1), o = 0, a = s.length; a > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
            return e
        }, t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (s) {
                var o = "string" == typeof s,
                    a = l.call(arguments, 1),
                    r = this;
                return o ? this.length || "instance" !== s ? this.each(function () {
                    var i, o = t.data(this, n);
                    return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : r = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function () {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), r
            }
        }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                    e._removeClass(i, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, i) {
                var n, s, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function (e) {
                var i, n, s;
                for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function (e) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; r < i.length; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]])
                }
                var n = [],
                    s = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {
                    remove: "_untrackClassesElement"
                }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (e) {
                var i = this;
                t.each(i.classesElementLookup, function (n, s) {
                    -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                })
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function (e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, a) {
                    function r() {
                        return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, r) : i.on(h, r)
                })
            },
            _off: function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, o, a = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function (i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        }), t.widget, ! function () {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            var s, o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {
                        width: o ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        o = !n && !s;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: o ? t(e).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, t.fn.position = function (s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var u, p, f, m, g, v, b = t(s.of),
                    _ = t.position.getWithinInfo(s.within),
                    y = t.position.getScrollInfo(_),
                    x = (s.collision || "flip").split(" "),
                    w = {};
                return v = n(b), b[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, m = v.offset, g = t.extend({}, m), t.each(["my", "at"], function () {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), u = e(w.at, p, f), g.left += u[0], g.top += u[1], this.each(function () {
                    var n, r, l = t(this),
                        h = l.outerWidth(),
                        c = l.outerHeight(),
                        d = i(this, "marginLeft"),
                        v = i(this, "marginTop"),
                        C = h + d + i(this, "marginRight") + y.width,
                        k = c + v + i(this, "marginBottom") + y.height,
                        T = t.extend({}, g),
                        D = e(w.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= c : "center" === s.my[1] && (T.top -= c / 2), T.left += D[0], T.top += D[1], n = {
                        marginLeft: d,
                        marginTop: v
                    }, t.each(["left", "top"], function (e, i) {
                        t.ui.position[x[e]] && t.ui.position[x[e]][i](T, {
                            targetWidth: p,
                            targetHeight: f,
                            elemWidth: h,
                            elemHeight: c,
                            collisionPosition: n,
                            collisionWidth: C,
                            collisionHeight: k,
                            offset: [u[0] + D[0], u[1] + D[1]],
                            my: s.my,
                            at: s.at,
                            within: _,
                            elem: l
                        })
                    }), s.using && (r = function (t) {
                        var e = m.left - T.left,
                            i = e + p - h,
                            n = m.top - T.top,
                            r = n + f - c,
                            u = {
                                target: {
                                    element: b,
                                    left: m.left,
                                    top: m.top,
                                    width: p,
                                    height: f
                                },
                                element: {
                                    element: l,
                                    left: T.left,
                                    top: T.top,
                                    width: h,
                                    height: c
                                },
                                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        h > p && a(e + i) < p && (u.horizontal = "center"), c > f && a(n + r) < f && (u.vertical = "middle"), o(a(e), a(i)) > o(a(n), a(r)) ? u.important = "horizontal" : u.important = "vertical", s.using.call(this, t, u)
                    }), l.offset(t.extend(T, {
                        using: r
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            l = s - r,
                            h = r + e.collisionWidth - a - s;
                        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - s, t.left += l - i) : h > 0 && 0 >= l ? t.left = s : l > h ? t.left = s + a - e.collisionWidth : t.left = s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                    },
                    top: function (t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            l = s - r,
                            h = r + e.collisionHeight - a - s;
                        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - s, t.top += l - i) : h > 0 && 0 >= l ? t.top = s : l > h ? t.top = s + a - e.collisionHeight : t.top = s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function (t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            r = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            h = t.left - e.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + e.collisionWidth - r - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || i < a(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < u) && (t.left += d + p + f))
                    },
                    top: function (t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            r = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            h = t.top - e.collisionPosition.marginTop,
                            c = h - l,
                            u = h + e.collisionHeight - r - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > c ? (n = t.top + p + f + m + e.collisionHeight - r - o, (0 > n || n < a(c)) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, (i > 0 || a(i) < u) && (t.top += p + f + m))
                    }
                },
                flipfit: {
                    left: function () {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }();
        var h = (t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                    return function (i) {
                        return !!t.data(i, e)
                    }
                }) : function (e, i, n) {
                    return !!t.data(e, n[3]);
                }
            }), t.fn.extend({
                disableSelection: function () {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.on(t + ".ui-disableSelection", function (t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function () {
                    return this.off(".ui-disableSelection")
                }
            }), "ui-effects-"),
            c = "ui-effects-style",
            u = "ui-effects-animated",
            d = t;
        t.effects = {
                effect: {}
            },
            function (t, e) {
                function i(t, e, i) {
                    var n = u[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = h(),
                        n = i._rgba = [];
                    return e = e.toLowerCase(), f(l, function (t, s) {
                        var o, a = s.re.exec(e),
                            r = a && s.parse(a),
                            l = s.space || "rgba";
                        return r ? (o = i[l](r), i[c[l].cache] = o[c[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function (t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    h = t.Color = function (e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    u = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    d = h.support = {},
                    p = t("<p>")[0],
                    f = t.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), h.fn = t.extend(h.prototype, {
                    parse: function (s, a, r, l) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                        var u = this,
                            d = t.type(s),
                            p = this._rgba = [];
                        return a !== e && (s = [s, a, r, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                            p[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === d ? (s instanceof h ? f(c, function (t, e) {
                            s[e.cache] && (u[e.cache] = s[e.cache].slice())
                        }) : f(c, function (e, n) {
                            var o = n.cache;
                            f(n.props, function (t, e) {
                                if (!u[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    u[o] = n.to(u._rgba)
                                }
                                u[o][e.idx] = i(s[t], e, !0)
                            }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                        }), this) : void 0
                    },
                    is: function (t) {
                        var e = h(t),
                            i = !0,
                            n = this;
                        return f(c, function (t, s) {
                            var o, a = e[s.cache];
                            return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function (t, e) {
                                return null != a[e.idx] ? i = a[e.idx] === o[e.idx] : void 0
                            })), i
                        }), i
                    },
                    _space: function () {
                        var t = [],
                            e = this;
                        return f(c, function (i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function (t, e) {
                        var n = h(t),
                            s = n._space(),
                            o = c[s],
                            a = 0 === this.alpha() ? h("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            l = r.slice();
                        return n = n[o.cache], f(o.props, function (t, s) {
                            var o = s.idx,
                                a = r[o],
                                h = n[o],
                                c = u[s.type] || {};
                            null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, s)))
                        }), this[s](l)
                    },
                    blend: function (e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = h(e)._rgba;
                        return h(t.map(i, function (t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function () {
                        var e = "rgba(",
                            i = t.map(this._rgba, function (t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function () {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function (t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function (e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function (t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = r - l,
                        c = r + l,
                        u = .5 * c;
                    return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
                }, c.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        a = .5 >= n ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
                }, f(c, function (n, s) {
                    var o = s.props,
                        a = s.cache,
                        l = s.to,
                        c = s.from;
                    h.fn[n] = function (n) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            u = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return f(o, function (t, e) {
                            var n = u["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), c ? (s = h(c(d)), s[a] = d, s) : h(d)
                    }, f(o, function (e, i) {
                        h.fn[e] || (h.fn[e] = function (s) {
                            var o, a = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                h = this[l](),
                                c = h[i.idx];
                            return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                        })
                    })
                }), h.hook = function (e) {
                    var i = e.split(" ");
                    f(i, function (e, i) {
                        t.cssHooks[i] = {
                            set: function (e, s) {
                                var o, a, r = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = t.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (t) {}
                                        s = s.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (t) {}
                            }
                        }, t.fx.step[i] = function (e) {
                            e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, h.hook(a), t.cssHooks.borderColor = {
                    expand: function (t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(d),
            function () {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function i(e, i) {
                    var n, o, a = {};
                    for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
                    return a
                }
                var n = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                    t.fx.step[i] = function (t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (d.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function (s, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function () {
                        var o, a = t(this),
                            r = a.attr("class") || "",
                            h = l.children ? a.find("*").addBack() : a;
                        h = h.map(function () {
                            var i = t(this);
                            return {
                                el: i,
                                start: e(this)
                            }
                        }), o = function () {
                            t.each(n, function (t, e) {
                                s[e] && a[e + "Class"](s[e])
                            })
                        }, o(), h = h.map(function () {
                            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", r), h = h.map(function () {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function () {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, h.get()).done(function () {
                            o(), t.each(arguments, function () {
                                var e = this.el;
                                t.each(this.diff, function (t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function (e) {
                        return function (i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function (e) {
                        return function (i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function (e) {
                        return function (i, n, s, o, a) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function (e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function () {
                function e(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function n(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        o = s.exec(t) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(o[1]) || 0,
                        right: "auto" === o[2] ? i : parseFloat(o[2]),
                        bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                        left: parseFloat(o[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
                    return function (i) {
                        return !!t(i).data(u) || e(i)
                    }
                }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
                    save: function (t, e) {
                        for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(h + e[i], t[0].style[e[i]])
                    },
                    restore: function (t, e) {
                        for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(h + e[n]), t.css(e[n], i))
                    },
                    setMode: function (t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function (e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                float: e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (t) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function (e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.1",
                    define: function (e, i, n) {
                        return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                    },
                    scaledDimensions: function (t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * s,
                            width: t.width() * n,
                            outerHeight: t.outerHeight() * s,
                            outerWidth: t.outerWidth() * n
                        }
                    },
                    clipToBox: function (t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function (t, e, i) {
                        var n = t.queue();
                        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function (t) {
                        t.data(c, t[0].style.cssText)
                    },
                    restoreStyle: function (t) {
                        t[0].style.cssText = t.data(c) || "", t.removeData(c)
                    },
                    mode: function (t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function (t, e) {
                        var i, n;
                        switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                        }
                        switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function (e) {
                        var i, n = e.css("position"),
                            s = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            float: e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(h + "placeholder", i)), e.css({
                            position: n,
                            left: s.left,
                            top: s.top
                        }), i
                    },
                    removePlaceholder: function (t) {
                        var e = h + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function (e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function (e, i, n, s) {
                        return s = s || {}, t.each(i, function (t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), t.fn.extend({
                    effect: function () {
                        function i(e) {
                            function i() {
                                r.removeData(u), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a()
                            }

                            function a() {
                                t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                            }
                            var r = t(this);
                            n.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === n.mode ? (r[h](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : s.call(r[0], n, a)
                        }
                        var n = e.apply(this, arguments),
                            s = t.effects.effect[n.effect],
                            o = s.mode,
                            a = n.queue,
                            r = a || "fx",
                            l = n.complete,
                            h = n.mode,
                            c = [],
                            d = function (e) {
                                var i = t(this),
                                    n = t.effects.mode(i, h) || o;
                                i.data(u, !0), c.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                            };
                        return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function () {
                            l && l.call(this)
                        }) : a === !1 ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
                    },
                    show: function (t) {
                        return function (n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(t.fn.show),
                    hide: function (t) {
                        return function (n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(t.fn.hide),
                    toggle: function (t) {
                        return function (n) {
                            if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(t.fn.toggle),
                    cssUnit: function (e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function (t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    },
                    cssClip: function (t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
                    },
                    transfer: function (e, i) {
                        var n = t(this),
                            s = t(e.to),
                            o = "fixed" === s.css("position"),
                            a = t("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            h = s.offset(),
                            c = {
                                top: h.top - r,
                                left: h.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth()
                            },
                            u = n.offset(),
                            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: u.top - r,
                                left: u.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(c, e.duration, e.easing, function () {
                                d.remove(), t.isFunction(i) && i()
                            })
                    }
                }), t.fx.step.clip = function (e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(),
            function () {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                    e[i] = function (e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function (t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function (t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function (t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function (t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function (t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function (e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function (t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                })
            }();
        var p, p = t.effects;
        t.effects.define("blind", "hide", function (e, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = t(this),
                o = e.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: t.extend({}, a)
                },
                l = t.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("bounce", function (e, i) {
            var n, s, o, a = t(this),
                r = e.mode,
                l = "hide" === r,
                h = "show" === r,
                c = e.direction || "up",
                u = e.distance,
                d = e.times || 5,
                p = 2 * d + (h || l ? 1 : 0),
                f = e.duration / p,
                m = e.easing,
                g = "up" === c || "down" === c ? "top" : "left",
                v = "up" === c || "left" === c,
                b = 0,
                _ = a.queue().length;
            for (t.effects.createPlaceholder(a), o = a.css(g), u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && (s = {
                    opacity: 1
                }, s[g] = o, a.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(s, f, m)), l && (u /= Math.pow(2, d - 1)), s = {}, s[g] = o; d > b; b++) n = {}, n[g] = (v ? "-=" : "+=") + u, a.animate(n, f, m).animate(s, f, m), u = l ? 2 * u : u / 2;
            l && (n = {
                opacity: 0
            }, n[g] = (v ? "-=" : "+=") + u, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, _, p + 1)
        }), t.effects.define("clip", "hide", function (e, i) {
            var n, s = {},
                o = t(this),
                a = e.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                h = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function (e, i) {
            var n, s = t(this),
                o = e.mode,
                a = "show" === o,
                r = e.direction || "left",
                l = "up" === r || "down" === r ? "top" : "left",
                h = "up" === r || "left" === r ? "-=" : "+=",
                c = "+=" === h ? "-=" : "+=",
                u = {
                    opacity: 0
                };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = h + n, a && (s.css(u), u[l] = c + n, u.opacity = 1), s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function (e, i) {
            function n() {
                _.push(this), _.length === u * d && s()
            }

            function s() {
                p.css({
                    visibility: "visible"
                }), t(_).remove(), i()
            }
            var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = u,
                p = t(this),
                f = e.mode,
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                b = Math.ceil(p.outerHeight() / u),
                _ = [];
            for (o = 0; u > o; o++)
                for (l = g.top + o * b, c = o - (u - 1) / 2, a = 0; d > a; a++) r = g.left + a * v, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * b
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: b,
                    left: r + (m ? h * v : 0),
                    top: l + (m ? c * b : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : h * v),
                    top: l + (m ? 0 : c * b),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, n)
        }), t.effects.define("fade", "toggle", function (e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("fold", "hide", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = !!e.horizFirst,
                c = h ? ["right", "bottom"] : ["bottom", "right"],
                u = e.duration / 2,
                d = t.effects.createPlaceholder(n),
                p = n.cssClip(),
                f = {
                    clip: t.extend({}, p)
                },
                m = {
                    clip: t.extend({}, p)
                },
                g = [p[c[0]], p[c[1]]],
                v = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * g[a ? 0 : 1]), f.clip[c[0]] = r, m.clip[c[0]] = r, m.clip[c[1]] = 0, o && (n.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), m.clip = p), n.queue(function (i) {
                d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(m), u, e.easing), i()
            }).animate(f, u, e.easing).animate(m, u, e.easing).queue(i), t.effects.unshift(n, v, 4)
        }), t.effects.define("highlight", "show", function (e, i) {
            var n = t(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("size", function (e, i) {
            var n, s, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.mode,
                u = "effect" !== c,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                m = a.position(),
                g = t.effects.scaledDimensions(a),
                v = e.from || g,
                b = e.to || t.effects.scaledDimensions(a, 0);
            t.effects.createPlaceholder(a), "show" === c && (o = v, v = b, b = o), s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: b.height / g.height,
                    x: b.width / g.width
                }
            }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), b = t.effects.setTransition(a, l, s.to.y, b)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, h, s.from.x, v), b = t.effects.setTransition(a, h, s.to.x, b))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), b = t.effects.setTransition(a, r, s.to.y, b)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, b.top = (g.outerHeight - b.outerHeight) * n.y + m.top, b.left = (g.outerWidth - b.outerWidth) * n.x + m.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
                var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    a = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), a = t.effects.setTransition(i, h, s.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
                    u && t.effects.restoreStyle(i)
                })
            })), a.animate(b, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    var e = a.offset();
                    0 === b.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                }
            })
        }), t.effects.define("scale", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
        }), t.effects.define("puff", "hide", function (e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        }), t.effects.define("pulsate", "show", function (e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = o || a,
                l = 2 * (e.times || 5) + (r ? 1 : 0),
                h = e.duration / l,
                c = 0,
                u = 1,
                d = n.queue().length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1); l > u; u++) n.animate({
                opacity: c
            }, h, e.easing), c = 1 - c;
            n.animate({
                opacity: c
            }, h, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
        }), t.effects.define("shake", function (e, i) {
            var n = 1,
                s = t(this),
                o = e.direction || "left",
                a = e.distance || 20,
                r = e.times || 3,
                l = 2 * r + 1,
                h = Math.round(e.duration / l),
                c = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                m = s.queue().length;
            for (t.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, s.animate(d, h, e.easing); r > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
            s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
        }), t.effects.define("slide", "show", function (e, i) {
            var n, s, o = t(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = e.mode,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (c ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.uiBackCompat !== !1 && (p = t.effects.define("transfer", function (e, i) {
            t(this).transfer(e, i)
        })), t.ui.focusable = function (i, n) {
            var s, o, a, r, l, h = i.nodeName.toLowerCase();
            return "area" === h ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled, r && (l = t(i).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h ? i.href || n : n, r && t(i).is(":visible") && e(t(i)))
        }, t.extend(t.expr[":"], {
            focusable: function (e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable, t.fn.form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = t(this);
                setTimeout(function () {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function () {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function () {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
            function n(e, i, n, o) {
                return t.each(s, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function (e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function (e, s) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.ui.escapeSelector = function () {
            var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
            return function (e) {
                return e.replace(t, "\\$1")
            }
        }(), t.fn.labels = function () {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, t.fn.scrollParent = function (e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function () {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function (e) {
                var i = t.attr(e, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        }), t.fn.extend({
            uniqueId: function () {
                var t = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function () {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function () {
                var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function () {
                var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function () {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), this.headers.each(function () {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                }).height(e))
            },
            _activate: function (e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (e) {
                var i, n, s = this.options,
                    o = this.active,
                    a = t(e.currentTarget),
                    r = a[0] === o[0],
                    l = r && s.collapsible,
                    h = l ? t() : a.next(),
                    c = o.next(),
                    u = {
                        oldHeader: o,
                        oldPanel: c,
                        newHeader: l ? t() : a,
                        newPanel: h
                    };
                e.preventDefault(), r && !s.collapsible || this._trigger("beforeActivate", e, u) === !1 || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (t, e, i) {
                var n, s, o, a = this,
                    r = 0,
                    l = t.css("box-sizing"),
                    h = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    u = h && c.down || c,
                    d = function () {
                        a._toggleComplete(i)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.ui.safeActiveElement = function (t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        }, t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function (e) {
                        var i = t(e.target),
                            n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"),
                                n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function (e) {
                        this._delay(function () {
                            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function (e) {
                var i, n, s, o, a = !0;
                switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
                }
                a && e.preventDefault()
            },
            _activate: function (t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, i, n, s, o, a = this,
                    r = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var e = t(this),
                        i = e.prev(),
                        n = t("<span>").data("ui-menu-submenu-caret", !0);
                    a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
                    var e = t(this);
                    a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function (t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function (e) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function (e) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n - s < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function (e) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function (e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function (n) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function (t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function (e, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                            t(e.target).trigger(e.originalEvent)
                        })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function (e, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function (e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function (t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function () {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function (t) {
                            s(t)
                        },
                        error: function () {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, function (t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function (t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function (t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function (e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        var f = (t.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
        t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function () {
                this._enhance()
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function () {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function () {
                var e = this,
                    i = [];
                t.each(this.options.items, function (n, s) {
                    var o, a = {};
                    return s ? "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function () {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                        classes: {}
                    }, e.element.find(s).each(function () {
                        var s = t(this),
                            o = s[n]("instance"),
                            r = t.widget.extend({}, a);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                            var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o ? o : s[n]("instance")), i.push(l[0])
                        }
                    }))) : void 0
                }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var i = t(this),
                        n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]()
                })
            },
            _updateCornerClass: function (t, e) {
                var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                    n = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, i), this._addClass(t, null, n)
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], n
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function (e, i) {
                var n = {};
                return t.each(e, function (s) {
                    var o = i.options.classes[s] || "";
                    o = t.trim(o.replace(f, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
                }), n
            },
            _setOption: function (t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function () {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(e[n](), n)
                }), this._callChildMethod("refresh"))
            }
        }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function () {
                var e, i, n = this,
                    s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
            },
            _create: function () {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function () {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function () {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function () {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked)
            },
            widget: function () {
                return this.label
            },
            _getRadioGroup: function () {
                var e, i = this.element[0].name,
                    n = "input[name='" + t.ui.escapeSelector(i) + "']";
                return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function () {
                    return 0 === t(this).form().length
                }), e.not(this.element)) : t([])
            },
            _toggleClasses: function () {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function (t, e) {
                return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0
            },
            _updateIcon: function (e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function () {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
            },
            refresh: function () {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]), t.ui.checkboxradio, t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function () {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function (e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"),
                    this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function () {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function (e, i) {
                var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function (t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function (t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function (t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function (t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function () {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function (t, e) {
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), t.fn.button = function (e) {
            return function () {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(t.fn.button), t.fn.buttonset = function () {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), t.ui.button, t.extend(t.ui, {
            datepicker: {
                version: "1.12.1"
            }
        });
        var m;
        t.extend($.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return o(this._defaults, t || {}), this
            },
            _attachDatepicker: function (e, i) {
                var n, s, o;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function (e, i) {
                var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: s,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function (e, i) {
                var n, s, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function (t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function (e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (e, i, n, s, a) {
                var r, l, h, c, u, d = this._dialogInst;
                return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function (e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), m === s && (m = null))
            },
            _enableDatepicker: function (e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function (e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function (e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (e, i, n) {
                var s, a, r, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function (e) {
                var i, n, s, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function (e) {
                var i, n, s = t.datepicker._getInst(e.target);
                return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function (e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal) try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (t) {}
                return !0
            },
            _showDatepicker: function (e) {
                if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                    var n, s, a, r, l, h, c;
                    n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), a = s ? s.apply(e, [e, n]) : {}, a !== !1 && (o(n.settings, a), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
                        return r |= "fixed" === t(this).css("position"), !r
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (h = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function (e) {
                this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e),
                    o = n[1],
                    a = 17,
                    r = e.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && s.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function (e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function (e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (e) {
                var i, n, s, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function () {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function (e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function (e, i, n, s) {
                var o, a = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function (e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function (e, i) {
                var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function (e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function (t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function (e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var s, o, a, r, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    b = -1,
                    _ = !1,
                    y = function (t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    x = function (t) {
                        var e = y(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    w = function (e, n, s) {
                        var o = -1,
                            a = t.map(y(e) ? s : n, function (t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function (t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(a, function (t, e) {
                                var n = e[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    C = function () {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < e.length; s++)
                    if (_) "'" !== e.charAt(s) || y("'") ? C() : _ = !1;
                    else switch (e.charAt(s)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", u, d);
                        break;
                    case "o":
                        b = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        y("'") ? C() : _ = !0;
                        break;
                    default:
                        C()
                    }
                if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), b > -1)
                    for (g = 1, v = b; o = this._getDaysInMonth(m, g - 1), !(o >= v);) g++, v -= o;
                if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
                return r
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function (e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function (t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function (t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                        }
                return u
            },
            _possibleChars: function (t) {
                var e, i = "",
                    n = !1,
                    s = function (i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
                return i
            },
            _get: function (t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, a) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (e, i, n) {
                var s = function (t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    o = function (i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (t) {}
                        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                            switch (l[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                            }
                            l = r.exec(i)
                        }
                        return new Date(s, o, a)
                    },
                    a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return a = a && "Invalid Date" === a.toString() ? n : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function (e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function () {
                    var e = {
                        prev: function () {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function () {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function () {
                            t.datepicker._hideDatepicker()
                        },
                        today: function () {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function () {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function () {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (t) {
                var e, i, n, s, o, a, r, l, h, c, u, d, p, f, m, g, v, b, _, y, x, w, C, k, T, D, I, S, N, P, E, M, O, A, H, L, z, W, F, B = new Date,
                    R = this._daylightSavingAdjust(new Date(B.getFullYear(), B.getMonth(), B.getDate())),
                    j = this._get(t, "isRTL"),
                    q = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"),
                    V = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    K = this._get(t, "showCurrentAtPos"),
                    $ = this._get(t, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    J = this._getMinMaxDate(t, "max"),
                    Z = t.drawMonth - K,
                    tt = t.drawYear;
                if (0 > Z && (Z += 12, tt--), J)
                    for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
                for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - $, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + $, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : R, a = V ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), _ = this._getDefaultDate(t), y = "", w = 0; w < U[0]; w++) {
                    for (C = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
                        if (T = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", I = "", X) {
                            if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                            case 0:
                                I += " ui-datepicker-group-first", D = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case U[1] - 1:
                                I += " ui-datepicker-group-last", D = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                I += " ui-datepicker-group-middle", D = ""
                            }
                            I += "'>"
                        }
                        for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === w ? j ? o : n : "") + (/all|right/.test(D) && 0 === w ? j ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, w > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + c) % 7, S += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[N] + "'>" + p[N] + "</span></th>";
                        for (I += S + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), E = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, M = Math.ceil((E + P) / 7), O = X && this.maxRows > M ? this.maxRows : M, this.maxRows = O, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - E)), H = 0; O > H; H++) {
                            for (I += "<tr>", L = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", x = 0; 7 > x; x++) z = g ? g.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], W = A.getMonth() !== Z, F = W && !b || !z[0] || Q && Q > A || J && A > J, L += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (A.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || _.getTime() === A.getTime() && _.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + z[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === R.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>",
                                A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                            I += L + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, tt++), I += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += I
                    }
                    y += C
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
                var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    b = this._get(t, "showMonthAfterYear"),
                    _ = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    y += "</select>"
                }
                if (b || (_ += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) _ += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", _ += t.yearshtml, t.yearshtml = null
                    }
                return _ += this._get(t, "yearSuffix"), b && (_ += (!o && g && v ? "" : "&#xa0;") + y), _ += "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function (t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function (e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new $, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1";
        var g = (t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
        t(document).on("mouseup", function () {
            g = !1
        }), t.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function (i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (e) {
                if (!g) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return i._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return i._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), g = !0, !0))
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function (e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, g = !1, e.preventDefault()
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0
            }
        }), t.ui.plugin = {
            add: function (e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function (t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, t.ui.safeBlur = function (e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        }, t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0))
            },
            _blockFrames: function (e) {
                this.iframeBlocks = this.document.find(e).map(function () {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function (e) {
                var i = t.ui.safeActiveElement(this.document[0]),
                    n = t(e.target);
                n.closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function (e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return "fixed" === t(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function (t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function (e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function (e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    i._trigger("stop", e) !== !1 && i._clear()
                }) : this._trigger("stop", e) !== !1 && this._clear(), !1
            },
            _mouseUp: function (e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function (e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function () {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function (t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function () {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function (t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function (t, e) {
                var i, n, s, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function (e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function (e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], t(n.options.connectToSortable).each(function () {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                })
            },
            stop: function (e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, t.each(n.sortables, function () {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                })
            },
            drag: function (e, i, n) {
                t.each(n.sortables, function () {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function () {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function () {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function () {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function (e, i, n) {
                var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function (e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function (t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function (e, i, n) {
                var s = n.options,
                    o = !1,
                    a = n.scrollParentNotHidden[0],
                    r = n.document[0];
                a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function (e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                    var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function (e, i, n) {
                var s, o, a, r, l, h, c, u, d, p, f = n.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + n.helperProportions.width,
                    b = i.offset.top,
                    _ = b + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, c = n.snapElements[d].top - n.margins.top, u = c + n.snapElements[d].height, l - m > v || g > h + m || c - m > _ || b > u + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(c - _) <= m, o = Math.abs(u - b) <= m, a = Math.abs(l - v) <= m, r = Math.abs(h - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(c - b) <= m, o = Math.abs(u - _) <= m, a = Math.abs(l - g) <= m, r = Math.abs(h - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = s || o || a || r || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function (e, i, n) {
                var s, o = n.options,
                    a = t.makeArray(t(o.stack)).sort(function (e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
                    t(this).css("zIndex", s + e)
                }), this.css("zIndex", s + a.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function (e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function (e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function (t) {
                return parseFloat(t) || 0
            },
            _isNumber: function (t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function () {
                var e, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                }).on("mouseleave", function () {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var e, i = function (e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function (t, e) {
                switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function () {
                var e, i, n, s, o, a = this.options,
                    r = this;
                if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                        zIndex: a.zIndex
                    }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function (e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function () {
                this._handles.remove()
            },
            _mouseCapture: function (e) {
                var i, n, s = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function (e) {
                var i, n, s, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: i,
                        top: n
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: a.width(),
                        height: a.height()
                    }, this.originalSize = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    } : {
                        width: a.width(),
                        height: a.height()
                    }, this.sizeDiff = {
                        width: a.outerWidth() - a.width(),
                        height: a.outerHeight() - a.height()
                    }, this.originalPosition = {
                        left: i,
                        top: n
                    }, this.originalMousePosition = {
                        left: e.pageX,
                        top: e.pageY
                    }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                    s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - s.left || 0,
                    r = e.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i, n, s, o, a, r, l, h = this.options,
                    c = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, a = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - s
                }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function () {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function () {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function (t) {
                var e, i, n, s, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function (t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function (t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function (t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), n && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function (t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function () {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function (t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function (t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function (t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function (e) {
                var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    },
                    h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function () {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function () {
                var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: a,
                    height: r
                }))
            },
            resize: function (e) {
                var i, n, s, o, a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    c = a._aspectRatio || e.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = a.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function () {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    h = a.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var e = t(this).resizable("instance"),
                    i = e.options;
                t(i.alsoResize).each(function () {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            },
            resize: function (e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    a = n.originalPosition,
                    r = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - a.top || 0,
                        left: n.position.left - a.left || 0
                    };
                t(s.alsoResize).each(function () {
                    var e = t(this),
                        n = t(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function (t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    }), e.css(s)
                })
            },
            stop: function () {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
            },
            resize: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((s.width - o.width) / h) * h,
                    d = Math.round((s.height - o.height) / c) * c,
                    p = o.width + u,
                    f = o.height + d,
                    m = n.maxWidth && n.maxWidth < p,
                    g = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p,
                    b = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), b && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
            }
        }), t.ui.resizable, t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function (e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function () {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function (e) {
                var i = this;
                this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                    i._trigger("close", e)
                }))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                        return +t(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function () {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function () {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function (e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]),
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function () {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function (e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                                s.trigger("focus")
                            }), e.preventDefault()) : (this._delay(function () {
                                n.trigger("focus")
                            }), e.preventDefault())
                        }
                    },
                    mousedown: function (t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function () {
                var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function (e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function (t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function (t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function () {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function (i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function () {
                        s.apply(e.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function () {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function (t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function (s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                    }
                })
            },
            _makeResizable: function () {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function (t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function (s, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function () {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function () {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function () {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function () {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function (e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, function (t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function (e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function () {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function (t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function () {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function (t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), t.ui.dialog, t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var e, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function (t) {
                    return t.is(n)
                }, this.proportions = function () {
                    return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function (e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function (t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function () {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function (e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function (e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                    var i = t(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && v(n, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e) ? (s = !0, !1) : void 0
                }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
            },
            ui: function (t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function () {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function () {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function () {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function () {
                this._removeClass("ui-droppable-active")
            }
        });
        var v = t.ui.intersect = function () {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function (e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                case "fit":
                    return o >= h && u >= r && a >= c && d >= l;
                case "intersect":
                    return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                case "pointer":
                    return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                case "touch":
                    return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                default:
                    return !1
                }
            }
        }();
        t.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function (e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; s < r.length; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function (e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function (e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function () {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function (e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, a = v(e, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
                            return t(this).droppable("instance").options.scope === s
                        }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function (e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function () {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function () {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), t.ui.droppable, t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
                    this.valueDiv.remove()
            },
            value: function (t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function (t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function (t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function (t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
                        var i = t(this),
                            n = i.offset(),
                            s = {
                                left: n.left - e.elementPos.left,
                                top: n.top - e.elementPos.top
                            };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function () {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function (e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }), t(e.target).parents().addBack().each(function () {
                    var n, s = t.data(this, "selectable-item");
                    return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                        selecting: s.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: s.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function (e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function () {
                        var i = t.data(this, "selectable-item"),
                            h = !1,
                            c = {};
                        i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > r || c.right < o || c.top > l || c.bottom < a) : "fit" === s.tolerance && (h = c.left > o && c.right < r && c.top > a && c.bottom < l), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function (e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function () {
                var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function (t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function () {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function (t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function (t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function () {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function () {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function (t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderButtonItem: function (e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function (e, i) {
                var n = this,
                    s = "";
                t.each(i, function (i, o) {
                    var a;
                    o.optgroup !== s && (a = t("<li>", {
                        text: o.optgroup
                    }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function (e, i) {
                var n = t("<li>"),
                    s = t("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
            },
            _setText: function (t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function (t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function (t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function () {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function (t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function (e) {
                    var i = !0;
                    switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function (t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function (t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function (t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function () {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var t = this.options.width;
                return t === !1 ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function (e) {
                var i = this,
                    n = [];
                e.each(function (e, s) {
                    n.push(i._parseOption(t(s), e))
                }), this.items = n
            },
            _parseOption: function (t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) a.push(o);
                this.handles = s.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
            },
            _createRange: function () {
                var e = this.options;
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i, n, s, o, a, r, l, h, c = this,
                    u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                    var i = Math.abs(n - c.values(e));
                    (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), a = e)
                }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - o.width() / 2,
                    top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function (t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function (t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function (t, e, i) {
                var n, s, o = this.value(),
                    a = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), a[e] = i), i !== o && (n = this._trigger("slide", t, this._uiHash(e, i, a)), n !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function (t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function (e, i) {
                var n, s = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function () {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function () {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step,
                    n = Math.round((t - e) / i) * i;
                t = n + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function () {
                var e, i, n, s, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    h = !this._animateOff && r.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each(function (n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function (e) {
                    var i, n, s, o, a = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                    }
                    switch (o = this.options.step, n = s = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        s = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        s = this._trimAlignValue(n - o)
                    }
                    this._slide(e, a, s)
                },
                keyup: function (e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function (t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function () {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (e, i) {
                var n = null,
                    s = !1,
                    o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
                    return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !(!n || this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function () {
                    this === e.target && (s = !0)
                }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0)))
            },
            _mouseStart: function (e, i, n) {
                var s, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                            this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                                n._clear(e)
                            })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || n + h > r && l > n + h,
                    d = "y" === this.options.axis || e + c > o && a > e + c,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function (t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    o = n && s;
                return !!o && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                function i() {
                    r.push(this)
                }
                var n, s, o, a, r = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (n = h.length - 1; n >= 0; n--)
                        for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, a, r, l, h, c = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (a = u[i][1], r = u[i][0], n = 0, h = r.length; h > n; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), c.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (e) {
                this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, o;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function () {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function (t, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function (e, i) {
                var n = this;
                e.children().each(function () {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function (e) {
                var i, n, s, o, a, r, l, h, c, u, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[u] - l > this.items[n][r] / 2 && (h = !0), Math.abs(e[u] - l) < s && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i, n, s = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function (t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function () {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function (t, e) {
                function i(t, e, i) {
                    return function (n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function (t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (s.push(function (t) {
                        this._trigger("remove", t, this._uiHash())
                    }), s.push(function (t) {
                        return function (e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function (t) {
                        return function (e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        }), t.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var e = this._super(),
                    i = this.element;
                return t.each(["min", "max", "step"], function (t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
                }), e
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (e) {
                    function i() {
                        var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                        e || (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function () {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function (e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _start: function (t) {
                return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function (t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function (e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function (t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: a(function (t) {
                this._super(t)
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function (t, e) {
                var i;
                "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: a(function (t) {
                this._stepUp(t)
            }),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: a(function (t) {
                this._stepDown(t)
            }),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: a(function (t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: a(function (t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function (t) {
                return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function () {
                return "<span>"
            },
            _buttonHtml: function () {
                return "<a></a><a></a>"
            }
        }), t.ui.spinner, t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var t = /#.*$/;
                return function (e) {
                    var i, n;
                    i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) {}
                    try {
                        n = decodeURIComponent(n)
                    } catch (t) {}
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function () {
                var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t)
                }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function (i, s) {
                    return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = !i && 0)), !i && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function (e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, i) {
                function n() {
                    return e > s && (e = 0), 0 > e && (e = s), e
                }
                for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                    return i.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, n) {
                    var s, o, a, r = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function (e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), e === !0 || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
            },
            _setupEvents: function (e) {
                var i = {};
                e && t.each(e.split(" "), function (t, e) {
                        i[e] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function (t) {
                            t.preventDefault()
                        }
                    }), this._on(this.anchors, i), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs),
                    this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    a = o[0] === n[0],
                    r = a && i.collapsible,
                    l = r ? t() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    c = {
                        oldTab: n,
                        oldPanel: h,
                        newTab: r ? t() : o,
                        newPanel: l
                    };
                e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
            },
            _toggle: function (e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function () {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (e) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null
                })), this._setOptionDisabled(i))
            },
            disable: function (e) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: a
                    },
                    l = function (t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, s) {
                    setTimeout(function () {
                        a.html(t), n._trigger("load", i, r), l(s, e)
                    }, 1)
                }).fail(function (t, e) {
                    setTimeout(function () {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function (e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function () {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), t.ui.tabs, t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function () {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function (e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function (e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function (e, i) {
                var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                    n._updateContent(e.element)
                })
            },
            _setOptionDisabled: function (t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                    var e = t(this);
                    return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function () {
                this.disabledTitles.each(function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function (e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
            },
            _updateContent: function (t, e) {
                var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : (i = n.call(t[0], function (i) {
                    s._delay(function () {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                }), void(i && this._open(e, t, i)))
            },
            _open: function (e, i, n) {
                function s(t) {
                    h.of = t, a.is(":hidden") || a.position(h)
                }
                var o, a, r, l, h = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(e)) : a.position(t.extend({
                        of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                        a.is(":visible") && (s(h.of), clearInterval(r))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    })
                }
            },
            _registerCloseHandlers: function (e, i) {
                var n = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function () {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function (e) {
                var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
            },
            _tooltip: function (e) {
                var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function (t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function (t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function () {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip
    })
}, , , , , function (t, e, i) {
    (function ($) {
        "use strict";
        var e = function () {
            var t = {
                init: function () {
                    var t = this;
                    this.menu = document.getElementsByClassName("menu")[0], this.slideMenu = document.getElementsByClassName("slideDownMenu")[0], this.burgerMenu = $(".i-burger-menu"), this.navMobile = document.getElementsByClassName("navigation-mobile")[0], this.slideTriggers = document.getElementsByClassName("slide-menu");
                    for (var e = 0; e < this.slideTriggers.length; e++) this.slideTriggers[e].addEventListener("mouseover", function (e) {
                        t.animate(e.type)
                    }), this.slideTriggers[e].addEventListener("mouseleave", function (e) {
                        t.animate(e.type)
                    });
                    this.burgerMenu.click(function () {
                        var e = t.navMobile.getElementsByTagName("UL")[0];
                        return window.innerWidth < 1200 && void(this.className.indexOf("open") < 0 ? (this.className = this.className + " open", $(t.navMobile).animate({
                            left: 0
                        }), TweenLite.to(e, .2, {
                            delay: .1,
                            alpha: 1,
                            ease: Power0.easeNone
                        })) : (this.className = this.className.replace(" open", ""), TweenLite.to(e, .15, {
                            alpha: 0,
                            ease: Power0.easeNone
                        }), $(t.navMobile).delay(.1).animate({
                            left: "-401px"
                        })))
                    })
                },
                returnChild: function (t, e) {
                    for (var i = [], n = 0; n < e.children.length; n++) e.children[n].className.indexOf(t) > -1 && i.push(e.children[n]);
                    return i.length <= 1 ? i[0] : i
                },
                animate: function (t) {
                    var e = this;
                    if (this.slideMenuItems = this.slideMenu.getElementsByTagName("a"), "mouseover" == t) {
                        TweenLite.to(e.slideMenu, .6, {
                            display: "block",
                            height: "300px",
                            ease: Expo.easeOut,
                            alpha: 1
                        });
                        for (var i = 0; i < e.slideMenuItems.length; i++) TweenLite.to(e.slideMenuItems[i], .5, {
                            top: 0,
                            delay: .15 * i,
                            alpha: 1,
                            ease: Expo.easeOut
                        })
                    } else {
                        if ("mouseleave" != t) return !1;
                        for (var i = 0; i < e.slideMenuItems.length; i++) TweenLite.to(e.slideMenuItems[i], .5, {
                            top: "-100px",
                            delay: .1 * i,
                            alpha: 0,
                            ease: Expo.easeOut
                        });
                        TweenLite.to(e.slideMenu, .5, {
                            delay: .2,
                            display: "none",
                            height: 0,
                            alpha: 0,
                            ease: "linear"
                        })
                    }
                },
                slideAccordion: function (t, e, i) {
                    t.className.indexOf("active") > -1 ? (t.className = t.className.replace(" active", ""), null !== e.firstSlideDown && TweenLite.to(e.firstSlideDown, .1, {
                        height: e.firstSlideDown_H - i,
                        ease: Power0.easeNone
                    }), TweenLite.to(e.navSecondary, .1, {
                        delay: .1,
                        alpha: 0,
                        ease: Power0.easeNone
                    }), TweenLite.to(e.slideDownMenu, .1, {
                        height: 0,
                        ease: Power0.easeNone
                    })) : (t.className = t.className + " active", null !== e.firstSlideDown && TweenLite.to(e.firstSlideDown, .1, {
                        height: i + e.firstSlideDown_H,
                        ease: Power0.easeNone
                    }), TweenLite.to(e.navSecondary, .1, {
                        delay: .1,
                        alpha: 1,
                        ease: Power0.easeNone
                    }), TweenLite.to(e.slideDownMenu, .1, {
                        height: i,
                        alpha: 1,
                        ease: Power0.easeNone
                    }))
                }
            };
            t.init()
        }();
        window.addEventListener("DOMContentLoaded", function () {
            var t = document.getElementById("overlay-search"),
                e = document.getElementsByClassName("i-search")[0],
                i = document.getElementById("close-search");
            e.addEventListener("click", function (e) {
                TweenLite.to(t, .8, {
                    display: "block",
                    top: 0,
                    alpha: 1,
                    ease: Expo.easeOut
                }), e.target.className.indexOf(this.className) < 0 && e.preventDefault()
            }), i.addEventListener("click", function (e) {
                TweenLite.to(t, .4, {
                    alpha: 0,
                    ease: Power4.easeIn,
                    onComplete: function () {
                        t.style.display = "none", t.style.top = "-110%"
                    }
                }), e.preventDefault()
            })
        }), t.exports = e
    }).call(e, i(2))
}, function (t, e) {
    "use strict";
    var i = function () {
        var t = {
            init: function () {
                this.triggers = document.getElementsByClassName("spec-name"), this.sizePickersCont = document.getElementsByClassName("sizes"), this.sizePickersList = [], this.sizePickers = [];
                for (var t = 0; t < this.sizePickersCont.length; t++) this.sizePickersList.push(this.sizePickersCont[t].getElementsByTagName("LI")), this.sizePickers.push(this.sizePickersCont[t].getElementsByTagName("a"));
                for (var e = this, i = 0; i < this.triggers.length; i++) "SPAN" !== this.triggers[i].tagName && (this.triggers[i].onclick = function (t) {
                    var e = this.nextElementSibling.className.indexOf("spec-toggle") > -1 ? this.nextElementSibling : null,
                        i = e.getElementsByTagName("div")[0].offsetHeight;
                    return null !== e && (e.className.indexOf("active") < 0 ? TweenLite.to(e, .6, {
                        className: "+=active",
                        height: i + "px",
                        marginBottom: "20px",
                        ease: Power4.easeOut
                    }) : TweenLite.to(e, .6, {
                        className: "-=active",
                        height: "0px",
                        marginBottom: "0px",
                        ease: Power4.easeOut
                    })), !1
                });
                for (var n = 0; n < this.sizePickers.length; n++)
                    for (var s = 0; s < this.sizePickers[n].length; s++) this.sizePickers[n][s].pos = n, this.sizePickers[n][s].onclick = function (t) {
                        if (!(this.parentElement.className.indexOf("active") < 0)) return !1;
                        for (var t = 0; t < e.sizePickers[this.pos].length; t++) e.sizePickers[this.pos][t].parentElement.className = "";
                        return this.parentElement.className = "active", !1
                    }
            }
        };
        return t.init(), t
    }();
    t.exports = i
}, function (t, e) {
    "use strict";
    var i = {
        init: function (t) {
            function e(t) {
                return !(window.pageYOffset > i.targetY) && (window.requestAnimationFrame(e), i.timeNow = Date.now(), i.delta = i.timeNow - i.timeStart, i.timeStart = i.timeNow - i.delta % i.interval, i.index += 61.666788, void window.scroll(0, i.index))
            }
            var i = this;
            this.container = document.getElementsByClassName(t.container)[0], this.targetY = i.container.offsetTop, this.fps = 60, this.timeStart = Date.now(), this.interval = 1e3 / this.fps, this.timeNow, this.delta, this.index = 0, window.location.href.indexOf("sOcRuXJnMT=1") > -1 && e(), this.button = document.getElementsByClassName(t.button);
            for (var n = 0; n < this.button.length; n++) this.button[n].addEventListener("click", function (t) {
                i.targetY = i.container.offsetTop, e()
            });
            window.addEventListener("scroll", function () {
                i.index = this.pageYOffset
            })
        }
    };
    i.init({
        container: "product",
        button: "shop"
    }), t.exports = i
}, function (t, e) {
    "use strict";
    var i = {
        win: window.innerWidth,
        cont: document.getElementsByClassName("featureCont")[0],
        items: document.getElementsByClassName("featureItem"),
        init: function (t) {
            if (void 0 != this.items[0]) {
                var e = this;
                this.itemsLength = this.items.length, this.itemsWidth = this.win, this.containerWidth = this.itemsWidth * this.itemsLength, this.cont.style.width = this.containerWidth + "px", this.touchstartX, this.touchmoveX, this.touchendX, this.index = 0, this.ended = !1, this.mainContainer = void 0 == t.pageContainer ? t : t.pageContainer, this.speed = void 0 == t.speed ? 1.3 : t.speed, this.ease = void 0 == t.ease ? Power4 : t.ease, this.autoPlay = void 0 == t.autoPlay || t.autoPlay, this.resize = !1, this.slideTime = 6e3, this.itemInfo = this.cont.getElementsByTagName("SECTION"), this.autoPlay && this.items.length > 1 && (this.startAutoSlide = setInterval(function () {
                    e.autoSlide()
                }, this.slideTime)), this.navCont = document.getElementsByClassName("nav-bullets")[0], this.navCont.innerHTML += "<ul>";
                for (var i = 0; i < this.itemsLength; i++) this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>', this.items[i].style.width = this.itemsWidth + "px", this.items[i].pos = i, this.items[i].slideTitle = void 0 == this.items[i].getElementsByTagName("h1")[0] ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0], this.items[i].bts = void 0 == this.items[i].getElementsByClassName("btn-box")[0] ? "" : this.items[i].getElementsByClassName("btn-box")[0];
                this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI"), this.navBullet[0].className += "active";
                for (var n = 0; n < this.navBullet.length; n++) this.navBullet[n].pos = n, this.navBullet[n].onclick = function (t) {
                    clearInterval(e.startAutoSlide);
                    for (var i, n = this.pos, s = 0; s < e.navBullet.length; s++) e.navBullet[s].className.indexOf("active") > -1 && (i = s);
                    return !(this.className.indexOf("active") > -1) && (n > i ? (e.index = n, e.goTo(n, "f", "click", i)) : (e.index = n, e.goTo(n, "r", "click", i)), e.autoPlay && (e.index = n), void t.preventDefault())
                };
                window.addEventListener("resize", function () {
                    e.resize = !0, e.responsive.getHeight(e.mainContainer, this.innerWidth)
                }), TweenLite.to(e.itemInfo[0], .4, {
                    alpha: 1,
                    ease: "linear"
                }), this.responsive.getHeight(this.mainContainer, window.innerWidth)
            }
        },
        responsive: {
            getHeight: function (t, e) {
                var e = e;
                this.bodyChilds = document.getElementsByTagName("BODY")[0].childNodes, this.previousHeight = 0;
                for (var n = 0; n < this.bodyChilds.length; n++) {
                    var s = void 0 !== this.bodyChilds[n].className ? this.bodyChilds[n].className.indexOf(t) < 0 : null;
                    s !== !1 && "parallax-mirror" !== this.bodyChilds[n].className ? "#text" !== this.bodyChilds[n].nodeName && void 0 !== this.bodyChilds[n].offsetHeight && "hidden" !== this.bodyChilds[n].style.visibility && (this.previousHeight += this.bodyChilds[n].offsetHeight) : this.attachHeight(this.previousHeight, i.cont, e)
                }
            },
            attachHeight: function (t, e, n) {
                var s = i,
                    o = (window.innerHeight - t, n);
                e.style.height = "750px";
                for (var a = 0; a < s.itemsLength; a++) s.items[a].style.width = o + "px";
                s.resize && (s.itemsWidth = o, s.containerWidth = s.itemsWidth * s.itemsLength, e.style.width = s.containerWidth + "px")
            }
        },
        autoSlide: function () {
            this.index < this.itemsLength - 1 && this.ended !== !0 ? (this.goTo(this.index, "f"), this.index++) : (this.index <= 1 ? this.ended = !1 : this.ended = !0, this.goTo(this.index, "r"), this.index--)
        },
        goTo: function (t, e, i, n) {
            var s = this,
                o = "click" == i ? 0 : 1,
                a = "click" == i ? n : t,
                r = s.ease == Back ? Back.easeOut.config(1) : s.ease.easeOut;
            if (this.items[a].className.indexOf("active") > -1 && (this.items[a].className = this.items[a].className.replace(" active", ""), this.navBullet[a].className = this.navBullet[a].className.replace("active", "")), "f" == e) {
                var l = t + o;
                this.items[t + o].className.indexOf("active") < 0 && (this.items[t + o].className = this.items[t + o].className + " active", this.navBullet[t + o].className = this.navBullet[t + o].className + " active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: "-" + this.itemsWidth * (t + o) + "px"
                    },
                    ease: r,
                    onComplete: function (t) {
                        s.itemInfo[l - 1].style.opacity = 0, TweenLite.to(s.itemInfo[l], .4, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else if ("r" == e) {
                var l = t - o;
                this.items[t - o].className.indexOf("active") < 0 && (this.items[t - o].className = this.items[t - o].className + " active", this.navBullet[t - o].className = this.navBullet[t - o].className + "active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: -this.itemsWidth * (t - o)
                    },
                    ease: r,
                    onComplete: function () {
                        s.itemInfo[l + 1].style.opacity = 0, TweenLite.to(s.itemInfo[l], .5, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else TweenLite.to(this.cont, s.speed, {
                css: {
                    left: this.itemsWidth * t
                },
                ease: r
            })
        }
    };
    i.init({
        pageContainer: "main-featured",
        speed: 1,
        autoPlay: !0,
        ease: Expo
    }), t.exports = i
}, function (t, e) {
    "use strict";
    var i = {
        isTouch: function () {
            return "ontouchstart" in window || navigator.maxTouchPoints
        },
        win: window.innerWidth,
        cont: document.getElementsByClassName("slideCont")[0],
        items: document.getElementsByClassName("slideItem"),
        init: function (t) {
            var e = this;
            if (!(void 0 == this.items[0] || document.getElementsByClassName("main-featured")[0].className.indexOf("towel") > -1)) {
                this.itemsLength = this.items.length, this.itemsWidth = this.win, this.containerWidth = this.itemsWidth * this.itemsLength, this.cont.style.width = this.containerWidth + "px", this.cont.style.height = window.innerHeight + "px", this.touchstartX, this.touchmoveX, this.touchendX, this.index = 0, this.ended = !1, this.mainContainer = void 0 == t.pageContainer ? t : t.pageContainer, this.speed = void 0 == t.speed ? 1.3 : t.speed, this.ease = void 0 == t.ease ? Power4 : t.ease, this.autoPlay = void 0 == t.autoPlay || t.autoPlay, this.resize = !1, this.slideTime = 6e3, this.itemInfo = this.cont.getElementsByTagName("SECTION"), this.added = !1, this.isTouch() && (this.cont.addEventListener("touchstart", e.touchSlide.touchStart), this.cont.addEventListener("touchmove", e.touchSlide.touchMove), this.cont.addEventListener("touchend", e.touchSlide.touchEnd)), this.autoPlay && this.items.length > 1 && (this.startAutoSlide = setInterval(function () {
                    e.autoSlide()
                }, this.slideTime)), this.navCont = document.getElementsByClassName("nav-bullets")[0], this.navCont.innerHTML += "<ul>";
                for (var i = 0; i < this.itemsLength; i++) this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>', this.items[i].style.width = this.itemsWidth + "px", this.items[i].pos = i, this.items[i].slideTitle = void 0 == this.items[i].getElementsByTagName("h1")[0] ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0], this.items[i].bts = void 0 == this.items[i].getElementsByClassName("btn-box")[0] ? "" : this.items[i].getElementsByClassName("btn-box")[0];
                this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI"), this.navBullet[0].className += "active", this.items[0].className = this.items[0].className + " active";
                for (var n = 0; n < this.navBullet.length; n++) this.navBullet[n].pos = n, this.navBullet[n].onclick = function (t) {
                    clearInterval(e.startAutoSlide);
                    for (var i, n = this.pos, s = 0; s < e.navBullet.length; s++) e.navBullet[s].className.indexOf("active") > -1 && (i = s);
                    return !(this.className.indexOf("active") > -1) && (n > i ? (e.index = n, e.hasVideo(n), e.goTo(n, "f", "click", i)) : (e.index = n, e.hasVideo(n), e.goTo(n, "r", "click", i)), e.autoPlay && (e.index = n, e.hasVideo(n) !== !0 && (e.startAutoSlide = setInterval(function () {
                        e.autoSlide()
                    }, 6e3))), void t.preventDefault())
                };
                for (var s = document.getElementsByClassName("shop"), o = 0; o < s.length; o++) s[o].addEventListener("click", function (t) {
                    window.location.href = this.getAttribute("href") + "?sOcRuXJnMT=1"
                });
                window.addEventListener("resize", function () {
                    e.resize = !0, e.responsive(this.innerWidth)
                }), TweenLite.to(e.itemInfo[0], .4, {
                    alpha: 1,
                    ease: "linear"
                }), this.responsive(window.innerWidth), void 0 !== t.textSlide && this.textSlide(t.textSlide)
            }
        },
        responsive: function (t) {
            var e = this,
                i = t,
                n = window.innerHeight;
            e.cont.className.indexOf("featureCont") < 0 && e.cont.className.indexOf("slide-products") > -1 && (e.cont.style.height = n + "px");
            for (var s = 0; s < e.itemsLength; s++) e.items[s].style.width = i + "px";
            e.cont.style.width = t * e.itemsLength + "px", e.itemsWidth = t, e.containerWidth = e.itemsWidth * e.itemsLength
        },
        touchSlide: {
            touchStart: function (t, e, n) {
                return clearInterval(i.startAutoSlide), i.touchstartX = t.changedTouches[0].clientX + i.itemsWidth * i.index, !1
            },
            touchMove: function (t, e, n) {
                return t.touchmoveX = t.changedTouches[0].clientX - i.touchstartX, TweenLite.to(i.cont, 1, {
                    css: {
                        left: t.touchmoveX + "px"
                    }
                }), !1
            },
            touchEnd: function (t, e) {
                var n = .25 * window.innerWidth,
                    s = .75 * window.innerWidth,
                    o = i.index < i.itemsLength - 1;
                return i.touchendX = event.changedTouches[0].clientX, i.touchendX <= n && o ? (i.hasVideo(i.index + 1) && i.playVideo(i.index + 1), i.hasVideo(i.index) && i.stopVideo(i.video), i.goTo(i.index, "f"), i.index++) : i.touchendX >= s && i.index > 0 ? (i.hasVideo(i.index - 1) && i.playVideo(i.index - 1), i.hasVideo(i.index) && i.stopVideo(i.video), i.goTo(i.index, "r"), i.index--) : TweenLite.to(i.cont, i.speed, {
                    css: {
                        left: -(i.itemsWidth * i.index)
                    },
                    ease: i.ease.easeOut
                }), i.startAutoSlide = setInterval(function () {
                    i.autoSlide()
                }, i.slideTime), !1
            }
        },
        autoSlide: function () {
            this.index < this.itemsLength - 1 && this.ended !== !0 ? (this.hasVideo(this.index + 1) && this.playVideo(this.index + 1), this.goTo(this.index, "f"), this.index++) : (this.index <= 1 ? this.ended = !1 : this.ended = !0, this.hasVideo(this.index - 1), this.goTo(this.index, "r"), this.index--)
        },
        hasVideo: function (t) {
            return void 0 !== this.items[t].getElementsByTagName("VIDEO")[0] && this.win > 768
        },
        stopVideo: function (t) {
            var e = this;
            e.slideTime = 6e3, t.currentTime = 0, t.pause()
        },
        playVideo: function (t) {
            function e() {
                clearInterval(i.startAutoSlide), i.slideTime = 6e3, i.startAutoSlide = setInterval(function () {
                    i.autoSlide()
                }, i.slideTime), i.video.currentTime = 0, i.video.pause(), i.autoSlide()
            }
            var i = this;
            clearInterval(this.startAutoSlide), this.video = this.items[t].getElementsByTagName("VIDEO")[0], this.video.currentTime = 0, this.video.play(), this.videoDuration = 1e3 * this.video.duration, this.slideTime = this.videoDuration, this.startAutoSlide = setInterval(function () {
                e()
            }, this.slideTime)
        },
        goTo: function (t, e, i, n) {
            var s = this,
                o = "click" == i ? 0 : 1,
                a = "click" == i ? n : t,
                r = s.ease == Back ? Back.easeOut.config(1.2) : s.ease.easeOut;
            if (this.items[a].className.indexOf("active") > -1 && (this.items[a].className = this.items[a].className.replace(" active", ""), this.navBullet[a].className = this.navBullet[a].className.replace("active", "")), "f" == e) {
                var l = t + o;
                this.items[t + o].className.indexOf("active") < 0 && (this.items[t + o].className = this.items[t + o].className + " active", this.navBullet[t + o].className = this.navBullet[t + o].className + " active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: "-" + this.itemsWidth * (t + o) + "px"
                    },
                    ease: r,
                    onComplete: function (t) {
                        s.itemInfo[l - 1].style.opacity = 0
                    }
                }), TweenLite.to(s.itemInfo[l], .4, {
                    delay: .7,
                    alpha: 1,
                    ease: "linear"
                }), TweenLite.to(s.items[t], .4, {
                    delay: .1,
                    alpha: 0,
                    ease: r
                }), TweenLite.to(s.items[t + o], .4, {
                    alpha: 1,
                    ease: "linear"
                }), void 0 !== s.items[t + o].slideTitle && setTimeout(function () {
                    s.items[t + o].slideTitle.className = "active", s.items[t + o].bts.className = "btn-box active"
                }, 900)
            } else if ("r" == e) {
                var l = t - o;
                this.items[t - o].className.indexOf("active") < 0 && (this.items[t - o].className = this.items[t - o].className + " active", this.navBullet[t - o].className = this.navBullet[t - o].className + "active"), TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: -this.itemsWidth * (t - o)
                    },
                    ease: r,
                    onComplete: function () {
                        s.itemInfo[l + 1].style.opacity = 0
                    }
                }), TweenLite.to(s.itemInfo[l], .4, {
                    delay: .7,
                    alpha: 1,
                    ease: "linear"
                }), TweenLite.to(s.items[t], .4, {
                    delay: .1,
                    alpha: 0,
                    ease: r
                }), TweenLite.to(s.items[t - o], .4, {
                    alpha: 1,
                    ease: "linear"
                }), void 0 !== s.items[t - o].slideTitle && setTimeout(function () {
                    s.items[t - o].slideTitle.className = "active", s.items[t - o].bts.className = "btn-box active"
                }, 900)
            } else TweenLite.to(this.cont, s.speed, {
                css: {
                    left: this.itemsWidth * t
                },
                ease: r
            })
        }
    };
    i.init({
        pageContainer: "main-featured",
        speed: 1.8,
        autoPlay: !0,
        ease: Expo
    }), t.exports = i
}, function (t, e, i) {
    (function ($) {
        "use strict";
        ! function () {
            function t(t, e, i) {
                var n = t,
                    s = 1 == i ? n.getAttribute("href").replace('url("', "").replace('")', "") : n.style.backgroundImage.replace('url("', "").replace('")', ""),
                    o = document.createElement("IMG");
                o.src = s, o.onerror = function (t) {
                    for (var n = 0; n < e.length; n++) i ? e[n].getAttribute("href").replace('url("', "").replace('")', "") == this.src.replace("http:", "") && $(e[n]).remove() : e[n].style.backgroundImage.replace('url("', "").replace('")', "") == this.src.replace("http:", "") && $(e[n]).remove()
                }
            }
            for (var e = document.getElementsByClassName("slideCont")[0], i = e.getElementsByClassName("slideItem"), n = void 0 == document.getElementsByClassName("fancybox") ? void 0 : document.getElementsByClassName("fancybox"), s = 0; s < i.length; s++) t(i[s], i, !1);
            if (void 0 !== n)
                for (var o = 0; o < n.length; o++) t(n[o], n, !0)
        }()
    }).call(e, i(2))
}, function (module, exports, __webpack_require__) {
    (function ($) {
        "use strict";
        var productBikini = {
            init: function (t) {
                var e = this,
                    i = void 0 == t ? "" : t.handle.toLowerCase(),
                    n = {
                        green: "linear-gradient(#1d8782, #34b9b2, #34b9b2, #2bb4ac, #6cccc6)",
                        pink: "linear-gradient(#9d6072, #be7e90, #be7e90, #b16a7e, #c995a7)"
                    };
                if (this.mainCont = document.getElementsByClassName("main-featured")[0], this.close = document.getElementsByClassName("close"), this.top = document.getElementById("top"), this.briefs = document.getElementById("briefs"), this.productContainer = document.getElementsByClassName("product")[0], this.imgPreview = document.getElementsByClassName("col w-50 preview")[0].getElementsByTagName("img")[0], this.product = t, this.loading = $("#loader-operations, #overlay-operations"), this.descripTemporary = document.createElement("div"), void 0 === this.product) return !1;
                this.product.handle.indexOf("-") > -1 ? i = this.product.handle.split("-")[0] : i, this.bikiniType = document.getElementsByClassName(i), void 0 == this.product.description ? void 0 : this.descripTemporary.innerHTML = this.product.description;
                var s = this.bikiniType[0].getAttribute("data-color").toLowerCase(),
                    o = document.getElementById("prod-description"),
                    a = this.descripTemporary.getElementsByClassName(s)[0].innerText;
                void 0 !== o && (o.innerHTML = this.descripTemporary.getElementsByClassName(s)[0].innerText);
                var r = this.imgPreview.src.indexOf("_p") > -1 ? "pink" : "green";
                i.split("-")[0];
                this.productContainer.style.backgroundImage = n[r], window.addEventListener("load", function () {
                    e.createDetails()
                });
                for (var l = 0; l < this.close.length; l++) this.close[l].onclick = function (t) {
                    var e = this.parentElement;
                    if (e.className.indexOf("disabled") < 0) {
                        var i = $(".fancybox.top", ".img-details"),
                            n = $(".fancybox.bottom", ".img-details"),
                            s = $(".other", ".img-details");
                        e.className = "disabled", void 0 !== i[0] ? "top" == this.parentElement.id ? (i.removeClass("fancybox").addClass("disabled"), i.click(function (t) {
                            t.preventDefault()
                        })) : (n.removeClass("fancybox").addClass("disabled"), n.click(function (t) {
                            t.preventDefault()
                        })) : (s.removeClass("fancybox").addClass("disabled"), s.click(function (t) {
                            t.preventDefault()
                        }))
                    } else {
                        var i = $(".top", ".img-details"),
                            n = $(".bottom", ".img-details"),
                            s = $(".other", ".img-details");
                        e.className = e.className.replace("disabled", ""), void 0 !== i[0] ? "top" == this.parentElement.id ? (i.removeClass("disabled").addClass("fancybox"), i.click(function (t) {
                            return !0
                        })) : (n.removeClass("disabled").addClass("fancybox"), n.click(function (t) {
                            return !0
                        })) : (s.removeClass("disabled").addClass("fancybox"), s.click(function (t) {
                            t.preventDefault()
                        }))
                    }
                    return !1
                };
                for (var h = 0; h < this.bikiniType.length; h++) this.bikiniType[h].pos = h, this.bikiniType[h].onclick = function (t) {
                    var i, s = this.getAttribute("data-color").toLowerCase(),
                        r = function (t) {
                            for (var i = 0; i < e.product.variants.length; i++)
                                if (e.product.variants[i].title.toLowerCase() == t)
                                    if (e.product.variants[i].available !== !0) {
                                        var n = document.getElementById("purchase-button");
                                        n.className = "solded-out"
                                    } else {
                                        var n = document.getElementById("purchase-button");
                                        n.className.indexOf("solded-out") > -1 && (n.className = n.className.replace("solded-out", "add-cart"))
                                    }
                        };
                    if (r(s), void 0 !== o && (a = e.descripTemporary.getElementsByClassName(s)[0].innerText), !(this.className.indexOf("active") < 0)) return !1;
                    e.loading.fadeIn();
                    for (var l = 0; l < e.bikiniType.length; l++) {
                        var h = e.bikiniType[l].className.indexOf("active") > -1,
                            c = e.bikiniType[l].className.indexOf("briefs") > -1;
                        h && (c && this.className.indexOf("briefs") > -1 && (e.bikiniType[l].className = e.bikiniType[l].className.replace(" active", "")), !c && this.className.indexOf("briefs") < 0 && (e.bikiniType[l].className = e.bikiniType[l].className.replace(" active", "")))
                    }
                    this.className = this.className + " active";
                    for (var u = 0; u < e.product.images.length; u++) {
                        var d = e.product.handle;
                        if (e.product.images[u].indexOf(d + "-" + s) > -1) {
                            i = e.product.images[u];
                            var p = i.indexOf("_g") > -1 ? "green" : "pink";
                            e.productContainer.style.backgroundImage = n[p]
                        }
                    }
                    return $(e.imgPreview).attr("src", i).on("load", function () {
                        setTimeout(function () {
                            e.loading.delay(2).fadeOut()
                        }, 400)
                    }), e.showDetails(this.pos), !1
                }
            },
            createDetails: function () {
                var t = [],
                    e = document.getElementsByClassName("nav-towel"),
                    i = e.length > 1 ? this.bikiniType.length / 2 : this.bikiniType.length,
                    n = document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0];
                this.allDetails = document.getElementsByClassName("fancybox"), this.detailsCont = document.getElementsByClassName("img-details")[0], this.imgDetails = this.detailsCont.getElementsByClassName("fancybox");
                for (var s = 0; s < i; s++) t.push(this.bikiniType[s].getAttribute("data-color").toLowerCase());
                for (var o = 0; o < t.length; o++)
                    if (n.src.indexOf(t[o]) > -1) {
                        var a = t[o];
                        e.length > 1 ? ($(".bikini", $(".nav-towel")[0])[o].className = $(".bikini", $(".nav-towel")[0])[o].className + " active", $(".bikini", $(".nav-towel")[1])[o].className = $(".bikini", $(".nav-towel")[1])[o].className + " active") : $(".bikini")[o].className = $(".bikini")[o].className + " active"
                    }
                for (var r = 0; r < this.allDetails.length; r++) {
                    var l = this.allDetails[r].href.indexOf("top") > -1 ? "top" : this.allDetails[r].href.indexOf("bottom") > -1 ? "bottom" : "other";
                    switch (l) {
                    case "top":
                        this.allDetails[r].className = this.allDetails[r].className + " top";
                        break;
                    case "bottom":
                        this.allDetails[r].className = this.allDetails[r].className + " bottom";
                        break;
                    case "other":
                        this.allDetails[r].className = this.allDetails[r].className + " other"
                    }
                }
                this.hideDetails(a), void 0 !== this.detailsCont && (this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px", this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px")
            },
            hideDetails: function (t) {
                for (var e = 0; e < this.imgDetails.length; e++) this.imgDetails[e].getElementsByTagName("img")[0].src.indexOf(t) < 0 && (this.imgDetails[e].style.display = "none")
            },
            showDetails: function (t) {
                for (var e = [], i = ["top", "bottom"], n = 0; n < this.bikiniType.length; n++) this.bikiniType[n].className.indexOf("active") > -1 && e.push(this.bikiniType[n].getAttribute("data-color").toLowerCase());
                console.log(e);
                for (var s = 0; s < this.imgDetails.length; s++) this.imgDetails[s].style.display = "none";
                for (var o = 0; o < this.imgDetails.length; o++)
                    for (var a = 0; a < e.length; a++) this.imgDetails[o].className.indexOf("other") < 0 ? this.imgDetails[o].getElementsByTagName("img")[0].src.indexOf(e[a]) > -1 && this.imgDetails[o].className.indexOf(i[a]) > -1 && (this.imgDetails[o].style.display = "block") : this.imgDetails[o].getElementsByTagName("img")[0].src.indexOf(e[a]) > -1 && (this.imgDetails[o].style.display = "block");
                this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px", this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px"
            },
            addItem: function () {
                function getVariantId(t, e) {
                    for (var i = 0; i < me.variants.length; i++) void 0 !== e ? me.variants[i].title == t ? me.variantToAdd.push(me.variants[i].id) : me.variants[i].title == e && me.variantToAdd.push(me.variants[i].id) : (me.variants[i].title == t || t.indexOf(me.variants[i].title) > -1) && (me.variantToAdd = me.variants[i].id)
                }
                this.topStatus = this.top.className.indexOf("disabled") < 0 ? "active" : "disabled", "trykini" !== this.product.handle && (this.briefsStatus = this.briefs.className.indexOf("disabled") < 0 ? "active" : "disabled"), this.sizesContainer = document.getElementsByClassName("sizes"), this.sizeName = [];
                var me = this,
                    count = 0;
                this.applyModal = function (t, e, i, n, s, o) {
                    return this.title = "Towel" == t ? "Beach Towel" : t, this.price = e, this.subtotal = i, this.variant = s, this.size = void 0 == o ? "" : o, this.image = n, this.successTowel = "<div class='vertty-order-modal'><div class='order-img'><img src='" + this.image + "'></div><div class='order-info'><span class='tlt'>" + this.title + "</span><span>Qty:  <b>1</b></span><span>TP:  <b>" + this.variant + "</b></span><span class='item-price'>" + this.price + "</span></div><div class='order-price'><span>Subtotal <span class='total-value'>" + this.subtotal + "</span></span></div></div><div class='btn-box' style='text-align: right;'><a href='/cart' class='view-cart'></a></div>", this.successTowel
                };
                for (var j = 0; j < this.sizesContainer.length; j++) {
                    this.sizesContainer[j].sizes = this.sizesContainer[j].getElementsByTagName("LI");
                    for (var b = 0; b < this.sizesContainer[j].sizes.length; b++)
                        if (this.sizesContainer[j].sizes[b].className.indexOf("active") < 0 ? count++ : this.sizeName.push(this.sizesContainer[j].sizes[b].getElementsByTagName("a")[0].innerText), count == this.sizesContainer[j].sizes.length * this.sizesContainer.length) return swal({
                            title: "Warning!",
                            text: "Select your product size",
                            type: "warning",
                            allowOutsideClick: !0,
                            customClass: "sweet-old"
                        }), !1
                }
                this.bikiniColour = [], this.variants = this.product.variants, this.variantToAdd = null, this.cartCounter = document.getElementsByClassName("cart-count");
                for (var m = 0; m < this.bikiniType.length; m++) this.bikiniType[m].className.indexOf("active") > -1 && this.bikiniType[m].className.indexOf("briefs") > -1 ? this.bikiniColour.push(this.bikiniType[m].getAttribute("data-color")) : this.bikiniType[m].className.indexOf("active") > -1 && this.bikiniType[m].className.indexOf("briefs") < 0 && this.bikiniColour.push(this.bikiniType[m].getAttribute("data-color"));

                if (Shopify.onError = function (XMLHttpRequest, textStatus) {
                        var data = eval("(" + XMLHttpRequest.responseText + ")");
                        swal({
                            title: "Error!",
                            text: data.description,
                            type: "warning",
                            allowOutsideClick: !0,
                            customClass: "sweet-old"
                        }), me.loading.fadeOut()

                    }, "trykini" !== this.product.handle)

                    if ("active" == this.topStatus && "active" == this.briefsStatus && null !== this.sizeName)

                        if (this.sizeName[0] == this.sizeName[1] && this.bikiniColour[0] == this.bikiniColour[1]) {
                            var currentItem = "TopAndBrief / " + this.bikiniColour[0] + " / " + this.sizeName[0];
                            getVariantId(currentItem)
                        } else {
                            var currentItem = "Top / " + this.bikiniColour[0] + " / " + this.sizeName[0],
                                otherItem = "Brief / " + this.bikiniColour[1] + " / " + this.sizeName[1];
                            me.variantToAdd = [], getVariantId(currentItem, otherItem)
                        } else if ("active" == this.topStatus) {
                    var currentItem = "Top / " + this.bikiniColour[0] + " / " + this.sizeName[0];
                    getVariantId(currentItem)
                } else {
                    if ("active" != this.briefsStatus) return swal({
                        title: "Warning!",
                        text: "Please select a product",
                        type: "warning",
                        allowOutsideClick: !0,
                        customClass: "sweet-old"
                    }), !1;
                    var currentItem = "Brief / " + this.bikiniColour[1] + " / " + this.sizeName[1];
                    getVariantId(currentItem)
                } else {
                    if ("active" != this.topStatus) return swal({
                        title: "Warning!",
                        text: "Cart is currently empty",
                        type: "warning",
                        allowOutsideClick: !0,
                        customClass: "sweet-old"
                    }), !1;
                    var currentItem = "Trykini - " + this.sizeName[0] + " / " + this.bikiniColour[0];
                    getVariantId(currentItem)
                }
                return void 0 == this.variantToAdd ? swal({
                    title: "Warning!",
                    text: "Cart is currently empty",
                    type: "warning",
                    allowOutsideClick: !0,
                    customClass: "sweet-old"
                }) : (this.loading.fadeIn(), this.variantToAdd.length > 0 ? Shopify.addItem(this.variantToAdd[0], 1, function (t) {
                    Shopify.addItem(me.variantToAdd[1], 1, function (t) {
                        Shopify.getCart(function (t) {
                            for (var e, i, n, s, o = 0; o < me.cartCounter.length; o++) me.cartCounter[o].innerHTML = t.item_count;
                            $(t.items).each(function (o, a) {
                                a.id == me.variantToAdd[1] && (i = Shopify.formatMoney(a.price).replace("$", "€"), n = Shopify.formatMoney(t.total_price).replace("$", "€"), s = a.variant_title, e = a.image)
                            }), me.loading.fadeOut(), swal({
                                title: '<div style="display:none">Bikini [2 Added]</div>',
                                text: me.applyModal(me.product.type, i, n, e, s),
                                html: !0,
                                showConfirmButton: !1,
                                allowOutsideClick: !0
                            })
                        })
                    })
                }) : Shopify.addItem(this.variantToAdd, 1, function (t) {
                    Shopify.getCart(function (t) {
                        for (var e, i, n, s, o = 0; o < me.cartCounter.length; o++) me.cartCounter[o].innerHTML = t.item_count;
                        $(t.items).each(function (o, a) {
                            a.id == me.variantToAdd && (i = Shopify.formatMoney(a.price).replace("$", "€"), n = Shopify.formatMoney(t.total_price).replace("$", "€"), s = a.variant_title, e = a.image)
                        }), me.loading.fadeOut(), swal({
                            title: '<div style="display:none">Bikini</div>',
                            text: me.applyModal(me.product.type, i, n, e, s),
                            html: !0,
                            showConfirmButton: !1,
                            allowOutsideClick: !0
                        })
                    })
                })), !1
            }
        };
        window.productBikini = productBikini, module.exports = productBikini
    }).call(exports, __webpack_require__(2))
}, function (t, e, i) {
    (function ($) {
        i(11), $(document).ready(function () {
            var t = {},
                e = $("._overlay-search .results-cont");
            $("#search-portal-input").keypress(function (t) {
                if (13 == t.keyCode) return !1
            }), $("#search-portal-input").autocomplete({
                source: function (i, n) {
                    $.ajax({
                        cache: !1,
                        url: "/search",
                        data: {
                            q: "*" + i.term + "*",
                            view: "json"
                        },
                        dataType: "json",
                        success: function (s) {
                            var o = $(".search-results", ".results-cont");
                            if (s.length) {
                                void 0 !== o[0] && (o.remove(), o = $(".search-results", ".results-cont"));
                                for (var a = 0; a < s.length; a++) {
                                    var r = "result-" + (s[a].value.indexOf(" ") > -1 ? s[a].value.split(" ")[0].toLowerCase() : s[a].value.toLowerCase()),
                                        l = '<div class="container search-results ' + r + '"><div class="grid"><a href="' + s[a].url + '"><div class="w-50 result-properties"><span class="name">' + s[a].label + '</span><hr><span class="group">' + s[a].url + '</span><hr><span></span></div><div class="w-50 bl-img"><div class="result-img product-icons"></div></div></a></div></div>';
                                    e.append(l)
                                }
                                t[i.term] = s
                            }
                            n(s)
                        },
                        error: function (t) {
                            console.log(t)
                        }
                    })
                },
                minLength: 2,
                select: function (t, e) {
                    window.location = e.item.url
                }
            }).data("ui-autocomplete")._renderItem = function (t, e) {
                return $("<li>").append('<a><img src="' + e.thumb + '" class="autothumb" />' + e.label + "</a>").appendTo(t)
            }
        })
    }).call(e, i(2))
}]);