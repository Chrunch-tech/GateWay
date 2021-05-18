import React, { Component } from "react";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  state = {
    components: [<HomePage key={0} />],
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          {this.state.components.map((component) => component)}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
