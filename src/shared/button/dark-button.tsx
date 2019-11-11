/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const DarkModeButton = () => {
  const darkModeTextOptions = {
    default: "Dark Mode",
    active: "Active",
    enable: "Enable",
    disable: "Disable",
  };
  const [darkModeText, setDarkModeText] = React.useState(
    darkModeTextOptions.default
  );

  // function to set a given theme/color-scheme
  const setTheme = (themeName: string) => {
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
    } else {
      setDarkModeText(darkModeTextOptions.enable);
    }
  };

  const onMouseLeaveHandler = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setDarkModeText(darkModeTextOptions.active);
    } else {
      setDarkModeText(darkModeTextOptions.default);
    }
  };

  return (
    <div
      css={DarkModeBtnStyle}
      onClick={handleDarkModeClick}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <h2 css={DarkModeTextStyle}>{darkModeText}</h2>
    </div>
  );
};

const DarkModeBtnStyle = css`
  background: var(--dark-mode-btn-color);
  width: 10em;
  height: 3em;
  border-radius: 70px;
  margin: 2em 0 0 7em;

  :hover {
    box-shadow: var(--dark-mode-btn-hover);
  }
`;

const DarkModeTextStyle = css`
  color: var(--text-color);
  text-align: center;
  margin: 0;
  padding-top: 0.5em;
`;
