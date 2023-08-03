<script lang="ts">
	import { onMount } from 'svelte'
	import Navigation from '$lib/showcase/navigation/Navigation.svelte'

	let bootstrap, lottie
	onMount(async (): Promise<void> => {
		bootstrap = await import('bootstrap')
		lottie = await import('@lottiefiles/svelte-lottie-player')
	})
</script>

<svelte:head>
	<style lang="scss">
		@use '../lib/styles/main';
	</style>
</svelte:head>

{#if bootstrap && lottie}
	<div class="vh-100 container-fluid m-0 p-0">
		<div class="row m-0 p-0 gx-0 gy-0">
			<div class="col-md m-0 p-0 sidenav">
				<Navigation />
			</div>
			<div class="col-md p-3 p-md-0">
				<slot />
			</div>
		</div>
	</div>

	<style lang="scss">
		@use '../lib/uiComponents/layout/frame';
		.sidenav {
			max-width: frame.$sidebar-open-width;
		}
	</style>
{/if}
