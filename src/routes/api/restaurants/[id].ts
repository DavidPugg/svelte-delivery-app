import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';
import { restaurants } from '$lib/database';
import type { Business } from '$lib/types';

export const get = async ({ params }: RequestEvent): Promise<RequestHandlerOutput<Business>> => {
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
