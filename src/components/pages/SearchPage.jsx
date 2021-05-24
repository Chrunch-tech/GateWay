import { Component } from "react";
import NavBar from "../Navbar.jsx";
import Card from "../card";
import "../../scss/SearchPage.scss";

class SearchPage extends Component {
  state = { query: "" };

  set_qurey = (q) => {
    this.setState({ query: q.target.value });
  };

  handle_form_submit = (event) => {
    this.hendle_qurey(event);
  };

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
                          <input
                            type="text"
                            placeholder="Search"
                            name="search"
                            onChange={this.set_qurey}
                          />
                          <button
                            className="icon-btn"
                            onClick={this.handle_form_submit}
                          >
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
          <div id="search-page-bottom">
            <h2>Some popular places</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }

  hendle_qurey(event) {
    event.preventDefault();
    fetch("http://localhost:3001/unsplash-proxy&qurey=get_random_photo").then(
      (result) => {
        result.json().then((data) => {
          console.log(data);
        });
      }
    );
  }
}

export default SearchPage;
