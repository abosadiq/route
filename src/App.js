import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
export const Auth = createContext();
function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("login"));
    if (user) {
      setAuth(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(auth));
  }, [auth]);
  return (
    <div className="App">
      <Auth.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Auth.Provider>
    </div>
  );
}

export default App;
