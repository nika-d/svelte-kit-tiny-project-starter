<script>
	let checked
	const checkedByJS = true
</script>

<div class="vh-100 d-flex justify-content-center align-items-center">
	<div class="row w-75">
		<div class="col">
			<div class="form-check form-switch">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" bind:checked />
					Der switch hat den Wert {checked}.
				</label>
			</div>
			<div class="form-check form-switch">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" checked={checkedByJS} />
					Dieser switch wurde aus JavaScript heraus checked gesetzt.
				</label>
			</div>
			<div class="form-check form-switch">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" disabled />
					Disabled
				</label>
			</div>
			<div class="form-check form-switch">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" checked disabled />
					Generell ist ein Switch etwas größer als der Text drum rum.
				</label>
			</div>
			<div class="form-check-reverse form-switch">
				<label class="form-check-label">
					Erst das Label, dann den Switch
					<input class="form-check-input" type="checkbox" checked />
				</label>
			</div>
			<span class="form-check form-switch fs-caption">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" />
					kann auch mal ganz klein sein
				</label>
			</span>
			<div class="form-check form-switch fs-4">
				<label class="form-check-label">
					<input class="form-check-input" type="checkbox" />
					Im Kontext größerer Schrift
				</label>
			</div>
		</div>
	</div>
</div>
