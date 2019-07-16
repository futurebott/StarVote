import React from 'react';
import Rating from './Rating'
class Card extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { rating: 0};
        this.item = [];
        
    }
    
     RecieveRating = (rating) => {
        this.setState({rating: rating})
     }
    render() { 
        const cardstyle = {width:'18rem'};
        const imgstyle = {height:'10rem', width:'8rem'};
        this.item = [];
        for (let i=1; i<=this.state.rating; i++) {
            this.item.push(<span>*</span>);
          }

        

        return ( 
            <div className='card' style={cardstyle} >
            <img className='card-img-top img-fluid' src={this.props.image} alt='' style={imgstyle} />
            <div className="card-body">
                <h5 className="card-title">{this.props.Name}</h5>
                <p className="card-text">{this.props.Description}</p>
                <p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 
                <span>Stars: {this.item.length> 0 ? this.item: "No stars"}</span>
                </p>
            </div>
            <div>
                <Rating numberofStars={1} updateRating={this.RecieveRating}/>
            </div>
          </div>

        );
    }
}
 
export default Card;