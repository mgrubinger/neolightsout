<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
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

  <!-- Fathom - simple website analytics - https://github.com/usefathom/fathom -->
  <script>
    (function(f, a, t, h, o, m) {
      a[h] =
        a[h] ||
        function() {
          (a[h].q = a[h].q || []).push(arguments);
        };
      (o = f.createElement('script')), (m = f.getElementsByTagName('script')[0]);
      o.async = 1;
      o.src = t;
      o.id = 'fathom-script';
      m.parentNode.insertBefore(o, m);
    })(document, window, '//139.59.138.194/tracker.js', 'fathom');
    fathom('set', 'siteId', 'LDNPN');
    fathom('trackPageview');
  </script>
  <!-- / Fathom -->
</svelte:head>
