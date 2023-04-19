import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$db: './src/data-store/',
			$compo: './src/components/',
			$img: './src/lib/media/'
		}
	}
};

export default config;
