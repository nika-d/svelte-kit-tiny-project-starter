<script lang="ts">
	import Bug from 'svelte-material-icons/Bug.svelte'
</script>

<div class="h-100">
	<div class="row justify-content-center align-items-center">
		<div class="col">
			<table class="table">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col">Label only</th>
						<th scope="col">Icon only</th>
						<th scope="col">Disabled</th>
						<th scope="col">Large and small</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">contained/primary</th>
						<td>
							<button class="btn" type="button">Share</button>
						</td>
						<td>
							<button class="btn" type="button">
								<Bug />
							</button>
						</td>
						<td>
							<button type="button" class="btn" disabled>Share</button>
						</td>
						<td>
							<button class="btn btn-lg" type="button">
								Button mit seeeeeeeeeeehr langem Text (noch länger)
							</button>
							<button class="btn btn-xs" type="button">
								<Bug />
							</button>
						</td>
					</tr>
					<tr>
						<th scope="row">outlined/secondary</th>
						<td>
							<button class="btn btn-outlined" type="button">Share</button>
						</td>
						<td>
							<button class="btn btn-outlined" type="button">
								<Bug />
							</button>
						</td>
						<td>
							<button class="btn btn-outlined" disabled type="button">Share</button>
						</td>
						<td>
							<button class="btn btn-outlined btn-lg" type="button">Share</button>
							<button class="btn btn-outlined btn-xs" type="button">
								<Bug />
							</button>
						</td>
					</tr>
					<tr>
						<th scope="row">ghost/tertiary</th>
						<td>
							<button class="btn btn-ghost" type="button">Share</button>
						</td>
						<td>
							<button class="btn btn-ghost" type="button">
								<Bug />
							</button>
						</td>
						<td>
							<button class="btn btn-ghost" disabled type="button">Share</button>
						</td>
						<td>
							<button class="btn btn-ghost btn-lg" type="button">Share</button>
							<button class="btn btn-ghost btn-xs" type="button">
								<Bug />
							</button>
						</td>
					</tr>
					<tr>
						<th scope="row">toggled</th>
						<td>
							<button class="btn btn-toggled" data-bs-toggle="button">Share</button>
						</td>
						<td>
							<button class="btn btn-toggled" data-bs-toggle="button">
								<Bug />
							</button>
						</td>
						<td>
							<button class="btn btn-toggled" disabled data-bs-toggle="button">Share</button>
						</td>
						<td>
							<button class="btn btn-toggled btn-lg" data-bs-toggle="button">Share</button>
							<button class="btn btn-toggled btn-xs" data-bs-toggle="button">
								<Bug />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
