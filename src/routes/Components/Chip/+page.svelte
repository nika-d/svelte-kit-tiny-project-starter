<script>
	import Chip from '$lib/uiComponents/Input/Chip.svelte'

	let active = false
</script>

<div class="row h-100 justify-content-center align-content-center">
	<div class="col-md-6 pt-3">
		<p>
			Hier ist ein
			{#if !active} in-aktiver{:else} aktiver{/if} Chip: <br />
			<Chip option="Aktiver Chip" bind:active />
		</p>
	</div>
</div>
