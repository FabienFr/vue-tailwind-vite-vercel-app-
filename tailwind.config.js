module.exports = {
    mode: 'jit',
    purge: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                supercell: ["supercell-magic-webfont", "cursive"],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
