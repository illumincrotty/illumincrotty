<script lang="ts">
	import { aleaFactory } from 'alea-generator';
	import Bolt from './bolt.svelte';
	import Triangle from './triangle.svelte';

	export let triangleCount = 20;
	export let boltCount = 20;

	const rand = aleaFactory('rand');

	let dots = 7;
	let dotRatio = 100 / dots;

	let y: number = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="color-box">
	<svg width="100%" height="100%">
		<!-- grid -->
		<g style={`transform: translate(0px, ${y < 2 ? 0 : y}px);`}>
			{#each Array.from({ length: dots * 2 + 1 }) as _, row}
				{#each Array.from({ length: dots }) as _, col}
					<circle cx={`${dotRatio * (col + 0.5)}vw`} cy={`${dotRatio * (row + 0.5)}vw`} r=".2%" />
				{/each}
			{/each}
		</g>
	</svg>
	<svg width="100%" height="100%">
		<!-- triangles -->
		<g style={`transform: translate(0px, ${y < 2 ? 0 : -y * 2}px);`}>
			{#each Array.from({ length: triangleCount }) as _, index}
				<Triangle random={rand.random} />
			{/each}
		</g>

		<!-- bolts -->
		<g style={`transform: translate(0px, ${y < 2 ? 0 : -y * 0.6}px);`}>
			{#each Array.from({ length: boltCount }) as _, index}
				<Bolt random={rand.random} />
			{/each}
		</g>
	</svg>
</div>

<style lang="postcss">
	/*  */

	.color-box {
		position: absolute;
		height: 100vh;
		left: 0;
		right: 0;
		top: 0;
		z-index: -1;

		background: black;

		overflow-y: hidden;
	}

	svg {
		z-index: -1;
		position: absolute;
		vector-effect: non-scaling-stroke;
	}

	circle {
		fill: var(--theme);
	}
</style>
