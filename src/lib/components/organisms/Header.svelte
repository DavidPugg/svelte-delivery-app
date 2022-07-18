<script lang="ts">
	import { session } from '$app/stores';

	export let title: string;

	const logout = async () => {
		await fetch('/api/auth/logout');
		$session.user = undefined;
	};
</script>

<div
	class="py-6 sm:px-64 bg-primary text-text font-bold text-xl fixed w-full top-0 left-0 flex items-center justify-between flex-col sm:flex-row gap-3"
>
	<h1 class="col-start-2">
		<a class="text-4xl" href="/">{title}</a>
	</h1>
	<div class="flex gap-10 justify-center items-center">
		{#if !$session.user}
			<a href="/register">Register</a>
			<a href="/login">login</a>
		{:else}
			<p class="cursor-pointer" on:click={logout}>logout</p>
			<a href="/cart" class="relative"
				>Cart<span
					class="cart-amount absolute -bottom-3 -right-7 text-center bg-secondary leading-3 w-7 h-7 rounded-full flex justify-center items-center"
					>{$session.cart ? $session.cart.products.length : 0}</span
				></a
			>
		{/if}
	</div>
</div>

<style>
	.cart-amount {
		font-size: 1.2rem !important;
	}
</style>
