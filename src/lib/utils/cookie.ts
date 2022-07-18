import cookie from 'cookie';

export const setCookie = (name: string, value: any, expDays: number) => {
	const expires = new Date();
	expires.setTime(expires.getTime() + expDays * 24 * 60 * 60 * 1000);
	const c = cookie.serialize(name, JSON.stringify(value), {
		expires,
		path: '/'
	});
	document.cookie = `${c}`;
};

export const deleteCookie = (name: string) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
