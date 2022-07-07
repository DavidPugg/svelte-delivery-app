<script lang="ts">
	export let title: string;

	$: uppercaseTitle = title.charAt(0).toUpperCase() + title.slice(1);
</script>

<h1 class="text-center py-4 bg-slate-400 text-white font-bold text-xl">{uppercaseTitle}</h1>
