<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	import { path1dPerlin, path1dValue } from '$lib/scripts/generate1dPath';

	export const load: Load = async ({}) => {
		return {
			props: {
				pathPerlin1D: path1dPerlin(),
				pathValue1D: path1dValue()
			}
		};
	};
</script>

<script lang="ts">
	import perlin2d from '$lib/assets/perlin2d.png';
	import perlin2dTile from '$lib/assets/perlin2dTile.png';
	import value2d from '$lib/assets/value2d.png';
	import value2dTile from '$lib/assets/value2dTile.png';

	export let pathPerlin1D = '';
	export let pathValue1D = '';
</script>

<svelte:head>
	<title>Smooth Noise Generator</title>
</svelte:head>

<template>
	<main>
		<h1 class="fun-text">Smooth Noise Generator</h1>
		<div class="center-i stack full-width">
			<div class="center-i stack">
				<h2>One Dimensional Noise</h2>
				<div class="cluster">
					<figure>
						<figcaption>Perlin</figcaption>
						<svg class="noise-1d" viewBox="0 0 100 100" preserveAspectRatio="none">
							{#each Array.from({ length: 3 }) as _, index}
								<line
									x1="0%"
									y1={`${25 + 25 * index}%`}
									x2="100%"
									y2={`${25 + 25 * index}%`}
									class="svg-grid"
								/>
							{/each}

							<path d={pathPerlin1D} />
						</svg>
					</figure>

					<figure>
						<figcaption>Value</figcaption>
						<svg class="noise-1d" viewBox="0 0 100 100" preserveAspectRatio="none">
							{#each Array.from({ length: 3 }) as _, index}
								<line
									x1="0%"
									y1={`${25 + 25 * index}%`}
									x2="100%"
									y2={`${25 + 25 * index}%`}
									class="svg-grid"
								/>
							{/each}

							<path d={pathValue1D} />
						</svg>
					</figure>
				</div>

				<h2>Two Dimensional Noise</h2>
				<div class="cluster">
					<figure>
						<figcaption>Perlin</figcaption>
						<img class="noise-2d" src={perlin2d} alt="A smooth field of perlin noise" />
					</figure>
					<figure>
						<figcaption>Perlin Tiling</figcaption>
						<img
							class="noise-2d"
							src={perlin2dTile}
							alt="A smooth field of perlin noise that repeats in a grid"
						/>
					</figure>
					<figure>
						<figcaption>Value</figcaption>
						<img class="noise-2d" src={value2d} alt="A smooth field of value noise " />
					</figure>
					<figure>
						<figcaption>Value Tiling</figcaption>
						<img
							class="noise-2d"
							src={value2dTile}
							alt="A smooth field of value noise that repeats in a grid"
						/>
					</figure>
				</div>
			</div>
		</div>

		<div class="stack">
			<h2 class="fun-text">How this works</h2>
			<p>
				This random number generator is powered by a pseudo-random number generating algorithm
				called alea. Alea is in a class of <abbr title="Pseudo Random number generators">PRNGs</abbr
				>
				called Xor shift generators or shift-register generators. They rely on the binary operation XOR
				to function. You can find out more
				<a href="https://en.wikipedia.org/wiki/Xorshift" rel="external">here</a>. I wrote a library
				to generate random numbers because the browsers default method of doing in (Math.random) is
				slow, not seedable, and has different implemetations in different browsers. You can find the
				open source code on
				<a href="https://github.com/illumincrotty/alea-random" rel="external"> github</a>
				or import it from
				<a href="https://www.npmjs.com/package/alea-generator" rel="external">npm</a>. Have fun
				generating!
			</p>
		</div>
	</main>
</template>

<style lang="postcss">
	@import '$lib/style/every-layout/center.postcss';
	@import '$lib/style/every-layout/stack.postcss';

	main {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		width: 100%;
		padding: var(--padding);
		position: relative;
		max-width: var(--measure);
		margin: auto;
	}

	h1 {
		font-size: var(--font-3xl);
		border-bottom: var(--border-thin) solid var(--text);
	}

	.noise-1d {
		width: 100%;

		aspect-ratio: 2;
		border: var(--border-thin) solid var(--text);
		stroke-width: var(--border-thin);
	}
	.svg-grid {
		stroke-width: 0.5%;
		stroke: var(--text);
		opacity: 50%;
	}

	.noise-2d {
		aspect-ratio: 1;
		border: var(--border-thin) solid var(--text);
		stroke-width: var(--border-thin);
	}

	path {
		fill: none;
		stroke: var(--theme);
		stroke-width: calc(var(--border-thin) * 3);
		vector-effect: non-scaling-stroke;
	}

	.cluster {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: var(--padding);
		& > * {
			flex: 0 1 15rem;
		}
	}

	figcaption {
		text-align: center;
	}
</style>
