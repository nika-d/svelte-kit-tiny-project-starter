<script lang="ts">
	import { tooltip } from 'svooltip'
</script>

<div class="vh-100 d-flex justify-content-center align-items-center">
	<div class="row w-75">
		<div class="col">
			<h3>Hover the sentences!</h3>
			<span use:tooltip={{ content: 'I´m useful for the side-navigation.', placement: 'right' }}
				>Tooltip right is shifted a bit intentionally.</span
			>
			<span use:tooltip={{ content: 'Hier mal was zum besseren Verständnis. 💡' }}
				>Tooltip somewhere else.</span
			>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../../lib/styles/basics/sizing';

	.font-small {
		font-size: sizing.$font_size_caption;
	}
</style>
