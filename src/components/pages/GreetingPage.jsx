import { Component } from "react";
import Card from "../card/Card.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import "../../scss/GreetingPage.scss";

class GreetingPage extends Component {
  render() {
    return (
      <div className="greeting-page-container">
        <div className="greeting-page">
          <div id="header">
            <header>
              <nav className="nav-primary">
                <a href="/">GateWay</a>
              </nav>
            </header>
          </div>
          <div id="bottom-container">
            <div id="bottom">
              <Card class_name="card" id="header-card">
                <h1>Thanks for visiting GateWay</h1>
              </Card>
            </div>
          </div>
        </div>
        <Footer _id="greeting-page-footer" />
      </div>
    );
  }
}

export default GreetingPage;
