<script lang="ts">
	import AlertOutline from 'svelte-material-icons/AlertOutline.svelte'
	import { tooltip } from 'svooltip'
	import { AlertType } from '$lib/common/AlertStore'
	import tags from '../../../data-testid'

	export let warningText = '',
		type: AlertType = AlertType.WARNING,
		data: unknown = undefined,
		showWarningFunction: (data: unknown) => boolean = () => true,
		defaultWarningSize = false

	$: showWarning = showWarningFunction(data)
</script>

{#if showWarning}
	<span class="w-auto h-auto {type}" class:defaultWarningSize data-testid={tags.WARNING_SIGN}>
		{#if warningText !== ''}
			<div
				use:tooltip={{ content: warningText, placement: 'top' }}
				data-testid={tags.TOOLTIP_TRIGGERER}
				class="d-inline"
			>
				<AlertOutline />
			</div>
		{:else}
			<AlertOutline />
		{/if}
	</span>
{/if}

<style lang="scss">
	@use '../styles/basics/colors';
	@use '../styles/basics/sizing';

	.defaultWarningSize {
		font-size: sizing.$font_size_title_2;
		line-height: normal;
	}

	.error {
		color: colors.$function_error_red;
	}

	.warning {
		color: colors.$function_warning_orange;
	}

	.info {
		color: colors.$blue_pantone_293_100;
	}

	.success {
		color: colors.$function_success_green;
	}

	.inactive {
		color: colors.$grey_pantone_430_100;
	}

	.button-primary-caption {
		color: colors.$white;
	}
</style>
