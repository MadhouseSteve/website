const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                purple: {
                    light: '#cec6f2',
                    DEFAULT: '#9b8fd2',
                    dark: '#7970a3',
                },
                gray: colors.trueGray,
                warm: colors.warmGray,
                cool: colors.coolGray,
                tint: colors.blueGray,
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
