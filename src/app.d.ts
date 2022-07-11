/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		body?: string;
		user?: {
			email: string;
		};
	}

	interface Session {
		user?: {
			email: string;
		};
	}
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
