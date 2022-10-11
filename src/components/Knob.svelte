<script>
  /** @type boolean */
	export let active;
</script>

<button
	class="knob"
	data-active={active}
	aria-label="{active ? 'light' : 'dark'} button"
	on:click|preventDefault
	on:touchstart|preventDefault><slot /></button
>

<style>
	.knob {
		-webkit-appearance: none;
		padding: 0;
		border: none;
		width: 100%;
		border-radius: 18%;
		background: #df4484;
		box-shadow: 0.3em 0.3em 1em #be3a70, -0.3em -0.3em 1em #ff4e98;
		transform: translate3d(0, 0, 0);
		transition: all 50ms ease-out;
	}
	.knob:focus {
		outline: none;
	}

	.knob::before {
		content: '';
		display: inline-block;
		width: 1px;
		height: 0;
		padding-bottom: calc(100% / 1);
	}

	.knob[data-active='true'] {
		transform: translate3d(0, 0, 0) scale(1.05);
		background: linear-gradient(145deg, #fffdfe, #f4c7d9);
		box-shadow: 0.3em 0.3em 1em #be3a70, -0.3em -0.3em 1em #ff4e98;
	}
</style>
