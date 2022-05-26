<script lang="ts">
	import { aleaFactory } from 'alea-generator';
	let seed = '';

	let output = '';
	let genType: 'fract53' | 'random' | 'uint32' = 'random';
	let random = aleaFactory(seed);
	$: {
		console.log(seed);
		random = aleaFactory(seed.length ? seed : undefined);
	}

	const clickHandler = () => {
		output = random[genType]().toString();
	};

	const enterHandler = (e: KeyboardEvent) => {
		if (e.key == 'Enter') clickHandler();
	};
</script>

<svelte:head>
	<title>Random Number Generator</title>
</svelte:head>

<template>
	<main>
		<h1 class="fun-text">Random Number Generator</h1>
		<div class="center-i stack full-width">
			<label>Seed: <input type="text" bind:value={seed} on:keypress={enterHandler} /></label>
			<div class="switcher">
				<div class="rad-item">
					<input
						type="radio"
						id="fract32"
						name="genType"
						bind:group={genType}
						value="random"
						checked
					/>
					<label for="fract32">Fraction</label>
				</div>
				<div class="rad-item">
					<input type="radio" id="int32" name="genType" bind:group={genType} value="uint32" />
					<label for="int32">Integer</label>
				</div>
			</div>

			<button on:click={clickHandler}>Generate</button>

			<div>Output: {output}</div>
		</div>

		<div class="stack">
			<h2 class="fun-text">How this works</h2>
			<p>
				This random number generator is powered by a pseudo-random number generating algorithm
				called alea. Alea is in a class of <abbr title="Pseudo Random number generators">PRNGs</abbr
				>
				called Xor shift generators or shift-register generators. They rely on the binary operation XOR
				to function. You can find out more
				<a href="https://en.wikipedia.org/wiki/Xorshift" rel="external">here</a>. I wrote a library
				to generate random numbers because the browsers default method of doing in (Math.random) is
				slow, not seedable, and has different implemetations in different browsers. You can find the
				open source code on
				<a href="https://github.com/illumincrotty/alea-random" rel="external"> github</a>
				or import it from
				<a href="https://www.npmjs.com/package/alea-generator" rel="external">npm</a>. Have fun
				generating!
			</p>
		</div>
	</main>
</template>

<style lang="postcss">
	@import '$lib/style/every-layout/center.postcss';
	@import '$lib/style/every-layout/stack.postcss';

	main {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		width: 100%;
		padding: var(--padding);
		position: relative;
		max-width: var(--measure);
		margin: auto;
	}

	h1 {
		font-size: var(--font-3xl);
		border-bottom: var(--border-thin) solid var(--text);
	}

	.full-width {
		width: 100%;
	}

	.rad-item {
		display: flex;
		align-items: center;
		gap: 1ch;
		width: max-content;
		flex-grow: 0;
		justify-content: space-between;
	}
	label {
		cursor: pointer;
	}

	.switcher {
		display: flex;
		flex-wrap: wrap;
		gap: var(--padding);
		justify-content: center;
	}

	input[type='radio'] {
		appearance: none;

		border-radius: 50%;
		width: 1em;
		height: 1em;

		border: var(--border-thin) solid var(--text);
		transition: 0.2s all linear;
		margin: 0;

		cursor: pointer;
	}

	input[type='radio']:checked {
		background-color: var(--theme);
	}

	input[type='text'] {
		border: none;
		border-bottom: var(--border-thin) solid var(--text);
		&:focus-visible {
			outline: var(--border-thin) solid var(--theme);
		}
	}
</style>
