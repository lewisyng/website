module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      brutalReg: ['NimbusReg'],
      brutalBold: ['NimbusBold'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#000',
          },
        },
      },
    },
  },
  extend: {
    spacing: {
      headerHeight: 'var(--header-height)',
      footerHeight: 'var(--footer-height)',
      mainHeight: 'var(--main-height)',
    },
    colors: {
      black: 'var(--color-black)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
