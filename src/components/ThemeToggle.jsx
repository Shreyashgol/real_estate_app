// src/components/ThemeToggle.js
import React from "react";

function ThemeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="theme-toggle">
      Toggle {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeToggle;
