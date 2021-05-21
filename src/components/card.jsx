import { Component } from "react";
import "../scss/card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
