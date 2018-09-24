import React from "react";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" components={Articles} />
        <Route exact path="/articles" components={Articles} />
        <Route exact path="/articles/:id" components={Detail} />
        <Route components={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
