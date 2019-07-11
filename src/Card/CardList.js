import React from 'react'; 
import Card from './Card'
class CardLisr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //const cards = this.props.cards.map((card) =>({...card}));
   
    render() {  
       // const cards1 = this.props.cards.map(card => <Card key={card.id} {...card} />)
       //console.log('hi')
       //console.log(this.props.cards)
       //console.log('hi')
        //const card = this.props.cards.map(card =>(<Card item = {...card} />));
        //console.log(cards)
        //return ( <div>{card}</div> );
        var cards = this.props.cards
        //const justCards = cards.map(card => <Card key={card.Id} {...card} />)
        return (cards.map(card => <Card key={card.Id} {...card} />))
    }
}
 
export default CardLisr;
