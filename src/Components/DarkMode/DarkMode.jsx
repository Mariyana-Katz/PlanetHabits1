import React, { useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const handleToggle = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Optional: Set initial mode based on preference
    document.body.classList.remove("dark");
  }, []);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleToggle}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img
          src="/src/Components/DarkMode/Sun.svg"
          alt="Sun icon"
          width="24"
          height="24"
        />
        <img
          src="/src/Components/DarkMode/Moon.svg"
          alt="Moon icon"
          width="24"
          height="24"
        />
      </label>
    </div>
  );
};

export default DarkMode;
