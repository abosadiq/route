import React, { useContext } from "react";
import { Auth } from "./App";
import Todo from "./todolist/Todo";
export default function Dashboard() {
  const isAuth = useContext(Auth);
  const handleLogout = () => {
    isAuth.setAuth(false);
    localStorage.clear();
  };
  return (
    <div>
      <Todo />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
