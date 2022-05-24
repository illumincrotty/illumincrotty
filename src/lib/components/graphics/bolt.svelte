<script lang="ts">
	export let random: () => number = Math.random;

	let x = Math.floor(random() * 80) + 10,
		y = Math.floor(random() * 160) + 15,
		rot = Math.floor(random() * 120),
		col = Math.floor(random() * 3) + 1;
</script>

<polygon
	points="20.972,0 5.076,15.803 10.972,15.803 6.44,27.793 22.716,11.989 16.819,11.989"
	style={`transform: translate(${x}%, ${y}%) rotate(${rot}deg) scale(2); fill: var(--theme-${col});`}
/>

<style lang="postcss">
</style>
