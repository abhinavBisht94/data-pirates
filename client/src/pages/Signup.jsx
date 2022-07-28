import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/signup.css";

export const Signup = ({ googleButtonImage, appleButtonLogo }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user in signup:", user);
  };

  return (
    <div id="signup">
      <form id="signupForm" onSubmit={handleSubmit}>
        <input
          className="signupFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
          onChange={handleChange}
        />

        <input
          className="signupFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
