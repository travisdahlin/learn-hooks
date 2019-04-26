import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
const Home = lazy(() => import("./containers/Home"));
const Login = lazy(() => import("./containers/Login"));
const NotFound = lazy(() => import("./containers/NotFound"));

export default ({ childProps }) => (
  <Suspense fallback={<div>Loading…</div>}>
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);
