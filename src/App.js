import React from 'react';
import './App.css';
import './bootstrap.min.css';
import CardList from './Card/CardList'
import getCards from './Jss/CardRepo'; //(with path)

class App extends React.Component{ 
 
  constructor(props) {
    super(props);
    this.state = { cards:  getCards()}
  }
  render(){
  
  return (
    <div>
     <CardList cards = {this.state.cards}/>
    </div>
  );};
}

export default App;
