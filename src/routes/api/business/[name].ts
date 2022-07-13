import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/database';
export const get: RequestHandler = async ({ params }) => {
	const { name } = params;
	const restaurant = await db.business.findFirst({
		where: {
			name
		},
		include: {
			products: true
		}
	});
	return {
		status: 200,
		body: restaurant
	};
};
