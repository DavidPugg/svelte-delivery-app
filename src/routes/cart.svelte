<script lang="ts">
	import CartItem from '$lib/components/atoms/CartItem.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
	import { cart } from '$lib/stores/cart';

    
	$: totalPrice = () => {
		let price = 0;
		$cart?.products.forEach((e) => {
			price += e.product.price * e.qty;
		});
		return Math.floor(price * 100) / 100;
	};
</script>

<Header title="cart" />
<Container>
	<div class="flex flex-col gap-3 my-5">
		{#if $cart}
			{#each $cart?.products as item}
				<CartItem cartItem={item} businessId={$cart.businessId} />
			{/each}
		{/if}
	</div>
	<p class="text-end">Total price: {totalPrice()}</p>
</Container>
