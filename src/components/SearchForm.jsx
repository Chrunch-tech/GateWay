import { Component } from "react";
import "../scss/SearchForm.scss";

class SearchForm extends Component {
  state = {
    on_submit: this.props.on_submit,
    on_change: this.props.on_change,
    on_click: this.props.on_click,
    input_value: this.props.input_value,
    _id: this.props._id,
  };
  render() {
    return (
      <form onSubmit={this.state.on_submit}>
        <div className="text-box-container">
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={this.state.input_value}
            onChange={this.state.on_change}
            id={this.state._id}
          />
          <button className="icon-gateway-btn" onClick={this.state.on_click}>
            <img src="/assets/search.svg" alt="search-icon" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
