<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let type = 'button';
	export let disabled: boolean;
	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	{type}
	{disabled}
	on:click={handleClick}
	class="bg-green-300 px-6 py-2 rounded text-white font-bold hover:bg-green-400 transition-all"
	class:bg-slate-500={disabled}
	class:hover:bg-slate-500={disabled}>{label}</button
>
