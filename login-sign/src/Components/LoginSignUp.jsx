import React, { useState } from "react";
import "./LoginSign.css";
import user from "../assets/user.png";
import email from "../assets/ema.png";
import password from "../assets/password.png";

function LoginSignUp() {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <h1 className="text">{action}</h1>
      {action === "Login" ? (
        <div></div>
      ) : (
        <div className="inputs">
          <img src={user} alt="" />
          <input type="text" />
        </div>
      )}

      <div className="inputs">
        <img src={email} alt="" />
        <input type="email" />
      </div>
      <div className="inputs">
        <img src={password} alt="" />
        <input type="password" />
      </div>
      <div className="forgot-password">
        Lost Password?<span>Click Here</span>
      </div>
      <div className="buttons">
        <div
          className={action === "Sign up" ? "log-grey" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Login" ? "log-grey" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
