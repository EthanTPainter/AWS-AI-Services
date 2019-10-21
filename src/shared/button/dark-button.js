import React, { useState } from "react";
import CheckMark from "../../../assets/dark-mode/CheckMark.svg";

import "../../css/shared/dark-mode.css";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div id="dark-mode-btn" onClick={handleDarkModeClick}>
      <h4 id="dark-mode-txt">Dark Mode</h4>
      {darkMode ? <CheckMark id="check-mark" /> : undefined}
    </div>
  );
};
