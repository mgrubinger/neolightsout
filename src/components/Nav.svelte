<script>
  export let segment
</script>

<style>
  nav {
    font-weight: 700;
    padding: 1rem;
    padding-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }

  li {
    display: block;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    display: block;
    position: relative;
    font-size: 1.5rem;
  }
  [aria-current] {
  }
  [aria-current]::after,
  a:hover::after {
    position: absolute;
    content: '';
    width: calc(100% - 0.5em);
    height: 2px;
    background-color: #fff;
    display: block;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
  }

  a:hover::after {
    height: 1px;
    opacity: 0.5;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">play</a>
    </li>
    <li>
      <a rel="prefetch" aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>
  </ul>
</nav>
