<script>
  export let showNextLevelDialog = false
  export let loadNextLevel
  export let restartLevel

  import { moves, currentLevel } from './../stores'
</script>

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

  .restart-button {
    margin-top: 0.3rem;
  }
</style>

<div class="bottombar" data-next-level={showNextLevelDialog}>
  {#if showNextLevelDialog}
    <h2>You finished Level {$currentLevel + 1} in {$moves} moves!</h2>
    <button class="primary-button" on:click={() => loadNextLevel()}>Next Level</button>
  {:else}
    <div class="bottombar-element">
      <div class="val">{$moves}</div>
      <div class="label">Moves</div>
    </div>
    <div class="bottombar-element">
      <div class="val">{$currentLevel + 1}</div>
      <div class="label">Level</div>
      <button class="primary-button tiny restart-button" on:click={() => restartLevel()}>
        Restart
      </button>
    </div>
  {/if}
</div>
