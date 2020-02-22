import React from "react";
import { Auth } from "./App";
export default function Login() {
  const isAuth = React.useContext(Auth);
  const handleLogin = () => {
    isAuth.setAuth(true);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
