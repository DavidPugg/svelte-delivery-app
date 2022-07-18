<script>
	import CategoryLink from '$lib/components/atoms/CategoryLink.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
</script>

<Container>
	<div class="flex flex-wrap justify-center my-5 gap-10">
		<CategoryLink to="/restaurant" categoryText="Restaurants" img="images/restaurants.jpg" />
		<CategoryLink to="/store" categoryText="Stores" img="images/stores.jpg" />
	</div>
</Container>
