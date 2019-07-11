import React from 'react';
class  RatingInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { submitRating: 0 }
    }
     ClickHandle = (event) => {
        event.preventDefault();
        console.log('I am submitteed');
    }
    render() { 
        return (
        <form method="post" onSubmit={this.ClickHandle}>
        <select><option value='1'>One</option>
        <option value='1'>two</option>
        <option value='1'>three</option>
        <option value='1'>four</option>
        </select> 
        <button>Submit</button>
        </form>
        );
    }
}
 
export default RatingInput;