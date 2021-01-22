import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    Projects,
    LandingPage,
    Start,
    Doc,
    Login,
    ProjectDetail,
} from "./pages";

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/start" component={Start} />
    <Route path="/doc" component={Doc} />
    <Route path="/login" component={Login} />
    <Route
      path="/project/:projectname/:reponame"
      component={ProjectDetail}
    />
  </BrowserRouter>
)

export default Router;
