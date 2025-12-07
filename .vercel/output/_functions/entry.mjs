import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_v1Iu-xPT.mjs';
import { manifest } from './manifest_XBCMGvjT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/_---slug_.astro.mjs');
const _page2 = () => import('./pages/coleccion/_category_.astro.mjs');
const _page3 = () => import('./pages/coleccion.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/legal/accesibilidad.astro.mjs');
const _page6 = () => import('./pages/legal/aviso-legal.astro.mjs');
const _page7 = () => import('./pages/legal/cookies.astro.mjs');
const _page8 = () => import('./pages/legal/privacidad.astro.mjs');
const _page9 = () => import('./pages/legal/terminos.astro.mjs');
const _page10 = () => import('./pages/nosotros.astro.mjs');
const _page11 = () => import('./pages/producto/_slug_.astro.mjs');
const _page12 = () => import('./pages/sitemap.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.0_@types+node@24.10.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._69e449c22ba8b78809a9baec2c5571a7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/[...slug].astro", _page1],
    ["src/pages/coleccion/[category].astro", _page2],
    ["src/pages/coleccion.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/legal/accesibilidad.astro", _page5],
    ["src/pages/legal/aviso-legal.astro", _page6],
    ["src/pages/legal/cookies.astro", _page7],
    ["src/pages/legal/privacidad.astro", _page8],
    ["src/pages/legal/terminos.astro", _page9],
    ["src/pages/nosotros.astro", _page10],
    ["src/pages/producto/[slug].astro", _page11],
    ["src/pages/sitemap.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2c09b77a-332f-4655-b46d-4f2c835c1d57",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
