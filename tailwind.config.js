module.exports = {
  mode: 'jit',
  content: ['index.html', './public/**/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#848484',
      },
    },
  },
  variants: {
    width: ['hover', 'focus'],
    extend: {},
  },
};
