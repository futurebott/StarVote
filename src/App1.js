import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header2 from './Comp/Header';
import CardList from './Comp/CardList';
import Form from './Comp/Form';

class App extends React.Component{ 
  state ={ 
              data:[{id: 1,lable : "Cared 1", desc : "Description 1"},{id: 2, lable : "Cared 2", desc : "some other description"}]
  };
  addNewData = (myData) =>{
    this.setState(prevSatae => ({data: [...this.state.data, {id:3, lable: myData, desc: 'newdesc'}]}))
   console.log(` I am here ${myData}`)
  }
  render(){
  return (
    <div>
      <Form onSubmit= {this.addNewData} />
      <Header2 Header="Card List"/>
      <CardList data = {this.state.data} />
      
    </div>
  );};
}

export default App;
