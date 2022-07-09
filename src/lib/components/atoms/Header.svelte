<script lang="ts">
	import { cart } from '$lib/stores/cart';

	export let title: string;

	$: uppercaseTitle = title.charAt(0).toUpperCase() + title.slice(1);
</script>

<div class="grid grid-cols-3 text-center py-4 bg-slate-400 text-white font-bold text-xl">
	<h1 class="col-start-2">
		<a class="text-4xl" href="/">{uppercaseTitle}</a>
	</h1>
	<div class="flex gap-10 justify-center items-center">
		<a href="/register">Register</a>
		<a href="/login">login</a>
		<a href="/cart"><span class="">Cart({$cart ? $cart?.products.length : 0})</span></a>
	</div>
</div>
