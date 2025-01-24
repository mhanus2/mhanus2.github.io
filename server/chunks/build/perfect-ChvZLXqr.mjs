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
  _push(`<!--[--><h1 class="fw-bold text-center pb-5">Perfect tenses</h1><div></div><h2 class="fw-bold">Have</h2><div class="table-responsive"><table class="table table-bordered"><thead><tr><th class="bg-yellow text-white">Sentence type</th><th class="bg-yellow text-white"></th></tr></thead><tbody><tr><td></td><td class="text-yellow fw-bold">Present Perfect</td></tr><tr><td></td><td class="text-yellow fw-bold">HAVE/HAS + Past Participle</td></tr><tr><td>Positive</td><td>I have drunk 3 cups of tea today</td></tr><tr><td>Negative</td><td>I haven\u2019t drunk any tea this week</td></tr><tr><td>Closed question</td><td>Have you drunk my cup of tea?</td></tr><tr><td>Open WH question</td><td>Whose tea have you drunk?</td></tr><tr><td class="bg-yellow"></td><td class="bg-yellow"></td></tr><tr><td></td><td class="text-yellow fw-bold">Past Perfect</td></tr><tr><td></td><td class="text-yellow fw-bold">HAD + Past Participle</td></tr><tr><td>Positive</td><td>I had drunk 4 cups of tea when you got home yesterday</td></tr><tr><td>Negative</td><td>I hadn\u2019t drunk 4 cups of coffee when you got home yesterday</td></tr><tr><td>Closed question</td><td>Had you drunk any tea when I got home yesterday?</td></tr><tr><td>Open WH question</td><td>How many cups of tea had you drunk when I got home last night?</td></tr><tr><td class="bg-yellow"></td><td class="bg-yellow"></td></tr><tr><td></td><td class="text-yellow fw-bold">Future Perfect</td></tr><tr><td></td><td class="text-yellow fw-bold">WILL + HAVE + Past Participle</td></tr><tr><td>Positive</td><td>I will have drunk my cup of tea by the time you finish doing that</td></tr><tr><td>Negative</td><td>I will not have drunk my cup of tea by the time you finish doing that</td></tr><tr><td>Closed question</td><td>Will you have drunk your cup of tea by the time I finish?</td></tr><tr><td>Open WH question</td><td>How many cups of tea will you have drunk by the time I get home from work?</td></tr></tbody></table></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tenses/perfect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const perfect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { perfect as default };
//# sourceMappingURL=perfect-ChvZLXqr.mjs.map
