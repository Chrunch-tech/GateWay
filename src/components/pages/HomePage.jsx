import React, { Component } from "react";
import NavBar from "../Navbar.jsx";
import "../../scss/HomePage.scss";

class HomePage extends Component {
  state = {
    background_image: "assets/travel.jpg",
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="background"
          style={{
            backgroundImage: `url(${this.state.background_image})`,
          }}
        ></div>
        <NavBar class_name="nav-transparent" title="GateWay" />
        <div id="home-page">
          <section>
            <div className="section-container">
              <div className="svg-container">
                <img src="assets/houseroof.svg" alt="travel-img" />
              </div>
              <h1>GateWay</h1>
              <div className="para-container">
                <p>Happiness Is Travelling.</p>
              </div>
              <div className="btn-container">
                <a
                  href="#"
                  id="get_started_btn"
                  className="btn"
                  onMouseEnter={() => {
                    document.getElementById("get_started_btn").className =
                      "btn-hover";
                  }}
                  onMouseLeave={() => {
                    document.getElementById("get_started_btn").className =
                      "btn";
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
