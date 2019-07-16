import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ShowForm from "./show/AddShow";
import Header from "./common/Header";
import Page404 from "./404";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/show" component={ShowForm} />

        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
