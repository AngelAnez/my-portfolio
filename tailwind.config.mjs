/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: {
					primary: "#00ff99",
					secondary: "#018786",
					background: {
						primary: "#121212",
						secondary: "#18181b"
					}
				}
			}
		},
	},
	plugins: [],
}
