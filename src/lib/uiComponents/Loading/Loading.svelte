<script lang="ts">
	import texts from '$lib/uiTexts/allgemein.json'
	import animation from './loading_animation_lottie.json'
	import animationInverted from './loading_animation_inverted_lottie.json'
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'

	export let message = texts.LOADING_GENERIC,
		hideMessage = false,
		light = false,
		noBackdrop = false,
		iconSize = '60'
</script>

<div class="loading-wrapper" class:light class:noBackdrop>
	<div>
		<LottiePlayer
			src={light ? animation : animationInverted}
			autoplay
			loop
			renderer="svg"
			background="transparent"
			height={iconSize}
			width={iconSize}
			controls=""
			controlsLayout=""
		/>
	</div>
	{#if !hideMessage}
		<div class="mt-4 message text-center">
			{message}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '../../styles/basics/colors' as *;

	.loading-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: $text_01_high;
		color: white;

		&.light {
			color: $text_01_high;
			background: white;
		}

		&.noBackdrop {
			background: transparent !important;
		}
	}
</style>
