import React from 'react';
import Card from './Card'
class CardList extends React.Component {

    render() {
        var cards = this.props.data
        return (cards.map(card => <Card key={card.id} {...card} />))
    }
}

export default CardList;