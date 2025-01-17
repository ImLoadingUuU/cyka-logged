if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Ce.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function o(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    function s(e) {
        var t = {};
        return pe.each(e.match(ke) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a),
        e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a),
        e.detachEvent("onload", a))
    }
    function a() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (r(),
        pe.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Oe, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function d(e, t, n, i) {
        if (De(e)) {
            var o, s, r = pe.expando, a = e.nodeType, l = a ? pe.cache : e, c = a ? e[r] : e[r] && r;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t)
                return c || (c = a ? e[r] = ne.pop() || pe.guid++ : r),
                l[c] || (l[c] = a ? {} : {
                    toJSON: pe.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[c] = pe.extend(l[c], t) : l[c].data = pe.extend(l[c].data, t)),
                s = l[c],
                i || (s.data || (s.data = {}),
                s = s.data),
                void 0 !== n && (s[pe.camelCase(t)] = n),
                "string" == typeof t ? null == (o = s[t]) && (o = s[pe.camelCase(t)]) : o = s,
                o
        }
    }
    function u(e, t, n) {
        if (De(e)) {
            var i, o, s = e.nodeType, r = s ? pe.cache : e, a = s ? e[pe.expando] : pe.expando;
            if (r[a]) {
                if (t && (i = n ? r[a] : r[a].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    o = t.length;
                    for (; o--; )
                        delete i[t[o]];
                    if (n ? !c(i) : !pe.isEmptyObject(i))
                        return
                }
                (n || (delete r[a].data,
                c(r[a]))) && (s ? pe.cleanData([e], !0) : ue.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0)
            }
        }
    }
    function p(e, t, n, i) {
        var o, s = 1, r = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return pe.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (pe.cssNumber[t] ? "" : "px"), d = (pe.cssNumber[t] || "px" !== c && +l) && Le.exec(pe.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3],
            n = n || [],
            d = +l || 1;
            do {
                s = s || ".5",
                d /= s,
                pe.style(e, t, d + c)
            } while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return n && (d = +d || +l || 0,
        o = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = d,
        i.end = o)),
        o
    }
    function h(e) {
        var t = Fe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function f(e, t) {
        var n, i, o = 0, s = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [],
            n = e.childNodes || e; null != (i = n[o]); o++)
                !t || pe.nodeName(i, t) ? s.push(i) : pe.merge(s, f(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], s) : s
    }
    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }
    function g(e) {
        Pe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function v(e, t, n, i, o) {
        for (var s, r, a, l, c, d, u, p = e.length, v = h(t), b = [], y = 0; y < p; y++)
            if ((r = e[y]) || 0 === r)
                if ("object" === pe.type(r))
                    pe.merge(b, r.nodeType ? [r] : r);
                else if (We.test(r)) {
                    for (l = l || v.appendChild(t.createElement("div")),
                    c = (Re.exec(r) || ["", ""])[1].toLowerCase(),
                    u = _e[c] || _e._default,
                    l.innerHTML = u[1] + pe.htmlPrefilter(r) + u[2],
                    s = u[0]; s--; )
                        l = l.lastChild;
                    if (!ue.leadingWhitespace && ze.test(r) && b.push(t.createTextNode(ze.exec(r)[0])),
                    !ue.tbody)
                        for (r = "table" !== c || Ue.test(r) ? "<table>" !== u[1] || Ue.test(r) ? 0 : l : l.firstChild,
                        s = r && r.childNodes.length; s--; )
                            pe.nodeName(d = r.childNodes[s], "tbody") && !d.childNodes.length && r.removeChild(d);
                    for (pe.merge(b, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    b.push(t.createTextNode(r));
        for (l && v.removeChild(l),
        ue.appendChecked || pe.grep(f(b, "input"), g),
        y = 0; r = b[y++]; )
            if (i && pe.inArray(r, i) > -1)
                o && o.push(r);
            else if (a = pe.contains(r.ownerDocument, r),
            l = f(v.appendChild(r), "script"),
            a && m(l),
            n)
                for (s = 0; r = l[s++]; )
                    Me.test(r.type || "") && n.push(r);
        return l = null,
        v
    }
    function b() {
        return !0
    }
    function y() {
        return !1
    }
    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }
    function w(e, t, n, i, o, s) {
        var r, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (a in t)
                w(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = y;
        else if (!o)
            return e;
        return 1 === s && (r = o,
        o = function(e) {
            return pe().off(e),
            r.apply(this, arguments)
        }
        ,
        o.guid = r.guid || (r.guid = pe.guid++)),
        e.each(function() {
            pe.event.add(this, t, o, i, n)
        })
    }
    function C(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function $(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function S(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function T(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, o, s = pe._data(e), r = pe._data(t, s), a = s.events;
            if (a) {
                delete r.handle,
                r.events = {};
                for (n in a)
                    for (i = 0,
                    o = a[n].length; i < o; i++)
                        pe.event.add(t, n, a[n][i])
            }
            r.data && (r.data = pe.extend({}, r.data))
        }
    }
    function E(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !ue.noCloneEvent && t[pe.expando]) {
                o = pe._data(t);
                for (i in o.events)
                    pe.removeEvent(t, i, o.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? ($(t).text = e.text,
            S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ue.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function k(e, t, n, i) {
        t = se.apply([], t);
        var o, s, r, a, l, c, d = 0, u = e.length, p = u - 1, h = t[0], m = pe.isFunction(h);
        if (m || u > 1 && "string" == typeof h && !ue.checkClone && tt.test(h))
            return e.each(function(o) {
                var s = e.eq(o);
                m && (t[0] = h.call(this, o, s.html())),
                k(s, t, n, i)
            });
        if (u && (c = v(t, e[0].ownerDocument, !1, e, i),
        o = c.firstChild,
        1 === c.childNodes.length && (c = o),
        o || i)) {
            for (a = pe.map(f(c, "script"), $),
            r = a.length; d < u; d++)
                s = c,
                d !== p && (s = pe.clone(s, !0, !0),
                r && pe.merge(a, f(s, "script"))),
                n.call(e[d], s, d);
            if (r)
                for (l = a[a.length - 1].ownerDocument,
                pe.map(a, S),
                d = 0; d < r; d++)
                    s = a[d],
                    Me.test(s.type || "") && !pe._data(s, "globalEval") && pe.contains(l, s) && (s.src ? pe._evalUrl && pe._evalUrl(s.src) : pe.globalEval((s.text || s.textContent || s.innerHTML || "").replace(it, "")));
            c = o = null
        }
        return e
    }
    function A(e, t, n) {
        for (var i, o = t ? pe.filter(t, e) : e, s = 0; null != (i = o[s]); s++)
            n || 1 !== i.nodeType || pe.cleanData(f(i)),
            i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(f(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function N(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body)
          , i = pe.css(n[0], "display");
        return n.detach(),
        i
    }
    function D(e) {
        var t = ie
          , n = at[e];
        return n || (n = N(e, t),
        "none" !== n && n || (rt = (rt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (rt[0].contentWindow || rt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = N(e, t),
        rt.detach()),
        at[e] = n),
        n
    }
    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        if (e in Ct)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--; )
            if ((e = wt[n] + t)in Ct)
                return e
    }
    function B(e, t) {
        for (var n, i, o, s = [], r = 0, a = e.length; r < a; r++)
            i = e[r],
            i.style && (s[r] = pe._data(i, "olddisplay"),
            n = i.style.display,
            t ? (s[r] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && He(i) && (s[r] = pe._data(i, "olddisplay", D(i.nodeName)))) : (o = He(i),
            (n && "none" !== n || !o) && pe._data(i, "olddisplay", o ? n : pe.css(i, "display"))));
        for (r = 0; r < a; r++)
            i = e[r],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }
    function L(e, t, n) {
        var i = bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function j(e, t, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2)
            "margin" === n && (r += pe.css(e, n + je[s], !0, o)),
            i ? ("content" === n && (r -= pe.css(e, "padding" + je[s], !0, o)),
            "margin" !== n && (r -= pe.css(e, "border" + je[s] + "Width", !0, o))) : (r += pe.css(e, "padding" + je[s], !0, o),
            "padding" !== n && (r += pe.css(e, "border" + je[s] + "Width", !0, o)));
        return r
    }
    function H(e, t, n) {
        var i = !0
          , o = "width" === t ? e.offsetWidth : e.offsetHeight
          , s = pt(e)
          , r = ue.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if (o = ht(e, t, s),
            (o < 0 || null == o) && (o = e.style[t]),
            ct.test(o))
                return o;
            i = r && (ue.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + j(e, t, n || (r ? "border" : "content"), i, s) + "px"
    }
    function q(e, t, n, i, o) {
        return new q.prototype.init(e,t,n,i,o)
    }
    function P() {
        return e.setTimeout(function() {
            $t = void 0
        }),
        $t = pe.now()
    }
    function R(e, t) {
        var n, i = {
            height: e
        }, o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t)
            n = je[o],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function M(e, t, n) {
        for (var i, o = (_.tweeners[t] || []).concat(_.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (i = o[s].call(n, t, e))
                return i
    }
    function z(e, t, n) {
        var i, o, s, r, a, l, c, d = this, u = {}, p = e.style, h = e.nodeType && He(e), f = pe._data(e, "fxshow");
        n.queue || (a = pe._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        d.always(function() {
            d.always(function() {
                a.unqueued--,
                pe.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        c = pe.css(e, "display"),
        "inline" === ("none" === c ? pe._data(e, "olddisplay") || D(e.nodeName) : c) && "none" === pe.css(e, "float") && (ue.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        ue.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i],
            Tt.exec(o)) {
                if (delete t[i],
                s = s || "toggle" === o,
                o === (h ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[i])
                        continue;
                    h = !0
                }
                u[i] = f && f[i] || pe.style(e, i)
            } else
                c = void 0;
        if (pe.isEmptyObject(u))
            "inline" === ("none" === c ? D(e.nodeName) : c) && (p.display = c);
        else {
            f ? "hidden"in f && (h = f.hidden) : f = pe._data(e, "fxshow", {}),
            s && (f.hidden = !h),
            h ? pe(e).show() : d.done(function() {
                pe(e).hide()
            }),
            d.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in u)
                    pe.style(e, t, u[t])
            });
            for (i in u)
                r = M(h ? f[i] : 0, i, d),
                i in f || (f[i] = r.start,
                h && (r.end = r.start,
                r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function F(e, t) {
        var n, i, o, s, r;
        for (n in e)
            if (i = pe.camelCase(n),
            o = t[i],
            s = e[n],
            pe.isArray(s) && (o = s[1],
            s = e[n] = s[0]),
            n !== i && (e[i] = s,
            delete e[n]),
            (r = pe.cssHooks[i]) && "expand"in r) {
                s = r.expand(s),
                delete e[i];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = o)
            } else
                t[i] = o
    }
    function _(e, t, n) {
        var i, o, s = 0, r = _.prefilters.length, a = pe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = $t || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, s = 1 - i, r = 0, l = c.tweens.length; r < l; r++)
                c.tweens[r].run(s);
            return a.notifyWith(e, [c, s, n]),
            s < 1 && l ? n : (a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: $t || P(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), d = c.props;
        for (F(d, c.opts.specialEasing); s < r; s++)
            if (i = _.prefilters[s].call(c, e, d, c.opts))
                return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)),
                i;
        return pe.map(d, M, c),
        pe.isFunction(c.opts.start) && c.opts.start.call(e, c),
        pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function W(e) {
        return pe.attr(e, "class") || ""
    }
    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, s = t.toLowerCase().match(ke) || [];
            if (pe.isFunction(n))
                for (; i = s[o++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function V(e, t, n, i) {
        function o(a) {
            var l;
            return s[a] = !0,
            pe.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                o(c),
                !1)
            }),
            l
        }
        var s = {}
          , r = e === Yt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }
    function X(e, t) {
        var n, i, o = pe.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n),
        e
    }
    function Q(e, t, n) {
        for (var i, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (r in a)
                if (a[r] && a[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            s = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                i || (i = r)
            }
            s = s || i
        }
        if (s)
            return s !== l[0] && l.unshift(s),
            n[s]
    }
    function G(e, t, n, i) {
        var o, s, r, a, l, c = {}, d = e.dataTypes.slice();
        if (d[1])
            for (r in e.converters)
                c[r.toLowerCase()] = e.converters[r];
        for (s = d.shift(); s; )
            if (e.responseFields[s] && (n[e.responseFields[s]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = s,
            s = d.shift())
                if ("*" === s)
                    s = l;
                else if ("*" !== l && l !== s) {
                    if (!(r = c[l + " " + s] || c["* " + s]))
                        for (o in c)
                            if (a = o.split(" "),
                            a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0],
                                d.unshift(a[1]));
                                break
                            }
                    if (!0 !== r)
                        if (r && e.throws)
                            t = r(t);
                        else
                            try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Y(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }
    function K(e) {
        if (!pe.contains(e.ownerDocument || ie, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === Y(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function J(e, t, n, i) {
        var o;
        if (pe.isArray(t))
            pe.each(t, function(t, o) {
                n || tn.test(e) ? i(e, o) : J(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== pe.type(t))
            i(e, t);
        else
            for (o in t)
                J(e + "[" + o + "]", t[o], n, i)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = []
      , ie = e.document
      , oe = ne.slice
      , se = ne.concat
      , re = ne.push
      , ae = ne.indexOf
      , le = {}
      , ce = le.toString
      , de = le.hasOwnProperty
      , ue = {}
      , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , fe = /^-ms-/
      , me = /-([\da-z])/gi
      , ge = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: "1.12.4",
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: ne.sort,
        splice: ne.splice
    },
    pe.extend = pe.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r,
        r = arguments[a] || {},
        a++),
        "object" == typeof r || pe.isFunction(r) || (r = {}),
        a === l && (r = this,
        a--); a < l; a++)
            if (null != (o = arguments[a]))
                for (i in o)
                    e = r[i],
                    n = o[i],
                    r !== n && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1,
                    s = e && pe.isArray(e) ? e : []) : s = e && pe.isPlainObject(e) ? e : {},
                    r[i] = pe.extend(c, s, n)) : void 0 !== n && (r[i] = n));
        return r
    }
    ,
    pe.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (!ue.ownFirst)
                for (t in e)
                    return de.call(e, t);
            for (t in e)
                ;
            return void 0 === t || de.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(fe, "ms-").replace(me, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++)
                    ;
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (ae)
                    return ae.call(t, e, n);
                for (i = t.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; )
                e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i]; )
                    e[o++] = t[i++];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)
                !t(e[o], o) !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, i) {
            var o, s, r = 0, a = [];
            if (n(e))
                for (o = e.length; r < o; r++)
                    null != (s = t(e[r], r, i)) && a.push(s);
            else
                for (r in e)
                    null != (s = t(e[r], r, i)) && a.push(s);
            return se.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (o = e[t],
            t = e,
            e = o),
            pe.isFunction(e))
                return n = oe.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, n.concat(oe.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || pe.guid++,
                i
        },
        now: function() {
            return +new Date
        },
        support: ue
    }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(e) {
        function t(e, t, n, i) {
            var o, s, r, a, c, u, p, h, f = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== D && N(t),
            t = t || D,
            O)) {
                if (11 !== m && (u = me.exec(e)))
                    if (o = u[1]) {
                        if (9 === m) {
                            if (!(r = t.getElementById(o)))
                                return n;
                            if (r.id === o)
                                return n.push(r),
                                n
                        } else if (f && (r = f.getElementById(o)) && H(t, r) && r.id === o)
                            return n.push(r),
                            n
                    } else {
                        if (u[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = u[3]) && y.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (y.qsa && !_[e + " "] && (!B || !B.test(e))) {
                    if (1 !== m)
                        f = t,
                        h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = q),
                        p = $(e),
                        s = p.length,
                        c = de.test(a) ? "#" + a : "[id='" + a + "']"; s--; )
                            p[s] = c + " " + d(p[s]);
                        h = p.join(","),
                        f = ge.test(e) && l(t.parentNode) || t
                    }
                    if (h)
                        try {
                            return Y.apply(n, f.querySelectorAll(h)),
                            n
                        } catch (e) {} finally {
                            a === q && t.removeAttribute("id")
                        }
                }
            }
            return T(e.replace(se, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[q] = !0,
            e
        }
        function o(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function s(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function r(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--; )
                        n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function u(e, t, n) {
            var i = t.dir
              , o = n && "parentNode" === i
              , s = M++;
            return t.first ? function(t, n, s) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || o)
                        return e(t, n, s)
            }
            : function(t, n, r) {
                var a, l, c, d = [R, s];
                if (r) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || o) && e(t, n, r))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || o) {
                            if (c = t[q] || (t[q] = {}),
                            l = c[t.uniqueID] || (c[t.uniqueID] = {}),
                            (a = l[i]) && a[0] === R && a[1] === s)
                                return d[2] = a[2];
                            if (l[i] = d,
                            d[2] = e(t, n, r))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function h(e, n, i) {
            for (var o = 0, s = n.length; o < s; o++)
                t(e, n[o], i);
            return i
        }
        function f(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (s = e[a]) && (n && !n(s, i, o) || (r.push(s),
                c && t.push(a)));
            return r
        }
        function m(e, t, n, o, s, r) {
            return o && !o[q] && (o = m(o)),
            s && !s[q] && (s = m(s, r)),
            i(function(i, r, a, l) {
                var c, d, u, p = [], m = [], g = r.length, v = i || h(t || "*", a.nodeType ? [a] : a, []), b = !e || !i && t ? v : f(v, p, e, a, l), y = n ? s || (i ? e : g || o) ? [] : r : b;
                if (n && n(b, y, a, l),
                o)
                    for (c = f(y, m),
                    o(c, [], a, l),
                    d = c.length; d--; )
                        (u = c[d]) && (y[m[d]] = !(b[m[d]] = u));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (c = [],
                            d = y.length; d--; )
                                (u = y[d]) && c.push(b[d] = u);
                            s(null, y = [], c, l)
                        }
                        for (d = y.length; d--; )
                            (u = y[d]) && (c = s ? J(i, u) : p[d]) > -1 && (i[c] = !(r[c] = u))
                    }
                } else
                    y = f(y === r ? y.splice(g, y.length) : y),
                    s ? s(null, r, y, l) : Y.apply(r, y)
            })
        }
        function g(e) {
            for (var t, n, i, o = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = u(function(e) {
                return e === t
            }, r, !0), c = u(function(e) {
                return J(t, e) > -1
            }, r, !0), h = [function(e, n, i) {
                var o = !s && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                o
            }
            ]; a < o; a++)
                if (n = x.relative[e[a].type])
                    h = [u(p(h), n)];
                else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches),
                    n[q]) {
                        for (i = ++a; i < o && !x.relative[e[i].type]; i++)
                            ;
                        return m(a > 1 && p(h), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, a < i && g(e.slice(a, i)), i < o && g(e = e.slice(i)), i < o && d(e))
                    }
                    h.push(n)
                }
            return p(h)
        }
        function v(e, n) {
            var o = n.length > 0
              , s = e.length > 0
              , r = function(i, r, a, l, c) {
                var d, u, p, h = 0, m = "0", g = i && [], v = [], b = E, y = i || s && x.find.TAG("*", c), w = R += null == b ? 1 : Math.random() || .1, C = y.length;
                for (c && (E = r === D || r || c); m !== C && null != (d = y[m]); m++) {
                    if (s && d) {
                        for (u = 0,
                        r || d.ownerDocument === D || (N(d),
                        a = !O); p = e[u++]; )
                            if (p(d, r || D, a)) {
                                l.push(d);
                                break
                            }
                        c && (R = w)
                    }
                    o && ((d = !p && d) && h--,
                    i && g.push(d))
                }
                if (h += m,
                o && m !== h) {
                    for (u = 0; p = n[u++]; )
                        p(g, v, r, a);
                    if (i) {
                        if (h > 0)
                            for (; m--; )
                                g[m] || v[m] || (v[m] = Q.call(l));
                        v = f(v)
                    }
                    Y.apply(l, v),
                    c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = w,
                E = b),
                g
            };
            return o ? i(r) : r
        }
        var b, y, x, w, C, $, S, T, E, k, A, N, D, I, O, B, L, j, H, q = "sizzle" + 1 * new Date, P = e.document, R = 0, M = 0, z = n(), F = n(), _ = n(), W = function(e, t) {
            return e === t && (A = !0),
            0
        }, U = 1 << 31, V = {}.hasOwnProperty, X = [], Q = X.pop, G = X.push, Y = X.push, K = X.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), re = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(ie), de = new RegExp("^" + te + "$"), ue = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, xe = function() {
            N()
        };
        try {
            Y.apply(X = K.call(P.childNodes), P.childNodes),
            X[P.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: X.length ? function(e, t) {
                    G.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        y = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i,
            I = D.documentElement,
            O = !C(D),
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            y.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            y.getElementsByTagName = o(function(e) {
                return e.appendChild(D.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            y.getElementsByClassName = fe.test(D.getElementsByClassName),
            y.getById = o(function(e) {
                return I.appendChild(e).id = q,
                !D.getElementsByName || !D.getElementsByName(q).length
            }),
            y.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(be, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(be, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = y.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }
            ,
            x.find.CLASS = y.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O)
                    return t.getElementsByClassName(e)
            }
            ,
            L = [],
            B = [],
            (y.qsa = fe.test(D.querySelectorAll)) && (o(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || B.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || B.push("~="),
                e.querySelectorAll(":checked").length || B.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || B.push(".#.+[+~]")
            }),
            o(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && B.push("name" + ee + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                B.push(",.*:")
            })),
            (y.matchesSelector = fe.test(j = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(e) {
                y.disconnectedMatch = j.call(e, "div"),
                j.call(e, "[s!='']:x"),
                L.push("!=", ie)
            }),
            B = B.length && new RegExp(B.join("|")),
            L = L.length && new RegExp(L.join("|")),
            t = fe.test(I.compareDocumentPosition),
            H = t || fe.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            W = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === P && H(P, e) ? -1 : t === D || t.ownerDocument === P && H(P, t) ? 1 : k ? J(k, e) - J(k, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, i = 0, o = e.parentNode, s = t.parentNode, a = [e], l = [t];
                if (!o || !s)
                    return e === D ? -1 : t === D ? 1 : o ? -1 : s ? 1 : k ? J(k, e) - J(k, t) : 0;
                if (o === s)
                    return r(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? r(a[i], l[i]) : a[i] === P ? -1 : l[i] === P ? 1 : 0
            }
            ,
            D) : D
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && N(e),
            n = n.replace(le, "='$1']"),
            y.matchesSelector && O && !_[n + " "] && (!L || !L.test(n)) && (!B || !B.test(n)))
                try {
                    var i = j.call(e, n);
                    if (i || y.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && N(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && N(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : y.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (A = !y.detectDuplicates,
            k = !y.sortStable && e.slice(0),
            e.sort(W),
            A) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return k = null,
            e
        }
        ,
        w = t.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += w(t);
            return n
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === n : !n || (s += "",
                        "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3)
                      , r = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, d, u, p, h, f, m = s !== r ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), b = !l && !a, y = !1;
                        if (g) {
                            if (s) {
                                for (; m; ) {
                                    for (p = t; p = p[m]; )
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild],
                            r && b) {
                                for (p = g,
                                u = p[q] || (p[q] = {}),
                                d = u[p.uniqueID] || (u[p.uniqueID] = {}),
                                c = d[e] || [],
                                h = c[0] === R && c[1],
                                y = h && c[2],
                                p = h && g.childNodes[h]; p = ++h && p && p[m] || (y = h = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++y && p === t) {
                                        d[e] = [R, h, y];
                                        break
                                    }
                            } else if (b && (p = t,
                            u = p[q] || (p[q] = {}),
                            d = u[p.uniqueID] || (u[p.uniqueID] = {}),
                            c = d[e] || [],
                            h = c[0] === R && c[1],
                            y = h),
                            !1 === y)
                                for (; (p = ++h && p && p[m] || (y = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && (u = p[q] || (p[q] = {}),
                                d = u[p.uniqueID] || (u[p.uniqueID] = {}),
                                d[e] = [R, y]),
                                p !== t)); )
                                    ;
                            return (y -= o) === i || y % i == 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[q] ? s(n) : s.length > 1 ? (o = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = s(e, n), r = o.length; r--; )
                            i = J(e, o[r]),
                            e[i] = !(t[i] = o[r])
                    }) : function(e) {
                        return s(e, 0, o)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , o = S(e.replace(se, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var s, r = o(e, null, i, []), a = e.length; a--; )
                            (s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function(e, i, s) {
                        return t[0] = e,
                        o(t, null, s, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, ye),
                    function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, ye).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(b);
        return c.prototype = x.filters = x.pseudos,
        x.setFilters = new c,
        $ = t.tokenize = function(e, n) {
            var i, o, s, r, a, l, c, d = F[e + " "];
            if (d)
                return n ? 0 : d.slice(0);
            for (a = e,
            l = [],
            c = x.preFilter; a; ) {
                i && !(o = re.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(s = [])),
                i = !1,
                (o = ae.exec(a)) && (i = o.shift(),
                s.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }),
                a = a.slice(i.length));
                for (r in x.filter)
                    !(o = ue[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(),
                    s.push({
                        value: i,
                        type: r,
                        matches: o
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? t.error(e) : F(e, l).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, i = [], o = [], s = _[e + " "];
            if (!s) {
                for (t || (t = $(e)),
                n = t.length; n--; )
                    s = g(t[n]),
                    s[q] ? i.push(s) : o.push(s);
                s = _(e, v(o, i)),
                s.selector = e
            }
            return s
        }
        ,
        T = t.select = function(e, t, n, i) {
            var o, s, r, a, c, u = "function" == typeof e && e, p = !i && $(e = u.selector || e);
            if (n = n || [],
            1 === p.length) {
                if (s = p[0] = p[0].slice(0),
                s.length > 2 && "ID" === (r = s[0]).type && y.getById && 9 === t.nodeType && O && x.relative[s[1].type]) {
                    if (!(t = (x.find.ID(r.matches[0].replace(be, ye), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (o = ue.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o],
                !x.relative[a = r.type]); )
                    if ((c = x.find[a]) && (i = c(r.matches[0].replace(be, ye), ge.test(s[0].type) && l(t.parentNode) || t))) {
                        if (s.splice(o, 1),
                        !(e = i.length && d(s)))
                            return Y.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || S(e, p))(i, t, !O, n, !t || ge.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        y.sortStable = q.split("").sort(W).join("") === q,
        y.detectDuplicates = !!A,
        N(),
        y.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        y.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(Z, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    pe.find = ve,
    pe.expr = ve.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = ve.uniqueSort,
    pe.text = ve.getText,
    pe.isXMLDoc = ve.isXML,
    pe.contains = ve.contains;
    var be = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && pe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , ye = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , xe = pe.expr.match.needsContext
      , we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    pe.fn.extend({
        find: function(e) {
            var t, n = [], i = this, o = i.length;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (pe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < o; t++)
                pe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? pe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && xe.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var $e, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || $e,
        "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t,
                pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)),
                we.test(i[1]) && pe.isPlainObject(t))
                    for (i in t)
                        pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((o = ie.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2])
                    return $e.find(e);
                this.length = 1,
                this[0] = o
            }
            return this.context = ie,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        pe.makeArray(e, this))
    }
    ).prototype = pe.fn,
    $e = pe(ie);
    var Te = /^(?:parents|prev(?:Until|All))/
      , Ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (pe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, s = [], r = xe.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ye((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ye(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = pe.filter(i, o)),
            this.length > 1 && (Ee[e] || (o = pe.uniqueSort(o)),
            Te.test(e) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var ke = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : pe.extend({}, e);
        var t, n, i, o, r = [], a = [], l = -1, c = function() {
            for (o = e.once,
            i = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < r.length; )
                    !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (r = n ? [] : "")
        }, d = {
            add: function() {
                return r && (n && !t && (l = r.length - 1,
                a.push(n)),
                function t(n) {
                    pe.each(n, function(n, i) {
                        pe.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                    })
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, r, n)) > -1; )
                        r.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = a = [],
                r = n = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return o = !0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                a.push(n),
                t || c()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ,
    pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return pe.Deferred(function(n) {
                        pe.each(t, function(t, s) {
                            var r = pe.isFunction(e[t]) && e[t];
                            o[s[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, i) : i
                }
            }
              , o = {};
            return i.pipe = i.then,
            pe.each(t, function(e, s) {
                var r = s[2]
                  , a = s[3];
                i[s[1]] = r.add,
                a && r.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments),
                    this
                }
                ,
                o[s[0] + "With"] = r.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, i, o = 0, s = oe.call(arguments), r = s.length, a = 1 !== r || e && pe.isFunction(e.promise) ? r : 0, l = 1 === a ? e : pe.Deferred(), c = function(e, n, i) {
                return function(o) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? oe.call(arguments) : o,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (r > 1)
                for (t = new Array(r),
                n = new Array(r),
                i = new Array(r); o < r; o++)
                    s[o] && pe.isFunction(s[o].promise) ? s[o].promise().progress(c(o, n, t)).done(c(o, i, s)).fail(l.reject) : --a;
            return a || l.resolveWith(i, s),
            l.promise()
        }
    });
    var Ae;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e),
        this
    }
    ,
    pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
            !0 !== e && --pe.readyWait > 0 || (Ae.resolveWith(ie, [pe]),
            pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"),
            pe(ie).off("ready"))))
        }
    }),
    pe.ready.promise = function(t) {
        if (!Ae)
            if (Ae = pe.Deferred(),
            "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll)
                e.setTimeout(pe.ready);
            else if (ie.addEventListener)
                ie.addEventListener("DOMContentLoaded", a),
                e.addEventListener("load", a);
            else {
                ie.attachEvent("onreadystatechange", a),
                e.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        r(),
                        pe.ready()
                    }
                }()
            }
        return Ae.promise(t)
    }
    ,
    pe.ready.promise();
    var Ne;
    for (Ne in pe(ue))
        break;
    ue.ownFirst = "0" === Ne,
    ue.inlineBlockNeedsLayout = !1,
    pe(function() {
        var e, t, n, i;
        (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"),
        i = ie.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = ie.createElement("div");
        ue.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            ue.deleteExpando = !1
        }
        e = null
    }();
    var De = function(e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
      , Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Oe = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e)
        },
        data: function(e, t, n) {
            return d(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0], r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = pe.data(s),
                1 === s.nodeType && !pe._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--; )
                        r[n] && (i = r[n].name,
                        0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)),
                        l(s, i, o[i])));
                    pe._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : s ? l(s, e, pe.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = pe._data(e, t),
                n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t)
              , i = n.length
              , o = n.shift()
              , s = pe._queueHooks(e, t)
              , r = function() {
                pe.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            o.call(e, r, s)),
            !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"),
                    pe._removeData(e, n)
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = pe.Deferred(), s = this, r = this.length, a = function() {
                --i || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; r--; )
                (n = pe._data(s[r], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(t)
        }
    }),
    function() {
        var e;
        ue.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"),
            i = ie.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(ie.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(i),
            e) : void 0
        }
    }();
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Le = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$","i")
      , je = ["Top", "Right", "Bottom", "Left"]
      , He = function(e, t) {
        return e = t || e,
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
    }
      , qe = function(e, t, n, i, o, s, r) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === pe.type(n)) {
            o = !0;
            for (a in n)
                qe(e, t, a, n[a], !0, s, r)
        } else if (void 0 !== i && (o = !0,
        pe.isFunction(i) || (r = !0),
        c && (r ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(pe(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : s
    }
      , Pe = /^(?:checkbox|radio)$/i
      , Re = /<([\w:-]+)/
      , Me = /^$|\/(?:java|ecma)script/i
      , ze = /^\s+/
      , Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = ie.createElement("div")
          , t = ie.createDocumentFragment()
          , n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ue.leadingWhitespace = 3 === e.firstChild.nodeType,
        ue.tbody = !e.getElementsByTagName("tbody").length,
        ue.htmlSerialize = !!e.getElementsByTagName("link").length,
        ue.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        ue.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = ie.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ue.noCloneEvent = !!e.addEventListener,
        e[pe.expando] = 1,
        ue.attributes = !e.getAttribute(pe.expando)
    }();
    var _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    _e.optgroup = _e.option,
    _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
    _e.th = _e.td;
    var We = /<|&#?\w+;/
      , Ue = /<tbody/i;
    !function() {
        var t, n, i = ie.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (ue[t] = n in e) || (i.setAttribute(n, "t"),
            ue[t] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Ve = /^(?:input|select|textarea)$/i
      , Xe = /^key/
      , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ge = /^(?:focusinfocus|focusoutblur)$/
      , Ye = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, h, f, m, g = pe._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                o = l.selector),
                n.guid || (n.guid = pe.guid++),
                (r = g.events) || (r = g.events = {}),
                (d = g.handle) || (d = g.handle = function(e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(d.elem, arguments)
                }
                ,
                d.elem = e),
                t = (t || "").match(ke) || [""],
                a = t.length; a--; )
                    s = Ye.exec(t[a]) || [],
                    h = m = s[1],
                    f = (s[2] || "").split(".").sort(),
                    h && (c = pe.event.special[h] || {},
                    h = (o ? c.delegateType : c.bindType) || h,
                    c = pe.event.special[h] || {},
                    u = pe.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pe.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l),
                    (p = r[h]) || (p = r[h] = [],
                    p.delegateCount = 0,
                    c.setup && !1 !== c.setup.call(e, i, f, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))),
                    c.add && (c.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    pe.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, h, f, m, g = pe.hasData(e) && pe._data(e);
            if (g && (d = g.events)) {
                for (t = (t || "").match(ke) || [""],
                c = t.length; c--; )
                    if (a = Ye.exec(t[c]) || [],
                    h = m = a[1],
                    f = (a[2] || "").split(".").sort(),
                    h) {
                        for (u = pe.event.special[h] || {},
                        h = (i ? u.delegateType : u.bindType) || h,
                        p = d[h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = s = p.length; s--; )
                            r = p[s],
                            !o && m !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (p.splice(s, 1),
                            r.selector && p.delegateCount--,
                            u.remove && u.remove.call(e, r));
                        l && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || pe.removeEvent(e, h, g.handle),
                        delete d[h])
                    } else
                        for (h in d)
                            pe.event.remove(e, h + t[c], n, i, !0);
                pe.isEmptyObject(d) && (delete g.handle,
                pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var s, r, a, l, c, d, u, p = [i || ie], h = de.call(t, "type") ? t.type : t, f = de.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = i = i || ie,
            3 !== i.nodeType && 8 !== i.nodeType && !Ge.test(h + pe.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."),
            h = f.shift(),
            f.sort()),
            r = h.indexOf(":") < 0 && "on" + h,
            t = t[pe.expando] ? t : new pe.Event(h,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = f.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : pe.makeArray(n, [t]),
            c = pe.event.special[h] || {},
            o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                if (!o && !c.noBubble && !pe.isWindow(i)) {
                    for (l = c.delegateType || h,
                    Ge.test(l + h) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        d = a;
                    d === (i.ownerDocument || ie) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0; (a = p[u++]) && !t.isPropagationStopped(); )
                    t.type = u > 1 ? l : c.bindType || h,
                    s = (pe._data(a, "events") || {})[t.type] && pe._data(a, "handle"),
                    s && s.apply(a, n),
                    (s = r && a[r]) && s.apply && De(a) && (t.result = s.apply(a, n),
                    !1 === t.result && t.preventDefault());
                if (t.type = h,
                !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), n)) && De(i) && r && i[h] && !pe.isWindow(i)) {
                    d = i[r],
                    d && (i[r] = null),
                    pe.event.triggered = h;
                    try {
                        i[h]()
                    } catch (e) {}
                    pe.event.triggered = void 0,
                    d && (i[r] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, i, o, s, r = [], a = oe.call(arguments), l = (pe._data(this, "events") || {})[e.type] || [], c = pe.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (r = pe.event.handlers.call(this, e, l),
                t = 0; (o = r[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    n = 0; (s = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s,
                        e.data = s.data,
                        void 0 !== (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [],
                        n = 0; n < a; n++)
                            s = t[n],
                            o = s.selector + " ",
                            void 0 === i[o] && (i[o] = s.needsContext ? pe(o, this).index(l) > -1 : pe.find(o, this, null, [l]).length),
                            i[o] && i.push(s);
                        i.length && r.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }),
            r
        },
        fix: function(e) {
            if (e[pe.expando])
                return e;
            var t, n, i, o = e.type, s = e, r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Qe.test(o) ? this.mouseHooks : Xe.test(o) ? this.keyHooks : {}),
            i = r.props ? this.props.concat(r.props) : this.props,
            e = new pe.Event(s),
            t = i.length; t--; )
                n = i[t],
                e[n] = s[n];
            return e.target || (e.target = s.srcElement || ie),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button, r = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie,
                o = i.documentElement,
                n = i.body,
                e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r),
                e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
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
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (void 0 === e[i] && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    pe.Event = function(e, t) {
        if (!(this instanceof pe.Event))
            return new pe.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : y) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        this[pe.expando] = !0
    }
    ,
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, s = e.handleObj;
                return o && (o === i || pe.contains(i, o)) || (e.type = s.origType,
                n = s.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    ue.submit || (pe.event.special.submit = {
        setup: function() {
            if (pe.nodeName(this, "form"))
                return !1;
            pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (pe.nodeName(this, "form"))
                return !1;
            pe.event.remove(this, "._submit")
        }
    }),
    ue.change || (pe.event.special.change = {
        setup: function() {
            if (Ve.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }),
                pe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    pe.event.simulate("change", this, e)
                })),
                !1;
            pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ve.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }),
                pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"),
            !Ve.test(this.nodeName)
        }
    }),
    ue.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = pe._data(i, t);
                o || i.addEventListener(e, n, !0),
                pe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = pe._data(i, t) - 1;
                o ? pe._data(i, t, o) : (i.removeEventListener(e, n, !0),
                pe._removeData(i, t))
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = y),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return pe.event.trigger(e, t, n, !0)
        }
    });
    var Ke = / jQuery\d+="(?:null|\d+)"/g
      , Je = new RegExp("<(?:" + Fe + ")[\\s/>]","i")
      , Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , et = /<script|<style|<link/i
      , tt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , nt = /^true\/(.*)/
      , it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ot = h(ie)
      , st = ot.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, s, r, a, l = pe.contains(e.ownerDocument, e);
            if (ue.html5Clone || pe.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (st.innerHTML = e.outerHTML,
            st.removeChild(s = st.firstChild)),
            !(ue.noCloneEvent && ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = f(s),
                a = f(e),
                r = 0; null != (o = a[r]); ++r)
                    i[r] && E(o, i[r]);
            if (t)
                if (n)
                    for (a = a || f(e),
                    i = i || f(s),
                    r = 0; null != (o = a[r]); r++)
                        T(o, i[r]);
                else
                    T(e, s);
            return i = f(s, "script"),
            i.length > 0 && m(i, !l && f(e, "script")),
            i = a = o = null,
            s
        },
        cleanData: function(e, t) {
            for (var n, i, o, s, r = 0, a = pe.expando, l = pe.cache, c = ue.attributes, d = pe.event.special; null != (n = e[r]); r++)
                if ((t || De(n)) && (o = n[a],
                s = o && l[o])) {
                    if (s.events)
                        for (i in s.events)
                            d[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, s.handle);
                    l[o] && (delete l[o],
                    c || void 0 === n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a),
                    ne.push(o))
                }
        }
    }),
    pe.fn.extend({
        domManip: k,
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return qe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    C(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return qe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : void 0;
                if ("string" == typeof e && !et.test(e) && (ue.htmlSerialize || !Je.test(e)) && (ue.leadingWhitespace || !ze.test(e)) && !_e[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (pe.cleanData(f(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return k(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(f(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = 0, o = [], s = pe(e), r = s.length - 1; i <= r; i++)
                n = i === r ? this : this.clone(!0),
                pe(s[i])[t](n),
                re.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var rt, at = {
        HTML: "block",
        BODY: "block"
    }, lt = /^margin/, ct = new RegExp("^(" + Be + ")(?!px)[a-z%]+$","i"), dt = function(e, t, n, i) {
        var o, s, r = {};
        for (s in t)
            r[s] = e.style[s],
            e.style[s] = t[s];
        o = n.apply(e, i || []);
        for (s in t)
            e.style[s] = r[s];
        return o
    }, ut = ie.documentElement;
    !function() {
        function t() {
            var t, d, u = ie.documentElement;
            u.appendChild(l),
            c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = o = a = !1,
            i = r = !0,
            e.getComputedStyle && (d = e.getComputedStyle(c),
            n = "1%" !== (d || {}).top,
            a = "2px" === (d || {}).marginLeft,
            o = "4px" === (d || {
                width: "4px"
            }).width,
            c.style.marginRight = "50%",
            i = "4px" === (d || {
                marginRight: "4px"
            }).marginRight,
            t = c.appendChild(ie.createElement("div")),
            t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            c.style.width = "1px",
            r = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            c.removeChild(t)),
            c.style.display = "none",
            s = 0 === c.getClientRects().length,
            s && (c.style.display = "",
            c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            c.childNodes[0].style.borderCollapse = "separate",
            t = c.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (s = 0 === t[0].offsetHeight) && (t[0].style.display = "",
            t[1].style.display = "none",
            s = 0 === t[0].offsetHeight)),
            u.removeChild(l)
        }
        var n, i, o, s, r, a, l = ie.createElement("div"), c = ie.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5",
        ue.opacity = "0.5" === c.style.opacity,
        ue.cssFloat = !!c.style.cssFloat,
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        ue.clearCloneStyle = "content-box" === c.style.backgroundClip,
        l = ie.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        c.innerHTML = "",
        l.appendChild(c),
        ue.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing,
        pe.extend(ue, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                s
            },
            boxSizingReliable: function() {
                return null == n && t(),
                o
            },
            pixelMarginRight: function() {
                return null == n && t(),
                i
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                r
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                a
            }
        }))
    }();
    var pt, ht, ft = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    ht = function(e, t, n) {
        var i, o, s, r, a = e.style;
        return n = n || pt(e),
        r = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== r && void 0 !== r || pe.contains(e.ownerDocument, e) || (r = pe.style(e, t)),
        n && !ue.pixelMarginRight() && ct.test(r) && lt.test(t) && (i = a.width,
        o = a.minWidth,
        s = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = r,
        r = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = s),
        void 0 === r ? r : r + ""
    }
    ) : ut.currentStyle && (pt = function(e) {
        return e.currentStyle
    }
    ,
    ht = function(e, t, n) {
        var i, o, s, r, a = e.style;
        return n = n || pt(e),
        r = n ? n[t] : void 0,
        null == r && a && a[t] && (r = a[t]),
        ct.test(r) && !ft.test(t) && (i = a.left,
        o = e.runtimeStyle,
        s = o && o.left,
        s && (o.left = e.currentStyle.left),
        a.left = "fontSize" === t ? "1em" : r,
        r = a.pixelLeft + "px",
        a.left = i,
        s && (o.left = s)),
        void 0 === r ? r : r + "" || "auto"
    }
    );
    var mt = /alpha\([^)]*\)/i
      , gt = /opacity\s*=\s*([^)]*)/i
      , vt = /^(none|table(?!-c[ea]).+)/
      , bt = new RegExp("^(" + Be + ")(.*)$","i")
      , yt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , xt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , wt = ["Webkit", "O", "Moz", "ms"]
      , Ct = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
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
            float: ue.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = pe.camelCase(t), l = e.style;
                if (t = pe.cssProps[a] || (pe.cssProps[a] = O(a) || a),
                r = pe.cssHooks[t] || pe.cssHooks[a],
                void 0 === n)
                    return r && "get"in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t];
                if (s = typeof n,
                "string" === s && (o = Le.exec(n)) && o[1] && (n = p(e, t, o),
                s = "number"),
                null != n && n === n && ("number" === s && (n += o && o[3] || (pe.cssNumber[a] ? "" : "px")),
                ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(r && "set"in r && void 0 === (n = r.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = O(a) || a),
            r = pe.cssHooks[t] || pe.cssHooks[a],
            r && "get"in r && (s = r.get(e, !0, n)),
            void 0 === s && (s = ht(e, t, i)),
            "normal" === s && t in xt && (s = xt[t]),
            "" === n || n ? (o = parseFloat(s),
            !0 === n || isFinite(o) ? o || 0 : s) : s
        }
    }),
    pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return vt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, yt, function() {
                        return H(e, t, i)
                    }) : H(e, t, i)
            },
            set: function(e, n, i) {
                var o = i && pt(e);
                return L(e, n, i ? j(e, t, i, ue.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    ue.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , o = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , s = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pe.trim(s.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = mt.test(s) ? s.replace(mt, o) : s + " " + o)
        }
    }),
    pe.cssHooks.marginRight = I(ue.reliableMarginRight, function(e, t) {
        if (t)
            return dt(e, {
                display: "inline-block"
            }, ht, [e, "marginRight"])
    }),
    pe.cssHooks.marginLeft = I(ue.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[e + je[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        },
        lt.test(e) || (pe.cssHooks[e + t].set = L)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return qe(this, function(e, t, n) {
                var i, o, s = {}, r = 0;
                if (pe.isArray(t)) {
                    for (i = pt(e),
                    o = t.length; r < o; r++)
                        s[t[r]] = pe.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }),
    pe.Tween = q,
    q.prototype = {
        constructor: q,
        init: function(e, t, n, i, o, s) {
            this.elem = e,
            this.prop = n,
            this.easing = o || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = s || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : q.propHooks._default.set(this),
            this
        }
    },
    q.prototype.init.prototype = q.prototype,
    q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = q.prototype.init,
    pe.fx.step = {};
    var $t, St, Tt = /^(?:toggle|show|hide)$/, Et = /queueHooks$/;
    pe.Animation = pe.extend(_, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, Le.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(ke);
            for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i],
                _.tweeners[n] = _.tweeners[n] || [],
                _.tweeners[n].unshift(t)
        },
        prefilters: [z],
        prefilter: function(e, t) {
            t ? _.prefilters.unshift(e) : _.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(He).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = pe.isEmptyObject(e)
              , s = pe.speed(t, n, i)
              , r = function() {
                var t = _(this, pe.extend({}, e), s);
                (o || pe._data(this, "finish")) && t.stop(!0)
            };
            return r.finish = r,
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , s = pe.timers
                  , r = pe._data(this);
                if (o)
                    r[o] && r[o].stop && i(r[o]);
                else
                    for (o in r)
                        r[o] && r[o].stop && Et.test(o) && i(r[o]);
                for (o = s.length; o--; )
                    s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n),
                    t = !1,
                    s.splice(o, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = pe._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], s = pe.timers, r = i ? i.length : 0;
                for (n.finish = !0,
                pe.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = s.length; t--; )
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0),
                    s.splice(t, 1));
                for (t = 0; t < r; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o)
        }
    }),
    pe.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = pe.timers, n = 0;
        for ($t = pe.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(),
        $t = void 0
    }
    ,
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        e() ? pe.fx.start() : pe.timers.pop()
    }
    ,
    pe.fx.interval = 13,
    pe.fx.start = function() {
        St || (St = e.setInterval(pe.fx.tick, pe.fx.interval))
    }
    ,
    pe.fx.stop = function() {
        e.clearInterval(St),
        St = null
    }
    ,
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e, t = ie.createElement("input"), n = ie.createElement("div"), i = ie.createElement("select"), o = i.appendChild(ie.createElement("option"));
        n = ie.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        ue.getSetAttribute = "t" !== n.className,
        ue.style = /top/.test(e.getAttribute("style")),
        ue.hrefNormalized = "/a" === e.getAttribute("href"),
        ue.checkOn = !!t.value,
        ue.optSelected = o.selected,
        ue.enctype = !!ie.createElement("form").enctype,
        i.disabled = !0,
        ue.optDisabled = !o.disabled,
        t = ie.createElement("input"),
        t.setAttribute("value", ""),
        ue.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        ue.radioValue = "t" === t.value
    }();
    var kt = /\r/g
      , At = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            {
                if (arguments.length)
                    return i = pe.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, pe(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                    "string" == typeof n ? n.replace(kt, "") : null == n ? "" : n)
            }
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(At, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : i.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                        if (n = i[l],
                        (n.selected || l === o) && (ue.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(),
                            s)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = pe.makeArray(t), r = o.length; r--; )
                        if (i = o[r],
                        pe.inArray(pe.valHooks.option.get(i), s) > -1)
                            try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t))
                    return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        },
        ue.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Nt, Dt, It = pe.expr.attrHandle, Ot = /^(?:checked|selected)$/i, Bt = ue.getSetAttribute, Lt = ue.input;
    pe.fn.extend({
        attr: function(e, t) {
            return qe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (t = t.toLowerCase(),
                o = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Dt : Nt)),
                void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0, s = t && t.match(ke);
            if (s && 1 === e.nodeType)
                for (; n = s[o++]; )
                    i = pe.propFix[n] || n,
                    pe.expr.match.bool.test(n) ? Lt && Bt || !Ot.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""),
                    e.removeAttribute(Bt ? n : i)
        }
    }),
    Dt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Lt && Bt || !Ot.test(n) ? e.setAttribute(!Bt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = It[t] || pe.find.attr;
        Lt && Bt || !Ot.test(t) ? It[t] = function(e, t, i) {
            var o, s;
            return i || (s = It[t],
            It[t] = o,
            o = null != n(e, t, i) ? t.toLowerCase() : null,
            It[t] = s),
            o
        }
        : It[t] = function(e, t, n) {
            if (!n)
                return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Lt && Bt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            if (!pe.nodeName(e, "input"))
                return Nt && Nt.set(e, t, n);
            e.defaultValue = t
        }
    }),
    Bt || (Nt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n))
                return t
        }
    },
    It.id = It.name = It.coords = function(e, t, n) {
        var i;
        if (!n)
            return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)
                return n.value
        },
        set: Nt.set
    },
    pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Nt.set(e, "" !== t && t, n)
        }
    },
    pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n)
                    return e.setAttribute(t, "auto"),
                    n
            }
        }
    })),
    ue.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var jt = /^(?:input|select|textarea|button|object)$/i
      , Ht = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return qe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                o = pe.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ue.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ue.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    ue.enctype || (pe.propFix.enctype = "encoding");
    var qt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, W(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(ke) || []; n = this[l++]; )
                    if (o = W(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(qt, " ")) {
                        for (r = 0; s = t[r++]; )
                            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = pe.trim(i),
                        o !== a && pe.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(ke) || []; n = this[l++]; )
                    if (o = W(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace(qt, " ")) {
                        for (r = 0; s = t[r++]; )
                            for (; i.indexOf(" " + s + " ") > -1; )
                                i = i.replace(" " + s + " ", " ");
                        a = pe.trim(i),
                        o !== a && pe.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, i, o, s;
                if ("string" === n)
                    for (i = 0,
                    o = pe(this),
                    s = e.match(ke) || []; t = s[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = W(this),
                    t && pe._data(this, "__className__", t),
                    pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + W(n) + " ").replace(qt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Pt = e.location
      , Rt = pe.now()
      , Mt = /\?/
      , zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null, o = pe.trim(t + "");
        return o && !pe.trim(o.replace(zt, function(e, t, o, s) {
            return n && t && (i = 0),
            0 === i ? e : (n = o || t,
            i += !s - !o,
            "")
        })) ? Function("return " + o)() : pe.error("Invalid JSON: " + t)
    }
    ,
    pe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (i = new e.DOMParser,
            n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    }
    ;
    var Ft = /#.*$/
      , _t = /([?&])_=[^&]*/
      , Wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Vt = /^(?:GET|HEAD)$/
      , Xt = /^\/\//
      , Qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Gt = {}
      , Yt = {}
      , Kt = "*/".concat("*")
      , Jt = Pt.href
      , Zt = Qt.exec(Jt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Jt,
            type: "GET",
            isLocal: Ut.test(Zt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
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
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e)
        },
        ajaxPrefilter: U(Gt),
        ajaxTransport: U(Yt),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var s, u, b, y, w, $ = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                d = void 0,
                a = o || "",
                C.readyState = t > 0 ? 4 : 0,
                s = t >= 200 && t < 300 || 304 === t,
                i && (y = Q(p, C, i)),
                y = G(p, y, C, s),
                s ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"),
                w && (pe.lastModified[r] = w),
                (w = C.getResponseHeader("etag")) && (pe.etag[r] = w)),
                204 === t || "HEAD" === p.type ? $ = "nocontent" : 304 === t ? $ = "notmodified" : ($ = y.state,
                u = y.data,
                b = y.error,
                s = !b)) : (b = $,
                !t && $ || ($ = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (n || $) + "",
                s ? m.resolveWith(h, [u, $, C]) : m.rejectWith(h, [C, $, b]),
                C.statusCode(v),
                v = void 0,
                c && f.trigger(s ? "ajaxSuccess" : "ajaxError", [C, p, s ? u : b]),
                g.fireWith(h, [C, $]),
                c && (f.trigger("ajaxComplete", [C, p]),
                --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, s, r, a, l, c, d, u, p = pe.ajaxSetup({}, n), h = p.context || p, f = p.context && (h.nodeType || h.jquery) ? pe(h) : pe.event, m = pe.Deferred(), g = pe.Callbacks("once memory"), v = p.statusCode || {}, b = {}, y = {}, x = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!u)
                            for (u = {}; t = Wt.exec(a); )
                                u[t[1].toLowerCase()] = t[2];
                        t = u[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (x < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return d && d.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((t || p.url || Jt) + "").replace(Ft, "").replace(Xt, Zt[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = pe.trim(p.dataType || "*").toLowerCase().match(ke) || [""],
            null == p.crossDomain && (o = Qt.exec(p.url.toLowerCase()),
            p.crossDomain = !(!o || o[1] === Zt[1] && o[2] === Zt[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Zt[3] || ("http:" === Zt[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = pe.param(p.data, p.traditional)),
            V(Gt, p, n, C),
            2 === x)
                return C;
            c = pe.event && p.global,
            c && 0 == pe.active++ && pe.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Vt.test(p.type),
            r = p.url,
            p.hasContent || (p.data && (r = p.url += (Mt.test(r) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = _t.test(r) ? r.replace(_t, "$1_=" + Rt++) : r + (Mt.test(r) ? "&" : "?") + "_=" + Rt++)),
            p.ifModified && (pe.lastModified[r] && C.setRequestHeader("If-Modified-Since", pe.lastModified[r]),
            pe.etag[r] && C.setRequestHeader("If-None-Match", pe.etag[r])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]);
            for (s in p.headers)
                C.setRequestHeader(s, p.headers[s]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || 2 === x))
                return C.abort();
            w = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            })
                C[s](p[s]);
            if (d = V(Yt, p, n, C)) {
                if (C.readyState = 1,
                c && f.trigger("ajaxSend", [C, p]),
                2 === x)
                    return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    x = 1,
                    d.send(b, i)
                } catch (e) {
                    if (!(x < 2))
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }),
    pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, o) {
            return pe.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pe.expr.filters.hidden = function(e) {
        return ue.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e)
    }
    ,
    pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    }
    ;
    var en = /%20/g
      , tn = /\[\]$/
      , nn = /\r?\n/g
      , on = /^(?:submit|button|image|reset|file)$/i
      , sn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
        pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                J(n, e[n], t, o);
        return i.join("&").replace(en, "+")
    }
    ,
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !on.test(e) && (this.checked || !Pe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                }
            }).get()
        }
    }),
    pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }
    : Z;
    var rn = 0
      , an = {}
      , ln = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in an)
            an[e](void 0, !0)
    }),
    ue.cors = !!ln && "withCredentials"in ln,
    ln = ue.ajax = !!ln,
    ln && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || ue.cors) {
            var n;
            return {
                send: function(i, o) {
                    var s, r = t.xhr(), a = ++rn;
                    if (r.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            r[s] = t.xhrFields[s];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i)
                        void 0 !== i[s] && r.setRequestHeader(s, i[s] + "");
                    r.send(t.hasContent && t.data || null),
                    n = function(e, i) {
                        var s, l, c;
                        if (n && (i || 4 === r.readyState))
                            if (delete an[a],
                            n = void 0,
                            r.onreadystatechange = pe.noop,
                            i)
                                4 !== r.readyState && r.abort();
                            else {
                                c = {},
                                s = r.status,
                                "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && o(s, l, c, r.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === r.readyState ? e.setTimeout(n) : r.onreadystatechange = an[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e),
                e
            }
        }
    }),
    pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function(i, o) {
                    t = ie.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || o(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = cn.pop() || pe.expando + "_" + Rt++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(dn, "$1" + o) : !1 !== t.jsonp && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return r || pe.error(o + " was not called"),
                r[0]
            }
            ,
            t.dataTypes[0] = "json",
            s = e[o],
            e[o] = function() {
                r = arguments
            }
            ,
            i.always(function() {
                void 0 === s ? pe(e).removeProp(o) : e[o] = s,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                cn.push(o)),
                r && pe.isFunction(s) && s(r[0]),
                r = s = void 0
            }),
            "script"
    }),
    pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ie;
        var i = we.exec(e)
          , o = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, o),
        o && o.length && pe(o).remove(),
        pe.merge([], i.childNodes))
    }
    ;
    var un = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && un)
            return un.apply(this, arguments);
        var i, o, s, r = this, a = e.indexOf(" ");
        return a > -1 && (i = pe.trim(e.slice(a, e.length)),
        e = e.slice(0, a)),
        pe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        r.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments,
            r.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    pe.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c, d = pe.css(e, "position"), u = pe(e), p = {};
            "static" === d && (e.style.position = "relative"),
            a = u.offset(),
            s = pe.css(e, "top"),
            l = pe.css(e, "left"),
            c = ("absolute" === d || "fixed" === d) && pe.inArray("auto", [s, l]) > -1,
            c ? (i = u.position(),
            r = i.top,
            o = i.left) : (r = parseFloat(s) || 0,
            o = parseFloat(l) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + r),
            null != t.left && (p.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, p) : u.css(p)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t, n, i = {
                top: 0,
                left: 0
            }, o = this[0], s = o && o.ownerDocument;
            if (s)
                return t = s.documentElement,
                pe.contains(t, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()),
                n = te(s),
                {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += pe.css(e[0], "borderTopWidth", !0),
                n.left += pe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); )
                    e = e.offsetParent;
                return e || ut
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(i) {
            return qe(this, function(e, i, o) {
                var s = te(e);
                if (void 0 === o)
                    return s ? t in s ? s[t] : s.document.documentElement[i] : e[i];
                s ? s.scrollTo(n ? pe(s).scrollLeft() : o, n ? o : pe(s).scrollTop()) : e[i] = o
            }, e, i, arguments.length, null)
        }
    }),
    pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = I(ue.pixelPosition, function(e, n) {
            if (n)
                return n = ht(e, t),
                ct.test(n) ? pe(e).position()[t] + "px" : n
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i)
                  , r = n || (!0 === i || !0 === o ? "margin" : "border");
                return qe(this, function(t, n, i) {
                    var o;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? pe.css(t, n, r) : pe.style(t, n, i, r)
                }, t, s ? i : void 0, s, null)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.fn.size = function() {
        return this.length
    }
    ,
    pe.fn.andSelf = pe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pn = e.jQuery
      , hn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = hn),
        t && e.jQuery === pe && (e.jQuery = pn),
        pe
    }
    ,
    t || (e.jQuery = e.$ = pe),
    pe
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t),
        this
    }
    ,
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var n = e(this)
              , o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)),
            "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
      , i = function(t) {
        e(t).on("click", n, this.close)
    };
    i.VERSION = "3.3.6",
    i.TRANSITION_DURATION = 150,
    i.prototype.close = function(t) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this)
          , s = o.attr("data-target");
        s || (s = o.attr("href"),
        s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = e(s);
        t && t.preventDefault(),
        r.length || (r = o.closest(".alert")),
        r.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (r.removeClass("in"),
        e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    }
    ;
    var o = e.fn.alert;
    e.fn.alert = t,
    e.fn.alert.Constructor = i,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = o,
        this
    }
    ,
    e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.button")
              , s = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this,s)),
            "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.3.6",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled"
          , i = this.$element
          , o = i.is("input") ? "val" : "html"
          , s = i.data();
        t += "Text",
        null == s.resetText && i.data("resetText", i[o]()),
        setTimeout(e.proxy(function() {
            i[o](null == s[t] ? this.options[t] : s[t]),
            "loadingText" == t ? (this.isLoading = !0,
            i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var i = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = i,
        this
    }
    ,
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")),
        t.call(i, "toggle"),
        e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.carousel")
              , s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t)
              , r = "string" == typeof t ? t : s.slide;
            o || i.data("bs.carousel", o = new n(this,s)),
            "number" == typeof t ? o.to(t) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)
            return t;
        var i = "prev" == e ? -1 : 1
          , o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }
    ,
    n.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }
    ,
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active")
          , s = i || this.getItemForDirection(t, o)
          , r = this.interval
          , a = "next" == t ? "left" : "right"
          , l = this;
        if (s.hasClass("active"))
            return this.sliding = !1;
        var c = s[0]
          , d = e.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(d),
        !d.isDefaultPrevented()) {
            if (this.sliding = !0,
            r && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = e(this.$indicators.children()[this.getItemIndex(s)]);
                u && u.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(t),
            s[0].offsetWidth,
            o.addClass(a),
            s.addClass(a),
            o.one("bsTransitionEnd", function() {
                s.removeClass([t, a].join(" ")).addClass("active"),
                o.removeClass(["active", a].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"),
            s.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(p)),
            r && this.cycle(),
            this
        }
    }
    ;
    var i = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i,
        this
    }
    ;
    var o = function(n) {
        var i, o = e(this), s = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = e.extend({}, s.data(), o.data())
              , a = o.attr("data-slide-to");
            a && (r.interval = !1),
            t.call(s, r),
            a && s.data("bs.carousel").to(a),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
    e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }
    function n(t) {
        return this.each(function() {
            var n = e(this)
              , o = n.data("bs.collapse")
              , s = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
            o || n.data("bs.collapse", o = new i(this,s)),
            "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, i.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
                var s = e.Event("show.bs.collapse");
                if (this.$element.trigger(s),
                !s.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"),
                    t || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)
                        return a.call(this);
                    var l = e.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }
    ,
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!e.support.transition)
                    return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }
    ,
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }
    ,
    i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var o = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = i,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o,
        this
    }
    ,
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var s = t(o)
          , r = s.data("bs.collapse")
          , a = r ? "toggle" : o.data();
        n.call(s, a)
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }
    function n(n) {
        n && 3 === n.which || (e(o).remove(),
        e(s).each(function() {
            var i = e(this)
              , o = t(i)
              , s = {
                relatedTarget: this
            };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", s)),
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
            o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", s)))))
        }))
    }
    function i(t) {
        return this.each(function() {
            var n = e(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)),
            "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop"
      , s = '[data-toggle="dropdown"]'
      , r = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.6",
    r.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var s = t(o)
              , r = s.hasClass("open");
            if (n(),
            !r) {
                "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = e.Event("show.bs.dropdown", a)),
                i.isDefaultPrevented())
                    return;
                o.trigger("focus").attr("aria-expanded", "true"),
                s.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }
    ,
    r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var o = t(i)
                  , r = o.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which)
                    return 27 == n.which && o.find(s).trigger("focus"),
                    i.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--,
                    40 == n.which && l < a.length - 1 && l++,
                    ~l || (l = 0),
                    a.eq(l).trigger("focus")
                }
            }
        }
    }
    ;
    var a = e.fn.dropdown;
    e.fn.dropdown = i,
    e.fn.dropdown.Constructor = r,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a,
        this
    }
    ,
    e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";
    function t(t, i) {
        return this.each(function() {
            var o = e(this)
              , s = o.data("bs.modal")
              , r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            s || o.data("bs.modal", s = new n(this,r)),
            "string" == typeof t ? s[t](i) : r.show && s.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    n.prototype.show = function(t) {
        var i = this
          , o = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var s = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }
    ,
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        e(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(t) {
        var i = this
          , o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                if (this.ignoreBackdropClick)
                    return void (this.ignoreBackdropClick = !1);
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else
            t && t()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var i = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = i,
        this
    }
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this)
          , o = i.attr("href")
          , s = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
          , r = s.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(o) && o
        }, s.data(), i.data());
        i.is("a") && n.preventDefault(),
        s.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }),
        t.call(s, r, this)
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.tooltip")
              , s = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this,s)),
            "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
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
    },
    n.prototype.init = function(t, n, i) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = e(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--; ) {
            var r = o[s];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin"
                  , l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }),
        t
    }
    ,
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }
    ,
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i)
                return;
            var o = this
              , s = this.tip()
              , r = this.getUID(this.type);
            this.setContent(),
            s.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , c = l.test(a);
            c && (a = a.replace(l, "") || "top"),
            s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition()
              , u = s[0].offsetWidth
              , p = s[0].offsetHeight;
            if (c) {
                var h = a
                  , f = this.getPosition(this.$viewport);
                a = "bottom" == a && d.bottom + p > f.bottom ? "top" : "top" == a && d.top - p < f.top ? "bottom" : "right" == a && d.right + u > f.width ? "left" : "left" == a && d.left - u < f.left ? "right" : a,
                s.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, d, u, p);
            this.applyPlacement(m, a);
            var g = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type),
                o.hoverState = null,
                "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }
    ,
    n.prototype.applyPlacement = function(t, n) {
        var i = this.tip()
          , o = i[0].offsetWidth
          , s = i[0].offsetHeight
          , r = parseInt(i.css("margin-top"), 10)
          , a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0),
        isNaN(a) && (a = 0),
        t.top += r,
        t.left += a,
        e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , c = i[0].offsetHeight;
        "top" == n && c != s && (t.top = t.top + s - c);
        var d = this.getViewportAdjustedDelta(n, t, l, c);
        d.left ? t.left += d.left : t.top += d.top;
        var u = /top|bottom/.test(n)
          , p = u ? 2 * d.left - o + l : 2 * d.top - s + c
          , h = u ? "offsetWidth" : "offsetHeight";
        i.offset(t),
        this.replaceArrow(p, i[0][h], u)
    }
    ,
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && s.detach(),
            o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type),
            t && t()
        }
        var o = this
          , s = e(this.$tip)
          , r = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(r),
        !r.isDefaultPrevented())
            return s.removeClass("in"),
            e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
            this.hoverState = null,
            this
    }
    ,
    n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0]
          , i = "BODY" == n.tagName
          , o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = i ? {
            top: 0,
            left: 0
        } : t.offset()
          , r = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , a = i ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, o, r, a, s)
    }
    ,
    n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return o;
        var s = this.options.viewport && this.options.viewport.padding || 0
          , r = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - s - r.scroll
              , l = t.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = t.left - s
              , d = t.left + s + n;
            c < r.left ? o.left = r.left - c : d > r.right && (o.left = r.left + r.width - d)
        }
        return o
    }
    ,
    n.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    n.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null
        })
    }
    ;
    var i = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.popover")
              , s = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this,s)),
            "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6",
    n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var i = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = i,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    function t(n, i) {
        this.$body = e(document.body),
        this.$scrollElement = e(e(n).is(document.body) ? window : n),
        this.options = e.extend({}, t.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.scrollspy")
              , s = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this,s)),
            "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.6",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    t.prototype.refresh = function() {
        var t = this
          , n = "offset"
          , i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position",
        i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var t = e(this)
              , o = t.data("target") || t.attr("href")
              , s = /^#./.test(o) && e(o);
            return s && s.length && s.is(":visible") && [[s[n]().top + i, o]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        })
    }
    ,
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= i)
            return r != (e = s[s.length - 1]) && this.activate(e);
        if (r && t < o[0])
            return this.activeTarget = null,
            this.clear();
        for (e = o.length; e--; )
            r != s[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(s[e])
    }
    ,
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ,
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i,
        this
    }
    ,
    e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)),
            "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element
          , n = t.closest("ul:not(.dropdown-menu)")
          , i = t.data("target");
        if (i || (i = t.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")
              , s = e.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , r = e.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
            if (o.trigger(s),
            t.trigger(r),
            !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n),
                this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(t, i, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (t[0].offsetWidth,
            t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            o && o()
        }
        var r = i.find("> .active")
          , a = o && e.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(),
        r.removeClass("in")
    }
    ;
    var i = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = i,
        this
    }
    ;
    var o = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var i = e(this)
              , o = i.data("bs.affix")
              , s = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this,s)),
            "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.6",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop()
          , s = this.$element.offset()
          , r = this.$target.height();
        if (null != n && "top" == this.affixed)
            return o < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= e - i) && "bottom";
        var a = null == this.affixed
          , l = a ? o : s.top
          , c = a ? r : t;
        return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height()
              , i = this.options.offset
              , o = i.top
              , s = i.bottom
              , r = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (s = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof s && (s = i.bottom(this.$element));
            var a = this.getState(r, t, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : "")
                  , c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c),
                c.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - t - s
            })
        }
    }
    ;
    var i = e.fn.affix;
    e.fn.affix = t,
    e.fn.affix.Constructor = n,
    e.fn.affix.noConflict = function() {
        return e.fn.affix = i,
        this
    }
    ,
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this)
              , i = n.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            t.call(n, i)
        })
    })
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function(e) {
    !function(e) {
        "use strict";
        function t(t) {
            var n = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return e.each(n, function() {
                t = t.replace(this.re, this.ch)
            }),
            t
        }
        function n(e) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }
              , n = "(?:" + Object.keys(t).join("|") + ")"
              , i = new RegExp(n)
              , o = new RegExp(n,"g")
              , s = null == e ? "" : "" + e;
            return i.test(s) ? s.replace(o, function(e) {
                return t[e]
            }) : s
        }
        function i(t, n) {
            var i = arguments
              , s = t
              , r = n;
            [].shift.apply(i);
            var a, l = this.each(function() {
                var t = e(this);
                if (t.is("select")) {
                    var n = t.data("selectpicker")
                      , l = "object" == typeof s && s;
                    if (n) {
                        if (l)
                            for (var c in l)
                                l.hasOwnProperty(c) && (n.options[c] = l[c])
                    } else {
                        var d = e.extend({}, o.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
                        d.template = e.extend({}, o.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, l.template),
                        t.data("selectpicker", n = new o(this,d,r))
                    }
                    "string" == typeof s && (a = n[s]instanceof Function ? n[s].apply(n, i) : n.options[s])
                }
            });
            return void 0 !== a ? a : l
        }
        String.prototype.includes || function() {
            var e = {}.toString
              , t = function() {
                try {
                    var e = {}
                      , t = Object.defineProperty
                      , n = t(e, e, e) && t
                } catch (e) {}
                return n
            }()
              , n = "".indexOf
              , i = function(t) {
                if (null == this)
                    throw new TypeError;
                var i = String(this);
                if (t && "[object RegExp]" == e.call(t))
                    throw new TypeError;
                var o = i.length
                  , s = String(t)
                  , r = s.length
                  , a = arguments.length > 1 ? arguments[1] : void 0
                  , l = a ? Number(a) : 0;
                return l != l && (l = 0),
                !(r + Math.min(Math.max(l, 0), o) > o) && -1 != n.call(i, s, l)
            };
            t ? t(String.prototype, "includes", {
                value: i,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = i
        }(),
        String.prototype.startsWith || function() {
            var e = function() {
                try {
                    var e = {}
                      , t = Object.defineProperty
                      , n = t(e, e, e) && t
                } catch (e) {}
                return n
            }()
              , t = {}.toString
              , n = function(e) {
                if (null == this)
                    throw new TypeError;
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e))
                    throw new TypeError;
                var i = n.length
                  , o = String(e)
                  , s = o.length
                  , r = arguments.length > 1 ? arguments[1] : void 0
                  , a = r ? Number(r) : 0;
                a != a && (a = 0);
                var l = Math.min(Math.max(a, 0), i);
                if (s + l > i)
                    return !1;
                for (var c = -1; ++c < s; )
                    if (n.charCodeAt(l + c) != o.charCodeAt(c))
                        return !1;
                return !0
            };
            e ? e(String.prototype, "startsWith", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = n
        }(),
        Object.keys || (Object.keys = function(e, t, n) {
            n = [];
            for (t in e)
                n.hasOwnProperty.call(e, t) && n.push(t);
            return n
        }
        ),
        e.fn.triggerNative = function(e) {
            var t, n = this[0];
            n.dispatchEvent ? ("function" == typeof Event ? t = new Event(e,{
                bubbles: !0
            }) : (t = document.createEvent("Event"),
            t.initEvent(e, !0, !1)),
            n.dispatchEvent(t)) : (n.fireEvent && (t = document.createEventObject(),
            t.eventType = e,
            n.fireEvent("on" + e, t)),
            this.trigger(e))
        }
        ,
        e.expr[":"].icontains = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().includes(i[3].toUpperCase())
        }
        ,
        e.expr[":"].ibegins = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
        }
        ,
        e.expr[":"].aicontains = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(i[3].toUpperCase())
        }
        ,
        e.expr[":"].aibegins = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
        }
        ;
        var o = function(t, n, i) {
            i && (i.stopPropagation(),
            i.preventDefault()),
            this.$element = e(t),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.$lis = null,
            this.options = n,
            null === this.options.title && (this.options.title = this.$element.attr("title")),
            this.val = o.prototype.val,
            this.render = o.prototype.render,
            this.refresh = o.prototype.refresh,
            this.setStyle = o.prototype.setStyle,
            this.selectAll = o.prototype.selectAll,
            this.deselectAll = o.prototype.deselectAll,
            this.destroy = o.prototype.destroy,
            this.remove = o.prototype.remove,
            this.show = o.prototype.show,
            this.hide = o.prototype.hide,
            this.init()
        };
        o.VERSION = "1.10.0",
        o.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        },
        o.prototype = {
            constructor: o,
            init: function() {
                var t = this
                  , n = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"),
                this.liObj = {},
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$newElement = this.createView(),
                this.$element.after(this.$newElement).appendTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(".dropdown-menu"),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element.removeClass("bs-select-hidden"),
                this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"),
                void 0 !== n && (this.$button.attr("data-id", n),
                e('label[for="' + n + '"]').click(function(e) {
                    e.preventDefault(),
                    t.$button.focus()
                })),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch && this.liveSearchListener(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.options.container && this.selectPosition(),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        t.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        t.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        t.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        t.$element.trigger("shown.bs.select", e)
                    }
                }),
                t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    t.$button.addClass("bs-invalid").focus(),
                    t.$element.on({
                        "focus.bs.select": function() {
                            t.$button.focus(),
                            t.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            t.$element.val(t.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && t.$button.removeClass("bs-invalid"),
                            t.$element.off("rendered.bs.select")
                        }
                    })
                }),
                setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : ""
                  , i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : ""
                  , o = this.autofocus ? " autofocus" : ""
                  , s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : ""
                  , r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : ""
                  , a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : ""
                  , l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : ""
                  , c = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + s + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                return e(c)
            },
            createView: function() {
                var e = this.createDropdown()
                  , t = this.createLi();
                return e.find("ul")[0].innerHTML = t,
                e
            },
            reloadLi: function() {
                this.destroyLi();
                var e = this.createLi();
                this.$menuInner[0].innerHTML = e
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var i = this
                  , o = []
                  , s = 0
                  , r = document.createElement("option")
                  , a = -1
                  , l = function(e, t, n, i) {
                    return "<li" + (void 0 !== n & "" !== n ? ' class="' + n + '"' : "") + (void 0 !== t & null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + e + "</li>"
                }
                  , c = function(e, o, s, r) {
                    return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== s ? ' style="' + s + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + t(n(e)) + '"' : "") + (void 0 !== r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + e + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (a--,
                !this.$element.find(".bs-title-option").length)) {
                    var d = this.$element[0];
                    r.className = "bs-title-option",
                    r.appendChild(document.createTextNode(this.options.title)),
                    r.value = "",
                    d.insertBefore(r, d.firstChild),
                    void 0 === e(d.options[d.selectedIndex]).attr("selected") && (r.selected = !0)
                }
                return this.$element.find("option").each(function(t) {
                    var n = e(this);
                    if (a++,
                    !n.hasClass("bs-title-option")) {
                        var r = this.className || ""
                          , d = this.style.cssText
                          , u = n.data("content") ? n.data("content") : n.html()
                          , p = n.data("tokens") ? n.data("tokens") : null
                          , h = void 0 !== n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : ""
                          , f = void 0 !== n.data("icon") ? '<span class="' + i.options.iconBase + " " + n.data("icon") + '"></span> ' : ""
                          , m = "OPTGROUP" === this.parentNode.tagName
                          , g = this.disabled || m && this.parentNode.disabled;
                        if ("" !== f && g && (f = "<span>" + f + "</span>"),
                        i.options.hideDisabled && g && !m)
                            return void a--;
                        if (n.data("content") || (u = f + '<span class="text">' + u + h + "</span>"),
                        m && !0 !== n.data("divider")) {
                            var v = " " + this.parentNode.className || "";
                            if (0 === n.index()) {
                                s += 1;
                                var b = this.parentNode.label
                                  , y = void 0 !== n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "";
                                b = (n.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + b + y + "</span>",
                                0 !== t && o.length > 0 && (a++,
                                o.push(l("", null, "divider", s + "div"))),
                                a++,
                                o.push(l(b, null, "dropdown-header" + v, s))
                            }
                            if (i.options.hideDisabled && g)
                                return void a--;
                            o.push(l(c(u, "opt " + r + v, d, p), t, "", s))
                        } else
                            !0 === n.data("divider") ? o.push(l("", t, "divider")) : !0 === n.data("hidden") ? o.push(l(c(u, r, d, p), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++,
                            o.push(l("", null, "divider", s + "div"))),
                            o.push(l(c(u, r, d, p), t)));
                        i.liObj[t] = a
                    }
                }),
                this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"),
                o.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")),
                this.$lis
            },
            render: function(t) {
                var n, i = this;
                !1 !== t && this.$element.find("option").each(function(e) {
                    var t = i.findLis().eq(i.liObj[e]);
                    i.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t),
                    i.setSelected(e, this.selected, t)
                }),
                this.tabIndex();
                var o = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled))
                            return;
                        var t, n = e(this), o = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                        return t = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "",
                        void 0 !== n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content") : o + n.html() + t
                    }
                }).toArray()
                  , s = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var r = this.options.selectedTextFormat.split(">");
                    if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
                        n = this.options.hideDisabled ? ", [disabled]" : "";
                        var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length;
                        s = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", a.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")),
                "static" == this.options.selectedTextFormat && (s = this.options.title),
                s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText),
                this.$button.attr("title", e.trim(s.replace(/<[^>]*>?/g, ""))),
                this.$button.children(".filter-option").html(s),
                this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var n = e || this.options.style;
                "add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style),
                this.$button.addClass(n))
            },
            liHeight: function(t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    var n = document.createElement("div")
                      , i = document.createElement("div")
                      , o = document.createElement("ul")
                      , s = document.createElement("li")
                      , r = document.createElement("li")
                      , a = document.createElement("a")
                      , l = document.createElement("span")
                      , c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null
                      , d = this.options.liveSearch ? document.createElement("div") : null
                      , u = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null
                      , p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (l.className = "text",
                    n.className = this.$menu[0].parentNode.className + " open",
                    i.className = "dropdown-menu open",
                    o.className = "dropdown-menu inner",
                    s.className = "divider",
                    l.appendChild(document.createTextNode("Inner text")),
                    a.appendChild(l),
                    r.appendChild(a),
                    o.appendChild(r),
                    o.appendChild(s),
                    c && i.appendChild(c),
                    d) {
                        var h = document.createElement("span");
                        d.className = "bs-searchbox",
                        h.className = "form-control",
                        d.appendChild(h),
                        i.appendChild(d)
                    }
                    u && i.appendChild(u),
                    i.appendChild(o),
                    p && i.appendChild(p),
                    n.appendChild(i),
                    document.body.appendChild(n);
                    var f = a.offsetHeight
                      , m = c ? c.offsetHeight : 0
                      , g = d ? d.offsetHeight : 0
                      , v = u ? u.offsetHeight : 0
                      , b = p ? p.offsetHeight : 0
                      , y = e(s).outerHeight(!0)
                      , x = "function" == typeof getComputedStyle && getComputedStyle(i)
                      , w = x ? null : e(i)
                      , C = parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth"))
                      , $ = C + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2;
                    document.body.removeChild(n),
                    this.sizeInfo = {
                        liHeight: f,
                        headerHeight: m,
                        searchHeight: g,
                        actionsHeight: v,
                        doneButtonHeight: b,
                        dividerHeight: y,
                        menuPadding: C,
                        menuExtras: $
                    }
                }
            },
            setSize: function() {
                if (this.findLis(),
                this.liHeight(),
                this.options.header && this.$menu.css("padding-top", 0),
                !1 !== this.options.size) {
                    var t, n, i, o, s = this, r = this.$menu, a = this.$menuInner, l = e(window), c = this.$newElement[0].offsetHeight, d = this.sizeInfo.liHeight, u = this.sizeInfo.headerHeight, p = this.sizeInfo.searchHeight, h = this.sizeInfo.actionsHeight, f = this.sizeInfo.doneButtonHeight, m = this.sizeInfo.dividerHeight, g = this.sizeInfo.menuPadding, v = this.sizeInfo.menuExtras, b = this.options.hideDisabled ? ".disabled" : "", y = function() {
                        i = s.$newElement.offset().top - l.scrollTop(),
                        o = l.height() - i - c
                    };
                    if (y(),
                    "auto" === this.options.size) {
                        var x = function() {
                            var l, c = function(t, n) {
                                return function(i) {
                                    return n ? i.classList ? i.classList.contains(t) : e(i).hasClass(t) : !(i.classList ? i.classList.contains(t) : e(i).hasClass(t))
                                }
                            }, m = s.$menuInner[0].getElementsByTagName("li"), b = Array.prototype.filter ? Array.prototype.filter.call(m, c("hidden", !1)) : s.$lis.not(".hidden"), x = Array.prototype.filter ? Array.prototype.filter.call(b, c("dropdown-header", !0)) : b.filter(".dropdown-header");
                            y(),
                            t = o - v,
                            s.options.container ? (r.data("height") || r.data("height", r.height()),
                            n = r.data("height")) : n = r.height(),
                            s.options.dropupAuto && s.$newElement.toggleClass("dropup", i > o && t - v < n),
                            s.$newElement.hasClass("dropup") && (t = i - v),
                            l = b.length + x.length > 3 ? 3 * d + v - 2 : 0,
                            r.css({
                                "max-height": t + "px",
                                overflow: "hidden",
                                "min-height": l + u + p + h + f + "px"
                            }),
                            a.css({
                                "max-height": t - u - p - h - f - g + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(l - g, 0) + "px"
                            })
                        };
                        x(),
                        this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", x),
                        l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", x)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(b).length > this.options.size) {
                        var w = this.$lis.not(".divider").not(b).children().slice(0, this.options.size).last().parent().index()
                          , C = this.$lis.slice(0, w + 1).filter(".divider").length;
                        t = d * this.options.size + C * m + g,
                        s.options.container ? (r.data("height") || r.data("height", r.height()),
                        n = r.data("height")) : n = r.height(),
                        s.options.dropupAuto && this.$newElement.toggleClass("dropup", i > o && t - v < n),
                        r.css({
                            "max-height": t + u + p + h + f + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }),
                        a.css({
                            "max-height": t - g + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var e = this.$menu.parent().clone().appendTo("body")
                      , t = this.options.container ? this.$newElement.clone().appendTo("body") : e
                      , n = e.children(".dropdown-menu").outerWidth()
                      , i = t.css("width", "auto").children("button").outerWidth();
                    e.remove(),
                    t.remove(),
                    this.$newElement.css("width", Math.max(n, i) + "px")
                } else
                    "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, n, i = this, o = function(e) {
                    i.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")),
                    t = e.offset(),
                    n = e.hasClass("dropup") ? 0 : e[0].offsetHeight,
                    i.$bsContainer.css({
                        top: t.top + n,
                        left: t.left,
                        width: e[0].offsetWidth
                    })
                };
                this.$button.on("click", function() {
                    var t = e(this);
                    i.isDisabled() || (o(i.$newElement),
                    i.$bsContainer.appendTo(i.options.container).toggleClass("open", !t.hasClass("open")).append(i.$menu))
                }),
                e(window).on("resize scroll", function() {
                    o(i.$newElement)
                }),
                this.$element.on("hide.bs.select", function() {
                    i.$menu.data("height", i.$menu.height()),
                    i.$bsContainer.detach()
                })
            },
            setSelected: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])),
                n.toggleClass("selected", t)
            },
            setDisabled: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])),
                t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"),
                this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"),
                this.$button.removeClass("disabled")),
                -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")),
                this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this
                  , n = e(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                    e.stopPropagation()
                }),
                n.data("spaceSelect", !1),
                this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && n.data("spaceSelect") && (e.preventDefault(),
                    n.data("spaceSelect", !1))
                }),
                this.$button.on("click", function() {
                    t.setSize()
                }),
                this.$element.on("shown.bs.select", function() {
                    if (t.options.liveSearch || t.multiple) {
                        if (!t.multiple) {
                            var e = t.liObj[t.$element[0].selectedIndex];
                            if ("number" != typeof e || !1 === t.options.size)
                                return;
                            var n = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                            n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2,
                            t.$menuInner[0].scrollTop = n
                        }
                    } else
                        t.$menuInner.find(".selected a").focus()
                }),
                this.$menuInner.on("click", "li a", function(n) {
                    var i = e(this)
                      , o = i.parent().data("originalIndex")
                      , s = t.$element.val()
                      , r = t.$element.prop("selectedIndex");
                    if (t.multiple && n.stopPropagation(),
                    n.preventDefault(),
                    !t.isDisabled() && !i.parent().hasClass("disabled")) {
                        var a = t.$element.find("option")
                          , l = a.eq(o)
                          , c = l.prop("selected")
                          , d = l.parent("optgroup")
                          , u = t.options.maxOptions
                          , p = d.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (l.prop("selected", !c),
                            t.setSelected(o, !c),
                            i.blur(),
                            !1 !== u || !1 !== p) {
                                var h = u < a.filter(":selected").length
                                  , f = p < d.find("option:selected").length;
                                if (u && h || p && f)
                                    if (u && 1 == u)
                                        a.prop("selected", !1),
                                        l.prop("selected", !0),
                                        t.$menuInner.find(".selected").removeClass("selected"),
                                        t.setSelected(o, !0);
                                    else if (p && 1 == p) {
                                        d.find("option:selected").prop("selected", !1),
                                        l.prop("selected", !0);
                                        var m = i.parent().data("optgroup");
                                        t.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"),
                                        t.setSelected(o, !0)
                                    } else {
                                        var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(u, p) : t.options.maxOptionsText
                                          , v = g[0].replace("{n}", u)
                                          , b = g[1].replace("{n}", p)
                                          , y = e('<div class="notify"></div>');
                                        g[2] && (v = v.replace("{var}", g[2][u > 1 ? 0 : 1]),
                                        b = b.replace("{var}", g[2][p > 1 ? 0 : 1])),
                                        l.prop("selected", !1),
                                        t.$menu.append(y),
                                        u && h && (y.append(e("<div>" + v + "</div>")),
                                        t.$element.trigger("maxReached.bs.select")),
                                        p && f && (y.append(e("<div>" + b + "</div>")),
                                        t.$element.trigger("maxReachedGrp.bs.select")),
                                        setTimeout(function() {
                                            t.setSelected(o, !1)
                                        }, 10),
                                        y.delay(750).fadeOut(300, function() {
                                            e(this).remove()
                                        })
                                    }
                            }
                        } else
                            a.prop("selected", !1),
                            l.prop("selected", !0),
                            t.$menuInner.find(".selected").removeClass("selected"),
                            t.setSelected(o, !0);
                        t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(),
                        (s != t.$element.val() && t.multiple || r != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.trigger("changed.bs.select", [o, l.prop("selected"), c]).triggerNative("change")
                    }
                }),
                this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(n) {
                    n.currentTarget == this && (n.preventDefault(),
                    n.stopPropagation(),
                    t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                }),
                this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                }),
                this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn", function(n) {
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(),
                    n.preventDefault(),
                    n.stopPropagation(),
                    e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                }),
                this.$element.change(function() {
                    t.render(!1)
                })
            },
            liveSearchListener: function() {
                var i = this
                  , o = e('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    i.$menuInner.find(".active").removeClass("active"),
                    i.$searchbox.val() && (i.$searchbox.val(""),
                    i.$lis.not(".is-hidden").removeClass("hidden"),
                    o.parent().length && o.remove()),
                    i.multiple || i.$menuInner.find(".selected").addClass("active"),
                    setTimeout(function() {
                        i.$searchbox.focus()
                    }, 10)
                }),
                this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }),
                this.$searchbox.on("input propertychange", function() {
                    if (i.$searchbox.val()) {
                        var s = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        s = i.options.liveSearchNormalize ? s.not(":a" + i._searchStyle() + '("' + t(i.$searchbox.val()) + '")') : s.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'),
                        s.parent().addClass("hidden"),
                        i.$lis.filter(".dropdown-header").each(function() {
                            var t = e(this)
                              , n = t.data("optgroup");
                            0 === i.$lis.filter("[data-optgroup=" + n + "]").not(t).not(".hidden").length && (t.addClass("hidden"),
                            i.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
                        });
                        var r = i.$lis.not(".hidden");
                        r.each(function(t) {
                            var n = e(this);
                            n.hasClass("divider") && (n.index() === r.first().index() || n.index() === r.last().index() || r.eq(t + 1).hasClass("divider")) && n.addClass("hidden")
                        }),
                        i.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(),
                        o.html(i.options.noneResultsText.replace("{0}", '"' + n(i.$searchbox.val()) + '"')).show(),
                        i.$menuInner.append(o))
                    } else
                        i.$lis.not(".is-hidden").removeClass("hidden"),
                        o.parent().length && o.remove();
                    i.$lis.filter(".active").removeClass("active"),
                    i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),
                    e(this).focus()
                })
            },
            _searchStyle: function() {
                return {
                    begins: "ibegins",
                    startsWith: "ibegins"
                }[this.options.liveSearchStyle] || "icontains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e),
                this.render(),
                this.$element) : this.$element.val()
            },
            changeAll: function(t) {
                void 0 === t && (t = !0),
                this.findLis();
                for (var n = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), o = i.length, s = [], r = 0; r < o; r++) {
                    var a = i[r].getAttribute("data-original-index");
                    s[s.length] = n.eq(a)[0]
                }
                e(s).prop("selected", t),
                this.render(!1),
                this.$element.trigger("changed.bs.select").triggerNative("change")
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                e = e || window.event,
                e && e.stopPropagation(),
                this.$button.trigger("click")
            },
            keydown: function(n) {
                var i, o, s, r, a, l, c, d, u, p = e(this), h = p.is("input") ? p.parent().parent() : p.parent(), f = h.data("this"), m = ":not(.disabled, .hidden, .dropdown-header, .divider)", g = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
                if (f.options.liveSearch && (h = p.parent().parent()),
                f.options.container && (h = f.$menu),
                i = e("[role=menu] li", h),
                u = f.$newElement.hasClass("open"),
                !u && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(),
                f.$menu.parent().addClass("open"),
                u = !0),
                f.$searchbox.focus()),
                f.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && u && 0 === f.$menu.find(".active").length && (n.preventDefault(),
                f.$menu.parent().removeClass("open"),
                f.options.container && f.$newElement.removeClass("open"),
                f.$button.focus()),
                i = e("[role=menu] li" + m, h),
                p.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = f.$menuInner.find("li"),
                i = f.options.liveSearchNormalize ? i.filter(":a" + f._searchStyle() + "(" + t(g[n.keyCode]) + ")") : i.filter(":" + f._searchStyle() + "(" + g[n.keyCode] + ")"))),
                i.length) {
                    if (/(38|40)/.test(n.keyCode.toString(10)))
                        o = i.index(i.find("a").filter(":focus").parent()),
                        r = i.filter(m).first().index(),
                        a = i.filter(m).last().index(),
                        s = i.eq(o).nextAll(m).eq(0).index(),
                        l = i.eq(o).prevAll(m).eq(0).index(),
                        c = i.eq(s).prevAll(m).eq(0).index(),
                        f.options.liveSearch && (i.each(function(t) {
                            e(this).hasClass("disabled") || e(this).data("index", t)
                        }),
                        o = i.index(i.filter(".active")),
                        r = i.first().data("index"),
                        a = i.last().data("index"),
                        s = i.eq(o).nextAll().eq(0).data("index"),
                        l = i.eq(o).prevAll().eq(0).data("index"),
                        c = i.eq(s).prevAll().eq(0).data("index")),
                        d = p.data("prevIndex"),
                        38 == n.keyCode ? (f.options.liveSearch && o--,
                        o != c && o > l && (o = l),
                        o < r && (o = r),
                        o == d && (o = a)) : 40 == n.keyCode && (f.options.liveSearch && o++,
                        -1 == o && (o = 0),
                        o != c && o < s && (o = s),
                        o > a && (o = a),
                        o == d && (o = r)),
                        p.data("prevIndex", o),
                        f.options.liveSearch ? (n.preventDefault(),
                        p.hasClass("dropdown-toggle") || (i.removeClass("active").eq(o).addClass("active").children("a").focus(),
                        p.focus())) : i.eq(o).children("a").focus();
                    else if (!p.is("input")) {
                        var v, b, y = [];
                        i.each(function() {
                            e(this).hasClass("disabled") || e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == g[n.keyCode] && y.push(e(this).index())
                        }),
                        v = e(document).data("keycount"),
                        v++,
                        e(document).data("keycount", v),
                        b = e.trim(e(":focus").text().toLowerCase()).substring(0, 1),
                        b != g[n.keyCode] ? (v = 1,
                        e(document).data("keycount", v)) : v >= y.length && (e(document).data("keycount", 0),
                        v > y.length && (v = 1)),
                        i.eq(y[v - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && f.options.selectOnTab) && u) {
                        if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(),
                        f.options.liveSearch)
                            /(32)/.test(n.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(),
                            p.focus());
                        else {
                            var x = e(":focus");
                            x.click(),
                            x.focus(),
                            n.preventDefault(),
                            e(document).data("spaceSelect", !0)
                        }
                        e(document).data("keycount", 0)
                    }
                    (/(^9$|27)/.test(n.keyCode.toString(10)) && u && (f.multiple || f.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !u) && (f.$menu.parent().removeClass("open"),
                    f.options.container && f.$newElement.removeClass("open"),
                    f.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null,
                this.liObj = {},
                this.reloadLi(),
                this.render(),
                this.checkDisabled(),
                this.liHeight(!0),
                this.setStyle(),
                this.setWidth(),
                this.$lis && this.$searchbox.trigger("propertychange"),
                this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var s = e.fn.selectpicker;
        e.fn.selectpicker = i,
        e.fn.selectpicker.Constructor = o,
        e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = s,
            this
        }
        ,
        e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }),
        e(window).on("load.bs.select.data-api", function() {
            e(".selectpicker").each(function() {
                var t = e(this);
                i.call(t, t.data())
            })
        })
    }(e)
}),
function(e) {
    jQuery.fn.extend({
        slimScroll: function(n) {
            var i = {
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }
              , o = e.extend(i, n);
            return this.each(function() {
                function i(t) {
                    if (c) {
                        var t = t || window.event
                          , n = 0;
                        t.wheelDelta && (n = -t.wheelDelta / 120),
                        t.detail && (n = t.detail / 3);
                        var i = t.target || t.srcTarget || t.srcElement;
                        e(i).closest("." + o.wrapperClass).is(x.parent()) && s(n, !0),
                        t.preventDefault && !y && t.preventDefault(),
                        y || (t.returnValue = !1)
                    }
                }
                function s(e, t, n) {
                    y = !1;
                    var i = e
                      , s = x.outerHeight() - T.outerHeight();
                    if (t && (i = parseInt(T.css("top")) + e * parseInt(o.wheelStep) / 100 * T.outerHeight(),
                    i = Math.min(Math.max(i, 0), s),
                    i = e > 0 ? Math.ceil(i) : Math.floor(i),
                    T.css({
                        top: i + "px"
                    })),
                    m = parseInt(T.css("top")) / (x.outerHeight() - T.outerHeight()),
                    i = m * (x[0].scrollHeight - x.outerHeight()),
                    n) {
                        i = e;
                        var r = i / x[0].scrollHeight * x.outerHeight();
                        r = Math.min(Math.max(r, 0), s),
                        T.css({
                            top: r + "px"
                        })
                    }
                    x.scrollTop(i),
                    x.trigger("slimscrolling", ~~i),
                    a(),
                    l()
                }
                function r() {
                    f = Math.max(x.outerHeight() / x[0].scrollHeight * x.outerHeight(), b),
                    T.css({
                        height: f + "px"
                    });
                    var e = f == x.outerHeight() ? "none" : "block";
                    T.css({
                        display: e
                    })
                }
                function a() {
                    if (r(),
                    clearTimeout(p),
                    m == ~~m) {
                        if (y = o.allowPageScroll,
                        g != m) {
                            var e = 0 == ~~m ? "top" : "bottom";
                            x.trigger("slimscroll", e)
                        }
                    } else
                        y = !1;
                    if (g = m,
                    f >= x.outerHeight())
                        return void (y = !0);
                    T.stop(!0, !0).fadeIn("fast"),
                    o.railVisible && S.stop(!0, !0).fadeIn("fast")
                }
                function l() {
                    o.alwaysVisible || (p = setTimeout(function() {
                        o.disableFadeOut && c || d || u || (T.fadeOut("slow"),
                        S.fadeOut("slow"))
                    }, 1e3))
                }
                var c, d, u, p, h, f, m, g, v = "<div></div>", b = 30, y = !1, x = e(this);
                if (x.parent().hasClass(o.wrapperClass)) {
                    var w = x.scrollTop();
                    if (T = x.parent().find("." + o.barClass),
                    S = x.parent().find("." + o.railClass),
                    r(),
                    e.isPlainObject(n)) {
                        if ("height"in n && "auto" == n.height) {
                            x.parent().css("height", "auto"),
                            x.css("height", "auto");
                            var C = x.parent().parent().height();
                            x.parent().css("height", C),
                            x.css("height", C)
                        }
                        if ("scrollTo"in n)
                            w = parseInt(o.scrollTo);
                        else if ("scrollBy"in n)
                            w += parseInt(o.scrollBy);
                        else if ("destroy"in n)
                            return T.remove(),
                            S.remove(),
                            void x.unwrap();
                        s(w, !1, !0)
                    }
                } else {
                    o.height = "auto" == o.height ? x.parent().height() : o.height;
                    var $ = e(v).addClass(o.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: o.width,
                        height: o.height
                    });
                    x.css({
                        overflow: "hidden",
                        width: o.width,
                        height: o.height
                    });
                    var S = e(v).addClass(o.railClass).css({
                        width: o.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: o.alwaysVisible && o.railVisible ? "block" : "none",
                        "border-radius": o.railBorderRadius,
                        background: o.railColor,
                        opacity: o.railOpacity,
                        zIndex: 90
                    })
                      , T = e(v).addClass(o.barClass).css({
                        background: o.color,
                        width: o.size,
                        position: "absolute",
                        top: 0,
                        opacity: o.opacity,
                        display: o.alwaysVisible ? "block" : "none",
                        "border-radius": o.borderRadius,
                        BorderRadius: o.borderRadius,
                        MozBorderRadius: o.borderRadius,
                        WebkitBorderRadius: o.borderRadius,
                        zIndex: 99
                    })
                      , E = "right" == o.position ? {
                        right: o.distance
                    } : {
                        left: o.distance
                    };
                    S.css(E),
                    T.css(E),
                    x.wrap($),
                    x.parent().append(T),
                    x.parent().append(S),
                    o.railDraggable && T.bind("mousedown", function(n) {
                        var i = e(document);
                        return u = !0,
                        t = parseFloat(T.css("top")),
                        pageY = n.pageY,
                        i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY,
                            T.css("top", currTop),
                            s(0, T.position().top, !1)
                        }),
                        i.bind("mouseup.slimscroll", function(e) {
                            u = !1,
                            l(),
                            i.unbind(".slimscroll")
                        }),
                        !1
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        !1
                    }),
                    S.hover(function() {
                        a()
                    }, function() {
                        l()
                    }),
                    T.hover(function() {
                        d = !0
                    }, function() {
                        d = !1
                    }),
                    x.hover(function() {
                        c = !0,
                        a(),
                        l()
                    }, function() {
                        c = !1,
                        l()
                    }),
                    x.bind("touchstart", function(e, t) {
                        e.originalEvent.touches.length && (h = e.originalEvent.touches[0].pageY)
                    }),
                    x.bind("touchmove", function(e) {
                        if (y || e.originalEvent.preventDefault(),
                        e.originalEvent.touches.length) {
                            s((h - e.originalEvent.touches[0].pageY) / o.touchScrollStep, !0),
                            h = e.originalEvent.touches[0].pageY
                        }
                    }),
                    r(),
                    "bottom" === o.start ? (T.css({
                        top: x.outerHeight() - T.outerHeight()
                    }),
                    s(0, !0)) : "top" !== o.start && (s(e(o.start).position().top, null, !0),
                    o.alwaysVisible || T.hide()),
                    function() {
                        window.addEventListener ? (this.addEventListener("DOMMouseScroll", i, !1),
                        this.addEventListener("mousewheel", i, !1)) : document.attachEvent("onmousewheel", i)
                    }()
                }
            }),
            this
        }
    }),
    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}(jQuery),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return t.apply(e)
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function() {
    "use strict";
    function e(e) {
        return null !== e && e === e.window
    }
    function t(t) {
        return e(t) ? t : 9 === t.nodeType && t.defaultView
    }
    function n(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    function i(e) {
        return n(e) && e.nodeType > 0
    }
    function o(e) {
        var t = p.call(e);
        return "[object String]" === t ? u(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : i(e) ? [e] : []
    }
    function s(e) {
        var n, i, o = {
            top: 0,
            left: 0
        }, s = e && e.ownerDocument;
        return n = s.documentElement,
        void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()),
        i = t(s),
        {
            top: o.top + i.pageYOffset - n.clientTop,
            left: o.left + i.pageXOffset - n.clientLeft
        }
    }
    function r(e) {
        var t = "";
        for (var n in e)
            e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }
    function a(e, t, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var i = n.getAttribute("data-x")
              , o = n.getAttribute("data-y")
              , s = n.getAttribute("data-scale")
              , a = n.getAttribute("data-translate")
              , l = Date.now() - Number(n.getAttribute("data-hold"))
              , c = 350 - l;
            c < 0 && (c = 0),
            "mousemove" === e.type && (c = 150);
            var d = "mousemove" === e.type ? 2500 : f.duration;
            setTimeout(function() {
                var e = {
                    top: o + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": d + "ms",
                    "-moz-transition-duration": d + "ms",
                    "-o-transition-duration": d + "ms",
                    "transition-duration": d + "ms",
                    "-webkit-transform": s + " " + a,
                    "-moz-transform": s + " " + a,
                    "-ms-transform": s + " " + a,
                    "-o-transform": s + " " + a,
                    transform: s + " " + a
                };
                n.setAttribute("style", r(e)),
                setTimeout(function() {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }, d)
            }, c)
        }
    }
    function l(e) {
        if (!1 === g.allowEvent(e))
            return null;
        for (var t = null, n = e.target || e.srcElement; null !== n.parentElement; ) {
            if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                t = n;
                break
            }
            n = n.parentElement
        }
        return t
    }
    function c(e) {
        var t = l(e);
        if (null !== t) {
            if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled"))
                return;
            if (g.registerEvent(e),
            "touchstart" === e.type && f.delay) {
                var n = !1
                  , i = setTimeout(function() {
                    i = null,
                    f.show(e, t)
                }, f.delay)
                  , o = function(o) {
                    i && (clearTimeout(i),
                    i = null,
                    f.show(e, t)),
                    n || (n = !0,
                    f.hide(o, t))
                }
                  , s = function(e) {
                    i && (clearTimeout(i),
                    i = null),
                    o(e)
                };
                t.addEventListener("touchmove", s, !1),
                t.addEventListener("touchend", o, !1),
                t.addEventListener("touchcancel", o, !1)
            } else
                f.show(e, t),
                h && (t.addEventListener("touchend", f.hide, !1),
                t.addEventListener("touchcancel", f.hide, !1)),
                t.addEventListener("mouseup", f.hide, !1),
                t.addEventListener("mouseleave", f.hide, !1)
        }
    }
    var d = d || {}
      , u = document.querySelectorAll.bind(document)
      , p = Object.prototype.toString
      , h = "ontouchstart"in window
      , f = {
        duration: 750,
        delay: 200,
        show: function(e, t, n) {
            if (2 === e.button)
                return !1;
            t = t || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling",
            t.appendChild(i);
            var o = s(t)
              , a = 0
              , l = 0;
            "touches"in e && e.touches.length ? (a = e.touches[0].pageY - o.top,
            l = e.touches[0].pageX - o.left) : (a = e.pageY - o.top,
            l = e.pageX - o.left),
            l = l >= 0 ? l : 0,
            a = a >= 0 ? a : 0;
            var c = "scale(" + t.clientWidth / 100 * 3 + ")"
              , d = "translate(0,0)";
            n && (d = "translate(" + n.x + "px, " + n.y + "px)"),
            i.setAttribute("data-hold", Date.now()),
            i.setAttribute("data-x", l),
            i.setAttribute("data-y", a),
            i.setAttribute("data-scale", c),
            i.setAttribute("data-translate", d);
            var u = {
                top: a + "px",
                left: l + "px"
            };
            i.classList.add("waves-notransition"),
            i.setAttribute("style", r(u)),
            i.classList.remove("waves-notransition"),
            u["-webkit-transform"] = c + " " + d,
            u["-moz-transform"] = c + " " + d,
            u["-ms-transform"] = c + " " + d,
            u["-o-transform"] = c + " " + d,
            u.transform = c + " " + d,
            u.opacity = "1";
            var p = "mousemove" === e.type ? 2500 : f.duration;
            u["-webkit-transition-duration"] = p + "ms",
            u["-moz-transition-duration"] = p + "ms",
            u["-o-transition-duration"] = p + "ms",
            u["transition-duration"] = p + "ms",
            i.setAttribute("style", r(u))
        },
        hide: function(e, t) {
            t = t || this;
            for (var n = t.getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++)
                a(e, t, n[i])
        }
    }
      , m = {
        input: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = e.className + " waves-input-wrapper",
                e.className = "waves-button-input",
                t.replaceChild(n, e),
                n.appendChild(e);
                var i = window.getComputedStyle(e, null)
                  , o = i.color
                  , s = i.backgroundColor;
                n.setAttribute("style", "color:" + o + ";background:" + s),
                e.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        },
        img: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                t.replaceChild(n, e),
                n.appendChild(e)
            }
        }
    }
      , g = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return /^(mousedown|mousemove)$/.test(e.type) && g.touches && (t = !1),
            t
        },
        registerEvent: function(e) {
            var t = e.type;
            "touchstart" === t ? g.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                g.touches && (g.touches -= 1)
            }, 500)
        }
    };
    return d.init = function(e) {
        var t = document.body;
        e = e || {},
        "duration"in e && (f.duration = e.duration),
        "delay"in e && (f.delay = e.delay),
        h && (t.addEventListener("touchstart", c, !1),
        t.addEventListener("touchcancel", g.registerEvent, !1),
        t.addEventListener("touchend", g.registerEvent, !1)),
        t.addEventListener("mousedown", c, !1)
    }
    ,
    d.attach = function(e, t) {
        e = o(e),
        "[object Array]" === p.call(t) && (t = t.join(" ")),
        t = t ? " " + t : "";
        for (var n, i, s = 0, r = e.length; s < r; s++)
            n = e[s],
            i = n.tagName.toLowerCase(),
            -1 !== ["input", "img"].indexOf(i) && (m[i](n),
            n = n.parentElement),
            -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
    }
    ,
    d.ripple = function(e, t) {
        e = o(e);
        var n = e.length;
        if (t = t || {},
        t.wait = t.wait || 0,
        t.position = t.position || null,
        n)
            for (var i, r, a, l = {}, c = 0, d = {
                type: "mousedown",
                button: 1
            }; c < n; c++)
                if (i = e[c],
                r = t.position || {
                    x: i.clientWidth / 2,
                    y: i.clientHeight / 2
                },
                a = s(i),
                l.x = a.left + r.x,
                l.y = a.top + r.y,
                d.pageX = l.x,
                d.pageY = l.y,
                f.show(d, i),
                t.wait >= 0 && null !== t.wait) {
                    var u = {
                        type: "mouseup",
                        button: 1
                    };
                    setTimeout(function(e, t) {
                        return function() {
                            f.hide(e, t)
                        }
                    }(u, i), t.wait)
                }
    }
    ,
    d.calm = function(e) {
        e = o(e);
        for (var t = {
            type: "mouseup",
            button: 1
        }, n = 0, i = e.length; n < i; n++)
            f.hide(t, e[n])
    }
    ,
    d.displayEffect = function(e) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),
        d.init(e)
    }
    ,
    d
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function(e) {
    !function(e) {
        "use strict";
        function t(t) {
            var n = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return e.each(n, function() {
                t = t.replace(this.re, this.ch)
            }),
            t
        }
        function n(e) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }
              , n = "(?:" + Object.keys(t).join("|") + ")"
              , i = new RegExp(n)
              , o = new RegExp(n,"g")
              , s = null == e ? "" : "" + e;
            return i.test(s) ? s.replace(o, function(e) {
                return t[e]
            }) : s
        }
        function i(t, n) {
            var i = arguments
              , s = t
              , r = n;
            [].shift.apply(i);
            var a, l = this.each(function() {
                var t = e(this);
                if (t.is("select")) {
                    var n = t.data("selectpicker")
                      , l = "object" == typeof s && s;
                    if (n) {
                        if (l)
                            for (var c in l)
                                l.hasOwnProperty(c) && (n.options[c] = l[c])
                    } else {
                        var d = e.extend({}, o.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
                        d.template = e.extend({}, o.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, l.template),
                        t.data("selectpicker", n = new o(this,d,r))
                    }
                    "string" == typeof s && (a = n[s]instanceof Function ? n[s].apply(n, i) : n.options[s])
                }
            });
            return void 0 !== a ? a : l
        }
        String.prototype.includes || function() {
            var e = {}.toString
              , t = function() {
                try {
                    var e = {}
                      , t = Object.defineProperty
                      , n = t(e, e, e) && t
                } catch (e) {}
                return n
            }()
              , n = "".indexOf
              , i = function(t) {
                if (null == this)
                    throw new TypeError;
                var i = String(this);
                if (t && "[object RegExp]" == e.call(t))
                    throw new TypeError;
                var o = i.length
                  , s = String(t)
                  , r = s.length
                  , a = arguments.length > 1 ? arguments[1] : void 0
                  , l = a ? Number(a) : 0;
                return l != l && (l = 0),
                !(r + Math.min(Math.max(l, 0), o) > o) && -1 != n.call(i, s, l)
            };
            t ? t(String.prototype, "includes", {
                value: i,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = i
        }(),
        String.prototype.startsWith || function() {
            var e = function() {
                try {
                    var e = {}
                      , t = Object.defineProperty
                      , n = t(e, e, e) && t
                } catch (e) {}
                return n
            }()
              , t = {}.toString
              , n = function(e) {
                if (null == this)
                    throw new TypeError;
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e))
                    throw new TypeError;
                var i = n.length
                  , o = String(e)
                  , s = o.length
                  , r = arguments.length > 1 ? arguments[1] : void 0
                  , a = r ? Number(r) : 0;
                a != a && (a = 0);
                var l = Math.min(Math.max(a, 0), i);
                if (s + l > i)
                    return !1;
                for (var c = -1; ++c < s; )
                    if (n.charCodeAt(l + c) != o.charCodeAt(c))
                        return !1;
                return !0
            };
            e ? e(String.prototype, "startsWith", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = n
        }(),
        Object.keys || (Object.keys = function(e, t, n) {
            n = [];
            for (t in e)
                n.hasOwnProperty.call(e, t) && n.push(t);
            return n
        }
        ),
        e.fn.triggerNative = function(e) {
            var t, n = this[0];
            n.dispatchEvent ? ("function" == typeof Event ? t = new Event(e,{
                bubbles: !0
            }) : (t = document.createEvent("Event"),
            t.initEvent(e, !0, !1)),
            n.dispatchEvent(t)) : (n.fireEvent && (t = document.createEventObject(),
            t.eventType = e,
            n.fireEvent("on" + e, t)),
            this.trigger(e))
        }
        ,
        e.expr[":"].icontains = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().includes(i[3].toUpperCase())
        }
        ,
        e.expr[":"].ibegins = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
        }
        ,
        e.expr[":"].aicontains = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(i[3].toUpperCase())
        }
        ,
        e.expr[":"].aibegins = function(t, n, i) {
            var o = e(t);
            return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
        }
        ;
        var o = function(t, n, i) {
            i && (i.stopPropagation(),
            i.preventDefault()),
            this.$element = e(t),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.$lis = null,
            this.options = n,
            null === this.options.title && (this.options.title = this.$element.attr("title")),
            this.val = o.prototype.val,
            this.render = o.prototype.render,
            this.refresh = o.prototype.refresh,
            this.setStyle = o.prototype.setStyle,
            this.selectAll = o.prototype.selectAll,
            this.deselectAll = o.prototype.deselectAll,
            this.destroy = o.prototype.destroy,
            this.remove = o.prototype.remove,
            this.show = o.prototype.show,
            this.hide = o.prototype.hide,
            this.init()
        };
        o.VERSION = "1.10.0",
        o.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        },
        o.prototype = {
            constructor: o,
            init: function() {
                var t = this
                  , n = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"),
                this.liObj = {},
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$newElement = this.createView(),
                this.$element.after(this.$newElement).appendTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(".dropdown-menu"),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element.removeClass("bs-select-hidden"),
                this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"),
                void 0 !== n && (this.$button.attr("data-id", n),
                e('label[for="' + n + '"]').click(function(e) {
                    e.preventDefault(),
                    t.$button.focus()
                })),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch && this.liveSearchListener(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.options.container && this.selectPosition(),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        t.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        t.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        t.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        t.$element.trigger("shown.bs.select", e)
                    }
                }),
                t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    t.$button.addClass("bs-invalid").focus(),
                    t.$element.on({
                        "focus.bs.select": function() {
                            t.$button.focus(),
                            t.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            t.$element.val(t.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && t.$button.removeClass("bs-invalid"),
                            t.$element.off("rendered.bs.select")
                        }
                    })
                }),
                setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : ""
                  , i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : ""
                  , o = this.autofocus ? " autofocus" : ""
                  , s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : ""
                  , r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : ""
                  , a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : ""
                  , l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : ""
                  , c = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + s + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                return e(c)
            },
            createView: function() {
                var e = this.createDropdown()
                  , t = this.createLi();
                return e.find("ul")[0].innerHTML = t,
                e
            },
            reloadLi: function() {
                this.destroyLi();
                var e = this.createLi();
                this.$menuInner[0].innerHTML = e
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var i = this
                  , o = []
                  , s = 0
                  , r = document.createElement("option")
                  , a = -1
                  , l = function(e, t, n, i) {
                    return "<li" + (void 0 !== n & "" !== n ? ' class="' + n + '"' : "") + (void 0 !== t & null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + e + "</li>"
                }
                  , c = function(e, o, s, r) {
                    return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== s ? ' style="' + s + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + t(n(e)) + '"' : "") + (void 0 !== r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + e + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (a--,
                !this.$element.find(".bs-title-option").length)) {
                    var d = this.$element[0];
                    r.className = "bs-title-option",
                    r.appendChild(document.createTextNode(this.options.title)),
                    r.value = "",
                    d.insertBefore(r, d.firstChild),
                    void 0 === e(d.options[d.selectedIndex]).attr("selected") && (r.selected = !0)
                }
                return this.$element.find("option").each(function(t) {
                    var n = e(this);
                    if (a++,
                    !n.hasClass("bs-title-option")) {
                        var r = this.className || ""
                          , d = this.style.cssText
                          , u = n.data("content") ? n.data("content") : n.html()
                          , p = n.data("tokens") ? n.data("tokens") : null
                          , h = void 0 !== n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : ""
                          , f = void 0 !== n.data("icon") ? '<span class="' + i.options.iconBase + " " + n.data("icon") + '"></span> ' : ""
                          , m = "OPTGROUP" === this.parentNode.tagName
                          , g = this.disabled || m && this.parentNode.disabled;
                        if ("" !== f && g && (f = "<span>" + f + "</span>"),
                        i.options.hideDisabled && g && !m)
                            return void a--;
                        if (n.data("content") || (u = f + '<span class="text">' + u + h + "</span>"),
                        m && !0 !== n.data("divider")) {
                            var v = " " + this.parentNode.className || "";
                            if (0 === n.index()) {
                                s += 1;
                                var b = this.parentNode.label
                                  , y = void 0 !== n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "";
                                b = (n.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + b + y + "</span>",
                                0 !== t && o.length > 0 && (a++,
                                o.push(l("", null, "divider", s + "div"))),
                                a++,
                                o.push(l(b, null, "dropdown-header" + v, s))
                            }
                            if (i.options.hideDisabled && g)
                                return void a--;
                            o.push(l(c(u, "opt " + r + v, d, p), t, "", s))
                        } else
                            !0 === n.data("divider") ? o.push(l("", t, "divider")) : !0 === n.data("hidden") ? o.push(l(c(u, r, d, p), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++,
                            o.push(l("", null, "divider", s + "div"))),
                            o.push(l(c(u, r, d, p), t)));
                        i.liObj[t] = a
                    }
                }),
                this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"),
                o.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")),
                this.$lis
            },
            render: function(t) {
                var n, i = this;
                !1 !== t && this.$element.find("option").each(function(e) {
                    var t = i.findLis().eq(i.liObj[e]);
                    i.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t),
                    i.setSelected(e, this.selected, t)
                }),
                this.tabIndex();
                var o = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled))
                            return;
                        var t, n = e(this), o = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                        return t = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "",
                        void 0 !== n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content") : o + n.html() + t
                    }
                }).toArray()
                  , s = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var r = this.options.selectedTextFormat.split(">");
                    if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
                        n = this.options.hideDisabled ? ", [disabled]" : "";
                        var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length;
                        s = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", a.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")),
                "static" == this.options.selectedTextFormat && (s = this.options.title),
                s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText),
                this.$button.attr("title", e.trim(s.replace(/<[^>]*>?/g, ""))),
                this.$button.children(".filter-option").html(s),
                this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var n = e || this.options.style;
                "add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style),
                this.$button.addClass(n))
            },
            liHeight: function(t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    var n = document.createElement("div")
                      , i = document.createElement("div")
                      , o = document.createElement("ul")
                      , s = document.createElement("li")
                      , r = document.createElement("li")
                      , a = document.createElement("a")
                      , l = document.createElement("span")
                      , c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null
                      , d = this.options.liveSearch ? document.createElement("div") : null
                      , u = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null
                      , p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (l.className = "text",
                    n.className = this.$menu[0].parentNode.className + " open",
                    i.className = "dropdown-menu open",
                    o.className = "dropdown-menu inner",
                    s.className = "divider",
                    l.appendChild(document.createTextNode("Inner text")),
                    a.appendChild(l),
                    r.appendChild(a),
                    o.appendChild(r),
                    o.appendChild(s),
                    c && i.appendChild(c),
                    d) {
                        var h = document.createElement("span");
                        d.className = "bs-searchbox",
                        h.className = "form-control",
                        d.appendChild(h),
                        i.appendChild(d)
                    }
                    u && i.appendChild(u),
                    i.appendChild(o),
                    p && i.appendChild(p),
                    n.appendChild(i),
                    document.body.appendChild(n);
                    var f = a.offsetHeight
                      , m = c ? c.offsetHeight : 0
                      , g = d ? d.offsetHeight : 0
                      , v = u ? u.offsetHeight : 0
                      , b = p ? p.offsetHeight : 0
                      , y = e(s).outerHeight(!0)
                      , x = "function" == typeof getComputedStyle && getComputedStyle(i)
                      , w = x ? null : e(i)
                      , C = parseInt(x ? x.paddingTop : w.css("paddingTop")) + parseInt(x ? x.paddingBottom : w.css("paddingBottom")) + parseInt(x ? x.borderTopWidth : w.css("borderTopWidth")) + parseInt(x ? x.borderBottomWidth : w.css("borderBottomWidth"))
                      , $ = C + parseInt(x ? x.marginTop : w.css("marginTop")) + parseInt(x ? x.marginBottom : w.css("marginBottom")) + 2;
                    document.body.removeChild(n),
                    this.sizeInfo = {
                        liHeight: f,
                        headerHeight: m,
                        searchHeight: g,
                        actionsHeight: v,
                        doneButtonHeight: b,
                        dividerHeight: y,
                        menuPadding: C,
                        menuExtras: $
                    }
                }
            },
            setSize: function() {
                if (this.findLis(),
                this.liHeight(),
                this.options.header && this.$menu.css("padding-top", 0),
                !1 !== this.options.size) {
                    var t, n, i, o, s = this, r = this.$menu, a = this.$menuInner, l = e(window), c = this.$newElement[0].offsetHeight, d = this.sizeInfo.liHeight, u = this.sizeInfo.headerHeight, p = this.sizeInfo.searchHeight, h = this.sizeInfo.actionsHeight, f = this.sizeInfo.doneButtonHeight, m = this.sizeInfo.dividerHeight, g = this.sizeInfo.menuPadding, v = this.sizeInfo.menuExtras, b = this.options.hideDisabled ? ".disabled" : "", y = function() {
                        i = s.$newElement.offset().top - l.scrollTop(),
                        o = l.height() - i - c
                    };
                    if (y(),
                    "auto" === this.options.size) {
                        var x = function() {
                            var l, c = function(t, n) {
                                return function(i) {
                                    return n ? i.classList ? i.classList.contains(t) : e(i).hasClass(t) : !(i.classList ? i.classList.contains(t) : e(i).hasClass(t))
                                }
                            }, m = s.$menuInner[0].getElementsByTagName("li"), b = Array.prototype.filter ? Array.prototype.filter.call(m, c("hidden", !1)) : s.$lis.not(".hidden"), x = Array.prototype.filter ? Array.prototype.filter.call(b, c("dropdown-header", !0)) : b.filter(".dropdown-header");
                            y(),
                            t = o - v,
                            s.options.container ? (r.data("height") || r.data("height", r.height()),
                            n = r.data("height")) : n = r.height(),
                            s.options.dropupAuto && s.$newElement.toggleClass("dropup", i > o && t - v < n),
                            s.$newElement.hasClass("dropup") && (t = i - v),
                            l = b.length + x.length > 3 ? 3 * d + v - 2 : 0,
                            r.css({
                                "max-height": t + "px",
                                overflow: "hidden",
                                "min-height": l + u + p + h + f + "px"
                            }),
                            a.css({
                                "max-height": t - u - p - h - f - g + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(l - g, 0) + "px"
                            })
                        };
                        x(),
                        this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", x),
                        l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", x)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(b).length > this.options.size) {
                        var w = this.$lis.not(".divider").not(b).children().slice(0, this.options.size).last().parent().index()
                          , C = this.$lis.slice(0, w + 1).filter(".divider").length;
                        t = d * this.options.size + C * m + g,
                        s.options.container ? (r.data("height") || r.data("height", r.height()),
                        n = r.data("height")) : n = r.height(),
                        s.options.dropupAuto && this.$newElement.toggleClass("dropup", i > o && t - v < n),
                        r.css({
                            "max-height": t + u + p + h + f + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }),
                        a.css({
                            "max-height": t - g + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var e = this.$menu.parent().clone().appendTo("body")
                      , t = this.options.container ? this.$newElement.clone().appendTo("body") : e
                      , n = e.children(".dropdown-menu").outerWidth()
                      , i = t.css("width", "auto").children("button").outerWidth();
                    e.remove(),
                    t.remove(),
                    this.$newElement.css("width", Math.max(n, i) + "px")
                } else
                    "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                    this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, n, i = this, o = function(e) {
                    i.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")),
                    t = e.offset(),
                    n = e.hasClass("dropup") ? 0 : e[0].offsetHeight,
                    i.$bsContainer.css({
                        top: t.top + n,
                        left: t.left,
                        width: e[0].offsetWidth
                    })
                };
                this.$button.on("click", function() {
                    var t = e(this);
                    i.isDisabled() || (o(i.$newElement),
                    i.$bsContainer.appendTo(i.options.container).toggleClass("open", !t.hasClass("open")).append(i.$menu))
                }),
                e(window).on("resize scroll", function() {
                    o(i.$newElement)
                }),
                this.$element.on("hide.bs.select", function() {
                    i.$menu.data("height", i.$menu.height()),
                    i.$bsContainer.detach()
                })
            },
            setSelected: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])),
                n.toggleClass("selected", t)
            },
            setDisabled: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])),
                t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"),
                this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"),
                this.$button.removeClass("disabled")),
                -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")),
                this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this
                  , n = e(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                    e.stopPropagation()
                }),
                n.data("spaceSelect", !1),
                this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && n.data("spaceSelect") && (e.preventDefault(),
                    n.data("spaceSelect", !1))
                }),
                this.$button.on("click", function() {
                    t.setSize()
                }),
                this.$element.on("shown.bs.select", function() {
                    if (t.options.liveSearch || t.multiple) {
                        if (!t.multiple) {
                            var e = t.liObj[t.$element[0].selectedIndex];
                            if ("number" != typeof e || !1 === t.options.size)
                                return;
                            var n = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                            n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2,
                            t.$menuInner[0].scrollTop = n
                        }
                    } else
                        t.$menuInner.find(".selected a").focus()
                }),
                this.$menuInner.on("click", "li a", function(n) {
                    var i = e(this)
                      , o = i.parent().data("originalIndex")
                      , s = t.$element.val()
                      , r = t.$element.prop("selectedIndex");
                    if (t.multiple && n.stopPropagation(),
                    n.preventDefault(),
                    !t.isDisabled() && !i.parent().hasClass("disabled")) {
                        var a = t.$element.find("option")
                          , l = a.eq(o)
                          , c = l.prop("selected")
                          , d = l.parent("optgroup")
                          , u = t.options.maxOptions
                          , p = d.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (l.prop("selected", !c),
                            t.setSelected(o, !c),
                            i.blur(),
                            !1 !== u || !1 !== p) {
                                var h = u < a.filter(":selected").length
                                  , f = p < d.find("option:selected").length;
                                if (u && h || p && f)
                                    if (u && 1 == u)
                                        a.prop("selected", !1),
                                        l.prop("selected", !0),
                                        t.$menuInner.find(".selected").removeClass("selected"),
                                        t.setSelected(o, !0);
                                    else if (p && 1 == p) {
                                        d.find("option:selected").prop("selected", !1),
                                        l.prop("selected", !0);
                                        var m = i.parent().data("optgroup");
                                        t.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"),
                                        t.setSelected(o, !0)
                                    } else {
                                        var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(u, p) : t.options.maxOptionsText
                                          , v = g[0].replace("{n}", u)
                                          , b = g[1].replace("{n}", p)
                                          , y = e('<div class="notify"></div>');
                                        g[2] && (v = v.replace("{var}", g[2][u > 1 ? 0 : 1]),
                                        b = b.replace("{var}", g[2][p > 1 ? 0 : 1])),
                                        l.prop("selected", !1),
                                        t.$menu.append(y),
                                        u && h && (y.append(e("<div>" + v + "</div>")),
                                        t.$element.trigger("maxReached.bs.select")),
                                        p && f && (y.append(e("<div>" + b + "</div>")),
                                        t.$element.trigger("maxReachedGrp.bs.select")),
                                        setTimeout(function() {
                                            t.setSelected(o, !1)
                                        }, 10),
                                        y.delay(750).fadeOut(300, function() {
                                            e(this).remove()
                                        })
                                    }
                            }
                        } else
                            a.prop("selected", !1),
                            l.prop("selected", !0),
                            t.$menuInner.find(".selected").removeClass("selected"),
                            t.setSelected(o, !0);
                        t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(),
                        (s != t.$element.val() && t.multiple || r != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.trigger("changed.bs.select", [o, l.prop("selected"), c]).triggerNative("change")
                    }
                }),
                this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(n) {
                    n.currentTarget == this && (n.preventDefault(),
                    n.stopPropagation(),
                    t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                }),
                this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                }),
                this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn", function(n) {
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(),
                    n.preventDefault(),
                    n.stopPropagation(),
                    e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                }),
                this.$element.change(function() {
                    t.render(!1)
                })
            },
            liveSearchListener: function() {
                var i = this
                  , o = e('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    i.$menuInner.find(".active").removeClass("active"),
                    i.$searchbox.val() && (i.$searchbox.val(""),
                    i.$lis.not(".is-hidden").removeClass("hidden"),
                    o.parent().length && o.remove()),
                    i.multiple || i.$menuInner.find(".selected").addClass("active"),
                    setTimeout(function() {
                        i.$searchbox.focus()
                    }, 10)
                }),
                this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }),
                this.$searchbox.on("input propertychange", function() {
                    if (i.$searchbox.val()) {
                        var s = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        s = i.options.liveSearchNormalize ? s.not(":a" + i._searchStyle() + '("' + t(i.$searchbox.val()) + '")') : s.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'),
                        s.parent().addClass("hidden"),
                        i.$lis.filter(".dropdown-header").each(function() {
                            var t = e(this)
                              , n = t.data("optgroup");
                            0 === i.$lis.filter("[data-optgroup=" + n + "]").not(t).not(".hidden").length && (t.addClass("hidden"),
                            i.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
                        });
                        var r = i.$lis.not(".hidden");
                        r.each(function(t) {
                            var n = e(this);
                            n.hasClass("divider") && (n.index() === r.first().index() || n.index() === r.last().index() || r.eq(t + 1).hasClass("divider")) && n.addClass("hidden")
                        }),
                        i.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(),
                        o.html(i.options.noneResultsText.replace("{0}", '"' + n(i.$searchbox.val()) + '"')).show(),
                        i.$menuInner.append(o))
                    } else
                        i.$lis.not(".is-hidden").removeClass("hidden"),
                        o.parent().length && o.remove();
                    i.$lis.filter(".active").removeClass("active"),
                    i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),
                    e(this).focus()
                })
            },
            _searchStyle: function() {
                return {
                    begins: "ibegins",
                    startsWith: "ibegins"
                }[this.options.liveSearchStyle] || "icontains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e),
                this.render(),
                this.$element) : this.$element.val()
            },
            changeAll: function(t) {
                void 0 === t && (t = !0),
                this.findLis();
                for (var n = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), o = i.length, s = [], r = 0; r < o; r++) {
                    var a = i[r].getAttribute("data-original-index");
                    s[s.length] = n.eq(a)[0]
                }
                e(s).prop("selected", t),
                this.render(!1),
                this.$element.trigger("changed.bs.select").triggerNative("change")
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                e = e || window.event,
                e && e.stopPropagation(),
                this.$button.trigger("click")
            },
            keydown: function(n) {
                var i, o, s, r, a, l, c, d, u, p = e(this), h = p.is("input") ? p.parent().parent() : p.parent(), f = h.data("this"), m = ":not(.disabled, .hidden, .dropdown-header, .divider)", g = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
                if (f.options.liveSearch && (h = p.parent().parent()),
                f.options.container && (h = f.$menu),
                i = e("[role=menu] li", h),
                u = f.$newElement.hasClass("open"),
                !u && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(),
                f.$menu.parent().addClass("open"),
                u = !0),
                f.$searchbox.focus()),
                f.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && u && 0 === f.$menu.find(".active").length && (n.preventDefault(),
                f.$menu.parent().removeClass("open"),
                f.options.container && f.$newElement.removeClass("open"),
                f.$button.focus()),
                i = e("[role=menu] li" + m, h),
                p.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = f.$menuInner.find("li"),
                i = f.options.liveSearchNormalize ? i.filter(":a" + f._searchStyle() + "(" + t(g[n.keyCode]) + ")") : i.filter(":" + f._searchStyle() + "(" + g[n.keyCode] + ")"))),
                i.length) {
                    if (/(38|40)/.test(n.keyCode.toString(10)))
                        o = i.index(i.find("a").filter(":focus").parent()),
                        r = i.filter(m).first().index(),
                        a = i.filter(m).last().index(),
                        s = i.eq(o).nextAll(m).eq(0).index(),
                        l = i.eq(o).prevAll(m).eq(0).index(),
                        c = i.eq(s).prevAll(m).eq(0).index(),
                        f.options.liveSearch && (i.each(function(t) {
                            e(this).hasClass("disabled") || e(this).data("index", t)
                        }),
                        o = i.index(i.filter(".active")),
                        r = i.first().data("index"),
                        a = i.last().data("index"),
                        s = i.eq(o).nextAll().eq(0).data("index"),
                        l = i.eq(o).prevAll().eq(0).data("index"),
                        c = i.eq(s).prevAll().eq(0).data("index")),
                        d = p.data("prevIndex"),
                        38 == n.keyCode ? (f.options.liveSearch && o--,
                        o != c && o > l && (o = l),
                        o < r && (o = r),
                        o == d && (o = a)) : 40 == n.keyCode && (f.options.liveSearch && o++,
                        -1 == o && (o = 0),
                        o != c && o < s && (o = s),
                        o > a && (o = a),
                        o == d && (o = r)),
                        p.data("prevIndex", o),
                        f.options.liveSearch ? (n.preventDefault(),
                        p.hasClass("dropdown-toggle") || (i.removeClass("active").eq(o).addClass("active").children("a").focus(),
                        p.focus())) : i.eq(o).children("a").focus();
                    else if (!p.is("input")) {
                        var v, b, y = [];
                        i.each(function() {
                            e(this).hasClass("disabled") || e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == g[n.keyCode] && y.push(e(this).index())
                        }),
                        v = e(document).data("keycount"),
                        v++,
                        e(document).data("keycount", v),
                        b = e.trim(e(":focus").text().toLowerCase()).substring(0, 1),
                        b != g[n.keyCode] ? (v = 1,
                        e(document).data("keycount", v)) : v >= y.length && (e(document).data("keycount", 0),
                        v > y.length && (v = 1)),
                        i.eq(y[v - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && f.options.selectOnTab) && u) {
                        if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(),
                        f.options.liveSearch)
                            /(32)/.test(n.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(),
                            p.focus());
                        else {
                            var x = e(":focus");
                            x.click(),
                            x.focus(),
                            n.preventDefault(),
                            e(document).data("spaceSelect", !0)
                        }
                        e(document).data("keycount", 0)
                    }
                    (/(^9$|27)/.test(n.keyCode.toString(10)) && u && (f.multiple || f.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !u) && (f.$menu.parent().removeClass("open"),
                    f.options.container && f.$newElement.removeClass("open"),
                    f.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null,
                this.liObj = {},
                this.reloadLi(),
                this.render(),
                this.checkDisabled(),
                this.liHeight(!0),
                this.setStyle(),
                this.setWidth(),
                this.$lis && this.$searchbox.trigger("propertychange"),
                this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var s = e.fn.selectpicker;
        e.fn.selectpicker = i,
        e.fn.selectpicker.Constructor = o,
        e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = s,
            this
        }
        ,
        e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }),
        e(window).on("load.bs.select.data-api", function() {
            e(".selectpicker").each(function() {
                var t = e(this);
                i.call(t, t.data())
            })
        })
    }(e)
}),
function(e, t, n) {
    "use strict";
    !function e(t, n, i) {
        function o(r, a) {
            if (!n[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(r, !0);
                    if (s)
                        return s(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var d = n[r] = {
                    exports: {}
                };
                t[r][0].call(d.exports, function(e) {
                    var n = t[r][1][e];
                    return o(n || e)
                }, d, d.exports, e, t, n, i)
            }
            return n[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < i.length; r++)
            o(i[r]);
        return o
    }({
        1: [function(i, o, s) {
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            var a, l, c, d, u = i("./modules/handle-dom"), p = i("./modules/utils"), h = i("./modules/handle-swal-dom"), f = i("./modules/handle-click"), m = i("./modules/handle-key"), g = r(m), v = i("./modules/default-params"), b = r(v), y = i("./modules/set-params"), x = r(y);
            s.default = c = d = function() {
                function i(e) {
                    var t = o;
                    return t[e] === n ? b.default[e] : t[e]
                }
                var o = arguments[0];
                if (u.addClass(t.body, "stop-scrolling"),
                h.resetInput(),
                o === n)
                    return p.logStr("SweetAlert expects at least 1 attribute!"),
                    !1;
                var s = p.extend({}, b.default);
                switch (typeof o) {
                case "string":
                    s.title = o,
                    s.text = arguments[1] || "",
                    s.type = arguments[2] || "";
                    break;
                case "object":
                    if (o.title === n)
                        return p.logStr('Missing "title" argument!'),
                        !1;
                    s.title = o.title;
                    for (var r in b.default)
                        s[r] = i(r);
                    s.confirmButtonText = s.showCancelButton ? "Confirm" : b.default.confirmButtonText,
                    s.confirmButtonText = i("confirmButtonText"),
                    s.doneFunction = arguments[1] || null;
                    break;
                default:
                    return p.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof o),
                    !1
                }
                x.default(s),
                h.fixVerticalPosition(),
                h.openModal(arguments[1]);
                for (var c = h.getModal(), m = c.querySelectorAll("button"), v = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], y = function(e) {
                    return f.handleButton(e, s, c)
                }, w = 0; w < m.length; w++)
                    for (var C = 0; C < v.length; C++) {
                        var $ = v[C];
                        m[w][$] = y
                    }
                h.getOverlay().onclick = y,
                a = e.onkeydown;
                var S = function(e) {
                    return g.default(e, s, c)
                };
                e.onkeydown = S,
                e.onfocus = function() {
                    setTimeout(function() {
                        l !== n && (l.focus(),
                        l = n)
                    }, 0)
                }
                ,
                d.enableButtons()
            }
            ,
            c.setDefaults = d.setDefaults = function(e) {
                if (!e)
                    throw new Error("userParams is required");
                if ("object" != typeof e)
                    throw new Error("userParams has to be a object");
                p.extend(b.default, e)
            }
            ,
            c.close = d.close = function() {
                var i = h.getModal();
                u.fadeOut(h.getOverlay(), 5),
                u.fadeOut(i, 5),
                u.removeClass(i, "showSweetAlert"),
                u.addClass(i, "hideSweetAlert"),
                u.removeClass(i, "visible");
                var o = i.querySelector(".sa-icon.sa-success");
                u.removeClass(o, "animate"),
                u.removeClass(o.querySelector(".sa-tip"), "animateSuccessTip"),
                u.removeClass(o.querySelector(".sa-long"), "animateSuccessLong");
                var s = i.querySelector(".sa-icon.sa-error");
                u.removeClass(s, "animateErrorIcon"),
                u.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                var r = i.querySelector(".sa-icon.sa-warning");
                return u.removeClass(r, "pulseWarning"),
                u.removeClass(r.querySelector(".sa-body"), "pulseWarningIns"),
                u.removeClass(r.querySelector(".sa-dot"), "pulseWarningIns"),
                setTimeout(function() {
                    var e = i.getAttribute("data-custom-class");
                    u.removeClass(i, e)
                }, 300),
                u.removeClass(t.body, "stop-scrolling"),
                e.onkeydown = a,
                e.previousActiveElement && e.previousActiveElement.focus(),
                l = n,
                clearTimeout(i.timeout),
                !0
            }
            ,
            c.showInputError = d.showInputError = function(e) {
                var t = h.getModal()
                  , n = t.querySelector(".sa-input-error");
                u.addClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                u.addClass(i, "show"),
                i.querySelector("p").innerHTML = e,
                setTimeout(function() {
                    c.enableButtons()
                }, 1),
                t.querySelector("input").focus()
            }
            ,
            c.resetInputError = d.resetInputError = function(e) {
                if (e && 13 === e.keyCode)
                    return !1;
                var t = h.getModal()
                  , n = t.querySelector(".sa-input-error");
                u.removeClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                u.removeClass(i, "show")
            }
            ,
            c.disableButtons = d.disableButtons = function() {
                var e = h.getModal()
                  , t = e.querySelector("button.confirm")
                  , n = e.querySelector("button.cancel");
                t.disabled = !0,
                n.disabled = !0
            }
            ,
            c.enableButtons = d.enableButtons = function() {
                var e = h.getModal()
                  , t = e.querySelector("button.confirm")
                  , n = e.querySelector("button.cancel");
                t.disabled = !1,
                n.disabled = !1
            }
            ,
            void 0 !== e ? e.sweetAlert = e.swal = c : p.logStr("SweetAlert is a frontend module!"),
            o.exports = s.default
        }
        , {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n.default = i,
            t.exports = n.default
        }
        , {}],
        3: [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = t("./utils")
              , s = (t("./handle-swal-dom"),
            t("./handle-dom"))
              , r = function(t, n, i) {
                function r(e) {
                    f && n.confirmButtonColor && (h.style.backgroundColor = e)
                }
                var c, d, u, p = t || e.event, h = p.target || p.srcElement, f = -1 !== h.className.indexOf("confirm"), m = -1 !== h.className.indexOf("sweet-overlay"), g = s.hasClass(i, "visible"), v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                switch (f && n.confirmButtonColor && (c = n.confirmButtonColor,
                d = o.colorLuminance(c, -.04),
                u = o.colorLuminance(c, -.14)),
                p.type) {
                case "mouseover":
                    r(d);
                    break;
                case "mouseout":
                    r(c);
                    break;
                case "mousedown":
                    r(u);
                    break;
                case "mouseup":
                    r(d);
                    break;
                case "focus":
                    var b = i.querySelector("button.confirm")
                      , y = i.querySelector("button.cancel");
                    f ? y.style.boxShadow = "none" : b.style.boxShadow = "none";
                    break;
                case "click":
                    var x = i === h
                      , w = s.isDescendant(i, h);
                    if (!x && !w && g && !n.allowOutsideClick)
                        break;
                    f && v && g ? a(i, n) : v && g || m ? l(i, n) : s.isDescendant(i, h) && "BUTTON" === h.tagName && sweetAlert.close()
                }
            }
              , a = function(e, t) {
                var n = !0;
                s.hasClass(e, "show-input") && ((n = e.querySelector("input").value) || (n = "")),
                t.doneFunction(n),
                t.closeOnConfirm && sweetAlert.close(),
                t.showLoaderOnConfirm && sweetAlert.disableButtons()
            }
              , l = function(e, t) {
                var n = String(t.doneFunction).replace(/\s/g, "");
                "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10) && t.doneFunction(!1),
                t.closeOnCancel && sweetAlert.close()
            };
            i.default = {
                handleButton: r,
                handleConfirm: a,
                handleCancel: l
            },
            n.exports = i.default
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(n, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            }
              , r = function(e, t) {
                s(e, t) || (e.className += " " + t)
            }
              , a = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (s(e, t)) {
                    for (; n.indexOf(" " + t + " ") >= 0; )
                        n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            }
              , l = function(e) {
                var n = t.createElement("div");
                return n.appendChild(t.createTextNode(e)),
                n.innerHTML
            }
              , c = function(e) {
                e.style.opacity = "",
                e.style.display = "block"
            }
              , d = function(e) {
                if (e && !e.length)
                    return c(e);
                for (var t = 0; t < e.length; ++t)
                    c(e[t])
            }
              , u = function(e) {
                e.style.opacity = "",
                e.style.display = "none"
            }
              , p = function(e) {
                if (e && !e.length)
                    return u(e);
                for (var t = 0; t < e.length; ++t)
                    u(e[t])
            }
              , h = function(e, t) {
                for (var n = t.parentNode; null !== n; ) {
                    if (n === e)
                        return !0;
                    n = n.parentNode
                }
                return !1
            }
              , f = function(e) {
                e.style.left = "-9999px",
                e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding),
                e.style.left = "",
                e.style.display = "none",
                "-" + parseInt((n + t) / 2) + "px"
            }
              , m = function(e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16,
                    e.style.opacity = 0,
                    e.style.display = "block";
                    var n = +new Date
                      , i = function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }
                        ,
                        t
                    }(function() {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100,
                        n = +new Date,
                        +e.style.opacity < 1 && setTimeout(i, t)
                    });
                    i()
                }
                e.style.display = "block"
            }
              , g = function(e, t) {
                t = t || 16,
                e.style.opacity = 1;
                var n = +new Date
                  , i = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }(function() {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100,
                    n = +new Date,
                    +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                });
                i()
            }
              , v = function(n) {
                if ("function" == typeof MouseEvent) {
                    var i = new MouseEvent("click",{
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    n.dispatchEvent(i)
                } else if (t.createEvent) {
                    var o = t.createEvent("MouseEvents");
                    o.initEvent("click", !1, !1),
                    n.dispatchEvent(o)
                } else
                    t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
            }
              , b = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(),
                t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
            o.hasClass = s,
            o.addClass = r,
            o.removeClass = a,
            o.escapeHtml = l,
            o._show = c,
            o.show = d,
            o._hide = u,
            o.hide = p,
            o.isDescendant = h,
            o.getTopMargin = f,
            o.fadeIn = m,
            o.fadeOut = g,
            o.fireClick = v,
            o.stopEventPropagation = b
        }
        , {}],
        5: [function(t, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = t("./handle-dom")
              , r = t("./handle-swal-dom")
              , a = function(t, i, o) {
                var a = t || e.event
                  , l = a.keyCode || a.which
                  , c = o.querySelector("button.confirm")
                  , d = o.querySelector("button.cancel")
                  , u = o.querySelectorAll("button[tabindex]");
                if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                    for (var p = a.target || a.srcElement, h = -1, f = 0; f < u.length; f++)
                        if (p === u[f]) {
                            h = f;
                            break
                        }
                    9 === l ? (p = -1 === h ? c : h === u.length - 1 ? u[0] : u[h + 1],
                    s.stopEventPropagation(a),
                    p.focus(),
                    i.confirmButtonColor && r.setFocusStyle(p, i.confirmButtonColor)) : 13 === l ? ("INPUT" === p.tagName && (p = c,
                    c.focus()),
                    p = -1 === h ? c : n) : 27 === l && !0 === i.allowEscapeKey ? (p = d,
                    s.fireClick(p, a)) : p = n
                }
            };
            o.default = a,
            i.exports = o.default
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(n, i, o) {
            var s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = n("./utils")
              , a = n("./handle-dom")
              , l = n("./default-params")
              , c = s(l)
              , d = n("./injected-html")
              , u = s(d)
              , p = function() {
                var e = t.createElement("div");
                for (e.innerHTML = u.default; e.firstChild; )
                    t.body.appendChild(e.firstChild)
            }
              , h = function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function() {
                var e = t.querySelector(".sweet-alert");
                return e || (p(),
                e = h()),
                e
            })
              , f = function() {
                var e = h();
                return e ? e.querySelector("input") : void 0
            }
              , m = function() {
                return t.querySelector(".sweet-overlay")
            }
              , g = function(e, t) {
                var n = r.hexToRgb(t);
                e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
            }
              , v = function(n) {
                var i = h();
                a.fadeIn(m(), 10),
                a.show(i),
                a.addClass(i, "showSweetAlert"),
                a.removeClass(i, "hideSweetAlert"),
                e.previousActiveElement = t.activeElement,
                i.querySelector("button.confirm").focus(),
                setTimeout(function() {
                    a.addClass(i, "visible")
                }, 500);
                var o = i.getAttribute("data-timer");
                if ("null" !== o && "" !== o) {
                    var s = n;
                    i.timeout = setTimeout(function() {
                        (s || null) && "true" === i.getAttribute("data-has-done-function") ? s(null) : sweetAlert.close()
                    }, o)
                }
            }
              , b = function() {
                var e = h()
                  , t = f();
                a.removeClass(e, "show-input"),
                t.value = c.default.inputValue,
                t.setAttribute("type", c.default.inputType),
                t.setAttribute("placeholder", c.default.inputPlaceholder),
                y()
            }
              , y = function(e) {
                if (e && 13 === e.keyCode)
                    return !1;
                var t = h()
                  , n = t.querySelector(".sa-input-error");
                a.removeClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                a.removeClass(i, "show")
            }
              , x = function() {
                h().style.marginTop = a.getTopMargin(h())
            };
            o.sweetAlertInitialize = p,
            o.getModal = h,
            o.getOverlay = m,
            o.getInput = f,
            o.setFocusStyle = g,
            o.openModal = v,
            o.resetInput = b,
            o.resetInputError = y,
            o.fixVerticalPosition = x
        }
        , {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.default = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>',
            t.exports = n.default
        }
        , {}],
        8: [function(e, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = e("./utils")
              , s = e("./handle-swal-dom")
              , r = e("./handle-dom")
              , a = ["error", "warning", "info", "success", "input", "prompt"]
              , l = function(e) {
                var t = s.getModal()
                  , i = t.querySelector("h2")
                  , l = t.querySelector("p")
                  , c = t.querySelector("button.cancel")
                  , d = t.querySelector("button.confirm");
                if (i.innerHTML = e.html ? e.title : r.escapeHtml(e.title).split("\n").join("<br>"),
                l.innerHTML = e.html ? e.text : r.escapeHtml(e.text || "").split("\n").join("<br>"),
                e.text && r.show(l),
                e.customClass)
                    r.addClass(t, e.customClass),
                    t.setAttribute("data-custom-class", e.customClass);
                else {
                    var u = t.getAttribute("data-custom-class");
                    r.removeClass(t, u),
                    t.setAttribute("data-custom-class", "")
                }
                if (r.hide(t.querySelectorAll(".sa-icon")),
                e.type && !o.isIE8()) {
                    var p = function() {
                        for (var i = !1, o = 0; o < a.length; o++)
                            if (e.type === a[o]) {
                                i = !0;
                                break
                            }
                        if (!i)
                            return logStr("Unknown alert type: " + e.type),
                            {
                                v: !1
                            };
                        var l = ["success", "error", "warning", "info"]
                          , c = n;
                        -1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type),
                        r.show(c));
                        var d = s.getInput();
                        switch (e.type) {
                        case "success":
                            r.addClass(c, "animate"),
                            r.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"),
                            r.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
                            break;
                        case "error":
                            r.addClass(c, "animateErrorIcon"),
                            r.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
                            break;
                        case "warning":
                            r.addClass(c, "pulseWarning"),
                            r.addClass(c.querySelector(".sa-body"), "pulseWarningIns"),
                            r.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
                            break;
                        case "input":
                        case "prompt":
                            d.setAttribute("type", e.inputType),
                            d.value = e.inputValue,
                            d.setAttribute("placeholder", e.inputPlaceholder),
                            r.addClass(t, "show-input"),
                            setTimeout(function() {
                                d.focus(),
                                d.addEventListener("keyup", swal.resetInputError)
                            }, 400)
                        }
                    }();
                    if ("object" == typeof p)
                        return p.v
                }
                if (e.imageUrl) {
                    var h = t.querySelector(".sa-icon.sa-custom");
                    h.style.backgroundImage = "url(" + e.imageUrl + ")",
                    r.show(h);
                    var f = 80
                      , m = 80;
                    if (e.imageSize) {
                        var g = e.imageSize.toString().split("x")
                          , v = g[0]
                          , b = g[1];
                        v && b ? (f = v,
                        m = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                    }
                    h.setAttribute("style", h.getAttribute("style") + "width:" + f + "px; height:" + m + "px")
                }
                t.setAttribute("data-has-cancel-button", e.showCancelButton),
                e.showCancelButton ? c.style.display = "inline-block" : r.hide(c),
                t.setAttribute("data-has-confirm-button", e.showConfirmButton),
                e.showConfirmButton ? d.style.display = "inline-block" : r.hide(d),
                e.cancelButtonText && (c.innerHTML = r.escapeHtml(e.cancelButtonText)),
                e.confirmButtonText && (d.innerHTML = r.escapeHtml(e.confirmButtonText)),
                e.confirmButtonColor && (d.style.backgroundColor = e.confirmButtonColor,
                d.style.borderLeftColor = e.confirmLoadingButtonColor,
                d.style.borderRightColor = e.confirmLoadingButtonColor,
                s.setFocusStyle(d, e.confirmButtonColor)),
                t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                var y = !!e.doneFunction;
                t.setAttribute("data-has-done-function", y),
                e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"),
                t.setAttribute("data-timer", e.timer)
            };
            i.default = l,
            t.exports = i.default
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
              , s = function(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
            }
              , r = function() {
                return e.attachEvent && !e.addEventListener
            }
              , a = function(t) {
                e.console && e.console.log("SweetAlert: " + t)
            }
              , l = function(e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""),
                e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                t = t || 0;
                var n, i, o = "#";
                for (i = 0; 3 > i; i++)
                    n = parseInt(e.substr(2 * i, 2), 16),
                    n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16),
                    o += ("00" + n).substr(n.length);
                return o
            };
            i.extend = o,
            i.hexToRgb = s,
            i.isIE8 = r,
            i.logStr = a,
            i.colorLuminance = l
        }
        , {}]
    }, {}, [1]),
    "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document),
function(e) {
    e.cookie = function(t, n, i) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || null === n || void 0 === n)) {
            if (i = e.extend({}, i),
            null !== n && void 0 !== n || (i.expires = -1),
            "number" == typeof i.expires) {
                var o = i.expires
                  , s = i.expires = new Date;
                s.setDate(s.getDate() + o)
            }
            return n = String(n),
            document.cookie = [encodeURIComponent(t), "=", i.raw ? n : encodeURIComponent(n), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        i = n || {};
        for (var r, a = i.raw ? function(e) {
            return e
        }
        : decodeURIComponent, l = document.cookie.split("; "), c = 0; r = l[c] && l[c].split("="); c++)
            if (a(r[0]) === t)
                return a(r[1] || "");
        return null
    }
    ,
    e.fn.cookieBar = function(t) {
        var n = e.extend({
            closeButton: "none",
            hideOnClose: !0,
            secure: !1,
            path: "/",
            domain: ""
        }, t);
        return this.each(function() {
            var t = e(this);
            t.hide(),
            "none" == n.closeButton && (t.append('<a class="cookiebar-close">Continue</a>'),
            e.extend(n, {
                closeButton: ".cookiebar-close"
            })),
            "hide" != e.cookie("cookiebar") && t.show(),
            t.find(n.closeButton).click(function() {
                return n.hideOnClose && t.hide(),
                e.cookie("cookiebar", "hide", {
                    path: n.path,
                    secure: n.secure,
                    domain: n.domain,
                    expires: 30
                }),
                t.trigger("cookieBar-close"),
                !1
            })
        })
    }
    ,
    e.cookieBar = function(t) {
        e("body").prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>'),
        e(".cookie-message").cookieBar(t)
    }
}(jQuery),
"undefined" == typeof jQuery)
    throw new Error("jQuery plugins need to be before this file");
$.AdminBSB = {},
$.AdminBSB.options = {
    colors: {
        red: "#F44336",
        pink: "#E91E63",
        purple: "#9C27B0",
        deepPurple: "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196F3",
        lightBlue: "#03A9F4",
        cyan: "#00BCD4",
        teal: "#009688",
        green: "#4CAF50",
        lightGreen: "#8BC34A",
        lime: "#CDDC39",
        yellow: "#ffe821",
        amber: "#FFC107",
        orange: "#FF9800",
        deepOrange: "#FF5722",
        brown: "#795548",
        grey: "#9E9E9E",
        blueGrey: "#607D8B",
        black: "#000000",
        white: "#ffffff"
    },
    leftSideBar: {
        scrollColor: "rgba(0,0,0,0.5)",
        scrollWidth: "4px",
        scrollAlwaysVisible: !1,
        scrollBorderRadius: "0",
        scrollRailBorderRadius: "0",
        scrollActiveItemWhenPageLoad: !1,
        breakpointWidth: 1170
    },
    dropdownMenu: {
        effectIn: "fadeIn",
        effectOut: "fadeOut"
    }
},
$.AdminBSB.leftSideBar = {
    activate: function() {
        var e = this
          , t = $("body")
          , n = $(".overlay");
        $(window).click(function(i) {
            var o = $(i.target);
            "i" === i.target.nodeName.toLowerCase() && (o = $(i.target).parent()),
            !o.hasClass("bars") && e.isOpen() && 0 === o.parents("#leftsidebar").length && (o.hasClass("js-right-sidebar") || n.fadeOut(),
            t.removeClass("overlay-open"))
        }),
        $.each($(".menu-toggle.toggled"), function(e, t) {
            $(t).next().slideToggle(0)
        }),
        $.each($(".menu .list li.active"), function(e, t) {
            var n = $(t).find("a:eq(0)");
            n.addClass("toggled"),
            n.next().show()
        }),
        $(".menu-toggle").on("click", function(e) {
            var t = $(this)
              , n = t.next();
            if ($(t.parents("ul")[0]).hasClass("list")) {
                var i = $(e.target).hasClass("menu-toggle") ? e.target : $(e.target).parents(".menu-toggle");
                $.each($(".menu-toggle.toggled").not(i).next(), function(e, t) {
                    $(t).is(":visible") && ($(t).prev().toggleClass("toggled"),
                    $(t).slideUp())
                })
            }
            t.toggleClass("toggled"),
            n.slideToggle(320)
        }),
        e.setMenuHeight(),
        e.checkStatuForResize(!0),
        $(window).resize(function() {
            e.setMenuHeight(),
            e.checkStatuForResize(!1)
        }),
        Waves.attach(".menu .list a", ["waves-block"]),
        Waves.init()
    },
    setMenuHeight: function(e) {
        if (void 0 !== $.fn.slimScroll) {
            var t = $.AdminBSB.options.leftSideBar
              , n = $(window).height() - ($(".legal").outerHeight() + $(".user-info").outerHeight() + $(".navbar").innerHeight())
              , i = $(".list");
            if (i.slimscroll({
                height: n + "px",
                color: t.scrollColor,
                size: t.scrollWidth,
                alwaysVisible: t.scrollAlwaysVisible,
                borderRadius: t.scrollBorderRadius,
                railBorderRadius: t.scrollRailBorderRadius
            }),
            $.AdminBSB.options.leftSideBar.scrollActiveItemWhenPageLoad) {
                var o = $(".menu .list li.active")[0].offsetTop;
                o > 150 && i.slimscroll({
                    scrollTo: o + "px"
                })
            }
        }
    },
    checkStatuForResize: function(e) {
        var t = $("body")
          , n = $(".navbar .navbar-header .bars")
          , i = t.width();
        e && t.find(".content, .sidebar").addClass("no-animate").delay(1e3).queue(function() {
            $(this).removeClass("no-animate").dequeue()
        }),
        i < $.AdminBSB.options.leftSideBar.breakpointWidth ? (t.addClass("ls-closed"),
        n.fadeIn()) : (t.removeClass("ls-closed"),
        n.fadeOut())
    },
    isOpen: function() {
        return $("body").hasClass("overlay-open")
    }
},
$.AdminBSB.rightSideBar = {
    activate: function() {
        var e = this
          , t = $("#rightsidebar")
          , n = $(".overlay");
        $(window).click(function(i) {
            var o = $(i.target);
            "i" === i.target.nodeName.toLowerCase() && (o = $(i.target).parent()),
            !o.hasClass("js-right-sidebar") && e.isOpen() && 0 === o.parents("#rightsidebar").length && (o.hasClass("bars") || n.fadeOut(),
            t.removeClass("open"))
        }),
        $(".js-right-sidebar").on("click", function() {
            t.toggleClass("open"),
            e.isOpen() ? n.fadeIn() : n.fadeOut()
        })
    },
    isOpen: function() {
        return $(".right-sidebar").hasClass("open")
    }
};
var $searchBar = $(".search-bar");
$.AdminBSB.search = {
    activate: function() {
        var e = this;
        $(".js-search").on("click", function() {
            e.showSearchBar()
        }),
        $searchBar.find(".close-search").on("click", function() {
            e.hideSearchBar()
        }),
        $searchBar.find('input[type="text"]').on("keyup", function(t) {
            27 == t.keyCode && e.hideSearchBar()
        })
    },
    showSearchBar: function() {
        $searchBar.addClass("open"),
        $searchBar.find('input[type="text"]').focus()
    },
    hideSearchBar: function() {
        $searchBar.removeClass("open"),
        $searchBar.find('input[type="text"]').val("")
    }
},
$.AdminBSB.navbar = {
    activate: function() {
        var e = $("body")
          , t = $(".overlay");
        $(".bars").on("click", function() {
            e.toggleClass("overlay-open"),
            e.hasClass("overlay-open") ? t.fadeIn() : t.fadeOut()
        }),
        $('.nav [data-close="true"]').on("click", function() {
            var e = $(".navbar-toggle").is(":visible")
              , t = $(".navbar-collapse");
            e && t.slideUp(function() {
                t.removeClass("in").removeAttr("style")
            })
        })
    }
},
$.AdminBSB.input = {
    activate: function() {
        $(".form-control").focus(function() {
            $(this).parent().addClass("focused")
        }),
        $(".form-control").focusout(function() {
            var e = $(this);
            e.parents(".form-group").hasClass("form-float") ? "" == e.val() && e.parents(".form-line").removeClass("focused") : e.parents(".form-line").removeClass("focused")
        }),
        $("body").on("click", ".form-float .form-line .form-label", function() {
            $(this).parent().find("input").focus()
        }),
        $(".form-control").each(function() {
            "" !== $(this).val() && $(this).parents(".form-line").addClass("focused")
        })
    }
},
$.AdminBSB.select = {
    activate: function() {
        $.fn.selectpicker && $("select:not(.ms)").selectpicker()
    }
},
$.AdminBSB.dropdownMenu = {
    activate: function() {
        var e = this;
        $(".dropdown, .dropup, .btn-group").on({
            "show.bs.dropdown": function() {
                var t = e.dropdownEffect(this);
                e.dropdownEffectStart(t, t.effectIn)
            },
            "shown.bs.dropdown": function() {
                var t = e.dropdownEffect(this);
                t.effectIn && t.effectOut && e.dropdownEffectEnd(t, function() {})
            },
            "hide.bs.dropdown": function(t) {
                var n = e.dropdownEffect(this);
                n.effectOut && (t.preventDefault(),
                e.dropdownEffectStart(n, n.effectOut),
                e.dropdownEffectEnd(n, function() {
                    n.dropdown.removeClass("open")
                }))
            }
        }),
        Waves.attach(".dropdown-menu li a", ["waves-block"]),
        Waves.init()
    },
    dropdownEffect: function(e) {
        var t = $.AdminBSB.options.dropdownMenu.effectIn
          , n = $.AdminBSB.options.dropdownMenu.effectOut
          , i = $(e)
          , o = $(".dropdown-menu", e);
        if (i.length > 0) {
            var s = i.data("effect-in")
              , r = i.data("effect-out");
            void 0 !== s && (t = s),
            void 0 !== r && (n = r)
        }
        return {
            target: e,
            dropdown: i,
            dropdownMenu: o,
            effectIn: t,
            effectOut: n
        }
    },
    dropdownEffectStart: function(e, t) {
        t && (e.dropdown.addClass("dropdown-animating"),
        e.dropdownMenu.addClass("animated dropdown-animated"),
        e.dropdownMenu.addClass(t))
    },
    dropdownEffectEnd: function(e, t) {
        e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            e.dropdown.removeClass("dropdown-animating"),
            e.dropdownMenu.removeClass("animated dropdown-animated"),
            e.dropdownMenu.removeClass(e.effectIn),
            e.dropdownMenu.removeClass(e.effectOut),
            "function" == typeof t && t()
        })
    }
};
var edge = "Microsoft Edge"
  , ie10 = "Internet Explorer 10"
  , ie11 = "Internet Explorer 11"
  , opera = "Opera"
  , firefox = "Mozilla Firefox"
  , chrome = "Google Chrome"
  , safari = "Safari";
$.AdminBSB.browser = {
    activate: function() {
        var e = this;
        "" !== e.getClassName() && $("html").addClass(e.getClassName())
    },
    getBrowser: function() {
        var e = navigator.userAgent.toLowerCase();
        return /edge/i.test(e) ? edge : /rv:11/i.test(e) ? ie11 : /msie 10/i.test(e) ? ie10 : /opr/i.test(e) ? opera : /chrome/i.test(e) ? chrome : /firefox/i.test(e) ? firefox : navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? safari : void 0
    },
    getClassName: function() {
        var e = this.getBrowser();
        return e === edge ? "edge" : e === ie11 ? "ie11" : e === ie10 ? "ie10" : e === opera ? "opera" : e === chrome ? "chrome" : e === firefox ? "firefox" : e === safari ? "safari" : ""
    }
},
$(function() {
    $.AdminBSB.browser.activate(),
    $.AdminBSB.leftSideBar.activate(),
    $.AdminBSB.rightSideBar.activate(),
    $.AdminBSB.navbar.activate(),
    $.AdminBSB.dropdownMenu.activate(),
    $.AdminBSB.input.activate(),
    $.AdminBSB.select.activate(),
    $.AdminBSB.search.activate(),
    setTimeout(function() {
        $(".page-loader-wrapper").fadeOut()
    }, 50)
}),
$(document).ready(function() {
    $(".cookie-message").cookieBar({
        closeButton: ".cookie-message-close"
    })
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});

function getElement(e) {
    return document.getElementById(e);
}

function __(s) {
   try {
    if (typeof translations[s] === 'undefined') {
        return  s;
    }
    return translations[s];
   } catch (err) {
    console.warn("ERROR " + err)
   }
}

function toggleVisibility(e) {
    let x = document.getElementById(e)
      , y = document.getElementById(`${e}_icon`)
      , s = (x.type === "password");
    (s) ? y.innerText = "visibility_off" : y.innerText = "visibility";
    (s) ? x.type = "text" : x.type = "password";
}

function checkPassed(a) {
    try {
        a.parentElement.nextElementSibling.classList.add("hidden");
    a = a.parentElement.classList;
    a.remove("error");
    a.add("success");
    a.add("focused");
    } catch (err) {
        console.warn("Error: " + err)
    }
}

function hasError(a, c) {
    var b = a.parentElement.nextElementSibling;
    b.innerText = c;
    b.classList.remove("hidden");
    b = a.parentElement.classList;
    b.remove("success");
    b.add("error");
    b.add("focused");
}
