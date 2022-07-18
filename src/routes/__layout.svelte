<script>
	import { session } from '$app/stores';

	import Footer from '$lib/components/organisms/Footer.svelte';

	import Header from '$lib/components/organisms/Header.svelte';
	import { cart } from '$lib/stores/cart';

	import '../app.css';

	if ($session.cart) {
		cart.setCart($session.cart);
	}
</script>

<svelte:head>
	<title>Delivery app :)</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header title="Delivery app" />
	<div class="my-32 flex-grow">
		<slot />
	</div>
	<Footer />
</div>
