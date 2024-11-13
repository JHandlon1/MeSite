// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Expires in "days"
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`; // Ensure path is set to '/'
}

// Function to get a cookie
function getCookie(name) {
    const nameEq = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim spaces
        if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
    }
    return null; // Return null if the cookie is not found
}

// Function to delete a cookie
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`; // Expire cookie immediately
}

// Function to apply dark mode from localStorage or cookie on page load
function applyDarkMode() {
    const theme = getCookie("theme") || localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        setCookie("theme", "dark", 7)
    }
}

// Function to toggle dark mode and save it to localStorage and cookie
function toggleDarkMode() {
    const body = document.body;
    const theme = "dark-mode";

    // Check if dark mode is already applied
    if (!body.classList.contains(theme)) {
        body.classList.add(theme);
        localStorage.setItem("theme", "dark"); // Store preference in localStorage
        setCookie("theme", "dark", 7); // Save preference in cookie for 7 days
    } else {
        body.classList.remove(theme);
        localStorage.removeItem("theme"); // Remove preference from localStorage
        deleteCookie("theme"); // Remove the theme cookie
    }
}