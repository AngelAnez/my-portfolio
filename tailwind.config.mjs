/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#03DAC6",
				secondary: "#018786",
				background: "#121212"
			}
		},
	},
	plugins: [],
}
