/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
        'pattern-square': 'url("/public/assets/shared/pattern-square.svg")'
      },
			colors: {
				vividOrange: '#F16718',
				peach: '#FF9B62',
				darkBlue: '#162542',
				pastelBlue: '#7B8BAD',
				lightBlue: '#E8EFF2',
			},
		},
	},
	plugins: [],
}
