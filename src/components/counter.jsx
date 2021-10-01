import React, { Component } from 'react';

class Counter extends React.Component{
    state={
        count:0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3']
    }
    styles = {
        fontSize:50,
        fontWeight:"bold"
    };
    render() { 
        return (
            <div>
                <span>{this.state.count}</span>
                <img src={this.state.imageUrl} alt=""></img>
                <span style={this.styles} className="badge badge-primary m-3">{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style = {{fontSize: 60}} className="btn btn-secondary btn-sm">Increment</button>
                <span className={this.getBadgeClasses()}>primary</span>
                {/* <button onClick = {()=> this.handleIncrementArrow(product)}>ArrowFunctionBinding </button> //passing event parameter */}
                <ul>
                    {this.state.tags.map(tag =><li key={tag}>{ tag }</li>)} //rendering list
                </ul>
            </div>
        );
    }

    constructor(){
        super(); //need super() because the class is first calling parent:Component
        this.handleIncrement = this.handleIncrement.bind(this); //initiate this, 'this' will refer to current object(not 'window' object)
    }

    handleIncrement(){ //binding event handling using constructor
        this.setState({count:this.state.count+1})
        console.log("increment click", this.state.count);

    }
    handleIncrementArrow = product =>{ //problem
        console.log(product)
        this.setState( {count:this.state.count+1} );
    }

    getBadgeClasses() {
        let classes = "badge m-3 ";
        classes += this.state.count === 0 ? "badge-primary" : "badge-warning";
        return classes;
    }

    formatCount(){
        return this.state.count===0 ? <h1>Zero</h1> : '1'
    }
}
 
export default Counter;