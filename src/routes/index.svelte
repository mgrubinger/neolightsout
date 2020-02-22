<script>
  import Knob from "./../components/Knob.svelte";
  import levels from "./../levels";
  import { beforeUpdate, tick } from 'svelte';

  let items = [];
  let level = 0;
  let moves = 0;
  $: allDone = items.every((e) => e.active === false);
  let finishAnimationRunning = false;

	beforeUpdate(async () => {
		console.log('the component is about to update');
		await tick();
    console.log('the component just updated');
    if(allDone && finishAnimationRunning === false) finishAnimation();
	});

  for (let index = 0; index < 25; index++) {
    items.push({ active: false });
  }

  levels[level].map(e => {
    items[e].active = true;
  });

  let handleKnobClick = (item, index) => {
    if(allDone) return;
    moves++;
    items[index].active = !items[index].active;

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
    otherIndezes.map(i => {
      if (items[i]) items[i].active = !items[i].active;
    });

    // update array hack
    items = items;

  };

  
  let finishAnimation = () => {
    finishAnimationRunning = true;
    for (let index = 0; index < 5; index++) {
      window.setTimeout(() => {
        for (let index2 = 0; index2 < 5; index2++) {
          items[index * 5 + index2].active = true;
        }
      }, index * 80 + 50);
      window.setTimeout(() => {
        for (let index2 = 0; index2 < 5; index2++) {
          items[index * 5 + index2].active = false;
        }
      }, index * 80 + 200);
    }
  }
</script>

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
  }

  @media screen and (max-width: 600px) {
    #grid {
      --gap: 10px;
    }
  }

  .topbar {
      display: flex;
      justify-content: space-evenly;
      margin-top: 1rem;
  }

  .topbar-element {
      text-align: center;
  }
  .topbar-element .val {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1em;
  }
  .topbar-element .label {
      font-size: 1rem;
      text-transform: uppercase;
  }
</style>


<section id="grid">
  {#each items as item, index}
    <Knob
      bind:active={item.active}
      on:click={() => handleKnobClick(item, index)}>
      <!-- {index} -->
    </Knob>
  {/each}
</section>

<div class="topbar">
  <div class="topbar-element">
    <div class="val">{moves}</div>
    <div class="label">Moves</div>
  </div>
  <div class="topbar-element">
    <div class="val">{level+1}</div>
    <div class="label">Level</div>
  </div>
</div>