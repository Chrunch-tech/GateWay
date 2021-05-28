import React, { Component } from "react";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    pages: [
      { component: HomePage, route: "/", id: 0 },
      { component: SearchPage, route: "/search", id: 1 },
      { component: ResultPage, route: "/search&q=:qurey/:page_on", id: 2 },
    ],
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {this.state.pages.map((page) => (
              <Route exact path={page.route} key={page.id}>
                {<page.component key={page.id} />}
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
