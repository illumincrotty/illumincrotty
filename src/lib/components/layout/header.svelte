<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import ButtonMenu from '$lib/components/button/buttonMenu.svelte';
	import Logo from '$lib/components/icon/logo.svelte';

	export let links: { href: string; label: string; external?: boolean }[] = [];
	import { slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import ButtonPalette from '../button/buttonPalette.svelte';

	let menuOpen = false;

	let navSize = 0;

	const expandTween = tweened(0, { duration: 200 });
	const collapseTween = tweened(0, { duration: 200 });
	const toggleFade = () => {
		expandTween.update((val) => (val ? 0 : 1));
		collapseTween.update((val) => (val ? 0 : 1));
	};
</script>

<div class="spacer">
	<header>
		<div class="header-options">
			<a href={`${base}/`} id="link-to-base" style="margin-right: auto;">
				<Logo />
			</a>

			<ButtonPalette />
			{#if links.length}
				<ButtonMenu bind:open={menuOpen} on:click={toggleFade} />
			{/if}
		</div>
		<nav
			style="height: {Math.max(menuOpen ? navSize * $expandTween : navSize * $collapseTween, 1)}px;"
		>
			<ul class="unlist" transition:slide bind:clientHeight={navSize}>
				<h2>Navigation</h2>

				{#if $page.url.pathname !== `/`}
					<li class="shadow-pop">
						<a
							sveltekit:prefetch
							href={`${base}/`}
							on:click={() => {
								menuOpen = false;
								toggleFade();
							}}>Home</a
						>
					</li>
				{/if}
				{#each links as link}
					{#if $page.url.pathname !== `/${link.href}`}
						<li>
							<a
								sveltekit:prefetch
								href={link?.external ? `${link.href}` : `${base}/${link.href}`}
								on:click={() => {
									menuOpen = false;
									toggleFade();
								}}
							>
								{link.label}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	</header>
</div>

<style lang="postcss">
	.spacer {
		height: 10vh;
	}
	header {
		position: fixed;
		width: 100%;
		background: var(--bg);
		padding: calc(var(--padding) / 2) var(--padding);
		border-bottom: var(--border-thin) solid var(--text);
		z-index: 1;
	}

	.header-options {
		display: flex;
		gap: var(--padding);
	}
	#link-to-base {
		margin-right: auto;
		width: 2em;
		aspect-ratio: 1;
		padding: var(--border-thin) var(--border-thin) 0 var(--border-thin);

		border-bottom: var(--border-thin) solid transparent;
		&:hover,
		&:focus-visible {
			border-color: var(--text);
			background: transparent;
		}
	}

	nav {
		overflow-y: hidden;
		ul {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1em;
			font-size: 1.25rem;
			margin-top: 0;
			padding-top: 0;
		}
	}
</style>
