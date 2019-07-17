import React from "react";
import { connect } from "react-redux";
import * as showActions from "./../../redux/actions/showActions";

class ShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: { title: "" } };
  }
  handleChange = event => {
    const newShow = { ...this.state.show, title: event.target.value };
    this.setState({ show: newShow });
  };
  handleSubmit = event => {
    event.preventDefault();
    debugger;
    this.props.dispatch(showActions.CreateShow(this.state.show));
    this.setState({ show: { title: "" } });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Show</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.show.title}
        />
        <button> Save</button>
        {this.props.show.map(show => (
          <div key={show.title}>{show.title}</div>
        ))}
      </form>
    );
  }
}
function mapStateToProps(state, OwnProps) {
  return {
    show: state.show
  };
}

export default connect(mapStateToProps)(ShowForm);
