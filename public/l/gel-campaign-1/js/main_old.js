/*!For license information please see Main.js.LICENSE.txt*/
!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function (e) {
            return t[e]
        }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 142)
}([function (t, e, n) {
    var i = n(2), r = n(18), o = n(11), a = n(12), s = n(19), u = function t(e, n, u) {
        var c, l, f, h, d = e & t.F, p = e & t.G, v = e & t.P, g = e & t.B,
            y = p ? i : e & t.S ? i[n] || (i[n] = {}) : (i[n] || {}).prototype, m = p ? r : r[n] || (r[n] = {}),
            b = m.prototype || (m.prototype = {});
        for (c in p && (u = n), u) f = ((l = !d && y && void 0 !== y[c]) ? y : u)[c], h = g && l ? s(f, i) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, c, f, e & t.U), m[c] != f && o(m, c, h), v && b[c] != f && (b[c] = f)
    };
    i.core = r, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function (t, e, n) {
    var i = n(4);
    t.exports = function (t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    t.exports = function (t) {
        return "object" === n(t) ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    var i = n(49)("wks"), r = n(34), o = n(2).Symbol, a = "function" == typeof o;
    (t.exports = function (t) {
        return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
    }).store = i
}, function (t, e, n) {
    var i = n(21), r = Math.min;
    t.exports = function (t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    t.exports = !n(3)((function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (t, e, n) {
    var i = n(1), r = n(99), o = n(23), a = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function (t, e, n) {
        if (i(t), e = o(e, !0), i(n), r) try {
            return a(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var i = n(24);
    t.exports = function (t) {
        return Object(i(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var i = n(8), r = n(33);
    t.exports = n(7) ? function (t, e, n) {
        return i.f(t, e, r(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var i = n(2), r = n(11), o = n(14), a = n(34)("src"), s = n(148), u = ("" + s).split("toString");
    n(18).inspectSource = function (t) {
        return s.call(t)
    }, (t.exports = function (t, e, n, s) {
        var c = "function" == typeof n;
        c && (o(n, "name") || r(n, "name", e)), t[e] !== n && (c && (o(n, a) || r(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === i ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && this[a] || s.call(this)
    }))
}, function (t, e, n) {
    var i = n(0), r = n(3), o = n(24), a = /"/g, s = function (t, e, n, i) {
        var r = String(o(t)), s = "<" + e;
        return "" !== n && (s += " " + n + '="' + String(i).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">"
    };
    t.exports = function (t, e) {
        var n = {};
        n[t] = e(s), i(i.P + i.F * r((function () {
            var e = ""[t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", n)
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var i = n(50), r = n(24);
    t.exports = function (t) {
        return i(r(t))
    }
}, function (t, e, n) {
    var i = n(51), r = n(33), o = n(15), a = n(23), s = n(14), u = n(99), c = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? c : function (t, e) {
        if (t = o(t), e = a(e, !0), u) try {
            return c(t, e)
        } catch (t) {
        }
        if (s(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function (t, e, n) {
    var i = n(14), r = n(9), o = n(72)("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function (t, e) {
    var n = t.exports = {version: "2.6.12"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var i = n(10);
    t.exports = function (t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(3);
    t.exports = function (t, e) {
        return !!t && i((function () {
            e ? t.call(null, (function () {
            }), 1) : t.call(null)
        }))
    }
}, function (t, e, n) {
    var i = n(4);
    t.exports = function (t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var i = n(0), r = n(18), o = n(3);
    t.exports = function (t, e) {
        var n = (r.Object || {})[t] || Object[t], a = {};
        a[t] = e(n), i(i.S + i.F * o((function () {
            n(1)
        })), "Object", a)
    }
}, function (t, e, n) {
    var i = n(19), r = n(50), o = n(9), a = n(6), s = n(88);
    t.exports = function (t, e) {
        var n = 1 == t, u = 2 == t, c = 3 == t, l = 4 == t, f = 6 == t, h = 5 == t || f, d = e || s;
        return function (e, s, p) {
            for (var v, g, y = o(e), m = r(y), b = i(s, p, 3), _ = a(m.length), x = 0, w = n ? d(e, _) : u ? d(e, 0) : void 0; _ > x; x++) if ((h || x in m) && (g = b(v = m[x], x, y), t)) if (n) w[x] = g; else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return x;
                case 2:
                    w.push(v)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : w
        }
    }
}, function (t, e, n) {
    (function (n) {
        var i, r, o, a;

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        a = function () {
            return function t(e, n, i) {
                function r(a, s) {
                    if (!n[a]) {
                        if (!e[a]) {
                            if (o) return o(a, !0);
                            var u = new Error("Cannot find module '" + a + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var c = n[a] = {exports: {}};
                        e[a][0].call(c.exports, (function (t) {
                            var n = e[a][1][t];
                            return r(n || t)
                        }), c, c.exports, t, e, n, i)
                    }
                    return n[a].exports
                }

                for (var o = !1, a = 0; a < i.length; a++) r(i[a]);
                return r
            }({
                1: [function (t, e, i) {
                    (function (n) {
                        !function (t) {
                            var r;
                            "object" === s(i) && void 0 !== e ? e.exports = t() : ((r = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : this).reduct || (r.reduct = {})).loggerPackage = t()
                        }((function () {
                            return function e(n, i, r) {
                                function o(s, u) {
                                    if (!i[s]) {
                                        if (!n[s]) {
                                            var c = "function" == typeof t && t;
                                            if (!u && c) return c(s, !0);
                                            if (a) return a(s, !0);
                                            var l = new Error("Cannot find module '" + s + "'");
                                            throw l.code = "MODULE_NOT_FOUND", l
                                        }
                                        var f = i[s] = {exports: {}};
                                        n[s][0].call(f.exports, (function (t) {
                                            var e = n[s][1][t];
                                            return o(e || t)
                                        }), f, f.exports, e, n, i, r)
                                    }
                                    return i[s].exports
                                }

                                for (var a = "function" == typeof t && t, s = 0; s < r.length; s++) o(r[s]);
                                return o
                            }({
                                1: [function (t, e, n) {
                                    var i, r = e.exports = {}, o = [], a = !1, s = -1;

                                    function u() {
                                        a = !1, i.length ? o = i.concat(o) : s = -1, o.length && c()
                                    }

                                    function c() {
                                        if (!a) {
                                            var t = setTimeout(u);
                                            a = !0;
                                            for (var e = o.length; e;) {
                                                for (i = o, o = []; ++s < e;) i && i[s].run();
                                                s = -1, e = o.length
                                            }
                                            i = null, a = !1, clearTimeout(t)
                                        }
                                    }

                                    function l(t, e) {
                                        this.fun = t, this.array = e
                                    }

                                    function f() {
                                    }

                                    r.nextTick = function (t) {
                                        var e = new Array(arguments.length - 1);
                                        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                        o.push(new l(t, e)), 1 !== o.length || a || setTimeout(c, 0)
                                    }, l.prototype.run = function () {
                                        this.fun.apply(null, this.array)
                                    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.binding = function (t) {
                                        throw new Error("process.binding is not supported")
                                    }, r.cwd = function () {
                                        return "/"
                                    }, r.chdir = function (t) {
                                        throw new Error("process.chdir is not supported")
                                    }, r.umask = function () {
                                        return 0
                                    }
                                }, {}], 2: [function (t, e, i) {
                                    (function (t, e) {
                                        "use strict";
                                        var n = function () {
                                            function t(t, e) {
                                                for (var n = 0; n < e.length; n++) {
                                                    var i = e[n];
                                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                                }
                                            }

                                            return function (e, n, i) {
                                                return n && t(e.prototype, n), i && t(e, i), e
                                            }
                                        }();

                                        function r(t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                        }

                                        Object.defineProperty(i, "__esModule", {value: !0});
                                        var o = {ALL: 2, WARNINGS: 1, SILENT: 0}, a = function () {
                                            function t() {
                                                var e = arguments.length <= 0 || void 0 === arguments[0] ? "@reduct/logger" : arguments[0],
                                                    n = arguments.length <= 1 || void 0 === arguments[1] ? o.ALL : arguments[1];
                                                r(this, t), this.logLevel = n, this.namespace = e, this.instances = []
                                            }

                                            return n(t, [{
                                                key: "getLogger", value: function () {
                                                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.namespace : arguments[0],
                                                        n = new t(e, this.logLevel);
                                                    return this.instances.push(n), {
                                                        log: function (t, e) {
                                                            n.log(t, e)
                                                        }, info: function (t, e) {
                                                            n.info(t, e)
                                                        }, warn: function (t, e) {
                                                            n.warn(t, e)
                                                        }, error: function (t, e) {
                                                            n.error(t, e)
                                                        }
                                                    }
                                                }
                                            }, {
                                                key: "setLogLevel", value: function (t) {
                                                    var e = isNaN(t) ? 2 : t;
                                                    return this.logLevel = e, this.instances.forEach((function (t) {
                                                        t.logLevel = e
                                                    })), this
                                                }
                                            }, {
                                                key: "log", value: function (t) {
                                                    var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                    if (this.logLevel < o.ALL) return this;
                                                    try {
                                                        console.log(this.namespace + ": " + t, e)
                                                    } catch (t) {
                                                    }
                                                    return this
                                                }
                                            }, {
                                                key: "info", value: function (t) {
                                                    var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                    if (this.logLevel < o.ALL) return this;
                                                    try {
                                                        console.info(this.namespace + " Info: " + t, e)
                                                    } catch (t) {
                                                    }
                                                    return this
                                                }
                                            }, {
                                                key: "warn", value: function (t) {
                                                    var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                    if (this.logLevel < o.WARNINGS) return this;
                                                    try {
                                                        console.warn(this.namespace + " Warning: " + t, e)
                                                    } catch (t) {
                                                    }
                                                }
                                            }, {
                                                key: "error", value: function (t, e) {
                                                    if (this.logLevel < o.SILENT) return this;
                                                    if (e) {
                                                        try {
                                                            console.error(t, e)
                                                        } catch (t) {
                                                        }
                                                        throw new Error(this.namespace + " Error: Details are posted above.")
                                                    }
                                                    throw new Error(this.namespace + " Error: " + t)
                                                }
                                            }]), t
                                        }();
                                        if (e.reduct || (e.reduct = {}), !(e.reduct.logger instanceof a)) {
                                            var s = new a;
                                            try {
                                                t.env.TEST && s.setLogLevel(o.SILENT)
                                            } catch (t) {
                                            }
                                            e.reduct.logger = s
                                        }
                                        var u = e.reduct.logger;
                                        i.logger = u, i.logLevels = o
                                    }).call(this, t("_process"), void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                }, {_process: 1}]
                            }, {}, [2])(2)
                        }))
                    }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {_process: 2}], 2: [function (t, e, n) {
                    var i, r = e.exports = {}, o = [], a = !1, s = -1;

                    function u() {
                        a = !1, i.length ? o = i.concat(o) : s = -1, o.length && c()
                    }

                    function c() {
                        if (!a) {
                            var t = setTimeout(u);
                            a = !0;
                            for (var e = o.length; e;) {
                                for (i = o, o = []; ++s < e;) i && i[s].run();
                                s = -1, e = o.length
                            }
                            i = null, a = !1, clearTimeout(t)
                        }
                    }

                    function l(t, e) {
                        this.fun = t, this.array = e
                    }

                    function f() {
                    }

                    r.nextTick = function (t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        o.push(new l(t, e)), 1 !== o.length || a || setTimeout(c, 0)
                    }, l.prototype.run = function () {
                        this.fun.apply(null, this.array)
                    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.binding = function (t) {
                        throw new Error("process.binding is not supported")
                    }, r.cwd = function () {
                        return "/"
                    }, r.chdir = function (t) {
                        throw new Error("process.chdir is not supported")
                    }, r.umask = function () {
                        return 0
                    }
                }, {}], 3: [function (t, e, i) {
                    (function (e) {
                        "use strict";
                        Object.defineProperty(i, "__esModule", {value: !0}), i.component = void 0;
                        var n = function () {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var i = e[n];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }

                                return function (e, n, i) {
                                    return n && t(e.prototype, n), i && t(e, i), e
                                }
                            }(), r = t("@reduct/logger"), o = t("./utilities/"), a = function (t) {
                                if (t && t.__esModule) return t;
                                var e = {};
                                if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                return e.default = t, e
                            }(t("./messages.js")), s = r.logger.getLogger("@reduct/component"), u = o.prototype.extractFrom,
                            c = o.prototype.injectInto, l = function () {
                                function t(n, i, u) {
                                    var c, l;
                                    !function (t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                    }(this, t), i = (0, o.isObject)(i) ? i : {}, (0, o.isDefined)(n) || s.warn(a.noElement), this.el = n || e.document.createElement("div"), this.props = {}, this.state = {}, this.observers = {}, this.queryCache = {}, this.initialStateKeys = [], this._internalName = u || this.constructor.name, function (t, e) {
                                        var n = t.el, i = (0, t.getDefaultProps)(), a = t.constructor.propTypes || {},
                                            s = t._internalName, u = Object.keys(a), c = {};
                                        (0, o.isObject)(i) || r.logger.error('The getDefaultProps() method of Component "' + s + '" did not return a valid Object. This can lead to unexpected behavior and Errors.'), u.forEach((function (t) {
                                            var r = e[t] || n.getAttribute("data-" + t.toLowerCase()) || i[t];
                                            c[t] = r
                                        })), u.forEach((function (t) {
                                            var e = a[t],
                                                n = (0, o.isObject)(e) && (0, o.isFunction)(e.isOptional) ? e.isOptional : e;
                                            !(0, o.isFunction)(n) && r.logger.error('Invalid propType "' + t + '" specified in Component "' + s + '". Please specify a function as the propType validator.');
                                            var i = n(c, t, s);
                                            (0, o.isError)(i) && r.logger.error('The propType for "' + t + '" in Component "' + s + '" returned an Error with the message:\n\n"' + i.message + '".'), (0, o.isDefined)(i) && (c[t] = i)
                                        })), t.props = Object.freeze(c)
                                    }(this, i), l = (c = this).getInitialState(), (0, o.isObject)(l) ? (c.initialStateKeys = Object.keys(l), c.setState(l)) : s.warn('Please return a valid object in the getInitialState() method of "' + c._internalName + '".')
                                }

                                return n(t, [{
                                    key: "getElement", value: function () {
                                        return this.el
                                    }
                                }, {
                                    key: "find", value: function (t) {
                                        return this.findAll(t).shift()
                                    }
                                }, {
                                    key: "findAll", value: function (t) {
                                        var e = this.queryCache[t];
                                        if (e) return e;
                                        var n = this.getElement().querySelectorAll(t),
                                            i = Reflect.apply(Array.prototype.slice, n, [n]);
                                        return this.queryCache[t] = [].concat(function (t) {
                                            if (Array.isArray(t)) {
                                                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                                return n
                                            }
                                            return Array.from(t)
                                        }(i)), i
                                    }
                                }, {
                                    key: "getDefaultProps", value: function () {
                                        return {}
                                    }
                                }, {
                                    key: "hasProp", value: function (t) {
                                        return (0, o.isDefined)(this.props[t])
                                    }
                                }, {
                                    key: "getInitialState", value: function () {
                                        return {}
                                    }
                                }, {
                                    key: "setState", value: function () {
                                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                            e = arguments.length <= 1 || void 0 === arguments[1] ? {silent: !1} : arguments[1],
                                            n = !e.silent, i = (0, o.cloneObject)(this.state), r = this.initialStateKeys;
                                        for (var a in t) if (t.hasOwnProperty(a)) {
                                            var u = t[a], c = i[a];
                                            -1 === r.indexOf(a) ? s.error("Please specify an initial value for '" + a + "' in your getInitialState() method of \"" + this._internalName + '".') : u !== c && (this.state[a] = u, n && this.trigger("change:" + a, {
                                                key: a,
                                                value: u,
                                                previousValue: c
                                            }))
                                        }
                                        n && this.trigger("change", {delta: t, previousState: i})
                                    }
                                }, {
                                    key: "on", value: function (t, e) {
                                        return (this.observers[t] || (this.observers[t] = [])).push(e)
                                    }
                                }, {
                                    key: "trigger", value: function (t, e) {
                                        var n = void 0, i = void 0;
                                        for (n = this.observers[t], i = 0; n && i < n.length;) n[i++](e)
                                    }
                                }, {
                                    key: "off", value: function (t, e) {
                                        var n = void 0, i = void 0;
                                        for (n = this.observers[t] || []; e && (i = n.indexOf(e)) > -1;) n.splice(i, 1);
                                        this.observers[t] = e ? n : []
                                    }
                                }]), t
                            }();
                        i.component = function (t) {
                            return function (e) {
                                var n = u(e), i = t || e.propTypes || {}, r = e.name;
                                return function (t, o) {
                                    var a = l;
                                    n.getDefaultProps ? a.prototype.getDefaultProps = n.getDefaultProps : a.prototype.getDefaultProps = l.prototype.getDefaultProps, n.getInitialState ? a.prototype.getInitialState = n.getInitialState : a.prototype.getInitialState = l.prototype.getInitialState, a.propTypes = i;
                                    var s = new a(t, o, r);
                                    return a.propTypes = {}, e.prototype = s, c(e, n), new e
                                }
                            }
                        }, i.default = l
                    }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {"./messages.js": 4, "./utilities/": 6, "@reduct/logger": 1}], 4: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.noElement = "No element was specified while creating a instance of a Class. Creating a detached DOM Element instead.", n.extendDeprecate = "@reduct/component.extend() is deprecated since v1.0.7 - Use the native ES6 extend instead."
                }, {}], 5: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.cloneObject = function () {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = {};
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }
                }, {}], 6: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.prototype = n.isFunction = n.isObject = n.isError = n.isDefined = n.cloneObject = void 0;
                    var i = t("./cloneObject.js"), r = t("./isDefined.js"), o = t("./isError.js"),
                        a = t("./isObject.js"), s = t("./isFunction.js"), u = t("./prototype.js");
                    n.cloneObject = i.cloneObject, n.isDefined = r.isDefined, n.isError = o.isError, n.isObject = a.isObject, n.isFunction = s.isFunction, n.prototype = u.prototype
                }, {
                    "./cloneObject.js": 5,
                    "./isDefined.js": 7,
                    "./isError.js": 8,
                    "./isFunction.js": 9,
                    "./isObject.js": 10,
                    "./prototype.js": 11
                }], 7: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.isDefined = function (t) {
                        return null != t
                    }
                }, {}], 8: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.isError = function (t) {
                        return t instanceof Error
                    }
                }, {}], 9: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.isFunction = function (t) {
                        return "function" == typeof t
                    }
                }, {}], 10: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0});
                    var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                        return s(t)
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                    };
                    n.isObject = function (t) {
                        return "object" === (void 0 === t ? "undefined" : i(t)) && "function" != typeof t && null !== t
                    }
                }, {}], 11: [function (t, e, n) {
                    "use strict";
                    Object.defineProperty(n, "__esModule", {value: !0}), n.prototype = {
                        extractFrom: function (t) {
                            var e = {};
                            return Reflect.ownKeys(t.prototype).forEach((function (n) {
                                "constructor" !== n && (e[n] = t.prototype[n])
                            })), e
                        }, injectInto: function (t, e) {
                            for (var n in e) e.hasOwnProperty(n) && (t.prototype[n] = e[n])
                        }
                    }
                }, {}]
            }, {}, [3])(3)
        }, "object" === s(e) && void 0 !== t ? t.exports = a() : (r = [], void 0 === (o = "function" == typeof (i = a) ? i.apply(e, r) : i) || (t.exports = o))
    }).call(this, n(55))
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    if (n(7)) {
        var r = n(30), o = n(2), a = n(3), s = n(0), u = n(66), c = n(96), l = n(19), f = n(40), h = n(33), d = n(11),
            p = n(42), v = n(21), g = n(6), y = n(127), m = n(36), b = n(23), _ = n(14), x = n(45), w = n(4), k = n(9),
            S = n(85), E = n(37), O = n(17), M = n(38).f, T = n(87), A = n(34), C = n(5), P = n(26), D = n(56),
            L = n(53), j = n(90), I = n(47), N = n(61), R = n(39), F = n(89), B = n(116), W = n(8), z = n(16), H = W.f,
            V = z.f, q = o.RangeError, U = o.TypeError, $ = o.Uint8Array, Y = Array.prototype, X = c.ArrayBuffer,
            G = c.DataView, K = P(0), Q = P(2), J = P(3), Z = P(4), tt = P(5), et = P(6), nt = D(!0), it = D(!1),
            rt = j.values, ot = j.keys, at = j.entries, st = Y.lastIndexOf, ut = Y.reduce, ct = Y.reduceRight,
            lt = Y.join, ft = Y.sort, ht = Y.slice, dt = Y.toString, pt = Y.toLocaleString, vt = C("iterator"),
            gt = C("toStringTag"), yt = A("typed_constructor"), mt = A("def_constructor"), bt = u.CONSTR, _t = u.TYPED,
            xt = u.VIEW, wt = P(1, (function (t, e) {
                return Mt(L(t, t[mt]), e)
            })), kt = a((function () {
                return 1 === new $(new Uint16Array([1]).buffer)[0]
            })), St = !!$ && !!$.prototype.set && a((function () {
                new $(1).set({})
            })), Et = function (t, e) {
                var n = v(t);
                if (n < 0 || n % e) throw q("Wrong offset!");
                return n
            }, Ot = function (t) {
                if (w(t) && _t in t) return t;
                throw U(t + " is not a typed array!")
            }, Mt = function (t, e) {
                if (!w(t) || !(yt in t)) throw U("It is not a typed array constructor!");
                return new t(e)
            }, Tt = function (t, e) {
                return At(L(t, t[mt]), e)
            }, At = function (t, e) {
                for (var n = 0, i = e.length, r = Mt(t, i); i > n;) r[n] = e[n++];
                return r
            }, Ct = function (t, e, n) {
                H(t, e, {
                    get: function () {
                        return this._d[n]
                    }
                })
            }, Pt = function (t) {
                var e, n, i, r, o, a, s = k(t), u = arguments.length, c = u > 1 ? arguments[1] : void 0, f = void 0 !== c,
                    h = T(s);
                if (null != h && !S(h)) {
                    for (a = h.call(s), i = [], e = 0; !(o = a.next()).done; e++) i.push(o.value);
                    s = i
                }
                for (f && u > 2 && (c = l(c, arguments[2], 2)), e = 0, n = g(s.length), r = Mt(this, n); n > e; e++) r[e] = f ? c(s[e], e) : s[e];
                return r
            }, Dt = function () {
                for (var t = 0, e = arguments.length, n = Mt(this, e); e > t;) n[t] = arguments[t++];
                return n
            }, Lt = !!$ && a((function () {
                pt.call(new $(1))
            })), jt = function () {
                return pt.apply(Lt ? ht.call(Ot(this)) : Ot(this), arguments)
            }, It = {
                copyWithin: function (t, e) {
                    return B.call(Ot(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                }, every: function (t) {
                    return Z(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, fill: function (t) {
                    return F.apply(Ot(this), arguments)
                }, filter: function (t) {
                    return Tt(this, Q(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0))
                }, find: function (t) {
                    return tt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, findIndex: function (t) {
                    return et(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, forEach: function (t) {
                    K(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, indexOf: function (t) {
                    return it(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, includes: function (t) {
                    return nt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, join: function (t) {
                    return lt.apply(Ot(this), arguments)
                }, lastIndexOf: function (t) {
                    return st.apply(Ot(this), arguments)
                }, map: function (t) {
                    return wt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, reduce: function (t) {
                    return ut.apply(Ot(this), arguments)
                }, reduceRight: function (t) {
                    return ct.apply(Ot(this), arguments)
                }, reverse: function () {
                    for (var t, e = Ot(this).length, n = Math.floor(e / 2), i = 0; i < n;) t = this[i], this[i++] = this[--e], this[e] = t;
                    return this
                }, some: function (t) {
                    return J(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                }, sort: function (t) {
                    return ft.call(Ot(this), t)
                }, subarray: function (t, e) {
                    var n = Ot(this), i = n.length, r = m(t, i);
                    return new (L(n, n[mt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, g((void 0 === e ? i : m(e, i)) - r))
                }
            }, Nt = function (t, e) {
                return Tt(this, ht.call(Ot(this), t, e))
            }, Rt = function (t) {
                Ot(this);
                var e = Et(arguments[1], 1), n = this.length, i = k(t), r = g(i.length), o = 0;
                if (r + e > n) throw q("Wrong length!");
                for (; o < r;) this[e + o] = i[o++]
            }, Ft = {
                entries: function () {
                    return at.call(Ot(this))
                }, keys: function () {
                    return ot.call(Ot(this))
                }, values: function () {
                    return rt.call(Ot(this))
                }
            }, Bt = function (t, e) {
                return w(t) && t[_t] && "symbol" != i(e) && e in t && String(+e) == String(e)
            }, Wt = function (t, e) {
                return Bt(t, e = b(e, !0)) ? h(2, t[e]) : V(t, e)
            }, zt = function (t, e, n) {
                return !(Bt(t, e = b(e, !0)) && w(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t)
            };
        bt || (z.f = Wt, W.f = zt), s(s.S + s.F * !bt, "Object", {
            getOwnPropertyDescriptor: Wt,
            defineProperty: zt
        }), a((function () {
            dt.call({})
        })) && (dt = pt = function () {
            return lt.call(this)
        });
        var Ht = p({}, It);
        p(Ht, Ft), d(Ht, vt, Ft.values), p(Ht, {
            slice: Nt, set: Rt, constructor: function () {
            }, toString: dt, toLocaleString: jt
        }), Ct(Ht, "buffer", "b"), Ct(Ht, "byteOffset", "o"), Ct(Ht, "byteLength", "l"), Ct(Ht, "length", "e"), H(Ht, gt, {
            get: function () {
                return this[_t]
            }
        }), t.exports = function (t, e, n, i) {
            var c = t + ((i = !!i) ? "Clamped" : "") + "Array", l = "get" + t, h = "set" + t, p = o[c], v = p || {},
                m = p && O(p), b = !p || !u.ABV, _ = {}, k = p && p.prototype, S = function (t, n) {
                    H(t, n, {
                        get: function () {
                            return function (t, n) {
                                var i = t._d;
                                return i.v[l](n * e + i.o, kt)
                            }(this, n)
                        }, set: function (t) {
                            return function (t, n, r) {
                                var o = t._d;
                                i && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.v[h](n * e + o.o, r, kt)
                            }(this, n, t)
                        }, enumerable: !0
                    })
                };
            b ? (p = n((function (t, n, i, r) {
                f(t, p, c, "_d");
                var o, a, s, u, l = 0, h = 0;
                if (w(n)) {
                    if (!(n instanceof X || "ArrayBuffer" == (u = x(n)) || "SharedArrayBuffer" == u)) return _t in n ? At(p, n) : Pt.call(p, n);
                    o = n, h = Et(i, e);
                    var v = n.byteLength;
                    if (void 0 === r) {
                        if (v % e) throw q("Wrong length!");
                        if ((a = v - h) < 0) throw q("Wrong length!")
                    } else if ((a = g(r) * e) + h > v) throw q("Wrong length!");
                    s = a / e
                } else s = y(n), o = new X(a = s * e);
                for (d(t, "_d", {b: o, o: h, l: a, e: s, v: new G(o)}); l < s;) S(t, l++)
            })), k = p.prototype = E(Ht), d(k, "constructor", p)) : a((function () {
                p(1)
            })) && a((function () {
                new p(-1)
            })) && N((function (t) {
                new p, new p(null), new p(1.5), new p(t)
            }), !0) || (p = n((function (t, n, i, r) {
                var o;
                return f(t, p, c), w(n) ? n instanceof X || "ArrayBuffer" == (o = x(n)) || "SharedArrayBuffer" == o ? void 0 !== r ? new v(n, Et(i, e), r) : void 0 !== i ? new v(n, Et(i, e)) : new v(n) : _t in n ? At(p, n) : Pt.call(p, n) : new v(y(n))
            })), K(m !== Function.prototype ? M(v).concat(M(m)) : M(v), (function (t) {
                t in p || d(p, t, v[t])
            })), p.prototype = k, r || (k.constructor = p));
            var T = k[vt], A = !!T && ("values" == T.name || null == T.name), C = Ft.values;
            d(p, yt, !0), d(k, _t, c), d(k, xt, !0), d(k, mt, p), (i ? new p(1)[gt] == c : gt in k) || H(k, gt, {
                get: function () {
                    return c
                }
            }), _[c] = p, s(s.G + s.W + s.F * (p != v), _), s(s.S, c, {BYTES_PER_ELEMENT: e}), s(s.S + s.F * a((function () {
                v.of.call(p, 1)
            })), c, {
                from: Pt,
                of: Dt
            }), "BYTES_PER_ELEMENT" in k || d(k, "BYTES_PER_ELEMENT", e), s(s.P, c, It), R(c), s(s.P + s.F * St, c, {set: Rt}), s(s.P + s.F * !A, c, Ft), r || k.toString == dt || (k.toString = dt), s(s.P + s.F * a((function () {
                new p(1).slice()
            })), c, {slice: Nt}), s(s.P + s.F * (a((function () {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            })) || !a((function () {
                k.toLocaleString.call([1, 2])
            }))), c, {toLocaleString: jt}), I[c] = A ? T : C, r || A || d(k, vt, C)
        }
    } else t.exports = function () {
    }
}, function (t, e, n) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r = n(122), o = n(0), a = n(49)("metadata"), s = a.store || (a.store = new (n(125))), u = function (t, e, n) {
        var i = s.get(t);
        if (!i) {
            if (!n) return;
            s.set(t, i = new r)
        }
        var o = i.get(e);
        if (!o) {
            if (!n) return;
            i.set(e, o = new r)
        }
        return o
    };
    t.exports = {
        store: s, map: u, has: function (t, e, n) {
            var i = u(e, n, !1);
            return void 0 !== i && i.has(t)
        }, get: function (t, e, n) {
            var i = u(e, n, !1);
            return void 0 === i ? void 0 : i.get(t)
        }, set: function (t, e, n, i) {
            u(n, i, !0).set(t, e)
        }, keys: function (t, e) {
            var n = u(t, e, !1), i = [];
            return n && n.forEach((function (t, e) {
                i.push(e)
            })), i
        }, key: function (t) {
            return void 0 === t || "symbol" == i(t) ? t : String(t)
        }, exp: function (t) {
            o(o.S, "Reflect", t)
        }
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r = n(34)("meta"), o = n(4), a = n(14), s = n(8).f, u = 0, c = Object.isExtensible || function () {
        return !0
    }, l = !n(3)((function () {
        return c(Object.preventExtensions({}))
    })), f = function (t) {
        s(t, r, {value: {i: "O" + ++u, w: {}}})
    }, h = t.exports = {
        KEY: r, NEED: !1, fastKey: function (t, e) {
            if (!o(t)) return "symbol" == i(t) ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, r)) {
                if (!c(t)) return "F";
                if (!e) return "E";
                f(t)
            }
            return t[r].i
        }, getWeak: function (t, e) {
            if (!a(t, r)) {
                if (!c(t)) return !0;
                if (!e) return !1;
                f(t)
            }
            return t[r].w
        }, onFreeze: function (t) {
            return l && h.NEED && c(t) && !a(t, r) && f(t), t
        }
    }
}, function (t, e, n) {
    var i = n(5)("unscopables"), r = Array.prototype;
    null == r[i] && n(11)(r, i, {}), t.exports = function (t) {
        r[i][t] = !0
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e) {
    var n = 0, i = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function (t, e, n) {
    var i = n(101), r = n(73);
    t.exports = Object.keys || function (t) {
        return i(t, r)
    }
}, function (t, e, n) {
    var i = n(21), r = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var i = n(1), r = n(102), o = n(73), a = n(72)("IE_PROTO"), s = function () {
    }, u = function () {
        var t, e = n(70)("iframe"), i = o.length;
        for (e.style.display = "none", n(74).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; i--;) delete u.prototype[o[i]];
        return u()
    };
    t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s.prototype = i(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : r(n, e)
    }
}, function (t, e, n) {
    var i = n(101), r = n(73).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return i(t, r)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(2), r = n(8), o = n(7), a = n(5)("species");
    t.exports = function (t) {
        var e = i[t];
        o && e && !e[a] && r.f(e, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e) {
    t.exports = function (t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function (t, e, n) {
    var i = n(19), r = n(114), o = n(85), a = n(1), s = n(6), u = n(87), c = {}, l = {};
    (e = t.exports = function (t, e, n, f, h) {
        var d, p, v, g, y = h ? function () {
            return t
        } : u(t), m = i(n, f, e ? 2 : 1), b = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (o(y)) {
            for (d = s(t.length); d > b; b++) if ((g = e ? m(a(p = t[b])[0], p[1]) : m(t[b])) === c || g === l) return g
        } else for (v = y.call(t); !(p = v.next()).done;) if ((g = r(v, m, p.value, e)) === c || g === l) return g
    }).BREAK = c, e.RETURN = l
}, function (t, e, n) {
    var i = n(12);
    t.exports = function (t, e, n) {
        for (var r in e) i(t, r, e[r], n);
        return t
    }
}, function (t, e, n) {
    var i = n(4);
    t.exports = function (t, e) {
        if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function (t, e, n) {
    var i = n(8).f, r = n(14), o = n(5)("toStringTag");
    t.exports = function (t, e, n) {
        t && !r(t = n ? t : t.prototype, o) && i(t, o, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var i = n(20), r = n(5)("toStringTag"), o = "Arguments" == i(function () {
        return arguments
    }());
    t.exports = function (t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function (t, e, n) {
    var i = n(0), r = n(24), o = n(3), a = n(76), s = "[" + a + "]", u = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"), l = function (t, e, n) {
            var r = {}, s = o((function () {
                return !!a[t]() || "​" != "​"[t]()
            })), u = r[t] = s ? e(f) : a[t];
            n && (r[n] = u), i(i.P + i.F * s, "String", r)
        }, f = l.trim = function (t, e) {
            return t = String(r(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
        };
    t.exports = l
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var i, r, o, a;

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    a = function () {
        return function t(e, n, i) {
            function r(a, s) {
                if (!n[a]) {
                    if (!e[a]) {
                        if (o) return o(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[a] = {exports: {}};
                    e[a][0].call(c.exports, (function (t) {
                        var n = e[a][1][t];
                        return r(n || t)
                    }), c, c.exports, t, e, n, i)
                }
                return n[a].exports
            }

            for (var o = !1, a = 0; a < i.length; a++) r(i[a]);
            return r
        }({
            1: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                var i, r = t("./abstractValidator.js"), o = (i = r) && i.__esModule ? i : {default: i},
                    a = t("./utilities/");
                n.default = function (t) {
                    return (0, o.default)((function (e) {
                        return (0, a.isDefined)(e) ? (0, a.isFunction)(t) ? t(e) : e : new Error('The value is required but is either "undefined" or "null".')
                    }))
                }
            }, {"./abstractValidator.js": 2, "./utilities/": 12}],
            2: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (t) {
                    return function (e, n) {
                        return t(e[n])
                    }
                }
            }, {}],
            3: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isOptional = n.isRequired = void 0;
                var i = a(t("./abstractRequiredValidator.js")), r = a(t("./abstractValidator.js")),
                    o = t("./utilities/");

                function a(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                n.isRequired = (0, i.default)(), n.isOptional = (0, r.default)((function (t) {
                    if ((0, o.isDefined)(t)) return t
                }))
            }, {"./abstractRequiredValidator.js": 1, "./abstractValidator.js": 2, "./utilities/": 12}],
            4: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isOptional = n.isRequired = void 0;
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                        return s(t)
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                    }, r = u(t("./abstractRequiredValidator.js")), o = u(t("./abstractValidator.js")),
                    a = t("./utilities/");

                function u(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                !function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    e.default = t
                }(t("./any.js")), n.isRequired = (0, r.default)((function (t) {
                    var e = (0, a.convertStringBoolean)(t);
                    return (0, a.isBoolean)(e) ? e : new Error('The value is required and must be a "Boolean", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".')
                })), n.isOptional = (0, o.default)((function (t) {
                    var e = (0, a.convertStringBoolean)(t), n = !(0, a.isBoolean)(e);
                    return (0, a.isDefined)(t) && n ? new Error('The value is optional, but must be a "Boolean", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".') : e
                }))
            }, {"./abstractRequiredValidator.js": 1, "./abstractValidator.js": 2, "./any.js": 3, "./utilities/": 12}],
            5: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                var i = u(t("./any.js")), r = u(t("./bool.js")), o = u(t("./number.js")), a = u(t("./object.js")),
                    s = u(t("./string.js"));

                function u(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                }

                n.default = {any: i, bool: r, number: o, object: a, string: s}
            }, {"./any.js": 3, "./bool.js": 4, "./number.js": 6, "./object.js": 7, "./string.js": 8}],
            6: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isOptional = n.isRequired = void 0;
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                        return s(t)
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                    }, r = u(t("./abstractRequiredValidator.js")), o = u(t("./abstractValidator.js")),
                    a = t("./utilities/");

                function u(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                !function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    e.default = t
                }(t("./any.js")), n.isRequired = (0, r.default)((function (t) {
                    var e = (0, a.isString)(t) ? Math.abs(t) : t;
                    return (0, a.isNumeric)(e) ? e : new Error('The value is required and must be a "Number", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".')
                })), n.isOptional = (0, o.default)((function (t) {
                    var e = (0, a.isString)(t) ? Math.abs(t) : t, n = !(0, a.isNumeric)(e);
                    return (0, a.isDefined)(t) && n ? new Error('The value is optional, but must be a "Number", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".') : e
                }))
            }, {"./abstractRequiredValidator.js": 1, "./abstractValidator.js": 2, "./any.js": 3, "./utilities/": 12}],
            7: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isOptional = n.isRequired = void 0;
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                        return s(t)
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                    }, r = u(t("./abstractRequiredValidator.js")), o = u(t("./abstractValidator.js")),
                    a = t("./utilities/");

                function u(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                !function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    e.default = t
                }(t("./any.js")), n.isRequired = (0, r.default)((function (t) {
                    try {
                        t = JSON.parse(t)
                    } catch (t) {
                    }
                    return (0, a.isObject)(t) ? t : new Error('The value is required and must be a "Object", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".')
                })), n.isOptional = (0, o.default)((function (t) {
                    try {
                        t = JSON.parse(t)
                    } catch (t) {
                    }
                    return (0, a.isDefined)(t) && !(0, a.isObject)(t) ? new Error('The value is optional, but must be a "Object", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".') : t
                }))
            }, {"./abstractRequiredValidator.js": 1, "./abstractValidator.js": 2, "./any.js": 3, "./utilities/": 12}],
            8: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isOptional = n.isRequired = void 0;
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                        return s(t)
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                    }, r = u(t("./abstractRequiredValidator.js")), o = u(t("./abstractValidator.js")),
                    a = t("./utilities/");

                function u(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                !function (t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    e.default = t
                }(t("./any.js")), n.isRequired = (0, r.default)((function (t) {
                    return (0, a.isString)(t) ? t : new Error('The value is required and must be a "String", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".')
                })), n.isOptional = (0, o.default)((function (t) {
                    var e = !(0, a.isString)(t);
                    return (0, a.isDefined)(t) && e ? new Error('The value is optional, but must be a "String", instead got "' + (void 0 === t ? "undefined" : i(t)) + '".') : (0, a.isDefined)(t) ? t : void 0
                }))
            }, {"./abstractRequiredValidator.js": 1, "./abstractValidator.js": 2, "./any.js": 3, "./utilities/": 12}],
            9: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.combinePropTypes = void 0;
                var i = t("./isError");
                n.combinePropTypes = function () {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function (t, n) {
                        for (var r = 0, o = e.length - 1; r < o; r++) {
                            var a = e[r](t, n);
                            if ((0, i.isError)(a)) return a
                        }
                        return e[e.length - 1](t, n)
                    }
                }
            }, {"./isError": 16}],
            10: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.compose = function () {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function (t) {
                        return e.reverse().reduce((function (t, e) {
                            return e(t)
                        }), t)
                    }
                }
            }, {}],
            11: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.convertStringBoolean = function (t) {
                    return "false" === t && (t = !1), "true" === t && (t = !0), t
                }
            }, {}],
            12: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isString = n.isObject = n.isNumeric = n.isFunction = n.isError = n.isDefined = n.isBoolean = n.isArray = n.convertStringBoolean = n.compose = n.combinePropTypes = void 0;
                var i = t("./combinePropTypes.js"), r = t("./compose.js"), o = t("./convertStringBoolean.js"),
                    a = t("./isArray.js"), s = t("./isBoolean.js"), u = t("./isDefined.js"), c = t("./isError.js"),
                    l = t("./isFunction.js"), f = t("./isNumeric.js"), h = t("./isObject.js"), d = t("./isString.js");
                n.combinePropTypes = i.combinePropTypes, n.compose = r.compose, n.convertStringBoolean = o.convertStringBoolean, n.isArray = a.isArray, n.isBoolean = s.isBoolean, n.isDefined = u.isDefined, n.isError = c.isError, n.isFunction = l.isFunction, n.isNumeric = f.isNumeric, n.isObject = h.isObject, n.isString = d.isString
            }, {
                "./combinePropTypes.js": 9,
                "./compose.js": 10,
                "./convertStringBoolean.js": 11,
                "./isArray.js": 13,
                "./isBoolean.js": 14,
                "./isDefined.js": 15,
                "./isError.js": 16,
                "./isFunction.js": 17,
                "./isNumeric.js": 18,
                "./isObject.js": 19,
                "./isString.js": 20
            }],
            13: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                    return s(t)
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                };
                n.isArray = function (t) {
                    return null !== t && "object" === (void 0 === t ? "undefined" : i(t)) && Array.isArray(t)
                }
            }, {}],
            14: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isBoolean = function (t) {
                    return "boolean" == typeof t || "true" === t || "false" === t
                }
            }, {}],
            15: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isDefined = function (t) {
                    return null != t
                }
            }, {}],
            16: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isError = function (t) {
                    return t instanceof Error
                }
            }, {}],
            17: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isFunction = function (t) {
                    return "function" == typeof t
                }
            }, {}],
            18: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isNumeric = function (t) {
                    return !isNaN(t) && null !== t && !0 !== t && !1 !== t
                }
            }, {}],
            19: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0});
                var i = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (t) {
                    return s(t)
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : s(t)
                };
                n.isObject = function (t) {
                    return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t
                }
            }, {}],
            20: [function (t, e, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {value: !0}), n.isString = function (t) {
                    return "string" == typeof t
                }
            }, {}]
        }, {}, [5])(5)
    }, "object" === s(e) && void 0 !== t ? t.exports = a() : (r = [], void 0 === (o = "function" == typeof (i = a) ? i.apply(e, r) : i) || (t.exports = o))
}, function (t, e, n) {
    var i = n(18), r = n(2), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(30) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, n) {
    var i = n(20);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    "use strict";
    var i = n(1);
    t.exports = function () {
        var t = i(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    var i = n(1), r = n(10), o = n(5)("species");
    t.exports = function (t, e) {
        var n, a = i(t).constructor;
        return void 0 === a || null == (n = i(a)[o]) ? e : r(n)
    }
}, function (t, e, n) {
    (function (t) {
        var n;

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        !function (e, n) {
            "use strict";
            "object" === i(t) && "object" === i(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(e)
        }("undefined" != typeof window ? window : this, (function (r, o) {
            "use strict";
            var a = [], s = Object.getPrototypeOf, u = a.slice, c = a.flat ? function (t) {
                    return a.flat.call(t)
                } : function (t) {
                    return a.concat.apply([], t)
                }, l = a.push, f = a.indexOf, h = {}, d = h.toString, p = h.hasOwnProperty, v = p.toString,
                g = v.call(Object), y = {}, m = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                }, b = function (t) {
                    return null != t && t === t.window
                }, _ = r.document, x = {type: !0, src: !0, nonce: !0, noModule: !0};

            function w(t, e, n) {
                var i, r, o = (n = n || _).createElement("script");
                if (o.text = t, e) for (i in x) (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function k(t) {
                return null == t ? t + "" : "object" === i(t) || "function" == typeof t ? h[d.call(t)] || "object" : i(t)
            }

            var S = function t(e, n) {
                return new t.fn.init(e, n)
            };

            function E(t) {
                var e = !!t && "length" in t && t.length, n = k(t);
                return !m(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }

            S.fn = S.prototype = {
                jquery: "3.6.0", constructor: S, length: 0, toArray: function () {
                    return u.call(this)
                }, get: function (t) {
                    return null == t ? u.call(this) : t < 0 ? this[t + this.length] : this[t]
                }, pushStack: function (t) {
                    var e = S.merge(this.constructor(), t);
                    return e.prevObject = this, e
                }, each: function (t) {
                    return S.each(this, t)
                }, map: function (t) {
                    return this.pushStack(S.map(this, (function (e, n) {
                        return t.call(e, n, e)
                    })))
                }, slice: function () {
                    return this.pushStack(u.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, even: function () {
                    return this.pushStack(S.grep(this, (function (t, e) {
                        return (e + 1) % 2
                    })))
                }, odd: function () {
                    return this.pushStack(S.grep(this, (function (t, e) {
                        return e % 2
                    })))
                }, eq: function (t) {
                    var e = this.length, n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: l, sort: a.sort, splice: a.splice
            }, S.extend = S.fn.extend = function () {
                var t, e, n, r, o, a, s = arguments[0] || {}, u = 1, c = arguments.length, l = !1;
                for ("boolean" == typeof s && (l = s, s = arguments[u] || {}, u++), "object" === i(s) || m(s) || (s = {}), u === c && (s = this, u--); u < c; u++) if (null != (t = arguments[u])) for (e in t) r = t[e], "__proto__" !== e && s !== r && (l && r && (S.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[e], a = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}, o = !1, s[e] = S.extend(l, a, r)) : void 0 !== r && (s[e] = r));
                return s
            }, S.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                    throw new Error(t)
                }, noop: function () {
                }, isPlainObject: function (t) {
                    var e, n;
                    return !(!t || "[object Object]" !== d.call(t)) && (!(e = s(t)) || "function" == typeof (n = p.call(e, "constructor") && e.constructor) && v.call(n) === g)
                }, isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }, globalEval: function (t, e, n) {
                    w(t, {nonce: e && e.nonce}, n)
                }, each: function (t, e) {
                    var n, i = 0;
                    if (E(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                    return t
                }, makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (E(Object(t)) ? S.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
                }, inArray: function (t, e, n) {
                    return null == e ? -1 : f.call(e, t, n)
                }, merge: function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                    return t.length = r, t
                }, grep: function (t, e, n) {
                    for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
                    return i
                }, map: function (t, e, n) {
                    var i, r, o = 0, a = [];
                    if (E(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r); else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
                    return c(a)
                }, guid: 1, support: y
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = a[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
                h["[object " + e + "]"] = e.toLowerCase()
            }));
            var O = function (t) {
                var e, n, i, r, o, a, s, u, c, l, f, h, d, p, v, g, y, m, b, _ = "sizzle" + 1 * new Date,
                    x = t.document, w = 0, k = 0, S = ut(), E = ut(), O = ut(), M = ut(), T = function (t, e) {
                        return t === e && (f = !0), 0
                    }, A = {}.hasOwnProperty, C = [], P = C.pop, D = C.push, L = C.push, j = C.slice, I = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    B = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
                    W = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                    z = new RegExp(R + "+", "g"),
                    H = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    V = new RegExp("^" + R + "*," + R + "*"), q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    U = new RegExp(R + "|>"), $ = new RegExp(W), Y = new RegExp("^" + F + "$"), X = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + B),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    }, G = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/,
                    et = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"), nt = function (t, e) {
                        var n = "0x" + t.slice(1) - 65536;
                        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, ot = function () {
                        h()
                    }, at = _t((function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }), {dir: "parentNode", next: "legend"});
                try {
                    L.apply(C = j.call(x.childNodes), x.childNodes), C[x.childNodes.length].nodeType
                } catch (t) {
                    L = {
                        apply: C.length ? function (t, e) {
                            D.apply(t, j.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                            t.length = n - 1
                        }
                    }
                }

                function st(t, e, i, r) {
                    var o, s, c, l, f, p, y, m = e && e.ownerDocument, x = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
                    if (!r && (h(e), e = e || d, v)) {
                        if (11 !== x && (f = Z.exec(t))) if (o = f[1]) {
                            if (9 === x) {
                                if (!(c = e.getElementById(o))) return i;
                                if (c.id === o) return i.push(c), i
                            } else if (m && (c = m.getElementById(o)) && b(e, c) && c.id === o) return i.push(c), i
                        } else {
                            if (f[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(o)), i
                        }
                        if (n.qsa && !M[t + " "] && (!g || !g.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                            if (y = t, m = e, 1 === x && (U.test(t) || q.test(t))) {
                                for ((m = tt.test(t) && yt(e.parentNode) || e) === e && n.scope || ((l = e.getAttribute("id")) ? l = l.replace(it, rt) : e.setAttribute("id", l = _)), s = (p = a(t)).length; s--;) p[s] = (l ? "#" + l : ":scope") + " " + bt(p[s]);
                                y = p.join(",")
                            }
                            try {
                                return L.apply(i, m.querySelectorAll(y)), i
                            } catch (e) {
                                M(t, !0)
                            } finally {
                                l === _ && e.removeAttribute("id")
                            }
                        }
                    }
                    return u(t.replace(H, "$1"), e, i, r)
                }

                function ut() {
                    var t = [];
                    return function e(n, r) {
                        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                }

                function ct(t) {
                    return t[_] = !0, t
                }

                function lt(t) {
                    var e = d.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ft(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
                }

                function ht(t, e) {
                    var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function dt(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function vt(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function gt(t) {
                    return ct((function (e) {
                        return e = +e, ct((function (n, i) {
                            for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        }))
                    }))
                }

                function yt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in n = st.support = {}, o = st.isXML = function (t) {
                    var e = t && t.namespaceURI, n = t && (t.ownerDocument || t).documentElement;
                    return !G.test(e || n && n.nodeName || "HTML")
                }, h = st.setDocument = function (t) {
                    var e, r, a = t ? t.ownerDocument || t : x;
                    return a != d && 9 === a.nodeType && a.documentElement ? (p = (d = a).documentElement, v = !o(d), x != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = lt((function (t) {
                        return p.appendChild(t).appendChild(d.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = lt((function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    })), n.getElementsByTagName = lt((function (t) {
                        return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                    })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = lt((function (t) {
                        return p.appendChild(t).id = _, !d.getElementsByName || !d.getElementsByName(_).length
                    })), n.getById ? (i.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, i.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                            var n, i, r, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (r = e.getElementsByName(t), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                        if (void 0 !== e.getElementsByClassName && v) return e.getElementsByClassName(t)
                    }, y = [], g = [], (n.qsa = J.test(d.querySelectorAll)) && (lt((function (t) {
                        var e;
                        p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (e = d.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    })), lt((function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    }))), (n.matchesSelector = J.test(m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt((function (t) {
                        n.disconnectedMatch = m.call(t, "*"), m.call(t, "[s!='']:x"), y.push("!=", W)
                    })), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), e = J.test(p.compareDocumentPosition), b = e || J.test(p.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, T = e ? function (t, e) {
                        if (t === e) return f = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == d || t.ownerDocument == x && b(x, t) ? -1 : e == d || e.ownerDocument == x && b(x, e) ? 1 : l ? I(l, t) - I(l, e) : 0 : 4 & i ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return f = !0, 0;
                        var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], s = [e];
                        if (!r || !o) return t == d ? -1 : e == d ? 1 : r ? -1 : o ? 1 : l ? I(l, t) - I(l, e) : 0;
                        if (r === o) return ht(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? ht(a[i], s[i]) : a[i] == x ? -1 : s[i] == x ? 1 : 0
                    }, d) : d
                }, st.matches = function (t, e) {
                    return st(t, null, null, e)
                }, st.matchesSelector = function (t, e) {
                    if (h(t), n.matchesSelector && v && !M[e + " "] && (!y || !y.test(e)) && (!g || !g.test(e))) try {
                        var i = m.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        M(e, !0)
                    }
                    return st(e, d, null, [t]).length > 0
                }, st.contains = function (t, e) {
                    return (t.ownerDocument || t) != d && h(t), b(t, e)
                }, st.attr = function (t, e) {
                    (t.ownerDocument || t) != d && h(t);
                    var r = i.attrHandle[e.toLowerCase()],
                        o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !v) : void 0;
                    return void 0 !== o ? o : n.attributes || !v ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, st.escape = function (t) {
                    return (t + "").replace(it, rt)
                }, st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, st.uniqueSort = function (t) {
                    var e, i = [], r = 0, o = 0;
                    if (f = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(T), f) {
                        for (; e = t[o++];) e === t[o] && (r = i.push(o));
                        for (; r--;) t.splice(i[r], 1)
                    }
                    return l = null, t
                }, r = st.getText = function (t) {
                    var e, n = "", i = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[i++];) n += r(e);
                    return n
                }, (i = st.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = S[t + " "];
                            return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && S(t, (function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            }))
                        }, ATTR: function (t, e, n) {
                            return function (i) {
                                var r = st.attr(i, t);
                                return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, u) {
                                var c, l, f, h, d, p, v = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                    y = s && e.nodeName.toLowerCase(), m = !u && !s, b = !1;
                                if (g) {
                                    if (o) {
                                        for (; v;) {
                                            for (h = e; h = h[v];) if (s ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                            p = v = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild], a && m) {
                                        for (b = (d = (c = (l = (f = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === w && c[1]) && c[2], h = d && g.childNodes[d]; h = ++d && h && h[v] || (b = d = 0) || p.pop();) if (1 === h.nodeType && ++b && h === e) {
                                            l[t] = [w, d, b];
                                            break
                                        }
                                    } else if (m && (b = d = (c = (l = (f = (h = e)[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === w && c[1]), !1 === b) for (; (h = ++d && h && h[v] || (b = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (m && ((l = (f = h[_] || (h[_] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] = [w, b]), h !== e));) ;
                                    return (b -= r) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var n,
                                r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return r[_] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function (t, n) {
                                for (var i, o = r(t, e), a = o.length; a--;) t[i = I(t, o[a])] = !(n[i] = o[a])
                            })) : function (t) {
                                return r(t, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: ct((function (t) {
                            var e = [], n = [], i = s(t.replace(H, "$1"));
                            return i[_] ? ct((function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o))
                            })) : function (t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        })), has: ct((function (t) {
                            return function (e) {
                                return st(t, e).length > 0
                            }
                        })), contains: ct((function (t) {
                            return t = t.replace(et, nt), function (e) {
                                return (e.textContent || r(e)).indexOf(t) > -1
                            }
                        })), lang: ct((function (t) {
                            return Y.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        })), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === p
                        }, focus: function (t) {
                            return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: vt(!1), disabled: vt(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !i.pseudos.empty(t)
                        }, header: function (t) {
                            return Q.test(t.nodeName)
                        }, input: function (t) {
                            return K.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: gt((function () {
                            return [0]
                        })), last: gt((function (t, e) {
                            return [e - 1]
                        })), eq: gt((function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        })), even: gt((function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        })), odd: gt((function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        })), lt: gt((function (t, e, n) {
                            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                            return t
                        })), gt: gt((function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        }))
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = dt(e);
                for (e in {submit: !0, reset: !0}) i.pseudos[e] = pt(e);

                function mt() {
                }

                function bt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function _t(t, e, n) {
                    var i = e.dir, r = e.next, o = r || i, a = n && "parentNode" === o, s = k++;
                    return e.first ? function (e, n, r) {
                        for (; e = e[i];) if (1 === e.nodeType || a) return t(e, n, r);
                        return !1
                    } : function (e, n, u) {
                        var c, l, f, h = [w, s];
                        if (u) {
                            for (; e = e[i];) if ((1 === e.nodeType || a) && t(e, n, u)) return !0
                        } else for (; e = e[i];) if (1 === e.nodeType || a) if (l = (f = e[_] || (e[_] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e; else {
                            if ((c = l[o]) && c[0] === w && c[1] === s) return h[2] = c[2];
                            if (l[o] = h, h[2] = t(e, n, u)) return !0
                        }
                        return !1
                    }
                }

                function xt(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function wt(t, e, n, i, r) {
                    for (var o, a = [], s = 0, u = t.length, c = null != e; s < u; s++) (o = t[s]) && (n && !n(o, i, r) || (a.push(o), c && e.push(s)));
                    return a
                }

                function kt(t, e, n, i, r, o) {
                    return i && !i[_] && (i = kt(i)), r && !r[_] && (r = kt(r, o)), ct((function (o, a, s, u) {
                        var c, l, f, h = [], d = [], p = a.length, v = o || function (t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++) st(t, e[i], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []), g = !t || !o && e ? v : wt(v, h, t, s, u),
                            y = n ? r || (o ? t : p || i) ? [] : a : g;
                        if (n && n(g, y, s, u), i) for (c = wt(y, d), i(c, [], s, u), l = c.length; l--;) (f = c[l]) && (y[d[l]] = !(g[d[l]] = f));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], l = y.length; l--;) (f = y[l]) && c.push(g[l] = f);
                                    r(null, y = [], c, u)
                                }
                                for (l = y.length; l--;) (f = y[l]) && (c = r ? I(o, f) : h[l]) > -1 && (o[c] = !(a[c] = f))
                            }
                        } else y = wt(y === a ? y.splice(p, y.length) : y), r ? r(null, a, y, u) : L.apply(a, y)
                    }))
                }

                function St(t) {
                    for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], u = a ? 1 : 0, l = _t((function (t) {
                        return t === e
                    }), s, !0), f = _t((function (t) {
                        return I(e, t) > -1
                    }), s, !0), h = [function (t, n, i) {
                        var r = !a && (i || n !== c) || ((e = n).nodeType ? l(t, n, i) : f(t, n, i));
                        return e = null, r
                    }]; u < o; u++) if (n = i.relative[t[u].type]) h = [_t(xt(h), n)]; else {
                        if ((n = i.filter[t[u].type].apply(null, t[u].matches))[_]) {
                            for (r = ++u; r < o && !i.relative[t[r].type]; r++) ;
                            return kt(u > 1 && xt(h), u > 1 && bt(t.slice(0, u - 1).concat({value: " " === t[u - 2].type ? "*" : ""})).replace(H, "$1"), n, u < r && St(t.slice(u, r)), r < o && St(t = t.slice(r)), r < o && bt(t))
                        }
                        h.push(n)
                    }
                    return xt(h)
                }

                return mt.prototype = i.filters = i.pseudos, i.setFilters = new mt, a = st.tokenize = function (t, e) {
                    var n, r, o, a, s, u, c, l = E[t + " "];
                    if (l) return e ? 0 : l.slice(0);
                    for (s = t, u = [], c = i.preFilter; s;) {
                        for (a in n && !(r = V.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = q.exec(s)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(H, " ")
                        }), s = s.slice(n.length)), i.filter) !(r = X[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: a,
                            matches: r
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? st.error(t) : E(t, u).slice(0)
                }, s = st.compile = function (t, e) {
                    var n, r = [], o = [], s = O[t + " "];
                    if (!s) {
                        for (e || (e = a(t)), n = e.length; n--;) (s = St(e[n]))[_] ? r.push(s) : o.push(s);
                        (s = O(t, function (t, e) {
                            var n = e.length > 0, r = t.length > 0, o = function (o, a, s, u, l) {
                                var f, p, g, y = 0, m = "0", b = o && [], _ = [], x = c,
                                    k = o || r && i.find.TAG("*", l), S = w += null == x ? 1 : Math.random() || .1,
                                    E = k.length;
                                for (l && (c = a == d || a || l); m !== E && null != (f = k[m]); m++) {
                                    if (r && f) {
                                        for (p = 0, a || f.ownerDocument == d || (h(f), s = !v); g = t[p++];) if (g(f, a || d, s)) {
                                            u.push(f);
                                            break
                                        }
                                        l && (w = S)
                                    }
                                    n && ((f = !g && f) && y--, o && b.push(f))
                                }
                                if (y += m, n && m !== y) {
                                    for (p = 0; g = e[p++];) g(b, _, a, s);
                                    if (o) {
                                        if (y > 0) for (; m--;) b[m] || _[m] || (_[m] = P.call(u));
                                        _ = wt(_)
                                    }
                                    L.apply(u, _), l && !o && _.length > 0 && y + e.length > 1 && st.uniqueSort(u)
                                }
                                return l && (w = S, c = x), b
                            };
                            return n ? ct(o) : o
                        }(o, r))).selector = t
                    }
                    return s
                }, u = st.select = function (t, e, n, r) {
                    var o, u, c, l, f, h = "function" == typeof t && t, d = !r && a(t = h.selector || t);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === e.nodeType && v && i.relative[u[1].type]) {
                            if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(u.shift().value.length)
                        }
                        for (o = X.needsContext.test(t) ? 0 : u.length; o-- && (c = u[o], !i.relative[l = c.type]);) if ((f = i.find[l]) && (r = f(c.matches[0].replace(et, nt), tt.test(u[0].type) && yt(e.parentNode) || e))) {
                            if (u.splice(o, 1), !(t = r.length && bt(u))) return L.apply(n, r), n;
                            break
                        }
                    }
                    return (h || s(t, d))(r, e, !v, n, !e || tt.test(t) && yt(e.parentNode) || e), n
                }, n.sortStable = _.split("").sort(T).join("") === _, n.detectDuplicates = !!f, h(), n.sortDetached = lt((function (t) {
                    return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                })), lt((function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                })) || ft("type|href|height|width", (function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                })), n.attributes && lt((function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                })) || ft("value", (function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                })), lt((function (t) {
                    return null == t.getAttribute("disabled")
                })) || ft(N, (function (t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                })), st
            }(r);
            S.find = O, (S.expr = O.selectors)[":"] = S.expr.pseudos, S.uniqueSort = S.unique = O.uniqueSort, S.text = O.getText, S.isXMLDoc = O.isXML, S.contains = O.contains, S.escapeSelector = O.escape;
            var M = function (t, e, n) {
                for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                    if (r && S(t).is(n)) break;
                    i.push(t)
                }
                return i
            }, T = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }, A = S.expr.match.needsContext;

            function C(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }

            var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function D(t, e, n) {
                return m(e) ? S.grep(t, (function (t, i) {
                    return !!e.call(t, i, t) !== n
                })) : e.nodeType ? S.grep(t, (function (t) {
                    return t === e !== n
                })) : "string" != typeof e ? S.grep(t, (function (t) {
                    return f.call(e, t) > -1 !== n
                })) : S.filter(e, t, n)
            }

            S.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? S.find.matchesSelector(i, t) ? [i] : [] : S.find.matches(t, S.grep(e, (function (t) {
                    return 1 === t.nodeType
                })))
            }, S.fn.extend({
                find: function (t) {
                    var e, n, i = this.length, r = this;
                    if ("string" != typeof t) return this.pushStack(S(t).filter((function () {
                        for (e = 0; e < i; e++) if (S.contains(r[e], this)) return !0
                    })));
                    for (n = this.pushStack([]), e = 0; e < i; e++) S.find(t, r[e], n);
                    return i > 1 ? S.uniqueSort(n) : n
                }, filter: function (t) {
                    return this.pushStack(D(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(D(this, t || [], !0))
                }, is: function (t) {
                    return !!D(this, "string" == typeof t && A.test(t) ? S(t) : t || [], !1).length
                }
            });
            var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function (t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || L, "string" == typeof t) {
                    if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : _, !0)), P.test(i[1]) && S.isPlainObject(e)) for (i in e) m(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return (r = _.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(S) : S.makeArray(t, this)
            }).prototype = S.fn, L = S(_);
            var I = /^(?:parents|prev(?:Until|All))/, N = {children: !0, contents: !0, next: !0, prev: !0};

            function R(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType;) ;
                return t
            }

            S.fn.extend({
                has: function (t) {
                    var e = S(t, this), n = e.length;
                    return this.filter((function () {
                        for (var t = 0; t < n; t++) if (S.contains(this, e[t])) return !0
                    }))
                }, closest: function (t, e) {
                    var n, i = 0, r = this.length, o = [], a = "string" != typeof t && S(t);
                    if (!A.test(t)) for (; i < r; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? f.call(S(t), this[0]) : f.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), S.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return M(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return M(t, "parentNode", n)
                }, next: function (t) {
                    return R(t, "nextSibling")
                }, prev: function (t) {
                    return R(t, "previousSibling")
                }, nextAll: function (t) {
                    return M(t, "nextSibling")
                }, prevAll: function (t) {
                    return M(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return M(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return M(t, "previousSibling", n)
                }, siblings: function (t) {
                    return T((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return T(t.firstChild)
                }, contents: function (t) {
                    return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (C(t, "template") && (t = t.content || t), S.merge([], t.childNodes))
                }
            }, (function (t, e) {
                S.fn[t] = function (n, i) {
                    var r = S.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = S.filter(i, r)), this.length > 1 && (N[t] || S.uniqueSort(r), I.test(t) && r.reverse()), this.pushStack(r)
                }
            }));
            var F = /[^\x20\t\r\n\f]+/g;

            function B(t) {
                return t
            }

            function W(t) {
                throw t
            }

            function z(t, e, n, i) {
                var r;
                try {
                    t && m(r = t.promise) ? r.call(t).done(e).fail(n) : t && m(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
                } catch (t) {
                    n.apply(void 0, [t])
                }
            }

            S.Callbacks = function (t) {
                t = "string" == typeof t ? function (t) {
                    var e = {};
                    return S.each(t.match(F) || [], (function (t, n) {
                        e[n] = !0
                    })), e
                }(t) : S.extend({}, t);
                var e, n, i, r, o = [], a = [], s = -1, u = function () {
                    for (r = r || t.once, i = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                }, c = {
                    add: function () {
                        return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                            S.each(n, (function (n, i) {
                                m(i) ? t.unique && c.has(i) || o.push(i) : i && i.length && "string" !== k(i) && e(i)
                            }))
                        }(arguments), n && !e && u()), this
                    }, remove: function () {
                        return S.each(arguments, (function (t, e) {
                            for (var n; (n = S.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        })), this
                    }, has: function (t) {
                        return t ? S.inArray(t, o) > -1 : o.length > 0
                    }, empty: function () {
                        return o && (o = []), this
                    }, disable: function () {
                        return r = a = [], o = n = "", this
                    }, disabled: function () {
                        return !o
                    }, lock: function () {
                        return r = a = [], n || e || (o = n = ""), this
                    }, locked: function () {
                        return !!r
                    }, fireWith: function (t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || u()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!i
                    }
                };
                return c
            }, S.extend({
                Deferred: function (t) {
                    var e = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                        n = "pending", o = {
                            state: function () {
                                return n
                            }, always: function () {
                                return a.done(arguments).fail(arguments), this
                            }, catch: function (t) {
                                return o.then(null, t)
                            }, pipe: function () {
                                var t = arguments;
                                return S.Deferred((function (n) {
                                    S.each(e, (function (e, i) {
                                        var r = m(t[i[4]]) && t[i[4]];
                                        a[i[1]]((function () {
                                            var t = r && r.apply(this, arguments);
                                            t && m(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                        }))
                                    })), t = null
                                })).promise()
                            }, then: function (t, n, o) {
                                var a = 0;

                                function s(t, e, n, o) {
                                    return function () {
                                        var u = this, c = arguments, l = function () {
                                            var r, l;
                                            if (!(t < a)) {
                                                if ((r = n.apply(u, c)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                l = r && ("object" === i(r) || "function" == typeof r) && r.then, m(l) ? o ? l.call(r, s(a, e, B, o), s(a, e, W, o)) : (a++, l.call(r, s(a, e, B, o), s(a, e, W, o), s(a, e, B, e.notifyWith))) : (n !== B && (u = void 0, c = [r]), (o || e.resolveWith)(u, c))
                                            }
                                        }, f = o ? l : function () {
                                            try {
                                                l()
                                            } catch (i) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(i, f.stackTrace), t + 1 >= a && (n !== W && (u = void 0, c = [i]), e.rejectWith(u, c))
                                            }
                                        };
                                        t ? f() : (S.Deferred.getStackHook && (f.stackTrace = S.Deferred.getStackHook()), r.setTimeout(f))
                                    }
                                }

                                return S.Deferred((function (i) {
                                    e[0][3].add(s(0, i, m(o) ? o : B, i.notifyWith)), e[1][3].add(s(0, i, m(t) ? t : B)), e[2][3].add(s(0, i, m(n) ? n : W))
                                })).promise()
                            }, promise: function (t) {
                                return null != t ? S.extend(t, o) : o
                            }
                        }, a = {};
                    return S.each(e, (function (t, i) {
                        var r = i[2], s = i[5];
                        o[i[1]] = r.add, s && r.add((function () {
                            n = s
                        }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), r.add(i[3].fire), a[i[0]] = function () {
                            return a[i[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[i[0] + "With"] = r.fireWith
                    })), o.promise(a), t && t.call(a, a), a
                }, when: function (t) {
                    var e = arguments.length, n = e, i = Array(n), r = u.call(arguments), o = S.Deferred(),
                        a = function (t) {
                            return function (n) {
                                i[t] = this, r[t] = arguments.length > 1 ? u.call(arguments) : n, --e || o.resolveWith(i, r)
                            }
                        };
                    if (e <= 1 && (z(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || m(r[n] && r[n].then))) return o.then();
                    for (; n--;) z(r[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function (t, e) {
                r.console && r.console.warn && t && H.test(t.name) && r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, S.readyException = function (t) {
                r.setTimeout((function () {
                    throw t
                }))
            };
            var V = S.Deferred();

            function q() {
                _.removeEventListener("DOMContentLoaded", q), r.removeEventListener("load", q), S.ready()
            }

            S.fn.ready = function (t) {
                return V.then(t).catch((function (t) {
                    S.readyException(t)
                })), this
            }, S.extend({
                isReady: !1, readyWait: 1, ready: function (t) {
                    (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== t && --S.readyWait > 0 || V.resolveWith(_, [S]))
                }
            }), S.ready.then = V.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? r.setTimeout(S.ready) : (_.addEventListener("DOMContentLoaded", q), r.addEventListener("load", q));
            var U = function t(e, n, i, r, o, a, s) {
                var u = 0, c = e.length, l = null == i;
                if ("object" === k(i)) for (u in o = !0, i) t(e, n, u, i[u], !0, a, s); else if (void 0 !== r && (o = !0, m(r) || (s = !0), l && (s ? (n.call(e, r), n = null) : (l = n, n = function (t, e, n) {
                    return l.call(S(t), n)
                })), n)) for (; u < c; u++) n(e[u], i, s ? r : r.call(e[u], u, n(e[u], i)));
                return o ? e : l ? n.call(e) : c ? n(e[0], i) : a
            }, $ = /^-ms-/, Y = /-([a-z])/g;

            function X(t, e) {
                return e.toUpperCase()
            }

            function G(t) {
                return t.replace($, "ms-").replace(Y, X)
            }

            var K = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

            function Q() {
                this.expando = S.expando + Q.uid++
            }

            Q.uid = 1, Q.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                }, set: function (t, e, n) {
                    var i, r = this.cache(t);
                    if ("string" == typeof e) r[G(e)] = n; else for (i in e) r[G(i)] = e[i];
                    return r
                }, get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
                }, access: function (t, e, n) {
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                }, remove: function (t, e) {
                    var n, i = t[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== e) {
                            n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(F) || []).length;
                            for (; n--;) delete i[e[n]]
                        }
                        (void 0 === e || S.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                }, hasData: function (t) {
                    var e = t[this.expando];
                    return void 0 !== e && !S.isEmptyObject(e)
                }
            };
            var J = new Q, Z = new Q, tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, et = /[A-Z]/g;

            function nt(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = function (t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {
                    }
                    Z.set(t, e, n)
                } else n = void 0;
                return n
            }

            S.extend({
                hasData: function (t) {
                    return Z.hasData(t) || J.hasData(t)
                }, data: function (t, e, n) {
                    return Z.access(t, e, n)
                }, removeData: function (t, e) {
                    Z.remove(t, e)
                }, _data: function (t, e, n) {
                    return J.access(t, e, n)
                }, _removeData: function (t, e) {
                    J.remove(t, e)
                }
            }), S.fn.extend({
                data: function (t, e) {
                    var n, r, o, a = this[0], s = a && a.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = Z.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), nt(a, r, o[r]));
                            J.set(a, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" === i(t) ? this.each((function () {
                        Z.set(this, t)
                    })) : U(this, (function (e) {
                        var n;
                        if (a && void 0 === e) return void 0 !== (n = Z.get(a, t)) || void 0 !== (n = nt(a, t)) ? n : void 0;
                        this.each((function () {
                            Z.set(this, t, e)
                        }))
                    }), null, e, arguments.length > 1, null, !0)
                }, removeData: function (t) {
                    return this.each((function () {
                        Z.remove(this, t)
                    }))
                }
            }), S.extend({
                queue: function (t, e, n) {
                    var i;
                    if (t) return e = (e || "fx") + "queue", i = J.get(t, e), n && (!i || Array.isArray(n) ? i = J.access(t, e, S.makeArray(n)) : i.push(n)), i || []
                }, dequeue: function (t, e) {
                    var n = S.queue(t, e = e || "fx"), i = n.length, r = n.shift(), o = S._queueHooks(t, e);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function () {
                        S.dequeue(t, e)
                    }), o)), !i && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return J.get(t, n) || J.access(t, n, {
                        empty: S.Callbacks("once memory").add((function () {
                            J.remove(t, [e + "queue", n])
                        }))
                    })
                }
            }), S.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? S.queue(this[0], t) : void 0 === e ? this : this.each((function () {
                        var n = S.queue(this, t, e);
                        S._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && S.dequeue(this, t)
                    }))
                }, dequeue: function (t) {
                    return this.each((function () {
                        S.dequeue(this, t)
                    }))
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, i = 1, r = S.Deferred(), o = this, a = this.length, s = function () {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (n = J.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(e)
                }
            });
            var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"), ot = ["Top", "Right", "Bottom", "Left"],
                at = _.documentElement, st = function (t) {
                    return S.contains(t.ownerDocument, t)
                }, ut = {composed: !0};
            at.getRootNode && (st = function (t) {
                return S.contains(t.ownerDocument, t) || t.getRootNode(ut) === t.ownerDocument
            });
            var ct = function (t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === S.css(t, "display")
            };

            function lt(t, e, n, i) {
                var r, o, a = 20, s = i ? function () {
                        return i.cur()
                    } : function () {
                        return S.css(t, e, "")
                    }, u = s(), c = n && n[3] || (S.cssNumber[e] ? "" : "px"),
                    l = t.nodeType && (S.cssNumber[e] || "px" !== c && +u) && rt.exec(S.css(t, e));
                if (l && l[3] !== c) {
                    for (u /= 2, c = c || l[3], l = +u || 1; a--;) S.style(t, e, l + c), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), l /= o;
                    S.style(t, e, (l *= 2) + c), n = n || []
                }
                return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r
            }

            var ft = {};

            function ht(t) {
                var e, n = t.ownerDocument, i = t.nodeName, r = ft[i];
                return r || (e = n.body.appendChild(n.createElement(i)), r = S.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ft[i] = r, r)
            }

            function dt(t, e) {
                for (var n, i, r = [], o = 0, a = t.length; o < a; o++) (i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ct(i) && (r[o] = ht(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
                for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
                return t
            }

            S.fn.extend({
                show: function () {
                    return dt(this, !0)
                }, hide: function () {
                    return dt(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
                        ct(this) ? S(this).show() : S(this).hide()
                    }))
                }
            });
            var pt, vt, gt = /^(?:checkbox|radio)$/i, yt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                mt = /^$|^module$|\/(?:java|ecma)script/i;
            pt = _.createDocumentFragment().appendChild(_.createElement("div")), (vt = _.createElement("input")).setAttribute("type", "radio"), vt.setAttribute("checked", "checked"), vt.setAttribute("name", "t"), pt.appendChild(vt), y.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue, pt.innerHTML = "<option></option>", y.option = !!pt.lastChild;
            var bt = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function _t(t, e) {
                var n;
                return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && C(t, e) ? S.merge([t], n) : n
            }

            function xt(t, e) {
                for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"))
            }

            bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead, bt.th = bt.td, y.option || (bt.optgroup = bt.option = [1, "<select multiple='multiple'>", "</select>"]);
            var wt = /<|&#?\w+;/;

            function kt(t, e, n, i, r) {
                for (var o, a, s, u, c, l, f = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++) if ((o = t[d]) || 0 === o) if ("object" === k(o)) S.merge(h, o.nodeType ? [o] : o); else if (wt.test(o)) {
                    for (a = a || f.appendChild(e.createElement("div")), s = (yt.exec(o) || ["", ""])[1].toLowerCase(), u = bt[s] || bt._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                    S.merge(h, a.childNodes), (a = f.firstChild).textContent = ""
                } else h.push(e.createTextNode(o));
                for (f.textContent = "", d = 0; o = h[d++];) if (i && S.inArray(o, i) > -1) r && r.push(o); else if (c = st(o), a = _t(f.appendChild(o), "script"), c && xt(a), n) for (l = 0; o = a[l++];) mt.test(o.type || "") && n.push(o);
                return f
            }

            var St = /^([^.]*)(?:\.(.+)|)/;

            function Et() {
                return !0
            }

            function Ot() {
                return !1
            }

            function Mt(t, e) {
                return t === function () {
                    try {
                        return _.activeElement
                    } catch (t) {
                    }
                }() == ("focus" === e)
            }

            function Tt(t, e, n, r, o, a) {
                var s, u;
                if ("object" === i(e)) {
                    for (u in "string" != typeof n && (r = r || n, n = void 0), e) Tt(t, u, n, r, e[u], a);
                    return t
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ot; else if (!o) return t;
                return 1 === a && (s = o, (o = function (t) {
                    return S().off(t), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = S.guid++)), t.each((function () {
                    S.event.add(this, e, o, r, n)
                }))
            }

            function At(t, e, n) {
                n ? (J.set(t, e, !1), S.event.add(t, e, {
                    namespace: !1, handler: function (t) {
                        var i, r, o = J.get(this, e);
                        if (1 & t.isTrigger && this[e]) {
                            if (o.length) (S.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = u.call(arguments), J.set(this, e, o), i = n(this, e), this[e](), o !== (r = J.get(this, e)) || i ? J.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r && r.value
                        } else o.length && (J.set(this, e, {value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
                    }
                })) : void 0 === J.get(t, e) && S.event.add(t, e, Et)
            }

            S.event = {
                global: {}, add: function (t, e, n, i, r) {
                    var o, a, s, u, c, l, f, h, d, p, v, g = J.get(t);
                    if (K(t)) for (n.handler && (n = (o = n).handler, r = o.selector), r && S.find.matchesSelector(at, r), n.guid || (n.guid = S.guid++), (u = g.events) || (u = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(F) || [""]).length; c--;) d = v = (s = St.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, l = S.extend({
                        type: d,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && S.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (h = u[d]) || ((h = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, l) : h.push(l), S.event.global[d] = !0)
                }, remove: function (t, e, n, i, r) {
                    var o, a, s, u, c, l, f, h, d, p, v, g = J.hasData(t) && J.get(t);
                    if (g && (u = g.events)) {
                        for (c = (e = (e || "").match(F) || [""]).length; c--;) if (d = v = (s = St.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), d) {
                            for (f = S.event.special[d] || {}, h = u[d = (i ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) l = h[o], !r && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(t, l));
                            a && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, g.handle) || S.removeEvent(t, d, g.handle), delete u[d])
                        } else for (d in u) S.event.remove(t, d + e[c], n, i, !0);
                        S.isEmptyObject(u) && J.remove(t, "handle events")
                    }
                }, dispatch: function (t) {
                    var e, n, i, r, o, a, s = new Array(arguments.length), u = S.event.fix(t),
                        c = (J.get(this, "events") || Object.create(null))[u.type] || [],
                        l = S.event.special[u.type] || {};
                    for (s[0] = u, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                    if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                        for (a = S.event.handlers.call(this, u, c), e = 0; (r = a[e++]) && !u.isPropagationStopped();) for (u.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (u.result = i) && (u.preventDefault(), u.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, u), u.result
                    }
                }, handlers: function (t, e) {
                    var n, i, r, o, a, s = [], u = e.delegateCount, c = t.target;
                    if (u && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? S(r, this).index(c) > -1 : S.find(r, this, null, [c]).length), a[r] && o.push(i);
                        o.length && s.push({elem: c, handlers: o})
                    }
                    return c = this, u < e.length && s.push({elem: c, handlers: e.slice(u)}), s
                }, addProp: function (t, e) {
                    Object.defineProperty(S.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: m(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                        }
                    })
                }, fix: function (t) {
                    return t[S.expando] ? t : new S.Event(t)
                }, special: {
                    load: {noBubble: !0}, click: {
                        setup: function (t) {
                            var e = this || t;
                            return gt.test(e.type) && e.click && C(e, "input") && At(e, "click", Et), !1
                        }, trigger: function (t) {
                            var e = this || t;
                            return gt.test(e.type) && e.click && C(e, "input") && At(e, "click"), !0
                        }, _default: function (t) {
                            var e = t.target;
                            return gt.test(e.type) && e.click && C(e, "input") && J.get(e, "click") || C(e, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, S.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            }, (S.Event = function (t, e) {
                if (!(this instanceof S.Event)) return new S.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : Ot, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[S.expando] = !0
            }).prototype = {
                constructor: S.Event,
                isDefaultPrevented: Ot,
                isPropagationStopped: Ot,
                isImmediatePropagationStopped: Ot,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({
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
                code: !0,
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
                which: !0
            }, S.event.addProp), S.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
                S.event.special[t] = {
                    setup: function () {
                        return At(this, t, Mt), !1
                    }, trigger: function () {
                        return At(this, t), !0
                    }, _default: function () {
                        return !0
                    }, delegateType: e
                }
            })), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (t, e) {
                S.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, i = this, r = t.relatedTarget, o = t.handleObj;
                        return r && (r === i || S.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            })), S.fn.extend({
                on: function (t, e, n, i) {
                    return Tt(this, t, e, n, i)
                }, one: function (t, e, n, i) {
                    return Tt(this, t, e, n, i, 1)
                }, off: function (t, e, n) {
                    var r, o;
                    if (t && t.preventDefault && t.handleObj) return r = t.handleObj, S(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" === i(t)) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Ot), this.each((function () {
                        S.event.remove(this, t, n, e)
                    }))
                }
            });
            var Ct = /<script|<style|<link/i, Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Lt(t, e) {
                return C(t, "table") && C(11 !== e.nodeType ? e : e.firstChild, "tr") && S(t).children("tbody")[0] || t
            }

            function jt(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function It(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function Nt(t, e) {
                var n, i, r, o, a, s;
                if (1 === e.nodeType) {
                    if (J.hasData(t) && (s = J.get(t).events)) for (r in J.remove(e, "handle events"), s) for (n = 0, i = s[r].length; n < i; n++) S.event.add(e, r, s[r][n]);
                    Z.hasData(t) && (o = Z.access(t), a = S.extend({}, o), Z.set(e, a))
                }
            }

            function Rt(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }

            function Ft(t, e, n, i) {
                e = c(e);
                var r, o, a, s, u, l, f = 0, h = t.length, d = h - 1, p = e[0], v = m(p);
                if (v || h > 1 && "string" == typeof p && !y.checkClone && Pt.test(p)) return t.each((function (r) {
                    var o = t.eq(r);
                    v && (e[0] = p.call(this, r, o.html())), Ft(o, e, n, i)
                }));
                if (h && (o = (r = kt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (s = (a = S.map(_t(r, "script"), jt)).length; f < h; f++) u = r, f !== d && (u = S.clone(u, !0, !0), s && S.merge(a, _t(u, "script"))), n.call(t[f], u, f);
                    if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, It), f = 0; f < s; f++) u = a[f], mt.test(u.type || "") && !J.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : w(u.textContent.replace(Dt, ""), u, l))
                }
                return t
            }

            function Bt(t, e, n) {
                for (var i, r = e ? S.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(_t(i)), i.parentNode && (n && st(i) && xt(_t(i, "script")), i.parentNode.removeChild(i));
                return t
            }

            S.extend({
                htmlPrefilter: function (t) {
                    return t
                }, clone: function (t, e, n) {
                    var i, r, o, a, s = t.cloneNode(!0), u = st(t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t))) for (a = _t(s), i = 0, r = (o = _t(t)).length; i < r; i++) Rt(o[i], a[i]);
                    if (e) if (n) for (o = o || _t(t), a = a || _t(s), i = 0, r = o.length; i < r; i++) Nt(o[i], a[i]); else Nt(t, s);
                    return (a = _t(s, "script")).length > 0 && xt(a, !u && _t(t, "script")), s
                }, cleanData: function (t) {
                    for (var e, n, i, r = S.event.special, o = 0; void 0 !== (n = t[o]); o++) if (K(n)) {
                        if (e = n[J.expando]) {
                            if (e.events) for (i in e.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
                            n[J.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
                }
            }), S.fn.extend({
                detach: function (t) {
                    return Bt(this, t, !0)
                }, remove: function (t) {
                    return Bt(this, t)
                }, text: function (t) {
                    return U(this, (function (t) {
                        return void 0 === t ? S.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        }))
                    }), null, t, arguments.length)
                }, append: function () {
                    return Ft(this, arguments, (function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
                    }))
                }, prepend: function () {
                    return Ft(this, arguments, (function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Lt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    }))
                }, before: function () {
                    return Ft(this, arguments, (function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    }))
                }, after: function () {
                    return Ft(this, arguments, (function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    }))
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(_t(t, !1)), t.textContent = "");
                    return this
                }, clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map((function () {
                        return S.clone(this, t, e)
                    }))
                }, html: function (t) {
                    return U(this, (function (t) {
                        var e = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Ct.test(t) && !bt[(yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = S.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (S.cleanData(_t(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {
                            }
                        }
                        e && this.empty().append(t)
                    }), null, t, arguments.length)
                }, replaceWith: function () {
                    var t = [];
                    return Ft(this, arguments, (function (e) {
                        var n = this.parentNode;
                        S.inArray(this, t) < 0 && (S.cleanData(_t(this)), n && n.replaceChild(e, this))
                    }), t)
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (t, e) {
                S.fn[t] = function (t) {
                    for (var n, i = [], r = S(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), S(r[a])[e](n), l.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var Wt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"), zt = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = r), e.getComputedStyle(t)
            }, Ht = function (t, e, n) {
                var i, r, o = {};
                for (r in e) o[r] = t.style[r], t.style[r] = e[r];
                for (r in i = n.call(t), e) t.style[r] = o[r];
                return i
            }, Vt = new RegExp(ot.join("|"), "i");

            function qt(t, e, n) {
                var i, r, o, a, s = t.style;
                return (n = n || zt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || st(t) || (a = S.style(t, e)), !y.pixelBoxStyles() && Wt.test(a) && Vt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Ut(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                function t() {
                    if (l) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(c).appendChild(l);
                        var t = r.getComputedStyle(l);
                        n = "1%" !== t.top, u = 12 === e(t.marginLeft), l.style.right = "60%", a = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", o = 12 === e(l.offsetWidth / 3), at.removeChild(c), l = null
                    }
                }

                function e(t) {
                    return Math.round(parseFloat(t))
                }

                var n, i, o, a, s, u, c = _.createElement("div"), l = _.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
                    boxSizingReliable: function () {
                        return t(), i
                    }, pixelBoxStyles: function () {
                        return t(), a
                    }, pixelPosition: function () {
                        return t(), n
                    }, reliableMarginLeft: function () {
                        return t(), u
                    }, scrollboxSize: function () {
                        return t(), o
                    }, reliableTrDimensions: function () {
                        var t, e, n, i;
                        return null == s && (t = _.createElement("table"), e = _.createElement("tr"), n = _.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", n.style.height = "9px", n.style.display = "block", at.appendChild(t).appendChild(e).appendChild(n), i = r.getComputedStyle(e), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight, at.removeChild(t)), s
                    }
                }))
            }();
            var $t = ["Webkit", "Moz", "ms"], Yt = _.createElement("div").style, Xt = {};

            function Gt(t) {
                var e = S.cssProps[t] || Xt[t];
                return e || (t in Yt ? t : Xt[t] = function (t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), n = $t.length; n--;) if ((t = $t[n] + e) in Yt) return t
                }(t) || t)
            }

            var Kt = /^(none|table(?!-c[ea]).+)/, Qt = /^--/,
                Jt = {position: "absolute", visibility: "hidden", display: "block"},
                Zt = {letterSpacing: "0", fontWeight: "400"};

            function te(t, e, n) {
                var i = rt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
            }

            function ee(t, e, n, i, r, o) {
                var a = "width" === e ? 1 : 0, s = 0, u = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += S.css(t, n + ot[a], !0, r)), i ? ("content" === n && (u -= S.css(t, "padding" + ot[a], !0, r)), "margin" !== n && (u -= S.css(t, "border" + ot[a] + "Width", !0, r))) : (u += S.css(t, "padding" + ot[a], !0, r), "padding" !== n ? u += S.css(t, "border" + ot[a] + "Width", !0, r) : s += S.css(t, "border" + ot[a] + "Width", !0, r));
                return !i && o >= 0 && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - s - .5)) || 0), u
            }

            function ne(t, e, n) {
                var i = zt(t), r = (!y.boxSizingReliable() || n) && "border-box" === S.css(t, "boxSizing", !1, i),
                    o = r, a = qt(t, e, i), s = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Wt.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!y.boxSizingReliable() && r || !y.reliableTrDimensions() && C(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === S.css(t, "boxSizing", !1, i), (o = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + ee(t, e, n || (r ? "border" : "content"), o, i, a) + "px"
            }

            function ie(t, e, n, i, r) {
                return new ie.prototype.init(t, e, n, i, r)
            }

            S.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = qt(t, "opacity");
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
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, a, s, u = G(e), c = Qt.test(e), l = t.style;
                        if (c || (e = Gt(u)), s = S.cssHooks[e] || S.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, r)) ? o : l[e];
                        "string" === (a = i(n)) && (o = rt.exec(n)) && o[1] && (n = lt(t, e, o), a = "number"), null != n && n == n && ("number" !== a || c || (n += o && o[3] || (S.cssNumber[u] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (c ? l.setProperty(e, n) : l[e] = n))
                    }
                },
                css: function (t, e, n, i) {
                    var r, o, a, s = G(e);
                    return Qt.test(e) || (e = Gt(s)), (a = S.cssHooks[e] || S.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = qt(t, e, i)), "normal" === r && e in Zt && (r = Zt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), S.each(["height", "width"], (function (t, e) {
                S.cssHooks[e] = {
                    get: function (t, n, i) {
                        if (n) return !Kt.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, i) : Ht(t, Jt, (function () {
                            return ne(t, e, i)
                        }))
                    }, set: function (t, n, i) {
                        var r, o = zt(t), a = !y.scrollboxSize() && "absolute" === o.position,
                            s = (a || i) && "border-box" === S.css(t, "boxSizing", !1, o),
                            u = i ? ee(t, e, i, s, o) : 0;
                        return s && a && (u -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ee(t, e, "border", !1, o) - .5)), u && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = S.css(t, e)), te(0, n, u)
                    }
                }
            })), S.cssHooks.marginLeft = Ut(y.reliableMarginLeft, (function (t, e) {
                if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - Ht(t, {marginLeft: 0}, (function () {
                    return t.getBoundingClientRect().left
                }))) + "px"
            })), S.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
                S.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, "margin" !== t && (S.cssHooks[t + e].set = te)
            })), S.fn.extend({
                css: function (t, e) {
                    return U(this, (function (t, e, n) {
                        var i, r, o = {}, a = 0;
                        if (Array.isArray(e)) {
                            for (i = zt(t), r = e.length; a < r; a++) o[e[a]] = S.css(t, e[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? S.style(t, e, n) : S.css(t, e)
                    }), t, e, arguments.length > 1)
                }
            }), S.Tween = ie, ie.prototype = {
                constructor: ie, init: function (t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = ie.propHooks[this.prop];
                    return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = ie.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ie.propHooks._default.set(this), this
                }
            }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                    }, set: function (t) {
                        S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !S.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, S.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }, _default: "swing"
            }, (S.fx = ie.prototype.init).step = {};
            var re, oe, ae = /^(?:toggle|show|hide)$/, se = /queueHooks$/;

            function ue() {
                oe && (!1 === _.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(ue) : r.setTimeout(ue, S.fx.interval), S.fx.tick())
            }

            function ce() {
                return r.setTimeout((function () {
                    re = void 0
                })), re = Date.now()
            }

            function le(t, e) {
                var n, i = 0, r = {height: t};
                for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = ot[i])] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r
            }

            function fe(t, e, n) {
                for (var i, r = (he.tweeners[e] || []).concat(he.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, e, t)) return i
            }

            function he(t, e, n) {
                var i, r, o = 0, a = he.prefilters.length, s = S.Deferred().always((function () {
                    delete u.elem
                })), u = function () {
                    if (r) return !1;
                    for (var e = re || ce(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                    return s.notifyWith(t, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
                }, c = s.promise({
                    elem: t,
                    props: S.extend({}, e),
                    opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: re || ce(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = S.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0, i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                    }
                }), l = c.props;
                for (!function (t, e) {
                    var n, i, r, o, a;
                    for (n in t) if (r = e[i = G(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = S.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r); else e[i] = r
                }(l, c.opts.specialEasing); o < a; o++) if (i = he.prefilters[o].call(c, t, l, c.opts)) return m(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return S.map(l, fe, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(u, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }

            S.Animation = S.extend(he, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return lt(n.elem, t, rt.exec(e), n), n
                    }]
                }, tweener: function (t, e) {
                    m(t) ? (e = t, t = ["*"]) : t = t.match(F);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], he.tweeners[n] = he.tweeners[n] || [], he.tweeners[n].unshift(e)
                }, prefilters: [function (t, e, n) {
                    var i, r, o, a, s, u, c, l, f = "width" in e || "height" in e, h = this, d = {}, p = t.style,
                        v = t.nodeType && ct(t), g = J.get(t, "fxshow");
                    for (i in n.queue || (null == (a = S._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || s()
                    }), a.unqueued++, h.always((function () {
                        h.always((function () {
                            a.unqueued--, S.queue(t, "fx").length || a.empty.fire()
                        }))
                    }))), e) if (r = e[i], ae.test(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (v ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            v = !0
                        }
                        d[i] = g && g[i] || S.style(t, i)
                    }
                    if ((u = !S.isEmptyObject(e)) || !S.isEmptyObject(d)) for (i in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = J.get(t, "display")), "none" === (l = S.css(t, "display")) && (c ? l = c : (dt([t], !0), c = t.style.display || c, l = S.css(t, "display"), dt([t]))), ("inline" === l || "inline-block" === l && null != c) && "none" === S.css(t, "float") && (u || (h.done((function () {
                        p.display = c
                    })), null == c && (l = p.display, c = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }))), u = !1, d) u || (g ? "hidden" in g && (v = g.hidden) : g = J.access(t, "fxshow", {display: c}), o && (g.hidden = !v), v && dt([t], !0), h.done((function () {
                        for (i in v || dt([t]), J.remove(t, "fxshow"), d) S.style(t, i, d[i])
                    }))), u = fe(v ? g[i] : 0, i, h), i in g || (g[i] = u.start, v && (u.end = u.start, u.start = 0))
                }], prefilter: function (t, e) {
                    e ? he.prefilters.unshift(t) : he.prefilters.push(t)
                }
            }), S.speed = function (t, e, n) {
                var r = t && "object" === i(t) ? S.extend({}, t) : {
                    complete: n || !n && e || m(t) && t,
                    duration: t,
                    easing: n && e || e && !m(e) && e
                };
                return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
                }, r
            }, S.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(ct).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
                }, animate: function (t, e, n, i) {
                    var r = S.isEmptyObject(t), o = S.speed(e, n, i), a = function () {
                        var e = he(this, S.extend({}, t), o);
                        (r || J.get(this, "finish")) && e.stop(!0)
                    };
                    return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
                        var e = !0, r = null != t && t + "queueHooks", o = S.timers, a = J.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && se.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || S.dequeue(this, t)
                    }))
                }, finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each((function () {
                        var e, n = J.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = S.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, S.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    }))
                }
            }), S.each(["toggle", "show", "hide"], (function (t, e) {
                var n = S.fn[e];
                S.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, r)
                }
            })), S.each({
                slideDown: le("show"),
                slideUp: le("hide"),
                slideToggle: le("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, (function (t, e) {
                S.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            })), S.timers = [], S.fx.tick = function () {
                var t, e = 0, n = S.timers;
                for (re = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || S.fx.stop(), re = void 0
            }, S.fx.timer = function (t) {
                S.timers.push(t), S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function () {
                oe || (oe = !0, ue())
            }, S.fx.stop = function () {
                oe = null
            }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (t, e) {
                return t = S.fx && S.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, n) {
                    var i = r.setTimeout(e, t);
                    n.stop = function () {
                        r.clearTimeout(i)
                    }
                }))
            }, function () {
                var t = _.createElement("input"), e = _.createElement("select").appendChild(_.createElement("option"));
                t.type = "checkbox", y.checkOn = "" !== t.value, y.optSelected = e.selected, (t = _.createElement("input")).value = "t", t.type = "radio", y.radioValue = "t" === t.value
            }();
            var de, pe = S.expr.attrHandle;
            S.fn.extend({
                attr: function (t, e) {
                    return U(this, S.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each((function () {
                        S.removeAttr(this, t)
                    }))
                }
            }), S.extend({
                attr: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? S.prop(t, e, n) : (1 === o && S.isXMLDoc(t) || (r = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = S.find.attr(t, e)) ? void 0 : i)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!y.radioValue && "radio" === e && C(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }, removeAttr: function (t, e) {
                    var n, i = 0, r = e && e.match(F);
                    if (r && 1 === t.nodeType) for (; n = r[i++];) t.removeAttribute(n)
                }
            }), de = {
                set: function (t, e, n) {
                    return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), (function (t, e) {
                var n = pe[e] || S.find.attr;
                pe[e] = function (t, e, i) {
                    var r, o, a = e.toLowerCase();
                    return i || (o = pe[a], pe[a] = r, r = null != n(t, e, i) ? a : null, pe[a] = o), r
                }
            }));
            var ve = /^(?:input|select|textarea|button)$/i, ge = /^(?:a|area)$/i;

            function ye(t) {
                return (t.match(F) || []).join(" ")
            }

            function me(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function be(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(F) || []
            }

            S.fn.extend({
                prop: function (t, e) {
                    return U(this, S.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return this.each((function () {
                        delete this[S.propFix[t] || t]
                    }))
                }
            }), S.extend({
                prop: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = S.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : ve.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), y.optSelected || (S.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }, set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                S.propFix[this.toLowerCase()] = this
            })), S.fn.extend({
                addClass: function (t) {
                    var e, n, i, r, o, a, s, u = 0;
                    if (m(t)) return this.each((function (e) {
                        S(this).addClass(t.call(this, e, me(this)))
                    }));
                    if ((e = be(t)).length) for (; n = this[u++];) if (r = me(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = ye(i)) && n.setAttribute("class", s)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, i, r, o, a, s, u = 0;
                    if (m(t)) return this.each((function (e) {
                        S(this).removeClass(t.call(this, e, me(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = be(t)).length) for (; n = this[u++];) if (r = me(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                        for (a = 0; o = e[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (s = ye(i)) && n.setAttribute("class", s)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = i(t), r = "string" === n || Array.isArray(t);
                    return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each((function (n) {
                        S(this).toggleClass(t.call(this, n, me(this), e), e)
                    })) : this.each((function () {
                        var e, i, o, a;
                        if (r) for (i = 0, o = S(this), a = be(t); e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || ((e = me(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                    }))
                }, hasClass: function (t) {
                    var e, n, i = 0;
                    for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + ye(me(n)) + " ").indexOf(e) > -1) return !0;
                    return !1
                }
            });
            var _e = /\r/g;
            S.fn.extend({
                val: function (t) {
                    var e, n, i, r = this[0];
                    return arguments.length ? (i = m(t), this.each((function (n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? t.call(this, n, S(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = S.map(r, (function (t) {
                            return null == t ? "" : t + ""
                        }))), (e = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    }))) : r ? (e = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(_e, "") : null == n ? "" : n : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = S.find.attr(t, "value");
                            return null != e ? e : ye(S.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            var e, n, i, r = t.options, o = t.selectedIndex, a = "select-one" === t.type,
                                s = a ? null : [], u = a ? o + 1 : r.length;
                            for (i = o < 0 ? u : a ? o : 0; i < u; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                                if (e = S(n).val(), a) return e;
                                s.push(e)
                            }
                            return s
                        }, set: function (t, e) {
                            for (var n, i, r = t.options, o = S.makeArray(e), a = r.length; a--;) ((i = r[a]).selected = S.inArray(S.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), S.each(["radio", "checkbox"], (function () {
                S.valHooks[this] = {
                    set: function (t, e) {
                        if (Array.isArray(e)) return t.checked = S.inArray(S(t).val(), e) > -1
                    }
                }, y.checkOn || (S.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            })), y.focusin = "onfocusin" in r;
            var xe = /^(?:focusinfocus|focusoutblur)$/, we = function (t) {
                t.stopPropagation()
            };
            S.extend(S.event, {
                trigger: function (t, e, n, o) {
                    var a, s, u, c, l, f, h, d, v = [n || _], g = p.call(t, "type") ? t.type : t,
                        y = p.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = d = u = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !xe.test(g + S.event.triggered) && (g.indexOf(".") > -1 && (y = g.split("."), g = y.shift(), y.sort()), l = g.indexOf(":") < 0 && "on" + g, (t = t[S.expando] ? t : new S.Event(g, "object" === i(t) && t)).isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : S.makeArray(e, [t]), h = S.event.special[g] || {}, o || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                        if (!o && !h.noBubble && !b(n)) {
                            for (c = h.delegateType || g, xe.test(c + g) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                            u === (n.ownerDocument || _) && v.push(u.defaultView || u.parentWindow || r)
                        }
                        for (a = 0; (s = v[a++]) && !t.isPropagationStopped();) d = s, t.type = a > 1 ? c : h.bindType || g, (f = (J.get(s, "events") || Object.create(null))[t.type] && J.get(s, "handle")) && f.apply(s, e), (f = l && s[l]) && f.apply && K(s) && (t.result = f.apply(s, e), !1 === t.result && t.preventDefault());
                        return t.type = g, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), e) || !K(n) || l && m(n[g]) && !b(n) && ((u = n[l]) && (n[l] = null), S.event.triggered = g, t.isPropagationStopped() && d.addEventListener(g, we), n[g](), t.isPropagationStopped() && d.removeEventListener(g, we), S.event.triggered = void 0, u && (n[l] = u)), t.result
                    }
                }, simulate: function (t, e, n) {
                    var i = S.extend(new S.Event, n, {type: t, isSimulated: !0});
                    S.event.trigger(i, null, e)
                }
            }), S.fn.extend({
                trigger: function (t, e) {
                    return this.each((function () {
                        S.event.trigger(t, e, this)
                    }))
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    if (n) return S.event.trigger(t, e, n, !0)
                }
            }), y.focusin || S.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
                var n = function (t) {
                    S.event.simulate(e, t.target, S.event.fix(t))
                };
                S.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this, r = J.access(i, e);
                        r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this.document || this, r = J.access(i, e) - 1;
                        r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e))
                    }
                }
            }));
            var ke = r.location, Se = {guid: Date.now()}, Ee = /\?/;
            S.parseXML = function (t) {
                var e, n;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new r.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                }
                return n = e && e.getElementsByTagName("parsererror")[0], e && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, (function (t) {
                    return t.textContent
                })).join("\n") : t)), e
            };
            var Oe = /\[\]$/, Me = /\r?\n/g, Te = /^(?:submit|button|image|reset|file)$/i,
                Ae = /^(?:input|select|textarea|keygen)/i;

            function Ce(t, e, n, r) {
                var o;
                if (Array.isArray(e)) S.each(e, (function (e, o) {
                    n || Oe.test(t) ? r(t, o) : Ce(t + "[" + ("object" === i(o) && null != o ? e : "") + "]", o, n, r)
                })); else if (n || "object" !== k(e)) r(t, e); else for (o in e) Ce(t + "[" + o + "]", e[o], n, r)
            }

            S.param = function (t, e) {
                var n, i = [], r = function (t, e) {
                    var n = m(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, (function () {
                    r(this.name, this.value)
                })); else for (n in t) Ce(n, t[n], e, r);
                return i.join("&")
            }, S.fn.extend({
                serialize: function () {
                    return S.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map((function () {
                        var t = S.prop(this, "elements");
                        return t ? S.makeArray(t) : this
                    })).filter((function () {
                        var t = this.type;
                        return this.name && !S(this).is(":disabled") && Ae.test(this.nodeName) && !Te.test(t) && (this.checked || !gt.test(t))
                    })).map((function (t, e) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, (function (t) {
                            return {name: e.name, value: t.replace(Me, "\r\n")}
                        })) : {name: e.name, value: n.replace(Me, "\r\n")}
                    })).get()
                }
            });
            var Pe = /%20/g, De = /#.*$/, Le = /([?&])_=[^&]*/, je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ie = /^(?:GET|HEAD)$/, Ne = /^\/\//, Re = {}, Fe = {}, Be = "*/".concat("*"), We = _.createElement("a");

            function ze(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, r = 0, o = e.toLowerCase().match(F) || [];
                    if (m(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function He(t, e, n, i) {
                var r = {}, o = t === Fe;

                function a(s) {
                    var u;
                    return r[s] = !0, S.each(t[s] || [], (function (t, s) {
                        var c = s(e, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(u = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1)
                    })), u
                }

                return a(e.dataTypes[0]) || !r["*"] && a("*")
            }

            function Ve(t, e) {
                var n, i, r = S.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                return i && S.extend(!0, t, i), t
            }

            We.href = ke.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ke.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Be,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? Ve(Ve(t, S.ajaxSettings), e) : Ve(S.ajaxSettings, t)
                },
                ajaxPrefilter: ze(Re),
                ajaxTransport: ze(Fe),
                ajax: function (t, e) {
                    "object" === i(t) && (e = t, t = void 0);
                    var n, o, a, s, u, c, l, f, h, d, p = S.ajaxSetup({}, e = e || {}), v = p.context || p,
                        g = p.context && (v.nodeType || v.jquery) ? S(v) : S.event, y = S.Deferred(),
                        m = S.Callbacks("once memory"), b = p.statusCode || {}, x = {}, w = {}, k = "canceled", E = {
                            readyState: 0, getResponseHeader: function (t) {
                                var e;
                                if (l) {
                                    if (!s) for (s = {}; e = je.exec(a);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = s[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            }, getAllResponseHeaders: function () {
                                return l ? a : null
                            }, setRequestHeader: function (t, e) {
                                return null == l && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                            }, overrideMimeType: function (t) {
                                return null == l && (p.mimeType = t), this
                            }, statusCode: function (t) {
                                var e;
                                if (t) if (l) E.always(t[E.status]); else for (e in t) b[e] = [b[e], t[e]];
                                return this
                            }, abort: function (t) {
                                var e = t || k;
                                return n && n.abort(e), O(0, e), this
                            }
                        };
                    if (y.promise(E), p.url = ((t || p.url || ke.href) + "").replace(Ne, ke.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
                        c = _.createElement("a");
                        try {
                            c.href = p.url, c.href = c.href, p.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host
                        } catch (t) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), He(Re, p, e, E), l) return E;
                    for (h in (f = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ie.test(p.type), o = p.url.replace(De, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Ee.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Le, "$1"), d = (Ee.test(o) ? "&" : "?") + "_=" + Se.guid++ + d), p.url = o + d), p.ifModified && (S.lastModified[o] && E.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && E.setRequestHeader("If-None-Match", S.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]), p.headers) E.setRequestHeader(h, p.headers[h]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(v, E, p) || l)) return E.abort();
                    if (k = "abort", m.add(p.complete), E.done(p.success), E.fail(p.error), n = He(Fe, p, e, E)) {
                        if (E.readyState = 1, f && g.trigger("ajaxSend", [E, p]), l) return E;
                        p.async && p.timeout > 0 && (u = r.setTimeout((function () {
                            E.abort("timeout")
                        }), p.timeout));
                        try {
                            l = !1, n.send(x, O)
                        } catch (t) {
                            if (l) throw t;
                            O(-1, t)
                        }
                    } else O(-1, "No Transport");

                    function O(t, e, i, s) {
                        var c, h, d, _, x, w = e;
                        l || (l = !0, u && r.clearTimeout(u), n = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = function (t, e, n) {
                            for (var i, r, o, a, s = t.contents, u = t.dataTypes; "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (i) for (r in s) if (s[r] && s[r].test(i)) {
                                u.unshift(r);
                                break
                            }
                            if (u[0] in n) o = u[0]; else {
                                for (r in n) {
                                    if (!u[0] || t.converters[r + " " + u[0]]) {
                                        o = r;
                                        break
                                    }
                                    a || (a = r)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(p, E, i)), !c && S.inArray("script", p.dataTypes) > -1 && S.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () {
                        }), _ = function (t, e, n, i) {
                            var r, o, a, s, u, c = {}, l = t.dataTypes.slice();
                            if (l[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                            for (o = l.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                                if (!(a = c[u + " " + o] || c["* " + o])) for (r in c) if ((s = r.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], l.unshift(s[1]));
                                    break
                                }
                                if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                    e = a(e)
                                } catch (t) {
                                    return {state: "parsererror", error: a ? t : "No conversion from " + u + " to " + o}
                                }
                            }
                            return {state: "success", data: e}
                        }(p, _, E, c), c ? (p.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (S.lastModified[o] = x), (x = E.getResponseHeader("etag")) && (S.etag[o] = x)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, h = _.data, c = !(d = _.error))) : (d = w, !t && w || (w = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || w) + "", c ? y.resolveWith(v, [h, w, E]) : y.rejectWith(v, [E, w, d]), E.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? h : d]), m.fireWith(v, [E, w]), f && (g.trigger("ajaxComplete", [E, p]), --S.active || S.event.trigger("ajaxStop")))
                    }

                    return E
                },
                getJSON: function (t, e, n) {
                    return S.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return S.get(t, void 0, e, "script")
                }
            }), S.each(["get", "post"], (function (t, e) {
                S[e] = function (t, n, i, r) {
                    return m(n) && (r = r || i, i = n, n = void 0), S.ajax(S.extend({
                        url: t,
                        type: e,
                        dataType: r,
                        data: n,
                        success: i
                    }, S.isPlainObject(t) && t))
                }
            })), S.ajaxPrefilter((function (t) {
                var e;
                for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
            })), S._evalUrl = function (t, e, n) {
                return S.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {
                        }
                    },
                    dataFilter: function (t) {
                        S.globalEval(t, e, n)
                    }
                })
            }, S.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return this[0] && (m(t) && (t = t.call(this[0])), e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    })).append(this)), this
                }, wrapInner: function (t) {
                    return m(t) ? this.each((function (e) {
                        S(this).wrapInner(t.call(this, e))
                    })) : this.each((function () {
                        var e = S(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    }))
                }, wrap: function (t) {
                    var e = m(t);
                    return this.each((function (n) {
                        S(this).wrapAll(e ? t.call(this, n) : t)
                    }))
                }, unwrap: function (t) {
                    return this.parent(t).not("body").each((function () {
                        S(this).replaceWith(this.childNodes)
                    })), this
                }
            }), S.expr.pseudos.hidden = function (t) {
                return !S.expr.pseudos.visible(t)
            }, S.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, S.ajaxSettings.xhr = function () {
                try {
                    return new r.XMLHttpRequest
                } catch (t) {
                }
            };
            var qe = {0: 200, 1223: 204}, Ue = S.ajaxSettings.xhr();
            y.cors = !!Ue && "withCredentials" in Ue, y.ajax = Ue = !!Ue, S.ajaxTransport((function (t) {
                var e, n;
                if (y.cors || Ue && !t.crossDomain) return {
                    send: function (i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        e = function (t) {
                            return function () {
                                e && (e = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(qe[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                            }
                        }, s.onload = e(), n = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function () {
                            4 === s.readyState && r.setTimeout((function () {
                                e && n()
                            }))
                        }, e = e("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    }, abort: function () {
                        e && e()
                    }
                }
            })), S.ajaxPrefilter((function (t) {
                t.crossDomain && (t.contents.script = !1)
            })), S.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (t) {
                        return S.globalEval(t), t
                    }
                }
            }), S.ajaxPrefilter("script", (function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            })), S.ajaxTransport("script", (function (t) {
                var e, n;
                if (t.crossDomain || t.scriptAttrs) return {
                    send: function (i, r) {
                        e = S("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), _.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }));
            var $e, Ye = [], Xe = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = Ye.pop() || S.expando + "_" + Se.guid++;
                    return this[t] = !0, t
                }
            }), S.ajaxPrefilter("json jsonp", (function (t, e, n) {
                var i, o, a,
                    s = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xe, "$1" + i) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return a || S.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = r[i], r[i] = function () {
                    a = arguments
                }, n.always((function () {
                    void 0 === o ? S(r).removeProp(i) : r[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ye.push(i)), a && m(o) && o(a[0]), a = o = void 0
                })), "script"
            })), y.createHTMLDocument = (($e = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $e.childNodes.length), S.parseHTML = function (t, e, n) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, e.head.appendChild(i)) : e = _), o = !n && [], (r = P.exec(t)) ? [e.createElement(r[1])] : (r = kt([t], e, o), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
                var i, r, o
            }, S.fn.load = function (t, e, n) {
                var r, o, a, s = this, u = t.indexOf(" ");
                return u > -1 && (r = ye(t.slice(u)), t = t.slice(0, u)), m(e) ? (n = e, e = void 0) : e && "object" === i(e) && (o = "POST"), s.length > 0 && S.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done((function (t) {
                    a = arguments, s.html(r ? S("<div>").append(S.parseHTML(t)).find(r) : t)
                })).always(n && function (t, e) {
                    s.each((function () {
                        n.apply(this, a || [t.responseText, e, t])
                    }))
                }), this
            }, S.expr.pseudos.animated = function (t) {
                return S.grep(S.timers, (function (e) {
                    return t === e.elem
                })).length
            }, S.offset = {
                setOffset: function (t, e, n) {
                    var i, r, o, a, s, u, c = S.css(t, "position"), l = S(t), f = {};
                    "static" === c && (t.style.position = "relative"), s = l.offset(), o = S.css(t, "top"), u = S.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (i = l.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), m(e) && (e = e.call(t, n, S.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + r), "using" in e ? e.using.call(t, f) : l.css(f)
                }
            }, S.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each((function (e) {
                        S.offset.setOffset(this, t, e)
                    }));
                    var e, n, i = this[0];
                    return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var t, e, n, i = this[0], r = {top: 0, left: 0};
                        if ("fixed" === S.css(i, "position")) e = i.getBoundingClientRect(); else {
                            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === S.css(t, "position");) t = t.parentNode;
                            t && t !== i && 1 === t.nodeType && ((r = S(t).offset()).top += S.css(t, "borderTopWidth", !0), r.left += S.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - r.top - S.css(i, "marginTop", !0),
                            left: e.left - r.left - S.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map((function () {
                        for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                        return t || at
                    }))
                }
            }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
                var n = "pageYOffset" === e;
                S.fn[t] = function (i) {
                    return U(this, (function (t, i, r) {
                        var o;
                        if (b(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                    }), t, i, arguments.length)
                }
            })), S.each(["top", "left"], (function (t, e) {
                S.cssHooks[e] = Ut(y.pixelPosition, (function (t, n) {
                    if (n) return n = qt(t, e), Wt.test(n) ? S(t).position()[e] + "px" : n
                }))
            })), S.each({Height: "height", Width: "width"}, (function (t, e) {
                S.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (n, i) {
                    S.fn[i] = function (r, o) {
                        var a = arguments.length && (n || "boolean" != typeof r),
                            s = n || (!0 === r || !0 === o ? "margin" : "border");
                        return U(this, (function (e, n, r) {
                            var o;
                            return b(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? S.css(e, n, s) : S.style(e, n, r, s)
                        }), e, a ? r : void 0, a)
                    }
                }))
            })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
                S.fn[e] = function (t) {
                    return this.on(e, t)
                }
            })), S.fn.extend({
                bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }, hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
                S.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }));
            var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function (t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = u.call(arguments, 2), (r = function () {
                    return t.apply(e || this, i.concat(u.call(arguments)))
                }).guid = t.guid = t.guid || S.guid++, r
            }, S.holdReady = function (t) {
                t ? S.readyWait++ : S.ready(!0)
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = C, S.isFunction = m, S.isWindow = b, S.camelCase = G, S.type = k, S.now = Date.now, S.isNumeric = function (t) {
                var e = S.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, S.trim = function (t) {
                return null == t ? "" : (t + "").replace(Ge, "")
            }, void 0 === (n = function () {
                return S
            }.apply(e, [])) || (t.exports = n);
            var Ke = r.jQuery, Qe = r.$;
            return S.noConflict = function (t) {
                return r.$ === S && (r.$ = Qe), t && r.jQuery === S && (r.jQuery = Ke), S
            }, void 0 === o && (r.jQuery = r.$ = S), S
        }))
    }).call(this, n(98)(t))
}, function (t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
    }
    t.exports = i
}, function (t, e, n) {
    var i = n(15), r = n(6), o = n(36);
    t.exports = function (t) {
        return function (e, n, a) {
            var s, u = i(e), c = r(u.length), l = o(a, c);
            if (t && n != n) {
                for (; c > l;) if ((s = u[l++]) != s) return !0
            } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var i = n(20);
    t.exports = Array.isArray || function (t) {
        return "Array" == i(t)
    }
}, function (t, e, n) {
    var i = n(21), r = n(24);
    t.exports = function (t) {
        return function (e, n) {
            var o, a, s = String(r(e)), u = i(n), c = s.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function (t, e, n) {
    var i = n(4), r = n(20), o = n(5)("match");
    t.exports = function (t) {
        var e;
        return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
    }
}, function (t, e, n) {
    var i = n(5)("iterator"), r = !1;
    try {
        var o = [7][i]();
        o.return = function () {
            r = !0
        }, Array.from(o, (function () {
            throw 2
        }))
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var o = [7], a = o[i]();
            a.next = function () {
                return {done: n = !0}
            }, o[i] = function () {
                return a
            }, t(o)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r = n(45), o = RegExp.prototype.exec;
    t.exports = function (t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var a = n.call(t, e);
            if ("object" !== i(a)) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return a
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function (t, e, n) {
    "use strict";
    n(118);
    var i = n(12), r = n(11), o = n(3), a = n(24), s = n(5), u = n(91), c = s("species"), l = !o((function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    })), f = function () {
        var t = /(?:)/, e = t.exec;
        t.exec = function () {
            return e.apply(this, arguments)
        };
        var n = "ab".split(t);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    t.exports = function (t, e, n) {
        var h = s(t), d = !o((function () {
            var e = {};
            return e[h] = function () {
                return 7
            }, 7 != ""[t](e)
        })), p = d ? !o((function () {
            var e = !1, n = /a/;
            return n.exec = function () {
                return e = !0, null
            }, "split" === t && (n.constructor = {}, n.constructor[c] = function () {
                return n
            }), n[h](""), !e
        })) : void 0;
        if (!d || !p || "replace" === t && !l || "split" === t && !f) {
            var v = /./[h], g = n(a, h, ""[t], (function (t, e, n, i, r) {
                return e.exec === u ? d && !r ? {done: !0, value: v.call(e, n, i)} : {
                    done: !0,
                    value: t.call(n, e, i)
                } : {done: !1}
            })), y = g[0], m = g[1];
            i(String.prototype, t, y), r(RegExp.prototype, h, 2 == e ? function (t, e) {
                return m.call(t, this, e)
            } : function (t) {
                return m.call(t, this)
            })
        }
    }
}, function (t, e, n) {
    var i = n(2).navigator;
    t.exports = i && i.userAgent || ""
}, function (t, e, n) {
    "use strict";
    var i = n(2), r = n(0), o = n(12), a = n(42), s = n(31), u = n(41), c = n(40), l = n(4), f = n(3), h = n(61),
        d = n(44), p = n(77);
    t.exports = function (t, e, n, v, g, y) {
        var m = i[t], b = m, _ = g ? "set" : "add", x = b && b.prototype, w = {}, k = function (t) {
            var e = x[t];
            o(x, t, "delete" == t || "has" == t ? function (t) {
                return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function (t) {
                return y && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            } : "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this
            } : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this
            })
        };
        if ("function" == typeof b && (y || x.forEach && !f((function () {
            (new b).entries().next()
        })))) {
            var S = new b, E = S[_](y ? {} : -0, 1) != S, O = f((function () {
                S.has(1)
            })), M = h((function (t) {
                new b(t)
            })), T = !y && f((function () {
                for (var t = new b, e = 5; e--;) t[_](e, e);
                return !t.has(-0)
            }));
            M || ((b = e((function (e, n) {
                c(e, b, t);
                var i = p(new m, e, b);
                return null != n && u(n, g, i[_], i), i
            }))).prototype = x, x.constructor = b), (O || T) && (k("delete"), k("has"), g && k("get")), (T || E) && k(_), y && x.clear && delete x.clear
        } else b = v.getConstructor(e, t, g, _), a(b.prototype, n), s.NEED = !0;
        return d(b, t), w[t] = b, r(r.G + r.W + r.F * (b != m), w), y || v.setStrong(b, t, g), b
    }
}, function (t, e, n) {
    for (var i, r = n(2), o = n(11), a = n(34), s = a("typed_array"), u = a("view"), c = !(!r.ArrayBuffer || !r.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;) (i = r[h[f++]]) ? (o(i.prototype, s, !0), o(i.prototype, u, !0)) : l = !1;
    t.exports = {ABV: c, CONSTR: l, TYPED: s, VIEW: u}
}, function (t, e, n) {
    "use strict";
    t.exports = n(30) || !n(3)((function () {
        var t = Math.random();
        __defineSetter__.call(null, t, (function () {
        })), delete n(2)[t]
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = function (t) {
        i(i.S, t, {
            of: function () {
                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(10), o = n(19), a = n(41);
    t.exports = function (t) {
        i(i.S, t, {
            from: function (t) {
                var e, n, i, s, u = arguments[1];
                return r(this), (e = void 0 !== u) && r(u), null == t ? new this : (n = [], e ? (i = 0, s = o(u, arguments[2], 2), a(t, !1, (function (t) {
                    n.push(s(t, i++))
                }))) : a(t, !1, n.push, n), new this(n))
            }
        })
    }
}, function (t, e, n) {
    var i = n(4), r = n(2).document, o = i(r) && i(r.createElement);
    t.exports = function (t) {
        return o ? r.createElement(t) : {}
    }
}, function (t, e, n) {
    var i = n(2), r = n(18), o = n(30), a = n(100), s = n(8).f;
    t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {value: a.f(t)})
    }
}, function (t, e, n) {
    var i = n(49)("keys"), r = n(34);
    t.exports = function (t) {
        return i[t] || (i[t] = r(t))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    var i = n(2).document;
    t.exports = i && i.documentElement
}, function (t, e, n) {
    var i = n(4), r = n(1), o = function (t, e) {
        if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, i) {
            try {
                (i = n(19)(Function.call, n(16).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function (t, n) {
                return o(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0), check: o
    }
}, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (t, e, n) {
    var i = n(4), r = n(75).set;
    t.exports = function (t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && i(o) && r && r(t, o), t
    }
}, function (t, e, n) {
    "use strict";
    var i = n(21), r = n(24);
    t.exports = function (t) {
        var e = String(r(this)), n = "", o = i(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function (t, e) {
    t.exports = Math.sign || function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function (t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function (t, e, n) {
    "use strict";
    var i = n(30), r = n(0), o = n(12), a = n(11), s = n(47), u = n(82), c = n(44), l = n(17), f = n(5)("iterator"),
        h = !([].keys && "next" in [].keys()), d = function () {
            return this
        };
    t.exports = function (t, e, n, p, v, g, y) {
        u(n, e, p);
        var m, b, _, x = function (t) {
                if (!h && t in E) return E[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, w = e + " Iterator", k = "values" == v, S = !1, E = t.prototype, O = E[f] || E["@@iterator"] || v && E[v],
            M = O || x(v), T = v ? k ? x("entries") : M : void 0, A = "Array" == e && E.entries || O;
        if (A && (_ = l(A.call(new t))) !== Object.prototype && _.next && (c(_, w, !0), i || "function" == typeof _[f] || a(_, f, d)), k && O && "values" !== O.name && (S = !0, M = function () {
            return O.call(this)
        }), i && !y || !h && !S && E[f] || a(E, f, M), s[e] = M, s[w] = d, v) if (m = {
            values: k ? M : x("values"),
            keys: g ? M : x("keys"),
            entries: T
        }, y) for (b in m) b in E || o(E, b, m[b]); else r(r.P + r.F * (h || S), e, m);
        return m
    }
}, function (t, e, n) {
    "use strict";
    var i = n(37), r = n(33), o = n(44), a = {};
    n(11)(a, n(5)("iterator"), (function () {
        return this
    })), t.exports = function (t, e, n) {
        t.prototype = i(a, {next: r(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e, n) {
    var i = n(60), r = n(24);
    t.exports = function (t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(t))
    }
}, function (t, e, n) {
    var i = n(5)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./"[t](e)
            } catch (t) {
            }
        }
        return !0
    }
}, function (t, e, n) {
    var i = n(47), r = n(5)("iterator"), o = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (i.Array === t || o[r] === t)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(8), r = n(33);
    t.exports = function (t, e, n) {
        e in t ? i.f(t, e, r(0, n)) : t[e] = n
    }
}, function (t, e, n) {
    var i = n(45), r = n(5)("iterator"), o = n(47);
    t.exports = n(18).getIteratorMethod = function (t) {
        if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
    }
}, function (t, e, n) {
    var i = n(237);
    t.exports = function (t, e) {
        return new (i(t))(e)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(9), r = n(36), o = n(6);
    t.exports = function (t) {
        for (var e = i(this), n = o(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : r(u, n); c > s;) e[s++] = t;
        return e
    }
}, function (t, e, n) {
    "use strict";
    var i = n(32), r = n(117), o = n(47), a = n(15);
    t.exports = n(81)(Array, "Array", (function (t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }), (function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (t, e, n) {
    "use strict";
    var i, r, o = n(52), a = RegExp.prototype.exec, s = String.prototype.replace, u = a,
        c = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (c || l) && (u = function (t) {
        var e, n, i, r, u = this;
        return l && (n = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))), c && (e = u.lastIndex), i = a.call(u, t), c && i && (u.lastIndex = u.global ? i.index + i[0].length : e), l && i && i.length > 1 && s.call(i[0], n, (function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        })), i
    }), t.exports = u
}, function (t, e, n) {
    "use strict";
    var i = n(59)(!0);
    t.exports = function (t, e, n) {
        return e + (n ? i(t, e).length : 1)
    }
}, function (t, e, n) {
    var i, r, o, a = n(19), s = n(107), u = n(74), c = n(70), l = n(2), f = l.process, h = l.setImmediate,
        d = l.clearImmediate, p = l.MessageChannel, v = l.Dispatch, g = 0, y = {}, m = function () {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t], e()
            }
        }, b = function (t) {
            m.call(t.data)
        };
    h && d || (h = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return y[++g] = function () {
            s("function" == typeof t ? t : Function(t), e)
        }, i(g), g
    }, d = function (t) {
        delete y[t]
    }, "process" == n(20)(f) ? i = function (t) {
        f.nextTick(a(m, t, 1))
    } : v && v.now ? i = function (t) {
        v.now(a(m, t, 1))
    } : p ? (o = (r = new p).port2, r.port1.onmessage = b, i = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function (t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : i = "onreadystatechange" in c("script") ? function (t) {
        u.appendChild(c("script")).onreadystatechange = function () {
            u.removeChild(this), m.call(t)
        }
    } : function (t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {set: h, clear: d}
}, function (t, e, n) {
    var i = n(2), r = n(93).set, o = i.MutationObserver || i.WebKitMutationObserver, a = i.process, s = i.Promise,
        u = "process" == n(20)(a);
    t.exports = function () {
        var t, e, n, c = function () {
            var i, r;
            for (u && (i = a.domain) && i.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, i && i.enter()
        };
        if (u) n = function () {
            a.nextTick(c)
        }; else if (!o || i.navigator && i.navigator.standalone) if (s && s.resolve) {
            var l = s.resolve(void 0);
            n = function () {
                l.then(c)
            }
        } else n = function () {
            r.call(i, c)
        }; else {
            var f = !0, h = document.createTextNode("");
            new o(c).observe(h, {characterData: !0}), n = function () {
                h.data = f = !f
            }
        }
        return function (i) {
            var r = {fn: i, next: void 0};
            e && (e.next = r), t || (t = r, n()), e = r
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(10);

    function r(t) {
        var e, n;
        this.promise = new t((function (t, i) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = i
        })), this.resolve = i(e), this.reject = i(n)
    }

    t.exports.f = function (t) {
        return new r(t)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(2), r = n(7), o = n(30), a = n(66), s = n(11), u = n(42), c = n(3), l = n(40), f = n(21), h = n(6),
        d = n(127), p = n(38).f, v = n(8).f, g = n(89), y = n(44), m = i.ArrayBuffer, b = i.DataView, _ = i.Math,
        x = i.RangeError, w = i.Infinity, k = m, S = _.abs, E = _.pow, O = _.floor, M = _.log, T = _.LN2,
        A = r ? "_b" : "buffer", C = r ? "_l" : "byteLength", P = r ? "_o" : "byteOffset";

    function D(t, e, n) {
        var i, r, o, a = new Array(n), s = 8 * n - e - 1, u = (1 << s) - 1, c = u >> 1,
            l = 23 === e ? E(2, -24) - E(2, -77) : 0, f = 0, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = S(t)) != t || t === w ? (r = t != t ? 1 : 0, i = u) : (i = O(M(t) / T), t * (o = E(2, -i)) < 1 && (i--, o *= 2), (t += i + c >= 1 ? l / o : l * E(2, 1 - c)) * o >= 2 && (i++, o /= 2), i + c >= u ? (r = 0, i = u) : i + c >= 1 ? (r = (t * o - 1) * E(2, e), i += c) : (r = t * E(2, c - 1) * E(2, e), i = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8) ;
        for (i = i << e | r, s += e; s > 0; a[f++] = 255 & i, i /= 256, s -= 8) ;
        return a[--f] |= 128 * h, a
    }

    function L(t, e, n) {
        var i, r = 8 * n - e - 1, o = (1 << r) - 1, a = o >> 1, s = r - 7, u = n - 1, c = t[u--], l = 127 & c;
        for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8) ;
        for (i = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; i = 256 * i + t[u], u--, s -= 8) ;
        if (0 === l) l = 1 - a; else {
            if (l === o) return i ? NaN : c ? -w : w;
            i += E(2, e), l -= a
        }
        return (c ? -1 : 1) * i * E(2, l - e)
    }

    function j(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function I(t) {
        return [255 & t]
    }

    function N(t) {
        return [255 & t, t >> 8 & 255]
    }

    function R(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function F(t) {
        return D(t, 52, 8)
    }

    function B(t) {
        return D(t, 23, 4)
    }

    function W(t, e, n) {
        v(t.prototype, e, {
            get: function () {
                return this[n]
            }
        })
    }

    function z(t, e, n, i) {
        var r = d(+n);
        if (r + e > t[C]) throw x("Wrong index!");
        var o = t[A]._b, a = r + t[P], s = o.slice(a, a + e);
        return i ? s : s.reverse()
    }

    function H(t, e, n, i, r, o) {
        var a = d(+n);
        if (a + e > t[C]) throw x("Wrong index!");
        for (var s = t[A]._b, u = a + t[P], c = i(+r), l = 0; l < e; l++) s[u + l] = c[o ? l : e - l - 1]
    }

    if (a.ABV) {
        if (!c((function () {
            m(1)
        })) || !c((function () {
            new m(-1)
        })) || c((function () {
            return new m, new m(1.5), new m(NaN), "ArrayBuffer" != m.name
        }))) {
            for (var V, q = (m = function (t) {
                return l(this, m), new k(d(t))
            }).prototype = k.prototype, U = p(k), $ = 0; U.length > $;) (V = U[$++]) in m || s(m, V, k[V]);
            o || (q.constructor = m)
        }
        var Y = new b(new m(2)), X = b.prototype.setInt8;
        Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || u(b.prototype, {
            setInt8: function (t, e) {
                X.call(this, t, e << 24 >> 24)
            }, setUint8: function (t, e) {
                X.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else m = function (t) {
        l(this, m, "ArrayBuffer");
        var e = d(t);
        this._b = g.call(new Array(e), 0), this[C] = e
    }, b = function (t, e, n) {
        l(this, b, "DataView"), l(t, m, "DataView");
        var i = t[C], r = f(e);
        if (r < 0 || r > i) throw x("Wrong offset!");
        if (r + (n = void 0 === n ? i - r : h(n)) > i) throw x("Wrong length!");
        this[A] = t, this[P] = r, this[C] = n
    }, r && (W(m, "byteLength", "_l"), W(b, "buffer", "_b"), W(b, "byteLength", "_l"), W(b, "byteOffset", "_o")), u(b.prototype, {
        getInt8: function (t) {
            return z(this, 1, t)[0] << 24 >> 24
        }, getUint8: function (t) {
            return z(this, 1, t)[0]
        }, getInt16: function (t) {
            var e = z(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        }, getUint16: function (t) {
            var e = z(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        }, getInt32: function (t) {
            return j(z(this, 4, t, arguments[1]))
        }, getUint32: function (t) {
            return j(z(this, 4, t, arguments[1])) >>> 0
        }, getFloat32: function (t) {
            return L(z(this, 4, t, arguments[1]), 23, 4)
        }, getFloat64: function (t) {
            return L(z(this, 8, t, arguments[1]), 52, 8)
        }, setInt8: function (t, e) {
            H(this, 1, t, I, e)
        }, setUint8: function (t, e) {
            H(this, 1, t, I, e)
        }, setInt16: function (t, e) {
            H(this, 2, t, N, e, arguments[2])
        }, setUint16: function (t, e) {
            H(this, 2, t, N, e, arguments[2])
        }, setInt32: function (t, e) {
            H(this, 4, t, R, e, arguments[2])
        }, setUint32: function (t, e) {
            H(this, 4, t, R, e, arguments[2])
        }, setFloat32: function (t, e) {
            H(this, 4, t, B, e, arguments[2])
        }, setFloat64: function (t, e) {
            H(this, 8, t, F, e, arguments[2])
        }
    });
    y(m, "ArrayBuffer"), y(b, "DataView"), s(b.prototype, a.VIEW, !0), e.ArrayBuffer = m, e.DataView = b
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return gi
    }));
    var i = {};
    n.r(i), n.d(i, "top", (function () {
        return r
    })), n.d(i, "bottom", (function () {
        return o
    })), n.d(i, "right", (function () {
        return a
    })), n.d(i, "left", (function () {
        return s
    })), n.d(i, "auto", (function () {
        return u
    })), n.d(i, "basePlacements", (function () {
        return c
    })), n.d(i, "start", (function () {
        return l
    })), n.d(i, "end", (function () {
        return f
    })), n.d(i, "clippingParents", (function () {
        return h
    })), n.d(i, "viewport", (function () {
        return d
    })), n.d(i, "popper", (function () {
        return p
    })), n.d(i, "reference", (function () {
        return v
    })), n.d(i, "variationPlacements", (function () {
        return g
    })), n.d(i, "placements", (function () {
        return y
    })), n.d(i, "beforeRead", (function () {
        return m
    })), n.d(i, "read", (function () {
        return b
    })), n.d(i, "afterRead", (function () {
        return _
    })), n.d(i, "beforeMain", (function () {
        return x
    })), n.d(i, "main", (function () {
        return w
    })), n.d(i, "afterMain", (function () {
        return k
    })), n.d(i, "beforeWrite", (function () {
        return S
    })), n.d(i, "write", (function () {
        return E
    })), n.d(i, "afterWrite", (function () {
        return O
    })), n.d(i, "modifierPhases", (function () {
        return M
    })), n.d(i, "applyStyles", (function () {
        return L
    })), n.d(i, "arrow", (function () {
        return J
    })), n.d(i, "computeStyles", (function () {
        return nt
    })), n.d(i, "eventListeners", (function () {
        return rt
    })), n.d(i, "flip", (function () {
        return mt
    })), n.d(i, "hide", (function () {
        return xt
    })), n.d(i, "offset", (function () {
        return wt
    })), n.d(i, "popperOffsets", (function () {
        return kt
    })), n.d(i, "preventOverflow", (function () {
        return St
    })), n.d(i, "popperGenerator", (function () {
        return At
    })), n.d(i, "detectOverflow", (function () {
        return yt
    })), n.d(i, "createPopperBase", (function () {
        return Pt
    })), n.d(i, "createPopper", (function () {
        return Dt
    })), n.d(i, "createPopperLite", (function () {
        return Lt
    }));
    var r = "top", o = "bottom", a = "right", s = "left", u = "auto", c = [r, o, a, s], l = "start", f = "end",
        h = "clippingParents", d = "viewport", p = "popper", v = "reference", g = c.reduce((function (t, e) {
            return t.concat([e + "-" + l, e + "-" + f])
        }), []), y = [].concat(c, [u]).reduce((function (t, e) {
            return t.concat([e, e + "-" + l, e + "-" + f])
        }), []), m = "beforeRead", b = "read", _ = "afterRead", x = "beforeMain", w = "main", k = "afterMain",
        S = "beforeWrite", E = "write", O = "afterWrite", M = [m, b, _, x, w, k, S, E, O];

    function T(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function A(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function C(t) {
        return t instanceof A(t).Element || t instanceof Element
    }

    function P(t) {
        return t instanceof A(t).HTMLElement || t instanceof HTMLElement
    }

    function D(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof A(t).ShadowRoot || t instanceof ShadowRoot)
    }

    var L = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var n = e.styles[t] || {}, i = e.attributes[t] || {}, r = e.elements[t];
                P(r) && T(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function (t) {
                    var e = i[t];
                    !1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, n = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var i = e.elements[t], r = e.attributes[t] || {},
                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    P(i) && T(i) && (Object.assign(i.style, o), Object.keys(r).forEach((function (t) {
                        i.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };

    function j(t) {
        return t.split("-")[0]
    }

    var I = Math.round;

    function N(t, e) {
        void 0 === e && (e = !1);
        var n = t.getBoundingClientRect(), i = 1, r = 1;
        if (P(t) && e) {
            var o = t.offsetHeight, a = t.offsetWidth;
            a > 0 && (i = n.width / a || 1), o > 0 && (r = n.height / o || 1)
        }
        return {
            width: I(n.width / i),
            height: I(n.height / r),
            top: I(n.top / r),
            right: I(n.right / i),
            bottom: I(n.bottom / r),
            left: I(n.left / i),
            x: I(n.left / i),
            y: I(n.top / r)
        }
    }

    function R(t) {
        var e = N(t), n = t.offsetWidth, i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }

    function F(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && D(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function B(t) {
        return A(t).getComputedStyle(t)
    }

    function W(t) {
        return ["table", "td", "th"].indexOf(T(t)) >= 0
    }

    function z(t) {
        return ((C(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function H(t) {
        return "html" === T(t) ? t : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || z(t)
    }

    function V(t) {
        return P(t) && "fixed" !== B(t).position ? t.offsetParent : null
    }

    function q(t) {
        for (var e = A(t), n = V(t); n && W(n) && "static" === B(n).position;) n = V(n);
        return n && ("html" === T(n) || "body" === T(n) && "static" === B(n).position) ? e : n || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && P(t) && "fixed" === B(t).position) return null;
            for (var n = H(t); P(n) && ["html", "body"].indexOf(T(n)) < 0;) {
                var i = B(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }

    function U(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    var $ = Math.max, Y = Math.min, X = Math.round;

    function G(t, e, n) {
        return $(t, Y(e, n))
    }

    function K(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function Q(t, e) {
        return e.reduce((function (e, n) {
            return e[n] = t, e
        }), {})
    }

    var J = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, n = t.state, i = t.name, u = t.options, l = n.elements.arrow, f = n.modifiersData.popperOffsets,
                h = j(n.placement), d = U(h), p = [s, a].indexOf(h) >= 0 ? "height" : "width";
            if (l && f) {
                var v = function (t, e) {
                        return K("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : Q(t, c))
                    }(u.padding, n), g = R(l), y = "y" === d ? r : s, m = "y" === d ? o : a,
                    b = n.rects.reference[p] + n.rects.reference[d] - f[d] - n.rects.popper[p],
                    _ = f[d] - n.rects.reference[d], x = q(l),
                    w = x ? "y" === d ? x.clientHeight || 0 : x.clientWidth || 0 : 0, k = b / 2 - _ / 2, S = v[y],
                    E = w - g[p] - v[m], O = w / 2 - g[p] / 2 + k, M = G(S, O, E), T = d;
                n.modifiersData[i] = ((e = {})[T] = M, e.centerOffset = M - O, e)
            }
        }, effect: function (t) {
            var e = t.state, n = t.options.element, i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && F(e.elements.popper, i) && (e.elements.arrow = i)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function Z(t) {
        return t.split("-")[1]
    }

    var tt = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function et(t) {
        var e, n = t.popper, i = t.popperRect, u = t.placement, c = t.variation, l = t.offsets, h = t.position,
            d = t.gpuAcceleration, p = t.adaptive, v = t.roundOffsets, g = !0 === v ? function (t) {
                var e = t.x, n = t.y, i = window.devicePixelRatio || 1;
                return {x: X(X(e * i) / i) || 0, y: X(X(n * i) / i) || 0}
            }(l) : "function" == typeof v ? v(l) : l, y = g.x, m = void 0 === y ? 0 : y, b = g.y, _ = void 0 === b ? 0 : b,
            x = l.hasOwnProperty("x"), w = l.hasOwnProperty("y"), k = s, S = r, E = window;
        if (p) {
            var O = q(n), M = "clientHeight", T = "clientWidth";
            O === A(n) && "static" !== B(O = z(n)).position && "absolute" === h && (M = "scrollHeight", T = "scrollWidth"), O = O, u !== r && (u !== s && u !== a || c !== f) || (S = o, _ -= O[M] - i.height, _ *= d ? 1 : -1), u !== s && (u !== r && u !== o || c !== f) || (k = a, m -= O[T] - i.width, m *= d ? 1 : -1)
        }
        var C, P = Object.assign({position: h}, p && tt);
        return d ? Object.assign({}, P, ((C = {})[S] = w ? "0" : "", C[k] = x ? "0" : "", C.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + _ + "px)" : "translate3d(" + m + "px, " + _ + "px, 0)", C)) : Object.assign({}, P, ((e = {})[S] = w ? _ + "px" : "", e[k] = x ? m + "px" : "", e.transform = "", e))
    }

    var nt = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, n = t.options, i = n.gpuAcceleration, r = void 0 === i || i, o = n.adaptive,
                a = void 0 === o || o, s = n.roundOffsets, u = void 0 === s || s, c = {
                    placement: j(e.placement),
                    variation: Z(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: r
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, et(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: a,
                roundOffsets: u
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, et(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: u
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    }, it = {passive: !0};
    var rt = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, n = t.instance, i = t.options, r = i.scroll, o = void 0 === r || r, a = i.resize,
                s = void 0 === a || a, u = A(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function (t) {
                t.addEventListener("scroll", n.update, it)
            })), s && u.addEventListener("resize", n.update, it), function () {
                o && c.forEach((function (t) {
                    t.removeEventListener("scroll", n.update, it)
                })), s && u.removeEventListener("resize", n.update, it)
            }
        }, data: {}
    }, ot = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function at(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return ot[t]
        }))
    }

    var st = {start: "end", end: "start"};

    function ut(t) {
        return t.replace(/start|end/g, (function (t) {
            return st[t]
        }))
    }

    function ct(t) {
        var e = A(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function lt(t) {
        return N(z(t)).left + ct(t).scrollLeft
    }

    function ft(t) {
        var e = B(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i)
    }

    function ht(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = function t(e) {
                return ["html", "body", "#document"].indexOf(T(e)) >= 0 ? e.ownerDocument.body : P(e) && ft(e) ? e : t(H(e))
            }(t), r = i === (null == (n = t.ownerDocument) ? void 0 : n.body), o = A(i),
            a = r ? [o].concat(o.visualViewport || [], ft(i) ? i : []) : i, s = e.concat(a);
        return r ? s : s.concat(ht(H(a)))
    }

    function dt(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function pt(t, e) {
        return e === d ? dt(function (t) {
            var e = A(t), n = z(t), i = e.visualViewport, r = n.clientWidth, o = n.clientHeight, a = 0, s = 0;
            return i && (r = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = i.offsetLeft, s = i.offsetTop)), {
                width: r,
                height: o,
                x: a + lt(t),
                y: s
            }
        }(t)) : P(e) ? function (t) {
            var e = N(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : dt(function (t) {
            var e, n = z(t), i = ct(t), r = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = $(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                a = $(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                s = -i.scrollLeft + lt(t), u = -i.scrollTop;
            return "rtl" === B(r || n).direction && (s += $(n.clientWidth, r ? r.clientWidth : 0) - o), {
                width: o,
                height: a,
                x: s,
                y: u
            }
        }(z(t)))
    }

    function vt(t, e, n) {
        var i = "clippingParents" === e ? function (t) {
            var e = ht(H(t)), n = ["absolute", "fixed"].indexOf(B(t).position) >= 0 && P(t) ? q(t) : t;
            return C(n) ? e.filter((function (t) {
                return C(t) && F(t, n) && "body" !== T(t)
            })) : []
        }(t) : [].concat(e), r = [].concat(i, [n]), o = r[0], a = r.reduce((function (e, n) {
            var i = pt(t, n);
            return e.top = $(i.top, e.top), e.right = Y(i.right, e.right), e.bottom = Y(i.bottom, e.bottom), e.left = $(i.left, e.left), e
        }), pt(t, o));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
    }

    function gt(t) {
        var e, n = t.reference, i = t.element, u = t.placement, c = u ? j(u) : null, h = u ? Z(u) : null,
            d = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2;
        switch (c) {
            case r:
                e = {x: d, y: n.y - i.height};
                break;
            case o:
                e = {x: d, y: n.y + n.height};
                break;
            case a:
                e = {x: n.x + n.width, y: p};
                break;
            case s:
                e = {x: n.x - i.width, y: p};
                break;
            default:
                e = {x: n.x, y: n.y}
        }
        var v = c ? U(c) : null;
        if (null != v) {
            var g = "y" === v ? "height" : "width";
            switch (h) {
                case l:
                    e[v] = e[v] - (n[g] / 2 - i[g] / 2);
                    break;
                case f:
                    e[v] = e[v] + (n[g] / 2 - i[g] / 2)
            }
        }
        return e
    }

    function yt(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, s = void 0 === i ? t.placement : i, u = n.boundary, l = void 0 === u ? h : u,
            f = n.rootBoundary, g = void 0 === f ? d : f, y = n.elementContext, m = void 0 === y ? p : y,
            b = n.altBoundary, _ = void 0 !== b && b, x = n.padding, w = void 0 === x ? 0 : x,
            k = K("number" != typeof w ? w : Q(w, c)), S = m === p ? v : p, E = t.rects.popper,
            O = t.elements[_ ? S : m], M = vt(C(O) ? O : O.contextElement || z(t.elements.popper), l, g),
            T = N(t.elements.reference), A = gt({reference: T, element: E, strategy: "absolute", placement: s}),
            P = dt(Object.assign({}, E, A)), D = m === p ? P : T, L = {
                top: M.top - D.top + k.top,
                bottom: D.bottom - M.bottom + k.bottom,
                left: M.left - D.left + k.left,
                right: D.right - M.right + k.right
            }, j = t.modifiersData.offset;
        if (m === p && j) {
            var I = j[s];
            Object.keys(L).forEach((function (t) {
                var e = [a, o].indexOf(t) >= 0 ? 1 : -1, n = [r, o].indexOf(t) >= 0 ? "y" : "x";
                L[t] += I[n] * e
            }))
        }
        return L
    }

    var mt = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var f = n.mainAxis, h = void 0 === f || f, d = n.altAxis, p = void 0 === d || d, v = n.fallbackPlacements, m = n.padding, b = n.boundary, _ = n.rootBoundary, x = n.altBoundary, w = n.flipVariations, k = void 0 === w || w, S = n.allowedAutoPlacements, E = e.options.placement, O = j(E), M = v || (O === E || !k ? [at(E)] : function (t) {
                    if (j(t) === u) return [];
                    var e = at(t);
                    return [ut(t), e, ut(e)]
                }(E)), T = [E].concat(M).reduce((function (t, n) {
                    return t.concat(j(n) === u ? function (t, e) {
                        void 0 === e && (e = {});
                        var n = e, i = n.placement, r = n.boundary, o = n.rootBoundary, a = n.padding,
                            s = n.flipVariations, u = n.allowedAutoPlacements, l = void 0 === u ? y : u, f = Z(i),
                            h = f ? s ? g : g.filter((function (t) {
                                return Z(t) === f
                            })) : c, d = h.filter((function (t) {
                                return l.indexOf(t) >= 0
                            }));
                        0 === d.length && (d = h);
                        var p = d.reduce((function (e, n) {
                            return e[n] = yt(t, {placement: n, boundary: r, rootBoundary: o, padding: a})[j(n)], e
                        }), {});
                        return Object.keys(p).sort((function (t, e) {
                            return p[t] - p[e]
                        }))
                    }(e, {
                        placement: n,
                        boundary: b,
                        rootBoundary: _,
                        padding: m,
                        flipVariations: k,
                        allowedAutoPlacements: S
                    }) : n)
                }), []), A = e.rects.reference, C = e.rects.popper, P = new Map, D = !0, L = T[0], I = 0; I < T.length; I++) {
                    var N = T[I], R = j(N), F = Z(N) === l, B = [r, o].indexOf(R) >= 0, W = B ? "width" : "height",
                        z = yt(e, {placement: N, boundary: b, rootBoundary: _, altBoundary: x, padding: m}),
                        H = B ? F ? a : s : F ? o : r;
                    A[W] > C[W] && (H = at(H));
                    var V = at(H), q = [];
                    if (h && q.push(z[R] <= 0), p && q.push(z[H] <= 0, z[V] <= 0), q.every((function (t) {
                        return t
                    }))) {
                        L = N, D = !1;
                        break
                    }
                    P.set(N, q)
                }
                if (D) for (var U = function (t) {
                    var e = T.find((function (e) {
                        var n = P.get(e);
                        if (n) return n.slice(0, t).every((function (t) {
                            return t
                        }))
                    }));
                    if (e) return L = e, "break"
                }, $ = k ? 3 : 1; $ > 0; $--) {
                    if ("break" === U($)) break
                }
                e.placement !== L && (e.modifiersData[i]._skip = !0, e.placement = L, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function bt(t, e, n) {
        return void 0 === n && (n = {x: 0, y: 0}), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function _t(t) {
        return [r, a, o, s].some((function (e) {
            return t[e] >= 0
        }))
    }

    var xt = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, n = t.name, i = e.rects.reference, r = e.rects.popper, o = e.modifiersData.preventOverflow,
                a = yt(e, {elementContext: "reference"}), s = yt(e, {altBoundary: !0}), u = bt(a, i), c = bt(s, r, o),
                l = _t(u), f = _t(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: c,
                isReferenceHidden: l,
                hasPopperEscaped: f
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": l,
                "data-popper-escaped": f
            })
        }
    };
    var wt = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, n = t.options, i = t.name, o = n.offset, u = void 0 === o ? [0, 0] : o,
                c = y.reduce((function (t, n) {
                    return t[n] = function (t, e, n) {
                        var i = j(t), o = [s, r].indexOf(i) >= 0 ? -1 : 1,
                            u = "function" == typeof n ? n(Object.assign({}, e, {placement: t})) : n, c = u[0],
                            l = u[1];
                        return c = c || 0, l = (l || 0) * o, [s, a].indexOf(i) >= 0 ? {x: l, y: c} : {x: c, y: l}
                    }(n, e.rects, u), t
                }), {}), l = c[e.placement], f = l.x, h = l.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += h), e.modifiersData[i] = c
        }
    };
    var kt = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, n = t.name;
            e.modifiersData[n] = gt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    };
    var St = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name, u = n.mainAxis, c = void 0 === u || u, f = n.altAxis,
                h = void 0 !== f && f, d = n.boundary, p = n.rootBoundary, v = n.altBoundary, g = n.padding,
                y = n.tether, m = void 0 === y || y, b = n.tetherOffset, _ = void 0 === b ? 0 : b,
                x = yt(e, {boundary: d, rootBoundary: p, padding: g, altBoundary: v}), w = j(e.placement),
                k = Z(e.placement), S = !k, E = U(w), O = "x" === E ? "y" : "x", M = e.modifiersData.popperOffsets,
                T = e.rects.reference, A = e.rects.popper,
                C = "function" == typeof _ ? _(Object.assign({}, e.rects, {placement: e.placement})) : _,
                P = {x: 0, y: 0};
            if (M) {
                if (c || h) {
                    var D = "y" === E ? r : s, L = "y" === E ? o : a, I = "y" === E ? "height" : "width", N = M[E],
                        F = M[E] + x[D], B = M[E] - x[L], W = m ? -A[I] / 2 : 0, z = k === l ? T[I] : A[I],
                        H = k === l ? -A[I] : -T[I], V = e.elements.arrow, X = m && V ? R(V) : {width: 0, height: 0},
                        K = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, Q = K[D], J = K[L], tt = G(0, T[I], X[I]),
                        et = S ? T[I] / 2 - W - tt - Q - C : z - tt - Q - C,
                        nt = S ? -T[I] / 2 + W + tt + J + C : H + tt + J + C,
                        it = e.elements.arrow && q(e.elements.arrow),
                        rt = it ? "y" === E ? it.clientTop || 0 : it.clientLeft || 0 : 0,
                        ot = e.modifiersData.offset ? e.modifiersData.offset[e.placement][E] : 0,
                        at = M[E] + et - ot - rt, st = M[E] + nt - ot;
                    if (c) {
                        var ut = G(m ? Y(F, at) : F, N, m ? $(B, st) : B);
                        M[E] = ut, P[E] = ut - N
                    }
                    if (h) {
                        var ct = "x" === E ? r : s, lt = "x" === E ? o : a, ft = M[O], ht = ft + x[ct], dt = ft - x[lt],
                            pt = G(m ? Y(ht, at) : ht, ft, m ? $(dt, st) : dt);
                        M[O] = pt, P[O] = pt - ft
                    }
                }
                e.modifiersData[i] = P
            }
        }, requiresIfExists: ["offset"]
    };

    function Et(t, e, n) {
        void 0 === n && (n = !1);
        var i, r, o = P(e), a = P(e) && function (t) {
            var e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, i = e.height / t.offsetHeight || 1;
            return 1 !== n || 1 !== i
        }(e), s = z(e), u = N(t, a), c = {scrollLeft: 0, scrollTop: 0}, l = {x: 0, y: 0};
        return (o || !o && !n) && (("body" !== T(e) || ft(s)) && (c = (i = e) !== A(i) && P(i) ? {
            scrollLeft: (r = i).scrollLeft,
            scrollTop: r.scrollTop
        } : ct(i)), P(e) ? ((l = N(e, !0)).x += e.clientLeft, l.y += e.clientTop) : s && (l.x = lt(s))), {
            x: u.left + c.scrollLeft - l.x,
            y: u.top + c.scrollTop - l.y,
            width: u.width,
            height: u.height
        }
    }

    function Ot(t) {
        var e = new Map, n = new Set, i = [];
        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            n.has(t.name) || function t(r) {
                n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function (i) {
                    if (!n.has(i)) {
                        var r = e.get(i);
                        r && t(r)
                    }
                })), i.push(r)
            }(t)
        })), i
    }

    var Mt = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function Tt() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function At(t) {
        void 0 === t && (t = {});
        var e = t, n = e.defaultModifiers, i = void 0 === n ? [] : n, r = e.defaultOptions, o = void 0 === r ? Mt : r;
        return function (t, e, n) {
            void 0 === n && (n = o);
            var r, a, s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Mt, o),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, u = [], c = !1, l = {
                state: s, setOptions: function (n) {
                    var r = "function" == typeof n ? n(s.options) : n;
                    f(), s.options = Object.assign({}, o, s.options, r), s.scrollParents = {
                        reference: C(t) ? ht(t) : t.contextElement ? ht(t.contextElement) : [],
                        popper: ht(e)
                    };
                    var a = function (t) {
                        var e = Ot(t);
                        return M.reduce((function (t, n) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === n
                            })))
                        }), [])
                    }(function (t) {
                        var e = t.reduce((function (t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, e, {
                                options: Object.assign({}, n.options, e.options),
                                data: Object.assign({}, n.data, e.data)
                            }) : e, t
                        }), {});
                        return Object.keys(e).map((function (t) {
                            return e[t]
                        }))
                    }([].concat(i, s.options.modifiers)));
                    return s.orderedModifiers = a.filter((function (t) {
                        return t.enabled
                    })), s.orderedModifiers.forEach((function (t) {
                        var e = t.name, n = t.options, i = void 0 === n ? {} : n, r = t.effect;
                        if ("function" == typeof r) {
                            var o = r({state: s, name: e, instance: l, options: i});
                            u.push(o || function () {
                            })
                        }
                    })), l.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t = s.elements, e = t.reference, n = t.popper;
                        if (Tt(e, n)) {
                            s.rects = {
                                reference: Et(e, q(n), "fixed" === s.options.strategy),
                                popper: R(n)
                            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (t) {
                                return s.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var i = 0; i < s.orderedModifiers.length; i++) if (!0 !== s.reset) {
                                var r = s.orderedModifiers[i], o = r.fn, a = r.options, u = void 0 === a ? {} : a,
                                    f = r.name;
                                "function" == typeof o && (s = o({state: s, options: u, name: f, instance: l}) || s)
                            } else s.reset = !1, i = -1
                        }
                    }
                }, update: (r = function () {
                    return new Promise((function (t) {
                        l.forceUpdate(), t(s)
                    }))
                }, function () {
                    return a || (a = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            a = void 0, t(r())
                        }))
                    }))), a
                }), destroy: function () {
                    f(), c = !0
                }
            };
            if (!Tt(t, e)) return l;

            function f() {
                u.forEach((function (t) {
                    return t()
                })), u = []
            }

            return l.setOptions(n).then((function (t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), l
        }
    }

    var Ct, Pt = At(), Dt = At({defaultModifiers: [rt, kt, nt, L, wt, mt, St, J, xt]}),
        Lt = At({defaultModifiers: [rt, kt, nt, L]});

    function jt(t, e, n) {
        return (jt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var i = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Vt(t));) ;
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        })(t, e, n || t)
    }

    function It(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function Nt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? It(Object(n), !0).forEach((function (e) {
                Rt(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function Rt(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function Ft(t) {
        return function (t) {
            if (Array.isArray(t)) return Gt(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || Xt(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Bt(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && Wt(t, e)
    }

    function Wt(t, e) {
        return (Wt = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function zt(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = Vt(t);
            if (e) {
                var r = Vt(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Ht(this, n)
        }
    }

    function Ht(t, e) {
        return !e || "object" !== Kt(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Vt(t) {
        return (Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function qt(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Ut(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function $t(t, e, n) {
        return e && Ut(t.prototype, e), n && Ut(t, n), t
    }

    function Yt(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
            if (null == n) return;
            var i, r, o = [], a = !0, s = !1;
            try {
                for (n = n.call(t); !(a = (i = n.next()).done) && (o.push(i.value), !e || o.length !== e); a = !0) ;
            } catch (t) {
                s = !0, r = t
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return o
        }(t, e) || Xt(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Xt(t, e) {
        if (t) {
            if ("string" == typeof t) return Gt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gt(t, e) : void 0
        }
    }

    function Gt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function Kt(t) {
        return (Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var Qt = function (t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = "#".concat(n.split("#")[1])), e = n && "#" !== n ? n.trim() : null
            }
            return e
        }, Jt = function (t) {
            var e = Qt(t);
            return e && document.querySelector(e) ? e : null
        }, Zt = function (t) {
            var e = Qt(t);
            return e ? document.querySelector(e) : null
        }, te = function (t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t), n = e.transitionDuration, i = e.transitionDelay, r = Number.parseFloat(n),
                o = Number.parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
        }, ee = function (t) {
            t.dispatchEvent(new Event("transitionend"))
        }, ne = function (t) {
            return !(!t || "object" !== Kt(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType)
        }, ie = function (t) {
            return ne(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
        }, re = function (t, e, n) {
            Object.keys(n).forEach((function (i) {
                var r, o = n[i], a = e[i],
                    s = a && ne(a) ? "element" : null == (r = a) ? "".concat(r) : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(o).test(s)) throw new TypeError("".concat(t.toUpperCase(), ': Option "').concat(i, '" provided type "').concat(s, '" but expected type "').concat(o, '".'))
            }))
        }, oe = function (t) {
            return !(!ne(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
        }, ae = function (t) {
            return !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
        }, se = function () {
        }, ue = function (t) {
            t.offsetHeight
        }, ce = function () {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }, le = [], fe = function () {
            return "rtl" === document.documentElement.dir
        }, he = function (t) {
            var e;
            e = function () {
                var e = ce();
                if (e) {
                    var n = t.NAME, i = e.fn[n];
                    e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = function () {
                        return e.fn[n] = i, t.jQueryInterface
                    }
                }
            }, "loading" === document.readyState ? (le.length || document.addEventListener("DOMContentLoaded", (function () {
                le.forEach((function (t) {
                    return t()
                }))
            })), le.push(e)) : e()
        }, de = function (t) {
            "function" == typeof t && t()
        }, pe = function (t, e) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (n) {
                var i = 5, r = te(e) + i, o = !1, a = function n(i) {
                    i.target === e && (o = !0, e.removeEventListener("transitionend", n), de(t))
                };
                e.addEventListener("transitionend", a), setTimeout((function () {
                    o || ee(e)
                }), r)
            } else de(t)
        }, ve = function (t, e, n, i) {
            var r = t.indexOf(e);
            if (-1 === r) return t[!n && i ? t.length - 1 : 0];
            var o = t.length;
            return r += n ? 1 : -1, i && (r = (r + o) % o), t[Math.max(0, Math.min(r, o - 1))]
        }, ge = /[^.]*(?=\..*)\.|.*/, ye = /\..*/, me = /::\d+$/, be = {}, _e = 1,
        xe = {mouseenter: "mouseover", mouseleave: "mouseout"}, we = /^(mouseenter|mouseleave)/i,
        ke = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function Se(t, e) {
        return e && "".concat(e, "::").concat(_e++) || t.uidEvent || _e++
    }

    function Ee(t) {
        var e = Se(t);
        return t.uidEvent = e, be[e] = be[e] || {}, be[e]
    }

    function Oe(t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = Object.keys(t), r = 0, o = i.length; r < o; r++) {
            var a = t[i[r]];
            if (a.originalHandler === e && a.delegationSelector === n) return a
        }
        return null
    }

    function Me(t, e, n) {
        var i = "string" == typeof e, r = i ? n : e, o = Ce(t);
        return ke.has(o) || (o = t), [i, r, o]
    }

    function Te(t, e, n, i, r) {
        if ("string" == typeof e && t) {
            if (n || (n = i, i = null), we.test(e)) {
                var o = function (t) {
                    return function (e) {
                        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                    }
                };
                i ? i = o(i) : n = o(n)
            }
            var a = Yt(Me(e, n, i), 3), s = a[0], u = a[1], c = a[2], l = Ee(t), f = l[c] || (l[c] = {}),
                h = Oe(f, u, s ? n : null);
            if (h) h.oneOff = h.oneOff && r; else {
                var d = Se(u, e.replace(ge, "")), p = s ? function (t, e, n) {
                    return function i(r) {
                        for (var o = t.querySelectorAll(e), a = r.target; a && a !== this; a = a.parentNode) for (var s = o.length; s--;) if (o[s] === a) return r.delegateTarget = a, i.oneOff && Pe.off(t, r.type, e, n), n.apply(a, [r]);
                        return null
                    }
                }(t, n, i) : function (t, e) {
                    return function n(i) {
                        return i.delegateTarget = t, n.oneOff && Pe.off(t, i.type, e), e.apply(t, [i])
                    }
                }(t, n);
                p.delegationSelector = s ? n : null, p.originalHandler = u, p.oneOff = r, p.uidEvent = d, f[d] = p, t.addEventListener(c, p, s)
            }
        }
    }

    function Ae(t, e, n, i, r) {
        var o = Oe(e[n], i, r);
        o && (t.removeEventListener(n, o, Boolean(r)), delete e[n][o.uidEvent])
    }

    function Ce(t) {
        return t = t.replace(ye, ""), xe[t] || t
    }

    var Pe = {
        on: function (t, e, n, i) {
            Te(t, e, n, i, !1)
        }, one: function (t, e, n, i) {
            Te(t, e, n, i, !0)
        }, off: function (t, e, n, i) {
            if ("string" == typeof e && t) {
                var r = Yt(Me(e, n, i), 3), o = r[0], a = r[1], s = r[2], u = s !== e, c = Ee(t), l = e.startsWith(".");
                if (void 0 === a) {
                    l && Object.keys(c).forEach((function (n) {
                        !function (t, e, n, i) {
                            var r = e[n] || {};
                            Object.keys(r).forEach((function (o) {
                                if (o.includes(i)) {
                                    var a = r[o];
                                    Ae(t, e, n, a.originalHandler, a.delegationSelector)
                                }
                            }))
                        }(t, c, n, e.slice(1))
                    }));
                    var f = c[s] || {};
                    Object.keys(f).forEach((function (n) {
                        var i = n.replace(me, "");
                        if (!u || e.includes(i)) {
                            var r = f[n];
                            Ae(t, c, s, r.originalHandler, r.delegationSelector)
                        }
                    }))
                } else {
                    if (!c || !c[s]) return;
                    Ae(t, c, s, a, o ? n : null)
                }
            }
        }, trigger: function (t, e, n) {
            if ("string" != typeof e || !t) return null;
            var i, r = ce(), o = Ce(e), a = e !== o, s = ke.has(o), u = !0, c = !0, l = !1, f = null;
            return a && r && (i = r.Event(e, n), r(t).trigger(i), u = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), l = i.isDefaultPrevented()), s ? (f = document.createEvent("HTMLEvents")).initEvent(o, u, !0) : f = new CustomEvent(e, {
                bubbles: u,
                cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach((function (t) {
                Object.defineProperty(f, t, {
                    get: function () {
                        return n[t]
                    }
                })
            })), l && f.preventDefault(), c && t.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
        }
    }, De = new Map, Le = function (t, e, n) {
        De.has(t) || De.set(t, new Map);
        var i = De.get(t);
        i.has(e) || 0 === i.size ? i.set(e, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."))
    }, je = function (t, e) {
        return De.has(t) && De.get(t).get(e) || null
    }, Ie = function (t, e) {
        if (De.has(t)) {
            var n = De.get(t);
            n.delete(e), 0 === n.size && De.delete(t)
        }
    }, Ne = function () {
        function t(e) {
            qt(this, t), (e = ie(e)) && (this._element = e, Le(this._element, this.constructor.DATA_KEY, this))
        }

        return $t(t, [{
            key: "dispose", value: function () {
                var t = this;
                Ie(this._element, this.constructor.DATA_KEY), Pe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((function (e) {
                    t[e] = null
                }))
            }
        }, {
            key: "_queueCallback", value: function (t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                pe(t, e, n)
            }
        }], [{
            key: "getInstance", value: function (t) {
                return je(ie(t), this.DATA_KEY)
            }
        }, {
            key: "getOrCreateInstance", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.getInstance(t) || new this(t, "object" === Kt(e) ? e : null)
            }
        }, {
            key: "VERSION", get: function () {
                return "5.1.1"
            }
        }, {
            key: "NAME", get: function () {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.".concat(this.NAME)
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return ".".concat(this.DATA_KEY)
            }
        }]), t
    }(), Re = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hide",
            n = "click.dismiss".concat(t.EVENT_KEY), i = t.NAME;
        Pe.on(document, n, '[data-bs-dismiss="'.concat(i, '"]'), (function (n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), !ae(this)) {
                var r = Zt(this) || this.closest(".".concat(i));
                t.getOrCreateInstance(r)[e]()
            }
        }))
    }, Fe = ".".concat("bs.alert"), Be = "close".concat(Fe), We = "closed".concat(Fe), ze = function (t) {
        Bt(n, t);
        var e = zt(n);

        function n() {
            return qt(this, n), e.apply(this, arguments)
        }

        return $t(n, [{
            key: "close", value: function () {
                var t = this;
                if (!Pe.trigger(this._element, Be).defaultPrevented) {
                    this._element.classList.remove("show");
                    var e = this._element.classList.contains("fade");
                    this._queueCallback((function () {
                        return t._destroyElement()
                    }), this._element, e)
                }
            }
        }, {
            key: "_destroyElement", value: function () {
                this._element.remove(), Pe.trigger(this._element, We), this.dispose()
            }
        }], [{
            key: "NAME", get: function () {
                return "alert"
            }
        }, {
            key: "jQueryInterface", value: function (t) {
                return this.each((function () {
                    var e = n.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                        e[t](this)
                    }
                }))
            }
        }]), n
    }(Ne);
    Re(ze, "close"), he(ze);
    var He = ".".concat("bs.button"), Ve = "click".concat(He).concat(".data-api"), qe = function (t) {
        Bt(n, t);
        var e = zt(n);

        function n() {
            return qt(this, n), e.apply(this, arguments)
        }

        return $t(n, [{
            key: "toggle", value: function () {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
        }], [{
            key: "NAME", get: function () {
                return "button"
            }
        }, {
            key: "jQueryInterface", value: function (t) {
                return this.each((function () {
                    var e = n.getOrCreateInstance(this);
                    "toggle" === t && e[t]()
                }))
            }
        }]), n
    }(Ne);

    function Ue(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function $e(t) {
        return t.replace(/[A-Z]/g, (function (t) {
            return "-".concat(t.toLowerCase())
        }))
    }

    Pe.on(document, Ve, '[data-bs-toggle="button"]', (function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]');
        qe.getOrCreateInstance(e).toggle()
    })), he(qe);
    var Ye = {
            setDataAttribute: function (t, e, n) {
                t.setAttribute("data-bs-".concat($e(e)), n)
            }, removeDataAttribute: function (t, e) {
                t.removeAttribute("data-bs-".concat($e(e)))
            }, getDataAttributes: function (t) {
                if (!t) return {};
                var e = {};
                return Object.keys(t.dataset).filter((function (t) {
                    return t.startsWith("bs")
                })).forEach((function (n) {
                    var i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = Ue(t.dataset[n])
                })), e
            }, getDataAttribute: function (t, e) {
                return Ue(t.getAttribute("data-bs-".concat($e(e))))
            }, offset: function (t) {
                var e = t.getBoundingClientRect();
                return {top: e.top + window.pageYOffset, left: e.left + window.pageXOffset}
            }, position: function (t) {
                return {top: t.offsetTop, left: t.offsetLeft}
            }
        }, Xe = {
            find: function (t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                return (e = []).concat.apply(e, Ft(Element.prototype.querySelectorAll.call(n, t)))
            }, findOne: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.documentElement;
                return Element.prototype.querySelector.call(e, t)
            }, children: function (t, e) {
                var n;
                return (n = []).concat.apply(n, Ft(t.children)).filter((function (t) {
                    return t.matches(e)
                }))
            }, parents: function (t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
                return n
            }, prev: function (t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            }, next: function (t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }, focusableChildren: function (t) {
                var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((function (t) {
                    return "".concat(t, ':not([tabindex^="-"])')
                })).join(", ");
                return this.find(e, t).filter((function (t) {
                    return !ae(t) && oe(t)
                }))
            }
        }, Ge = ".".concat("bs.carousel"),
        Ke = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, Qe = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, Je = "next", Ze = "prev", tn = "left", en = "right",
        nn = (Rt(Ct = {}, "ArrowLeft", en), Rt(Ct, "ArrowRight", tn), Ct), rn = "slide".concat(Ge),
        on = "slid".concat(Ge), an = "keydown".concat(Ge), sn = "mouseenter".concat(Ge), un = "mouseleave".concat(Ge),
        cn = "touchstart".concat(Ge), ln = "touchmove".concat(Ge), fn = "touchend".concat(Ge),
        hn = "pointerdown".concat(Ge), dn = "pointerup".concat(Ge), pn = "dragstart".concat(Ge),
        vn = "load".concat(Ge).concat(".data-api"), gn = "click".concat(Ge).concat(".data-api"), yn = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._items = null, r._interval = null, r._activeElement = null, r._isPaused = !1, r._isSliding = !1, r.touchTimeout = null, r.touchStartX = 0, r.touchDeltaX = 0, r._config = r._getConfig(i), r._indicatorsElement = Xe.findOne(".carousel-indicators", r._element), r._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, r._pointerEvent = Boolean(window.PointerEvent), r._addEventListeners(), r
            }

            return $t(n, [{
                key: "next", value: function () {
                    this._slide(Je)
                }
            }, {
                key: "nextWhenVisible", value: function () {
                    !document.hidden && oe(this._element) && this.next()
                }
            }, {
                key: "prev", value: function () {
                    this._slide(Ze)
                }
            }, {
                key: "pause", value: function (t) {
                    t || (this._isPaused = !0), Xe.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (ee(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }
            }, {
                key: "cycle", value: function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
            }, {
                key: "to", value: function (t) {
                    var e = this;
                    this._activeElement = Xe.findOne(".active.carousel-item", this._element);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) Pe.one(this._element, on, (function () {
                        return e.to(t)
                    })); else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? Je : Ze;
                        this._slide(i, this._items[t])
                    }
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return t = Nt(Nt(Nt({}, Ke), Ye.getDataAttributes(this._element)), "object" === Kt(t) ? t : {}), re("carousel", t, Qe), t
                }
            }, {
                key: "_handleSwipe", value: function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e && this._slide(e > 0 ? en : tn)
                    }
                }
            }, {
                key: "_addEventListeners", value: function () {
                    var t = this;
                    this._config.keyboard && Pe.on(this._element, an, (function (e) {
                        return t._keydown(e)
                    })), "hover" === this._config.pause && (Pe.on(this._element, sn, (function (e) {
                        return t.pause(e)
                    })), Pe.on(this._element, un, (function (e) {
                        return t.cycle(e)
                    }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                }
            }, {
                key: "_addTouchEventListeners", value: function () {
                    var t = this, e = function (e) {
                        return t._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType)
                    }, n = function (n) {
                        e(n) ? t.touchStartX = n.clientX : t._pointerEvent || (t.touchStartX = n.touches[0].clientX)
                    }, i = function (n) {
                        e(n) && (t.touchDeltaX = n.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                    Xe.find(".carousel-item img", this._element).forEach((function (t) {
                        Pe.on(t, pn, (function (t) {
                            return t.preventDefault()
                        }))
                    })), this._pointerEvent ? (Pe.on(this._element, hn, (function (t) {
                        return n(t)
                    })), Pe.on(this._element, dn, (function (t) {
                        return i(t)
                    })), this._element.classList.add("pointer-event")) : (Pe.on(this._element, cn, (function (t) {
                        return n(t)
                    })), Pe.on(this._element, ln, (function (e) {
                        return function (e) {
                            t.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - t.touchStartX
                        }(e)
                    })), Pe.on(this._element, fn, (function (t) {
                        return i(t)
                    })))
                }
            }, {
                key: "_keydown", value: function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        var e = nn[t.key];
                        e && (t.preventDefault(), this._slide(e))
                    }
                }
            }, {
                key: "_getItemIndex", value: function (t) {
                    return this._items = t && t.parentNode ? Xe.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
                }
            }, {
                key: "_getItemByOrder", value: function (t, e) {
                    var n = t === Je;
                    return ve(this._items, e, n, this._config.wrap)
                }
            }, {
                key: "_triggerSlideEvent", value: function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(Xe.findOne(".active.carousel-item", this._element));
                    return Pe.trigger(this._element, rn, {relatedTarget: t, direction: e, from: i, to: n})
                }
            }, {
                key: "_setActiveIndicatorElement", value: function (t) {
                    if (this._indicatorsElement) {
                        var e = Xe.findOne(".active", this._indicatorsElement);
                        e.classList.remove("active"), e.removeAttribute("aria-current");
                        for (var n = Xe.find("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++) if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                            n[i].classList.add("active"), n[i].setAttribute("aria-current", "true");
                            break
                        }
                    }
                }
            }, {
                key: "_updateInterval", value: function () {
                    var t = this._activeElement || Xe.findOne(".active.carousel-item", this._element);
                    if (t) {
                        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                }
            }, {
                key: "_slide", value: function (t, e) {
                    var n = this, i = this._directionToOrder(t), r = Xe.findOne(".active.carousel-item", this._element),
                        o = this._getItemIndex(r), a = e || this._getItemByOrder(i, r), s = this._getItemIndex(a),
                        u = Boolean(this._interval), c = i === Je, l = c ? "carousel-item-start" : "carousel-item-end",
                        f = c ? "carousel-item-next" : "carousel-item-prev", h = this._orderToDirection(i);
                    if (a && a.classList.contains("active")) this._isSliding = !1; else if (!this._isSliding && !this._triggerSlideEvent(a, h).defaultPrevented && r && a) {
                        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(a), this._activeElement = a;
                        var d = function () {
                            Pe.trigger(n._element, on, {relatedTarget: a, direction: h, from: o, to: s})
                        };
                        if (this._element.classList.contains("slide")) {
                            a.classList.add(f), ue(a), r.classList.add(l), a.classList.add(l);
                            this._queueCallback((function () {
                                a.classList.remove(l, f), a.classList.add("active"), r.classList.remove("active", f, l), n._isSliding = !1, setTimeout(d, 0)
                            }), r, !0)
                        } else r.classList.remove("active"), a.classList.add("active"), this._isSliding = !1, d();
                        u && this.cycle()
                    }
                }
            }, {
                key: "_directionToOrder", value: function (t) {
                    return [en, tn].includes(t) ? fe() ? t === tn ? Ze : Je : t === tn ? Je : Ze : t
                }
            }, {
                key: "_orderToDirection", value: function (t) {
                    return [Je, Ze].includes(t) ? fe() ? t === Ze ? tn : en : t === Ze ? en : tn : t
                }
            }], [{
                key: "Default", get: function () {
                    return Ke
                }
            }, {
                key: "NAME", get: function () {
                    return "carousel"
                }
            }, {
                key: "carouselInterface", value: function (t, e) {
                    var i = n.getOrCreateInstance(t, e), r = i._config;
                    "object" === Kt(e) && (r = Nt(Nt({}, r), e));
                    var o = "string" == typeof e ? e : r.slide;
                    if ("number" == typeof e) i.to(e); else if ("string" == typeof o) {
                        if (void 0 === i[o]) throw new TypeError('No method named "'.concat(o, '"'));
                        i[o]()
                    } else r.interval && r.ride && (i.pause(), i.cycle())
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        n.carouselInterface(this, t)
                    }))
                }
            }, {
                key: "dataApiClickHandler", value: function (t) {
                    var e = Zt(this);
                    if (e && e.classList.contains("carousel")) {
                        var i = Nt(Nt({}, Ye.getDataAttributes(e)), Ye.getDataAttributes(this)),
                            r = this.getAttribute("data-bs-slide-to");
                        r && (i.interval = !1), n.carouselInterface(e, i), r && n.getInstance(e).to(r), t.preventDefault()
                    }
                }
            }]), n
        }(Ne);
    Pe.on(document, gn, "[data-bs-slide], [data-bs-slide-to]", yn.dataApiClickHandler), Pe.on(window, vn, (function () {
        for (var t = Xe.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) yn.carouselInterface(t[e], yn.getInstance(t[e]))
    })), he(yn);
    var mn = ".".concat("bs.collapse"), bn = {toggle: !0, parent: null},
        _n = {toggle: "boolean", parent: "(null|element)"}, xn = "show".concat(mn), wn = "shown".concat(mn),
        kn = "hide".concat(mn), Sn = "hidden".concat(mn), En = "click".concat(mn).concat(".data-api"),
        On = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                qt(this, n), (r = e.call(this, t))._isTransitioning = !1, r._config = r._getConfig(i), r._triggerArray = [];
                for (var o = Xe.find('[data-bs-toggle="collapse"]'), a = 0, s = o.length; a < s; a++) {
                    var u = o[a], c = Jt(u), l = Xe.find(c).filter((function (t) {
                        return t === r._element
                    }));
                    null !== c && l.length && (r._selector = c, r._triggerArray.push(u))
                }
                return r._initializeChildren(), r._config.parent || r._addAriaAndCollapsedClass(r._triggerArray, r._isShown()), r._config.toggle && r.toggle(), r
            }

            return $t(n, [{
                key: "toggle", value: function () {
                    this._isShown() ? this.hide() : this.show()
                }
            }, {
                key: "show", value: function () {
                    var t = this;
                    if (!this._isTransitioning && !this._isShown()) {
                        var e, i = [];
                        if (this._config.parent) {
                            var r = Xe.find(".".concat("collapse", " .").concat("collapse"), this._config.parent);
                            i = Xe.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((function (t) {
                                return !r.includes(t)
                            }))
                        }
                        var o = Xe.findOne(this._selector);
                        if (i.length) {
                            var a = i.find((function (t) {
                                return o !== t
                            }));
                            if ((e = a ? n.getInstance(a) : null) && e._isTransitioning) return
                        }
                        if (!Pe.trigger(this._element, xn).defaultPrevented) {
                            i.forEach((function (t) {
                                o !== t && n.getOrCreateInstance(t, {toggle: !1}).hide(), e || Le(t, "bs.collapse", null)
                            }));
                            var s = this._getDimension();
                            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                            var u = s[0].toUpperCase() + s.slice(1), c = "scroll".concat(u);
                            this._queueCallback((function () {
                                t._isTransitioning = !1, t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[s] = "", Pe.trigger(t._element, wn)
                            }), this._element, !0), this._element.style[s] = "".concat(this._element[c], "px")
                        }
                    }
                }
            }, {
                key: "hide", value: function () {
                    var t = this;
                    if (!this._isTransitioning && this._isShown() && !Pe.trigger(this._element, kn).defaultPrevented) {
                        var e = this._getDimension();
                        this._element.style[e] = "".concat(this._element.getBoundingClientRect()[e], "px"), ue(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                        for (var n = this._triggerArray.length, i = 0; i < n; i++) {
                            var r = this._triggerArray[i], o = Zt(r);
                            o && !this._isShown(o) && this._addAriaAndCollapsedClass([r], !1)
                        }
                        this._isTransitioning = !0;
                        this._element.style[e] = "", this._queueCallback((function () {
                            t._isTransitioning = !1, t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), Pe.trigger(t._element, Sn)
                        }), this._element, !0)
                    }
                }
            }, {
                key: "_isShown", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._element;
                    return t.classList.contains("show")
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return (t = Nt(Nt(Nt({}, bn), Ye.getDataAttributes(this._element)), t)).toggle = Boolean(t.toggle), t.parent = ie(t.parent), re("collapse", t, _n), t
                }
            }, {
                key: "_getDimension", value: function () {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
            }, {
                key: "_initializeChildren", value: function () {
                    var t = this;
                    if (this._config.parent) {
                        var e = Xe.find(".".concat("collapse", " .").concat("collapse"), this._config.parent);
                        Xe.find('[data-bs-toggle="collapse"]', this._config.parent).filter((function (t) {
                            return !e.includes(t)
                        })).forEach((function (e) {
                            var n = Zt(e);
                            n && t._addAriaAndCollapsedClass([e], t._isShown(n))
                        }))
                    }
                }
            }, {
                key: "_addAriaAndCollapsedClass", value: function (t, e) {
                    t.length && t.forEach((function (t) {
                        e ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", e)
                    }))
                }
            }], [{
                key: "Default", get: function () {
                    return bn
                }
            }, {
                key: "NAME", get: function () {
                    return "collapse"
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = {};
                        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                        var i = n.getOrCreateInstance(this, e);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            i[t]()
                        }
                    }))
                }
            }]), n
        }(Ne);
    Pe.on(document, En, '[data-bs-toggle="collapse"]', (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        var e = Jt(this);
        Xe.find(e).forEach((function (t) {
            On.getOrCreateInstance(t, {toggle: !1}).toggle()
        }))
    })), he(On);
    var Mn = ".".concat("bs.dropdown"),
        Tn = new RegExp("".concat("ArrowUp", "|").concat("ArrowDown", "|").concat("Escape")), An = "hide".concat(Mn),
        Cn = "hidden".concat(Mn), Pn = "show".concat(Mn), Dn = "shown".concat(Mn),
        Ln = "click".concat(Mn).concat(".data-api"), jn = "keydown".concat(Mn).concat(".data-api"),
        In = "keyup".concat(Mn).concat(".data-api"), Nn = fe() ? "top-end" : "top-start",
        Rn = fe() ? "top-start" : "top-end", Fn = fe() ? "bottom-end" : "bottom-start",
        Bn = fe() ? "bottom-start" : "bottom-end", Wn = fe() ? "left-start" : "right-start",
        zn = fe() ? "right-start" : "left-start", Hn = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        }, Vn = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        }, qn = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._popper = null, r._config = r._getConfig(i), r._menu = r._getMenuElement(), r._inNavbar = r._detectNavbar(), r
            }

            return $t(n, [{
                key: "toggle", value: function () {
                    return this._isShown() ? this.hide() : this.show()
                }
            }, {
                key: "show", value: function () {
                    if (!ae(this._element) && !this._isShown(this._menu)) {
                        var t = {relatedTarget: this._element};
                        if (!Pe.trigger(this._element, Pn, t).defaultPrevented) {
                            var e, i = n.getParentFromElement(this._element);
                            if (this._inNavbar ? Ye.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(".navbar-nav")) (e = []).concat.apply(e, Ft(document.body.children)).forEach((function (t) {
                                return Pe.on(t, "mouseover", se)
                            }));
                            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add("show"), this._element.classList.add("show"), Pe.trigger(this._element, Dn, t)
                        }
                    }
                }
            }, {
                key: "hide", value: function () {
                    if (!ae(this._element) && this._isShown(this._menu)) {
                        var t = {relatedTarget: this._element};
                        this._completeHide(t)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    this._popper && this._popper.destroy(), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "update", value: function () {
                    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                }
            }, {
                key: "_completeHide", value: function (t) {
                    if (!Pe.trigger(this._element, An, t).defaultPrevented) {
                        var e;
                        if ("ontouchstart" in document.documentElement) (e = []).concat.apply(e, Ft(document.body.children)).forEach((function (t) {
                            return Pe.off(t, "mouseover", se)
                        }));
                        this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Ye.removeDataAttribute(this._menu, "popper"), Pe.trigger(this._element, Cn, t)
                    }
                }
            }, {
                key: "_getConfig", value: function (t) {
                    if (t = Nt(Nt(Nt({}, this.constructor.Default), Ye.getDataAttributes(this._element)), t), re("dropdown", t, this.constructor.DefaultType), "object" === Kt(t.reference) && !ne(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat("dropdown".toUpperCase(), ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'));
                    return t
                }
            }, {
                key: "_createPopper", value: function (t) {
                    if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    var e = this._element;
                    "parent" === this._config.reference ? e = t : ne(this._config.reference) ? e = ie(this._config.reference) : "object" === Kt(this._config.reference) && (e = this._config.reference);
                    var n = this._getPopperConfig(), r = n.modifiers.find((function (t) {
                        return "applyStyles" === t.name && !1 === t.enabled
                    }));
                    this._popper = Dt(e, this._menu, n), r && Ye.setDataAttribute(this._menu, "popper", "static")
                }
            }, {
                key: "_isShown", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._element;
                    return t.classList.contains("show")
                }
            }, {
                key: "_getMenuElement", value: function () {
                    return Xe.next(this._element, ".dropdown-menu")[0]
                }
            }, {
                key: "_getPlacement", value: function () {
                    var t = this._element.parentNode;
                    if (t.classList.contains("dropend")) return Wn;
                    if (t.classList.contains("dropstart")) return zn;
                    var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return t.classList.contains("dropup") ? e ? Rn : Nn : e ? Bn : Fn
                }
            }, {
                key: "_detectNavbar", value: function () {
                    return null !== this._element.closest(".".concat("navbar"))
                }
            }, {
                key: "_getOffset", value: function () {
                    var t = this, e = this._config.offset;
                    return "string" == typeof e ? e.split(",").map((function (t) {
                        return Number.parseInt(t, 10)
                    })) : "function" == typeof e ? function (n) {
                        return e(n, t._element)
                    } : e
                }
            }, {
                key: "_getPopperConfig", value: function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                            name: "offset",
                            options: {offset: this._getOffset()}
                        }]
                    };
                    return "static" === this._config.display && (t.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]), Nt(Nt({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
                }
            }, {
                key: "_selectMenuItem", value: function (t) {
                    var e = t.key, n = t.target,
                        i = Xe.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(oe);
                    i.length && ve(i, n, "ArrowDown" === e, !i.includes(n)).focus()
                }
            }], [{
                key: "Default", get: function () {
                    return Hn
                }
            }, {
                key: "DefaultType", get: function () {
                    return Vn
                }
            }, {
                key: "NAME", get: function () {
                    return "dropdown"
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    }))
                }
            }, {
                key: "clearMenus", value: function (t) {
                    if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = Xe.find('[data-bs-toggle="dropdown"]'), i = 0, r = e.length; i < r; i++) {
                        var o = n.getInstance(e[i]);
                        if (o && !1 !== o._config.autoClose && o._isShown()) {
                            var a = {relatedTarget: o._element};
                            if (t) {
                                var s = t.composedPath(), u = s.includes(o._menu);
                                if (s.includes(o._element) || "inside" === o._config.autoClose && !u || "outside" === o._config.autoClose && u) continue;
                                if (o._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                                "click" === t.type && (a.clickEvent = t)
                            }
                            o._completeHide(a)
                        }
                    }
                }
            }, {
                key: "getParentFromElement", value: function (t) {
                    return Zt(t) || t.parentNode
                }
            }, {
                key: "dataApiKeydownHandler", value: function (t) {
                    if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !Tn.test(t.key))) {
                        var e = this.classList.contains("show");
                        if ((e || "Escape" !== t.key) && (t.preventDefault(), t.stopPropagation(), !ae(this))) {
                            var i = this.matches('[data-bs-toggle="dropdown"]') ? this : Xe.prev(this, '[data-bs-toggle="dropdown"]')[0],
                                r = n.getOrCreateInstance(i);
                            if ("Escape" !== t.key) return "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || r.show(), void r._selectMenuItem(t)) : void (e && "Space" !== t.key || n.clearMenus());
                            r.hide()
                        }
                    }
                }
            }]), n
        }(Ne);
    Pe.on(document, jn, '[data-bs-toggle="dropdown"]', qn.dataApiKeydownHandler), Pe.on(document, jn, ".dropdown-menu", qn.dataApiKeydownHandler), Pe.on(document, Ln, qn.clearMenus), Pe.on(document, In, qn.clearMenus), Pe.on(document, Ln, '[data-bs-toggle="dropdown"]', (function (t) {
        t.preventDefault(), qn.getOrCreateInstance(this).toggle()
    })), he(qn);
    var Un = function () {
            function t() {
                qt(this, t), this._element = document.body
            }

            return $t(t, [{
                key: "getWidth", value: function () {
                    var t = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - t)
                }
            }, {
                key: "hide", value: function () {
                    var t = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (function (e) {
                        return e + t
                    })), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (function (e) {
                        return e + t
                    })), this._setElementAttributes(".sticky-top", "marginRight", (function (e) {
                        return e - t
                    }))
                }
            }, {
                key: "_disableOverFlow", value: function () {
                    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                }
            }, {
                key: "_setElementAttributes", value: function (t, e, n) {
                    var i = this, r = this.getWidth();
                    this._applyManipulationCallback(t, (function (t) {
                        if (!(t !== i._element && window.innerWidth > t.clientWidth + r)) {
                            i._saveInitialAttribute(t, e);
                            var o = window.getComputedStyle(t)[e];
                            t.style[e] = "".concat(n(Number.parseFloat(o)), "px")
                        }
                    }))
                }
            }, {
                key: "reset", value: function () {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight")
                }
            }, {
                key: "_saveInitialAttribute", value: function (t, e) {
                    var n = t.style[e];
                    n && Ye.setDataAttribute(t, e, n)
                }
            }, {
                key: "_resetElementAttributes", value: function (t, e) {
                    this._applyManipulationCallback(t, (function (t) {
                        var n = Ye.getDataAttribute(t, e);
                        void 0 === n ? t.style.removeProperty(e) : (Ye.removeDataAttribute(t, e), t.style[e] = n)
                    }))
                }
            }, {
                key: "_applyManipulationCallback", value: function (t, e) {
                    ne(t) ? e(t) : Xe.find(t, this._element).forEach(e)
                }
            }, {
                key: "isOverflowing", value: function () {
                    return this.getWidth() > 0
                }
            }]), t
        }(), $n = {className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null},
        Yn = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        }, Xn = "mousedown.bs.".concat("backdrop"), Gn = function () {
            function t(e) {
                qt(this, t), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
            }

            return $t(t, [{
                key: "show", value: function (t) {
                    this._config.isVisible ? (this._append(), this._config.isAnimated && ue(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation((function () {
                        de(t)
                    }))) : de(t)
                }
            }, {
                key: "hide", value: function (t) {
                    var e = this;
                    this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation((function () {
                        e.dispose(), de(t)
                    }))) : de(t)
                }
            }, {
                key: "_getElement", value: function () {
                    if (!this._element) {
                        var t = document.createElement("div");
                        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                    }
                    return this._element
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return (t = Nt(Nt({}, $n), "object" === Kt(t) ? t : {})).rootElement = ie(t.rootElement), re("backdrop", t, Yn), t
                }
            }, {
                key: "_append", value: function () {
                    var t = this;
                    this._isAppended || (this._config.rootElement.append(this._getElement()), Pe.on(this._getElement(), Xn, (function () {
                        de(t._config.clickCallback)
                    })), this._isAppended = !0)
                }
            }, {
                key: "dispose", value: function () {
                    this._isAppended && (Pe.off(this._element, Xn), this._element.remove(), this._isAppended = !1)
                }
            }, {
                key: "_emulateAnimation", value: function (t) {
                    pe(t, this._getElement(), this._config.isAnimated)
                }
            }]), t
        }(), Kn = {trapElement: null, autofocus: !0}, Qn = {trapElement: "element", autofocus: "boolean"},
        Jn = ".".concat("bs.focustrap"), Zn = "focusin".concat(Jn), ti = "keydown.tab".concat(Jn), ei = function () {
            function t(e) {
                qt(this, t), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
            }

            return $t(t, [{
                key: "activate", value: function () {
                    var t = this, e = this._config, n = e.trapElement, i = e.autofocus;
                    this._isActive || (i && n.focus(), Pe.off(document, Jn), Pe.on(document, Zn, (function (e) {
                        return t._handleFocusin(e)
                    })), Pe.on(document, ti, (function (e) {
                        return t._handleKeydown(e)
                    })), this._isActive = !0)
                }
            }, {
                key: "deactivate", value: function () {
                    this._isActive && (this._isActive = !1, Pe.off(document, Jn))
                }
            }, {
                key: "_handleFocusin", value: function (t) {
                    var e = t.target, n = this._config.trapElement;
                    if (e !== document && e !== n && !n.contains(e)) {
                        var i = Xe.focusableChildren(n);
                        0 === i.length ? n.focus() : "backward" === this._lastTabNavDirection ? i[i.length - 1].focus() : i[0].focus()
                    }
                }
            }, {
                key: "_handleKeydown", value: function (t) {
                    "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? "backward" : "forward")
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return t = Nt(Nt({}, Kn), "object" === Kt(t) ? t : {}), /*re("focustrap", t, Qn),*/ t
                }
            }]), t
        }(), ni = ".".concat("bs.modal"), ii = {backdrop: !0, keyboard: !0, focus: !0},
        ri = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"}, oi = "hide".concat(ni),
        ai = "hidePrevented".concat(ni), si = "hidden".concat(ni), ui = "show".concat(ni), ci = "shown".concat(ni),
        li = "resize".concat(ni), fi = "click.dismiss".concat(ni), hi = "keydown.dismiss".concat(ni),
        di = "mouseup.dismiss".concat(ni), pi = "mousedown.dismiss".concat(ni),
        vi = "click".concat(ni).concat(".data-api"), gi = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._config = r._getConfig(i), r._dialog = Xe.findOne(".modal-dialog", r._element), r._backdrop = r._initializeBackDrop(), r._focustrap = r._initializeFocusTrap(), r._isShown = !1, r._ignoreBackdropClick = !1, r._isTransitioning = !1, r._scrollBar = new Un, r
            }

            return $t(n, [{
                key: "toggle", value: function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }
            }, {
                key: "show", value: function (t) {
                    var e = this;
                    this._isShown || this._isTransitioning || (Pe.trigger(this._element, ui, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Pe.on(this._dialog, pi, (function () {
                        Pe.one(e._element, di, (function (t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function () {
                        return e._showElement(t)
                    }))))
                }
            }, {
                key: "hide", value: function () {
                    var t = this;
                    if (this._isShown && !this._isTransitioning && !Pe.trigger(this._element, oi).defaultPrevented) {
                        this._isShown = !1;
                        var e = this._isAnimated();
                        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), Pe.off(this._element, fi), Pe.off(this._dialog, pi), this._queueCallback((function () {
                            return t._hideModal()
                        }), this._element, e)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    [window, this._dialog].forEach((function (t) {
                        return Pe.off(t, ni)
                    })), this._backdrop.dispose(), this._focustrap.deactivate(), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "handleUpdate", value: function () {
                    this._adjustDialog()
                }
            }, {
                key: "_initializeBackDrop", value: function () {
                    return new Gn({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
                }
            }, {
                key: "_initializeFocusTrap", value: function () {
                    return new ei({trapElement: this._element})
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return t = Nt(Nt(Nt({}, ii), Ye.getDataAttributes(this._element)), "object" === Kt(t) ? t : {}), re("modal", t, ri), t
                }
            }, {
                key: "_showElement", value: function (t) {
                    var e = this, n = this._isAnimated(), i = Xe.findOne(".modal-body", this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && ue(this._element), this._element.classList.add("show");
                    this._queueCallback((function () {
                        e._config.focus && e._focustrap.activate(), e._isTransitioning = !1, Pe.trigger(e._element, ci, {relatedTarget: t})
                    }), this._dialog, n)
                }
            }, {
                key: "_setEscapeEvent", value: function () {
                    var t = this;
                    this._isShown ? Pe.on(this._element, hi, (function (e) {
                        t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                    })) : Pe.off(this._element, hi)
                }
            }, {
                key: "_setResizeEvent", value: function () {
                    var t = this;
                    this._isShown ? Pe.on(window, li, (function () {
                        return t._adjustDialog()
                    })) : Pe.off(window, li)
                }
            }, {
                key: "_hideModal", value: function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((function () {
                        document.body.classList.remove("modal-open"), t._resetAdjustments(), t._scrollBar.reset(), Pe.trigger(t._element, si)
                    }))
                }
            }, {
                key: "_showBackdrop", value: function (t) {
                    var e = this;
                    Pe.on(this._element, fi, (function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === e._config.backdrop ? e.hide() : "static" === e._config.backdrop && e._triggerBackdropTransition())
                    })), this._backdrop.show(t)
                }
            }, {
                key: "_isAnimated", value: function () {
                    return true
                   /* return this._element.classList.contains("fade")*/
                }
            }, {
                key: "_triggerBackdropTransition", value: function () {
                    var t = this;
                    if (!Pe.trigger(this._element, ai).defaultPrevented) {
                        var e = this._element, n = e.classList, i = e.scrollHeight, r = e.style,
                            o = i > document.documentElement.clientHeight;
                        !o && "hidden" === r.overflowY || n.contains("modal-static") || (o || (r.overflowY = "hidden"), n.add("modal-static"), this._queueCallback((function () {
                            n.remove("modal-static"), o || t._queueCallback((function () {
                                r.overflowY = ""
                            }), t._dialog)
                        }), this._dialog), this._element.focus())
                    }
                }
            }, {
                key: "_adjustDialog", value: function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight,
                        e = this._scrollBar.getWidth(), n = e > 0;
                    (!n && t && !fe() || n && !t && fe()) && (this._element.style.paddingLeft = "".concat(e, "px")), (n && !t && !fe() || !n && t && fe()) && (this._element.style.paddingRight = "".concat(e, "px"))
                }
            }, {
                key: "_resetAdjustments", value: function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }
            }], [{
                key: "Default", get: function () {
                    return ii
                }
            }, {
                key: "NAME", get: function () {
                    return "modal"
                }
            }, {
                key: "jQueryInterface", value: function (t, e) {
                    return this.each((function () {
                        var i = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === i[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            i[t](e)
                        }
                    }))
                }
            }]), n
        }(Ne);
    Pe.on(document, vi, '[data-bs-toggle="modal"]', (function (t) {
        var e = this, n = Zt(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Pe.one(n, ui, (function (t) {
            t.defaultPrevented || Pe.one(n, si, (function () {
                oe(e) && e.focus()
            }))
        }));
        var i = Xe.findOne(".modal.show");
        i && gi.getInstance(i).hide(), gi.getOrCreateInstance(n).toggle(this)
    })), Re(gi), he(gi);
    var yi = ".".concat("bs.offcanvas"), mi = "load".concat(yi).concat(".data-api"),
        bi = {backdrop: !0, keyboard: !0, scroll: !1},
        _i = {backdrop: "boolean", keyboard: "boolean", scroll: "boolean"}, xi = "show".concat(yi),
        wi = "shown".concat(yi), ki = "hide".concat(yi), Si = "hidden".concat(yi),
        Ei = "click".concat(yi).concat(".data-api"), Oi = "keydown.dismiss".concat(yi), Mi = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._config = r._getConfig(i), r._isShown = !1, r._backdrop = r._initializeBackDrop(), r._focustrap = r._initializeFocusTrap(), r._addEventListeners(), r
            }

            return $t(n, [{
                key: "toggle", value: function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }
            }, {
                key: "show", value: function (t) {
                    var e = this;
                    if (!this._isShown && !Pe.trigger(this._element, xi, {relatedTarget: t}).defaultPrevented) {
                        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Un).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show");
                        this._queueCallback((function () {
                            e._config.scroll || e._focustrap.activate(), Pe.trigger(e._element, wi, {relatedTarget: t})
                        }), this._element, !0)
                    }
                }
            }, {
                key: "hide", value: function () {
                    var t = this;
                    if (this._isShown && !Pe.trigger(this._element, ki).defaultPrevented) {
                        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide();
                        this._queueCallback((function () {
                            t._element.setAttribute("aria-hidden", !0), t._element.removeAttribute("aria-modal"), t._element.removeAttribute("role"), t._element.style.visibility = "hidden", t._config.scroll || (new Un).reset(), Pe.trigger(t._element, Si)
                        }), this._element, !0)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    this._backdrop.dispose(), this._focustrap.deactivate(), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return t = Nt(Nt(Nt({}, bi), Ye.getDataAttributes(this._element)), "object" === Kt(t) ? t : {}), re("offcanvas", t, _i), t
                }
            }, {
                key: "_initializeBackDrop", value: function () {
                    var t = this;
                    return new Gn({
                        className: "offcanvas-backdrop",
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: function () {
                            return t.hide()
                        }
                    })
                }
            }, {
                key: "_initializeFocusTrap", value: function () {
                    return new ei({trapElement: this._element})
                }
            }, {
                key: "_addEventListeners", value: function () {
                    var t = this;
                    Pe.on(this._element, Oi, (function (e) {
                        t._config.keyboard && "Escape" === e.key && t.hide()
                    }))
                }
            }], [{
                key: "NAME", get: function () {
                    return "offcanvas"
                }
            }, {
                key: "Default", get: function () {
                    return bi
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](this)
                        }
                    }))
                }
            }]), n
        }(Ne);
    Pe.on(document, Ei, '[data-bs-toggle="offcanvas"]', (function (t) {
        var e = this, n = Zt(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !ae(this)) {
            Pe.one(n, Si, (function () {
                oe(e) && e.focus()
            }));
            var i = Xe.findOne(".offcanvas.show");
            i && i !== n && Mi.getInstance(i).hide(), Mi.getOrCreateInstance(n).toggle(this)
        }
    })), Pe.on(window, mi, (function () {
        return Xe.find(".offcanvas.show").forEach((function (t) {
            return Mi.getOrCreateInstance(t).show()
        }))
    })), Re(Mi), he(Mi);
    var Ti = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Ai = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        Ci = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Pi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Di(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var r = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), a = (i = []).concat.apply(i, Ft(r.body.querySelectorAll("*"))), s = function (t, n) {
            var i, r = a[t], s = r.nodeName.toLowerCase();
            if (!o.includes(s)) return r.remove(), "continue";
            var u = (i = []).concat.apply(i, Ft(r.attributes)), c = [].concat(e["*"] || [], e[s] || []);
            u.forEach((function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (e.includes(n)) return !Ti.has(n) || Boolean(Ai.test(t.nodeValue) || Ci.test(t.nodeValue));
                    for (var i = e.filter((function (t) {
                        return t instanceof RegExp
                    })), r = 0, o = i.length; r < o; r++) if (i[r].test(n)) return !0;
                    return !1
                })(t, c) || r.removeAttribute(t.nodeName)
            }))
        }, u = 0, c = a.length; u < c; u++) s(u);
        return r.body.innerHTML
    }

    var Li = ".".concat("bs.tooltip"), ji = new Set(["sanitize", "allowList", "sanitizeFn"]), Ii = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        }, Ni = {AUTO: "auto", TOP: "top", RIGHT: fe() ? "left" : "right", BOTTOM: "bottom", LEFT: fe() ? "right" : "left"},
        Ri = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: Pi,
            popperConfig: null
        }, Fi = {
            HIDE: "hide".concat(Li),
            HIDDEN: "hidden".concat(Li),
            SHOW: "show".concat(Li),
            SHOWN: "shown".concat(Li),
            INSERTED: "inserted".concat(Li),
            CLICK: "click".concat(Li),
            FOCUSIN: "focusin".concat(Li),
            FOCUSOUT: "focusout".concat(Li),
            MOUSEENTER: "mouseenter".concat(Li),
            MOUSELEAVE: "mouseleave".concat(Li)
        }, Bi = ".".concat("modal"), Wi = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, r) {
                var o;
                if (qt(this, n), void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (o = e.call(this, t))._isEnabled = !0, o._timeout = 0, o._hoverState = "", o._activeTrigger = {}, o._popper = null, o._config = o._getConfig(r), o.tip = null, o._setListeners(), o
            }

            return $t(n, [{
                key: "enable", value: function () {
                    this._isEnabled = !0
                }
            }, {
                key: "disable", value: function () {
                    this._isEnabled = !1
                }
            }, {
                key: "toggleEnabled", value: function () {
                    this._isEnabled = !this._isEnabled
                }
            }, {
                key: "toggle", value: function (t) {
                    if (this._isEnabled) if (t) {
                        var e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    clearTimeout(this._timeout), Pe.off(this._element.closest(Bi), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "show", value: function () {
                    var t = this;
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (this.isWithContent() && this._isEnabled) {
                        var e = Pe.trigger(this._element, this.constructor.Event.SHOW), n = function t(e) {
                                if (!document.documentElement.attachShadow) return null;
                                if ("function" == typeof e.getRootNode) {
                                    var n = e.getRootNode();
                                    return n instanceof ShadowRoot ? n : null
                                }
                                return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                            }(this._element),
                            i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                        if (!e.defaultPrevented && i) {
                            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(".tooltip-inner").innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                            var r = this.getTipElement(), o = function (t) {
                                do {
                                    t += Math.floor(1e6 * Math.random())
                                } while (document.getElementById(t));
                                return t
                            }(this.constructor.NAME);
                            r.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && r.classList.add("fade");
                            var a = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement,
                                s = this._getAttachment(a);
                            this._addAttachmentClass(s);
                            var u = this._config.container;
                            Le(r, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (u.append(r), Pe.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Dt(this._element, r, this._getPopperConfig(s)), r.classList.add("show");
                            var c, l, f = this._resolvePossibleFunction(this._config.customClass);
                            if (f) (c = r.classList).add.apply(c, Ft(f.split(" ")));
                            if ("ontouchstart" in document.documentElement) (l = []).concat.apply(l, Ft(document.body.children)).forEach((function (t) {
                                Pe.on(t, "mouseover", se)
                            }));
                            var h = this.tip.classList.contains("fade");
                            this._queueCallback((function () {
                                var e = t._hoverState;
                                t._hoverState = null, Pe.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                            }), this.tip, h)
                        }
                    }
                }
            }, {
                key: "hide", value: function () {
                    var t = this;
                    if (this._popper) {
                        var e = this.getTipElement();
                        if (!Pe.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                            var n;
                            if (e.classList.remove("show"), "ontouchstart" in document.documentElement) (n = []).concat.apply(n, Ft(document.body.children)).forEach((function (t) {
                                return Pe.off(t, "mouseover", se)
                            }));
                            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                            var i = this.tip.classList.contains("fade");
                            this._queueCallback((function () {
                                t._isWithActiveTrigger() || ("show" !== t._hoverState && e.remove(), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), Pe.trigger(t._element, t.constructor.Event.HIDDEN), t._disposePopper())
                            }), this.tip, i), this._hoverState = ""
                        }
                    }
                }
            }, {
                key: "update", value: function () {
                    null !== this._popper && this._popper.update()
                }
            }, {
                key: "isWithContent", value: function () {
                    return Boolean(this.getTitle())
                }
            }, {
                key: "getTipElement", value: function () {
                    if (this.tip) return this.tip;
                    var t = document.createElement("div");
                    t.innerHTML = this._config.template;
                    var e = t.children[0];
                    return this.setContent(e), e.classList.remove("fade", "show"), this.tip = e, this.tip
                }
            }, {
                key: "setContent", value: function (t) {
                    this._sanitizeAndSetContent(t, this.getTitle(), ".tooltip-inner")
                }
            }, {
                key: "_sanitizeAndSetContent", value: function (t, e, n) {
                    var i = Xe.findOne(n, t);
                    e || !i ? this.setElementContent(i, e) : i.remove()
                }
            }, {
                key: "setElementContent", value: function (t, e) {
                    if (null !== t) return ne(e) ? (e = ie(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Di(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
                }
            }, {
                key: "getTitle", value: function () {
                    var t = this._element.getAttribute("data-bs-original-title") || this._config.title;
                    return this._resolvePossibleFunction(t)
                }
            }, {
                key: "updateAttachment", value: function (t) {
                    return "right" === t ? "end" : "left" === t ? "start" : t
                }
            }, {
                key: "_initializeOnDelegatedTarget", value: function (t, e) {
                    return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
                }
            }, {
                key: "_getOffset", value: function () {
                    var t = this, e = this._config.offset;
                    return "string" == typeof e ? e.split(",").map((function (t) {
                        return Number.parseInt(t, 10)
                    })) : "function" == typeof e ? function (n) {
                        return e(n, t._element)
                    } : e
                }
            }, {
                key: "_resolvePossibleFunction", value: function (t) {
                    return "function" == typeof t ? t.call(this._element) : t
                }
            }, {
                key: "_getPopperConfig", value: function (t) {
                    var e = this, n = {
                        placement: t,
                        modifiers: [{
                            name: "flip",
                            options: {fallbackPlacements: this._config.fallbackPlacements}
                        }, {name: "offset", options: {offset: this._getOffset()}}, {
                            name: "preventOverflow",
                            options: {boundary: this._config.boundary}
                        }, {
                            name: "arrow",
                            options: {element: ".".concat(this.constructor.NAME, "-arrow")}
                        }, {
                            name: "onChange", enabled: !0, phase: "afterWrite", fn: function (t) {
                                return e._handlePopperPlacementChange(t)
                            }
                        }],
                        onFirstUpdate: function (t) {
                            t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                        }
                    };
                    return Nt(Nt({}, n), "function" == typeof this._config.popperConfig ? this._config.popperConfig(n) : this._config.popperConfig)
                }
            }, {
                key: "_addAttachmentClass", value: function (t) {
                    this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(t)))
                }
            }, {
                key: "_getAttachment", value: function (t) {
                    return Ni[t.toUpperCase()]
                }
            }, {
                key: "_setListeners", value: function () {
                    var t = this;
                    this._config.trigger.split(" ").forEach((function (e) {
                        if ("click" === e) Pe.on(t._element, t.constructor.Event.CLICK, t._config.selector, (function (e) {
                            return t.toggle(e)
                        })); else if ("manual" !== e) {
                            var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            Pe.on(t._element, n, t._config.selector, (function (e) {
                                return t._enter(e)
                            })), Pe.on(t._element, i, t._config.selector, (function (e) {
                                return t._leave(e)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        t._element && t.hide()
                    }, Pe.on(this._element.closest(Bi), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = Nt(Nt({}, this._config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
            }, {
                key: "_fixTitle", value: function () {
                    var t = this._element.getAttribute("title"),
                        e = Kt(this._element.getAttribute("data-bs-original-title"));
                    (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                }
            }, {
                key: "_enter", value: function (t, e) {
                    e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout((function () {
                        "show" === e._hoverState && e.show()
                    }), e._config.delay.show) : e.show())
                }
            }, {
                key: "_leave", value: function (t, e) {
                    e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((function () {
                        "out" === e._hoverState && e.hide()
                    }), e._config.delay.hide) : e.hide())
                }
            }, {
                key: "_isWithActiveTrigger", value: function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1
                }
            }, {
                key: "_getConfig", value: function (t) {
                    var e = Ye.getDataAttributes(this._element);
                    return Object.keys(e).forEach((function (t) {
                        ji.has(t) && delete e[t]
                    })), (t = Nt(Nt(Nt({}, this.constructor.Default), e), "object" === Kt(t) && t ? t : {})).container = !1 === t.container ? document.body : ie(t.container), "number" == typeof t.delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), re("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Di(t.template, t.allowList, t.sanitizeFn)), t
                }
            }, {
                key: "_getDelegateConfig", value: function () {
                    var t = {};
                    for (var e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                    return t
                }
            }, {
                key: "_cleanTipClass", value: function () {
                    var t = this.getTipElement(),
                        e = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), "g"),
                        n = t.getAttribute("class").match(e);
                    null !== n && n.length > 0 && n.map((function (t) {
                        return t.trim()
                    })).forEach((function (e) {
                        return t.classList.remove(e)
                    }))
                }
            }, {
                key: "_getBasicClassPrefix", value: function () {
                    return "bs-tooltip"
                }
            }, {
                key: "_handlePopperPlacementChange", value: function (t) {
                    var e = t.state;
                    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                }
            }, {
                key: "_disposePopper", value: function () {
                    this._popper && (this._popper.destroy(), this._popper = null)
                }
            }], [{
                key: "Default", get: function () {
                    return Ri
                }
            }, {
                key: "NAME", get: function () {
                    return "tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return Fi
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ii
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    }))
                }
            }]), n
        }(Ne);
    he(Wi);
    var zi = ".".concat("bs.popover"), Hi = Nt(Nt({}, Wi.Default), {}, {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Vi = Nt(Nt({}, Wi.DefaultType), {}, {content: "(string|element|function)"}), qi = {
        HIDE: "hide".concat(zi),
        HIDDEN: "hidden".concat(zi),
        SHOW: "show".concat(zi),
        SHOWN: "shown".concat(zi),
        INSERTED: "inserted".concat(zi),
        CLICK: "click".concat(zi),
        FOCUSIN: "focusin".concat(zi),
        FOCUSOUT: "focusout".concat(zi),
        MOUSEENTER: "mouseenter".concat(zi),
        MOUSELEAVE: "mouseleave".concat(zi)
    };
    he(function (t) {
        Bt(n, t);
        var e = zt(n);

        function n() {
            return qt(this, n), e.apply(this, arguments)
        }

        return $t(n, [{
            key: "isWithContent", value: function () {
                return this.getTitle() || this._getContent()
            }
        }, {
            key: "setContent", value: function (t) {
                this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
            }
        }, {
            key: "_getContent", value: function () {
                return this._resolvePossibleFunction(this._config.content)
            }
        }, {
            key: "_getBasicClassPrefix", value: function () {
                return "bs-popover"
            }
        }], [{
            key: "Default", get: function () {
                return Hi
            }
        }, {
            key: "NAME", get: function () {
                return "popover"
            }
        }, {
            key: "Event", get: function () {
                return qi
            }
        }, {
            key: "DefaultType", get: function () {
                return Vi
            }
        }, {
            key: "jQueryInterface", value: function (t) {
                return this.each((function () {
                    var e = n.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                        e[t]()
                    }
                }))
            }
        }]), n
    }(Wi));
    var Ui = ".".concat("bs.scrollspy"), $i = {offset: 10, method: "auto", target: ""},
        Yi = {offset: "number", method: "string", target: "(string|element)"}, Xi = "activate".concat(Ui),
        Gi = "scroll".concat(Ui), Ki = "load".concat(Ui).concat(".data-api"),
        Qi = "".concat(".nav-link", ", ").concat(".list-group-item", ", .").concat("dropdown-item"), Ji = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._scrollElement = "BODY" === r._element.tagName ? window : r._element, r._config = r._getConfig(i), r._offsets = [], r._targets = [], r._activeTarget = null, r._scrollHeight = 0, Pe.on(r._scrollElement, Gi, (function () {
                    return r._process()
                })), r.refresh(), r._process(), r
            }

            return $t(n, [{
                key: "refresh", value: function () {
                    var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        n = "auto" === this._config.method ? e : this._config.method,
                        i = "position" === n ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Xe.find(Qi, this._config.target).map((function (t) {
                        var e = Jt(t), r = e ? Xe.findOne(e) : null;
                        if (r) {
                            var o = r.getBoundingClientRect();
                            if (o.width || o.height) return [Ye[n](r).top + i, e]
                        }
                        return null
                    })).filter((function (t) {
                        return t
                    })).sort((function (t, e) {
                        return t[0] - e[0]
                    })).forEach((function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    }))
                }
            }, {
                key: "dispose", value: function () {
                    Pe.off(this._scrollElement, Ui), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return (t = Nt(Nt(Nt({}, $i), Ye.getDataAttributes(this._element)), "object" === Kt(t) && t ? t : {})).target = ie(t.target) || document.documentElement, re("scrollspy", t, Yi), t
                }
            }, {
                key: "_getScrollTop", value: function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
            }, {
                key: "_getScrollHeight", value: function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            }, {
                key: "_getOffsetHeight", value: function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
            }, {
                key: "_process", value: function () {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) {
                            this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }
                }
            }, {
                key: "_activate", value: function (t) {
                    this._activeTarget = t, this._clear();
                    var e = Qi.split(",").map((function (e) {
                        return "".concat(e, '[data-bs-target="').concat(t, '"],').concat(e, '[href="').concat(t, '"]')
                    })), n = Xe.findOne(e.join(","), this._config.target);
                    n.classList.add("active"), n.classList.contains("dropdown-item") ? Xe.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active") : Xe.parents(n, ".nav, .list-group").forEach((function (t) {
                        Xe.prev(t, "".concat(".nav-link", ", ").concat(".list-group-item")).forEach((function (t) {
                            return t.classList.add("active")
                        })), Xe.prev(t, ".nav-item").forEach((function (t) {
                            Xe.children(t, ".nav-link").forEach((function (t) {
                                return t.classList.add("active")
                            }))
                        }))
                    })), Pe.trigger(this._scrollElement, Xi, {relatedTarget: t})
                }
            }, {
                key: "_clear", value: function () {
                    Xe.find(Qi, this._config.target).filter((function (t) {
                        return t.classList.contains("active")
                    })).forEach((function (t) {
                        return t.classList.remove("active")
                    }))
                }
            }], [{
                key: "Default", get: function () {
                    return $i
                }
            }, {
                key: "NAME", get: function () {
                    return "scrollspy"
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    }))
                }
            }]), n
        }(Ne);
    Pe.on(window, Ki, (function () {
        Xe.find('[data-bs-spy="scroll"]').forEach((function (t) {
            return new Ji(t)
        }))
    })), he(Ji);
    var Zi = ".".concat("bs.tab"), tr = "hide".concat(Zi), er = "hidden".concat(Zi), nr = "show".concat(Zi),
        ir = "shown".concat(Zi), rr = "click".concat(Zi).concat(".data-api"), or = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n() {
                return qt(this, n), e.apply(this, arguments)
            }

            return $t(n, [{
                key: "show", value: function () {
                    var t = this;
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains("active")) {
                        var e, n = Zt(this._element), i = this._element.closest(".nav, .list-group");
                        if (i) {
                            var r = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                            e = (e = Xe.find(r, i))[e.length - 1]
                        }
                        var o = e ? Pe.trigger(e, tr, {relatedTarget: this._element}) : null;
                        if (!(Pe.trigger(this._element, nr, {relatedTarget: e}).defaultPrevented || null !== o && o.defaultPrevented)) {
                            this._activate(this._element, i);
                            var a = function () {
                                Pe.trigger(e, er, {relatedTarget: t._element}), Pe.trigger(t._element, ir, {relatedTarget: e})
                            };
                            n ? this._activate(n, n.parentNode, a) : a()
                        }
                    }
                }
            }, {
                key: "_activate", value: function (t, e, n) {
                    var i = this,
                        r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Xe.children(e, ".active") : Xe.find(":scope > li > .active", e))[0],
                        o = n && r && r.classList.contains("fade"), a = function () {
                            return i._transitionComplete(t, r, n)
                        };
                    r && o ? (r.classList.remove("show"), this._queueCallback(a, t, !0)) : a()
                }
            }, {
                key: "_transitionComplete", value: function (t, e, n) {
                    if (e) {
                        e.classList.remove("active");
                        var i = Xe.findOne(":scope > .dropdown-menu .active", e.parentNode);
                        i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), ue(t), t.classList.contains("fade") && t.classList.add("show");
                    var r = t.parentNode;
                    if (r && "LI" === r.nodeName && (r = r.parentNode), r && r.classList.contains("dropdown-menu")) {
                        var o = t.closest(".dropdown");
                        o && Xe.find(".dropdown-toggle", o).forEach((function (t) {
                            return t.classList.add("active")
                        })), t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }
            }], [{
                key: "NAME", get: function () {
                    return "tab"
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t]()
                        }
                    }))
                }
            }]), n
        }(Ne);
    Pe.on(document, rr, '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
        (["A", "AREA"].includes(this.tagName) && t.preventDefault(), ae(this)) || or.getOrCreateInstance(this).show()
    })), he(or);
    var ar = ".".concat("bs.toast"), sr = "mouseover".concat(ar), ur = "mouseout".concat(ar), cr = "focusin".concat(ar),
        lr = "focusout".concat(ar), fr = "hide".concat(ar), hr = "hidden".concat(ar), dr = "show".concat(ar),
        pr = "shown".concat(ar), vr = {animation: "boolean", autohide: "boolean", delay: "number"},
        gr = {animation: !0, autohide: !0, delay: 5e3}, yr = function (t) {
            Bt(n, t);
            var e = zt(n);

            function n(t, i) {
                var r;
                return qt(this, n), (r = e.call(this, t))._config = r._getConfig(i), r._timeout = null, r._hasMouseInteraction = !1, r._hasKeyboardInteraction = !1, r._setListeners(), r
            }

            return $t(n, [{
                key: "show", value: function () {
                    var t = this;
                    if (!Pe.trigger(this._element, dr).defaultPrevented) {
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        this._element.classList.remove("hide"), ue(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback((function () {
                            t._element.classList.remove("showing"), Pe.trigger(t._element, pr), t._maybeScheduleHide()
                        }), this._element, this._config.animation)
                    }
                }
            }, {
                key: "hide", value: function () {
                    var t = this;
                    if (this._element.classList.contains("show") && !Pe.trigger(this._element, fr).defaultPrevented) {
                        this._element.classList.add("showing"), this._queueCallback((function () {
                            t._element.classList.add("hide"), t._element.classList.remove("showing"), t._element.classList.remove("show"), Pe.trigger(t._element, hr)
                        }), this._element, this._config.animation)
                    }
                }
            }, {
                key: "dispose", value: function () {
                    this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), jt(Vt(n.prototype), "dispose", this).call(this)
                }
            }, {
                key: "_getConfig", value: function (t) {
                    return t = Nt(Nt(Nt({}, gr), Ye.getDataAttributes(this._element)), "object" === Kt(t) && t ? t : {}), re("toast", t, this.constructor.DefaultType), t
                }
            }, {
                key: "_maybeScheduleHide", value: function () {
                    var t = this;
                    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((function () {
                        t.hide()
                    }), this._config.delay)))
                }
            }, {
                key: "_onInteraction", value: function (t, e) {
                    switch (t.type) {
                        case"mouseover":
                        case"mouseout":
                            this._hasMouseInteraction = e;
                            break;
                        case"focusin":
                        case"focusout":
                            this._hasKeyboardInteraction = e
                    }
                    if (e) this._clearTimeout(); else {
                        var n = t.relatedTarget;
                        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                    }
                }
            }, {
                key: "_setListeners", value: function () {
                    var t = this;
                    Pe.on(this._element, sr, (function (e) {
                        return t._onInteraction(e, !0)
                    })), Pe.on(this._element, ur, (function (e) {
                        return t._onInteraction(e, !1)
                    })), Pe.on(this._element, cr, (function (e) {
                        return t._onInteraction(e, !0)
                    })), Pe.on(this._element, lr, (function (e) {
                        return t._onInteraction(e, !1)
                    }))
                }
            }, {
                key: "_clearTimeout", value: function () {
                    clearTimeout(this._timeout), this._timeout = null
                }
            }], [{
                key: "DefaultType", get: function () {
                    return vr
                }
            }, {
                key: "Default", get: function () {
                    return gr
                }
            }, {
                key: "NAME", get: function () {
                    return "toast"
                }
            }, {
                key: "jQueryInterface", value: function (t) {
                    return this.each((function () {
                        var e = n.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "'.concat(t, '"'));
                            e[t](this)
                        }
                    }))
                }
            }]), n
        }(Ne);
    Re(yr), he(yr)
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    t.exports = !n(7) && !n(3)((function () {
        return 7 != Object.defineProperty(n(70)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (t, e, n) {
    e.f = n(5)
}, function (t, e, n) {
    var i = n(14), r = n(15), o = n(56)(!1), a = n(72)("IE_PROTO");
    t.exports = function (t, e) {
        var n, s = r(t), u = 0, c = [];
        for (n in s) n != a && i(s, n) && c.push(n);
        for (; e.length > u;) i(s, n = e[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (t, e, n) {
    var i = n(8), r = n(1), o = n(35);
    t.exports = n(7) ? Object.defineProperties : function (t, e) {
        r(t);
        for (var n, a = o(e), s = a.length, u = 0; s > u;) i.f(t, n = a[u++], e[n]);
        return t
    }
}, function (t, e, n) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r = n(15), o = n(38).f, a = {}.toString,
        s = "object" == ("undefined" == typeof window ? "undefined" : i(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return s && "[object Window]" == a.call(t) ? function (t) {
            try {
                return o(t)
            } catch (t) {
                return s.slice()
            }
        }(t) : o(r(t))
    }
}, function (t, e, n) {
    "use strict";
    var i = n(7), r = n(35), o = n(57), a = n(51), s = n(9), u = n(50), c = Object.assign;
    t.exports = !c || n(3)((function () {
        var t = {}, e = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach((function (t) {
            e[t] = t
        })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    })) ? function (t, e) {
        for (var n = s(t), c = arguments.length, l = 1, f = o.f, h = a.f; c > l;) for (var d, p = u(arguments[l++]), v = f ? r(p).concat(f(p)) : r(p), g = v.length, y = 0; g > y;) d = v[y++], i && !h.call(p, d) || (n[d] = p[d]);
        return n
    } : c
}, function (t, e) {
    t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function (t, e, n) {
    "use strict";
    var i = n(10), r = n(4), o = n(107), a = [].slice, s = {}, u = function (t, e, n) {
        if (!(e in s)) {
            for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
            s[e] = Function("F,a", "return new F(" + i.join(",") + ")")
        }
        return s[e](t, n)
    };
    t.exports = Function.bind || function (t) {
        var e = i(this), n = a.call(arguments, 1), s = function i() {
            var r = n.concat(a.call(arguments));
            return this instanceof i ? u(e, r.length, r) : o(e, r, t)
        };
        return r(e.prototype) && (s.prototype = e.prototype), s
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function (t, e, n) {
    var i = n(2).parseInt, r = n(46).trim, o = n(76), a = /^[-+]?0[xX]/;
    t.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function (t, e) {
        var n = r(String(t), 3);
        return i(n, e >>> 0 || (a.test(n) ? 16 : 10))
    } : i
}, function (t, e, n) {
    var i = n(2).parseFloat, r = n(46).trim;
    t.exports = 1 / i(n(76) + "-0") != -1 / 0 ? function (t) {
        var e = r(String(t), 3), n = i(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : i
}, function (t, e, n) {
    var i = n(20);
    t.exports = function (t, e) {
        if ("number" != typeof t && "Number" != i(t)) throw TypeError(e);
        return +t
    }
}, function (t, e, n) {
    var i = n(4), r = Math.floor;
    t.exports = function (t) {
        return !i(t) && isFinite(t) && r(t) === t
    }
}, function (t, e) {
    t.exports = Math.log1p || function (t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function (t, e, n) {
    var i = n(79), r = Math.pow, o = r(2, -52), a = r(2, -23), s = r(2, 127) * (2 - a), u = r(2, -126);
    t.exports = Math.fround || function (t) {
        var e, n, r = Math.abs(t), c = i(t);
        return r < u ? c * (r / u / a + 1 / o - 1 / o) * u * a : (n = (e = (1 + a / o) * r) - (e - r)) > s || n != n ? c * (1 / 0) : c * n
    }
}, function (t, e, n) {
    var i = n(1);
    t.exports = function (t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && i(o.call(t)), e
        }
    }
}, function (t, e, n) {
    var i = n(10), r = n(9), o = n(50), a = n(6);
    t.exports = function (t, e, n, s, u) {
        i(e);
        var c = r(t), l = o(c), f = a(c.length), h = u ? f - 1 : 0, d = u ? -1 : 1;
        if (n < 2) for (; ;) {
            if (h in l) {
                s = l[h], h += d;
                break
            }
            if (h += d, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
        }
        for (; u ? h >= 0 : f > h; h += d) h in l && (s = e(s, l[h], h, c));
        return s
    }
}, function (t, e, n) {
    "use strict";
    var i = n(9), r = n(36), o = n(6);
    t.exports = [].copyWithin || function (t, e) {
        var n = i(this), a = o(n.length), s = r(t, a), u = r(e, a), c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? a : r(c, a)) - u, a - s), f = 1;
        for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
        return n
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    "use strict";
    var i = n(91);
    n(0)({target: "RegExp", proto: !0, forced: i !== /./.exec}, {exec: i})
}, function (t, e, n) {
    n(7) && "g" != /./g.flags && n(8).f(RegExp.prototype, "flags", {configurable: !0, get: n(52)})
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {e: !1, v: t()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (t, e, n) {
    var i = n(1), r = n(4), o = n(95);
    t.exports = function (t, e) {
        if (i(t), r(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function (t, e, n) {
    "use strict";
    var i = n(123), r = n(43);
    t.exports = n(65)("Map", (function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function (t) {
            var e = i.getEntry(r(this, "Map"), t);
            return e && e.v
        }, set: function (t, e) {
            return i.def(r(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function (t, e, n) {
    "use strict";
    var i = n(8).f, r = n(37), o = n(42), a = n(19), s = n(40), u = n(41), c = n(81), l = n(117), f = n(39), h = n(7),
        d = n(31).fastKey, p = n(43), v = h ? "_s" : "size", g = function (t, e) {
            var n, i = d(e);
            if ("F" !== i) return t._i[i];
            for (n = t._f; n; n = n.n) if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function (t, e, n, c) {
            var l = t((function (t, i) {
                s(t, l, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != i && u(i, n, t[c], t)
            }));
            return o(l.prototype, {
                clear: function () {
                    for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    t._f = t._l = void 0, t[v] = 0
                }, delete: function (t) {
                    var n = p(this, e), i = g(n, t);
                    if (i) {
                        var r = i.n, o = i.p;
                        delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[v]--
                    }
                    return !!i
                }, forEach: function (t) {
                    p(this, e);
                    for (var n, i = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (i(n.v, n.k, this); n && n.r;) n = n.p
                }, has: function (t) {
                    return !!g(p(this, e), t)
                }
            }), h && i(l.prototype, "size", {
                get: function () {
                    return p(this, e)[v]
                }
            }), l
        }, def: function (t, e, n) {
            var i, r, o = g(t, e);
            return o ? o.v = n : (t._l = o = {
                i: r = d(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), i && (i.n = o), t[v]++, "F" !== r && (t._i[r] = o)), t
        }, getEntry: g, setStrong: function (t, e, n) {
            c(t, e, (function (t, n) {
                this._t = p(t, e), this._k = n, this._l = void 0
            }), (function () {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function (t, e, n) {
    "use strict";
    var i = n(123), r = n(43);
    t.exports = n(65)("Set", (function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function (t) {
            return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, i)
}, function (t, e, n) {
    "use strict";
    var i, r = n(2), o = n(26)(0), a = n(12), s = n(31), u = n(104), c = n(126), l = n(4), f = n(43), h = n(43),
        d = !r.ActiveXObject && "ActiveXObject" in r, p = s.getWeak, v = Object.isExtensible, g = c.ufstore,
        y = function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, m = {
            get: function (t) {
                if (l(t)) {
                    var e = p(t);
                    return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            }, set: function (t, e) {
                return c.def(f(this, "WeakMap"), t, e)
            }
        }, b = t.exports = n(65)("WeakMap", y, m, c, !0, !0);
    h && d && (u((i = c.getConstructor(y, "WeakMap")).prototype, m), s.NEED = !0, o(["delete", "has", "get", "set"], (function (t) {
        var e = b.prototype, n = e[t];
        a(e, t, (function (e, r) {
            if (l(e) && !v(e)) {
                this._f || (this._f = new i);
                var o = this._f[t](e, r);
                return "set" == t ? this : o
            }
            return n.call(this, e, r)
        }))
    })))
}, function (t, e, n) {
    "use strict";
    var i = n(42), r = n(31).getWeak, o = n(1), a = n(4), s = n(40), u = n(41), c = n(26), l = n(14), f = n(43),
        h = c(5), d = c(6), p = 0, v = function (t) {
            return t._l || (t._l = new g)
        }, g = function () {
            this.a = []
        }, y = function (t, e) {
            return h(t.a, (function (t) {
                return t[0] === e
            }))
        };
    g.prototype = {
        get: function (t) {
            var e = y(this, t);
            if (e) return e[1]
        }, has: function (t) {
            return !!y(this, t)
        }, set: function (t, e) {
            var n = y(this, t);
            n ? n[1] = e : this.a.push([t, e])
        }, delete: function (t) {
            var e = d(this.a, (function (e) {
                return e[0] === t
            }));
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function (t, e, n, o) {
            var c = t((function (t, i) {
                s(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, null != i && u(i, n, t[o], t)
            }));
            return i(c.prototype, {
                delete: function (t) {
                    if (!a(t)) return !1;
                    var n = r(t);
                    return !0 === n ? v(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
                }, has: function (t) {
                    if (!a(t)) return !1;
                    var n = r(t);
                    return !0 === n ? v(f(this, e)).has(t) : n && l(n, this._i)
                }
            }), c
        }, def: function (t, e, n) {
            var i = r(o(e), !0);
            return !0 === i ? v(t).set(e, n) : i[t._i] = n, t
        }, ufstore: v
    }
}, function (t, e, n) {
    var i = n(21), r = n(6);
    t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = i(t), n = r(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function (t, e, n) {
    var i = n(38), r = n(57), o = n(1), a = n(2).Reflect;
    t.exports = a && a.ownKeys || function (t) {
        var e = i.f(o(t)), n = r.f;
        return n ? e.concat(n(t)) : e
    }
}, function (t, e, n) {
    "use strict";
    var i = n(58), r = n(4), o = n(6), a = n(19), s = n(5)("isConcatSpreadable");
    t.exports = function t(e, n, u, c, l, f, h, d) {
        for (var p, v, g = l, y = 0, m = !!h && a(h, d, 3); y < c;) {
            if (y in u) {
                if (p = m ? m(u[y], y, n) : u[y], v = !1, r(p) && (v = void 0 !== (v = p[s]) ? !!v : i(p)), v && f > 0) g = t(e, n, p, o(p.length), g, f - 1) - 1; else {
                    if (g >= 9007199254740991) throw TypeError();
                    e[g] = p
                }
                g++
            }
            y++
        }
        return g
    }
}, function (t, e, n) {
    var i = n(6), r = n(78), o = n(24);
    t.exports = function (t, e, n, a) {
        var s = String(o(t)), u = s.length, c = void 0 === n ? " " : String(n), l = i(e);
        if (l <= u || "" == c) return s;
        var f = l - u, h = r.call(c, Math.ceil(f / c.length));
        return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h
    }
}, function (t, e, n) {
    var i = n(7), r = n(35), o = n(15), a = n(51).f;
    t.exports = function (t) {
        return function (e) {
            for (var n, s = o(e), u = r(s), c = u.length, l = 0, f = []; c > l;) n = u[l++], i && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
            return f
        }
    }
}, function (t, e, n) {
    var i = n(45), r = n(133);
    t.exports = function (t) {
        return function () {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return r(this)
        }
    }
}, function (t, e, n) {
    var i = n(41);
    t.exports = function (t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}, function (t, e) {
    t.exports = Math.scale || function (t, e, n, i, r) {
        return 0 === arguments.length || t != t || e != e || n != n || i != i || r != r ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (r - i) / (n - e) + i
    }
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n.d(e, "a", (function () {
            return u
        }));
        var i, r = n(27), o = n(48), a = n.n(o);

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        var u = Object(r.component)({
            productIdentifier: a.a.string.isRequired,
            translations: a.a.object.isRequired
        })(i = function () {
            function e() {
                var t = this;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.button = void 0, this.currentProductItem = void 0, this.allProductItems = void 0, this.button = this.el.querySelector("button"), this.button.addEventListener("click", (function (e) {
                    return t.selectProduct(e)
                })), this.el.addEventListener("click", (function (e) {
                    return t.selectProduct(e)
                })), this.allProductItems = this.el.parentNode.parentNode.parentNode.querySelectorAll(".product-item");
                var n = this.el.querySelector(".last-sale span");
                this.allProductItems.forEach((function (e, i) {
                    t.el === e && (0 === i && (n.innerText = t.getRandomInteger(10, 24) + " " + t.props.translations.lastSaleHours), 1 === i && (n.innerText = t.getRandomInteger(2, 35) + " " + t.props.translations.lastSaleSeconds), 2 === i && (n.innerText = t.getRandomInteger(3, 60) + " " + t.props.translations.lastSaleMins), t.currentProductItem = i)
                }))
            }

            var n, i, r;
            return n = e, (i = [{
                key: "selectProduct", value: function () {
                    var e = this;
                    document.querySelector(".product-item-selected").classList.remove("product-item-selected"), this.allProductItems[this.currentProductItem].classList.add("product-item-selected")/*, t("html, body").animate({scrollTop: t("#checkout-form").offset().top}, 500)*/
                }
            }, {
                key: "getRandomInteger", value: function (t, e) {
                    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
                }
            }]) && s(n.prototype, i), r && s(n, r), e
        }()) || i
    }).call(this, n(54))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n.d(e, "a", (function () {
            return o
        }));
        var i, r = n(27);
        var o = Object(r.component)({})(i = function e() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t(".rating-stars li").on("mouseover", (function () {
                var e = parseInt(t(this).data("value"), 10);
                t(this).parent().children("li").each((function (n) {
                    n < e ? t(this).addClass("hover") : t(this).removeClass("hover")
                }))
            })).on("mouseout", (function () {
                t(this).parent().children("li.star").each((function (e) {
                    t(this).removeClass("hover")
                }))
            })), t(".rating-stars li").on("click", (function () {
                for (var e = parseInt(t(this).data("value"), 10), n = t(this).parent().children("li"), i = 0; i < n.length; i++) t(n[i]).removeClass("selected");
                for (var r = 0; r < e; r++) t(n[r]).addClass("selected");
                t("#rating").val(e), t("#review-result").text(t(this).data("review-title"))
            }))
        }) || i
    }).call(this, n(54))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n.d(e, "a", (function () {
            return a
        }));
        var i, r = n(27), o = n(97);
        var a = Object(r.component)({})(i = function e() {
            var n = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.galleryModalElement = document.getElementById("reviewGalleryModal"), this.galleryModal = new o.a(this.galleryModalElement, {keyboard: !1}), t(this.el).find("a").click((function (e) {
                e.preventDefault();
                var i = e.currentTarget.href, r = document.createElement("img");
                r.src = i, r.className = "img-fluid", t(n.galleryModalElement).find(".modal-body").html(r), n.galleryModal.show()
            }))
        }) || i
    }).call(this, n(54))
}, function (t, e, n) {
    (function (n) {
        var i, r, o, a;

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        a = function () {
            return function t(e, n, i) {
                function r(a, s) {
                    if (!n[a]) {
                        if (!e[a]) {
                            if (o) return o(a, !0);
                            var u = new Error("Cannot find module '" + a + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var c = n[a] = {exports: {}};
                        e[a][0].call(c.exports, (function (t) {
                            var n = e[a][1][t];
                            return r(n || t)
                        }), c, c.exports, t, e, n, i)
                    }
                    return n[a].exports
                }

                for (var o = !1, a = 0; a < i.length; a++) r(i[a]);
                return r
            }({
                1: [function (t, e, i) {
                    (function (n) {
                        !function () {
                            var r = {isTestingEnv: !1, packageVersion: {major: 1, minor: 1, patch: 0}}, o = this;
                            "undefined" != typeof window ? o = window : void 0 !== n ? o = n : "undefined" != typeof self && (o = self), r.isTestingEnv = o.process && o.process.title && !!~o.process.title.indexOf("reduct"), function (t) {
                                "object" === s(i) && void 0 !== e ? e.exports = t() : ("undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : this).logger = t()
                            }((function () {
                                return function e(n, i, r) {
                                    function o(s, u) {
                                        if (!i[s]) {
                                            if (!n[s]) {
                                                var c = "function" == typeof t && t;
                                                if (!u && c) return c(s, !0);
                                                if (a) return a(s, !0);
                                                var l = new Error("Cannot find module '" + s + "'");
                                                throw l.code = "MODULE_NOT_FOUND", l
                                            }
                                            var f = i[s] = {exports: {}};
                                            n[s][0].call(f.exports, (function (t) {
                                                var e = n[s][1][t];
                                                return o(e || t)
                                            }), f, f.exports, e, n, i, r)
                                        }
                                        return i[s].exports
                                    }

                                    for (var a = "function" == typeof t && t, s = 0; s < r.length; s++) o(r[s]);
                                    return o
                                }({
                                    1: [function (t, e, i) {
                                        (function (t) {
                                            "use strict";
                                            Object.defineProperty(i, "__esModule", {value: !0});
                                            var n = function () {
                                                function t(t, e) {
                                                    for (var n = 0; n < e.length; n++) {
                                                        var i = e[n];
                                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                                    }
                                                }

                                                return function (e, n, i) {
                                                    return n && t(e.prototype, n), i && t(e, i), e
                                                }
                                            }();

                                            function o(t, e) {
                                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                            }

                                            var a = {ALL: 2, WARNINGS: 1, SILENT: 0}, s = function () {
                                                function t() {
                                                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "@reduct/logger" : arguments[0],
                                                        n = arguments.length <= 1 || void 0 === arguments[1] ? a.ALL : arguments[1];
                                                    o(this, t), this.version = r.packageVersion, this.logLevel = n, this.namespace = e, this.instances = []
                                                }

                                                return n(t, [{
                                                    key: "getLogger", value: function () {
                                                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this.namespace : arguments[0],
                                                            n = new t(e, this.logLevel);
                                                        return this.instances.push(n), {
                                                            log: function (t, e) {
                                                                n.log(t, e)
                                                            }, info: function (t, e) {
                                                                n.info(t, e)
                                                            }, warn: function (t, e) {
                                                                n.warn(t, e)
                                                            }, error: function (t, e) {
                                                                n.error(t, e)
                                                            }
                                                        }
                                                    }
                                                }, {
                                                    key: "setLogLevel", value: function (t) {
                                                        var e = isNaN(t) ? 2 : t;
                                                        return this.logLevel = e, this.instances.forEach((function (t) {
                                                            t.logLevel = e
                                                        })), this
                                                    }
                                                }, {
                                                    key: "log", value: function (t) {
                                                        var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                        if (this.logLevel < a.ALL) return this;
                                                        try {
                                                            console.log(this.namespace + ": " + t, e)
                                                        } catch (t) {
                                                        }
                                                        return this
                                                    }
                                                }, {
                                                    key: "info", value: function (t) {
                                                        var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                        if (this.logLevel < a.ALL) return this;
                                                        try {
                                                            console.info(this.namespace + " Info: " + t, e)
                                                        } catch (t) {
                                                        }
                                                        return this
                                                    }
                                                }, {
                                                    key: "warn", value: function (t) {
                                                        var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                        if (this.logLevel < a.WARNINGS) return this;
                                                        try {
                                                            console.warn(this.namespace + " Warning: " + t, e)
                                                        } catch (t) {
                                                        }
                                                    }
                                                }, {
                                                    key: "error", value: function (t) {
                                                        var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                                                        if (this.logLevel < a.SILENT) return this;
                                                        if ("" !== e) {
                                                            try {
                                                                console.error(t, e)
                                                            } catch (t) {
                                                            }
                                                            throw new Error(this.namespace + " Error: Details are posted above.")
                                                        }
                                                        throw new Error(this.namespace + " Error: " + t)
                                                    }
                                                }]), t
                                            }();
                                            if (!(t.reductLogger instanceof s)) {
                                                var u = new s;
                                                r.isTestingEnv && u.setLogLevel(0), t.reductLogger = u
                                            }
                                            i.default = {logger: t.reductLogger, logLevels: a}, e.exports = i.default
                                        }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                                    }, {}]
                                }, {}, [1])(1)
                            }))
                        }()
                    }).call(this, void 0 !== n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}], 2: [function (t, e, n) {
                    var i, r = e.exports = {}, o = [], a = !1, s = -1;

                    function u() {
                        a = !1, i.length ? o = i.concat(o) : s = -1, o.length && c()
                    }

                    function c() {
                        if (!a) {
                            var t = setTimeout(u);
                            a = !0;
                            for (var e = o.length; e;) {
                                for (i = o, o = []; ++s < e;) i && i[s].run();
                                s = -1, e = o.length
                            }
                            i = null, a = !1, clearTimeout(t)
                        }
                    }

                    function l(t, e) {
                        this.fun = t, this.array = e
                    }

                    function f() {
                    }

                    r.nextTick = function (t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        o.push(new l(t, e)), 1 !== o.length || a || setTimeout(c, 0)
                    }, l.prototype.run = function () {
                        this.fun.apply(null, this.array)
                    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.binding = function (t) {
                        throw new Error("process.binding is not supported")
                    }, r.cwd = function () {
                        return "/"
                    }, r.chdir = function (t) {
                        throw new Error("process.chdir is not supported")
                    }, r.umask = function () {
                        return 0
                    }
                }, {}], 3: [function (t, e, n) {
                    (function (e) {
                        "use strict";
                        var i = function () {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var i = e[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                }
                            }

                            return function (e, n, i) {
                                return n && t(e.prototype, n), i && t(e, i), e
                            }
                        }();

                        function r(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var o = t("@reduct/logger").logger.getLogger("@reduct/assembler"), a = function () {
                            function t() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? {marker: "component"} : arguments[0];
                                r(this, t), this.marker = e.marker, this.selector = "data-" + this.marker, this.index = {}, this.components = {}, this.elements = []
                            }

                            return i(t, [{
                                key: "getFunctionName", value: function (t) {
                                    return "[object Function]" !== Reflect.apply(Object.prototype.toString, t, t) && o.error(t + " is not a valid function."), t.name || /^\s*function\s*([^\(]*)/im.exec(t.toString())[1] || "anonymous"
                                }
                            }, {
                                key: "isInstantiated", value: function (t) {
                                    return -1 !== this.elements.indexOf(t)
                                }
                            }, {
                                key: "instantiate", value: function (t) {
                                    if (!this.isInstantiated(t)) {
                                        var e = t.getAttribute(this.selector), n = this.components[e] || [],
                                            i = this.components[e] = Reflect.apply(Array.prototype.slice, n, n),
                                            r = this.index[e];
                                        this.elements.unshift(t), i.unshift(new r(t))
                                    }
                                }
                            }, {
                                key: "register", value: function (t, e) {
                                    var n,
                                        i = void 0 === t ? "undefined" : (n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : s(n);
                                    if ("function" !== i) throw new Error("'" + i + "' is not a valid component class.");
                                    return e = e || this.getFunctionName(t), this.index[e] = t, this
                                }
                            }, {
                                key: "registerAll", value: function (t) {
                                    var e = this;
                                    return Object.keys(t).forEach((function (n) {
                                        return e.register(t[n], n)
                                    })), this
                                }
                            }, {
                                key: "run", value: function () {
                                    var t = this, e = document.querySelectorAll("[" + this.selector + "]"),
                                        n = Reflect.apply(Array.prototype.slice, e, [e]), i = Object.keys(this.index);
                                    n.filter((function (e) {
                                        return -1 !== i.indexOf(e.getAttribute(t.selector))
                                    })).forEach((function (e) {
                                        return t.instantiate(e)
                                    }))
                                }
                            }]), t
                        }();
                        n.default = function (t) {
                            var n = new a(t), i = {
                                register: function (t, e) {
                                    return n.register(t, e)
                                }, registerAll: function (t) {
                                    return n.registerAll(t)
                                }, run: function () {
                                    return n.run()
                                }
                            };
                            try {
                                e.env.TEST && (i.index = n.index, i.components = n.components)
                            } catch (t) {
                            }
                            return i
                        }
                    }).call(this, t("_process"))
                }, {"@reduct/logger": 1, _process: 2}]
            }, {}, [3])(3)
        }, "object" === s(e) && void 0 !== t ? t.exports = a() : (r = [], void 0 === (o = "function" == typeof (i = a) ? i.apply(e, r) : i) || (t.exports = o))
    }).call(this, n(55))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(136);
    n.d(e, "CreateReview", (function () {
        return i.a
    }));
    var r = n(137);
    n.d(e, "Review", (function () {
        return r.a
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ChartComponent", (function () {
        return la
    }));
    var i = n(27);

    function r(t) {
        return function (t) {
            if (Array.isArray(t)) return h(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || f(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function c(t, e, n) {
        return e && u(t.prototype, e), n && u(t, n), t
    }

    function l(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = f(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0, r = function () {
                };
                return {
                    s: r, n: function () {
                        return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
                    }, e: function (t) {
                        throw t
                    }, f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function f(t, e) {
        if (t) {
            if ("string" == typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
        }
    }

    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var d = "undefined" == typeof window ? function (t) {
        return t()
    } : window.requestAnimationFrame;

    function p(t, e, n) {
        var i = n || function (t) {
            return Array.prototype.slice.call(t)
        }, r = !1, o = [];
        return function () {
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
            o = i(a), r || (r = !0, d.call(window, (function () {
                r = !1, t.apply(e, o)
            })))
        }
    }

    var v = function (t) {
        return "start" === t ? "left" : "end" === t ? "right" : "center"
    }, g = function (t, e, n) {
        return "start" === t ? e : "end" === t ? n : (e + n) / 2
    };

    function y() {
    }

    var m, b = (m = 0, function () {
        return m++
    });

    function _(t) {
        return null == t
    }

    function x(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        var e = Object.prototype.toString.call(t);
        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
    }

    function w(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    }

    var k = function (t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t)
    };

    function S(t, e) {
        return k(t) ? t : e
    }

    function E(t, e) {
        return void 0 === t ? e : t
    }

    var O = function (t, e) {
        return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t
    };

    function M(t, e, n) {
        if (t && "function" == typeof t.call) return t.apply(n, e)
    }

    function T(t, e, n, i) {
        var r, o, a;
        if (x(t)) if (o = t.length, i) for (r = o - 1; r >= 0; r--) e.call(n, t[r], r); else for (r = 0; r < o; r++) e.call(n, t[r], r); else if (w(t)) for (o = (a = Object.keys(t)).length, r = 0; r < o; r++) e.call(n, t[a[r]], a[r])
    }

    function A(t, e) {
        var n, i, r, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, i = t.length; n < i; ++n) if (r = t[n], o = e[n], r.datasetIndex !== o.datasetIndex || r.index !== o.index) return !1;
        return !0
    }

    function C(t) {
        if (x(t)) return t.map(C);
        if (w(t)) {
            for (var e = Object.create(null), n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = C(t[n[r]]);
            return e
        }
        return t
    }

    function P(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }

    function D(t, e, n, i) {
        if (P(t)) {
            var r = e[t], o = n[t];
            w(r) && w(o) ? L(r, o, i) : e[t] = C(o)
        }
    }

    function L(t, e, n) {
        var i = x(e) ? e : [e], r = i.length;
        if (!w(t)) return t;
        for (var o = (n = n || {}).merger || D, a = 0; a < r; ++a) if (w(e = i[a])) for (var s = Object.keys(e), u = 0, c = s.length; u < c; ++u) o(s[u], t, e, n);
        return t
    }

    function j(t, e) {
        return L(t, e, {merger: I})
    }

    function I(t, e, n) {
        if (P(t)) {
            var i = e[t], r = n[t];
            w(i) && w(r) ? j(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = C(r))
        }
    }

    function N(t, e) {
        var n = t.indexOf(".", e);
        return -1 === n ? t.length : n
    }

    function R(t, e) {
        if ("" === e) return t;
        for (var n = 0, i = N(e, n); t && i > n;) t = t[e.substr(n, i - n)], i = N(e, n = i + 1);
        return t
    }

    function F(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    var B = function (t) {
            return void 0 !== t
        }, W = function (t) {
            return "function" == typeof t
        }, z = Math.PI, H = 2 * z, V = H + z, q = Number.POSITIVE_INFINITY, U = z / 180, $ = z / 2, Y = z / 4,
        X = 2 * z / 3, G = Math.log10, K = Math.sign;

    function Q(t) {
        var e = Math.round(t);
        t = Z(t, e, t / 1e3) ? e : t;
        var n = Math.pow(10, Math.floor(G(t))), i = t / n;
        return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
    }

    function J(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function Z(t, e, n) {
        return Math.abs(t - e) < n
    }

    function tt(t, e, n) {
        var i, r, o;
        for (i = 0, r = t.length; i < r; i++) o = t[i][n], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
    }

    function et(t) {
        return t * (z / 180)
    }

    function nt(t) {
        return t * (180 / z)
    }

    function it(t) {
        if (k(t)) {
            for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
            return n
        }
    }

    function rt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function ot(t, e) {
        return (t - e + V) % H - z
    }

    function at(t) {
        return (t % H + H) % H
    }

    function st(t, e, n, i) {
        var r = at(t), o = at(e), a = at(n), s = at(o - r), u = at(a - r), c = at(r - o), l = at(r - a);
        return r === o || r === a || i && o === a || s > u && c < l
    }

    function ut(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }

    var ct = function (t) {
        return 0 === t || 1 === t
    }, lt = function (t, e, n) {
        return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * H / n)
    }, ft = function (t, e, n) {
        return Math.pow(2, -10 * t) * Math.sin((t - e) * H / n) + 1
    }, ht = {
        linear: function (t) {
            return t
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return -t * (t - 2)
        }, easeInOutQuad: function (t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1
        }, easeInOutCubic: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1)
        }, easeInOutQuart: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, easeInQuint: function (t) {
            return t * t * t * t * t
        }, easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1
        }, easeInOutQuint: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, easeInSine: function (t) {
            return 1 - Math.cos(t * $)
        }, easeOutSine: function (t) {
            return Math.sin(t * $)
        }, easeInOutSine: function (t) {
            return -.5 * (Math.cos(z * t) - 1)
        }, easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, easeInOutExpo: function (t) {
            return ct(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)))
        }, easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
        }, easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }, easeInOutCirc: function (t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, easeInElastic: function (t) {
            return ct(t) ? t : lt(t, .075, .3)
        }, easeOutElastic: function (t) {
            return ct(t) ? t : ft(t, .075, .3)
        }, easeInOutElastic: function (t) {
            var e = .1125;
            return ct(t) ? t : t < .5 ? .5 * lt(2 * t, e, .45) : .5 + .5 * ft(2 * t - 1, e, .45)
        }, easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1
        }, easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
        }, easeInBounce: function (t) {
            return 1 - ht.easeOutBounce(1 - t)
        }, easeOutBounce: function (t) {
            var e = 7.5625, n = 2.75;
            return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
        }, easeInOutBounce: function (t) {
            return t < .5 ? .5 * ht.easeInBounce(2 * t) : .5 * ht.easeOutBounce(2 * t - 1) + .5
        }
    }, dt = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }, pt = "0123456789ABCDEF", vt = function (t) {
        return pt[15 & t]
    }, gt = function (t) {
        return pt[(240 & t) >> 4] + pt[15 & t]
    }, yt = function (t) {
        return (240 & t) >> 4 == (15 & t)
    };

    function mt(t) {
        var e = function (t) {
            return yt(t.r) && yt(t.g) && yt(t.b) && yt(t.a)
        }(t) ? vt : gt;
        return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t
    }

    function bt(t) {
        return t + .5 | 0
    }

    var _t = function (t, e, n) {
        return Math.max(Math.min(t, n), e)
    };

    function xt(t) {
        return _t(bt(2.55 * t), 0, 255)
    }

    function wt(t) {
        return _t(bt(255 * t), 0, 255)
    }

    function kt(t) {
        return _t(bt(t / 2.55) / 100, 0, 1)
    }

    function St(t) {
        return _t(bt(100 * t), 0, 100)
    }

    var Et = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    var Ot = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function Mt(t, e, n) {
        var i = e * Math.min(n, 1 - n), r = function (e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12;
            return n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1)
        };
        return [r(0), r(8), r(4)]
    }

    function Tt(t, e, n) {
        var i = function (i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (i + t / 60) % 6;
            return n - n * e * Math.max(Math.min(r, 4 - r, 1), 0)
        };
        return [i(5), i(3), i(1)]
    }

    function At(t, e, n) {
        var i, r = Mt(t, 1, .5);
        for (e + n > 1 && (e *= i = 1 / (e + n), n *= i), i = 0; i < 3; i++) r[i] *= 1 - e - n, r[i] += e;
        return r
    }

    function Ct(t) {
        var e, n, i, r = t.r / 255, o = t.g / 255, a = t.b / 255, s = Math.max(r, o, a), u = Math.min(r, o, a),
            c = (s + u) / 2;
        return s !== u && (i = s - u, n = c > .5 ? i / (2 - s - u) : i / (s + u), e = 60 * (e = s === r ? (o - a) / i + (o < a ? 6 : 0) : s === o ? (a - r) / i + 2 : (r - o) / i + 4) + .5), [0 | e, n || 0, c]
    }

    function Pt(t, e, n, i) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(wt)
    }

    function Dt(t, e, n) {
        return Pt(Mt, t, e, n)
    }

    function Lt(t) {
        return (t % 360 + 360) % 360
    }

    function jt(t) {
        var e, n = Ot.exec(t), i = 255;
        if (n) {
            n[5] !== e && (i = n[6] ? xt(+n[5]) : wt(+n[5]));
            var r = Lt(+n[2]), o = +n[3] / 100, a = +n[4] / 100;
            return {
                r: (e = "hwb" === n[1] ? function (t, e, n) {
                    return Pt(At, t, e, n)
                }(r, o, a) : "hsv" === n[1] ? function (t, e, n) {
                    return Pt(Tt, t, e, n)
                }(r, o, a) : Dt(r, o, a))[0], g: e[1], b: e[2], a: i
            }
        }
    }

    var It, Nt = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    }, Rt = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };

    function Ft(t) {
        It || ((It = function () {
            var t, e, n, i, r, o = {}, a = Object.keys(Rt), s = Object.keys(Nt);
            for (t = 0; t < a.length; t++) {
                for (i = r = a[t], e = 0; e < s.length; e++) n = s[e], r = r.replace(n, Nt[n]);
                n = parseInt(Rt[i], 16), o[r] = [n >> 16 & 255, n >> 8 & 255, 255 & n]
            }
            return o
        }()).transparent = [0, 0, 0, 0]);
        var e = It[t.toLowerCase()];
        return e && {r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255}
    }

    function Bt(t, e, n) {
        if (t) {
            var i = Ct(t);
            i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1)), i = Dt(i), t.r = i[0], t.g = i[1], t.b = i[2]
        }
    }

    function Wt(t, e) {
        return t ? Object.assign(e || {}, t) : t
    }

    function zt(t) {
        var e = {r: 0, g: 0, b: 0, a: 255};
        return Array.isArray(t) ? t.length >= 3 && (e = {
            r: t[0],
            g: t[1],
            b: t[2],
            a: 255
        }, t.length > 3 && (e.a = wt(t[3]))) : (e = Wt(t, {r: 0, g: 0, b: 0, a: 1})).a = wt(e.a), e
    }

    function Ht(t) {
        return "r" === t.charAt(0) ? function (t) {
            var e, n, i, r = Et.exec(t), o = 255;
            if (r) {
                if (r[7] !== e) {
                    var a = +r[7];
                    o = 255 & (r[8] ? xt(a) : 255 * a)
                }
                return e = +r[1], n = +r[3], i = +r[5], {
                    r: e = 255 & (r[2] ? xt(e) : e),
                    g: n = 255 & (r[4] ? xt(n) : n),
                    b: i = 255 & (r[6] ? xt(i) : i),
                    a: o
                }
            }
        }(t) : jt(t)
    }

    var Vt = function () {
        function t(e) {
            if (s(this, t), e instanceof t) return e;
            var n, i, r, o, u = a(e);
            "object" === u ? n = zt(e) : "string" === u && (o = (i = e).length, "#" === i[0] && (4 === o || 5 === o ? r = {
                r: 255 & 17 * dt[i[1]],
                g: 255 & 17 * dt[i[2]],
                b: 255 & 17 * dt[i[3]],
                a: 5 === o ? 17 * dt[i[4]] : 255
            } : 7 !== o && 9 !== o || (r = {
                r: dt[i[1]] << 4 | dt[i[2]],
                g: dt[i[3]] << 4 | dt[i[4]],
                b: dt[i[5]] << 4 | dt[i[6]],
                a: 9 === o ? dt[i[7]] << 4 | dt[i[8]] : 255
            })), n = r || Ft(e) || Ht(e)), this._rgb = n, this._valid = !!n
        }

        return c(t, [{
            key: "valid", get: function () {
                return this._valid
            }
        }, {
            key: "rgb", get: function () {
                var t = Wt(this._rgb);
                return t && (t.a = kt(t.a)), t
            }, set: function (t) {
                this._rgb = zt(t)
            }
        }, {
            key: "rgbString", value: function () {
                return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(kt(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : this._rgb;
                var t
            }
        }, {
            key: "hexString", value: function () {
                return this._valid ? mt(this._rgb) : this._rgb
            }
        }, {
            key: "hslString", value: function () {
                return this._valid ? function (t) {
                    if (t) {
                        var e = Ct(t), n = e[0], i = St(e[1]), r = St(e[2]);
                        return t.a < 255 ? "hsla(".concat(n, ", ").concat(i, "%, ").concat(r, "%, ").concat(kt(t.a), ")") : "hsl(".concat(n, ", ").concat(i, "%, ").concat(r, "%)")
                    }
                }(this._rgb) : this._rgb
            }
        }, {
            key: "mix", value: function (t, e) {
                if (t) {
                    var n, i = this.rgb, r = t.rgb, o = e === n ? .5 : e, a = 2 * o - 1, s = i.a - r.a,
                        u = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2;
                    n = 1 - u, i.r = 255 & u * i.r + n * r.r + .5, i.g = 255 & u * i.g + n * r.g + .5, i.b = 255 & u * i.b + n * r.b + .5, i.a = o * i.a + (1 - o) * r.a, this.rgb = i
                }
                return this
            }
        }, {
            key: "clone", value: function () {
                return new t(this.rgb)
            }
        }, {
            key: "alpha", value: function (t) {
                return this._rgb.a = wt(t), this
            }
        }, {
            key: "clearer", value: function (t) {
                return this._rgb.a *= 1 - t, this
            }
        }, {
            key: "greyscale", value: function () {
                var t = this._rgb, e = bt(.3 * t.r + .59 * t.g + .11 * t.b);
                return t.r = t.g = t.b = e, this
            }
        }, {
            key: "opaquer", value: function (t) {
                return this._rgb.a *= 1 + t, this
            }
        }, {
            key: "negate", value: function () {
                var t = this._rgb;
                return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
            }
        }, {
            key: "lighten", value: function (t) {
                return Bt(this._rgb, 2, t), this
            }
        }, {
            key: "darken", value: function (t) {
                return Bt(this._rgb, 2, -t), this
            }
        }, {
            key: "saturate", value: function (t) {
                return Bt(this._rgb, 1, t), this
            }
        }, {
            key: "desaturate", value: function (t) {
                return Bt(this._rgb, 1, -t), this
            }
        }, {
            key: "rotate", value: function (t) {
                return function (t, e) {
                    var n = Ct(t);
                    n[0] = Lt(n[0] + e), n = Dt(n), t.r = n[0], t.g = n[1], t.b = n[2]
                }(this._rgb, t), this
            }
        }]), t
    }();

    function qt(t) {
        return new Vt(t)
    }

    var Ut = function (t) {
        return t instanceof CanvasGradient || t instanceof CanvasPattern
    };

    function $t(t) {
        return Ut(t) ? t : qt(t)
    }

    function Yt(t) {
        return Ut(t) ? t : qt(t).saturate(.5).darken(.1).hexString()
    }

    var Xt = Object.create(null), Gt = Object.create(null);

    function Kt(t, e) {
        if (!e) return t;
        for (var n = e.split("."), i = 0, r = n.length; i < r; ++i) {
            var o = n[i];
            t = t[o] || (t[o] = Object.create(null))
        }
        return t
    }

    function Qt(t, e, n) {
        return "string" == typeof e ? L(Kt(t, e), n) : L(Kt(t, ""), e)
    }

    var Jt = new (function () {
        function t(e) {
            s(this, t), this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function (t) {
                return t.chart.platform.getDevicePixelRatio()
            }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = function (t, e) {
                return Yt(e.backgroundColor)
            }, this.hoverBorderColor = function (t, e) {
                return Yt(e.borderColor)
            }, this.hoverColor = function (t, e) {
                return Yt(e.color)
            }, this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.describe(e)
        }

        return c(t, [{
            key: "set", value: function (t, e) {
                return Qt(this, t, e)
            }
        }, {
            key: "get", value: function (t) {
                return Kt(this, t)
            }
        }, {
            key: "describe", value: function (t, e) {
                return Qt(Gt, t, e)
            }
        }, {
            key: "override", value: function (t, e) {
                return Qt(Xt, t, e)
            }
        }, {
            key: "route", value: function (t, e, n, i) {
                var r, a = Kt(this, t), s = Kt(this, n), u = "_" + e;
                Object.defineProperties(a, (o(r = {}, u, {value: a[e], writable: !0}), o(r, e, {
                    enumerable: !0,
                    get: function () {
                        var t = this[u], e = s[i];
                        return w(t) ? Object.assign({}, e, t) : E(t, e)
                    },
                    set: function (t) {
                        this[u] = t
                    }
                }), r))
            }
        }]), t
    }())({
        _scriptable: function (t) {
            return !t.startsWith("on")
        }, _indexable: function (t) {
            return "events" !== t
        }, hover: {_fallback: "interaction"}, interaction: {_scriptable: !1, _indexable: !1}
    });

    function Zt(t, e, n, i, r) {
        var o = e[r];
        return o || (o = e[r] = t.measureText(r).width, n.push(r)), o > i && (i = o), i
    }

    function te(t, e, n, i) {
        var r = (i = i || {}).data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
        i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.save(), t.font = e;
        var a, s, u, c, l, f = 0, h = n.length;
        for (a = 0; a < h; a++) if (null != (c = n[a]) && !0 !== x(c)) f = Zt(t, r, o, f, c); else if (x(c)) for (s = 0, u = c.length; s < u; s++) null == (l = c[s]) || x(l) || (f = Zt(t, r, o, f, l));
        t.restore();
        var d = o.length / 2;
        if (d > n.length) {
            for (a = 0; a < d; a++) delete r[o[a]];
            o.splice(0, d)
        }
        return f
    }

    function ee(t, e, n) {
        var i = t.currentDevicePixelRatio, r = 0 !== n ? Math.max(n / 2, .5) : 0;
        return Math.round((e - r) * i) / i + r
    }

    function ne(t, e) {
        (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
    }

    function ie(t, e, n, i) {
        var r, o, s, u, c, l = e.pointStyle, f = e.rotation, h = e.radius, d = (f || 0) * U;
        if (l && "object" === a(l) && ("[object HTMLImageElement]" === (r = l.toString()) || "[object HTMLCanvasElement]" === r)) return t.save(), t.translate(n, i), t.rotate(d), t.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height), void t.restore();
        if (!(isNaN(h) || h <= 0)) {
            switch (t.beginPath(), l) {
                default:
                    t.arc(n, i, h, 0, H), t.closePath();
                    break;
                case"triangle":
                    t.moveTo(n + Math.sin(d) * h, i - Math.cos(d) * h), d += X, t.lineTo(n + Math.sin(d) * h, i - Math.cos(d) * h), d += X, t.lineTo(n + Math.sin(d) * h, i - Math.cos(d) * h), t.closePath();
                    break;
                case"rectRounded":
                    u = h - (c = .516 * h), o = Math.cos(d + Y) * u, s = Math.sin(d + Y) * u, t.arc(n - o, i - s, c, d - z, d - $), t.arc(n + s, i - o, c, d - $, d), t.arc(n + o, i + s, c, d, d + $), t.arc(n - s, i + o, c, d + $, d + z), t.closePath();
                    break;
                case"rect":
                    if (!f) {
                        u = Math.SQRT1_2 * h, t.rect(n - u, i - u, 2 * u, 2 * u);
                        break
                    }
                    d += Y;
                case"rectRot":
                    o = Math.cos(d) * h, s = Math.sin(d) * h, t.moveTo(n - o, i - s), t.lineTo(n + s, i - o), t.lineTo(n + o, i + s), t.lineTo(n - s, i + o), t.closePath();
                    break;
                case"crossRot":
                    d += Y;
                case"cross":
                    o = Math.cos(d) * h, s = Math.sin(d) * h, t.moveTo(n - o, i - s), t.lineTo(n + o, i + s), t.moveTo(n + s, i - o), t.lineTo(n - s, i + o);
                    break;
                case"star":
                    o = Math.cos(d) * h, s = Math.sin(d) * h, t.moveTo(n - o, i - s), t.lineTo(n + o, i + s), t.moveTo(n + s, i - o), t.lineTo(n - s, i + o), d += Y, o = Math.cos(d) * h, s = Math.sin(d) * h, t.moveTo(n - o, i - s), t.lineTo(n + o, i + s), t.moveTo(n + s, i - o), t.lineTo(n - s, i + o);
                    break;
                case"line":
                    o = Math.cos(d) * h, s = Math.sin(d) * h, t.moveTo(n - o, i - s), t.lineTo(n + o, i + s);
                    break;
                case"dash":
                    t.moveTo(n, i), t.lineTo(n + Math.cos(d) * h, i + Math.sin(d) * h)
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
        }
    }

    function re(t, e, n) {
        return n = n || .5, !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
    }

    function oe(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    }

    function ae(t) {
        t.restore()
    }

    function se(t, e, n, i, r) {
        if (!e) return t.lineTo(n.x, n.y);
        if ("middle" === r) {
            var o = (e.x + n.x) / 2;
            t.lineTo(o, e.y), t.lineTo(o, n.y)
        } else "after" === r != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y)
    }

    function ue(t, e, n, i) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y)
    }

    function ce(t, e, n, i, r) {
        var o, a, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, u = x(e) ? e : [e],
            c = s.strokeWidth > 0 && "" !== s.strokeColor;
        for (t.save(), t.font = r.string, le(t, s), o = 0; o < u.length; ++o) a = u[o], c && (s.strokeColor && (t.strokeStyle = s.strokeColor), _(s.strokeWidth) || (t.lineWidth = s.strokeWidth), t.strokeText(a, n, i, s.maxWidth)), t.fillText(a, n, i, s.maxWidth), fe(t, n, i, a, s), i += r.lineHeight;
        t.restore()
    }

    function le(t, e) {
        e.translation && t.translate(e.translation[0], e.translation[1]), _(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
    }

    function fe(t, e, n, i, r) {
        if (r.strikethrough || r.underline) {
            var o = t.measureText(i), a = e - o.actualBoundingBoxLeft, s = e + o.actualBoundingBoxRight,
                u = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent,
                l = r.strikethrough ? (u + c) / 2 : c;
            t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = r.decorationWidth || 2, t.moveTo(a, l), t.lineTo(s, l), t.stroke()
        }
    }

    function he(t, e) {
        var n = e.x, i = e.y, r = e.w, o = e.h, a = e.radius;
        t.arc(n + a.topLeft, i + a.topLeft, a.topLeft, -$, z, !0), t.lineTo(n, i + o - a.bottomLeft), t.arc(n + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, z, $, !0), t.lineTo(n + r - a.bottomRight, i + o), t.arc(n + r - a.bottomRight, i + o - a.bottomRight, a.bottomRight, $, 0, !0), t.lineTo(n + r, i + a.topRight), t.arc(n + r - a.topRight, i + a.topRight, a.topRight, 0, -$, !0), t.lineTo(n + a.topLeft, i)
    }

    var de = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        pe = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

    function ve(t, e) {
        var n = ("" + t).match(de);
        if (!n || "normal" === n[1]) return 1.2 * e;
        switch (t = +n[2], n[3]) {
            case"px":
                return t;
            case"%":
                t /= 100
        }
        return e * t
    }

    function ge(t, e) {
        var n, i = {}, r = w(e), o = r ? Object.keys(e) : e, a = w(t) ? r ? function (n) {
            return E(t[n], t[e[n]])
        } : function (e) {
            return t[e]
        } : function () {
            return t
        }, s = l(o);
        try {
            for (s.s(); !(n = s.n()).done;) {
                var u = n.value;
                i[u] = +a(u) || 0
            }
        } catch (t) {
            s.e(t)
        } finally {
            s.f()
        }
        return i
    }

    function ye(t) {
        return ge(t, {top: "y", right: "x", bottom: "y", left: "x"})
    }

    function me(t) {
        return ge(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function be(t) {
        var e = ye(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
    }

    function _e(t, e) {
        t = t || {}, e = e || Jt.font;
        var n = E(t.size, e.size);
        "string" == typeof n && (n = parseInt(n, 10));
        var i = E(t.style, e.style);
        i && !("" + i).match(pe) && (console.warn('Invalid font style specified: "' + i + '"'), i = "");
        var r = {
            family: E(t.family, e.family),
            lineHeight: ve(E(t.lineHeight, e.lineHeight), n),
            size: n,
            style: i,
            weight: E(t.weight, e.weight),
            string: ""
        };
        return r.string = function (t) {
            return !t || _(t.size) || _(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(r), r
    }

    function xe(t, e, n, i) {
        var r, o, a, s = !0;
        for (r = 0, o = t.length; r < o; ++r) if (void 0 !== (a = t[r]) && (void 0 !== e && "function" == typeof a && (a = a(e), s = !1), void 0 !== n && x(a) && (a = a[n % a.length], s = !1), void 0 !== a)) return i && !s && (i.cacheable = !1), a
    }

    function we(t, e) {
        return Object.assign(Object.create(t), e)
    }

    function ke(t, e, n) {
        n = n || function (n) {
            return t[n] < e
        };
        for (var i, r = t.length - 1, o = 0; r - o > 1;) n(i = o + r >> 1) ? o = i : r = i;
        return {lo: o, hi: r}
    }

    var Se = function (t, e, n) {
        return ke(t, n, (function (i) {
            return t[i][e] < n
        }))
    }, Ee = function (t, e, n) {
        return ke(t, n, (function (i) {
            return t[i][e] >= n
        }))
    };
    var Oe = ["push", "pop", "shift", "splice", "unshift"];

    function Me(t, e) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners, r = i.indexOf(e);
            -1 !== r && i.splice(r, 1), i.length > 0 || (Oe.forEach((function (e) {
                delete t[e]
            })), delete t._chartjs)
        }
    }

    function Te(t) {
        var e, n, i = new Set;
        for (e = 0, n = t.length; e < n; ++e) i.add(t[e]);
        return i.size === n ? t : Array.from(i)
    }

    function Ae(t) {
        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {
                return t[0]
            };
        B(a) || (a = ze("_fallback", t));
        var u = (o(e = {}, Symbol.toStringTag, "Object"), o(e, "_cacheable", !0), o(e, "_scopes", t), o(e, "_rootScopes", i), o(e, "_fallback", a), o(e, "_getTarget", s), o(e, "override", (function (e) {
            return Ae([e].concat(r(t)), n, i, a)
        })), e);
        return new Proxy(u, {
            deleteProperty: function (e, n) {
                return delete e[n], delete e._keys, delete t[0][n], !0
            }, get: function (e, i) {
                return je(e, i, (function () {
                    return We(i, n, t, e)
                }))
            }, getOwnPropertyDescriptor: function (t, e) {
                return Reflect.getOwnPropertyDescriptor(t._scopes[0], e)
            }, getPrototypeOf: function () {
                return Reflect.getPrototypeOf(t[0])
            }, has: function (t, e) {
                return He(t).includes(e)
            }, ownKeys: function (t) {
                return He(t)
            }, set: function (t, e, n) {
                return (t._storage || (t._storage = s()))[e] = n, delete t[e], delete t._keys, !0
            }
        })
    }

    function Ce(t, e, n, i) {
        var r = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: n,
            _stack: new Set,
            _descriptors: Pe(t, i),
            setContext: function (e) {
                return Ce(t, e, n, i)
            },
            override: function (r) {
                return Ce(t.override(r), e, n, i)
            }
        };
        return new Proxy(r, {
            deleteProperty: function (e, n) {
                return delete e[n], delete t[n], !0
            }, get: function (t, e, n) {
                return je(t, e, (function () {
                    return function (t, e, n) {
                        var i = t._proxy, r = t._context, o = t._subProxy, a = t._descriptors, s = i[e];
                        W(s) && a.isScriptable(e) && (s = function (t, e, n, i) {
                            var r = n._proxy, o = n._context, a = n._subProxy, s = n._stack;
                            if (s.has(t)) throw new Error("Recursion detected: " + Array.from(s).join("->") + "->" + t);
                            s.add(t), e = e(o, a || i), s.delete(t), w(e) && (e = Fe(r._scopes, r, t, e));
                            return e
                        }(e, s, t, n));
                        x(s) && s.length && (s = function (t, e, n, i) {
                            var r = n._proxy, o = n._context, a = n._subProxy, s = n._descriptors;
                            if (B(o.index) && i(t)) e = e[o.index % e.length]; else if (w(e[0])) {
                                var u = e, c = r._scopes.filter((function (t) {
                                    return t !== u
                                }));
                                e = [];
                                var f, h = l(u);
                                try {
                                    for (h.s(); !(f = h.n()).done;) {
                                        var d = f.value, p = Fe(c, r, t, d);
                                        e.push(Ce(p, o, a && a[t], s))
                                    }
                                } catch (t) {
                                    h.e(t)
                                } finally {
                                    h.f()
                                }
                            }
                            return e
                        }(e, s, t, a.isIndexable));
                        Le(e, s) && (s = Ce(s, r, o && o[e], a));
                        return s
                    }(t, e, n)
                }))
            }, getOwnPropertyDescriptor: function (e, n) {
                return e._descriptors.allKeys ? Reflect.has(t, n) ? {
                    enumerable: !0,
                    configurable: !0
                } : void 0 : Reflect.getOwnPropertyDescriptor(t, n)
            }, getPrototypeOf: function () {
                return Reflect.getPrototypeOf(t)
            }, has: function (e, n) {
                return Reflect.has(t, n)
            }, ownKeys: function () {
                return Reflect.ownKeys(t)
            }, set: function (e, n, i) {
                return t[n] = i, delete e[n], !0
            }
        })
    }

    function Pe(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {scriptable: !0, indexable: !0},
            n = t._scriptable, i = void 0 === n ? e.scriptable : n, r = t._indexable,
            o = void 0 === r ? e.indexable : r, a = t._allKeys, s = void 0 === a ? e.allKeys : a;
        return {
            allKeys: s, scriptable: i, indexable: o, isScriptable: W(i) ? i : function () {
                return i
            }, isIndexable: W(o) ? o : function () {
                return o
            }
        }
    }

    var De = function (t, e) {
        return t ? t + F(e) : e
    }, Le = function (t, e) {
        return w(e) && "adapters" !== t
    };

    function je(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        var i = n();
        return t[e] = i, i
    }

    function Ie(t, e, n) {
        return W(t) ? t(e, n) : t
    }

    var Ne = function (t, e) {
        return !0 === t ? e : "string" == typeof t ? R(e, t) : void 0
    };

    function Re(t, e, n, i) {
        var r, o = l(e);
        try {
            for (o.s(); !(r = o.n()).done;) {
                var a = r.value, s = Ne(n, a);
                if (s) {
                    t.add(s);
                    var u = Ie(s._fallback, n, s);
                    if (B(u) && u !== n && u !== i) return u
                } else if (!1 === s && B(i) && n !== i) return null
            }
        } catch (t) {
            o.e(t)
        } finally {
            o.f()
        }
        return !1
    }

    function Fe(t, e, n, i) {
        var o = e._rootScopes, a = Ie(e._fallback, n, i), s = [].concat(r(t), r(o)), u = new Set;
        u.add(i);
        var c = Be(u, s, n, a || n);
        return null !== c && ((!B(a) || a === n || null !== (c = Be(u, s, a, c))) && Ae(Array.from(u), [""], o, a, (function () {
            return function (t, e, n) {
                var i = t._getTarget();
                e in i || (i[e] = {});
                var r = i[e];
                if (x(r) && w(n)) return n;
                return r
            }(e, n, i)
        })))
    }

    function Be(t, e, n, i) {
        for (; n;) n = Re(t, e, n, i);
        return n
    }

    function We(t, e, n, i) {
        var r, o, a = l(e);
        try {
            for (a.s(); !(o = a.n()).done;) {
                var s = o.value;
                if (r = ze(De(s, t), n), B(r)) return Le(t, r) ? Fe(n, i, t, r) : r
            }
        } catch (t) {
            a.e(t)
        } finally {
            a.f()
        }
    }

    function ze(t, e) {
        var n, i = l(e);
        try {
            for (i.s(); !(n = i.n()).done;) {
                var r = n.value;
                if (r) {
                    var o = r[t];
                    if (B(o)) return o
                }
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
    }

    function He(t) {
        var e = t._keys;
        return e || (e = t._keys = function (t) {
            var e, n = new Set, i = l(t);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    var r, o = e.value, a = l(Object.keys(o).filter((function (t) {
                        return !t.startsWith("_")
                    })));
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var s = r.value;
                            n.add(s)
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return Array.from(n)
        }(t._scopes)), e
    }

    var Ve = Number.EPSILON || 1e-14, qe = function (t, e) {
        return e < t.length && !t[e].skip && t[e]
    }, Ue = function (t) {
        return "x" === t ? "y" : "x"
    };

    function $e(t, e, n) {
        for (var i, r, o, a, s, u = t.length, c = qe(t, 0), l = 0; l < u - 1; ++l) s = c, c = qe(t, l + 1), s && c && (Z(e[l], 0, Ve) ? n[l] = n[l + 1] = 0 : (i = n[l] / e[l], r = n[l + 1] / e[l], (a = Math.pow(i, 2) + Math.pow(r, 2)) <= 9 || (o = 3 / Math.sqrt(a), n[l] = i * o * e[l], n[l + 1] = r * o * e[l])))
    }

    function Ye(t, e) {
        for (var n, i, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", a = Ue(o), s = t.length, u = qe(t, 0), c = 0; c < s; ++c) if (i = r, r = u, u = qe(t, c + 1), r) {
            var l = r[o], f = r[a];
            i && (n = (l - i[o]) / 3, r["cp1".concat(o)] = l - n, r["cp1".concat(a)] = f - n * e[c]), u && (n = (u[o] - l) / 3, r["cp2".concat(o)] = l + n, r["cp2".concat(a)] = f + n * e[c])
        }
    }

    function Xe(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }

    function Ge(t, e, n, i, r) {
        var o, a, s, u, c, l, f, h, d, p, v, g, y, m, b, _, x;
        if (e.spanGaps && (t = t.filter((function (t) {
            return !t.skip
        }))), "monotone" === e.cubicInterpolationMode) !function (t) {
            var e, n, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", o = Ue(r),
                a = t.length, s = Array(a).fill(0), u = Array(a), c = qe(t, 0);
            for (e = 0; e < a; ++e) if (n = i, i = c, c = qe(t, e + 1), i) {
                if (c) {
                    var l = c[r] - i[r];
                    s[e] = 0 !== l ? (c[o] - i[o]) / l : 0
                }
                u[e] = n ? c ? K(s[e - 1]) !== K(s[e]) ? 0 : (s[e - 1] + s[e]) / 2 : s[e - 1] : s[e]
            }
            $e(t, s, u), Ye(t, u, r)
        }(t, r); else {
            var w = i ? t[t.length - 1] : t[0];
            for (o = 0, a = t.length; o < a; ++o) s = t[o], c = w, l = s, f = t[Math.min(o + 1, a - (i ? 0 : 1)) % a], h = e.tension, d = void 0, p = void 0, v = void 0, g = void 0, y = void 0, m = void 0, b = void 0, _ = void 0, x = void 0, d = c.skip ? l : c, p = l, v = f.skip ? l : f, g = rt(p, d), y = rt(v, p), m = g / (g + y), b = y / (g + y), _ = h * (m = isNaN(m) ? 0 : m), x = h * (b = isNaN(b) ? 0 : b), u = {
                previous: {
                    x: p.x - _ * (v.x - d.x),
                    y: p.y - _ * (v.y - d.y)
                }, next: {x: p.x + x * (v.x - d.x), y: p.y + x * (v.y - d.y)}
            }, s.cp1x = u.previous.x, s.cp1y = u.previous.y, s.cp2x = u.next.x, s.cp2y = u.next.y, w = s
        }
        e.capBezierPoints && function (t, e) {
            var n, i, r, o, a, s = re(t[0], e);
            for (n = 0, i = t.length; n < i; ++n) a = o, o = s, s = n < i - 1 && re(t[n + 1], e), o && (r = t[n], a && (r.cp1x = Xe(r.cp1x, e.left, e.right), r.cp1y = Xe(r.cp1y, e.top, e.bottom)), s && (r.cp2x = Xe(r.cp2x, e.left, e.right), r.cp2y = Xe(r.cp2y, e.top, e.bottom)))
        }(t, n)
    }

    function Ke() {
        return "undefined" != typeof window && "undefined" != typeof document
    }

    function Qe(t) {
        var e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
    }

    function Je(t, e, n) {
        var i;
        return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
    }

    var Ze = function (t) {
        return window.getComputedStyle(t, null)
    };
    var tn = ["top", "right", "bottom", "left"];

    function en(t, e, n) {
        var i = {};
        n = n ? "-" + n : "";
        for (var r = 0; r < 4; r++) {
            var o = tn[r];
            i[o] = parseFloat(t[e + "-" + o + n]) || 0
        }
        return i.width = i.left + i.right, i.height = i.top + i.bottom, i
    }

    function nn(t, e) {
        var n = e.canvas, i = e.currentDevicePixelRatio, r = Ze(n), o = "border-box" === r.boxSizing,
            a = en(r, "padding"), s = en(r, "border", "width"), u = function (t, e) {
                var n, i, r = t.native || t, o = r.touches, a = o && o.length ? o[0] : r, s = a.offsetX, u = a.offsetY,
                    c = !1;
                if (function (t, e, n) {
                    return (t > 0 || e > 0) && (!n || !n.shadowRoot)
                }(s, u, r.target)) n = s, i = u; else {
                    var l = e.getBoundingClientRect();
                    n = a.clientX - l.left, i = a.clientY - l.top, c = !0
                }
                return {x: n, y: i, box: c}
            }(t, n), c = u.x, l = u.y, f = u.box, h = a.left + (f && s.left), d = a.top + (f && s.top), p = e.width,
            v = e.height;
        return o && (p -= a.width + s.width, v -= a.height + s.height), {
            x: Math.round((c - h) / p * n.width / i),
            y: Math.round((l - d) / v * n.height / i)
        }
    }

    var rn = function (t) {
        return Math.round(10 * t) / 10
    };

    function on(t, e, n, i) {
        var r = Ze(t), o = en(r, "margin"), a = Je(r.maxWidth, t, "clientWidth") || q,
            s = Je(r.maxHeight, t, "clientHeight") || q, u = function (t, e, n) {
                var i, r;
                if (void 0 === e || void 0 === n) {
                    var o = Qe(t);
                    if (o) {
                        var a = o.getBoundingClientRect(), s = Ze(o), u = en(s, "border", "width"), c = en(s, "padding");
                        e = a.width - c.width - u.width, n = a.height - c.height - u.height, i = Je(s.maxWidth, o, "clientWidth"), r = Je(s.maxHeight, o, "clientHeight")
                    } else e = t.clientWidth, n = t.clientHeight
                }
                return {width: e, height: n, maxWidth: i || q, maxHeight: r || q}
            }(t, e, n), c = u.width, l = u.height;
        if ("content-box" === r.boxSizing) {
            var f = en(r, "border", "width"), h = en(r, "padding");
            c -= h.width + f.width, l -= h.height + f.height
        }
        return c = Math.max(0, c - o.width), l = Math.max(0, i ? Math.floor(c / i) : l - o.height), c = rn(Math.min(c, a, u.maxWidth)), l = rn(Math.min(l, s, u.maxHeight)), c && !l && (l = rn(c / 2)), {
            width: c,
            height: l
        }
    }

    function an(t, e, n) {
        var i = e || 1, r = Math.floor(t.height * i), o = Math.floor(t.width * i);
        t.height = r / i, t.width = o / i;
        var a = t.canvas;
        return a.style && (n || !a.style.height && !a.style.width) && (a.style.height = "".concat(t.height, "px"), a.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== i || a.height !== r || a.width !== o) && (t.currentDevicePixelRatio = i, a.height = r, a.width = o, t.ctx.setTransform(i, 0, 0, i, 0, 0), !0)
    }

    var sn = function () {
        var t = !1;
        try {
            var e = {
                get passive() {
                    return t = !0, !1
                }
            };
            window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {
        }
        return t
    }();

    function un(t, e) {
        var n = function (t, e) {
            return Ze(t).getPropertyValue(e)
        }(t, e), i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? +i[1] : void 0
    }

    function cn(t, e, n, i) {
        return {x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y)}
    }

    function ln(t, e, n, i) {
        return {
            x: t.x + n * (e.x - t.x),
            y: "middle" === i ? n < .5 ? t.y : e.y : "after" === i ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
        }
    }

    function fn(t, e, n, i) {
        var r = {x: t.cp2x, y: t.cp2y}, o = {x: e.cp1x, y: e.cp1y}, a = cn(t, r, n), s = cn(r, o, n), u = cn(o, e, n),
            c = cn(a, s, n), l = cn(s, u, n);
        return cn(c, l, n)
    }

    var hn = new Map;

    function dn(t, e, n) {
        return function (t, e) {
            e = e || {};
            var n = t + JSON.stringify(e), i = hn.get(n);
            return i || (i = new Intl.NumberFormat(t, e), hn.set(n, i)), i
        }(e, n).format(t)
    }

    function pn(t, e, n) {
        return t ? function (t, e) {
            return {
                x: function (n) {
                    return t + t + e - n
                }, setWidth: function (t) {
                    e = t
                }, textAlign: function (t) {
                    return "center" === t ? t : "right" === t ? "left" : "right"
                }, xPlus: function (t, e) {
                    return t - e
                }, leftForLtr: function (t, e) {
                    return t - e
                }
            }
        }(e, n) : {
            x: function (t) {
                return t
            }, setWidth: function (t) {
            }, textAlign: function (t) {
                return t
            }, xPlus: function (t, e) {
                return t + e
            }, leftForLtr: function (t, e) {
                return t
            }
        }
    }

    function vn(t, e) {
        var n, i;
        "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i)
    }

    function gn(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
    }

    function yn(t) {
        return "angle" === t ? {between: st, compare: ot, normalize: at} : {
            between: function (t, e, n) {
                return t >= Math.min(e, n) && t <= Math.max(n, e)
            }, compare: function (t, e) {
                return t - e
            }, normalize: function (t) {
                return t
            }
        }
    }

    function mn(t) {
        var e = t.start, n = t.end, i = t.count;
        return {start: e % i, end: n % i, loop: t.loop && (n - e + 1) % i == 0, style: t.style}
    }

    function bn(t, e, n) {
        if (!n) return [t];
        for (var i, r, o, a = n.property, s = n.start, u = n.end, c = e.length, l = yn(a), f = l.compare, h = l.between, d = l.normalize, p = function (t, e, n) {
            var i, r, o = n.property, a = n.start, s = n.end, u = yn(o), c = u.between, l = u.normalize, f = e.length,
                h = t.start, d = t.end, p = t.loop;
            if (p) {
                for (h += f, d += f, i = 0, r = f; i < r && c(l(e[h % f][o]), a, s); ++i) h--, d--;
                h %= f, d %= f
            }
            return d < h && (d += f), {start: h, end: d, loop: p, style: t.style}
        }(t, e, n), v = p.start, g = p.end, y = p.loop, m = p.style, b = [], _ = !1, x = null, w = function () {
            return _ || h(s, o, i) && 0 !== f(s, o)
        }, k = function () {
            return !_ || 0 === f(u, i) || h(u, o, i)
        }, S = v, E = v; S <= g; ++S) (r = e[S % c]).skip || (i = d(r[a])) !== o && (_ = h(i, s, u), null === x && w() && (x = 0 === f(i, s) ? S : E), null !== x && k() && (b.push(mn({
            start: x,
            end: S,
            loop: y,
            count: c,
            style: m
        })), x = null), E = S, o = i);
        return null !== x && b.push(mn({start: x, end: g, loop: y, count: c, style: m})), b
    }

    function _n(t, e) {
        for (var n = [], i = t.segments, o = 0; o < i.length; o++) {
            var a = bn(i[o], t.points, e);
            a.length && n.push.apply(n, r(a))
        }
        return n
    }

    function xn(t, e, n, i) {
        return i && i.setContext && n ? function (t, e, n, i) {
            var r = t._chart.getContext(), o = wn(t.options), a = t._datasetIndex, s = t.options.spanGaps, u = n.length,
                c = [], f = o, h = e[0].start, d = h;

            function p(t, e, i, r) {
                var o = s ? -1 : 1;
                if (t !== e) {
                    for (t += u; n[t % u].skip;) t -= o;
                    for (; n[e % u].skip;) e += o;
                    t % u != e % u && (c.push({start: t % u, end: e % u, loop: i, style: r}), f = r, h = e % u)
                }
            }

            var v, g = l(e);
            try {
                for (g.s(); !(v = g.n()).done;) {
                    var y = v.value;
                    h = s ? h : y.start;
                    var m = n[h % u], b = void 0;
                    for (d = h + 1; d <= y.end; d++) {
                        var _ = n[d % u];
                        kn(b = wn(i.setContext(we(r, {
                            type: "segment",
                            p0: m,
                            p1: _,
                            p0DataIndex: (d - 1) % u,
                            p1DataIndex: d % u,
                            datasetIndex: a
                        }))), f) && p(h, d - 1, y.loop, f), m = _, f = b
                    }
                    h < d - 1 && p(h, d - 1, y.loop, f)
                }
            } catch (t) {
                g.e(t)
            } finally {
                g.f()
            }
            return c
        }(t, e, n, i) : e
    }

    function wn(t) {
        return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor
        }
    }

    function kn(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e)
    }

    function Sn(t, e, n) {
        return (Sn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var i = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Cn(t));) ;
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        })(t, e, n || t)
    }

    function En(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && On(t, e)
    }

    function On(t, e) {
        return (On = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function Mn(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = Cn(t);
            if (e) {
                var r = Cn(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return Tn(this, n)
        }
    }

    function Tn(t, e) {
        return !e || "object" !== jn(e) && "function" != typeof e ? An(t) : e
    }

    function An(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function Cn(t) {
        return (Cn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Pn(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
            if (null == n) return;
            var i, r, o = [], a = !0, s = !1;
            try {
                for (n = n.call(t); !(a = (i = n.next()).done) && (o.push(i.value), !e || o.length !== e); a = !0) ;
            } catch (t) {
                s = !0, r = t
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return o
        }(t, e) || Nn(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Dn(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function Ln(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = Nn(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0, r = function () {
                };
                return {
                    s: r, n: function () {
                        return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
                    }, e: function (t) {
                        throw t
                    }, f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0, s = !1;
        return {
            s: function () {
                n = n.call(t)
            }, n: function () {
                var t = n.next();
                return a = t.done, t
            }, e: function (t) {
                s = !0, o = t
            }, f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function jn(t) {
        return (jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function In(t) {
        return function (t) {
            if (Array.isArray(t)) return Rn(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || Nn(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Nn(t, e) {
        if (t) {
            if ("string" == typeof t) return Rn(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rn(t, e) : void 0
        }
    }

    function Rn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function Fn(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Bn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Wn(t, e, n) {
        return e && Bn(t.prototype, e), n && Bn(t, n), t
    }

    var zn = new (function () {
        function t() {
            Fn(this, t), this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
        }

        return Wn(t, [{
            key: "_notify", value: function (t, e, n, i) {
                var r = e.listeners[i], o = e.duration;
                r.forEach((function (i) {
                    return i({chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(n - e.start, o)})
                }))
            }
        }, {
            key: "_refresh", value: function () {
                var t = this;
                this._request || (this._running = !0, this._request = d.call(window, (function () {
                    t._update(), t._request = null, t._running && t._refresh()
                })))
            }
        }, {
            key: "_update", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(), n = 0;
                this._charts.forEach((function (i, r) {
                    if (i.running && i.items.length) {
                        for (var o, a = i.items, s = a.length - 1, u = !1; s >= 0; --s) (o = a[s])._active ? (o._total > i.duration && (i.duration = o._total), o.tick(e), u = !0) : (a[s] = a[a.length - 1], a.pop());
                        u && (r.draw(), t._notify(r, i, e, "progress")), a.length || (i.running = !1, t._notify(r, i, e, "complete"), i.initial = !1), n += a.length
                    }
                })), this._lastDate = e, 0 === n && (this._running = !1)
            }
        }, {
            key: "_getAnims", value: function (t) {
                var e = this._charts, n = e.get(t);
                return n || (n = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: {complete: [], progress: []}
                }, e.set(t, n)), n
            }
        }, {
            key: "listen", value: function (t, e, n) {
                this._getAnims(t).listeners[e].push(n)
            }
        }, {
            key: "add", value: function (t, e) {
                var n;
                e && e.length && (n = this._getAnims(t).items).push.apply(n, In(e))
            }
        }, {
            key: "has", value: function (t) {
                return this._getAnims(t).items.length > 0
            }
        }, {
            key: "start", value: function (t) {
                var e = this._charts.get(t);
                e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((function (t, e) {
                    return Math.max(t, e._duration)
                }), 0), this._refresh())
            }
        }, {
            key: "running", value: function (t) {
                if (!this._running) return !1;
                var e = this._charts.get(t);
                return !!(e && e.running && e.items.length)
            }
        }, {
            key: "stop", value: function (t) {
                var e = this._charts.get(t);
                if (e && e.items.length) {
                    for (var n = e.items, i = n.length - 1; i >= 0; --i) n[i].cancel();
                    e.items = [], this._notify(t, e, Date.now(), "complete")
                }
            }
        }, {
            key: "remove", value: function (t) {
                return this._charts.delete(t)
            }
        }]), t
    }()), Hn = {
        boolean: function (t, e, n) {
            return n > .5 ? e : t
        }, color: function (t, e, n) {
            var i = $t(t || "transparent"), r = i.valid && $t(e || "transparent");
            return r && r.valid ? r.mix(i, n).hexString() : e
        }, number: function (t, e, n) {
            return t + (e - t) * n
        }
    }, Vn = function () {
        function t(e, n, i, r) {
            Fn(this, t);
            var o = n[i];
            r = xe([e.to, r, o, e.from]);
            var a = xe([e.from, o, r]);
            this._active = !0, this._fn = e.fn || Hn[e.type || jn(a)], this._easing = ht[e.easing] || ht.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = n, this._prop = i, this._from = a, this._to = r, this._promises = void 0
        }

        return Wn(t, [{
            key: "active", value: function () {
                return this._active
            }
        }, {
            key: "update", value: function (t, e, n) {
                if (this._active) {
                    this._notify(!1);
                    var i = this._target[this._prop], r = n - this._start, o = this._duration - r;
                    this._start = n, this._duration = Math.floor(Math.max(o, t.duration)), this._total += r, this._loop = !!t.loop, this._to = xe([t.to, e, i, t.from]), this._from = xe([t.from, i, e])
                }
            }
        }, {
            key: "cancel", value: function () {
                this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
            }
        }, {
            key: "tick", value: function (t) {
                var e, n = t - this._start, i = this._duration, r = this._prop, o = this._from, a = this._loop,
                    s = this._to;
                if (this._active = o !== s && (a || n < i), !this._active) return this._target[r] = s, void this._notify(!0);
                n < 0 ? this._target[r] = o : (e = n / i % 2, e = a && e > 1 ? 2 - e : e, e = this._easing(Math.min(1, Math.max(0, e))), this._target[r] = this._fn(o, s, e))
            }
        }, {
            key: "wait", value: function () {
                var t = this._promises || (this._promises = []);
                return new Promise((function (e, n) {
                    t.push({res: e, rej: n})
                }))
            }
        }, {
            key: "_notify", value: function (t) {
                for (var e = t ? "res" : "rej", n = this._promises || [], i = 0; i < n.length; i++) n[i][e]()
            }
        }]), t
    }();
    Jt.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    });
    var qn = Object.keys(Jt.animation);
    Jt.describe("animation", {
        _fallback: !1, _indexable: !1, _scriptable: function (t) {
            return "onProgress" !== t && "onComplete" !== t && "fn" !== t
        }
    }), Jt.set("animations", {
        colors: {type: "color", properties: ["color", "borderColor", "backgroundColor"]},
        numbers: {type: "number", properties: ["x", "y", "borderWidth", "radius", "tension"]}
    }), Jt.describe("animations", {_fallback: "animation"}), Jt.set("transitions", {
        active: {animation: {duration: 400}},
        resize: {animation: {duration: 0}},
        show: {animations: {colors: {from: "transparent"}, visible: {type: "boolean", duration: 0}}},
        hide: {
            animations: {
                colors: {to: "transparent"}, visible: {
                    type: "boolean", easing: "linear", fn: function (t) {
                        return 0 | t
                    }
                }
            }
        }
    });
    var Un = function () {
        function t(e, n) {
            Fn(this, t), this._chart = e, this._properties = new Map, this.configure(n)
        }

        return Wn(t, [{
            key: "configure", value: function (t) {
                if (w(t)) {
                    var e = this._properties;
                    Object.getOwnPropertyNames(t).forEach((function (n) {
                        var i = t[n];
                        if (w(i)) {
                            var r, o = {}, a = Ln(qn);
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var s = r.value;
                                    o[s] = i[s]
                                }
                            } catch (t) {
                                a.e(t)
                            } finally {
                                a.f()
                            }
                            (x(i.properties) && i.properties || [n]).forEach((function (t) {
                                t !== n && e.has(t) || e.set(t, o)
                            }))
                        }
                    }))
                }
            }
        }, {
            key: "_animateOptions", value: function (t, e) {
                var n = e.options, i = function (t, e) {
                    if (!e) return;
                    var n = t.options;
                    if (!n) return void (t.options = e);
                    n.$shared && (t.options = n = Object.assign({}, n, {$shared: !1, $animations: {}}));
                    return n
                }(t, n);
                if (!i) return [];
                var r = this._createAnimations(i, n);
                return n.$shared && function (t, e) {
                    for (var n = [], i = Object.keys(e), r = 0; r < i.length; r++) {
                        var o = t[i[r]];
                        o && o.active() && n.push(o.wait())
                    }
                    return Promise.all(n)
                }(t.options.$animations, n).then((function () {
                    t.options = n
                }), (function () {
                })), r
            }
        }, {
            key: "_createAnimations", value: function (t, e) {
                var n, i = this._properties, r = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e),
                    s = Date.now();
                for (n = a.length - 1; n >= 0; --n) {
                    var u = a[n];
                    if ("$" !== u.charAt(0)) if ("options" !== u) {
                        var c = e[u], l = o[u], f = i.get(u);
                        if (l) {
                            if (f && l.active()) {
                                l.update(f, c, s);
                                continue
                            }
                            l.cancel()
                        }
                        f && f.duration ? (o[u] = l = new Vn(f, t, u, c), r.push(l)) : t[u] = c
                    } else r.push.apply(r, In(this._animateOptions(t, e)))
                }
                return r
            }
        }, {
            key: "update", value: function (t, e) {
                if (0 !== this._properties.size) {
                    var n = this._createAnimations(t, e);
                    return n.length ? (zn.add(this._chart, n), !0) : void 0
                }
                Object.assign(t, e)
            }
        }]), t
    }();

    function $n(t, e) {
        var n = t && t.options || {}, i = n.reverse, r = void 0 === n.min ? e : 0, o = void 0 === n.max ? e : 0;
        return {start: i ? o : r, end: i ? r : o}
    }

    function Yn(t, e) {
        var n, i, r = [], o = t._getSortedDatasetMetas(e);
        for (n = 0, i = o.length; n < i; ++n) r.push(o[n].index);
        return r
    }

    function Xn(t, e, n) {
        var i, r, o, a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = t.keys,
            c = "single" === s.mode;
        if (null !== e) {
            for (i = 0, r = u.length; i < r; ++i) {
                if ((o = +u[i]) === n) {
                    if (s.all) continue;
                    break
                }
                a = t.values[o], k(a) && (c || 0 === e || K(e) === K(a)) && (e += a)
            }
            return e
        }
    }

    function Gn(t, e) {
        var n = t && t.options.stacked;
        return n || void 0 === n && void 0 !== e.stack
    }

    function Kn(t, e, n) {
        var i = t[e] || (t[e] = {});
        return i[n] || (i[n] = {})
    }

    function Qn(t, e, n, i) {
        var r, o = Ln(e.getMatchingVisibleMetas(i).reverse());
        try {
            for (o.s(); !(r = o.n()).done;) {
                var a = r.value, s = t[a.index];
                if (n && s > 0 || !n && s < 0) return a.index
            }
        } catch (t) {
            o.e(t)
        } finally {
            o.f()
        }
        return null
    }

    function Jn(t, e) {
        for (var n, i = t.chart, r = t._cachedMeta, o = i._stacks || (i._stacks = {}), a = r.iScale, s = r.vScale, u = r.index, c = a.axis, l = s.axis, f = function (t, e, n) {
            return "".concat(t.id, ".").concat(e.id, ".").concat(n.stack || n.type)
        }(a, s, r), h = e.length, d = 0; d < h; ++d) {
            var p = e[d], v = p[c], g = p[l];
            (n = (p._stacks || (p._stacks = {}))[l] = Kn(o, f, v))[u] = g, n._top = Qn(n, s, !0, r.type), n._bottom = Qn(n, s, !1, r.type)
        }
    }

    function Zn(t, e) {
        var n = t.scales;
        return Object.keys(n).filter((function (t) {
            return n[t].axis === e
        })).shift()
    }

    function ti(t, e) {
        var n = t.controller.index, i = t.vScale && t.vScale.axis;
        if (i) {
            var r, o = Ln(e = e || t._parsed);
            try {
                for (o.s(); !(r = o.n()).done;) {
                    var a = r.value._stacks;
                    if (!a || void 0 === a[i] || void 0 === a[i][n]) return;
                    delete a[i][n]
                }
            } catch (t) {
                o.e(t)
            } finally {
                o.f()
            }
        }
    }

    var ei = function (t) {
        return "reset" === t || "none" === t
    }, ni = function (t, e) {
        return e ? t : Object.assign({}, t)
    }, ii = function () {
        function t(e, n) {
            Fn(this, t), this.chart = e, this._ctx = e.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize()
        }

        return Wn(t, [{
            key: "initialize", value: function () {
                var t = this._cachedMeta;
                this.configure(), this.linkScales(), t._stacked = Gn(t.vScale, t), this.addElements()
            }
        }, {
            key: "updateIndex", value: function (t) {
                this.index !== t && ti(this._cachedMeta), this.index = t
            }
        }, {
            key: "linkScales", value: function () {
                var t = this.chart, e = this._cachedMeta, n = this.getDataset(), i = function (t, e, n, i) {
                        return "x" === t ? e : "r" === t ? i : n
                    }, r = e.xAxisID = E(n.xAxisID, Zn(t, "x")), o = e.yAxisID = E(n.yAxisID, Zn(t, "y")),
                    a = e.rAxisID = E(n.rAxisID, Zn(t, "r")), s = e.indexAxis, u = e.iAxisID = i(s, r, o, a),
                    c = e.vAxisID = i(s, o, r, a);
                e.xScale = this.getScaleForId(r), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(u), e.vScale = this.getScaleForId(c)
            }
        }, {
            key: "getDataset", value: function () {
                return this.chart.data.datasets[this.index]
            }
        }, {
            key: "getMeta", value: function () {
                return this.chart.getDatasetMeta(this.index)
            }
        }, {
            key: "getScaleForId", value: function (t) {
                return this.chart.scales[t]
            }
        }, {
            key: "_getOtherScale", value: function (t) {
                var e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale
            }
        }, {
            key: "reset", value: function () {
                this._update("reset")
            }
        }, {
            key: "_destroy", value: function () {
                var t = this._cachedMeta;
                this._data && Me(this._data, this), t._stacked && ti(t)
            }
        }, {
            key: "_dataCheck", value: function () {
                var t, e, n = this.getDataset(), i = n.data || (n.data = []), r = this._data;
                if (w(i)) this._data = function (t) {
                    var e, n, i, r = Object.keys(t), o = new Array(r.length);
                    for (e = 0, n = r.length; e < n; ++e) i = r[e], o[e] = {x: i, y: t[i]};
                    return o
                }(i); else if (r !== i) {
                    if (r) {
                        Me(r, this);
                        var o = this._cachedMeta;
                        ti(o), o._parsed = []
                    }
                    i && Object.isExtensible(i) && (e = this, (t = i)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {listeners: [e]}
                    }), Oe.forEach((function (e) {
                        var n = "_onData" + F(e), i = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0, enumerable: !1, value: function () {
                                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                                var a = i.apply(this, r);
                                return t._chartjs.listeners.forEach((function (t) {
                                    "function" == typeof t[n] && t[n].apply(t, r)
                                })), a
                            }
                        })
                    })))), this._syncList = [], this._data = i
                }
            }
        }, {
            key: "addElements", value: function () {
                var t = this._cachedMeta;
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
            }
        }, {
            key: "buildOrUpdateElements", value: function (t) {
                var e = this._cachedMeta, n = this.getDataset(), i = !1;
                this._dataCheck();
                var r = e._stacked;
                e._stacked = Gn(e.vScale, e), e.stack !== n.stack && (i = !0, ti(e), e.stack = n.stack), this._resyncElements(t), (i || r !== e._stacked) && Jn(this, e._parsed)
            }
        }, {
            key: "configure", value: function () {
                var t = this.chart.config, e = t.datasetScopeKeys(this._type),
                    n = t.getOptionScopes(this.getDataset(), e, !0);
                this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing
            }
        }, {
            key: "parse", value: function (t, e) {
                var n, i, r, o = this._cachedMeta, a = this._data, s = o.iScale, u = o._stacked, c = s.axis,
                    l = 0 === t && e === a.length || o._sorted, f = t > 0 && o._parsed[t - 1];
                if (!1 === this._parsing) o._parsed = a, o._sorted = !0, r = a; else {
                    r = x(a[t]) ? this.parseArrayData(o, a, t, e) : w(a[t]) ? this.parseObjectData(o, a, t, e) : this.parsePrimitiveData(o, a, t, e);
                    for (n = 0; n < e; ++n) o._parsed[n + t] = i = r[n], l && ((null === i[c] || f && i[c] < f[c]) && (l = !1), f = i);
                    o._sorted = l
                }
                u && Jn(this, r)
            }
        }, {
            key: "parsePrimitiveData", value: function (t, e, n, i) {
                var r, o, a, s = t.iScale, u = t.vScale, c = s.axis, l = u.axis, f = s.getLabels(), h = s === u,
                    d = new Array(i);
                for (r = 0, o = i; r < o; ++r) {
                    var p;
                    a = r + n, d[r] = (Dn(p = {}, c, h || s.parse(f[a], a)), Dn(p, l, u.parse(e[a], a)), p)
                }
                return d
            }
        }, {
            key: "parseArrayData", value: function (t, e, n, i) {
                var r, o, a, s, u = t.xScale, c = t.yScale, l = new Array(i);
                for (r = 0, o = i; r < o; ++r) s = e[a = r + n], l[r] = {x: u.parse(s[0], a), y: c.parse(s[1], a)};
                return l
            }
        }, {
            key: "parseObjectData", value: function (t, e, n, i) {
                var r, o, a, s, u = t.xScale, c = t.yScale, l = this._parsing, f = l.xAxisKey,
                    h = void 0 === f ? "x" : f, d = l.yAxisKey, p = void 0 === d ? "y" : d, v = new Array(i);
                for (r = 0, o = i; r < o; ++r) s = e[a = r + n], v[r] = {
                    x: u.parse(R(s, h), a),
                    y: c.parse(R(s, p), a)
                };
                return v
            }
        }, {
            key: "getParsed", value: function (t) {
                return this._cachedMeta._parsed[t]
            }
        }, {
            key: "getDataElement", value: function (t) {
                return this._cachedMeta.data[t]
            }
        }, {
            key: "applyStack", value: function (t, e, n) {
                var i = this.chart, r = this._cachedMeta, o = e[t.axis];
                return Xn({keys: Yn(i, !0), values: e._stacks[t.axis]}, o, r.index, {mode: n})
            }
        }, {
            key: "updateRangeFromParsed", value: function (t, e, n, i) {
                var r = n[e.axis], o = null === r ? NaN : r, a = i && n._stacks[e.axis];
                i && a && (i.values = a, o = Xn(i, r, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
            }
        }, {
            key: "getMinMax", value: function (t, e) {
                var n, i, r = this._cachedMeta, o = r._parsed, a = r._sorted && t === r.iScale, s = o.length,
                    u = this._getOtherScale(t), c = function (t, e, n) {
                        return t && !e.hidden && e._stacked && {keys: Yn(n, !0), values: null}
                    }(e, r, this.chart), l = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY},
                    f = function (t) {
                        var e = t.getUserBounds(), n = e.min, i = e.max, r = e.minDefined, o = e.maxDefined;
                        return {min: r ? n : Number.NEGATIVE_INFINITY, max: o ? i : Number.POSITIVE_INFINITY}
                    }(u), h = f.min, d = f.max;

                function p() {
                    var e = (i = o[n])[u.axis];
                    return !k(i[t.axis]) || h > e || d < e
                }

                for (n = 0; n < s && (p() || (this.updateRangeFromParsed(l, t, i, c), !a)); ++n) ;
                if (a) for (n = s - 1; n >= 0; --n) if (!p()) {
                    this.updateRangeFromParsed(l, t, i, c);
                    break
                }
                return l
            }
        }, {
            key: "getAllParsedValues", value: function (t) {
                var e, n, i, r = this._cachedMeta._parsed, o = [];
                for (e = 0, n = r.length; e < n; ++e) i = r[e][t.axis], k(i) && o.push(i);
                return o
            }
        }, {
            key: "getMaxOverflow", value: function () {
                return !1
            }
        }, {
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta, n = e.iScale, i = e.vScale, r = this.getParsed(t);
                return {
                    label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
                    value: i ? "" + i.getLabelForValue(r[i.axis]) : ""
                }
            }
        }, {
            key: "_update", value: function (t) {
                var e, n, i, r, o, a = this._cachedMeta;
                this.configure(), this._cachedDataOpts = {}, this.update(t || "default"), a._clip = (w(e = E(this.options.clip, function (t, e, n) {
                    if (!1 === n) return !1;
                    var i = $n(t, n), r = $n(e, n);
                    return {top: r.end, right: i.end, bottom: r.start, left: i.start}
                }(a.xScale, a.yScale, this.getMaxOverflow()))) ? (n = e.top, i = e.right, r = e.bottom, o = e.left) : n = i = r = o = e, {
                    top: n,
                    right: i,
                    bottom: r,
                    left: o,
                    disabled: !1 === e
                })
            }
        }, {
            key: "update", value: function (t) {
            }
        }, {
            key: "draw", value: function () {
                var t, e = this._ctx, n = this.chart, i = this._cachedMeta, r = i.data || [], o = n.chartArea, a = [],
                    s = this._drawStart || 0, u = this._drawCount || r.length - s;
                for (i.dataset && i.dataset.draw(e, o, s, u), t = s; t < s + u; ++t) {
                    var c = r[t];
                    c.hidden || (c.active ? a.push(c) : c.draw(e, o))
                }
                for (t = 0; t < a.length; ++t) a[t].draw(e, o)
            }
        }, {
            key: "getStyle", value: function (t, e) {
                var n = e ? "active" : "default";
                return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n)
            }
        }, {
            key: "getContext", value: function (t, e, n) {
                var i, r = this.getDataset();
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    var o = this._cachedMeta.data[t];
                    (i = o.$context || (o.$context = function (t, e, n) {
                        return we(t, {
                            active: !1,
                            dataIndex: e,
                            parsed: void 0,
                            raw: void 0,
                            element: n,
                            index: e,
                            mode: "default",
                            type: "data"
                        })
                    }(this.getContext(), t, o))).parsed = this.getParsed(t), i.raw = r.data[t], i.index = i.dataIndex = t
                } else (i = this.$context || (this.$context = function (t, e) {
                    return we(t, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: e,
                        index: e,
                        mode: "default",
                        type: "dataset"
                    })
                }(this.chart.getContext(), this.index))).dataset = r, i.index = i.datasetIndex = this.index;
                return i.active = !!e, i.mode = n, i
            }
        }, {
            key: "resolveDatasetElementOptions", value: function (t) {
                return this._resolveElementOptions(this.datasetElementType.id, t)
            }
        }, {
            key: "resolveDataElementOptions", value: function (t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t)
            }
        }, {
            key: "_resolveElementOptions", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    i = arguments.length > 2 ? arguments[2] : void 0, r = "active" === n, o = this._cachedDataOpts,
                    a = t + "-" + n, s = o[a], u = this.enableOptionSharing && B(i);
                if (s) return ni(s, u);
                var c = this.chart.config, l = c.datasetElementScopeKeys(this._type, t),
                    f = r ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
                    h = c.getOptionScopes(this.getDataset(), l), d = Object.keys(Jt.elements[t]), p = function () {
                        return e.getContext(i, r)
                    }, v = c.resolveNamedOptions(h, d, p, f);
                return v.$shared && (v.$shared = u, o[a] = Object.freeze(ni(v, u))), v
            }
        }, {
            key: "_resolveAnimations", value: function (t, e, n) {
                var i, r = this.chart, o = this._cachedDataOpts, a = "animation-".concat(e), s = o[a];
                if (s) return s;
                if (!1 !== r.options.animation) {
                    var u = this.chart.config, c = u.datasetAnimationScopeKeys(this._type, e),
                        l = u.getOptionScopes(this.getDataset(), c);
                    i = u.createResolver(l, this.getContext(t, n, e))
                }
                var f = new Un(r, i && i.animations);
                return i && i._cacheable && (o[a] = Object.freeze(f)), f
            }
        }, {
            key: "getSharedOptions", value: function (t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
            }
        }, {
            key: "includeOptions", value: function (t, e) {
                return !e || ei(t) || this.chart._animationsDisabled
            }
        }, {
            key: "updateElement", value: function (t, e, n, i) {
                ei(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n)
            }
        }, {
            key: "updateSharedOptions", value: function (t, e, n) {
                t && !ei(e) && this._resolveAnimations(void 0, e).update(t, n)
            }
        }, {
            key: "_setStyle", value: function (t, e, n, i) {
                t.active = i;
                var r = this.getStyle(e, i);
                this._resolveAnimations(e, n, i).update(t, {options: !i && this.getSharedOptions(r) || r})
            }
        }, {
            key: "removeHoverStyle", value: function (t, e, n) {
                this._setStyle(t, n, "active", !1)
            }
        }, {
            key: "setHoverStyle", value: function (t, e, n) {
                this._setStyle(t, n, "active", !0)
            }
        }, {
            key: "_removeDatasetHoverStyle", value: function () {
                var t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1)
            }
        }, {
            key: "_setDatasetHoverStyle", value: function () {
                var t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0)
            }
        }, {
            key: "_resyncElements", value: function (t) {
                var e, n = this._data, i = this._cachedMeta.data, r = Ln(this._syncList);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = Pn(e.value, 3), a = o[0], s = o[1], u = o[2];
                        this[a](s, u)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                this._syncList = [];
                var c = i.length, l = n.length, f = Math.min(l, c);
                f && this.parse(0, f), l > c ? this._insertElements(c, l - c, t) : l < c && this._removeElements(l, c - l)
            }
        }, {
            key: "_insertElements", value: function (t, e) {
                var n, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = this._cachedMeta,
                    o = r.data, a = t + e, s = function (t) {
                        for (t.length += e, n = t.length - 1; n >= a; n--) t[n] = t[n - e]
                    };
                for (s(o), n = t; n < a; ++n) o[n] = new this.dataElementType;
                this._parsing && s(r._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset")
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
            }
        }, {
            key: "_removeElements", value: function (t, e) {
                var n = this._cachedMeta;
                if (this._parsing) {
                    var i = n._parsed.splice(t, e);
                    n._stacked && ti(n, i)
                }
                n.data.splice(t, e)
            }
        }, {
            key: "_sync", value: function (t) {
                if (this._parsing) this._syncList.push(t); else {
                    var e = Pn(t, 3), n = e[0], i = e[1], r = e[2];
                    this[n](i, r)
                }
            }
        }, {
            key: "_onDataPush", value: function () {
                var t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t])
            }
        }, {
            key: "_onDataPop", value: function () {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
            }
        }, {
            key: "_onDataShift", value: function () {
                this._sync(["_removeElements", 0, 1])
            }
        }, {
            key: "_onDataSplice", value: function (t, e) {
                this._sync(["_removeElements", t, e]), this._sync(["_insertElements", t, arguments.length - 2])
            }
        }, {
            key: "_onDataUnshift", value: function () {
                this._sync(["_insertElements", 0, arguments.length])
            }
        }]), t
    }();

    function ri(t) {
        var e, n, i, r, o = t.iScale, a = function (t, e) {
            if (!t._cache.$bar) {
                for (var n = t.getMatchingVisibleMetas(e), i = [], r = 0, o = n.length; r < o; r++) i = i.concat(n[r].controller.getAllParsedValues(t));
                t._cache.$bar = Te(i.sort((function (t, e) {
                    return t - e
                })))
            }
            return t._cache.$bar
        }(o, t.type), s = o._length, u = function () {
            32767 !== i && -32768 !== i && (B(r) && (s = Math.min(s, Math.abs(i - r) || s)), r = i)
        };
        for (e = 0, n = a.length; e < n; ++e) i = o.getPixelForValue(a[e]), u();
        for (r = void 0, e = 0, n = o.ticks.length; e < n; ++e) i = o.getPixelForTick(e), u();
        return s
    }

    function oi(t, e, n, i) {
        return x(t) ? function (t, e, n, i) {
            var r = n.parse(t[0], i), o = n.parse(t[1], i), a = Math.min(r, o), s = Math.max(r, o), u = a, c = s;
            Math.abs(a) > Math.abs(s) && (u = s, c = a), e[n.axis] = c, e._custom = {
                barStart: u,
                barEnd: c,
                start: r,
                end: o,
                min: a,
                max: s
            }
        }(t, e, n, i) : e[n.axis] = n.parse(t, i), e
    }

    function ai(t, e, n, i) {
        var r, o, a, s, u = t.iScale, c = t.vScale, l = u.getLabels(), f = u === c, h = [];
        for (r = n, o = n + i; r < o; ++r) s = e[r], (a = {})[u.axis] = f || u.parse(l[r], r), h.push(oi(s, a, c, r));
        return h
    }

    function si(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
    }

    function ui(t, e, n, i) {
        var r = e.borderSkipped, o = {};
        if (r) {
            var a = function (t) {
                var e, n, i, r, o;
                return t.horizontal ? (e = t.base > t.x, n = "left", i = "right") : (e = t.base < t.y, n = "bottom", i = "top"), e ? (r = "end", o = "start") : (r = "start", o = "end"), {
                    start: n,
                    end: i,
                    reverse: e,
                    top: r,
                    bottom: o
                }
            }(t), s = a.start, u = a.end, c = a.reverse, l = a.top, f = a.bottom;
            "middle" === r && n && (t.enableBorderRadius = !0, (n._top || 0) === i ? r = l : (n._bottom || 0) === i ? r = f : (o[ci(f, s, u, c)] = !0, r = l)), o[ci(r, s, u, c)] = !0, t.borderSkipped = o
        } else t.borderSkipped = o
    }

    function ci(t, e, n, i) {
        var r, o, a;
        return i ? (a = n, t = li(t = (r = t) === (o = e) ? a : r === a ? o : r, n, e)) : t = li(t, e, n), t
    }

    function li(t, e, n) {
        return "start" === t ? e : "end" === t ? n : t
    }

    function fi(t, e, n) {
        var i = e.inflateAmount;
        t.inflateAmount = "auto" === i ? 1 === n ? .33 : 0 : i
    }

    ii.defaults = {}, ii.prototype.datasetElementType = null, ii.prototype.dataElementType = null;
    var hi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "parsePrimitiveData", value: function (t, e, n, i) {
                return ai(t, e, n, i)
            }
        }, {
            key: "parseArrayData", value: function (t, e, n, i) {
                return ai(t, e, n, i)
            }
        }, {
            key: "parseObjectData", value: function (t, e, n, i) {
                var r, o, a, s, u = t.iScale, c = t.vScale, l = this._parsing, f = l.xAxisKey,
                    h = void 0 === f ? "x" : f, d = l.yAxisKey, p = void 0 === d ? "y" : d, v = "x" === u.axis ? h : p,
                    g = "x" === c.axis ? h : p, y = [];
                for (r = n, o = n + i; r < o; ++r) s = e[r], (a = {})[u.axis] = u.parse(R(s, v), r), y.push(oi(R(s, g), a, c, r));
                return y
            }
        }, {
            key: "updateRangeFromParsed", value: function (t, e, i, r) {
                Sn(Cn(n.prototype), "updateRangeFromParsed", this).call(this, t, e, i, r);
                var o = i._custom;
                o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
            }
        }, {
            key: "getMaxOverflow", value: function () {
                return 0
            }
        }, {
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta, n = e.iScale, i = e.vScale, r = this.getParsed(t), o = r._custom,
                    a = si(o) ? "[" + o.start + ", " + o.end + "]" : "" + i.getLabelForValue(r[i.axis]);
                return {label: "" + n.getLabelForValue(r[n.axis]), value: a}
            }
        }, {
            key: "initialize", value: function () {
                this.enableOptionSharing = !0, Sn(Cn(n.prototype), "initialize", this).call(this), this._cachedMeta.stack = this.getDataset().stack
            }
        }, {
            key: "update", value: function (t) {
                var e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                var r = "reset" === i, o = this.index, a = this._cachedMeta.vScale, s = a.getBasePixel(),
                    u = a.isHorizontal(), c = this._getRuler(), l = this.resolveDataElementOptions(e, i),
                    f = this.getSharedOptions(l), h = this.includeOptions(i, f);
                this.updateSharedOptions(f, i, l);
                for (var d = e; d < e + n; d++) {
                    var p = this.getParsed(d),
                        v = r || _(p[a.axis]) ? {base: s, head: s} : this._calculateBarValuePixels(d),
                        g = this._calculateBarIndexPixels(d, c), y = (p._stacks || {})[a.axis], m = {
                            horizontal: u,
                            base: v.base,
                            enableBorderRadius: !y || si(p._custom) || o === y._top || o === y._bottom,
                            x: u ? v.head : g.center,
                            y: u ? g.center : v.head,
                            height: u ? g.size : Math.abs(v.size),
                            width: u ? Math.abs(v.size) : g.size
                        };
                    h && (m.options = f || this.resolveDataElementOptions(d, t[d].active ? "active" : i));
                    var b = m.options || t[d].options;
                    ui(m, b, y, o), fi(m, b, c.ratio), this.updateElement(t[d], d, m, i)
                }
            }
        }, {
            key: "_getStacks", value: function (t, e) {
                var n, i, r = this._cachedMeta.iScale, o = r.getMatchingVisibleMetas(this._type), a = r.options.stacked,
                    s = o.length, u = [];
                for (n = 0; n < s; ++n) if ((i = o[n]).controller.options.grouped) {
                    if (void 0 !== e) {
                        var c = i.controller.getParsed(e)[i.controller._cachedMeta.vScale.axis];
                        if (_(c) || isNaN(c)) continue
                    }
                    if ((!1 === a || -1 === u.indexOf(i.stack) || void 0 === a && void 0 === i.stack) && u.push(i.stack), i.index === t) break
                }
                return u.length || u.push(void 0), u
            }
        }, {
            key: "_getStackCount", value: function (t) {
                return this._getStacks(void 0, t).length
            }
        }, {
            key: "_getStackIndex", value: function (t, e, n) {
                var i = this._getStacks(t, n), r = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === r ? i.length - 1 : r
            }
        }, {
            key: "_getRuler", value: function () {
                var t, e, n = this.options, i = this._cachedMeta, r = i.iScale, o = [];
                for (t = 0, e = i.data.length; t < e; ++t) o.push(r.getPixelForValue(this.getParsed(t)[r.axis], t));
                var a = n.barThickness;
                return {
                    min: a || ri(i),
                    pixels: o,
                    start: r._startPixel,
                    end: r._endPixel,
                    stackCount: this._getStackCount(),
                    scale: r,
                    grouped: n.grouped,
                    ratio: a ? 1 : n.categoryPercentage * n.barPercentage
                }
            }
        }, {
            key: "_calculateBarValuePixels", value: function (t) {
                var e, n, i = this._cachedMeta, r = i.vScale, o = i._stacked, a = this.options, s = a.base,
                    u = a.minBarLength, c = s || 0, l = this.getParsed(t), f = l._custom, h = si(f), d = l[r.axis],
                    p = 0, v = o ? this.applyStack(r, l, o) : d;
                v !== d && (p = v - d, v = d), h && (d = f.barStart, v = f.barEnd - f.barStart, 0 !== d && K(d) !== K(f.barEnd) && (p = 0), p += d);
                var g = _(s) || h ? p : s, y = r.getPixelForValue(g);
                if (n = (e = this.chart.getDataVisibility(t) ? r.getPixelForValue(p + v) : y) - y, Math.abs(n) < u && (n = function (t, e, n) {
                    return 0 !== t ? K(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1)
                }(n, r, c) * u, d === c && (y -= n / 2), e = y + n), y === r.getPixelForValue(c)) {
                    var m = K(n) * r.getLineWidthForValue(c) / 2;
                    y += m, n -= m
                }
                return {size: n, base: y, head: e, center: e + n / 2}
            }
        }, {
            key: "_calculateBarIndexPixels", value: function (t, e) {
                var n, i, r = e.scale, o = this.options, a = o.skipNull, s = E(o.maxBarThickness, 1 / 0);
                if (e.grouped) {
                    var u = a ? this._getStackCount(t) : e.stackCount,
                        c = "flex" === o.barThickness ? function (t, e, n, i) {
                            var r = e.pixels, o = r[t], a = t > 0 ? r[t - 1] : null,
                                s = t < r.length - 1 ? r[t + 1] : null, u = n.categoryPercentage;
                            null === a && (a = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - a);
                            var c = o - (o - Math.min(a, s)) / 2 * u;
                            return {chunk: Math.abs(s - a) / 2 * u / i, ratio: n.barPercentage, start: c}
                        }(t, e, o, u) : function (t, e, n, i) {
                            var r, o, a = n.barThickness;
                            return _(a) ? (r = e.min * n.categoryPercentage, o = n.barPercentage) : (r = a * i, o = 1), {
                                chunk: r / i,
                                ratio: o,
                                start: e.pixels[t] - r / 2
                            }
                        }(t, e, o, u), l = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0);
                    n = c.start + c.chunk * l + c.chunk / 2, i = Math.min(s, c.chunk * c.ratio)
                } else n = r.getPixelForValue(this.getParsed(t)[r.axis], t), i = Math.min(s, e.min * e.ratio);
                return {base: n - i / 2, head: n + i / 2, center: n, size: i}
            }
        }, {
            key: "draw", value: function () {
                for (var t = this._cachedMeta, e = t.vScale, n = t.data, i = n.length, r = 0; r < i; ++r) null !== this.getParsed(r)[e.axis] && n[r].draw(this._ctx)
            }
        }]), n
    }(ii);
    hi.id = "bar", hi.defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {numbers: {type: "number", properties: ["x", "y", "base", "width", "height"]}}
    }, hi.overrides = {
        scales: {
            _index_: {type: "category", offset: !0, grid: {offset: !0}},
            _value_: {type: "linear", beginAtZero: !0}
        }
    };
    var di = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "initialize", value: function () {
                this.enableOptionSharing = !0, Sn(Cn(n.prototype), "initialize", this).call(this)
            }
        }, {
            key: "parsePrimitiveData", value: function (t, e, i, r) {
                for (var o = Sn(Cn(n.prototype), "parsePrimitiveData", this).call(this, t, e, i, r), a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + i).radius;
                return o
            }
        }, {
            key: "parseArrayData", value: function (t, e, i, r) {
                for (var o = Sn(Cn(n.prototype), "parseArrayData", this).call(this, t, e, i, r), a = 0; a < o.length; a++) {
                    var s = e[i + a];
                    o[a]._custom = E(s[2], this.resolveDataElementOptions(a + i).radius)
                }
                return o
            }
        }, {
            key: "parseObjectData", value: function (t, e, i, r) {
                for (var o = Sn(Cn(n.prototype), "parseObjectData", this).call(this, t, e, i, r), a = 0; a < o.length; a++) {
                    var s = e[i + a];
                    o[a]._custom = E(s && s.r && +s.r, this.resolveDataElementOptions(a + i).radius)
                }
                return o
            }
        }, {
            key: "getMaxOverflow", value: function () {
                for (var t = this._cachedMeta.data, e = 0, n = t.length - 1; n >= 0; --n) e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
                return e > 0 && e
            }
        }, {
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta, n = e.xScale, i = e.yScale, r = this.getParsed(t),
                    o = n.getLabelForValue(r.x), a = i.getLabelForValue(r.y), s = r._custom;
                return {label: e.label, value: "(" + o + ", " + a + (s ? ", " + s : "") + ")"}
            }
        }, {
            key: "update", value: function (t) {
                var e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                for (var r = "reset" === i, o = this._cachedMeta, a = o.iScale, s = o.vScale, u = this.resolveDataElementOptions(e, i), c = this.getSharedOptions(u), l = this.includeOptions(i, c), f = a.axis, h = s.axis, d = e; d < e + n; d++) {
                    var p = t[d], v = !r && this.getParsed(d), g = {},
                        y = g[f] = r ? a.getPixelForDecimal(.5) : a.getPixelForValue(v[f]),
                        m = g[h] = r ? s.getBasePixel() : s.getPixelForValue(v[h]);
                    g.skip = isNaN(y) || isNaN(m), l && (g.options = this.resolveDataElementOptions(d, p.active ? "active" : i), r && (g.options.radius = 0)), this.updateElement(p, d, g, i)
                }
                this.updateSharedOptions(c, i, u)
            }
        }, {
            key: "resolveDataElementOptions", value: function (t, e) {
                var i = this.getParsed(t), r = Sn(Cn(n.prototype), "resolveDataElementOptions", this).call(this, t, e);
                r.$shared && (r = Object.assign({}, r, {$shared: !1}));
                var o = r.radius;
                return "active" !== e && (r.radius = 0), r.radius += E(i && i._custom, o), r
            }
        }]), n
    }(ii);
    di.id = "bubble", di.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {numbers: {type: "number", properties: ["x", "y", "borderWidth", "radius"]}}
    }, di.overrides = {
        scales: {x: {type: "linear"}, y: {type: "linear"}},
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return ""
                    }
                }
            }
        }
    };
    var pi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t, i) {
            var r;
            return Fn(this, n), (r = e.call(this, t, i)).enableOptionSharing = !0, r.innerRadius = void 0, r.outerRadius = void 0, r.offsetX = void 0, r.offsetY = void 0, r
        }

        return Wn(n, [{
            key: "linkScales", value: function () {
            }
        }, {
            key: "parse", value: function (t, e) {
                var n = this.getDataset().data, i = this._cachedMeta;
                if (!1 === this._parsing) i._parsed = n; else {
                    var r, o, a = function (t) {
                        return +n[t]
                    };
                    if (w(n[t])) {
                        var s = this._parsing.key, u = void 0 === s ? "value" : s;
                        a = function (t) {
                            return +R(n[t], u)
                        }
                    }
                    for (r = t, o = t + e; r < o; ++r) i._parsed[r] = a(r)
                }
            }
        }, {
            key: "_getRotation", value: function () {
                return et(this.options.rotation - 90)
            }
        }, {
            key: "_getCircumference", value: function () {
                return et(this.options.circumference)
            }
        }, {
            key: "_getRotationExtents", value: function () {
                for (var t = H, e = -H, n = 0; n < this.chart.data.datasets.length; ++n) if (this.chart.isDatasetVisible(n)) {
                    var i = this.chart.getDatasetMeta(n).controller, r = i._getRotation(), o = i._getCircumference();
                    t = Math.min(t, r), e = Math.max(e, r + o)
                }
                return {rotation: t, circumference: e - t}
            }
        }, {
            key: "update", value: function (t) {
                var e, n, i = this.chart.chartArea, r = this._cachedMeta, o = r.data,
                    a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
                    s = Math.max((Math.min(i.width, i.height) - a) / 2, 0),
                    u = Math.min((e = this.options.cutout, n = s, "string" == typeof e && e.endsWith("%") ? parseFloat(e) / 100 : e / n), 1),
                    c = this._getRingWeight(this.index), l = this._getRotationExtents(), f = l.circumference,
                    h = function (t, e, n) {
                        var i = 1, r = 1, o = 0, a = 0;
                        if (e < H) {
                            var s = t, u = s + e, c = Math.cos(s), l = Math.sin(s), f = Math.cos(u), h = Math.sin(u),
                                d = function (t, e, i) {
                                    return st(t, s, u, !0) ? 1 : Math.max(e, e * n, i, i * n)
                                }, p = function (t, e, i) {
                                    return st(t, s, u, !0) ? -1 : Math.min(e, e * n, i, i * n)
                                }, v = d(0, c, f), g = d($, l, h), y = p(z, c, f), m = p(z + $, l, h);
                            i = (v - y) / 2, r = (g - m) / 2, o = -(v + y) / 2, a = -(g + m) / 2
                        }
                        return {ratioX: i, ratioY: r, offsetX: o, offsetY: a}
                    }(l.rotation, f, u), d = h.ratioX, p = h.ratioY, v = h.offsetX, g = h.offsetY,
                    y = (i.width - a) / d, m = (i.height - a) / p, b = Math.max(Math.min(y, m) / 2, 0),
                    _ = O(this.options.radius, b), x = (_ - Math.max(_ * u, 0)) / this._getVisibleDatasetWeightTotal();
                this.offsetX = v * _, this.offsetY = g * _, r.total = this.calculateTotal(), this.outerRadius = _ - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t)
            }
        }, {
            key: "_circumference", value: function (t, e) {
                var n = this.options, i = this._cachedMeta, r = this._getCircumference();
                return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || null === i._parsed[t] || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * r / H)
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                var r, o = "reset" === i, a = this.chart, s = a.chartArea, u = a.options.animation,
                    c = (s.left + s.right) / 2, l = (s.top + s.bottom) / 2, f = o && u.animateScale,
                    h = f ? 0 : this.innerRadius, d = f ? 0 : this.outerRadius,
                    p = this.resolveDataElementOptions(e, i), v = this.getSharedOptions(p),
                    g = this.includeOptions(i, v), y = this._getRotation();
                for (r = 0; r < e; ++r) y += this._circumference(r, o);
                for (r = e; r < e + n; ++r) {
                    var m = this._circumference(r, o), b = t[r], _ = {
                        x: c + this.offsetX,
                        y: l + this.offsetY,
                        startAngle: y,
                        endAngle: y + m,
                        circumference: m,
                        outerRadius: d,
                        innerRadius: h
                    };
                    g && (_.options = v || this.resolveDataElementOptions(r, b.active ? "active" : i)), y += m, this.updateElement(b, r, _, i)
                }
                this.updateSharedOptions(v, i, p)
            }
        }, {
            key: "calculateTotal", value: function () {
                var t, e = this._cachedMeta, n = e.data, i = 0;
                for (t = 0; t < n.length; t++) {
                    var r = e._parsed[t];
                    null === r || isNaN(r) || !this.chart.getDataVisibility(t) || n[t].hidden || (i += Math.abs(r))
                }
                return i
            }
        }, {
            key: "calculateCircumference", value: function (t) {
                var e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? H * (Math.abs(t) / e) : 0
            }
        }, {
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta, n = this.chart, i = n.data.labels || [],
                    r = dn(e._parsed[t], n.options.locale);
                return {label: i[t] || "", value: r}
            }
        }, {
            key: "getMaxBorderWidth", value: function (t) {
                var e, n, i, r, o, a = 0, s = this.chart;
                if (!t) for (e = 0, n = s.data.datasets.length; e < n; ++e) if (s.isDatasetVisible(e)) {
                    t = (i = s.getDatasetMeta(e)).data, (r = i.controller) !== this && r.configure();
                    break
                }
                if (!t) return 0;
                for (e = 0, n = t.length; e < n; ++e) "inner" !== (o = r.resolveDataElementOptions(e)).borderAlign && (a = Math.max(a, o.borderWidth || 0, o.hoverBorderWidth || 0));
                return a
            }
        }, {
            key: "getMaxOffset", value: function (t) {
                for (var e = 0, n = 0, i = t.length; n < i; ++n) {
                    var r = this.resolveDataElementOptions(n);
                    e = Math.max(e, r.offset || 0, r.hoverOffset || 0)
                }
                return e
            }
        }, {
            key: "_getRingWeightOffset", value: function (t) {
                for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                return e
            }
        }, {
            key: "_getRingWeight", value: function (t) {
                return Math.max(E(this.chart.data.datasets[t].weight, 1), 0)
            }
        }, {
            key: "_getVisibleDatasetWeightTotal", value: function () {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            }
        }]), n
    }(ii);
    pi.id = "doughnut", pi.defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {animateRotate: !0, animateScale: !1},
        animations: {
            numbers: {
                type: "number",
                properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    }, pi.descriptors = {
        _scriptable: function (t) {
            return "spacing" !== t
        }, _indexable: function (t) {
            return "spacing" !== t
        }
    }, pi.overrides = {
        aspectRatio: 1, plugins: {
            legend: {
                labels: {
                    generateLabels: function (t) {
                        var e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            var n = t.legend.options.labels.pointStyle;
                            return e.labels.map((function (e, i) {
                                var r = t.getDatasetMeta(0).controller.getStyle(i);
                                return {
                                    text: e,
                                    fillStyle: r.backgroundColor,
                                    strokeStyle: r.borderColor,
                                    lineWidth: r.borderWidth,
                                    pointStyle: n,
                                    hidden: !t.getDataVisibility(i),
                                    index: i
                                }
                            }))
                        }
                        return []
                    }
                }, onClick: function (t, e, n) {
                    n.chart.toggleDataVisibility(e.index), n.chart.update()
                }
            }, tooltip: {
                callbacks: {
                    title: function () {
                        return ""
                    }, label: function (t) {
                        var e = t.label, n = ": " + t.formattedValue;
                        return x(e) ? (e = e.slice())[0] += n : e += n, e
                    }
                }
            }
        }
    };
    var vi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "initialize", value: function () {
                this.enableOptionSharing = !0, Sn(Cn(n.prototype), "initialize", this).call(this)
            }
        }, {
            key: "update", value: function (t) {
                var e = this._cachedMeta, n = e.dataset, i = e.data, r = void 0 === i ? [] : i, o = e._dataset,
                    a = this.chart._animationsDisabled, s = function (t, e, n) {
                        var i = e.length, r = 0, o = i;
                        if (t._sorted) {
                            var a = t.iScale, s = t._parsed, u = a.axis, c = a.getUserBounds(), l = c.min, f = c.max,
                                h = c.minDefined, d = c.maxDefined;
                            h && (r = ut(Math.min(Se(s, a.axis, l).lo, n ? i : Se(e, u, a.getPixelForValue(l)).lo), 0, i - 1)), o = d ? ut(Math.max(Se(s, a.axis, f).hi + 1, n ? 0 : Se(e, u, a.getPixelForValue(f)).hi + 1), r, i) - r : i - r
                        }
                        return {start: r, count: o}
                    }(e, r, a), u = s.start, c = s.count;
                this._drawStart = u, this._drawCount = c, function (t) {
                    var e = t.xScale, n = t.yScale, i = t._scaleRanges,
                        r = {xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max};
                    if (!i) return t._scaleRanges = r, !0;
                    var o = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
                    return Object.assign(i, r), o
                }(e) && (u = 0, c = r.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = r;
                var l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(n, void 0, {
                    animated: !a,
                    options: l
                }, t), this.updateElements(r, u, c, t)
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                for (var r = "reset" === i, o = this._cachedMeta, a = o.iScale, s = o.vScale, u = o._stacked, c = o._dataset, l = this.resolveDataElementOptions(e, i), f = this.getSharedOptions(l), h = this.includeOptions(i, f), d = a.axis, p = s.axis, v = this.options, g = v.spanGaps, y = v.segment, m = J(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || r || "none" === i, x = e > 0 && this.getParsed(e - 1), w = e; w < e + n; ++w) {
                    var k = t[w], S = this.getParsed(w), E = b ? k : {}, O = _(S[p]),
                        M = E[d] = a.getPixelForValue(S[d], w),
                        T = E[p] = r || O ? s.getBasePixel() : s.getPixelForValue(u ? this.applyStack(s, S, u) : S[p], w);
                    E.skip = isNaN(M) || isNaN(T) || O, E.stop = w > 0 && S[d] - x[d] > m, y && (E.parsed = S, E.raw = c.data[w]), h && (E.options = f || this.resolveDataElementOptions(w, k.active ? "active" : i)), b || this.updateElement(k, w, E, i), x = S
                }
                this.updateSharedOptions(f, i, l)
            }
        }, {
            key: "getMaxOverflow", value: function () {
                var t = this._cachedMeta, e = t.dataset, n = e.options && e.options.borderWidth || 0, i = t.data || [];
                if (!i.length) return n;
                var r = i[0].size(this.resolveDataElementOptions(0)),
                    o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
                return Math.max(n, r, o) / 2
            }
        }, {
            key: "draw", value: function () {
                var t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), Sn(Cn(n.prototype), "draw", this).call(this)
            }
        }]), n
    }(ii);
    vi.id = "line", vi.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    }, vi.overrides = {scales: {_index_: {type: "category"}, _value_: {type: "linear"}}};
    var gi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t, i) {
            var r;
            return Fn(this, n), (r = e.call(this, t, i)).innerRadius = void 0, r.outerRadius = void 0, r
        }

        return Wn(n, [{
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta, n = this.chart, i = n.data.labels || [],
                    r = dn(e._parsed[t].r, n.options.locale);
                return {label: i[t] || "", value: r}
            }
        }, {
            key: "update", value: function (t) {
                var e = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(e, 0, e.length, t)
            }
        }, {
            key: "_updateRadius", value: function () {
                var t = this.chart, e = t.chartArea, n = t.options, i = Math.min(e.right - e.left, e.bottom - e.top),
                    r = Math.max(i / 2, 0),
                    o = (r - Math.max(n.cutoutPercentage ? r / 100 * n.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                this.outerRadius = r - o * this.index, this.innerRadius = this.outerRadius - o
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                var r, o = "reset" === i, a = this.chart, s = this.getDataset(), u = a.options.animation,
                    c = this._cachedMeta.rScale, l = c.xCenter, f = c.yCenter, h = c.getIndexAngle(0) - .5 * z, d = h,
                    p = 360 / this.countVisibleElements();
                for (r = 0; r < e; ++r) d += this._computeAngle(r, i, p);
                for (r = e; r < e + n; r++) {
                    var v = t[r], g = d, y = d + this._computeAngle(r, i, p),
                        m = a.getDataVisibility(r) ? c.getDistanceFromCenterForValue(s.data[r]) : 0;
                    d = y, o && (u.animateScale && (m = 0), u.animateRotate && (g = y = h));
                    var b = {
                        x: l,
                        y: f,
                        innerRadius: 0,
                        outerRadius: m,
                        startAngle: g,
                        endAngle: y,
                        options: this.resolveDataElementOptions(r, v.active ? "active" : i)
                    };
                    this.updateElement(v, r, b, i)
                }
            }
        }, {
            key: "countVisibleElements", value: function () {
                var t = this, e = this.getDataset(), n = this._cachedMeta, i = 0;
                return n.data.forEach((function (n, r) {
                    !isNaN(e.data[r]) && t.chart.getDataVisibility(r) && i++
                })), i
            }
        }, {
            key: "_computeAngle", value: function (t, e, n) {
                return this.chart.getDataVisibility(t) ? et(this.resolveDataElementOptions(t, e).angle || n) : 0
            }
        }]), n
    }(ii);
    gi.id = "polarArea", gi.defaults = {
        dataElementType: "arc",
        animation: {animateRotate: !0, animateScale: !0},
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
            }
        },
        indexAxis: "r",
        startAngle: 0
    }, gi.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels: function (t) {
                        var e = t.data;
                        if (e.labels.length && e.datasets.length) {
                            var n = t.legend.options.labels.pointStyle;
                            return e.labels.map((function (e, i) {
                                var r = t.getDatasetMeta(0).controller.getStyle(i);
                                return {
                                    text: e,
                                    fillStyle: r.backgroundColor,
                                    strokeStyle: r.borderColor,
                                    lineWidth: r.borderWidth,
                                    pointStyle: n,
                                    hidden: !t.getDataVisibility(i),
                                    index: i
                                }
                            }))
                        }
                        return []
                    }
                }, onClick: function (t, e, n) {
                    n.chart.toggleDataVisibility(e.index), n.chart.update()
                }
            }, tooltip: {
                callbacks: {
                    title: function () {
                        return ""
                    }, label: function (t) {
                        return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                    }
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {display: !1},
                beginAtZero: !0,
                grid: {circular: !0},
                pointLabels: {display: !1},
                startAngle: 0
            }
        }
    };
    var yi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return n
    }(pi);
    yi.id = "pie", yi.defaults = {cutout: 0, rotation: 0, circumference: 360, radius: "100%"};
    var mi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "getLabelAndValue", value: function (t) {
                var e = this._cachedMeta.vScale, n = this.getParsed(t);
                return {label: e.getLabels()[t], value: "" + e.getLabelForValue(n[e.axis])}
            }
        }, {
            key: "update", value: function (t) {
                var e = this._cachedMeta, n = e.dataset, i = e.data || [], r = e.iScale.getLabels();
                if (n.points = i, "resize" !== t) {
                    var o = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (o.borderWidth = 0);
                    var a = {_loop: !0, _fullLoop: r.length === i.length, options: o};
                    this.updateElement(n, void 0, a, t)
                }
                this.updateElements(i, 0, i.length, t)
            }
        }, {
            key: "updateElements", value: function (t, e, n, i) {
                for (var r = this.getDataset(), o = this._cachedMeta.rScale, a = "reset" === i, s = e; s < e + n; s++) {
                    var u = t[s], c = this.resolveDataElementOptions(s, u.active ? "active" : i),
                        l = o.getPointPositionForValue(s, r.data[s]), f = a ? o.xCenter : l.x, h = a ? o.yCenter : l.y,
                        d = {x: f, y: h, angle: l.angle, skip: isNaN(f) || isNaN(h), options: c};
                    this.updateElement(u, s, d, i)
                }
            }
        }]), n
    }(ii);
    mi.id = "radar", mi.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {line: {fill: "start"}}
    }, mi.overrides = {aspectRatio: 1, scales: {r: {type: "radialLinear"}}};
    var bi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return n
    }(vi);
    bi.id = "scatter", bi.defaults = {showLine: !1, fill: !1}, bi.overrides = {
        interaction: {mode: "point"},
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return ""
                    }, label: function (t) {
                        return "(" + t.label + ", " + t.formattedValue + ")"
                    }
                }
            }
        },
        scales: {x: {type: "linear"}, y: {type: "linear"}}
    };

    function _i() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
    }

    var xi = function () {
        function t(e) {
            Fn(this, t), this.options = e || {}
        }

        return Wn(t, [{
            key: "formats", value: function () {
                return _i()
            }
        }, {
            key: "parse", value: function (t, e) {
                return _i()
            }
        }, {
            key: "format", value: function (t, e) {
                return _i()
            }
        }, {
            key: "add", value: function (t, e, n) {
                return _i()
            }
        }, {
            key: "diff", value: function (t, e, n) {
                return _i()
            }
        }, {
            key: "startOf", value: function (t, e, n) {
                return _i()
            }
        }, {
            key: "endOf", value: function (t, e) {
                return _i()
            }
        }]), t
    }();
    xi.override = function (t) {
        Object.assign(xi.prototype, t)
    };
    var wi = {_date: xi};

    function ki(t, e) {
        return "native" in t ? {x: t.x, y: t.y} : nn(t, e)
    }

    function Si(t, e, n, i) {
        var r = t.controller, o = t.data, a = t._sorted, s = r._cachedMeta.iScale;
        if (s && e === s.axis && a && o.length) {
            var u = s._reversePixels ? Ee : Se;
            if (!i) return u(o, e, n);
            if (r._sharedOptions) {
                var c = o[0], l = "function" == typeof c.getRange && c.getRange(e);
                if (l) {
                    var f = u(o, e, n - l), h = u(o, e, n + l);
                    return {lo: f.lo, hi: h.hi}
                }
            }
        }
        return {lo: 0, hi: o.length - 1}
    }

    function Ei(t, e, n, i, r) {
        for (var o = t.getSortedVisibleDatasetMetas(), a = n[e], s = 0, u = o.length; s < u; ++s) for (var c = o[s], l = c.index, f = c.data, h = Si(o[s], e, a, r), d = h.lo, p = h.hi, v = d; v <= p; ++v) {
            var g = f[v];
            g.skip || i(g, l, v)
        }
    }

    function Oi(t, e, n, i) {
        var r = [];
        if (!re(e, t.chartArea, t._minPadding)) return r;
        return Ei(t, n, e, (function (t, n, o) {
            t.inRange(e.x, e.y, i) && r.push({element: t, datasetIndex: n, index: o})
        }), !0), r
    }

    function Mi(t, e, n, i, r) {
        var o = function (t) {
            var e = -1 !== t.indexOf("x"), n = -1 !== t.indexOf("y");
            return function (t, i) {
                var r = e ? Math.abs(t.x - i.x) : 0, o = n ? Math.abs(t.y - i.y) : 0;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
            }
        }(n), a = Number.POSITIVE_INFINITY, s = [];
        if (!re(e, t.chartArea, t._minPadding)) return s;
        return Ei(t, n, e, (function (n, u, c) {
            if (!i || n.inRange(e.x, e.y, r)) {
                var l = n.getCenterPoint(r);
                if (re(l, t.chartArea, t._minPadding) || n.inRange(e.x, e.y, r)) {
                    var f = o(e, l);
                    f < a ? (s = [{element: n, datasetIndex: u, index: c}], a = f) : f === a && s.push({
                        element: n,
                        datasetIndex: u,
                        index: c
                    })
                }
            }
        })), s
    }

    function Ti(t, e, n, i) {
        var r = ki(e, t), o = [], a = n.axis, s = "x" === a ? "inXRange" : "inYRange", u = !1;
        return function (t, e) {
            for (var n, i, r, o = t.getSortedVisibleDatasetMetas(), a = 0, s = o.length; a < s; ++a) {
                var u = o[a];
                n = u.index;
                for (var c = 0, l = (i = u.data).length; c < l; ++c) (r = i[c]).skip || e(r, n, c)
            }
        }(t, (function (t, e, n) {
            t[s](r[a], i) && o.push({element: t, datasetIndex: e, index: n}), t.inRange(r.x, r.y, i) && (u = !0)
        })), n.intersect && !u ? [] : o
    }

    var Ai = {
        modes: {
            index: function (t, e, n, i) {
                var r = ki(e, t), o = n.axis || "x", a = n.intersect ? Oi(t, r, o, i) : Mi(t, r, o, !1, i), s = [];
                return a.length ? (t.getSortedVisibleDatasetMetas().forEach((function (t) {
                    var e = a[0].index, n = t.data[e];
                    n && !n.skip && s.push({element: n, datasetIndex: t.index, index: e})
                })), s) : []
            }, dataset: function (t, e, n, i) {
                var r = ki(e, t), o = n.axis || "xy", a = n.intersect ? Oi(t, r, o, i) : Mi(t, r, o, !1, i);
                if (a.length > 0) {
                    var s = a[0].datasetIndex, u = t.getDatasetMeta(s).data;
                    a = [];
                    for (var c = 0; c < u.length; ++c) a.push({element: u[c], datasetIndex: s, index: c})
                }
                return a
            }, point: function (t, e, n, i) {
                return Oi(t, ki(e, t), n.axis || "xy", i)
            }, nearest: function (t, e, n, i) {
                return Mi(t, ki(e, t), n.axis || "xy", n.intersect, i)
            }, x: function (t, e, n, i) {
                return n.axis = "x", Ti(t, e, n, i)
            }, y: function (t, e, n, i) {
                return n.axis = "y", Ti(t, e, n, i)
            }
        }
    }, Ci = ["left", "top", "right", "bottom"];

    function Pi(t, e) {
        return t.filter((function (t) {
            return t.pos === e
        }))
    }

    function Di(t, e) {
        return t.filter((function (t) {
            return -1 === Ci.indexOf(t.pos) && t.box.axis === e
        }))
    }

    function Li(t, e) {
        return t.sort((function (t, n) {
            var i = e ? n : t, r = e ? t : n;
            return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
        }))
    }

    function ji(t, e) {
        var n, i, r, o = function (t) {
            var e, n = {}, i = Ln(t);
            try {
                for (i.s(); !(e = i.n()).done;) {
                    var r = e.value, o = r.stack, a = r.pos, s = r.stackWeight;
                    if (o && Ci.includes(a)) {
                        var u = n[o] || (n[o] = {count: 0, placed: 0, weight: 0, size: 0});
                        u.count++, u.weight += s
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return n
        }(t), a = e.vBoxMaxWidth, s = e.hBoxMaxHeight;
        for (n = 0, i = t.length; n < i; ++n) {
            var u = (r = t[n]).box.fullSize, c = o[r.stack], l = c && r.stackWeight / c.weight;
            r.horizontal ? (r.width = l ? l * a : u && e.availableWidth, r.height = s) : (r.width = a, r.height = l ? l * s : u && e.availableHeight)
        }
        return o
    }

    function Ii(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
    }

    function Ni(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
    }

    function Ri(t, e, n, i) {
        var r = n.pos, o = n.box, a = t.maxPadding;
        if (!w(r)) {
            n.size && (t[r] -= n.size);
            var s = i[n.stack] || {size: 0, count: 1};
            s.size = Math.max(s.size, n.horizontal ? o.height : o.width), n.size = s.size / s.count, t[r] += n.size
        }
        o.getPadding && Ni(a, o.getPadding());
        var u = Math.max(0, e.outerWidth - Ii(a, t, "left", "right")),
            c = Math.max(0, e.outerHeight - Ii(a, t, "top", "bottom")), l = u !== t.w, f = c !== t.h;
        return t.w = u, t.h = c, n.horizontal ? {same: l, other: f} : {same: f, other: l}
    }

    function Fi(t, e) {
        var n = e.maxPadding;

        function i(t) {
            var i = {left: 0, top: 0, right: 0, bottom: 0};
            return t.forEach((function (t) {
                i[t] = Math.max(e[t], n[t])
            })), i
        }

        return i(t ? ["left", "right"] : ["top", "bottom"])
    }

    function Bi(t, e, n, i) {
        var r, o, a, s, u, c, l = [];
        for (r = 0, o = t.length, u = 0; r < o; ++r) {
            (s = (a = t[r]).box).update(a.width || e.w, a.height || e.h, Fi(a.horizontal, e));
            var f = Ri(e, n, a, i), h = f.same, d = f.other;
            u |= h && l.length, c = c || d, s.fullSize || l.push(a)
        }
        return u && Bi(l, e, n, i) || c
    }

    function Wi(t, e, n, i, r) {
        t.top = n, t.left = e, t.right = e + i, t.bottom = n + r, t.width = i, t.height = r
    }

    function zi(t, e, n, i) {
        var r, o = n.padding, a = e.x, s = e.y, u = Ln(t);
        try {
            for (u.s(); !(r = u.n()).done;) {
                var c = r.value, l = c.box, f = i[c.stack] || {count: 1, placed: 0, weight: 1},
                    h = c.stackWeight / f.weight || 1;
                if (c.horizontal) {
                    var d = e.w * h, p = f.size || l.height;
                    B(f.start) && (s = f.start), l.fullSize ? Wi(l, o.left, s, n.outerWidth - o.right - o.left, p) : Wi(l, e.left + f.placed, s, d, p), f.start = s, f.placed += d, s = l.bottom
                } else {
                    var v = e.h * h, g = f.size || l.width;
                    B(f.start) && (a = f.start), l.fullSize ? Wi(l, a, o.top, g, n.outerHeight - o.bottom - o.top) : Wi(l, a, e.top + f.placed, g, v), f.start = a, f.placed += v, a = l.right
                }
            }
        } catch (t) {
            u.e(t)
        } finally {
            u.f()
        }
        e.x = a, e.y = s
    }

    Jt.set("layout", {autoPadding: !0, padding: {top: 0, right: 0, bottom: 0, left: 0}});
    var Hi = function (t, e) {
        t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
            return [{
                z: 0, draw: function (t) {
                    e.draw(t)
                }
            }]
        }, t.boxes.push(e)
    }, Vi = function (t, e) {
        var n = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== n && t.boxes.splice(n, 1)
    }, qi = function (t, e, n) {
        e.fullSize = n.fullSize, e.position = n.position, e.weight = n.weight
    }, Ui = function (t, e, n, i) {
        if (t) {
            var r = be(t.options.layout.padding), o = Math.max(e - r.width, 0), a = Math.max(n - r.height, 0),
                s = function (t) {
                    var e = function (t) {
                            var e, n, i, r, o, a, s = [];
                            for (e = 0, n = (t || []).length; e < n; ++e) {
                                var u = i = t[e];
                                r = u.position;
                                var c = u.options;
                                o = c.stack;
                                var l = c.stackWeight;
                                a = void 0 === l ? 1 : l, s.push({
                                    index: e,
                                    box: i,
                                    pos: r,
                                    horizontal: i.isHorizontal(),
                                    weight: i.weight,
                                    stack: o && r + o,
                                    stackWeight: a
                                })
                            }
                            return s
                        }(t), n = Li(e.filter((function (t) {
                            return t.box.fullSize
                        })), !0), i = Li(Pi(e, "left"), !0), r = Li(Pi(e, "right")), o = Li(Pi(e, "top"), !0),
                        a = Li(Pi(e, "bottom")), s = Di(e, "x"), u = Di(e, "y");
                    return {
                        fullSize: n,
                        leftAndTop: i.concat(o),
                        rightAndBottom: r.concat(u).concat(a).concat(s),
                        chartArea: Pi(e, "chartArea"),
                        vertical: i.concat(r).concat(u),
                        horizontal: o.concat(a).concat(s)
                    }
                }(t.boxes), u = s.vertical, c = s.horizontal;
            T(t.boxes, (function (t) {
                "function" == typeof t.beforeLayout && t.beforeLayout()
            }));
            var l = u.reduce((function (t, e) {
                return e.box.options && !1 === e.box.options.display ? t : t + 1
            }), 0) || 1, f = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: r,
                availableWidth: o,
                availableHeight: a,
                vBoxMaxWidth: o / 2 / l,
                hBoxMaxHeight: a / 2
            }), h = Object.assign({}, r);
            Ni(h, be(i));
            var d = Object.assign({maxPadding: h, w: o, h: a, x: r.left, y: r.top}, r), p = ji(u.concat(c), f);
            Bi(s.fullSize, d, f, p), Bi(u, d, f, p), Bi(c, d, f, p) && Bi(u, d, f, p), function (t) {
                var e = t.maxPadding;

                function n(n) {
                    var i = Math.max(e[n] - t[n], 0);
                    return t[n] += i, i
                }

                t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
            }(d), zi(s.leftAndTop, d, f, p), d.x += d.w, d.y += d.h, zi(s.rightAndBottom, d, f, p), t.chartArea = {
                left: d.left,
                top: d.top,
                right: d.left + d.w,
                bottom: d.top + d.h,
                height: d.h,
                width: d.w
            }, T(s.chartArea, (function (e) {
                var n = e.box;
                Object.assign(n, t.chartArea), n.update(d.w, d.h)
            }))
        }
    }, $i = function () {
        function t() {
            Fn(this, t)
        }

        return Wn(t, [{
            key: "acquireContext", value: function (t, e) {
            }
        }, {
            key: "releaseContext", value: function (t) {
                return !1
            }
        }, {
            key: "addEventListener", value: function (t, e, n) {
            }
        }, {
            key: "removeEventListener", value: function (t, e, n) {
            }
        }, {
            key: "getDevicePixelRatio", value: function () {
                return 1
            }
        }, {
            key: "getMaximumSize", value: function (t, e, n, i) {
                return e = Math.max(0, e || t.width), n = n || t.height, {
                    width: e,
                    height: Math.max(0, i ? Math.floor(e / i) : n)
                }
            }
        }, {
            key: "isAttached", value: function (t) {
                return !0
            }
        }, {
            key: "updateConfig", value: function (t) {
            }
        }]), t
    }(), Yi = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "acquireContext", value: function (t) {
                return t && t.getContext && t.getContext("2d") || null
            }
        }, {
            key: "updateConfig", value: function (t) {
                t.options.animation = !1
            }
        }]), n
    }($i), Xi = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    }, Gi = function (t) {
        return null === t || "" === t
    };
    var Ki = !!sn && {passive: !0};

    function Qi(t, e, n) {
        t.canvas.removeEventListener(e, n, Ki)
    }

    function Ji(t, e, n) {
        var i = t.canvas, r = new MutationObserver((function (t) {
            var e, r = Ln(t);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var o, a = Ln(e.value.addedNodes);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value;
                            if (s === i || s.contains(i)) return n()
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }));
        return r.observe(document, {childList: !0, subtree: !0}), r
    }

    function Zi(t, e, n) {
        var i = t.canvas, r = new MutationObserver((function (t) {
            var e, r = Ln(t);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var o, a = Ln(e.value.removedNodes);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value;
                            if (s === i || s.contains(i)) return n()
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }));
        return r.observe(document, {childList: !0, subtree: !0}), r
    }

    var tr = new Map, er = 0;

    function nr() {
        var t = window.devicePixelRatio;
        t !== er && (er = t, tr.forEach((function (e, n) {
            n.currentDevicePixelRatio !== t && e()
        })))
    }

    function ir(t, e, n) {
        var i = t.canvas, r = i && Qe(i);
        if (r) {
            var o = p((function (t, e) {
                var i = r.clientWidth;
                n(t, e), i < r.clientWidth && n()
            }), window), a = new ResizeObserver((function (t) {
                var e = t[0], n = e.contentRect.width, i = e.contentRect.height;
                0 === n && 0 === i || o(n, i)
            }));
            return a.observe(r), function (t, e) {
                tr.size || window.addEventListener("resize", nr), tr.set(t, e)
            }(t, o), a
        }
    }

    function rr(t, e, n) {
        n && n.disconnect(), "resize" === e && function (t) {
            tr.delete(t), tr.size || window.removeEventListener("resize", nr)
        }(t)
    }

    function or(t, e, n) {
        var i = t.canvas, r = p((function (e) {
            null !== t.ctx && n(function (t, e) {
                var n = Xi[t.type] || t.type, i = nn(t, e), r = i.x, o = i.y;
                return {type: n, chart: e, native: t, x: void 0 !== r ? r : null, y: void 0 !== o ? o : null}
            }(e, t))
        }), t, (function (t) {
            var e = t[0];
            return [e, e.offsetX, e.offsetY]
        }));
        return function (t, e, n) {
            t.addEventListener(e, n, Ki)
        }(i, e, r), r
    }

    var ar = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "acquireContext", value: function (t, e) {
                var n = t && t.getContext && t.getContext("2d");
                return n && n.canvas === t ? (function (t, e) {
                    var n = t.style, i = t.getAttribute("height"), r = t.getAttribute("width");
                    if (t.$chartjs = {
                        initial: {
                            height: i,
                            width: r,
                            style: {display: n.display, height: n.height, width: n.width}
                        }
                    }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Gi(r)) {
                        var o = un(t, "width");
                        void 0 !== o && (t.width = o)
                    }
                    if (Gi(i)) if ("" === t.style.height) t.height = t.width / (e || 2); else {
                        var a = un(t, "height");
                        void 0 !== a && (t.height = a)
                    }
                }(t, e), n) : null
            }
        }, {
            key: "releaseContext", value: function (t) {
                var e = t.canvas;
                if (!e.$chartjs) return !1;
                var n = e.$chartjs.initial;
                ["height", "width"].forEach((function (t) {
                    var i = n[t];
                    _(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                }));
                var i = n.style || {};
                return Object.keys(i).forEach((function (t) {
                    e.style[t] = i[t]
                })), e.width = e.width, delete e.$chartjs, !0
            }
        }, {
            key: "addEventListener", value: function (t, e, n) {
                this.removeEventListener(t, e);
                var i = t.$proxies || (t.$proxies = {}), r = {attach: Ji, detach: Zi, resize: ir}[e] || or;
                i[e] = r(t, e, n)
            }
        }, {
            key: "removeEventListener", value: function (t, e) {
                var n = t.$proxies || (t.$proxies = {}), i = n[e];
                i && (({attach: rr, detach: rr, resize: rr}[e] || Qi)(t, e, i), n[e] = void 0)
            }
        }, {
            key: "getDevicePixelRatio", value: function () {
                return window.devicePixelRatio
            }
        }, {
            key: "getMaximumSize", value: function (t, e, n, i) {
                return on(t, e, n, i)
            }
        }, {
            key: "isAttached", value: function (t) {
                var e = Qe(t);
                return !(!e || !e.isConnected)
            }
        }]), n
    }($i);
    var sr = function () {
        function t() {
            Fn(this, t), this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
        }

        return Wn(t, [{
            key: "tooltipPosition", value: function (t) {
                var e = this.getProps(["x", "y"], t);
                return {x: e.x, y: e.y}
            }
        }, {
            key: "hasValue", value: function () {
                return J(this.x) && J(this.y)
            }
        }, {
            key: "getProps", value: function (t, e) {
                var n = this, i = this.$animations;
                if (!e || !i) return this;
                var r = {};
                return t.forEach((function (t) {
                    r[t] = i[t] && i[t].active() ? i[t]._to : n[t]
                })), r
            }
        }]), t
    }();
    sr.defaults = {}, sr.defaultRoutes = void 0;
    var ur = {
        values: function (t) {
            return x(t) ? t : "" + t
        }, numeric: function (t, e, n) {
            if (0 === t) return "0";
            var i, r = this.chart.options.locale, o = t;
            if (n.length > 1) {
                var a = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                (a < 1e-4 || a > 1e15) && (i = "scientific"), o = function (t, e) {
                    var n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                    Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                    return n
                }(t, n)
            }
            var s = G(Math.abs(o)), u = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
                c = {notation: i, minimumFractionDigits: u, maximumFractionDigits: u};
            return Object.assign(c, this.options.ticks.format), dn(t, r, c)
        }, logarithmic: function (t, e, n) {
            if (0 === t) return "0";
            var i = t / Math.pow(10, Math.floor(G(t)));
            return 1 === i || 2 === i || 5 === i ? ur.numeric.call(this, t, e, n) : ""
        }
    };
    var cr = {formatters: ur};

    function lr(t, e) {
        var n = t.options.ticks, i = n.maxTicksLimit || function (t) {
            var e = t.options.offset, n = t._tickSize(), i = t._length / n + (e ? 0 : 1), r = t._maxLength / n;
            return Math.floor(Math.min(i, r))
        }(t), r = n.major.enabled ? function (t) {
            var e, n, i = [];
            for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
            return i
        }(e) : [], o = r.length, a = r[0], s = r[o - 1], u = [];
        if (o > i) return function (t, e, n, i) {
            var r, o = 0, a = n[0];
            for (i = Math.ceil(i), r = 0; r < t.length; r++) r === a && (e.push(t[r]), o++, a = n[o * i])
        }(e, u, r, o / i), u;
        var c = function (t, e, n) {
            var i = function (t) {
                var e, n, i = t.length;
                if (i < 2) return !1;
                for (n = t[0], e = 1; e < i; ++e) if (t[e] - t[e - 1] !== n) return !1;
                return n
            }(t), r = e.length / n;
            if (!i) return Math.max(r, 1);
            for (var o = function (t) {
                var e, n = [], i = Math.sqrt(t);
                for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return i === (0 | i) && n.push(i), n.sort((function (t, e) {
                    return t - e
                })).pop(), n
            }(i), a = 0, s = o.length - 1; a < s; a++) {
                var u = o[a];
                if (u > r) return u
            }
            return Math.max(r, 1)
        }(r, e, i);
        if (o > 0) {
            var l, f, h = o > 1 ? Math.round((s - a) / (o - 1)) : null;
            for (fr(e, u, c, _(h) ? 0 : a - h, a), l = 0, f = o - 1; l < f; l++) fr(e, u, c, r[l], r[l + 1]);
            return fr(e, u, c, s, _(h) ? e.length : s + h), u
        }
        return fr(e, u, c), u
    }

    function fr(t, e, n, i, r) {
        var o, a, s, u = E(i, 0), c = Math.min(E(r, t.length), t.length), l = 0;
        for (n = Math.ceil(n), r && (n = (o = r - i) / Math.floor(o / n)), s = u; s < 0;) l++, s = Math.round(u + l * n);
        for (a = Math.max(u, 0); a < c; a++) a === s && (e.push(t[a]), l++, s = Math.round(u + l * n))
    }

    Jt.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: function (t, e) {
                return e.lineWidth
            },
            tickColor: function (t, e) {
                return e.color
            },
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1
        },
        title: {display: !1, text: "", padding: {top: 4, bottom: 4}},
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: cr.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), Jt.route("scale.ticks", "color", "", "color"), Jt.route("scale.grid", "color", "", "borderColor"), Jt.route("scale.grid", "borderColor", "", "borderColor"), Jt.route("scale.title", "color", "", "color"), Jt.describe("scale", {
        _fallback: !1,
        _scriptable: function (t) {
            return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t
        },
        _indexable: function (t) {
            return "borderDash" !== t && "tickBorderDash" !== t
        }
    }), Jt.describe("scales", {_fallback: "scale"}), Jt.describe("scale.ticks", {
        _scriptable: function (t) {
            return "backdropPadding" !== t && "callback" !== t
        }, _indexable: function (t) {
            return "backdropPadding" !== t
        }
    });
    var hr = function (t, e, n) {
        return "top" === e || "left" === e ? t[e] + n : t[e] - n
    };

    function dr(t, e) {
        for (var n = [], i = t.length / e, r = t.length, o = 0; o < r; o += i) n.push(t[Math.floor(o)]);
        return n
    }

    function pr(t, e, n) {
        var i, r = t.ticks.length, o = Math.min(e, r - 1), a = t._startPixel, s = t._endPixel, u = t.getPixelForTick(o);
        if (!(n && (i = 1 === r ? Math.max(u - a, s - u) : 0 === e ? (t.getPixelForTick(1) - u) / 2 : (u - t.getPixelForTick(o - 1)) / 2, (u += o < e ? i : -i) < a - 1e-6 || u > s + 1e-6))) return u
    }

    function vr(t) {
        return t.drawTicks ? t.tickLength : 0
    }

    function gr(t, e) {
        if (!t.display) return 0;
        var n = _e(t.font, e), i = be(t.padding);
        return (x(t.text) ? t.text.length : 1) * n.lineHeight + i.height
    }

    function yr(t, e, n) {
        var i = v(t);
        return (n && "right" !== e || !n && "right" === e) && (i = function (t) {
            return "left" === t ? "right" : "right" === t ? "left" : t
        }(i)), i
    }

    var mr = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).id = t.id, i.type = t.type, i.options = void 0, i.ctx = t.ctx, i.chart = t.chart, i.top = void 0, i.bottom = void 0, i.left = void 0, i.right = void 0, i.width = void 0, i.height = void 0, i._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, i.maxWidth = void 0, i.maxHeight = void 0, i.paddingTop = void 0, i.paddingBottom = void 0, i.paddingLeft = void 0, i.paddingRight = void 0, i.axis = void 0, i.labelRotation = void 0, i.min = void 0, i.max = void 0, i._range = void 0, i.ticks = [], i._gridLineItems = null, i._labelItems = null, i._labelSizes = null, i._length = 0, i._maxLength = 0, i._longestTextCache = {}, i._startPixel = void 0, i._endPixel = void 0, i._reversePixels = !1, i._userMax = void 0, i._userMin = void 0, i._suggestedMax = void 0, i._suggestedMin = void 0, i._ticksLength = 0, i._borderValue = 0, i._cache = {}, i._dataLimitsCached = !1, i.$context = void 0, i
        }

        return Wn(n, [{
            key: "init", value: function (t) {
                this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
            }
        }, {
            key: "parse", value: function (t, e) {
                return t
            }
        }, {
            key: "getUserBounds", value: function () {
                var t = this._userMin, e = this._userMax, n = this._suggestedMin, i = this._suggestedMax;
                return t = S(t, Number.POSITIVE_INFINITY), e = S(e, Number.NEGATIVE_INFINITY), n = S(n, Number.POSITIVE_INFINITY), i = S(i, Number.NEGATIVE_INFINITY), {
                    min: S(t, n),
                    max: S(e, i),
                    minDefined: k(t),
                    maxDefined: k(e)
                }
            }
        }, {
            key: "getMinMax", value: function (t) {
                var e, n = this.getUserBounds(), i = n.min, r = n.max, o = n.minDefined, a = n.maxDefined;
                if (o && a) return {min: i, max: r};
                for (var s = this.getMatchingVisibleMetas(), u = 0, c = s.length; u < c; ++u) e = s[u].controller.getMinMax(this, t), o || (i = Math.min(i, e.min)), a || (r = Math.max(r, e.max));
                return {min: S(i = a && i > r ? r : i, S(r = o && i > r ? i : r, i)), max: S(r, S(i, r))}
            }
        }, {
            key: "getPadding", value: function () {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            }
        }, {
            key: "getTicks", value: function () {
                return this.ticks
            }
        }, {
            key: "getLabels", value: function () {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
            }
        }, {
            key: "beforeLayout", value: function () {
                this._cache = {}, this._dataLimitsCached = !1
            }
        }, {
            key: "beforeUpdate", value: function () {
                M(this.options.beforeUpdate, [this])
            }
        }, {
            key: "update", value: function (t, e, n) {
                var i = this.options, r = i.beginAtZero, o = i.grace, a = i.ticks, s = a.sampleSize;
                this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = n = Object.assign({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function (t, e, n) {
                    var i = t.min, r = t.max, o = O(e, (r - i) / 2), a = function (t, e) {
                        return n && 0 === t ? 0 : t + e
                    };
                    return {min: a(i, -Math.abs(o)), max: a(r, o)}
                }(this, o, r), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                var u = s < this.ticks.length;
                this._convertTicksToLabels(u ? dr(this.ticks, s) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || "auto" === a.source) && (this.ticks = lr(this, this.ticks), this._labelSizes = null), u && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
            }
        }, {
            key: "configure", value: function () {
                var t, e, n = this.options.reverse;
                this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, n = !n), this._startPixel = t, this._endPixel = e, this._reversePixels = n, this._length = e - t, this._alignToPixels = this.options.alignToPixels
            }
        }, {
            key: "afterUpdate", value: function () {
                M(this.options.afterUpdate, [this])
            }
        }, {
            key: "beforeSetDimensions", value: function () {
                M(this.options.beforeSetDimensions, [this])
            }
        }, {
            key: "setDimensions", value: function () {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
            }
        }, {
            key: "afterSetDimensions", value: function () {
                M(this.options.afterSetDimensions, [this])
            }
        }, {
            key: "_callHooks", value: function (t) {
                this.chart.notifyPlugins(t, this.getContext()), M(this.options[t], [this])
            }
        }, {
            key: "beforeDataLimits", value: function () {
                this._callHooks("beforeDataLimits")
            }
        }, {
            key: "determineDataLimits", value: function () {
            }
        }, {
            key: "afterDataLimits", value: function () {
                this._callHooks("afterDataLimits")
            }
        }, {
            key: "beforeBuildTicks", value: function () {
                this._callHooks("beforeBuildTicks")
            }
        }, {
            key: "buildTicks", value: function () {
                return []
            }
        }, {
            key: "afterBuildTicks", value: function () {
                this._callHooks("afterBuildTicks")
            }
        }, {
            key: "beforeTickToLabelConversion", value: function () {
                M(this.options.beforeTickToLabelConversion, [this])
            }
        }, {
            key: "generateTickLabels", value: function (t) {
                var e, n, i, r = this.options.ticks;
                for (e = 0, n = t.length; e < n; e++) (i = t[e]).label = M(r.callback, [i.value, e, t], this)
            }
        }, {
            key: "afterTickToLabelConversion", value: function () {
                M(this.options.afterTickToLabelConversion, [this])
            }
        }, {
            key: "beforeCalculateLabelRotation", value: function () {
                M(this.options.beforeCalculateLabelRotation, [this])
            }
        }, {
            key: "calculateLabelRotation", value: function () {
                var t, e, n, i = this.options, r = i.ticks, o = this.ticks.length, a = r.minRotation || 0,
                    s = r.maxRotation, u = a;
                if (!this._isVisible() || !r.display || a >= s || o <= 1 || !this.isHorizontal()) this.labelRotation = a; else {
                    var c = this._getLabelSizes(), l = c.widest.width, f = c.highest.height,
                        h = ut(this.chart.width - l, 0, this.maxWidth);
                    l + 6 > (t = i.offset ? this.maxWidth / o : h / (o - 1)) && (t = h / (o - (i.offset ? .5 : 1)), e = this.maxHeight - vr(i.grid) - r.padding - gr(i.title, this.chart.options.font), n = Math.sqrt(l * l + f * f), u = nt(Math.min(Math.asin(ut((c.highest.height + 6) / t, -1, 1)), Math.asin(ut(e / n, -1, 1)) - Math.asin(ut(f / n, -1, 1)))), u = Math.max(a, Math.min(s, u))), this.labelRotation = u
                }
            }
        }, {
            key: "afterCalculateLabelRotation", value: function () {
                M(this.options.afterCalculateLabelRotation, [this])
            }
        }, {
            key: "beforeFit", value: function () {
                M(this.options.beforeFit, [this])
            }
        }, {
            key: "fit", value: function () {
                var t = {width: 0, height: 0}, e = this.chart, n = this.options, i = n.ticks, r = n.title, o = n.grid,
                    a = this._isVisible(), s = this.isHorizontal();
                if (a) {
                    var u = gr(r, e.options.font);
                    if (s ? (t.width = this.maxWidth, t.height = vr(o) + u) : (t.height = this.maxHeight, t.width = vr(o) + u), i.display && this.ticks.length) {
                        var c = this._getLabelSizes(), l = c.first, f = c.last, h = c.widest, d = c.highest,
                            p = 2 * i.padding, v = et(this.labelRotation), g = Math.cos(v), y = Math.sin(v);
                        if (s) {
                            var m = i.mirror ? 0 : y * h.width + g * d.height;
                            t.height = Math.min(this.maxHeight, t.height + m + p)
                        } else {
                            var b = i.mirror ? 0 : g * h.width + y * d.height;
                            t.width = Math.min(this.maxWidth, t.width + b + p)
                        }
                        this._calculatePadding(l, f, y, g)
                    }
                }
                this._handleMargins(), s ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
            }
        }, {
            key: "_calculatePadding", value: function (t, e, n, i) {
                var r = this.options, o = r.ticks, a = o.align, s = o.padding, u = r.position,
                    c = 0 !== this.labelRotation, l = "top" !== u && "x" === this.axis;
                if (this.isHorizontal()) {
                    var f = this.getPixelForTick(0) - this.left,
                        h = this.right - this.getPixelForTick(this.ticks.length - 1), d = 0, p = 0;
                    c ? l ? (d = i * t.width, p = n * e.height) : (d = n * t.height, p = i * e.width) : "start" === a ? p = e.width : "end" === a ? d = t.width : (d = t.width / 2, p = e.width / 2), this.paddingLeft = Math.max((d - f + s) * this.width / (this.width - f), 0), this.paddingRight = Math.max((p - h + s) * this.width / (this.width - h), 0)
                } else {
                    var v = e.height / 2, g = t.height / 2;
                    "start" === a ? (v = 0, g = t.height) : "end" === a && (v = e.height, g = 0), this.paddingTop = v + s, this.paddingBottom = g + s
                }
            }
        }, {
            key: "_handleMargins", value: function () {
                this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
            }
        }, {
            key: "afterFit", value: function () {
                M(this.options.afterFit, [this])
            }
        }, {
            key: "isHorizontal", value: function () {
                var t = this.options, e = t.axis, n = t.position;
                return "top" === n || "bottom" === n || "x" === e
            }
        }, {
            key: "isFullSize", value: function () {
                return this.options.fullSize
            }
        }, {
            key: "_convertTicksToLabels", value: function (t) {
                var e, n;
                for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, n = t.length; e < n; e++) _(t[e].label) && (t.splice(e, 1), n--, e--);
                this.afterTickToLabelConversion()
            }
        }, {
            key: "_getLabelSizes", value: function () {
                var t = this._labelSizes;
                if (!t) {
                    var e = this.options.ticks.sampleSize, n = this.ticks;
                    e < n.length && (n = dr(n, e)), this._labelSizes = t = this._computeLabelSizes(n, n.length)
                }
                return t
            }
        }, {
            key: "_computeLabelSizes", value: function (t, e) {
                var n, i, r, o, a, s, u, c, l, f, h, d = this.ctx, p = this._longestTextCache, v = [], g = [], y = 0,
                    m = 0;
                for (n = 0; n < e; ++n) {
                    if (o = t[n].label, a = this._resolveTickFontOptions(n), d.font = s = a.string, u = p[s] = p[s] || {
                        data: {},
                        gc: []
                    }, c = a.lineHeight, l = f = 0, _(o) || x(o)) {
                        if (x(o)) for (i = 0, r = o.length; i < r; ++i) _(h = o[i]) || x(h) || (l = Zt(d, u.data, u.gc, l, h), f += c)
                    } else l = Zt(d, u.data, u.gc, l, o), f = c;
                    v.push(l), g.push(f), y = Math.max(l, y), m = Math.max(f, m)
                }
                !function (t, e) {
                    T(t, (function (t) {
                        var n, i = t.gc, r = i.length / 2;
                        if (r > e) {
                            for (n = 0; n < r; ++n) delete t.data[i[n]];
                            i.splice(0, r)
                        }
                    }))
                }(p, e);
                var b = v.indexOf(y), w = g.indexOf(m), k = function (t) {
                    return {width: v[t] || 0, height: g[t] || 0}
                };
                return {first: k(0), last: k(e - 1), widest: k(b), highest: k(w), widths: v, heights: g}
            }
        }, {
            key: "getLabelForValue", value: function (t) {
                return t
            }
        }, {
            key: "getPixelForValue", value: function (t, e) {
                return NaN
            }
        }, {
            key: "getValueForPixel", value: function (t) {
            }
        }, {
            key: "getPixelForTick", value: function (t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
        }, {
            key: "getPixelForDecimal", value: function (t) {
                this._reversePixels && (t = 1 - t);
                var e = this._startPixel + t * this._length;
                return ut(this._alignToPixels ? ee(this.chart, e, 0) : e, -32768, 32767)
            }
        }, {
            key: "getDecimalForPixel", value: function (t) {
                var e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e
            }
        }, {
            key: "getBasePixel", value: function () {
                return this.getPixelForValue(this.getBaseValue())
            }
        }, {
            key: "getBaseValue", value: function () {
                var t = this.min, e = this.max;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            }
        }, {
            key: "getContext", value: function (t) {
                var e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    var n = e[t];
                    return n.$context || (n.$context = function (t, e, n) {
                        return we(t, {tick: n, index: e, type: "tick"})
                    }(this.getContext(), t, n))
                }
                return this.$context || (this.$context = we(this.chart.getContext(), {scale: this, type: "scale"}))
            }
        }, {
            key: "_tickSize", value: function () {
                var t = this.options.ticks, e = et(this.labelRotation), n = Math.abs(Math.cos(e)),
                    i = Math.abs(Math.sin(e)), r = this._getLabelSizes(), o = t.autoSkipPadding || 0,
                    a = r ? r.widest.width + o : 0, s = r ? r.highest.height + o : 0;
                return this.isHorizontal() ? s * n > a * i ? a / n : s / i : s * i < a * n ? s / n : a / i
            }
        }, {
            key: "_isVisible", value: function () {
                var t = this.options.display;
                return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
            }
        }, {
            key: "_computeGridLineItems", value: function (t) {
                var e, n, i, r, o, a, s, u, c, l, f, h, d = this.axis, p = this.chart, v = this.options, g = v.grid,
                    y = v.position, m = g.offset, b = this.isHorizontal(), _ = this.ticks.length + (m ? 1 : 0),
                    x = vr(g), k = [], S = g.setContext(this.getContext()), O = S.drawBorder ? S.borderWidth : 0,
                    M = O / 2, T = function (t) {
                        return ee(p, t, O)
                    };
                if ("top" === y) e = T(this.bottom), a = this.bottom - x, u = e - M, l = T(t.top) + M, h = t.bottom; else if ("bottom" === y) e = T(this.top), l = t.top, h = T(t.bottom) - M, a = e + M, u = this.top + x; else if ("left" === y) e = T(this.right), o = this.right - x, s = e - M, c = T(t.left) + M, f = t.right; else if ("right" === y) e = T(this.left), c = t.left, f = T(t.right) - M, o = e + M, s = this.left + x; else if ("x" === d) {
                    if ("center" === y) e = T((t.top + t.bottom) / 2 + .5); else if (w(y)) {
                        var A = Object.keys(y)[0], C = y[A];
                        e = T(this.chart.scales[A].getPixelForValue(C))
                    }
                    l = t.top, h = t.bottom, u = (a = e + M) + x
                } else if ("y" === d) {
                    if ("center" === y) e = T((t.left + t.right) / 2); else if (w(y)) {
                        var P = Object.keys(y)[0], D = y[P];
                        e = T(this.chart.scales[P].getPixelForValue(D))
                    }
                    s = (o = e - M) - x, c = t.left, f = t.right
                }
                var L = E(v.ticks.maxTicksLimit, _), j = Math.max(1, Math.ceil(_ / L));
                for (n = 0; n < _; n += j) {
                    var I = g.setContext(this.getContext(n)), N = I.lineWidth, R = I.color, F = g.borderDash || [],
                        B = I.borderDashOffset, W = I.tickWidth, z = I.tickColor, H = I.tickBorderDash || [],
                        V = I.tickBorderDashOffset;
                    void 0 !== (i = pr(this, n, m)) && (r = ee(p, i, N), b ? o = s = c = f = r : a = u = l = h = r, k.push({
                        tx1: o,
                        ty1: a,
                        tx2: s,
                        ty2: u,
                        x1: c,
                        y1: l,
                        x2: f,
                        y2: h,
                        width: N,
                        color: R,
                        borderDash: F,
                        borderDashOffset: B,
                        tickWidth: W,
                        tickColor: z,
                        tickBorderDash: H,
                        tickBorderDashOffset: V
                    }))
                }
                return this._ticksLength = _, this._borderValue = e, k
            }
        }, {
            key: "_computeLabelItems", value: function (t) {
                var e, n, i, r, o, a, s, u, c, l, f, h = this.axis, d = this.options, p = d.position, v = d.ticks,
                    g = this.isHorizontal(), y = this.ticks, m = v.align, b = v.crossAlign, _ = v.padding, k = v.mirror,
                    S = vr(d.grid), E = S + _, O = k ? -_ : E, M = -et(this.labelRotation), T = [], A = "middle";
                if ("top" === p) o = this.bottom - O, a = this._getXAxisLabelAlignment(); else if ("bottom" === p) o = this.top + O, a = this._getXAxisLabelAlignment(); else if ("left" === p) {
                    var C = this._getYAxisLabelAlignment(S);
                    a = C.textAlign, r = C.x
                } else if ("right" === p) {
                    var P = this._getYAxisLabelAlignment(S);
                    a = P.textAlign, r = P.x
                } else if ("x" === h) {
                    if ("center" === p) o = (t.top + t.bottom) / 2 + E; else if (w(p)) {
                        var D = Object.keys(p)[0], L = p[D];
                        o = this.chart.scales[D].getPixelForValue(L) + E
                    }
                    a = this._getXAxisLabelAlignment()
                } else if ("y" === h) {
                    if ("center" === p) r = (t.left + t.right) / 2 - E; else if (w(p)) {
                        var j = Object.keys(p)[0], I = p[j];
                        r = this.chart.scales[j].getPixelForValue(I)
                    }
                    a = this._getYAxisLabelAlignment(S).textAlign
                }
                "y" === h && ("start" === m ? A = "top" : "end" === m && (A = "bottom"));
                var N = this._getLabelSizes();
                for (e = 0, n = y.length; e < n; ++e) {
                    i = y[e].label;
                    var R = v.setContext(this.getContext(e));
                    s = this.getPixelForTick(e) + v.labelOffset, c = (u = this._resolveTickFontOptions(e)).lineHeight;
                    var F = (l = x(i) ? i.length : 1) / 2, B = R.color, W = R.textStrokeColor, z = R.textStrokeWidth;
                    g ? (r = s, f = "top" === p ? "near" === b || 0 !== M ? -l * c + c / 2 : "center" === b ? -N.highest.height / 2 - F * c + c : -N.highest.height + c / 2 : "near" === b || 0 !== M ? c / 2 : "center" === b ? N.highest.height / 2 - F * c : N.highest.height - l * c, k && (f *= -1)) : (o = s, f = (1 - l) * c / 2);
                    var H = void 0;
                    if (R.showLabelBackdrop) {
                        var V = be(R.backdropPadding), q = N.heights[e], U = N.widths[e], $ = o + f - V.top,
                            Y = r - V.left;
                        switch (A) {
                            case"middle":
                                $ -= q / 2;
                                break;
                            case"bottom":
                                $ -= q
                        }
                        switch (a) {
                            case"center":
                                Y -= U / 2;
                                break;
                            case"right":
                                Y -= U
                        }
                        H = {left: Y, top: $, width: U + V.width, height: q + V.height, color: R.backdropColor}
                    }
                    T.push({
                        rotation: M,
                        label: i,
                        font: u,
                        color: B,
                        strokeColor: W,
                        strokeWidth: z,
                        textOffset: f,
                        textAlign: a,
                        textBaseline: A,
                        translation: [r, o],
                        backdrop: H
                    })
                }
                return T
            }
        }, {
            key: "_getXAxisLabelAlignment", value: function () {
                var t = this.options, e = t.position, n = t.ticks;
                if (-et(this.labelRotation)) return "top" === e ? "left" : "right";
                var i = "center";
                return "start" === n.align ? i = "left" : "end" === n.align && (i = "right"), i
            }
        }, {
            key: "_getYAxisLabelAlignment", value: function (t) {
                var e, n, i = this.options, r = i.position, o = i.ticks, a = o.crossAlign, s = o.mirror, u = o.padding,
                    c = t + u, l = this._getLabelSizes().widest.width;
                return "left" === r ? s ? (n = this.right + u, "near" === a ? e = "left" : "center" === a ? (e = "center", n += l / 2) : (e = "right", n += l)) : (n = this.right - c, "near" === a ? e = "right" : "center" === a ? (e = "center", n -= l / 2) : (e = "left", n = this.left)) : "right" === r ? s ? (n = this.left + u, "near" === a ? e = "right" : "center" === a ? (e = "center", n -= l / 2) : (e = "left", n -= l)) : (n = this.left + c, "near" === a ? e = "left" : "center" === a ? (e = "center", n += l / 2) : (e = "right", n = this.right)) : e = "right", {
                    textAlign: e,
                    x: n
                }
            }
        }, {
            key: "_computeLabelArea", value: function () {
                if (!this.options.ticks.mirror) {
                    var t = this.chart, e = this.options.position;
                    return "left" === e || "right" === e ? {
                        top: 0,
                        left: this.left,
                        bottom: t.height,
                        right: this.right
                    } : "top" === e || "bottom" === e ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: t.width
                    } : void 0
                }
            }
        }, {
            key: "drawBackground", value: function () {
                var t = this.ctx, e = this.options.backgroundColor, n = this.left, i = this.top, r = this.width,
                    o = this.height;
                e && (t.save(), t.fillStyle = e, t.fillRect(n, i, r, o), t.restore())
            }
        }, {
            key: "getLineWidthForValue", value: function (t) {
                var e = this.options.grid;
                if (!this._isVisible() || !e.display) return 0;
                var n = this.ticks.findIndex((function (e) {
                    return e.value === t
                }));
                return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
            }
        }, {
            key: "drawGrid", value: function (t) {
                var e, n, i = this.options.grid, r = this.ctx,
                    o = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                    a = function (t, e, n) {
                        n.width && n.color && (r.save(), r.lineWidth = n.width, r.strokeStyle = n.color, r.setLineDash(n.borderDash || []), r.lineDashOffset = n.borderDashOffset, r.beginPath(), r.moveTo(t.x, t.y), r.lineTo(e.x, e.y), r.stroke(), r.restore())
                    };
                if (i.display) for (e = 0, n = o.length; e < n; ++e) {
                    var s = o[e];
                    i.drawOnChartArea && a({x: s.x1, y: s.y1}, {x: s.x2, y: s.y2}, s), i.drawTicks && a({
                        x: s.tx1,
                        y: s.ty1
                    }, {x: s.tx2, y: s.ty2}, {
                        color: s.tickColor,
                        width: s.tickWidth,
                        borderDash: s.tickBorderDash,
                        borderDashOffset: s.tickBorderDashOffset
                    })
                }
            }
        }, {
            key: "drawBorder", value: function () {
                var t = this.chart, e = this.ctx, n = this.options.grid, i = n.setContext(this.getContext()),
                    r = n.drawBorder ? i.borderWidth : 0;
                if (r) {
                    var o, a, s, u, c = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
                    this.isHorizontal() ? (o = ee(t, this.left, r) - r / 2, a = ee(t, this.right, c) + c / 2, s = u = l) : (s = ee(t, this.top, r) - r / 2, u = ee(t, this.bottom, c) + c / 2, o = a = l), e.save(), e.lineWidth = i.borderWidth, e.strokeStyle = i.borderColor, e.beginPath(), e.moveTo(o, s), e.lineTo(a, u), e.stroke(), e.restore()
                }
            }
        }, {
            key: "drawLabels", value: function (t) {
                if (this.options.ticks.display) {
                    var e = this.ctx, n = this._computeLabelArea();
                    n && oe(e, n);
                    var i, r, o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                    for (i = 0, r = o.length; i < r; ++i) {
                        var a = o[i], s = a.font, u = a.label;
                        a.backdrop && (e.fillStyle = a.backdrop.color, e.fillRect(a.backdrop.left, a.backdrop.top, a.backdrop.width, a.backdrop.height)), ce(e, u, 0, a.textOffset, s, a)
                    }
                    n && ae(e)
                }
            }
        }, {
            key: "drawTitle", value: function () {
                var t = this.ctx, e = this.options, n = e.position, i = e.title, r = e.reverse;
                if (i.display) {
                    var o = _e(i.font), a = be(i.padding), s = i.align, u = o.lineHeight / 2;
                    "bottom" === n || "center" === n || w(n) ? (u += a.bottom, x(i.text) && (u += o.lineHeight * (i.text.length - 1))) : u += a.top;
                    var c = function (t, e, n, i) {
                        var r, o, a, s = t.top, u = t.left, c = t.bottom, l = t.right, f = t.chart, h = f.chartArea,
                            d = f.scales, p = 0, v = c - s, y = l - u;
                        if (t.isHorizontal()) {
                            if (o = g(i, u, l), w(n)) {
                                var m = Object.keys(n)[0], b = n[m];
                                a = d[m].getPixelForValue(b) + v - e
                            } else a = "center" === n ? (h.bottom + h.top) / 2 + v - e : hr(t, n, e);
                            r = l - u
                        } else {
                            if (w(n)) {
                                var _ = Object.keys(n)[0], x = n[_];
                                o = d[_].getPixelForValue(x) - y + e
                            } else o = "center" === n ? (h.left + h.right) / 2 - y + e : hr(t, n, e);
                            a = g(i, c, s), p = "left" === n ? -$ : $
                        }
                        return {titleX: o, titleY: a, maxWidth: r, rotation: p}
                    }(this, u, n, s), l = c.titleX, f = c.titleY, h = c.maxWidth, d = c.rotation;
                    ce(t, i.text, 0, 0, o, {
                        color: i.color,
                        maxWidth: h,
                        rotation: d,
                        textAlign: yr(s, n, r),
                        textBaseline: "middle",
                        translation: [l, f]
                    })
                }
            }
        }, {
            key: "draw", value: function (t) {
                this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
            }
        }, {
            key: "_layers", value: function () {
                var t = this, e = this.options, i = e.ticks && e.ticks.z || 0, r = E(e.grid && e.grid.z, -1);
                return this._isVisible() && this.draw === n.prototype.draw ? [{
                    z: r, draw: function (e) {
                        t.drawBackground(), t.drawGrid(e), t.drawTitle()
                    }
                }, {
                    z: r + 1, draw: function () {
                        t.drawBorder()
                    }
                }, {
                    z: i, draw: function (e) {
                        t.drawLabels(e)
                    }
                }] : [{
                    z: i, draw: function (e) {
                        t.draw(e)
                    }
                }]
            }
        }, {
            key: "getMatchingVisibleMetas", value: function (t) {
                var e, n, i = this.chart.getSortedVisibleDatasetMetas(), r = this.axis + "AxisID", o = [];
                for (e = 0, n = i.length; e < n; ++e) {
                    var a = i[e];
                    a[r] !== this.id || t && a.type !== t || o.push(a)
                }
                return o
            }
        }, {
            key: "_resolveTickFontOptions", value: function (t) {
                return _e(this.options.ticks.setContext(this.getContext(t)).font)
            }
        }, {
            key: "_maxDigits", value: function () {
                var t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t
            }
        }]), n
    }(sr), br = function () {
        function t(e, n, i) {
            Fn(this, t), this.type = e, this.scope = n, this.override = i, this.items = Object.create(null)
        }

        return Wn(t, [{
            key: "isForType", value: function (t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
            }
        }, {
            key: "register", value: function (t) {
                var e, n = Object.getPrototypeOf(t);
                (function (t) {
                    return "id" in t && "defaults" in t
                })(n) && (e = this.register(n));
                var i = this.items, r = t.id, o = this.scope + "." + r;
                if (!r) throw new Error("class does not have id: " + t);
                return r in i || (i[r] = t, function (t, e, n) {
                    var i = L(Object.create(null), [n ? Jt.get(n) : {}, Jt.get(e), t.defaults]);
                    Jt.set(e, i), t.defaultRoutes && function (t, e) {
                        Object.keys(e).forEach((function (n) {
                            var i = n.split("."), r = i.pop(), o = [t].concat(i).join("."), a = e[n].split("."),
                                s = a.pop(), u = a.join(".");
                            Jt.route(o, r, u, s)
                        }))
                    }(e, t.defaultRoutes);
                    t.descriptors && Jt.describe(e, t.descriptors)
                }(t, o, e), this.override && Jt.override(t.id, t.overrides)), o
            }
        }, {
            key: "get", value: function (t) {
                return this.items[t]
            }
        }, {
            key: "unregister", value: function (t) {
                var e = this.items, n = t.id, i = this.scope;
                n in e && delete e[n], i && n in Jt[i] && (delete Jt[i][n], this.override && delete Xt[n])
            }
        }]), t
    }();
    var _r = new (function () {
        function t() {
            Fn(this, t), this.controllers = new br(ii, "datasets", !0), this.elements = new br(sr, "elements"), this.plugins = new br(Object, "plugins"), this.scales = new br(mr, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
        }

        return Wn(t, [{
            key: "add", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("register", e)
            }
        }, {
            key: "remove", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("unregister", e)
            }
        }, {
            key: "addControllers", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("register", e, this.controllers)
            }
        }, {
            key: "addElements", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("register", e, this.elements)
            }
        }, {
            key: "addPlugins", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("register", e, this.plugins)
            }
        }, {
            key: "addScales", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("register", e, this.scales)
            }
        }, {
            key: "getController", value: function (t) {
                return this._get(t, this.controllers, "controller")
            }
        }, {
            key: "getElement", value: function (t) {
                return this._get(t, this.elements, "element")
            }
        }, {
            key: "getPlugin", value: function (t) {
                return this._get(t, this.plugins, "plugin")
            }
        }, {
            key: "getScale", value: function (t) {
                return this._get(t, this.scales, "scale")
            }
        }, {
            key: "removeControllers", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("unregister", e, this.controllers)
            }
        }, {
            key: "removeElements", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("unregister", e, this.elements)
            }
        }, {
            key: "removePlugins", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("unregister", e, this.plugins)
            }
        }, {
            key: "removeScales", value: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._each("unregister", e, this.scales)
            }
        }, {
            key: "_each", value: function (t, e, n) {
                var i = this;
                In(e).forEach((function (e) {
                    var r = n || i._getRegistryForType(e);
                    n || r.isForType(e) || r === i.plugins && e.id ? i._exec(t, r, e) : T(e, (function (e) {
                        var r = n || i._getRegistryForType(e);
                        i._exec(t, r, e)
                    }))
                }))
            }
        }, {
            key: "_exec", value: function (t, e, n) {
                var i = F(t);
                M(n["before" + i], [], n), e[t](n), M(n["after" + i], [], n)
            }
        }, {
            key: "_getRegistryForType", value: function (t) {
                for (var e = 0; e < this._typedRegistries.length; e++) {
                    var n = this._typedRegistries[e];
                    if (n.isForType(t)) return n
                }
                return this.plugins
            }
        }, {
            key: "_get", value: function (t, e, n) {
                var i = e.get(t);
                if (void 0 === i) throw new Error('"' + t + '" is not a registered ' + n + ".");
                return i
            }
        }]), t
    }()), xr = function () {
        function t() {
            Fn(this, t), this._init = []
        }

        return Wn(t, [{
            key: "notify", value: function (t, e, n, i) {
                "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                var r = i ? this._descriptors(t).filter(i) : this._descriptors(t), o = this._notify(r, t, e, n);
                return "destroy" === e && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), o
            }
        }, {
            key: "_notify", value: function (t, e, n, i) {
                i = i || {};
                var r, o = Ln(t);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var a = r.value, s = a.plugin;
                        if (!1 === M(s[n], [e, i, a.options], s) && i.cancelable) return !1
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return !0
            }
        }, {
            key: "invalidate", value: function () {
                _(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
            }
        }, {
            key: "_descriptors", value: function (t) {
                if (this._cache) return this._cache;
                var e = this._cache = this._createDescriptors(t);
                return this._notifyStateChanges(t), e
            }
        }, {
            key: "_createDescriptors", value: function (t, e) {
                var n = t && t.config, i = E(n.options && n.options.plugins, {}), r = function (t) {
                    for (var e = [], n = Object.keys(_r.plugins.items), i = 0; i < n.length; i++) e.push(_r.getPlugin(n[i]));
                    for (var r = t.plugins || [], o = 0; o < r.length; o++) {
                        var a = r[o];
                        -1 === e.indexOf(a) && e.push(a)
                    }
                    return e
                }(n);
                return !1 !== i || e ? function (t, e, n, i) {
                    for (var r = [], o = t.getContext(), a = 0; a < e.length; a++) {
                        var s = e[a], u = s.id, c = wr(n[u], i);
                        null !== c && r.push({plugin: s, options: kr(t.config, s, c, o)})
                    }
                    return r
                }(t, r, i, e) : []
            }
        }, {
            key: "_notifyStateChanges", value: function (t) {
                var e = this._oldCache || [], n = this._cache, i = function (t, e) {
                    return t.filter((function (t) {
                        return !e.some((function (e) {
                            return t.plugin.id === e.plugin.id
                        }))
                    }))
                };
                this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start")
            }
        }]), t
    }();

    function wr(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
    }

    function kr(t, e, n, i) {
        var r = t.pluginScopeKeys(e), o = t.getOptionScopes(n, r);
        return t.createResolver(o, i, [""], {scriptable: !1, indexable: !1, allKeys: !0})
    }

    function Sr(t, e) {
        var n = Jt.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
    }

    function Er(t, e) {
        return "x" === t || "y" === t ? t : e.axis || ("top" === (n = e.position) || "bottom" === n ? "x" : "left" === n || "right" === n ? "y" : void 0) || t.charAt(0).toLowerCase();
        var n
    }

    function Or(t) {
        var e = t.options || (t.options = {});
        e.plugins = E(e.plugins, {}), e.scales = function (t, e) {
            var n = Xt[t.type] || {scales: {}}, i = e.scales || {}, r = Sr(t.type, e), o = Object.create(null),
                a = Object.create(null);
            return Object.keys(i).forEach((function (t) {
                var e = i[t];
                if (!w(e)) return console.error("Invalid scale configuration for scale: ".concat(t));
                if (e._proxy) return console.warn("Ignoring resolver passed as options for scale: ".concat(t));
                var s = Er(t, e), u = function (t, e) {
                    return t === e ? "_index_" : "_value_"
                }(s, r), c = n.scales || {};
                o[s] = o[s] || t, a[t] = j(Object.create(null), [{axis: s}, e, c[s], c[u]])
            })), t.data.datasets.forEach((function (n) {
                var r = n.type || t.type, s = n.indexAxis || Sr(r, e), u = (Xt[r] || {}).scales || {};
                Object.keys(u).forEach((function (t) {
                    var e = function (t, e) {
                        var n = t;
                        return "_index_" === t ? n = e : "_value_" === t && (n = "x" === e ? "y" : "x"), n
                    }(t, s), r = n[e + "AxisID"] || o[e] || e;
                    a[r] = a[r] || Object.create(null), j(a[r], [{axis: e}, i[r], u[t]])
                }))
            })), Object.keys(a).forEach((function (t) {
                var e = a[t];
                j(e, [Jt.scales[e.type], Jt.scale])
            })), a
        }(t, e)
    }

    function Mr(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
    }

    var Tr = new Map, Ar = new Set;

    function Cr(t, e) {
        var n = Tr.get(t);
        return n || (n = e(), Tr.set(t, n), Ar.add(n)), n
    }

    var Pr = function (t, e, n) {
        var i = R(e, n);
        void 0 !== i && t.add(i)
    }, Dr = function () {
        function t(e) {
            Fn(this, t), this._config = function (t) {
                return (t = t || {}).data = Mr(t.data), Or(t), t
            }(e), this._scopeCache = new Map, this._resolverCache = new Map
        }

        return Wn(t, [{
            key: "platform", get: function () {
                return this._config.platform
            }
        }, {
            key: "type", get: function () {
                return this._config.type
            }, set: function (t) {
                this._config.type = t
            }
        }, {
            key: "data", get: function () {
                return this._config.data
            }, set: function (t) {
                this._config.data = Mr(t)
            }
        }, {
            key: "options", get: function () {
                return this._config.options
            }, set: function (t) {
                this._config.options = t
            }
        }, {
            key: "plugins", get: function () {
                return this._config.plugins
            }
        }, {
            key: "update", value: function () {
                var t = this._config;
                this.clearCache(), Or(t)
            }
        }, {
            key: "clearCache", value: function () {
                this._scopeCache.clear(), this._resolverCache.clear()
            }
        }, {
            key: "datasetScopeKeys", value: function (t) {
                return Cr(t, (function () {
                    return [["datasets.".concat(t), ""]]
                }))
            }
        }, {
            key: "datasetAnimationScopeKeys", value: function (t, e) {
                return Cr("".concat(t, ".transition.").concat(e), (function () {
                    return [["datasets.".concat(t, ".transitions.").concat(e), "transitions.".concat(e)], ["datasets.".concat(t), ""]]
                }))
            }
        }, {
            key: "datasetElementScopeKeys", value: function (t, e) {
                return Cr("".concat(t, "-").concat(e), (function () {
                    return [["datasets.".concat(t, ".elements.").concat(e), "datasets.".concat(t), "elements.".concat(e), ""]]
                }))
            }
        }, {
            key: "pluginScopeKeys", value: function (t) {
                var e = t.id, n = this.type;
                return Cr("".concat(n, "-plugin-").concat(e), (function () {
                    return [["plugins.".concat(e)].concat(In(t.additionalOptionScopes || []))]
                }))
            }
        }, {
            key: "_cachedScopes", value: function (t, e) {
                var n = this._scopeCache, i = n.get(t);
                return i && !e || (i = new Map, n.set(t, i)), i
            }
        }, {
            key: "getOptionScopes", value: function (t, e, n) {
                var i = this.options, r = this.type, o = this._cachedScopes(t, n), a = o.get(e);
                if (a) return a;
                var s = new Set;
                e.forEach((function (e) {
                    t && (s.add(t), e.forEach((function (e) {
                        return Pr(s, t, e)
                    }))), e.forEach((function (t) {
                        return Pr(s, i, t)
                    })), e.forEach((function (t) {
                        return Pr(s, Xt[r] || {}, t)
                    })), e.forEach((function (t) {
                        return Pr(s, Jt, t)
                    })), e.forEach((function (t) {
                        return Pr(s, Gt, t)
                    }))
                }));
                var u = Array.from(s);
                return 0 === u.length && u.push(Object.create(null)), Ar.has(e) && o.set(e, u), u
            }
        }, {
            key: "chartOptionScopes", value: function () {
                var t = this.options, e = this.type;
                return [t, Xt[e] || {}, Jt.datasets[e] || {}, {type: e}, Jt, Gt]
            }
        }, {
            key: "resolveNamedOptions", value: function (t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [""], r = {$shared: !0},
                    o = Lr(this._resolverCache, t, i), a = o.resolver, s = o.subPrefixes, u = a;
                if (Ir(a, e)) {
                    r.$shared = !1, n = W(n) ? n() : n;
                    var c = this.createResolver(t, n, s);
                    u = Ce(a, n, c)
                }
                var l, f = Ln(e);
                try {
                    for (f.s(); !(l = f.n()).done;) {
                        var h = l.value;
                        r[h] = u[h]
                    }
                } catch (t) {
                    f.e(t)
                } finally {
                    f.f()
                }
                return r
            }
        }, {
            key: "createResolver", value: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [""],
                    i = arguments.length > 3 ? arguments[3] : void 0, r = Lr(this._resolverCache, t, n), o = r.resolver;
                return w(e) ? Ce(o, e, void 0, i) : o
            }
        }]), t
    }();

    function Lr(t, e, n) {
        var i = t.get(e);
        i || (i = new Map, t.set(e, i));
        var r = n.join(), o = i.get(r);
        o || (o = {
            resolver: Ae(e, n), subPrefixes: n.filter((function (t) {
                return !t.toLowerCase().includes("hover")
            }))
        }, i.set(r, o));
        return o
    }

    var jr = function (t) {
        return w(t) && Object.getOwnPropertyNames(t).reduce((function (e, n) {
            return e || W(t[n])
        }), !1)
    };

    function Ir(t, e) {
        var n, i = Pe(t), r = i.isScriptable, o = i.isIndexable, a = Ln(e);
        try {
            for (a.s(); !(n = a.n()).done;) {
                var s = n.value, u = r(s), c = o(s), l = (c || u) && t[s];
                if (u && (W(l) || jr(l)) || c && x(l)) return !0
            }
        } catch (t) {
            a.e(t)
        } finally {
            a.f()
        }
        return !1
    }

    var Nr = ["top", "bottom", "left", "right", "chartArea"];

    function Rr(t, e) {
        return "top" === t || "bottom" === t || -1 === Nr.indexOf(t) && "x" === e
    }

    function Fr(t, e) {
        return function (n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
        }
    }

    function Br(t) {
        var e = t.chart, n = e.options.animation;
        e.notifyPlugins("afterRender"), M(n && n.onComplete, [t], e)
    }

    function Wr(t) {
        var e = t.chart, n = e.options.animation;
        M(n && n.onProgress, [t], e)
    }

    function zr(t) {
        return Ke() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
    }

    var Hr = {}, Vr = function (t) {
        var e = zr(t);
        return Object.values(Hr).filter((function (t) {
            return t.canvas === e
        })).pop()
    }, qr = function () {
        function t(e, n) {
            var i = this;
            Fn(this, t);
            var r = this.config = new Dr(n), o = zr(e), a = Vr(o);
            if (a) throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas can be reused.");
            var s = r.createResolver(r.chartOptionScopes(), this.getContext());
            this.platform = new (r.platform || function (t) {
                return !Ke() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Yi : ar
            }(o)), this.platform.updateConfig(r);
            var u, c, l, f = this.platform.acquireContext(o, s.aspectRatio), h = f && f.canvas, d = h && h.height,
                p = h && h.width;
            this.id = b(), this.ctx = f, this.canvas = h, this.width = p, this.height = d, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new xr, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = (u = function (t) {
                return i.update(t)
            }, c = s.resizeDelay || 0, function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return c ? (clearTimeout(l), l = setTimeout(u, c, e)) : u.apply(this, e), c
            }), Hr[this.id] = this, f && h ? (zn.listen(this, "complete", Br), zn.listen(this, "progress", Wr), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }

        return Wn(t, [{
            key: "aspectRatio", get: function () {
                var t = this.options, e = t.aspectRatio, n = t.maintainAspectRatio, i = this.width, r = this.height,
                    o = this._aspectRatio;
                return _(e) ? n && o ? o : r ? i / r : null : e
            }
        }, {
            key: "data", get: function () {
                return this.config.data
            }, set: function (t) {
                this.config.data = t
            }
        }, {
            key: "options", get: function () {
                return this._options
            }, set: function (t) {
                this.config.options = t
            }
        }, {
            key: "_initialize", value: function () {
                return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : an(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
            }
        }, {
            key: "clear", value: function () {
                return ne(this.canvas, this.ctx), this
            }
        }, {
            key: "stop", value: function () {
                return zn.stop(this), this
            }
        }, {
            key: "resize", value: function (t, e) {
                zn.running(this) ? this._resizeBeforeDraw = {width: t, height: e} : this._resize(t, e)
            }
        }, {
            key: "_resize", value: function (t, e) {
                var n = this.options, i = this.canvas, r = n.maintainAspectRatio && this.aspectRatio,
                    o = this.platform.getMaximumSize(i, t, e, r),
                    a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), s = this.width ? "resize" : "attach";
                this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, an(this, a, !0) && (this.notifyPlugins("resize", {size: o}), M(n.onResize, [this, o], this), this.attached && this._doResize(s) && this.render())
            }
        }, {
            key: "ensureScalesHaveIDs", value: function () {
                T(this.options.scales || {}, (function (t, e) {
                    t.id = e
                }))
            }
        }, {
            key: "buildOrUpdateScales", value: function () {
                var t = this, e = this.options, n = e.scales, i = this.scales,
                    r = Object.keys(i).reduce((function (t, e) {
                        return t[e] = !1, t
                    }), {}), o = [];
                n && (o = o.concat(Object.keys(n).map((function (t) {
                    var e = n[t], i = Er(t, e), r = "r" === i, o = "x" === i;
                    return {
                        options: e,
                        dposition: r ? "chartArea" : o ? "bottom" : "left",
                        dtype: r ? "radialLinear" : o ? "category" : "linear"
                    }
                })))), T(o, (function (n) {
                    var o = n.options, a = o.id, s = Er(a, o), u = E(o.type, n.dtype);
                    void 0 !== o.position && Rr(o.position, s) === Rr(n.dposition) || (o.position = n.dposition), r[a] = !0;
                    var c = null;
                    a in i && i[a].type === u ? c = i[a] : (c = new (_r.getScale(u))({
                        id: a,
                        type: u,
                        ctx: t.ctx,
                        chart: t
                    }), i[c.id] = c);
                    c.init(o, e)
                })), T(r, (function (t, e) {
                    t || delete i[e]
                })), T(i, (function (e) {
                    qi(t, e, e.options), Hi(t, e)
                }))
            }
        }, {
            key: "_updateMetasets", value: function () {
                var t = this._metasets, e = this.data.datasets.length, n = t.length;
                if (t.sort((function (t, e) {
                    return t.index - e.index
                })), n > e) {
                    for (var i = e; i < n; ++i) this._destroyDatasetMeta(i);
                    t.splice(e, n - e)
                }
                this._sortedMetasets = t.slice(0).sort(Fr("order", "index"))
            }
        }, {
            key: "_removeUnreferencedMetasets", value: function () {
                var t = this, e = this._metasets, n = this.data.datasets;
                e.length > n.length && delete this._stacks, e.forEach((function (e, i) {
                    0 === n.filter((function (t) {
                        return t === e._dataset
                    })).length && t._destroyDatasetMeta(i)
                }))
            }
        }, {
            key: "buildOrUpdateControllers", value: function () {
                var t, e, n = [], i = this.data.datasets;
                for (this._removeUnreferencedMetasets(), t = 0, e = i.length; t < e; t++) {
                    var r = i[t], o = this.getDatasetMeta(t), a = r.type || this.config.type;
                    if (o.type && o.type !== a && (this._destroyDatasetMeta(t), o = this.getDatasetMeta(t)), o.type = a, o.indexAxis = r.indexAxis || Sr(a, this.options), o.order = r.order || 0, o.index = t, o.label = "" + r.label, o.visible = this.isDatasetVisible(t), o.controller) o.controller.updateIndex(t), o.controller.linkScales(); else {
                        var s = _r.getController(a), u = Jt.datasets[a], c = u.datasetElementType,
                            l = u.dataElementType;
                        Object.assign(s.prototype, {
                            dataElementType: _r.getElement(l),
                            datasetElementType: c && _r.getElement(c)
                        }), o.controller = new s(this, t), n.push(o.controller)
                    }
                }
                return this._updateMetasets(), n
            }
        }, {
            key: "_resetElements", value: function () {
                var t = this;
                T(this.data.datasets, (function (e, n) {
                    t.getDatasetMeta(n).controller.reset()
                }), this)
            }
        }, {
            key: "reset", value: function () {
                this._resetElements(), this.notifyPlugins("reset")
            }
        }, {
            key: "update", value: function (t) {
                var e = this, n = this.config;
                n.update();
                var i = this._options = n.createResolver(n.chartOptionScopes(), this.getContext());
                T(this.scales, (function (t) {
                    Vi(e, t)
                }));
                var r = this._animationsDisabled = !i.animation;
                if (this.ensureScalesHaveIDs(), this.buildOrUpdateScales(), function (t, e) {
                    if (t.size !== e.size) return !1;
                    var n, i = l(t);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var r = n.value;
                            if (!e.has(r)) return !1
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return !0
                }(new Set(Object.keys(this._listeners)), new Set(i.events)) && !!this._responsiveListeners === i.responsive || (this.unbindEvents(), this.bindEvents()), this._plugins.invalidate(), !1 !== this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                })) {
                    var o = this.buildOrUpdateControllers();
                    this.notifyPlugins("beforeElementsUpdate");
                    for (var a = 0, s = 0, u = this.data.datasets.length; s < u; s++) {
                        var c = this.getDatasetMeta(s).controller, f = !r && -1 === o.indexOf(c);
                        c.buildOrUpdateElements(f), a = Math.max(+c.getMaxOverflow(), a)
                    }
                    a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), r || T(o, (function (t) {
                        t.reset()
                    })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {mode: t}), this._layers.sort(Fr("z", "_idx")), this._lastEvent && this._eventHandler(this._lastEvent, !0), this.render()
                }
            }
        }, {
            key: "_updateLayout", value: function (t) {
                var e = this;
                if (!1 !== this.notifyPlugins("beforeLayout", {cancelable: !0})) {
                    Ui(this, this.width, this.height, t);
                    var n = this.chartArea, i = n.width <= 0 || n.height <= 0;
                    this._layers = [], T(this.boxes, (function (t) {
                        var n;
                        i && "chartArea" === t.position || (t.configure && t.configure(), (n = e._layers).push.apply(n, In(t._layers())))
                    }), this), this._layers.forEach((function (t, e) {
                        t._idx = e
                    })), this.notifyPlugins("afterLayout")
                }
            }
        }, {
            key: "_updateDatasets", value: function (t) {
                if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {mode: t, cancelable: !0})) {
                    for (var e = 0, n = this.data.datasets.length; e < n; ++e) this._updateDataset(e, W(t) ? t({datasetIndex: e}) : t);
                    this.notifyPlugins("afterDatasetsUpdate", {mode: t})
                }
            }
        }, {
            key: "_updateDataset", value: function (t, e) {
                var n = this.getDatasetMeta(t), i = {meta: n, index: t, mode: e, cancelable: !0};
                !1 !== this.notifyPlugins("beforeDatasetUpdate", i) && (n.controller._update(e), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i))
            }
        }, {
            key: "render", value: function () {
                !1 !== this.notifyPlugins("beforeRender", {cancelable: !0}) && (zn.has(this) ? this.attached && !zn.running(this) && zn.start(this) : (this.draw(), Br({chart: this})))
            }
        }, {
            key: "draw", value: function () {
                var t;
                if (this._resizeBeforeDraw) {
                    var e = this._resizeBeforeDraw, n = e.width, i = e.height;
                    this._resize(n, i), this._resizeBeforeDraw = null
                }
                if (this.clear(), !(this.width <= 0 || this.height <= 0) && !1 !== this.notifyPlugins("beforeDraw", {cancelable: !0})) {
                    var r = this._layers;
                    for (t = 0; t < r.length && r[t].z <= 0; ++t) r[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < r.length; ++t) r[t].draw(this.chartArea);
                    this.notifyPlugins("afterDraw")
                }
            }
        }, {
            key: "_getSortedDatasetMetas", value: function (t) {
                var e, n, i = this._sortedMetasets, r = [];
                for (e = 0, n = i.length; e < n; ++e) {
                    var o = i[e];
                    t && !o.visible || r.push(o)
                }
                return r
            }
        }, {
            key: "getSortedVisibleDatasetMetas", value: function () {
                return this._getSortedDatasetMetas(!0)
            }
        }, {
            key: "_drawDatasets", value: function () {
                if (!1 !== this.notifyPlugins("beforeDatasetsDraw", {cancelable: !0})) {
                    for (var t = this.getSortedVisibleDatasetMetas(), e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                    this.notifyPlugins("afterDatasetsDraw")
                }
            }
        }, {
            key: "_drawDataset", value: function (t) {
                var e = this.ctx, n = t._clip, i = !n.disabled, r = this.chartArea,
                    o = {meta: t, index: t.index, cancelable: !0};
                !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (i && oe(e, {
                    left: !1 === n.left ? 0 : r.left - n.left,
                    right: !1 === n.right ? this.width : r.right + n.right,
                    top: !1 === n.top ? 0 : r.top - n.top,
                    bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom
                }), t.controller.draw(), i && ae(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o))
            }
        }, {
            key: "getElementsAtEventForMode", value: function (t, e, n, i) {
                var r = Ai.modes[e];
                return "function" == typeof r ? r(this, t, n, i) : []
            }
        }, {
            key: "getDatasetMeta", value: function (t) {
                var e = this.data.datasets[t], n = this._metasets, i = n.filter((function (t) {
                    return t && t._dataset === e
                })).pop();
                return i || (i = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: e && e.order || 0,
                    index: t,
                    _dataset: e,
                    _parsed: [],
                    _sorted: !1
                }, n.push(i)), i
            }
        }, {
            key: "getContext", value: function () {
                return this.$context || (this.$context = we(null, {chart: this, type: "chart"}))
            }
        }, {
            key: "getVisibleDatasetCount", value: function () {
                return this.getSortedVisibleDatasetMetas().length
            }
        }, {
            key: "isDatasetVisible", value: function (t) {
                var e = this.data.datasets[t];
                if (!e) return !1;
                var n = this.getDatasetMeta(t);
                return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden
            }
        }, {
            key: "setDatasetVisibility", value: function (t, e) {
                this.getDatasetMeta(t).hidden = !e
            }
        }, {
            key: "toggleDataVisibility", value: function (t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t]
            }
        }, {
            key: "getDataVisibility", value: function (t) {
                return !this._hiddenIndices[t]
            }
        }, {
            key: "_updateVisibility", value: function (t, e, n) {
                var i = n ? "show" : "hide", r = this.getDatasetMeta(t), o = r.controller._resolveAnimations(void 0, i);
                B(e) ? (r.data[e].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), o.update(r, {visible: n}), this.update((function (e) {
                    return e.datasetIndex === t ? i : void 0
                })))
            }
        }, {
            key: "hide", value: function (t, e) {
                this._updateVisibility(t, e, !1)
            }
        }, {
            key: "show", value: function (t, e) {
                this._updateVisibility(t, e, !0)
            }
        }, {
            key: "_destroyDatasetMeta", value: function (t) {
                var e = this._metasets[t];
                e && e.controller && e.controller._destroy(), delete this._metasets[t]
            }
        }, {
            key: "_stop", value: function () {
                var t, e;
                for (this.stop(), zn.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
            }
        }, {
            key: "destroy", value: function () {
                var t = this.canvas, e = this.ctx;
                this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ne(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete Hr[this.id]
            }
        }, {
            key: "toBase64Image", value: function () {
                var t;
                return (t = this.canvas).toDataURL.apply(t, arguments)
            }
        }, {
            key: "bindEvents", value: function () {
                this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
            }
        }, {
            key: "bindUserEvents", value: function () {
                var t = this, e = this._listeners, n = this.platform, i = function (e, n, i) {
                    e.offsetX = n, e.offsetY = i, t._eventHandler(e)
                };
                T(this.options.events, (function (r) {
                    return function (i, r) {
                        n.addEventListener(t, i, r), e[i] = r
                    }(r, i)
                }))
            }
        }, {
            key: "bindResponsiveEvents", value: function () {
                var t = this;
                this._responsiveListeners || (this._responsiveListeners = {});
                var e, n = this._responsiveListeners, i = this.platform, r = function (e, r) {
                    i.addEventListener(t, e, r), n[e] = r
                }, o = function (e, r) {
                    n[e] && (i.removeEventListener(t, e, r), delete n[e])
                }, a = function (e, n) {
                    t.canvas && t.resize(e, n)
                }, s = function n() {
                    o("attach", n), t.attached = !0, t.resize(), r("resize", a), r("detach", e)
                };
                e = function () {
                    t.attached = !1, o("resize", a), t._stop(), t._resize(0, 0), r("attach", s)
                }, i.isAttached(this.canvas) ? s() : e()
            }
        }, {
            key: "unbindEvents", value: function () {
                var t = this;
                T(this._listeners, (function (e, n) {
                    t.platform.removeEventListener(t, n, e)
                })), this._listeners = {}, T(this._responsiveListeners, (function (e, n) {
                    t.platform.removeEventListener(t, n, e)
                })), this._responsiveListeners = void 0
            }
        }, {
            key: "updateHoverStyle", value: function (t, e, n) {
                var i, r, o, a = n ? "set" : "remove";
                for ("dataset" === e && this.getDatasetMeta(t[0].datasetIndex).controller["_" + a + "DatasetHoverStyle"](), r = 0, o = t.length; r < o; ++r) {
                    var s = (i = t[r]) && this.getDatasetMeta(i.datasetIndex).controller;
                    s && s[a + "HoverStyle"](i.element, i.datasetIndex, i.index)
                }
            }
        }, {
            key: "getActiveElements", value: function () {
                return this._active || []
            }
        }, {
            key: "setActiveElements", value: function (t) {
                var e = this, n = this._active || [], i = t.map((function (t) {
                    var n = t.datasetIndex, i = t.index, r = e.getDatasetMeta(n);
                    if (!r) throw new Error("No dataset found at index " + n);
                    return {datasetIndex: n, element: r.data[i], index: i}
                }));
                !A(i, n) && (this._active = i, this._updateHoverStyles(i, n))
            }
        }, {
            key: "notifyPlugins", value: function (t, e, n) {
                return this._plugins.notify(this, t, e, n)
            }
        }, {
            key: "_updateHoverStyles", value: function (t, e, n) {
                var i = this.options.hover, r = function (t, e) {
                    return t.filter((function (t) {
                        return !e.some((function (e) {
                            return t.datasetIndex === e.datasetIndex && t.index === e.index
                        }))
                    }))
                }, o = r(e, t), a = n ? t : r(t, e);
                o.length && this.updateHoverStyle(o, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
            }
        }, {
            key: "_eventHandler", value: function (t, e) {
                var n = this, i = {event: t, replay: e, cancelable: !0}, r = function (e) {
                    return (e.options.events || n.options.events).includes(t.native.type)
                };
                if (!1 !== this.notifyPlugins("beforeEvent", i, r)) {
                    var o = this._handleEvent(t, e);
                    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, r), (o || i.changed) && this.render(), this
                }
            }
        }, {
            key: "_handleEvent", value: function (t, e) {
                var n, i = this._active, r = void 0 === i ? [] : i, o = this.options, a = o.hover, s = e, u = [],
                    c = null;
                return "mouseout" !== t.type && (u = this.getElementsAtEventForMode(t, a.mode, a, s), c = "click" === t.type ? this._lastEvent : t), this._lastEvent = null, re(t, this.chartArea, this._minPadding) && (M(o.onHover, [t, u, this], this), "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || M(o.onClick, [t, u, this], this)), ((n = !A(u, r)) || e) && (this._active = u, this._updateHoverStyles(u, r, e)), this._lastEvent = c, n
            }
        }]), t
    }(), Ur = function () {
        return T(qr.instances, (function (t) {
            return t._plugins.invalidate()
        }))
    };

    function $r(t, e, n) {
        var i = e.startAngle, r = e.pixelMargin, o = e.x, a = e.y, s = e.outerRadius, u = e.innerRadius, c = r / s;
        t.beginPath(), t.arc(o, a, s, i - c, n + c), u > r ? (c = r / u, t.arc(o, a, u, n + c, i - c, !0)) : t.arc(o, a, r, n + $, i - $), t.closePath(), t.clip()
    }

    function Yr(t, e, n, i) {
        var r = ge(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]), o = (n - e) / 2,
            a = Math.min(o, i * e / 2), s = function (t) {
                var e = (n - Math.min(o, t)) * i / 2;
                return ut(t, 0, Math.min(o, e))
            };
        return {
            outerStart: s(r.outerStart),
            outerEnd: s(r.outerEnd),
            innerStart: ut(r.innerStart, 0, a),
            innerEnd: ut(r.innerEnd, 0, a)
        }
    }

    function Xr(t, e, n, i) {
        return {x: n + t * Math.cos(e), y: i + t * Math.sin(e)}
    }

    function Gr(t, e, n, i, r) {
        var o = e.x, a = e.y, s = e.startAngle, u = e.pixelMargin, c = e.innerRadius,
            l = Math.max(e.outerRadius + i + n - u, 0), f = c > 0 ? c + i + n + u : 0, h = 0, d = r - s;
        if (i) {
            var p = ((c > 0 ? c - i : 0) + (l > 0 ? l - i : 0)) / 2;
            h = (d - (0 !== p ? d * p / (p + i) : d)) / 2
        }
        var v = (d - Math.max(.001, d * l - n / z) / l) / 2, g = s + v + h, y = r - v - h, m = Yr(e, f, l, y - g),
            b = m.outerStart, _ = m.outerEnd, x = m.innerStart, w = m.innerEnd, k = l - b, S = l - _, E = g + b / k,
            O = y - _ / S, M = f + x, T = f + w, A = g + x / M, C = y - w / T;
        if (t.beginPath(), t.arc(o, a, l, E, O), _ > 0) {
            var P = Xr(S, O, o, a);
            t.arc(P.x, P.y, _, O, y + $)
        }
        var D = Xr(T, y, o, a);
        if (t.lineTo(D.x, D.y), w > 0) {
            var L = Xr(T, C, o, a);
            t.arc(L.x, L.y, w, y + $, C + Math.PI)
        }
        if (t.arc(o, a, f, y - w / f, g + x / f, !0), x > 0) {
            var j = Xr(M, A, o, a);
            t.arc(j.x, j.y, x, A + Math.PI, g - $)
        }
        var I = Xr(k, g, o, a);
        if (t.lineTo(I.x, I.y), b > 0) {
            var N = Xr(k, E, o, a);
            t.arc(N.x, N.y, b, g - $, E)
        }
        t.closePath()
    }

    function Kr(t, e, n, i, r) {
        var o = e.options, a = "inner" === o.borderAlign;
        o.borderWidth && (a ? (t.lineWidth = 2 * o.borderWidth, t.lineJoin = "round") : (t.lineWidth = o.borderWidth, t.lineJoin = "bevel"), e.fullCircles && function (t, e, n) {
            var i, r = e.x, o = e.y, a = e.startAngle, s = e.pixelMargin, u = e.fullCircles,
                c = Math.max(e.outerRadius - s, 0), l = e.innerRadius + s;
            for (n && $r(t, e, a + H), t.beginPath(), t.arc(r, o, l, a + H, a, !0), i = 0; i < u; ++i) t.stroke();
            for (t.beginPath(), t.arc(r, o, c, a, a + H), i = 0; i < u; ++i) t.stroke()
        }(t, e, a), a && $r(t, e, r), Gr(t, e, n, i, r), t.stroke())
    }

    Object.defineProperties(qr, {
        defaults: {enumerable: !0, value: Jt},
        instances: {enumerable: !0, value: Hr},
        overrides: {enumerable: !0, value: Xt},
        registry: {enumerable: !0, value: _r},
        version: {enumerable: !0, value: "3.6.0"},
        getChart: {enumerable: !0, value: Vr},
        register: {
            enumerable: !0, value: function () {
                _r.add.apply(_r, arguments), Ur()
            }
        },
        unregister: {
            enumerable: !0, value: function () {
                _r.remove.apply(_r, arguments), Ur()
            }
        }
    });
    var Qr = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).options = void 0, i.circumference = void 0, i.startAngle = void 0, i.endAngle = void 0, i.innerRadius = void 0, i.outerRadius = void 0, i.pixelMargin = 0, i.fullCircles = 0, t && Object.assign(An(i), t), i
        }

        return Wn(n, [{
            key: "inRange", value: function (t, e, n) {
                var i = function (t, e) {
                        var n = e.x - t.x, i = e.y - t.y, r = Math.sqrt(n * n + i * i), o = Math.atan2(i, n);
                        return o < -.5 * z && (o += H), {angle: o, distance: r}
                    }(this.getProps(["x", "y"], n), {x: t, y: e}), r = i.angle, o = i.distance,
                    a = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], n),
                    s = a.startAngle, u = a.endAngle, c = a.innerRadius, l = a.outerRadius, f = a.circumference,
                    h = this.options.spacing / 2;
                return (f >= H || st(r, s, u)) && (o >= c + h && o <= l + h)
            }
        }, {
            key: "getCenterPoint", value: function (t) {
                var e = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
                    n = e.x, i = e.y, r = e.startAngle, o = e.endAngle, a = e.innerRadius, s = e.outerRadius,
                    u = this.options, c = u.offset, l = (r + o) / 2, f = (a + s + u.spacing + c) / 2;
                return {x: n + Math.cos(l) * f, y: i + Math.sin(l) * f}
            }
        }, {
            key: "tooltipPosition", value: function (t) {
                return this.getCenterPoint(t)
            }
        }, {
            key: "draw", value: function (t) {
                var e = this.options, n = this.circumference, i = (e.offset || 0) / 2, r = (e.spacing || 0) / 2;
                if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = n > H ? Math.floor(n / H) : 0, !(0 === n || this.innerRadius < 0 || this.outerRadius < 0)) {
                    t.save();
                    var o = 0;
                    if (i) {
                        o = i / 2;
                        var a = (this.startAngle + this.endAngle) / 2;
                        t.translate(Math.cos(a) * o, Math.sin(a) * o), this.circumference >= z && (o = i)
                    }
                    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
                    var s = function (t, e, n, i) {
                        var r = e.fullCircles, o = e.startAngle, a = e.circumference, s = e.endAngle;
                        if (r) {
                            Gr(t, e, n, i, o + H);
                            for (var u = 0; u < r; ++u) t.fill();
                            isNaN(a) || (s = o + a % H, a % H == 0 && (s += H))
                        }
                        return Gr(t, e, n, i, s), t.fill(), s
                    }(t, this, o, r);
                    Kr(t, this, o, r, s), t.restore()
                }
            }
        }]), n
    }(sr);

    function Jr(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
        t.lineCap = E(n.borderCapStyle, e.borderCapStyle), t.setLineDash(E(n.borderDash, e.borderDash)), t.lineDashOffset = E(n.borderDashOffset, e.borderDashOffset), t.lineJoin = E(n.borderJoinStyle, e.borderJoinStyle), t.lineWidth = E(n.borderWidth, e.borderWidth), t.strokeStyle = E(n.borderColor, e.borderColor)
    }

    function Zr(t, e, n) {
        t.lineTo(n.x, n.y)
    }

    function to(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = t.length, r = n.start,
            o = void 0 === r ? 0 : r, a = n.end, s = void 0 === a ? i - 1 : a, u = e.start, c = e.end,
            l = Math.max(o, u), f = Math.min(s, c), h = o < u && s < u || o > c && s > c;
        return {count: i, start: l, loop: e.loop, ilen: f < l && !h ? i + f - l : f - l}
    }

    function eo(t, e, n, i) {
        var r, o, a, s = e.points, u = e.options, c = to(s, n, i), l = c.count, f = c.start, h = c.loop, d = c.ilen,
            p = function (t) {
                return t.stepped ? se : t.tension || "monotone" === t.cubicInterpolationMode ? ue : Zr
            }(u), v = i || {}, g = v.move, y = void 0 === g || g, m = v.reverse;
        for (r = 0; r <= d; ++r) (o = s[(f + (m ? d - r : r)) % l]).skip || (y ? (t.moveTo(o.x, o.y), y = !1) : p(t, a, o, m, u.stepped), a = o);
        return h && p(t, a, o = s[(f + (m ? d : 0)) % l], m, u.stepped), !!h
    }

    function no(t, e, n, i) {
        var r, o, a, s, u, c, l = e.points, f = to(l, n, i), h = f.count, d = f.start, p = f.ilen, v = i || {},
            g = v.move, y = void 0 === g || g, m = v.reverse, b = 0, _ = 0, x = function (t) {
                return (d + (m ? p - t : t)) % h
            }, w = function () {
                s !== u && (t.lineTo(b, u), t.lineTo(b, s), t.lineTo(b, c))
            };
        for (y && (o = l[x(0)], t.moveTo(o.x, o.y)), r = 0; r <= p; ++r) if (!(o = l[x(r)]).skip) {
            var k = o.x, S = o.y, E = 0 | k;
            E === a ? (S < s ? s = S : S > u && (u = S), b = (_ * b + k) / ++_) : (w(), t.lineTo(k, S), a = E, _ = 0, s = u = S), c = S
        }
        w()
    }

    function io(t) {
        var e = t.options, n = e.borderDash && e.borderDash.length;
        return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || n) ? no : eo
    }

    Qr.id = "arc", Qr.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0
    }, Qr.defaultRoutes = {backgroundColor: "backgroundColor"};
    var ro = "function" == typeof Path2D;

    function oo(t, e, n, i) {
        ro && !e.options.segment ? function (t, e, n, i) {
            var r = e._path;
            r || (r = e._path = new Path2D, e.path(r, n, i) && r.closePath()), Jr(t, e.options), t.stroke(r)
        }(t, e, n, i) : function (t, e, n, i) {
            var r, o = e.segments, a = e.options, s = io(e), u = Ln(o);
            try {
                for (u.s(); !(r = u.n()).done;) {
                    var c = r.value;
                    Jr(t, a, c.style), t.beginPath(), s(t, e, c, {
                        start: n,
                        end: n + i - 1
                    }) && t.closePath(), t.stroke()
                }
            } catch (t) {
                u.e(t)
            } finally {
                u.f()
            }
        }(t, e, n, i)
    }

    var ao = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).animated = !0, i.options = void 0, i._chart = void 0, i._loop = void 0, i._fullLoop = void 0, i._path = void 0, i._points = void 0, i._segments = void 0, i._decimated = !1, i._pointsUpdated = !1, i._datasetIndex = void 0, t && Object.assign(An(i), t), i
        }

        return Wn(n, [{
            key: "updateControlPoints", value: function (t, e) {
                var n = this.options;
                if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !this._pointsUpdated) {
                    var i = n.spanGaps ? this._loop : this._fullLoop;
                    Ge(this._points, n, t, i, e), this._pointsUpdated = !0
                }
            }
        }, {
            key: "points", get: function () {
                return this._points
            }, set: function (t) {
                this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
            }
        }, {
            key: "segments", get: function () {
                return this._segments || (this._segments = function (t, e) {
                    var n = t.points, i = t.options.spanGaps, r = n.length;
                    if (!r) return [];
                    var o = !!t._loop, a = function (t, e, n, i) {
                        var r = 0, o = e - 1;
                        if (n && !i) for (; r < e && !t[r].skip;) r++;
                        for (; r < e && t[r].skip;) r++;
                        for (r %= e, n && (o += r); o > r && t[o % e].skip;) o--;
                        return {start: r, end: o %= e}
                    }(n, r, o, i), s = a.start, u = a.end;
                    return xn(t, !0 === i ? [{start: s, end: u, loop: o}] : function (t, e, n, i) {
                        var r, o = t.length, a = [], s = e, u = t[e];
                        for (r = e + 1; r <= n; ++r) {
                            var c = t[r % o];
                            c.skip || c.stop ? u.skip || (i = !1, a.push({
                                start: e % o,
                                end: (r - 1) % o,
                                loop: i
                            }), e = s = c.stop ? r : null) : (s = r, u.skip && (e = r)), u = c
                        }
                        return null !== s && a.push({start: e % o, end: s % o, loop: i}), a
                    }(n, s, u < s ? u + r : u, !!t._fullLoop && 0 === s && u === r - 1), n, e)
                }(this, this.options.segment))
            }
        }, {
            key: "first", value: function () {
                var t = this.segments, e = this.points;
                return t.length && e[t[0].start]
            }
        }, {
            key: "last", value: function () {
                var t = this.segments, e = this.points, n = t.length;
                return n && e[t[n - 1].end]
            }
        }, {
            key: "interpolate", value: function (t, e) {
                var n = this.options, i = t[e], r = this.points, o = _n(this, {property: e, start: i, end: i});
                if (o.length) {
                    var a, s, u = [], c = function (t) {
                        return t.stepped ? ln : t.tension || "monotone" === t.cubicInterpolationMode ? fn : cn
                    }(n);
                    for (a = 0, s = o.length; a < s; ++a) {
                        var l = o[a], f = l.start, h = l.end, d = r[f], p = r[h];
                        if (d !== p) {
                            var v = c(d, p, Math.abs((i - d[e]) / (p[e] - d[e])), n.stepped);
                            v[e] = t[e], u.push(v)
                        } else u.push(d)
                    }
                    return 1 === u.length ? u[0] : u
                }
            }
        }, {
            key: "pathSegment", value: function (t, e, n) {
                return io(this)(t, this, e, n)
            }
        }, {
            key: "path", value: function (t, e, n) {
                var i = this.segments, r = io(this), o = this._loop;
                e = e || 0, n = n || this.points.length - e;
                var a, s = Ln(i);
                try {
                    for (s.s(); !(a = s.n()).done;) {
                        o &= r(t, this, a.value, {start: e, end: e + n - 1})
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return !!o
            }
        }, {
            key: "draw", value: function (t, e, n, i) {
                var r = this.options || {};
                (this.points || []).length && r.borderWidth && (t.save(), oo(t, this, n, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
            }
        }]), n
    }(sr);

    function so(t, e, n, i) {
        var r = t.options, o = t.getProps([n], i)[n];
        return Math.abs(e - o) < r.radius + r.hitRadius
    }

    ao.id = "line", ao.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }, ao.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    }, ao.descriptors = {
        _scriptable: !0, _indexable: function (t) {
            return "borderDash" !== t && "fill" !== t
        }
    };
    var uo = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).options = void 0, i.parsed = void 0, i.skip = void 0, i.stop = void 0, t && Object.assign(An(i), t), i
        }

        return Wn(n, [{
            key: "inRange", value: function (t, e, n) {
                var i = this.options, r = this.getProps(["x", "y"], n), o = r.x, a = r.y;
                return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(i.hitRadius + i.radius, 2)
            }
        }, {
            key: "inXRange", value: function (t, e) {
                return so(this, t, "x", e)
            }
        }, {
            key: "inYRange", value: function (t, e) {
                return so(this, t, "y", e)
            }
        }, {
            key: "getCenterPoint", value: function (t) {
                var e = this.getProps(["x", "y"], t);
                return {x: e.x, y: e.y}
            }
        }, {
            key: "size", value: function (t) {
                var e = (t = t || this.options || {}).radius || 0;
                return 2 * ((e = Math.max(e, e && t.hoverRadius || 0)) + (e && t.borderWidth || 0))
            }
        }, {
            key: "draw", value: function (t, e) {
                var n = this.options;
                this.skip || n.radius < .1 || !re(this, e, this.size(n) / 2) || (t.strokeStyle = n.borderColor, t.lineWidth = n.borderWidth, t.fillStyle = n.backgroundColor, ie(t, n, this.x, this.y))
            }
        }, {
            key: "getRange", value: function () {
                var t = this.options || {};
                return t.radius + t.hitRadius
            }
        }]), n
    }(sr);

    function co(t, e) {
        var n, i, r, o, a, s = t.getProps(["x", "y", "base", "width", "height"], e), u = s.x, c = s.y, l = s.base,
            f = s.width, h = s.height;
        return t.horizontal ? (a = h / 2, n = Math.min(u, l), i = Math.max(u, l), r = c - a, o = c + a) : (n = u - (a = f / 2), i = u + a, r = Math.min(c, l), o = Math.max(c, l)), {
            left: n,
            top: r,
            right: i,
            bottom: o
        }
    }

    function lo(t, e, n, i) {
        return t ? 0 : ut(e, n, i)
    }

    function fo(t) {
        var e = co(t), n = e.right - e.left, i = e.bottom - e.top, r = function (t, e, n) {
            var i = t.options.borderWidth, r = t.borderSkipped, o = ye(i);
            return {
                t: lo(r.top, o.top, 0, n),
                r: lo(r.right, o.right, 0, e),
                b: lo(r.bottom, o.bottom, 0, n),
                l: lo(r.left, o.left, 0, e)
            }
        }(t, n / 2, i / 2), o = function (t, e, n) {
            var i = t.getProps(["enableBorderRadius"]).enableBorderRadius, r = t.options.borderRadius, o = me(r),
                a = Math.min(e, n), s = t.borderSkipped, u = i || w(r);
            return {
                topLeft: lo(!u || s.top || s.left, o.topLeft, 0, a),
                topRight: lo(!u || s.top || s.right, o.topRight, 0, a),
                bottomLeft: lo(!u || s.bottom || s.left, o.bottomLeft, 0, a),
                bottomRight: lo(!u || s.bottom || s.right, o.bottomRight, 0, a)
            }
        }(t, n / 2, i / 2);
        return {
            outer: {x: e.left, y: e.top, w: n, h: i, radius: o},
            inner: {
                x: e.left + r.l,
                y: e.top + r.t,
                w: n - r.l - r.r,
                h: i - r.t - r.b,
                radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
                    topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
                    bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r))
                }
            }
        }
    }

    function ho(t, e, n, i) {
        var r = null === e, o = null === n, a = t && !(r && o) && co(t, i);
        return a && (r || e >= a.left && e <= a.right) && (o || n >= a.top && n <= a.bottom)
    }

    function po(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
    }

    function vo(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = t.x !== n.x ? -e : 0,
            r = t.y !== n.y ? -e : 0, o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
            a = (t.y + t.h !== n.y + n.h ? e : 0) - r;
        return {x: t.x + i, y: t.y + r, w: t.w + o, h: t.h + a, radius: t.radius}
    }

    uo.id = "point", uo.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    }, uo.defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};
    var go = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).options = void 0, i.horizontal = void 0, i.base = void 0, i.width = void 0, i.height = void 0, i.inflateAmount = void 0, t && Object.assign(An(i), t), i
        }

        return Wn(n, [{
            key: "draw", value: function (t) {
                var e, n = this.inflateAmount, i = this.options, r = i.borderColor, o = i.backgroundColor, a = fo(this),
                    s = a.inner, u = a.outer,
                    c = (e = u.radius).topLeft || e.topRight || e.bottomLeft || e.bottomRight ? he : po;
                t.save(), u.w === s.w && u.h === s.h || (t.beginPath(), c(t, vo(u, n, s)), t.clip(), c(t, vo(s, -n, u)), t.fillStyle = r, t.fill("evenodd")), t.beginPath(), c(t, vo(s, n)), t.fillStyle = o, t.fill(), t.restore()
            }
        }, {
            key: "inRange", value: function (t, e, n) {
                return ho(this, t, e, n)
            }
        }, {
            key: "inXRange", value: function (t, e) {
                return ho(this, t, null, e)
            }
        }, {
            key: "inYRange", value: function (t, e) {
                return ho(this, null, t, e)
            }
        }, {
            key: "getCenterPoint", value: function (t) {
                var e = this.getProps(["x", "y", "base", "horizontal"], t), n = e.x, i = e.y, r = e.base,
                    o = e.horizontal;
                return {x: o ? (n + r) / 2 : n, y: o ? i : (i + r) / 2}
            }
        }, {
            key: "getRange", value: function (t) {
                return "x" === t ? this.width / 2 : this.height / 2
            }
        }]), n
    }(sr);
    go.id = "bar", go.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
    }, go.defaultRoutes = {backgroundColor: "backgroundColor", borderColor: "borderColor"};
    var yo = function (t, e) {
        var n = t.boxHeight, i = void 0 === n ? e : n, r = t.boxWidth, o = void 0 === r ? e : r;
        return t.usePointStyle && (i = Math.min(i, e), o = Math.min(o, e)), {
            boxWidth: o,
            boxHeight: i,
            itemHeight: Math.max(e, i)
        }
    }, mo = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this))._added = !1, i.legendHitBoxes = [], i._hoveredItem = null, i.doughnutMode = !1, i.chart = t.chart, i.options = t.options, i.ctx = t.ctx, i.legendItems = void 0, i.columnSizes = void 0, i.lineWidths = void 0, i.maxHeight = void 0, i.maxWidth = void 0, i.top = void 0, i.bottom = void 0, i.left = void 0, i.right = void 0, i.height = void 0, i.width = void 0, i._margins = void 0, i.position = void 0, i.weight = void 0, i.fullSize = void 0, i
        }

        return Wn(n, [{
            key: "update", value: function (t, e, n) {
                this.maxWidth = t, this.maxHeight = e, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit()
            }
        }, {
            key: "setDimensions", value: function () {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
            }
        }, {
            key: "buildLabels", value: function () {
                var t = this, e = this.options.labels || {}, n = M(e.generateLabels, [this.chart], this) || [];
                e.filter && (n = n.filter((function (n) {
                    return e.filter(n, t.chart.data)
                }))), e.sort && (n = n.sort((function (n, i) {
                    return e.sort(n, i, t.chart.data)
                }))), this.options.reverse && n.reverse(), this.legendItems = n
            }
        }, {
            key: "fit", value: function () {
                var t = this.options, e = this.ctx;
                if (t.display) {
                    var n, i, r = t.labels, o = _e(r.font), a = o.size, s = this._computeTitleHeight(), u = yo(r, a),
                        c = u.boxWidth, l = u.itemHeight;
                    e.font = o.string, this.isHorizontal() ? (n = this.maxWidth, i = this._fitRows(s, a, c, l) + 10) : (i = this.maxHeight, n = this._fitCols(s, a, c, l) + 10), this.width = Math.min(n, t.maxWidth || this.maxWidth), this.height = Math.min(i, t.maxHeight || this.maxHeight)
                } else this.width = this.height = 0
            }
        }, {
            key: "_fitRows", value: function (t, e, n, i) {
                var r = this.ctx, o = this.maxWidth, a = this.options.labels.padding, s = this.legendHitBoxes = [],
                    u = this.lineWidths = [0], c = i + a, l = t;
                r.textAlign = "left", r.textBaseline = "middle";
                var f = -1, h = -c;
                return this.legendItems.forEach((function (t, d) {
                    var p = n + e / 2 + r.measureText(t.text).width;
                    (0 === d || u[u.length - 1] + p + 2 * a > o) && (l += c, u[u.length - (d > 0 ? 0 : 1)] = 0, h += c, f++), s[d] = {
                        left: 0,
                        top: h,
                        row: f,
                        width: p,
                        height: i
                    }, u[u.length - 1] += p + a
                })), l
            }
        }, {
            key: "_fitCols", value: function (t, e, n, i) {
                var r = this.ctx, o = this.maxHeight, a = this.options.labels.padding, s = this.legendHitBoxes = [],
                    u = this.columnSizes = [], c = o - t, l = a, f = 0, h = 0, d = 0, p = 0;
                return this.legendItems.forEach((function (t, o) {
                    var v = n + e / 2 + r.measureText(t.text).width;
                    o > 0 && h + i + 2 * a > c && (l += f + a, u.push({
                        width: f,
                        height: h
                    }), d += f + a, p++, f = h = 0), s[o] = {
                        left: d,
                        top: h,
                        col: p,
                        width: v,
                        height: i
                    }, f = Math.max(f, v), h += i + a
                })), l += f, u.push({width: f, height: h}), l
            }
        }, {
            key: "adjustHitBoxes", value: function () {
                if (this.options.display) {
                    var t = this._computeTitleHeight(), e = this.legendHitBoxes, n = this.options, i = n.align,
                        r = n.labels.padding, o = pn(n.rtl, this.left, this.width);
                    if (this.isHorizontal()) {
                        var a, s = 0, u = g(i, this.left + r, this.right - this.lineWidths[s]), c = Ln(e);
                        try {
                            for (c.s(); !(a = c.n()).done;) {
                                var l = a.value;
                                s !== l.row && (s = l.row, u = g(i, this.left + r, this.right - this.lineWidths[s])), l.top += this.top + t + r, l.left = o.leftForLtr(o.x(u), l.width), u += l.width + r
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                    } else {
                        var f, h = 0, d = g(i, this.top + t + r, this.bottom - this.columnSizes[h].height), p = Ln(e);
                        try {
                            for (p.s(); !(f = p.n()).done;) {
                                var v = f.value;
                                v.col !== h && (h = v.col, d = g(i, this.top + t + r, this.bottom - this.columnSizes[h].height)), v.top = d, v.left += this.left + r, v.left = o.leftForLtr(o.x(v.left), v.width), d += v.height + r
                            }
                        } catch (t) {
                            p.e(t)
                        } finally {
                            p.f()
                        }
                    }
                }
            }
        }, {
            key: "isHorizontal", value: function () {
                return "top" === this.options.position || "bottom" === this.options.position
            }
        }, {
            key: "draw", value: function () {
                if (this.options.display) {
                    var t = this.ctx;
                    oe(t, this), this._draw(), ae(t)
                }
            }
        }, {
            key: "_draw", value: function () {
                var t, e = this, n = this.options, i = this.columnSizes, r = this.lineWidths, o = this.ctx, a = n.align,
                    s = n.labels, u = Jt.color, c = pn(n.rtl, this.left, this.width), l = _e(s.font), f = s.color,
                    h = s.padding, d = l.size, p = d / 2;
                this.drawTitle(), o.textAlign = c.textAlign("left"), o.textBaseline = "middle", o.lineWidth = .5, o.font = l.string;
                var v = yo(s, d), y = v.boxWidth, m = v.boxHeight, b = v.itemHeight, _ = this.isHorizontal(),
                    x = this._computeTitleHeight();
                t = _ ? {x: g(a, this.left + h, this.right - r[0]), y: this.top + h + x, line: 0} : {
                    x: this.left + h,
                    y: g(a, this.top + x + h, this.bottom - i[0].height),
                    line: 0
                }, vn(this.ctx, n.textDirection);
                var w = b + h;
                this.legendItems.forEach((function (v, k) {
                    o.strokeStyle = v.fontColor || f, o.fillStyle = v.fontColor || f;
                    var S = o.measureText(v.text).width, O = c.textAlign(v.textAlign || (v.textAlign = s.textAlign)),
                        M = y + p + S, T = t.x, A = t.y;
                    c.setWidth(e.width), _ ? k > 0 && T + M + h > e.right && (A = t.y += w, t.line++, T = t.x = g(a, e.left + h, e.right - r[t.line])) : k > 0 && A + w > e.bottom && (T = t.x = T + i[t.line].width + h, t.line++, A = t.y = g(a, e.top + x + h, e.bottom - i[t.line].height)), function (t, e, n) {
                        if (!(isNaN(y) || y <= 0 || isNaN(m) || m < 0)) {
                            o.save();
                            var i = E(n.lineWidth, 1);
                            if (o.fillStyle = E(n.fillStyle, u), o.lineCap = E(n.lineCap, "butt"), o.lineDashOffset = E(n.lineDashOffset, 0), o.lineJoin = E(n.lineJoin, "miter"), o.lineWidth = i, o.strokeStyle = E(n.strokeStyle, u), o.setLineDash(E(n.lineDash, [])), s.usePointStyle) {
                                var r = {
                                    radius: y * Math.SQRT2 / 2,
                                    pointStyle: n.pointStyle,
                                    rotation: n.rotation,
                                    borderWidth: i
                                }, a = c.xPlus(t, y / 2);
                                ie(o, r, a, e + p)
                            } else {
                                var l = e + Math.max((d - m) / 2, 0), f = c.leftForLtr(t, y), h = me(n.borderRadius);
                                o.beginPath(), Object.values(h).some((function (t) {
                                    return 0 !== t
                                })) ? he(o, {
                                    x: f,
                                    y: l,
                                    w: y,
                                    h: m,
                                    radius: h
                                }) : o.rect(f, l, y, m), o.fill(), 0 !== i && o.stroke()
                            }
                            o.restore()
                        }
                    }(c.x(T), A, v), T = function (t, e, n, i) {
                        return t === (i ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e
                    }(O, T + y + p, _ ? T + M : e.right, n.rtl), function (t, e, n) {
                        ce(o, n.text, t, e + b / 2, l, {strikethrough: n.hidden, textAlign: c.textAlign(n.textAlign)})
                    }(c.x(T), A, v), _ ? t.x += M + h : t.y += w
                })), gn(this.ctx, n.textDirection)
            }
        }, {
            key: "drawTitle", value: function () {
                var t = this.options, e = t.title, n = _e(e.font), i = be(e.padding);
                if (e.display) {
                    var r, o = pn(t.rtl, this.left, this.width), a = this.ctx, s = e.position, u = n.size / 2,
                        c = i.top + u, l = this.left, f = this.width;
                    if (this.isHorizontal()) f = Math.max.apply(Math, In(this.lineWidths)), r = this.top + c, l = g(t.align, l, this.right - f); else {
                        var h = this.columnSizes.reduce((function (t, e) {
                            return Math.max(t, e.height)
                        }), 0);
                        r = c + g(t.align, this.top, this.bottom - h - t.labels.padding - this._computeTitleHeight())
                    }
                    var d = g(s, l, l + f);
                    a.textAlign = o.textAlign(v(s)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = n.string, ce(a, e.text, d, r, n)
                }
            }
        }, {
            key: "_computeTitleHeight", value: function () {
                var t = this.options.title, e = _e(t.font), n = be(t.padding);
                return t.display ? e.lineHeight + n.height : 0
            }
        }, {
            key: "_getLegendItemAt", value: function (t, e) {
                var n, i, r;
                if (t >= this.left && t <= this.right && e >= this.top && e <= this.bottom) for (r = this.legendHitBoxes, n = 0; n < r.length; ++n) if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return this.legendItems[n];
                return null
            }
        }, {
            key: "handleEvent", value: function (t) {
                var e = this.options;
                if (function (t, e) {
                    if ("mousemove" === t && (e.onHover || e.onLeave)) return !0;
                    if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
                    return !1
                }(t.type, e)) {
                    var n, i, r = this._getLegendItemAt(t.x, t.y);
                    if ("mousemove" === t.type) {
                        var o = this._hoveredItem,
                            a = (i = r, null !== (n = o) && null !== i && n.datasetIndex === i.datasetIndex && n.index === i.index);
                        o && !a && M(e.onLeave, [t, o, this], this), this._hoveredItem = r, r && !a && M(e.onHover, [t, r, this], this)
                    } else r && M(e.onClick, [t, r, this], this)
                }
            }
        }]), n
    }(sr);
    var bo = {
        id: "legend", _element: mo, start: function (t, e, n) {
            var i = t.legend = new mo({ctx: t.ctx, options: n, chart: t});
            qi(t, i, n), Hi(t, i)
        }, stop: function (t) {
            Vi(t, t.legend), delete t.legend
        }, beforeUpdate: function (t, e, n) {
            var i = t.legend;
            qi(t, i, n), i.options = n
        }, afterUpdate: function (t) {
            var e = t.legend;
            e.buildLabels(), e.adjustHitBoxes()
        }, afterEvent: function (t, e) {
            e.replay || t.legend.handleEvent(e.event)
        }, defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e, n) {
                var i = e.datasetIndex, r = n.chart;
                r.isDatasetVisible(i) ? (r.hide(i), e.hidden = !0) : (r.show(i), e.hidden = !1)
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: function (t) {
                    return t.chart.options.color
                }, boxWidth: 40, padding: 10, generateLabels: function (t) {
                    var e = t.data.datasets, n = t.legend.options.labels, i = n.usePointStyle, r = n.pointStyle,
                        o = n.textAlign, a = n.color;
                    return t._getSortedDatasetMetas().map((function (t) {
                        var n = t.controller.getStyle(i ? 0 : void 0), s = be(n.borderWidth);
                        return {
                            text: e[t.index].label,
                            fillStyle: n.backgroundColor,
                            fontColor: a,
                            hidden: !t.visible,
                            lineCap: n.borderCapStyle,
                            lineDash: n.borderDash,
                            lineDashOffset: n.borderDashOffset,
                            lineJoin: n.borderJoinStyle,
                            lineWidth: (s.width + s.height) / 4,
                            strokeStyle: n.borderColor,
                            pointStyle: r || n.pointStyle,
                            rotation: n.rotation,
                            textAlign: o || n.textAlign,
                            borderRadius: 0,
                            datasetIndex: t.index
                        }
                    }), this)
                }
            },
            title: {
                color: function (t) {
                    return t.chart.options.color
                }, display: !1, position: "center", text: ""
            }
        }, descriptors: {
            _scriptable: function (t) {
                return !t.startsWith("on")
            }, labels: {
                _scriptable: function (t) {
                    return !["generateLabels", "filter", "sort"].includes(t)
                }
            }
        }
    }, _o = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).chart = t.chart, i.options = t.options, i.ctx = t.ctx, i._padding = void 0, i.top = void 0, i.bottom = void 0, i.left = void 0, i.right = void 0, i.width = void 0, i.height = void 0, i.position = void 0, i.weight = void 0, i.fullSize = void 0, i
        }

        return Wn(n, [{
            key: "update", value: function (t, e) {
                var n = this.options;
                if (this.left = 0, this.top = 0, n.display) {
                    this.width = this.right = t, this.height = this.bottom = e;
                    var i = x(n.text) ? n.text.length : 1;
                    this._padding = be(n.padding);
                    var r = i * _e(n.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? this.height = r : this.width = r
                } else this.width = this.height = this.right = this.bottom = 0
            }
        }, {
            key: "isHorizontal", value: function () {
                var t = this.options.position;
                return "top" === t || "bottom" === t
            }
        }, {
            key: "_drawArgs", value: function (t) {
                var e, n, i, r = this.top, o = this.left, a = this.bottom, s = this.right, u = this.options,
                    c = u.align, l = 0;
                return this.isHorizontal() ? (n = g(c, o, s), i = r + t, e = s - o) : ("left" === u.position ? (n = o + t, i = g(c, a, r), l = -.5 * z) : (n = s - t, i = g(c, r, a), l = .5 * z), e = a - r), {
                    titleX: n,
                    titleY: i,
                    maxWidth: e,
                    rotation: l
                }
            }
        }, {
            key: "draw", value: function () {
                var t = this.ctx, e = this.options;
                if (e.display) {
                    var n = _e(e.font), i = n.lineHeight / 2 + this._padding.top, r = this._drawArgs(i), o = r.titleX,
                        a = r.titleY, s = r.maxWidth, u = r.rotation;
                    ce(t, e.text, 0, 0, n, {
                        color: e.color,
                        maxWidth: s,
                        rotation: u,
                        textAlign: v(e.align),
                        textBaseline: "middle",
                        translation: [o, a]
                    })
                }
            }
        }]), n
    }(sr);
    var xo = {
        id: "title",
        _element: _o,
        start: function (t, e, n) {
            !function (t, e) {
                var n = new _o({ctx: t.ctx, options: e, chart: t});
                qi(t, n, e), Hi(t, n), t.titleBlock = n
            }(t, n)
        },
        stop: function (t) {
            var e = t.titleBlock;
            Vi(t, e), delete t.titleBlock
        },
        beforeUpdate: function (t, e, n) {
            var i = t.titleBlock;
            qi(t, i, n), i.options = n
        },
        defaults: {
            align: "center",
            display: !1,
            font: {weight: "bold"},
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        },
        defaultRoutes: {color: "color"},
        descriptors: {_scriptable: !0, _indexable: !1}
    }, wo = (new WeakMap, {
        average: function (t) {
            if (!t.length) return !1;
            var e, n, i = 0, r = 0, o = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                var a = t[e].element;
                if (a && a.hasValue()) {
                    var s = a.tooltipPosition();
                    i += s.x, r += s.y, ++o
                }
            }
            return {x: i / o, y: r / o}
        }, nearest: function (t, e) {
            if (!t.length) return !1;
            var n, i, r, o = e.x, a = e.y, s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                var u = t[n].element;
                if (u && u.hasValue()) {
                    var c = rt(e, u.getCenterPoint());
                    c < s && (s = c, r = u)
                }
            }
            if (r) {
                var l = r.tooltipPosition();
                o = l.x, a = l.y
            }
            return {x: o, y: a}
        }
    });

    function ko(t, e) {
        return e && (x(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function So(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function Eo(t, e) {
        var n = t._chart.ctx, i = t.body, r = t.footer, o = t.title, a = e.boxWidth, s = e.boxHeight,
            u = _e(e.bodyFont), c = _e(e.titleFont), l = _e(e.footerFont), f = o.length, h = r.length, d = i.length,
            p = be(e.padding), v = p.height, g = 0, y = i.reduce((function (t, e) {
                return t + e.before.length + e.lines.length + e.after.length
            }), 0);
        (y += t.beforeBody.length + t.afterBody.length, f && (v += f * c.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom), y) && (v += d * (e.displayColors ? Math.max(s, u.lineHeight) : u.lineHeight) + (y - d) * u.lineHeight + (y - 1) * e.bodySpacing);
        h && (v += e.footerMarginTop + h * l.lineHeight + (h - 1) * e.footerSpacing);
        var m = 0, b = function (t) {
            g = Math.max(g, n.measureText(t).width + m)
        };
        return n.save(), n.font = c.string, T(t.title, b), n.font = u.string, T(t.beforeBody.concat(t.afterBody), b), m = e.displayColors ? a + 2 + e.boxPadding : 0, T(i, (function (t) {
            T(t.before, b), T(t.lines, b), T(t.after, b)
        })), m = 0, n.font = l.string, T(t.footer, b), n.restore(), {width: g += p.width, height: v}
    }

    function Oo(t, e, n, i) {
        var r = n.x, o = n.width, a = t.width, s = t.chartArea, u = s.left, c = s.right, l = "center";
        return "center" === i ? l = r <= (u + c) / 2 ? "left" : "right" : r <= o / 2 ? l = "left" : r >= a - o / 2 && (l = "right"), function (t, e, n, i) {
            var r = i.x, o = i.width, a = n.caretSize + n.caretPadding;
            return "left" === t && r + o + a > e.width || ("right" === t && r - o - a < 0 || void 0)
        }(l, t, e, n) && (l = "center"), l
    }

    function Mo(t, e, n) {
        var i = e.yAlign || function (t, e) {
            var n = e.y, i = e.height;
            return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center"
        }(t, n);
        return {xAlign: e.xAlign || Oo(t, e, n, i), yAlign: i}
    }

    function To(t, e, n, i) {
        var r = t.caretSize, o = t.caretPadding, a = t.cornerRadius, s = n.xAlign, u = n.yAlign, c = r + o, l = me(a),
            f = l.topLeft, h = l.topRight, d = l.bottomLeft, p = l.bottomRight, v = function (t, e) {
                var n = t.x, i = t.width;
                return "right" === e ? n -= i : "center" === e && (n -= i / 2), n
            }(e, s), g = function (t, e, n) {
                var i = t.y, r = t.height;
                return "top" === e ? i += n : i -= "bottom" === e ? r + n : r / 2, i
            }(e, u, c);
        return "center" === u ? "left" === s ? v += c : "right" === s && (v -= c) : "left" === s ? v -= Math.max(f, d) + o : "right" === s && (v += Math.max(h, p) + o), {
            x: ut(v, 0, i.width - e.width),
            y: ut(g, 0, i.height - e.height)
        }
    }

    function Ao(t, e, n) {
        var i = be(n.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - i.right : t.x + i.left
    }

    function Co(t) {
        return ko([], So(t))
    }

    function Po(t, e) {
        var n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t
    }

    var Do = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this)).opacity = 0, i._active = [], i._chart = t._chart, i._eventPosition = void 0, i._size = void 0, i._cachedAnimations = void 0, i._tooltipItems = [], i.$animations = void 0, i.$context = void 0, i.options = t.options, i.dataPoints = void 0, i.title = void 0, i.beforeBody = void 0, i.body = void 0, i.afterBody = void 0, i.footer = void 0, i.xAlign = void 0, i.yAlign = void 0, i.x = void 0, i.y = void 0, i.height = void 0, i.width = void 0, i.caretX = void 0, i.caretY = void 0, i.labelColors = void 0, i.labelPointStyles = void 0, i.labelTextColors = void 0, i
        }

        return Wn(n, [{
            key: "initialize", value: function (t) {
                this.options = t, this._cachedAnimations = void 0, this.$context = void 0
            }
        }, {
            key: "_resolveAnimations", value: function () {
                var t = this._cachedAnimations;
                if (t) return t;
                var e = this._chart, n = this.options.setContext(this.getContext()),
                    i = n.enabled && e.options.animation && n.animations, r = new Un(this._chart, i);
                return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r
            }
        }, {
            key: "getContext", value: function () {
                return this.$context || (this.$context = (t = this._chart.getContext(), e = this, n = this._tooltipItems, we(t, {
                    tooltip: e,
                    tooltipItems: n,
                    type: "tooltip"
                })));
                var t, e, n
            }
        }, {
            key: "getTitle", value: function (t, e) {
                var n = e.callbacks, i = n.beforeTitle.apply(this, [t]), r = n.title.apply(this, [t]),
                    o = n.afterTitle.apply(this, [t]), a = [];
                return a = ko(a, So(i)), a = ko(a, So(r)), a = ko(a, So(o))
            }
        }, {
            key: "getBeforeBody", value: function (t, e) {
                return Co(e.callbacks.beforeBody.apply(this, [t]))
            }
        }, {
            key: "getBody", value: function (t, e) {
                var n = this, i = e.callbacks, r = [];
                return T(t, (function (t) {
                    var e = {before: [], lines: [], after: []}, o = Po(i, t);
                    ko(e.before, So(o.beforeLabel.call(n, t))), ko(e.lines, o.label.call(n, t)), ko(e.after, So(o.afterLabel.call(n, t))), r.push(e)
                })), r
            }
        }, {
            key: "getAfterBody", value: function (t, e) {
                return Co(e.callbacks.afterBody.apply(this, [t]))
            }
        }, {
            key: "getFooter", value: function (t, e) {
                var n = e.callbacks, i = n.beforeFooter.apply(this, [t]), r = n.footer.apply(this, [t]),
                    o = n.afterFooter.apply(this, [t]), a = [];
                return a = ko(a, So(i)), a = ko(a, So(r)), a = ko(a, So(o))
            }
        }, {
            key: "_createItems", value: function (t) {
                var e, n, i, r, o, a, s, u, c, l, f, h = this, d = this._active, p = this._chart.data, v = [], g = [],
                    y = [], m = [];
                for (e = 0, n = d.length; e < n; ++e) m.push((i = this._chart, r = d[e], o = void 0, a = void 0, s = void 0, u = void 0, c = void 0, l = void 0, f = void 0, o = r.element, a = r.datasetIndex, s = r.index, u = i.getDatasetMeta(a).controller, c = u.getLabelAndValue(s), l = c.label, f = c.value, {
                    chart: i,
                    label: l,
                    parsed: u.getParsed(s),
                    raw: i.data.datasets[a].data[s],
                    formattedValue: f,
                    dataset: u.getDataset(),
                    dataIndex: s,
                    datasetIndex: a,
                    element: o
                }));
                return t.filter && (m = m.filter((function (e, n, i) {
                    return t.filter(e, n, i, p)
                }))), t.itemSort && (m = m.sort((function (e, n) {
                    return t.itemSort(e, n, p)
                }))), T(m, (function (e) {
                    var n = Po(t.callbacks, e);
                    v.push(n.labelColor.call(h, e)), g.push(n.labelPointStyle.call(h, e)), y.push(n.labelTextColor.call(h, e))
                })), this.labelColors = v, this.labelPointStyles = g, this.labelTextColors = y, this.dataPoints = m, m
            }
        }, {
            key: "update", value: function (t, e) {
                var n, i = this.options.setContext(this.getContext()), r = this._active, o = [];
                if (r.length) {
                    var a = wo[i.position].call(this, r, this._eventPosition);
                    o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
                    var s = this._size = Eo(this, i), u = Object.assign({}, a, s), c = Mo(this._chart, i, u),
                        l = To(i, u, c, this._chart);
                    this.xAlign = c.xAlign, this.yAlign = c.yAlign, n = {
                        opacity: 1,
                        x: l.x,
                        y: l.y,
                        width: s.width,
                        height: s.height,
                        caretX: a.x,
                        caretY: a.y
                    }
                } else 0 !== this.opacity && (n = {opacity: 0});
                this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
                    chart: this._chart,
                    tooltip: this,
                    replay: e
                })
            }
        }, {
            key: "drawCaret", value: function (t, e, n, i) {
                var r = this.getCaretPosition(t, n, i);
                e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
            }
        }, {
            key: "getCaretPosition", value: function (t, e, n) {
                var i, r, o, a, s, u, c = this.xAlign, l = this.yAlign, f = n.caretSize, h = me(n.cornerRadius),
                    d = h.topLeft, p = h.topRight, v = h.bottomLeft, g = h.bottomRight, y = t.x, m = t.y, b = e.width,
                    _ = e.height;
                return "center" === l ? (s = m + _ / 2, "left" === c ? (r = (i = y) - f, a = s + f, u = s - f) : (r = (i = y + b) + f, a = s - f, u = s + f), o = i) : (r = "left" === c ? y + Math.max(d, v) + f : "right" === c ? y + b - Math.max(p, g) - f : this.caretX, "top" === l ? (s = (a = m) - f, i = r - f, o = r + f) : (s = (a = m + _) + f, i = r + f, o = r - f), u = a), {
                    x1: i,
                    x2: r,
                    x3: o,
                    y1: a,
                    y2: s,
                    y3: u
                }
            }
        }, {
            key: "drawTitle", value: function (t, e, n) {
                var i, r, o, a = this.title, s = a.length;
                if (s) {
                    var u = pn(n.rtl, this.x, this.width);
                    for (t.x = Ao(this, n.titleAlign, n), e.textAlign = u.textAlign(n.titleAlign), e.textBaseline = "middle", i = _e(n.titleFont), r = n.titleSpacing, e.fillStyle = n.titleColor, e.font = i.string, o = 0; o < s; ++o) e.fillText(a[o], u.x(t.x), t.y + i.lineHeight / 2), t.y += i.lineHeight + r, o + 1 === s && (t.y += n.titleMarginBottom - r)
                }
            }
        }, {
            key: "_drawColorBox", value: function (t, e, n, i, r) {
                var o = this.labelColors[n], a = this.labelPointStyles[n], s = r.boxHeight, u = r.boxWidth,
                    c = r.boxPadding, l = _e(r.bodyFont), f = Ao(this, "left", r), h = i.x(f),
                    d = s < l.lineHeight ? (l.lineHeight - s) / 2 : 0, p = e.y + d;
                if (r.usePointStyle) {
                    var v = {
                        radius: Math.min(u, s) / 2,
                        pointStyle: a.pointStyle,
                        rotation: a.rotation,
                        borderWidth: 1
                    }, g = i.leftForLtr(h, u) + u / 2, y = p + s / 2;
                    t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, ie(t, v, g, y), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ie(t, v, g, y)
                } else {
                    t.lineWidth = o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
                    var m = i.leftForLtr(h, u - c), b = i.leftForLtr(i.xPlus(h, 1), u - c - 2), _ = me(o.borderRadius);
                    Object.values(_).some((function (t) {
                        return 0 !== t
                    })) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, he(t, {
                        x: m,
                        y: p,
                        w: u,
                        h: s,
                        radius: _
                    }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), he(t, {
                        x: b,
                        y: p + 1,
                        w: u - 2,
                        h: s - 2,
                        radius: _
                    }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(m, p, u, s), t.strokeRect(m, p, u, s), t.fillStyle = o.backgroundColor, t.fillRect(b, p + 1, u - 2, s - 2))
                }
                t.fillStyle = this.labelTextColors[n]
            }
        }, {
            key: "drawBody", value: function (t, e, n) {
                var i, r, o, a, s, u, c, l = this.body, f = n.bodySpacing, h = n.bodyAlign, d = n.displayColors,
                    p = n.boxHeight, v = n.boxWidth, g = n.boxPadding, y = _e(n.bodyFont), m = y.lineHeight, b = 0,
                    _ = pn(n.rtl, this.x, this.width), x = function (n) {
                        e.fillText(n, _.x(t.x + b), t.y + m / 2), t.y += m + f
                    }, w = _.textAlign(h);
                for (e.textAlign = h, e.textBaseline = "middle", e.font = y.string, t.x = Ao(this, w, n), e.fillStyle = n.bodyColor, T(this.beforeBody, x), b = d && "right" !== w ? "center" === h ? v / 2 + g : v + 2 + g : 0, a = 0, u = l.length; a < u; ++a) {
                    for (i = l[a], r = this.labelTextColors[a], e.fillStyle = r, T(i.before, x), o = i.lines, d && o.length && (this._drawColorBox(e, t, a, _, n), m = Math.max(y.lineHeight, p)), s = 0, c = o.length; s < c; ++s) x(o[s]), m = y.lineHeight;
                    T(i.after, x)
                }
                b = 0, m = y.lineHeight, T(this.afterBody, x), t.y -= f
            }
        }, {
            key: "drawFooter", value: function (t, e, n) {
                var i, r, o = this.footer, a = o.length;
                if (a) {
                    var s = pn(n.rtl, this.x, this.width);
                    for (t.x = Ao(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = s.textAlign(n.footerAlign), e.textBaseline = "middle", i = _e(n.footerFont), e.fillStyle = n.footerColor, e.font = i.string, r = 0; r < a; ++r) e.fillText(o[r], s.x(t.x), t.y + i.lineHeight / 2), t.y += i.lineHeight + n.footerSpacing
                }
            }
        }, {
            key: "drawBackground", value: function (t, e, n, i) {
                var r = this.xAlign, o = this.yAlign, a = t.x, s = t.y, u = n.width, c = n.height,
                    l = me(i.cornerRadius), f = l.topLeft, h = l.topRight, d = l.bottomLeft, p = l.bottomRight;
                e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth, e.beginPath(), e.moveTo(a + f, s), "top" === o && this.drawCaret(t, e, n, i), e.lineTo(a + u - h, s), e.quadraticCurveTo(a + u, s, a + u, s + h), "center" === o && "right" === r && this.drawCaret(t, e, n, i), e.lineTo(a + u, s + c - p), e.quadraticCurveTo(a + u, s + c, a + u - p, s + c), "bottom" === o && this.drawCaret(t, e, n, i), e.lineTo(a + d, s + c), e.quadraticCurveTo(a, s + c, a, s + c - d), "center" === o && "left" === r && this.drawCaret(t, e, n, i), e.lineTo(a, s + f), e.quadraticCurveTo(a, s, a + f, s), e.closePath(), e.fill(), i.borderWidth > 0 && e.stroke()
            }
        }, {
            key: "_updateAnimationTarget", value: function (t) {
                var e = this._chart, n = this.$animations, i = n && n.x, r = n && n.y;
                if (i || r) {
                    var o = wo[t.position].call(this, this._active, this._eventPosition);
                    if (!o) return;
                    var a = this._size = Eo(this, t), s = Object.assign({}, o, this._size), u = Mo(e, t, s),
                        c = To(t, s, u, e);
                    i._to === c.x && r._to === c.y || (this.xAlign = u.xAlign, this.yAlign = u.yAlign, this.width = a.width, this.height = a.height, this.caretX = o.x, this.caretY = o.y, this._resolveAnimations().update(this, c))
                }
            }
        }, {
            key: "draw", value: function (t) {
                var e = this.options.setContext(this.getContext()), n = this.opacity;
                if (n) {
                    this._updateAnimationTarget(e);
                    var i = {width: this.width, height: this.height}, r = {x: this.x, y: this.y};
                    n = Math.abs(n) < .001 ? 0 : n;
                    var o = be(e.padding),
                        a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                    e.enabled && a && (t.save(), t.globalAlpha = n, this.drawBackground(r, t, i, e), vn(t, e.textDirection), r.y += o.top, this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), gn(t, e.textDirection), t.restore())
                }
            }
        }, {
            key: "getActiveElements", value: function () {
                return this._active || []
            }
        }, {
            key: "setActiveElements", value: function (t, e) {
                var n = this, i = this._active, r = t.map((function (t) {
                    var e = t.datasetIndex, i = t.index, r = n._chart.getDatasetMeta(e);
                    if (!r) throw new Error("Cannot find a dataset at index " + e);
                    return {datasetIndex: e, element: r.data[i], index: i}
                })), o = !A(i, r), a = this._positionChanged(r, e);
                (o || a) && (this._active = r, this._eventPosition = e, this.update(!0))
            }
        }, {
            key: "handleEvent", value: function (t, e) {
                var n, i = this.options, r = this._active || [], o = [];
                "mouseout" !== t.type && (o = this._chart.getElementsAtEventForMode(t, i.mode, i, e), i.reverse && o.reverse());
                var a = this._positionChanged(o, t);
                return (n = e || !A(o, r) || a) && (this._active = o, (i.enabled || i.external) && (this._eventPosition = {
                    x: t.x,
                    y: t.y
                }, this.update(!0, e))), n
            }
        }, {
            key: "_positionChanged", value: function (t, e) {
                var n = this.caretX, i = this.caretY, r = this.options, o = wo[r.position].call(this, t, e);
                return !1 !== o && (n !== o.x || i !== o.y)
            }
        }]), n
    }(sr);
    Do.positioners = wo;
    var Lo = {
        id: "tooltip",
        _element: Do,
        positioners: wo,
        afterInit: function (t, e, n) {
            n && (t.tooltip = new Do({_chart: t, options: n}))
        },
        beforeUpdate: function (t, e, n) {
            t.tooltip && t.tooltip.initialize(n)
        },
        reset: function (t, e, n) {
            t.tooltip && t.tooltip.initialize(n)
        },
        afterDraw: function (t) {
            var e = t.tooltip, n = {tooltip: e};
            !1 !== t.notifyPlugins("beforeTooltipDraw", n) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n))
        },
        afterEvent: function (t, e) {
            if (t.tooltip) {
                var n = e.replay;
                t.tooltip.handleEvent(e.event, n) && (e.changed = !0)
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {weight: "bold"},
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {weight: "bold"},
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: function (t, e) {
                return e.bodyFont.size
            },
            boxWidth: function (t, e) {
                return e.bodyFont.size
            },
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {duration: 400, easing: "easeOutQuart"},
            animations: {
                numbers: {type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"]},
                opacity: {easing: "linear", duration: 200}
            },
            callbacks: {
                beforeTitle: y, title: function (t) {
                    if (t.length > 0) {
                        var e = t[0], n = e.chart.data.labels, i = n ? n.length : 0;
                        if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                        if (e.label) return e.label;
                        if (i > 0 && e.dataIndex < i) return n[e.dataIndex]
                    }
                    return ""
                }, afterTitle: y, beforeBody: y, beforeLabel: y, label: function (t) {
                    if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                    var e = t.dataset.label || "";
                    e && (e += ": ");
                    var n = t.formattedValue;
                    return _(n) || (e += n), e
                }, labelColor: function (t) {
                    var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0
                    }
                }, labelTextColor: function () {
                    return this.options.bodyColor
                }, labelPointStyle: function (t) {
                    var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {pointStyle: e.pointStyle, rotation: e.rotation}
                }, afterLabel: y, afterBody: y, beforeFooter: y, footer: y, afterFooter: y
            }
        },
        defaultRoutes: {bodyFont: "font", footerFont: "font", titleFont: "font"},
        descriptors: {
            _scriptable: function (t) {
                return "filter" !== t && "itemSort" !== t && "external" !== t
            },
            _indexable: !1,
            callbacks: {_scriptable: !1, _indexable: !1},
            animation: {_fallback: !1},
            animations: {_fallback: "animation"}
        },
        additionalOptionScopes: ["interaction"]
    };

    function jo(t, e, n) {
        var i = t.indexOf(e);
        return -1 === i ? function (t, e, n) {
            return "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : n
        }(t, e, n) : i !== t.lastIndexOf(e) ? n : i
    }

    var Io = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t))._startValue = void 0, i._valueRange = 0, i
        }

        return Wn(n, [{
            key: "parse", value: function (t, e) {
                if (_(t)) return null;
                var n = this.getLabels();
                return function (t, e) {
                    return null === t ? null : ut(Math.round(t), 0, e)
                }(e = isFinite(e) && n[e] === t ? e : jo(n, t, E(e, t)), n.length - 1)
            }
        }, {
            key: "determineDataLimits", value: function () {
                var t = this.getUserBounds(), e = t.minDefined, n = t.maxDefined, i = this.getMinMax(!0), r = i.min,
                    o = i.max;
                "ticks" === this.options.bounds && (e || (r = 0), n || (o = this.getLabels().length - 1)), this.min = r, this.max = o
            }
        }, {
            key: "buildTicks", value: function () {
                var t = this.min, e = this.max, n = this.options.offset, i = [], r = this.getLabels();
                r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1), this._valueRange = Math.max(r.length - (n ? 0 : 1), 1), this._startValue = this.min - (n ? .5 : 0);
                for (var o = t; o <= e; o++) i.push({value: o});
                return i
            }
        }, {
            key: "getLabelForValue", value: function (t) {
                var e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t
            }
        }, {
            key: "configure", value: function () {
                Sn(Cn(n.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }
        }, {
            key: "getPixelForValue", value: function (t) {
                return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
        }, {
            key: "getPixelForTick", value: function (t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
        }, {
            key: "getValueForPixel", value: function (t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }
        }, {
            key: "getBasePixel", value: function () {
                return this.bottom
            }
        }]), n
    }(mr);

    function No(t, e) {
        var n, i, r, o, a, s, u, c = [], l = t.bounds, f = t.step, h = t.min, d = t.max, p = t.precision, v = t.count,
            g = t.maxTicks, y = t.maxDigits, m = t.includeBounds, b = f || 1, x = g - 1, w = e.min, k = e.max,
            S = !_(h), E = !_(d), O = !_(v), M = (k - w) / (y + 1), T = Q((k - w) / x / b) * b;
        if (T < 1e-14 && !S && !E) return [{value: w}, {value: k}];
        (o = Math.ceil(k / T) - Math.floor(w / T)) > x && (T = Q(o * T / x / b) * b), _(p) || (n = Math.pow(10, p), T = Math.ceil(T * n) / n), "ticks" === l ? (i = Math.floor(w / T) * T, r = Math.ceil(k / T) * T) : (i = w, r = k), S && E && f && (a = (d - h) / f, s = T / 1e3, (u = Math.round(a)) - s <= a && u + s >= a) ? (T = (d - h) / (o = Math.round(Math.min((d - h) / T, g))), i = h, r = d) : O ? T = ((r = E ? d : r) - (i = S ? h : i)) / (o = v - 1) : o = Z(o = (r - i) / T, Math.round(o), T / 1e3) ? Math.round(o) : Math.ceil(o);
        var A = Math.max(it(T), it(i));
        n = Math.pow(10, _(p) ? A : p), i = Math.round(i * n) / n, r = Math.round(r * n) / n;
        var C = 0;
        for (S && (m && i !== h ? (c.push({value: h}), i < h && C++, Z(Math.round((i + C * T) * n) / n, h, Ro(h, M, t)) && C++) : i < h && C++); C < o; ++C) c.push({value: Math.round((i + C * T) * n) / n});
        return E && m && r !== d ? c.length && Z(c[c.length - 1].value, d, Ro(d, M, t)) ? c[c.length - 1].value = d : c.push({value: d}) : E && r !== d || c.push({value: r}), c
    }

    function Ro(t, e, n) {
        var i = n.horizontal, r = et(n.minRotation), o = (i ? Math.sin(r) : Math.cos(r)) || .001,
            a = .75 * e * ("" + t).length;
        return Math.min(e / o, a)
    }

    Io.id = "category", Io.defaults = {ticks: {callback: Io.prototype.getLabelForValue}};
    var Fo = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t)).start = void 0, i.end = void 0, i._startValue = void 0, i._endValue = void 0, i._valueRange = 0, i
        }

        return Wn(n, [{
            key: "parse", value: function (t, e) {
                return _(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
            }
        }, {
            key: "handleTickRangeOptions", value: function () {
                var t = this.options.beginAtZero, e = this.getUserBounds(), n = e.minDefined, i = e.maxDefined,
                    r = this.min, o = this.max, a = function (t) {
                        return r = n ? r : t
                    }, s = function (t) {
                        return o = i ? o : t
                    };
                if (t) {
                    var u = K(r), c = K(o);
                    u < 0 && c < 0 ? s(0) : u > 0 && c > 0 && a(0)
                }
                if (r === o) {
                    var l = 1;
                    (o >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(.05 * o)), s(o + l), t || a(r - l)
                }
                this.min = r, this.max = o
            }
        }, {
            key: "getTickLimit", value: function () {
                var t, e = this.options.ticks, n = e.maxTicksLimit, i = e.stepSize;
                return i ? (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) > 1e3 && (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(i, " would result generating up to ").concat(t, " ticks. Limiting to 1000.")), t = 1e3) : (t = this.computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
            }
        }, {
            key: "computeTickLimit", value: function () {
                return Number.POSITIVE_INFINITY
            }
        }, {
            key: "buildTicks", value: function () {
                var t = this.options, e = t.ticks, n = this.getTickLimit(), i = No({
                    maxTicks: n = Math.max(2, n),
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: !1 !== e.includeBounds
                }, this._range || this);
                return "ticks" === t.bounds && tt(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i
            }
        }, {
            key: "configure", value: function () {
                var t = this.ticks, e = this.min, i = this.max;
                if (Sn(Cn(n.prototype), "configure", this).call(this), this.options.offset && t.length) {
                    var r = (i - e) / Math.max(t.length - 1, 1) / 2;
                    e -= r, i += r
                }
                this._startValue = e, this._endValue = i, this._valueRange = i - e
            }
        }, {
            key: "getLabelForValue", value: function (t) {
                return dn(t, this.chart.options.locale)
            }
        }]), n
    }(mr), Bo = function (t) {
        En(n, t);
        var e = Mn(n);

        function n() {
            return Fn(this, n), e.apply(this, arguments)
        }

        return Wn(n, [{
            key: "determineDataLimits", value: function () {
                var t = this.getMinMax(!0), e = t.min, n = t.max;
                this.min = k(e) ? e : 0, this.max = k(n) ? n : 1, this.handleTickRangeOptions()
            }
        }, {
            key: "computeTickLimit", value: function () {
                var t = this.isHorizontal(), e = t ? this.width : this.height, n = et(this.options.ticks.minRotation),
                    i = (t ? Math.sin(n) : Math.cos(n)) || .001, r = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, r.lineHeight / i))
            }
        }, {
            key: "getPixelForValue", value: function (t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
        }, {
            key: "getValueForPixel", value: function (t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            }
        }]), n
    }(Fo);

    function Wo(t) {
        return 1 === t / Math.pow(10, Math.floor(G(t)))
    }

    Bo.id = "linear", Bo.defaults = {ticks: {callback: cr.formatters.numeric}};
    var zo = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t)).start = void 0, i.end = void 0, i._startValue = void 0, i._valueRange = 0, i
        }

        return Wn(n, [{
            key: "parse", value: function (t, e) {
                var n = Fo.prototype.parse.apply(this, [t, e]);
                if (0 !== n) return k(n) && n > 0 ? n : null;
                this._zero = !0
            }
        }, {
            key: "determineDataLimits", value: function () {
                var t = this.getMinMax(!0), e = t.min, n = t.max;
                this.min = k(e) ? Math.max(0, e) : null, this.max = k(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions()
            }
        }, {
            key: "handleTickRangeOptions", value: function () {
                var t = this.getUserBounds(), e = t.minDefined, n = t.maxDefined, i = this.min, r = this.max,
                    o = function (t) {
                        return i = e ? i : t
                    }, a = function (t) {
                        return r = n ? r : t
                    }, s = function (t, e) {
                        return Math.pow(10, Math.floor(G(t)) + e)
                    };
                i === r && (i <= 0 ? (o(1), a(10)) : (o(s(i, -1)), a(s(r, 1)))), i <= 0 && o(s(r, -1)), r <= 0 && a(s(i, 1)), this._zero && this.min !== this._suggestedMin && i === s(this.min, 0) && o(s(i, -1)), this.min = i, this.max = r
            }
        }, {
            key: "buildTicks", value: function () {
                var t = this.options, e = function (t, e) {
                    var n = Math.floor(G(e.max)), i = Math.ceil(e.max / Math.pow(10, n)), r = [],
                        o = S(t.min, Math.pow(10, Math.floor(G(e.min)))), a = Math.floor(G(o)),
                        s = Math.floor(o / Math.pow(10, a)), u = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                    do {
                        r.push({
                            value: o,
                            major: Wo(o)
                        }), 10 === ++s && (s = 1, u = ++a >= 0 ? 1 : u), o = Math.round(s * Math.pow(10, a) * u) / u
                    } while (a < n || a === n && s < i);
                    var c = S(t.max, o);
                    return r.push({value: c, major: Wo(o)}), r
                }({min: this._userMin, max: this._userMax}, this);
                return "ticks" === t.bounds && tt(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e
            }
        }, {
            key: "getLabelForValue", value: function (t) {
                return void 0 === t ? "0" : dn(t, this.chart.options.locale)
            }
        }, {
            key: "configure", value: function () {
                var t = this.min;
                Sn(Cn(n.prototype), "configure", this).call(this), this._startValue = G(t), this._valueRange = G(this.max) - G(t)
            }
        }, {
            key: "getPixelForValue", value: function (t) {
                return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (G(t) - this._startValue) / this._valueRange)
            }
        }, {
            key: "getValueForPixel", value: function (t) {
                var e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange)
            }
        }]), n
    }(mr);

    function Ho(t) {
        var e = t.ticks;
        if (e.display && t.display) {
            var n = be(e.backdropPadding);
            return E(e.font && e.font.size, Jt.font.size) + n.height
        }
        return 0
    }

    function Vo(t, e, n, i, r) {
        return t === i || t === r ? {start: e - n / 2, end: e + n / 2} : t < i || t > r ? {
            start: e - n,
            end: e
        } : {start: e, end: e + n}
    }

    function qo(t) {
        for (var e, n, i, r = {
            l: 0,
            r: t.width,
            t: 0,
            b: t.height - t.paddingTop
        }, o = {}, a = [], s = [], u = t.getLabels().length, c = 0; c < u; c++) {
            var l = t.options.pointLabels.setContext(t.getPointLabelContext(c));
            s[c] = l.padding;
            var f = t.getPointPosition(c, t.drawingArea + s[c]), h = _e(l.font),
                d = (e = t.ctx, n = h, i = x(i = t._pointLabels[c]) ? i : [i], {
                    w: te(e, n.string, i),
                    h: i.length * n.lineHeight
                });
            a[c] = d;
            var p = t.getIndexAngle(c), v = nt(p), g = Vo(v, f.x, d.w, 0, 180), y = Vo(v, f.y, d.h, 90, 270);
            g.start < r.l && (r.l = g.start, o.l = p), g.end > r.r && (r.r = g.end, o.r = p), y.start < r.t && (r.t = y.start, o.t = p), y.end > r.b && (r.b = y.end, o.b = p)
        }
        t._setReductions(t.drawingArea, r, o), t._pointLabelItems = function (t, e, n) {
            for (var i = [], r = t.getLabels().length, o = t.options, a = Ho(o), s = t.getDistanceFromCenterForValue(o.ticks.reverse ? t.min : t.max), u = 0; u < r; u++) {
                var c = 0 === u ? a / 2 : 0, l = t.getPointPosition(u, s + c + n[u]), f = nt(t.getIndexAngle(u)),
                    h = e[u], d = Yo(l.y, h.h, f), p = Uo(f), v = $o(l.x, h.w, p);
                i.push({x: l.x, y: d, textAlign: p, left: v, top: d, right: v + h.w, bottom: d + h.h})
            }
            return i
        }(t, a, s)
    }

    function Uo(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function $o(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function Yo(t, e, n) {
        return 90 === n || 270 === n ? t -= e / 2 : (n > 270 || n < 90) && (t -= e), t
    }

    function Xo(t, e, n, i) {
        var r = t.ctx;
        if (n) r.arc(t.xCenter, t.yCenter, e, 0, H); else {
            var o = t.getPointPosition(0, e);
            r.moveTo(o.x, o.y);
            for (var a = 1; a < i; a++) o = t.getPointPosition(a, e), r.lineTo(o.x, o.y)
        }
    }

    function Go(t) {
        return J(t) ? t : 0
    }

    zo.id = "logarithmic", zo.defaults = {ticks: {callback: cr.formatters.logarithmic, major: {enabled: !0}}};
    var Ko = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t)).xCenter = void 0, i.yCenter = void 0, i.drawingArea = void 0, i._pointLabels = [], i._pointLabelItems = [], i
        }

        return Wn(n, [{
            key: "setDimensions", value: function () {
                this.width = this.maxWidth, this.height = this.maxHeight, this.paddingTop = Ho(this.options) / 2, this.xCenter = Math.floor(this.width / 2), this.yCenter = Math.floor((this.height - this.paddingTop) / 2), this.drawingArea = Math.min(this.height - this.paddingTop, this.width) / 2
            }
        }, {
            key: "determineDataLimits", value: function () {
                var t = this.getMinMax(!1), e = t.min, n = t.max;
                this.min = k(e) && !isNaN(e) ? e : 0, this.max = k(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions()
            }
        }, {
            key: "computeTickLimit", value: function () {
                return Math.ceil(this.drawingArea / Ho(this.options))
            }
        }, {
            key: "generateTickLabels", value: function (t) {
                var e = this;
                Fo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((function (t, n) {
                    var i = M(e.options.pointLabels.callback, [t, n], e);
                    return i || 0 === i ? i : ""
                }))
            }
        }, {
            key: "fit", value: function () {
                var t = this.options;
                t.display && t.pointLabels.display ? qo(this) : this.setCenterPoint(0, 0, 0, 0)
            }
        }, {
            key: "_setReductions", value: function (t, e, n) {
                var i = e.l / Math.sin(n.l), r = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                    o = -e.t / Math.cos(n.t), a = -Math.max(e.b - (this.height - this.paddingTop), 0) / Math.cos(n.b);
                i = Go(i), r = Go(r), o = Go(o), a = Go(a), this.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (i + r) / 2), Math.floor(t - (o + a) / 2))), this.setCenterPoint(i, r, o, a)
            }
        }, {
            key: "setCenterPoint", value: function (t, e, n, i) {
                var r = this.width - e - this.drawingArea, o = t + this.drawingArea, a = n + this.drawingArea,
                    s = this.height - this.paddingTop - i - this.drawingArea;
                this.xCenter = Math.floor((o + r) / 2 + this.left), this.yCenter = Math.floor((a + s) / 2 + this.top + this.paddingTop)
            }
        }, {
            key: "getIndexAngle", value: function (t) {
                return at(t * (H / this.getLabels().length) + et(this.options.startAngle || 0))
            }
        }, {
            key: "getDistanceFromCenterForValue", value: function (t) {
                if (_(t)) return NaN;
                var e = this.drawingArea / (this.max - this.min);
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
            }
        }, {
            key: "getValueForDistanceFromCenter", value: function (t) {
                if (_(t)) return NaN;
                var e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e
            }
        }, {
            key: "getPointLabelContext", value: function (t) {
                var e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                    var n = e[t];
                    return function (t, e, n) {
                        return we(t, {label: n, index: e, type: "pointLabel"})
                    }(this.getContext(), t, n)
                }
            }
        }, {
            key: "getPointPosition", value: function (t, e) {
                var n = this.getIndexAngle(t) - $;
                return {x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter, angle: n}
            }
        }, {
            key: "getPointPositionForValue", value: function (t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            }
        }, {
            key: "getBasePosition", value: function (t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue())
            }
        }, {
            key: "getPointLabelPosition", value: function (t) {
                var e = this._pointLabelItems[t];
                return {left: e.left, top: e.top, right: e.right, bottom: e.bottom}
            }
        }, {
            key: "drawBackground", value: function () {
                var t = this.options, e = t.backgroundColor, n = t.grid.circular;
                if (e) {
                    var i = this.ctx;
                    i.save(), i.beginPath(), Xo(this, this.getDistanceFromCenterForValue(this._endValue), n, this.getLabels().length), i.closePath(), i.fillStyle = e, i.fill(), i.restore()
                }
            }
        }, {
            key: "drawGrid", value: function () {
                var t, e, n, i = this, r = this.ctx, o = this.options, a = o.angleLines, s = o.grid,
                    u = this.getLabels().length;
                if (o.pointLabels.display && function (t, e) {
                    for (var n = t.ctx, i = t.options.pointLabels, r = e - 1; r >= 0; r--) {
                        var o = i.setContext(t.getPointLabelContext(r)), a = _e(o.font), s = t._pointLabelItems[r],
                            u = s.x, c = s.y, l = s.textAlign, f = s.left, h = s.top, d = s.right, p = s.bottom,
                            v = o.backdropColor;
                        if (!_(v)) {
                            var g = be(o.backdropPadding);
                            n.fillStyle = v, n.fillRect(f - g.left, h - g.top, d - f + g.width, p - h + g.height)
                        }
                        ce(n, t._pointLabels[r], u, c + a.lineHeight / 2, a, {
                            color: o.color,
                            textAlign: l,
                            textBaseline: "middle"
                        })
                    }
                }(this, u), s.display && this.ticks.forEach((function (t, n) {
                    if (0 !== n) {
                        e = i.getDistanceFromCenterForValue(t.value);
                        var r = s.setContext(i.getContext(n - 1));
                        !function (t, e, n, i) {
                            var r = t.ctx, o = e.circular, a = e.color, s = e.lineWidth;
                            !o && !i || !a || !s || n < 0 || (r.save(), r.strokeStyle = a, r.lineWidth = s, r.setLineDash(e.borderDash), r.lineDashOffset = e.borderDashOffset, r.beginPath(), Xo(t, n, o, i), r.closePath(), r.stroke(), r.restore())
                        }(i, r, e, u)
                    }
                })), a.display) {
                    for (r.save(), t = this.getLabels().length - 1; t >= 0; t--) {
                        var c = a.setContext(this.getPointLabelContext(t)), l = c.color, f = c.lineWidth;
                        f && l && (r.lineWidth = f, r.strokeStyle = l, r.setLineDash(c.borderDash), r.lineDashOffset = c.borderDashOffset, e = this.getDistanceFromCenterForValue(o.ticks.reverse ? this.min : this.max), n = this.getPointPosition(t, e), r.beginPath(), r.moveTo(this.xCenter, this.yCenter), r.lineTo(n.x, n.y), r.stroke())
                    }
                    r.restore()
                }
            }
        }, {
            key: "drawBorder", value: function () {
            }
        }, {
            key: "drawLabels", value: function () {
                var t = this, e = this.ctx, n = this.options, i = n.ticks;
                if (i.display) {
                    var r, o, a = this.getIndexAngle(0);
                    e.save(), e.translate(this.xCenter, this.yCenter), e.rotate(a), e.textAlign = "center", e.textBaseline = "middle", this.ticks.forEach((function (a, s) {
                        if (0 !== s || n.reverse) {
                            var u = i.setContext(t.getContext(s)), c = _e(u.font);
                            if (r = t.getDistanceFromCenterForValue(t.ticks[s].value), u.showLabelBackdrop) {
                                e.font = c.string, o = e.measureText(a.label).width, e.fillStyle = u.backdropColor;
                                var l = be(u.backdropPadding);
                                e.fillRect(-o / 2 - l.left, -r - c.size / 2 - l.top, o + l.width, c.size + l.height)
                            }
                            ce(e, a.label, 0, -r, c, {color: u.color})
                        }
                    })), e.restore()
                }
            }
        }, {
            key: "drawTitle", value: function () {
            }
        }]), n
    }(Fo);
    Ko.id = "radialLinear", Ko.defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0},
        grid: {circular: !1},
        startAngle: 0,
        ticks: {showLabelBackdrop: !0, callback: cr.formatters.numeric},
        pointLabels: {
            backdropColor: void 0, backdropPadding: 2, display: !0, font: {size: 10}, callback: function (t) {
                return t
            }, padding: 5
        }
    }, Ko.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    }, Ko.descriptors = {angleLines: {_fallback: "grid"}};
    var Qo = {
        millisecond: {common: !0, size: 1, steps: 1e3},
        second: {common: !0, size: 1e3, steps: 60},
        minute: {common: !0, size: 6e4, steps: 60},
        hour: {common: !0, size: 36e5, steps: 24},
        day: {common: !0, size: 864e5, steps: 30},
        week: {common: !1, size: 6048e5, steps: 4},
        month: {common: !0, size: 2628e6, steps: 12},
        quarter: {common: !1, size: 7884e6, steps: 4},
        year: {common: !0, size: 3154e7}
    }, Jo = Object.keys(Qo);

    function Zo(t, e) {
        return t - e
    }

    function ta(t, e) {
        if (_(e)) return null;
        var n = t._adapter, i = t._parseOpts, r = i.parser, o = i.round, a = i.isoWeekday, s = e;
        return "function" == typeof r && (s = r(s)), k(s) || (s = "string" == typeof r ? n.parse(s, r) : n.parse(s)), null === s ? null : (o && (s = "week" !== o || !J(a) && !0 !== a ? n.startOf(s, o) : n.startOf(s, "isoWeek", a)), +s)
    }

    function ea(t, e, n, i) {
        for (var r = Jo.length, o = Jo.indexOf(t); o < r - 1; ++o) {
            var a = Qo[Jo[o]], s = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
            if (a.common && Math.ceil((n - e) / (s * a.size)) <= i) return Jo[o]
        }
        return Jo[r - 1]
    }

    function na(t, e, n) {
        if (n) {
            if (n.length) {
                var i = ke(n, e), r = i.lo, o = i.hi;
                t[n[r] >= e ? n[r] : n[o]] = !0
            }
        } else t[e] = !0
    }

    function ia(t, e, n) {
        var i, r, o = [], a = {}, s = e.length;
        for (i = 0; i < s; ++i) a[r = e[i]] = i, o.push({value: r, major: !1});
        return 0 !== s && n ? function (t, e, n, i) {
            var r, o, a = t._adapter, s = +a.startOf(e[0].value, i), u = e[e.length - 1].value;
            for (r = s; r <= u; r = +a.add(r, 1, i)) (o = n[r]) >= 0 && (e[o].major = !0);
            return e
        }(t, o, a, n) : o
    }

    var ra = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t))._cache = {
                data: [],
                labels: [],
                all: []
            }, i._unit = "day", i._majorUnit = void 0, i._offsets = {}, i._normalized = !1, i._parseOpts = void 0, i
        }

        return Wn(n, [{
            key: "init", value: function (t, e) {
                var i = t.time || (t.time = {}), r = this._adapter = new wi._date(t.adapters.date);
                j(i.displayFormats, r.formats()), this._parseOpts = {
                    parser: i.parser,
                    round: i.round,
                    isoWeekday: i.isoWeekday
                }, Sn(Cn(n.prototype), "init", this).call(this, t), this._normalized = e.normalized
            }
        }, {
            key: "parse", value: function (t, e) {
                return void 0 === t ? null : ta(this, t)
            }
        }, {
            key: "beforeLayout", value: function () {
                Sn(Cn(n.prototype), "beforeLayout", this).call(this), this._cache = {data: [], labels: [], all: []}
            }
        }, {
            key: "determineDataLimits", value: function () {
                var t = this.options, e = this._adapter, n = t.time.unit || "day", i = this.getUserBounds(), r = i.min,
                    o = i.max, a = i.minDefined, s = i.maxDefined;

                function u(t) {
                    a || isNaN(t.min) || (r = Math.min(r, t.min)), s || isNaN(t.max) || (o = Math.max(o, t.max))
                }

                a && s || (u(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || u(this.getMinMax(!1))), r = k(r) && !isNaN(r) ? r : +e.startOf(Date.now(), n), o = k(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1, this.min = Math.min(r, o - 1), this.max = Math.max(r + 1, o)
            }
        }, {
            key: "_getLabelBounds", value: function () {
                var t = this.getLabelTimestamps(), e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
                return t.length && (e = t[0], n = t[t.length - 1]), {min: e, max: n}
            }
        }, {
            key: "buildTicks", value: function () {
                var t = this.options, e = t.time, n = t.ticks,
                    i = "labels" === n.source ? this.getLabelTimestamps() : this._generate();
                "ticks" === t.bounds && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
                var r = this.min, o = function (t, e, n) {
                    for (var i = 0, r = t.length; i < r && t[i] < e;) i++;
                    for (; r > i && t[r - 1] > n;) r--;
                    return i > 0 || r < t.length ? t.slice(i, r) : t
                }(i, r, this.max);
                return this._unit = e.unit || (n.autoSkip ? ea(e.minUnit, this.min, this.max, this._getLabelCapacity(r)) : function (t, e, n, i, r) {
                    for (var o = Jo.length - 1; o >= Jo.indexOf(n); o--) {
                        var a = Jo[o];
                        if (Qo[a].common && t._adapter.diff(r, i, a) >= e - 1) return a
                    }
                    return Jo[n ? Jo.indexOf(n) : 0]
                }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = n.major.enabled && "year" !== this._unit ? function (t) {
                    for (var e = Jo.indexOf(t) + 1, n = Jo.length; e < n; ++e) if (Qo[Jo[e]].common) return Jo[e]
                }(this._unit) : void 0, this.initOffsets(i), t.reverse && o.reverse(), ia(this, o, this._majorUnit)
            }
        }, {
            key: "initOffsets", value: function (t) {
                var e, n, i = 0, r = 0;
                this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), i = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, n = this.getDecimalForValue(t[t.length - 1]), r = 1 === t.length ? n : (n - this.getDecimalForValue(t[t.length - 2])) / 2);
                var o = t.length < 3 ? .5 : .25;
                i = ut(i, 0, o), r = ut(r, 0, o), this._offsets = {start: i, end: r, factor: 1 / (i + 1 + r)}
            }
        }, {
            key: "_generate", value: function () {
                var t, e, n = this._adapter, i = this.min, r = this.max, o = this.options, a = o.time,
                    s = a.unit || ea(a.minUnit, i, r, this._getLabelCapacity(i)), u = E(a.stepSize, 1),
                    c = "week" === s && a.isoWeekday, l = J(c) || !0 === c, f = {}, h = i;
                if (l && (h = +n.startOf(h, "isoWeek", c)), h = +n.startOf(h, l ? "day" : s), n.diff(r, i, s) > 1e5 * u) throw new Error(i + " and " + r + " are too far apart with stepSize of " + u + " " + s);
                var d = "data" === o.ticks.source && this.getDataTimestamps();
                for (t = h, e = 0; t < r; t = +n.add(t, u, s), e++) na(f, t, d);
                return t !== r && "ticks" !== o.bounds && 1 !== e || na(f, t, d), Object.keys(f).sort((function (t, e) {
                    return t - e
                })).map((function (t) {
                    return +t
                }))
            }
        }, {
            key: "getLabelForValue", value: function (t) {
                var e = this._adapter, n = this.options.time;
                return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime)
            }
        }, {
            key: "_tickFormatFunction", value: function (t, e, n, i) {
                var r = this.options, o = r.time.displayFormats, a = this._unit, s = this._majorUnit, u = a && o[a],
                    c = s && o[s], l = n[e], f = s && c && l && l.major, h = this._adapter.format(t, i || (f ? c : u)),
                    d = r.ticks.callback;
                return d ? M(d, [h, e, n], this) : h
            }
        }, {
            key: "generateTickLabels", value: function (t) {
                var e, n, i;
                for (e = 0, n = t.length; e < n; ++e) (i = t[e]).label = this._tickFormatFunction(i.value, e, t)
            }
        }, {
            key: "getDecimalForValue", value: function (t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min)
            }
        }, {
            key: "getPixelForValue", value: function (t) {
                var e = this._offsets, n = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + n) * e.factor)
            }
        }, {
            key: "getValueForPixel", value: function (t) {
                var e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + n * (this.max - this.min)
            }
        }, {
            key: "_getLabelSize", value: function (t) {
                var e = this.options.ticks, n = this.ctx.measureText(t).width,
                    i = et(this.isHorizontal() ? e.maxRotation : e.minRotation), r = Math.cos(i), o = Math.sin(i),
                    a = this._resolveTickFontOptions(0).size;
                return {w: n * r + a * o, h: n * o + a * r}
            }
        }, {
            key: "_getLabelCapacity", value: function (t) {
                var e = this.options.time, n = e.displayFormats, i = n[e.unit] || n.millisecond,
                    r = this._tickFormatFunction(t, 0, ia(this, [t], this._majorUnit), i), o = this._getLabelSize(r),
                    a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                return a > 0 ? a : 1
            }
        }, {
            key: "getDataTimestamps", value: function () {
                var t, e, n = this._cache.data || [];
                if (n.length) return n;
                var i = this.getMatchingVisibleMetas();
                if (this._normalized && i.length) return this._cache.data = i[0].controller.getAllParsedValues(this);
                for (t = 0, e = i.length; t < e; ++t) n = n.concat(i[t].controller.getAllParsedValues(this));
                return this._cache.data = this.normalize(n)
            }
        }, {
            key: "getLabelTimestamps", value: function () {
                var t, e, n = this._cache.labels || [];
                if (n.length) return n;
                var i = this.getLabels();
                for (t = 0, e = i.length; t < e; ++t) n.push(ta(this, i[t]));
                return this._cache.labels = this._normalized ? n : this.normalize(n)
            }
        }, {
            key: "normalize", value: function (t) {
                return Te(t.sort(Zo))
            }
        }]), n
    }(mr);

    function oa(t, e, n) {
        var i, r, o, a, s = 0, u = t.length - 1;
        if (n) {
            if (e >= t[s].pos && e <= t[u].pos) {
                var c = Se(t, "pos", e);
                s = c.lo, u = c.hi
            }
            var l = t[s];
            i = l.pos, o = l.time;
            var f = t[u];
            r = f.pos, a = f.time
        } else {
            if (e >= t[s].time && e <= t[u].time) {
                var h = Se(t, "time", e);
                s = h.lo, u = h.hi
            }
            var d = t[s];
            i = d.time, o = d.pos;
            var p = t[u];
            r = p.time, a = p.pos
        }
        var v = r - i;
        return v ? o + (a - o) * (e - i) / v : o
    }

    ra.id = "time", ra.defaults = {
        bounds: "data",
        adapters: {},
        time: {parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {}},
        ticks: {source: "auto", major: {enabled: !1}}
    };
    var aa = function (t) {
        En(n, t);
        var e = Mn(n);

        function n(t) {
            var i;
            return Fn(this, n), (i = e.call(this, t))._table = [], i._minPos = void 0, i._tableRange = void 0, i
        }

        return Wn(n, [{
            key: "initOffsets", value: function () {
                var t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
                this._minPos = oa(e, this.min), this._tableRange = oa(e, this.max) - this._minPos, Sn(Cn(n.prototype), "initOffsets", this).call(this, t)
            }
        }, {
            key: "buildLookupTable", value: function (t) {
                var e, n, i, r, o, a = this.min, s = this.max, u = [], c = [];
                for (e = 0, n = t.length; e < n; ++e) (r = t[e]) >= a && r <= s && u.push(r);
                if (u.length < 2) return [{time: a, pos: 0}, {time: s, pos: 1}];
                for (e = 0, n = u.length; e < n; ++e) o = u[e + 1], i = u[e - 1], r = u[e], Math.round((o + i) / 2) !== r && c.push({
                    time: r,
                    pos: e / (n - 1)
                });
                return c
            }
        }, {
            key: "_getTimestampsForTable", value: function () {
                var t = this._cache.all || [];
                if (t.length) return t;
                var e = this.getDataTimestamps(), n = this.getLabelTimestamps();
                return t = e.length && n.length ? this.normalize(e.concat(n)) : e.length ? e : n, t = this._cache.all = t
            }
        }, {
            key: "getDecimalForValue", value: function (t) {
                return (oa(this._table, t) - this._minPos) / this._tableRange
            }
        }, {
            key: "getValueForPixel", value: function (t) {
                var e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
                return oa(this._table, n * this._tableRange + this._minPos, !0)
            }
        }]), n
    }(ra);
    aa.id = "timeseries", aa.defaults = ra.defaults;
    var sa, ua = n(48), ca = n.n(ua);
    qr.register(ao, vi, Io, Bo, uo, bo, xo, Lo);
    var la = Object(i.component)({
        config: ca.a.object.isRequired,
        imagePath: ca.a.string.isRequired
    })(sa = function t() {
        var e = this;
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = [];
        this.props.config.yPoints.forEach((function (t) {
            var i = new Image;
            i.src = e.props.imagePath + t + ".png", n.push(i)
        }));
        var i = {
            type: "line",
            data: {
                labels: this.props.config.xData,
                datasets: [{
                    label: this.props.config.yTitle,
                    data: this.props.config.yData,
                    backgroundColor: "blue",
                    borderColor: "#2d78f7",
                    borderWidth: 2,
                    pointStyle: n
                }]
            },
            options: {
                layout: {padding: 15},
                maintainAspectRatio: !1,
                scales: {
                    x: {
                        grid: {color: "rgba(45, 120, 247, 0.2)", display: !1},
                        ticks: {color: "rgba(45, 120, 247, 0.6)", font: {size: 14}},
                        title: {
                            display: !0,
                            text: this.props.config.xTitle,
                            color: "#2d78f7",
                            font: {family: "Lato", size: 20, lineHeight: 1.2},
                            padding: {top: 10, left: 0, right: 0, bottom: 0}
                        }
                    },
                    y: {
                        offset: !0,
                        grid: {color: "rgba(45, 120, 247, 0.2)", display: !1},
                        ticks: {color: "rgba(45, 120, 247, 0.6)", font: {size: 14}},
                        title: {
                            display: !0,
                            text: this.props.config.yTitle,
                            color: "#2d78f7",
                            font: {family: "Lato", size: 25},
                            backdropPadding: 0,
                            padding: {top: 0, left: 0, right: 0, bottom: 5}
                        }
                    }
                },
                plugins: {
                    legend: {labels: !1},
                    tooltip: {
                        displayColors: !1,
                        borderColor: "rgb(236, 243, 250, 1)",
                        borderWidth: 1,
                        bodySpacing: 2,
                        bodyFont: {family: "Lato", size: 14},
                        backgroundColor: "rgba(45, 120, 247, 1)",
                        bodyColor: "rgba(255, 255, 255, 1)",
                        callbacks: {
                            title: function () {
                                return !1
                            }
                        }
                    }
                },
                animation: {numbers: {duration: 2e3}, delay: 100}
            }
        };
        new qr(this.el.querySelector("canvas"), i)
    }) || sa
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "Button", (function () {
        return a
    })), n.d(e, "ProductItem", (function () {
        return s.a
    }));
    var i, r = n(27);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    var a = Object(r.component)({})(i = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = this.el.querySelector("a");
            this.el.addEventListener("click", (function () {
                e.click()
            })), this.createMobileCta()
        }

        var e, n, i;
        return e = t, (n = [{
            key: "createMobileCta", value: function () {
                if (null === document.querySelector("#mobile-cta")) {
                    var t = document.querySelector(".button.cta").cloneNode(!0);
                    t.id = "mobile-cta", document.querySelector("body").appendChild(t)
                }
            }
        }]) && o(e.prototype, n), i && o(e, i), t
    }()) || i, s = n(135)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(143), n(97), n(144)
}, function (t, e, n) {
}, function (t, e, n) {
    "use strict";
    (function (t) {
        n(145);
        var e = n(138), i = n.n(e), r = n(140), o = n(141), a = n(139), s = i()();
        s.registerAll(r), s.registerAll(o), s.registerAll(a), setTimeout((function () {
            return s.run()
        }), 0), document.addEventListener("Cplus.PageLoaded", s.run()), window.location.search && t("a[href]").each((function () {
            t(this).attr("href").includes("https://") && t(this).attr("href", t(this).attr("href") + window.location.search)
        })), t(".hamburger").click((function () {
            t(this).toggleClass("is-active")
        })), window.klarnaExpressButtonAsyncCallback = function () {
            Klarna.ExpressButton.on("user-authenticated", (function (e) {
                t("#checkout-loader").show(), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][firstName]"]').val(e.first_name), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][lastName]"]').val(e.last_name), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][street]"]').val(e.address.street_address), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][zipCode]"]').val(e.address.postal_code), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][city]"]').val(e.address.city), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][phoneNumber]"]').val(e.phone.replace("+", "00")), t('input[name="--seven_offerpage_checkout-content_checkout_form[order][customer][email]"]').val(e.email), t("#payment-klarnaCheckout").prop("checked", !0), t("#checkout-form").submit()
            }))
        }
    }).call(this, n(54))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        if (n(146), n(343), n(344), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;

        function e(t, e, n) {
            t[e] || Object.defineProperty(t, e, {writable: !0, configurable: !0, value: n})
        }

        e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function (t) {
            [][t] && e(Array, t, Function.call.bind([][t]))
        }))
    }).call(this, n(55))
}, function (t, e, n) {
    n(147), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(227), n(228), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(90), n(251),n(118),n(252),n(119),n(253),n(254),n(255),n(256),n(257),n(122),n(124),n(125),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),t.exports = n(18)
}, function (t, e, n) {
    "use strict";

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    var r = n(2), o = n(14), a = n(7), s = n(0), u = n(12), c = n(31).KEY, l = n(3), f = n(49), h = n(44), d = n(34),
        p = n(5), v = n(100), g = n(71), y = n(149), m = n(58), b = n(1), _ = n(4), x = n(9), w = n(15), k = n(23),
        S = n(33), E = n(37), O = n(103), M = n(16), T = n(57), A = n(8), C = n(35), P = M.f, D = A.f, L = O.f,
        j = r.Symbol, I = r.JSON, N = I && I.stringify, R = p("_hidden"), F = p("toPrimitive"),
        B = {}.propertyIsEnumerable, W = f("symbol-registry"), z = f("symbols"), H = f("op-symbols"),
        V = Object.prototype, q = "function" == typeof j && !!T.f, U = r.QObject,
        $ = !U || !U.prototype || !U.prototype.findChild, Y = a && l((function () {
            return 7 != E(D({}, "a", {
                get: function () {
                    return D(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (t, e, n) {
            var i = P(V, e);
            i && delete V[e], D(t, e, n), i && t !== V && D(V, e, i)
        } : D, X = function (t) {
            var e = z[t] = E(j.prototype);
            return e._k = t, e
        }, G = q && "symbol" == i(j.iterator) ? function (t) {
            return "symbol" == i(t)
        } : function (t) {
            return t instanceof j
        }, K = function (t, e, n) {
            return t === V && K(H, e, n), b(t), e = k(e, !0), b(n), o(z, e) ? (n.enumerable ? (o(t, R) && t[R][e] && (t[R][e] = !1), n = E(n, {enumerable: S(0, !1)})) : (o(t, R) || D(t, R, S(1, {})), t[R][e] = !0), Y(t, e, n)) : D(t, e, n)
        }, Q = function (t, e) {
            b(t);
            for (var n, i = y(e = w(e)), r = 0, o = i.length; o > r;) K(t, n = i[r++], e[n]);
            return t
        }, J = function (t) {
            var e = B.call(this, t = k(t, !0));
            return !(this === V && o(z, t) && !o(H, t)) && (!(e || !o(this, t) || !o(z, t) || o(this, R) && this[R][t]) || e)
        }, Z = function (t, e) {
            if (t = w(t), e = k(e, !0), t !== V || !o(z, e) || o(H, e)) {
                var n = P(t, e);
                return !n || !o(z, e) || o(t, R) && t[R][e] || (n.enumerable = !0), n
            }
        }, tt = function (t) {
            for (var e, n = L(w(t)), i = [], r = 0; n.length > r;) o(z, e = n[r++]) || e == R || e == c || i.push(e);
            return i
        }, et = function (t) {
            for (var e, n = t === V, i = L(n ? H : w(t)), r = [], a = 0; i.length > a;) !o(z, e = i[a++]) || n && !o(V, e) || r.push(z[e]);
            return r
        };
    q || (u((j = function () {
        if (this instanceof j) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function e(n) {
            this === V && e.call(H, n), o(this, R) && o(this[R], t) && (this[R][t] = !1), Y(this, t, S(1, n))
        };
        return a && $ && Y(V, t, {configurable: !0, set: e}), X(t)
    }).prototype, "toString", (function () {
        return this._k
    })), M.f = Z, A.f = K, n(38).f = O.f = tt, n(51).f = J, T.f = et, a && !n(30) && u(V, "propertyIsEnumerable", J, !0), v.f = function (t) {
        return X(p(t))
    }), s(s.G + s.W + s.F * !q, {Symbol: j});
    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; nt.length > it;) p(nt[it++]);
    for (var rt = C(p.store), ot = 0; rt.length > ot;) g(rt[ot++]);
    s(s.S + s.F * !q, "Symbol", {
        for: function (t) {
            return o(W, t += "") ? W[t] : W[t] = j(t)
        }, keyFor: function (t) {
            if (!G(t)) throw TypeError(t + " is not a symbol!");
            for (var e in W) if (W[e] === t) return e
        }, useSetter: function () {
            $ = !0
        }, useSimple: function () {
            $ = !1
        }
    }), s(s.S + s.F * !q, "Object", {
        create: function (t, e) {
            return void 0 === e ? E(t) : Q(E(t), e)
        },
        defineProperty: K,
        defineProperties: Q,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
    });
    var at = l((function () {
        T.f(1)
    }));
    s(s.S + s.F * at, "Object", {
        getOwnPropertySymbols: function (t) {
            return T.f(x(t))
        }
    }), I && s(s.S + s.F * (!q || l((function () {
        var t = j();
        return "[null]" != N([t]) || "{}" != N({a: t}) || "{}" != N(Object(t))
    }))), "JSON", {
        stringify: function (t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = e = i[1], (_(e) || void 0 !== t) && !G(t)) return m(e) || (e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !G(e)) return e
            }), i[1] = e, N.apply(I, i)
        }
    }), j.prototype[F] || n(11)(j.prototype, F, j.prototype.valueOf), h(j, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0)
}, function (t, e, n) {
    t.exports = n(49)("native-function-to-string", Function.toString)
}, function (t, e, n) {
    var i = n(35), r = n(57), o = n(51);
    t.exports = function (t) {
        var e = i(t), n = r.f;
        if (n) for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Object", {create: n(37)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S + i.F * !n(7), "Object", {defineProperty: n(8).f})
}, function (t, e, n) {
    var i = n(0);
    i(i.S + i.F * !n(7), "Object", {defineProperties: n(102)})
}, function (t, e, n) {
    var i = n(15), r = n(16).f;
    n(25)("getOwnPropertyDescriptor", (function () {
        return function (t, e) {
            return r(i(t), e)
        }
    }))
}, function (t, e, n) {
    var i = n(9), r = n(17);
    n(25)("getPrototypeOf", (function () {
        return function (t) {
            return r(i(t))
        }
    }))
}, function (t, e, n) {
    var i = n(9), r = n(35);
    n(25)("keys", (function () {
        return function (t) {
            return r(i(t))
        }
    }))
}, function (t, e, n) {
    n(25)("getOwnPropertyNames", (function () {
        return n(103).f
    }))
}, function (t, e, n) {
    var i = n(4), r = n(31).onFreeze;
    n(25)("freeze", (function (t) {
        return function (e) {
            return t && i(e) ? t(r(e)) : e
        }
    }))
}, function (t, e, n) {
    var i = n(4), r = n(31).onFreeze;
    n(25)("seal", (function (t) {
        return function (e) {
            return t && i(e) ? t(r(e)) : e
        }
    }))
}, function (t, e, n) {
    var i = n(4), r = n(31).onFreeze;
    n(25)("preventExtensions", (function (t) {
        return function (e) {
            return t && i(e) ? t(r(e)) : e
        }
    }))
}, function (t, e, n) {
    var i = n(4);
    n(25)("isFrozen", (function (t) {
        return function (e) {
            return !i(e) || !!t && t(e)
        }
    }))
}, function (t, e, n) {
    var i = n(4);
    n(25)("isSealed", (function (t) {
        return function (e) {
            return !i(e) || !!t && t(e)
        }
    }))
}, function (t, e, n) {
    var i = n(4);
    n(25)("isExtensible", (function (t) {
        return function (e) {
            return !!i(e) && (!t || t(e))
        }
    }))
}, function (t, e, n) {
    var i = n(0);
    i(i.S + i.F, "Object", {assign: n(104)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Object", {is: n(105)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Object", {setPrototypeOf: n(75).set})
}, function (t, e, n) {
    "use strict";
    var i = n(45), r = {};
    r[n(5)("toStringTag")] = "z", r + "" != "[object z]" && n(12)(Object.prototype, "toString", (function () {
        return "[object " + i(this) + "]"
    }), !0)
}, function (t, e, n) {
    var i = n(0);
    i(i.P, "Function", {bind: n(106)})
}, function (t, e, n) {
    var i = n(8).f, r = Function.prototype, o = /^\s*function ([^ (]*)/;
    "name" in r || n(7) && i(r, "name", {
        configurable: !0, get: function () {
            try {
                return ("" + this).match(o)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(4), r = n(17), o = n(5)("hasInstance"), a = Function.prototype;
    o in a || n(8).f(a, o, {
        value: function (t) {
            if ("function" != typeof this || !i(t)) return !1;
            if (!i(this.prototype)) return t instanceof this;
            for (; t = r(t);) if (this.prototype === t) return !0;
            return !1
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(108);
    i(i.G + i.F * (parseInt != r), {parseInt: r})
}, function (t, e, n) {
    var i = n(0), r = n(109);
    i(i.G + i.F * (parseFloat != r), {parseFloat: r})
}, function (t, e, n) {
    "use strict";
    var i = n(2), r = n(14), o = n(20), a = n(77), s = n(23), u = n(3), c = n(38).f, l = n(16).f, f = n(8).f,
        h = n(46).trim, d = i.Number, p = d, v = d.prototype, g = "Number" == o(n(37)(v)),
        y = "trim" in String.prototype, m = function (t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, i, r, o = (e = y ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, r = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, u = e.slice(2), c = 0, l = u.length; c < l; c++) if ((a = u.charCodeAt(c)) < 48 || a > r) return NaN;
                    return parseInt(u, i)
                }
            }
            return +e
        };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
        d = function (t) {
            var e = arguments.length < 1 ? 0 : t, n = this;
            return n instanceof d && (g ? u((function () {
                v.valueOf.call(n)
            })) : "Number" != o(n)) ? a(new p(m(e)), n, d) : m(e)
        };
        for (var b, _ = n(7) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; _.length > x; x++) r(p, b = _[x]) && !r(d, b) && f(d, b, l(p, b));
        d.prototype = v, v.constructor = d, n(12)(i, "Number", d)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(21), o = n(110), a = n(78), s = 1..toFixed, u = Math.floor, c = [0, 0, 0, 0, 0, 0],
        l = "Number.toFixed: incorrect invocation!", f = function (t, e) {
            for (var n = -1, i = e; ++n < 6;) i += t * c[n], c[n] = i % 1e7, i = u(i / 1e7)
        }, h = function (t) {
            for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = u(n / t), n = n % t * 1e7
        }, d = function () {
            for (var t = 6, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== c[t]) {
                var n = String(c[t]);
                e = "" === e ? n : e + a.call("0", 7 - n.length) + n
            }
            return e
        }, p = function t(e, n, i) {
            return 0 === n ? i : n % 2 == 1 ? t(e, n - 1, i * e) : t(e * e, n / 2, i)
        };
    i(i.P + i.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(3)((function () {
        s.call({})
    }))), "Number", {
        toFixed: function (t) {
            var e, n, i, s, u = o(this, l), c = r(t), v = "", g = "0";
            if (c < 0 || c > 20) throw RangeError(l);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (v = "-", u = -u), u > 1e-21) if (n = (e = function (t) {
                for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                for (; n >= 2;) e += 1, n /= 2;
                return e
            }(u * p(2, 69, 1)) - 69) < 0 ? u * p(2, -e, 1) : u / p(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                for (f(0, n), i = c; i >= 7;) f(1e7, 0), i -= 7;
                for (f(p(10, i, 1), 0), i = e - 1; i >= 23;) h(1 << 23), i -= 23;
                h(1 << i), f(1, 1), h(2), g = d()
            } else f(0, n), f(1 << -e, 0), g = d() + a.call("0", c);
            return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(3), o = n(110), a = 1..toPrecision;
    i(i.P + i.F * (r((function () {
        return "1" !== a.call(1, void 0)
    })) || !r((function () {
        a.call({})
    }))), "Number", {
        toPrecision: function (t) {
            var e = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? a.call(e) : a.call(e, t)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (t, e, n) {
    var i = n(0), r = n(2).isFinite;
    i(i.S, "Number", {
        isFinite: function (t) {
            return "number" == typeof t && r(t)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Number", {isInteger: n(111)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Number", {
        isNaN: function (t) {
            return t != t
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(111), o = Math.abs;
    i(i.S, "Number", {
        isSafeInteger: function (t) {
            return r(t) && o(t) <= 9007199254740991
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (t, e, n) {
    var i = n(0), r = n(109);
    i(i.S + i.F * (Number.parseFloat != r), "Number", {parseFloat: r})
}, function (t, e, n) {
    var i = n(0), r = n(108);
    i(i.S + i.F * (Number.parseInt != r), "Number", {parseInt: r})
}, function (t, e, n) {
    var i = n(0), r = n(112), o = Math.sqrt, a = Math.acosh;
    i(i.S + i.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function (t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + o(t - 1) * o(t + 1))
        }
    })
}, function (t, e, n) {
    var i = n(0), r = Math.asinh;
    i(i.S + i.F * !(r && 1 / r(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function (t, e, n) {
    var i = n(0), r = Math.atanh;
    i(i.S + i.F * !(r && 1 / r(-0) < 0), "Math", {
        atanh: function (t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(79);
    i(i.S, "Math", {
        cbrt: function (t) {
            return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        clz32: function (t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function (t, e, n) {
    var i = n(0), r = Math.exp;
    i(i.S, "Math", {
        cosh: function (t) {
            return (r(t = +t) + r(-t)) / 2
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(80);
    i(i.S + i.F * (r != Math.expm1), "Math", {expm1: r})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {fround: n(113)})
}, function (t, e, n) {
    var i = n(0), r = Math.abs;
    i(i.S, "Math", {
        hypot: function (t, e) {
            for (var n, i, o = 0, a = 0, s = arguments.length, u = 0; a < s;) u < (n = r(arguments[a++])) ? (o = o * (i = u / n) * i + 1, u = n) : o += n > 0 ? (i = n / u) * i : n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = Math.imul;
    i(i.S + i.F * n(3)((function () {
        return -5 != r(4294967295, 5) || 2 != r.length
    })), "Math", {
        imul: function (t, e) {
            var n = +t, i = +e, r = 65535 & n, o = 65535 & i;
            return 0 | r * o + ((65535 & n >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        log10: function (t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {log1p: n(112)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        log2: function (t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {sign: n(79)})
}, function (t, e, n) {
    var i = n(0), r = n(80), o = Math.exp;
    i(i.S + i.F * n(3)((function () {
        return -2e-17 != !Math.sinh(-2e-17)
    })), "Math", {
        sinh: function (t) {
            return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(80), o = Math.exp;
    i(i.S, "Math", {
        tanh: function (t) {
            var e = r(t = +t), n = r(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        trunc: function (t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(36), o = String.fromCharCode, a = String.fromCodePoint;
    i(i.S + i.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function (t) {
            for (var e, n = [], i = arguments.length, a = 0; i > a;) {
                if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(15), o = n(6);
    i(i.S, "String", {
        raw: function (t) {
            for (var e = r(t.raw), n = o(e.length), i = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < i && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(46)("trim", (function (t) {
        return function () {
            return t(this, 3)
        }
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(59)(!0);
    n(81)(String, "String", (function (t) {
        this._t = String(t), this._i = 0
    }), (function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {value: t, done: !1})
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(59)(!1);
    i(i.P, "String", {
        codePointAt: function (t) {
            return r(this, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(6), o = n(83), a = "".endsWith;
    i(i.P + i.F * n(84)("endsWith"), "String", {
        endsWith: function (t) {
            var e = o(this, t, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, i = r(e.length),
                s = void 0 === n ? i : Math.min(r(n), i), u = String(t);
            return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(83);
    i(i.P + i.F * n(84)("includes"), "String", {
        includes: function (t) {
            return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.P, "String", {repeat: n(78)})
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(6), o = n(83), a = "".startsWith;
    i(i.P + i.F * n(84)("startsWith"), "String", {
        startsWith: function (t) {
            var e = o(this, t, "startsWith"), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                i = String(t);
            return a ? a.call(e, i, n) : e.slice(n, n + i.length) === i
        }
    })
}, function (t, e, n) {
    "use strict";
    n(13)("anchor", (function (t) {
        return function (e) {
            return t(this, "a", "name", e)
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("big", (function (t) {
        return function () {
            return t(this, "big", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("blink", (function (t) {
        return function () {
            return t(this, "blink", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("bold", (function (t) {
        return function () {
            return t(this, "b", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("fixed", (function (t) {
        return function () {
            return t(this, "tt", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("fontcolor", (function (t) {
        return function (e) {
            return t(this, "font", "color", e)
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("fontsize", (function (t) {
        return function (e) {
            return t(this, "font", "size", e)
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("italics", (function (t) {
        return function () {
            return t(this, "i", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("link", (function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("small", (function (t) {
        return function () {
            return t(this, "small", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("strike", (function (t) {
        return function () {
            return t(this, "strike", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("sub", (function (t) {
        return function () {
            return t(this, "sub", "", "")
        }
    }))
}, function (t, e, n) {
    "use strict";
    n(13)("sup", (function (t) {
        return function () {
            return t(this, "sup", "", "")
        }
    }))
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Date", {
        now: function () {
            return (new Date).getTime()
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(9), o = n(23);
    i(i.P + i.F * n(3)((function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function () {
                return 1
            }
        })
    })), "Date", {
        toJSON: function (t) {
            var e = r(this), n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(226);
    i(i.P + i.F * (Date.prototype.toISOString !== r), "Date", {toISOString: r})
}, function (t, e, n) {
    "use strict";
    var i = n(3), r = Date.prototype.getTime, o = Date.prototype.toISOString, a = function (t) {
        return t > 9 ? t : "0" + t
    };
    t.exports = i((function () {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001))
    })) || !i((function () {
        o.call(new Date(NaN))
    })) ? function () {
        if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
        var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), i = e < 0 ? "-" : e > 9999 ? "+" : "";
        return i + ("00000" + Math.abs(e)).slice(i ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
    } : o
}, function (t, e, n) {
    var i = Date.prototype, r = i.toString, o = i.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(12)(i, "toString", (function () {
        var t = o.call(this);
        return t == t ? r.call(this) : "Invalid Date"
    }))
}, function (t, e, n) {
    var i = n(5)("toPrimitive"), r = Date.prototype;
    i in r || n(11)(r, i, n(229))
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(23);
    t.exports = function (t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return r(i(this), "number" != t)
    }
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Array", {isArray: n(58)})
}, function (t, e, n) {
    "use strict";
    var i = n(19), r = n(0), o = n(9), a = n(114), s = n(85), u = n(6), c = n(86), l = n(87);
    r(r.S + r.F * !n(61)((function (t) {
        Array.from(t)
    })), "Array", {
        from: function (t) {
            var e, n, r, f, h = o(t), d = "function" == typeof this ? this : Array, p = arguments.length,
                v = p > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, m = l(h);
            if (g && (v = i(v, p > 2 ? arguments[2] : void 0, 2)), null == m || d == Array && s(m)) for (n = new d(e = u(h.length)); e > y; y++) c(n, y, g ? v(h[y], y) : h[y]); else for (f = m.call(h), n = new d; !(r = f.next()).done; y++) c(n, y, g ? a(f, v, [r.value, y], !0) : r.value);
            return n.length = y, n
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(86);
    i(i.S + i.F * n(3)((function () {
        function t() {
        }

        return !(Array.of.call(t) instanceof t)
    })), "Array", {
        of: function () {
            for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) r(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(15), o = [].join;
    i(i.P + i.F * (n(50) != Object || !n(22)(o)), "Array", {
        join: function (t) {
            return o.call(r(this), void 0 === t ? "," : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(74), o = n(20), a = n(36), s = n(6), u = [].slice;
    i(i.P + i.F * n(3)((function () {
        r && u.call(r)
    })), "Array", {
        slice: function (t, e) {
            var n = s(this.length), i = o(this);
            if (e = void 0 === e ? n : e, "Array" == i) return u.call(this, t, e);
            for (var r = a(t, n), c = a(e, n), l = s(c - r), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == i ? this.charAt(r + h) : this[r + h];
            return f
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(10), o = n(9), a = n(3), s = [].sort, u = [1, 2, 3];
    i(i.P + i.F * (a((function () {
        u.sort(void 0)
    })) || !a((function () {
        u.sort(null)
    })) || !n(22)(s)), "Array", {
        sort: function (t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), r(t))
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(0), o = n(22)([].forEach, !0);
    i(i.P + i.F * !o, "Array", {
        forEach: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    var i = n(4), r = n(58), o = n(5)("species");
    t.exports = function (t) {
        var e;
        return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(1);
    i(i.P + i.F * !n(22)([].map, !0), "Array", {
        map: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(2);
    i(i.P + i.F * !n(22)([].filter, !0), "Array", {
        filter: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(3);
    i(i.P + i.F * !n(22)([].some, !0), "Array", {
        some: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(4);
    i(i.P + i.F * !n(22)([].every, !0), "Array", {
        every: function (t) {
            return r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(115);
    i(i.P + i.F * !n(22)([].reduce, !0), "Array", {
        reduce: function (t) {
            return r(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(115);
    i(i.P + i.F * !n(22)([].reduceRight, !0), "Array", {
        reduceRight: function (t) {
            return r(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(56)(!1), o = [].indexOf, a = !!o && 1 / [1].indexOf(1, -0) < 0;
    i(i.P + i.F * (a || !n(22)(o)), "Array", {
        indexOf: function (t) {
            return a ? o.apply(this, arguments) || 0 : r(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(15), o = n(21), a = n(6), s = [].lastIndexOf, u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    i(i.P + i.F * (u || !n(22)(s)), "Array", {
        lastIndexOf: function (t) {
            if (u) return s.apply(this, arguments) || 0;
            var e = r(this), n = a(e.length), i = n - 1;
            for (arguments.length > 1 && (i = Math.min(i, o(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--) if (i in e && e[i] === t) return i || 0;
            return -1
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.P, "Array", {copyWithin: n(116)}), n(32)("copyWithin")
}, function (t, e, n) {
    var i = n(0);
    i(i.P, "Array", {fill: n(89)}), n(32)("fill")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(5), o = !0;
    "find" in [] && Array(1).find((function () {
        o = !1
    })), i(i.P + i.F * o, "Array", {
        find: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(32)("find")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(26)(6), o = "findIndex", a = !0;
    o in [] && Array(1)[o]((function () {
        a = !1
    })), i(i.P + i.F * a, "Array", {
        findIndex: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(32)(o)
}, function (t, e, n) {
    n(39)("Array")
}, function (t, e, n) {
    var i = n(2), r = n(77), o = n(8).f, a = n(38).f, s = n(60), u = n(52), c = i.RegExp, l = c, f = c.prototype,
        h = /a/g, d = /a/g, p = new c(h) !== h;
    if (n(7) && (!p || n(3)((function () {
        return d[n(5)("match")] = !1, c(h) != h || c(d) == d || "/a/i" != c(h, "i")
    })))) {
        c = function (t, e) {
            var n = this instanceof c, i = s(t), o = void 0 === e;
            return !n && i && t.constructor === c && o ? t : r(p ? new l(i && !o ? t.source : t, e) : l((i = t instanceof c) ? t.source : t, i && o ? u.call(t) : e), n ? this : f, c)
        };
        for (var v = function (t) {
            t in c || o(c, t, {
                configurable: !0, get: function () {
                    return l[t]
                }, set: function (e) {
                    l[t] = e
                }
            })
        }, g = a(l), y = 0; g.length > y;) v(g[y++]);
        f.constructor = c, c.prototype = f, n(12)(i, "RegExp", c)
    }
    n(39)("RegExp")
}, function (t, e, n) {
    "use strict";
    n(119);
    var i = n(1), r = n(52), o = n(7), a = /./.toString, s = function (t) {
        n(12)(RegExp.prototype, "toString", t, !0)
    };
    n(3)((function () {
        return "/a/b" != a.call({source: "a", flags: "b"})
    })) ? s((function () {
        var t = i(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0)
    })) : "toString" != a.name && s((function () {
        return a.call(this)
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(6), o = n(92), a = n(62);
    n(63)("match", 1, (function (t, e, n, s) {
        return [function (n) {
            var i = t(this), r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, function (t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var u = i(t), c = String(this);
            if (!u.global) return a(u, c);
            var l = u.unicode;
            u.lastIndex = 0;
            for (var f, h = [], d = 0; null !== (f = a(u, c));) {
                var p = String(f[0]);
                h[d] = p, "" === p && (u.lastIndex = o(c, r(u.lastIndex), l)), d++
            }
            return 0 === d ? null : h
        }]
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(9), o = n(6), a = n(21), s = n(92), u = n(62), c = Math.max, l = Math.min, f = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g, d = /\$([$&`']|\d\d?)/g;
    n(63)("replace", 2, (function (t, e, n, p) {
        return [function (i, r) {
            var o = t(this), a = null == i ? void 0 : i[e];
            return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
        }, function (t, e) {
            var r = p(n, t, this, e);
            if (r.done) return r.value;
            var f = i(t), h = String(this), d = "function" == typeof e;
            d || (e = String(e));
            var g = f.global;
            if (g) {
                var y = f.unicode;
                f.lastIndex = 0
            }
            for (var m = []; ;) {
                var b = u(f, h);
                if (null === b) break;
                if (m.push(b), !g) break;
                "" === String(b[0]) && (f.lastIndex = s(h, o(f.lastIndex), y))
            }
            for (var _, x = "", w = 0, k = 0; k < m.length; k++) {
                b = m[k];
                for (var S = String(b[0]), E = c(l(a(b.index), h.length), 0), O = [], M = 1; M < b.length; M++) O.push(void 0 === (_ = b[M]) ? _ : String(_));
                var T = b.groups;
                if (d) {
                    var A = [S].concat(O, E, h);
                    void 0 !== T && A.push(T);
                    var C = String(e.apply(void 0, A))
                } else C = v(S, h, E, O, T, e);
                E >= w && (x += h.slice(w, E) + C, w = E + S.length)
            }
            return x + h.slice(w)
        }];

        function v(t, e, i, o, a, s) {
            var u = i + t.length, c = o.length, l = d;
            return void 0 !== a && (a = r(a), l = h), n.call(s, l, (function (n, r) {
                var s;
                switch (r.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return t;
                    case"`":
                        return e.slice(0, i);
                    case"'":
                        return e.slice(u);
                    case"<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var l = +r;
                        if (0 === l) return n;
                        if (l > c) {
                            var h = f(l / 10);
                            return 0 === h ? n : h <= c ? void 0 === o[h - 1] ? r.charAt(1) : o[h - 1] + r.charAt(1) : n
                        }
                        s = o[l - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(1), r = n(105), o = n(62);
    n(63)("search", 1, (function (t, e, n, a) {
        return [function (n) {
            var i = t(this), r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
        }, function (t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = i(t), u = String(this), c = s.lastIndex;
            r(c, 0) || (s.lastIndex = 0);
            var l = o(s, u);
            return r(s.lastIndex, c) || (s.lastIndex = c), null === l ? -1 : l.index
        }]
    }))
}, function (t, e, n) {
    "use strict";
    var i = n(60), r = n(1), o = n(53), a = n(92), s = n(6), u = n(62), c = n(91), l = n(3), f = Math.min, h = [].push,
        d = "length", p = !l((function () {
            RegExp(4294967295, "y")
        }));
    n(63)("split", 2, (function (t, e, n, l) {
        var v;
        return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[d] || 2 != "ab".split(/(?:ab)*/)[d] || 4 != ".".split(/(.?)(.?)/)[d] || ".".split(/()()/)[d] > 1 || "".split(/.?/)[d] ? function (t, e) {
            var r = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!i(t)) return n.call(r, t, e);
            for (var o, a, s, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, l + "g"); (o = c.call(v, r)) && !((a = v.lastIndex) > f && (u.push(r.slice(f, o.index)), o[d] > 1 && o.index < r[d] && h.apply(u, o.slice(1)), s = o[0][d], f = a, u[d] >= p));) v.lastIndex === o.index && v.lastIndex++;
            return f === r[d] ? !s && v.test("") || u.push("") : u.push(r.slice(f)), u[d] > p ? u.slice(0, p) : u
        } : "0".split(void 0, 0)[d] ? function (t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function (n, i) {
            var r = t(this), o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r, i) : v.call(String(r), n, i)
        }, function (t, e) {
            var i = l(v, t, this, e, v !== n);
            if (i.done) return i.value;
            var c = r(t), h = String(this), d = o(c, RegExp), g = c.unicode,
                y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
                m = new d(p ? c : "^(?:" + c.source + ")", y), b = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === b) return [];
            if (0 === h.length) return null === u(m, h) ? [h] : [];
            for (var _ = 0, x = 0, w = []; x < h.length;) {
                m.lastIndex = p ? x : 0;
                var k, S = u(m, p ? h : h.slice(x));
                if (null === S || (k = f(s(m.lastIndex + (p ? 0 : x)), h.length)) === _) x = a(h, x, g); else {
                    if (w.push(h.slice(_, x)), w.length === b) return w;
                    for (var E = 1; E <= S.length - 1; E++) if (w.push(S[E]), w.length === b) return w;
                    x = _ = k
                }
            }
            return w.push(h.slice(_)), w
        }]
    }))
}, function (t, e, n) {
    "use strict";
    var i, r, o, a, s = n(30), u = n(2), c = n(19), l = n(45), f = n(0), h = n(4), d = n(10), p = n(40), v = n(41),
        g = n(53), y = n(93).set, m = n(94)(), b = n(95), _ = n(120), x = n(64), w = n(121), k = u.TypeError,
        S = u.process, E = S && S.versions, O = E && E.v8 || "", M = u.Promise, T = "process" == l(S), A = function () {
        }, C = r = b.f, P = !!function () {
            try {
                var t = M.resolve(1), e = (t.constructor = {})[n(5)("species")] = function (t) {
                    t(A, A)
                };
                return (T || "function" == typeof PromiseRejectionEvent) && t.then(A) instanceof e && 0 !== O.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (t) {
            }
        }(), D = function (t) {
            var e;
            return !(!h(t) || "function" != typeof (e = t.then)) && e
        }, L = function (t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m((function () {
                    for (var i = t._v, r = 1 == t._s, o = 0, a = function (e) {
                        var n, o, a, s = r ? e.ok : e.fail, u = e.resolve, c = e.reject, l = e.domain;
                        try {
                            s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? n = i : (l && l.enter(), n = s(i), l && (l.exit(), a = !0)), n === e.promise ? c(k("Promise-chain cycle")) : (o = D(n)) ? o.call(n, u, c) : u(n)) : c(i)
                        } catch (t) {
                            l && !a && l.exit(), c(t)
                        }
                    }; n.length > o;) a(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && j(t)
                }))
            }
        }, j = function (t) {
            y.call(u, (function () {
                var e, n, i, r = t._v, o = I(t);
                if (o && (e = _((function () {
                    T ? S.emit("unhandledRejection", r, t) : (n = u.onunhandledrejection) ? n({
                        promise: t,
                        reason: r
                    }) : (i = u.console) && i.error && i.error("Unhandled promise rejection", r)
                })), t._h = T || I(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            }))
        }, I = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, N = function (t) {
            y.call(u, (function () {
                var e;
                T ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
            }))
        }, R = function (t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), L(e, !0))
        }, F = function t(e) {
            var n, i = this;
            if (!i._d) {
                i._d = !0, i = i._w || i;
                try {
                    if (i === e) throw k("Promise can't be resolved itself");
                    (n = D(e)) ? m((function () {
                        var r = {_w: i, _d: !1};
                        try {
                            n.call(e, c(t, r, 1), c(R, r, 1))
                        } catch (t) {
                            R.call(r, t)
                        }
                    })) : (i._v = e, i._s = 1, L(i, !1))
                } catch (t) {
                    R.call({_w: i, _d: !1}, t)
                }
            }
        };
    P || (M = function (t) {
        p(this, M, "Promise", "_h"), d(t), i.call(this);
        try {
            t(c(F, this, 1), c(R, this, 1))
        } catch (t) {
            R.call(this, t)
        }
    }, (i = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(42)(M.prototype, {
        then: function (t, e) {
            var n = C(g(this, M));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), o = function () {
        var t = new i;
        this.promise = t, this.resolve = c(F, t, 1), this.reject = c(R, t, 1)
    }, b.f = C = function (t) {
        return t === M || t === a ? new o(t) : r(t)
    }), f(f.G + f.W + f.F * !P, {Promise: M}), n(44)(M, "Promise"), n(39)("Promise"), a = n(18).Promise, f(f.S + f.F * !P, "Promise", {
        reject: function (t) {
            var e = C(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !P), "Promise", {
        resolve: function (t) {
            return w(s && this === a ? M : this, t)
        }
    }), f(f.S + f.F * !(P && n(61)((function (t) {
        M.all(t).catch(A)
    }))), "Promise", {
        all: function (t) {
            var e = this, n = C(e), i = n.resolve, r = n.reject, o = _((function () {
                var n = [], o = 0, a = 1;
                v(t, !1, (function (t) {
                    var s = o++, u = !1;
                    n.push(void 0), a++, e.resolve(t).then((function (t) {
                        u || (u = !0, n[s] = t, --a || i(n))
                    }), r)
                })), --a || i(n)
            }));
            return o.e && r(o.v), n.promise
        }, race: function (t) {
            var e = this, n = C(e), i = n.reject, r = _((function () {
                v(t, !1, (function (t) {
                    e.resolve(t).then(n.resolve, i)
                }))
            }));
            return r.e && i(r.v), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(126), r = n(43);
    n(65)("WeakSet", (function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function (t) {
            return i.def(r(this, "WeakSet"), t, !0)
        }
    }, i, !1, !0)
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(66), o = n(96), a = n(1), s = n(36), u = n(6), c = n(4), l = n(2).ArrayBuffer, f = n(53),
        h = o.ArrayBuffer, d = o.DataView, p = r.ABV && l.isView, v = h.prototype.slice, g = r.VIEW;
    i(i.G + i.W + i.F * (l !== h), {ArrayBuffer: h}), i(i.S + i.F * !r.CONSTR, "ArrayBuffer", {
        isView: function (t) {
            return p && p(t) || c(t) && g in t
        }
    }), i(i.P + i.U + i.F * n(3)((function () {
        return !new h(2).slice(1, void 0).byteLength
    })), "ArrayBuffer", {
        slice: function (t, e) {
            if (void 0 !== v && void 0 === e) return v.call(a(this), t);
            for (var n = a(this).byteLength, i = s(t, n), r = s(void 0 === e ? n : e, n), o = new (f(this, h))(u(r - i)), c = new d(this), l = new d(o), p = 0; i < r;) l.setUint8(p++, c.getUint8(i++));
            return o
        }
    }), n(39)("ArrayBuffer")
}, function (t, e, n) {
    var i = n(0);
    i(i.G + i.W + i.F * !n(66).ABV, {DataView: n(96).DataView})
}, function (t, e, n) {
    n(28)("Int8", 1, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Uint8", 1, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Uint8", 1, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }), !0)
}, function (t, e, n) {
    n(28)("Int16", 2, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Uint16", 2, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Int32", 4, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Uint32", 4, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Float32", 4, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    n(28)("Float64", 8, (function (t) {
        return function (e, n, i) {
            return t(this, e, n, i)
        }
    }))
}, function (t, e, n) {
    var i = n(0), r = n(10), o = n(1), a = (n(2).Reflect || {}).apply, s = Function.apply;
    i(i.S + i.F * !n(3)((function () {
        a((function () {
        }))
    })), "Reflect", {
        apply: function (t, e, n) {
            var i = r(t), u = o(n);
            return a ? a(i, e, u) : s.call(i, e, u)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(37), o = n(10), a = n(1), s = n(4), u = n(3), c = n(106), l = (n(2).Reflect || {}).construct,
        f = u((function () {
            function t() {
            }

            return !(l((function () {
            }), [], t) instanceof t)
        })), h = !u((function () {
            l((function () {
            }))
        }));
    i(i.S + i.F * (f || h), "Reflect", {
        construct: function (t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (h && !f) return l(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var i = [null];
                return i.push.apply(i, e), new (c.apply(t, i))
            }
            var u = n.prototype, d = r(s(u) ? u : Object.prototype), p = Function.apply.call(t, d, e);
            return s(p) ? p : d
        }
    })
}, function (t, e, n) {
    var i = n(8), r = n(0), o = n(1), a = n(23);
    r(r.S + r.F * n(3)((function () {
        Reflect.defineProperty(i.f({}, 1, {value: 1}), 1, {value: 2})
    })), "Reflect", {
        defineProperty: function (t, e, n) {
            o(t), e = a(e, !0), o(n);
            try {
                return i.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(16).f, o = n(1);
    i(i.S, "Reflect", {
        deleteProperty: function (t, e) {
            var n = r(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(1), o = function (t) {
        this._t = r(t), this._i = 0;
        var e, n = this._k = [];
        for (e in t) n.push(e)
    };
    n(82)(o, "Object", (function () {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {value: void 0, done: !0}
        } while (!((t = e[this._i++]) in this._t));
        return {value: t, done: !1}
    })), i(i.S, "Reflect", {
        enumerate: function (t) {
            return new o(t)
        }
    })
}, function (t, e, n) {
    var i = n(16), r = n(17), o = n(14), a = n(0), s = n(4), u = n(1);
    a(a.S, "Reflect", {
        get: function t(e, n) {
            var a, c, l = arguments.length < 3 ? e : arguments[2];
            return u(e) === l ? e[n] : (a = i.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(c = r(e)) ? t(c, n, l) : void 0
        }
    })
}, function (t, e, n) {
    var i = n(16), r = n(0), o = n(1);
    r(r.S, "Reflect", {
        getOwnPropertyDescriptor: function (t, e) {
            return i.f(o(t), e)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(17), o = n(1);
    i(i.S, "Reflect", {
        getPrototypeOf: function (t) {
            return r(o(t))
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Reflect", {
        has: function (t, e) {
            return e in t
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(1), o = Object.isExtensible;
    i(i.S, "Reflect", {
        isExtensible: function (t) {
            return r(t), !o || o(t)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Reflect", {ownKeys: n(128)})
}, function (t, e, n) {
    var i = n(0), r = n(1), o = Object.preventExtensions;
    i(i.S, "Reflect", {
        preventExtensions: function (t) {
            r(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    var i = n(8), r = n(16), o = n(17), a = n(14), s = n(0), u = n(33), c = n(1), l = n(4);
    s(s.S, "Reflect", {
        set: function t(e, n, s) {
            var f, h, d = arguments.length < 4 ? e : arguments[3], p = r.f(c(e), n);
            if (!p) {
                if (l(h = o(e))) return t(h, n, s, d);
                p = u(0)
            }
            if (a(p, "value")) {
                if (!1 === p.writable || !l(d)) return !1;
                if (f = r.f(d, n)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = s, i.f(d, n, f)
                } else i.f(d, n, u(0, s));
                return !0
            }
            return void 0 !== p.set && (p.set.call(d, s), !0)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(75);
    r && i(i.S, "Reflect", {
        setPrototypeOf: function (t, e) {
            r.check(t, e);
            try {
                return r.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(56)(!0);
    i(i.P, "Array", {
        includes: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(32)("includes")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(129), o = n(9), a = n(6), s = n(10), u = n(88);
    i(i.P, "Array", {
        flatMap: function (t) {
            var e, n, i = o(this);
            return s(t), e = a(i.length), n = u(i, 0), r(n, i, i, e, 0, 1, t, arguments[1]), n
        }
    }), n(32)("flatMap")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(129), o = n(9), a = n(6), s = n(21), u = n(88);
    i(i.P, "Array", {
        flatten: function () {
            var t = arguments[0], e = o(this), n = a(e.length), i = u(e, 0);
            return r(i, e, e, n, 0, void 0 === t ? 1 : s(t)), i
        }
    }), n(32)("flatten")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(59)(!0), o = n(3)((function () {
        return "𠮷" !== "𠮷".at(0)
    }));
    i(i.P + i.F * o, "String", {
        at: function (t) {
            return r(this, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(130), o = n(64), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    i(i.P + i.F * a, "String", {
        padStart: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(130), o = n(64), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    i(i.P + i.F * a, "String", {
        padEnd: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(46)("trimLeft", (function (t) {
        return function () {
            return t(this, 1)
        }
    }), "trimStart")
}, function (t, e, n) {
    "use strict";
    n(46)("trimRight", (function (t) {
        return function () {
            return t(this, 2)
        }
    }), "trimEnd")
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(24), o = n(6), a = n(60), s = n(52), u = RegExp.prototype, c = function (t, e) {
        this._r = t, this._s = e
    };
    n(82)(c, "RegExp String", (function () {
        var t = this._r.exec(this._s);
        return {value: t, done: null === t}
    })), i(i.P, "String", {
        matchAll: function (t) {
            if (r(this), !a(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this), n = "flags" in u ? String(t.flags) : s.call(t),
                i = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
            return i.lastIndex = o(t.lastIndex), new c(i, e)
        }
    })
}, function (t, e, n) {
    n(71)("asyncIterator")
}, function (t, e, n) {
    n(71)("observable")
}, function (t, e, n) {
    var i = n(0), r = n(128), o = n(15), a = n(16), s = n(86);
    i(i.S, "Object", {
        getOwnPropertyDescriptors: function (t) {
            for (var e, n, i = o(t), u = a.f, c = r(i), l = {}, f = 0; c.length > f;) void 0 !== (n = u(i, e = c[f++])) && s(l, e, n);
            return l
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(131)(!1);
    i(i.S, "Object", {
        values: function (t) {
            return r(t)
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(131)(!0);
    i(i.S, "Object", {
        entries: function (t) {
            return r(t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(9), o = n(10), a = n(8);
    n(7) && i(i.P + n(67), "Object", {
        __defineGetter__: function (t, e) {
            a.f(r(this), t, {get: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(9), o = n(10), a = n(8);
    n(7) && i(i.P + n(67), "Object", {
        __defineSetter__: function (t, e) {
            a.f(r(this), t, {set: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(9), o = n(23), a = n(17), s = n(16).f;
    n(7) && i(i.P + n(67), "Object", {
        __lookupGetter__: function (t) {
            var e, n = r(this), i = o(t, !0);
            do {
                if (e = s(n, i)) return e.get
            } while (n = a(n))
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(9), o = n(23), a = n(17), s = n(16).f;
    n(7) && i(i.P + n(67), "Object", {
        __lookupSetter__: function (t) {
            var e, n = r(this), i = o(t, !0);
            do {
                if (e = s(n, i)) return e.set
            } while (n = a(n))
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.P + i.R, "Map", {toJSON: n(132)("Map")})
}, function (t, e, n) {
    var i = n(0);
    i(i.P + i.R, "Set", {toJSON: n(132)("Set")})
}, function (t, e, n) {
    n(68)("Map")
}, function (t, e, n) {
    n(68)("Set")
}, function (t, e, n) {
    n(68)("WeakMap")
}, function (t, e, n) {
    n(68)("WeakSet")
}, function (t, e, n) {
    n(69)("Map")
}, function (t, e, n) {
    n(69)("Set")
}, function (t, e, n) {
    n(69)("WeakMap")
}, function (t, e, n) {
    n(69)("WeakSet")
}, function (t, e, n) {
    var i = n(0);
    i(i.G, {global: n(2)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "System", {global: n(2)})
}, function (t, e, n) {
    var i = n(0), r = n(20);
    i(i.S, "Error", {
        isError: function (t) {
            return "Error" === r(t)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        clamp: function (t, e, n) {
            return Math.min(n, Math.max(e, t))
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {DEG_PER_RAD: Math.PI / 180})
}, function (t, e, n) {
    var i = n(0), r = 180 / Math.PI;
    i(i.S, "Math", {
        degrees: function (t) {
            return t * r
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(134), o = n(113);
    i(i.S, "Math", {
        fscale: function (t, e, n, i, a) {
            return o(r(t, e, n, i, a))
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        iaddh: function (t, e, n, i) {
            var r = t >>> 0, o = n >>> 0;
            return (e >>> 0) + (i >>> 0) + ((r & o | (r | o) & ~(r + o >>> 0)) >>> 31) | 0
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        isubh: function (t, e, n, i) {
            var r = t >>> 0, o = n >>> 0;
            return (e >>> 0) - (i >>> 0) - ((~r & o | ~(r ^ o) & r - o >>> 0) >>> 31) | 0
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        imulh: function (t, e) {
            var n = +t, i = +e, r = 65535 & n, o = 65535 & i, a = n >> 16, s = i >> 16,
                u = (a * o >>> 0) + (r * o >>> 16);
            return a * s + (u >> 16) + ((r * s >>> 0) + (65535 & u) >> 16)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {RAD_PER_DEG: 180 / Math.PI})
}, function (t, e, n) {
    var i = n(0), r = Math.PI / 180;
    i(i.S, "Math", {
        radians: function (t) {
            return t * r
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {scale: n(134)})
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        umulh: function (t, e) {
            var n = +t, i = +e, r = 65535 & n, o = 65535 & i, a = n >>> 16, s = i >>> 16,
                u = (a * o >>> 0) + (r * o >>> 16);
            return a * s + (u >>> 16) + ((r * s >>> 0) + (65535 & u) >>> 16)
        }
    })
}, function (t, e, n) {
    var i = n(0);
    i(i.S, "Math", {
        signbit: function (t) {
            return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(18), o = n(2), a = n(53), s = n(121);
    i(i.P + i.R, "Promise", {
        finally: function (t) {
            var e = a(this, r.Promise || o.Promise), n = "function" == typeof t;
            return this.then(n ? function (n) {
                return s(e, t()).then((function () {
                    return n
                }))
            } : t, n ? function (n) {
                return s(e, t()).then((function () {
                    throw n
                }))
            } : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(95), o = n(120);
    i(i.S, "Promise", {
        try: function (t) {
            var e = r.f(this), n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = i.key, a = i.set;
    i.exp({
        defineMetadata: function (t, e, n, i) {
            a(t, e, r(n), o(i))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = i.key, a = i.map, s = i.store;
    i.exp({
        deleteMetadata: function (t, e) {
            var n = arguments.length < 3 ? void 0 : o(arguments[2]), i = a(r(e), n, !1);
            if (void 0 === i || !i.delete(t)) return !1;
            if (i.size) return !0;
            var u = s.get(e);
            return u.delete(n), !!u.size || s.delete(e)
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = n(17), a = i.has, s = i.get, u = i.key, c = function t(e, n, i) {
        if (a(e, n, i)) return s(e, n, i);
        var r = o(n);
        return null !== r ? t(e, r, i) : void 0
    };
    i.exp({
        getMetadata: function (t, e) {
            return c(t, r(e), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}, function (t, e, n) {
    var i = n(124), r = n(133), o = n(29), a = n(1), s = n(17), u = o.keys, c = o.key, l = function t(e, n) {
        var o = u(e, n), a = s(e);
        if (null === a) return o;
        var c = t(a, n);
        return c.length ? o.length ? r(new i(o.concat(c))) : c : o
    };
    o.exp({
        getMetadataKeys: function (t) {
            return l(a(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = i.get, a = i.key;
    i.exp({
        getOwnMetadata: function (t, e) {
            return o(t, r(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = i.keys, a = i.key;
    i.exp({
        getOwnMetadataKeys: function (t) {
            return o(r(t), arguments.length < 2 ? void 0 : a(arguments[1]))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = n(17), a = i.has, s = i.key, u = function t(e, n, i) {
        if (a(e, n, i)) return !0;
        var r = o(n);
        return null !== r && t(e, r, i)
    };
    i.exp({
        hasMetadata: function (t, e) {
            return u(t, r(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = i.has, a = i.key;
    i.exp({
        hasOwnMetadata: function (t, e) {
            return o(t, r(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function (t, e, n) {
    var i = n(29), r = n(1), o = n(10), a = i.key, s = i.set;
    i.exp({
        metadata: function (t, e) {
            return function (n, i) {
                s(t, e, (void 0 !== i ? r : o)(n), a(i))
            }
        }
    })
}, function (t, e, n) {
    var i = n(0), r = n(94)(), o = n(2).process, a = "process" == n(20)(o);
    i(i.G, {
        asap: function (t) {
            var e = a && o.domain;
            r(e ? e.bind(t) : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), r = n(2), o = n(18), a = n(94)(), s = n(5)("observable"), u = n(10), c = n(1), l = n(40), f = n(42),
        h = n(11), d = n(41), p = d.RETURN, v = function (t) {
            return null == t ? void 0 : u(t)
        }, g = function (t) {
            var e = t._c;
            e && (t._c = void 0, e())
        }, y = function (t) {
            return void 0 === t._o
        }, m = function (t) {
            y(t) || (t._o = void 0, g(t))
        }, b = function (t, e) {
            c(t), this._c = void 0, this._o = t, t = new _(this);
            try {
                var n = e(t), i = n;
                null != n && ("function" == typeof n.unsubscribe ? n = function () {
                    i.unsubscribe()
                } : u(n), this._c = n)
            } catch (e) {
                return void t.error(e)
            }
            y(this) && g(this)
        };
    b.prototype = f({}, {
        unsubscribe: function () {
            m(this)
        }
    });
    var _ = function (t) {
        this._s = t
    };
    _.prototype = f({}, {
        next: function (t) {
            var e = this._s;
            if (!y(e)) {
                var n = e._o;
                try {
                    var i = v(n.next);
                    if (i) return i.call(n, t)
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
            }
        }, error: function (t) {
            var e = this._s;
            if (y(e)) throw t;
            var n = e._o;
            e._o = void 0;
            try {
                var i = v(n.error);
                if (!i) throw t;
                t = i.call(n, t)
            } catch (t) {
                try {
                    g(e)
                } finally {
                    throw t
                }
            }
            return g(e), t
        }, complete: function (t) {
            var e = this._s;
            if (!y(e)) {
                var n = e._o;
                e._o = void 0;
                try {
                    var i = v(n.complete);
                    t = i ? i.call(n, t) : void 0
                } catch (t) {
                    try {
                        g(e)
                    } finally {
                        throw t
                    }
                }
                return g(e), t
            }
        }
    });
    var x = function (t) {
        l(this, x, "Observable", "_f")._f = u(t)
    };
    f(x.prototype, {
        subscribe: function (t) {
            return new b(t, this._f)
        }, forEach: function (t) {
            var e = this;
            return new (o.Promise || r.Promise)((function (n, i) {
                u(t);
                var r = e.subscribe({
                    next: function (e) {
                        try {
                            return t(e)
                        } catch (t) {
                            i(t), r.unsubscribe()
                        }
                    }, error: i, complete: n
                })
            }))
        }
    }), f(x, {
        from: function (t) {
            var e = "function" == typeof this ? this : x, n = v(c(t)[s]);
            if (n) {
                var i = c(n.call(t));
                return i.constructor === e ? i : new e((function (t) {
                    return i.subscribe(t)
                }))
            }
            return new e((function (e) {
                var n = !1;
                return a((function () {
                    if (!n) {
                        try {
                            if (d(t, !1, (function (t) {
                                if (e.next(t), n) return p
                            })) === p) return
                        } catch (t) {
                            if (n) throw t;
                            return void e.error(t)
                        }
                        e.complete()
                    }
                })), function () {
                    n = !0
                }
            }))
        }, of: function () {
            for (var t = 0, e = arguments.length, n = new Array(e); t < e;) n[t] = arguments[t++];
            return new ("function" == typeof this ? this : x)((function (t) {
                var e = !1;
                return a((function () {
                    if (!e) {
                        for (var i = 0; i < n.length; ++i) if (t.next(n[i]), e) return;
                        t.complete()
                    }
                })), function () {
                    e = !0
                }
            }))
        }
    }), h(x.prototype, s, (function () {
        return this
    })), i(i.G, {Observable: x}), n(39)("Observable")
}, function (t, e, n) {
    var i = n(2), r = n(0), o = n(64), a = [].slice, s = /MSIE .\./.test(o), u = function (t) {
        return function (e, n) {
            var i = arguments.length > 2, r = !!i && a.call(arguments, 2);
            return t(i ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, r)
            } : e, n)
        }
    };
    r(r.G + r.B + r.F * s, {setTimeout: u(i.setTimeout), setInterval: u(i.setInterval)})
}, function (t, e, n) {
    var i = n(0), r = n(93);
    i(i.G + i.B, {setImmediate: r.set, clearImmediate: r.clear})
}, function (t, e, n) {
    for (var i = n(90), r = n(35), o = n(12), a = n(2), s = n(11), u = n(47), c = n(5), l = c("iterator"), f = c("toStringTag"), h = u.Array, d = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, p = r(d), v = 0; v < p.length; v++) {
        var g, y = p[v], m = d[y], b = a[y], _ = b && b.prototype;
        if (_ && (_[l] || s(_, l, h), _[f] || s(_, f, y), u[y] = h, m)) for (g in i) _[g] || o(_, g, i[g], !0)
    }
}, function (t, e, n) {
    (function (t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        !function (t) {
            "use strict";
            var i = Object.prototype, r = i.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator",
                u = o.toStringTag || "@@toStringTag", c = "object" === n(e), l = t.regeneratorRuntime;
            if (l) c && (e.exports = l); else {
                (l = t.regeneratorRuntime = c ? e.exports : {}).wrap = g;
                var f = {}, h = {};
                h[a] = function () {
                    return this
                };
                var d = Object.getPrototypeOf, p = d && d(d(M([])));
                p && p !== i && r.call(p, a) && (h = p);
                var v = _.prototype = m.prototype = Object.create(h);
                b.prototype = v.constructor = _, _.constructor = b, _[u] = b.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(v), t
                }, l.awrap = function (t) {
                    return {__await: t}
                }, x(w.prototype), w.prototype[s] = function () {
                    return this
                }, l.AsyncIterator = w, l.async = function (t, e, n, i) {
                    var r = new w(g(t, e, n, i));
                    return l.isGeneratorFunction(e) ? r : r.next().then((function (t) {
                        return t.done ? t.value : r.next()
                    }))
                }, x(v), v[u] = "Generator", v[a] = function () {
                    return this
                }, v.toString = function () {
                    return "[object Generator]"
                }, l.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(), function n() {
                        for (; e.length;) {
                            var i = e.pop();
                            if (i in t) return n.value = i, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
                }, l.values = M, O.prototype = {
                    constructor: O, reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t) for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, i) {
                            return a.type = "throw", a.arg = t, e.next = n, i && (e.method = "next", e.arg = void 0), !!i
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i], a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"), u = r.call(o, "finallyLoc");
                                if (s && u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), f
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    E(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: M(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }
            }

            function g(t, e, n, i) {
                var r = e && e.prototype instanceof m ? e : m, o = Object.create(r.prototype), a = new O(i || []);
                return o._invoke = function (t, e, n) {
                    var i = "suspendedStart";
                    return function (r, o) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === r) throw o;
                            return T()
                        }
                        for (n.method = r, n.arg = o; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = k(a, n);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === i) throw i = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = "executing";
                            var u = y(t, e, n);
                            if ("normal" === u.type) {
                                if (i = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                return {value: u.arg, done: n.done}
                            }
                            "throw" === u.type && (i = "completed", n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), o
            }

            function y(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function m() {
            }

            function b() {
            }

            function _() {
            }

            function x(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                }))
            }

            function w(e) {
                function i(t, o, a, s) {
                    var u = y(e[t], e, o);
                    if ("throw" !== u.type) {
                        var c = u.arg, l = c.value;
                        return l && "object" === n(l) && r.call(l, "__await") ? Promise.resolve(l.__await).then((function (t) {
                            i("next", t, a, s)
                        }), (function (t) {
                            i("throw", t, a, s)
                        })) : Promise.resolve(l).then((function (t) {
                            c.value = t, a(c)
                        }), s)
                    }
                    s(u.arg)
                }

                var o;
                "object" === n(t.process) && t.process.domain && (i = t.process.domain.bind(i)), this._invoke = function (t, e) {
                    function n() {
                        return new Promise((function (n, r) {
                            i(t, e, n, r)
                        }))
                    }

                    return o = o ? o.then(n, n) : n()
                }
            }

            function k(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return f;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return f
                }
                var i = y(n, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;
                var r = i.arg;
                return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
            }

            function S(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function E(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function O(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(S, this), this.reset(!0)
            }

            function M(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1, i = function e() {
                            for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                        return i.next = i
                    }
                }
                return {next: T}
            }

            function T() {
                return {value: void 0, done: !0}
            }
        }("object" === (void 0 === t ? "undefined" : n(t)) ? t : "object" === ("undefined" == typeof window ? "undefined" : n(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : n(self)) ? self : this)
    }).call(this, n(55), n(98)(t))
}, function (t, e, n) {
    n(345), t.exports = n(18).RegExp.escape
}, function (t, e, n) {
    var i = n(0), r = n(346)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    i(i.S, "RegExp", {
        escape: function (t) {
            return r(t)
        }
    })
}, function (t, e) {
    t.exports = function (t, e) {
        var n = e === Object(e) ? function (t) {
            return e[t]
        } : e;
        return function (e) {
            return String(e).replace(t, n)
        }
    }
}]);