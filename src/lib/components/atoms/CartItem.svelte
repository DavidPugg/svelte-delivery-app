<script lang="ts">
	import { cart } from '$lib/stores/cart';

	import type { CartItem } from '$lib/types';

	export let cartItem: CartItem;
	export let businessId: number;
</script>

<div class="flex bg-secondary text-text px-5 py-3 justify-between rounded-lg">
	<div name="right">
		<p>{cartItem.product.name}</p>
	</div>
	<div name="left" class="flex gap-10">
		<p>${Math.floor(cartItem.product.price * cartItem.qty * 100) / 100}</p>
		<div class="flex">
			<p class="cursor-pointer select-none bg-text rounded-full px-3 text-black" on:click={() => cart.removeFromCart(cartItem.product.id)}>-</p>
			<p class="w-12 text-center">{cartItem.qty}</p>
			<p class="cursor-pointer select-none bg-text rounded-full px-3 text-black" on:click={() => cart.addToCart(businessId, cartItem.product)}>+</p>
		</div>
	</div>
</div>
