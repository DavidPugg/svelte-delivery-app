import { db } from '$lib/database';
import { minLength } from '$lib/utils/form';
import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

const MIN_PASSWORD_LENGTH = 6;

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

	if (minLength(password, MIN_PASSWORD_LENGTH)) {
		return {
			status: 400,
			body: {
				error: `Password must be atleast ${MIN_PASSWORD_LENGTH} characters long!`
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
