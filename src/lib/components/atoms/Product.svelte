<script lang="ts">
	import type { Product } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('addToCart');
	};

	export let product: Product;
</script>

<div class="rounde justify-center items-center gap-3 overflow-hidden rounded-lg">
	<div class="p-4 flex flex-col text-center bg-slate-400 text-text font-bold">
		<p>{product.name}</p>
		<p>
			${product.price}
		</p>
	</div>
	<div
		on:click={handleClick}
		class="bg-secondary text-text text-center py-2 hover:bg-primary transition-all cursor-pointer"
	>
		Add
	</div>
</div>
