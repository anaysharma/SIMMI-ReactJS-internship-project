/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('tw-elements/dist/plugin'),
		require('@tailwindcss/typography'),
	],
};
