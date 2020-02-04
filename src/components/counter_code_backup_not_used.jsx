import React, { Component } from 'react';
/*
author: bhoj bahadur karki
This file is backup of counter.jsx file
Purpose: contains code snippet to use later for other languages
date: 2020-Feb-3rd
*/


class Counter extends Component {
    state = {
        count : 0, 
        // imageUrl: 'https://picsum.photos/200'  
        tags: []   
    };
    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'

    // };

    renderTags(){
        // This is one way of conditional rendering using method and if statement using 
        // pure javascript
        if ( this.state.tags.length === 0) return  <p>There are no tags!</p>

        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        // single line we can do
        // return this.state.tags.length === 0 ? <p>There are no tags!</p>: <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    
    // we are creating constructor because we have access to 'this' keyword
    // here we have to bind this with handleIncrement in order to make it available
    // in that method
    // binding of this here:
    /*
    // This is one way of binding event handler
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        // console.log("constructor  ",this);
    }


    // this is event handler for onClick
    handleIncrement(){
        console.log('Increment clicked',this);
    }

    */
   // this is second way of binding event handler
   /*
   handleIncrement = (product) => {
        //  console.log("after using() this is accessible here ",this)
        // this way does not work because technically we are updating state
        // but react is not aware of this
        // this.state.count++;

        // solution use this.setState()
        this.setState({count: this.state.count + 1});
        console.log(product)
    };

    doHandleIncrement = () => {
        this.handleIncrement({id:1})
    };
    */
   handleIncrement = () => {
    this.setState({count: this.state.count + 1});  
    };
    render() {
        // let classes = this.getBadgeClasses();
        console.log("props", this.props)
        return (
        // <React.Fragment>
        //     {/* <img src={this.state.imageUrl} alt="Img" /> */}
        //     {/* this is custom style */}
        //     {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        //     {/* This is inline  style */}
        //     {/* <span style={{fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        //     {/* 
        //     <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
        //     <button className='btn btn-secondary btn-sm'>Increment</button> 
        //     */}

        //     {/* <ul>
        //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        //     </ul> */}
        //     {/* {this.renderTags()} */}
        // </React.Fragment>
        <div>
            {/* another way of conditional rendering 
            This 'Please..' if the tags length is zero, using && 
            This is concept of trucy or facy
            */}
            {/* {this.state.tags.length === 0 && 'Please Create a new tag!'}
            {this.renderTags()}
             */}
             <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
             {/* here we  {this.handleIncrement} we dont use function call like ()*/}
             {/* <button  onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>  */}
             {/* <button  onClick={()=> this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increment</button>  */}
             <button  onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> 
        </div>
        );
    }

    

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} =  this.state;
        return  count === 0 ? 'Zero':count;
    }
}
 
export default Counter;

// we can also do export in one line as
/*
export default class Counter extends Component {
    render() {
        return <h1>Hellow world</h1>;
    }
}
*/