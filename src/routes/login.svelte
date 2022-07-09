<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
	import Input from '$lib/components/molecules/Input.svelte';

	let email = '';
	let password = '';

	const submitForm = () => {
		console.log(email);
		console.log(password);
	};
</script>

<Header title="register" />
<Container>
	<form
		on:submit|preventDefault={submitForm}
		class="flex flex-col gap-3 my-5 md:w-1/2 mx-auto"
		novalidate
	>
		<Input label="Email" bind:value={email} type="email" />
		<Input label="Password" bind:value={password} type="password" />
		<Button label="Login" type="submit" disabled={email == '' || password == ''} />
		<p class="mx-auto">
			Do not have an account yet? <a class="text-blue-500 underline" href="/register">Sign up</a>
		</p>
	</form>
</Container>
