import { Component } from "react";
import "../scss/NavBar.scss";

class NavBar extends Component {
  state = {
    title: this.props.title,
    class_name: this.props.class_name,
  };

  render() {
    return (
      <header>
        <nav className={this.state.class_name}>
          <span id="nav-title">{this.state.title}</span>
        </nav>
      </header>
    );
  }
}

export default NavBar;
