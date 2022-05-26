<script lang="ts">
	import type { loadingSymbol } from '$lib/components/loading/loader.svelte';
	import Loader from '$lib/components/loading/loader.svelte';
	import Overlay from './overlay.svelte';

	export let symbol: loadingSymbol = 'dots';
</script>

<Overlay>
	<section>
		<div>
			<Loader {symbol} size="10rem" />
		</div>
	</section>
</Overlay>

<style lang="postcss">
	section {
		background-color: unset;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		color: var(--theme);
	}
</style>
