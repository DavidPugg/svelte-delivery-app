import { db } from '$lib/database';
import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';
import cookieSign from 'cookie-signature';
import 'dotenv/config';

export const handle: Handle = async ({ event, resolve }) => {
	const a = await event.request.body?.getReader().read();
	const b = new TextDecoder().decode(a?.value);
	if (b) {
		event.locals.body = b;
	}

	const cookieHeader = event.request.headers.get('cookie');
	const cookies = cookie.parse(cookieHeader ?? '');

	const uValue = cookieSign.unsign(cookies.session || '', process.env.SECRET ?? '');

	const cart = cookies['cart'];

	if (cart) {
		event.locals.cart = JSON.parse(cart);
	}

	if (!uValue) {
		return await resolve(event);
	}

	const session = await db.user.findUnique({
		where: { userAuthToken: uValue }
	});

	if (session) {
		event.locals.user = { email: session.email };
	}

	return await resolve(event);
};

export const getSession: GetSession = ({ locals }) => {
	if (!locals.user) {
		return {
			cart: locals.cart
		};
	}

	return {
		user: {
			email: locals.user.email
		},
		cart: locals.cart
	};
};
