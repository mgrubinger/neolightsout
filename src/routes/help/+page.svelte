<script>
	import Share from '$components/Share.svelte';
	import { currentLevel } from './../../stores';
</script>

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
		alt="5 light buttons arranged in a cross"
	/>
</p>
<p>
	This app is a remake of the original Lights Out handheld game that was manufactured by Tiger
	Electronics. Here's a
	<a href="https://en.wikipedia.org/wiki/Lights_Out_(game)" rel="noreferrer noopener">
		more detailed description.
	</a>
</p>

<p>
	If you like this game, please let others know too! <Share />
</p>

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
	<a href="https://kit.svelte.dev/" rel="noopener noreferrer" target="_blank">SvelteKit.</a> Proudly
	hosted on
	<a href="https://netlify.com" rel="noopener noreferrer" target="_blank">Netlify.</a>
</p>

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
