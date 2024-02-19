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
        neonColor: '#f79b20', 
        backgroundColor:'#d4d3dc',
        buttonColor:'#ad956b',
        shadowColor :"#C28455",
        logoBackground: '#384454',
        goldText: '#d4af66',
        


      },
      boxShadow: {
        'neonBorder': '0 0 10px #f79b20, 0 0 20px #f79b20, 0 0 30px #f79b20',
      },
    },
  },
  plugins: [],
  
}
