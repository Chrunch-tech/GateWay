import React, { Component } from "react";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    pages: [
      { component: <HomePage key={0} />, route: "/" },
      { component: <SearchPage key={1} />, route: "/search" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              {this.state.pages.map((page) => (
                <Route exact path={page.route}>
                  {page.component}
                </Route>
              ))}
            </Switch>
          </Router>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
