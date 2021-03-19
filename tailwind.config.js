const colors = require('tailwindcss/colors')
module.exports = {
    purge: ['./pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',],
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            blue: colors.lightBlue,
            yellow: colors.amber,
            green: colors.green,
            purple: colors.purple,
            teal: colors.teal
        },
        extend: {},
    },
    variants: {},
    plugins: [],
}