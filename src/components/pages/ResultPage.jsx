import { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import SearchForm from "../SearchForm";
import Card from "../card/Card.jsx";
import CardsContainer from "../CardsContainer.jsx";
import "../../scss/ResultPage.scss";
import Footer from "../Footer.jsx";
import Pagination from "@material-ui/lab/Pagination/Pagination";
// import Redirect from "react-router-dom";
import { Redirect } from "react-router";

class ResultPage extends Component {
  state = {
    qurey: "",
    page_on: this.props.match.params.page_on,
    cards_container: null,
    redirect_url: null,
  };

  set_qurey = (q) => {
    this.setState({ query: q.target.value });
  };

  handle_form_submit = (event) => {
    this.hendle_qurey(event);
  };

  call_hendle_pagination = (e) => {
    this.handle_pagination_changes(e);
  };

  render_cards_container = () => (
    <CardsContainer
      fetch_url={`http://localhost:3001/unsplash-proxy&query=${this.state.result_query}/${this.state.page_on}`}
    />
  );

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
                  _id="result-page-form"
                />
              </div>
            </Card>
          </div>
          <div className="bottom-section">
            <CardsContainer
              fetch_url={`http://localhost:3001/unsplash-proxy&query=${this.props.match.params.qurey}/${this.state.page_on}`}
            />
          </div>
        </div>

        <div className="pagination-container">
          <Pagination
            count={5}
            variant="outlined"
            shape="rounded"
            onChange={this.call_hendle_pagination}
          />
        </div>
        <Footer _id="result-page-footer" />
      </div>
    );
  }

  componentDidMount() {
    const form = document.getElementById("result-page-form");
    form.value = this.props.match.params.qurey;
    const result_query = this.state.result_query;
    const page_on = this.state.page_on;
    this.setState({
      cards_container: (
        <CardsContainer
          fetch_url={`http://localhost:3001/unsplash-proxy&query=${result_query}/${page_on}`}
        />
      ),
    });
  }

  hendle_qurey(event) {
    event.preventDefault();
    if (this.state.query !== "") {
      window.location.replace(`/search&q=${this.state.query}/${1}`);
    }
  }

  handle_pagination_changes(e) {
    if (
      e.target.nodeName !== "svg" ||
      e.target.parentElement.getAttribute("aria-label") !== null
    ) {
      console.log(e.target.nodeName);
      const page_on = parseInt(
        e.target.getAttribute("aria-label").match(/\d+/)[0]
      );
      window.location.replace(
        `/search&q=${this.props.match.params.qurey}/${page_on}`
      );
    } else {
      const arrow_function = e.target.parentElement.getAttribute("aria-label");
      console.log(arrow_function);
    }
  }
}

export default withRouter(ResultPage);
