import React from "react";

const SingUp = () => {
  return (
    <div className="Auth">
      <div className="AuthContainer">
        <p className="title">Linking</p>
        <div className="AuthForm">
          <label for="fname">Username</label>
          <input type="text" />
          <label for="fname">Mail</label>
          <input type="text" />
          <label for="fname">Password</label>
          <input type="password" />
          <label for="fname">ConfirmPassword</label>
          <input type="password" />
          <button>Login</button>
          <p className="error">Error</p>
        </div>
        <i>By Facundo Gimenez</i>
      </div>
    </div>
  );
};

export default SingUp;
