/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            "marineBlue": "hsl(213, 96%, 18%)",
            "purplishBlue": "hsl(243, 100%, 62%)",
            "pastelBlue": "hsl(228, 100%, 84%)",
            "lightBlue": "hsl(206, 94%, 87%)",
            "strawberryRed": "hsl(354, 84%, 57%)"
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [],
}
