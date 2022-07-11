import { db } from '$lib/database';
import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import cookie from 'cookie';

export const post: RequestHandler = async ({ locals }) => {
	const { email, password } = JSON.parse(locals.body || '');

	if (typeof email !== 'string' || typeof password !== 'string') {
		return {
			status: 400,
			body: {
				error: 'Enter a valid email and password!'
			}
		};
	}

	if (!email || !password) {
		return {
			status: 400,
			body: {
				error: 'Email and password are required!'
			}
		};
	}

	const user = await db.user.findUnique({
		where: {
			email
		}
	});
	const passwordMatch = user && (await bcrypt.compare(password, user.passwordHash));

	if (!user || !passwordMatch) {
		return {
			status: 400,
			body: {
				error: 'You entered the wrong credentials!'
			}
		};
	}

	return {
		status: 200,
		body: {
			user: { email }
		},
		headers: {
			'Set-Cookie': cookie.serialize('session', user.userAuthToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 30
			})
		}
	};
};
