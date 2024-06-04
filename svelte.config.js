// import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter()
		adapter: adapterStatic({
			pages: 'build',
			assets: 'build',
			fallback: 'app.html', // required to generate app.html in build folder
			precompress: false,
			strict: false
		})
	}
};

export default config;
