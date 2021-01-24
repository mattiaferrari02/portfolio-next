const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: 'media',
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.rose,
            blue: colors.lightBlue,
            yellow: colors.amber,
        },
        extend: {},
    },
    variants: {},
    plugins: [],
}