<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ session }) => {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {};
	};
</script>

<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
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

	const createOrder = async () => {
		const res = await fetch('/api/order', {
			method: 'POST'
		});
		const data = await res.json();

		if (res.ok) {
			console.log(data.text);
		}
	};
</script>

<Container>
	<div class="flex flex-col gap-3 my-5">
		{#if $cart}
			{#each $cart?.products as item}
				<CartItem cartItem={item} businessId={$cart.businessId} />
			{/each}
		{/if}
		<div class="flex justify-end items-center gap-4">
			<p class="text-end">Total price: {totalPrice()}</p>
			<Button type="submit" label="Order" disabled={!$cart} on:click={createOrder} />
		</div>
	</div>
</Container>
