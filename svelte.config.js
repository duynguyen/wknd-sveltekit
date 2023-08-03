import preprocess from 'svelte-preprocess';
import azure from 'svelte-adapter-azure-swa';
//import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: azure(),
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	]
};

export default config;
