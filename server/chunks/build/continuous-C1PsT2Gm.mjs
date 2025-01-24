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
  _push(`<!--[--><h1 class="fw-bold text-center pb-5">Continuous tenses</h1>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-justify"${_scopeId}><p${_scopeId}> Called continuous tenses because the sentence structures contain an action that occurs, or continues over a period of time - usually an ACTIVITY. </p><p${_scopeId}> I prefer to call them \u2018in the middle of doing something\u2019 tenses, because the subject of the sentence is always in the middle of doing something at a point of time either in the present (right now), the past, or the future. </p><p${_scopeId}> We have broken each tense down into four basic sentence types: </p><p${_scopeId}> Positive - sentences containing actions that are occurring, were occurring or will be occurring. </p><p${_scopeId}> Negative - sentences containing actions that are not occurring, were not occurring or will not be occurring. </p><p${_scopeId}> Closed questions - sentences containing questions resulting with a \u2018yes\u2019 or \u2018no\u2019 answer. These questions always start with the auxiliary verbs am/is/are, was/were or will + (subject) + be. </p><p${_scopeId}> Open questions - sentences containing questions resulting with an answer in the form of a sentence. These questions always start with what, why, where, when, who, which, whose or how. </p></div><div${_scopeId}><h3 class="fw-bold"${_scopeId}>Present Continuous</h3><p${_scopeId}>Verb structure of the sentence</p><p${_scopeId}>AM/IS/ARE + Present Participle</p><p${_scopeId}>AM/IS/ARE is the AUXILIARY VERB</p><p${_scopeId}>Present Participle is the MAIN VERB</p></div><div${_scopeId}><h3 class="fw-bold"${_scopeId}>Past Continuous</h3><p${_scopeId}>Verb structure of the sentence</p><p${_scopeId}>WAS/WERE + Present Participle</p><p${_scopeId}>WAS/WERE is the AUXILIARY VERB</p><p${_scopeId}>Present Participle is the MAIN VERB</p></div><div${_scopeId}><h3 class="fw-bold"${_scopeId}>Future Continuous</h3><p${_scopeId}>Verb structure of the sentence</p><p${_scopeId}>WILL + BE + Present Participle</p><p${_scopeId}>WILL + BE are the AUXILIARY VERBS</p><p${_scopeId}>Present Participle is the MAIN VERB</p></div><div${_scopeId}><h3 class="fw-bold"${_scopeId}>Exceptions</h3><p${_scopeId}> Using Modal Auxiliary verbs such as CAN, COULD, MAY, MIGHT, SHOULD, MUST etc instead of WILL. </p><p${_scopeId}> Non-continuous verbs - verbs that we do not normally use with continuous tenses. These are known as &quot;stative&quot; verbs are about state, not action. Examples below: </p><p${_scopeId}> Hate, like, love, prefer, want, wish, appear, feel, hear, see, seem, smell, sound, taste, agree, deny, disagree, mean, promise, satisfy, surprise, believe, imagine, know, mean, realise, recognise, remember, understand, be, belong, concern, depend, involve, matter, need, owe, own, possess </p></div><div class="text-center"${_scopeId}><h3 class="fw-bold"${_scopeId}>Be</h3><div class="table-responsive"${_scopeId}><table class="table table-bordered"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="bg-blue text-white"${_scopeId}>Sentence type</th><th class="bg-blue text-white"${_scopeId}></th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>Present Continuous</td></tr><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>AM/IS/ARE + ___ING</td></tr><tr${_scopeId}><td${_scopeId}>Positive</td><td${_scopeId}>I am drinking tea</td></tr><tr${_scopeId}><td${_scopeId}>Negative</td><td${_scopeId}>I am not drinking coffee</td></tr><tr${_scopeId}><td${_scopeId}>Closed question</td><td${_scopeId}>Are you drinking tea?</td></tr><tr${_scopeId}><td${_scopeId}>Open WH question</td><td${_scopeId}>Why are you drinking tea?</td></tr><tr${_scopeId}><td class="bg-blue"${_scopeId}></td><td class="bg-blue"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>Past Continuous</td></tr><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>DID + Bare Infinitive</td></tr><tr${_scopeId}><td${_scopeId}>Positive</td><td${_scopeId}>I was drinking tea when you came home</td></tr><tr${_scopeId}><td${_scopeId}>Negative</td><td${_scopeId}>I wasn\u2019t drinking coffee when you came home</td></tr><tr${_scopeId}><td${_scopeId}>Closed question</td><td${_scopeId}>Were you drinking tea when I came home?</td></tr><tr${_scopeId}><td${_scopeId}>Open WH question</td><td${_scopeId}>What were you drinking when I came home?</td></tr><tr${_scopeId}><td class="bg-blue"${_scopeId}></td><td class="bg-blue"${_scopeId}></td></tr><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>Future Continuous</td></tr><tr${_scopeId}><td${_scopeId}></td><td class="text-blue fw-bold"${_scopeId}>WILL + BE + ___ING</td></tr><tr${_scopeId}><td${_scopeId}>Positive</td><td${_scopeId}>I will be drinking tea when you come home</td></tr><tr${_scopeId}><td${_scopeId}>Negative</td><td${_scopeId}>I won\u2019t be drinking tea when you come home</td></tr><tr${_scopeId}><td${_scopeId}>Closed question</td><td${_scopeId}>Will you be drinking tea when I get home?</td></tr><tr${_scopeId}><td${_scopeId}>Open WH question</td><td${_scopeId}>Why won\u2019t you be drinking tea when I get home?</td></tr></tbody></table></div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-justify" }, [
            createVNode("p", null, " Called continuous tenses because the sentence structures contain an action that occurs, or continues over a period of time - usually an ACTIVITY. "),
            createVNode("p", null, " I prefer to call them \u2018in the middle of doing something\u2019 tenses, because the subject of the sentence is always in the middle of doing something at a point of time either in the present (right now), the past, or the future. "),
            createVNode("p", null, " We have broken each tense down into four basic sentence types: "),
            createVNode("p", null, " Positive - sentences containing actions that are occurring, were occurring or will be occurring. "),
            createVNode("p", null, " Negative - sentences containing actions that are not occurring, were not occurring or will not be occurring. "),
            createVNode("p", null, " Closed questions - sentences containing questions resulting with a \u2018yes\u2019 or \u2018no\u2019 answer. These questions always start with the auxiliary verbs am/is/are, was/were or will + (subject) + be. "),
            createVNode("p", null, " Open questions - sentences containing questions resulting with an answer in the form of a sentence. These questions always start with what, why, where, when, who, which, whose or how. ")
          ]),
          createVNode("div", null, [
            createVNode("h3", { class: "fw-bold" }, "Present Continuous"),
            createVNode("p", null, "Verb structure of the sentence"),
            createVNode("p", null, "AM/IS/ARE + Present Participle"),
            createVNode("p", null, "AM/IS/ARE is the AUXILIARY VERB"),
            createVNode("p", null, "Present Participle is the MAIN VERB")
          ]),
          createVNode("div", null, [
            createVNode("h3", { class: "fw-bold" }, "Past Continuous"),
            createVNode("p", null, "Verb structure of the sentence"),
            createVNode("p", null, "WAS/WERE + Present Participle"),
            createVNode("p", null, "WAS/WERE is the AUXILIARY VERB"),
            createVNode("p", null, "Present Participle is the MAIN VERB")
          ]),
          createVNode("div", null, [
            createVNode("h3", { class: "fw-bold" }, "Future Continuous"),
            createVNode("p", null, "Verb structure of the sentence"),
            createVNode("p", null, "WILL + BE + Present Participle"),
            createVNode("p", null, "WILL + BE are the AUXILIARY VERBS"),
            createVNode("p", null, "Present Participle is the MAIN VERB")
          ]),
          createVNode("div", null, [
            createVNode("h3", { class: "fw-bold" }, "Exceptions"),
            createVNode("p", null, " Using Modal Auxiliary verbs such as CAN, COULD, MAY, MIGHT, SHOULD, MUST etc instead of WILL. "),
            createVNode("p", null, ' Non-continuous verbs - verbs that we do not normally use with continuous tenses. These are known as "stative" verbs are about state, not action. Examples below: '),
            createVNode("p", null, " Hate, like, love, prefer, want, wish, appear, feel, hear, see, seem, smell, sound, taste, agree, deny, disagree, mean, promise, satisfy, surprise, believe, imagine, know, mean, realise, recognise, remember, understand, be, belong, concern, depend, involve, matter, need, owe, own, possess ")
          ]),
          createVNode("div", { class: "text-center" }, [
            createVNode("h3", { class: "fw-bold" }, "Be"),
            createVNode("div", { class: "table-responsive" }, [
              createVNode("table", { class: "table table-bordered" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "bg-blue text-white" }, "Sentence type"),
                    createVNode("th", { class: "bg-blue text-white" })
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "Present Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "AM/IS/ARE + ___ING")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "I am drinking tea")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "I am not drinking coffee")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Are you drinking tea?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why are you drinking tea?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-blue" }),
                    createVNode("td", { class: "bg-blue" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "Past Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "DID + Bare Infinitive")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "I was drinking tea when you came home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "I wasn\u2019t drinking coffee when you came home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Were you drinking tea when I came home?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "What were you drinking when I came home?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-blue" }),
                    createVNode("td", { class: "bg-blue" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "Future Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-blue fw-bold" }, "WILL + BE + ___ING")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "I will be drinking tea when you come home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "I won\u2019t be drinking tea when you come home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Will you be drinking tea when I get home?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why won\u2019t you be drinking tea when I get home?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenses/continuous.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const continuous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { continuous as default };
//# sourceMappingURL=continuous-C1PsT2Gm.mjs.map
