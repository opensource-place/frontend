import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Projects, LandingPage, Start, Doc, Login } from "./pages";

const Router = () =>
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/start" component={Start} />
    <Route path="/doc" component={Doc} />
    <Route path="/login" component={Login} />
  </BrowserRouter>

export default Router;
