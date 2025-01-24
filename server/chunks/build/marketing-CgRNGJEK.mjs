import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VBtn } from './VBtn-BqWhmsba.mjs';
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
import './dimensions-DxHl50uj.mjs';
import './density-6PUP58Wc.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<!--[--><h2 class="pb-5">Welcome to a NEW way of learning English grammar</h2><p> This WEB APP will systematically guide you through a comprehensive review of the English Tenses by focussing on the Primary Auxiliary Verbs which will teach you to BUILD BETTER SENTENCES. </p><p> Learning the English Tenses is the foundation to understanding English. It is also the key to making good quality sentences. It is a complex process that usually requires years of studying to fully grasp. </p><p> However, we have developed a shortcut to learning the English tenses. This system was discovered by an experienced Native English teacher who, over many years, fine tuned his methods of teaching English to create a logical system of understanding the English tenses. </p><p> You will also be guided by our CHAT BOT which is always on standby to assist. Just click on it and ask for help to clarify something. The CHAT BOT is designed to assist you with any queries you may have in relation to the content of the web app. Consider it your personal tutor! </p><p> When you start working through this WEB APP, you will quickly comprehend the system we have developed to help you grasp the English tenses. We have removed the pain of trying to understand something which, until now, was very complicated and often illogical. </p><p> The system will also teach you word order which, in the English language, is very strict and an important part of constructing good quality sentences. </p><p> The interactive content will take you through each tense to help you understand the grammar principles, guided by the CHAT BOT which will answer any queries you may have. You will experience visually impactive time lines and various examples relating to the tense you are studying. </p><p> Following the grammar input, you will engage in interactive gap filling exercises to drill the tense, receiving a grade and feedback for each exercise. The CHAT BOT is designed to provide extra gap filling exercises should you need it. Just ask it for more! </p><p> Once you have mastered the English tenses, you will be able to make good quality sentences. </p><p> You will also have a firm foundation to build your English upon, which is so important to learning the language quickly and effectively. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VBtn, {
          color: "success",
          class: "mt-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` BUY NOW FOR JUST \xA32.99 `);
            } else {
              return [
                createTextVNode(" BUY NOW FOR JUST \xA32.99 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VBtn, {
            color: "success",
            class: "mt-3"
          }, {
            default: withCtx(() => [
              createTextVNode(" BUY NOW FOR JUST \xA32.99 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/marketing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const marketing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { marketing as default };
//# sourceMappingURL=marketing-CgRNGJEK.mjs.map
