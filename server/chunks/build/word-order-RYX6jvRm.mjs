import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer } from './VContainer-JKM9TrTt.mjs';
import { V as VCard, a as VCardTitle } from './VCard-C5tK0-Eq.mjs';
import { V as VTable } from './VTable-D1Xqgg99.mjs';
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
import './dimensions-DxHl50uj.mjs';
import './density-6PUP58Wc.mjs';
import './index-jC5fpk-_.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 class="text-center">Word Order</h1>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-center"${_scopeId3}>Positive Sentences</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-center" }, "Positive Sentences")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTable, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}>Tense</th><th scope="col"${_scopeId3}>Subject</th><th scope="col"${_scopeId3}>Auxiliary verb</th><th scope="col"${_scopeId3}>Second auxiliary verb</th><th scope="col"${_scopeId3}>Third auxiliary verb</th><th scope="col"${_scopeId3}>Main verb</th><th scope="col"${_scopeId3}>Object</th><th scope="col"${_scopeId3}>Reference to time</th></tr><tr${_scopeId3}><th${_scopeId3}></th><th${_scopeId3}>1</th><th${_scopeId3}>2</th><th${_scopeId3}>3</th><th${_scopeId3}>4</th><th${_scopeId3}>5</th><th${_scopeId3}>6</th><th${_scopeId3}>7</th></tr></thead><tbody${_scopeId3}><tr class="simple-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>SIMPLE TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>Not applicable</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>tea</td><td${_scopeId3}>every day</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>Not applicable</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drank</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>yesterday</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>tomorrow morning</td></tr><tr class="continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>IN THE MIDDLE OF DOING (CONT.) TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>am</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>(right now)</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>was</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when you came home</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will</td><td${_scopeId3}>be</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when you come home</td></tr><tr class="perfect-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>have</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>3 cups of tea</td><td${_scopeId3}>today</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>had</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>4 cups of tea</td><td${_scopeId3}>when you got home yesterday</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will</td><td${_scopeId3}>have</td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>my cup of tea</td><td${_scopeId3}>by the time you finish doing that</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT CONTINUOUS TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>have</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>all day</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>had</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>for 20 years when I gave it up</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will</td><td${_scopeId3}>have</td><td${_scopeId3}>been</td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>for exactly 20 years by the 1st of April</td></tr></tbody>`);
                  } else {
                    return [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, "Tense"),
                          createVNode("th", { scope: "col" }, "Subject"),
                          createVNode("th", { scope: "col" }, "Auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Main verb"),
                          createVNode("th", { scope: "col" }, "Object"),
                          createVNode("th", { scope: "col" }, "Reference to time")
                        ]),
                        createVNode("tr", null, [
                          createVNode("th"),
                          createVNode("th", null, "1"),
                          createVNode("th", null, "2"),
                          createVNode("th", null, "3"),
                          createVNode("th", null, "4"),
                          createVNode("th", null, "5"),
                          createVNode("th", null, "6"),
                          createVNode("th", null, "7")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "SIMPLE TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "Not applicable"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "every day")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "Not applicable"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drank"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "yesterday")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "tomorrow morning")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "am"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "(right now)")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "was"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when you came home")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "be"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when you come home")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "have"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "3 cups of tea"),
                          createVNode("td", null, "today")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "had"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "4 cups of tea"),
                          createVNode("td", null, "when you got home yesterday")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "have"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "my cup of tea"),
                          createVNode("td", null, "by the time you finish doing that")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT CONTINUOUS TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "all day")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "had"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "for 20 years when I gave it up")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "been"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "for exactly 20 years by the 1st of April")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-center" }, "Positive Sentences")
                  ]),
                  _: 1
                }),
                createVNode(VTable, null, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "Tense"),
                        createVNode("th", { scope: "col" }, "Subject"),
                        createVNode("th", { scope: "col" }, "Auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Main verb"),
                        createVNode("th", { scope: "col" }, "Object"),
                        createVNode("th", { scope: "col" }, "Reference to time")
                      ]),
                      createVNode("tr", null, [
                        createVNode("th"),
                        createVNode("th", null, "1"),
                        createVNode("th", null, "2"),
                        createVNode("th", null, "3"),
                        createVNode("th", null, "4"),
                        createVNode("th", null, "5"),
                        createVNode("th", null, "6"),
                        createVNode("th", null, "7")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "SIMPLE TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "Not applicable"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "every day")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "Not applicable"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drank"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "yesterday")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "tomorrow morning")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "am"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "(right now)")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "was"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when you came home")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "be"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when you come home")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "have"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "3 cups of tea"),
                        createVNode("td", null, "today")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "had"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "4 cups of tea"),
                        createVNode("td", null, "when you got home yesterday")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "have"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "my cup of tea"),
                        createVNode("td", null, "by the time you finish doing that")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT CONTINUOUS TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "all day")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "had"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "for 20 years when I gave it up")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "been"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "for exactly 20 years by the 1st of April")
                      ])
                    ])
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
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-center" }, "Positive Sentences")
                ]),
                _: 1
              }),
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, "Tense"),
                      createVNode("th", { scope: "col" }, "Subject"),
                      createVNode("th", { scope: "col" }, "Auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Main verb"),
                      createVNode("th", { scope: "col" }, "Object"),
                      createVNode("th", { scope: "col" }, "Reference to time")
                    ]),
                    createVNode("tr", null, [
                      createVNode("th"),
                      createVNode("th", null, "1"),
                      createVNode("th", null, "2"),
                      createVNode("th", null, "3"),
                      createVNode("th", null, "4"),
                      createVNode("th", null, "5"),
                      createVNode("th", null, "6"),
                      createVNode("th", null, "7")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "SIMPLE TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "Not applicable"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "every day")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "Not applicable"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drank"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "yesterday")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "tomorrow morning")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "am"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "(right now)")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "was"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when you came home")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "be"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when you come home")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "have"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "3 cups of tea"),
                      createVNode("td", null, "today")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "had"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "4 cups of tea"),
                      createVNode("td", null, "when you got home yesterday")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "have"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "my cup of tea"),
                      createVNode("td", null, "by the time you finish doing that")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT CONTINUOUS TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "all day")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "had"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "for 20 years when I gave it up")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "been"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "for exactly 20 years by the 1st of April")
                    ])
                  ])
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
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-center"${_scopeId3}>Negative Sentences</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-center" }, "Negative Sentences")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTable, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}>Tense</th><th scope="col"${_scopeId3}>Subject</th><th scope="col"${_scopeId3}>Auxiliary verb</th><th scope="col"${_scopeId3}>Second auxiliary verb</th><th scope="col"${_scopeId3}>Third auxiliary verb</th><th scope="col"${_scopeId3}>Main verb</th><th scope="col"${_scopeId3}>Object</th><th scope="col"${_scopeId3}>Reference to time</th></tr><tr${_scopeId3}><th${_scopeId3}></th><th${_scopeId3}>1</th><th${_scopeId3}>2</th><th${_scopeId3}>3</th><th${_scopeId3}>4</th><th${_scopeId3}>5</th><th${_scopeId3}>6</th><th${_scopeId3}>7</th></tr></thead><tbody${_scopeId3}><tr class="simple-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>SIMPLE TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>don&#39;t</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>tea</td><td${_scopeId3}>in the evenings</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>didn&#39;t</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>on Saturday</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will not</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>tonight</td></tr><tr class="continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>IN THE MIDDLE OF DOING (CONT.) TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>am not</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>(right now)</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>wasn&#39;t</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>when you came home</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>won&#39;t</td><td${_scopeId3}>be</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when you come home</td></tr><tr class="perfect-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>haven&#39;t</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>any tea</td><td${_scopeId3}>this week</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>hadn&#39;t</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>4 cups of coffee</td><td${_scopeId3}>when you got home yesterday</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will not</td><td${_scopeId3}>have</td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>my cup of tea</td><td${_scopeId3}>by the time you finish doing that</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT CONTINUOUS TENSES</td><td${_scopeId3}>I</td><td${_scopeId3}>haven&#39;t</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>your tea!</td><td${_scopeId3}>(recently)</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>hadn&#39;t</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>for long when I gave it up</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>I</td><td${_scopeId3}>will not</td><td${_scopeId3}>have</td><td${_scopeId3}>been</td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>long when that new brand comes out</td></tr></tbody>`);
                  } else {
                    return [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, "Tense"),
                          createVNode("th", { scope: "col" }, "Subject"),
                          createVNode("th", { scope: "col" }, "Auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Main verb"),
                          createVNode("th", { scope: "col" }, "Object"),
                          createVNode("th", { scope: "col" }, "Reference to time")
                        ]),
                        createVNode("tr", null, [
                          createVNode("th"),
                          createVNode("th", null, "1"),
                          createVNode("th", null, "2"),
                          createVNode("th", null, "3"),
                          createVNode("th", null, "4"),
                          createVNode("th", null, "5"),
                          createVNode("th", null, "6"),
                          createVNode("th", null, "7")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "SIMPLE TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "don't"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "in the evenings")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "didn't"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "on Saturday")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will not"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "tonight")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "am not"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "(right now)")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "wasn't"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "when you came home")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "won't"),
                          createVNode("td", null, "be"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when you come home")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "haven't"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "any tea"),
                          createVNode("td", null, "this week")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "hadn't"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "4 cups of coffee"),
                          createVNode("td", null, "when you got home yesterday")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will not"),
                          createVNode("td", null, "have"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "my cup of tea"),
                          createVNode("td", null, "by the time you finish doing that")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT CONTINUOUS TENSES"),
                          createVNode("td", null, "I"),
                          createVNode("td", null, "haven't"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "your tea!"),
                          createVNode("td", null, "(recently)")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "hadn't"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "for long when I gave it up")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "I"),
                          createVNode("td", null, "will not"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "been"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "long when that new brand comes out")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-center" }, "Negative Sentences")
                  ]),
                  _: 1
                }),
                createVNode(VTable, null, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "Tense"),
                        createVNode("th", { scope: "col" }, "Subject"),
                        createVNode("th", { scope: "col" }, "Auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Main verb"),
                        createVNode("th", { scope: "col" }, "Object"),
                        createVNode("th", { scope: "col" }, "Reference to time")
                      ]),
                      createVNode("tr", null, [
                        createVNode("th"),
                        createVNode("th", null, "1"),
                        createVNode("th", null, "2"),
                        createVNode("th", null, "3"),
                        createVNode("th", null, "4"),
                        createVNode("th", null, "5"),
                        createVNode("th", null, "6"),
                        createVNode("th", null, "7")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "SIMPLE TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "don't"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "in the evenings")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "didn't"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "on Saturday")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will not"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "tonight")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "am not"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "(right now)")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "wasn't"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "when you came home")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "won't"),
                        createVNode("td", null, "be"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when you come home")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "haven't"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "any tea"),
                        createVNode("td", null, "this week")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "hadn't"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "4 cups of coffee"),
                        createVNode("td", null, "when you got home yesterday")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will not"),
                        createVNode("td", null, "have"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "my cup of tea"),
                        createVNode("td", null, "by the time you finish doing that")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT CONTINUOUS TENSES"),
                        createVNode("td", null, "I"),
                        createVNode("td", null, "haven't"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "your tea!"),
                        createVNode("td", null, "(recently)")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "hadn't"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "for long when I gave it up")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "I"),
                        createVNode("td", null, "will not"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "been"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "long when that new brand comes out")
                      ])
                    ])
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
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-center" }, "Negative Sentences")
                ]),
                _: 1
              }),
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, "Tense"),
                      createVNode("th", { scope: "col" }, "Subject"),
                      createVNode("th", { scope: "col" }, "Auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Main verb"),
                      createVNode("th", { scope: "col" }, "Object"),
                      createVNode("th", { scope: "col" }, "Reference to time")
                    ]),
                    createVNode("tr", null, [
                      createVNode("th"),
                      createVNode("th", null, "1"),
                      createVNode("th", null, "2"),
                      createVNode("th", null, "3"),
                      createVNode("th", null, "4"),
                      createVNode("th", null, "5"),
                      createVNode("th", null, "6"),
                      createVNode("th", null, "7")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "SIMPLE TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "don't"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "in the evenings")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "didn't"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "on Saturday")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will not"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "tonight")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "am not"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "(right now)")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "wasn't"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "when you came home")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "won't"),
                      createVNode("td", null, "be"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when you come home")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "haven't"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "any tea"),
                      createVNode("td", null, "this week")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "hadn't"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "4 cups of coffee"),
                      createVNode("td", null, "when you got home yesterday")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will not"),
                      createVNode("td", null, "have"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "my cup of tea"),
                      createVNode("td", null, "by the time you finish doing that")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT CONTINUOUS TENSES"),
                      createVNode("td", null, "I"),
                      createVNode("td", null, "haven't"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "your tea!"),
                      createVNode("td", null, "(recently)")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "hadn't"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "for long when I gave it up")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "I"),
                      createVNode("td", null, "will not"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "been"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "long when that new brand comes out")
                    ])
                  ])
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
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-center"${_scopeId3}>Closed Questions</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-center" }, "Closed Questions")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTable, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}>Tense</th><th scope="col"${_scopeId3}>Auxiliary verb</th><th scope="col"${_scopeId3}>Subject</th><th scope="col"${_scopeId3}>Second auxiliary verb</th><th scope="col"${_scopeId3}>Third auxiliary verb</th><th scope="col"${_scopeId3}>Main verb</th><th scope="col"${_scopeId3}>Object</th><th scope="col"${_scopeId3}>Reference to time</th></tr><tr${_scopeId3}><th${_scopeId3}></th><th${_scopeId3}>1</th><th${_scopeId3}>2</th><th${_scopeId3}>3</th><th${_scopeId3}>4</th><th${_scopeId3}>5</th><th${_scopeId3}>6</th><th${_scopeId3}>7</th></tr></thead><tbody${_scopeId3}><tr class="simple-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>SIMPLE TENSES</td><td${_scopeId3}>Do</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>tea</td><td${_scopeId3}>in the mornings?</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>Did</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>last night?</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>Will</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>this afternoon?</td></tr><tr class="continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>IN THE MIDDLE OF DOING (CONT.) TENSES</td><td${_scopeId3}>Are</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea?</td><td${_scopeId3}>(right now)</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>Were</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when I came home?</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>Will</td><td${_scopeId3}>you</td><td${_scopeId3}>be</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when I get home?</td></tr><tr class="perfect-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT TENSES</td><td${_scopeId3}>Have</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>my cup of tea?</td><td${_scopeId3}>(recently)</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>Had</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>any tea</td><td${_scopeId3}>when I got home yesterday?</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>Will</td><td${_scopeId3}>you</td><td${_scopeId3}>have</td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>your cup of tea</td><td${_scopeId3}>by the time I finish?</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT CONTINUOUS TENSES</td><td${_scopeId3}>Have</td><td${_scopeId3}>you</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>my tea?</td><td${_scopeId3}>(recently)</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>Had</td><td${_scopeId3}>you</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>long when you gave it up?</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>Will</td><td${_scopeId3}>you</td><td${_scopeId3}>have</td><td${_scopeId3}>been</td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>long when I get home from work?</td></tr></tbody>`);
                  } else {
                    return [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, "Tense"),
                          createVNode("th", { scope: "col" }, "Auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Subject"),
                          createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Main verb"),
                          createVNode("th", { scope: "col" }, "Object"),
                          createVNode("th", { scope: "col" }, "Reference to time")
                        ]),
                        createVNode("tr", null, [
                          createVNode("th"),
                          createVNode("th", null, "1"),
                          createVNode("th", null, "2"),
                          createVNode("th", null, "3"),
                          createVNode("th", null, "4"),
                          createVNode("th", null, "5"),
                          createVNode("th", null, "6"),
                          createVNode("th", null, "7")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "SIMPLE TENSES"),
                          createVNode("td", null, "Do"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "in the mornings?")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "Did"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "last night?")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "Will"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "this afternoon?")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                          createVNode("td", null, "Are"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea?"),
                          createVNode("td", null, "(right now)")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "Were"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when I came home?")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "Will"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "be"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when I get home?")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT TENSES"),
                          createVNode("td", null, "Have"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "my cup of tea?"),
                          createVNode("td", null, "(recently)")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "Had"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "any tea"),
                          createVNode("td", null, "when I got home yesterday?")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "Will"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "have"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "your cup of tea"),
                          createVNode("td", null, "by the time I finish?")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT CONTINUOUS TENSES"),
                          createVNode("td", null, "Have"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "my tea?"),
                          createVNode("td", null, "(recently)")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "Had"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "long when you gave it up?")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "Will"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "been"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "long when I get home from work?")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-center" }, "Closed Questions")
                  ]),
                  _: 1
                }),
                createVNode(VTable, null, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "Tense"),
                        createVNode("th", { scope: "col" }, "Auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Subject"),
                        createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Main verb"),
                        createVNode("th", { scope: "col" }, "Object"),
                        createVNode("th", { scope: "col" }, "Reference to time")
                      ]),
                      createVNode("tr", null, [
                        createVNode("th"),
                        createVNode("th", null, "1"),
                        createVNode("th", null, "2"),
                        createVNode("th", null, "3"),
                        createVNode("th", null, "4"),
                        createVNode("th", null, "5"),
                        createVNode("th", null, "6"),
                        createVNode("th", null, "7")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "SIMPLE TENSES"),
                        createVNode("td", null, "Do"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "in the mornings?")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "Did"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "last night?")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "Will"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "this afternoon?")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                        createVNode("td", null, "Are"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea?"),
                        createVNode("td", null, "(right now)")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "Were"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when I came home?")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "Will"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "be"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when I get home?")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT TENSES"),
                        createVNode("td", null, "Have"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "my cup of tea?"),
                        createVNode("td", null, "(recently)")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "Had"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "any tea"),
                        createVNode("td", null, "when I got home yesterday?")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "Will"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "have"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "your cup of tea"),
                        createVNode("td", null, "by the time I finish?")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT CONTINUOUS TENSES"),
                        createVNode("td", null, "Have"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "my tea?"),
                        createVNode("td", null, "(recently)")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "Had"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "long when you gave it up?")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "Will"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "been"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "long when I get home from work?")
                      ])
                    ])
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
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-center" }, "Closed Questions")
                ]),
                _: 1
              }),
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, "Tense"),
                      createVNode("th", { scope: "col" }, "Auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Subject"),
                      createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Main verb"),
                      createVNode("th", { scope: "col" }, "Object"),
                      createVNode("th", { scope: "col" }, "Reference to time")
                    ]),
                    createVNode("tr", null, [
                      createVNode("th"),
                      createVNode("th", null, "1"),
                      createVNode("th", null, "2"),
                      createVNode("th", null, "3"),
                      createVNode("th", null, "4"),
                      createVNode("th", null, "5"),
                      createVNode("th", null, "6"),
                      createVNode("th", null, "7")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "SIMPLE TENSES"),
                      createVNode("td", null, "Do"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "in the mornings?")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "Did"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "last night?")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "Will"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "this afternoon?")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                      createVNode("td", null, "Are"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea?"),
                      createVNode("td", null, "(right now)")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "Were"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when I came home?")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "Will"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "be"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when I get home?")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT TENSES"),
                      createVNode("td", null, "Have"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "my cup of tea?"),
                      createVNode("td", null, "(recently)")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "Had"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "any tea"),
                      createVNode("td", null, "when I got home yesterday?")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "Will"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "have"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "your cup of tea"),
                      createVNode("td", null, "by the time I finish?")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT CONTINUOUS TENSES"),
                      createVNode("td", null, "Have"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "my tea?"),
                      createVNode("td", null, "(recently)")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "Had"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "long when you gave it up?")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "Will"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "been"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "long when I get home from work?")
                    ])
                  ])
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
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h3 class="text-center"${_scopeId3}>Open WH Questions</h3>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-center" }, "Open WH Questions")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VTable, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<thead${_scopeId3}><tr${_scopeId3}><th scope="col"${_scopeId3}>Tense</th><th scope="col"${_scopeId3}></th><th scope="col"${_scopeId3}>Auxiliary verb</th><th scope="col"${_scopeId3}>Subject</th><th scope="col"${_scopeId3}>Second auxiliary verb</th><th scope="col"${_scopeId3}>Third auxiliary verb</th><th scope="col"${_scopeId3}>Main verb</th><th scope="col"${_scopeId3}>Object</th><th scope="col"${_scopeId3}>Reference to time</th></tr><tr${_scopeId3}><th${_scopeId3}></th><th${_scopeId3}>0</th><th${_scopeId3}>1</th><th${_scopeId3}>2</th><th${_scopeId3}>3</th><th${_scopeId3}>4</th><th${_scopeId3}>5</th><th${_scopeId3}>6</th><th${_scopeId3}>7</th></tr></thead><tbody${_scopeId3}><tr class="simple-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>SIMPLE TENSES</td><td${_scopeId3}>What</td><td${_scopeId3}>do</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}></td><td${_scopeId3}>in the mornings?</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>Why</td><td${_scopeId3}>did</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>a cup of tea</td><td${_scopeId3}>last night?</td></tr><tr class="simple-tenses"${_scopeId3}><td${_scopeId3}>Where</td><td${_scopeId3}>will</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drink</td><td${_scopeId3}>3 cups of tea</td><td${_scopeId3}>tonight?</td></tr><tr class="continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>IN THE MIDDLE OF DOING (CONT.) TENSES</td><td${_scopeId3}>Why</td><td${_scopeId3}>are</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea?</td><td${_scopeId3}>(right now)</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>What</td><td${_scopeId3}>were</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when I came home?</td></tr><tr class="continuous-tenses"${_scopeId3}><td${_scopeId3}>Why</td><td${_scopeId3}>won&#39;t</td><td${_scopeId3}>you</td><td${_scopeId3}>be</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>when I get home?</td></tr><tr class="perfect-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT TENSES</td><td${_scopeId3}>Whose tea</td><td${_scopeId3}>have</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk?</td><td${_scopeId3}>Object moves to position 0</td><td${_scopeId3}>(recently)</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>How many cups of tea</td><td${_scopeId3}>had</td><td${_scopeId3}>you</td><td${_scopeId3}></td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>Object moves to position 0</td><td${_scopeId3}>when I got home last night?</td></tr><tr class="perfect-tenses"${_scopeId3}><td${_scopeId3}>How many cups of tea</td><td${_scopeId3}>will</td><td${_scopeId3}>you</td><td${_scopeId3}>have</td><td${_scopeId3}></td><td${_scopeId3}>drunk</td><td${_scopeId3}>Object moves to position 0</td><td${_scopeId3}>by the time I get home from work?</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td class="tense-label" rowspan="3"${_scopeId3}>PERFECT CONTINUOUS TENSES</td><td${_scopeId3}>Who</td><td${_scopeId3}>has</td><td${_scopeId3}></td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>my tea?</td><td${_scopeId3}>(recently)</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>How long</td><td${_scopeId3}>had</td><td${_scopeId3}>you</td><td${_scopeId3}>been</td><td${_scopeId3}></td><td${_scopeId3}>drinking</td><td${_scopeId3}>coffee</td><td${_scopeId3}>when you gave it up?</td></tr><tr class="perfect-continuous-tenses"${_scopeId3}><td${_scopeId3}>How long</td><td${_scopeId3}>will</td><td${_scopeId3}>you</td><td${_scopeId3}>have</td><td${_scopeId3}>been</td><td${_scopeId3}>drinking</td><td${_scopeId3}>tea</td><td${_scopeId3}>at the tea shop when it closes next month?</td></tr></tbody>`);
                  } else {
                    return [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { scope: "col" }, "Tense"),
                          createVNode("th", { scope: "col" }),
                          createVNode("th", { scope: "col" }, "Auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Subject"),
                          createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                          createVNode("th", { scope: "col" }, "Main verb"),
                          createVNode("th", { scope: "col" }, "Object"),
                          createVNode("th", { scope: "col" }, "Reference to time")
                        ]),
                        createVNode("tr", null, [
                          createVNode("th"),
                          createVNode("th", null, "0"),
                          createVNode("th", null, "1"),
                          createVNode("th", null, "2"),
                          createVNode("th", null, "3"),
                          createVNode("th", null, "4"),
                          createVNode("th", null, "5"),
                          createVNode("th", null, "6"),
                          createVNode("th", null, "7")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "SIMPLE TENSES"),
                          createVNode("td", null, "What"),
                          createVNode("td", null, "do"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td"),
                          createVNode("td", null, "in the mornings?")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "Why"),
                          createVNode("td", null, "did"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "a cup of tea"),
                          createVNode("td", null, "last night?")
                        ]),
                        createVNode("tr", { class: "simple-tenses" }, [
                          createVNode("td", null, "Where"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drink"),
                          createVNode("td", null, "3 cups of tea"),
                          createVNode("td", null, "tonight?")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                          createVNode("td", null, "Why"),
                          createVNode("td", null, "are"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea?"),
                          createVNode("td", null, "(right now)")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "What"),
                          createVNode("td", null, "were"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when I came home?")
                        ]),
                        createVNode("tr", { class: "continuous-tenses" }, [
                          createVNode("td", null, "Why"),
                          createVNode("td", null, "won't"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "be"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "when I get home?")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT TENSES"),
                          createVNode("td", null, "Whose tea"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk?"),
                          createVNode("td", null, "Object moves to position 0"),
                          createVNode("td", null, "(recently)")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "How many cups of tea"),
                          createVNode("td", null, "had"),
                          createVNode("td", null, "you"),
                          createVNode("td"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "Object moves to position 0"),
                          createVNode("td", null, "when I got home last night?")
                        ]),
                        createVNode("tr", { class: "perfect-tenses" }, [
                          createVNode("td", null, "How many cups of tea"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "have"),
                          createVNode("td"),
                          createVNode("td", null, "drunk"),
                          createVNode("td", null, "Object moves to position 0"),
                          createVNode("td", null, "by the time I get home from work?")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", {
                            class: "tense-label",
                            rowspan: "3"
                          }, "PERFECT CONTINUOUS TENSES"),
                          createVNode("td", null, "Who"),
                          createVNode("td", null, "has"),
                          createVNode("td"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "my tea?"),
                          createVNode("td", null, "(recently)")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "How long"),
                          createVNode("td", null, "had"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "been"),
                          createVNode("td"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "coffee"),
                          createVNode("td", null, "when you gave it up?")
                        ]),
                        createVNode("tr", { class: "perfect-continuous-tenses" }, [
                          createVNode("td", null, "How long"),
                          createVNode("td", null, "will"),
                          createVNode("td", null, "you"),
                          createVNode("td", null, "have"),
                          createVNode("td", null, "been"),
                          createVNode("td", null, "drinking"),
                          createVNode("td", null, "tea"),
                          createVNode("td", null, "at the tea shop when it closes next month?")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-center" }, "Open WH Questions")
                  ]),
                  _: 1
                }),
                createVNode(VTable, null, {
                  default: withCtx(() => [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { scope: "col" }, "Tense"),
                        createVNode("th", { scope: "col" }),
                        createVNode("th", { scope: "col" }, "Auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Subject"),
                        createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                        createVNode("th", { scope: "col" }, "Main verb"),
                        createVNode("th", { scope: "col" }, "Object"),
                        createVNode("th", { scope: "col" }, "Reference to time")
                      ]),
                      createVNode("tr", null, [
                        createVNode("th"),
                        createVNode("th", null, "0"),
                        createVNode("th", null, "1"),
                        createVNode("th", null, "2"),
                        createVNode("th", null, "3"),
                        createVNode("th", null, "4"),
                        createVNode("th", null, "5"),
                        createVNode("th", null, "6"),
                        createVNode("th", null, "7")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "SIMPLE TENSES"),
                        createVNode("td", null, "What"),
                        createVNode("td", null, "do"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td"),
                        createVNode("td", null, "in the mornings?")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "Why"),
                        createVNode("td", null, "did"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "a cup of tea"),
                        createVNode("td", null, "last night?")
                      ]),
                      createVNode("tr", { class: "simple-tenses" }, [
                        createVNode("td", null, "Where"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drink"),
                        createVNode("td", null, "3 cups of tea"),
                        createVNode("td", null, "tonight?")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                        createVNode("td", null, "Why"),
                        createVNode("td", null, "are"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea?"),
                        createVNode("td", null, "(right now)")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "What"),
                        createVNode("td", null, "were"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when I came home?")
                      ]),
                      createVNode("tr", { class: "continuous-tenses" }, [
                        createVNode("td", null, "Why"),
                        createVNode("td", null, "won't"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "be"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "when I get home?")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT TENSES"),
                        createVNode("td", null, "Whose tea"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk?"),
                        createVNode("td", null, "Object moves to position 0"),
                        createVNode("td", null, "(recently)")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "How many cups of tea"),
                        createVNode("td", null, "had"),
                        createVNode("td", null, "you"),
                        createVNode("td"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "Object moves to position 0"),
                        createVNode("td", null, "when I got home last night?")
                      ]),
                      createVNode("tr", { class: "perfect-tenses" }, [
                        createVNode("td", null, "How many cups of tea"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "have"),
                        createVNode("td"),
                        createVNode("td", null, "drunk"),
                        createVNode("td", null, "Object moves to position 0"),
                        createVNode("td", null, "by the time I get home from work?")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", {
                          class: "tense-label",
                          rowspan: "3"
                        }, "PERFECT CONTINUOUS TENSES"),
                        createVNode("td", null, "Who"),
                        createVNode("td", null, "has"),
                        createVNode("td"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "my tea?"),
                        createVNode("td", null, "(recently)")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "How long"),
                        createVNode("td", null, "had"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "been"),
                        createVNode("td"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "coffee"),
                        createVNode("td", null, "when you gave it up?")
                      ]),
                      createVNode("tr", { class: "perfect-continuous-tenses" }, [
                        createVNode("td", null, "How long"),
                        createVNode("td", null, "will"),
                        createVNode("td", null, "you"),
                        createVNode("td", null, "have"),
                        createVNode("td", null, "been"),
                        createVNode("td", null, "drinking"),
                        createVNode("td", null, "tea"),
                        createVNode("td", null, "at the tea shop when it closes next month?")
                      ])
                    ])
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
          createVNode(VCard, null, {
            default: withCtx(() => [
              createVNode(VCardTitle, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "text-center" }, "Open WH Questions")
                ]),
                _: 1
              }),
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { scope: "col" }, "Tense"),
                      createVNode("th", { scope: "col" }),
                      createVNode("th", { scope: "col" }, "Auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Subject"),
                      createVNode("th", { scope: "col" }, "Second auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Third auxiliary verb"),
                      createVNode("th", { scope: "col" }, "Main verb"),
                      createVNode("th", { scope: "col" }, "Object"),
                      createVNode("th", { scope: "col" }, "Reference to time")
                    ]),
                    createVNode("tr", null, [
                      createVNode("th"),
                      createVNode("th", null, "0"),
                      createVNode("th", null, "1"),
                      createVNode("th", null, "2"),
                      createVNode("th", null, "3"),
                      createVNode("th", null, "4"),
                      createVNode("th", null, "5"),
                      createVNode("th", null, "6"),
                      createVNode("th", null, "7")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "SIMPLE TENSES"),
                      createVNode("td", null, "What"),
                      createVNode("td", null, "do"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td"),
                      createVNode("td", null, "in the mornings?")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "Why"),
                      createVNode("td", null, "did"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "a cup of tea"),
                      createVNode("td", null, "last night?")
                    ]),
                    createVNode("tr", { class: "simple-tenses" }, [
                      createVNode("td", null, "Where"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drink"),
                      createVNode("td", null, "3 cups of tea"),
                      createVNode("td", null, "tonight?")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "IN THE MIDDLE OF DOING (CONT.) TENSES"),
                      createVNode("td", null, "Why"),
                      createVNode("td", null, "are"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea?"),
                      createVNode("td", null, "(right now)")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "What"),
                      createVNode("td", null, "were"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when I came home?")
                    ]),
                    createVNode("tr", { class: "continuous-tenses" }, [
                      createVNode("td", null, "Why"),
                      createVNode("td", null, "won't"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "be"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "when I get home?")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT TENSES"),
                      createVNode("td", null, "Whose tea"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk?"),
                      createVNode("td", null, "Object moves to position 0"),
                      createVNode("td", null, "(recently)")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "How many cups of tea"),
                      createVNode("td", null, "had"),
                      createVNode("td", null, "you"),
                      createVNode("td"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "Object moves to position 0"),
                      createVNode("td", null, "when I got home last night?")
                    ]),
                    createVNode("tr", { class: "perfect-tenses" }, [
                      createVNode("td", null, "How many cups of tea"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "have"),
                      createVNode("td"),
                      createVNode("td", null, "drunk"),
                      createVNode("td", null, "Object moves to position 0"),
                      createVNode("td", null, "by the time I get home from work?")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", {
                        class: "tense-label",
                        rowspan: "3"
                      }, "PERFECT CONTINUOUS TENSES"),
                      createVNode("td", null, "Who"),
                      createVNode("td", null, "has"),
                      createVNode("td"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "my tea?"),
                      createVNode("td", null, "(recently)")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "How long"),
                      createVNode("td", null, "had"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "been"),
                      createVNode("td"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "coffee"),
                      createVNode("td", null, "when you gave it up?")
                    ]),
                    createVNode("tr", { class: "perfect-continuous-tenses" }, [
                      createVNode("td", null, "How long"),
                      createVNode("td", null, "will"),
                      createVNode("td", null, "you"),
                      createVNode("td", null, "have"),
                      createVNode("td", null, "been"),
                      createVNode("td", null, "drinking"),
                      createVNode("td", null, "tea"),
                      createVNode("td", null, "at the tea shop when it closes next month?")
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/word-order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const wordOrder = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { wordOrder as default };
//# sourceMappingURL=word-order-RYX6jvRm.mjs.map
