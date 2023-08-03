<script lang="ts">
	import tags from '../../../data-testid'
	import Pencil from 'svelte-material-icons/Pencil.svelte'
	import Bin from 'svelte-material-icons/TrashCan.svelte'

	export let onEdit, onDelete
</script>

<div class="d-flex justify-content-center align-items-center gap-1">
	<button
		class="btn btn-primary btn-xs small-icon"
		type="button"
		data-testid={tags.EDIT_BUTTON}
		on:click={() => onEdit()}
		on:keypress={() => onEdit()}
	>
		<Pencil />
	</button>
	<button
		class="btn btn-primary btn-xs small-icon"
		type="button"
		data-testid={tags.DELETE_BUTTON}
		on:click={() => onDelete()}
		on:keypress={() => onDelete()}
	>
		<Bin />
	</button>
</div>

<style lang="scss">
	@use '../styles/basics/colors';
	@use '../styles/basics/sizing';

	.small-icon {
		font-size: sizing.$font_size_caption;
	}
</style>
