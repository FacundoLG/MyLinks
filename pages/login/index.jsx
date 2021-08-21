import React from "react";

const Login = () => {
  return (
    <div className="Auth">
      <div className="AuthContainer">
        <p className="title">Linking</p>
        <div className="AuthForm">
          <label for="fname">Username</label>
          <input type="text" />
          <label for="fname">Password</label>
          <input type="password" />
          <button>Login</button>
          <p className="error">Error</p>
        </div>
        <i>By Facundo Gimenez</i>
      </div>
    </div>
  );
};

export default Login;
