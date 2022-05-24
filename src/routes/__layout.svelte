<script lang="ts">
	import Base from '$lib/components/layout/base.svelte';
	import Header from '$lib/components/layout/header.svelte';

	export const title = 'Example';
	let links: { href: string; label: string }[] = [];
</script>

<Base>
	<Header {links} />

	<slot>
		<!-- <main class="stack center-i" id="page-main" /> -->
	</slot>
</Base>

<style lang="postcss">
</style>
