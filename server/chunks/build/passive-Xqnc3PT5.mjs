import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VContainer } from './VContainer-JKM9TrTt.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 class="text-center">Passive</h1>`);
  _push(ssrRenderComponent(VContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-center py-2 bg-red"${_scopeId}><h3 class="text-white fw-bold"${_scopeId}>Do</h3><div class="table-responsive"${_scopeId}>`);
        _push2(ssrRenderComponent(VTable, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="bg-red text-white"${_scopeId2}>Sentence type</th><th class="bg-red text-white"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>Present Simple</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>AM/IS/ARE + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>Tea is drunk every day</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>Tea isn\u2019t drunk in the evenings</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Is tea drunk in the mornings?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>What is drunk in the mornings?</td></tr><tr${_scopeId2}><td class="bg-red"${_scopeId2}></td><td class="bg-red"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>Past Simple</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>WAS/WERE + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>A cup of tea was drunk yesterday</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>Tea wasn\u2019t drunk on Saturday</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Was a cup of tea drunk last night?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Why were 3 cups of tea drunk last night?</td></tr><tr${_scopeId2}><td class="bg-red"${_scopeId2}></td><td class="bg-red"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>Future Simple</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-red fw-bold"${_scopeId2}>WILL + Be + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>A cup of tea will be drunk tomorrow morning</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>A cup of tea will not be drunk tonight</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Will a cup of tea be drunk this afternoon?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Where will 3 cups of tea be drunk tonight?</td></tr></tbody>`);
            } else {
              return [
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
                    createVNode("td", { class: "text-red fw-bold" }, "AM/IS/ARE + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "Tea is drunk every day")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "Tea isn\u2019t drunk in the evenings")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Is tea drunk in the mornings?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "What is drunk in the mornings?")
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
                    createVNode("td", { class: "text-red fw-bold" }, "WAS/WERE + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "A cup of tea was drunk yesterday")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "Tea wasn\u2019t drunk on Saturday")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Was a cup of tea drunk last night?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why were 3 cups of tea drunk last night?")
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
                    createVNode("td", { class: "text-red fw-bold" }, "WILL + Be + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "A cup of tea will be drunk tomorrow morning")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "A cup of tea will not be drunk tonight")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Will a cup of tea be drunk this afternoon?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Where will 3 cups of tea be drunk tonight?")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="text-center py-2 bg-blue"${_scopeId}><h3 class="text-white fw-bold"${_scopeId}>Be</h3><div class="table-responsive"${_scopeId}>`);
        _push2(ssrRenderComponent(VTable, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="bg-blue text-white"${_scopeId2}>Sentence type</th><th class="bg-blue text-white"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>Present Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>AM/IS/ARE + Being + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>Tea is being drunk</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>Coffee isn\u2019t being drunk</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Is tea being drunk?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Why is tea being drunk?</td></tr><tr${_scopeId2}><td class="bg-blue"${_scopeId2}></td><td class="bg-blue"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>Past Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>WAS/WERE + Being + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>Tea was being drunk when you came home</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>Coffee wasn\u2019t being drunk when you came home</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Was tea being drunk when I came home?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>What was being drunk when I came home?</td></tr><tr${_scopeId2}><td class="bg-blue"${_scopeId2}></td><td class="bg-blue"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>Future Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-blue fw-bold"${_scopeId2}>NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}></td></tr></tbody>`);
            } else {
              return [
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
                    createVNode("td", { class: "text-blue fw-bold" }, "AM/IS/ARE + Being + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "Tea is being drunk")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "Coffee isn\u2019t being drunk")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Is tea being drunk?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why is tea being drunk?")
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
                    createVNode("td", { class: "text-blue fw-bold" }, "WAS/WERE + Being + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "Tea was being drunk when you came home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "Coffee wasn\u2019t being drunk when you came home")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Was tea being drunk when I came home?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "What was being drunk when I came home?")
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
                    createVNode("td", { class: "text-blue fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="text-center py-2 bg-yellow"${_scopeId}><h3 class="text-white fw-bold"${_scopeId}>Have</h3><div class="table-responsive"${_scopeId}>`);
        _push2(ssrRenderComponent(VTable, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="bg-yellow text-white"${_scopeId2}>Sentence type</th><th class="bg-yellow text-white"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>Present Perfect</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>HAVE/HAS + Been + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>3 cups of tea have been drunk today</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>Tea hasn\u2019t been drunk this week</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Has any tea been drunk?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Where has tea been drunk?</td></tr><tr${_scopeId2}><td class="bg-yellow"${_scopeId2}></td><td class="bg-yellow"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>Past Perfect</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>HAD + Been + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>4 cups of tea had been drunk when you got home yesterday</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>4 cups of coffee hadn\u2019t been drunk when you got home yesterday</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Had any tea been drunk when I got home yesterday?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Why had tea been drunk when I got home last night?</td></tr><tr${_scopeId2}><td class="bg-yellow"${_scopeId2}></td><td class="bg-yellow"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>Future Perfect</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-yellow fw-bold"${_scopeId2}>WILL + HAVE + Been + Past Participle</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}>My cup of tea will have been drunk by the time you finish doing that</td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}>My cup of tea will not have been drunk by the time you finish doing that</td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}>Will your cup of tea have been drunk by the time I finish?</td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}>Why will tea have been drunk by the time I get home from work?</td></tr></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "bg-yellow text-white" }, "Sentence type"),
                    createVNode("th", { class: "bg-yellow text-white" })
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "Present Perfect")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "HAVE/HAS + Been + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "3 cups of tea have been drunk today")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "Tea hasn\u2019t been drunk this week")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Has any tea been drunk?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Where has tea been drunk?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-yellow" }),
                    createVNode("td", { class: "bg-yellow" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "Past Perfect")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "HAD + Been + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "4 cups of tea had been drunk when you got home yesterday")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "4 cups of coffee hadn\u2019t been drunk when you got home yesterday")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Had any tea been drunk when I got home yesterday?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why had tea been drunk when I got home last night?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-yellow" }),
                    createVNode("td", { class: "bg-yellow" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "Future Perfect")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-yellow fw-bold" }, "WILL + HAVE + Been + Past Participle")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td", null, "My cup of tea will have been drunk by the time you finish doing that")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td", null, "My cup of tea will not have been drunk by the time you finish doing that")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td", null, "Will your cup of tea have been drunk by the time I finish?")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td", null, "Why will tea have been drunk by the time I get home from work?")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="text-center py-2 bg-green"${_scopeId}><h3 class="text-white fw-bold"${_scopeId}>Have/Been</h3><div class="table-responsive"${_scopeId}>`);
        _push2(ssrRenderComponent(VTable, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th class="bg-green text-white"${_scopeId2}>Sentence type</th><th class="bg-green text-white"${_scopeId2}></th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>Present Perfect Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td class="bg-green"${_scopeId2}></td><td class="bg-green"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>Past Perfect Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td class="bg-green"${_scopeId2}></td><td class="bg-green"${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>Future Perfect Continuous</td></tr><tr${_scopeId2}><td${_scopeId2}></td><td class="text-green fw-bold"${_scopeId2}>NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE</td></tr><tr${_scopeId2}><td${_scopeId2}>Positive</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Negative</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Closed question</td><td${_scopeId2}></td></tr><tr${_scopeId2}><td${_scopeId2}>Open WH question</td><td${_scopeId2}></td></tr></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "bg-green text-white" }, "Sentence type"),
                    createVNode("th", { class: "bg-green text-white" })
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "Present Perfect Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-green" }),
                    createVNode("td", { class: "bg-green" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "Past Perfect Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", { class: "bg-green" }),
                    createVNode("td", { class: "bg-green" })
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "Future Perfect Continuous")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td"),
                    createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Positive"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Negative"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Closed question"),
                    createVNode("td")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "Open WH question"),
                    createVNode("td")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "text-center py-2 bg-red" }, [
            createVNode("h3", { class: "text-white fw-bold" }, "Do"),
            createVNode("div", { class: "table-responsive" }, [
              createVNode(VTable, null, {
                default: withCtx(() => [
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
                      createVNode("td", { class: "text-red fw-bold" }, "AM/IS/ARE + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "Tea is drunk every day")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "Tea isn\u2019t drunk in the evenings")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Is tea drunk in the mornings?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "What is drunk in the mornings?")
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
                      createVNode("td", { class: "text-red fw-bold" }, "WAS/WERE + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "A cup of tea was drunk yesterday")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "Tea wasn\u2019t drunk on Saturday")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Was a cup of tea drunk last night?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Why were 3 cups of tea drunk last night?")
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
                      createVNode("td", { class: "text-red fw-bold" }, "WILL + Be + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "A cup of tea will be drunk tomorrow morning")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "A cup of tea will not be drunk tonight")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Will a cup of tea be drunk this afternoon?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Where will 3 cups of tea be drunk tonight?")
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createVNode("div", { class: "text-center py-2 bg-blue" }, [
            createVNode("h3", { class: "text-white fw-bold" }, "Be"),
            createVNode("div", { class: "table-responsive" }, [
              createVNode(VTable, null, {
                default: withCtx(() => [
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
                      createVNode("td", { class: "text-blue fw-bold" }, "AM/IS/ARE + Being + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "Tea is being drunk")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "Coffee isn\u2019t being drunk")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Is tea being drunk?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Why is tea being drunk?")
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
                      createVNode("td", { class: "text-blue fw-bold" }, "WAS/WERE + Being + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "Tea was being drunk when you came home")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "Coffee wasn\u2019t being drunk when you came home")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Was tea being drunk when I came home?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "What was being drunk when I came home?")
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
                      createVNode("td", { class: "text-blue fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td")
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createVNode("div", { class: "text-center py-2 bg-yellow" }, [
            createVNode("h3", { class: "text-white fw-bold" }, "Have"),
            createVNode("div", { class: "table-responsive" }, [
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "bg-yellow text-white" }, "Sentence type"),
                      createVNode("th", { class: "bg-yellow text-white" })
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "Present Perfect")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "HAVE/HAS + Been + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "3 cups of tea have been drunk today")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "Tea hasn\u2019t been drunk this week")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Has any tea been drunk?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Where has tea been drunk?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-yellow" }),
                      createVNode("td", { class: "bg-yellow" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "Past Perfect")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "HAD + Been + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "4 cups of tea had been drunk when you got home yesterday")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "4 cups of coffee hadn\u2019t been drunk when you got home yesterday")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Had any tea been drunk when I got home yesterday?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Why had tea been drunk when I got home last night?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-yellow" }),
                      createVNode("td", { class: "bg-yellow" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "Future Perfect")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-yellow fw-bold" }, "WILL + HAVE + Been + Past Participle")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td", null, "My cup of tea will have been drunk by the time you finish doing that")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td", null, "My cup of tea will not have been drunk by the time you finish doing that")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td", null, "Will your cup of tea have been drunk by the time I finish?")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td", null, "Why will tea have been drunk by the time I get home from work?")
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createVNode("div", { class: "text-center py-2 bg-green" }, [
            createVNode("h3", { class: "text-white fw-bold" }, "Have/Been"),
            createVNode("div", { class: "table-responsive" }, [
              createVNode(VTable, null, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "bg-green text-white" }, "Sentence type"),
                      createVNode("th", { class: "bg-green text-white" })
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "Present Perfect Continuous")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-green" }),
                      createVNode("td", { class: "bg-green" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "Past Perfect Continuous")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "bg-green" }),
                      createVNode("td", { class: "bg-green" })
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "Future Perfect Continuous")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td"),
                      createVNode("td", { class: "text-green fw-bold" }, "NOT POSSIBLE TO USE THE PASSIVE WITH THIS TENSE")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Positive"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Negative"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Closed question"),
                      createVNode("td")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Open WH question"),
                      createVNode("td")
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/passive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const passive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { passive as default };
//# sourceMappingURL=passive-Xqnc3PT5.mjs.map
