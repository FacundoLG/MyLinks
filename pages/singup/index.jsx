import React, { useState } from "react";

const SingUp = () => {
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const RegistUser = () => {
    fetch("http://localhost:3000/api/auth/singup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        email: userEmail,
        password: userPassword,
        confirmPassword: userConfirmPassword,
      }),
    });
  };
  return (
    <div className="Auth">
      <div className="AuthContainer">
        <p className="title">Linking</p>
        <div className="AuthForm">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Mail</label>
          <input
            type="text"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <label>ConfirmPassword</label>
          <input
            type="password"
            onChange={(e) => {
              setUserConfirmPassword(e.target.value);
            }}
          />
          <button onClick={RegistUser}>Register</button>
          <p className="error">Error</p>
        </div>
        <i>By Facundo Gimenez</i>
      </div>
    </div>
  );
};

export default SingUp;
