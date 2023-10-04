/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				palette: {
					50: "#cffcef",
					200: "#3ff3c0",
					500: "#0ba87b",
					700: "#066046",
					900: "#033023",
				},
			},
			fontFamily: {
				shabnam: ["Shabnam"],
				dorandis: ["dorandis"],
			},
		},
		plugins: [],
	},
	darkMode:"class"
};
