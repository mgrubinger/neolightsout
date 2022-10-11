import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    alias: {
      // an alias ending /* will only match
      // the contents of a directory, not the directory itself
      '$components/*': 'src/components/*'
    }
	},
  preprocess: [
		preprocess({
			postcss: true
		})
	],
};

export default config;
