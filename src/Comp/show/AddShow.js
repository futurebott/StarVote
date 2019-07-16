import React from "react";

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
    alert(this.state.show.title);
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
      </form>
    );
  }
}
export default ShowForm;
