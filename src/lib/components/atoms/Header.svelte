<script lang="ts">
	import { cart } from '$lib/stores/cart';
	import { session } from '$app/stores';

	export let title: string;

	const logout = async () => {
		await fetch('/api/auth/logout');
		$session.user = undefined;
	};
</script>

<div class="grid grid-cols-3 text-center py-6 bg-slate-400 text-white font-bold text-xl fixed w-full top-0 left-0">
	<h1 class="col-start-2">
		<a class="text-4xl" href="/">{title}</a>
	</h1>
	<div class="flex gap-10 justify-center items-center">
		{#if !$session.user}
			<a href="/register">Register</a>
			<a href="/login">login</a>
		{:else}
			<p class="cursor-pointer" on:click={logout}>logout</p>
			<a href="/cart"><span class="">Cart({$cart ? $cart?.products.length : 0})</span></a>
		{/if}
	</div>
</div>
