import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Account Created Successfully");

    navigate("/");

  }

  return (

    <div className="container mt-5" style={{ maxWidth: "400px" }}>

      <h2 className="text-center">Create Account</h2>

      <input
        className="form-control mt-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mt-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-warning w-100 mt-3"
        onClick={registerUser}
      >
        Sign Up
      </button>

    </div>

  );
}

export default Register;