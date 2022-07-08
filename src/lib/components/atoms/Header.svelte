<script lang="ts">
	import { cart } from '$lib/stores/cart';

	export let title: string;

	$: uppercaseTitle = title.charAt(0).toUpperCase() + title.slice(1);
</script>

<div class="grid grid-cols-3 text-center py-4 bg-slate-400 text-white font-bold text-xl">
	<h1 class="col-start-2">
		{uppercaseTitle}
	</h1>
	<a href="/cart"><span class="">Cart({$cart ? $cart?.products.length : 0})</span></a>
</div>
