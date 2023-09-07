/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			colors: {
				primary: colors.green
			},
			borderRadius: {
				global: '0.5rem'
			}
		}
	},
	plugins: []
};
