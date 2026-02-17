import { Z as stringify, _ as store_get, $ as unsubscribe_stores, a0 as head, a1 as ensure_array_like } from "../../chunks/index2.js";
import { c as currentLevel, m as moves, i as items } from "../../chunks/stores.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/context.js";
function Knob($$renderer, $$props) {
  let { active, children } = $$props;
  $$renderer.push(`<button class="knob svelte-1wmwmfc"${attr("data-active", active)}${attr("aria-label", `${stringify(active ? "light" : "dark")} button`)}>`);
  children?.($$renderer);
  $$renderer.push(`<!----></button>`);
}
function Bottombar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { showNextLevelDialog = false } = $$props;
    $$renderer2.push(`<div class="bottombar svelte-19zkib8"${attr("data-next-level", showNextLevelDialog)}>`);
    if (showNextLevelDialog) {
      $$renderer2.push("<!--[-->");
      if (store_get($$store_subs ??= {}, "$currentLevel", currentLevel) + 1 >= 50) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="svelte-19zkib8">🎉🎉🎉 Congratulations! 🎉🎉🎉</h2> <p style="text-align: center">You made it! You finished all the levels! I hope you enjoyed the game. If you want to play
				again, hit the reset button in <a href="help">Help</a></p> <p>Let others know how you liked it too! <a href="https://twitter.com/intent/tweet/?text=check+out+this+fun+game!&amp;url=https%3A%2F%2Fneolightsout.grooovinger.com" target="_blank" rel="noopener noreferrer">Share on Twitter</a></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<h2 class="svelte-19zkib8">You finished Level ${escape_html(store_get($$store_subs ??= {}, "$currentLevel", currentLevel) + 1)} <br/> in ${escape_html(store_get($$store_subs ??= {}, "$moves", moves))} moves!</h2> <button class="primary-button">Next Level</button>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="bottombar-element stats svelte-19zkib8"><div class="val svelte-19zkib8">${escape_html(store_get($$store_subs ??= {}, "$currentLevel", currentLevel) + 1)}</div> <div class="label svelte-19zkib8">Level</div></div> <div class="bottombar-element stats svelte-19zkib8"><div class="val svelte-19zkib8">${escape_html(store_get($$store_subs ??= {}, "$moves", moves))}</div> <div class="label svelte-19zkib8">Moves</div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    let showNextLevelDialog = false;
    if (store_get($$store_subs ??= {}, "$moves", moves) == 0) items.loadLevel(store_get($$store_subs ??= {}, "$currentLevel", currentLevel));
    store_get($$store_subs ??= {}, "$items", items).every((e) => e.active === false);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Play | neo:lights:out</title>`);
      });
    });
    $$renderer2.push(`<section id="grid" class="svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$items", items));
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      Knob($$renderer2, {
        active: item.active
      });
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="primary-button tiny restart-button svelte-1uha8ag"${attr("disabled", store_get($$store_subs ??= {}, "$moves", moves) == 0 || showNextLevelDialog, true)} aria-label="Restart level">↺</button>`);
    }
    $$renderer2.push(`<!--]--></section> `);
    Bottombar($$renderer2, { showNextLevelDialog });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
