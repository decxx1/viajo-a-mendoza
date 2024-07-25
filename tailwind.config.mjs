/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			textShadow: {
				'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
				'md': '3px 3px 6px rgba(0, 0, 0, 0.15)',
				'lg': '4px 4px 8px rgba(0, 0, 0, 0.2)',
				'xl': '5px 5px 10px rgba(0, 0, 0, 0.25)',
			  },
			colors: {
				"primary": {
					50: "#FFFBF5",
					100: "#FFF5E5",
					200: "#FFEDD1",
					300: "#FFE2B8",
					400: "#FFD89E",
					500: "#FFD08A",
					600: "#FFC670",
					700: "#FFBD59",
					800: "#f19913",
					900: "#754600",
					950: "#382200"
				},
				"semiBlack" : "#0e0e0e",
				"semiWhite" : "#f9f9f9"

			},
			fontFamily: {
                montserrat: ['Montserrat Variable', 'sans-serif'],
            },
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function({ addUtilities }) {
			const newUtilities = {
			  '.text-shadow': {
				textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
			  },
			  '.text-shadow-md': {
				textShadow: '3px 3px 6px rgba(0, 0, 0, 0.15)',
			  },
			  '.text-shadow-lg': {
				textShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
			  },
			  '.text-shadow-xl': {
				textShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
			  },
			  '.text-shadow-none': {
				textShadow: 'none',
			  },
			}
	  
			addUtilities(newUtilities, ['responsive', 'hover'])
		  }
	],
}
