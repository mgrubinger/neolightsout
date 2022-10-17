<script>
	import '@fontsource/ibm-plex-sans-condensed';
	import Nav from '$components/Nav.svelte';
  export const prerender = true;
</script>

<Nav />

<main>
	<slot />
</main>

<style global>
	html {
		font-size: 20px;
	}
	@media screen and (max-width: 600px) {
		html {
			font-size: 16px;
		}
	}

	body {
		margin: 0;
		line-height: 1.5;
		color: #333;
		--main: hsl(335, 68%, 54%);
		background-color: var(--main);
		font-family: 'IBM Plex Sans Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: #fff;
		box-sizing: border-box;
    font-display: swap;
	}

	* {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 0 0.5em 0;
		font-weight: 700;
		line-height: 1.2;
	}

	h1 {
		font-size: 2em;
		font-weight: 700;
	}

	a {
		color: inherit;
	}

	button {
		-webkit-appearance: none;
		appearance: none;
	}

	button.primary-button {
		border: none;
		background: linear-gradient(145deg, #fffdfe, #f4c7d9);
		box-shadow: 0.3em 0.3em 1em #be3a70, -0.3em -0.3em 1em #ff4e98;
		padding: 0.9em;
		text-transform: uppercase;
		font-size: 1.3rem;
		font-weight: 700;
		border-radius: 0.5em;
		color: var(--main);
	}

	button.primary-button.tiny {
		font-size: 0.8rem;
		padding: 0.5em 0.6em;
	}

	hr {
		border-style: dashed;
		border-color: #fff;
		border-bottom: 0;
		border-top-width: 2px;
	}

	main {
		position: relative;
		margin: 1rem auto 0;
		box-sizing: border-box;
		max-width: 600px;
		padding: 0 1rem;
    margin-bottom: 3rem;
	}

	@media screen and (min-height: 750px) {
		main {
			margin-top: 4rem;
		}
	}
</style>
