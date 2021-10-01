import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  state={
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:4}
    ]
}
  handleIncrement = counter =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter };
    counters[index].value++;
    this.setState({counters})        
}
  handleReset = () => {
    console.log("check");
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters});
}
  handleDelete = counterId =>{
    const counters = this.state.counters.filter( c => c.id !== counterId); 
    // create new array with all id where id is not counterId
    this.setState({counters}) //update new array
};
render() {
  return (
    <React.Fragment> {/* return multiple root elements, needs wrap with React.Fragment,   */}
    <NavBar totalCounters={this.state.counters.length} />
    <main className="container">
      <Counters 
        counters= { this.state.counters}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
      />
    </main>
    </React.Fragment>
    )
  }
}

export default App;
