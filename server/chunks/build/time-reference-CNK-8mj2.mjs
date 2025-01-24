import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VCard } from './VCard-C5tK0-Eq.mjs';
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
  _push(`<!--[--><h1 class="text-center pb-5">Time Reference</h1>`);
  _push(ssrRenderComponent(VCard, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VTable, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<thead${_scopeId2}><tr${_scopeId2}><th scope="col"${_scopeId2}>Tense</th><th scope="col"${_scopeId2}>Reference to time</th><th scope="col"${_scopeId2}>Examples</th></tr></thead><tbody${_scopeId2}><tr${_scopeId2}><th scope="row"${_scopeId2}>Present Simple</th><td${_scopeId2}>Regular habitual actions</td><td${_scopeId2}>Daily, weekly, monthly, twice a week, sometimes, usually etc.</td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Past Simple</th><td${_scopeId2}>Finished time</td><td${_scopeId2}>Yesterday, last night, last week, 2 months ago, 5 mins ago, when I was a child etc.</td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Future Simple</th><td${_scopeId2}>Any future time</td><td${_scopeId2}>Tomorrow, next year, in 5 minutes, after lunch, when the match starts etc.</td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Present Continuous</th><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>In the middle of doing something right now</li><li${_scopeId2}>Generally in the middle of doing something but not necessarily right now</li></ol></td><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>Noe need to specify time</li><li${_scopeId2}>These days, at the moment</li></ol> Often no need to specify time </td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Past Continuous</th><td${_scopeId2}>Two past actions at the same time <ol${_scopeId2}><li${_scopeId2}>In the middle of doing something in the past</li><li${_scopeId2}>when something happened or was happening</li></ol></td><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>May use a specific finished time for the continuous action in the past but not necessary to do so </li><li${_scopeId2}>when you called, at 3pm or while you were eating lunch</li></ol></td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Future Continuous</th><td${_scopeId2}>In the middle of doing something in the future at a specified time (The reference to time should be quite specific)</td><td${_scopeId2}>At 5 o\u2019clock, when you arrive, this time next week, in 2 hours time etc.</td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Present Perfect</th><td${_scopeId2}>Connecting a past action with NOW<br${_scopeId2}><br${_scopeId2}> A short time ago - JUST<br${_scopeId2}> Before now - ALREADY<br${_scopeId2}> Until now - YET (negative/questions)<br${_scopeId2}><br${_scopeId2}> Unfinished time </td><td${_scopeId2}>Often no need to specify time I have just eaten an apple I have already sent the message I haven\u2019t written the letter yet Recently, this week, this year, today, the past few days, lately, since Monday, since you were born etc. </td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Past Perfect</th><td${_scopeId2}>A past BEFORE a past <ol${_scopeId2}><li${_scopeId2}>Connecting a past action with</li><li${_scopeId2}>another past action</li></ol></td><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>When I arrived at the station or I arrived at the station at 5pm but</li><li${_scopeId2}>the train had (already) left</li></ol></td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Future Perfect</th><td${_scopeId2}>Connecting an action (that will be completed in the future) with a specified FUTURE time </td><td${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>By this time tomorrow I will have finished painting the kitchen</li><li${_scopeId2}>By the time you finish work, he will have drunk two pints of beer</li><li${_scopeId2}>By 5pm on Tuesday, they will have visited four different towns</li></ul></td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Present Perfect Continuous</th><td${_scopeId2}> Connecting a continuous action in the past which: <ol${_scopeId2}><li${_scopeId2}>was interrupted by an action in the past</li><li${_scopeId2}>finished (just) before an action in the past</li><li${_scopeId2}>caused the condition or status of something or someone in the past</li><li${_scopeId2}>happened for a specified period of time before another past action but did not stop </li></ol></td><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>Since Monday, since he got home etc. For 3 years, for a few days etc. All day, all my life etc. (without for)</li><li${_scopeId2}>No reference to time necessary</li><li${_scopeId2}>Recently, lately etc. or no reference to time necessary</li><li${_scopeId2}>Since September, for 6 months etc. All day, all my life etc. (without for)</li></ol></td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Past Perfect Continuous</th><td${_scopeId2}>Connecting a continuous action in the past which: <ol${_scopeId2}><li${_scopeId2}>was interrupted by an action in the past</li><li${_scopeId2}>finished (just) before an action in the past</li><li${_scopeId2}>caused the condition or status of something or someone in the past</li><li${_scopeId2}>happened for a specified period of time before another past action but did not stop </li></ol></td><td${_scopeId2}><ol${_scopeId2}><li${_scopeId2}>She had been watching TV for 30 minutes (with or without length of time) when the electricity cut out</li><li${_scopeId2}>It had (just) been raining (no length of time necessary) when she woke up</li><li${_scopeId2}>Dave was tired because he had been working hard all day (with or without length of time) </li><li${_scopeId2}>They had been playing for 40 minutes when the player was sent off</li></ol></td></tr><tr${_scopeId2}><th scope="row"${_scopeId2}>Future Perfect Continuous</th><td${_scopeId2}> Connecting a continuous action (that you will be in the middle of doing in the future) with a specified period of time in the FUTURE </td><td${_scopeId2}><ul${_scopeId2}><li${_scopeId2}> By 3pm I will have been painting the kitchen for 4 hours </li><li${_scopeId2}> By the time you finish work, he will have drunk two pints of beer </li><li${_scopeId2}> By 5pm on Tuesday, they will have visited four different towns </li></ul></td></tr></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { scope: "col" }, "Tense"),
                    createVNode("th", { scope: "col" }, "Reference to time"),
                    createVNode("th", { scope: "col" }, "Examples")
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Present Simple"),
                    createVNode("td", null, "Regular habitual actions"),
                    createVNode("td", null, "Daily, weekly, monthly, twice a week, sometimes, usually etc.")
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Past Simple"),
                    createVNode("td", null, "Finished time"),
                    createVNode("td", null, "Yesterday, last night, last week, 2 months ago, 5 mins ago, when I was a child etc.")
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Future Simple"),
                    createVNode("td", null, "Any future time"),
                    createVNode("td", null, "Tomorrow, next year, in 5 minutes, after lunch, when the match starts etc.")
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Present Continuous"),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "In the middle of doing something right now"),
                        createVNode("li", null, "Generally in the middle of doing something but not necessarily right now")
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "Noe need to specify time"),
                        createVNode("li", null, "These days, at the moment")
                      ]),
                      createTextVNode(" Often no need to specify time ")
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Past Continuous"),
                    createVNode("td", null, [
                      createTextVNode("Two past actions at the same time "),
                      createVNode("ol", null, [
                        createVNode("li", null, "In the middle of doing something in the past"),
                        createVNode("li", null, "when something happened or was happening")
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "May use a specific finished time for the continuous action in the past but not necessary to do so "),
                        createVNode("li", null, "when you called, at 3pm or while you were eating lunch")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Future Continuous"),
                    createVNode("td", null, "In the middle of doing something in the future at a specified time (The reference to time should be quite specific)"),
                    createVNode("td", null, "At 5 o\u2019clock, when you arrive, this time next week, in 2 hours time etc.")
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Present Perfect"),
                    createVNode("td", null, [
                      createTextVNode("Connecting a past action with NOW"),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" A short time ago - JUST"),
                      createVNode("br"),
                      createTextVNode(" Before now - ALREADY"),
                      createVNode("br"),
                      createTextVNode(" Until now - YET (negative/questions)"),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" Unfinished time ")
                    ]),
                    createVNode("td", null, "Often no need to specify time I have just eaten an apple I have already sent the message I haven\u2019t written the letter yet Recently, this week, this year, today, the past few days, lately, since Monday, since you were born etc. ")
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Past Perfect"),
                    createVNode("td", null, [
                      createTextVNode("A past BEFORE a past "),
                      createVNode("ol", null, [
                        createVNode("li", null, "Connecting a past action with"),
                        createVNode("li", null, "another past action")
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "When I arrived at the station or I arrived at the station at 5pm but"),
                        createVNode("li", null, "the train had (already) left")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Future Perfect"),
                    createVNode("td", null, "Connecting an action (that will be completed in the future) with a specified FUTURE time "),
                    createVNode("td", null, [
                      createVNode("ul", null, [
                        createVNode("li", null, "By this time tomorrow I will have finished painting the kitchen"),
                        createVNode("li", null, "By the time you finish work, he will have drunk two pints of beer"),
                        createVNode("li", null, "By 5pm on Tuesday, they will have visited four different towns")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Present Perfect Continuous"),
                    createVNode("td", null, [
                      createTextVNode(" Connecting a continuous action in the past which: "),
                      createVNode("ol", null, [
                        createVNode("li", null, "was interrupted by an action in the past"),
                        createVNode("li", null, "finished (just) before an action in the past"),
                        createVNode("li", null, "caused the condition or status of something or someone in the past"),
                        createVNode("li", null, "happened for a specified period of time before another past action but did not stop ")
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "Since Monday, since he got home etc. For 3 years, for a few days etc. All day, all my life etc. (without for)"),
                        createVNode("li", null, "No reference to time necessary"),
                        createVNode("li", null, "Recently, lately etc. or no reference to time necessary"),
                        createVNode("li", null, "Since September, for 6 months etc. All day, all my life etc. (without for)")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Past Perfect Continuous"),
                    createVNode("td", null, [
                      createTextVNode("Connecting a continuous action in the past which: "),
                      createVNode("ol", null, [
                        createVNode("li", null, "was interrupted by an action in the past"),
                        createVNode("li", null, "finished (just) before an action in the past"),
                        createVNode("li", null, "caused the condition or status of something or someone in the past"),
                        createVNode("li", null, "happened for a specified period of time before another past action but did not stop ")
                      ])
                    ]),
                    createVNode("td", null, [
                      createVNode("ol", null, [
                        createVNode("li", null, "She had been watching TV for 30 minutes (with or without length of time) when the electricity cut out"),
                        createVNode("li", null, "It had (just) been raining (no length of time necessary) when she woke up"),
                        createVNode("li", null, "Dave was tired because he had been working hard all day (with or without length of time) "),
                        createVNode("li", null, "They had been playing for 40 minutes when the player was sent off")
                      ])
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "Future Perfect Continuous"),
                    createVNode("td", null, " Connecting a continuous action (that you will be in the middle of doing in the future) with a specified period of time in the FUTURE "),
                    createVNode("td", null, [
                      createVNode("ul", null, [
                        createVNode("li", null, " By 3pm I will have been painting the kitchen for 4 hours "),
                        createVNode("li", null, " By the time you finish work, he will have drunk two pints of beer "),
                        createVNode("li", null, " By 5pm on Tuesday, they will have visited four different towns ")
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VTable, null, {
            default: withCtx(() => [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { scope: "col" }, "Tense"),
                  createVNode("th", { scope: "col" }, "Reference to time"),
                  createVNode("th", { scope: "col" }, "Examples")
                ])
              ]),
              createVNode("tbody", null, [
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Present Simple"),
                  createVNode("td", null, "Regular habitual actions"),
                  createVNode("td", null, "Daily, weekly, monthly, twice a week, sometimes, usually etc.")
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Past Simple"),
                  createVNode("td", null, "Finished time"),
                  createVNode("td", null, "Yesterday, last night, last week, 2 months ago, 5 mins ago, when I was a child etc.")
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Future Simple"),
                  createVNode("td", null, "Any future time"),
                  createVNode("td", null, "Tomorrow, next year, in 5 minutes, after lunch, when the match starts etc.")
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Present Continuous"),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "In the middle of doing something right now"),
                      createVNode("li", null, "Generally in the middle of doing something but not necessarily right now")
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "Noe need to specify time"),
                      createVNode("li", null, "These days, at the moment")
                    ]),
                    createTextVNode(" Often no need to specify time ")
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Past Continuous"),
                  createVNode("td", null, [
                    createTextVNode("Two past actions at the same time "),
                    createVNode("ol", null, [
                      createVNode("li", null, "In the middle of doing something in the past"),
                      createVNode("li", null, "when something happened or was happening")
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "May use a specific finished time for the continuous action in the past but not necessary to do so "),
                      createVNode("li", null, "when you called, at 3pm or while you were eating lunch")
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Future Continuous"),
                  createVNode("td", null, "In the middle of doing something in the future at a specified time (The reference to time should be quite specific)"),
                  createVNode("td", null, "At 5 o\u2019clock, when you arrive, this time next week, in 2 hours time etc.")
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Present Perfect"),
                  createVNode("td", null, [
                    createTextVNode("Connecting a past action with NOW"),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" A short time ago - JUST"),
                    createVNode("br"),
                    createTextVNode(" Before now - ALREADY"),
                    createVNode("br"),
                    createTextVNode(" Until now - YET (negative/questions)"),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode(" Unfinished time ")
                  ]),
                  createVNode("td", null, "Often no need to specify time I have just eaten an apple I have already sent the message I haven\u2019t written the letter yet Recently, this week, this year, today, the past few days, lately, since Monday, since you were born etc. ")
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Past Perfect"),
                  createVNode("td", null, [
                    createTextVNode("A past BEFORE a past "),
                    createVNode("ol", null, [
                      createVNode("li", null, "Connecting a past action with"),
                      createVNode("li", null, "another past action")
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "When I arrived at the station or I arrived at the station at 5pm but"),
                      createVNode("li", null, "the train had (already) left")
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Future Perfect"),
                  createVNode("td", null, "Connecting an action (that will be completed in the future) with a specified FUTURE time "),
                  createVNode("td", null, [
                    createVNode("ul", null, [
                      createVNode("li", null, "By this time tomorrow I will have finished painting the kitchen"),
                      createVNode("li", null, "By the time you finish work, he will have drunk two pints of beer"),
                      createVNode("li", null, "By 5pm on Tuesday, they will have visited four different towns")
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Present Perfect Continuous"),
                  createVNode("td", null, [
                    createTextVNode(" Connecting a continuous action in the past which: "),
                    createVNode("ol", null, [
                      createVNode("li", null, "was interrupted by an action in the past"),
                      createVNode("li", null, "finished (just) before an action in the past"),
                      createVNode("li", null, "caused the condition or status of something or someone in the past"),
                      createVNode("li", null, "happened for a specified period of time before another past action but did not stop ")
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "Since Monday, since he got home etc. For 3 years, for a few days etc. All day, all my life etc. (without for)"),
                      createVNode("li", null, "No reference to time necessary"),
                      createVNode("li", null, "Recently, lately etc. or no reference to time necessary"),
                      createVNode("li", null, "Since September, for 6 months etc. All day, all my life etc. (without for)")
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Past Perfect Continuous"),
                  createVNode("td", null, [
                    createTextVNode("Connecting a continuous action in the past which: "),
                    createVNode("ol", null, [
                      createVNode("li", null, "was interrupted by an action in the past"),
                      createVNode("li", null, "finished (just) before an action in the past"),
                      createVNode("li", null, "caused the condition or status of something or someone in the past"),
                      createVNode("li", null, "happened for a specified period of time before another past action but did not stop ")
                    ])
                  ]),
                  createVNode("td", null, [
                    createVNode("ol", null, [
                      createVNode("li", null, "She had been watching TV for 30 minutes (with or without length of time) when the electricity cut out"),
                      createVNode("li", null, "It had (just) been raining (no length of time necessary) when she woke up"),
                      createVNode("li", null, "Dave was tired because he had been working hard all day (with or without length of time) "),
                      createVNode("li", null, "They had been playing for 40 minutes when the player was sent off")
                    ])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("th", { scope: "row" }, "Future Perfect Continuous"),
                  createVNode("td", null, " Connecting a continuous action (that you will be in the middle of doing in the future) with a specified period of time in the FUTURE "),
                  createVNode("td", null, [
                    createVNode("ul", null, [
                      createVNode("li", null, " By 3pm I will have been painting the kitchen for 4 hours "),
                      createVNode("li", null, " By the time you finish work, he will have drunk two pints of beer "),
                      createVNode("li", null, " By 5pm on Tuesday, they will have visited four different towns ")
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/time-reference.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const timeReference = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { timeReference as default };
//# sourceMappingURL=time-reference-CNK-8mj2.mjs.map
