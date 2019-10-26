import React, { useState } from "react";
import { useLayoutEffect } from 'react';

import { ServiceGrid } from "./landing-page/grid";
import { Header, Footer, DarkModeButton } from "./shared";

import "./css/App.css";

export const App = props => {
  // Default to Light theme
  const [themeIndex, setThemeIndex] = useState(0);

  useTheme(themes[themeIndex]);

  return (
    <div id="app">
      <div>
        <DarkModeButton themeSetter={setThemeIndex}/>
        <Header
          title="AWS AI Services"
          mainDescription="Below are a list of Artifical Intelligence (AI) Services provided by
        AWS. Select a service below to see an overview of the service and how to use it."
        />
      </div>
      <ServiceGrid history={props.history} />
      <Footer repoUrl="https://www.github.com/EthanTPainter/AWS-AI-Services" />
    </div>
  );
};

// Light and dark themes for the application
const themes = [
  // Light
  {
    'background': '#ffffff',
  },
  // Dark
  {
    'background': '#000000',
  },
];

export  function useTheme(theme) {
  useLayoutEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
}