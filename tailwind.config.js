/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#001e2b",
        green:"#00ed64",
        darkgreen:"#00684a",

			},
		},
		plugins: [],
	},
};
