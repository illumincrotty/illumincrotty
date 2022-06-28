<script lang="ts">
	import { base } from '$app/paths';

	import Base from '$lib/components/layout/base.svelte';
	import Header from '$lib/components/layout/header.svelte';

	export const title = 'Example';
	let links: { href: string; label: string; external?: boolean }[] = [
		{
			href: 'https://illumincrotty.github.io/spotify-waveform/',
			label: 'Spotify Data Analysis',
			external: true
		}
	];
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={`${base}/favicon.svg`} />
</svelte:head>

<Base>
	<Header {links} />

	<slot>
		<!-- <main class="stack center-i" id="page-main" /> -->
	</slot>
	<footer />
</Base>

<style lang="postcss">
	footer {
		padding: var(--padding);
	}
</style>
