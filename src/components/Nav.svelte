<script>
	import { page } from '$app/stores';

	let routeId = $page.routeId
</script>

<nav>
	<div class="title">neo:lights:out</div>
	<ul>
		<li>
			<a aria-current={routeId === "" ? 'page' : undefined} href=".">play</a>
		</li>
		<li>
			<a rel="prefetch" aria-current={routeId === 'help' ? 'page' : undefined} href="help">help</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		font-weight: 700;
		padding: 1rem;
		padding-top: 0;
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 1.2rem;
		margin-top: 0.3em;
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
		padding: 0.5rem 0.3rem;
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
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
	}

	a:hover::after {
	}
</style>
