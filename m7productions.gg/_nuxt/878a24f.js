(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    1: function (t, e, n) {
      "use strict";
      n.d(e, "k", function () {
        return w;
      }),
        n.d(e, "m", function () {
          return x;
        }),
        n.d(e, "l", function () {
          return O;
        }),
        n.d(e, "e", function () {
          return _;
        }),
        n.d(e, "b", function () {
          return j;
        }),
        n.d(e, "s", function () {
          return $;
        }),
        n.d(e, "g", function () {
          return k;
        }),
        n.d(e, "h", function () {
          return C;
        }),
        n.d(e, "d", function () {
          return S;
        }),
        n.d(e, "r", function () {
          return E;
        }),
        n.d(e, "j", function () {
          return P;
        }),
        n.d(e, "t", function () {
          return R;
        }),
        n.d(e, "o", function () {
          return T;
        }),
        n.d(e, "q", function () {
          return D;
        }),
        n.d(e, "f", function () {
          return I;
        }),
        n.d(e, "c", function () {
          return M;
        }),
        n.d(e, "i", function () {
          return N;
        }),
        n.d(e, "p", function () {
          return B;
        }),
        n.d(e, "a", function () {
          return F;
        }),
        n.d(e, "u", function () {
          return Y;
        }),
        n.d(e, "n", function () {
          return V;
        });
      n(34), n(27), n(41), n(42), n(71), n(30), n(72);
      var r = n(21),
        o = n(8),
        c = n(28),
        l = n(22),
        f =
          (n(43),
          n(50),
          n(221),
          n(14),
          n(29),
          n(92),
          n(59),
          n(44),
          n(17),
          n(24),
          n(37),
          n(51),
          n(73),
          n(165),
          n(166),
          n(225),
          n(96),
          n(126),
          n(226),
          n(70),
          n(91),
          n(2)),
        d = n(35);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function v(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function w(t) {
        f.a.config.errorHandler && f.a.config.errorHandler(t);
      }
      function x(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function O(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function _(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = v(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && _(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }
      function j(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                m(m({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function $(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = f.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }
      function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return k(t, e, "instances");
      }
      function S(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function E(t, e) {
        return Promise.all(
          S(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  var l, f;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              t.next = 11;
                              break;
                            }
                            return (t.prev = 1), (t.next = 4), n();
                          case 4:
                            (n = t.sent), (t.next = 11);
                            break;
                          case 7:
                            throw (
                              ((t.prev = 7),
                              (t.t0 = t.catch(1)),
                              t.t0 &&
                                "ChunkLoadError" === t.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((l = Date.now()),
                                (!(f = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  f + 6e4 < l) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    l
                                  ),
                                  window.location.reload(!0))),
                              t.t0)
                            );
                          case 11:
                            return (
                              (o.components[c] = n = $(n)),
                              t.abrupt(
                                "return",
                                "function" == typeof e ? e(n, r, o, c) : n
                              )
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function P(t) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), E(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      m(
                        m({}, e),
                        {},
                        {
                          meta: k(e).map(function (t, n) {
                            return m(
                              m({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function R(t, e) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, f, h;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !1,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: {},
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== o && "object" !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              "object" === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(d.d)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([P(n.route), P(n.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(l.a)(o, 2)),
                      (f = c[0]),
                      (h = c[1]),
                      n.route && (e.context.route = f),
                      n.from && (e.context.from = h),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function T(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : D(t[0], e).then(function () {
              return T(t.slice(1), e);
            });
      }
      function D(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function I(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(d.c)(e);
      }
      function M(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(r.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", X(e)));
          return function (e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? z : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ("string" != typeof l) {
                var f = data[l.name || "pathMatch"],
                  d = void 0;
                if (null == f) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined'
                  );
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  if (0 === f.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var h = 0; h < f.length; h++) {
                    if (((d = o(f[h])), !n[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          "`"
                      );
                    path += (0 === h ? l.prefix : l.delimiter) + d;
                  }
                } else {
                  if (((d = l.asterisk ? H(f) : o(f)), !n[c].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"'
                    );
                  path += l.prefix + d;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              l = (e && e.delimiter) || "/";
            for (; null != (n = U.exec(t)); ) {
              var f = n[0],
                d = n[1],
                h = n.index;
              if (((path += t.slice(c, h)), (c = h + f.length), d))
                path += d[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  w = n[4],
                  x = n[5],
                  O = n[6],
                  _ = n[7];
                path && (r.push(path), (path = ""));
                var j = null != v && null != m && m !== v,
                  $ = "+" === O || "*" === O,
                  k = "?" === O || "*" === O,
                  C = n[2] || l,
                  pattern = w || x;
                r.push({
                  name: y || o++,
                  prefix: v || "",
                  delimiter: C,
                  optional: k,
                  repeat: $,
                  partial: j,
                  asterisk: Boolean(_),
                  pattern: pattern
                    ? G(pattern)
                    : _
                    ? ".*"
                    : "[^" + K(C) + "]+?",
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function N(t, e) {
        var n = {},
          r = m(m({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function B(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return m(
          m({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var U = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function z(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function H(t) {
        return z(t, !0);
      }
      function K(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function G(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function X(t) {
        return t && t.sensitive ? "" : "i";
      }
      function F(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var Y = d.b,
        V = (d.e, d.a);
    },
    100: function (t, e, n) {
      "use strict";
      n(53),
        n(30),
        n(70),
        n(91),
        n(59),
        n(50),
        n(14),
        n(37),
        n(29),
        n(34),
        n(17),
        n(27),
        n(41),
        n(42),
        n(24);
      var r = n(2);
      function o(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          f = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var l =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        f =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        d =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = l(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          f(this.handleId),
            this.__observed &&
              (d.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            d &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              d.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              d.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
    128: function (t, e, n) {
      "use strict";
      e.a = {};
    },
    131: function (t, e, n) {
      var r = n(240);
      function o() {
        return (o = r(
          regeneratorRuntime.mark(function t() {
            var e, r, o;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      t.next = 2;
                      break;
                    }
                    throw new Error(
                      "serviceWorker is not supported in current browser!"
                    );
                  case 2:
                    return (t.next = 4), n.e(34).then(n.bind(null, 263));
                  case 4:
                    return (
                      (e = t.sent),
                      (r = e.Workbox),
                      (o = new r("/sw.js", { scope: "/" })),
                      (t.next = 9),
                      o.register()
                    );
                  case 9:
                    return t.abrupt("return", o);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      n(43),
        n(14),
        n(17),
        n(24),
        (window.$workbox = (function () {
          return o.apply(this, arguments);
        })().catch(function (t) {}));
    },
    132: function (t, e) {
      window.addEventListener("DOMContentLoaded", function () {
        var header,
          t,
          e = document.getElementById("navMenu"),
          n = document.getElementById("navItems");
        e.addEventListener("click", function () {
          e.classList.toggle("open"),
            n.classList.toggle("open"),
            n.classList.contains("open")
              ? ((document.body.style.maxHeight = "100vh !important"),
                (document.body.style.height = "100vh !important"),
                (document.body.style.overflow = "hidden"))
              : ((document.body.style.maxHeight = "auto"),
                (document.body.style.height = "auto"),
                (document.body.style.overflow = "auto"));
        }),
          (header = document.getElementById("header")),
          document.querySelector(".header-container"),
          (t = document.querySelector(".m7-logo.hidden")) &&
            ((t.style.height = 0), (t.style.width = 0)),
          (window.onscroll = function (e) {
            window.pageYOffset > 600
              ? header.classList.add("dark_bg")
              : header.classList.remove("dark_bg"),
              "/" === this.$nuxt.$route.path
                ? window.pageYOffset > 600
                  ? (header.classList.add("sticky"),
                    t && ((t.style.height = "4rem"), (t.style.width = "auto")))
                  : (header.classList.remove("sticky"),
                    t && ((t.style.height = 0), (t.style.width = 0)))
                : header.classList.add("sticky");
          });
      });
    },
    133: function (t, e, n) {
      var r;
      n(262);
      n(53), n(169), n(126), n(51), n(127);
      if (1 == parseInt("1")) {
        !(function () {
          var o,
            c,
            l,
            f,
            d = {
              frameRate: 60,
              animationTime: 600,
              stepSize: 200,
              pulseAlgorithm: !0,
              pulseScale: 4,
              pulseNormalize: 1,
              accelerationDelta: 50,
              accelerationMax: 3,
              keyboardSupport: !0,
              arrowScroll: 50,
              fixedBackground: !0,
              excluded: "",
            },
            a = d,
            h = !1,
            m = { x: 0, y: 0 },
            s = !1,
            u = document.documentElement,
            v = [],
            y = /^Mac/.test(navigator.platform),
            w = 37,
            x = 38,
            O = 39,
            _ = 40,
            j = 32,
            $ = 33,
            k = 34,
            C = 35,
            S = 36,
            E = { 37: 1, 38: 1, 39: 1, 40: 1 };
          function P() {
            if (!s && document.body) {
              s = !0;
              var t = document.body,
                e = document.documentElement,
                n = window.innerHeight,
                r = t.scrollHeight;
              if (
                ((u = document.compatMode.indexOf("CSS") >= 0 ? e : t),
                (o = t),
                a.keyboardSupport && V("keydown", L),
                top != self)
              )
                h = !0;
              else if (
                ht &&
                r > n &&
                (t.offsetHeight <= n || e.offsetHeight <= n)
              ) {
                var f,
                  d = document.createElement("div");
                if (
                  ((d.style.cssText =
                    "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
                    u.scrollHeight +
                    "px"),
                  document.body.appendChild(d),
                  (l = function () {
                    f ||
                      (f = setTimeout(function () {
                        (d.style.height = "0"),
                          (d.style.height = u.scrollHeight + "px"),
                          (f = null);
                      }, 500));
                  }),
                  setTimeout(l, 10),
                  V("resize", l),
                  (c = new q(l)).observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                  }),
                  u.offsetHeight <= n)
                ) {
                  var m = document.createElement("div");
                  (m.style.clear = "both"), t.appendChild(m);
                }
              }
              a.fixedBackground ||
                ((t.style.backgroundAttachment = "scroll"),
                (e.style.backgroundAttachment = "scroll"));
            }
          }
          var p = [],
            A = !1,
            R = Date.now();
          function b(t, e, n) {
            var r, o;
            if (
              ((r = (r = e) > 0 ? 1 : -1),
              (o = (o = n) > 0 ? 1 : -1),
              (m.x !== r || m.y !== o) &&
                ((m.x = r), (m.y = o), (p = []), (R = 0)),
              1 != a.accelerationMax)
            ) {
              var i = Date.now() - R;
              if (i < a.accelerationDelta) {
                var c = (1 + 50 / i) / 2;
                c > 1 &&
                  ((c = Math.min(c, a.accelerationMax)), (e *= c), (n *= c));
              }
              R = Date.now();
            }
            if (
              (p.push({
                x: e,
                y: n,
                lastX: e < 0 ? 0.99 : -0.99,
                lastY: n < 0 ? 0.99 : -0.99,
                start: Date.now(),
              }),
              !A)
            ) {
              var s = nt(),
                u = t === s || t === document.body;
              null == t.$scrollBehavior &&
                (function (t) {
                  var e = M(t);
                  if (null == U[e]) {
                    var n = getComputedStyle(t, "")["scroll-behavior"];
                    U[e] = "smooth" == n;
                  }
                  return U[e];
                })(t) &&
                ((t.$scrollBehavior = t.style.scrollBehavior),
                (t.style.scrollBehavior = "auto"));
              et(
                function r(o) {
                  for (
                    var c = Date.now(), i = 0, l = 0, f = 0;
                    f < p.length;
                    f++
                  ) {
                    var s = p[f],
                      d = c - s.start,
                      h = d >= a.animationTime,
                      m = h ? 1 : d / a.animationTime;
                    a.pulseAlgorithm && (m = at(m));
                    var v = (s.x * m - s.lastX) >> 0,
                      y = (s.y * m - s.lastY) >> 0;
                    (i += v),
                      (l += y),
                      (s.lastX += v),
                      (s.lastY += y),
                      h && (p.splice(f, 1), f--);
                  }
                  u
                    ? window.scrollBy(i, l)
                    : (i && (t.scrollLeft += i), l && (t.scrollTop += l)),
                    e || n || (p = []),
                    p.length
                      ? et(r, t, 1e3 / a.frameRate + 1)
                      : ((A = !1),
                        null != t.$scrollBehavior &&
                          ((t.style.scrollBehavior = t.$scrollBehavior),
                          (t.$scrollBehavior = null)));
                },
                t,
                0
              ),
                (A = !0);
            }
          }
          function g(t) {
            s || P();
            var e = t.target;
            if (t.defaultPrevented || t.ctrlKey) return !0;
            if (
              J(o, "embed") ||
              (J(e, "embed") && /\.pdf/i.test(e.src)) ||
              J(o, "object") ||
              e.shadowRoot
            )
              return !0;
            var n = -t.wheelDeltaX || t.deltaX || 0,
              i = -t.wheelDeltaY || t.deltaY || 0;
            y &&
              (t.wheelDeltaX &&
                Q(t.wheelDeltaX, 120) &&
                (n = (t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * -120),
              t.wheelDeltaY &&
                Q(t.wheelDeltaY, 120) &&
                (i = (t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * -120)),
              n || i || (i = -t.wheelDelta || 0),
              1 === t.deltaMode && ((n *= 40), (i *= 40));
            var r = G(e);
            return r
              ? !!(function (t) {
                  if (t) {
                    v.length || (v = [t, t, t]),
                      (t = Math.abs(t)),
                      v.push(t),
                      v.shift(),
                      clearTimeout(f),
                      (f = setTimeout(function () {
                        try {
                          localStorage.SS_deltaBuffer = v.join(",");
                        } catch (t) {}
                      }, 1e3));
                    var e = t > 120 && Z(t);
                    return !Z(120) && !Z(100) && !e;
                  }
                })(i) ||
                  (Math.abs(n) > 1.2 && (n *= a.stepSize / 120),
                  Math.abs(i) > 1.2 && (i *= a.stepSize / 120),
                  b(r, n, i),
                  t.preventDefault(),
                  void z())
              : !h ||
                  !st ||
                  (Object.defineProperty(t, "target", {
                    value: window.frameElement,
                  }),
                  parent.wheel(t));
          }
          function L(t) {
            var e = t.target,
              n =
                t.ctrlKey ||
                t.altKey ||
                t.metaKey ||
                (t.shiftKey && t.keyCode !== j);
            document.body.contains(o) || (o = document.activeElement);
            var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (
              t.defaultPrevented ||
              /^(textarea|select|embed|object)$/i.test(e.nodeName) ||
              (J(e, "input") && !r.test(e.type)) ||
              J(o, "video") ||
              (function (t) {
                var e = t.target,
                  n = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                  do {
                    if (
                      (n =
                        e.classList &&
                        e.classList.contains("html5-video-controls"))
                    )
                      break;
                  } while ((e = e.parentNode));
                return n;
              })(t) ||
              e.isContentEditable ||
              n
            )
              return !0;
            if (
              (J(e, "button") || (J(e, "input") && r.test(e.type))) &&
              t.keyCode === j
            )
              return !0;
            if (J(e, "input") && "radio" == e.type && E[t.keyCode]) return !0;
            var i = 0,
              c = 0,
              s = G(o);
            if (!s) return !h || !st || parent.keydown(t);
            var u = s.clientHeight;
            switch (
              (s == document.body && (u = window.innerHeight), t.keyCode)
            ) {
              case x:
                c = -a.arrowScroll;
                break;
              case _:
                c = a.arrowScroll;
                break;
              case j:
                c = -(t.shiftKey ? 1 : -1) * u * 0.9;
                break;
              case $:
                c = 0.9 * -u;
                break;
              case k:
                c = 0.9 * u;
                break;
              case S:
                s == document.body &&
                  document.scrollingElement &&
                  (s = document.scrollingElement),
                  (c = -s.scrollTop);
                break;
              case C:
                var l = s.scrollHeight - s.scrollTop - u;
                c = l > 0 ? l + 10 : 0;
                break;
              case w:
                i = -a.arrowScroll;
                break;
              case O:
                i = a.arrowScroll;
                break;
              default:
                return !0;
            }
            b(s, i, c), t.preventDefault(), z();
          }
          function T(t) {
            o = t.target;
          }
          var D,
            I,
            M =
              ((D = 0),
              function (t) {
                return t.uniqueID || (t.uniqueID = D++);
              }),
            N = {},
            B = {},
            U = {};
          function z() {
            clearTimeout(I),
              (I = setInterval(function () {
                N = B = U = {};
              }, 1e3));
          }
          function H(t, e, n) {
            for (var r = n ? N : B, o = t.length; o--; ) r[M(t[o])] = e;
            return e;
          }
          function K(t, e) {
            return (e ? N : B)[M(t)];
          }
          function G(t) {
            var e = [],
              n = document.body,
              r = u.scrollHeight;
            do {
              var o = K(t, !1);
              if (o) return H(e, o);
              if ((e.push(t), r === t.scrollHeight)) {
                var a = (F(u) && F(n)) || Y(u);
                if ((h && X(u)) || (!h && a)) return H(e, nt());
              } else if (X(t) && Y(t)) return H(e, t);
            } while ((t = t.parentElement));
          }
          function X(t) {
            return t.clientHeight + 10 < t.scrollHeight;
          }
          function F(t) {
            return (
              "hidden" !==
              getComputedStyle(t, "").getPropertyValue("overflow-y")
            );
          }
          function Y(t) {
            var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
            return "scroll" === e || "auto" === e;
          }
          function V(t, e, n) {
            window.addEventListener(t, e, n || !1);
          }
          function W(t, e, n) {
            window.removeEventListener(t, e, n || !1);
          }
          function J(t, e) {
            return t && (t.nodeName || "").toLowerCase() === e.toLowerCase();
          }
          if (window.localStorage && localStorage.SS_deltaBuffer)
            try {
              v = localStorage.SS_deltaBuffer.split(",");
            } catch (o) {}
          function Q(t, e) {
            return Math.floor(t / e) == t / e;
          }
          function Z(t) {
            return Q(v[0], t) && Q(v[1], t) && Q(v[2], t);
          }
          var tt,
            et =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (t, e, n) {
                window.setTimeout(t, n || 1e3 / 60);
              },
            q =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver,
            nt =
              ((tt = document.scrollingElement),
              function () {
                if (!tt) {
                  var t = document.createElement("div");
                  (t.style.cssText = "height:10000px;width:1px;"),
                    document.body.appendChild(t);
                  var e = document.body.scrollTop;
                  document.documentElement.scrollTop,
                    window.scrollBy(0, 3),
                    (tt =
                      document.body.scrollTop != e
                        ? document.body
                        : document.documentElement),
                    window.scrollBy(0, -3),
                    document.body.removeChild(t);
                }
                return tt;
              });
          function ot(t) {
            var e, n;
            return (
              (t *= a.pulseScale) < 1
                ? (e = t - (1 - Math.exp(-t)))
                : ((t -= 1),
                  (e = (n = Math.exp(-1)) + (1 - Math.exp(-t)) * (1 - n))),
              e * a.pulseNormalize
            );
          }
          function at(t) {
            return t >= 1
              ? 1
              : t <= 0
              ? 0
              : (1 == a.pulseNormalize && (a.pulseNormalize /= ot(1)), ot(t));
          }
          var it = window.navigator.userAgent,
            ut = /Edge/.test(it),
            st = /chrome/i.test(it) && !ut,
            ct = /safari/i.test(it) && !ut,
            lt = /mobile/i.test(it),
            ft = /Windows NT 6.1/i.test(it) && /rv:11/i.test(it),
            ht = ct && (/Version\/8/i.test(it) || /Version\/9/i.test(it)),
            pt = (st || ct || ft) && !lt,
            mt = !1;
          try {
            window.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  mt = !0;
                },
              })
            );
          } catch (o) {}
          var vt = !!mt && { passive: !1 },
            yt =
              "onwheel" in document.createElement("div")
                ? "wheel"
                : "mousewheel";
          function gt(t) {
            for (var e in t) d.hasOwnProperty(e) && (a[e] = t[e]);
          }
          yt && pt && (V(yt, g, vt), V("mousedown", T), V("load", P)),
            (gt.destroy = function () {
              c && c.disconnect(),
                W(yt, g),
                W("mousedown", T),
                W("keydown", L),
                W("resize", l),
                W("load", P);
            }),
            window.SmoothScrollOptions && gt(window.SmoothScrollOptions),
            void 0 ===
              (r = function () {
                return gt;
              }.call(e, n, e, t)) || (t.exports = r);
        })();
      }
    },
    170: function (t, e, n) {},
    171: function (t, e, n) {},
    181: function (t, e, n) {},
    185: function (t) {
      t.exports = JSON.parse(
        '{"title":"M7-Productions","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"M7-Productions"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"M7-Productions"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"M7-Productions"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"link":[{"rel":"manifest","href":"/_nuxt/manifest.db92cfa7.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}'
      );
    },
    190: function (t, e, n) {
      "use strict";
      n.r(e);
      n(172), n(34), n(17), n(53), n(30);
      e.default = {
        inserted: function (t) {
          function e() {
            var e = Array.from(t.children).find(function (t) {
              return "IMG" === t.nodeName;
            });
            if (e) {
              e.addEventListener("load", function () {
                setTimeout(function () {
                  return t.classList.add("loaded");
                }, 100);
              });
              var r = n(259);
              e.addEventListener("error", function () {
                e.src = r;
              }),
                (e.src = e.dataset.url);
            }
          }
          function r(n, r) {
            n.forEach(function (n) {
              n.isIntersecting && (e(), r.unobserve(t));
            });
          }
          window.IntersectionObserver
            ? new IntersectionObserver(r, {
                root: null,
                threshold: "0",
              }).observe(t)
            : e();
        },
      };
    },
    192: function (t, e, n) {
      "use strict";
      var r = n(8),
        o = (n(43), n(14), n(53), n(2)),
        c = n(1),
        l = window.__NUXT__;
      function f() {
        if (!this._hydrated) return this.$fetch();
      }
      function d() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.a.set(this.$data, e, data[e]);
        }
      }
      function h() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = h.bind(this)),
            Object(c.a)(this, "created", d),
            Object(c.a)(this, "beforeMount", f));
        },
      };
    },
    193: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          data: function () {
            return { loadImage: "", errorImage: n(260) };
          },
          props: {
            source: { type: String, required: !0 },
            imageClass: { type: [String, Array], default: "" },
            alt: { type: String, default: "image" },
            showLoader: { type: Boolean, default: !0 },
            loaderColor: { type: String, default: "text-dark" },
            height: { type: String, default: "200px" },
            width: { type: String, default: "200px" },
            img_style: { type: String },
          },
        },
        o = (n(261), n(52)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("client-only", [
              n(
                "figure",
                {
                  directives: [{ name: "lazyload", rawName: "v-lazyload" }],
                  staticClass: "image__wrapper",
                },
                [
                  t.showLoader
                    ? n("div", { staticClass: "spinnerLoader" }, [
                        n("div", { staticClass: "lds-ring" }, [
                          n("div"),
                          t._v(" "),
                          n("div"),
                          t._v(" "),
                          n("div"),
                          t._v(" "),
                          n("div"),
                        ]),
                      ])
                    : t._e(),
                  t._v(" "),
                  n("img", {
                    staticClass: "image__item",
                    class: t.imageClass,
                    style: t.img_style,
                    attrs: {
                      src: t.loadImage,
                      "data-url": t.source,
                      alt: t.alt,
                      loading: "lazy",
                      height: t.height,
                      width: t.width,
                    },
                  }),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    197: function (t, e, n) {
      n(198), (t.exports = n(199));
    },
    199: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(37), n(34), n(27), n(41), n(42);
          var e = n(21),
            r = n(8),
            o =
              (n(113),
              n(208),
              n(217),
              n(218),
              n(43),
              n(29),
              n(14),
              n(30),
              n(50),
              n(44),
              n(70),
              n(91),
              n(92),
              n(59),
              n(17),
              n(24),
              n(53),
              n(2)),
            c = n(182),
            l = n(128),
            f = n(1),
            d = n(36),
            h = n(192),
            m = n(100);
          function v(t, e) {
            var n =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!n) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              c = !0,
              l = !1;
            return {
              s: function () {
                n = n.call(t);
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (l = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.a.__nuxt__fetch__mixin__ ||
            (o.a.mixin(h.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(m.a.name, m.a),
            o.a.component("NLink", m.a),
            t.fetch || (t.fetch = c.a);
          var w,
            x,
            O = [],
            _ = window.__NUXT__ || {},
            j = _.config || {};
          j._app && (n.p = Object(f.u)(j._app.cdnURL, j._app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 });
          var $ = o.a.config.errorHandler || console.error;
          function k(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = n ? Object(f.g)(n) : [],
                c = Math.max(t.length, o.length),
                l = [],
                d = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    l.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              d(i);
            return l;
          }
          function C(t, e, n) {
            return S.apply(this, arguments);
          }
          function S() {
            return (S = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  d,
                  h = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(w.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(f.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(f.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return h._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (d = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(d))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: l, message: d }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function E(t, e) {
            return _.serverRendered && e && Object(f.b)(t, e), (t._Ctor = t), t;
          }
          function P(t) {
            return Object(f.d)(
              t,
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = E(
                                Object(f.s)(e),
                                _.data ? _.data[c] : null
                              )),
                              (r.components[o] = l),
                              t.abrupt("return", l)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function A(t, e, n) {
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof l.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t,
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(f.o)(o, e);
          }
          function R(t, e, n) {
            return L.apply(this, arguments);
          }
          function L() {
            return (L = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var c,
                  l,
                  h,
                  m,
                  y,
                  x,
                  _,
                  j,
                  $,
                  C,
                  S,
                  E,
                  P,
                  R,
                  L,
                  T = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 2:
                          return (
                            !1,
                            e === n
                              ? ((O = []), !0)
                              : ((c = []),
                                (O = Object(f.g)(n, c).map(function (t, i) {
                                  return Object(f.c)(n.matched[c[i]].path)(
                                    n.params
                                  );
                                }))),
                            (l = !1),
                            (h = function (path) {
                              n.path === path.path &&
                                T.$loading.finish &&
                                T.$loading.finish(),
                                n.path !== path.path &&
                                  T.$loading.pause &&
                                  T.$loading.pause(),
                                l || ((l = !0), o(path));
                            }),
                            (t.next = 8),
                            Object(f.t)(w, {
                              route: e,
                              from: n,
                              next: h.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = w.nuxt.dateErr),
                            (this._hadError = Boolean(w.nuxt.err)),
                            (m = []),
                            (y = Object(f.g)(e, m)).length)
                          ) {
                            t.next = 27;
                            break;
                          }
                          return (t.next = 15), A.call(this, y, w.context);
                        case 15:
                          if (!l) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt("return");
                        case 17:
                          return (
                            (x = (d.a.options || d.a).layout),
                            (t.next = 20),
                            this.loadLayout(
                              "function" == typeof x
                                ? x.call(d.a, w.context)
                                : x
                            )
                          );
                        case 20:
                          return (
                            (_ = t.sent),
                            (t.next = 23),
                            A.call(this, y, w.context, _)
                          );
                        case 23:
                          if (!l) {
                            t.next = 25;
                            break;
                          }
                          return t.abrupt("return");
                        case 25:
                          return (
                            w.context.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            t.abrupt("return", o())
                          );
                        case 27:
                          return (
                            y.forEach(function (t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(k(y, e, n)),
                            (t.prev = 29),
                            (t.next = 32),
                            A.call(this, y, w.context)
                          );
                        case 32:
                          if (!l) {
                            t.next = 34;
                            break;
                          }
                          return t.abrupt("return");
                        case 34:
                          if (!w.context._errored) {
                            t.next = 36;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 36:
                          return (
                            "function" == typeof (j = y[0].options.layout) &&
                              (j = j(w.context)),
                            (t.next = 40),
                            this.loadLayout(j)
                          );
                        case 40:
                          return (
                            (j = t.sent),
                            (t.next = 43),
                            A.call(this, y, w.context, j)
                          );
                        case 43:
                          if (!l) {
                            t.next = 45;
                            break;
                          }
                          return t.abrupt("return");
                        case 45:
                          if (!w.context._errored) {
                            t.next = 47;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 47:
                          ($ = !0),
                            (t.prev = 48),
                            (C = v(y)),
                            (t.prev = 50),
                            C.s();
                        case 52:
                          if ((S = C.n()).done) {
                            t.next = 63;
                            break;
                          }
                          if (
                            "function" == typeof (E = S.value).options.validate
                          ) {
                            t.next = 56;
                            break;
                          }
                          return t.abrupt("continue", 61);
                        case 56:
                          return (t.next = 58), E.options.validate(w.context);
                        case 58:
                          if (($ = t.sent)) {
                            t.next = 61;
                            break;
                          }
                          return t.abrupt("break", 63);
                        case 61:
                          t.next = 52;
                          break;
                        case 63:
                          t.next = 68;
                          break;
                        case 65:
                          (t.prev = 65), (t.t0 = t.catch(50)), C.e(t.t0);
                        case 68:
                          return (t.prev = 68), C.f(), t.finish(68);
                        case 71:
                          t.next = 77;
                          break;
                        case 73:
                          return (
                            (t.prev = 73),
                            (t.t1 = t.catch(48)),
                            this.error({
                              statusCode: t.t1.statusCode || "500",
                              message: t.t1.message,
                            }),
                            t.abrupt("return", o())
                          );
                        case 77:
                          if ($) {
                            t.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            t.abrupt("return", o())
                          );
                        case 80:
                          return (
                            (t.next = 82),
                            Promise.all(
                              y.map(
                                (function () {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, i) {
                                      var o, c, l, d, h, v, y, x, p;
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(f.c)(
                                                  e.matched[m[i]].path
                                                )(e.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== O[i]),
                                                T._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : T._paramChanged && o
                                                  ? ((c = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== c))
                                                  : T._queryChanged &&
                                                    (!0 ===
                                                    (l = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(l)
                                                      ? (r._dataRefresh =
                                                          l.some(function (t) {
                                                            return T
                                                              ._diffQuery[t];
                                                          }))
                                                      : "function" ==
                                                          typeof l &&
                                                        (P ||
                                                          (P = Object(f.h)(e)),
                                                        (r._dataRefresh =
                                                          l.apply(P[i], [
                                                            e.query,
                                                            n.query,
                                                          ])))),
                                                T._hadError ||
                                                  !T._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                t.next = 6;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 6:
                                              return (
                                                (d = []),
                                                (h =
                                                  r.options.asyncData &&
                                                  "function" ==
                                                    typeof r.options.asyncData),
                                                (v =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (y = h && v ? 30 : 45),
                                                h &&
                                                  ((x = Object(f.q)(
                                                    r.options.asyncData,
                                                    w.context
                                                  )).then(function (t) {
                                                    Object(f.b)(r, t),
                                                      T.$loading.increase &&
                                                        T.$loading.increase(y);
                                                  }),
                                                  d.push(x)),
                                                (T.$loading.manual =
                                                  !1 === r.options.loading),
                                                v &&
                                                  (((p = r.options.fetch(
                                                    w.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      "function" ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (t) {
                                                    T.$loading.increase &&
                                                      T.$loading.increase(y);
                                                  }),
                                                  d.push(p)),
                                                t.abrupt(
                                                  "return",
                                                  Promise.all(d)
                                                )
                                              );
                                            case 14:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          l ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (t.next = 99);
                          break;
                        case 85:
                          if (
                            ((t.prev = 85),
                            (t.t2 = t.catch(29)),
                            "ERR_REDIRECT" !== (R = t.t2 || {}).message)
                          ) {
                            t.next = 90;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", e, n, R)
                          );
                        case 90:
                          return (
                            (O = []),
                            Object(f.k)(R),
                            "function" ==
                              typeof (L = (d.a.options || d.a).layout) &&
                              (L = L(w.context)),
                            (t.next = 96),
                            this.loadLayout(L)
                          );
                        case 96:
                          this.error(R),
                            this.$nuxt.$emit("routeChanged", e, n, R),
                            o();
                        case 99:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function T(t, n) {
            Object(f.d)(t, function (t, n, r, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              );
            });
          }
          function D(t) {
            return I.apply(this, arguments);
          }
          function I() {
            return (I = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = Boolean(this.$options.nuxt.err)),
                            this._hadError &&
                              this._dateLastError ===
                                this.$options.nuxt.dateErr &&
                              (n = !1),
                            "function" ==
                              typeof (r = n
                                ? (d.a.options || d.a).layout
                                : e.matched[0].components.default.options
                                    .layout) && (r = r(w.context)),
                            (t.next = 6),
                            this.loadLayout(r)
                          );
                        case 6:
                          this.setLayout(r);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )).apply(this, arguments);
          }
          function M(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function N(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(f.h)(t),
                c = Object(f.g)(t),
                l = !1;
              o.a.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.a.set(t.$data, n, e[n]);
                    l = !0;
                  }
                }),
                  l &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  M(n);
              });
            }
          }
          function B(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              x.afterEach(function (e, n) {
                o.a.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function U() {
            return (U = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, l, d;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (w = e.app),
                          (x = e.router),
                          e.store,
                          (n = new o.a(w)),
                          (r = _.layout || "default"),
                          (t.next = 7),
                          n.loadLayout(r)
                        );
                      case 7:
                        return (
                          n.setLayout(r),
                          (c = function () {
                            n.$mount("#__nuxt"),
                              x.afterEach(T),
                              x.afterEach(D.bind(n)),
                              x.afterEach(N.bind(n)),
                              o.a.nextTick(function () {
                                B(n);
                              });
                          }),
                          (t.next = 11),
                          Promise.all(P(w.context.route))
                        );
                      case 11:
                        if (
                          ((l = t.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          l.length &&
                            (n.setTransitions(k(l, x.currentRoute)),
                            (O = x.currentRoute.matched.map(function (t) {
                              return Object(f.c)(t.path)(x.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          _.error && n.error(_.error),
                          x.beforeEach(C.bind(n)),
                          x.beforeEach(R.bind(n)),
                          !_.serverRendered ||
                            !Object(f.n)(_.routePath, n.context.route.path))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return t.abrupt("return", c());
                      case 20:
                        return (
                          (d = function () {
                            T(x.currentRoute, x.currentRoute),
                              D.call(n, x.currentRoute),
                              M(n),
                              c();
                          }),
                          (t.next = 23),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 23:
                        R.call(
                          n,
                          x.currentRoute,
                          x.currentRoute,
                          function (path) {
                            if (path) {
                              var t = x.afterEach(function (e, n) {
                                t(), d();
                              });
                              x.push(path, void 0, function (t) {
                                t && $(t);
                              });
                            } else d();
                          }
                        );
                      case 24:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(d.b)(null, _.config)
            .then(function (t) {
              return U.apply(this, arguments);
            })
            .catch($);
        }.call(this, n(31));
    },
    235: function (t, e, n) {
      "use strict";
      n(170);
    },
    236: function (t, e, n) {
      "use strict";
      n(171);
    },
    237: function (t, e, n) {},
    238: function (t, e) {},
    239: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(8);
      n(43);
      e.default = {
        namespaced: !0,
        state: function () {
          return { popularGames: [], allGames: [], galleryImages: [] };
        },
        mutations: {
          setPopularGames: function (t, e) {
            t.popularGames = e;
          },
          setAllGames: function (t, e) {
            t.allGames = e;
          },
          setAllGamesWithGalleries: function (t, e) {
            t.galleryImages = e;
          },
        },
        actions: {
          getAllGames: function (t) {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          e.$axios.$get("/all-games").then(function (e) {
                            t.commit("setAllGames", e.data);
                          })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getAllGamesWithGalleries: function (t) {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          e.$axios.$get("/game-gallery").then(function (e) {
                            t.commit("setAllGamesWithGalleries", e.data);
                          })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getPopularGames: function (t) {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          e.$axios.$get("/popular-games").then(function (e) {
                            t.commit("setPopularGames", e.data);
                          })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        },
      };
    },
    259: function (t, e, n) {
      t.exports = n.p + "img/preview.ca399e6.jpg";
    },
    260: function (t, e, n) {
      t.exports = n.p + "img/error.4a77610.png";
    },
    261: function (t, e, n) {
      "use strict";
      n(181);
    },
    36: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return re;
      }),
        n.d(e, "a", function () {
          return L;
        });
      var r = {};
      n.r(r),
        n.d(r, "ComingSoon", function () {
          return Q;
        }),
        n.d(r, "LightBoxComponent", function () {
          return Z;
        }),
        n.d(r, "M7Button", function () {
          return tt;
        }),
        n.d(r, "NuxtLogo", function () {
          return et;
        }),
        n.d(r, "PopularGames", function () {
          return nt;
        }),
        n.d(r, "Subscribe", function () {
          return ot;
        }),
        n.d(r, "UpdateLog", function () {
          return at;
        }),
        n.d(r, "ImageLazyLoadDirective", function () {
          return it;
        }),
        n.d(r, "ImageLazyLoadImage", function () {
          return ut;
        }),
        n.d(r, "LayoutsCssParticles", function () {
          return st;
        }),
        n.d(r, "LayoutsDeveloperInfo", function () {
          return ct;
        }),
        n.d(r, "LayoutsFooter", function () {
          return lt;
        }),
        n.d(r, "LayoutsHeader", function () {
          return ft;
        }),
        n.d(r, "LayoutsLogo", function () {
          return ht;
        }),
        n.d(r, "LayoutsNav", function () {
          return pt;
        }),
        n.d(r, "AnnouncementsImage", function () {
          return mt;
        }),
        n.d(r, "AnnouncementsSlider", function () {
          return vt;
        }),
        n.d(r, "LayoutsNavigation", function () {
          return yt;
        });
      n(44), n(27), n(50), n(71), n(30), n(72);
      var o = n(8),
        c = n(28),
        l = (n(43), n(29), n(59), n(14), n(51), n(73), n(2)),
        f = n(74),
        d = n(183),
        h = n(129),
        m = n.n(h),
        v = n(60),
        y = n.n(v),
        w = (n(17), n(24), n(130)),
        x = n(35),
        O = n(1);
      function _(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function j(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? _(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : _(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var $ = function () {};
      l.a.use(w.a);
      var k = {
        mode: "history",
        base: "/",
        linkActiveClass: "",
        linkExactActiveClass: "navActive",
        scrollBehavior: function (t, e, n) {
          return t.hash
            ? { selector: t.hash, behavior: "smooth" }
            : n || { x: 0, y: 0 };
        },
        routes: [
          {
            path: "/about-us",
            component: function () {
              return Object(O.m)(n.e(20).then(n.bind(null, 322)));
            },
            name: "about-us",
          },
          {
            path: "/announcement",
            component: function () {
              return Object(O.m)(n.e(22).then(n.bind(null, 313)));
            },
            name: "announcement",
          },
          {
            path: "/contact-us",
            component: function () {
              return Object(O.m)(n.e(23).then(n.bind(null, 324)));
            },
            name: "contact-us",
          },
          {
            path: "/forum",
            component: function () {
              return Object(O.m)(n.e(24).then(n.bind(null, 323)));
            },
            name: "forum",
          },
          {
            path: "/gallery",
            component: function () {
              return Object(O.m)(n.e(25).then(n.bind(null, 320)));
            },
            name: "gallery",
          },
          {
            path: "/games",
            component: function () {
              return Object(O.m)(n.e(28).then(n.bind(null, 319)));
            },
            name: "games",
          },
          {
            path: "/update-logs",
            component: function () {
              return Object(O.m)(n.e(31).then(n.bind(null, 318)));
            },
            name: "update-logs",
          },
          {
            path: "/announcement/:announcement_slug",
            component: function () {
              return Object(O.m)(
                Promise.all([n.e(0), n.e(21)]).then(n.bind(null, 317))
              );
            },
            name: "announcement-announcement_slug",
          },
          {
            path: "/games/:game_slug",
            component: function () {
              return Object(O.m)(
                Promise.all([n.e(0), n.e(26)]).then(n.bind(null, 315))
              );
            },
            name: "games-game_slug",
          },
          {
            path: "/update-logs/:game_slug?",
            component: function () {
              return Object(O.m)(n.e(30).then(n.bind(null, 314)));
            },
            name: "update-logs-game_slug",
          },
          {
            path: "/games/:game_slug/payment",
            component: function () {
              return Object(O.m)(n.e(27).then(n.bind(null, 325)));
            },
            name: "games-game_slug-payment",
          },
          {
            path: "/",
            component: function () {
              return Object(O.m)(n.e(29).then(n.bind(null, 316)));
            },
            name: "index",
          },
        ],
        fallback: !1,
      };
      function C(t, e) {
        var base = (e._app && e._app.basePath) || k.base,
          n = new w.a(j(j({}, k), {}, { base: base })),
          r = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : $,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, t, e, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(x.c)(t)), o(t, e, n);
          }),
          n
        );
      }
      var S = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                l = n.$nuxt.nuxt.transitions,
                f = n.$nuxt.nuxt.defaultTransition,
                d = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent);
            data.nuxtChildDepth = d;
            var h = l[d] || f,
              m = {};
            E.forEach(function (t) {
              void 0 !== h[t] && (m[t] = h[t]);
            });
            var v = {};
            P.forEach(function (t) {
              "function" == typeof h[t] && (v[t] = h[t].bind(c));
            });
            var y = v.beforeEnter;
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === h.css)
            ) {
              var w = v.leave;
              (!w || w.length < 2) &&
                (v.leave = function (t, e) {
                  w && w.call(c, t), c.$nextTick(e);
                });
            }
            var x = o("routerView", data);
            return (
              r.keepAlive &&
                (x = o("keep-alive", { props: r.keepAliveProps }, [x])),
              o("transition", { props: m, on: v }, [x])
            );
          },
        },
        E = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        P = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        A = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function () {
              return this.error.message || "Error";
            },
          },
          head: function () {
            return {
              title: this.message,
              meta: [
                {
                  name: "viewport",
                  content:
                    "width=device-width,initial-scale=1.0,minimum-scale=1.0",
                },
              ],
            };
          },
        },
        R = (n(235), n(52)),
        L = Object(R.a)(
          A,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "__nuxt-error-page" }, [
              n("div", { staticClass: "error" }, [
                n(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "90",
                      height: "90",
                      fill: "#DBE1EC",
                      viewBox: "0 0 48 48",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n("div", { staticClass: "title" }, [t._v(t._s(t.message))]),
                t._v(" "),
                404 === t.statusCode
                  ? n(
                      "p",
                      { staticClass: "description" },
                      [
                        void 0 === t.$route
                          ? n("a", {
                              staticClass: "error-link",
                              attrs: { href: "/" },
                            })
                          : n(
                              "NuxtLink",
                              { staticClass: "error-link", attrs: { to: "/" } },
                              [t._v("Back to the home page")]
                            ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                t._m(0),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "logo" }, [
                n(
                  "a",
                  {
                    attrs: {
                      href: "https://nuxtjs.org",
                      target: "_blank",
                      rel: "noopener",
                    },
                  },
                  [t._v("Nuxt")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        T = n(22),
        D =
          (n(96),
          {
            name: "Nuxt",
            components: { NuxtChild: S, NuxtError: L },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (t) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = t), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(O.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var t = Object(T.a)(this.$route.matched, 1)[0];
                if (!t) return this.$route.path;
                var e = t.components.default;
                if (e && e.options) {
                  var n = e.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(t.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
            },
            render: function (t) {
              var e = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (e.errorFromNuxtError = !1);
                    }),
                    t("div", {}, [
                      t("h2", "An error occurred while showing the error page"),
                      t(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      t(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      t("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (e.displayingNuxtError = !1);
                    }),
                    t(L, { props: { error: this.nuxt.err } }))
                : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        I =
          (n(37),
          n(34),
          n(41),
          n(42),
          n(53),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 3e3,
                continuous: !0,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                e
              );
            },
          }),
        M =
          (n(236),
          Object(R.a)(I, undefined, undefined, !1, null, null, null).exports);
      n(237);
      function N(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return B(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return B(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function B(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var U = {},
        z = {
          _default: function () {
            return n
              .e(19)
              .then(n.bind(null, 321))
              .then(function (t) {
                return Object(O.s)(t.default || t);
              });
          },
        },
        H = {
          render: function (t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            l.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(O.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(O.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = N(
                                      Object(O.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(O.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          l.a.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(O.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              var t = this;
              return Object(o.a)(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t.nuxt.err) {
                            e.next = 7;
                            break;
                          }
                          return (
                            t.$loading &&
                              (t.$loading.fail && t.$loading.fail(t.nuxt.err),
                              t.$loading.finish && t.$loading.finish()),
                            "function" ==
                              typeof (n = (L.options || L).layout) &&
                              (n = n(t.context)),
                            (e.next = 6),
                            t.loadLayout(n)
                          );
                        case 6:
                          t.setLayout(n);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            setLayout: function (t) {
              (t && U["_" + t]) || (t = "default"), (this.layoutName = t);
              var e = "_" + t;
              return (this.layout = U[e]), this.layout;
            },
            loadLayout: function (t) {
              var e = this,
                n = !t,
                r = !(z["_" + t] || U["_" + t]),
                o = "_" + (n || r ? "default" : t);
              return U[o]
                ? Promise.resolve(U[o])
                : z[o]()
                    .then(function (t) {
                      return (U[o] = t), delete z[o], U[o];
                    })
                    .catch(function (t) {
                      if (e.$nuxt)
                        return e.$nuxt.error({
                          statusCode: 500,
                          message: t.message,
                        });
                    });
            },
          },
          components: { NuxtLoading: M },
        };
      n(127), n(70);
      function K(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return G(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return G(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function G(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      l.a.use(f.a);
      var X = ["state", "getters", "actions", "mutations"],
        F = {};
      ((F = (function (t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            "[nuxt] ".concat(
              e,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof t && (t = Object.assign({}, t)), V(t, e);
      })(n(238), "store/index.js")).modules = F.modules || {}),
        (function (t, e) {
          t = t.default || t;
          var n = e.replace(/\.(js|mjs)$/, "").split("/"),
            r = n[n.length - 1],
            o = "store/".concat(e);
          if (
            ((t =
              "state" === r
                ? (function (t, e) {
                    if ("function" != typeof t) {
                      console.warn(
                        "".concat(
                          e,
                          " should export a method that returns an object"
                        )
                      );
                      var n = Object.assign({}, t);
                      return function () {
                        return n;
                      };
                    }
                    return V(t, e);
                  })(t, o)
                : V(t, o)),
            X.includes(r))
          ) {
            var c = r;
            J(W(F, n, { isProperty: !0 }), t, c);
          } else {
            "index" === r && (n.pop(), (r = n[n.length - 1]));
            var l,
              f = W(F, n),
              d = K(X);
            try {
              for (d.s(); !(l = d.n()).done; ) {
                var h = l.value;
                J(f, t[h], h);
              }
            } catch (t) {
              d.e(t);
            } finally {
              d.f();
            }
            !1 === t.namespaced && delete f.namespaced;
          }
        })(n(239), "games.js");
      var Y =
        F instanceof Function
          ? F
          : function () {
              return new f.a.Store(Object.assign({ strict: !1 }, F));
            };
      function V(t, e) {
        if (t.state && "function" != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e)
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function () {
              return n;
            },
          });
        }
        return t;
      }
      function W(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || (o && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          W(t.modules[c], e, { isProperty: o })
        );
      }
      function J(t, e, n) {
        e &&
          ("state" === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      n(91);
      var Q = function () {
          return n
            .e(5)
            .then(n.bind(null, 276))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        Z = function () {
          return n
            .e(13)
            .then(n.bind(null, 330))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        tt = function () {
          return n
            .e(14)
            .then(n.bind(null, 265))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        et = function () {
          return n
            .e(15)
            .then(n.bind(null, 331))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        nt = function () {
          return n
            .e(16)
            .then(n.bind(null, 277))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        ot = function () {
          return n
            .e(17)
            .then(n.bind(null, 269))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        at = function () {
          return n
            .e(18)
            .then(n.bind(null, 329))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        it = function () {
          return Promise.resolve()
            .then(n.bind(null, 190))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        ut = function () {
          return Promise.resolve()
            .then(n.bind(null, 193))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        st = function () {
          return n
            .e(6)
            .then(n.bind(null, 328))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        ct = function () {
          return n
            .e(7)
            .then(n.bind(null, 312))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        lt = function () {
          return n
            .e(8)
            .then(n.bind(null, 288))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        ft = function () {
          return n
            .e(9)
            .then(n.bind(null, 287))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        ht = function () {
          return n
            .e(10)
            .then(n.bind(null, 268))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        pt = function () {
          return n
            .e(11)
            .then(n.bind(null, 271))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        mt = function () {
          return n
            .e(3)
            .then(n.bind(null, 327))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        vt = function () {
          return Promise.all([n.e(0), n.e(4)])
            .then(n.bind(null, 270))
            .then(function (t) {
              return gt(t.default || t);
            });
        },
        yt = function () {
          return n
            .e(12)
            .then(n.bind(null, 326))
            .then(function (t) {
              return gt(t.default || t);
            });
        };
      function gt(t) {
        if (!t || !t.functional) return t;
        var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
        return {
          render: function (n) {
            var r = {},
              o = {};
            for (var c in this.$attrs)
              e.includes(c) ? (o[c] = this.$attrs[c]) : (r[c] = this.$attrs[c]);
            return n(
              t,
              {
                on: this.$listeners,
                attrs: r,
                props: o,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      for (var bt in r)
        l.a.component(bt, r[bt]), l.a.component("Lazy" + bt, r[bt]);
      var wt = n(131),
        xt = n.n(wt),
        Ot = n(21);
      n(172);
      function _t(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return jt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return jt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function jt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function $t(t, e, n) {
        return t.find(function (t) {
          return n ? t[e] === n : t[e];
        });
      }
      var meta = n(185),
        kt = function (t) {
          !(function (t, e) {
            if ("function" != typeof t)
              for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) {
                  t[n] = t[n] || [];
                  var o,
                    c = _t(r);
                  try {
                    for (c.s(); !(o = c.n()).done; ) {
                      var l = o.value;
                      (l.hid && $t(t[n], "hid", l.hid)) ||
                        (l.name && $t(t[n], "name", l.name)) ||
                        t[n].push(l);
                    }
                  } catch (t) {
                    c.e(t);
                  } finally {
                    c.f();
                  }
                } else if ("object" === Object(Ot.a)(r))
                  for (var f in ((t[n] = t[n] || {}), r)) t[n][f] = r[f];
                else void 0 === t[n] && (t[n] = r);
              }
            else
              console.warn(
                "Cannot merge meta. Avoid using head as a function!"
              );
          })(t.app.head, meta);
        },
        Ct = n(75),
        St = n.n(Ct),
        Et = n(186);
      function Pt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function At(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Pt(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Pt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function Rt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Lt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Lt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function Lt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      for (
        var Tt = {
            setBaseURL: function (t) {
              this.defaults.baseURL = t;
            },
            setHeader: function (t, e) {
              var n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                o = Rt(Array.isArray(r) ? r : [r]);
              try {
                for (o.s(); !(n = o.n()).done; ) {
                  var c = n.value;
                  e
                    ? (this.defaults.headers[c][t] = e)
                    : delete this.defaults.headers[c][t];
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
            },
            setToken: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function (t) {
              this.interceptors.request.use(function (e) {
                return t(e) || e;
              });
            },
            onResponse: function (t) {
              this.interceptors.response.use(function (e) {
                return t(e) || e;
              });
            },
            onRequestError: function (t) {
              this.interceptors.request.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function (t) {
              this.interceptors.response.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function (t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create: function (t) {
              return Nt(Object(Et.a)(t, this.defaults));
            },
          },
          Dt = function () {
            var t = Mt[It];
            Tt["$" + t] = function () {
              return this[t].apply(this, arguments).then(function (t) {
                return t && t.data;
              });
            };
          },
          It = 0,
          Mt = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch",
          ];
        It < Mt.length;
        It++
      )
        Dt();
      var Nt = function (t) {
          var e = St.a.create(t);
          return (
            (e.CancelToken = St.a.CancelToken),
            (e.isCancel = St.a.isCancel),
            (function (t) {
              for (var e in Tt) t[e] = Tt[e].bind(t);
            })(e),
            e.onRequest(function (t) {
              t.headers = At(At({}, e.defaults.headers.common), t.headers);
            }),
            qt(e),
            e
          );
        },
        qt = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {},
            },
            n = function () {
              var t = "undefined" != typeof window && window.$nuxt;
              return t && t.$loading && t.$loading.set ? t.$loading : e;
            },
            r = 0;
          t.onRequest(function (t) {
            (t && !1 === t.progress) || r++;
          }),
            t.onResponse(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()));
            }),
            t.onError(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (r--,
                St.a.isCancel(t)
                  ? r <= 0 && ((r = 0), n().finish())
                  : (n().fail(), n().finish()));
            });
          var o = function (t) {
            if (r && t.total) {
              var progress = (100 * t.loaded) / (t.total * r);
              n().set(Math.min(100, progress));
            }
          };
          (t.defaults.onUploadProgress = o),
            (t.defaults.onDownloadProgress = o);
        },
        Bt = function (t, e) {
          var n = (t.$config && t.$config.axios) || {},
            r =
              n.browserBaseURL ||
              n.browserBaseUrl ||
              n.baseURL ||
              n.baseUrl ||
              "https://admin.m7productions.gg/api";
          var o = Nt({
            baseURL: r,
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {},
            },
          });
          (t.$axios = o), e("axios", o);
        },
        Ut = n(132),
        zt = n.n(Ut),
        Ht = n(187),
        Kt = n.n(Ht);
      n(258);
      Kt.a.init({
        disable: !1,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: !1,
        disableMutationObserver: !1,
        debounceDelay: 50,
        throttleDelay: 60,
        offset: 40,
        delay: 0,
        duration: 1e3,
        easing: "ease-in-out",
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
      });
      var Gt = n(188);
      l.a.use(Gt.a);
      var Xt = n(190),
        Ft = n(193);
      l.a.directive("lazyload", Xt.default),
        l.a.component("LazyLoadImage", Ft.default);
      var Yt = n(191),
        Vt = n.n(Yt);
      l.a.use(Vt.a);
      var Wt = n(133),
        Jt = n.n(Wt);
      function Qt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Zt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Qt(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Qt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      l.a.component(m.a.name, m.a),
        l.a.component(
          y.a.name,
          Zt(
            Zt({}, y.a),
            {},
            {
              render: function (t, e) {
                return (
                  y.a._warned ||
                    ((y.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  y.a.render(t, e)
                );
              },
            }
          )
        ),
        l.a.component(S.name, S),
        l.a.component("NChild", S),
        l.a.component(D.name, D),
        Object.defineProperty(l.a.prototype, "$nuxt", {
          get: function () {
            var t = this.$root.$options.$nuxt;
            return t || "undefined" == typeof window ? t : window.$nuxt;
          },
          configurable: !0,
        }),
        l.a.use(d.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var te = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        ee = f.a.Store.prototype.registerModule;
      function ne(path, t) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = Array.isArray(path)
            ? !!path.reduce(function (t, path) {
                return t && t[path];
              }, this.state)
            : path in this.state;
        return ee.call(this, path, t, Zt({ preserveState: n }, e));
      }
      function re(t) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            var n,
              r,
              c,
              f,
              d,
              h,
              path,
              m,
              v = arguments;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (m = function (t, e) {
                        if (!t)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided"
                            )
                          );
                        (f[(t = "$" + t)] = e),
                          f.context[t] || (f.context[t] = e),
                          (c[t] = f[t]);
                        var n = "__nuxt_" + t + "_installed__";
                        l.a[n] ||
                          ((l.a[n] = !0),
                          l.a.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              l.a.prototype,
                              t
                            ) ||
                              Object.defineProperty(l.a.prototype, t, {
                                get: function () {
                                  return this.$root.$options[t];
                                },
                              });
                          }));
                      }),
                      (n = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                      (t.next = 4),
                      C(0, n)
                    );
                  case 4:
                    return (
                      (r = t.sent),
                      ((c = Y(e)).$router = r),
                      (c.registerModule = ne),
                      (f = Zt(
                        {
                          head: {
                            title: "M7-Production",
                            titleTemplate: function (t) {
                              return t
                                ? "".concat(t, " | M7-Production")
                                : "M7-Production";
                            },
                            meta: [
                              { charset: "utf-8" },
                              {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1",
                              },
                              {
                                hid: "description",
                                name: "description",
                                content:
                                  "M7 Productions is a software company where we develop\n video game assets & also our own video games including\n Agontuk, Outlive & Zero Hour.",
                              },
                              {
                                name: "format-detection",
                                content: "telephone=no",
                              },
                            ],
                            link: [
                              {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.png",
                              },
                              {
                                rel: "stylesheet",
                                href: "//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
                                integrity:
                                  "sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==",
                                crossorigin: "anonymous",
                              },
                              {
                                rel: "stylesheet",
                                href: "//cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
                                integrity:
                                  "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We",
                                crossorigin: "anonymous",
                              },
                            ],
                            style: [],
                            script: [],
                          },
                          store: c,
                          router: r,
                          nuxt: {
                            defaultTransition: te,
                            transitions: [te],
                            setTransitions: function (t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function (t) {
                                  return (t = t
                                    ? "string" == typeof t
                                      ? Object.assign({}, te, { name: t })
                                      : Object.assign({}, te, t)
                                    : te);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (t) {
                              (t = t || null),
                                (f.context._errored = Boolean(t)),
                                (t = t ? Object(O.p)(t) : null);
                              var n = f.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            },
                          },
                        },
                        H
                      )),
                      (c.app = f),
                      (d = e
                        ? e.next
                        : function (t) {
                            return f.router.push(t);
                          }),
                      e
                        ? (h = r.resolve(e.url).route)
                        : ((path = Object(O.f)(r.options.base, r.options.mode)),
                          (h = r.resolve(path).route)),
                      (t.next = 14),
                      Object(O.t)(f, {
                        store: c,
                        route: h,
                        next: d,
                        error: f.nuxt.error.bind(f),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e,
                      })
                    );
                  case 14:
                    m("config", n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        c.replaceState(window.__NUXT__.state),
                      (t.next = 20);
                    break;
                  case 20:
                    if ("function" != typeof xt.a) {
                      t.next = 23;
                      break;
                    }
                    return (t.next = 23), xt()(f.context, m);
                  case 23:
                    return (t.next = 26), kt(f.context);
                  case 26:
                    return (t.next = 29), Bt(f.context, m);
                  case 29:
                    if ("function" != typeof zt.a) {
                      t.next = 32;
                      break;
                    }
                    return (t.next = 32), zt()(f.context, m);
                  case 32:
                    t.next = 35;
                    break;
                  case 35:
                    t.next = 38;
                    break;
                  case 38:
                    t.next = 41;
                    break;
                  case 41:
                    t.next = 44;
                    break;
                  case 44:
                    if ("function" != typeof Jt.a) {
                      t.next = 47;
                      break;
                    }
                    return (t.next = 47), Jt()(f.context, m);
                  case 47:
                    return (
                      (t.next = 50),
                      new Promise(function (t, e) {
                        if (
                          !r.resolve(f.context.route.fullPath).route.matched
                            .length
                        )
                          return t();
                        r.replace(f.context.route.fullPath, t, function (n) {
                          if (!n._isRouter) return e(n);
                          if (2 !== n.type) return t();
                          var c = r.afterEach(
                            (function () {
                              var e = Object(o.a)(
                                regeneratorRuntime.mark(function e(n, r) {
                                  return regeneratorRuntime.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (e.next = 3), Object(O.j)(n);
                                        case 3:
                                          (f.context.route = e.sent),
                                            (f.context.params = n.params || {}),
                                            (f.context.query = n.query || {}),
                                            c(),
                                            t();
                                        case 8:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t, n) {
                                return e.apply(this, arguments);
                              };
                            })()
                          );
                        });
                      })
                    );
                  case 50:
                    return t.abrupt("return", { store: c, app: f, router: r });
                  case 51:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
  },
  [[197, 32, 2, 33]],
]);
