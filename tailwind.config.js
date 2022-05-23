module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        screens: {
            xxxs: '320px',
            xxs: '375px',
            xs: '425px',
            sm: '768px',
            md: '1024px',
            xl: '1440px',
            '2xl': '2560px',
        },
        colors: {
            bordeaux: '#a21915',
            rouge: '#db0c14',
            orange: '#e95432',
            beige: '#f2905b',
            lightgrey: '#f9fafb',
            white: '#f8fafc',
            background: '#e1e9f5',
        },
        extend: {
            fontFamily: {
                supercell: ['supercell-magic-webfont', 'cursive'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
