/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neon: '#f79b20', // Ajoutez la couleur de votre effet néon
      },
      boxShadow: {
        'neonBorder': '0 0 10px #f79b20, 0 0 20px #f79b20, 0 0 30px #f79b20',
      },
    },
  },
  plugins: [],
  
}
