<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ButtonMenu from '../button/buttonMenu.svelte';
	export let links: { href: string; label: string }[] = [];
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
				<img src={`${base}/favicon.svg`} alt="Logo" width="36" height="36" />
			</a>

			<ButtonPalette />

			<ButtonMenu bind:open={menuOpen} on:click={toggleFade} />
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
								href={`${base}/${link.href}`}
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
		padding: var(--padding);
		border-bottom: var(--border-thin) solid var(--text);
	}

	.header-options {
		display: flex;
		gap: var(--gap);
		align-items: center;
	}
	#link-to-base {
		&:hover,
		&:focus-visible {
		}
	}
	div a {
		display: block;
		margin-right: auto;

		&:hover,
		&:focus-visible {
			border-color: var(--theme);
		}

		&:active {
		}
		img {
			margin: none;
			width: 2em;
			height: 2em;
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
			padding: var(--padding);
			margin-top: 0;
			padding-top: 0;
		}
	}
</style>
