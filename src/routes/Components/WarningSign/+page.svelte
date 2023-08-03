<script lang="ts">
	import WarningSign from '$lib/uiComponents/WarningSign.svelte'
	import { AlertType } from '$lib/common/AlertStore'
	import tags from '../../../../data-testid'
</script>

<div
	class="row h-100 justify-content-center align-content-center"
	data-testid={tags.SHOWCASE.WARNING_SIGN}
>
	<div class="col-md-6 bg-light pt-3">
		<div class="p-3">
			Small Warning (info type):
			<div class="col font-small sm-1">
				<WarningSign warningText="This is a small warning" type={AlertType.INFO} />
			</div>
		</div>

		<div class="p-3">
			Warning (warning type):
			<div class="col font-normal">
				<WarningSign warningText="Warning" type={AlertType.WARNING} />
			</div>
		</div>

		<div class="p-3">
			Big Warning (error type):
			<div class="col font-big">
				<WarningSign warningText="Big Warning (error)" type={AlertType.ERROR} />
			</div>
		</div>

		<div class="p-3">
			Big Warning (success type):
			<div class="col font-big">
				<WarningSign warningText="Big Warning (error)" type={AlertType.SUCCESS} />
			</div>
		</div>

		<div class="p-3">
			Big Warning (button primary caption type):
			<div class="col font-big">
				<WarningSign warningText="Big Warning (error)" type={AlertType.BUTTON_PRIMARY_CAPTION} />
			</div>
		</div>

		<div class="p-3">
			Big Warning (no type):
			<div class="col font-big">
				<WarningSign warningText="Big Warning (error)" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../../lib/styles/basics/sizing';

	.font-small {
		font-size: sizing.$font_size_caption;
	}

	.font-normal {
		font-size: sizing.$font_size_body;
	}

	.font-big {
		font-size: sizing.$font_size_large_title;
	}
</style>
