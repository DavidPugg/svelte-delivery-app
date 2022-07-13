import { db } from '$lib/database';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
	const type = url.searchParams.get('category') || '';
	const items = await db.business.findMany({
		where: {
			type
		}
	});

	return {
		status: 200,
		body: items
	};
};
