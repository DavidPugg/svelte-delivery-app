import { restaurants } from '$lib/database';

export const get = async () => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve(null);
		}, 50)
	);
	return {
		status: 200,
		body: restaurants
	};
};
