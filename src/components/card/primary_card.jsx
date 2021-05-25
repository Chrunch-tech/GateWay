import { Component } from "react";
import Card from "./Card.jsx";
import "../../scss/primary_card.scss";
import Button from "@material-ui/core/Button/Button";

class PrimaryCard extends Component {
  state = {
    title: this.props.title,
    img_url: this.props.img_url,
    discryption: this.props.discryption,
    button_title: this.props.button_title,
  };
  render() {
    return (
      <Card class_name="card primary-card">
        <div className="card-content">
          <div
            className="img-container"
            style={{ backgroundImage: `url(${this.state.img_url})` }}
          ></div>
          <div className="text-container">
            <h3>{this.state.title}</h3>
            <p>{this.state.discryption}</p>
          </div>
          <Button variant="contained" className="gateway-btn-primary">
            {this.state.button_title}
          </Button>
        </div>
      </Card>
    );
  }
}

export default PrimaryCard;
