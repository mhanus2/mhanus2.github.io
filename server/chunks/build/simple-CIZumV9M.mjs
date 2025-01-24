import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer } from './VContainer-JKM9TrTt.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 class="fw-bold text-center pb-5" data-v-25c0009d>Simple tenses</h1>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-25c0009d${_scopeId}><div class="text-justify" data-v-25c0009d${_scopeId}><p data-v-25c0009d${_scopeId}> Called simple tenses because the sentence structures contain one or two verbs only. They are also some of the easiest and most common tenses to use. </p><p data-v-25c0009d${_scopeId}> We have broken each tense down into four basic sentence types: </p><p data-v-25c0009d${_scopeId}> Positive - sentences containing actions that occur, occurred or will occur. </p><p data-v-25c0009d${_scopeId}> Negative - sentences containing actions that do not occur, did not occur or will not occur. </p><p data-v-25c0009d${_scopeId}> Closed questions - sentences containing questions resulting with a \u2018yes\u2019 or \u2018no\u2019 answer. These questions always start with the auxiliary verbs do/does, did or will. </p><p data-v-25c0009d${_scopeId}> Open questions - sentences containing questions resulting with an answer in the form of a sentence. These questions always start with what, why, where, when, who, which, whose or how. (We also call them WH questions for obvious reasons). </p></div><div data-v-25c0009d${_scopeId}><h3 class="fw-bold" data-v-25c0009d${_scopeId}>Present Simple</h3><p data-v-25c0009d${_scopeId}>Verb structure of the sentence</p><p data-v-25c0009d${_scopeId}>DO/DOES + Bare Infinitive</p><p data-v-25c0009d${_scopeId}>DO/DOES is the AUXILIARY VERB</p><p data-v-25c0009d${_scopeId}>Bare Infinitive is the MAIN VERB</p></div><div data-v-25c0009d${_scopeId}><h3 class="fw-bold" data-v-25c0009d${_scopeId}>Past Simple</h3><p data-v-25c0009d${_scopeId}>Verb structure of the sentence</p><p data-v-25c0009d${_scopeId}>DID + Bare Infinitive </p><p data-v-25c0009d${_scopeId}>DID is the AUXILIARY VERB</p><p data-v-25c0009d${_scopeId}>Bare Infinitive is the MAIN VERB</p></div><div data-v-25c0009d${_scopeId}><h3 class="fw-bold" data-v-25c0009d${_scopeId}>Future Simple</h3><p data-v-25c0009d${_scopeId}>Verb structure of the sentence</p><p data-v-25c0009d${_scopeId}>WILL + Bare Infinitive</p><p data-v-25c0009d${_scopeId}>WILL is the AUXILIARY VERB</p><p data-v-25c0009d${_scopeId}>Bare Infinitive is the MAIN VERB</p></div><div data-v-25c0009d${_scopeId}><h3 class="fw-bold" data-v-25c0009d${_scopeId}>Exceptions</h3><p data-v-25c0009d${_scopeId}> Using Modal Auxiliary verbs such as CAN, COULD, MAY, MIGHT, SHOULD, MUST etc instead of WILL. </p></div><div data-v-25c0009d${_scopeId}><h3 class="text-center fw-bold" data-v-25c0009d${_scopeId}>Do</h3><div class="table-responsive" data-v-25c0009d${_scopeId}><table class="table table-bordered" data-v-25c0009d${_scopeId}><thead data-v-25c0009d${_scopeId}><tr data-v-25c0009d${_scopeId}><th class="bg-red text-white" data-v-25c0009d${_scopeId}>Sentence type</th><th class="bg-red text-white" data-v-25c0009d${_scopeId}></th></tr></thead><tbody data-v-25c0009d${_scopeId}><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>Present Simple</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>DO/DOES + Bare Infinitive</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Positive</td><td data-v-25c0009d${_scopeId}>I drink tea every day</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Negative</td><td data-v-25c0009d${_scopeId}>I don\u2019t drink tea in the evenings</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Closed question</td><td data-v-25c0009d${_scopeId}>Do you drink tea in the mornings?</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Open WH question</td><td data-v-25c0009d${_scopeId}>What do you drink in the mornings?</td></tr><tr data-v-25c0009d${_scopeId}><td class="bg-red" data-v-25c0009d${_scopeId}></td><td class="bg-red" data-v-25c0009d${_scopeId}></td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>Past Simple</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>DID + Bare Infinitive</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Positive</td><td data-v-25c0009d${_scopeId}>I drink tea every day</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Negative</td><td data-v-25c0009d${_scopeId}>I don\u2019t drink tea in the evenings</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Closed question</td><td data-v-25c0009d${_scopeId}>Do you drink tea in the mornings?</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Open WH question</td><td data-v-25c0009d${_scopeId}>What do you drink in the mornings?</td></tr><tr data-v-25c0009d${_scopeId}><td class="bg-red" data-v-25c0009d${_scopeId}></td><td class="bg-red" data-v-25c0009d${_scopeId}></td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>Future Simple</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}></td><td class="text-red fw-bold" data-v-25c0009d${_scopeId}>WILL + Bare Infinitive</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Positive</td><td data-v-25c0009d${_scopeId}>I drink tea every day</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Negative</td><td data-v-25c0009d${_scopeId}>I don\u2019t drink tea in the evenings</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Closed question</td><td data-v-25c0009d${_scopeId}>Do you drink tea in the mornings?</td></tr><tr data-v-25c0009d${_scopeId}><td data-v-25c0009d${_scopeId}>Open WH question</td><td data-v-25c0009d${_scopeId}>What do you drink in the mornings?</td></tr></tbody></table></div></div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "text-justify" }, [
              createVNode("p", null, " Called simple tenses because the sentence structures contain one or two verbs only. They are also some of the easiest and most common tenses to use. "),
              createVNode("p", null, " We have broken each tense down into four basic sentence types: "),
              createVNode("p", null, " Positive - sentences containing actions that occur, occurred or will occur. "),
              createVNode("p", null, " Negative - sentences containing actions that do not occur, did not occur or will not occur. "),
              createVNode("p", null, " Closed questions - sentences containing questions resulting with a \u2018yes\u2019 or \u2018no\u2019 answer. These questions always start with the auxiliary verbs do/does, did or will. "),
              createVNode("p", null, " Open questions - sentences containing questions resulting with an answer in the form of a sentence. These questions always start with what, why, where, when, who, which, whose or how. (We also call them WH questions for obvious reasons). ")
            ]),
            createVNode("div", null, [
              createVNode("h3", { class: "fw-bold" }, "Present Simple"),
              createVNode("p", null, "Verb structure of the sentence"),
              createVNode("p", null, "DO/DOES + Bare Infinitive"),
              createVNode("p", null, "DO/DOES is the AUXILIARY VERB"),
              createVNode("p", null, "Bare Infinitive is the MAIN VERB")
            ]),
            createVNode("div", null, [
              createVNode("h3", { class: "fw-bold" }, "Past Simple"),
              createVNode("p", null, "Verb structure of the sentence"),
              createVNode("p", null, "DID + Bare Infinitive "),
              createVNode("p", null, "DID is the AUXILIARY VERB"),
              createVNode("p", null, "Bare Infinitive is the MAIN VERB")
            ]),
            createVNode("div", null, [
              createVNode("h3", { class: "fw-bold" }, "Future Simple"),
              createVNode("p", null, "Verb structure of the sentence"),
              createVNode("p", null, "WILL + Bare Infinitive"),
              createVNode("p", null, "WILL is the AUXILIARY VERB"),
              createVNode("p", null, "Bare Infinitive is the MAIN VERB")
            ]),
            createVNode("div", null, [
              createVNode("h3", { class: "fw-bold" }, "Exceptions"),
              createVNode("p", null, " Using Modal Auxiliary verbs such as CAN, COULD, MAY, MIGHT, SHOULD, MUST etc instead of WILL. ")
            ]),
            createVNode("div", null, [
              createVNode("h3", { class: "text-center fw-bold" }, "Do"),
              createVNode("div", { class: "table-responsive" }, [
                createVNode("table", { class: "table table-bordered" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "bg-red text-white" }, "Sentence type"),
                      createVNode("th", { class: "bg-red text-white" })
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "Present Simple")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "DO/DOES + Bare Infinitive")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "I drink tea every day")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "I don\u2019t drink tea in the evenings")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Do you drink tea in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "What do you drink in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-red" }),
                      createVNode("td", { class: "bg-red" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "Past Simple")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "DID + Bare Infinitive")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "I drink tea every day")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "I don\u2019t drink tea in the evenings")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Do you drink tea in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "What do you drink in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-red" }),
                      createVNode("td", { class: "bg-red" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "Future Simple")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-red fw-bold" }, "WILL + Bare Infinitive")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "I drink tea every day")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "I don\u2019t drink tea in the evenings")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Do you drink tea in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "What do you drink in the mornings?")
                    ])
                  ])
                ])
              ])
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenses/simple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const simple = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-25c0009d"]]);

export { simple as default };
//# sourceMappingURL=simple-CIZumV9M.mjs.map
