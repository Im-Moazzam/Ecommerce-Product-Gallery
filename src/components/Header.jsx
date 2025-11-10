import React, { useState, useEffect } from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(
        () =>
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    useEffect(() => {
        const body = document.body;
        if (isDark) {
            body.classList.remove("light");
            localStorage.theme = "dark";
        } else {
            body.classList.add("light");
            localStorage.theme = "light";
        }
    }, [isDark]);

    return (
        <header className="p-4 bg-bg text-textMain flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">Product Gallery</h1>
            <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full border 
                border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300"            >
                {isDark ? "🌙 Dark" : "☀️ Light"}
            </button>
        </header>
    );
};

export default Header;
