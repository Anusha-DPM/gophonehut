import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'sansation': ['Sansation', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#007dd9',
        'custom-green': '#71af43',
        'custom-gray': '#f2f2f2',
        'nav-blue': '#0e72d2',
        'hover-gray': '#6d6e71',
      },
    },
  },
  plugins: [],
}
export default config
