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
	import { addToCart, resetCart } from '$lib/utils/cart';
	import Product from '$lib/components/atoms/Product.svelte';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';

	export let item: Business;

	onMount(() => {
		if ($session.cart && item.id != $session?.cart.businessId) {
			resetCart();
		}
	});

	const handleAddToCart = (product: ProductType) => {
		addToCart(item.id, product);
	};
</script>

<Container>
	<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 my-5">
		{#if item}
			{#each item?.products as product}
				<Product on:addToCart={() => handleAddToCart(product)} {product} />
			{/each}
		{/if}
	</div>
</Container>
