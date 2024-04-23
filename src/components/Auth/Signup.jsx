// Signup.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.errorMessage);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData, navigate));
    alert("User created successfully!");
  };

  return (
    <div className="login">
      <h4>Signup</h4>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form style={{ marginBottom: "140px" }} onSubmit={handleSubmit}>
        <div className="text_area">
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="text_input"
            placeholder="Name"
          />
        </div>
        <div className="text_area">
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="text_input"
            placeholder="Email"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="text_input"
            placeholder="password"
          />
        </div>
        <input type="submit" value="Submit" className="btn" />
      </form>
      {/* <a className="link" href="/">Login</a> */}
      <Link className="link" to="/">Login</Link>
    </div>
  );
}

export default Signup;
