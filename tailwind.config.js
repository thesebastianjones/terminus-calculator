/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./asset/**/*.{html,js,jsx}",
        "./index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: ["retro"],
    },
}