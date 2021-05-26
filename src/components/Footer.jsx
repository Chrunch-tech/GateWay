import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id={this.props._id}>
        <span id="footer-text">&#169; Uday 2021. All right reserved</span>
      </footer>
    );
  }
}

export default Footer;
