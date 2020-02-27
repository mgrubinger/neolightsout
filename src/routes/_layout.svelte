<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style>
  main {
    position: relative;
    margin: 1rem auto 0;
    box-sizing: border-box;
    max-width: 600px;
    padding: 0 1rem;
  }

  @media screen and (min-height: 750px) {
    main {
      margin-top: 4rem;
    }
  }

</style>

<Nav {segment} />

<main>
  <slot />
</main>


