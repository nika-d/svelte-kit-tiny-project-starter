import adapter_static from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	onwarn(warning, defaultHandler) {
		if (warning.toString().includes('Unused CSS selector')) return
		if (warning.filename.includes('lottie')) return

		// handle all other warnings normally
		defaultHandler(warning)
	},
	kit: {
		adapter: adapter_static({
			fallback: '200.html'
		})
	}
}

export default config
