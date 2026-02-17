<script>
	function share() {
		navigator.share({
			url: 'https://neolightsout.grooovinger.com',
			title: 'Check out the neo:lights:out game'
		});
	}
</script>

<button type="button" class="primary-button tiny" onclick={share}>Share</button>
