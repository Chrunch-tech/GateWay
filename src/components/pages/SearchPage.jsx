import { Component } from "react";
import NavBar from "../Navbar.jsx";
import Card from "../card";
import "../../scss/SearchPage.scss";

class SearchPage extends Component {
  render() {
    return (
      <div id="search-page-container">
        <div id="search-page">
          <div id="search-page-header">
            <NavBar
              class_name="nav-primary"
              title="GateWay"
              logo_img_url="./assets/logo.jpg"
              links={[{ url: "./", title: "About GateWay", id: 0 }]}
            />
            <main>
              <section id="hero-section">
                <div id="left-hero-section">
                  <Card id="header-card">
                    <div className="card-content">
                      <h1>
                        Find your <br /> <span>distination</span>
                      </h1>
                      <form onSubmit={this.handle_form_submit}>
                        <div className="text-box-container">
                          <input type="text" placeholder="Search" />
                          <button className="icon-btn">
                            <img src="./assets/search.svg" alt="search-icon" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </Card>
                </div>
                <div id="right-hero-section">
                  <img src="./assets/search_page_hero.svg" alt="hero-img" />
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    );
  }

  handle_form_submit() {
    console.log("Submit");
  }
}

export default SearchPage;
