import "clsx";
import { a as attr } from "../../chunks/attributes.js";
import { p as page } from "../../chunks/index3.js";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<nav class="svelte-1jnx671"><a href="/" class="title svelte-1jnx671">neo:lights:out</a> <ul class="svelte-1jnx671"><li class="svelte-1jnx671"><a${attr("aria-current", page.url.pathname === "/" ? "page" : void 0)} href="/" class="svelte-1jnx671">play</a></li> <li class="svelte-1jnx671"><a${attr("aria-current", page.url.pathname === "/levels" ? "page" : void 0)} href="/levels" class="svelte-1jnx671">levels</a></li> <li class="svelte-1jnx671"><a rel="prefetch"${attr("aria-current", page.url.pathname === "/help" ? "page" : void 0)} href="/help" class="svelte-1jnx671">help</a></li></ul></nav>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Nav($$renderer);
  $$renderer.push(`<!----> <main>`);
  children?.($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _layout as default
};
