/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'lisiy-accent': {
					'50': '#fff9ec',
					'100': '#fff2d3',
					'200': '#ffe2a5',
					'300': '#ffcc6d',
					'400': '#ffaa32',
					'500': '#ff8f0a',
					'600': '#e66b00',
					'700': '#cc5602',
					'800': '#a1420b',
					'900': '#82380c',
					'950': '#461a04',
				},
				'lisiy-bg': {
					'50': '#f7f7f8',
					'100': '#ededf1',
					'200': '#d7d8e0',
					'300': '#b5b6c4',
					'400': '#8c8ea4',
					'500': '#6e7189',
					'600': '#595a70',
					'700': '#48495c',
					'800': '#3e3e4e',
					'900': '#373843',
					'950': '#0e0e11',
				}
			},
		},
	},
	plugins: [],
}
