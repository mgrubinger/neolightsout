import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Boz7LV23.js","_app/immutable/chunks/DjNViEsn.js","_app/immutable/chunks/qY-uN7Tc.js","_app/immutable/chunks/C5uvx8Ge.js","_app/immutable/chunks/BCbcmJzB.js","_app/immutable/chunks/CojMeVhh.js","_app/immutable/chunks/Cq6jlWCi.js","_app/immutable/chunks/BDw5NmHV.js","_app/immutable/chunks/DdXCAA1p.js","_app/immutable/chunks/D36p4yF_.js","_app/immutable/chunks/FINsTMaC.js"];
export const stylesheets = ["_app/immutable/assets/0.DqTlWqMQ.css"];
export const fonts = ["_app/immutable/assets/lexend-vietnamese-wght-normal.RvljkFvg.woff2","_app/immutable/assets/lexend-latin-ext-wght-normal.B6JQhE1e.woff2","_app/immutable/assets/lexend-latin-wght-normal.ci0D1wrL.woff2"];
