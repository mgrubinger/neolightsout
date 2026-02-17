export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","lightsout-192x192.png","lightsout-512x512.png","lightsout-white-256x256.png","lightsout-white-512x512.png","manifest.json","neolightsout.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.CkyxRNSG.js",app:"_app/immutable/entry/app.DRlQtPHx.js",imports:["_app/immutable/entry/start.CkyxRNSG.js","_app/immutable/chunks/DdXCAA1p.js","_app/immutable/chunks/qY-uN7Tc.js","_app/immutable/chunks/D36p4yF_.js","_app/immutable/chunks/FINsTMaC.js","_app/immutable/entry/app.DRlQtPHx.js","_app/immutable/chunks/qY-uN7Tc.js","_app/immutable/chunks/BCCEg2A_.js","_app/immutable/chunks/Y5rxD4Vh.js","_app/immutable/chunks/DjNViEsn.js","_app/immutable/chunks/FINsTMaC.js","_app/immutable/chunks/cI_JtYeh.js","_app/immutable/chunks/BCbcmJzB.js","_app/immutable/chunks/D36p4yF_.js","_app/immutable/chunks/BxVqiOuH.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/help","/imprint","/levels","/privacy-statement"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
