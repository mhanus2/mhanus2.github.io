import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 class="fw-bold text-center pb-5">Perfect Continuous tenses</h1><div></div><h2 class="fw-bold">Have/Been</h2><div class="table-responsive"><table class="table table-bordered"><thead><tr><th class="bg-green text-white">Sentence type</th><th class="bg-green text-white"></th></tr></thead><tbody><tr><td></td><td class="text-green fw-bold">Present Perfect Continuous</td></tr><tr><td></td><td class="text-green fw-bold">HAVE/HAS + BEEN + ___ING</td></tr><tr><td>Positive</td><td>I have been drinking tea all day</td></tr><tr><td>Negative</td><td>I haven\u2019t been drinking your tea!</td></tr><tr><td>Closed question</td><td>Have you been drinking my tea?</td></tr><tr><td>Open WH question</td><td>Who has been drinking my tea?</td></tr><tr><td class="bg-green"></td><td class="bg-green"></td></tr><tr><td></td><td class="text-green fw-bold">Past Perfect Continuous</td></tr><tr><td></td><td class="text-green fw-bold">HAD + BEEN + ___ING</td></tr><tr><td>Positive</td><td>I had been drinking coffee for 20 years when I gave it up</td></tr><tr><td>Negative</td><td>I hadn\u2019t been drinking coffee for long when I gave it up</td></tr><tr><td>Closed question</td><td>Had you been drinking coffee long when you gave it up?</td></tr><tr><td>Open WH question</td><td>How long had you been drinking coffee when you gave it up?</td></tr><tr><td class="bg-green"></td><td class="bg-green"></td></tr><tr><td></td><td class="text-green fw-bold">Future Perfect Continuous</td></tr><tr><td></td><td class="text-green fw-bold">WILL + HAVE + BEEN + ___ING</td></tr><tr><td>Positive</td><td>I will have been drinking tea for exactly 20 years by the 1st of April</td></tr><tr><td>Negative</td><td> I will not have been drinking tea long when that new brand comes out </td></tr><tr><td>Closed question</td><td>Will you have been drinking tea long when I get home from work?</td></tr><tr><td>Open WH question</td><td> How long will you have been drinking tea at the tea shop when it closes next month? </td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenses/perfect-continuous.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const perfectContinuous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { perfectContinuous as default };
//# sourceMappingURL=perfect-continuous-CRbcTJ9m.mjs.map
