import { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import SearchForm from "../SearchForm";
import Card from "../card/Card.jsx";
import CardsContainer from "../CardsContainer.jsx";
import "../../scss/ResultPage.scss";
import Footer from "../Footer.jsx";

class ResultPage extends Component {
  state = { result_query: this.props.match.params.qurey };

  set_qurey = (q) => {
    this.setState({ query: q.target.value });
  };

  handle_form_submit = (event) => {
    this.hendle_qurey(event);
  };

  render() {
    return (
      <div className="result-page-container">
        <div className="result-page">
          <div id="header">
            <Navbar class_name="nav-primary" title="GateWay" />
            <Card class_name="card" id="header-card">
              <div className="card-content">
                <SearchForm
                  on_click={this.handle_form_submit}
                  on_submit={this.handle_form_submit}
                  on_change={this.set_qurey}
                  input_value={this.state.result_query}
                />
              </div>
            </Card>
          </div>
          <div className="bottom-section">
            <CardsContainer
              fetch_url={`http://localhost:3001/unsplash-proxy&query=${
                this.state.result_query
              }/${1}`}
            />
          </div>
        </div>
        <Footer _id="result-page-footer" />
      </div>
    );
  }

  hendle_qurey(event) {
    event.preventDefault();
    console.log(this.props.match.qurey);
  }
}

export default withRouter(ResultPage);
