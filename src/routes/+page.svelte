<script>
	import { beforeUpdate, tick } from 'svelte';

	import { moves, items, currentLevel } from './../stores.js';
	import Knob from '$components/Knob.svelte';
	import Bottombar from '$components/Bottombar.svelte';

	$: allDone = $items.every((e) => e.active === false);
	let finishAnimationRunning = false;
	let showNextLevelDialog = false;

	if ($moves == 0) items.loadLevel($currentLevel);

	/**
	 * after update (after tick()) -> trigger finish animation
	 */
	beforeUpdate(async () => {
		await tick();
		if (allDone && finishAnimationRunning === false) finishAnimation();
	});

	/**
	 * Handle Click/Touchstart on Knob
	 */
	let handleKnobClick = (item, index, event) => {
		if (allDone) return;
    navigator.vibrate([100]);
		event.preventDefault();
		event.stopPropagation();
		moves.increment();
		items.toggleActive(index);

		//// debug only
		// if(simple) {
		//   console.log($items.map((e, index) => e.active ? index : false ).filter(e => e != false));
		//   return;
		// }


		let otherIndezes = [];
		let column = index % 5;
		let row = Math.floor(index / 5);

		if (column > 0 && column < 4) {
			otherIndezes.push(index - 1);
			otherIndezes.push(index + 1);
		} else if (column == 0) {
			otherIndezes.push(index + 1);
		} else if (column == 4) {
			otherIndezes.push(index - 1);
		}

		if (row > 0 && row < 4) {
			otherIndezes.push(index - 5);
			otherIndezes.push(index + 5);
		} else if (row == 0) {
			otherIndezes.push(index + 5);
		} else if (row == 4) {
			otherIndezes.push(index - 5);
		}

		// toggle active state
		otherIndezes.map((i) => {
			items.toggleActive(i);
		});
	};

	let finishAnimationOneRow = (row) => {
		requestAnimationFrame(() => {
			items.reset();
			for (let index2 = 0; index2 < 5; index2++) {
				items.setActive(row * 5 + index2, true);
			}
			if (row == 5) {
				return;
			}
			window.setTimeout(() => {
				row = row + 1;
				finishAnimationOneRow(row);
			}, 80);
		});
	};

	/**
	 * Finish Animation
	 */
	let finishAnimation = () => {
		finishAnimationRunning = true;

		let row = 0;
		finishAnimationOneRow(0);

		showNextLevelDialog = true;
	};

	/**
	 * Load Next Level
	 */
	let loadNextLevel = () => {
		moves.reset();
		currentLevel.increment();
		items.loadLevel($currentLevel);
		showNextLevelDialog = false;
		finishAnimationRunning = false;
	};

	let restartLevel = () => {
		moves.reset();
		items.loadLevel($currentLevel);
	};
</script>

<svelte:head>
	<title>Play | neo:lights:out</title>
</svelte:head>

<section id="grid">
	{#each $items as item, index}
		<Knob
			active={item.active}
			on:click={(e) => handleKnobClick(item, index, e)}
			on:touchstart={(e) => handleKnobClick(item, index, e)}
		>
			<!-- {index} -->
		</Knob>
	{/each}
	{#if !showNextLevelDialog}
		<button
			class="primary-button tiny restart-button"
			disabled={$moves == 0 || showNextLevelDialog}
			on:click={() => restartLevel()}
		>
			↺
		</button>
	{/if}
</section>

<Bottombar {showNextLevelDialog} {loadNextLevel} />

<style>
	/* https://neumorphism.io/#c095f3*/

	#grid {
		--gap: 20px;
		font-size: calc(var(--gap) * 2);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: var(--gap);
		grid-row-gap: var(--gap);
		width: 100%;
		margin: 0 auto;
		position: relative;
		max-width: 400px;
	}

	@media screen and (max-width: 600px) {
		#grid {
			--gap: 10px;
		}
	}

	#grid .restart-button {
		margin-top: 0.3rem;
		font-size: 1rem;
		position: absolute;
		bottom: -55px;
		right: 2px;
		width: 32px;
		height: 32px;
		padding: 0;
		line-height: 0.9em;
		text-align: center;
	}
	.restart-button[disabled] {
		opacity: 0.5;
	}
</style>
