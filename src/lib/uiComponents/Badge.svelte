<script lang="ts">
	import tags from '../../../data-testid'
</script>

<span class="badge align-self-center" data-testid={tags.BADGE}>
	<slot />
</span>

<style lang="scss">
	@use '../styles/basics/colors';

	span {
		background-color: colors.$blue_pantone_293_012;
		color: colors.$text_01_high;
		font-weight: normal;
	}
</style>
