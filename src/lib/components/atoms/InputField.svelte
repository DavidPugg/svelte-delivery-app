<script lang="ts">
	export let value: string;
	export let label: string;
	export let type: string;

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
	};
</script>

<input
	class="border px-3 py-1 outline-none focus:border-primary flex flex-grow"
	{value}
	id={label}
	on:input={handleInput}
	{type}
/>
