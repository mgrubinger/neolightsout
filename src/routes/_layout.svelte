<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	:global(html) {
		font-size: 20px;
	}
	:global(body) {
		--main: #df4484;
		background-color: var(--main);
		font-family: 'IBM Plex Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: #fff;
		box-sizing: border-box;
	}
	:global(body *) {
		box-sizing: border-box;
	}

	:global(h1) {
		font-weight: 700;
	}

	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
		max-width: 800px;
		padding: 0 1rem;
	}

	 @media screen and (max-width: 600px) {
		:global(html) {
			font-size: 16px;
		}
	}


</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,700&display=swap" rel="stylesheet">
</svelte:head>