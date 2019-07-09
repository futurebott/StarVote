import React from 'react';
class Form extends React.Component {
    state={
        userInput : ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.userInput)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value = {this.state.userInput} onChange= {event => this.setState({userInput: event.target.value})} placeholder="User Name" />
                <button>Add User</button>
            </form>
        );
    }
}
export default Form;