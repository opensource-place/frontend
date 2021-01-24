import React, { useEffect } from "react";

const Login = () => {
  require("dotenv").config();

  useEffect(() => {
    const clientId = process.env.REACT_APP_GH_CLIENT_ID; // Your OAuth ID
    const redirect = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
    window.location.replace(redirect);
  });

  return (
    <div>
      <h1>Redirecting to GitHub</h1>
    </div>
  );
};

export default Login;
