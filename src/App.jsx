import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Tasks from "./views/Tasks"

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/tasks" component={Tasks} exact />
          <Route path="*" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
