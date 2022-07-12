<script>
	import Footer from '$lib/components/atoms/Footer.svelte';

	import Header from '$lib/components/atoms/Header.svelte';

	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<Header title="Delivery app" />
	<div class="my-32 flex-grow">
		<slot />
	</div>
	<Footer />
</div>
