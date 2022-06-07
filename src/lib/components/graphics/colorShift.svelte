<script lang="ts">
	import { aleaFactory } from 'alea-generator';
	import Bolt from './bolt.svelte';
	import Triangle from './triangle.svelte';

	export let triangleCount = 20;
	export let boltCount = 20;

	const rand = aleaFactory('rand');

	let dots = 9;
	let dotRatio = 100 / dots;

	let y: number = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="color-box">
	<svg class="circle-grid">
		<!-- grid -->
		{#each Array.from({ length: dots * 2 + 1 }) as _, row}
			{#each Array.from({ length: dots }) as _, col}
				<circle
					cx={`${Math.floor(dotRatio * (col + 0.5))}vw`}
					cy={`${Math.floor(dotRatio * (row + 0.5))}vw`}
					r=".2%"
				/>
			{/each}
		{/each}
	</svg>
	<svg class="non-grid">
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

		background: white;

		overflow-y: hidden;

		@media (prefers-color-scheme: dark) {
			background: black;
		}
	}

	svg {
		vector-effect: non-scaling-stroke;
	}

	.non-grid {
		position: absolute;

		width: 100%;
		height: 100vh;
	}
	.circle-grid {
		position: fixed;
		width: 100%;
		height: 90vh;
		overflow-y: hidden;
	}

	circle {
		fill: var(--theme);
	}
</style>
