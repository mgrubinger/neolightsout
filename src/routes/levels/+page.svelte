<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { progress, currentLevel, moves } from '../../stores.js';

	let total = Array.from({ length: 51 });

	function play(level) {
		currentLevel.set(level);
    moves.reset();
		goto('/');
	}

	function reset() {
    if (browser) {
      if (window.confirm('Do you really want to reset your progress?')) {
        progress.reset();
        moves.reset();
				$currentLevel = 0;
        goto('/');
			}
		}
	}
</script>

<h1>Levels</h1>

<ol>
	{#each total as n, level}
		{@const isDone = !!$progress.includes(level)}
		<li>
			<span>
				{#if isDone}
					✅
				{/if}
				&nbsp;Level {level + 1}
			</span>
			<button type="button" class="primary-button tiny" on:click={() => play(level)}
				>Play {#if isDone}again{/if}</button
			>
		</li>
	{/each}
</ol>

<hr />
<p>Reset game progress?</p>
<button type="button" class="primary-button tiny" on:click={reset}>Reset</button>
<hr />

<style>
	ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		display: flex;
		margin: 0.8rem 0;
		align-items: center;
	}
	span {
		display: block;
		min-width: 12ch;
	}
</style>
