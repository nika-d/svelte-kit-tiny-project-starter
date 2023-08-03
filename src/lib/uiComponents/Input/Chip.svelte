<svelte:options accessors />

<script lang="ts">
	import tags from '../../../../data-testid'

	export let option = '',
		active = false,
		disabled = false

	const toggle = () => {
		if (!disabled) active = !active
	}

	$: active = disabled ? false : active
</script>

<div
	class="chip d-inline-flex align-items-center rounded-pill"
	class:active
	class:disabled
	on:click={toggle}
	on:keypress={toggle}
	data-testid={tags.CHIP}
	role="checkbox"
	aria-checked={active}
	tabindex="0"
>
	{option}
</div>

<style lang="scss">
	@use '../../styles/basics/sizing.scss';
	@use '../../styles/basics/colors.scss';

	.chip {
		cursor: pointer;
		color: colors.$blue_pantone_293_100;
		box-sizing: border-box;
		border: 1px solid transparent;
		padding-left: sizing.$size_4;
		padding-right: sizing.$size_4;
		background-color: colors.$blue_pantone_293_012;
		min-height: 2.3 * sizing.$size_4;
		user-select: none;
	}

	.active {
		border: 1px solid colors.$blue_pantone_293_100;
	}

	.disabled {
		border: 1px solid colors.$grey_pantone_430_100 !important;
		background-color: colors.$white !important;
		color: colors.$grey_pantone_430_100 !important;
		cursor: not-allowed !important;
	}
</style>
