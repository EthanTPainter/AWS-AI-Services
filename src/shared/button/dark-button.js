import React, { useState } from "react";
import CheckMark from "../../../assets/dark-mode/CheckMark.svg";

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

  // If dark mode is enabled, swap to light
  // Otherwise swap from light to dark
  const handleDarkModeClick = () => {
    if (darkMode) {
      setDarkMode(false);
      props.themeSetter(0);
      setDarkModeText(darkModeTextOptions.active);
    }

    if (!darkMode) {
      setDarkMode(true);
      props.themeSetter(1);
      setDarkModeText(darkModeTextOptions.disable);
    }
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
      <h5>{darkModeText}</h5>
    </div>
  );
};
