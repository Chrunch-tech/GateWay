import React, { Component } from "react";
import SearchPage from "./pages/SearchPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import GreetingPage from "./pages/GreetingPage.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    pages: [
      { component: SearchPage, route: "/", id: 1 },
      { component: ResultPage, route: "/search&q=:qurey/:page_on", id: 2 },
      { component: GreetingPage, route: "/greeting", id: 3 },
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
