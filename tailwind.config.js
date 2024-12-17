/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				"off-white": {
					DEFAULT: "#E3E3E3",
				},
				dark: {
					DEFAULT: "#1C1C1E",
				},
				"soft-dark": {
					DEFAULT: "#2A2A2F",
				},
			},
		},
	},
	plugins: [],
};
