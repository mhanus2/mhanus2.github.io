import { capitalize, computed, h, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { e as breakpoints, p as propsFactory, m as makeComponentProps, g as genericComponent, _ as _export_sfc } from './server.mjs';
import { V as VContainer } from './VContainer-JKM9TrTt.mjs';
import { V as VList } from './VList-_JZRNNT6.mjs';
import { m as makeTagProps } from './dimensions-DxHl50uj.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-C5tK0-Eq.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './index-jC5fpk-_.mjs';
import './density-6PUP58Wc.mjs';

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    const offsetKey = "offset" + capitalize(val);
    props[offsetKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    const orderKey = "order" + capitalize(val);
    props[orderKey] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap$1 = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass$1(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  if (type === "col") {
    className = "v-" + className;
  }
  if (type === "col" && (val === "" || val === true)) {
    return className.toLowerCase();
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const ALIGN_SELF_VALUES = ["auto", "start", "end", "center", "baseline", "stretch"];
const makeVColProps = propsFactory({
  cols: {
    type: [Boolean, String, Number],
    default: false
  },
  ...breakpointProps,
  offset: {
    type: [String, Number],
    default: null
  },
  ...offsetProps,
  order: {
    type: [String, Number],
    default: null
  },
  ...orderProps,
  alignSelf: {
    type: String,
    default: null,
    validator: (str) => ALIGN_SELF_VALUES.includes(str)
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCol");
const VCol = genericComponent()({
  name: "VCol",
  props: makeVColProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap$1) {
        propMap$1[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass$1(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some((className) => className.startsWith("v-col-"));
      classList.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !hasColClasses || !props.cols,
        [`v-col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: [classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? undefined : _a.call(slots));
    };
  }
});
const ALIGNMENT = ["start", "end", "center"];
const SPACE = ["space-between", "space-around", "space-evenly"];
function makeRowProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    const prefixKey = prefix + capitalize(val);
    props[prefixKey] = def();
    return props;
  }, {});
}
const ALIGN_VALUES = [...ALIGNMENT, "baseline", "stretch"];
const alignValidator = (str) => ALIGN_VALUES.includes(str);
const alignProps = makeRowProps("align", () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const JUSTIFY_VALUES = [...ALIGNMENT, ...SPACE];
const justifyValidator = (str) => JUSTIFY_VALUES.includes(str);
const justifyProps = makeRowProps("justify", () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const ALIGN_CONTENT_VALUES = [...ALIGNMENT, ...SPACE, "stretch"];
const alignContentValidator = (str) => ALIGN_CONTENT_VALUES.includes(str);
const alignContentProps = makeRowProps("alignContent", () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  className += `-${val}`;
  return className.toLowerCase();
}
const makeVRowProps = propsFactory({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: alignValidator
  },
  ...alignProps,
  justify: {
    type: String,
    default: null,
    validator: justifyValidator
  },
  ...justifyProps,
  alignContent: {
    type: String,
    default: null,
    validator: alignContentValidator
  },
  ...alignContentProps,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VRow");
const VRow = genericComponent()({
  name: "VRow",
  props: makeVRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const classes = computed(() => {
      const classList = [];
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        "v-row--no-gutters": props.noGutters,
        "v-row--dense": props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      return classList;
    });
    return () => {
      var _a;
      return h(props.tag, {
        class: ["v-row", classes.value, props.class],
        style: props.style
      }, (_a = slots.default) == null ? undefined : _a.call(slots));
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 class="text-center">Congratulations on embarking on a journey to master The English Tenses!</h1><h2 class="text-center pb-5">Let\u2019s get started!</h2>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> The English Tenses are split into FOUR GROUPS: </p>`);
        _push2(ssrRenderComponent(VList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>Simple tenses</p><p${_scopeId2}>Continuous tenses</p><p${_scopeId2}>Perfect tenses</p><p${_scopeId2}>Perfect Continuous tenses</p>`);
            } else {
              return [
                createVNode("p", null, "Simple tenses"),
                createVNode("p", null, "Continuous tenses"),
                createVNode("p", null, "Perfect tenses"),
                createVNode("p", null, "Perfect Continuous tenses")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("p", null, " The English Tenses are split into FOUR GROUPS: "),
          createVNode(VList, null, {
            default: withCtx(() => [
              createVNode("p", null, "Simple tenses"),
              createVNode("p", null, "Continuous tenses"),
              createVNode("p", null, "Perfect tenses"),
              createVNode("p", null, "Perfect Continuous tenses")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> The focus of study is on the verbs, especially the auxiliary verbs. In general, a different auxiliary verb is dedicated to each of the four groups: </p>`);
        _push2(ssrRenderComponent(VList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>DO - simple tenses</p><p${_scopeId2}>BE - continuous tenses</p><p${_scopeId2}>HAVE - perfect tenses</p><p${_scopeId2}>HAVE BEEN - perfect continuous tenses</p>`);
            } else {
              return [
                createVNode("p", null, "DO - simple tenses"),
                createVNode("p", null, "BE - continuous tenses"),
                createVNode("p", null, "HAVE - perfect tenses"),
                createVNode("p", null, "HAVE BEEN - perfect continuous tenses")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("p", null, " The focus of study is on the verbs, especially the auxiliary verbs. In general, a different auxiliary verb is dedicated to each of the four groups: "),
          createVNode(VList, null, {
            default: withCtx(() => [
              createVNode("p", null, "DO - simple tenses"),
              createVNode("p", null, "BE - continuous tenses"),
              createVNode("p", null, "HAVE - perfect tenses"),
              createVNode("p", null, "HAVE BEEN - perfect continuous tenses")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> For each of the groups, you will learn to build sentences in the Present, Past, and Future tenses, so that gives us a total of 12 tenses to master. </p>`);
      } else {
        return [
          createVNode("p", null, " For each of the groups, you will learn to build sentences in the Present, Past, and Future tenses, so that gives us a total of 12 tenses to master. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> By now you will have noticed that we use a colour scheme to highlight each group. This is an important aspect of the system which makes learning easier. </p>`);
      } else {
        return [
          createVNode("p", null, " By now you will have noticed that we use a colour scheme to highlight each group. This is an important aspect of the system which makes learning easier. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Study the table below which gives you a quick glance at all 12 tenses. It gives you the definition, and the verb structure of each tense. It is a useful tool that you can refer to at any time. </p>`);
      } else {
        return [
          createVNode("p", null, " Study the table below which gives you a quick glance at all 12 tenses. It gives you the definition, and the verb structure of each tense. It is a useful tool that you can refer to at any time. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}> Highlight bubbles: </p><p${_scopeId}>definition - the situation in which to use the tense</p><p${_scopeId}>verb structure - the order and types of verbs in the sentence</p>`);
      } else {
        return [
          createVNode("p", null, " Highlight bubbles: "),
          createVNode("p", null, "definition - the situation in which to use the tense"),
          createVNode("p", null, "verb structure - the order and types of verbs in the sentence")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-center my-5"${_scopeId}>The English Tenses Overview</h2>`);
        _push2(ssrRenderComponent(VRow, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "red-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Do`);
                              } else {
                                return [
                                  createTextVNode("Do")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>Simple</h3><p${_scopeId6}>NEGATIVE AND QUESTIONS</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "Simple"),
                                        createVNode("p", null, "NEGATIVE AND QUESTIONS")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<p${_scopeId6}>DO + BARE INFINITIVE<br${_scopeId6}>A.V M.V</p>`);
                                    } else {
                                      return [
                                        createVNode("p", null, [
                                          createTextVNode("DO + BARE INFINITIVE"),
                                          createVNode("br"),
                                          createTextVNode("A.V M.V")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PRESENT SIMPLE</h3><p${_scopeId6}>REGULAR HABITUAL ACTIONS, STATUS</p><p${_scopeId6}>DO/DOES + BARE INFINITIVE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PRESENT SIMPLE"),
                                        createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                                        createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PAST SIMPLE</h3><p${_scopeId6}>FINISHED ACTION, FINISHED TIME</p><p${_scopeId6}>DID + BARE INFINITIVE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PAST SIMPLE"),
                                        createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                                        createVNode("p", null, "DID + BARE INFINITIVE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>FUTURE SIMPLE</h3><p${_scopeId6}>A DECISION NOW TO DO SOMETHING IN THE FUTURE</p><p${_scopeId6}>WILL + BARE INFINITIVE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "FUTURE SIMPLE"),
                                        createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                                        createVNode("p", null, "WILL + BARE INFINITIVE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Simple"),
                                      createVNode("p", null, "NEGATIVE AND QUESTIONS")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("p", null, [
                                        createTextVNode("DO + BARE INFINITIVE"),
                                        createVNode("br"),
                                        createTextVNode("A.V M.V")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PRESENT SIMPLE"),
                                      createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                                      createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PAST SIMPLE"),
                                      createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                                      createVNode("p", null, "DID + BARE INFINITIVE")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "FUTURE SIMPLE"),
                                      createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                                      createVNode("p", null, "WILL + BARE INFINITIVE")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Do")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "Simple"),
                                    createVNode("p", null, "NEGATIVE AND QUESTIONS")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createTextVNode("DO + BARE INFINITIVE"),
                                      createVNode("br"),
                                      createTextVNode("A.V M.V")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PRESENT SIMPLE"),
                                    createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                                    createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PAST SIMPLE"),
                                    createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                                    createVNode("p", null, "DID + BARE INFINITIVE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "FUTURE SIMPLE"),
                                    createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                                    createVNode("p", null, "WILL + BARE INFINITIVE")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, { color: "red-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Do")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "Simple"),
                                  createVNode("p", null, "NEGATIVE AND QUESTIONS")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createTextVNode("DO + BARE INFINITIVE"),
                                    createVNode("br"),
                                    createTextVNode("A.V M.V")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PRESENT SIMPLE"),
                                  createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                                  createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PAST SIMPLE"),
                                  createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                                  createVNode("p", null, "DID + BARE INFINITIVE")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "FUTURE SIMPLE"),
                                  createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                                  createVNode("p", null, "WILL + BARE INFINITIVE")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "blue-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Be`);
                              } else {
                                return [
                                  createTextVNode("Be")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>Continuous</h3><p${_scopeId6}>IN THE MIDDLE OF DOING SOMETHING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "Continuous"),
                                        createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<p${_scopeId6}>BE + _______ING<br${_scopeId6}>A.V M.V</p>`);
                                    } else {
                                      return [
                                        createVNode("p", null, [
                                          createTextVNode("BE + _______ING"),
                                          createVNode("br"),
                                          createTextVNode("A.V M.V")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PRESENT CONTINUOUS</h3><p${_scopeId6}>AN ACTIVITY HAPPENING NOW OR IN GENERAL</p><p${_scopeId6}>AM/IS/ARE + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PRESENT CONTINUOUS"),
                                        createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                                        createVNode("p", null, "AM/IS/ARE + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PAST CONTINUOUS</h3><p${_scopeId6}>TWO PASTS HAPPENING AT THE SAME TIME</p><p${_scopeId6}>WAS/WERE + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PAST CONTINUOUS"),
                                        createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                                        createVNode("p", null, "WAS/WERE + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>FUTURE CONTINUOUS</h3><p${_scopeId6}>AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE</p><p${_scopeId6}>WILL + BE + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "FUTURE CONTINUOUS"),
                                        createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                                        createVNode("p", null, "WILL + BE + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Continuous"),
                                      createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("p", null, [
                                        createTextVNode("BE + _______ING"),
                                        createVNode("br"),
                                        createTextVNode("A.V M.V")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PRESENT CONTINUOUS"),
                                      createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                                      createVNode("p", null, "AM/IS/ARE + _______ING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PAST CONTINUOUS"),
                                      createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                                      createVNode("p", null, "WAS/WERE + _______ING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "FUTURE CONTINUOUS"),
                                      createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                                      createVNode("p", null, "WILL + BE + _______ING")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Be")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "Continuous"),
                                    createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createTextVNode("BE + _______ING"),
                                      createVNode("br"),
                                      createTextVNode("A.V M.V")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PRESENT CONTINUOUS"),
                                    createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                                    createVNode("p", null, "AM/IS/ARE + _______ING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PAST CONTINUOUS"),
                                    createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                                    createVNode("p", null, "WAS/WERE + _______ING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "FUTURE CONTINUOUS"),
                                    createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                                    createVNode("p", null, "WILL + BE + _______ING")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, { color: "blue-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Be")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "Continuous"),
                                  createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createTextVNode("BE + _______ING"),
                                    createVNode("br"),
                                    createTextVNode("A.V M.V")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PRESENT CONTINUOUS"),
                                  createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                                  createVNode("p", null, "AM/IS/ARE + _______ING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PAST CONTINUOUS"),
                                  createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                                  createVNode("p", null, "WAS/WERE + _______ING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "FUTURE CONTINUOUS"),
                                  createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                                  createVNode("p", null, "WILL + BE + _______ING")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "yellow-darken-2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Have`);
                              } else {
                                return [
                                  createTextVNode("Have")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>Perfect</h3><p${_scopeId6}>CONNECTING TENSES</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "Perfect"),
                                        createVNode("p", null, "CONNECTING TENSES")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<p${_scopeId6}>HAVE + PAST PARTICIPLE<br${_scopeId6}>A.V M.V</p>`);
                                    } else {
                                      return [
                                        createVNode("p", null, [
                                          createTextVNode("HAVE + PAST PARTICIPLE"),
                                          createVNode("br"),
                                          createTextVNode("A.V M.V")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PRESENT PERFECT</h3><p${_scopeId6}>CONNECTING A FINISHED ACTION WITH NOW</p><p${_scopeId6}>HAVE/HAS + PAST PARTICIPLE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PRESENT PERFECT"),
                                        createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                                        createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PAST PERFECT</h3><p${_scopeId6}>CONNECTING A PAST BEFORE A PAST</p><p${_scopeId6}>HAD + PAST PARTICIPLE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PAST PERFECT"),
                                        createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                                        createVNode("p", null, "HAD + PAST PARTICIPLE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>FUTURE PERFECT</h3><p${_scopeId6}>CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE</p><p${_scopeId6}>WILL + HAVE + PAST PARTICIPLE</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "FUTURE PERFECT"),
                                        createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                                        createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Perfect"),
                                      createVNode("p", null, "CONNECTING TENSES")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("p", null, [
                                        createTextVNode("HAVE + PAST PARTICIPLE"),
                                        createVNode("br"),
                                        createTextVNode("A.V M.V")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PRESENT PERFECT"),
                                      createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                                      createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PAST PERFECT"),
                                      createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                                      createVNode("p", null, "HAD + PAST PARTICIPLE")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "FUTURE PERFECT"),
                                      createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                                      createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Have")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "Perfect"),
                                    createVNode("p", null, "CONNECTING TENSES")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createTextVNode("HAVE + PAST PARTICIPLE"),
                                      createVNode("br"),
                                      createTextVNode("A.V M.V")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PRESENT PERFECT"),
                                    createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                                    createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PAST PERFECT"),
                                    createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                                    createVNode("p", null, "HAD + PAST PARTICIPLE")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "FUTURE PERFECT"),
                                    createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                                    createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, { color: "yellow-darken-2" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Have")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "Perfect"),
                                  createVNode("p", null, "CONNECTING TENSES")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createTextVNode("HAVE + PAST PARTICIPLE"),
                                    createVNode("br"),
                                    createTextVNode("A.V M.V")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PRESENT PERFECT"),
                                  createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                                  createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PAST PERFECT"),
                                  createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                                  createVNode("p", null, "HAD + PAST PARTICIPLE")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "FUTURE PERFECT"),
                                  createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                                  createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCard, { color: "green-lighten-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Have/Been`);
                              } else {
                                return [
                                  createTextVNode("Have/Been")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>Perfect Continuous</h3><p${_scopeId6}>MISSING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "Perfect Continuous"),
                                        createVNode("p", null, "MISSING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<p${_scopeId6}>HAVE + BEEN + _______ING<br${_scopeId6}>A.V M.V</p>`);
                                    } else {
                                      return [
                                        createVNode("p", null, [
                                          createTextVNode("HAVE + BEEN + _______ING"),
                                          createVNode("br"),
                                          createTextVNode("A.V M.V")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PRESENT PERFECT CONTINUOUS</h3><p${_scopeId6}>CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW</p><p${_scopeId6}>HAVE/HAS + BEEN + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                                        createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                                        createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>PAST PERFECT CONTINUOUS</h3><p${_scopeId6}>CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST</p><p${_scopeId6}>HAD + BEEN + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                                        createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                                        createVNode("p", null, "HAD + BEEN + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VContainer, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<h3${_scopeId6}>FUTURE PERFECT CONTINUOUS</h3><p${_scopeId6}>CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE</p><p${_scopeId6}>WILL + HAVE + BEEN + _______ING</p>`);
                                    } else {
                                      return [
                                        createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                                        createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                                        createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "Perfect Continuous"),
                                      createVNode("p", null, "MISSING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("p", null, [
                                        createTextVNode("HAVE + BEEN + _______ING"),
                                        createVNode("br"),
                                        createTextVNode("A.V M.V")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                                      createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                                      createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                                      createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                                      createVNode("p", null, "HAD + BEEN + _______ING")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VContainer, null, {
                                    default: withCtx(() => [
                                      createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                                      createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                                      createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Have/Been")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "Perfect Continuous"),
                                    createVNode("p", null, "MISSING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("p", null, [
                                      createTextVNode("HAVE + BEEN + _______ING"),
                                      createVNode("br"),
                                      createTextVNode("A.V M.V")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                                    createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                                    createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                                    createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                                    createVNode("p", null, "HAD + BEEN + _______ING")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VContainer, null, {
                                  default: withCtx(() => [
                                    createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                                    createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                                    createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCard, { color: "green-lighten-1" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Have/Been")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "Perfect Continuous"),
                                  createVNode("p", null, "MISSING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("p", null, [
                                    createTextVNode("HAVE + BEEN + _______ING"),
                                    createVNode("br"),
                                    createTextVNode("A.V M.V")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                                  createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                                  createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                                  createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                                  createVNode("p", null, "HAD + BEEN + _______ING")
                                ]),
                                _: 1
                              }),
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                                  createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                                  createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "3",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "red-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Do")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "Simple"),
                                createVNode("p", null, "NEGATIVE AND QUESTIONS")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("DO + BARE INFINITIVE"),
                                  createVNode("br"),
                                  createTextVNode("A.V M.V")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PRESENT SIMPLE"),
                                createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                                createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PAST SIMPLE"),
                                createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                                createVNode("p", null, "DID + BARE INFINITIVE")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "FUTURE SIMPLE"),
                                createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                                createVNode("p", null, "WILL + BARE INFINITIVE")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "3",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "blue-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Be")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "Continuous"),
                                createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("BE + _______ING"),
                                  createVNode("br"),
                                  createTextVNode("A.V M.V")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PRESENT CONTINUOUS"),
                                createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                                createVNode("p", null, "AM/IS/ARE + _______ING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PAST CONTINUOUS"),
                                createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                                createVNode("p", null, "WAS/WERE + _______ING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "FUTURE CONTINUOUS"),
                                createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                                createVNode("p", null, "WILL + BE + _______ING")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "3",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "yellow-darken-2" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Have")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "Perfect"),
                                createVNode("p", null, "CONNECTING TENSES")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("HAVE + PAST PARTICIPLE"),
                                  createVNode("br"),
                                  createTextVNode("A.V M.V")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PRESENT PERFECT"),
                                createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                                createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PAST PERFECT"),
                                createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                                createVNode("p", null, "HAD + PAST PARTICIPLE")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "FUTURE PERFECT"),
                                createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                                createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  sm: "6",
                  md: "3",
                  class: "d-flex"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { color: "green-lighten-1" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Have/Been")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "Perfect Continuous"),
                                createVNode("p", null, "MISSING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("p", null, [
                                  createTextVNode("HAVE + BEEN + _______ING"),
                                  createVNode("br"),
                                  createTextVNode("A.V M.V")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                                createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                                createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                                createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                                createVNode("p", null, "HAD + BEEN + _______ING")
                              ]),
                              _: 1
                            }),
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                                createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                                createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("h2", { class: "text-center my-5" }, "The English Tenses Overview"),
          createVNode(VRow, { class: "text-center" }, {
            default: withCtx(() => [
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "red-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Do")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Simple"),
                              createVNode("p", null, "NEGATIVE AND QUESTIONS")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("DO + BARE INFINITIVE"),
                                createVNode("br"),
                                createTextVNode("A.V M.V")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PRESENT SIMPLE"),
                              createVNode("p", null, "REGULAR HABITUAL ACTIONS, STATUS"),
                              createVNode("p", null, "DO/DOES + BARE INFINITIVE")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PAST SIMPLE"),
                              createVNode("p", null, "FINISHED ACTION, FINISHED TIME"),
                              createVNode("p", null, "DID + BARE INFINITIVE")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "FUTURE SIMPLE"),
                              createVNode("p", null, "A DECISION NOW TO DO SOMETHING IN THE FUTURE"),
                              createVNode("p", null, "WILL + BARE INFINITIVE")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "blue-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Be")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Continuous"),
                              createVNode("p", null, "IN THE MIDDLE OF DOING SOMETHING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("BE + _______ING"),
                                createVNode("br"),
                                createTextVNode("A.V M.V")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PRESENT CONTINUOUS"),
                              createVNode("p", null, "AN ACTIVITY HAPPENING NOW OR IN GENERAL"),
                              createVNode("p", null, "AM/IS/ARE + _______ING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PAST CONTINUOUS"),
                              createVNode("p", null, "TWO PASTS HAPPENING AT THE SAME TIME"),
                              createVNode("p", null, "WAS/WERE + _______ING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "FUTURE CONTINUOUS"),
                              createVNode("p", null, "AN ACTIVITY HAPPENING AT A SPECIFIED TIME IN THE FUTURE"),
                              createVNode("p", null, "WILL + BE + _______ING")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "yellow-darken-2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Have")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Perfect"),
                              createVNode("p", null, "CONNECTING TENSES")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("HAVE + PAST PARTICIPLE"),
                                createVNode("br"),
                                createTextVNode("A.V M.V")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PRESENT PERFECT"),
                              createVNode("p", null, "CONNECTING A FINISHED ACTION WITH NOW"),
                              createVNode("p", null, "HAVE/HAS + PAST PARTICIPLE")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PAST PERFECT"),
                              createVNode("p", null, "CONNECTING A PAST BEFORE A PAST"),
                              createVNode("p", null, "HAD + PAST PARTICIPLE")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "FUTURE PERFECT"),
                              createVNode("p", null, "CONNECTING AN ACTION THAT WILL HAVE FINISHED BY A SPECIFIED TIME IN THE FUTURE"),
                              createVNode("p", null, "WILL + HAVE + PAST PARTICIPLE")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "3",
                class: "d-flex"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { color: "green-lighten-1" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Have/Been")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "Perfect Continuous"),
                              createVNode("p", null, "MISSING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode("HAVE + BEEN + _______ING"),
                                createVNode("br"),
                                createTextVNode("A.V M.V")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PRESENT PERFECT CONTINUOUS"),
                              createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH NOW"),
                              createVNode("p", null, "HAVE/HAS + BEEN + _______ING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "PAST PERFECT CONTINUOUS"),
                              createVNode("p", null, "CONNECTING AN ACTIVITY THAT STARTED IN THE PAST WITH A LATER PAST"),
                              createVNode("p", null, "HAD + BEEN + _______ING")
                            ]),
                            _: 1
                          }),
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode("h3", null, "FUTURE PERFECT CONTINUOUS"),
                              createVNode("p", null, "CONNECTING AN ACTIVITY STILL HAPPENING IN THE FUTURE WITH A SPECIFIED TIME IN THE FUTURE"),
                              createVNode("p", null, "WILL + HAVE + BEEN + _______ING")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DyGmPQXq.mjs.map
