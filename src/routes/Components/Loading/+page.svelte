<script lang="ts">
	import Loading from '$lib/uiComponents/Loading/Loading.svelte'
</script>

<div class="row h-100 justify-content-center align-items-center">
	<div class="col square">
		<Loading />
	</div>
	<div class="col square">
		<Loading light hideMessage />
	</div>
	<div class="col square">
		<Loading message="Andere Daten werden geladen" />
	</div>
	<div class="col square">
		<Loading light hideMessage iconSize="20" />
	</div>
	<div class="col square blue">
		<Loading hideMessage iconSize="40" noBackdrop />
	</div>
</div>

<style lang="scss">
	@use '../../../lib/styles/basics/colors' as *;

	.square {
		width: 150px;
		height: 150px;
	}

	.blue {
		background: $blue_pantone_293_100;
	}
</style>
