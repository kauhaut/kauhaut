<script>
	import '../app.css';
	let { children } = $props();
</script>

<main class="h-screen w-full bg-background text-text">
	{@render children()}
</main>

