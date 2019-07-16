import React from 'react';
class  RatingInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rating: 1 }
        this.ClickHandle = this.ClickHandle.bind(this);
    }
     ClickHandle = (event) => {
        event.preventDefault();
        console.log(this.state.rating);
       // this.setState({rating: event.target.value})
    }
    HandleChange = (event) => {
        this.setState({rating: event.target.value})
        this.props.updateRating(event.target.value)
    }

    render() { 
        return (
        <form method="post"  onSubmit={this.ClickHandle}>
        <select defaultValue = {this.state.rating} onChange={this.HandleChange}>
        <option  value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
        <option value='4'>Four</option>
        <option value='5'>Five</option>
        </select> 
        <button>Submit</button>
        </form>
        );
    }
}
 
export default RatingInput;