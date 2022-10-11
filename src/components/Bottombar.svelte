<script>
	export let showNextLevelDialog = false;
	export let loadNextLevel;

	import { moves, currentLevel } from './../stores';
</script>

<div class="bottombar" data-next-level={showNextLevelDialog}>
	{#if showNextLevelDialog}
		{#if $currentLevel + 1 >= 50}
			<h2>🎉🎉🎉 Congratulations! 🎉🎉🎉</h2>
			<p style="text-align: center">
				You made it! You finished all the levels! I hope you enjoyed the game. If you want to play
				again, hit the reset button in <a href="help">Help</a>
			</p>
			<p>
				Let others know how you liked it too! <a
					href="https://twitter.com/intent/tweet/?text=check+out+this+fun+game!&url=https%3A%2F%2Fneolightsout.grooovinger.com"
					target="_blank"
					rel="noopener noreferrer">Share on Twitter</a
				>
			</p>
		{:else}
			<h2>
				You finished Level {$currentLevel + 1}
				<br />
				in {$moves} moves!
			</h2>
			<button class="primary-button" on:click={() => loadNextLevel()}>Next Level</button>
		{/if}
	{:else}
		<div class="bottombar-element stats">
			<div class="val">{$currentLevel + 1}</div>
			<div class="label">Level</div>
		</div>
		<div class="bottombar-element stats">
			<div class="val">{$moves}</div>
			<div class="label">Moves</div>
		</div>
	{/if}
</div>

<style>
	.bottombar {
		display: flex;
		justify-content: space-evenly;
		margin-top: 1rem;
	}

	.bottombar[data-next-level='true'] {
		flex-direction: column;
	}

	.bottombar-element {
		text-align: center;
	}
	.bottombar-element .val {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1em;
	}
	.bottombar-element .label {
		font-size: 1rem;
		text-transform: uppercase;
	}
	.bottombar h2 {
		text-align: center;
	}
</style>
