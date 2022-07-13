/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#06D6A0',
				secondary: '#1B9AAA',
				text: '#F8FFE5'
			}
		},
	},
	plugins: []
};
