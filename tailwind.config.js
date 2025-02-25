/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths based on your project
	theme: {
		extend: {
			colors: {
				"x-high-surface": "var(--x-high-surface)",
				"x-low-surface": "var(--x-low-surface)",
				"brand-surface": "var(--brand-surface)",
				"danger-surface": "var(--danger-surface)",
				"danger-variant-surface": "var(--danger-variant-surface)",
				"warning-surface": "var(--warning-surface)",
				"warning-variant-surface": "var(--warning-variant-surface)",
				"xx-high-content": "var(--xx-high-content)",
				"medium-content": "var(--medium-content)",
				"low-content": "var(--low-content)",
				"danger-content": "var(--danger-content)",
				"warning-content": "var(--warning-content)",
			},
			borderRadius: {
				xs: "8px",
				s: "12px",
				m: "16px",
				l: "20px",
			},
			fontSize: {
				"label-m": ["16px", { lineHeight: "22px", letterSpacing: "0.16px", fontWeight: "500" }],
				"label-s": ["14px", { lineHeight: "17px", letterSpacing: "0.16px", fontWeight: "550" }],
				"body-m": ["16px", { lineHeight: "22px", letterSpacing: "0.01px", fontWeight: "400" }],
			},
		},
	},
	plugins: [],
};
