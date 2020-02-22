import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import { Auth } from "./App";
import Dashboard from "./Dashboard";
export default function Routes() {
  const isAuth = useContext(Auth);
  return (
    <div>
      <Switch>
        <ProtectedLogin exact path="/" component={Login} auth={isAuth.auth} />
        <ProtectedRoute
          path="/dashboard"
          auth={isAuth.auth}
          component={Dashboard}
        />
        <Route path="*" component={() => "404 page not found"} />
      </Switch>
    </div>
  );
}
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};
