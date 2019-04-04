import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/addProject/" exact component={AddProject} />
          <Route path="/test" exact render={() => <h1>Test</h1>} />
        </div>
      </Router>
    );
  }
}

export default App;
