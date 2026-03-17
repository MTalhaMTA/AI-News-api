import React, { useState } from "react";
import "../screens/UserFormScreen.css";

const UserFormScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    section: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your details have been submitted!");
  };

  return (
    <div className="form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Subscribe for Daily News</h2>

        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Section Selection */}
        <select
          name="section"
          value={formData.section}
          onChange={handleChange}
          required
        >

       

          <option value="">-- Select Section --</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="ai">AI News</option>
        </select>

        {/* Description Field */}
        <textarea
          name="description"
          placeholder="Enter a description of what you want..."
          value={formData.description}
          onChange={handleChange}
          rows="2"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserFormScreen;
