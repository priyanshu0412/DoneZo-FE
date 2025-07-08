/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				firstColor: "#004250",
				secondColor: "#88bbd8",
				thirdColor: "#f9c54b",
				fourthColor: "#f8f9fa",
				fifthColor: "#ffffff",
				sixthColor: "#1f2937",
				seventhColor: "#6b7280",
				eightthColor: "#ef4444"
			},
			fontFamily: {
				poppins: [
					'Poppins',
					'sans-serif'
				]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
