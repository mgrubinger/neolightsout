
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/help" | "/imprint" | "/levels" | "/privacy-statement";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/help": Record<string, never>;
			"/imprint": Record<string, never>;
			"/levels": Record<string, never>;
			"/privacy-statement": Record<string, never>
		};
		Pathname(): "/" | "/help" | "/help/" | "/imprint" | "/imprint/" | "/levels" | "/levels/" | "/privacy-statement" | "/privacy-statement/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/lightsout-192x192.png" | "/lightsout-512x512.png" | "/lightsout-white-256x256.png" | "/lightsout-white-512x512.png" | "/manifest.json" | "/neolightsout.png" | string & {};
	}
}