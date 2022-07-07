<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';

	export const load = async ({ fetch, params }: LoadEvent) => {
		const { id, category } = params;
		const res = await fetch(`/api/${category}/${id}`);
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
	import Header from '$lib/components/atoms/Header.svelte';
	import type { Business, Product as ProductType } from '$lib/types';
	import { cart } from '$lib/stores/cart';
	import Product from '$lib/components/atoms/Product.svelte';

	export let item: Business;

	const addToCart = (product: ProductType) => {
		cart.addToCart(item.id, product);
		console.log($cart)
	};
</script>

<Header title={item.name} />

<Container>
	<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 my-5">
		{#each item.products as product}
			<Product on:addToCart={() => addToCart(product)} {product} />
		{/each}
	</div>
</Container>
