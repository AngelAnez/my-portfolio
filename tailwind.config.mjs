/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#00ff99",
				secondary: "#018786",
				background: "#121212"
			}
		},
	},
	plugins: [],
}
