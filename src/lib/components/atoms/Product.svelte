<script lang="ts">
	import type { Product } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('addToCart');
	};

	export let product: Product;
</script>

<div class="bg-slate-300 rounded p-4 flex flex-col justify-center items-center gap-3">
	<p>{product.name}</p>
	<p
		on:click={handleClick}
		class="bg-cyan-100 py-1 px-3 rounded hover:bg-red-200 transition-all  cursor-pointer"
	>
		{product.price}
	</p>
</div>
