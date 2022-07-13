<script lang="ts">
	import { goto } from '$app/navigation';

	export let categoryText: string;
	export let to: string;
</script>

<div
	on:click={() => goto(to)}
	class="group w-40 h-40 rounded-full bg-slate-400 relative flex justify-center"
>
	<p class="absolute -bottom-5 text-text bg-primary p-2 rounded transition-all cursor-pointer group-hover:bg-secondary">
		{categoryText}
	</p>
</div>
