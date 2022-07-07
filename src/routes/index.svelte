<script>
	import CategoryLink from '$lib/components/atoms/CategoryLink.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
</script>

<Header title="Delivery App" />
<Container>
	<div class="flex flex-col items-center my-5 gap-4">
		<CategoryLink to="/restaurants" categoryText="Restaurants" />
	</div>
</Container>
