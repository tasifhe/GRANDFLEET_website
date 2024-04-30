(window.webpackJsonp = window.webpackJsonp || []).push([
  [19, 8, 9, 10, 11],
  {
    264: function (e, t, n) {
      e.exports = n.p + "img/Logo(Modified)new.5a89502.svg";
    },
    266: function (e, t, n) {
      e.exports = n.p + "img/cover.77b0448.jpg";
    },
    267: function (e, t, n) {},
    268: function (e, t, n) {
      "use strict";
      n.r(t);
      n(29);
      var r = {
          props: { displayGlowingBorder: { type: Boolean, default: !1 } },
          data: function () {
            return { currentPage: "" };
          },
          watch: {
            currentPage: function () {
              (this.currentPage = this.$nuxt.$route.name),
                console.log(this.currentPage);
            },
          },
        },
        o = n(52),
        component = Object(o.a)(
          r,
          function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("nuxt-link", { attrs: { to: "/" } }, [
              t("img", {
                staticClass: "logo",
                attrs: { src: n(264), alt: "" },
              }),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    271: function (e, t, n) {
      "use strict";
      n.r(t);
      n(30), n(44), n(53);
      var r = {
          props: { navLinks: { type: Array, required: !0 } },
          data: function () {
            return {
              gameImagePreviewUrl: "",
              oldGameImagePreviewUrl: "",
              activeImage: "",
              timeout: "",
              activeNav: {},
              loadingImages: !1,
              timer: "",
            };
          },
          watch: {
            $route: function (e, t) {
              e !== t && this.getLinkImage();
            },
          },
          mounted: function () {
            (this.oldGameImagePreviewUrl = n(266)), this.getLinkImage();
          },
          methods: {
            getLinkImage: function () {
              var e = this,
                t = {};
              this.navLinks.forEach(function (n) {
                n.url === e.$route.fullPath && (t = n);
              }),
                Object.keys(t).length ||
                  (t = { label: "M7 Productions", menu_bg: n(266) }),
                (this.activeNav = t),
                (this.gameImagePreviewUrl = this.activeNav.menu_bg),
                (this.activeImage = this.gameImagePreviewUrl),
                (this.oldGameImagePreviewUrl = this.activeNav.menu_bg),
                this.removeGameImagePreview();
            },
            gameImagePreview: function (e) {
              if (this.gameImagePreviewUrl !== e) {
                this.gameImagePreviewUrl = "";
                var t = this;
                (t.$refs.gamesSectionOverlay.style.backgroundColor =
                  "rgba(0, 0, 0, 1)"),
                  (t.gameImagePreviewUrl = e),
                  (this.timer = setTimeout(function () {
                    t.$refs.gamesSection.classList.add("animateIN"),
                      (t.$refs.gamesSectionOverlay.style.backgroundColor =
                        "rgba(0, 0, 0, 0.6)"),
                      window.clearTimeout(this.timer);
                  }, 400));
              }
            },
            removeGameImagePreview: function (e) {
              if (this.activeImage !== e) {
                this.gameImagePreviewUrl = "";
                var t = this;
                (t.$refs.gamesSectionOverlay.style.backgroundColor =
                  "rgba(0, 0, 0, 1)"),
                  (t.gameImagePreviewUrl = this.oldGameImagePreviewUrl),
                  (this.timer = setTimeout(function () {
                    t.$refs.gamesSection.classList.add("animateIN"),
                      (t.$refs.gamesSectionOverlay.style.backgroundColor =
                        "rgba(0, 0, 0, 0.6)"),
                      window.clearTimeout(this.timer);
                  }, 400));
              }
            },
          },
          beforeDestroy: function () {
            clearTimeout(this.timer);
          },
        },
        o = (n(274), n(52)),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("nav", { attrs: { id: "navMenuContainer" } }, [
              e._m(0),
              e._v(" "),
              r("div", { attrs: { id: "navItems" } }, [
                r(
                  "div",
                  { staticClass: "image-overlay-container" },
                  [
                    r("div", {
                      ref: "gamesSection",
                      staticClass: "section-games-overlay",
                      style:
                        'background-image: url("' +
                        e.gameImagePreviewUrl +
                        '")',
                    }),
                    e._v(" "),
                    r("div", {
                      ref: "gamesSectionOverlay",
                      staticClass: "section-games-overlay",
                    }),
                    e._v(" "),
                    r(
                      "nuxt-link",
                      {
                        staticStyle: {
                          position: "fixed",
                          top: "30px",
                          left: "30px",
                          "z-index": "100",
                        },
                        attrs: { to: "/" },
                      },
                      [
                        r("img", {
                          attrs: { src: n(264), alt: "", height: "80" },
                        }),
                      ]
                    ),
                    e._v(" "),
                    r(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-center align-items-center w-full h-full",
                      },
                      [
                        e.navLinks && e.navLinks.length
                          ? r(
                              "ul",
                              {
                                staticClass:
                                  "d-flex justify-content-center align-items-center",
                                staticStyle: { "min-height": "500px" },
                              },
                              e._l(e.navLinks, function (t, n) {
                                return r(
                                  "li",
                                  {
                                    key: n,
                                    on: {
                                      mouseenter: function (n) {
                                        return (
                                          n.stopPropagation(),
                                          n.preventDefault(),
                                          e.gameImagePreview(t.menu_bg)
                                        );
                                      },
                                      mouseleave: function (n) {
                                        return (
                                          n.stopPropagation(),
                                          n.preventDefault(),
                                          e.removeGameImagePreview(t.menu_bg)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    "forum" === t.menu_name ||
                                    "FORUM" === t.menu_name
                                      ? r(
                                          "a",
                                          {
                                            staticClass: "text-uppercase",
                                            attrs: {
                                              href: t.url,
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                            " +
                                                e._s(t.menu_name) +
                                                "\n                        "
                                            ),
                                          ]
                                        )
                                      : r(
                                          "nuxt-link",
                                          {
                                            staticClass: "text-uppercase",
                                            attrs: { to: t.url, exact: "" },
                                          },
                                          [
                                            e._v(
                                              "\n                            " +
                                                e._s(t.menu_name) +
                                                "\n                        "
                                            ),
                                          ]
                                        ),
                                  ],
                                  1
                                );
                              }),
                              0
                            )
                          : e._e(),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { attrs: { id: "navMenu" } }, [
                n("div"),
                e._v(" "),
                n("div"),
                e._v(" "),
                n("div"),
              ]);
            },
          ],
          !1,
          null,
          "2d11d520",
          null
        );
      t.default = component.exports;
    },
    274: function (e, t, n) {
      "use strict";
      n(267);
    },
    282: function (e, t, n) {},
    287: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {
          components: { LayoutsNav: n(271).default },
          props: { navLinks: { type: Array, required: !0 } },
        },
        o = n(52),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n("div", { staticClass: "header-container" }, [
              n(
                "header",
                {
                  class: "/" === e.$route.path ? "" : "sticky",
                  attrs: { id: "header" },
                },
                [
                  n("div", { staticClass: "m7-logo" }, [n("layouts-logo")], 1),
                  e._v(" "),
                  n("layouts-nav", { attrs: { "nav-links": e.navLinks } }),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, {
        LayoutsLogo: n(268).default,
        LayoutsNav: n(271).default,
      });
    },
    288: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {},
        o = n(52),
        component = Object(o.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              {
                staticClass: "content-wrapper",
                staticStyle: {
                  "background-color": "rgba(0,10,10,.2)",
                  clear: "both",
                },
              },
              [
                n("div", { staticClass: "footer" }, [
                  n(
                    "div",
                    {
                      staticClass: "m7-logo-footer",
                      staticStyle: { flex: "1", "max-width": "100px" },
                    },
                    [n("layouts-logo")],
                    1
                  ),
                  e._v(" "),
                  e._m(0),
                ]),
              ]
            );
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { staticClass: "footerContent" }, [
                n(
                  "p",
                  {
                    staticStyle: { "font-size": "18px", "line-height": "35px" },
                  },
                  [
                    e._v(
                      "\n                M7 Productions is a software company where we develop\n                video game assets & also our own video games including\n                Agontuk, Outlive & Zero Hour.\n            "
                    ),
                  ]
                ),
                e._v(" "),
                n("hr"),
                e._v(" "),
                n(
                  "div",
                  {
                    staticStyle: { "font-size": "18px", "line-height": "35px" },
                  },
                  [e._v("Copyright 2021 - M7 Productions")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, { LayoutsLogo: n(268).default });
    },
    300: function (e, t, n) {
      e.exports = n.p + "img/logo.993fd31.png";
    },
    301: function (e, t, n) {
      "use strict";
      n(282);
    },
    321: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(8),
        o =
          (n(43),
          {
            data: function () {
              return { showDeveloperInfo: !1, menuLinks: [] };
            },
            fetch: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            e.$axios.$get("/all-menu").then(function (t) {
                              e.menuLinks = t.data;
                            })
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            watch: {
              $route: function () {
                var e = document.getElementById("navItems"),
                  t = document.getElementById("navMenu");
                (e || t) &&
                  (t.classList.remove("open"), e.classList.remove("open")),
                  "" == this.$router.currentRoute.path
                    ? document.querySelector(".m7-logo").classList.add("hidden")
                    : document
                        .querySelector(".m7-logo")
                        .classList.remove("hidden"),
                  (document.body.style.overflow = "auto");
              },
            },
            mounted: function () {
              window.addEventListener("keydown", this._keyListener);
            },
            beforeDestroy: function () {
              window.removeEventListener("keydown", this._keyListener);
            },
            methods: {
              _keyListener: function (e) {
                e.preventDefault(),
                  e.altKey &&
                    "d" === e.key &&
                    (this.showDeveloperInfo = !this.showDeveloperInfo);
              },
            },
          }),
        l = (n(301), n(52)),
        component = Object(l.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              { attrs: { id: "main-app" } },
              [
                r("img", {
                  staticClass: "logo",
                  staticStyle: {
                    opacity: "0",
                    position: "absolute",
                    "z-index": "-100",
                  },
                  attrs: { src: n(300), alt: "" },
                }),
                e._v(" "),
                r("div", { staticClass: "gradientBG" }),
                e._v(" "),
                r("div", { staticClass: "bg-noise" }),
                e._v(" "),
                r("layouts-header", { attrs: { "nav-links": e.menuLinks } }),
                e._v(" "),
                r(
                  "div",
                  { staticStyle: { width: "100%", "min-height": "80vh" } },
                  [
                    r(
                      "transition",
                      { attrs: { name: "slide-bottom" } },
                      [r("nuxt")],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r("layouts-footer"),
                e._v(" "),
                e.showDeveloperInfo
                  ? [
                      r("lazy-layouts-developer-info", {
                        on: {
                          closeMenu: function (t) {
                            e.showDeveloperInfo = !1;
                          },
                        },
                      }),
                    ]
                  : e._e(),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, {
        LayoutsHeader: n(287).default,
        LayoutsFooter: n(288).default,
      });
    },
  },
]);
