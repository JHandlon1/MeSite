document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("MyTheme");
    console.log("Applying saved theme:", savedTheme); // Debugging log

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Toggle theme and save preference
function toggleTheme(theme) {
    const body = document.body;
    const currentTheme = localStorage.getItem("MyTheme");

    // Clear any existing theme class from the body
    if (currentTheme) {
        body.classList.remove(currentTheme);
    }

    // Apply the new theme class and save it to localStorage
    if (theme !== currentTheme) {
        body.classList.add(theme);
        localStorage.setItem("MyTheme", theme);
        console.log("Theme set and saved to:", theme); // Debugging log
    } else {
        // If theme is toggled off, remove it from localStorage
        localStorage.removeItem("MyTheme");
        console.log("Theme removed from localStorage"); // Debugging log
    }
}