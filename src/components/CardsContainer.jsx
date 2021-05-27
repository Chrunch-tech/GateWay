import { Component } from "react";
import PrimaryCard from "./card/primary_card.jsx";
import "../scss/CardsContainer.scss";

class CardsContainer extends Component {
  state = { fetch_url: this.props.fetch_url, results: [] };
  render() {
    return (
      <div className="cards-container">
        {this.state.results.map((result) => (
          <PrimaryCard
            title={result.title}
            img_url={result.img_url}
            discryption={result.discryption}
            button_title="Let's go"
            key={this.state.results.indexOf(result)}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch(this.state.fetch_url).then((result) => {
      result.json().then((responce) => {
        console.log(responce);
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
        this.setState({ results: cleaned_data });
      });
    });
  }
}

export default CardsContainer;
