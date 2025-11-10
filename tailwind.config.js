// tailwind.config.js
export default {
    darkMode: false, // toggle dark mode via class on <html>
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                bgDark: "var(--bg-dark)",
                bgLight: "var(--bg-light)",
                textMain: "var(--text)",
                textMuted: "var(--text-muted)",
            },
        },
    },
    plugins: [],
};
