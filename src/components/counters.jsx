import React, { Component } from 'react';
import Counter from  './counter'

/*
class Counters extends Component {
    render() { 
        return ( <div>   
            <button 
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            {this.props.counters.map(counter => (
            // <Counter key={counter.id} value={counter.value} selected={true} />)
            // <Counter key={counter.id} value={counter.value}  >
            //     <h4>Counter #{counter.id}</h4>
            // </Counter>
            
            <Counter 
                
                key={counter.id} 
                onDelete={this.props.onDelete}
                onIncrement= {this.props.onIncrement} 
                counter={counter}
            />
            ))}
        </div> );
    }
}
*/

/*
we can user object destructuring to remove 'this.props.' and make code cleaner
we do that by using: const {property_name1,prop_name2,...} = this.props;
*/ 

class Counters extends Component {
    
    render() { 
        console.log('app - counteres rendered')
        // this line is called object destructuring
        // basically we are creating local variable and assiging props different value
        // to them note: variable name should be same as property name
        const {counters,onReset, onDelete, onIncrement} = this.props;
        return ( <div>
            <button 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            {counters.map(counter => (
            <Counter 
                key={counter.id} 
                onDelete={onDelete}
                onIncrement= {onIncrement} 
                counter={counter}
            />
            ))}
        </div> );
    }
}
export default Counters;