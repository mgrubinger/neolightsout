<script>
  import { currentLevel } from './../stores.js';
  if (fathom) fathom('trackPageview');
</script>

<style>
  .cross-image {
    width: 100px;
  }
  .footer {
    font-size: 0.8rem;
  }

  .footer.flex {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Help | neo:lights:out</title>
</svelte:head>

<h1>neo:lights:out</h1>

<p>
  This is a simple puzzle game.
  <strong>The aim is</strong>
  to turn off all the lights.
</p>
<p>
  Tap a button. The neighboring buttons will light up too, or turn off – depending on what state
  they were in before.
</p>
<p>
  <img
    class="cross-image"
    src="./lightsout-white-256x256.png"
    alt="5 light buttons arranged in a cross" />
</p>
<p>
  This app is a remake of the original Lights Out handheld game that was manufactured by Tiger
  Electronics. Here's a
  <a href="https://en.wikipedia.org/wiki/Lights_Out_(game)" rel="noreferrer noopener">
    more detailed description.
  </a>

</p>

{#if $currentLevel > 0}
  <p>
    Tap here to start from level 1 again:
    <button
      class="primary-button tiny"
      on:click={() => {
        currentLevel.reset();
      }}>
      Reset
    </button>
  </p>
{/if}

<hr />

<p class="footer flex">
  <span>
    A project by
    <a href="https://www.grooovinger.com" rel="noreferrer noopener">grooovinger</a>
  </span>
  <span>
    <a href="imprint" rel="prefetch">Imprint</a>
    |
    <a href="privacy-statement" rel="prefetch">Privacy Statement</a>
  </span>
</p>
<p class="footer">
  Built with
  <a href="https://svelte.dev/" rel="noopener noreferrer">Svelte</a> and
  <a href="https://sapper.svelte.dev/" rel="noopener noreferrer">Sapper.</a> Proudly hosted on
  <a href="https://netlify.com" rel="noopener noreferrer">Netlify.</a>
</p>
