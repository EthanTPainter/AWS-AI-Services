import React, { useState } from "react";

import "../../css/shared/dark-mode.css";

export const DarkModeButton = props => {
  const darkModeTextOptions = {
    default: "Dark Mode",
    active: "Active",
    enable: "Enable",
    disable: "Disable",
  };
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
    if (localStorage.getItem("theme") === "dark-theme") {
      setDarkModeText(darkModeTextOptions.active);
    }
    // Swap to dark mode
    else {
      setDarkModeText(darkModeTextOptions.disable);
    }

    // Add or remove dark attribute
    toggleTheme();
  };

  const onMouseEnterHandler = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setDarkModeText(darkModeTextOptions.disable);
    }
    else {
      setDarkModeText(darkModeTextOptions.enable);
    }
  };

  const onMouseLeaveHandler = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setDarkModeText(darkModeTextOptions.active);
    }
    else {
      setDarkModeText(darkModeTextOptions.default);
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
