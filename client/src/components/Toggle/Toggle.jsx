import React from "react";
import "./toggle.css";
import moon from "./moon.svg";
import sun from "./sun.svg";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div
      onClick={toggleTheme}
      className={
        theme === "light" ? "toggleButton lightTheme" : "toggleButton darkTheme"
      }
    >
      {theme === "light" ? <img src={sun} alt="sun_icon"/> : <img src={moon} alt="moon_icon"/>}
    </div>
  );
};

export default Toggle;
