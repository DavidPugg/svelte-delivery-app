export const maxLength = (value: string, max: number) => {
	return value.length >= max;
};

export const minLength = (value: string, min: number) => {
	return value.length < min;
};
