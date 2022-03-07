module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        headerHeight: 'var(--header-height)',
        footerHeight: 'var(--footer-height)',
        mainHeight: 'var(--main-height)',
      },
      colors: {
        black: '#090e1a',
      },
    },
  },
  plugins: [],
}
