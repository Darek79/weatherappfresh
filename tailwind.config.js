/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                pageBG: '#e2e8f0',
                pageDark: '#3C4856',
            },
        },
    },
    plugins: [],
};
