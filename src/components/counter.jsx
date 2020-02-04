import React, { Component } from 'react';

/*
Notes: diff between props and state
props includes data that we pass as property to component
state represent the internal state of the component,internal to component
state are local and internal to component

props are readonly
states are read and writable i.e. we can assign value to state

if we want to change the props value then we need to put it in the state and then 
modify the state value 

next: Raising and handling events
*/
class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    // };
 
    // event handler
    // handleIncrement = () => {
    //     // props are readonly
    //     // this.props.value =33; // this gives error
    //     this.setState({ value: this.state.value + 1 });
    // };
    
    // example : lifecycle hook for update when an component is updated
    // this method is called after render method i.e. after a component is updated
    // here we can compare the new state with the old state and if there is a change
    // we can make ajax request to get new data from the server
    componentDidUpdate(prevProps,prevState){
        console.log('prevprops=',prevProps);
        console.log('prevState=',prevState);
        //-- here we can do checks like this
        // if(prevProps.counter.value !== this.props.counter.value){
        //     // make ajax call and get new data from the server
        // }else{
        //     // don't update anything
        // }
    }

    // this method is called just before a component is removed from DOM
    // This is good to do any type of cleanup if we have timers 
    // setups to avoid memory leaks
    componentWillUnmount(){
        console.log('Counter - Unmnount')
    }

    render() {
        console.log('App counter render')
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
