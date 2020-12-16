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
      opacity: {
        '0': '0',
        '15': '.15',
        '20': '.20',
        '35': '.35',
      },
      letterSpacing: {
        mini: '-.01275em',
      },
      lineHeight: {
        'negative': '0.85',
      },
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    margin: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus']
  }
}