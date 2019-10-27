import React, { useState } from "react";

import "../../css/shared/dark-mode.css";

export const DarkModeButton = props => {
  const darkModeTextOptions = {
    default: "Dark Mode",
    active: "Active",
    enable: "Enable",
    disable: "Disable",
  };
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeText, setDarkModeText] = useState(darkModeTextOptions.default);

  // function to set a given theme/color-scheme
  const setTheme = themeName => {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  };

  // function to toggle between light and dark theme
  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  // Immediately invoked function to set the theme on initial load
  (function() {
    if (localStorage.getItem("theme") === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  })();

  const handleDarkModeClick = () => {
    // Swap to light mode
    if (darkMode) {
      setDarkMode(false);
      setDarkModeText(darkModeTextOptions.active);
    }

    // Swap to dark mode
    if (!darkMode) {
      setDarkMode(true);
      setDarkModeText(darkModeTextOptions.disable);
    }

    // Add or remove dark attribute
    toggleTheme();
  };

  const onMouseEnterHandler = () => {
    if (!darkMode) {
      setDarkModeText(darkModeTextOptions.enable);
    }

    if (darkMode) {
      setDarkModeText(darkModeTextOptions.disable);
    }
  };

  const onMouseLeaveHandler = () => {
    if (!darkMode) {
      setDarkModeText(darkModeTextOptions.default);
    }

    if (darkMode) {
      setDarkModeText(darkModeTextOptions.active);
    }
  };

  return (
    <div
      id="dark-mode-btn"
      onClick={handleDarkModeClick}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <h2 id="dark-mode-txt">{darkModeText}</h2>
    </div>
  );
};
