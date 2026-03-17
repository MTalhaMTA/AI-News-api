import React from "react";
import "../components/inputField.css";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
