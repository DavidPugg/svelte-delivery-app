import { db } from '$lib/database';

export const get = async () => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve(null);
		}, 50)
	);
	const restaurants = await db.restaurant.findMany({});

	return {
		status: 200,
		body: restaurants
	};
};
