<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const { name } = params;
		const res = await fetch(`/api/business/${name}`);
		const data = await res.json();
		return {
			props: {
				item: data
			}
		};
	};
</script>

<script lang="ts">
	import Container from '$lib/components/atoms/Container.svelte';
	import type { Business, Product as ProductType } from '$lib/types';
	import { cart } from '$lib/stores/cart';
	import Product from '$lib/components/atoms/Product.svelte';
	import { onMount } from 'svelte';

	export let item: Business;

	onMount(() => {
		console.log($cart?.businessId)
		// if (item.id != $cart?.businessId) {
		// 	cart.resetCart();
		// }
	});

	const addToCart = (product: ProductType) => {
		cart.addToCart(item.id, product);
	};
</script>

<Container>
	<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 my-5">
		{#if item}
			{#each item?.products as product}
				<Product on:addToCart={() => addToCart(product)} {product} />
			{/each}
		{/if}
	</div>
</Container>
