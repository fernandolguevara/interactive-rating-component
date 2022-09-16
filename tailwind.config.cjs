module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#220930',
          gray: '#C6C2C7',
        },
      },
    },
  },
  plugins: [],
};
