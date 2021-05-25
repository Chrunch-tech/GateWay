import { Component } from "react";
import NavBar from "../Navbar.jsx";
import Card from "../card/Card.jsx";
import PrimaryCard from "../card/primary_card.jsx";
import "../../scss/SearchPage.scss";

class SearchPage extends Component {
  state = { query: "", popular_places_data: [] };

  set_qurey = (q) => {
    this.setState({ query: q.target.value });
  };

  handle_form_submit = (event) => {
    this.hendle_qurey(event);
  };

  render() {
    console.log(this.state);
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
                  <Card id="header-card" class_name="card">
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
                            className="icon-gateway-btn"
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
            <div className="cards-container">
              {this.state.popular_places_data.map((data) => (
                <PrimaryCard
                  title={data.title}
                  img_url={data.img_url}
                  discryption={data.discryption}
                  button_title="Let's go"
                  key={this.state.popular_places_data.indexOf(data)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "http://localhost:3001/unsplash-proxy&query=get_random_places/null"
    ).then((result) => {
      result.json().then((responce) => {
        let cleaned_data = [];
        responce.map((data) => {
          const img_url = data.urls.small;
          let discryption = data.description + ", " + data.alt_description;
          let title = "";
          for (let tag of data.tags) {
            title = title + " " + tag.title;
          }
          if (!title) {
            title = "No title";
          }
          if (discryption.length > 100) {
            discryption = discryption.slice(0, 100) + "...";
          }
          cleaned_data.push({ title: title, img_url: img_url, discryption });
        });
        this.setState({ popular_places_data: cleaned_data });
      });
    });
  }

  clean_fetched_data() {
    let cleaned_data = [];
    this.state.popular_places_data.map((data) => {
      const img_url = data.urls.small;
      let discryption = data.description + ", " + data.alt_description;
      let title = "";
      for (let tag of data.tags) {
        title = title + " " + tag.title;
      }
      if (!title) {
        title = "No title";
      }
      if (discryption.length > 100) {
        discryption = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit a,
        pariatur dignissimos magni ducimus, sunt quod asperiores quisquam`;
      }
      cleaned_data.push({
        title: title,
        img_url: img_url,
        discryption: discryption,
      });
    });
    console.log(cleaned_data);
    this.setState({ popular_places_data: cleaned_data });
  }

  hendle_qurey(event) {
    event.preventDefault();
  }
}

export default SearchPage;
