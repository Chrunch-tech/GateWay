import { Component } from "react";
import "../scss/NavBar.scss";

class NavBar extends Component {
  state = {
    title: this.props.title,
    class_name: this.props.class_name,
    links: this.props.links,
    logo_img_url: this.props.logo_img_url,
  };

  render_logo_img = () => {
    if (this.state.logo_img_url !== undefined) {
      return <img src={this.state.logo_img_url} alt="logo-img" id="logo-img" />;
    }
  };

  render() {
    return (
      <header>
        <nav className={this.state.class_name}>
          <div className="left-side">
            {this.render_logo_img()}
            <span id="nav-title">{this.state.title}</span>
          </div>
          <div className="right-side">
            <ul>
              {this.state.links !== undefined &&
                this.state.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} key={link.id}>
                      {link.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
