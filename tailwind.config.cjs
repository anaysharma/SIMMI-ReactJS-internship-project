/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		extend: {
			dropShadow: {
				'2xl': '0 10px 25px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [require('tw-elements/dist/plugin')],
};
