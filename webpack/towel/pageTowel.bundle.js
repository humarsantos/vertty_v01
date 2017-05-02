(function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        e[n].call(s.exports, s, s.exports, i);
        s.loaded = true;
        return s.exports
    }
    i.m = e;
    i.c = t;
    i.p = "";
    return i(0)
})([function (e, t, i) {
    (function ($) {
        i(29);
        i(30);
        i(31);
        i(32);
        i(33);
        i(34);
        i(35);
        i(36);
        i(8);
        $(document).ready(function () {
            if ($(".fancybox")[0] !== undefined) {
                $(".fancybox").fancybox({
                    height: 600,
                    maxHeight: 600,
                    fitToView: true
                })
            }
        })
    }).call(t, i(2))
}, , function (e, t, i) {
    var n, s;
    (function (t, i) {
        "use strict";
        if (typeof e === "object" && typeof e.exports === "object") {
            e.exports = t.document ? i(t, true) : function (e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return i(e)
            }
        } else {
            i(t)
        }
    })(typeof window !== "undefined" ? window : this, function (i, o) {
        "use strict";
        var a = [];
        var r = i.document;
        var l = Object.getPrototypeOf;
        var h = a.slice;
        var u = a.concat;
        var c = a.push;
        var d = a.indexOf;
        var f = {};
        var p = f.toString;
        var m = f.hasOwnProperty;
        var g = m.toString;
        var v = g.call(Object);
        var _ = {};

        function b(e, t) {
            t = t || r;
            var i = t.createElement("script");
            i.text = e;
            t.head.appendChild(i).parentNode.removeChild(i)
        }
        var y = "3.1.1",
            w = function (e, t) {
                return new w.fn.init(e, t)
            },
            x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            C = /^-ms-/,
            k = /-([a-z])/g,
            T = function (e, t) {
                return t.toUpperCase()
            };
        w.fn = w.prototype = {
            jquery: y,
            constructor: w,
            length: 0,
            toArray: function () {
                return h.call(this)
            },
            get: function (e) {
                if (e == null) {
                    return h.call(this)
                }
                return e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = w.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function (e) {
                return w.each(this, e)
            },
            map: function (e) {
                return this.pushStack(w.map(this, function (t, i) {
                    return e.call(t, i, t)
                }))
            },
            slice: function () {
                return this.pushStack(h.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: a.sort,
            splice: a.splice
        };
        w.extend = w.fn.extend = function () {
            var e, t, i, n, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                h = false;
            if (typeof a === "boolean") {
                h = a;
                a = arguments[r] || {};
                r++
            }
            if (typeof a !== "object" && !w.isFunction(a)) {
                a = {}
            }
            if (r === l) {
                a = this;
                r--
            }
            for (; r < l; r++) {
                if ((e = arguments[r]) != null) {
                    for (t in e) {
                        i = a[t];
                        n = e[t];
                        if (a === n) {
                            continue
                        }
                        if (h && n && (w.isPlainObject(n) || (s = w.isArray(n)))) {
                            if (s) {
                                s = false;
                                o = i && w.isArray(i) ? i : []
                            } else {
                                o = i && w.isPlainObject(i) ? i : {}
                            }
                            a[t] = w.extend(h, o, n)
                        } else if (n !== undefined) {
                            a[t] = n
                        }
                    }
                }
            }
            return a
        };
        w.extend({
            expando: "jQuery" + (y + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return w.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return e != null && e === e.window
            },
            isNumeric: function (e) {
                var t = w.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function (e) {
                var t, i;
                if (!e || p.call(e) !== "[object Object]") {
                    return false
                }
                t = l(e);
                if (!t) {
                    return true
                }
                i = m.call(t, "constructor") && t.constructor;
                return typeof i === "function" && g.call(i) === v
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            },
            type: function (e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? f[p.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                b(e)
            },
            camelCase: function (e) {
                return e.replace(C, "ms-").replace(k, T)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var i, n = 0;
                if (D(e)) {
                    i = e.length;
                    for (; n < i; n++) {
                        if (t.call(e[n], n, e[n]) === false) {
                            break
                        }
                    }
                } else {
                    for (n in e) {
                        if (t.call(e[n], n, e[n]) === false) {
                            break
                        }
                    }
                }
                return e
            },
            trim: function (e) {
                return e == null ? "" : (e + "").replace(x, "")
            },
            makeArray: function (e, t) {
                var i = t || [];
                if (e != null) {
                    if (D(Object(e))) {
                        w.merge(i, typeof e === "string" ? [e] : e)
                    } else {
                        c.call(i, e)
                    }
                }
                return i
            },
            inArray: function (e, t, i) {
                return t == null ? -1 : d.call(t, e, i)
            },
            merge: function (e, t) {
                var i = +t.length,
                    n = 0,
                    s = e.length;
                for (; n < i; n++) {
                    e[s++] = t[n]
                }
                e.length = s;
                return e
            },
            grep: function (e, t, i) {
                var n, s = [],
                    o = 0,
                    a = e.length,
                    r = !i;
                for (; o < a; o++) {
                    n = !t(e[o], o);
                    if (n !== r) {
                        s.push(e[o])
                    }
                }
                return s
            },
            map: function (e, t, i) {
                var n, s, o = 0,
                    a = [];
                if (D(e)) {
                    n = e.length;
                    for (; o < n; o++) {
                        s = t(e[o], o, i);
                        if (s != null) {
                            a.push(s)
                        }
                    }
                } else {
                    for (o in e) {
                        s = t(e[o], o, i);
                        if (s != null) {
                            a.push(s)
                        }
                    }
                }
                return u.apply([], a)
            },
            guid: 1,
            proxy: function (e, t) {
                var i, n, s;
                if (typeof t === "string") {
                    i = e[t];
                    t = e;
                    e = i
                }
                if (!w.isFunction(e)) {
                    return undefined
                }
                n = h.call(arguments, 2);
                s = function () {
                    return e.apply(t || this, n.concat(h.call(arguments)))
                };
                s.guid = e.guid = e.guid || w.guid++;
                return s
            },
            now: Date.now,
            support: _
        });
        if (typeof Symbol === "function") {
            w.fn[Symbol.iterator] = a[Symbol.iterator]
        }
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        });

        function D(e) {
            var t = !!e && "length" in e && e.length,
                i = w.type(e);
            if (i === "function" || w.isWindow(e)) {
                return false
            }
            return i === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var I = function (e) {
            var t, i, n, s, o, a, r, l, h, u, c, d, f, p, m, g, v, _, b, y = "sizzle" + 1 * new Date,
                w = e.document,
                x = 0,
                C = 0,
                k = re(),
                T = re(),
                D = re(),
                I = function (e, t) {
                    if (e === t) {
                        c = true
                    }
                    return 0
                },
                S = {}.hasOwnProperty,
                N = [],
                P = N.pop,
                E = N.push,
                M = N.push,
                A = N.slice,
                O = function (e, t) {
                    var i = 0,
                        n = e.length;
                    for (; i < n; i++) {
                        if (e[i] === t) {
                            return i
                        }
                    }
                    return -1
                },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                z = "\\[" + L + "*(" + W + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + L + "*\\]",
                F = ":(" + W + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|" + ".*" + ")\\)|)",
                B = new RegExp(L + "+", "g"),
                R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                j = new RegExp("^" + L + "*," + L + "*"),
                q = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                Y = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                V = new RegExp(F),
                U = new RegExp("^" + W + "$"),
                K = {
                    ID: new RegExp("^#(" + W + ")"),
                    CLASS: new RegExp("^\\.(" + W + ")"),
                    TAG: new RegExp("^(" + W + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                ee = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                te = function (e, t, i) {
                    var n = "0x" + t - 65536;
                    return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function (e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                },
                se = function () {
                    d()
                },
                oe = be(function (e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                M.apply(N = A.call(w.childNodes), w.childNodes);
                N[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: N.length ? function (e, t) {
                        E.apply(e, A.call(t))
                    } : function (e, t) {
                        var i = e.length,
                            n = 0;
                        while (e[i++] = t[n++]) {}
                        e.length = i - 1
                    }
                }
            }

            function ae(e, t, n, s) {
                var o, r, h, u, c, p, v, _ = t && t.ownerDocument,
                    x = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || x !== 1 && x !== 9 && x !== 11) {
                    return n
                }
                if (!s) {
                    if ((t ? t.ownerDocument || t : w) !== f) {
                        d(t)
                    }
                    t = t || f;
                    if (m) {
                        if (x !== 11 && (c = J.exec(e))) {
                            if (o = c[1]) {
                                if (x === 9) {
                                    if (h = t.getElementById(o)) {
                                        if (h.id === o) {
                                            n.push(h);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (_ && (h = _.getElementById(o)) && b(t, h) && h.id === o) {
                                        n.push(h);
                                        return n
                                    }
                                }
                            } else if (c[2]) {
                                M.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((o = c[3]) && i.getElementsByClassName && t.getElementsByClassName) {
                                M.apply(n, t.getElementsByClassName(o));
                                return n
                            }
                        }
                        if (i.qsa && !D[e + " "] && (!g || !g.test(e))) {
                            if (x !== 1) {
                                _ = t;
                                v = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (u = t.getAttribute("id")) {
                                    u = u.replace(ie, ne)
                                } else {
                                    t.setAttribute("id", u = y)
                                }
                                p = a(e);
                                r = p.length;
                                while (r--) {
                                    p[r] = "#" + u + " " + _e(p[r])
                                }
                                v = p.join(",");
                                _ = Z.test(e) && ge(t.parentNode) || t
                            }
                            if (v) {
                                try {
                                    M.apply(n, _.querySelectorAll(v));
                                    return n
                                } catch (e) {} finally {
                                    if (u === y) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return l(e.replace(R, "$1"), t, n, s)
            }

            function re() {
                var e = [];

                function t(i, s) {
                    if (e.push(i + " ") > n.cacheLength) {
                        delete t[e.shift()]
                    }
                    return t[i + " "] = s
                }
                return t
            }

            function le(e) {
                e[y] = true;
                return e
            }

            function he(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function ue(e, t) {
                var i = e.split("|"),
                    s = i.length;
                while (s--) {
                    n.attrHandle[i[s]] = t
                }
            }

            function ce(e, t) {
                var i = t && e,
                    n = i && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (n) {
                    return n
                }
                if (i) {
                    while (i = i.nextSibling) {
                        if (i === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function de(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === e
                }
            }

            function fe(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    if ("form" in t) {
                        if (t.parentNode && t.disabled === false) {
                            if ("label" in t) {
                                if ("label" in t.parentNode) {
                                    return t.parentNode.disabled === e
                                } else {
                                    return t.disabled === e
                                }
                            }
                            return t.isDisabled === e || t.isDisabled !== !e && oe(t) === e
                        }
                        return t.disabled === e
                    } else if ("label" in t) {
                        return t.disabled === e
                    }
                    return false
                }
            }

            function me(e) {
                return le(function (t) {
                    t = +t;
                    return le(function (i, n) {
                        var s, o = e([], i.length, t),
                            a = o.length;
                        while (a--) {
                            if (i[s = o[a]]) {
                                i[s] = !(n[s] = i[s])
                            }
                        }
                    })
                })
            }

            function ge(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            i = ae.support = {};
            o = ae.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            d = ae.setDocument = function (e) {
                var t, s, a = e ? e.ownerDocument || e : w;
                if (a === f || a.nodeType !== 9 || !a.documentElement) {
                    return f
                }
                f = a;
                p = f.documentElement;
                m = !o(f);
                if (w !== f && (s = f.defaultView) && s.top !== s) {
                    if (s.addEventListener) {
                        s.addEventListener("unload", se, false)
                    } else if (s.attachEvent) {
                        s.attachEvent("onunload", se)
                    }
                }
                i.attributes = he(function (e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                i.getElementsByTagName = he(function (e) {
                    e.appendChild(f.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                i.getElementsByClassName = Q.test(f.getElementsByClassName);
                i.getById = he(function (e) {
                    p.appendChild(e).id = y;
                    return !f.getElementsByName || !f.getElementsByName(y).length
                });
                if (i.getById) {
                    n.filter["ID"] = function (e) {
                        var t = e.replace(ee, te);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    n.find["ID"] = function (e, t) {
                        if (typeof t.getElementById !== "undefined" && m) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }
                } else {
                    n.filter["ID"] = function (e) {
                        var t = e.replace(ee, te);
                        return function (e) {
                            var i = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    };
                    n.find["ID"] = function (e, t) {
                        if (typeof t.getElementById !== "undefined" && m) {
                            var i, n, s, o = t.getElementById(e);
                            if (o) {
                                i = o.getAttributeNode("id");
                                if (i && i.value === e) {
                                    return [o]
                                }
                                s = t.getElementsByName(e);
                                n = 0;
                                while (o = s[n++]) {
                                    i = o.getAttributeNode("id");
                                    if (i && i.value === e) {
                                        return [o]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                n.find["TAG"] = i.getElementsByTagName ? function (e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (i.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function (e, t) {
                    var i, n = [],
                        s = 0,
                        o = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (i = o[s++]) {
                            if (i.nodeType === 1) {
                                n.push(i)
                            }
                        }
                        return n
                    }
                    return o
                };
                n.find["CLASS"] = i.getElementsByClassName && function (e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && m) {
                        return t.getElementsByClassName(e)
                    }
                };
                v = [];
                g = [];
                if (i.qsa = Q.test(f.querySelectorAll)) {
                    he(function (e) {
                        p.appendChild(e).innerHTML = "<a id='" + y + "'></a>" + "<select id='" + y + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            g.push("[*^$]=" + L + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            g.push("\\[" + L + "*(?:value|" + H + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + y + "-]").length) {
                            g.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            g.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + y + "+*").length) {
                            g.push(".#.+[+~]")
                        }
                    });
                    he(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            g.push("name" + L + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        p.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            g.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        g.push(",.*:")
                    })
                }
                if (i.matchesSelector = Q.test(_ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) {
                    he(function (e) {
                        i.disconnectedMatch = _.call(e, "*");
                        _.call(e, "[s!='']:x");
                        v.push("!=", F)
                    })
                }
                g = g.length && new RegExp(g.join("|"));
                v = v.length && new RegExp(v.join("|"));
                t = Q.test(p.compareDocumentPosition);
                b = t || Q.test(p.contains) ? function (e, t) {
                    var i = e.nodeType === 9 ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !!(n && n.nodeType === 1 && (i.contains ? i.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16))
                } : function (e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                I = t ? function (e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !i.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === f || e.ownerDocument === w && b(w, e)) {
                            return -1
                        }
                        if (t === f || t.ownerDocument === w && b(w, t)) {
                            return 1
                        }
                        return u ? O(u, e) - O(u, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function (e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var i, n = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        r = [t];
                    if (!s || !o) {
                        return e === f ? -1 : t === f ? 1 : s ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0
                    } else if (s === o) {
                        return ce(e, t)
                    }
                    i = e;
                    while (i = i.parentNode) {
                        a.unshift(i)
                    }
                    i = t;
                    while (i = i.parentNode) {
                        r.unshift(i)
                    }
                    while (a[n] === r[n]) {
                        n++
                    }
                    return n ? ce(a[n], r[n]) : a[n] === w ? -1 : r[n] === w ? 1 : 0
                };
                return f
            };
            ae.matches = function (e, t) {
                return ae(e, null, null, t)
            };
            ae.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== f) {
                    d(e)
                }
                t = t.replace(Y, "='$1']");
                if (i.matchesSelector && m && !D[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) {
                    try {
                        var n = _.call(e, t);
                        if (n || i.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ae(t, f, null, [e]).length > 0
            };
            ae.contains = function (e, t) {
                if ((e.ownerDocument || e) !== f) {
                    d(e)
                }
                return b(e, t)
            };
            ae.attr = function (e, t) {
                if ((e.ownerDocument || e) !== f) {
                    d(e)
                }
                var s = n.attrHandle[t.toLowerCase()],
                    o = s && S.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : undefined;
                return o !== undefined ? o : i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            };
            ae.escape = function (e) {
                return (e + "").replace(ie, ne)
            };
            ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ae.uniqueSort = function (e) {
                var t, n = [],
                    s = 0,
                    o = 0;
                c = !i.detectDuplicates;
                u = !i.sortStable && e.slice(0);
                e.sort(I);
                if (c) {
                    while (t = e[o++]) {
                        if (t === e[o]) {
                            s = n.push(o)
                        }
                    }
                    while (s--) {
                        e.splice(n[s], 1)
                    }
                }
                u = null;
                return e
            };
            s = ae.getText = function (e) {
                var t, i = "",
                    n = 0,
                    o = e.nodeType;
                if (!o) {
                    while (t = e[n++]) {
                        i += s(t)
                    }
                } else if (o === 1 || o === 9 || o === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            i += s(e)
                        }
                    }
                } else if (o === 3 || o === 4) {
                    return e.nodeValue
                }
                return i
            };
            n = ae.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        e[1] = e[1].replace(ee, te);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ae.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            ae.error(e[0])
                        }
                        return e
                    },
                    PSEUDO: function (e) {
                        var t, i = !e[6] && e[2];
                        if (K["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (i && V.test(i) && (t = a(i, true)) && (t = i.indexOf(")", i.length - t) - i.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = i.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return e === "*" ? function () {
                            return true
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && k(e, function (e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, i) {
                        return function (n) {
                            var s = ae.attr(n, e);
                            if (s == null) {
                                return t === "!="
                            }
                            if (!t) {
                                return true
                            }
                            s += "";
                            return t === "=" ? s === i : t === "!=" ? s !== i : t === "^=" ? i && s.indexOf(i) === 0 : t === "*=" ? i && s.indexOf(i) > -1 : t === "$=" ? i && s.slice(-i.length) === i : t === "~=" ? (" " + s.replace(B, " ") + " ").indexOf(i) > -1 : t === "|=" ? s === i || s.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function (e, t, i, n, s) {
                        var o = e.slice(0, 3) !== "nth",
                            a = e.slice(-4) !== "last",
                            r = t === "of-type";
                        return n === 1 && s === 0 ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var h, u, c, d, f, p, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = r && t.nodeName.toLowerCase(),
                                _ = !l && !r,
                                b = false;
                            if (g) {
                                if (o) {
                                    while (m) {
                                        d = t;
                                        while (d = d[m]) {
                                            if (r ? d.nodeName.toLowerCase() === v : d.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        p = m = e === "only" && !p && "nextSibling"
                                    }
                                    return true
                                }
                                p = [a ? g.firstChild : g.lastChild];
                                if (a && _) {
                                    d = g;
                                    c = d[y] || (d[y] = {});
                                    u = c[d.uniqueID] || (c[d.uniqueID] = {});
                                    h = u[e] || [];
                                    f = h[0] === x && h[1];
                                    b = f && h[2];
                                    d = f && g.childNodes[f];
                                    while (d = ++f && d && d[m] || (b = f = 0) || p.pop()) {
                                        if (d.nodeType === 1 && ++b && d === t) {
                                            u[e] = [x, f, b];
                                            break
                                        }
                                    }
                                } else {
                                    if (_) {
                                        d = t;
                                        c = d[y] || (d[y] = {});
                                        u = c[d.uniqueID] || (c[d.uniqueID] = {});
                                        h = u[e] || [];
                                        f = h[0] === x && h[1];
                                        b = f
                                    }
                                    if (b === false) {
                                        while (d = ++f && d && d[m] || (b = f = 0) || p.pop()) {
                                            if ((r ? d.nodeName.toLowerCase() === v : d.nodeType === 1) && ++b) {
                                                if (_) {
                                                    c = d[y] || (d[y] = {});
                                                    u = c[d.uniqueID] || (c[d.uniqueID] = {});
                                                    u[e] = [x, b]
                                                }
                                                if (d === t) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                b -= s;
                                return b === n || b % n === 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (s[y]) {
                            return s(t)
                        }
                        if (s.length > 1) {
                            i = [e, e, "", t];
                            return n.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, i) {
                                var n, o = s(e, t),
                                    a = o.length;
                                while (a--) {
                                    n = O(e, o[a]);
                                    e[n] = !(i[n] = o[a])
                                }
                            }) : function (e) {
                                return s(e, 0, i)
                            }
                        }
                        return s
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var t = [],
                            i = [],
                            n = r(e.replace(R, "$1"));
                        return n[y] ? le(function (e, t, i, s) {
                            var o, a = n(e, null, s, []),
                                r = e.length;
                            while (r--) {
                                if (o = a[r]) {
                                    e[r] = !(t[r] = o)
                                }
                            }
                        }) : function (e, s, o) {
                            t[0] = e;
                            n(t, null, o, i);
                            t[0] = null;
                            return !i.pop()
                        }
                    }),
                    has: le(function (e) {
                        return function (t) {
                            return ae(e, t).length > 0
                        }
                    }),
                    contains: le(function (e) {
                        e = e.replace(ee, te);
                        return function (t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    lang: le(function (e) {
                        if (!U.test(e || "")) {
                            ae.error("unsupported lang: " + e)
                        }
                        e = e.replace(ee, te).toLowerCase();
                        return function (t) {
                            var i;
                            do {
                                if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                    i = i.toLowerCase();
                                    return i === e || i.indexOf(e + "-") === 0
                                }
                            } while ((t = t.parentNode) && t.nodeType === 1);
                            return false
                        }
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === p
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(false),
                    disabled: pe(true),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function (e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function (e) {
                        return !n.pseudos["empty"](e)
                    },
                    header: function (e) {
                        return G.test(e.nodeName)
                    },
                    input: function (e) {
                        return X.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function (e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: me(function () {
                        return [0]
                    }),
                    last: me(function (e, t) {
                        return [t - 1]
                    }),
                    eq: me(function (e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: me(function (e, t) {
                        var i = 0;
                        for (; i < t; i += 2) {
                            e.push(i)
                        }
                        return e
                    }),
                    odd: me(function (e, t) {
                        var i = 1;
                        for (; i < t; i += 2) {
                            e.push(i)
                        }
                        return e
                    }),
                    lt: me(function (e, t, i) {
                        var n = i < 0 ? i + t : i;
                        for (; --n >= 0;) {
                            e.push(n)
                        }
                        return e
                    }),
                    gt: me(function (e, t, i) {
                        var n = i < 0 ? i + t : i;
                        for (; ++n < t;) {
                            e.push(n)
                        }
                        return e
                    })
                }
            };
            n.pseudos["nth"] = n.pseudos["eq"];
            for (t in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                n.pseudos[t] = de(t)
            }
            for (t in {
                    submit: true,
                    reset: true
                }) {
                n.pseudos[t] = fe(t)
            }

            function ve() {}
            ve.prototype = n.filters = n.pseudos;
            n.setFilters = new ve;
            a = ae.tokenize = function (e, t) {
                var i, s, o, a, r, l, h, u = T[e + " "];
                if (u) {
                    return t ? 0 : u.slice(0)
                }
                r = e;
                l = [];
                h = n.preFilter;
                while (r) {
                    if (!i || (s = j.exec(r))) {
                        if (s) {
                            r = r.slice(s[0].length) || r
                        }
                        l.push(o = [])
                    }
                    i = false;
                    if (s = q.exec(r)) {
                        i = s.shift();
                        o.push({
                            value: i,
                            type: s[0].replace(R, " ")
                        });
                        r = r.slice(i.length)
                    }
                    for (a in n.filter) {
                        if ((s = K[a].exec(r)) && (!h[a] || (s = h[a](s)))) {
                            i = s.shift();
                            o.push({
                                value: i,
                                type: a,
                                matches: s
                            });
                            r = r.slice(i.length)
                        }
                    }
                    if (!i) {
                        break
                    }
                }
                return t ? r.length : r ? ae.error(e) : T(e, l).slice(0)
            };

            function _e(e) {
                var t = 0,
                    i = e.length,
                    n = "";
                for (; t < i; t++) {
                    n += e[t].value
                }
                return n
            }

            function be(e, t, i) {
                var n = t.dir,
                    s = t.next,
                    o = s || n,
                    a = i && o === "parentNode",
                    r = C++;
                return t.first ? function (t, i, s) {
                    while (t = t[n]) {
                        if (t.nodeType === 1 || a) {
                            return e(t, i, s)
                        }
                    }
                    return false
                } : function (t, i, l) {
                    var h, u, c, d = [x, r];
                    if (l) {
                        while (t = t[n]) {
                            if (t.nodeType === 1 || a) {
                                if (e(t, i, l)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (t = t[n]) {
                            if (t.nodeType === 1 || a) {
                                c = t[y] || (t[y] = {});
                                u = c[t.uniqueID] || (c[t.uniqueID] = {});
                                if (s && s === t.nodeName.toLowerCase()) {
                                    t = t[n] || t
                                } else if ((h = u[o]) && h[0] === x && h[1] === r) {
                                    return d[2] = h[2]
                                } else {
                                    u[o] = d;
                                    if (d[2] = e(t, i, l)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function ye(e) {
                return e.length > 1 ? function (t, i, n) {
                    var s = e.length;
                    while (s--) {
                        if (!e[s](t, i, n)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function we(e, t, i) {
                var n = 0,
                    s = t.length;
                for (; n < s; n++) {
                    ae(e, t[n], i)
                }
                return i
            }

            function xe(e, t, i, n, s) {
                var o, a = [],
                    r = 0,
                    l = e.length,
                    h = t != null;
                for (; r < l; r++) {
                    if (o = e[r]) {
                        if (!i || i(o, n, s)) {
                            a.push(o);
                            if (h) {
                                t.push(r)
                            }
                        }
                    }
                }
                return a
            }

            function Ce(e, t, i, n, s, o) {
                if (n && !n[y]) {
                    n = Ce(n)
                }
                if (s && !s[y]) {
                    s = Ce(s, o)
                }
                return le(function (o, a, r, l) {
                    var h, u, c, d = [],
                        f = [],
                        p = a.length,
                        m = o || we(t || "*", r.nodeType ? [r] : r, []),
                        g = e && (o || !t) ? xe(m, d, e, r, l) : m,
                        v = i ? s || (o ? e : p || n) ? [] : a : g;
                    if (i) {
                        i(g, v, r, l)
                    }
                    if (n) {
                        h = xe(v, f);
                        n(h, [], r, l);
                        u = h.length;
                        while (u--) {
                            if (c = h[u]) {
                                v[f[u]] = !(g[f[u]] = c)
                            }
                        }
                    }
                    if (o) {
                        if (s || e) {
                            if (s) {
                                h = [];
                                u = v.length;
                                while (u--) {
                                    if (c = v[u]) {
                                        h.push(g[u] = c)
                                    }
                                }
                                s(null, v = [], h, l)
                            }
                            u = v.length;
                            while (u--) {
                                if ((c = v[u]) && (h = s ? O(o, c) : d[u]) > -1) {
                                    o[h] = !(a[h] = c)
                                }
                            }
                        }
                    } else {
                        v = xe(v === a ? v.splice(p, v.length) : v);
                        if (s) {
                            s(null, a, v, l)
                        } else {
                            M.apply(a, v)
                        }
                    }
                })
            }

            function ke(e) {
                var t, i, s, o = e.length,
                    a = n.relative[e[0].type],
                    r = a || n.relative[" "],
                    l = a ? 1 : 0,
                    u = be(function (e) {
                        return e === t
                    }, r, true),
                    c = be(function (e) {
                        return O(t, e) > -1
                    }, r, true),
                    d = [function (e, i, n) {
                        var s = !a && (n || i !== h) || ((t = i).nodeType ? u(e, i, n) : c(e, i, n));
                        t = null;
                        return s
                    }];
                for (; l < o; l++) {
                    if (i = n.relative[e[l].type]) {
                        d = [be(ye(d), i)]
                    } else {
                        i = n.filter[e[l].type].apply(null, e[l].matches);
                        if (i[y]) {
                            s = ++l;
                            for (; s < o; s++) {
                                if (n.relative[e[s].type]) {
                                    break
                                }
                            }
                            return Ce(l > 1 && ye(d), l > 1 && _e(e.slice(0, l - 1).concat({
                                value: e[l - 2].type === " " ? "*" : ""
                            })).replace(R, "$1"), i, l < s && ke(e.slice(l, s)), s < o && ke(e = e.slice(s)), s < o && _e(e))
                        }
                        d.push(i)
                    }
                }
                return ye(d)
            }

            function Te(e, t) {
                var i = t.length > 0,
                    s = e.length > 0,
                    o = function (o, a, r, l, u) {
                        var c, p, g, v = 0,
                            _ = "0",
                            b = o && [],
                            y = [],
                            w = h,
                            C = o || s && n.find["TAG"]("*", u),
                            k = x += w == null ? 1 : Math.random() || .1,
                            T = C.length;
                        if (u) {
                            h = a === f || a || u
                        }
                        for (; _ !== T && (c = C[_]) != null; _++) {
                            if (s && c) {
                                p = 0;
                                if (!a && c.ownerDocument !== f) {
                                    d(c);
                                    r = !m
                                }
                                while (g = e[p++]) {
                                    if (g(c, a || f, r)) {
                                        l.push(c);
                                        break
                                    }
                                }
                                if (u) {
                                    x = k
                                }
                            }
                            if (i) {
                                if (c = !g && c) {
                                    v--
                                }
                                if (o) {
                                    b.push(c)
                                }
                            }
                        }
                        v += _;
                        if (i && _ !== v) {
                            p = 0;
                            while (g = t[p++]) {
                                g(b, y, a, r)
                            }
                            if (o) {
                                if (v > 0) {
                                    while (_--) {
                                        if (!(b[_] || y[_])) {
                                            y[_] = P.call(l)
                                        }
                                    }
                                }
                                y = xe(y)
                            }
                            M.apply(l, y);
                            if (u && !o && y.length > 0 && v + t.length > 1) {
                                ae.uniqueSort(l)
                            }
                        }
                        if (u) {
                            x = k;
                            h = w
                        }
                        return b
                    };
                return i ? le(o) : o
            }
            r = ae.compile = function (e, t) {
                var i, n = [],
                    s = [],
                    o = D[e + " "];
                if (!o) {
                    if (!t) {
                        t = a(e)
                    }
                    i = t.length;
                    while (i--) {
                        o = ke(t[i]);
                        if (o[y]) {
                            n.push(o)
                        } else {
                            s.push(o)
                        }
                    }
                    o = D(e, Te(s, n));
                    o.selector = e
                }
                return o
            };
            l = ae.select = function (e, t, i, s) {
                var o, l, h, u, c, d = typeof e === "function" && e,
                    f = !s && a(e = d.selector || e);
                i = i || [];
                if (f.length === 1) {
                    l = f[0] = f[0].slice(0);
                    if (l.length > 2 && (h = l[0]).type === "ID" && t.nodeType === 9 && m && n.relative[l[1].type]) {
                        t = (n.find["ID"](h.matches[0].replace(ee, te), t) || [])[0];
                        if (!t) {
                            return i
                        } else if (d) {
                            t = t.parentNode
                        }
                        e = e.slice(l.shift().value.length)
                    }
                    o = K["needsContext"].test(e) ? 0 : l.length;
                    while (o--) {
                        h = l[o];
                        if (n.relative[u = h.type]) {
                            break
                        }
                        if (c = n.find[u]) {
                            if (s = c(h.matches[0].replace(ee, te), Z.test(l[0].type) && ge(t.parentNode) || t)) {
                                l.splice(o, 1);
                                e = s.length && _e(l);
                                if (!e) {
                                    M.apply(i, s);
                                    return i
                                }
                                break
                            }
                        }
                    }
                }(d || r(e, f))(s, t, !m, i, !t || Z.test(e) && ge(t.parentNode) || t);
                return i
            };
            i.sortStable = y.split("").sort(I).join("") === y;
            i.detectDuplicates = !!c;
            d();
            i.sortDetached = he(function (e) {
                return e.compareDocumentPosition(f.createElement("fieldset")) & 1
            });
            if (!he(function (e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                ue("type|href|height|width", function (e, t, i) {
                    if (!i) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!i.attributes || !he(function (e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                ue("value", function (e, t, i) {
                    if (!i && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!he(function (e) {
                    return e.getAttribute("disabled") == null
                })) {
                ue(H, function (e, t, i) {
                    var n;
                    if (!i) {
                        return e[t] === true ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                    }
                })
            }
            return ae
        }(i);
        w.find = I;
        w.expr = I.selectors;
        w.expr[":"] = w.expr.pseudos;
        w.uniqueSort = w.unique = I.uniqueSort;
        w.text = I.getText;
        w.isXMLDoc = I.isXML;
        w.contains = I.contains;
        w.escapeSelector = I.escape;
        var S = function (e, t, i) {
            var n = [],
                s = i !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (s && w(e).is(i)) {
                        break
                    }
                    n.push(e)
                }
            }
            return n
        };
        var N = function (e, t) {
            var i = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    i.push(e)
                }
            }
            return i
        };
        var P = w.expr.match.needsContext;
        var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var M = /^.[^:#\[\.,]*$/;

        function A(e, t, i) {
            if (w.isFunction(t)) {
                return w.grep(e, function (e, n) {
                    return !!t.call(e, n, e) !== i
                })
            }
            if (t.nodeType) {
                return w.grep(e, function (e) {
                    return e === t !== i
                })
            }
            if (typeof t !== "string") {
                return w.grep(e, function (e) {
                    return d.call(t, e) > -1 !== i
                })
            }
            if (M.test(t)) {
                return w.filter(t, e, i)
            }
            t = w.filter(t, e);
            return w.grep(e, function (e) {
                return d.call(t, e) > -1 !== i && e.nodeType === 1
            })
        }
        w.filter = function (e, t, i) {
            var n = t[0];
            if (i) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && n.nodeType === 1) {
                return w.find.matchesSelector(n, e) ? [n] : []
            }
            return w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        };
        w.fn.extend({
            find: function (e) {
                var t, i, n = this.length,
                    s = this;
                if (typeof e !== "string") {
                    return this.pushStack(w(e).filter(function () {
                        for (t = 0; t < n; t++) {
                            if (w.contains(s[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                i = this.pushStack([]);
                for (t = 0; t < n; t++) {
                    w.find(e, s[t], i)
                }
                return n > 1 ? w.uniqueSort(i) : i
            },
            filter: function (e) {
                return this.pushStack(A(this, e || [], false))
            },
            not: function (e) {
                return this.pushStack(A(this, e || [], true))
            },
            is: function (e) {
                return !!A(this, typeof e === "string" && P.test(e) ? w(e) : e || [], false).length
            }
        });
        var O, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            L = w.fn.init = function (e, t, i) {
                var n, s;
                if (!e) {
                    return this
                }
                i = i || O;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        n = [null, e, null]
                    } else {
                        n = H.exec(e)
                    }
                    if (n && (n[1] || !t)) {
                        if (n[1]) {
                            t = t instanceof w ? t[0] : t;
                            w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : r, true));
                            if (E.test(n[1]) && w.isPlainObject(t)) {
                                for (n in t) {
                                    if (w.isFunction(this[n])) {
                                        this[n](t[n])
                                    } else {
                                        this.attr(n, t[n])
                                    }
                                }
                            }
                            return this
                        } else {
                            s = r.getElementById(n[2]);
                            if (s) {
                                this[0] = s;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || i).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (w.isFunction(e)) {
                    return i.ready !== undefined ? i.ready(e) : e(w)
                }
                return w.makeArray(e, this)
            };
        L.prototype = w.fn;
        O = w(r);
        var W = /^(?:parents|prev(?:Until|All))/,
            z = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        w.fn.extend({
            has: function (e) {
                var t = w(e, this),
                    i = t.length;
                return this.filter(function () {
                    var e = 0;
                    for (; e < i; e++) {
                        if (w.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function (e, t) {
                var i, n = 0,
                    s = this.length,
                    o = [],
                    a = typeof e !== "string" && w(e);
                if (!P.test(e)) {
                    for (; n < s; n++) {
                        for (i = this[n]; i && i !== t; i = i.parentNode) {
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : i.nodeType === 1 && w.find.matchesSelector(i, e))) {
                                o.push(i);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
            },
            index: function (e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return d.call(w(e), this[0])
                }
                return d.call(this, e.jquery ? e[0] : e)
            },
            add: function (e, t) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
            },
            addBack: function (e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function F(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        w.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function (e) {
                return S(e, "parentNode")
            },
            parentsUntil: function (e, t, i) {
                return S(e, "parentNode", i)
            },
            next: function (e) {
                return F(e, "nextSibling")
            },
            prev: function (e) {
                return F(e, "previousSibling")
            },
            nextAll: function (e) {
                return S(e, "nextSibling")
            },
            prevAll: function (e) {
                return S(e, "previousSibling")
            },
            nextUntil: function (e, t, i) {
                return S(e, "nextSibling", i)
            },
            prevUntil: function (e, t, i) {
                return S(e, "previousSibling", i)
            },
            siblings: function (e) {
                return N((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return N(e.firstChild)
            },
            contents: function (e) {
                return e.contentDocument || w.merge([], e.childNodes)
            }
        }, function (e, t) {
            w.fn[e] = function (i, n) {
                var s = w.map(this, t, i);
                if (e.slice(-5) !== "Until") {
                    n = i
                }
                if (n && typeof n === "string") {
                    s = w.filter(n, s)
                }
                if (this.length > 1) {
                    if (!z[e]) {
                        w.uniqueSort(s)
                    }
                    if (W.test(e)) {
                        s.reverse()
                    }
                }
                return this.pushStack(s)
            }
        });
        var B = /[^\x20\t\r\n\f]+/g;

        function R(e) {
            var t = {};
            w.each(e.match(B) || [], function (e, i) {
                t[i] = true
            });
            return t
        }
        w.Callbacks = function (e) {
            e = typeof e === "string" ? R(e) : w.extend({}, e);
            var t, i, n, s, o = [],
                a = [],
                r = -1,
                l = function () {
                    s = e.once;
                    n = t = true;
                    for (; a.length; r = -1) {
                        i = a.shift();
                        while (++r < o.length) {
                            if (o[r].apply(i[0], i[1]) === false && e.stopOnFalse) {
                                r = o.length;
                                i = false
                            }
                        }
                    }
                    if (!e.memory) {
                        i = false
                    }
                    t = false;
                    if (s) {
                        if (i) {
                            o = []
                        } else {
                            o = ""
                        }
                    }
                },
                h = {
                    add: function () {
                        if (o) {
                            if (i && !t) {
                                r = o.length - 1;
                                a.push(i)
                            }(function t(i) {
                                w.each(i, function (i, n) {
                                    if (w.isFunction(n)) {
                                        if (!e.unique || !h.has(n)) {
                                            o.push(n)
                                        }
                                    } else if (n && n.length && w.type(n) !== "string") {
                                        t(n)
                                    }
                                })
                            })(arguments);
                            if (i && !t) {
                                l()
                            }
                        }
                        return this
                    },
                    remove: function () {
                        w.each(arguments, function (e, t) {
                            var i;
                            while ((i = w.inArray(t, o, i)) > -1) {
                                o.splice(i, 1);
                                if (i <= r) {
                                    r--
                                }
                            }
                        });
                        return this
                    },
                    has: function (e) {
                        return e ? w.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function () {
                        if (o) {
                            o = []
                        }
                        return this
                    },
                    disable: function () {
                        s = a = [];
                        o = i = "";
                        return this
                    },
                    disabled: function () {
                        return !o
                    },
                    lock: function () {
                        s = a = [];
                        if (!i && !t) {
                            o = i = ""
                        }
                        return this
                    },
                    locked: function () {
                        return !!s
                    },
                    fireWith: function (e, i) {
                        if (!s) {
                            i = i || [];
                            i = [e, i.slice ? i.slice() : i];
                            a.push(i);
                            if (!t) {
                                l()
                            }
                        }
                        return this
                    },
                    fire: function () {
                        h.fireWith(this, arguments);
                        return this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return h
        };

        function j(e) {
            return e
        }

        function q(e) {
            throw e
        }

        function Y(e, t, i) {
            var n;
            try {
                if (e && w.isFunction(n = e.promise)) {
                    n.call(e).done(t).fail(i)
                } else if (e && w.isFunction(n = e.then)) {
                    n.call(e, t, i)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                i.call(undefined, e)
            }
        }
        w.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending",
                    s = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            o.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function (e) {
                            return s.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return w.Deferred(function (i) {
                                w.each(t, function (t, n) {
                                    var s = w.isFunction(e[n[4]]) && e[n[4]];
                                    o[n[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        if (e && w.isFunction(e.promise)) {
                                            e.promise().progress(i.notify).done(i.resolve).fail(i.reject)
                                        } else {
                                            i[n[0] + "With"](this, s ? [e] : arguments)
                                        }
                                    })
                                });
                                e = null
                            }).promise()
                        },
                        then: function (e, n, s) {
                            var o = 0;

                            function a(e, t, n, s) {
                                return function () {
                                    var r = this,
                                        l = arguments,
                                        h = function () {
                                            var i, h;
                                            if (e < o) {
                                                return
                                            }
                                            i = n.apply(r, l);
                                            if (i === t.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            h = i && (typeof i === "object" || typeof i === "function") && i.then;
                                            if (w.isFunction(h)) {
                                                if (s) {
                                                    h.call(i, a(o, t, j, s), a(o, t, q, s));
                                                } else {
                                                    o++;
                                                    h.call(i, a(o, t, j, s), a(o, t, q, s), a(o, t, j, t.notifyWith))
                                                }
                                            } else {
                                                if (n !== j) {
                                                    r = undefined;
                                                    l = [i]
                                                }(s || t.resolveWith)(r, l)
                                            }
                                        },
                                        u = s ? h : function () {
                                            try {
                                                h()
                                            } catch (i) {
                                                if (w.Deferred.exceptionHook) {
                                                    w.Deferred.exceptionHook(i, u.stackTrace)
                                                }
                                                if (e + 1 >= o) {
                                                    if (n !== q) {
                                                        r = undefined;
                                                        l = [i]
                                                    }
                                                    t.rejectWith(r, l)
                                                }
                                            }
                                        };
                                    if (e) {
                                        u()
                                    } else {
                                        if (w.Deferred.getStackHook) {
                                            u.stackTrace = w.Deferred.getStackHook()
                                        }
                                        i.setTimeout(u)
                                    }
                                }
                            }
                            return w.Deferred(function (i) {
                                t[0][3].add(a(0, i, w.isFunction(s) ? s : j, i.notifyWith));
                                t[1][3].add(a(0, i, w.isFunction(e) ? e : j));
                                t[2][3].add(a(0, i, w.isFunction(n) ? n : q))
                            }).promise()
                        },
                        promise: function (e) {
                            return e != null ? w.extend(e, s) : s
                        }
                    },
                    o = {};
                w.each(t, function (e, i) {
                    var a = i[2],
                        r = i[5];
                    s[i[1]] = a.add;
                    if (r) {
                        a.add(function () {
                            n = r
                        }, t[3 - e][2].disable, t[0][2].lock)
                    }
                    a.add(i[3].fire);
                    o[i[0]] = function () {
                        o[i[0] + "With"](this === o ? undefined : this, arguments);
                        return this
                    };
                    o[i[0] + "With"] = a.fireWith
                });
                s.promise(o);
                if (e) {
                    e.call(o, o)
                }
                return o
            },
            when: function (e) {
                var t = arguments.length,
                    i = t,
                    n = Array(i),
                    s = h.call(arguments),
                    o = w.Deferred(),
                    a = function (e) {
                        return function (i) {
                            n[e] = this;
                            s[e] = arguments.length > 1 ? h.call(arguments) : i;
                            if (!--t) {
                                o.resolveWith(n, s)
                            }
                        }
                    };
                if (t <= 1) {
                    Y(e, o.done(a(i)).resolve, o.reject);
                    if (o.state() === "pending" || w.isFunction(s[i] && s[i].then)) {
                        return o.then()
                    }
                }
                while (i--) {
                    Y(s[i], a(i), o.reject)
                }
                return o.promise()
            }
        });
        var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function (e, t) {
            if (i.console && i.console.warn && e && V.test(e.name)) {
                i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        w.readyException = function (e) {
            i.setTimeout(function () {
                throw e
            })
        };
        var U = w.Deferred();
        w.fn.ready = function (e) {
            U.then(e).catch(function (e) {
                w.readyException(e)
            });
            return this
        };
        w.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function (e) {
                if (e) {
                    w.readyWait++
                } else {
                    w.ready(true)
                }
            },
            ready: function (e) {
                if (e === true ? --w.readyWait : w.isReady) {
                    return
                }
                w.isReady = true;
                if (e !== true && --w.readyWait > 0) {
                    return
                }
                U.resolveWith(r, [w])
            }
        });
        w.ready.then = U.then;

        function K() {
            r.removeEventListener("DOMContentLoaded", K);
            i.removeEventListener("load", K);
            w.ready()
        }
        if (r.readyState === "complete" || r.readyState !== "loading" && !r.documentElement.doScroll) {
            i.setTimeout(w.ready)
        } else {
            r.addEventListener("DOMContentLoaded", K);
            i.addEventListener("load", K)
        }
        var X = function (e, t, i, n, s, o, a) {
            var r = 0,
                l = e.length,
                h = i == null;
            if (w.type(i) === "object") {
                s = true;
                for (r in i) {
                    X(e, t, r, i[r], true, o, a)
                }
            } else if (n !== undefined) {
                s = true;
                if (!w.isFunction(n)) {
                    a = true
                }
                if (h) {
                    if (a) {
                        t.call(e, n);
                        t = null
                    } else {
                        h = t;
                        t = function (e, t, i) {
                            return h.call(w(e), i)
                        }
                    }
                }
                if (t) {
                    for (; r < l; r++) {
                        t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)))
                    }
                }
            }
            if (s) {
                return e
            }
            if (h) {
                return t.call(e)
            }
            return l ? t(e[0], i) : o
        };
        var G = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function Q() {
            this.expando = w.expando + Q.uid++
        }
        Q.uid = 1;
        Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (G(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            })
                        }
                    }
                }
                return t
            },
            set: function (e, t, i) {
                var n, s = this.cache(e);
                if (typeof t === "string") {
                    s[w.camelCase(t)] = i
                } else {
                    for (n in t) {
                        s[w.camelCase(n)] = t[n]
                    }
                }
                return s
            },
            get: function (e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][w.camelCase(t)]
            },
            access: function (e, t, i) {
                if (t === undefined || t && typeof t === "string" && i === undefined) {
                    return this.get(e, t)
                }
                this.set(e, t, i);
                return i !== undefined ? i : t
            },
            remove: function (e, t) {
                var i, n = e[this.expando];
                if (n === undefined) {
                    return
                }
                if (t !== undefined) {
                    if (w.isArray(t)) {
                        t = t.map(w.camelCase)
                    } else {
                        t = w.camelCase(t);
                        t = t in n ? [t] : t.match(B) || []
                    }
                    i = t.length;
                    while (i--) {
                        delete n[t[i]]
                    }
                }
                if (t === undefined || w.isEmptyObject(n)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return t !== undefined && !w.isEmptyObject(t)
            }
        };
        var J = new Q;
        var Z = new Q;
        var ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ie(e) {
            if (e === "true") {
                return true
            }
            if (e === "false") {
                return false
            }
            if (e === "null") {
                return null
            }
            if (e === +e + "") {
                return +e
            }
            if (ee.test(e)) {
                return JSON.parse(e)
            }
            return e
        }

        function ne(e, t, i) {
            var n;
            if (i === undefined && e.nodeType === 1) {
                n = "data-" + t.replace(te, "-$&").toLowerCase();
                i = e.getAttribute(n);
                if (typeof i === "string") {
                    try {
                        i = ie(i)
                    } catch (e) {}
                    Z.set(e, t, i)
                } else {
                    i = undefined
                }
            }
            return i
        }
        w.extend({
            hasData: function (e) {
                return Z.hasData(e) || J.hasData(e)
            },
            data: function (e, t, i) {
                return Z.access(e, t, i)
            },
            removeData: function (e, t) {
                Z.remove(e, t)
            },
            _data: function (e, t, i) {
                return J.access(e, t, i)
            },
            _removeData: function (e, t) {
                J.remove(e, t)
            }
        });
        w.fn.extend({
            data: function (e, t) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (e === undefined) {
                    if (this.length) {
                        s = Z.get(o);
                        if (o.nodeType === 1 && !J.get(o, "hasDataAttrs")) {
                            i = a.length;
                            while (i--) {
                                if (a[i]) {
                                    n = a[i].name;
                                    if (n.indexOf("data-") === 0) {
                                        n = w.camelCase(n.slice(5));
                                        ne(o, n, s[n])
                                    }
                                }
                            }
                            J.set(o, "hasDataAttrs", true)
                        }
                    }
                    return s
                }
                if (typeof e === "object") {
                    return this.each(function () {
                        Z.set(this, e)
                    })
                }
                return X(this, function (t) {
                    var i;
                    if (o && t === undefined) {
                        i = Z.get(o, e);
                        if (i !== undefined) {
                            return i
                        }
                        i = ne(o, e);
                        if (i !== undefined) {
                            return i
                        }
                        return
                    }
                    this.each(function () {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, true)
            },
            removeData: function (e) {
                return this.each(function () {
                    Z.remove(this, e)
                })
            }
        });
        w.extend({
            queue: function (e, t, i) {
                var n;
                if (e) {
                    t = (t || "fx") + "queue";
                    n = J.get(e, t);
                    if (i) {
                        if (!n || w.isArray(i)) {
                            n = J.access(e, t, w.makeArray(i))
                        } else {
                            n.push(i)
                        }
                    }
                    return n || []
                }
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var i = w.queue(e, t),
                    n = i.length,
                    s = i.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t)
                    };
                if (s === "inprogress") {
                    s = i.shift();
                    n--
                }
                if (s) {
                    if (t === "fx") {
                        i.unshift("inprogress")
                    }
                    delete o.stop;
                    s.call(e, a, o)
                }
                if (!n && o) {
                    o.empty.fire()
                }
            },
            _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return J.get(e, i) || J.access(e, i, {
                    empty: w.Callbacks("once memory").add(function () {
                        J.remove(e, [t + "queue", i])
                    })
                })
            }
        });
        w.fn.extend({
            queue: function (e, t) {
                var i = 2;
                if (typeof e !== "string") {
                    t = e;
                    e = "fx";
                    i--
                }
                if (arguments.length < i) {
                    return w.queue(this[0], e)
                }
                return t === undefined ? this : this.each(function () {
                    var i = w.queue(this, e, t);
                    w._queueHooks(this, e);
                    if (e === "fx" && i[0] !== "inprogress") {
                        w.dequeue(this, e)
                    }
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var i, n = 1,
                    s = w.Deferred(),
                    o = this,
                    a = this.length,
                    r = function () {
                        if (!--n) {
                            s.resolveWith(o, [o])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (a--) {
                    i = J.get(o[a], e + "queueHooks");
                    if (i && i.empty) {
                        n++;
                        i.empty.add(r)
                    }
                }
                r();
                return s.promise(t)
            }
        });
        var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var oe = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i");
        var ae = ["Top", "Right", "Bottom", "Left"];
        var re = function (e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && w.contains(e.ownerDocument, e) && w.css(e, "display") === "none"
        };
        var le = function (e, t, i, n) {
            var s, o, a = {};
            for (o in t) {
                a[o] = e.style[o];
                e.style[o] = t[o]
            }
            s = i.apply(e, n || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return s
        };

        function he(e, t, i, n) {
            var s, o = 1,
                a = 20,
                r = n ? function () {
                    return n.cur()
                } : function () {
                    return w.css(e, t, "")
                },
                l = r(),
                h = i && i[3] || (w.cssNumber[t] ? "" : "px"),
                u = (w.cssNumber[t] || h !== "px" && +l) && oe.exec(w.css(e, t));
            if (u && u[3] !== h) {
                h = h || u[3];
                i = i || [];
                u = +l || 1;
                do {
                    o = o || ".5";
                    u = u / o;
                    w.style(e, t, u + h)
                } while (o !== (o = r() / l) && o !== 1 && --a)
            }
            if (i) {
                u = +u || +l || 0;
                s = i[1] ? u + (i[1] + 1) * i[2] : +i[2];
                if (n) {
                    n.unit = h;
                    n.start = u;
                    n.end = s
                }
            }
            return s
        }
        var ue = {};

        function ce(e) {
            var t, i = e.ownerDocument,
                n = e.nodeName,
                s = ue[n];
            if (s) {
                return s
            }
            t = i.body.appendChild(i.createElement(n));
            s = w.css(t, "display");
            t.parentNode.removeChild(t);
            if (s === "none") {
                s = "block"
            }
            ue[n] = s;
            return s
        }

        function de(e, t) {
            var i, n, s = [],
                o = 0,
                a = e.length;
            for (; o < a; o++) {
                n = e[o];
                if (!n.style) {
                    continue
                }
                i = n.style.display;
                if (t) {
                    if (i === "none") {
                        s[o] = J.get(n, "display") || null;
                        if (!s[o]) {
                            n.style.display = ""
                        }
                    }
                    if (n.style.display === "" && re(n)) {
                        s[o] = ce(n)
                    }
                } else {
                    if (i !== "none") {
                        s[o] = "none";
                        J.set(n, "display", i)
                    }
                }
            }
            for (o = 0; o < a; o++) {
                if (s[o] != null) {
                    e[o].style.display = s[o]
                }
            }
            return e
        }
        w.fn.extend({
            show: function () {
                return de(this, true)
            },
            hide: function () {
                return de(this)
            },
            toggle: function (e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function () {
                    if (re(this)) {
                        w(this).show()
                    } else {
                        w(this).hide()
                    }
                })
            }
        });
        var fe = /^(?:checkbox|radio)$/i;
        var pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var me = /^$|\/(?:java|ecma)script/i;
        var ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ge.optgroup = ge.option;
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead;
        ge.th = ge.td;

        function ve(e, t) {
            var i;
            if (typeof e.getElementsByTagName !== "undefined") {
                i = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                i = e.querySelectorAll(t || "*")
            } else {
                i = []
            }
            if (t === undefined || t && w.nodeName(e, t)) {
                return w.merge([e], i)
            }
            return i
        }

        function _e(e, t) {
            var i = 0,
                n = e.length;
            for (; i < n; i++) {
                J.set(e[i], "globalEval", !t || J.get(t[i], "globalEval"))
            }
        }
        var be = /<|&#?\w+;/;

        function ye(e, t, i, n, s) {
            var o, a, r, l, h, u, c = t.createDocumentFragment(),
                d = [],
                f = 0,
                p = e.length;
            for (; f < p; f++) {
                o = e[f];
                if (o || o === 0) {
                    if (w.type(o) === "object") {
                        w.merge(d, o.nodeType ? [o] : o)
                    } else if (!be.test(o)) {
                        d.push(t.createTextNode(o))
                    } else {
                        a = a || c.appendChild(t.createElement("div"));
                        r = (pe.exec(o) || ["", ""])[1].toLowerCase();
                        l = ge[r] || ge._default;
                        a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2];
                        u = l[0];
                        while (u--) {
                            a = a.lastChild
                        }
                        w.merge(d, a.childNodes);
                        a = c.firstChild;
                        a.textContent = ""
                    }
                }
            }
            c.textContent = "";
            f = 0;
            while (o = d[f++]) {
                if (n && w.inArray(o, n) > -1) {
                    if (s) {
                        s.push(o)
                    }
                    continue
                }
                h = w.contains(o.ownerDocument, o);
                a = ve(c.appendChild(o), "script");
                if (h) {
                    _e(a)
                }
                if (i) {
                    u = 0;
                    while (o = a[u++]) {
                        if (me.test(o.type || "")) {
                            i.push(o)
                        }
                    }
                }
            }
            return c
        }(function () {
            var e = r.createDocumentFragment(),
                t = e.appendChild(r.createElement("div")),
                i = r.createElement("input");
            i.setAttribute("type", "radio");
            i.setAttribute("checked", "checked");
            i.setAttribute("name", "t");
            t.appendChild(i);
            _.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            _.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var we = r.documentElement;
        var xe = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ke = /^([^.]*)(?:\.(.+)|)/;

        function Te() {
            return true
        }

        function De() {
            return false
        }

        function Ie() {
            try {
                return r.activeElement
            } catch (e) {}
        }

        function Se(e, t, i, n, s, o) {
            var a, r;
            if (typeof t === "object") {
                if (typeof i !== "string") {
                    n = n || i;
                    i = undefined
                }
                for (r in t) {
                    Se(e, r, i, n, t[r], o)
                }
                return e
            }
            if (n == null && s == null) {
                s = i;
                n = i = undefined
            } else if (s == null) {
                if (typeof i === "string") {
                    s = n;
                    n = undefined
                } else {
                    s = n;
                    n = i;
                    i = undefined
                }
            }
            if (s === false) {
                s = De
            } else if (!s) {
                return e
            }
            if (o === 1) {
                a = s;
                s = function (e) {
                    w().off(e);
                    return a.apply(this, arguments)
                };
                s.guid = a.guid || (a.guid = w.guid++)
            }
            return e.each(function () {
                w.event.add(this, t, s, n, i)
            })
        }
        w.event = {
            global: {},
            add: function (e, t, i, n, s) {
                var o, a, r, l, h, u, c, d, f, p, m, g = J.get(e);
                if (!g) {
                    return
                }
                if (i.handler) {
                    o = i;
                    i = o.handler;
                    s = o.selector
                }
                if (s) {
                    w.find.matchesSelector(we, s)
                }
                if (!i.guid) {
                    i.guid = w.guid++
                }
                if (!(l = g.events)) {
                    l = g.events = {}
                }
                if (!(a = g.handle)) {
                    a = g.handle = function (t) {
                        return typeof w !== "undefined" && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : undefined
                    }
                }
                t = (t || "").match(B) || [""];
                h = t.length;
                while (h--) {
                    r = ke.exec(t[h]) || [];
                    f = m = r[1];
                    p = (r[2] || "").split(".").sort();
                    if (!f) {
                        continue
                    }
                    c = w.event.special[f] || {};
                    f = (s ? c.delegateType : c.bindType) || f;
                    c = w.event.special[f] || {};
                    u = w.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && w.expr.match.needsContext.test(s),
                        namespace: p.join(".")
                    }, o);
                    if (!(d = l[f])) {
                        d = l[f] = [];
                        d.delegateCount = 0;
                        if (!c.setup || c.setup.call(e, n, p, a) === false) {
                            if (e.addEventListener) {
                                e.addEventListener(f, a)
                            }
                        }
                    }
                    if (c.add) {
                        c.add.call(e, u);
                        if (!u.handler.guid) {
                            u.handler.guid = i.guid
                        }
                    }
                    if (s) {
                        d.splice(d.delegateCount++, 0, u)
                    } else {
                        d.push(u)
                    }
                    w.event.global[f] = true
                }
            },
            remove: function (e, t, i, n, s) {
                var o, a, r, l, h, u, c, d, f, p, m, g = J.hasData(e) && J.get(e);
                if (!g || !(l = g.events)) {
                    return
                }
                t = (t || "").match(B) || [""];
                h = t.length;
                while (h--) {
                    r = ke.exec(t[h]) || [];
                    f = m = r[1];
                    p = (r[2] || "").split(".").sort();
                    if (!f) {
                        for (f in l) {
                            w.event.remove(e, f + t[h], i, n, true)
                        }
                        continue
                    }
                    c = w.event.special[f] || {};
                    f = (n ? c.delegateType : c.bindType) || f;
                    d = l[f] || [];
                    r = r[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    a = o = d.length;
                    while (o--) {
                        u = d[o];
                        if ((s || m === u.origType) && (!i || i.guid === u.guid) && (!r || r.test(u.namespace)) && (!n || n === u.selector || n === "**" && u.selector)) {
                            d.splice(o, 1);
                            if (u.selector) {
                                d.delegateCount--
                            }
                            if (c.remove) {
                                c.remove.call(e, u)
                            }
                        }
                    }
                    if (a && !d.length) {
                        if (!c.teardown || c.teardown.call(e, p, g.handle) === false) {
                            w.removeEvent(e, f, g.handle)
                        }
                        delete l[f]
                    }
                }
                if (w.isEmptyObject(l)) {
                    J.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t = w.event.fix(e);
                var i, n, s, o, a, r, l = new Array(arguments.length),
                    h = (J.get(this, "events") || {})[t.type] || [],
                    u = w.event.special[t.type] || {};
                l[0] = t;
                for (i = 1; i < arguments.length; i++) {
                    l[i] = arguments[i]
                }
                t.delegateTarget = this;
                if (u.preDispatch && u.preDispatch.call(this, t) === false) {
                    return
                }
                r = w.event.handlers.call(this, t, h);
                i = 0;
                while ((o = r[i++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem;
                    n = 0;
                    while ((a = o.handlers[n++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(a.namespace)) {
                            t.handleObj = a;
                            t.data = a.data;
                            s = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l);
                            if (s !== undefined) {
                                if ((t.result = s) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (u.postDispatch) {
                    u.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function (e, t) {
                var i, n, s, o, a, r = [],
                    l = t.delegateCount,
                    h = e.target;
                if (l && h.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; h !== this; h = h.parentNode || this) {
                        if (h.nodeType === 1 && !(e.type === "click" && h.disabled === true)) {
                            o = [];
                            a = {};
                            for (i = 0; i < l; i++) {
                                n = t[i];
                                s = n.selector + " ";
                                if (a[s] === undefined) {
                                    a[s] = n.needsContext ? w(s, this).index(h) > -1 : w.find(s, this, null, [h]).length
                                }
                                if (a[s]) {
                                    o.push(n)
                                }
                            }
                            if (o.length) {
                                r.push({
                                    elem: h,
                                    handlers: o
                                })
                            }
                        }
                    }
                }
                h = this;
                if (l < t.length) {
                    r.push({
                        elem: h,
                        handlers: t.slice(l)
                    })
                }
                return r
            },
            addProp: function (e, t) {
                Object.defineProperty(w.Event.prototype, e, {
                    enumerable: true,
                    configurable: true,
                    get: w.isFunction(t) ? function () {
                        if (this.originalEvent) {
                            return t(this.originalEvent)
                        }
                    } : function () {
                        if (this.originalEvent) {
                            return this.originalEvent[e]
                        }
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[w.expando] ? e : new w.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function () {
                        if (this !== Ie() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === Ie() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if (this.type === "checkbox" && this.click && w.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function (e) {
                        return w.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            }
        };
        w.removeEvent = function (e, t, i) {
            if (e.removeEventListener) {
                e.removeEventListener(t, i)
            }
        };
        w.Event = function (e, t) {
            if (!(this instanceof w.Event)) {
                return new w.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? Te : De;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                w.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || w.now();
            this[w.expando] = true
        };
        w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: De,
            isPropagationStopped: De,
            isImmediatePropagationStopped: De,
            isSimulated: false,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Te;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Te;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Te;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        w.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function (e) {
                var t = e.button;
                if (e.which == null && xe.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && Ce.test(e.type)) {
                    if (t & 1) {
                        return 1
                    }
                    if (t & 2) {
                        return 3
                    }
                    if (t & 4) {
                        return 2
                    }
                    return 0
                }
                return e.which
            }
        }, w.event.addProp);
        w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var i, n = this,
                        s = e.relatedTarget,
                        o = e.handleObj;
                    if (!s || s !== n && !w.contains(n, s)) {
                        e.type = o.origType;
                        i = o.handler.apply(this, arguments);
                        e.type = t
                    }
                    return i
                }
            }
        });
        w.fn.extend({
            on: function (e, t, i, n) {
                return Se(this, e, t, i, n)
            },
            one: function (e, t, i, n) {
                return Se(this, e, t, i, n, 1)
            },
            off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj) {
                    n = e.handleObj;
                    w(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (s in e) {
                        this.off(s, t, e[s])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    i = t;
                    t = undefined
                }
                if (i === false) {
                    i = De
                }
                return this.each(function () {
                    w.event.remove(this, e, i, t)
                })
            }
        });
        var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Pe = /<script|<style|<link/i,
            Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Me = /^true\/(.*)/,
            Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) {
            if (w.nodeName(e, "table") && w.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function He(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Le(e) {
            var t = Me.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function We(e, t) {
            var i, n, s, o, a, r, l, h;
            if (t.nodeType !== 1) {
                return
            }
            if (J.hasData(e)) {
                o = J.access(e);
                a = J.set(t, o);
                h = o.events;
                if (h) {
                    delete a.handle;
                    a.events = {};
                    for (s in h) {
                        for (i = 0, n = h[s].length; i < n; i++) {
                            w.event.add(t, s, h[s][i])
                        }
                    }
                }
            }
            if (Z.hasData(e)) {
                r = Z.access(e);
                l = w.extend({}, r);
                Z.set(t, l)
            }
        }

        function ze(e, t) {
            var i = t.nodeName.toLowerCase();
            if (i === "input" && fe.test(e.type)) {
                t.checked = e.checked
            } else if (i === "input" || i === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function Fe(e, t, i, n) {
            t = u.apply([], t);
            var s, o, a, r, l, h, c = 0,
                d = e.length,
                f = d - 1,
                p = t[0],
                m = w.isFunction(p);
            if (m || d > 1 && typeof p === "string" && !_.checkClone && Ee.test(p)) {
                return e.each(function (s) {
                    var o = e.eq(s);
                    if (m) {
                        t[0] = p.call(this, s, o.html())
                    }
                    Fe(o, t, i, n)
                })
            }
            if (d) {
                s = ye(t, e[0].ownerDocument, false, e, n);
                o = s.firstChild;
                if (s.childNodes.length === 1) {
                    s = o
                }
                if (o || n) {
                    a = w.map(ve(s, "script"), He);
                    r = a.length;
                    for (; c < d; c++) {
                        l = s;
                        if (c !== f) {
                            l = w.clone(l, true, true);
                            if (r) {
                                w.merge(a, ve(l, "script"))
                            }
                        }
                        i.call(e[c], l, c)
                    }
                    if (r) {
                        h = a[a.length - 1].ownerDocument;
                        w.map(a, Le);
                        for (c = 0; c < r; c++) {
                            l = a[c];
                            if (me.test(l.type || "") && !J.access(l, "globalEval") && w.contains(h, l)) {
                                if (l.src) {
                                    if (w._evalUrl) {
                                        w._evalUrl(l.src)
                                    }
                                } else {
                                    b(l.textContent.replace(Ae, ""), h)
                                }
                            }
                        }
                    }
                }
            }
            return e
        }

        function Be(e, t, i) {
            var n, s = t ? w.filter(t, e) : e,
                o = 0;
            for (;
                (n = s[o]) != null; o++) {
                if (!i && n.nodeType === 1) {
                    w.cleanData(ve(n))
                }
                if (n.parentNode) {
                    if (i && w.contains(n.ownerDocument, n)) {
                        _e(ve(n, "script"))
                    }
                    n.parentNode.removeChild(n)
                }
            }
            return e
        }
        w.extend({
            htmlPrefilter: function (e) {
                return e.replace(Ne, "<$1></$2>")
            },
            clone: function (e, t, i) {
                var n, s, o, a, r = e.cloneNode(true),
                    l = w.contains(e.ownerDocument, e);
                if (!_.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                    a = ve(r);
                    o = ve(e);
                    for (n = 0, s = o.length; n < s; n++) {
                        ze(o[n], a[n])
                    }
                }
                if (t) {
                    if (i) {
                        o = o || ve(e);
                        a = a || ve(r);
                        for (n = 0, s = o.length; n < s; n++) {
                            We(o[n], a[n])
                        }
                    } else {
                        We(e, r)
                    }
                }
                a = ve(r, "script");
                if (a.length > 0) {
                    _e(a, !l && ve(e, "script"))
                }
                return r
            },
            cleanData: function (e) {
                var t, i, n, s = w.event.special,
                    o = 0;
                for (;
                    (i = e[o]) !== undefined; o++) {
                    if (G(i)) {
                        if (t = i[J.expando]) {
                            if (t.events) {
                                for (n in t.events) {
                                    if (s[n]) {
                                        w.event.remove(i, n)
                                    } else {
                                        w.removeEvent(i, n, t.handle)
                                    }
                                }
                            }
                            i[J.expando] = undefined
                        }
                        if (i[Z.expando]) {
                            i[Z.expando] = undefined
                        }
                    }
                }
            }
        });
        w.fn.extend({
            detach: function (e) {
                return Be(this, e, true)
            },
            remove: function (e) {
                return Be(this, e)
            },
            text: function (e) {
                return X(this, function (e) {
                    return e === undefined ? w.text(this) : this.empty().each(function () {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return Fe(this, arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Oe(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return Fe(this, arguments, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return Fe(this, arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function () {
                return Fe(this, arguments, function (e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            },
            empty: function () {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        w.cleanData(ve(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function (e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function () {
                    return w.clone(this, e, t)
                })
            },
            html: function (e) {
                return X(this, function (e) {
                    var t = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Pe.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = w.htmlPrefilter(e);
                        try {
                            for (; i < n; i++) {
                                t = this[i] || {};
                                if (t.nodeType === 1) {
                                    w.cleanData(ve(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return Fe(this, arguments, function (t) {
                    var i = this.parentNode;
                    if (w.inArray(this, e) < 0) {
                        w.cleanData(ve(this));
                        if (i) {
                            i.replaceChild(t, this)
                        }
                    }
                }, e)
            }
        });
        w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            w.fn[e] = function (e) {
                var i, n = [],
                    s = w(e),
                    o = s.length - 1,
                    a = 0;
                for (; a <= o; a++) {
                    i = a === o ? this : this.clone(true);
                    w(s[a])[t](i);
                    c.apply(n, i.get())
                }
                return this.pushStack(n)
            }
        });
        var Re = /^margin/;
        var je = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i");
        var qe = function (e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = i
            }
            return t.getComputedStyle(e)
        };
        (function () {
            function e() {
                if (!l) {
                    return
                }
                l.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                l.innerHTML = "";
                we.appendChild(a);
                var e = i.getComputedStyle(l);
                t = e.top !== "1%";
                o = e.marginLeft === "2px";
                n = e.width === "4px";
                l.style.marginRight = "50%";
                s = e.marginRight === "4px";
                we.removeChild(a);
                l = null
            }
            var t, n, s, o, a = r.createElement("div"),
                l = r.createElement("div");
            if (!l.style) {
                return
            }
            l.style.backgroundClip = "content-box";
            l.cloneNode(true).style.backgroundClip = "";
            _.clearCloneStyle = l.style.backgroundClip === "content-box";
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            a.appendChild(l);
            w.extend(_, {
                pixelPosition: function () {
                    e();
                    return t
                },
                boxSizingReliable: function () {
                    e();
                    return n
                },
                pixelMarginRight: function () {
                    e();
                    return s
                },
                reliableMarginLeft: function () {
                    e();
                    return o
                }
            })
        })();

        function Ye(e, t, i) {
            var n, s, o, a, r = e.style;
            i = i || qe(e);
            if (i) {
                a = i.getPropertyValue(t) || i[t];
                if (a === "" && !w.contains(e.ownerDocument, e)) {
                    a = w.style(e, t)
                }
                if (!_.pixelMarginRight() && je.test(a) && Re.test(t)) {
                    n = r.width;
                    s = r.minWidth;
                    o = r.maxWidth;
                    r.minWidth = r.maxWidth = r.width = a;
                    a = i.width;
                    r.width = n;
                    r.minWidth = s;
                    r.maxWidth = o
                }
            }
            return a !== undefined ? a + "" : a
        }

        function Ve(e, t) {
            return {
                get: function () {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var $e = /^(none|table(?!-c[ea]).+)/,
            Ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xe = ["Webkit", "Moz", "ms"],
            Ge = r.createElement("div").style;

        function Qe(e) {
            if (e in Ge) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                i = Xe.length;
            while (i--) {
                e = Xe[i] + t;
                if (e in Ge) {
                    return e
                }
            }
        }

        function Je(e, t, i) {
            var n = oe.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
        }

        function Ze(e, t, i, n, s) {
            var o, a = 0;
            if (i === (n ? "border" : "content")) {
                o = 4
            } else {
                o = t === "width" ? 1 : 0
            }
            for (; o < 4; o += 2) {
                if (i === "margin") {
                    a += w.css(e, i + ae[o], true, s)
                }
                if (n) {
                    if (i === "content") {
                        a -= w.css(e, "padding" + ae[o], true, s)
                    }
                    if (i !== "margin") {
                        a -= w.css(e, "border" + ae[o] + "Width", true, s)
                    }
                } else {
                    a += w.css(e, "padding" + ae[o], true, s);
                    if (i !== "padding") {
                        a += w.css(e, "border" + ae[o] + "Width", true, s)
                    }
                }
            }
            return a
        }

        function et(e, t, i) {
            var n, s = true,
                o = qe(e),
                a = w.css(e, "boxSizing", false, o) === "border-box";
            if (e.getClientRects().length) {
                n = e.getBoundingClientRect()[t]
            }
            if (n <= 0 || n == null) {
                n = Ye(e, t, o);
                if (n < 0 || n == null) {
                    n = e.style[t]
                }
                if (je.test(n)) {
                    return n
                }
                s = a && (_.boxSizingReliable() || n === e.style[t]);
                n = parseFloat(n) || 0
            }
            return n + Ze(e, t, i || (a ? "border" : "content"), s, o) + "px"
        }
        w.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var i = Ye(e, "opacity");
                            return i === "" ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (e, t, i, n) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var s, o, a, r = w.camelCase(t),
                    l = e.style;
                t = w.cssProps[r] || (w.cssProps[r] = Qe(r) || r);
                a = w.cssHooks[t] || w.cssHooks[r];
                if (i !== undefined) {
                    o = typeof i;
                    if (o === "string" && (s = oe.exec(i)) && s[1]) {
                        i = he(e, t, s);
                        o = "number"
                    }
                    if (i == null || i !== i) {
                        return
                    }
                    if (o === "number") {
                        i += s && s[3] || (w.cssNumber[r] ? "" : "px")
                    }
                    if (!_.clearCloneStyle && i === "" && t.indexOf("background") === 0) {
                        l[t] = "inherit"
                    }
                    if (!a || !("set" in a) || (i = a.set(e, i, n)) !== undefined) {
                        l[t] = i
                    }
                } else {
                    if (a && "get" in a && (s = a.get(e, false, n)) !== undefined) {
                        return s
                    }
                    return l[t]
                }
            },
            css: function (e, t, i, n) {
                var s, o, a, r = w.camelCase(t);
                t = w.cssProps[r] || (w.cssProps[r] = Qe(r) || r);
                a = w.cssHooks[t] || w.cssHooks[r];
                if (a && "get" in a) {
                    s = a.get(e, true, i)
                }
                if (s === undefined) {
                    s = Ye(e, t, n)
                }
                if (s === "normal" && t in Ke) {
                    s = Ke[t]
                }
                if (i === "" || i) {
                    o = parseFloat(s);
                    return i === true || isFinite(o) ? o || 0 : s
                }
                return s
            }
        });
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, i, n) {
                    if (i) {
                        return $e.test(w.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? le(e, Ue, function () {
                            return et(e, t, n)
                        }) : et(e, t, n)
                    }
                },
                set: function (e, i, n) {
                    var s, o = n && qe(e),
                        a = n && Ze(e, t, n, w.css(e, "boxSizing", false, o) === "border-box", o);
                    if (a && (s = oe.exec(i)) && (s[3] || "px") !== "px") {
                        e.style[t] = i;
                        i = w.css(e, t)
                    }
                    return Je(e, i, a)
                }
            }
        });
        w.cssHooks.marginLeft = Ve(_.reliableMarginLeft, function (e, t) {
            if (t) {
                return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            w.cssHooks[e + t] = {
                expand: function (i) {
                    var n = 0,
                        s = {},
                        o = typeof i === "string" ? i.split(" ") : [i];
                    for (; n < 4; n++) {
                        s[e + ae[n] + t] = o[n] || o[n - 2] || o[0]
                    }
                    return s
                }
            };
            if (!Re.test(e)) {
                w.cssHooks[e + t].set = Je
            }
        });
        w.fn.extend({
            css: function (e, t) {
                return X(this, function (e, t, i) {
                    var n, s, o = {},
                        a = 0;
                    if (w.isArray(t)) {
                        n = qe(e);
                        s = t.length;
                        for (; a < s; a++) {
                            o[t[a]] = w.css(e, t[a], false, n)
                        }
                        return o
                    }
                    return i !== undefined ? w.style(e, t, i) : w.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function tt(e, t, i, n, s) {
            return new tt.prototype.init(e, t, i, n, s)
        }
        w.Tween = tt;
        tt.prototype = {
            constructor: tt,
            init: function (e, t, i, n, s, o) {
                this.elem = e;
                this.prop = i;
                this.easing = s || w.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = n;
                this.unit = o || (w.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, i = tt.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (i && i.set) {
                    i.set(this)
                } else {
                    tt.propHooks._default.set(this)
                }
                return this
            }
        };
        tt.prototype.init.prototype = tt.prototype;
        tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop]
                    }
                    t = w.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function (e) {
                    if (w.fx.step[e.prop]) {
                        w.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop])) {
                        w.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        w.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        w.fx = tt.prototype.init;
        w.fx.step = {};
        var it, nt, st = /^(?:toggle|show|hide)$/,
            ot = /queueHooks$/;

        function at() {
            if (nt) {
                i.requestAnimationFrame(at);
                w.fx.tick()
            }
        }

        function rt() {
            i.setTimeout(function () {
                it = undefined
            });
            return it = w.now()
        }

        function lt(e, t) {
            var i, n = 0,
                s = {
                    height: e
                };
            t = t ? 1 : 0;
            for (; n < 4; n += 2 - t) {
                i = ae[n];
                s["margin" + i] = s["padding" + i] = e
            }
            if (t) {
                s.opacity = s.width = e
            }
            return s
        }

        function ht(e, t, i) {
            var n, s = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
                o = 0,
                a = s.length;
            for (; o < a; o++) {
                if (n = s[o].call(i, t, e)) {
                    return n
                }
            }
        }

        function ut(e, t, i) {
            var n, s, o, a, r, l, h, u, c = "width" in t || "height" in t,
                d = this,
                f = {},
                p = e.style,
                m = e.nodeType && re(e),
                g = J.get(e, "fxshow");
            if (!i.queue) {
                a = w._queueHooks(e, "fx");
                if (a.unqueued == null) {
                    a.unqueued = 0;
                    r = a.empty.fire;
                    a.empty.fire = function () {
                        if (!a.unqueued) {
                            r()
                        }
                    }
                }
                a.unqueued++;
                d.always(function () {
                    d.always(function () {
                        a.unqueued--;
                        if (!w.queue(e, "fx").length) {
                            a.empty.fire()
                        }
                    })
                })
            }
            for (n in t) {
                s = t[n];
                if (st.test(s)) {
                    delete t[n];
                    o = o || s === "toggle";
                    if (s === (m ? "hide" : "show")) {
                        if (s === "show" && g && g[n] !== undefined) {
                            m = true
                        } else {
                            continue
                        }
                    }
                    f[n] = g && g[n] || w.style(e, n)
                }
            }
            l = !w.isEmptyObject(t);
            if (!l && w.isEmptyObject(f)) {
                return
            }
            if (c && e.nodeType === 1) {
                i.overflow = [p.overflow, p.overflowX, p.overflowY];
                h = g && g.display;
                if (h == null) {
                    h = J.get(e, "display")
                }
                u = w.css(e, "display");
                if (u === "none") {
                    if (h) {
                        u = h
                    } else {
                        de([e], true);
                        h = e.style.display || h;
                        u = w.css(e, "display");
                        de([e])
                    }
                }
                if (u === "inline" || u === "inline-block" && h != null) {
                    if (w.css(e, "float") === "none") {
                        if (!l) {
                            d.done(function () {
                                p.display = h
                            });
                            if (h == null) {
                                u = p.display;
                                h = u === "none" ? "" : u
                            }
                        }
                        p.display = "inline-block"
                    }
                }
            }
            if (i.overflow) {
                p.overflow = "hidden";
                d.always(function () {
                    p.overflow = i.overflow[0];
                    p.overflowX = i.overflow[1];
                    p.overflowY = i.overflow[2]
                })
            }
            l = false;
            for (n in f) {
                if (!l) {
                    if (g) {
                        if ("hidden" in g) {
                            m = g.hidden
                        }
                    } else {
                        g = J.access(e, "fxshow", {
                            display: h
                        })
                    }
                    if (o) {
                        g.hidden = !m
                    }
                    if (m) {
                        de([e], true)
                    }
                    d.done(function () {
                        if (!m) {
                            de([e])
                        }
                        J.remove(e, "fxshow");
                        for (n in f) {
                            w.style(e, n, f[n])
                        }
                    })
                }
                l = ht(m ? g[n] : 0, n, d);
                if (!(n in g)) {
                    g[n] = l.start;
                    if (m) {
                        l.end = l.start;
                        l.start = 0
                    }
                }
            }
        }

        function ct(e, t) {
            var i, n, s, o, a;
            for (i in e) {
                n = w.camelCase(i);
                s = t[n];
                o = e[i];
                if (w.isArray(o)) {
                    s = o[1];
                    o = e[i] = o[0]
                }
                if (i !== n) {
                    e[n] = o;
                    delete e[i]
                }
                a = w.cssHooks[n];
                if (a && "expand" in a) {
                    o = a.expand(o);
                    delete e[n];
                    for (i in o) {
                        if (!(i in e)) {
                            e[i] = o[i];
                            t[i] = s
                        }
                    }
                } else {
                    t[n] = s
                }
            }
        }

        function dt(e, t, i) {
            var n, s, o = 0,
                a = dt.prefilters.length,
                r = w.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (s) {
                        return false
                    }
                    var t = it || rt(),
                        i = Math.max(0, h.startTime + h.duration - t),
                        n = i / h.duration || 0,
                        o = 1 - n,
                        a = 0,
                        l = h.tweens.length;
                    for (; a < l; a++) {
                        h.tweens[a].run(o)
                    }
                    r.notifyWith(e, [h, o, i]);
                    if (o < 1 && l) {
                        return i
                    } else {
                        r.resolveWith(e, [h]);
                        return false
                    }
                },
                h = r.promise({
                    elem: e,
                    props: w.extend({}, t),
                    opts: w.extend(true, {
                        specialEasing: {},
                        easing: w.easing._default
                    }, i),
                    originalProperties: t,
                    originalOptions: i,
                    startTime: it || rt(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (t, i) {
                        var n = w.Tween(e, h.opts, t, i, h.opts.specialEasing[t] || h.opts.easing);
                        h.tweens.push(n);
                        return n
                    },
                    stop: function (t) {
                        var i = 0,
                            n = t ? h.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; i < n; i++) {
                            h.tweens[i].run(1)
                        }
                        if (t) {
                            r.notifyWith(e, [h, 1, 0]);
                            r.resolveWith(e, [h, t])
                        } else {
                            r.rejectWith(e, [h, t])
                        }
                        return this
                    }
                }),
                u = h.props;
            ct(u, h.opts.specialEasing);
            for (; o < a; o++) {
                n = dt.prefilters[o].call(h, e, u, h.opts);
                if (n) {
                    if (w.isFunction(n.stop)) {
                        w._queueHooks(h.elem, h.opts.queue).stop = w.proxy(n.stop, n)
                    }
                    return n
                }
            }
            w.map(u, ht, h);
            if (w.isFunction(h.opts.start)) {
                h.opts.start.call(e, h)
            }
            w.fx.timer(w.extend(l, {
                elem: e,
                anim: h,
                queue: h.opts.queue
            }));
            return h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }
        w.Animation = w.extend(dt, {
            tweeners: {
                "*": [function (e, t) {
                    var i = this.createTween(e, t);
                    he(i.elem, e, oe.exec(t), i);
                    return i
                }]
            },
            tweener: function (e, t) {
                if (w.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(B)
                }
                var i, n = 0,
                    s = e.length;
                for (; n < s; n++) {
                    i = e[n];
                    dt.tweeners[i] = dt.tweeners[i] || [];
                    dt.tweeners[i].unshift(t)
                }
            },
            prefilters: [ut],
            prefilter: function (e, t) {
                if (t) {
                    dt.prefilters.unshift(e)
                } else {
                    dt.prefilters.push(e)
                }
            }
        });
        w.speed = function (e, t, i) {
            var n = e && typeof e === "object" ? w.extend({}, e) : {
                complete: i || !i && t || w.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !w.isFunction(t) && t
            };
            if (w.fx.off || r.hidden) {
                n.duration = 0
            } else {
                if (typeof n.duration !== "number") {
                    if (n.duration in w.fx.speeds) {
                        n.duration = w.fx.speeds[n.duration]
                    } else {
                        n.duration = w.fx.speeds._default
                    }
                }
            }
            if (n.queue == null || n.queue === true) {
                n.queue = "fx"
            }
            n.old = n.complete;
            n.complete = function () {
                if (w.isFunction(n.old)) {
                    n.old.call(this)
                }
                if (n.queue) {
                    w.dequeue(this, n.queue)
                }
            };
            return n
        };
        w.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var s = w.isEmptyObject(e),
                    o = w.speed(t, i, n),
                    a = function () {
                        var t = dt(this, w.extend({}, e), o);
                        if (s || J.get(this, "finish")) {
                            t.stop(true)
                        }
                    };
                a.finish = a;
                return s || o.queue === false ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop;
                    t(i)
                };
                if (typeof e !== "string") {
                    i = t;
                    t = e;
                    e = undefined
                }
                if (t && e !== false) {
                    this.queue(e || "fx", [])
                }
                return this.each(function () {
                    var t = true,
                        s = e != null && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (s) {
                        if (a[s] && a[s].stop) {
                            n(a[s])
                        }
                    } else {
                        for (s in a) {
                            if (a[s] && a[s].stop && ot.test(s)) {
                                n(a[s])
                            }
                        }
                    }
                    for (s = o.length; s--;) {
                        if (o[s].elem === this && (e == null || o[s].queue === e)) {
                            o[s].anim.stop(i);
                            t = false;
                            o.splice(s, 1)
                        }
                    }
                    if (t || !i) {
                        w.dequeue(this, e)
                    }
                })
            },
            finish: function (e) {
                if (e !== false) {
                    e = e || "fx"
                }
                return this.each(function () {
                    var t, i = J.get(this),
                        n = i[e + "queue"],
                        s = i[e + "queueHooks"],
                        o = w.timers,
                        a = n ? n.length : 0;
                    i.finish = true;
                    w.queue(this, e, []);
                    if (s && s.stop) {
                        s.stop.call(this, true)
                    }
                    for (t = o.length; t--;) {
                        if (o[t].elem === this && o[t].queue === e) {
                            o[t].anim.stop(true);
                            o.splice(t, 1)
                        }
                    }
                    for (t = 0; t < a; t++) {
                        if (n[t] && n[t].finish) {
                            n[t].finish.call(this)
                        }
                    }
                    delete i.finish
                })
            }
        });
        w.each(["toggle", "show", "hide"], function (e, t) {
            var i = w.fn[t];
            w.fn[t] = function (e, n, s) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(lt(t, true), e, n, s)
            }
        });
        w.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        });
        w.timers = [];
        w.fx.tick = function () {
            var e, t = 0,
                i = w.timers;
            it = w.now();
            for (; t < i.length; t++) {
                e = i[t];
                if (!e() && i[t] === e) {
                    i.splice(t--, 1)
                }
            }
            if (!i.length) {
                w.fx.stop()
            }
            it = undefined
        };
        w.fx.timer = function (e) {
            w.timers.push(e);
            if (e()) {
                w.fx.start()
            } else {
                w.timers.pop()
            }
        };
        w.fx.interval = 13;
        w.fx.start = function () {
            if (!nt) {
                nt = i.requestAnimationFrame ? i.requestAnimationFrame(at) : i.setInterval(w.fx.tick, w.fx.interval)
            }
        };
        w.fx.stop = function () {
            if (i.cancelAnimationFrame) {
                i.cancelAnimationFrame(nt)
            } else {
                i.clearInterval(nt)
            }
            nt = null
        };
        w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        w.fn.delay = function (e, t) {
            e = w.fx ? w.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function (t, n) {
                var s = i.setTimeout(t, e);
                n.stop = function () {
                    i.clearTimeout(s)
                }
            })
        };
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select"),
                i = t.appendChild(r.createElement("option"));
            e.type = "checkbox";
            _.checkOn = e.value !== "";
            _.optSelected = i.selected;
            e = r.createElement("input");
            e.value = "t";
            e.type = "radio";
            _.radioValue = e.value === "t"
        })();
        var ft, pt = w.expr.attrHandle;
        w.fn.extend({
            attr: function (e, t) {
                return X(this, w.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    w.removeAttr(this, e)
                })
            }
        });
        w.extend({
            attr: function (e, t, i) {
                var n, s, o = e.nodeType;
                if (o === 3 || o === 8 || o === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return w.prop(e, t, i)
                }
                if (o !== 1 || !w.isXMLDoc(e)) {
                    s = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ft : undefined)
                }
                if (i !== undefined) {
                    if (i === null) {
                        w.removeAttr(e, t);
                        return
                    }
                    if (s && "set" in s && (n = s.set(e, i, t)) !== undefined) {
                        return n
                    }
                    e.setAttribute(t, i + "");
                    return i
                }
                if (s && "get" in s && (n = s.get(e, t)) !== null) {
                    return n
                }
                n = w.find.attr(e, t);
                return n == null ? undefined : n
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!_.radioValue && t === "radio" && w.nodeName(e, "input")) {
                            var i = e.value;
                            e.setAttribute("type", t);
                            if (i) {
                                e.value = i
                            }
                            return t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var i, n = 0,
                    s = t && t.match(B);
                if (s && e.nodeType === 1) {
                    while (i = s[n++]) {
                        e.removeAttribute(i)
                    }
                }
            }
        });
        ft = {
            set: function (e, t, i) {
                if (t === false) {
                    w.removeAttr(e, i)
                } else {
                    e.setAttribute(i, i)
                }
                return i
            }
        };
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var i = pt[t] || w.find.attr;
            pt[t] = function (e, t, n) {
                var s, o, a = t.toLowerCase();
                if (!n) {
                    o = pt[a];
                    pt[a] = s;
                    s = i(e, t, n) != null ? a : null;
                    pt[a] = o
                }
                return s
            }
        });
        var mt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
        w.fn.extend({
            prop: function (e, t) {
                return X(this, w.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[w.propFix[e] || e]
                })
            }
        });
        w.extend({
            prop: function (e, t, i) {
                var n, s, o = e.nodeType;
                if (o === 3 || o === 8 || o === 2) {
                    return
                }
                if (o !== 1 || !w.isXMLDoc(e)) {
                    t = w.propFix[t] || t;
                    s = w.propHooks[t]
                }
                if (i !== undefined) {
                    if (s && "set" in s && (n = s.set(e, i, t)) !== undefined) {
                        return n
                    }
                    return e[t] = i
                }
                if (s && "get" in s && (n = s.get(e, t)) !== null) {
                    return n
                }
                return e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (mt.test(e.nodeName) || gt.test(e.nodeName) && e.href) {
                            return 0
                        }
                        return -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!_.optSelected) {
            w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                },
                set: function (e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this
        });

        function vt(e) {
            var t = e.match(B) || [];
            return t.join(" ")
        }

        function _t(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        w.fn.extend({
            addClass: function (e) {
                var t, i, n, s, o, a, r, l = 0;
                if (w.isFunction(e)) {
                    return this.each(function (t) {
                        w(this).addClass(e.call(this, t, _t(this)))
                    })
                }
                if (typeof e === "string" && e) {
                    t = e.match(B) || [];
                    while (i = this[l++]) {
                        s = _t(i);
                        n = i.nodeType === 1 && " " + vt(s) + " ";
                        if (n) {
                            a = 0;
                            while (o = t[a++]) {
                                if (n.indexOf(" " + o + " ") < 0) {
                                    n += o + " "
                                }
                            }
                            r = vt(n);
                            if (s !== r) {
                                i.setAttribute("class", r)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function (e) {
                var t, i, n, s, o, a, r, l = 0;
                if (w.isFunction(e)) {
                    return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, _t(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof e === "string" && e) {
                    t = e.match(B) || [];
                    while (i = this[l++]) {
                        s = _t(i);
                        n = i.nodeType === 1 && " " + vt(s) + " ";
                        if (n) {
                            a = 0;
                            while (o = t[a++]) {
                                while (n.indexOf(" " + o + " ") > -1) {
                                    n = n.replace(" " + o + " ", " ")
                                }
                            }
                            r = vt(n);
                            if (s !== r) {
                                i.setAttribute("class", r)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function (e, t) {
                var i = typeof e;
                if (typeof t === "boolean" && i === "string") {
                    return t ? this.addClass(e) : this.removeClass(e)
                }
                if (w.isFunction(e)) {
                    return this.each(function (i) {
                        w(this).toggleClass(e.call(this, i, _t(this), t), t)
                    })
                }
                return this.each(function () {
                    var t, n, s, o;
                    if (i === "string") {
                        n = 0;
                        s = w(this);
                        o = e.match(B) || [];
                        while (t = o[n++]) {
                            if (s.hasClass(t)) {
                                s.removeClass(t)
                            } else {
                                s.addClass(t)
                            }
                        }
                    } else if (e === undefined || i === "boolean") {
                        t = _t(this);
                        if (t) {
                            J.set(this, "__className__", t)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", t || e === false ? "" : J.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function (e) {
                var t, i, n = 0;
                t = " " + e + " ";
                while (i = this[n++]) {
                    if (i.nodeType === 1 && (" " + vt(_t(i)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var bt = /\r/g;
        w.fn.extend({
            val: function (e) {
                var t, i, n, s = this[0];
                if (!arguments.length) {
                    if (s) {
                        t = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()];
                        if (t && "get" in t && (i = t.get(s, "value")) !== undefined) {
                            return i
                        }
                        i = s.value;
                        if (typeof i === "string") {
                            return i.replace(bt, "")
                        }
                        return i == null ? "" : i
                    }
                    return
                }
                n = w.isFunction(e);
                return this.each(function (i) {
                    var s;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (n) {
                        s = e.call(this, i, w(this).val())
                    } else {
                        s = e
                    }
                    if (s == null) {
                        s = ""
                    } else if (typeof s === "number") {
                        s += ""
                    } else if (w.isArray(s)) {
                        s = w.map(s, function (e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                    if (!t || !("set" in t) || t.set(this, s, "value") === undefined) {
                        this.value = s
                    }
                })
            }
        });
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return t != null ? t : vt(w.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, i, n, s = e.options,
                            o = e.selectedIndex,
                            a = e.type === "select-one",
                            r = a ? null : [],
                            l = a ? o + 1 : s.length;
                        if (o < 0) {
                            n = l
                        } else {
                            n = a ? o : 0
                        }
                        for (; n < l; n++) {
                            i = s[n];
                            if ((i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !w.nodeName(i.parentNode, "optgroup"))) {
                                t = w(i).val();
                                if (a) {
                                    return t
                                }
                                r.push(t)
                            }
                        }
                        return r
                    },
                    set: function (e, t) {
                        var i, n, s = e.options,
                            o = w.makeArray(t),
                            a = s.length;
                        while (a--) {
                            n = s[a];
                            if (n.selected = w.inArray(w.valHooks.option.get(n), o) > -1) {
                                i = true
                            }
                        }
                        if (!i) {
                            e.selectedIndex = -1
                        }
                        return o
                    }
                }
            }
        });
        w.each(["radio", "checkbox"], function () {
            w.valHooks[this] = {
                set: function (e, t) {
                    if (w.isArray(t)) {
                        return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }
            };
            if (!_.checkOn) {
                w.valHooks[this].get = function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var yt = /^(?:focusinfocus|focusoutblur)$/;
        w.extend(w.event, {
            trigger: function (e, t, n, s) {
                var o, a, l, h, u, c, d, f = [n || r],
                    p = m.call(e, "type") ? e.type : e,
                    g = m.call(e, "namespace") ? e.namespace.split(".") : [];
                a = l = n = n || r;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (yt.test(p + w.event.triggered)) {
                    return
                }
                if (p.indexOf(".") > -1) {
                    g = p.split(".");
                    p = g.shift();
                    g.sort()
                }
                u = p.indexOf(":") < 0 && "on" + p;
                e = e[w.expando] ? e : new w.Event(p, typeof e === "object" && e);
                e.isTrigger = s ? 2 : 3;
                e.namespace = g.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : w.makeArray(t, [e]);
                d = w.event.special[p] || {};
                if (!s && d.trigger && d.trigger.apply(n, t) === false) {
                    return
                }
                if (!s && !d.noBubble && !w.isWindow(n)) {
                    h = d.delegateType || p;
                    if (!yt.test(h + p)) {
                        a = a.parentNode
                    }
                    for (; a; a = a.parentNode) {
                        f.push(a);
                        l = a
                    }
                    if (l === (n.ownerDocument || r)) {
                        f.push(l.defaultView || l.parentWindow || i)
                    }
                }
                o = 0;
                while ((a = f[o++]) && !e.isPropagationStopped()) {
                    e.type = o > 1 ? h : d.bindType || p;
                    c = (J.get(a, "events") || {})[e.type] && J.get(a, "handle");
                    if (c) {
                        c.apply(a, t)
                    }
                    c = u && a[u];
                    if (c && c.apply && G(a)) {
                        e.result = c.apply(a, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = p;
                if (!s && !e.isDefaultPrevented()) {
                    if ((!d._default || d._default.apply(f.pop(), t) === false) && G(n)) {
                        if (u && w.isFunction(n[p]) && !w.isWindow(n)) {
                            l = n[u];
                            if (l) {
                                n[u] = null
                            }
                            w.event.triggered = p;
                            n[p]();
                            w.event.triggered = undefined;
                            if (l) {
                                n[u] = l
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function (e, t, i) {
                var n = w.extend(new w.Event, i, {
                    type: e,
                    isSimulated: true
                });
                w.event.trigger(n, null, t)
            }
        });
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var i = this[0];
                if (i) {
                    return w.event.trigger(e, t, i, true)
                }
            }
        });
        w.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (e, t) {
            w.fn[t] = function (e, i) {
                return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
            }
        });
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        _.focusin = "onfocusin" in i;
        if (!_.focusin) {
            w.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var i = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function () {
                        var n = this.ownerDocument || this,
                            s = J.access(n, t);
                        if (!s) {
                            n.addEventListener(e, i, true)
                        }
                        J.access(n, t, (s || 0) + 1)
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this,
                            s = J.access(n, t) - 1;
                        if (!s) {
                            n.removeEventListener(e, i, true);
                            J.remove(n, t)
                        } else {
                            J.access(n, t, s)
                        }
                    }
                }
            })
        }
        var wt = i.location;
        var xt = w.now();
        var Ct = /\?/;
        w.parseXML = function (e) {
            var t;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                t = (new i.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                w.error("Invalid XML: " + e)
            }
            return t
        };
        var kt = /\[\]$/,
            Tt = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            It = /^(?:input|select|textarea|keygen)/i;

        function St(e, t, i, n) {
            var s;
            if (w.isArray(t)) {
                w.each(t, function (t, s) {
                    if (i || kt.test(e)) {
                        n(e, s)
                    } else {
                        St(e + "[" + (typeof s === "object" && s != null ? t : "") + "]", s, i, n)
                    }
                })
            } else if (!i && w.type(t) === "object") {
                for (s in t) {
                    St(e + "[" + s + "]", t[s], i, n)
                }
            } else {
                n(e, t)
            }
        }
        w.param = function (e, t) {
            var i, n = [],
                s = function (e, t) {
                    var i = w.isFunction(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(i == null ? "" : i)
                };
            if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) {
                w.each(e, function () {
                    s(this.name, this.value)
                })
            } else {
                for (i in e) {
                    St(i, e[i], t, s)
                }
            }
            return n.join("&")
        };
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !w(this).is(":disabled") && It.test(this.nodeName) && !Dt.test(e) && (this.checked || !fe.test(e))
                }).map(function (e, t) {
                    var i = w(this).val();
                    if (i == null) {
                        return null
                    }
                    if (w.isArray(i)) {
                        return w.map(i, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Tt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: i.replace(Tt, "\r\n")
                    }
                }).get()
            }
        });
        var Nt = /%20/g,
            Pt = /#.*$/,
            Et = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            At = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ot = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            Lt = {},
            Wt = {},
            zt = "*/".concat("*"),
            Ft = r.createElement("a");
        Ft.href = wt.href;

        function Bt(e) {
            return function (t, i) {
                if (typeof t !== "string") {
                    i = t;
                    t = "*"
                }
                var n, s = 0,
                    o = t.toLowerCase().match(B) || [];
                if (w.isFunction(i)) {
                    while (n = o[s++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (e[n] = e[n] || []).unshift(i)
                        } else {
                            (e[n] = e[n] || []).push(i)
                        }
                    }
                }
            }
        }

        function Rt(e, t, i, n) {
            var s = {},
                o = e === Wt;

            function a(r) {
                var l;
                s[r] = true;
                w.each(e[r] || [], function (e, r) {
                    var h = r(t, i, n);
                    if (typeof h === "string" && !o && !s[h]) {
                        t.dataTypes.unshift(h);
                        a(h);
                        return false
                    } else if (o) {
                        return !(l = h)
                    }
                });
                return l
            }
            return a(t.dataTypes[0]) || !s["*"] && a("*")
        }

        function jt(e, t) {
            var i, n, s = w.ajaxSettings.flatOptions || {};
            for (i in t) {
                if (t[i] !== undefined) {
                    (s[i] ? e : n || (n = {}))[i] = t[i]
                }
            }
            if (n) {
                w.extend(true, e, n)
            }
            return e
        }

        function qt(e, t, i) {
            var n, s, o, a, r = e.contents,
                l = e.dataTypes;
            while (l[0] === "*") {
                l.shift();
                if (n === undefined) {
                    n = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (n) {
                for (s in r) {
                    if (r[s] && r[s].test(n)) {
                        l.unshift(s);
                        break
                    }
                }
            }
            if (l[0] in i) {
                o = l[0]
            } else {
                for (s in i) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    if (!a) {
                        a = s
                    }
                }
                o = o || a
            }
            if (o) {
                if (o !== l[0]) {
                    l.unshift(o)
                }
                return i[o]
            }
        }

        function Yt(e, t, i, n) {
            var s, o, a, r, l, h = {},
                u = e.dataTypes.slice();
            if (u[1]) {
                for (a in e.converters) {
                    h[a.toLowerCase()] = e.converters[a]
                }
            }
            o = u.shift();
            while (o) {
                if (e.responseFields[o]) {
                    i[e.responseFields[o]] = t
                }
                if (!l && n && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                l = o;
                o = u.shift();
                if (o) {
                    if (o === "*") {
                        o = l
                    } else if (l !== "*" && l !== o) {
                        a = h[l + " " + o] || h["* " + o];
                        if (!a) {
                            for (s in h) {
                                r = s.split(" ");
                                if (r[1] === o) {
                                    a = h[l + " " + r[0]] || h["* " + r[0]];
                                    if (a) {
                                        if (a === true) {
                                            a = h[s]
                                        } else if (h[s] !== true) {
                                            o = r[0];
                                            u.unshift(r[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (a !== true) {
                            if (a && e.throws) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: At.test(wt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
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
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function (e, t) {
                return t ? jt(jt(e, w.ajaxSettings), t) : jt(w.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(Lt),
            ajaxTransport: Bt(Wt),
            ajax: function (e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var n, s, o, a, l, h, u, c, d, f, p = w.ajaxSetup({}, t),
                    m = p.context || p,
                    g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                    v = w.Deferred(),
                    _ = w.Callbacks("once memory"),
                    b = p.statusCode || {},
                    y = {},
                    x = {},
                    C = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a) {
                                    a = {};
                                    while (t = Mt.exec(o)) {
                                        a[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = a[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return u ? o : null
                        },
                        setRequestHeader: function (e, t) {
                            if (u == null) {
                                e = x[e.toLowerCase()] = x[e.toLowerCase()] || e;
                                y[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function (e) {
                            if (u == null) {
                                p.mimeType = e
                            }
                            return this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e) {
                                if (u) {
                                    k.always(e[k.status])
                                } else {
                                    for (t in e) {
                                        b[t] = [b[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function (e) {
                            var t = e || C;
                            if (n) {
                                n.abort(t)
                            }
                            T(0, t);
                            return this
                        }
                    };
                v.promise(k);
                p.url = ((e || p.url || wt.href) + "").replace(Ht, wt.protocol + "//");
                p.type = t.method || t.type || p.method || p.type;
                p.dataTypes = (p.dataType || "*").toLowerCase().match(B) || [""];
                if (p.crossDomain == null) {
                    h = r.createElement("a");
                    try {
                        h.href = p.url;
                        h.href = h.href;
                        p.crossDomain = Ft.protocol + "//" + Ft.host !== h.protocol + "//" + h.host
                    } catch (e) {
                        p.crossDomain = true
                    }
                }
                if (p.data && p.processData && typeof p.data !== "string") {
                    p.data = w.param(p.data, p.traditional)
                }
                Rt(Lt, p, t, k);
                if (u) {
                    return k
                }
                c = w.event && p.global;
                if (c && w.active++ === 0) {
                    w.event.trigger("ajaxStart")
                }
                p.type = p.type.toUpperCase();
                p.hasContent = !Ot.test(p.type);
                s = p.url.replace(Pt, "");
                if (!p.hasContent) {
                    f = p.url.slice(s.length);
                    if (p.data) {
                        s += (Ct.test(s) ? "&" : "?") + p.data;
                        delete p.data
                    }
                    if (p.cache === false) {
                        s = s.replace(Et, "$1");
                        f = (Ct.test(s) ? "&" : "?") + "_=" + xt++ + f
                    }
                    p.url = s + f
                } else if (p.data && p.processData && (p.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    p.data = p.data.replace(Nt, "+")
                }
                if (p.ifModified) {
                    if (w.lastModified[s]) {
                        k.setRequestHeader("If-Modified-Since", w.lastModified[s])
                    }
                    if (w.etag[s]) {
                        k.setRequestHeader("If-None-Match", w.etag[s])
                    }
                }
                if (p.data && p.hasContent && p.contentType !== false || t.contentType) {
                    k.setRequestHeader("Content-Type", p.contentType)
                }
                k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== "*" ? ", " + zt + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) {
                    k.setRequestHeader(d, p.headers[d])
                }
                if (p.beforeSend && (p.beforeSend.call(m, k, p) === false || u)) {
                    return k.abort()
                }
                C = "abort";
                _.add(p.complete);
                k.done(p.success);
                k.fail(p.error);
                n = Rt(Wt, p, t, k);
                if (!n) {
                    T(-1, "No Transport")
                } else {
                    k.readyState = 1;
                    if (c) {
                        g.trigger("ajaxSend", [k, p])
                    }
                    if (u) {
                        return k
                    }
                    if (p.async && p.timeout > 0) {
                        l = i.setTimeout(function () {
                            k.abort("timeout")
                        }, p.timeout)
                    }
                    try {
                        u = false;
                        n.send(y, T)
                    } catch (e) {
                        if (u) {
                            throw e
                        }
                        T(-1, e)
                    }
                }

                function T(e, t, a, r) {
                    var h, d, f, y, x, C = t;
                    if (u) {
                        return
                    }
                    u = true;
                    if (l) {
                        i.clearTimeout(l)
                    }
                    n = undefined;
                    o = r || "";
                    k.readyState = e > 0 ? 4 : 0;
                    h = e >= 200 && e < 300 || e === 304;
                    if (a) {
                        y = qt(p, k, a)
                    }
                    y = Yt(p, y, k, h);
                    if (h) {
                        if (p.ifModified) {
                            x = k.getResponseHeader("Last-Modified");
                            if (x) {
                                w.lastModified[s] = x
                            }
                            x = k.getResponseHeader("etag");
                            if (x) {
                                w.etag[s] = x
                            }
                        }
                        if (e === 204 || p.type === "HEAD") {
                            C = "nocontent"
                        } else if (e === 304) {
                            C = "notmodified"
                        } else {
                            C = y.state;
                            d = y.data;
                            f = y.error;
                            h = !f
                        }
                    } else {
                        f = C;
                        if (e || !C) {
                            C = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    k.status = e;
                    k.statusText = (t || C) + "";
                    if (h) {
                        v.resolveWith(m, [d, C, k])
                    } else {
                        v.rejectWith(m, [k, C, f])
                    }
                    k.statusCode(b);
                    b = undefined;
                    if (c) {
                        g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, p, h ? d : f])
                    }
                    _.fireWith(m, [k, C]);
                    if (c) {
                        g.trigger("ajaxComplete", [k, p]);
                        if (!--w.active) {
                            w.event.trigger("ajaxStop")
                        }
                    }
                }
                return k
            },
            getJSON: function (e, t, i) {
                return w.get(e, t, i, "json")
            },
            getScript: function (e, t) {
                return w.get(e, undefined, t, "script")
            }
        });
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, i, n, s) {
                if (w.isFunction(i)) {
                    s = s || n;
                    n = i;
                    i = undefined
                }
                return w.ajax(w.extend({
                    url: e,
                    type: t,
                    dataType: s,
                    data: i,
                    success: n
                }, w.isPlainObject(e) && e))
            }
        });
        w._evalUrl = function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                if (this[0]) {
                    if (w.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = w(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function () {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                if (w.isFunction(e)) {
                    return this.each(function (t) {
                        w(this).wrapInner(e.call(this, t))
                    })
                }
                return this.each(function () {
                    var t = w(this),
                        i = t.contents();
                    if (i.length) {
                        i.wrapAll(e)
                    } else {
                        t.append(e)
                    }
                })
            },
            wrap: function (e) {
                var t = w.isFunction(e);
                return this.each(function (i) {
                    w(this).wrapAll(t ? e.call(this, i) : e)
                })
            },
            unwrap: function (e) {
                this.parent(e).not("body").each(function () {
                    w(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e)
        };
        w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        w.ajaxSettings.xhr = function () {
            try {
                return new i.XMLHttpRequest
            } catch (e) {}
        };
        var Vt = {
                0: 200,
                1223: 204
            },
            $t = w.ajaxSettings.xhr();
        _.cors = !!$t && "withCredentials" in $t;
        _.ajax = $t = !!$t;
        w.ajaxTransport(function (e) {
            var t, n;
            if (_.cors || $t && !e.crossDomain) {
                return {
                    send: function (s, o) {
                        var a, r = e.xhr();
                        r.open(e.type, e.url, e.async, e.username, e.password);
                        if (e.xhrFields) {
                            for (a in e.xhrFields) {
                                r[a] = e.xhrFields[a]
                            }
                        }
                        if (e.mimeType && r.overrideMimeType) {
                            r.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !s["X-Requested-With"]) {
                            s["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (a in s) {
                            r.setRequestHeader(a, s[a])
                        }
                        t = function (e) {
                            return function () {
                                if (t) {
                                    t = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
                                    if (e === "abort") {
                                        r.abort()
                                    } else if (e === "error") {
                                        if (typeof r.status !== "number") {
                                            o(0, "error")
                                        } else {
                                            o(r.status, r.statusText)
                                        }
                                    } else {
                                        o(Vt[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        r.onload = t();
                        n = r.onerror = t("error");
                        if (r.onabort !== undefined) {
                            r.onabort = n
                        } else {
                            r.onreadystatechange = function () {
                                if (r.readyState === 4) {
                                    i.setTimeout(function () {
                                        if (t) {
                                            n()
                                        }
                                    })
                                }
                            }
                        }
                        t = t("abort");
                        try {
                            r.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) {
                                throw e
                            }
                        }
                    },
                    abort: function () {
                        if (t) {
                            t()
                        }
                    }
                }
            }
        });
        w.ajaxPrefilter(function (e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    w.globalEval(e);
                    return e
                }
            }
        });
        w.ajaxPrefilter("script", function (e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, i;
                return {
                    send: function (n, s) {
                        t = w("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", i = function (e) {
                            t.remove();
                            i = null;
                            if (e) {
                                s(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        r.head.appendChild(t[0])
                    },
                    abort: function () {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        var Ut = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ut.pop() || w.expando + "_" + xt++;
                this[e] = true;
                return e
            }
        });
        w.ajaxPrefilter("json jsonp", function (e, t, n) {
            var s, o, a, r = e.jsonp !== false && (Kt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Kt.test(e.data) && "data");
            if (r || e.dataTypes[0] === "jsonp") {
                s = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (r) {
                    e[r] = e[r].replace(Kt, "$1" + s)
                } else if (e.jsonp !== false) {
                    e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + s
                }
                e.converters["script json"] = function () {
                    if (!a) {
                        w.error(s + " was not called")
                    }
                    return a[0]
                };
                e.dataTypes[0] = "json";
                o = i[s];
                i[s] = function () {
                    a = arguments
                };
                n.always(function () {
                    if (o === undefined) {
                        w(i).removeProp(s)
                    } else {
                        i[s] = o
                    }
                    if (e[s]) {
                        e.jsonpCallback = t.jsonpCallback;
                        Ut.push(s)
                    }
                    if (a && w.isFunction(o)) {
                        o(a[0])
                    }
                    a = o = undefined
                });
                return "script"
            }
        });
        _.createHTMLDocument = function () {
            var e = r.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        w.parseHTML = function (e, t, i) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                i = t;
                t = false
            }
            var n, s, o;
            if (!t) {
                if (_.createHTMLDocument) {
                    t = r.implementation.createHTMLDocument("");
                    n = t.createElement("base");
                    n.href = r.location.href;
                    t.head.appendChild(n)
                } else {
                    t = r
                }
            }
            s = E.exec(e);
            o = !i && [];
            if (s) {
                return [t.createElement(s[1])]
            }
            s = ye([e], t, o);
            if (o && o.length) {
                w(o).remove()
            }
            return w.merge([], s.childNodes)
        };
        w.fn.load = function (e, t, i) {
            var n, s, o, a = this,
                r = e.indexOf(" ");
            if (r > -1) {
                n = vt(e.slice(r));
                e = e.slice(0, r)
            }
            if (w.isFunction(t)) {
                i = t;
                t = undefined
            } else if (t && typeof t === "object") {
                s = "POST"
            }
            if (a.length > 0) {
                w.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments;
                    a.html(n ? w("<div>").append(w.parseHTML(e)).find(n) : e)
                }).always(i && function (e, t) {
                    a.each(function () {
                        i.apply(this, o || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e)
            }
        });
        w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem
            }).length
        };

        function Xt(e) {
            return w.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        w.offset = {
            setOffset: function (e, t, i) {
                var n, s, o, a, r, l, h, u = w.css(e, "position"),
                    c = w(e),
                    d = {};
                if (u === "static") {
                    e.style.position = "relative"
                }
                r = c.offset();
                o = w.css(e, "top");
                l = w.css(e, "left");
                h = (u === "absolute" || u === "fixed") && (o + l).indexOf("auto") > -1;
                if (h) {
                    n = c.position();
                    a = n.top;
                    s = n.left
                } else {
                    a = parseFloat(o) || 0;
                    s = parseFloat(l) || 0
                }
                if (w.isFunction(t)) {
                    t = t.call(e, i, w.extend({}, r))
                }
                if (t.top != null) {
                    d.top = t.top - r.top + a
                }
                if (t.left != null) {
                    d.left = t.left - r.left + s
                }
                if ("using" in t) {
                    t.using.call(e, d)
                } else {
                    c.css(d)
                }
            }
        };
        w.fn.extend({
            offset: function (e) {
                if (arguments.length) {
                    return e === undefined ? this : this.each(function (t) {
                        w.offset.setOffset(this, e, t)
                    })
                }
                var t, i, n, s, o = this[0];
                if (!o) {
                    return
                }
                if (!o.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                n = o.getBoundingClientRect();
                if (n.width || n.height) {
                    s = o.ownerDocument;
                    i = Xt(s);
                    t = s.documentElement;
                    return {
                        top: n.top + i.pageYOffset - t.clientTop,
                        left: n.left + i.pageXOffset - t.clientLeft
                    }
                }
                return n
            },
            position: function () {
                if (!this[0]) {
                    return
                }
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                if (w.css(i, "position") === "fixed") {
                    t = i.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!w.nodeName(e[0], "html")) {
                        n = e.offset()
                    }
                    n = {
                        top: n.top + w.css(e[0], "borderTopWidth", true),
                        left: n.left + w.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - n.top - w.css(i, "marginTop", true),
                    left: t.left - n.left - w.css(i, "marginLeft", true)
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && w.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || we
                })
            }
        });
        w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var i = "pageYOffset" === t;
            w.fn[e] = function (n) {
                return X(this, function (e, n, s) {
                    var o = Xt(e);
                    if (s === undefined) {
                        return o ? o[t] : e[n]
                    }
                    if (o) {
                        o.scrollTo(!i ? s : o.pageXOffset, i ? s : o.pageYOffset)
                    } else {
                        e[n] = s
                    }
                }, e, n, arguments.length)
            }
        });
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = Ve(_.pixelPosition, function (e, i) {
                if (i) {
                    i = Ye(e, t);
                    return je.test(i) ? w(e).position()[t] + "px" : i
                }
            })
        });
        w.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            w.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (i, n) {
                w.fn[n] = function (s, o) {
                    var a = arguments.length && (i || typeof s !== "boolean"),
                        r = i || (s === true || o === true ? "margin" : "border");
                    return X(this, function (t, i, s) {
                        var o;
                        if (w.isWindow(t)) {
                            return n.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e]
                        }
                        if (t.nodeType === 9) {
                            o = t.documentElement;
                            return Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])
                        }
                        return s === undefined ? w.css(t, i, r) : w.style(t, i, s, r)
                    }, t, a ? s : undefined, a)
                }
            })
        });
        w.fn.extend({
            bind: function (e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function (e, t, i) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", i)
            }
        });
        w.parseJSON = JSON.parse;
        if (true) {
            !(n = [], s = function () {
                return w
            }.apply(t, n), s !== undefined && (e.exports = s))
        }
        var Gt = i.jQuery,
            Qt = i.$;
        w.noConflict = function (e) {
            if (i.$ === w) {
                i.$ = Qt
            }
            if (e && i.jQuery === w) {
                i.jQuery = Gt
            }
            return w
        };
        if (!o) {
            i.jQuery = i.$ = w
        }
        return w
    })
}, , , , , , function (e, t, i) {
    (function (e) {
        ! function (e, t, i, n) {
            "use strict";
            var s = i("html"),
                o = i(e),
                a = i(t),
                r = i.fancybox = function () {
                    r.open.apply(this, arguments)
                },
                l = navigator.userAgent.match(/msie/i),
                h = null,
                u = t.createTouch !== n,
                c = function (e) {
                    return e && e.hasOwnProperty && e instanceof i
                },
                d = function (e) {
                    return e && "string" === i.type(e)
                },
                f = function (e) {
                    return d(e) && e.indexOf("%") > 0
                },
                p = function (e) {
                    return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
                },
                m = function (e, t) {
                    var i = parseInt(e, 10) || 0;
                    return t && f(e) && (i = r.getViewport()[t] / 100 * i), Math.ceil(i)
                },
                g = function (e, t) {
                    return m(e, t) + "px"
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
                    autoCenter: !u,
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
                open: function (e, t) {
                    return e && (i.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (i.isArray(e) || (e = c(e) ? i(e).get() : [e]), i.each(e, function (s, o) {
                        var a, l, h, u, f, p, m, g = {};
                        "object" === i.type(o) && (o.nodeType && (o = i(o)), c(o) ? (g = {
                            href: o.data("fancybox-href") || o.attr("href"),
                            title: o.data("fancybox-title") || o.attr("title"),
                            isDom: !0,
                            element: o
                        }, i.metadata && i.extend(!0, g, o.metadata())) : g = o), a = t.href || g.href || (d(o) ? o : null), l = t.title !== n ? t.title : g.title || "", h = t.content || g.content, u = h ? "html" : t.type || g.type, !u && g.isDom && (u = o.data("fancybox-type"), u || (f = o.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), d(a) && (u || (r.isImage(a) ? u = "image" : r.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : d(o) && (u = "html", h = o)), "ajax" === u && (p = a.split(/\s+/, 2), a = p.shift(), m = p.shift())), h || ("inline" === u ? a ? h = i(d(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : g.isDom && (h = o) : "html" === u ? h = a : u || a || !g.isDom || (u = "inline", h = o)), i.extend(g, {
                            href: a,
                            type: u,
                            content: h,
                            title: l,
                            selector: m
                        }), e[s] = g
                    }), r.opts = i.extend(!0, {}, r.defaults, t), t.keys !== n && (r.opts.keys = t.keys ? i.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
                },
                cancel: function () {
                    var e = r.coming;
                    e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(e))
                },
                close: function (e) {
                    r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && e !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0,
                        i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
                },
                play: function (e) {
                    var t = function () {
                            clearTimeout(r.player.timer)
                        },
                        i = function () {
                            t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                        },
                        n = function () {
                            t(), a.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                        },
                        s = function () {
                            r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, a.bind({
                                "onCancel.player beforeClose.player": n,
                                "onUpdate.player": i,
                                "beforeLoad.player": t
                            }), i(), r.trigger("onPlayStart"))
                        };
                    e === !0 || !r.player.isActive && e !== !1 ? s() : n()
                },
                next: function (e) {
                    var t = r.current;
                    t && (d(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
                },
                prev: function (e) {
                    var t = r.current;
                    t && (d(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
                },
                jumpto: function (e, t, i) {
                    var s = r.current;
                    s && (e = m(e), r.direction = t || s.direction[e >= s.index ? "next" : "prev"], r.router = i || "jumpto", s.loop && (0 > e && (e = s.group.length + e % s.group.length), e %= s.group.length), s.group[e] !== n && (r.cancel(), r._start(e)))
                },
                reposition: function (e, t) {
                    var n, s = r.current,
                        o = s ? s.wrap : null;
                    o && (n = r._getPosition(t), e && "scroll" === e.type ? (delete n.position, o.stop(!0, !0).animate(n, 200)) : (o.css(n), s.pos = i.extend({}, s.dim, n)))
                },
                update: function (e) {
                    var t = e && e.type,
                        i = !t || "orientationchange" === t;
                    i && (clearTimeout(h), h = null), r.isOpen && !h && (h = setTimeout(function () {
                        var n = r.current;
                        n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), h = null)
                    }, i && !u ? 0 : 300))
                },
                toggle: function (e) {
                    r.isOpen && (r.current.fitToView = "boolean" === i.type(e) ? e : !r.current.fitToView, u && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
                },
                hideLoading: function () {
                    a.unbind(".loading"), i("#fancybox-loading").remove()
                },
                showLoading: function () {
                    var e, t;
                    r.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), a.bind("keydown.loading", function (e) {
                        27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
                    }), r.defaults.fixed || (t = r.getViewport(), e.css({
                        position: "absolute",
                        top: .5 * t.h + t.y,
                        left: .5 * t.w + t.x
                    }))
                },
                getViewport: function () {
                    var t = r.current && r.current.locked || !1,
                        i = {
                            x: o.scrollLeft(),
                            y: o.scrollTop()
                        };
                    return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = u && e.innerWidth ? e.innerWidth : o.width(), i.h = u && e.innerHeight ? e.innerHeight : o.height()), i
                },
                unbindEvents: function () {
                    r.wrap && c(r.wrap) && r.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
                },
                bindEvents: function () {
                    var e, t = r.current;
                    t && (o.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), r.update), e = t.keys, e && a.bind("keydown.fb", function (s) {
                        var o = s.which || s.keyCode,
                            a = s.target || s.srcElement;
                        return 27 === o && r.coming ? !1 : void(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || a && (a.type || i(a).is("[contenteditable]")) || i.each(e, function (e, a) {
                            return t.group.length > 1 && a[o] !== n ? (r[e](a[o]), s.preventDefault(), !1) : i.inArray(o, a) > -1 ? (r[e](), s.preventDefault(), !1) : void 0
                        }))
                    }), i.fn.mousewheel && t.mouseWheel && r.wrap.bind("mousewheel.fb", function (e, n, s, o) {
                        for (var a = e.target || null, l = i(a), h = !1; l.length && !(h || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) h = p(l[0]), l = i(l).parent();
                        0 === n || h || r.group.length > 1 && !t.canShrink && (o > 0 || s > 0 ? r.prev(o > 0 ? "down" : "left") : (0 > o || 0 > s) && r.next(0 > o ? "up" : "right"), e.preventDefault())
                    }))
                },
                trigger: function (e, t) {
                    var n, s = t || r.coming || r.current;
                    if (s) {
                        if (i.isFunction(s[e]) && (n = s[e].apply(s, Array.prototype.slice.call(arguments, 1))), n === !1) return !1;
                        s.helpers && i.each(s.helpers, function (t, n) {
                            n && r.helpers[t] && i.isFunction(r.helpers[t][e]) && r.helpers[t][e](i.extend(!0, {}, r.helpers[t].defaults, n), s)
                        }), a.trigger(e)
                    }
                },
                isImage: function (e) {
                    return d(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
                },
                isSWF: function (e) {
                    return d(e) && e.match(/\.(swf)((\?|#).*)?$/i)
                },
                _start: function (e) {
                    var t, n, s, o, a, l = {};
                    if (e = m(e), t = r.group[e] || null, !t) return !1;
                    if (l = i.extend(!0, {}, r.opts, t), o = l.margin, a = l.padding, "number" === i.type(o) && (l.margin = [o, o, o, o]), "number" === i.type(a) && (l.padding = [a, a, a, a]), l.modal && i.extend(!0, l, {
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
                        }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = e, r.coming = l, !1 === r.trigger("beforeLoad")) return void(r.coming = null);
                    if (s = l.type, n = l.href, !s) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
                    if (r.isActive = !0, ("image" === s || "swf" === s) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === s && (l.aspectRatio = !0), "iframe" === s && u && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {
                            skin: i(".fancybox-skin", l.wrap),
                            outer: i(".fancybox-outer", l.wrap),
                            inner: i(".fancybox-inner", l.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                            l.skin.css("padding" + t, g(l.padding[e]))
                        }), r.trigger("onReady"), "inline" === s || "html" === s) {
                        if (!l.content || !l.content.length) return r._error("content")
                    } else if (!n) return r._error("href");
                    "image" === s ? r._loadImage() : "ajax" === s ? r._loadAjax() : "iframe" === s ? r._loadIframe() : r._afterLoad()
                },
                _error: function (e) {
                    i.extend(r.coming, {
                        type: "html",
                        autoWidth: !0,
                        autoHeight: !0,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: "no",
                        hasError: e,
                        content: r.coming.tpl.error
                    }), r._afterLoad()
                },
                _loadImage: function () {
                    var e = r.imgPreload = new Image;
                    e.onload = function () {
                        this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                    }, e.onerror = function () {
                        this.onload = this.onerror = null, r._error("image")
                    }, e.src = r.coming.href, e.complete !== !0 && r.showLoading()
                },
                _loadAjax: function () {
                    var e = r.coming;
                    r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                        url: e.href,
                        error: function (e, t) {
                            r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
                        },
                        success: function (t, i) {
                            "success" === i && (e.content = t, r._afterLoad())
                        }
                    }))
                },
                _loadIframe: function () {
                    var e = r.coming,
                        t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
                    i(e.wrap).bind("onReset", function () {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                        } catch (e) {}
                    }), e.iframe.preload && (r.showLoading(), t.one("load", function () {
                        i(this).data("ready", 1), u || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
                    })), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
                },
                _preloadImages: function () {
                    var e, t, i = r.group,
                        n = r.current,
                        s = i.length,
                        o = n.preload ? Math.min(n.preload, s - 1) : 0;
                    for (t = 1; o >= t; t += 1) e = i[(n.index + t) % s], "image" === e.type && e.href && ((new Image).src = e.href)
                },
                _afterLoad: function () {
                    var e, t, n, s, o, a, l = r.coming,
                        h = r.current,
                        u = "fancybox-placeholder";
                    if (r.hideLoading(), l && r.isActive !== !1) {
                        if (!1 === r.trigger("afterLoad", l, h)) return l.wrap.stop(!0).trigger("onReset").remove(), void(r.coming = null);
                        switch (h && (r.trigger("beforeChange", h), h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), e = l, t = l.content, n = l.type, s = l.scrolling, i.extend(r, {
                            wrap: e.wrap,
                            skin: e.skin,
                            outer: e.outer,
                            inner: e.inner,
                            current: e,
                            previous: h
                        }), o = e.href, n) {
                            case "inline":
                            case "ajax":
                            case "html":
                                e.selector ? t = i("<div>").html(t).find(e.selector) : c(t) && (t.data(u) || t.data(u, i('<div class="' + u + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                                    i(this).find(t).length && t.hide().replaceAll(t.data(u)).data(u, !1)
                                }));
                                break;
                            case "image":
                                t = e.tpl.image.replace("{href}", o);
                                break;
                            case "swf":
                                t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", i.each(e.swf, function (e, i) {
                                    t += '<param name="' + e + '" value="' + i + '"></param>', a += " " + e + '="' + i + '"'
                                }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                        }
                        c(t) && t.parent().is(e.inner) || e.inner.append(t), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? h.prevMethod && r.transitions[h.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
                    }
                },
                _setDimension: function () {
                    var e, t, n, s, o, a, l, h, u, c, d, p, v, _, b, y = r.getViewport(),
                        w = 0,
                        x = !1,
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
                        A = I.maxHeight,
                        O = I.scrolling,
                        H = I.scrollOutside ? I.scrollbarWidth : 0,
                        L = I.margin,
                        W = m(L[1] + L[3]),
                        z = m(L[0] + L[2]);
                    if (k.add(T).add(D).width("auto").height("auto").removeClass("fancybox-tmp"), e = m(T.outerWidth(!0) - T.width()), t = m(T.outerHeight(!0) - T.height()), n = W + e, s = z + t, o = f(S) ? (y.w - n) * m(S) / 100 : S, a = f(N) ? (y.h - s) * m(N) / 100 : N, "iframe" === I.type) {
                        if (_ = I.content, I.autoHeight && 1 === _.data("ready")) try {
                            _[0].contentWindow.document.location && (D.width(o).height(9999), b = _.contents().find("body"), H && b.css("overflow-x", "hidden"), a = b.outerHeight(!0))
                        } catch (e) {}
                    } else(I.autoWidth || I.autoHeight) && (D.addClass("fancybox-tmp"), I.autoWidth || D.width(o), I.autoHeight || D.height(a), I.autoWidth && (o = D.width()), I.autoHeight && (a = D.height()), D.removeClass("fancybox-tmp"));
                    if (S = m(o), N = m(a), u = o / a, P = m(f(P) ? m(P, "w") - n : P), M = m(f(M) ? m(M, "w") - n : M), E = m(f(E) ? m(E, "h") - s : E), A = m(f(A) ? m(A, "h") - s : A), l = M, h = A, I.fitToView && (M = Math.min(y.w - n, M), A = Math.min(y.h - s, A)), p = y.w - W, v = y.h - z, I.aspectRatio ? (S > M && (S = M, N = m(S / u)), N > A && (N = A, S = m(N * u)), P > S && (S = P, N = m(S / u)), E > N && (N = E, S = m(N * u))) : (S = Math.max(P, Math.min(S, M)), I.autoHeight && "iframe" !== I.type && (D.width(S), N = D.height()), N = Math.max(E, Math.min(N, A))), I.fitToView)
                        if (D.width(S).height(N), k.width(S + e), c = k.width(), d = k.height(), I.aspectRatio)
                            for (;
                                (c > p || d > v) && S > P && N > E && !(w++ > 19);) N = Math.max(E, Math.min(A, N - 10)), S = m(N * u), P > S && (S = P, N = m(S / u)), S > M && (S = M, N = m(S / u)), D.width(S).height(N), k.width(S + e), c = k.width(), d = k.height();
                        else S = Math.max(P, Math.min(S, S - (c - p))), N = Math.max(E, Math.min(N, N - (d - v)));
                    H && "auto" === O && a > N && p > S + e + H && (S += H), D.width(S).height(N), k.width(S + e), c = k.width(), d = k.height(), x = (c > p || d > v) && S > P && N > E, C = I.aspectRatio ? l > S && h > N && o > S && a > N : (l > S || h > N) && (o > S || a > N), i.extend(I, {
                        dim: {
                            width: g(c),
                            height: g(d)
                        },
                        origWidth: o,
                        origHeight: a,
                        canShrink: x,
                        canExpand: C,
                        wPadding: e,
                        hPadding: t,
                        wrapSpace: d - T.outerHeight(!0),
                        skinSpace: T.height() - N
                    }), !_ && I.autoHeight && N > E && A > N && !C && D.height("auto")
                },
                _getPosition: function (e) {
                    var t = r.current,
                        i = r.getViewport(),
                        n = t.margin,
                        s = r.wrap.width() + n[1] + n[3],
                        o = r.wrap.height() + n[0] + n[2],
                        a = {
                            position: "absolute",
                            top: n[0],
                            left: n[3]
                        };
                    return t.autoCenter && t.fixed && !e && o <= i.h && s <= i.w ? a.position = "fixed" : t.locked || (a.top += i.y, a.left += i.x), a.top = g(Math.max(a.top, a.top + (i.h - o) * t.topRatio)), a.left = g(Math.max(a.left, a.left + (i.w - s) * t.leftRatio)), a
                },
                _afterZoomIn: function () {
                    var e = r.current;
                    e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (e.closeClick || e.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                        i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), r[e.closeClick ? "close" : "next"]())
                    }), e.closeBtn && i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function (e) {
                        e.preventDefault(), r.close()
                    }), e.arrows && r.group.length > 1 && ((e.loop || e.index > 0) && i(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && i(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
                },
                _afterZoomOut: function (e) {
                    e = e || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
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
                    }), r.trigger("afterClose", e)
                }
            }), r.transitions = {
                getOrigPosition: function () {
                    var e = r.current,
                        t = e.element,
                        i = e.orig,
                        n = {},
                        s = 50,
                        o = 50,
                        a = e.hPadding,
                        l = e.wPadding,
                        h = r.getViewport();
                    return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), c(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), o = i.outerHeight())) : (n.top = h.y + (h.h - o) * e.topRatio, n.left = h.x + (h.w - s) * e.leftRatio), ("fixed" === r.wrap.css("position") || e.locked) && (n.top -= h.y, n.left -= h.x), n = {
                        top: g(n.top - a * e.topRatio),
                        left: g(n.left - l * e.leftRatio),
                        width: g(s + l),
                        height: g(o + a)
                    }
                },
                step: function (e, t) {
                    var i, n, s, o = t.prop,
                        a = r.current,
                        l = a.wrapSpace,
                        h = a.skinSpace;
                    ("width" === o || "height" === o) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (i = 1 - i), n = "width" === o ? a.wPadding : a.hPadding, s = e - n, r.skin[o](m("width" === o ? s : s - l * i)), r.inner[o](m("width" === o ? s : s - l * i - h * i)))
                },
                zoomIn: function () {
                    var e = r.current,
                        t = e.pos,
                        n = e.openEffect,
                        s = "elastic" === n,
                        o = i.extend({
                            opacity: 1
                        }, t);
                    delete o.position, s ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), r.wrap.css(t).animate(o, {
                        duration: "none" === n ? 0 : e.openSpeed,
                        easing: e.openEasing,
                        step: s ? this.step : null,
                        complete: r._afterZoomIn
                    })
                },
                zoomOut: function () {
                    var e = r.current,
                        t = e.closeEffect,
                        i = "elastic" === t,
                        n = {
                            opacity: .1
                        };
                    i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                        duration: "none" === t ? 0 : e.closeSpeed,
                        easing: e.closeEasing,
                        step: i ? this.step : null,
                        complete: r._afterZoomOut
                    })
                },
                changeIn: function () {
                    var e, t = r.current,
                        i = t.nextEffect,
                        n = t.pos,
                        s = {
                            opacity: 1
                        },
                        o = r.direction,
                        a = 200;
                    n.opacity = .1, "elastic" === i && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (n[e] = g(m(n[e]) - a), s[e] = "+=" + a + "px") : (n[e] = g(m(n[e]) + a), s[e] = "-=" + a + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(s, {
                        duration: t.nextSpeed,
                        easing: t.nextEasing,
                        complete: r._afterZoomIn
                    })
                },
                changeOut: function () {
                    var e = r.previous,
                        t = e.prevEffect,
                        n = {
                            opacity: .1
                        },
                        s = r.direction,
                        o = 200;
                    "elastic" === t && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=" + o + "px"), e.wrap.animate(n, {
                        duration: "none" === t ? 0 : e.prevSpeed,
                        easing: e.prevEasing,
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
                    locked: !u,
                    fixed: !0
                },
                overlay: null,
                fixed: !1,
                el: i("html"),
                create: function (e) {
                    e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : e.parent), this.fixed = !1, e.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
                },
                open: function (e) {
                    var t = this;
                    e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (o.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                        return i(e.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : t.close(), !1) : void 0
                    }), this.overlay.css(e.css).show()
                },
                close: function () {
                    var e, t;
                    o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = o.scrollTop(), t = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                        overlay: null,
                        fixed: !1
                    })
                },
                update: function () {
                    var e, i = "100%";
                    this.overlay.width(i).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (i = a.width())) : a.width() > o.width() && (i = a.width()), this.overlay.width(i).height(a.height())
                },
                onReady: function (e, t) {
                    var n = this.overlay;
                    i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = a.height() > o.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function (e, t) {
                    var n, s;
                    t.locked && (this.margin !== !1 && (i("*").filter(function () {
                        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = o.scrollTop(), s = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(n).scrollLeft(s)), this.open(e)
                },
                onUpdate: function () {
                    this.fixed || this.update()
                },
                afterClose: function (e) {
                    this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
                }
            }, r.helpers.title = {
                defaults: {
                    type: "float",
                    position: "bottom"
                },
                beforeShow: function (e) {
                    var t, n, s = r.current,
                        o = s.title,
                        a = e.type;
                    if (i.isFunction(o) && (o = o.call(s.element, s)), d(o) && "" !== i.trim(o)) {
                        switch (t = i('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + o + "</div>"), a) {
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
                                n = r.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(m(t.css("margin-bottom")))
                        }
                        t["top" === e.position ? "prependTo" : "appendTo"](n)
                    }
                }
            }, i.fn.fancybox = function (e) {
                var t, n = i(this),
                    s = this.selector || "",
                    o = function (o) {
                        var a, l, h = i(this).blur(),
                            u = t;
                        o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || h.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = h.attr(a), l || (a = "rel", l = h.get(0)[a]), l && "" !== l && "nofollow" !== l && (h = s.length ? i(s) : n, h = h.filter("[" + a + '="' + l + '"]'), u = h.index(this)), e.index = u, r.open(h, e) !== !1 && o.preventDefault())
                    };
                return e = e || {}, t = e.index || 0, s && e.live !== !1 ? a.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : n.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
            }, a.ready(function () {
                var t, o;
                i.scrollbarWidth === n && (i.scrollbarWidth = function () {
                    var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        n = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), n
                }), i.support.fixedPosition === n && (i.support.fixedPosition = function () {
                    var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                        t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(), t
                }()), i.extend(r.defaults, {
                    scrollbarWidth: i.scrollbarWidth(),
                    fixed: i.support.fixedPosition,
                    parent: i("body")
                }), t = i(e).width(), s.addClass("fancybox-lock-test"), o = i(e).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (o - t) + "px;}</style>").appendTo("head")
            })
        }(window, document, e)
    }).call(t, i(2))
}, , , function (e, t, i) {
    var n, s, o;
    ! function (a) {
        true ? !(s = [i(2)], n = a, o = typeof n === "function" ? n.apply(t, s) : n, o !== undefined && (e.exports = o)) : a(jQuery)
    }(function (e) {
        function t(e) {
            for (var t = e.css("visibility");
                "inherit" === t;) e = e.parent(), t = e.css("visibility");
            return "hidden" !== t
        }

        function i(e) {
            for (var t, i; e.length && e[0] !== document;) {
                if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                e = e.parent()
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
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = n(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", i, function () {
                e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, s)
        }

        function s() {
            e.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        }

        function o(t, i) {
            e.extend(t, i);
            for (var n in i) null == i[n] && (t[n] = i[n]);
            return t
        }

        function a(e) {
            return function () {
                var t = this.element.val();
                e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
            }
        }
        e.ui = e.ui || {};
        var r = (e.ui.version = "1.12.1", 0),
            l = Array.prototype.slice;
        e.cleanData = function (t) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = e._data(s, "events"), n && n.remove && e(s).triggerHandler("remove")
                } catch (e) {}
                t(i)
            }
        }(e.cleanData), e.widget = function (t, i, n) {
            var s, o, a, r = {},
                l = t.split(".")[0];
            t = t.split(".")[1];
            var h = l + "-" + t;
            return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][h.toLowerCase()] = function (t) {
                return !!e.data(t, h)
            }, e[l] = e[l] || {}, s = e[l][t], o = e[l][t] = function (e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
            }, e.extend(o, s, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = e.widget.extend({}, a.options), e.each(n, function (t, n) {
                return e.isFunction(n) ? void(r[t] = function () {
                    function e() {
                        return i.prototype[t].apply(this, arguments)
                    }

                    function s(e) {
                        return i.prototype[t].apply(this, e)
                    }
                    return function () {
                        var t, i = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, this._superApply = o, t
                    }
                }()) : void(r[t] = n)
            }), o.prototype = e.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || t : t
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: h
            }), s ? (e.each(s._childConstructors, function (t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
        }, e.widget.extend = function (t) {
            for (var i, n, s = l.call(arguments, 1), o = 0, a = s.length; a > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e.isPlainObject(n) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : t[i] = n);
            return t
        }, e.widget.bridge = function (t, i) {
            var n = i.prototype.widgetFullName || t;
            e.fn[t] = function (s) {
                var o = "string" == typeof s,
                    a = l.call(arguments, 1),
                    r = this;
                return o ? this.length || "instance" !== s ? this.each(function () {
                    var i, o = e.data(this, n);
                    return "instance" === s ? (r = o, !1) : o ? e.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
                }) : r = void 0 : (a.length && (s = e.widget.extend.apply(null, [s].concat(a))), this.each(function () {
                    var t = e.data(this, n);
                    t ? (t.option(s || {}), t._init && t._init()) : e.data(this, n, new i(s, this))
                })), r
            }
        }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (t, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function (e, i) {
                    t._removeClass(i, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (t, i) {
                var n, s, o, a = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (a = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (s = a[t] = e.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        a[t] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function (t) {
                var i, n, s;
                for (i in t) s = this.classesElementLookup[i], t[i] !== this.options.classes[i] && s && s.length && (n = e(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function (e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
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
            _classes: function (t) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; r < i.length; r++) a = s.classesElementLookup[i[r]] || e(), a = e(t.add ? e.unique(a.get().concat(t.element.get())) : a.not(t.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && t.classes[i[r]] && n.push(t.classes[i[r]])
                }
                var n = [],
                    s = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (t) {
                var i = this;
                e.each(i.classesElementLookup, function (n, s) {
                    -1 !== e.inArray(t.target, s) && (i.classesElementLookup[n] = e(s.not(t.target).get()))
                })
            },
            _removeClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !1)
            },
            _addClass: function (e, t, i) {
                return this._toggleClass(e, t, i, !0)
            },
            _toggleClass: function (e, t, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof e || null === e,
                    o = {
                        extra: s ? t : i,
                        keys: s ? e : t,
                        element: s ? this.element : e,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function (t, i, n) {
                var s, o = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function (n, a) {
                    function r() {
                        return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        u = l[2];
                    u ? s.on(h, u, r) : i.on(h, r)
                })
            },
            _off: function (t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, n) {
                var s, o, a = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(e.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (t, i) {
            e.Widget.prototype["_" + t] = function (n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : t;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), a = !e.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && e.effects && e.effects.effect[r] ? n[t](s) : r !== t && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function (i) {
                    e(this)[t](), o && o.call(n[0]), i()
                })
            }
        });
        e.widget;
        ! function () {
            function t(e, t, i) {
                return [parseFloat(e[0]) * (c.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (c.test(e[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }

            function n(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            var s, o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                u = /^\w+/,
                c = /%$/,
                d = e.fn.position;
            e.position = {
                scrollbarWidth: function () {
                    if (void 0 !== s) return s;
                    var t, i, n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return e("body").append(n), t = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, t === i && (i = n[0].clientWidth), n.remove(), s = t - i
                },
                getScrollInfo: function (t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        o = "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight;
                    return {
                        width: o ? e.position.scrollbarWidth() : 0,
                        height: s ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (t) {
                    var i = e(t || window),
                        n = e.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        o = !n && !s;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: o ? e(t).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, e.fn.position = function (s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = e.extend({}, s);
                var c, f, p, m, g, v, _ = e(s.of),
                    b = e.position.getWithinInfo(s.within),
                    y = e.position.getScrollInfo(b),
                    w = (s.collision || "flip").split(" "),
                    x = {};
                return v = n(_), _[0].preventDefault && (s.at = "left top"), f = v.width,
                    p = v.height, m = v.offset, g = e.extend({}, m), e.each(["my", "at"], function () {
                        var e, t, i = (s[this] || "").split(" ");
                        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", e = h.exec(i[0]), t = h.exec(i[1]), x[this] = [e ? e[0] : 0, t ? t[0] : 0], s[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? g.left += f : "center" === s.at[0] && (g.left += f / 2), "bottom" === s.at[1] ? g.top += p : "center" === s.at[1] && (g.top += p / 2), c = t(x.at, f, p), g.left += c[0], g.top += c[1], this.each(function () {
                        var n, r, l = e(this),
                            h = l.outerWidth(),
                            u = l.outerHeight(),
                            d = i(this, "marginLeft"),
                            v = i(this, "marginTop"),
                            C = h + d + i(this, "marginRight") + y.width,
                            k = u + v + i(this, "marginBottom") + y.height,
                            T = e.extend({}, g),
                            D = t(x.my, l.outerWidth(), l.outerHeight());
                        "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= u : "center" === s.my[1] && (T.top -= u / 2), T.left += D[0], T.top += D[1], n = {
                            marginLeft: d,
                            marginTop: v
                        }, e.each(["left", "top"], function (t, i) {
                            e.ui.position[w[t]] && e.ui.position[w[t]][i](T, {
                                targetWidth: f,
                                targetHeight: p,
                                elemWidth: h,
                                elemHeight: u,
                                collisionPosition: n,
                                collisionWidth: C,
                                collisionHeight: k,
                                offset: [c[0] + D[0], c[1] + D[1]],
                                my: s.my,
                                at: s.at,
                                within: b,
                                elem: l
                            })
                        }), s.using && (r = function (e) {
                            var t = m.left - T.left,
                                i = t + f - h,
                                n = m.top - T.top,
                                r = n + p - u,
                                c = {
                                    target: {
                                        element: _,
                                        left: m.left,
                                        top: m.top,
                                        width: f,
                                        height: p
                                    },
                                    element: {
                                        element: l,
                                        left: T.left,
                                        top: T.top,
                                        width: h,
                                        height: u
                                    },
                                    horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                    vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                                };
                            h > f && a(t + i) < f && (c.horizontal = "center"), u > p && a(n + r) < p && (c.vertical = "middle"), o(a(t), a(i)) > o(a(n), a(r)) ? c.important = "horizontal" : c.important = "vertical", s.using.call(this, e, c)
                        }), l.offset(e.extend(T, {
                            using: r
                        }))
                    })
            }, e.ui.position = {
                fit: {
                    left: function (e, t) {
                        var i, n = t.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            r = e.left - t.collisionPosition.marginLeft,
                            l = s - r,
                            h = r + t.collisionWidth - a - s;
                        t.collisionWidth > a ? l > 0 && 0 >= h ? (i = e.left + l + t.collisionWidth - a - s, e.left += l - i) : h > 0 && 0 >= l ? e.left = s : l > h ? e.left = s + a - t.collisionWidth : e.left = s : l > 0 ? e.left += l : h > 0 ? e.left -= h : e.left = o(e.left - r, e.left)
                    },
                    top: function (e, t) {
                        var i, n = t.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = t.within.height,
                            r = e.top - t.collisionPosition.marginTop,
                            l = s - r,
                            h = r + t.collisionHeight - a - s;
                        t.collisionHeight > a ? l > 0 && 0 >= h ? (i = e.top + l + t.collisionHeight - a - s, e.top += l - i) : h > 0 && 0 >= l ? e.top = s : l > h ? e.top = s + a - t.collisionHeight : e.top = s : l > 0 ? e.top += l : h > 0 ? e.top -= h : e.top = o(e.top - r, e.top)
                    }
                },
                flip: {
                    left: function (e, t) {
                        var i, n, s = t.within,
                            o = s.offset.left + s.scrollLeft,
                            r = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            h = e.left - t.collisionPosition.marginLeft,
                            u = h - l,
                            c = h + t.collisionWidth - r - l,
                            d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            p = -2 * t.offset[0];
                        0 > u ? (i = e.left + d + f + p + t.collisionWidth - r - o, (0 > i || i < a(u)) && (e.left += d + f + p)) : c > 0 && (n = e.left - t.collisionPosition.marginLeft + d + f + p - l, (n > 0 || a(n) < c) && (e.left += d + f + p))
                    },
                    top: function (e, t) {
                        var i, n, s = t.within,
                            o = s.offset.top + s.scrollTop,
                            r = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            h = e.top - t.collisionPosition.marginTop,
                            u = h - l,
                            c = h + t.collisionHeight - r - l,
                            d = "top" === t.my[1],
                            f = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            m = -2 * t.offset[1];
                        0 > u ? (n = e.top + f + p + m + t.collisionHeight - r - o, (0 > n || n < a(u)) && (e.top += f + p + m)) : c > 0 && (i = e.top - t.collisionPosition.marginTop + f + p + m - l, (i > 0 || a(i) < c) && (e.top += f + p + m))
                    }
                },
                flipfit: {
                    left: function () {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }();
        var h = (e.ui.position, e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
                    return function (i) {
                        return !!e.data(i, t)
                    }
                }) : function (t, i, n) {
                    return !!e.data(t, n[3])
                }
            }), e.fn.extend({
                disableSelection: function () {
                    var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.on(e + ".ui-disableSelection", function (e) {
                            e.preventDefault()
                        })
                    }
                }(),
                enableSelection: function () {
                    return this.off(".ui-disableSelection")
                }
            }), "ui-effects-"),
            u = "ui-effects-style",
            c = "ui-effects-animated",
            d = e;
        e.effects = {
                effect: {}
            },
            function (e, t) {
                function i(e, t, i) {
                    var n = c[t.type] || {};
                    return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
                }

                function n(t) {
                    var i = h(),
                        n = i._rgba = [];
                    return t = t.toLowerCase(), p(l, function (e, s) {
                        var o, a = s.re.exec(t),
                            r = a && s.parse(a),
                            l = s.space || "rgba";
                        return r ? (o = i[l](r), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, o.transparent), i) : o[t]
                }

                function s(e, t, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
                }
                var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [e[1], e[2], e[3], e[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (e) {
                            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (e) {
                            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function (e) {
                            return [e[1], e[2] / 100, e[3] / 100, e[4]]
                        }
                    }],
                    h = e.Color = function (t, i, n, s) {
                        return new e.Color.fn.parse(t, i, n, s)
                    },
                    u = {
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
                    c = {
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
                    f = e("<p>")[0],
                    p = e.each;
                f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(u, function (e, t) {
                    t.cache = "_" + e, t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), h.fn = e.extend(h.prototype, {
                    parse: function (s, a, r, l) {
                        if (s === t) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = e(s).css(a), a = t);
                        var c = this,
                            d = e.type(s),
                            f = this._rgba = [];
                        return a !== t && (s = [s, a, r, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(u.rgba.props, function (e, t) {
                            f[t.idx] = i(s[t.idx], t)
                        }), this) : "object" === d ? (s instanceof h ? p(u, function (e, t) {
                            s[t.cache] && (c[t.cache] = s[t.cache].slice())
                        }) : p(u, function (t, n) {
                            var o = n.cache;
                            p(n.props, function (e, t) {
                                if (!c[o] && n.to) {
                                    if ("alpha" === e || null == s[e]) return;
                                    c[o] = n.to(c._rgba)
                                }
                                c[o][t.idx] = i(s[e], t, !0)
                            }), c[o] && e.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                        }), this) : void 0
                    },
                    is: function (e) {
                        var t = h(e),
                            i = !0,
                            n = this;
                        return p(u, function (e, s) {
                            var o, a = t[s.cache];
                            return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], p(s.props, function (e, t) {
                                return null != a[t.idx] ? i = a[t.idx] === o[t.idx] : void 0
                            })), i
                        }), i
                    },
                    _space: function () {
                        var e = [],
                            t = this;
                        return p(u, function (i, n) {
                            t[n.cache] && e.push(i)
                        }), e.pop()
                    },
                    transition: function (e, t) {
                        var n = h(e),
                            s = n._space(),
                            o = u[s],
                            a = 0 === this.alpha() ? h("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            l = r.slice();
                        return n = n[o.cache], p(o.props, function (e, s) {
                            var o = s.idx,
                                a = r[o],
                                h = n[o],
                                u = c[s.type] || {};
                            null !== h && (null === a ? l[o] = h : (u.mod && (h - a > u.mod / 2 ? a += u.mod : a - h > u.mod / 2 && (a -= u.mod)), l[o] = i((h - a) * t + a, s)))
                        }), this[s](l)
                    },
                    blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = h(t)._rgba;
                        return h(e.map(i, function (e, t) {
                            return (1 - n) * s[t] + n * e
                        }))
                    },
                    toRgbaString: function () {
                        var t = "rgba(",
                            i = e.map(this._rgba, function (e, t) {
                                return null == e ? t > 2 ? 1 : 0 : e
                            });
                        return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                    },
                    toHslaString: function () {
                        var t = "hsla(",
                            i = e.map(this.hsla(), function (e, t) {
                                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                            });
                        return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                    },
                    toHexString: function (t) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return t && i.push(~~(255 * n)), "#" + e.map(i, function (e) {
                            return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                        }).join("")
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), h.fn.parse.prototype = h.fn, u.hsla.to = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t, i, n = e[0] / 255,
                        s = e[1] / 255,
                        o = e[2] / 255,
                        a = e[3],
                        r = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = r - l,
                        u = r + l,
                        c = .5 * u;
                    return t = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= c ? h / u : h / (2 - u), [Math.round(t) % 360, i, c, null == a ? 1 : a]
                }, u.hsla.from = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t = e[0] / 360,
                        i = e[1],
                        n = e[2],
                        o = e[3],
                        a = .5 >= n ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, t + 1 / 3)), Math.round(255 * s(r, a, t)), Math.round(255 * s(r, a, t - 1 / 3)), o]
                }, p(u, function (n, s) {
                    var o = s.props,
                        a = s.cache,
                        l = s.to,
                        u = s.from;
                    h.fn[n] = function (n) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), n === t) return this[a].slice();
                        var s, r = e.type(n),
                            c = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return p(o, function (e, t) {
                            var n = c["object" === r ? e : t.idx];
                            null == n && (n = d[t.idx]), d[t.idx] = i(n, t)
                        }), u ? (s = h(u(d)), s[a] = d, s) : h(d)
                    }, p(o, function (t, i) {
                        h.fn[t] || (h.fn[t] = function (s) {
                            var o, a = e.type(s),
                                l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n,
                                h = this[l](),
                                u = h[i.idx];
                            return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = e.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                        })
                    })
                }), h.hook = function (t) {
                    var i = t.split(" ");
                    p(i, function (t, i) {
                        e.cssHooks[i] = {
                            set: function (t, s) {
                                var o, a, r = "";
                                if ("transparent" !== s && ("string" !== e.type(s) || (o = n(s)))) {
                                    if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (a = "backgroundColor" === i ? t.parentNode : t;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = e.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (e) {}
                                        s = s.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    t.style[i] = s
                                } catch (e) {}
                            }
                        }, e.fx.step[i] = function (t) {
                            t.colorInit || (t.start = h(t.elem, i), t.end = h(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, h.hook(a), e.cssHooks.borderColor = {
                    expand: function (e) {
                        var t = {};
                        return p(["Top", "Right", "Bottom", "Left"], function (i, n) {
                            t["border" + n + "Color"] = e
                        }), t
                    }
                }, o = e.Color.names = {
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
                function t(t) {
                    var i, n, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[e.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function i(t, i) {
                    var n, o, a = {};
                    for (n in i) o = i[n], t[n] !== o && (s[n] || (e.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
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
                e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
                    e.fx.step[i] = function (e) {
                        ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (d.style(e.elem, i, e.end), e.setAttr = !0)
                    }
                }), e.fn.addBack || (e.fn.addBack = function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }), e.effects.animateClass = function (s, o, a, r) {
                    var l = e.speed(o, a, r);
                    return this.queue(function () {
                        var o, a = e(this),
                            r = a.attr("class") || "",
                            h = l.children ? a.find("*").addBack() : a;
                        h = h.map(function () {
                            var i = e(this);
                            return {
                                el: i,
                                start: t(this)
                            }
                        }), o = function () {
                            e.each(n, function (e, t) {
                                s[t] && a[t + "Class"](s[t])
                            })
                        }, o(), h = h.map(function () {
                            return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", r), h = h.map(function () {
                            var t = this,
                                i = e.Deferred(),
                                n = e.extend({}, l, {
                                    queue: !1,
                                    complete: function () {
                                        i.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), e.when.apply(e, h.get()).done(function () {
                            o(), e.each(arguments, function () {
                                var t = this.el;
                                e.each(this.diff, function (e) {
                                    t.css(e, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, e.fn.extend({
                    addClass: function (t) {
                        return function (i, n, s, o) {
                            return n ? e.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : t.apply(this, arguments)
                        }
                    }(e.fn.addClass),
                    removeClass: function (t) {
                        return function (i, n, s, o) {
                            return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : t.apply(this, arguments)
                        }
                    }(e.fn.removeClass),
                    toggleClass: function (t) {
                        return function (i, n, s, o, a) {
                            return "boolean" == typeof n || void 0 === n ? s ? e.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, a) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(e.fn.toggleClass),
                    switchClass: function (t, i, n, s, o) {
                        return e.effects.animateClass.call(this, {
                            add: i,
                            remove: t
                        }, n, s, o)
                    }
                })
            }(),
            function () {
                function t(t, i, n, s) {
                    return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                        effect: t
                    }, null == i && (i = {}), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = s || i.complete, t
                }

                function i(t) {
                    return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }

                function n(e, t) {
                    var i = t.outerWidth(),
                        n = t.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        o = s.exec(e) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(o[1]) || 0,
                        right: "auto" === o[2] ? i : parseFloat(o[2]),
                        bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                        left: parseFloat(o[4]) || 0
                    }
                }
                e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function (t) {
                    return function (i) {
                        return !!e(i).data(c) || t(i)
                    }
                }(e.expr.filters.animated)), e.uiBackCompat !== !1 && e.extend(e.effects, {
                    save: function (e, t) {
                        for (var i = 0, n = t.length; n > i; i++) null !== t[i] && e.data(h + t[i], e[0].style[t[i]])
                    },
                    restore: function (e, t) {
                        for (var i, n = 0, s = t.length; s > n; n++) null !== t[n] && (i = e.data(h + t[n]), e.css(t[n], i))
                    },
                    setMode: function (e, t) {
                        return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                    },
                    createWrapper: function (t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var i = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                float: t.css("float")
                            },
                            n = e("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: t.width(),
                                height: t.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (e) {
                            o = document.body
                        }
                        return t.wrap(n), (t[0] === o || e.contains(t[0], o)) && e(o).trigger("focus"), n = t.parent(), "static" === t.css("position") ? (n.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (e.extend(i, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), e.each(["top", "left", "bottom", "right"], function (e, n) {
                            i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(s), n.css(i).show()
                    },
                    removeWrapper: function (t) {
                        var i = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")), t
                    }
                }), e.extend(e.effects, {
                    version: "1.12.1",
                    define: function (t, i, n) {
                        return n || (n = i, i = "effect"), e.effects.effect[t] = n, e.effects.effect[t].mode = i, n
                    },
                    scaledDimensions: function (e, t, i) {
                        if (0 === t) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (t || 100) / 100 : 1,
                            s = "vertical" !== i ? (t || 100) / 100 : 1;
                        return {
                            height: e.height() * s,
                            width: e.width() * n,
                            outerHeight: e.outerHeight() * s,
                            outerWidth: e.outerWidth() * n
                        }
                    },
                    clipToBox: function (e) {
                        return {
                            width: e.clip.right - e.clip.left,
                            height: e.clip.bottom - e.clip.top,
                            left: e.clip.left,
                            top: e.clip.top
                        }
                    },
                    unshift: function (e, t, i) {
                        var n = e.queue();
                        t > 1 && n.splice.apply(n, [1, 0].concat(n.splice(t, i))), e.dequeue()
                    },
                    saveStyle: function (e) {
                        e.data(u, e[0].style.cssText)
                    },
                    restoreStyle: function (e) {
                        e[0].style.cssText = e.data(u) || "", e.removeData(u)
                    },
                    mode: function (e, t) {
                        var i = e.is(":hidden");
                        return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t
                    },
                    getBaseline: function (e, t) {
                        var i, n;
                        switch (e[0]) {
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
                                i = e[0] / t.height
                        }
                        switch (e[1]) {
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
                                n = e[1] / t.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function (t) {
                        var i, n = t.css("position"),
                            s = t.position();
                        return t.css({
                            marginTop: t.css("marginTop"),
                            marginBottom: t.css("marginBottom"),
                            marginLeft: t.css("marginLeft"),
                            marginRight: t.css("marginRight")
                        }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                            display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: t.css("marginTop"),
                            marginBottom: t.css("marginBottom"),
                            marginLeft: t.css("marginLeft"),
                            marginRight: t.css("marginRight"),
                            float: t.css("float")
                        }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(h + "placeholder", i)), t.css({
                            position: n,
                            left: s.left,
                            top: s.top
                        }), i
                    },
                    removePlaceholder: function (e) {
                        var t = h + "placeholder",
                            i = e.data(t);
                        i && (i.remove(), e.removeData(t))
                    },
                    cleanUp: function (t) {
                        e.effects.restoreStyle(t), e.effects.removePlaceholder(t)
                    },
                    setTransition: function (t, i, n, s) {
                        return s = s || {}, e.each(i, function (e, i) {
                            var o = t.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), e.fn.extend({
                    effect: function () {
                        function i(t) {
                            function i() {
                                r.removeData(c), e.effects.cleanUp(r), "hide" === n.mode && r.hide(), a()
                            }

                            function a() {
                                e.isFunction(l) && l.call(r[0]), e.isFunction(t) && t()
                            }
                            var r = e(this);
                            n.mode = u.shift(), e.uiBackCompat === !1 || o ? "none" === n.mode ? (r[h](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : s.call(r[0], n, a)
                        }
                        var n = t.apply(this, arguments),
                            s = e.effects.effect[n.effect],
                            o = s.mode,
                            a = n.queue,
                            r = a || "fx",
                            l = n.complete,
                            h = n.mode,
                            u = [],
                            d = function (t) {
                                var i = e(this),
                                    n = e.effects.mode(i, h) || o;
                                i.data(c, !0), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || e.effects.saveStyle(i), e.isFunction(t) && t()
                            };
                        return e.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function () {
                            l && l.call(this)
                        }) : a === !1 ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
                    },
                    show: function (e) {
                        return function (n) {
                            if (i(n)) return e.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(e.fn.show),
                    hide: function (e) {
                        return function (n) {
                            if (i(n)) return e.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(e.fn.hide),
                    toggle: function (e) {
                        return function (n) {
                            if (i(n) || "boolean" == typeof n) return e.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(e.fn.toggle),
                    cssUnit: function (t) {
                        var i = this.css(t),
                            n = [];
                        return e.each(["em", "px", "%", "pt"], function (e, t) {
                            i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                        }), n
                    },
                    cssClip: function (e) {
                        return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : n(this.css("clip"), this)
                    },
                    transfer: function (t, i) {
                        var n = e(this),
                            s = e(t.to),
                            o = "fixed" === s.css("position"),
                            a = e("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            h = s.offset(),
                            u = {
                                top: h.top - r,
                                left: h.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth()
                            },
                            c = n.offset(),
                            d = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                                top: c.top - r,
                                left: c.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(u, t.duration, t.easing, function () {
                                d.remove(), e.isFunction(i) && i()
                            })
                    }
                }), e.fx.step.clip = function (t) {
                    t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = n(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({
                        top: t.pos * (t.end.top - t.start.top) + t.start.top,
                        right: t.pos * (t.end.right - t.start.right) + t.start.right,
                        bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                        left: t.pos * (t.end.left - t.start.left) + t.start.left
                    })
                }
            }(),
            function () {
                var t = {};
                e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
                    t[i] = function (t) {
                        return Math.pow(t, e + 2)
                    }
                }), e.extend(t, {
                    Sine: function (e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Circ: function (e) {
                        return 1 - Math.sqrt(1 - e * e)
                    },
                    Elastic: function (e) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function (e) {
                        return e * e * (3 * e - 2)
                    },
                    Bounce: function (e) {
                        for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    }
                }), e.each(t, function (t, i) {
                    e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                        return 1 - i(1 - e)
                    }, e.easing["easeInOut" + t] = function (e) {
                        return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                    }
                })
            }();
        var f, f = e.effects;
        e.effects.define("blind", "hide", function (t, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = e(this),
                o = t.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: e.extend({}, a)
                },
                l = e.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === t.mode && (s.cssClip(r.clip), l && l.css(e.effects.clipToBox(r)), r.clip = a), l && l.animate(e.effects.clipToBox(r), t.duration, t.easing), s.animate(r, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("bounce", function (t, i) {
            var n, s, o, a = e(this),
                r = t.mode,
                l = "hide" === r,
                h = "show" === r,
                u = t.direction || "up",
                c = t.distance,
                d = t.times || 5,
                f = 2 * d + (h || l ? 1 : 0),
                p = t.duration / f,
                m = t.easing,
                g = "up" === u || "down" === u ? "top" : "left",
                v = "up" === u || "left" === u,
                _ = 0,
                b = a.queue().length;
            for (e.effects.createPlaceholder(a), o = a.css(g), c || (c = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && (s = {
                    opacity: 1
                }, s[g] = o, a.css("opacity", 0).css(g, v ? 2 * -c : 2 * c).animate(s, p, m)), l && (c /= Math.pow(2, d - 1)), s = {}, s[g] = o; d > _; _++) n = {}, n[g] = (v ? "-=" : "+=") + c, a.animate(n, p, m).animate(s, p, m), c = l ? 2 * c : c / 2;
            l && (n = {
                opacity: 0
            }, n[g] = (v ? "-=" : "+=") + c, a.animate(n, p, m)), a.queue(i), e.effects.unshift(a, b, f + 1)
        }), e.effects.define("clip", "hide", function (t, i) {
            var n, s = {},
                o = e(this),
                a = t.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                h = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, e.effects.createPlaceholder(o), "show" === t.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("drop", "hide", function (t, i) {
            var n, s = e(this),
                o = t.mode,
                a = "show" === o,
                r = t.direction || "left",
                l = "up" === r || "down" === r ? "top" : "left",
                h = "up" === r || "left" === r ? "-=" : "+=",
                u = "+=" === h ? "-=" : "+=",
                c = {
                    opacity: 0
                };
            e.effects.createPlaceholder(s), n = t.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, c[l] = h + n, a && (s.css(c), c[l] = u + n, c.opacity = 1), s.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("explode", "hide", function (t, i) {
            function n() {
                b.push(this), b.length === c * d && s()
            }

            function s() {
                f.css({
                    visibility: "visible"
                }), e(b).remove(), i()
            }
            var o, a, r, l, h, u, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                d = c,
                f = e(this),
                p = t.mode,
                m = "show" === p,
                g = f.show().css("visibility", "hidden").offset(),
                v = Math.ceil(f.outerWidth() / d),
                _ = Math.ceil(f.outerHeight() / c),
                b = [];
            for (o = 0; c > o; o++)
                for (l = g.top + o * _, u = o - (c - 1) / 2, a = 0; d > a; a++) r = g.left + a * v, h = a - (d - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (m ? h * v : 0),
                    top: l + (m ? u * _ : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : h * v),
                    top: l + (m ? 0 : u * _),
                    opacity: m ? 1 : 0
                }, t.duration || 500, t.easing, n)
        }), e.effects.define("fade", "toggle", function (t, i) {
            var n = "show" === t.mode;
            e(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("fold", "hide", function (t, i) {
            var n = e(this),
                s = t.mode,
                o = "show" === s,
                a = "hide" === s,
                r = t.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = !!t.horizFirst,
                u = h ? ["right", "bottom"] : ["bottom", "right"],
                c = t.duration / 2,
                d = e.effects.createPlaceholder(n),
                f = n.cssClip(),
                p = {
                    clip: e.extend({}, f)
                },
                m = {
                    clip: e.extend({}, f)
                },
                g = [f[u[0]], f[u[1]]],
                v = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * g[a ? 0 : 1]), p.clip[u[0]] = r, m.clip[u[0]] = r, m.clip[u[1]] = 0, o && (n.cssClip(m.clip), d && d.css(e.effects.clipToBox(m)), m.clip = f), n.queue(function (i) {
                d && d.animate(e.effects.clipToBox(p), c, t.easing).animate(e.effects.clipToBox(m), c, t.easing), i()
            }).animate(p, c, t.easing).animate(m, c, t.easing).queue(i), e.effects.unshift(n, v, 4)
        }), e.effects.define("highlight", "show", function (t, i) {
            var n = e(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === t.mode && (s.opacity = 0), e.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("size", function (t, i) {
            var n, s, o, a = e(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                u = t.mode,
                c = "effect" !== u,
                d = t.scale || "both",
                f = t.origin || ["middle", "center"],
                p = a.css("position"),
                m = a.position(),
                g = e.effects.scaledDimensions(a),
                v = t.from || g,
                _ = t.to || e.effects.scaledDimensions(a, 0);
            e.effects.createPlaceholder(a), "show" === u && (o = v, v = _, _ = o), s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: _.height / g.height,
                    x: _.width / g.width
                }
            }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = e.effects.setTransition(a, l, s.from.y, v), _ = e.effects.setTransition(a, l, s.to.y, _)), s.from.x !== s.to.x && (v = e.effects.setTransition(a, h, s.from.x, v), _ = e.effects.setTransition(a, h, s.to.x, _))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = e.effects.setTransition(a, r, s.from.y, v), _ = e.effects.setTransition(a, r, s.to.y, _)), f && (n = e.effects.getBaseline(f, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, _.top = (g.outerHeight - _.outerHeight) * n.y + m.top, _.left = (g.outerWidth - _.outerWidth) * n.x + m.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
                var i = e(this),
                    n = e.effects.scaledDimensions(i),
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
                s.from.y !== s.to.y && (o = e.effects.setTransition(i, l, s.from.y, o), a = e.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = e.effects.setTransition(i, h, s.from.x, o), a = e.effects.setTransition(i, h, s.to.x, a)), c && e.effects.saveStyle(i), i.css(o), i.animate(a, t.duration, t.easing, function () {
                    c && e.effects.restoreStyle(i)
                })
            })), a.animate(_, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    var t = a.offset();
                    0 === _.opacity && a.css("opacity", v.opacity), c || (a.css("position", "static" === p ? "relative" : p).offset(t), e.effects.saveStyle(a)), i()
                }
            })
        }), e.effects.define("scale", function (t, i) {
            var n = e(this),
                s = t.mode,
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = e.extend(!0, {
                    from: e.effects.scaledDimensions(n),
                    to: e.effects.scaledDimensions(n, o, t.direction || "both"),
                    origin: t.origin || ["middle", "center"]
                }, t);
            t.fade && (a.from.opacity = 1, a.to.opacity = 0), e.effects.effect.size.call(this, a, i)
        }), e.effects.define("puff", "hide", function (t, i) {
            var n = e.extend(!0, {}, t, {
                fade: !0,
                percent: parseInt(t.percent, 10) || 150
            });
            e.effects.effect.scale.call(this, n, i)
        }), e.effects.define("pulsate", "show", function (t, i) {
            var n = e(this),
                s = t.mode,
                o = "show" === s,
                a = "hide" === s,
                r = o || a,
                l = 2 * (t.times || 5) + (r ? 1 : 0),
                h = t.duration / l,
                u = 0,
                c = 1,
                d = n.queue().length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1); l > c; c++) n.animate({
                opacity: u
            }, h, t.easing), u = 1 - u;
            n.animate({
                opacity: u
            }, h, t.easing), n.queue(i), e.effects.unshift(n, d, l + 1)
        }), e.effects.define("shake", function (t, i) {
            var n = 1,
                s = e(this),
                o = t.direction || "left",
                a = t.distance || 20,
                r = t.times || 3,
                l = 2 * r + 1,
                h = Math.round(t.duration / l),
                u = "up" === o || "down" === o ? "top" : "left",
                c = "up" === o || "left" === o,
                d = {},
                f = {},
                p = {},
                m = s.queue().length;
            for (e.effects.createPlaceholder(s), d[u] = (c ? "-=" : "+=") + a, f[u] = (c ? "+=" : "-=") + 2 * a, p[u] = (c ? "-=" : "+=") + 2 * a, s.animate(d, h, t.easing); r > n; n++) s.animate(f, h, t.easing).animate(p, h, t.easing);
            s.animate(f, h, t.easing).animate(d, h / 2, t.easing).queue(i), e.effects.unshift(s, m, l + 1)
        }), e.effects.define("slide", "show", function (t, i) {
            var n, s, o = e(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = t.mode,
                l = t.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                u = "up" === l || "left" === l,
                c = t.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            e.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (u ? -1 : 1) * c + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        });
        e.uiBackCompat !== !1 && (f = e.effects.define("transfer", function (t, i) {
            e(this).transfer(t, i)
        }));
        e.ui.focusable = function (i, n) {
            var s, o, a, r, l, h = i.nodeName.toLowerCase();
            return "area" === h ? (s = i.parentNode, o = s.name, i.href && o && "map" === s.nodeName.toLowerCase() ? (a = e("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled, r && (l = e(i).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === h ? i.href || n : n, r && e(i).is(":visible") && t(e(i)))
        }, e.extend(e.expr[":"], {
            focusable: function (t) {
                return e.ui.focusable(t, null != e.attr(t, "tabindex"))
            }
        });
        e.ui.focusable, e.fn.form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form)
        }, e.ui.formResetMixin = {
            _formResetHandler: function () {
                var t = e(this);
                setTimeout(function () {
                    var i = t.data("ui-form-reset-instances");
                    e.each(i, function () {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function () {
                if (this.form = this.element.form(), this.form.length) {
                    var e = this.form.data("ui-form-reset-instances") || [];
                    e.length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), this.form.data("ui-form-reset-instances", e)
                }
            },
            _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var t = this.form.data("ui-form-reset-instances");
                    t.splice(e.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        };
        "1.7" === e.fn.jquery.substring(0, 3) && (e.each(["Width", "Height"], function (t, i) {
            function n(t, i, n, o) {
                return e.each(s, function () {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), o && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function (t) {
                return void 0 === t ? a["inner" + i].call(this) : this.each(function () {
                    e(this).css(o, n(this, t) + "px")
                })
            }, e.fn["outer" + i] = function (t, s) {
                return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function () {
                    e(this).css(o, n(this, t, !0, s) + "px")
                })
            }
        }), e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        });
        e.ui.keyCode = {
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
        }, e.ui.escapeSelector = function () {
            var e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
            return function (t) {
                return t.replace(e, "\\$1")
            }
        }(), e.fn.labels = function () {
            var t, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (t = this.eq(0).parents().last(), o = t.add(t.length ? t.siblings() : this.siblings()), i = "label[for='" + e.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, e.fn.scrollParent = function (t) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function () {
                    var t = e(this);
                    return n && "static" === t.css("position") ? !1 : s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : e(this[0].ownerDocument || document);
        }, e.extend(e.expr[":"], {
            tabbable: function (t) {
                var i = e.attr(t, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && e.ui.focusable(t, n)
            }
        }), e.fn.extend({
            uniqueId: function () {
                var e = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.widget("ui.accordion", {
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
                var t = this.options;
                this.prevShow = this.prevHide = e(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : e()
                }
            },
            _createIcons: function () {
                var t, i, n = this.options.icons;
                n && (t = e("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + n.header), t.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var e;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function (e, t) {
                return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), void("icons" === e && (this._destroyIcons(), t && this._createIcons())))
            },
            _setOptionDisabled: function (e) {
                this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
            },
            _keydown: function (t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = e.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(t.target),
                        o = !1;
                    switch (t.keyCode) {
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
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), e(o).trigger("focus"), t.preventDefault())
                }
            },
            _panelKeyDown: function (t) {
                t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus")
            },
            refresh: function () {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var e = this.headers,
                    t = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
            },
            _refresh: function () {
                var t, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                    var t = e(this),
                        i = t.uniqueId().attr("id"),
                        n = t.next(),
                        s = n.uniqueId().attr("id");
                    t.attr("aria-controls", s), n.attr("aria-labelledby", i)
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
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (t = s.height(), this.element.siblings(":visible").each(function () {
                    var i = e(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
                }), this.headers.each(function () {
                    t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function () {
                    var i = e(this).is(":visible");
                    i || e(this).show(), t = Math.max(t, e(this).css("height", "").height()), i || e(this).hide()
                }).height(t))
            },
            _activate: function (t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
            },
            _setupEvents: function (t) {
                var i = {
                    keydown: "_keydown"
                };
                t && e.each(t.split(" "), function (e, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (t) {
                var i, n, s = this.options,
                    o = this.active,
                    a = e(t.currentTarget),
                    r = a[0] === o[0],
                    l = r && s.collapsible,
                    h = l ? e() : a.next(),
                    u = o.next(),
                    c = {
                        oldHeader: o,
                        oldPanel: u,
                        newHeader: l ? e() : a,
                        newPanel: h
                    };
                t.preventDefault(), r && !s.collapsible || this._trigger("beforeActivate", t, c) === !1 || (s.active = l ? !1 : this.headers.index(a), this.active = r ? e() : a, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function (t) {
                var i = t.newPanel,
                    n = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function () {
                    return 0 === parseInt(e(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (e, t, i) {
                var n, s, o, a = this,
                    r = 0,
                    l = e.css("box-sizing"),
                    h = e.length && (!t.length || e.index() < t.index()),
                    u = this.options.animate || {},
                    c = h && u.down || u,
                    d = function () {
                        a._toggleComplete(i)
                    };
                return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || u.easing, o = o || c.duration || u.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (e, t) {
                        t.now = Math.round(e)
                    }
                }), void e.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (e, i) {
                        i.now = Math.round(e), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - r), r = 0)
                    }
                })) : t.animate(this.hideProps, o, s, d) : e.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function (e) {
                var t = e.oldPanel,
                    i = t.prev();
                this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.ui.safeActiveElement = function (e) {
            var t;
            try {
                t = e.activeElement
            } catch (i) {
                t = e.body
            }
            return t || (t = e.body), t.nodeName || (t = e.body), t
        }, e.widget("ui.menu", {
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
                    "mousedown .ui-menu-item": function (e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function (t) {
                        var i = e(t.target),
                            n = e(e.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (t) {
                        if (!this.previousFilter) {
                            var i = e(t.target).closest(".ui-menu-item"),
                                n = e(t.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function (t) {
                        this._delay(function () {
                            var i = !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
                    var t = e(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function (t) {
                var i, n, s, o, a = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        a = !1, n = this.previousFilter || "", o = !1, s = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(t.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(t, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && t.preventDefault()
            },
            _activate: function (e) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function () {
                var t, i, n, s, o, a = this,
                    r = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var t = e(this),
                        i = t.prev(),
                        n = e("<span>").data("ui-menu-submenu-caret", !0);
                    a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), t = l.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                    var t = e(this);
                    a._isDivider(t) && a._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function (e, t) {
                if ("icons" === e) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
                }
                this._super(e, t)
            },
            _setOptionDisabled: function (e) {
                this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            focus: function (e, t) {
                var i, n, s;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function (t) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = t.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function (e, t) {
                t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function (e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function (t) {
                var i = e.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(t), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function (e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function (t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function (e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function (e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function (e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function () {
                    this.focus(e, t)
                }))
            },
            next: function (e) {
                this._move("next", "first", e)
            },
            previous: function (e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (e, t, i) {
                var n;
                this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()), this.focus(i, n)
            },
            nextPage: function (t) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = e(this), i.offset().top - n - s < 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
            },
            previousPage: function (t) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = e(this), i.offset().top - n + s > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            },
            _filterMenuItems: function (t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return n.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        });
        e.widget("ui.autocomplete", {
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
                var t, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (s) {
                        if (this.element.prop("readOnly")) return t = !0, n = !0, void(i = !0);
                        t = !1, n = !1, i = !1;
                        var o = e.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                t = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                t = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                t = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                t = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
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
                        if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = e.ui.keyCode;
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
                    input: function (e) {
                        return n ? (n = !1, void e.preventDefault()) : void this._searchTimeout(e)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (e) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                    }
                }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function (t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur, this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function (t, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                            e(t.target).trigger(t.originalEvent)
                        })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: s
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && e.trim(n).length && (this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function (t, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", t, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                    }
                }), this.liveRegion = e("<div>", {
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
            _setOption: function (e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function (t) {
                var i = this.menu.element[0];
                return t.target === this.element[0] || t.target === i || e.contains(i, t.target)
            },
            _closeOnClickOutside: function (e) {
                this._isEventTargetInWidget(e) || this.close()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function () {
                var t, i, n = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, n) {
                    n(e.ui.autocomplete.filter(t, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, s) {
                    n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                        url: i,
                        data: t,
                        dataType: "json",
                        success: function (e) {
                            s(e)
                        },
                        error: function () {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (e) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !i && !n) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function (e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
            },
            _search: function (e) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function () {
                var t = ++this.requestIndex;
                return e.proxy(function (e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function (e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function (e) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function (e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function (t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function (t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function () {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (t, i) {
                var n = this;
                e.each(i, function (e, i) {
                    n._renderItemData(t, i)
                })
            },
            _renderItemData: function (e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function (t, i) {
                return e("<li>").append(e("<div>").text(i.label)).appendTo(t)
            },
            _move: function (e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            },
            _isContentEditable: function (e) {
                if (!e.length) return !1;
                var t = e.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function (e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (t, i) {
                var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                return e.grep(t, function (e) {
                    return n.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function (t) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        var p = (e.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
        e.widget("ui.controlgroup", {
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
                var t = this,
                    i = [];
                e.each(this.options.items, function (n, s) {
                    var o, a = {};
                    return s ? "controlgroupLabel" === n ? (o = t.element.find(s), o.each(function () {
                        var t = e(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), t._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(e.fn[n] && (a = t["_" + n + "Options"] ? t["_" + n + "Options"]("middle") : {
                        classes: {}
                    }, t.element.find(s).each(function () {
                        var s = e(this),
                            o = s[n]("instance"),
                            r = e.widget.extend({}, a);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (r.classes = t._resolveClassesValues(r.classes, o)), s[n](r);
                            var l = s[n]("widget");
                            e.data(l[0], "ui-controlgroup-data", o ? o : s[n]("instance")), i.push(l[0])
                        }
                    }))) : void 0
                }), this.childWidgets = e(e.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (t) {
                this.childWidgets.each(function () {
                    var i = e(this),
                        n = i.data("ui-controlgroup-data");
                    n && n[t] && n[t]()
                })
            },
            _updateCornerClass: function (e, t) {
                var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                    n = this._buildSimpleOptions(t, "label").classes.label;
                this._removeClass(e, null, i), this._addClass(e, null, n)
            },
            _buildSimpleOptions: function (e, t) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[t] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[e], n
            },
            _spinnerOptions: function (e) {
                var t = this._buildSimpleOptions(e, "ui-spinner");
                return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t
            },
            _buttonOptions: function (e) {
                return this._buildSimpleOptions(e, "ui-button")
            },
            _checkboxradioOptions: function (e) {
                return this._buildSimpleOptions(e, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (e) {
                var t = "vertical" === this.options.direction;
                return {
                    width: t ? "auto" : !1,
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[e]
                }
            },
            _resolveClassesValues: function (t, i) {
                var n = {};
                return e.each(t, function (s) {
                    var o = i.options.classes[s] || "";
                    o = e.trim(o.replace(p, "")), n[s] = (o + " " + t[s]).replace(/\s+/g, " ")
                }), n
            },
            _setOption: function (e, t) {
                return "direction" === e && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(e, t), "disabled" === e ? void this._callChildMethod(t ? "disable" : "enable") : void this.refresh()
            },
            refresh: function () {
                var t, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), t = this.childWidgets, this.options.onlyVisible && (t = t.filter(":visible")), t.length && (e.each(["first", "last"], function (e, n) {
                    var s = t[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === t.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(t[n](), n)
                }), this._callChildMethod("refresh"))
            }
        });
        e.widget("ui.checkboxradio", [e.ui.formResetMixin, {
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
                var t, i, n = this,
                    s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = e(i[i.length - 1]), this.label.length || e.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                    n.originalLabel += 3 === this.nodeType ? e(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), t = this.element[0].disabled, null != t && (s.disabled = t), s
            },
            _create: function () {
                var e = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), e && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
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
                var t = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || e.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked)
            },
            widget: function () {
                return this.label
            },
            _getRadioGroup: function () {
                var t, i = this.element[0].name,
                    n = "input[name='" + e.ui.escapeSelector(i) + "']";
                return i ? (t = this.form.length ? e(this.form[0].elements).filter(n) : e(n).filter(function () {
                    return 0 === e(this).form().length
                }), t.not(this.element)) : e([])
            },
            _toggleClasses: function () {
                var t = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
                    var t = e(this).checkboxradio("instance");
                    t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function (e, t) {
                return "label" !== e || t ? (this._super(e, t), "disabled" === e ? (this._toggleClass(this.label, null, "ui-state-disabled", t), void(this.element[0].disabled = t)) : void this.refresh()) : void 0
            },
            _updateIcon: function (t) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = e("<span>"), this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function () {
                var e = this.label.contents().not(this.element[0]);
                this.icon && (e = e.not(this.icon[0])), this.iconSpace && (e = e.not(this.iconSpace[0])), e.remove(), this.label.append(this.options.label)
            },
            refresh: function () {
                var e = this.element[0].checked,
                    t = this.element[0].disabled;
                this._updateIcon(e), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), null !== this.options.label && this._updateLabel(), t !== this.options.disabled && this._setOptions({
                    disabled: t
                })
            }
        }]);
        e.ui.checkboxradio;
        e.widget("ui.button", {
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
                var e, t = this._super() || {};
                return this.isInput = this.element.is("input"), e = this.element[0].disabled, null != e && (t.disabled = e), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), t
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function (t) {
                        t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function () {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function (t, i) {
                var n = "iconPosition" !== t,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function (e) {
                this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function (e) {
                this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function (e) {
                var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel,
                    i = void 0 === e.icon ? this.options.icon : e.icon;
                t || i || (e.showLabel = !0), this._super(e)
            },
            _setOption: function (e, t) {
                "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === e && this._updateIcon(e, t), "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()), "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(e, t), "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t), this.element[0].disabled = t, t && this.element.blur())
            },
            refresh: function () {
                var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOptions({
                    disabled: e
                }), this._updateTooltip()
            }
        }), e.uiBackCompat !== !1 && (e.widget("ui.button", e.ui.button, {
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
            _setOption: function (e, t) {
                return "text" === e ? void this._super("showLabel", t) : ("showLabel" === e && (this.options.text = t), "icon" === e && (this.options.icons.primary = t), "icons" === e && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), e.fn.button = function (t) {
            return function () {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(e.fn.button), e.fn.buttonset = function () {
            return e.ui.controlgroup || e.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        });
        e.ui.button;
        e.extend(e.ui, {
            datepicker: {
                version: "1.12.1"
            }
        });
        var m;
        e.extend($.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (e) {
                return o(this._defaults, e || {}), this
            },
            _attachDatepicker: function (t, i) {
                var n, s, o;
                n = t.nodeName.toLowerCase(), s = "div" === n || "span" === n, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), o = this._newInst(e(t), s), o.settings = e.extend({}, i || {}), "input" === n ? this._connectDatepicker(t, o) : s && this._inlineDatepicker(t, o)
            },
            _newInst: function (t, i) {
                var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: s,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, i) {
                var n = e(t);
                i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, i) {
                var n, s, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = e("<span class='" + this._appendClass + "'>" + a + "</span>"), t[r ? "before" : "after"](i.append)), t.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && t.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(o ? e("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), t[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function (e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, i, n, s, o = new Date(2009, 11, 20),
                        a = this._get(e, "dateFormat");
                    a.match(/[DM]/) && (t = function (e) {
                        for (i = 0, n = 0, s = 0; s < e.length; s++) e[s].length > i && (i = e[s].length, n = s);
                        return n
                    }, o.setMonth(t(this._get(e, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(t(this._get(e, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), e.input.attr("size", this._formatDate(e, o).length)
                }
            },
            _inlineDatepicker: function (t, i) {
                var n = e(t);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, i, n, s, a) {
                var r, l, h, u, c, d = this._dialogInst;
                return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, e.data(this._dialogInput[0], "datepicker", d)), o(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function (t) {
                var i, n = e(t),
                    s = e.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), m === s && (m = null))
            },
            _enableDatepicker: function (t) {
                var i, n, s = e(t),
                    o = e.data(t, "datepicker");
                s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, o.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function (t) {
                var i, n, s = e(t),
                    o = e.data(t, "datepicker");
                s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, o.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function (e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return e.data(t, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (t, i, n) {
                var s, a, r, l, h = this._getInst(t);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : h ? "all" === i ? e.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function (e, t, i) {
                this._optionDatepicker(e, t, i)
            },
            _refreshDatepicker: function (e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (e, t) {
                var i = this._getInst(e);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function (t) {
                var i, n, s, o = e.datepicker._getInst(t.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", o.dpDiv), s[0] && e.datepicker._selectDay(t.target, o.selectedMonth, o.selectedYear, s[0]), i = e.datepicker._get(o, "onSelect"), i ? (n = e.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), a = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), a = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), a = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), a = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : a = !1;
                a && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var i, n, s = e.datepicker._getInst(t.target);
                return e.datepicker._get(s, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function (t) {
                var i, n = e.datepicker._getInst(t.target);
                if (n.input.val() !== n.lastVal) try {
                    i = e.datepicker.parseDate(e.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), i && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
                } catch (e) {}
                return !0
            },
            _showDatepicker: function (t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                    var n, s, a, r, l, h, u;
                    n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), s = e.datepicker._get(n, "beforeShow"), a = s ? s.apply(t, [t, n]) : {}, a !== !1 && (o(n.settings, a), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
                        return r |= "fixed" === e(this).css("position"), !r
                    }), l = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(n), l = e.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (h = e.datepicker._get(n, "showAnim"), u = e.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[h] ? n.dpDiv.show(h, e.datepicker._get(n, "showOptions"), u) : n.dpDiv[h || "show"](h ? u : null), e.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), e.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4, m = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var i, n = this._getNumberOfMonths(t),
                    o = n[1],
                    a = 17,
                    r = t.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && s.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), t.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                    i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function (t, i, n) {
                var s = t.dpDiv.outerWidth(),
                    o = t.dpDiv.outerHeight(),
                    a = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? s - a : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function (t) {
                for (var i, n = this._getInst(t), s = this._get(n, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
                return i = e(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (t) {
                var i, n, s, o, a = this._curInst;
                !a || t && a !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function () {
                    e.datepicker._tidyDialog(a)
                }, e.effects && (e.effects.effect[i] || e.effects[i]) ? a.dpDiv.hide(i, e.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (e) {
                e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if (e.datepicker._curInst) {
                    var i = e(t.target),
                        n = e.datepicker._getInst(i[0]);
                    (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, i, n) {
                var s = e(t),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function (t) {
                var i, n = e(t),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function (t, i, n) {
                var s = e(t),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function (t, i, n, s) {
                var o, a = e(t);
                e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = e("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function (t) {
                var i = e(t);
                this._selectDate(i, "")
            },
            _selectDate: function (t, i) {
                var n, s = e(t),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var i, n, s, o = this._get(t, "altField");
                o && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), n = this._getDate(t), s = this.formatDate(i, n, this._getFormatConfig(t)), e(o).val(s))
            },
            noWeekends: function (e) {
                var t = e.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function (e) {
                var t, i = new Date(e.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
            },
            parseDate: function (t, i, n) {
                if (null == t || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var s, o, a, r, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    u = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (n ? n.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    _ = -1,
                    b = !1,
                    y = function (e) {
                        var i = s + 1 < t.length && t.charAt(s + 1) === e;
                        return i && s++, i
                    },
                    w = function (e) {
                        var t = y(e),
                            n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            s = "y" === e ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    x = function (t, n, s) {
                        var o = -1,
                            a = e.map(y(t) ? s : n, function (e, t) {
                                return [[t, e]]
                            }).sort(function (e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(a, function (e, t) {
                                var n = t[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = t[0], l += n.length, !1) : void 0
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    C = function () {
                        if (i.charAt(l) !== t.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < t.length; s++)
                    if (b) "'" !== t.charAt(s) || y("'") ? C() : b = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", c, d);
                            break;
                        case "o":
                            _ = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = x("M", f, p);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            y("'") ? C() : b = !0;
                            break;
                        default:
                            C()
                    }
                if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), _ > -1)
                    for (g = 1, v = _;;) {
                        if (o = this._getDaysInMonth(m, g - 1), o >= v) break;
                        g++, v -= o
                    }
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
            formatDate: function (e, t, i) {
                if (!t) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function (t) {
                        var i = n + 1 < e.length && e.charAt(n + 1) === t;
                        return i && n++, i
                    },
                    h = function (e, t, i) {
                        var n = "" + t;
                        if (l(e))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    u = function (e, t, i, n) {
                        return l(e) ? n[t] : i[t]
                    },
                    c = "",
                    d = !1;
                if (t)
                    for (n = 0; n < e.length; n++)
                        if (d) "'" !== e.charAt(n) || l("'") ? c += e.charAt(n) : d = !1;
                        else switch (e.charAt(n)) {
                            case "d":
                                c += h("d", t.getDate(), 2);
                                break;
                            case "D":
                                c += u("D", t.getDay(), s, o);
                                break;
                            case "o":
                                c += h("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += h("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += u("M", t.getMonth(), a, r);
                                break;
                            case "y":
                                c += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                c += t.getTime();
                                break;
                            case "!":
                                c += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? c += "'" : d = !0;
                                break;
                            default:
                                c += e.charAt(n)
                        }
                return c
            },
            _possibleChars: function (e) {
                var t, i = "",
                    n = !1,
                    s = function (i) {
                        var n = t + 1 < e.length && e.charAt(t + 1) === i;
                        return n && t++, n
                    };
                for (t = 0; t < e.length; t++)
                    if (n) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : n = !1;
                    else switch (e.charAt(t)) {
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
                            i += e.charAt(t)
                    }
                return i
            },
            _get: function (e, t) {
                return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function (e, t) {
                if (e.input.val() !== e.lastVal) {
                    var i = this._get(e, "dateFormat"),
                        n = e.lastVal = e.input ? e.input.val() : null,
                        s = this._getDefaultDate(e),
                        o = s,
                        a = this._getFormatConfig(e);
                    try {
                        o = this.parseDate(i, n, a) || s
                    } catch (e) {
                        n = t ? "" : n
                    }
                    e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), e.currentDay = n ? o.getDate() : 0, e.currentMonth = n ? o.getMonth() : 0, e.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function (e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function (t, i, n) {
                var s = function (e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    o = function (i) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                        } catch (e) {}
                        for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
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
                                    o += parseInt(l[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(s, o));
                                    break;
                                case "y":
                                case "Y":
                                    s += parseInt(l[1], 10), a = Math.min(a, e.datepicker._getDaysInMonth(s, o))
                            }
                            l = r.exec(i)
                        }
                        return new Date(s, o, a)
                    },
                    a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return a = a && "Invalid Date" === a.toString() ? n : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function (e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function (e, t, i) {
                var n = !t,
                    s = e.selectedMonth,
                    o = e.selectedYear,
                    a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = a.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(), e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(), s === e.selectedMonth && o === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
            },
            _getDate: function (e) {
                var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function (t) {
                var i = this._get(t, "stepMonths"),
                    n = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            e.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function () {
                            e.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function () {
                            e.datepicker._hideDatepicker()
                        },
                        today: function () {
                            e.datepicker._gotoToday(n)
                        },
                        selectDay: function () {
                            return e.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return e.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function () {
                            return e.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (e) {
                var t, i, n, s, o, a, r, l, h, u, c, d, f, p, m, g, v, _, b, y, w, x, C, k, T, D, I, S, N, P, E, M, A, O, H, L, W, z, F, B = new Date,
                    R = this._daylightSavingAdjust(new Date(B.getFullYear(), B.getMonth(), B.getDate())),
                    j = this._get(e, "isRTL"),
                    q = this._get(e, "showButtonPanel"),
                    Y = this._get(e, "hideIfNoPrevNext"),
                    V = this._get(e, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(e),
                    K = this._get(e, "showCurrentAtPos"),
                    $ = this._get(e, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(e, "min"),
                    J = this._getMinMaxDate(e, "max"),
                    Z = e.drawMonth - K,
                    ee = e.drawYear;
                if (0 > Z && (Z += 12, ee--), J)
                    for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
                for (e.drawMonth = Z,
                    e.drawYear = ee, i = this._get(e, "prevText"), i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(ee, Z - $, 1)), this._getFormatConfig(e)) : i, n = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, Z + $, 1)), this._getFormatConfig(e)) : s, o = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, a = V ? this.formatDate(a, r, this._getFormatConfig(e)) : a, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (j ? "" : l) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(e, "showWeek"), d = this._get(e, "dayNames"), f = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), _ = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), y = "", x = 0; x < U[0]; x++) {
                    for (C = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
                        if (T = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), D = " ui-corner-all", I = "", X) {
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
                        for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? j ? o : n : "") + (/all|right/.test(D) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(e, Z, ee, Q, J, x > 0 || k > 0, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) N = (w + u) % 7, S += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[N] + "'>" + f[N] + "</span></th>";
                        for (I += S + "</tr></thead><tbody>", P = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)), E = (this._getFirstDayOfMonth(ee, Z) - u + 7) % 7, M = Math.ceil((E + P) / 7), A = X && this.maxRows > M ? this.maxRows : M, this.maxRows = A, O = this._daylightSavingAdjust(new Date(ee, Z, 1 - E)), H = 0; A > H; H++) {
                            for (I += "<tr>", L = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) W = g ? g.apply(e.input ? e.input[0] : null, [O]) : [!0, ""], z = O.getMonth() !== Z, F = z && !_ || !W[0] || Q && Q > O || J && O > J, L += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (O.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === O.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + W[1] + (O.getTime() === G.getTime() ? " " + this._currentClass : "") + (O.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === R.getTime() ? " ui-state-highlight" : "") + (O.getTime() === G.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                            I += L + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, ee++), I += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += I
                    }
                    y += C
                }
                return y += h, e._keyEvent = !1, y
            },
            _generateMonthYearHeader: function (e, t, i, n, s, o, a, r) {
                var l, h, u, c, d, f, p, m, g = this._get(e, "changeMonth"),
                    v = this._get(e, "changeYear"),
                    _ = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !g) y += "<span class='ui-datepicker-month'>" + a[t] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= n.getMonth()) && (!h || u <= s.getMonth()) && (y += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (c = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), f = function (e) {
                                var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? d : t
                            }, p = f(c[0]), m = Math.max(p, f(c[1] || "")), p = n ? Math.max(p, n.getFullYear()) : p, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= p; p++) e.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    }
                return b += this._get(e, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>"
            },
            _adjustInstDate: function (e, t, i) {
                var n = e.selectedYear + ("Y" === i ? t : 0),
                    s = e.selectedMonth + ("M" === i ? t : 0),
                    o = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? t : 0),
                    a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, o)));
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
            },
            _restrictMinMax: function (e, t) {
                var i = this._getMinMaxDate(e, "min"),
                    n = this._getMinMaxDate(e, "max"),
                    s = i && i > t ? i : t;
                return n && s > n ? n : s
            },
            _notifyChange: function (e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function (e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function (e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function (e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function (e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function (e, t, i, n) {
                var s = this._getNumberOfMonths(e),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
                return 0 > t && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
            },
            _isInRange: function (e, t) {
                var i, n, s = this._getMinMaxDate(e, "min"),
                    o = this._getMinMaxDate(e, "max"),
                    a = null,
                    r = null,
                    l = this._get(e, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || t.getTime() >= s.getTime()) && (!o || t.getTime() <= o.getTime()) && (!a || t.getFullYear() >= a) && (!r || t.getFullYear() <= r)
            },
            _getFormatConfig: function (e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function (e, t, i, n) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function (t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
        }, e.datepicker = new $, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1";
        var g = (e.datepicker, e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
        e(document).on("mouseup", function () {
            g = !1
        });
        e.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var t = this;
                this.element.on("mousedown." + this.widgetName, function (e) {
                    return t._mouseDown(e)
                }).on("click." + this.widgetName, function (i) {
                    return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (t) {
                if (!g) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        n = 1 === t.which,
                        s = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return n && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                        return i._mouseMove(e)
                    }, this._mouseUpDelegate = function (e) {
                        return i._mouseUp(e)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), g = !0, !0)) : !0
                }
            },
            _mouseMove: function (t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function (t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, g = !1, t.preventDefault()
            },
            _mouseDistanceMet: function (e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
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
        }), e.ui.plugin = {
            add: function (t, i, n) {
                var s, o = e.ui[t].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function (e, t, i, n) {
                var s, o = e.plugins[t];
                if (o && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) e.options[o[s][0]] && o[s][1].apply(e.element, i)
            }
        }, e.ui.safeBlur = function (t) {
            t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
        };
        e.widget("ui.draggable", e.ui.mouse, {
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
            _setOption: function (e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function (t) {
                var i = this.options;
                return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blurActiveElement(t), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
            },
            _blockFrames: function (t) {
                this.iframeBlocks = this.document.find(t).map(function () {
                    var t = e(this);
                    return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function (t) {
                var i = e.ui.safeActiveElement(this.document[0]),
                    n = e(t.target);
                n.closest(i).length || e.ui.safeBlur(i)
            },
            _mouseStart: function (t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function (e) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                }
            },
            _mouseDrag: function (t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", t, n) === !1) return this._mouseUp(new e.Event("mouseup", t)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function (t) {
                var i = this,
                    n = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    i._trigger("stop", t) !== !1 && i._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function (t) {
                return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function (t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function () {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function (t) {
                var i = this.options,
                    n = e.isFunction(i.helper),
                    s = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function (t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function (e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function () {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
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
                var t, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, e(o).width() - this.helperProportions.width - this.margins.left, (e(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = e(s.containment), n = i[0], void(n && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function (e, t) {
                t || (t = this.position);
                var i = "absolute" === e ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function (e, t) {
                var i, n, s, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = e.pageX,
                    h = e.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function (t, i, n) {
                return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, n)
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
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function (t, i, n) {
                var s = e.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], e(n.options.connectToSortable).each(function () {
                    var i = e(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, s))
                })
            },
            stop: function (t, i, n) {
                var s = e.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, e.each(n.sortables, function () {
                    var e = this;
                    e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css("position"),
                        top: e.placeholder.css("top"),
                        left: e.placeholder.css("left")
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, s))
                })
            },
            drag: function (t, i, n) {
                e.each(n.sortables, function () {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, e.each(n.sortables, function () {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && e.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                        return i.helper[0]
                    }, t.target = o.currentItem[0], o._mouseCapture(t, !0), o._mouseStart(t, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", t), n.dropped = o.element, e.each(n.sortables, function () {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(t), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", t, o._uiHash(o)), o._mouseStop(t, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger("fromSortable", t), n.dropped = !1, e.each(n.sortables, function () {
                        this.refreshPositions()
                    }))
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function (t, i, n) {
                var s = e("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function (t, i, n) {
                var s = n.options;
                s._cursor && e("body").css("cursor", s._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function (t, i, n) {
                var s = e(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function (t, i, n) {
                var s = n.options;
                s._opacity && e(i.helper).css("opacity", s._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function (e, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function (t, i, n) {
                var s = n.options,
                    o = !1,
                    a = n.scrollParentNotHidden[0],
                    r = n.document[0];
                a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - t.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : t.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - t.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : t.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(r).scrollTop() < s.scrollSensitivity ? o = e(r).scrollTop(e(r).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < s.scrollSensitivity && (o = e(r).scrollTop(e(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(r).scrollLeft() < s.scrollSensitivity ? o = e(r).scrollLeft(e(r).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < s.scrollSensitivity && (o = e(r).scrollLeft(e(r).scrollLeft() + s.scrollSpeed)))), o !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function (t, i, n) {
                var s = n.options;
                n.snapElements = [], e(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                    var t = e(this),
                        i = t.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function (t, i, n) {
                var s, o, a, r, l, h, u, c, d, f, p = n.options,
                    m = p.snapTolerance,
                    g = i.offset.left,
                    v = g + n.helperProportions.width,
                    _ = i.offset.top,
                    b = _ + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, c = u + n.snapElements[d].height, l - m > v || g > h + m || u - m > b || _ > c + m || !e.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (s = Math.abs(u - b) <= m, o = Math.abs(c - _) <= m, a = Math.abs(l - v) <= m, r = Math.abs(h - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), f = s || o || a || r, "outer" !== p.snapMode && (s = Math.abs(u - _) <= m, o = Math.abs(c - b) <= m, a = Math.abs(l - g) <= m, r = Math.abs(h - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || a || r || f) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = s || o || a || r || f)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function (t, i, n) {
                var s, o = n.options,
                    a = e.makeArray(e(o.stack)).sort(function (t, i) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                    });
                a.length && (s = parseInt(e(a[0]).css("zIndex"), 10) || 0, e(a).each(function (t) {
                    e(this).css("zIndex", s + t)
                }), this.css("zIndex", s + a.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function (t, i, n) {
                var s = e(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function (t, i, n) {
                var s = n.options;
                s._zIndex && e(i.helper).css("zIndex", s._zIndex)
            }
        });
        e.ui.draggable;
        e.widget("ui.resizable", e.ui.mouse, {
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
            _num: function (e) {
                return parseFloat(e) || 0
            },
            _isNumber: function (e) {
                return !isNaN(parseFloat(e))
            },
            _hasScroll: function (t, i) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
            },
            _create: function () {
                var t, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                    this.elementIsWrapper = !0, t = {
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom"),
                        marginLeft: this.originalElement.css("marginLeft")
                    }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), i.autoHide && e(this.element).on("mouseenter", function () {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                }).on("mouseleave", function () {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var t, i = function (t) {
                    e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function (e, t) {
                switch (this._super(e, t), e) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function () {
                var t, i, n, s, o, a = this.options,
                    r = this;
                if (this.handles = a.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) t = e.trim(n[i]), s = "ui-resizable-" + t, o = e("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                        zIndex: a.zIndex
                    }), this.handles[t] = ".ui-resizable-" + t, this.element.append(o);
                this._renderAxis = function (t) {
                    var i, n, s, o;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function () {
                this._handles.remove()
            },
            _mouseCapture: function (t) {
                var i, n, s = !1;
                for (i in this.handles) n = e(this.handles[i])[0], (n === t.target || e.contains(n, t.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function (t) {
                var i, n, s, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
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
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function (t) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = t.pageX - s.left || 0,
                    r = t.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), l ? (i = l.apply(this, [t, a, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function (t) {
                this.resizing = !1;
                var i, n, s, o, a, r, l, h = this.options,
                    u = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, a = {
                    width: u.helper.width() - o,
                    height: u.helper.height() - s
                }, r = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(e.extend(a, {
                    top: l,
                    left: r
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
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
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function (e) {
                var t, i, n, s, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function (e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function (e) {
                var t = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
            },
            _respectSize: function (e) {
                var t = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    o = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    a = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return o && (e.width = t.minWidth), a && (e.height = t.minHeight), n && (e.width = t.maxWidth), s && (e.height = t.maxHeight), o && h && (e.left = r - t.minWidth), n && h && (e.left = r - t.maxWidth), a && u && (e.top = l - t.minHeight), s && u && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function (e) {
                for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], s = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseFloat(n[t]) || 0, i[t] += parseFloat(s[t]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function () {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function (e, t) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + t,
                        width: i.width - t
                    }
                },
                n: function (e, t, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function (e, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function (t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                sw: function (t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                },
                ne: function (t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                nw: function (t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                }
            },
            _propagate: function (t, i) {
                e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
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
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function (t) {
                var i = e(this).resizable("instance"),
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
                    u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(e.extend(l, u && h ? {
                    top: u,
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
                        s && s.length && e(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function () {
                var t, i, n, s, o, a, r, l = e(this).resizable("instance"),
                    h = l.options,
                    u = l.element,
                    c = h.containment,
                    d = c instanceof e ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
                d && (l.containerElement = e(d), /document/.test(c) || c === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(d), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
                    i[e] = l._num(t.css("padding" + n))
                }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                    height: t.innerHeight() - i[3],
                    width: t.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: a,
                    height: r
                }))
            },
            resize: function (t) {
                var i, n, s, o, a = e(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    u = a._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    d = a.containerElement,
                    f = !0;
                d[0] !== document && /static/.test(d.css("position")) && (c = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - c.left), u && (a.size.height = a.size.width / a.aspectRatio, f = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), u && (a.size.width = a.size.height * a.aspectRatio, f = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, u && (a.size.height = a.size.width / a.aspectRatio, f = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, u && (a.size.width = a.size.height * a.aspectRatio, f = !1)), f || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function () {
                var t = e(this).resizable("instance"),
                    i = t.options,
                    n = t.containerOffset,
                    s = t.containerPosition,
                    o = t.containerElement,
                    a = e(t.helper),
                    r = a.offset(),
                    l = a.outerWidth() - t.sizeDiff.width,
                    h = a.outerHeight() - t.sizeDiff.height;
                t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                }), t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var t = e(this).resizable("instance"),
                    i = t.options;
                e(i.alsoResize).each(function () {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseFloat(t.width()),
                        height: parseFloat(t.height()),
                        left: parseFloat(t.css("left")),
                        top: parseFloat(t.css("top"))
                    })
                })
            },
            resize: function (t, i) {
                var n = e(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    a = n.originalPosition,
                    r = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - a.top || 0,
                        left: n.position.left - a.left || 0
                    };
                e(s.alsoResize).each(function () {
                    var t = e(this),
                        n = e(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function (e, t) {
                        var i = (n[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (s[t] = i || null)
                    }), t.css(s)
                })
            },
            stop: function () {
                e(this).removeData("ui-resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var t = e(this).resizable("instance"),
                    i = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), t._addClass(t.ghost, "ui-resizable-ghost"), e.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
            },
            resize: function () {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function () {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var t, i = e(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    u = l[1] || 1,
                    c = Math.round((s.width - o.width) / h) * h,
                    d = Math.round((s.height - o.height) / u) * u,
                    f = o.width + c,
                    p = o.height + d,
                    m = n.maxWidth && n.maxWidth < f,
                    g = n.maxHeight && n.maxHeight < p,
                    v = n.minWidth && n.minWidth > f,
                    _ = n.minHeight && n.minHeight > p;
                n.grid = l, v && (f += h), _ && (p += u), m && (f -= h), g && (p -= u), /^(se|s|e)$/.test(r) ? (i.size.width = f, i.size.height = p) : /^(ne)$/.test(r) ? (i.size.width = f, i.size.height = p, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = f, i.size.height = p, i.position.left = a.left - c) : ((0 >= p - u || 0 >= f - h) && (t = i._getPaddingPlusBorderDimensions(this)), p - u > 0 ? (i.size.height = p, i.position.top = a.top - d) : (p = u - t.height, i.size.height = p, i.position.top = a.top + o.height - p), f - h > 0 ? (i.size.width = f, i.position.left = a.left - c) : (f = h - t.width, i.size.width = f, i.position.left = a.left + o.width - f))
            }
        });
        e.ui.resizable;
        e.widget("ui.dialog", {
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
                    using: function (t) {
                        var i = e(this).css(t).offset().top;
                        0 > i && e(this).css("top", t.top - i)
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
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function () {
                var e, t = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: e.noop,
            enable: e.noop,
            close: function (t) {
                var i = this;
                this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                    i._trigger("close", t)
                }))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (t, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                        return +e(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", t), n
            },
            open: function () {
                var t = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = e(e.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                    t._focusTabbable(), t._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function () {
                var e = this._focusedElement;
                e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).trigger("focus")
            },
            _keepFocus: function (t) {
                function i() {
                    var t = e.ui.safeActiveElement(this.document[0]),
                        i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                    i || this._focusTabbable()
                }
                t.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function () {
                this.uiDialog = e("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function (t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                        if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== n[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                                s.trigger("focus")
                            }), t.preventDefault()) : (this._delay(function () {
                                n.trigger("focus")
                            }), t.preventDefault())
                        }
                    },
                    mousedown: function (e) {
                        this._moveToTop(e) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function () {
                var t;
                this.uiDialogTitlebar = e("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function (t) {
                        e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                    label: e("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function (e) {
                        e.preventDefault(), this.close(e)
                    }
                }), t = e("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function (e) {
                this.options.title ? e.text(this.options.title) : e.html("&#160;")
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = e("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function () {
                var t = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (e.each(i, function (i, n) {
                    var s, o;
                    n = e.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = e.extend({
                        type: "button"
                    }, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, e("<button></button>", n).button(o).appendTo(t.uiButtonSet).on("click", function () {
                        s.apply(t.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function () {
                function t(e) {
                    return {
                        position: e.position,
                        offset: e.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        i._addClass(e(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, t(s))
                    },
                    drag: function (e, n) {
                        i._trigger("drag", e, t(n))
                    },
                    stop: function (s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, i._removeClass(e(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(o))
                    }
                })
            },
            _makeResizable: function () {
                function t(e) {
                    return {
                        originalPosition: e.originalPosition,
                        originalSize: e.originalSize,
                        position: e.position,
                        size: e.size
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
                        i._addClass(e(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, t(s))
                    },
                    resize: function (e, n) {
                        i._trigger("resize", e, t(n))
                    },
                    stop: function (s, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(e(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (t) {
                        this._makeFocusTarget(), this._focusedElement = e(t.target)
                    }
                })
            },
            _makeFocusTarget: function () {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function () {
                var t = this._trackingInstances(),
                    i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
            },
            _trackingInstances: function () {
                var e = this.document.data("ui-dialog-instances");
                return e || (e = [], this.document.data("ui-dialog-instances", e)), e
            },
            _minHeight: function () {
                var e = this.options;
                return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
            },
            _position: function () {
                var e = this.uiDialog.is(":visible");
                e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
            },
            _setOptions: function (t) {
                var i = this,
                    n = !1,
                    s = {};
                e.each(t, function (e, t) {
                    i._setOption(e, t), e in i.sizeRelatedOptions && (n = !0), e in i.resizableRelatedOptions && (s[e] = t)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function (t, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== t && (this._super(t, i), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: e("<a>").text("" + this.options.closeText).html()
                }), "draggable" === t && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || i === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var e, t, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), e = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), t = Math.max(0, n.minHeight - e), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - e) : "none", "auto" === n.height ? this.element.css({
                    minHeight: t,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var t = e(this);
                    return e("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (t) {
                return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var t = !0;
                    this._delay(function () {
                        t = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function (e) {
                            t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = e("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var e = this.document.data("ui-dialog-overlays") - 1;
                    e ? this.document.data("ui-dialog-overlays", e) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function () {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function (e, t) {
                "dialogClass" === e && this.uiDialog.removeClass(this.options.dialogClass).addClass(t), this._superApply(arguments)
            }
        });
        e.ui.dialog;
        e.widget("ui.droppable", {
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
                var t, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = e.isFunction(n) ? n : function (e) {
                    return e.is(n)
                }, this.proportions = function () {
                    return arguments.length ? void(t = arguments[0]) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function (t) {
                e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function (e) {
                for (var t = 0; t < e.length; t++) e[t] === this && e.splice(t, 1)
            },
            _destroy: function () {
                var t = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(t)
            },
            _setOption: function (t, i) {
                if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
                    return e.is(i)
                };
                else if ("scope" === t) {
                    var n = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(t, i)
            },
            _activate: function (t) {
                var i = e.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function (t) {
                var i = e.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function (t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(i)))
            },
            _out: function (t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(i)))
            },
            _drop: function (t, i) {
                var n = i || e.ui.ddmanager.current,
                    s = !1;
                return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                    var i = e(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && v(n, e.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t) ? (s = !0, !1) : void 0
                }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", t, this.ui(n)), this.element) : !1) : !1
            },
            ui: function (e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
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
        var v = e.ui.intersect = function () {
            function e(e, t, i) {
                return e >= t && t + i > e
            }
            return function (t, i, n, s) {
                if (!i.offset) return !1;
                var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    a = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    r = o + t.helperProportions.width,
                    l = a + t.helperProportions.height,
                    h = i.offset.left,
                    u = i.offset.top,
                    c = h + i.proportions().width,
                    d = u + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= h && c >= r && a >= u && d >= l;
                    case "intersect":
                        return h < o + t.helperProportions.width / 2 && r - t.helperProportions.width / 2 < c && u < a + t.helperProportions.height / 2 && l - t.helperProportions.height / 2 < d;
                    case "pointer":
                        return e(s.pageY, u, i.proportions().height) && e(s.pageX, h, i.proportions().width);
                    case "touch":
                        return (a >= u && d >= a || l >= u && d >= l || u > a && l > d) && (o >= h && c >= o || r >= h && c >= r || h > o && r > c);
                    default:
                        return !1
                }
            }
        }();
        e.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function (t, i) {
                var n, s, o = e.ui.ddmanager.droppables[t.options.scope] || [],
                    a = i ? i.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                e: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || t && !o[n].accept.call(o[n].element[0], t.currentItem || t.element))) {
                        for (s = 0; s < r.length; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue e
                            }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function (t, i) {
                var n = !1;
                return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && v(t, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function (t, i) {
                t.element.parentsUntil("body").on("scroll.droppable", function () {
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function (t, i) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, a = v(t, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
                            return e(this).droppable("instance").options.scope === s
                        }), o.length && (n = e(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function (t, i) {
                t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            }
        }, e.uiBackCompat !== !1 && e.widget("ui.droppable", e.ui.droppable, {
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
        });
        e.ui.droppable, e.widget("ui.progressbar", {
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
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = e("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function (e) {
                return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), void this._refreshValue())
            },
            _constrainedValue: function (e) {
                return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
            },
            _setOptions: function (e) {
                var t = e.value;
                delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _setOption: function (e, t) {
                "max" === e && (t = Math.max(this.min, t)), this._super(e, t)
            },
            _setOptionDisabled: function (e) {
                this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        }), e.widget("ui.selectable", e.ui.mouse, {
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
                var t = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    t.elementPos = e(t.element[0]).offset(), t.selectees = e(t.options.filter, t.element[0]), t._addClass(t.selectees, "ui-selectee"), t.selectees.each(function () {
                        var i = e(this),
                            n = i.offset(),
                            s = {
                                left: n.left - t.elementPos.left,
                                top: n.top - t.elementPos.top
                            };
                        e.data(this, "selectable-item", {
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
                }, this.refresh(), this._mouseInit(), this.helper = e("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function () {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function (t) {
                var i = this,
                    n = this.options;
                this.opos = [t.pageX, t.pageY], this.elementPos = e(this.element[0]).offset(), this.options.disabled || (this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var n = e.data(this, "selectable-item");
                    n.startselected = !0, t.metaKey || t.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: n.element
                    }))
                }), e(t.target).parents().addBack().each(function () {
                    var n, s = e.data(this, "selectable-item");
                    return s ? (n = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", t, {
                        selecting: s.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: s.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function (t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = t.pageX,
                        l = t.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function () {
                        var i = e.data(this, "selectable-item"),
                            h = !1,
                            u = {};
                        i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left, u.right = i.right + n.elementPos.left, u.top = i.top + n.elementPos.top, u.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(u.left > r || u.right < o || u.top > l || u.bottom < a) : "fit" === s.tolerance && (h = u.left > o && u.right < r && u.top > a && u.bottom < l), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", t, {
                            selecting: i.element
                        }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", t, {
                            unselecting: i.element
                        }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", t, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function (t) {
                var i = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                    var n = e.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {
                        unselected: n.element
                    })
                }), e(".ui-selecting", this.element[0]).each(function () {
                    var n = e.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {
                        selected: n.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.selectmenu", [e.ui.formResetMixin, {
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
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = e()
            },
            _drawButton: function () {
                var t, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function (e) {
                        this.button.focus(), e.preventDefault()
                    }
                }), this.element.hide(), this.button = e("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = e("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function () {
                var t = this;
                this.menu = e("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = e("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function (e, i) {
                        e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                    },
                    focus: function (e, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != t.focusIndex && n.index !== t.focusIndex && (t._trigger("focus", e, {
                            item: n
                        }), t.isOpen || t._select(n, e)), t.focusIndex = n.index, t.button.attr("aria-activedescendant", t.menuItems.eq(n.index).attr("id"))
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
                var e, t = this.element.find("option");
                this.menu.empty(), this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, t.length && (e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (e) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)))
            },
            _position: function () {
                this.menuWrap.position(e.extend({ of: this.button
                }, this.options.position))
            },
            close: function (e) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderButtonItem: function (t) {
                var i = e("<span>");
                return this._setText(i, t.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function (t, i) {
                var n = this,
                    s = "";
                e.each(i, function (i, o) {
                    var a;
                    o.optgroup !== s && (a = e("<li>", {
                        text: o.optgroup
                    }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(t), s = o.optgroup), n._renderItemData(t, o)
                })
            },
            _renderItemData: function (e, t) {
                return this._renderItem(e, t).data("ui-selectmenu-item", t)
            },
            _renderItem: function (t, i) {
                var n = e("<li>"),
                    s = e("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(t)
            },
            _setText: function (e, t) {
                t ? e.text(t) : e.html("&#160;")
            },
            _move: function (e, t) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](s).eq(-1) : i[e + "All"](s).eq(0), n.length && this.menuInstance.focus(t, n)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function (e) {
                this[this.isOpen ? "close" : "open"](e)
            },
            _setSelection: function () {
                var e;
                this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (t) {
                    this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + e.ui.escapeSelector(this.ids.button)).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var e;
                    window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function (e) {
                    this._setSelection(), this._toggle(e)
                },
                keydown: function (t) {
                    var i = !0;
                    switch (t.keyCode) {
                        case e.ui.keyCode.TAB:
                        case e.ui.keyCode.ESCAPE:
                            this.close(t), i = !1;
                            break;
                        case e.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case e.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case e.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case e.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case e.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case e.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), i = !1
                    }
                    i && t.preventDefault()
                }
            },
            _selectFocusedItem: function (e) {
                var t = this.menuItems.eq(this.focusIndex).parent("li");
                t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
            },
            _select: function (e, t) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = e.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(e)), this._setAria(e), this._trigger("select", t, {
                    item: e
                }), e.index !== i && this._trigger("change", t, {
                    item: e
                }), this.close(t)
            },
            _setAria: function (e) {
                var t = this.menuItems.eq(e.index).attr("id");
                this.button.attr({
                    "aria-labelledby": t,
                    "aria-activedescendant": t
                }), this.menu.attr("aria-activedescendant", t)
            },
            _setOption: function (e, t) {
                if ("icons" === e) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
                }
                this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "width" === e && this._resizeButton()
            },
            _setOptionDisabled: function (e) {
                this._super(e), this.menuInstance.option("disabled", e), this.button.attr("aria-disabled", e), this._toggleClass(this.button, null, "ui-state-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function () {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function () {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var e = this.options.width;
                return e === !1 ? void this.button.css("width", "") : (null === e && (e = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(e))
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                var e = this._super();
                return e.disabled = this.element.prop("disabled"), e
            },
            _parseOptions: function (t) {
                var i = this,
                    n = [];
                t.each(function (t, s) {
                    n.push(i._parseOption(e(s), t))
                }), this.items = n
            },
            _parseOption: function (e, t) {
                var i = e.parent("optgroup");
                return {
                    element: e,
                    index: t,
                    value: e.val(),
                    label: e.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || e.prop("disabled")
                }
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), e.widget("ui.slider", e.ui.mouse, {
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
                var t, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), t = s.length; i > t; t++) a.push(o);
                this.handles = s.add(e(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                    e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
                })
            },
            _createRange: function () {
                var t = this.options;
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function (t) {
                var i, n, s, o, a, r, l, h, u = this,
                    c = this.options;
                return c.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: t.pageX,
                    y: t.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                    var i = Math.abs(n - u.values(t));
                    (s > i || s === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (s = i, o = e(this), a = t)
                }), r = this._start(t, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - l.left - o.width() / 2,
                    top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, a, n), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (e) {
                var t = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1
            },
            _mouseStop: function (e) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (e) {
                var t, i, n, s, o;
                return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function (e, t, i) {
                var n = {
                    handle: this.handles[e],
                    handleIndex: e,
                    value: void 0 !== t ? t : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== t ? t : this.values(e), n.values = i || this.values()), n
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length
            },
            _start: function (e, t) {
                return this._trigger("start", e, this._uiHash(t))
            },
            _slide: function (e, t, i) {
                var n, s, o = this.value(),
                    a = this.values();
                this._hasMultipleValues() && (s = this.values(t ? 0 : 1), o = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === t ? Math.min(s, i) : Math.max(s, i)), a[t] = i), i !== o && (n = this._trigger("slide", e, this._uiHash(t, i, a)), n !== !1 && (this._hasMultipleValues() ? this.values(t, i) : this.value(i)))
            },
            _stop: function (e, t) {
                this._trigger("stop", e, this._uiHash(t))
            },
            _change: function (e, t) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
            },
            value: function (e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (t, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function (t, i) {
                var n, s = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (s = this.options.values.length), this._super(t, i), t) {
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
            _setOptionDisabled: function (e) {
                this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            _value: function () {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function (e) {
                var t, i, n;
                if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    n = e - i;
                return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function () {
                var e = this.options.max,
                    t = this._valueMin(),
                    i = this.options.step,
                    n = Math.round((e - t) / i) * i;
                e = n + t, e > this.options.max && (e -= i), this.max = parseFloat(e.toFixed(this._precision()))
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
            },
            _precisionOf: function (e) {
                var t = e.toString(),
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshRange: function (e) {
                "vertical" === e && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === e && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function () {
                var t, i, n, s, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    h = this._animateOff ? !1 : r.animate,
                    u = {};
                this._hasMultipleValues() ? this.handles.each(function (n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - t + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - t + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), t = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
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
                keydown: function (t) {
                    var i, n, s, o, a = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), i = this._start(t, a), i === !1)) return
                    }
                    switch (o = this.options.step, n = s = this._hasMultipleValues() ? this.values(a) : this.value(), t.keyCode) {
                        case e.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (n === this._valueMax()) return;
                            s = this._trimAlignValue(n + o);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (n === this._valueMin()) return;
                            s = this._trimAlignValue(n - o)
                    }
                    this._slide(t, a, s)
                },
                keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), this._removeClass(e(t.target), null, "ui-state-active"))
                }
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
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
            _isOverAxis: function (e, t, i) {
                return e >= t && t + i > e
            },
            _isFloating: function (e) {
                return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (e, t) {
                this._super(e, t), "handle" === e && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                var t = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), e.each(this.items, function () {
                    t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function () {
                this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (t, i) {
                var n = null,
                    s = !1,
                    o = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                    return e.data(this, o.widgetName + "-item") === o ? (n = e(this), !1) : void 0
                }), e.data(t.target, o.widgetName + "-item") === o && (n = e(t.target)), n && (!this.options.handle || i || (e(this.options.handle, n).find("*").addBack().each(function () {
                    this === t.target && (s = !0)
                }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function (t, i, n) {
                var s, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"),
                    this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = e("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function (t) {
                var i, n, s, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : t.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : t.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (t.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), t.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !e.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], s) : !0)) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(t, n), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (t, i) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp(new e.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    n = [];
                return t = t || {}, e(i).each(function () {
                    var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                }), !n.length && t.key && n.push(t.key + "="), n.join("&")
            },
            toArray: function (t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    n = [];
                return t = t || {}, i.each(function () {
                    n.push(e(t.item || this).attr(t.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function (e) {
                var t = this.positionAbs.left,
                    i = t + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = e.left,
                    a = o + e.width,
                    r = e.top,
                    l = r + e.height,
                    h = this.offset.click.top,
                    u = this.offset.click.left,
                    c = "x" === this.options.axis || n + h > r && l > n + h,
                    d = "y" === this.options.axis || t + u > o && a > t + u,
                    f = c && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function (e) {
                var t, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    o = n && s;
                return o ? (t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1)) : !1
            },
            _intersectsWithSides: function (e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && t || "up" === n && !t)
            },
            _getDragVerticalDirection: function () {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? "right" : "left")
            },
            refresh: function (e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function (t) {
                function i() {
                    r.push(this)
                }
                var n, s, o, a, r = [],
                    l = [],
                    h = this._connectWith();
                if (h && t)
                    for (n = h.length - 1; n >= 0; n--)
                        for (o = e(h[n], this.document[0]), s = o.length - 1; s >= 0; s--) a = e.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return e(r)
            },
            _removeCurrentsFromItems: function () {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function (e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (t) {
                this.items = [], this.containers = [this];
                var i, n, s, o, a, r, l, h, u = this.items,
                    c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = e(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = e.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (c.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                            item: this.currentItem
                        }) : e(o.options.items, o.element), o]), this.containers.push(o));
                for (i = c.length - 1; i >= 0; i--)
                    for (a = c[i][1], r = c[i][0], n = 0, h = r.length; h > n; n++) l = e(r[n]), l.data(this.widgetName + "-item", a), u.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (t) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, o;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item, t || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (t) {
                t = t || this;
                var i, n = t.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function () {
                        var n = t.currentItem[0].nodeName.toLowerCase(),
                            s = e("<" + n + ">", t.document[0]);
                        return t._addClass(s, "ui-sortable-placeholder", i || t.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(s)) : "tr" === n ? t._createTrPlaceholder(t.currentItem, s) : "img" === n && s.attr("src", t.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function (e, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function (t, i) {
                var n = this;
                t.children().each(function () {
                    e("<td>&#160;</td>", n.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function (t) {
                var i, n, s, o, a, r, l, h, u, c, d = null,
                    f = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && e.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], f = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", t, this._uiHash(this)), this.containers[f].containerCache.over = 1);
                    else {
                        for (s = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), a = u ? "left" : "top", r = u ? "width" : "height", c = u ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) e.contains(this.containers[f].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, t[c] - l > this.items[n][r] / 2 && (h = !0), Math.abs(t[c] - l) < s && (s = Math.abs(t[c] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[f]) return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[f].element, !0), this._trigger("change", t, this._uiHash()), this.containers[f]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", t, this._uiHash(this)), this.containers[f].containerCache.over = 1
                    }
            },
            _createHelper: function (t) {
                var i = this.options,
                    n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
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
                var t, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = e(s.containment)[0], i = e(s.containment).offset(), n = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (t, i) {
                i || (i = this.position);
                var n = "absolute" === t ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (t) {
                var i, n, s = this.options,
                    o = t.pageX,
                    a = t.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function (e, t, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function () {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function (e, t) {
                function i(e, t, i) {
                    return function (n) {
                        i._trigger(e, n, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && s.push(function (e) {
                        this._trigger("receive", e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || s.push(function (e) {
                        this._trigger("update", e, this._uiHash())
                    }), this !== this.currentContainer && (t || (s.push(function (e) {
                        this._trigger("remove", e, this._uiHash())
                    }), s.push(function (e) {
                        return function (t) {
                            e._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function (e) {
                        return function (t) {
                            e._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (n = 0; n < s.length; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || e([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        });
        e.widget("ui.spinner", {
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
                var t = this._super(),
                    i = this.element;
                return e.each(["min", "max", "step"], function (e, n) {
                    var s = i.attr(n);
                    null != s && s.length && (t[n] = s)
                }), t
            },
            _events: {
                keydown: function (e) {
                    this._start(e) && this._keydown(e) && e.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (e) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", e)))
                },
                mousewheel: function (e, t) {
                    if (t) {
                        if (!this.spinning && !this._start(e)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(e)
                        }, 100), e.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (t) {
                    function i() {
                        var t = this.element[0] === e.ui.safeActiveElement(this.document[0]);
                        t || (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === e.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (t) {
                    return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : void this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
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
            _keydown: function (t) {
                var i = this.options,
                    n = e.ui.keyCode;
                switch (t.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, t), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, t), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, t), !0
                }
                return !1
            },
            _start: function (e) {
                return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (e, t, i) {
                e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, t, i)
                }, e), this._spin(t * this.options.step, i)
            },
            _spin: function (e, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function (t) {
                var i = this.options.incremental;
                return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function () {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
            },
            _precisionOf: function (e) {
                var t = e.toString(),
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function (e) {
                var t, i, n = this.options;
                return t = null !== n.min ? n.min : 0, i = e - t, i = Math.round(i / n.step) * n.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== n.max && e > n.max ? n.max : null !== n.min && e < n.min ? n.min : e
            },
            _stop: function (e) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
            },
            _setOption: function (e, t) {
                var i, n, s;
                return "culture" === e || "numberFormat" === e ? (i = this._parse(this.element.val()), this.options[e] = t, void this.element.val(this._format(i))) : (("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, t.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, t.down)), void this._super(e, t))
            },
            _setOptionDisabled: function (e) {
                this._super(e), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable")
            },
            _setOptions: a(function (e) {
                this._super(e)
            }),
            _parse: function (e) {
                return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
            },
            _format: function (e) {
                return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var e = this.value();
                return null === e ? !1 : e === this._adjustValue(e)
            },
            _value: function (e, t) {
                var i;
                "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: a(function (e) {
                this._stepUp(e)
            }),
            _stepUp: function (e) {
                this._start() && (this._spin((e || 1) * this.options.step), this._stop())
            },
            stepDown: a(function (e) {
                this._stepDown(e)
            }),
            _stepDown: function (e) {
                this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
            },
            pageUp: a(function (e) {
                this._stepUp((e || 1) * this.options.page)
            }),
            pageDown: a(function (e) {
                this._stepDown((e || 1) * this.options.page)
            }),
            value: function (e) {
                return arguments.length ? void a(this._value).call(this, e) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        }), e.uiBackCompat !== !1 && e.widget("ui.spinner", e.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function () {
                return "<span>"
            },
            _buttonHtml: function () {
                return "<a></a><a></a>"
            }
        });
        e.ui.spinner;
        e.widget("ui.tabs", {
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
                var e = /#.*$/;
                return function (t) {
                    var i, n;
                    i = t.href.replace(e, ""), n = location.href.replace(e, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (e) {}
                    try {
                        n = decodeURIComponent(n)
                    } catch (e) {}
                    return t.hash.length > 1 && i === n
                }
            }(),
            _create: function () {
                var t = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                    return t.tabs.index(e)
                }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = e(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var t = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === t && (n && this.tabs.each(function (i, s) {
                    return e(s).attr("aria-controls") === n ? (t = i, !1) : void 0
                }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : e()
                }
            },
            _tabKeydown: function (t) {
                var i = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            n++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case e.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case e.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function (t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function (t) {
                return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (t, i) {
                function n() {
                    return t > s && (t = 0), 0 > t && (t = s), t
                }
                for (var s = this.tabs.length - 1; - 1 !== e.inArray(n(), this.options.disabled);) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function (e, t) {
                return e = this._findNextTab(e, t), this.tabs.eq(e).trigger("focus"), e
            },
            _setOption: function (e, t) {
                return "active" === e ? void this._activate(t) : (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
            },
            _sanitizeSelector: function (e) {
                return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                    return i.index(e)
                }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
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
                var t = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                    e(this).is(".ui-state-disabled") && t.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                    e(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                    return e("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = e(), this.anchors.each(function (i, n) {
                    var s, o, a, r = e(n).uniqueId().attr("id"),
                        l = e(n).closest("li"),
                        h = l.attr("aria-controls");
                    t._isLocal(n) ? (s = n.hash, a = s.substring(1), o = t.element.find(t._sanitizeSelector(s))) : (a = l.attr("aria-controls") || e({}).uniqueId()[0].id, s = "#" + a, o = t.element.find(s), o.length || (o = t._createPanel(a), o.insertAfter(t.panels[i - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function (t) {
                return e("<div>").attr("id", t).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function (t) {
                var i, n, s;
                for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; n = this.tabs[s]; s++) i = e(n), t === !0 || -1 !== e.inArray(s, t) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
            },
            _setupEvents: function (t) {
                var i = {};
                t && e.each(t.split(" "), function (e, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function (e) {
                        e.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (t) {
                var i, n = this.element.parent();
                "fill" === t ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var t = e(this),
                        n = t.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -= e(this).outerHeight(!0)
                }), this.panels.each(function () {
                    e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                    i = Math.max(i, e(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (t) {
                var i = this.options,
                    n = this.active,
                    s = e(t.currentTarget),
                    o = s.closest("li"),
                    a = o[0] === n[0],
                    r = a && i.collapsible,
                    l = r ? e() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : e(),
                    u = {
                        oldTab: n,
                        oldPanel: h,
                        newTab: r ? e() : o,
                        newPanel: l
                    };
                t.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? e() : o, this.xhr && this.xhr.abort(), h.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), t), this._toggle(t, u))
            },
            _toggle: function (t, i) {
                function n() {
                    o.running = !1, o._trigger("activate", t, i)
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
                    return 0 === e(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (t) {
                var i, n = this._findActive(t);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function (t) {
                return t === !1 ? e() : this.tabs.eq(t)
            },
            _getIndex: function (t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))), t
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function () {
                    var t = e(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (t) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
                    return e !== t ? e : null
                }) : e.map(this.tabs, function (e, i) {
                    return i !== t ? i : null
                })), this._setOptionDisabled(i))
            },
            disable: function (t) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === t) i = !0;
                    else {
                        if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                        i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function (t, i) {
                t = this._getIndex(t);
                var n = this,
                    s = this.tabs.eq(t),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: a
                    },
                    l = function (e, t) {
                        "abort" === t && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), e === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = e.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (e, t, s) {
                    setTimeout(function () {
                        a.html(e), n._trigger("load", i, r), l(s, t)
                    }, 1)
                }).fail(function (e, t) {
                    setTimeout(function () {
                        l(e, t)
                    }, 1)
                })))
            },
            _ajaxSettings: function (t, i, n) {
                var s = this;
                return {
                    url: t.attr("href").replace(/#.*$/, ""),
                    beforeSend: function (t, o) {
                        return s._trigger("beforeLoad", i, e.extend({
                            jqXHR: t,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function (t) {
                var i = e(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), e.uiBackCompat !== !1 && e.widget("ui.tabs", e.ui.tabs, {
            _processTabs: function () {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        });
        e.ui.tabs;
        e.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function () {
                    var t = e(this).attr("title") || "";
                    return e("<a>").text(t).html()
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
            _addDescribedBy: function (t, i) {
                var n = (t.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(n.join(" ")))
            },
            _removeDescribedBy: function (t) {
                var i = t.data("ui-tooltip-id"),
                    n = (t.attr("aria-describedby") || "").split(/\s+/),
                    s = e.inArray(i, n); - 1 !== s && n.splice(s, 1), t.removeData("ui-tooltip-id"), n = e.trim(n.join(" ")), n ? t.attr("aria-describedby", n) : t.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = e("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = e([])
            },
            _setOption: function (t, i) {
                var n = this;
                this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
                    n._updateContent(t.element)
                })
            },
            _setOptionDisabled: function (e) {
                this[e ? "_disable" : "_enable"]()
            },
            _disable: function () {
                var t = this;
                e.each(this.tooltips, function (i, n) {
                    var s = e.Event("blur");
                    s.target = s.currentTarget = n.element[0], t.close(s, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                    var t = e(this);
                    return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
                }))
            },
            _enable: function () {
                this.disabledTitles.each(function () {
                    var t = e(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                }), this.disabledTitles = e([])
            },
            open: function (t) {
                var i = this,
                    n = e(t ? t.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), t && "mouseover" === t.type && n.parents().each(function () {
                    var t, n = e(this);
                    n.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._registerCloseHandlers(t, n), this._updateContent(n, t))
            },
            _updateContent: function (e, t) {
                var i, n = this.options.content,
                    s = this,
                    o = t ? t.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(t, e, n) : (i = n.call(e[0], function (i) {
                    s._delay(function () {
                        e.data("ui-tooltip-open") && (t && (t.type = o), this._open(t, e, i))
                    })
                }), void(i && this._open(t, e, i)))
            },
            _open: function (t, i, n) {
                function s(e) {
                    h.of = e, a.is(":hidden") || a.position(h)
                }
                var o, a, r, l, h = e.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = e("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(t)) : a.position(e.extend({ of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                        a.is(":visible") && (s(h.of), clearInterval(r))
                    }, e.fx.interval)), this._trigger("open", t, {
                        tooltip: a
                    })
                }
            },
            _registerCloseHandlers: function (t, i) {
                var n = {
                    keyup: function (t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var n = e.Event(t);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function () {
                    this._removeTooltip(this._find(i).tooltip)
                }), t && "mouseover" !== t.type || (n.mouseleave = "close"), t && "focusin" !== t.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function (t) {
                var i, n = this,
                    s = e(t ? t.currentTarget : this.element),
                    o = this._find(s);
                return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                    n._removeTooltip(e(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
                    e(i.element).attr("title", i.title), delete n.parents[t]
                }), o.closing = !0, this._trigger("close", t, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
            },
            _tooltip: function (t) {
                var i = e("<div>").attr("role", "tooltip"),
                    n = e("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(t)), this.tooltips[s] = {
                    element: t,
                    tooltip: i
                }
            },
            _find: function (e) {
                var t = e.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            },
            _removeTooltip: function (e) {
                e.remove(), delete this.tooltips[e.attr("id")]
            },
            _appendTo: function (e) {
                var t = e.closest(".ui-front, dialog");
                return t.length || (t = this.document[0].body), t
            },
            _destroy: function () {
                var t = this;
                e.each(this.tooltips, function (i, n) {
                    var s = e.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], t.close(s, !0), e("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), e.uiBackCompat !== !1 && e.widget("ui.tooltip", e.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function () {
                var e = this._superApply(arguments);
                return this.options.tooltipClass && e.tooltip.addClass(this.options.tooltipClass), e
            }
        });
        e.ui.tooltip
    })
}, , , , , , , , , , , , , , , , , , function (e, t, i) {
    (function ($) {
        "use strict";
        var t = function () {
            var e = {
                init: function () {
                    var e = this;
                    this.menu = document.getElementsByClassName("menu")[0], this.slideMenu = document.getElementsByClassName("slideDownMenu")[0], this.burgerMenu = $(".i-burger-menu"), this.navMobile = document.getElementsByClassName("navigation-mobile")[0], this.slideTriggers = document.getElementsByClassName("slide-menu");
                    for (var t = 0; t < this.slideTriggers.length; t++) this.slideTriggers[t].addEventListener("mouseover", function (t) {
                        e.animate(t.type)
                    }), this.slideTriggers[t].addEventListener("mouseleave", function (t) {
                        e.animate(t.type)
                    });
                    this.burgerMenu.click(function () {
                        var t = e.navMobile.getElementsByTagName("UL")[0];
                        return window.innerWidth < 1200 ? void(this.className.indexOf("open") < 0 ? (this.className = this.className + " open", $(e.navMobile).animate({
                            left: 0
                        }), TweenLite.to(t, .2, {
                            delay: .1,
                            alpha: 1,
                            ease: Power0.easeNone
                        })) : (this.className = this.className.replace(" open", ""), TweenLite.to(t, .15, {
                            alpha: 0,
                            ease: Power0.easeNone
                        }), $(e.navMobile).delay(.1).animate({
                            left: "-401px"
                        }))) : !1
                    })
                },
                returnChild: function (e, t) {
                    for (var i = [], n = 0; n < t.children.length; n++) t.children[n].className.indexOf(e) > -1 && i.push(t.children[n]);
                    return i.length <= 1 ? i[0] : i
                },
                animate: function (e) {
                    var t = this;
                    if (this.slideMenuItems = this.slideMenu.getElementsByTagName("a"), "mouseover" == e) {
                        TweenLite.to(t.slideMenu, .6, {
                            display: "block",
                            height: "300px",
                            ease: Expo.easeOut,
                            alpha: 1
                        });
                        for (var i = 0; i < t.slideMenuItems.length; i++) TweenLite.to(t.slideMenuItems[i], .5, {
                            top: 0,
                            delay: .15 * i,
                            alpha: 1,
                            ease: Expo.easeOut
                        })
                    } else {
                        if ("mouseleave" != e) return !1;
                        for (var i = 0; i < t.slideMenuItems.length; i++) TweenLite.to(t.slideMenuItems[i], .5, {
                            top: "-100px",
                            delay: .1 * i,
                            alpha: 0,
                            ease: Expo.easeOut
                        });
                        TweenLite.to(t.slideMenu, .5, {
                            delay: .2,
                            display: "none",
                            height: 0,
                            alpha: 0,
                            ease: "linear"
                        })
                    }
                },
                slideAccordion: function (e, t, i) {
                    e.className.indexOf("active") > -1 ? (e.className = e.className.replace(" active", ""), null !== t.firstSlideDown && TweenLite.to(t.firstSlideDown, .1, {
                        height: t.firstSlideDown_H - i,
                        ease: Power0.easeNone
                    }), TweenLite.to(t.navSecondary, .1, {
                        delay: .1,
                        alpha: 0,
                        ease: Power0.easeNone
                    }), TweenLite.to(t.slideDownMenu, .1, {
                        height: 0,
                        ease: Power0.easeNone
                    })) : (e.className = e.className + " active", null !== t.firstSlideDown && TweenLite.to(t.firstSlideDown, .1, {
                        height: i + t.firstSlideDown_H,
                        ease: Power0.easeNone
                    }), TweenLite.to(t.navSecondary, .1, {
                        delay: .1,
                        alpha: 1,
                        ease: Power0.easeNone
                    }), TweenLite.to(t.slideDownMenu, .1, {
                        height: i,
                        alpha: 1,
                        ease: Power0.easeNone
                    }))
                }
            };
            e.init()
        }();
        window.addEventListener("load", function () {
            var e = document.getElementById("overlay-search"),
                t = document.getElementsByClassName("i-search")[0],
                i = document.getElementById("close-search");
            t.addEventListener("click", function (t) {
                TweenLite.to(e, .8, {
                    display: "block",
                    top: 0,
                    alpha: 1,
                    ease: Expo.easeOut
                }), t.target.className.indexOf(this.className) < 0 && t.preventDefault()
            }), i.addEventListener("click", function (t) {
                TweenLite.to(e, .4, {
                    alpha: 0,
                    ease: Power4.easeIn,
                    onComplete: function () {
                        e.style.display = "none", e.style.top = "-110%"
                    }
                }), t.preventDefault()
            })
        });
        e.exports = t
    }).call(t, i(2))
}, function (e, t) {
    "use strict";
    var i = function () {
        var e = {
            init: function () {
                this.triggers = document.getElementsByClassName("spec-name"), this.sizePickersCont = document.getElementsByClassName("sizes"), this.sizePickersList = [], this.sizePickers = [];
                for (var e = 0; e < this.sizePickersCont.length; e++) this.sizePickersList.push(this.sizePickersCont[e].getElementsByTagName("LI")), this.sizePickers.push(this.sizePickersCont[e].getElementsByTagName("a"));
                for (var t = this, i = 0; i < this.triggers.length; i++) "SPAN" !== this.triggers[i].tagName && (this.triggers[i].onclick = function (e) {
                    var t = this.nextElementSibling.className.indexOf("spec-toggle") > -1 ? this.nextElementSibling : null,
                        i = t.getElementsByTagName("div")[0].offsetHeight;
                    return null !== t && (t.className.indexOf("active") < 0 ? TweenLite.to(t, .6, {
                        className: "+=active",
                        height: i + "px",
                        marginBottom: "20px",
                        ease: Power4.easeOut
                    }) : TweenLite.to(t, .6, {
                        className: "-=active",
                        height: "0px",
                        marginBottom: "0px",
                        ease: Power4.easeOut
                    })), !1
                });
                for (var n = 0; n < this.sizePickers.length; n++)
                    for (var s = 0; s < this.sizePickers[n].length; s++) this.sizePickers[n][s].pos = n, this.sizePickers[n][s].onclick = function (e) {
                        if (!(this.parentElement.className.indexOf("active") < 0)) return !1;
                        for (var e = 0; e < t.sizePickers[this.pos].length; e++) t.sizePickers[this.pos][e].parentElement.className = "";
                        return this.parentElement.className = "active", !1
                    }
            }
        };
        return e.init(), e
    }();
    e.exports = i
}, function (e, t) {
    "use strict";
    var i = {
        init: function (e) {
            function t(e) {
                return window.pageYOffset > i.targetY ? !1 : (window.requestAnimationFrame(t), i.timeNow = Date.now(), i.delta = i.timeNow - i.timeStart, i.timeStart = i.timeNow - i.delta % i.interval, i.index += 61.666788, void window.scroll(0, i.index))
            }
            var i = this;
            this.container = document.getElementsByClassName(e.container)[0], this.targetY = i.container.offsetTop, this.fps = 60, this.timeStart = Date.now(), this.interval = 1e3 / this.fps, this.timeNow, this.delta, this.index = 0, window.location.href.indexOf("sOcRuXJnMT=1") > -1 && t(), this.button = document.getElementsByClassName(e.button);
            for (var n = 0; n < this.button.length; n++) this.button[n].addEventListener("click", function (e) {
                i.targetY = i.container.offsetTop, t()
            });
            window.addEventListener("scroll", function () {
                i.index = this.pageYOffset
            })
        }
    };
    i.init({
        container: "product",
        button: "shop"
    });
    e.exports = i
}, function (e, t) {
    "use strict";
    var i = {
        win: window.innerWidth,
        cont: document.getElementsByClassName("featureCont")[0],
        items: document.getElementsByClassName("featureItem"),
        init: function (e) {
            if (this.items[0] == undefined) return;
            var t = this;
            this.itemsLength = this.items.length;
            this.itemsWidth = this.win;
            this.containerWidth = this.itemsWidth * this.itemsLength;
            this.cont.style.width = this.containerWidth + "px";
            this.touchstartX;
            this.touchmoveX;
            this.touchendX;
            this.index = 0;
            this.ended = false;
            this.mainContainer = e.pageContainer == undefined ? e : e.pageContainer;
            this.speed = e.speed == undefined ? 1.3 : e.speed;
            this.ease = e.ease == undefined ? Power4 : e.ease;
            this.autoPlay = e.autoPlay == undefined ? true : e.autoPlay;
            this.resize = false;
            this.slideTime = 6e3;
            this.itemInfo = this.cont.getElementsByTagName("SECTION");
            if (this.autoPlay && this.items.length > 1) {
                this.startAutoSlide = setInterval(function () {
                    t.autoSlide()
                }, this.slideTime)
            }
            this.navCont = document.getElementsByClassName("nav-bullets")[0];
            this.navCont.innerHTML += "<ul>";
            for (var i = 0; i < this.itemsLength; i++) {
                this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>';
                this.items[i].style.width = this.itemsWidth + "px";
                this.items[i].pos = i;
                this.items[i].slideTitle = this.items[i].getElementsByTagName("h1")[0] == undefined ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0];
                this.items[i].bts = this.items[i].getElementsByClassName("btn-box")[0] == undefined ? "" : this.items[i].getElementsByClassName("btn-box")[0]
            }
            this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI");
            this.navBullet[0].className += "active";
            for (var n = 0; n < this.navBullet.length; n++) {
                this.navBullet[n].pos = n;
                this.navBullet[n].onclick = function (e) {
                    clearInterval(t.startAutoSlide);
                    var i = this.pos,
                        n;
                    for (var s = 0; s < t.navBullet.length; s++) {
                        if (t.navBullet[s].className.indexOf("active") > -1) {
                            n = s
                        }
                    }
                    if (this.className.indexOf("active") > -1) {
                        return false
                    } else {
                        if (i > n) {
                            t.index = i;
                            t.goTo(i, "f", "click", n)
                        } else {
                            t.index = i;
                            t.goTo(i, "r", "click", n)
                        }
                    }
                    if (t.autoPlay) {
                        t.index = i
                    }
                    e.preventDefault()
                }
            }
            window.addEventListener("resize", function () {
                t.resize = true;
                t.responsive.getHeight(t.mainContainer, this.innerWidth)
            });
            TweenLite.to(t.itemInfo[0], .4, {
                alpha: 1,
                ease: "linear"
            });
            this.responsive.getHeight(this.mainContainer, window.innerWidth)
        },
        responsive: {
            getHeight: function (e, t) {
                var t = t;
                this.bodyChilds = document.getElementsByTagName("BODY")[0].childNodes;
                this.previousHeight = 0;
                for (var n = 0; n < this.bodyChilds.length; n++) {
                    var s = this.bodyChilds[n].className !== undefined ? this.bodyChilds[n].className.indexOf(e) < 0 ? true : false : null;
                    if (s !== false && this.bodyChilds[n].className !== "parallax-mirror") {
                        if (this.bodyChilds[n].nodeName !== "#text" && this.bodyChilds[n].offsetHeight !== undefined) {
                            if (this.bodyChilds[n].style.visibility !== "hidden") {
                                this.previousHeight += this.bodyChilds[n].offsetHeight
                            }
                        }
                    } else {
                        this.attachHeight(this.previousHeight, i.cont, t)
                    }
                }
            },
            attachHeight: function (e, t, n) {
                var s = i,
                    o = window.innerHeight - e,
                    a = n;
                t.style.height = "750px";
                for (var r = 0; r < s.itemsLength; r++) {
                    s.items[r].style.width = a + "px"
                }
                if (s.resize) {
                    s.itemsWidth = a;
                    s.containerWidth = s.itemsWidth * s.itemsLength;
                    t.style.width = s.containerWidth + "px"
                }
            }
        },
        autoSlide: function () {
            if (this.index < this.itemsLength - 1 && this.ended !== true) {
                this.goTo(this.index, "f");
                this.index++
            } else {
                if (this.index <= 1) {
                    this.ended = false
                } else {
                    this.ended = true
                }
                this.goTo(this.index, "r");
                this.index--
            }
        },
        goTo: function (e, t, i, n) {
            var s = this,
                o = i == "click" ? 0 : 1,
                a = i == "click" ? n : e,
                r = s.ease == Back ? Back.easeOut.config(1) : s.ease.easeOut;
            if (this.items[a].className.indexOf("active") > -1) {
                this.items[a].className = this.items[a].className.replace(" active", "");
                this.navBullet[a].className = this.navBullet[a].className.replace("active", "")
            }
            if (t == "f") {
                var l = e + o;
                if (this.items[e + o].className.indexOf("active") < 0) {
                    this.items[e + o].className = this.items[e + o].className + " active";
                    this.navBullet[e + o].className = this.navBullet[e + o].className + " active"
                }
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: "-" + this.itemsWidth * (e + o) + "px"
                    },
                    ease: r,
                    onComplete: function (e) {
                        s.itemInfo[l - 1].style.opacity = 0;
                        TweenLite.to(s.itemInfo[l], .4, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else if (t == "r") {
                var l = e - o;
                if (this.items[e - o].className.indexOf("active") < 0) {
                    this.items[e - o].className = this.items[e - o].className + " active";
                    this.navBullet[e - o].className = this.navBullet[e - o].className + "active"
                }
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: -this.itemsWidth * (e - o)
                    },
                    ease: r,
                    onComplete: function () {
                        s.itemInfo[l + 1].style.opacity = 0;
                        TweenLite.to(s.itemInfo[l], .5, {
                            alpha: 1,
                            ease: "linear"
                        })
                    }
                })
            } else {
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: this.itemsWidth * e
                    },
                    ease: r
                })
            }
        }
    };
    i.init({
        pageContainer: "main-featured",
        speed: 1,
        autoPlay: true,
        ease: Expo
    });
    e.exports = i
}, function (e, t) {
    "use strict";
    var i = {
        isTouch: function () {
            return "ontouchstart" in window || navigator.maxTouchPoints
        },
        win: window.innerWidth,
        cont: document.getElementsByClassName("slideCont")[0],
        items: document.getElementsByClassName("slideItem"),
        init: function (e) {
            var t = this;
            if (this.items[0] == undefined || document.getElementsByClassName("main-featured")[0].className.indexOf("towel") > -1) {
                this.cont.style.height = window.innerHeight + "px";
                return
            }
            this.itemsLength = this.items.length;
            this.itemsWidth = this.win;
            this.containerWidth = this.itemsWidth * this.itemsLength;
            this.cont.style.width = this.containerWidth + "px";
            this.cont.style.height = window.innerHeight + "px";
            this.touchstartX;
            this.touchmoveX;
            this.touchendX;
            this.index = 0;
            this.ended = false;
            this.mainContainer = e.pageContainer == undefined ? e : e.pageContainer;
            this.speed = e.speed == undefined ? 1.3 : e.speed;
            this.ease = e.ease == undefined ? Power4 : e.ease;
            this.autoPlay = e.autoPlay == undefined ? true : e.autoPlay;
            this.resize = false;
            this.slideTime = 6e3;
            this.itemInfo = this.cont.getElementsByTagName("SECTION");
            this.added = false;
            if (this.isTouch()) {
                this.cont.addEventListener("touchstart", t.touchSlide.touchStart);
                this.cont.addEventListener("touchmove", t.touchSlide.touchMove);
                this.cont.addEventListener("touchend", t.touchSlide.touchEnd)
            }
            if (this.autoPlay && this.items.length > 1) {
                this.startAutoSlide = setInterval(function () {
                    t.autoSlide()
                }, this.slideTime)
            }
            this.navCont = document.getElementsByClassName("nav-bullets")[0];
            this.navCont.innerHTML += "<ul>";
            for (var i = 0; i < this.itemsLength; i++) {
                this.navCont.getElementsByTagName("UL")[0].innerHTML += '<li><a href="#" class="nav-bullet"></a></li>';
                this.items[i].style.width = this.itemsWidth + "px";
                this.items[i].pos = i;
                this.items[i].slideTitle = this.items[i].getElementsByTagName("h1")[0] == undefined ? this.items[i].getElementsByTagName("h2")[0] : this.items[i].getElementsByTagName("h1")[0];
                this.items[i].bts = this.items[i].getElementsByClassName("btn-box")[0] == undefined ? "" : this.items[i].getElementsByClassName("btn-box")[0]
            }
            this.navBullet = this.navCont.getElementsByTagName("UL")[0].getElementsByTagName("LI");
            this.navBullet[0].className += "active";
            this.items[0].className = this.items[0].className + " active";
            for (var n = 0; n < this.navBullet.length; n++) {
                this.navBullet[n].pos = n;
                this.navBullet[n].onclick = function (e) {
                    clearInterval(t.startAutoSlide);
                    var i = this.pos,
                        n;
                    for (var s = 0; s < t.navBullet.length; s++) {
                        if (t.navBullet[s].className.indexOf("active") > -1) {
                            n = s
                        }
                    }
                    if (this.className.indexOf("active") > -1) {
                        return false
                    } else {
                        if (i > n) {
                            t.index = i;
                            t.hasVideo(i);
                            t.goTo(i, "f", "click", n)
                        } else {
                            t.index = i;
                            t.hasVideo(i);
                            t.goTo(i, "r", "click", n)
                        }
                    }
                    if (t.autoPlay) {
                        t.index = i;
                        if (t.hasVideo(i) !== true) {
                            t.startAutoSlide = setInterval(function () {
                                t.autoSlide()
                            }, 6e3)
                        }
                    }
                    e.preventDefault()
                }
            }
            var s = document.getElementsByClassName("shop");
            for (var o = 0; o < s.length; o++) {
                s[o].addEventListener("click", function (e) {
                    window.location.href = this.getAttribute("href") + "?sOcRuXJnMT=1"
                })
            }
            window.addEventListener("resize", function () {
                t.resize = true;
                t.responsive(this.innerWidth)
            });
            TweenLite.to(t.itemInfo[0], .4, {
                alpha: 1,
                ease: "linear"
            });
            this.responsive(window.innerWidth);
            if (e.textSlide !== undefined) this.textSlide(e.textSlide)
        },
        responsive: function (e) {
            var t = this,
                i = e,
                n = window.innerHeight;
            if (t.cont.className.indexOf("featureCont") < 0) {
                if (t.cont.className.indexOf("slide-products") > -1) {
                    t.cont.style.height = n + "px"
                }
            }
            for (var s = 0; s < t.itemsLength; s++) {
                t.items[s].style.width = i + "px"
            }
            t.cont.style.width = e * t.itemsLength + "px";
            t.itemsWidth = e;
            t.containerWidth = t.itemsWidth * t.itemsLength
        },
        touchSlide: {
            touchStart: function (e, t, n) {
                clearInterval(i.startAutoSlide);
                i.touchstartX = e.changedTouches[0].clientX + i.itemsWidth * i.index;
                return false
            },
            touchMove: function (e, t, n) {
                e.touchmoveX = e.changedTouches[0].clientX - i.touchstartX;
                TweenLite.to(i.cont, 1, {
                    css: {
                        left: e.touchmoveX + "px"
                    }
                });
                return false
            },
            touchEnd: function (e, t) {
                var n = .25 * window.innerWidth,
                    s = .75 * window.innerWidth,
                    o = i.index < i.itemsLength - 1 ? true : false;
                i.touchendX = event.changedTouches[0].clientX;
                if (i.touchendX <= n && o) {
                    if (i.hasVideo(i.index + 1)) {
                        i.playVideo(i.index + 1)
                    }
                    if (i.hasVideo(i.index)) {
                        i.stopVideo(i.video)
                    }
                    i.goTo(i.index, "f");
                    i.index++
                } else if (i.touchendX >= s && i.index > 0) {
                    if (i.hasVideo(i.index - 1)) {
                        i.playVideo(i.index - 1)
                    }
                    if (i.hasVideo(i.index)) {
                        i.stopVideo(i.video)
                    }
                    i.goTo(i.index, "r");
                    i.index--
                } else {
                    TweenLite.to(i.cont, i.speed, {
                        css: {
                            left: -(i.itemsWidth * i.index)
                        },
                        ease: i.ease.easeOut
                    })
                }
                i.startAutoSlide = setInterval(function () {
                    i.autoSlide()
                }, i.slideTime);
                return false
            }
        },
        autoSlide: function () {
            if (this.index < this.itemsLength - 1 && this.ended !== true) {
                if (this.hasVideo(this.index + 1)) {
                    this.playVideo(this.index + 1)
                }
                this.goTo(this.index, "f");
                this.index++
            } else {
                if (this.index <= 1) {
                    this.ended = false
                } else {
                    this.ended = true
                }
                this.hasVideo(this.index - 1);
                this.goTo(this.index, "r");
                this.index--
            }
        },
        hasVideo: function (e) {
            if (this.items[e].getElementsByTagName("VIDEO")[0] !== undefined && this.win > 768) {
                return true
            } else {
                return false
            }
        },
        stopVideo: function (e) {
            var t = this;
            t.slideTime = 6e3;
            e.currentTime = 0;
            e.pause()
        },
        playVideo: function (e) {
            var t = this;

            function i() {
                clearInterval(t.startAutoSlide);
                t.slideTime = 6e3;
                t.startAutoSlide = setInterval(function () {
                    t.autoSlide()
                }, t.slideTime);
                t.video.currentTime = 0;
                t.video.pause();
                t.autoSlide()
            }
            clearInterval(this.startAutoSlide);
            this.video = this.items[e].getElementsByTagName("VIDEO")[0];
            this.video.currentTime = 0;
            this.video.play();
            this.videoDuration = this.video.duration * 1e3;
            this.slideTime = this.videoDuration;
            this.startAutoSlide = setInterval(function () {
                i()
            }, this.slideTime)
        },
        goTo: function (e, t, i, n) {
            var s = this,
                o = i == "click" ? 0 : 1,
                a = i == "click" ? n : e,
                r = s.ease == Back ? Back.easeOut.config(1.2) : s.ease.easeOut;
            if (this.items[a].className.indexOf("active") > -1) {
                this.items[a].className = this.items[a].className.replace(" active", "");
                this.navBullet[a].className = this.navBullet[a].className.replace("active", "")
            }
            if (t == "f") {
                var l = e + o;
                if (this.items[e + o].className.indexOf("active") < 0) {
                    this.items[e + o].className = this.items[e + o].className + " active";
                    this.navBullet[e + o].className = this.navBullet[e + o].className + " active"
                }
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: "-" + this.itemsWidth * (e + o) + "px"
                    },
                    ease: r,
                    onComplete: function (e) {
                        s.itemInfo[l - 1].style.opacity = 0
                    }
                });
                TweenLite.to(s.itemInfo[l], .4, {
                    delay: .7,
                    alpha: 1,
                    ease: "linear"
                });
                TweenLite.to(s.items[e], .4, {
                    delay: .1,
                    alpha: 0,
                    ease: r
                });
                TweenLite.to(s.items[e + o], .4, {
                    alpha: 1,
                    ease: "linear"
                });
                if (s.items[e + o].slideTitle !== undefined) {
                    setTimeout(function () {
                        s.items[e + o].slideTitle.className = "active";
                        s.items[e + o].bts.className = "btn-box active"
                    }, 900)
                }
            } else if (t == "r") {
                var l = e - o;
                if (this.items[e - o].className.indexOf("active") < 0) {
                    this.items[e - o].className = this.items[e - o].className + " active";
                    this.navBullet[e - o].className = this.navBullet[e - o].className + "active"
                }
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: -this.itemsWidth * (e - o)
                    },
                    ease: r,
                    onComplete: function () {
                        s.itemInfo[l + 1].style.opacity = 0
                    }
                });
                TweenLite.to(s.itemInfo[l], .4, {
                    delay: .7,
                    alpha: 1,
                    ease: "linear"
                });
                TweenLite.to(s.items[e], .4, {
                    delay: .1,
                    alpha: 0,
                    ease: r
                });
                TweenLite.to(s.items[e - o], .4, {
                    alpha: 1,
                    ease: "linear"
                });
                if (s.items[e - o].slideTitle !== undefined) {
                    setTimeout(function () {
                        s.items[e - o].slideTitle.className = "active";
                        s.items[e - o].bts.className = "btn-box active"
                    }, 900)
                }
            } else {
                TweenLite.to(this.cont, s.speed, {
                    css: {
                        left: this.itemsWidth * e
                    },
                    ease: r
                })
            }
        }
    };
    i.init({
        pageContainer: "main-featured",
        speed: 1.8,
        autoPlay: true,
        ease: Expo
    });
    e.exports = i
}, function (e, t, i) {
    (function ($) {
        "use strict";
        ! function () {
            function e(e, t, i) {
                var n = e,
                    s = 1 == i ? n.getAttribute("href").replace('url("', "").replace('")', "") : n.style.backgroundImage.replace('url("', "").replace('")', ""),
                    o = document.createElement("IMG");
                o.src = s, o.onerror = function (e) {
                    for (var n = 0; n < t.length; n++) i ? t[n].getAttribute("href").replace('url("', "").replace('")', "") == this.src.replace("http:", "") && $(t[n]).remove() : t[n].style.backgroundImage.replace('url("', "").replace('")', "") == this.src.replace("http:", "") && $(t[n]).remove()
                }
            }
            for (var t = document.getElementsByClassName("slideCont")[0], i = t.getElementsByClassName("slideItem"), n = void 0 == document.getElementsByClassName("fancybox") ? void 0 : document.getElementsByClassName("fancybox"), s = 0; s < i.length; s++) e(i[s], i, !1);
            if (void 0 !== n)
                for (var o = 0; o < n.length; o++) e(n[o], n, !0)
        }()
    }).call(t, i(2))
}, function (module, exports, __webpack_require__) {
    (function ($) {
        "use strict";
        var product = {
            init: function (e) {
                var t = this,
                    i = e == undefined ? "" : e.handle.toLowerCase();
                var n = {
                    jade: "linear-gradient(to right, #aac3c2, #abc4c3, #abc4c3, #b7d0d0, #bad3d3)",
                    "classic-orange": "linear-gradient(to right, #eab78e, #edba91, #f8c69e)",
                    "classic-yellow": "linear-gradient(to right, #d4b37f, #ddbc89, #eaca97)",
                    savvy: "linear-gradient(to right, #fda3b3, #fdb1be, #ffbcc8)",
                    "classic-blue": "linear-gradient(to right, #87c4cc, #8ecbd2, #9bd8df)",
                    enigma: "linear-gradient(to right, #c1bcbb, #c4bfbe, #d1cecd)",
                    "midnight-blue": "linear-gradient(to right, #3dd3de, #3fd4e0, #63e3ee)",
                    "classic-green": "linear-gradient(to right, #aebf7b, #b8c986, #c6d795)",
                    coral: "linear-gradient(to right, #f3a0a2, #fdb1b3, #febfc0)",
                    teal: "linear-gradient(to right, #fcfcfc, #f3f3f3, #cccdc8)",
                    chilli: "linear-gradient(to right, #c9cac5, #e3e3e3, #f0f0f0)",
                    stealth: "linear-gradient(to right, #fafafa, #e5e5e5, #cecfca)"
                };
                this.productContainer = document.getElementsByClassName("product")[0];
                this.imgPreview = document.getElementsByClassName("col w-50 preview")[0].getElementsByTagName("img")[0];
                this.product = e;
                this.loading = $("#loader-operations, #overlay-operations");
                this.towelType;
                this.descripTemporary = document.createElement("div");
                if (this.product !== undefined) {
                    this.product.handle.indexOf("-") > -1 ? i = this.product.handle.split("-")[1] : i;
                    this.towelType = document.getElementsByClassName("nav-towel")[0].getElementsByClassName(i);
                    this.product.description == undefined ? undefined : this.descripTemporary.innerHTML = this.product.description;
                    var s = this.towelType[0].getAttribute("data-color").toLowerCase();
                    var o = document.getElementById("title");
                    var a = document.getElementById("prod-description");
                    var r = this.descripTemporary.getElementsByClassName(s)[0].innerText;
                    if (a !== undefined && o !== undefined) {
                        a.innerHTML = this.descripTemporary.getElementsByClassName(s)[0].innerText;
                        o.innerHTML = s
                    }
                    this.productContainer.style.backgroundImage = n[this.towelType[0].getAttribute("data-color").toLowerCase()]
                } else {
                    return false
                }
                window.addEventListener("load", function () {
                    t.createActive(i)
                });
                for (var l = 0; l < this.towelType.length; l++) {
                    this.towelType[l].pos = l;
                    this.towelType[l].onclick = function (e) {
                        var s = this.getAttribute("data-color").toLowerCase(),
                            l;
                        var h = function (e) {
                            for (var i = 0; i < t.product.variants.length; i++) {
                                if (t.product.variants[i].title.toLowerCase() == e) {
                                    if (t.product.variants[i].available !== true) {
                                        var n = document.getElementById("purchase-button");
                                        n.className = "solded-out"
                                    } else {
                                        var n = document.getElementById("purchase-button");
                                        if (n.className.indexOf("solded-out") > -1) {
                                            n.className = n.className.replace("solded-out", "add-cart")
                                        }
                                    }
                                }
                            }
                        };
                        h(s);
                        if (t.isBackpack) {
                            var u = null;
                            t.runDetails(u, this.pos)
                        }
                        if (a !== undefined && o.innerHTML !== undefined) {
                            r = t.descripTemporary.getElementsByClassName(s)[0].innerText;
                            o.innerHTML = s;
                            a.innerHTML = r
                        }
                        if (this.className.indexOf("active") < 0) {
                            t.loading.fadeIn();
                            for (var c = 0; c < t.towelType.length; c++) {
                                var d = t.towelType[c].className.indexOf("active") < 0 ? true : false;
                                if (!d) {
                                    t.towelType[c].className = t.towelType[c].className.replace(" active", "")
                                }
                            }
                            this.className = this.className + " active";
                            for (var f = 0; f < t.product.images.length; f++) {
                                t.product.handle.indexOf("-") > -1 ? i = t.product.handle.split("-")[1] : i;
                                if (t.product.images[f].indexOf(i + "-" + s) > -1) {
                                    l = t.product.images[f];
                                    t.productContainer.style.backgroundImage = n[s]
                                }
                            }
                            $(t.imgPreview).attr("src", l).on("load", function () {
                                t.loading.delay(3).fadeOut()
                            })
                        } else {
                            return false
                        }
                        return false
                    }
                }
            },
            createActive: function (e) {
                var t = [],
                    i = document.getElementsByClassName("nav-towel"),
                    n = document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0],
                    s = i.length > 1 ? this.towelType.length / 2 : this.towelType.length;
                this.isBackpack = document.getElementsByClassName("product")[0].className.indexOf("backpack") > -1 ? true : false;
                this.allDetails = document.getElementsByClassName("fancybox");
                this.detailsCont = document.getElementsByClassName("img-details")[0];
                for (var o = 0; o < s; o++) {
                    t.push(this.towelType[o].getAttribute("data-color").toLowerCase())
                }
                for (var a = 0; a < t.length; a++) {
                    if (n.src.indexOf(t[a]) > -1) {
                        var r = t[a];
                        if (i.length > 1) {
                            $("li." + e + "", $(".nav-towel")[0])[a].className = $("li." + e + "", $(".nav-towel")[0])[a].className + " active";
                            $("li." + e + "", $(".nav-towel")[1])[a].className = $("li." + e + "", $(".nav-towel")[1])[a].className + " active"
                        } else {
                            $("li." + e + "", $(".nav-towel")[0])[a].className = $("li." + e + "", $(".nav-towel")[0])[a].className + " active"
                        }
                    }
                }
                if (this.isBackpack) {
                    this.runDetails(r, 0)
                }
            },
            runDetails: function (e, t) {
                var e = e == null ? this.towelType[t].getAttribute("data-color").toLowerCase() : e;
                for (var i = 0; i < this.allDetails.length; i++) {
                    var n = this.allDetails[i].href.indexOf("_" + e) > -1 ? true : false;
                    switch (n) {
                        case true:
                            this.allDetails[i].className = "fancybox has-color";
                            break;
                        case false:
                            this.allDetails[i].className = "fancybox no-color";
                            break
                    }
                }
                $(".no-color").hide();
                $(".has-color").show();
                this.detailsCont.style.height = this.detailsCont.children[0].offsetHeight + "px";
                this.detailsCont.style.top = (this.detailsCont.parentElement.offsetHeight - this.detailsCont.children[0].offsetHeight) / 2 + "px"
            },
            addItem: function () {
                if (document.getElementById("purchase-button").className.indexOf("solded-out") > -1) {
                    return false
                }
                this.towelColour;
                this.variants = this.product.variants;
                this.variantToAdd;
                this.cartCounter = document.getElementsByClassName("cart-count");
                this.applyModal = function (e, t, i, n, s, o) {
                    this.title = e == "Towel" ? "Beach Towel" : e;
                    this.price = t;
                    this.subtotal = i;
                    this.variant = s;
                    this.size = o == undefined ? "" : o;
                    this.image = n;
                    this.successTowel = "<div class='vertty-order-modal'><div class='order-img'><img src='" + this.image + "'></div><div class='order-info'><span class='tlt'>" + this.title + "</span><span>Qty:  <b>1</b></span><span>TP:  <b>" + this.variant + "</b></span><span class='item-price'>" + this.price + "</span></div><div class='order-price'><span>Subtotal <span class='total-value'>" + this.subtotal + "</span></span></div></div><div class='btn-box' style='text-align: right;'><a href='/cart' class='view-cart'></a></div>";
                    return this.successTowel
                };
                Shopify.onError = function (XMLHttpRequest, textStatus) {
                    var data = eval("(" + XMLHttpRequest.responseText + ")");
                    swal({
                        title: "Error!",
                        text: data.description,
                        type: "warning",
                        allowOutsideClick: true,
                        customClass: "sweet-old"
                    });
                    me.loading.fadeOut()
                };
                var me = this;
                for (var m = 0; m < this.towelType.length; m++) {
                    if (this.towelType[m].className.indexOf("active") > -1) {
                        this.towelColour = this.towelType[m].getAttribute("data-color")
                    }
                }

                function getVariantId(e) {
                    for (var t = 0; t < me.variants.length; t++) {
                        if (me.variants[t].title == e) {
                            me.variantToAdd = me.variants[t].id
                        }
                    }
                }
                getVariantId(this.towelColour);
                if (this.variantToAdd == undefined) {
                    swal({
                        title: "Warning!",
                        text: "Cart is currently empty",
                        type: "warning",
                        allowOutsideClick: true,
                        customClass: "sweet-old"
                    })
                } else {
                    this.loading.fadeIn();
                    Shopify.addItem(this.variantToAdd, 1, function (e) {
                        Shopify.getCart(function (e) {
                            var t, i, n, s;
                            for (var o = 0; o < me.cartCounter.length; o++) {
                                me.cartCounter[o].innerHTML = e.item_count + 1
                            }
                            $(e.items).each(function (o, a) {
                                if (a.id == me.variantToAdd) {
                                    i = Shopify.formatMoney(a.price).replace("$", "€");
                                    n = Shopify.formatMoney(e.total_price).replace("$", "€");
                                    s = a.variant_title;
                                    t = a.image
                                }
                            });
                            me.loading.fadeOut();
                            swal({
                                title: '<div style="display:none">Beach Towel</div>',
                                text: me.applyModal(me.product.type, i, n, t, s),
                                html: true,
                                showConfirmButton: false,
                                allowOutsideClick: true
                            })
                        })
                    })
                }
                return false
            }
        };
        window.product = product;
        module.exports = product
    }).call(exports, __webpack_require__(2))
}, function (e, t, i) {
    (function ($) {
        i(11);
        $(document).ready(function () {
            var e = {},
                t = $("._overlay-search .results-cont");
            $("#search-portal-input").keypress(function (e) {
                if (e.keyCode == 13) {
                    return false
                }
            });
            $("#search-portal-input").autocomplete({
                source: function (i, n) {
                    $.ajax({
                        cache: false,
                        url: "/search",
                        data: {
                            q: "*" + i.term + "*",
                            view: "json"
                        },
                        dataType: "json",
                        success: function (s) {
                            var o = $(".search-results", ".results-cont");
                            if (s.length) {
                                if (o[0] !== undefined) {
                                    o.remove();
                                    o = $(".search-results", ".results-cont")
                                }
                                for (var a = 0; a < s.length; a++) {
                                    var r = "result-" + (s[a].value.indexOf(" ") > -1 ? s[a].value.split(" ")[0].toLowerCase() : s[a].value.toLowerCase());
                                    var l = '<div class="container search-results ' + r + '"><div class="grid"><a href="' + s[a].url + '"><div class="w-50 result-properties"><span class="name">' + s[a].label + '</span><hr><span class="group">' + s[a].url + '</span><hr><span></span></div><div class="w-50 bl-img"><div class="result-img product-icons"></div></div></a></div></div>';
                                    t.append(l)
                                }
                                e[i.term] = s
                            }
                            n(s)
                        },
                        error: function (e) {
                            console.log(e)
                        }
                    })
                },
                minLength: 2,
                select: function (e, t) {
                    window.location = t.item.url
                }
            }).data("ui-autocomplete")._renderItem = function (e, t) {
                return $("<li>").append('<a><img src="' + t.thumb + '" class="autothumb" />' + t.label + "</a>").appendTo(e)
            }
        })
    }).call(t, i(2))
}]);