module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    extend: {
      colors: {
        black: "#262525",
        white: "#BEBEBE"
      },
      fontFamily: {
        display: [
          "Neue World Condensed",
          'Helvetica', 'Arial', 'sans-serif'
        ],
        sans: [
          "Migra",
          'Helvetica', 'Arial', 'sans-serif'
        ],
      },
      lineHeight: {
        'negative': '0.85',
      },
    }
  },
  corePlugins: {
    container: false
  }
}