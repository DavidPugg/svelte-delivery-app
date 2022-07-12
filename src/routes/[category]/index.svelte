<script context="module" lang="ts">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
	import type { Business } from '$lib/types';

	export const load = async ({ fetch, params }: LoadEvent): Promise<LoadOutput> => {
		const { category } = params;
		const res = await fetch(`/api/${category}`);
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
	import Header from '$lib/components/atoms/Header.svelte';
	import { page } from '$app/stores';

	export let items: Business[];
</script>

<Container>
	<div class="flex flex-col gap-3 my-5">
		{#each items as item}
			<BusinessItem
				to={`/${$page.params['category']}/${item.id}`}
				name={item.name}
			/>
		{/each}
	</div>
</Container>
