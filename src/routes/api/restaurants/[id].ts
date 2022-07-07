import type { RequestEvent } from '@sveltejs/kit';
import { restaurants } from '$lib/database';

export const get = async ({ params }: RequestEvent) => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve(null);
		}, 50)
	);
	const { id } = params;
	const restaurant = restaurants.find((restaurant) => restaurant.id == +id);
	return {
		status: 200,
		body: restaurant
	};
};
