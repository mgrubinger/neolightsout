<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    max-width: 600px;
    padding: 0 1rem;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,700&display=swap"
    rel="stylesheet" />
  <!-- Global site tag (gtag.js) - Google Analytics
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159009442-1">

  </script>  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-159009442-1')
  </script> -->
</svelte:head>
