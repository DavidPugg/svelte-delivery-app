import { db } from '$lib/database';
import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

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

	try {
		await db.user.create({
			data: {
				email,
				passwordHash: await bcrypt.hash(password, 10)
			}
		});

		return {
			status: 200
		};
	} catch (err) {
		return {
			status: 400,
			body: {
				error: 'User already exists!'
			}
		};
	}
};
