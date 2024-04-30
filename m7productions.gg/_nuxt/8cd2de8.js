(window.webpackJsonp = window.webpackJsonp || []).push([
  [29, 14, 16, 17],
  {
    265: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = { props: { btnTitle: { type: String, default: "Button" } } },
        o = r(52),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "button",
              { staticClass: "m7-btn", attrs: { type: "button" } },
              [r("span", [t._v("\n    " + t._s(t.btnTitle) + "\n    ")])]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    269: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(8),
        o =
          (r(43),
          r(14),
          r(53),
          {
            data: function () {
              return { email: "", message: null, error_message: null };
            },
            methods: {
              subscribe: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.message = null),
                              (t.error_message = null),
                              (e.next = 4),
                              t.$axios
                                .$post("/subscribe", { email: t.email })
                                .then(function (e) {
                                  422 == e.httpStatusCode &&
                                    (t.error_message = e.data.email[0]),
                                    200 == e.httpStatusCode &&
                                      (t.message = e.data);
                                })
                                .catch(function (e) {
                                  e.status &&
                                    (t.error_message = e.data.email[0]);
                                })
                                .finally(function () {
                                  t.hideText();
                                })
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              hideText: function () {
                var t = this;
                setTimeout(function () {
                  (t.message = null), (t.error_message = null);
                }, 5e3);
              },
            },
          }),
        l = r(52),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("section", { staticClass: "section" }, [
              r("div", [
                t._m(0),
                t._v(" "),
                r(
                  "form",
                  {
                    staticClass: "subscribe_form",
                    attrs: { "data-aos": "fade-up" },
                  },
                  [
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.email,
                          expression: "email",
                        },
                      ],
                      attrs: {
                        type: "email",
                        placeholder: "Your email address",
                        name: "email",
                        value: "",
                      },
                      domProps: { value: t.email },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.email = e.target.value);
                        },
                      },
                    }),
                    t._v(" "),
                    r(
                      "button",
                      {
                        staticClass: "m7-btn",
                        staticStyle: { "margin-top": "8px" },
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(),
                              e.preventDefault(),
                              t.subscribe()
                            );
                          },
                        },
                      },
                      [r("span", [t._v("SUBSCRIBE")])]
                    ),
                  ]
                ),
                t._v(" "),
                t.message
                  ? r("div", { staticClass: "mt-4 text-white text-center" }, [
                      r("strong", [t._v(t._s(t.message))]),
                    ])
                  : t._e(),
                t._v(" "),
                t.error_message
                  ? r("div", { staticClass: "mt-4 text-danger text-center" }, [
                      r("strong", [t._v(t._s(t.error_message))]),
                    ])
                  : t._e(),
              ]),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                {
                  staticClass: "mb-5 text-center",
                  attrs: { "data-aos": "fade-up" },
                },
                [
                  r("h2", { staticClass: "section-heading text-uppercase" }, [
                    t._v("Subscribe to our newsletter"),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    277: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(8),
        o =
          (r(53),
          r(43),
          {
            props: ["UpdateLog"],
            data: function () {
              return { gameImagePreviewUrl: "", timer: "" };
            },
            computed: {
              popularGames: function () {
                return this.$store.state.games.popularGames;
              },
            },
            fetch: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.$store.dispatch("games/getPopularGames")
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            methods: {
              gameImagePreview: function (t) {
                this.gameImagePreviewUrl = "";
                var e = this;
                (e.$refs.gamesSectionOverlay.style.backgroundColor =
                  "rgba(0, 0, 0, 1)"),
                  (e.gameImagePreviewUrl = t),
                  (this.timer = setTimeout(function () {
                    e.$refs.gamesSection.classList.add("animateIN"),
                      (e.$refs.gamesSectionOverlay.style.backgroundColor =
                        "rgba(0, 0, 0, 0.6)"),
                      window.clearTimeout(this.timer);
                  }, 400));
              },
              removeGameImagePreview: function () {
                (this.gameImagePreviewUrl = ""),
                  this.$refs.gamesSection.classList.remove("animateIN"),
                  (this.$refs.gamesSectionOverlay.style.backgroundColor =
                    "rgba(0, 0, 0, 0)"),
                  window.clearTimeout(this.timer);
              },
            },
            beforeDestroy: function () {
              window.clearTimeout(this.timer);
            },
          }),
        l = r(52),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return t.popularGames && t.popularGames.length
              ? r("main", { staticClass: "section" }, [
                  r(
                    "section",
                    {
                      staticClass:
                        "section section-games scrollSnap min-vh-100 d-flex justify-content-center align-items-center image-overlay-container",
                      staticStyle: {
                        "margin-bottom": "100px",
                        "background-color": "#13151B",
                      },
                    },
                    [
                      r("div", {
                        ref: "gamesSection",
                        staticClass: "section-games-overlay",
                        style:
                          'background-image: url("' +
                          t.gameImagePreviewUrl +
                          '")',
                      }),
                      t._v(" "),
                      t._l(t.popularGames, function (t, g) {
                        return r("img", {
                          key: g,
                          staticStyle: {
                            position: "absolute",
                            opacity: "0",
                            visibility: "hidden",
                          },
                          attrs: {
                            src: t.cover,
                            alt: "",
                            height: "0",
                            width: "0",
                          },
                        });
                      }),
                      t._v(" "),
                      r("div", {
                        ref: "gamesSectionOverlay",
                        staticClass: "section-games-overlay",
                      }),
                      t._v(" "),
                      r("div", { staticStyle: { "z-index": "999" } }, [
                        r(
                          "h1",
                          {
                            staticClass:
                              "mb-5 text-center section-heading gradientHeadline",
                          },
                          [t._v("Popular games")]
                        ),
                        t._v(" "),
                        r(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-center align-items-start mt-5",
                            staticStyle: {
                              "column-gap": "6%",
                              "margin-bottom": "40px",
                            },
                          },
                          [
                            r("div", { staticClass: "section-body" }, [
                              r(
                                "ul",
                                { staticClass: "game-list" },
                                t._l(t.popularGames, function (e, g) {
                                  return r(
                                    "li",
                                    {
                                      key: g,
                                      staticClass:
                                        "game-list-item extra-bold-text",
                                    },
                                    [
                                      r(
                                        "nuxt-link",
                                        { attrs: { to: "/games/zero-hour" } },
                                        [
                                          r(
                                            "span",
                                            {
                                              attrs: { "data-text": e.title },
                                              on: {
                                                mouseenter: function (r) {
                                                  return t.gameImagePreview(
                                                    e.cover
                                                  );
                                                },
                                                mouseleave:
                                                  t.removeGameImagePreview,
                                              },
                                            },
                                            [t._v(t._s(e.title))]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  );
                                }),
                                0
                              ),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        r("div", { staticClass: "text-center" }, [
                          r(
                            "a",
                            {
                              attrs: {
                                href: "https://discord.com/invite/TWpHSDN",
                                target: "_blank",
                              },
                            },
                            [
                              r("m7-button", {
                                attrs: { "btn-title": "Join the community" },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { M7Button: r(265).default });
    },
    299: function (t, e, r) {
      t.exports = r.p + "img/banner_new.c5757b5.png";
    },
    316: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(277),
        o = r(269),
        l = r(299),
        c = r.n(l),
        m = {
          components: { Subscribe: o.default, PopularGames: n.default },
          data: function () {
            return { backgroundImagePath: c.a };
          },
          mounted: function () {},
          methods: {},
        },
        d = r(52),
        component = Object(d.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              { staticClass: "app-index" },
              [
                r("main", { attrs: { id: "m7-intro-banner" } }, [
                  r("div", { staticClass: "glitch" }, [
                    r("div", {
                      staticClass: "glitch__item",
                      style: {
                        backgroundImage: "url(" + t.backgroundImagePath + ")",
                      },
                    }),
                    t._v(" "),
                    r("div", {
                      staticClass: "glitch__item",
                      style: {
                        backgroundImage: "url(" + t.backgroundImagePath + ")",
                      },
                    }),
                    t._v(" "),
                    r("div", {
                      staticClass: "glitch__item",
                      style: {
                        backgroundImage: "url(" + t.backgroundImagePath + ")",
                      },
                    }),
                    t._v(" "),
                    r("div", {
                      staticClass: "glitch__item",
                      style: {
                        backgroundImage: "url(" + t.backgroundImagePath + ")",
                      },
                    }),
                    t._v(" "),
                    r("div", {
                      staticClass: "glitch__item",
                      style: {
                        backgroundImage: "url(" + t.backgroundImagePath + ")",
                      },
                    }),
                  ]),
                ]),
                t._v(" "),
                t._m(0),
                t._v(" "),
                r("PopularGames"),
                t._v(" "),
                t._m(1),
                t._v(" "),
                r(
                  "main",
                  { staticClass: "content-wrapper section mh-100 mW-1200" },
                  [r("subscribe")],
                  1
                ),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "main",
                { staticClass: "content-wrapper mW-1200 section" },
                [
                  r("section", { staticClass: "section-m7 whyUsSection" }, [
                    r("div", [
                      r(
                        "h1",
                        {
                          staticClass: "text-center section-heading",
                          attrs: { "data-aos": "fade-up" },
                        },
                        [t._v("What is M7")]
                      ),
                      t._v(" "),
                      r(
                        "div",
                        {
                          staticClass: "section-body",
                          attrs: {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1000",
                            "data-aos-anchor-placement": "bottom-bottom",
                          },
                        },
                        [
                          r("div", { staticClass: "about-para mt-5" }, [
                            r("p", [
                              t._v(
                                "\n                            M7 Productions is a software company where we develop video games including Agontuk, Outlive & Zero Hour.\n                            "
                              ),
                            ]),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "main",
                { staticClass: "content-wrapper section mh-100 mW-1200" },
                [
                  r("section", { staticClass: "section section-social" }, [
                    r(
                      "div",
                      { staticStyle: { "text-align": "center !important" } },
                      [
                        r(
                          "h1",
                          {
                            staticClass: "mb-3 section-heading",
                            attrs: { "data-aos": "fade-left" },
                          },
                          [t._v("Follow us on social media")]
                        ),
                        t._v(" "),
                        r(
                          "div",
                          {
                            staticClass: "section-body",
                            staticStyle: {
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center",
                              "margin-top": "40px",
                            },
                          },
                          [
                            r("ul", { staticClass: "socialMediaUl" }, [
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://store.steampowered.com/app/1359090/Zero_Hour/",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Steam "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://discord.gg/TWpHSDN\\",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Discord "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://www.youtube.com/channel/UCwbMlbo1rKRKypQu",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Youtube "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://www.facebook.com/zerohour2020/",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Facebook "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://www.instagram.com/zerohour_2020/",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Instagram "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://twitter.com/zerohour_2020",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Twitter "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              r("li", { attrs: { "data-aos": "fade-up" } }, [
                                r(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://www.linkedin.com/company/m7-productions/",
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    t._v("Linked In "),
                                    r("i", {
                                      staticClass: "fas fa-arrow-right",
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        PopularGames: r(277).default,
        Subscribe: r(269).default,
      });
    },
  },
]);
