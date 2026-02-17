import { a1 as ensure_array_like, _ as store_get, $ as unsubscribe_stores } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import { e as escape_html } from "../../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { p as progress } from "../../../chunks/stores.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let total = Array.from({ length: 51 });
    $$renderer2.push(`<h1>Levels</h1> <ol class="svelte-1gxtxs4"><!--[-->`);
    const each_array = ensure_array_like(total);
    for (let level = 0, $$length = each_array.length; level < $$length; level++) {
      each_array[level];
      const isDone = !!store_get($$store_subs ??= {}, "$progress", progress).includes(level);
      $$renderer2.push(`<li class="svelte-1gxtxs4"><span class="svelte-1gxtxs4">`);
      if (isDone) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`✅`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->  Level ${escape_html(level + 1)}</span> <button type="button" class="primary-button tiny">Play `);
      if (isDone) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`again`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button></li>`);
    }
    $$renderer2.push(`<!--]--></ol> <hr/> <p>Reset game progress?</p> <button type="button" class="primary-button tiny">Reset</button> <hr/>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
