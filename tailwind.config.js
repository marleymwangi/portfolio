module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'san-serif'],
      },
      colors: {
        'dark-blue': "#0F1624"
      },
      boxShadow: {
        white: '0 6px 12px 12px rgba(255, 255, 255, 0.03)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
