<script>
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte'
	import urlStore from '$lib/utils/url'
	import tags from '../../../data-testid'

	export let large = false

	let items = []
	let breadcrumbs = []

	const defaults = {
		disabled: false,
		href: '',
		text: '',
		class: '',
		props: {}
	}

	items = items.map((x) => ({ ...defaults, ...x }))

	$: {
		items = getBreadcrumbs($urlStore.pathItems)
	}

	function getBreadcrumbs(pathItems) {
		let subPath = '/'
		breadcrumbs = []
		pathItems?.forEach((pathElem) => {
			let pathElemDecoded = decodeURI(pathElem)
			subPath += pathElem + '/'
			breadcrumbs.push({
				disabled: false,
				text: pathElemDecoded,
				href: subPath
			})
		})
		return breadcrumbs
	}
</script>

<ul class="s-breadcrumbs m-0" class:large data-testid={tags.BREADCRUMBS}>
	{#each items as item, i}
		{#if i !== 0}
			<li class="divider">
				<ChevronRight />
			</li>
		{/if}
		<li>
			{#if item.href}
				<a
					href={item.href}
					class="s-breadcrumb-item {item.class} text-decoration-none text-white"
					class:disabled={item.disabled}
					{...item.props}
				>
					{item.text}
				</a>
			{:else}
				<span
					class="s-breadcrumb-item {items.class}"
					class:disabled={item.disabled}
					{...item.props}
				>
					{item.text}
				</span>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	@use '../styles/basics/fonts' as fonts;
	@use '../styles/basics/sizing';

	.s-breadcrumbs {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		flex: 0 1 auto;
		list-style-type: none;
		color: white;
		font-size: sizing.$font_size_body;

		.s-breadcrumb-item {
			align-items: center;
			display: inline-flex;
			text-decoration: none;

			&.disabled {
				color: var(--theme-text-disabled);
				pointer-events: none;
			}
		}

		li {
			align-items: center;
			display: inline-flex;

			&:nth-child(even) {
				padding: 0 sizing.$size_2;
				font-size: sizing.$font_size_title_3;
			}

			&:first-child {
				font-weight: fonts.$font-weight-bold;
			}

			&.divider {
				color: var(--theme-text-disabled);
				padding-right: sizing.$size_3;
			}
		}
	}
</style>
