import '../../chunks/page-ssr_Cu7AHuBW.mjs';
import { f as createComponent, k as renderHead, l as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CMzfxz1c.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-eki2ap4l> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin | Eva Torres</title>${renderHead()}</head> <body data-astro-cid-eki2ap4l> ${renderComponent($$result, "StudioWrapper", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-eki2ap4l": true, "client:component-path": "/Users/josem/Documents/evatorresmoda-Resources/src/components/Studio", "client:component-export": "default" })} </body></html>`;
}, "/Users/josem/Documents/evatorresmoda-Resources/src/pages/admin/[...slug].astro", void 0);

const $$file = "/Users/josem/Documents/evatorresmoda-Resources/src/pages/admin/[...slug].astro";
const $$url = "/admin/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
