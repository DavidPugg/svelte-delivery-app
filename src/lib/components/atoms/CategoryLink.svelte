<script lang="ts">
	import { goto } from '$app/navigation';

	export let categoryText: string;
	export let to: string;
	export let img: string = '';
</script>

<div on:click={() => goto(to)} class="group relative flex justify-center">
	<img src={img} alt="BusinessImage" class="w-40 h-40 rounded-full bg-slate-400" />
	<p
		class="absolute -bottom-5 text-text bg-primary p-2 rounded transition-all cursor-pointer group-hover:bg-secondary"
	>
		{categoryText}
	</p>
</div>
