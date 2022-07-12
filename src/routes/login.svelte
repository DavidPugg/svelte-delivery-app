<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ session }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return {};
	};
</script>

<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Container from '$lib/components/atoms/Container.svelte';
	import Header from '$lib/components/atoms/Header.svelte';
	import Input from '$lib/components/molecules/Input.svelte';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	let email = '';
	let password = '';

	const submitForm = async () => {
		const res = await fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
		});
		if (res.ok) {
			$session.user = { email };
			goto('/');
		}
	};
</script>

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
