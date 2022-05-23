<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ error, status }) => {
		return {
			props: {
				error: error,
				status: status
			}
		};
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import Page from '$lib/components/layout/page.svelte';

	export let status = 404;
	export let error: Error;
</script>

<Page title="ERROR: {status}">
	<div>{error.message}</div>
	<br />
	<a href="{base}/">Return to Homepage</a>
</Page>

<style>
	div {
		width: fit-content;
	}
</style>
