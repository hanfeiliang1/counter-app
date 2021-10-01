import React, { Component } from 'react';
import Counter from './counter2'

class Counters extends React.Component {

    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
        <div>
            <button onClick = {onReset} className = "btn btn-primary m-2">Reset</button>
//fhg
            { counters.map(counter => <Counter 
            key= {counter.id} 
            counter={counter} 
            onIncrement={onIncrement} //bubbling to parent
            onDelete={onDelete}
            />)}</div> 
            //counter.value: passing data to component, replaced all atributes by counter={counter}
        );
    }
    
}
 
export default Counters;