import { derived, writable } from 'svelte/store'

function extractPathItems(pathname: string) {
	return pathname
		.split('/')
		.filter(function (pathElem) {
			return pathElem != ''
		})
		.map((pathElem) => decodeURI(pathElem))
}

function createUrlStore(ssrUrl: string) {
	if (typeof window === 'undefined') {
		const { subscribe } = writable(ssrUrl)
		return { subscribe }
	}

	const href = writable(window.location.href)

	const originalPushState = history.pushState
	const originalReplaceState = history.replaceState

	const updateHref = () => href.set(window.location.href)

	history.pushState = function (...args) {
		originalPushState.apply(this, args)
		updateHref()
	}

	history.replaceState = function (...args) {
		originalReplaceState.apply(this, args)
		updateHref()
	}

	window.addEventListener('popstate', updateHref)
	window.addEventListener('hashchange', updateHref)

	return {
		subscribe: derived(href, ($href) => {
			const url = new URL($href)
			return {
				url: url,
				pathItems: extractPathItems(url.pathname)
			}
		}).subscribe
	}
}

export default createUrlStore('')
