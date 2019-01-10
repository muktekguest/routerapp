import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Country from "./components/Country";
import About from "./components/About";
import Contact from "./components/Contact";

export default (
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/country/:countryName" component={ Country } />
    <Route path="/about" exact component={ About } />
    <Route path="/contact" exact component={ Contact } />
  </Switch>
);
