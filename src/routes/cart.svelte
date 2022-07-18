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
	import { session } from '$app/stores';
	import type { CartItem as CartItemType } from '$lib/types';

	$: totalPrice = () => {
		let price = 0;
		if ($session.cart) {
			$session.cart.products.forEach((e: CartItemType) => {
				price += e.product.price * e.qty;
			});
		}
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
		{#if $session.cart}
			{#each $session.cart?.products as item}
				<CartItem cartItem={item} businessId={$session.cart?.businessId} />
			{/each}
		{/if}
		<div class="flex justify-end gap-4">
			<p class="text-end border border-primary flex items-center text-primary px-4 rounded-lg">
				Total price: {totalPrice()}
			</p>
			<Button type="submit" label="Order" disabled={!$session.cart} on:click={createOrder} />
		</div>
	</div>
</Container>
