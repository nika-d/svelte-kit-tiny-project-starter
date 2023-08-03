<script lang="ts">
	import pictureOnTop from '../n-logo.png'
	import { menuContent } from '../menuContent'
</script>

<nav>
	<div class="container m-0 p-0">
		<a href="http://localhost:3000">
		<img class="navbar-brand mx-2" src={pictureOnTop} alt="kein bild zu sehen..." />
		</a>
	</div>
	<div>
		<ul class="list-unstyled">
			{#each menuContent.chapters as chapter}
				<li class="my-2">
					<a href={chapter.ownRoute.path}>
						{chapter.ownRoute.displayName}
					</a>

					<div>
						<ul class="list-unstyled">
							{#each chapter.containedRoutes as article}
								<li>
									<a href={article.path}>
										{article.displayName}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	img {
		max-height: 5em;
		max-width: 5em;
	}
</style>