import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';
import { db } from '$lib/database';
import type { Business } from '$lib/types';

export const get = async ({ params }: RequestEvent): Promise<RequestHandlerOutput<Business>> => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve(null);
		}, 50)
	);
	const { id } = params;
	const restaurant = await db.restaurant.findUnique({
		where: {
			id: +id
		},
		include: {
			products: true
		}
	});
	return {
		status: 200,
		body: restaurant!
	};
};
