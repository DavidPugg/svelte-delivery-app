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
	import type { Business } from '$lib/types';

	export let item: Business;
</script>

<h1>{item.name}</h1>
