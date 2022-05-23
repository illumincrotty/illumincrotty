import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const mode = process.env.NODE_ENV;
const dev = mode === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			typescript: true,
		}),
	],
	kit: {
		adapter: adapter({}),
		paths: {
			base: dev ? '' : '',
		},
		appDir: 'internal',
		vite: {},
	},
};

export default config;
