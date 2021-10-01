import React, { Component } from 'react';

class Counter extends React.Component {
    
    render() { 
         //key in counters will not be displayed, because it is identification
        return (
        <div>
            
            <span className={this.getBadgeClass()}>{this.props.counter.value}</span>
            
            <button onClick={ () => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary m-2">Increment</button>
            
            <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
            {/* {this.renderTags()}; */}
        </div>
        )
    }

    getBadgeClass(){
        let classes = "btn m-2 ";//space after '2'
         classes+= (this.props.counter.value===0)? "btn-primary" : "btn-warning";
         return classes;
    }


    // renderTags(){   //conditional rendering
    //     if (this.state.tags.length===0) 
    //     return <p>"no tags in the list"</p>;
    //     return <ul>{this.state.tags.map(tag =><li key={tag}>{ tag }</li>)}</ul>;
    // }
}
 
export default Counter;