<script lang="ts">
	export let random: () => number = Math.random;

	let x = Math.floor(random() * 80) + 10,
		y = Math.floor(random() * 220) + 15,
		rot = Math.floor(random() * 120),
		col = Math.floor(random() * 3) + 1,
		scale = Math.floor(random() * 5 + 5) / 10;
</script>

<g
	style={`transform: translate(${x}vw, ${y}vh) rotate(${rot}deg) scale(${scale}); stroke: var(--theme-${col});`}
>
	<polygon class="tri " points="50 15, 100 100, 0 100" />
	<polygon class="tri inner " points="50 15, 100 100, 0 100" style="transform: scale(0.8);" />
</g>

<style lang="postcss">
	.tri {
		fill: none;
		transform-origin: 50px 70px;
		stroke-width: 0.2%;
		/*  */
	}

	.inner {
		/*  */
	}
</style>
