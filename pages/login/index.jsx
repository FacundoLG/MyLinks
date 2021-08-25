import React, { useState } from "react";
const Login = () => {
  const [logUserName, setLogUsername] = useState("");
  const [logUserEmail, setLogUserEmail] = useState("");
  const [logUserPassword, setLogUserPassword] = useState("");
  const LoginUser = () => {
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: logUserName,
        email: logUserEmail,
        password: logUserPassword,
      }),
    })
      .then((data) => data.json())
      .then(console.log);
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
              setLogUsername(e.target.value);
              setLogUserEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setLogUserPassword(e.target.value);
            }}
          />
          <button onClick={LoginUser}>Login</button>
          <p className="error">Error</p>
        </div>
        <i>By Facundo Gimenez</i>
      </div>
    </div>
  );
};

export default Login;
