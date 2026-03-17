import React from "react";
import "../components/Button.css";

const Button = ({ text, primary }) => {
  return (
    <button className={primary ? "btn primary" : "btn"}>{text}</button>
  );
};

export default Button;
