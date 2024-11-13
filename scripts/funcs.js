// Check for dark mode preference on page load
window.onload = function() {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      document.querySelector(".dark-mode-toggle").classList.add("dark-mode");
    }
  };
  
  // Toggle dark mode and save preference in localStorage
  function darkMode() {
      var bod = document.body;
      bod.classList.toggle("dark-mode");
  
      var darkModeToggleButton = document.querySelector(".dark-mode-toggle");
      darkModeToggleButton.classList.toggle("dark-mode");
  
      // Save the dark mode state to localStorage
      if (bod.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.removeItem("darkMode");
      }
  }