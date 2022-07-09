<script lang="ts">
	import InputField from '../atoms/InputField.svelte';
	import InputLabel from '../atoms/InputLabel.svelte';
	export let value: string;
	export let label: string;
	export let type: string = 'text';
</script>

<div class="flex">
	<InputLabel {label} />
	<InputField bind:value {type} {label} />
</div>
