<script>
	import Footer from '$lib/components/organisms/Footer.svelte';

	import Header from '$lib/components/organisms/Header.svelte';

	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<Header title="Delivery app" />
	<div class="my-32 flex-grow">
		<slot />
	</div>
	<Footer />
</div>
