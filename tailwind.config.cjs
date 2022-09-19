module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#141519',
          primary: '#202731',
          light: '#262F36'
        },
        text: {
          orange: '#FC7613',
          gray: '#7B818D',
        },
      },
    },
  },
  plugins: [],
};
