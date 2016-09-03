(function() {}).call(this), /*!
 * jQuery JavaScript Library v1.12.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:07Z
 */
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" === n || ft.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (ft.isFunction(e))
            return ft.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return ft.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (Ct.test(e))
                return ft.filter(e, t, n);
            e = ft.filter(e, t)
        }
        return ft.grep(t, function(t) {
            return ft.inArray(t, e) > -1 !== n
        })
    }
    function o(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function r(t) {
        var e = {};
        return ft.each(t.match(Dt) || [], function(t, n) {
            e[n] = !0
        }), e
    }
    function s() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), ft.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(It, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ot.test(n) ? ft.parseJSON(n) : n
                } catch (o) {}
                ft.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (Lt(t)) {
            var o,
                r,
                s = ft.expando,
                a = t.nodeType,
                l = a ? ft.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = a ? t[s] = nt.pop() || ft.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: ft.noop
                }), "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ft.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[ft.camelCase(e)])) : o = r, o
        }
    }
    function d(t, e, n) {
        if (Lt(t)) {
            var i,
                o,
                r = t.nodeType,
                s = r ? ft.cache : t,
                a = r ? t[ft.expando] : ft.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    ft.isArray(e) ? e = e.concat(ft.map(e, ft.camelCase)) : e in i ? e = [e] : (e = ft.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;)
                        delete i[e[o]];
                    if (n ? !u(i) : !ft.isEmptyObject(i))
                        return
                }
                (n || (delete s[a].data, u(s[a]))) && (r ? ft.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    function p(t, e, n, i) {
        var o,
            r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== u && +l) && Rt.exec(ft.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do r = r || ".5", c /= r, ft.style(t, e, c + u);
            while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }
    function f(t) {
        var e = Ut.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }
    function h(t, e) {
        var n,
            i,
            o = 0,
            r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)
                !e || ft.nodeName(i, e) ? r.push(i) : ft.merge(r, h(i, e));
        return void 0 === e || e && ft.nodeName(t, e) ? ft.merge([t], r) : r
    }
    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
    }
    function m(t) {
        Ft.test(t.type) && (t.defaultChecked = t.checked)
    }
    function v(t, e, n, i, o) {
        for (var r, s, a, l, u, c, d, p = t.length, v = f(e), y = [], b = 0; p > b; b++)
            if (s = t[b], s || 0 === s)
                if ("object" === ft.type(s))
                    ft.merge(y, s.nodeType ? [s] : s);
                else if (Xt.test(s)) {
                    for (l = l || v.appendChild(e.createElement("div")), u = (Mt.exec(s) || ["", ""])[1].toLowerCase(), d = zt[u] || zt._default, l.innerHTML = d[1] + ft.htmlPrefilter(s) + d[2], r = d[0]; r--;)
                        l = l.lastChild;
                    if (!dt.leadingWhitespace && Bt.test(s) && y.push(e.createTextNode(Bt.exec(s)[0])), !dt.tbody)
                        for (s = "table" !== u || Vt.test(s) ? "<table>" !== d[1] || Vt.test(s) ? 0 : l : l.firstChild, r = s && s.childNodes.length; r--;)
                            ft.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ft.merge(y, l.childNodes), l.textContent = ""; l.firstChild;)
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(e.createTextNode(s));
        for (l && v.removeChild(l), dt.appendChecked || ft.grep(h(y, "input"), m), b = 0; s = y[b++];)
            if (i && ft.inArray(s, i) > -1)
                o && o.push(s);
            else if (a = ft.contains(s.ownerDocument, s), l = h(v.appendChild(s), "script"), a && g(l), n)
                for (r = 0; s = l[r++];)
                    Wt.test(s.type || "") && n.push(s);
        return l = null, v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return it.activeElement
        } catch (t) {}
    }
    function w(t, e, n, i, o, r) {
        var s,
            a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e)
                w(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1)
            o = b;
        else if (!o)
            return t;
        return 1 === r && (s = o, o = function(t) {
            return ft().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, o, i, n)
        })
    }
    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function C(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }
    function E(t) {
        var e = oe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function k(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n,
                i,
                o,
                r = ft._data(t),
                s = ft._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++)
                        ft.event.add(e, n, a[n][i])
            }
            s.data && (s.data = ft.extend({}, s.data))
        }
    }
    function S(t, e) {
        var n,
            i,
            o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ft.expando]) {
                o = ft._data(e);
                for (i in o.events)
                    ft.removeEvent(e, i, o.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, E(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ft.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function N(t, e, n, i) {
        e = rt.apply([], e);
        var o,
            r,
            s,
            a,
            l,
            u,
            c = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            g = ft.isFunction(f);
        if (g || d > 1 && "string" == typeof f && !dt.checkClone && ie.test(f))
            return t.each(function(o) {
                var r = t.eq(o);
                g && (e[0] = f.call(this, o, r.html())), N(r, e, n, i)
            });
        if (d && (u = v(e, t[0].ownerDocument, !1, t, i), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || i)) {
            for (a = ft.map(h(u, "script"), C), s = a.length; d > c; c++)
                r = u, c !== p && (r = ft.clone(r, !0, !0), s && ft.merge(a, h(r, "script"))), n.call(t[c], r, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ft.map(a, E), c = 0; s > c; c++)
                    r = a[c], Wt.test(r.type || "") && !ft._data(r, "globalEval") && ft.contains(l, r) && (r.src ? ft._evalUrl && ft._evalUrl(r.src) : ft.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
            u = o = null
        }
        return t
    }
    function $(t, e, n) {
        for (var i, o = e ? ft.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || ft.cleanData(h(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && g(h(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    function D(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            i = ft.css(n[0], "display");
        return n.detach(), i
    }
    function A(t) {
        var e = it,
            n = ue[t];
        return n || (n = D(t, e), "none" !== n && n || (le = (le || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = D(t, e), le.detach()), ue[t] = n), n
    }
    function j(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function L(t) {
        if (t in Ee)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
            if (t = Ce[n] + e, t in Ee)
                return t
    }
    function O(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
            i = t[s], i.style && (r[s] = ft._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && qt(i) && (r[s] = ft._data(i, "olddisplay", A(i.nodeName)))) : (o = qt(i), (n && "none" !== n || !o) && ft._data(i, "olddisplay", o ? n : ft.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }
    function I(t, e, n) {
        var i = xe.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function H(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
            "margin" === n && (s += ft.css(t, n + _t[r], !0, o)), i ? ("content" === n && (s -= ft.css(t, "padding" + _t[r], !0, o)), "margin" !== n && (s -= ft.css(t, "border" + _t[r] + "Width", !0, o))) : (s += ft.css(t, "padding" + _t[r], !0, o), "padding" !== n && (s += ft.css(t, "border" + _t[r] + "Width", !0, o)));
        return s
    }
    function R(e, n, i) {
        var o = !0,
            r = "width" === n ? e.offsetWidth : e.offsetHeight,
            s = he(e),
            a = dt.boxSizing && "border-box" === ft.css(e, "boxSizing", !1, s);
        if (it.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= r || null == r) {
            if (r = ge(e, n, s), (0 > r || null == r) && (r = e.style[n]), de.test(r))
                return r;
            o = a && (dt.boxSizingReliable() || r === e.style[n]), r = parseFloat(r) || 0
        }
        return r + H(e, n, i || (a ? "border" : "content"), o, s) + "px"
    }
    function _(t, e, n, i, o) {
        return new _.prototype.init(t, e, n, i, o)
    }
    function q() {
        return t.setTimeout(function() {
            ke = void 0
        }), ke = ft.now()
    }
    function P(t, e) {
        var n,
            i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)
            n = _t[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function F(t, e, n) {
        for (var i, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function M(t, e, n) {
        var i,
            o,
            r,
            s,
            a,
            l,
            u,
            c,
            d = this,
            p = {},
            f = t.style,
            h = t.nodeType && qt(t),
            g = ft._data(t, "fxshow");
        n.queue || (a = ft._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, ft.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ft.css(t, "display"), c = "none" === u ? ft._data(t, "olddisplay") || A(t.nodeName) : u, "inline" === c && "none" === ft.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", dt.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i], Ne.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i])
                        continue;
                    h = !0
                }
                p[i] = g && g[i] || ft.style(t, i)
            } else
                u = void 0;
        if (ft.isEmptyObject(p))
            "inline" === ("none" === u ? A(t.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ft._data(t, "fxshow", {}), r && (g.hidden = !h), h ? ft(t).show() : d.done(function() {
                ft(t).hide()
            }), d.done(function() {
                var e;
                ft._removeData(t, "fxshow");
                for (e in p)
                    ft.style(t, e, p[e])
            });
            for (i in p)
                s = F(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function W(t, e) {
        var n,
            i,
            o,
            r,
            s;
        for (n in t)
            if (i = ft.camelCase(n), o = e[i], r = t[n], ft.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = ft.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r)
                    n in t || (t[n] = r[n], e[n] = o)
            } else
                e[i] = o
    }
    function B(t, e, n) {
        var i,
            o,
            r = 0,
            s = B.prefilters.length,
            a = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o)
                    return !1;
                for (var e = ke || q(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++)
                    u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ft.extend({}, e),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ke || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ft.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; i > n; n++)
                        u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (W(c, u.opts.specialEasing); s > r; r++)
            if (i = B.prefilters[r].call(u, t, c, u.opts))
                return ft.isFunction(i.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(i.stop, i)), i;
        return ft.map(c, F, u), ft.isFunction(u.opts.start) && u.opts.start.call(t, u), ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function U(t) {
        return ft.attr(t, "class") || ""
    }
    function z(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i,
                o = 0,
                r = e.toLowerCase().match(Dt) || [];
            if (ft.isFunction(n))
                for (; i = r[o++];)
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function X(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, ft.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = t === Ge;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function V(t, e) {
        var n,
            i,
            o = ft.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }
    function Q(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
            l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n)
            r = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }
    function Y(t, e, n, i) {
        var o,
            r,
            s,
            a,
            l,
            u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (s = u[l + " " + r] || u["* " + r], !s)
                        for (o in u)
                            if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: s ? d : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function J(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }
    function G(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === J(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function K(t, e, n, i) {
        var o;
        if (ft.isArray(e))
            ft.each(e, function(e, o) {
                n || nn.test(t) ? i(t, o) : K(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== ft.type(e))
            i(t, e);
        else
            for (o in e)
                K(t + "[" + o + "]", e[o], n, i)
    }
    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var nt = [],
        it = t.document,
        ot = nt.slice,
        rt = nt.concat,
        st = nt.push,
        at = nt.indexOf,
        lt = {},
        ut = lt.toString,
        ct = lt.hasOwnProperty,
        dt = {},
        pt = "1.12.1",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        mt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: pt,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : ot.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t,
            e,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o)
                    t = s[i], n = o[i], s !== n && (u && n && (ft.isPlainObject(n) || (e = ft.isArray(n))) ? (e ? (e = !1, r = t && ft.isArray(t) ? t : []) : r = t && ft.isPlainObject(t) ? t : {}, s[i] = ft.extend(u, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, ft.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t)
                    return ct.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ft.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(mt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i,
                o = 0;
            if (n(t))
                for (i = t.length; i > o && e.call(t[o], o, t[o]) !== !1; o++)
                    ;
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ht, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (at)
                    return at.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i;)
                t[o++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];)
                    t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)
                i = !e(t[r], r), i !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o,
                r,
                s = 0,
                a = [];
            if (n(t))
                for (o = t.length; o > s; s++)
                    r = e(t[s], s, i), null != r && a.push(r);
            else
                for (s in t)
                    r = e(t[s], s, i), null != r && a.push(r);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n,
                i,
                o;
            return "string" == typeof e && (o = t[e], e = t, t = o), ft.isFunction(t) ? (n = ot.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(ot.call(arguments)))
            }, i.guid = t.guid = t.guid || ft.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = /*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
    function(t) {
        function e(t, e, n, i) {
            var o,
                r,
                s,
                a,
                l,
                u,
                d,
                f,
                h = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!i && ((e ? e.ownerDocument || e : F) !== L && j(e), e = e || L, I)) {
                if (11 !== g && (u = vt.exec(t)))
                    if (o = u[1]) {
                        if (9 === g) {
                            if (!(s = e.getElementById(o)))
                                return n;
                            if (s.id === o)
                                return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && q(e, s) && s.id === o)
                            return n.push(s), n
                    } else {
                        if (u[2])
                            return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = u[3]) && w.getElementsByClassName && e.getElementsByClassName)
                            return K.apply(n, e.getElementsByClassName(o)), n
                    }
                if (w.qsa && !z[t + " "] && (!H || !H.test(t))) {
                    if (1 !== g)
                        h = e, f = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = P), d = k(t), r = d.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--;)
                            d[r] = l + " " + p(d[r]);
                        f = d.join(","), h = yt.test(t) && c(e.parentNode) || e
                    }
                    if (f)
                        try {
                            return K.apply(n, h.querySelectorAll(f)), n
                        } catch (m) {} finally {
                            a === P && e.removeAttribute("id")
                        }
                }
            }
            return N(t.replace(at, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[P] = !0, t
        }
        function o(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)
                T.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;)
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}
        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function f(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                r = W++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o)
                        return t(e, n, r)
            } : function(e, n, s) {
                var a,
                    l,
                    u,
                    c = [M, r];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if (u = e[P] || (e[P] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === M && a[1] === r)
                                return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function g(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++)
                e(t, n[o], i);
            return i
        }
        function m(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
            return s
        }
        function v(t, e, n, o, r, s) {
            return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, s)), i(function(i, s, a, l) {
                var u,
                    c,
                    d,
                    p = [],
                    f = [],
                    h = s.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : m(v, p, t, a, l),
                    b = n ? r || (i ? t : h || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (u = m(b, f), o(u, [], a, l), c = u.length; c--;)
                        (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = b.length; c--;)
                                (d = b[c]) && u.push(y[c] = d);
                            r(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)
                            (d = b[c]) && (u = r ? tt(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else
                    b = m(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), u = f(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, n, i) {
                    var o = !r && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, o
                }]; o > a; a++)
                if (n = T.relative[t[a].type])
                    c = [f(h(c), n)];
                else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                        for (i = ++a; o > i && !T.relative[t[i].type]; i++)
                            ;
                        return v(a > 1 && h(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(t, n) {
            var o = n.length > 0,
                r = t.length > 0,
                s = function(i, s, a, l, u) {
                    var c,
                        d,
                        p,
                        f = 0,
                        h = "0",
                        g = i && [],
                        v = [],
                        y = $,
                        b = i || r && T.find.TAG("*", u),
                        x = M += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && ($ = s === L || s || u); h !== w && null != (c = b[h]); h++) {
                        if (r && c) {
                            for (d = 0, s || c.ownerDocument === L || (j(c), a = !I); p = t[d++];)
                                if (p(c, s || L, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (M = x)
                        }
                        o && ((c = !p && c) && f--, i && g.push(c))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];)
                            p(g, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;)
                                    g[h] || v[h] || (v[h] = J.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (M = x, $ = y), g
                };
            return o ? i(s) : s
        }
        var x,
            w,
            T,
            C,
            E,
            k,
            S,
            N,
            $,
            D,
            A,
            j,
            L,
            O,
            I,
            H,
            R,
            _,
            q,
            P = "sizzle" + 1 * new Date,
            F = t.document,
            M = 0,
            W = 0,
            B = n(),
            U = n(),
            z = n(),
            X = function(t, e) {
                return t === e && (A = !0), 0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            G = Y.push,
            K = Y.push,
            Z = Y.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e)
                        return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(rt),
            pt = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ht = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Tt = function() {
                j()
            };
        try {
            K.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: Y.length ? function(t, e) {
                    G.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];)
                        ;
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, j = e.setDocument = function(t) {
            var e,
                n,
                i = t ? t.ownerDocument || t : F;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, O = L.documentElement, I = !E(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(L.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = mt.test(L.getElementsByClassName), w.getById = o(function(t) {
                return O.appendChild(t).id = P, !L.getElementsByName || !L.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, T.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), T.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n,
                    i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, T.find.CLASS = w.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
            }, R = [], H = [], (w.qsa = mt.test(L.querySelectorAll)) && (o(function(t) {
                O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + P + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || H.push(".#.+[+~]")
            }), o(function(t) {
                var e = L.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = mt.test(_ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = _.call(t, "div"), _.call(t, "[s!='']:x"), R.push("!=", rt)
            }), H = H.length && new RegExp(H.join("|")), R = R.length && new RegExp(R.join("|")), e = mt.test(O.compareDocumentPosition), q = e || mt.test(O.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e)
                    return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === L || t.ownerDocument === F && q(F, t) ? -1 : e === L || e.ownerDocument === F && q(F, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e)
                    return A = !0, 0;
                var n,
                    i = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e];
                if (!o || !r)
                    return t === L ? -1 : e === L ? 1 : o ? -1 : r ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                if (o === r)
                    return s(t, e);
                for (n = t; n = n.parentNode;)
                    a.unshift(n);
                for (n = e; n = n.parentNode;)
                    l.unshift(n);
                for (; a[i] === l[i];)
                    i++;
                return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
            }, L) : L
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && j(t), n = n.replace(ct, "='$1']"), w.matchesSelector && I && !z[n + " "] && (!R || !R.test(n)) && (!H || !H.test(n)))
                try {
                    var i = _.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (o) {}
            return e(n, L, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && j(t), q(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && j(t);
            var n = T.attrHandle[e.toLowerCase()],
                i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e,
                n = [],
                i = 0,
                o = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(X), A) {
                for (; e = t[o++];)
                    e === t[o] && (i = n.push(o));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return D = null, t
        }, C = e.getText = function(t) {
            var e,
                n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[i++];)
                    n += C(e);
            return n
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e,
                        n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (p = m, d = p[P] || (p[P] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], f = u[0] === M && u[1], b = f && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === e) {
                                        c[t] = [M, f, b];
                                        break
                                    }
                            } else if (y && (p = e, d = p[P] || (p[P] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[t] || [], f = u[0] === M && u[1], b = f), b === !1)
                                for (; (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[P] || (p[P] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[t] = [M, b]), p !== e));)
                                    ;
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o,
                        r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), s = o.length; s--;)
                            i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = S(t.replace(at, "$1"));
                    return o[P] ? i(function(t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--;)
                            (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xt, wt), function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(), function(e) {
                        var n;
                        do if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                            return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === O
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, k = e.tokenize = function(t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                u,
                c = U[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in T.filter)
                    !(o = ft[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, S = e.compile = function(t, e) {
            var n,
                i = [],
                o = [],
                r = z[t + " "];
            if (!r) {
                for (e || (e = k(t)), n = e.length; n--;)
                    r = y(e[n]), r[P] ? i.push(r) : o.push(r);
                r = z(t, b(o, i)), r.selector = t
            }
            return r
        }, N = e.select = function(t, e, n, i) {
            var o,
                r,
                s,
                a,
                l,
                u = "function" == typeof t && t,
                d = !i && k(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && I && T.relative[r[1].type]) {
                    if (e = (T.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && p(r), !t)
                            return K.apply(n, i), n;
                        break
                    }
            }
            return (u || S(t, d))(i, e, !I, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = P.split("").sort(X).join("") === P, w.detectDuplicates = !!A, j(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains;
    var bt = function(t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && ft(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = ft.expr.match.needsContext,
        Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ct = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e,
                n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t)
                return this.pushStack(ft(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ft.contains(i[e], this))
                            return !0
                }));
            for (e = 0; o > e; e++)
                ft.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? ft.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var Et,
        kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        St = ft.fn.init = function(t, e, n) {
            var i,
                o;
            if (!t)
                return this;
            if (n = n || Et, "string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : kt.exec(t), !i || !i[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Tt.test(i[1]) && ft.isPlainObject(e))
                        for (i in e)
                            ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (o = it.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])
                        return Et.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = it, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
        };
    St.prototype = ft.fn, Et = ft(it);
    var Nt = /^(?:parents|prev(?:Until|All))/,
        $t = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e,
                n = ft(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (ft.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], s = wt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var o = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), this.length > 1 && ($t[t] || (o = ft.uniqueSort(o)), Nt.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var Dt = /\S+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? r(t) : ft.extend({}, t);
        var e,
            n,
            i,
            o,
            s = [],
            a = [],
            l = -1,
            u = function() {
                for (o = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;)
                        s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        ft.each(e, function(e, n) {
                            ft.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ft.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function() {
                    return ft.each(arguments, function(t, e) {
                        for (var n; (n = ft.inArray(e, s, n)) > -1;)
                            s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(t) {
                    return t ? ft.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, ft.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ft.Callbacks("once memory"), "resolved"], ["reject", "fail", ft.Callbacks("once memory"), "rejected"], ["notify", "progress", ft.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ft.Deferred(function(n) {
                            ft.each(e, function(e, r) {
                                var s = ft.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && ft.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ft.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ft.each(e, function(t, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e,
                n,
                i,
                o = 0,
                r = ot.call(arguments),
                s = r.length,
                a = 1 !== s || t && ft.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : ft.Deferred(),
                u = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)
                    r[o] && ft.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(l.reject) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var At;
    ft.fn.ready = function(t) {
        return ft.ready.promise().done(t), this
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, t !== !0 && --ft.readyWait > 0 || (At.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready"))))
        }
    }), ft.ready.promise = function(e) {
        if (!At)
            if (At = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll)
                t.setTimeout(ft.ready);
            else if (it.addEventListener)
                it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
            else {
                it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (i) {}
                n && n.doScroll && !function o() {
                    if (!ft.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return t.setTimeout(o, 50)
                        }
                        s(), ft.ready()
                    }
                }()
            }
        return At.promise(e)
    }, ft.ready.promise();
    var jt;
    for (jt in ft(dt))
        break;
    dt.ownFirst = "0" === jt, dt.inlineBlockNeedsLayout = !1, ft(function() {
        var t,
            e,
            n,
            i;
        n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function() {
        var t = it.createElement("div");
        dt.deleteExpando = !0;
        try {
            delete t.test
        } catch (e) {
            dt.deleteExpando = !1
        }
        t = null
    }();
    var Lt = function(t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        },
        Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        It = /([A-Z])/g;
    ft.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando], !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var n,
                i,
                o,
                r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = ft.data(r), 1 === r.nodeType && !ft._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), l(r, i, o[i])));
                    ft._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ft.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ft.data(this, t, e)
            }) : r ? l(r, t, ft.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                ft.removeData(this, t)
            })
        }
    }), ft.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ft._queueHooks(t, e),
                s = function() {
                    ft.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ft._data(t, n) || ft._data(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        ft._removeData(t, e + "queue"), ft._removeData(t, n)
                    })
                })
        }
    }), ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n,
                i = 1,
                o = ft.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = ft._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    }), function() {
        var t;
        dt.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t = !1;
            var e,
                n,
                i;
            return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var Ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Rt = new RegExp("^(?:([+-])=|)(" + Ht + ")([a-z%]*)$", "i"),
        _t = ["Top", "Right", "Bottom", "Left"],
        qt = function(t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Pt = function(t, e, n, i, o, r, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === ft.type(n)) {
                o = !0;
                for (a in n)
                    Pt(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                return u.call(ft(t), n)
            })), e))
                for (; l > a; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
        },
        Ft = /^(?:checkbox|radio)$/i,
        Mt = /<([\w:-]+)/,
        Wt = /^$|\/(?:java|ecma)script/i,
        Bt = /^\s+/,
        Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var t = it.createElement("div"),
            e = it.createDocumentFragment(),
            n = it.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === t.firstChild.nodeType, dt.tbody = !t.getElementsByTagName("tbody").length, dt.htmlSerialize = !!t.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), dt.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!t.addEventListener, t[ft.expando] = 1, dt.attributes = !t.getAttribute(ft.expando)
    }();
    var zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
    var Xt = /<|&#?\w+;/,
        Vt = /<tbody/i;
    !function() {
        var e,
            n,
            i = it.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = i.attributes[n].expando === !1);
        i = null
    }();
    var Qt = /^(?:input|select|textarea)$/i,
        Yt = /^key/,
        Jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Gt = /^(?:focusinfocus|focusoutblur)$/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r,
                s,
                a,
                l,
                u,
                c,
                d,
                p,
                f,
                h,
                g,
                m = ft._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ft.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                    return "undefined" == typeof ft || t && ft.event.triggered === t.type ? void 0 : ft.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), e = (e || "").match(Dt) || [""], a = e.length; a--;)
                    r = Kt.exec(e[a]) || [], f = g = r[1], h = (r[2] || "").split(".").sort(), f && (u = ft.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ft.event.special[f] || {}, d = ft.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ft.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, i, h, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r,
                s,
                a,
                l,
                u,
                c,
                d,
                p,
                f,
                h,
                g,
                m = ft.hasData(t) && ft._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(Dt) || [""], u = e.length; u--;)
                    if (a = Kt.exec(e[u]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = ft.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)
                            s = p[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                        l && !p.length && (d.teardown && d.teardown.call(t, h, m.handle) !== !1 || ft.removeEvent(t, f, m.handle), delete c[f])
                    } else
                        for (f in c)
                            ft.event.remove(t, f + e[u], n, i, !0);
                ft.isEmptyObject(c) && (delete m.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var r,
                s,
                a,
                l,
                u,
                c,
                d,
                p = [i || it],
                f = ct.call(e, "type") ? e.type : e,
                h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Gt.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), u = ft.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !ft.isWindow(i)) {
                    for (l = u.delegateType || f, Gt.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a), c = a;
                    c === (i.ownerDocument || it) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (a = p[d++]) && !e.isPropagationStopped();)
                    e.type = d > 1 ? l : u.bindType || f, r = (ft._data(a, "events") || {})[e.type] && ft._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && Lt(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && Lt(i) && s && i[f] && !ft.isWindow(i)) {
                    c = i[s], c && (i[s] = null), ft.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    ft.event.triggered = void 0, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e,
                n,
                i,
                o,
                r,
                s = [],
                a = ot.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                u = ft.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = ft.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)
                        t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n,
                i,
                o,
                r,
                s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++)
                            r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? ft(o, this).index(l) > -1 : ft.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[ft.expando])
                return t;
            var e,
                n,
                i,
                o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Jt.test(o) ? this.mouseHooks : Yt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ft.Event(r), e = i.length; e--;)
                n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n,
                    i,
                    o,
                    r = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ft.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, ft.Event = function(t, e) {
        return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void (this[ft.expando] = !0)) : new ft.Event(t, e)
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n,
                    i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return o && (o === i || ft.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.submit || (ft.event.special.submit = {
        setup: function() {
            return ft.nodeName(this, "form") ? !1 : void ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : void 0;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return ft.nodeName(this, "form") ? !1 : void ft.event.remove(this, "._submit")
        }
    }), dt.change || (ft.event.special.change = {
        setup: function() {
            return Qt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1) : void ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Qt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ft.event.remove(this, "._change"), !Qt.test(this.nodeName)
        }
    }), dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t))
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ft._data(i, e);
                o || i.addEventListener(t, n, !0), ft._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ft._data(i, e) - 1;
                o ? ft._data(i, e, o) : (i.removeEventListener(t, n, !0), ft._removeData(i, e))
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i,
                o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? ft.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ne = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oe = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = f(it),
        ae = se.appendChild(it.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i,
                o,
                r,
                s,
                a,
                l = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(r = ae.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (i = h(r), a = h(t), s = 0; null != (o = a[s]); ++s)
                    i[s] && S(o, i[s]);
            if (e)
                if (n)
                    for (a = a || h(t), i = i || h(r), s = 0; null != (o = a[s]); s++)
                        k(o, i[s]);
                else
                    k(t, r);
            return i = h(r, "script"), i.length > 0 && g(i, !l && h(t, "script")), i = a = o = null, r
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, s = 0, a = ft.expando, l = ft.cache, u = dt.attributes, c = ft.event.special; null != (n = t[s]); s++)
                if ((e || Lt(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events)
                            c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(o))
                }
        }
    }), ft.fn.extend({
        domManip: N,
        detach: function(t) {
            return $(this, t, !0)
        },
        remove: function(t) {
            return $(this, t)
        },
        text: function(t) {
            return Pt(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return N(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(h(t, !1)); t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Pt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !Bt.test(t)) && !zt[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return N(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(h(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = ft(t), s = r.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0), ft(r[i])[e](n), st.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var le,
        ue = {
            HTML: "block",
            BODY: "block"
        },
        ce = /^margin/,
        de = new RegExp("^(" + Ht + ")(?!px)[a-z%]+$", "i"),
        pe = function(t, e, n, i) {
            var o,
                r,
                s = {};
            for (r in e)
                s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)
                t.style[r] = s[r];
            return o
        },
        fe = it.documentElement;
    !function() {
        function e() {
            var e,
                c,
                d = it.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, o = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = u.appendChild(it.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", r = 0 === u.getClientRects().length, r && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), d.removeChild(l)
        }
        var n,
            i,
            o,
            r,
            s,
            a,
            l = it.createElement("div"),
            u = it.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === u.style.opacity, dt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == n && e(), r
            },
            boxSizingReliable: function() {
                return null == n && e(), o
            },
            pixelMarginRight: function() {
                return null == n && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), s
            },
            reliableMarginLeft: function() {
                return null == n && e(), a
            }
        }))
    }();
    var he,
        ge,
        me = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (he = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, ge = function(t, e, n) {
        var i,
            o,
            r,
            s,
            a = t.style;
        return n = n || he(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), n && !dt.pixelMarginRight() && de.test(s) && ce.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : fe.currentStyle && (he = function(t) {
        return t.currentStyle
    }, ge = function(t, e, n) {
        var i,
            o,
            r,
            s,
            a = t.style;
        return n = n || he(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), de.test(s) && !me.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
        ye = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        xe = new RegExp("^(" + Ht + ")(.*)$", "i"),
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Te = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ce = ["Webkit", "O", "Moz", "ms"],
        Ee = it.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ge(t, "opacity");
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
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    r,
                    s,
                    a = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n)
                    return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                if (r = typeof n, "string" === r && (o = Rt.exec(n)) && o[1] && (n = p(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ft.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                    try {
                        l[e] = n
                    } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var o,
                r,
                s,
                a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = L(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = ge(t, e, i)), "normal" === r && e in Te && (r = Te[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ft.each(["height", "width"], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? be.test(ft.css(t, "display")) && 0 === t.offsetWidth ? pe(t, we, function() {
                    return R(t, e, i)
                }) : R(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && he(t);
                return I(t, n, i ? H(t, e, i, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ft.trim(r.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(r) ? r.replace(ve, o) : r + " " + o)
        }
    }), ft.cssHooks.marginRight = j(dt.reliableMarginRight, function(t, e) {
        return e ? pe(t, {
            display: "inline-block"
        }, ge, [t, "marginRight"]) : void 0
    }), ft.cssHooks.marginLeft = j(dt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(ge(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[t + _t[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ce.test(t) || (ft.cssHooks[t + e].set = I)
    }), ft.fn.extend({
        css: function(t, e) {
            return Pt(this, function(t, e, n) {
                var i,
                    o,
                    r = {},
                    s = 0;
                if (ft.isArray(e)) {
                    for (i = he(t), o = e.length; o > s; s++)
                        r[e[s]] = ft.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                qt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), ft.Tween = _, _.prototype = {
        constructor: _,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = _.propHooks[this.prop];
            return t && t.get ? t.get(this) : _.propHooks._default.get(this)
        },
        run: function(t) {
            var e,
                n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = _.prototype.init, ft.fx.step = {};
    var ke,
        Se,
        Ne = /^(?:toggle|show|hide)$/,
        $e = /queueHooks$/;
    ft.Animation = ft.extend(B, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return p(n.elem, t, Rt.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
            for (var n, i = 0, o = t.length; o > i; i++)
                n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
        },
        prefilters: [M],
        prefilter: function(t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), ft.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
        }, i
    }, ft.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(qt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = ft.isEmptyObject(t),
                r = ft.speed(e, n, i),
                s = function() {
                    var e = B(this, ft.extend({}, t), r);
                    (o || ft._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    r = ft.timers,
                    s = ft._data(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && $e.test(o) && i(s[o]);
                for (o = r.length; o--;)
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                !e && n || ft.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e,
                    n = ft._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = ft.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function(t, e) {
        var n = ft.fn[e];
        ft.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, i, o)
        }
    }), ft.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ft.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ft.timers = [], ft.fx.tick = function() {
        var t,
            e = ft.timers,
            n = 0;
        for (ke = ft.now(); n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || ft.fx.stop(), ke = void 0
    }, ft.fx.timer = function(t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
    }, ft.fx.interval = 13, ft.fx.start = function() {
        Se || (Se = t.setInterval(ft.fx.tick, ft.fx.interval))
    }, ft.fx.stop = function() {
        t.clearInterval(Se), Se = null
    }, ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ft.fn.delay = function(e, n) {
        return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }, function() {
        var t,
            e = it.createElement("input"),
            n = it.createElement("div"),
            i = it.createElement("select"),
            o = i.appendChild(it.createElement("option"));
        n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", dt.getSetAttribute = "t" !== n.className, dt.style = /top/.test(t.getAttribute("style")), dt.hrefNormalized = "/a" === t.getAttribute("href"), dt.checkOn = !!e.value, dt.optSelected = o.selected, dt.enctype = !!it.createElement("form").enctype, i.disabled = !0, dt.optDisabled = !o.disabled, e = it.createElement("input"), e.setAttribute("value", ""), dt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), dt.radioValue = "t" === e.value
    }();
    var De = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e,
                n,
                i,
                o = this[0];
            {
                if (arguments.length)
                    return i = ft.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), r)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = ft.makeArray(e), s = o.length; s--;)
                        if (i = o[s], ft.inArray(ft.valHooks.option.get(i), r) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                return ft.isArray(e) ? t.checked = ft.inArray(ft(t).val(), e) > -1 : void 0
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ae,
        je,
        Le = ft.expr.attrHandle,
        Oe = /^(?:checked|selected)$/i,
        Ie = dt.getSetAttribute,
        He = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Pt(this, ft.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i,
                o,
                r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (e = e.toLowerCase(), o = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? je : Ae)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n,
                i,
                o = 0,
                r = e && e.match(Dt);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];)
                    i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? He && Ie || !Oe.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Ie ? n : i)
        }
    }), je = {
        set: function(t, e, n) {
            return e === !1 ? ft.removeAttr(t, n) : He && Ie || !Oe.test(n) ? t.setAttribute(!Ie && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Le[e] || ft.find.attr;
        He && Ie || !Oe.test(e) ? Le[e] = function(t, e, i) {
            var o,
                r;
            return i || (r = Le[e], Le[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Le[e] = r), o
        } : Le[e] = function(t, e, n) {
            return n ? void 0 : t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), He && Ie || (ft.attrHooks.value = {
        set: function(t, e, n) {
            return ft.nodeName(t, "input") ? void (t.defaultValue = e) : Ae && Ae.set(t, e, n)
        }
    }), Ie || (Ae = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Le.id = Le.name = Le.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Ae.set
    }, ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ae.set(t, "" === e ? !1 : e, n)
        }
    }, ft.each(["width", "height"], function(t, e) {
        ft.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Re = /^(?:input|select|textarea|button|object)$/i,
        _e = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Pt(this, ft.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ft.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i,
                o,
                r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Re.test(t.nodeName) || _e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), dt.enctype || (ft.propFix.enctype = "encoding");
    var qe = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(t) {
            var e,
                n,
                i,
                o,
                r,
                s,
                a,
                l = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, U(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && (" " + o + " ").replace(qe, " ")) {
                        for (s = 0; r = e[s++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = ft.trim(i), o !== a && ft.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                n,
                i,
                o,
                r,
                s,
                a,
                l = 0;
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Dt) || []; n = this[l++];)
                    if (o = U(n), i = 1 === n.nodeType && (" " + o + " ").replace(qe, " ")) {
                        for (s = 0; r = e[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;)
                                i = i.replace(" " + r + " ", " ");
                        a = ft.trim(i), o !== a && ft.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, U(this), e), e)
            }) : this.each(function() {
                var e,
                    i,
                    o,
                    r;
                if ("string" === n)
                    for (i = 0, o = ft(this), r = t.match(Dt) || []; e = r[i++];)
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = U(this), e && ft._data(this, "__className__", e), ft.attr(this, "class", e || t === !1 ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e,
                n,
                i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(n) + " ").replace(qe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Pe = t.location,
        Fe = ft.now(),
        Me = /\?/,
        We = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n,
            i = null,
            o = ft.trim(e + "");
        return o && !ft.trim(o.replace(We, function(t, e, o, r) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
        })) ? Function("return " + o)() : ft.error("Invalid JSON: " + e)
    }, ft.parseXML = function(e) {
        var n,
            i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
    };
    var Be = /#.*$/,
        Ue = /([?&])_=[^&]*/,
        ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ve = /^(?:GET|HEAD)$/,
        Qe = /^\/\//,
        Ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Je = {},
        Ge = {},
        Ke = "*/".concat("*"),
        Ze = Pe.href,
        tn = Ye.exec(Ze.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ze,
            type: "GET",
            isLocal: Xe.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ke,
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
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
        },
        ajaxPrefilter: z(Je),
        ajaxTransport: z(Ge),
        ajax: function(e, n) {
            function i(e, n, i, o) {
                var r,
                    d,
                    y,
                    b,
                    w,
                    C = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), c = void 0, a = o || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (b = Q(p, T, i)), b = Y(p, b, T, r), r ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ft.lastModified[s] = w), w = T.getResponseHeader("etag"), w && (ft.etag[s] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, y = b.error, r = !y)) : (y = C, !e && C || (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", r ? g.resolveWith(f, [d, C, T]) : g.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? d : y]), m.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, p]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o,
                r,
                s,
                a,
                l,
                u,
                c,
                d,
                p = ft.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                g = ft.Deferred(),
                m = ft.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; e = ze.exec(a);)
                                    d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > x)
                                for (e in t)
                                    v[e] = [v[e], t[e]];
                            else
                                T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Ze) + "").replace(Be, "").replace(Qe, tn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ft.trim(p.dataType || "*").toLowerCase().match(Dt) || [""], null == p.crossDomain && (o = Ye.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === tn[1] && o[2] === tn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), X(Je, p, n, T), 2 === x)
                return T;
            u = ft.event && p.global, u && 0 === ft.active++ && ft.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ve.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Me.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ue.test(s) ? s.replace(Ue, "$1_=" + Fe++) : s + (Me.test(s) ? "&" : "?") + "_=" + Fe++)), p.ifModified && (ft.lastModified[s] && T.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && T.setRequestHeader("If-None-Match", ft.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers)
                T.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === x))
                return T.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[r](p[r]);
            if (c = X(Ge, p, n, T)) {
                if (T.readyState = 1, u && h.trigger("ajaxSend", [T, p]), 2 === x)
                    return T;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(y, i)
                } catch (C) {
                    if (!(2 > x))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script")
        }
    }), ft.each(["get", "post"], function(t, e) {
        ft[e] = function(t, n, i, o) {
            return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(t) {
            if (ft.isFunction(t))
                return this.each(function(e) {
                    ft(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = ft(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ft(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : G(t)
    }, ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    };
    var en = /%20/g,
        nn = /\[\]$/,
        on = /\r?\n/g,
        rn = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n,
            i = [],
            o = function(t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t))
            ft.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                K(n, t[n], e, o);
        return i.join("&").replace(en, "+")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && sn.test(this.nodeName) && !rn.test(t) && (this.checked || !Ft.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(on, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var an = 0,
        ln = {},
        un = ft.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in ln)
            ln[t](void 0, !0)
    }), dt.cors = !!un && "withCredentials" in un, un = dt.ajax = !!un, un && ft.ajaxTransport(function(e) {
        if (!e.crossDomain || dt.cors) {
            var n;
            return {
                send: function(i, o) {
                    var r,
                        s = e.xhr(),
                        a = ++an;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields)
                            s[r] = e.xhrFields[r];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)
                        void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                    s.send(e.hasContent && e.data || null), n = function(t, i) {
                        var r,
                            l,
                            u;
                        if (n && (i || 4 === s.readyState))
                            if (delete ln[a], n = void 0, s.onreadystatechange = ft.noop, i)
                                4 !== s.readyState && s.abort();
                            else {
                                u = {}, r = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (c) {
                                    l = ""
                                }
                                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                            }
                        u && o(r, l, u, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e,
                n = it.head || ft("head")[0] || it.documentElement;
            return {
                send: function(i, o) {
                    e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = cn.pop() || ft.expando + "_" + Fe++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o,
            r,
            s,
            a = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(dn, "$1" + o) : e.jsonp !== !1 && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return s || ft.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? ft(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, cn.push(o)), s && ft.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), dt.createHTMLDocument = function() {
        if (!it.implementation.createHTMLDocument)
            return !1;
        var t = it.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
    }(), ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (dt.createHTMLDocument ? it.implementation.createHTMLDocument("") : it);
        var i = Tt.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, o), o && o.length && ft(o).remove(), ft.merge([], i.childNodes))
    };
    var pn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
        if ("string" != typeof t && pn)
            return pn.apply(this, arguments);
        var i,
            o,
            r,
            s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(s, r || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem
        }).length
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                u,
                c = ft.css(t, "position"),
                d = ft(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), u = ("absolute" === c || "fixed" === c) && ft.inArray("auto", [r, l]) > -1, u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
            var e,
                n,
                i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r)
                return e = r.documentElement, ft.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = et(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t,
                    e,
                    n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");)
                    t = t.offsetParent;
                return t || fe
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ft.fn[t] = function(i) {
            return Pt(this, function(t, i, o) {
                var r = et(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? ft(r).scrollLeft() : o, n ? o : ft(r).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), ft.each(["top", "left"], function(t, e) {
        ft.cssHooks[e] = j(dt.pixelPosition, function(t, n) {
            return n ? (n = ge(t, e), de.test(n) ? ft(t).position()[e] + "px" : n) : void 0
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Pt(this, function(e, n, i) {
                    var o;
                    return ft.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ft.css(e, n, s) : ft.style(e, n, i, s)
                }, e, r ? i : void 0, r, null)
            }
        })
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.fn.size = function() {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft
    });
    var fn = t.jQuery,
        hn = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = hn), e && t.jQuery === ft && (t.jQuery = fn), ft
    }, e || (t.jQuery = t.$ = ft), ft
}), /* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return n > o ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            u = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented())
                    return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), /* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), /* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), /* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)
            return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active"))
            return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i,
            o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), /* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        var n,
            i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e,
                o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), /* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())
                    return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), /* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), /* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t,
            e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)
            return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0])
            return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)
            s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), /* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), /* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), /* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                d = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (u) {
                var f = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > h.bottom ? "top" : "top" == a && c.top - p < h.top ? "bottom" : "right" == a && c.right + d > h.width ? "left" : "left" == a && c.left - d < h.left ? "right" : a, r.removeClass(f).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, d, p);
            this.applyPlacement(g, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * c.left - o + l : 2 * c.top - r + u,
            f = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][f], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t,
            e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), /* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery);

