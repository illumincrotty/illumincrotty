<script lang="ts">
	// template

	import { base } from '$app/paths';
	import ColorShift from '$lib/components/graphics/colorShift.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet" />
</svelte:head>
<ColorShift />

<main>
	<div class="page-shift">
		<div class="card" style="max-width:100%;">
			<div class="box center-i" style="aspect-ratio: auto 16/9; width:100%; min-height:20rem;">
				<h1>Brian Crotty</h1>
				<p>Fullstack Web Developer.</p>
			</div>
		</div>
	</div>
	<div class="inner-body">
		<div class="box stack" style="max-width:calc(var(--measure)*2/3); align-self: center;">
			<div class="fun-text" style="font-size:var(--font-4xl);">Hey there!</div>

			<span>
				This site is a quick little portfolio I threw together using svelte. This site uses some
				very new web features so please use an updated modern browser if you want to full
				experience. Enjoy!
			</span>
		</div>
		<h2 class="fun-text" style="text-align: center; font-size: var(--font-2xl);">Projects</h2>
		<div class="grid-cluster">
			<div class="card box"><a href={`${base}/random`}>Random Number Generator</a></div>
			<a class="card box" href={`${base}/squeaker`}>Smooth Noise Generator</a>
			<a class="card box" href="spotify-waveform" rel="external">Spotify Data Deep Dive</a>
			<a class="card box" href="https://github.com/illumincrotty/Dead-Simple-PubSub" rel="external"
				>Type Safe Pub-Sub Implementation</a
			>
			<a class="card box" href="https://github.com/illumincrotty/tiny-inflate" rel="external"
				>A very lightweight Data Decompression Tool</a
			>
			<a class="card box" href="https://github.com/illumincrotty/tinydate" rel="external"
				>A Dependency Free Date Formatter</a
			>
		</div>
	</div>
</main>

<style lang="postcss">
	@import '$lib/style/every-layout/center.postcss';
	@import '$lib/style/every-layout/stack.postcss';
	.page-shift {
		width: 100%;
		height: calc(90vh - 2 * var(--padding));
		margin-top: calc(var(--padding) * 2);
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.card {
		border: 1rem solid transparent;
		border-width: 1.5rem 0.5rem 0.5rem;
		border-image: linear-gradient(
			20deg,
			var(--theme-1) 0%,
			var(--theme-2) 50%,
			var(--theme-3) 100%
		);
		border-image-slice: 1;
		box-shadow: var(--shadow-elevation-medium);
		background: rgb(0, 0, 0, 0.8);
		color: var(--light);
		margin-left: var(--padding);
		margin-right: var(--padding);
	}

	.grid-cluster {
		display: flex;
		flex-wrap: wrap;
		gap: var(--padding);
		width: 100%;
		padding: var(--padding);

		justify-content: center;

		& > * {
			flex: 0 1 auto;
			flex-basis: 18rem;
			min-height: 12rem;
		}
	}
	h1 {
		font-family: 'Shrikhand';
		font-size: 4em;
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.inner-body {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		width: 100%;
		background: var(--bg);
	}
</style>
