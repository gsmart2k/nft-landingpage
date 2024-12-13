/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			boxShadow: {
				custom: "2px 2px 20px 3px rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				custom: ["Conthrax-SemiBold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
