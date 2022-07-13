<script context="module" lang="ts">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
	import type { Business } from '$lib/types';

	export const load = async ({ fetch, params }: LoadEvent): Promise<LoadOutput> => {
		const { category } = params;
		const res = await fetch(`/api/business?category=${category}`);
		const data = await res.json();
		return {
			props: {
				items: data
			}
		};
	};
</script>

<script lang="ts">
	import BusinessItem from '$lib/components/atoms/BusinessItem.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import { page } from '$app/stores';

	export let items: Business[];
</script>

<Container>
	<div class="flex flex-wrap justify-center gap-20 my-5">
		{#each items as item}
			<BusinessItem to={`/${$page.params['category']}/${item.name}`} name={item.name} />
		{/each}
	</div>
</Container>
