import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';

export const post = async (
	event: RequestEvent
): Promise<RequestHandlerOutput<{ text: string }>> => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve(null);
		}, 50)
	);
	return {
		status: 200,
		body: {
			text: 'Order Created!'
		}
	};
};
