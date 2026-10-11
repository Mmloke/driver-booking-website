const path = require('path')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          green: '#10B981',
          gold: '#F59E0B',
          slate: '#0F172A'
        }
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(37, 99, 235, 0.35)'
      }
    }
  },
  plugins: []
}
