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

	export let status = 404;
	export let error: Error;
</script>

<div>{error.message}</div>
<br />
<a href="{base}/">Return to Homepage</a>

<style>
	div {
		width: fit-content;
	}
</style>
