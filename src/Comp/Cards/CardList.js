import React from "react";
import Card from "./Card";
class CardList extends React.Component {
  render() {
    var cards = this.props.data;
    //console.log(cards);
    return cards.map(card => <Card key={card.Id} {...card} />);
  }
}

export default CardList;
