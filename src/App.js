import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  
state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ],
 };
// we need to pass props to make it available in the
// constructor method
// we can set state in constructor directly
// like : this.state = this.props.something
// we dont use setState() method in constructor because
// that method is only available after render() method
 constructor(props){
   super(props);
   console.log('App-constructor',this.props)
  //  this.state = this.props.something

 }

//  lets see another life cycle hooks
// this method is called after our componenet is rendered into
// the dom
// we use this to make ajax call and so on

componentDidMount(){
  // Ajax call get data from server and the set state
  // this.setState({})
  console.log('App - mounted')
}
  
  handleReset = ()=>{
  const counters = this.state.counters.map(c => {c.value = 0;
      return c;
      });
  this.setState({counters})
  }

  handleDelete = (counterId) => {
      // console.log('event handler ca  lled',counterId)
      const counters = this.state.counters.filter(c => c.id !== counterId);
      // this.setState({counters:counters})// this can be simplified as below
      // as we have same key and value i.e. countes we can use shortcut
      this.setState({counters})
      
  };

  handleIncrement = (counter) => {
      // console.log("counter =",counter)
      const counters = [...this.state.counters] ;//note: triple dot ,this is a way of cloning an array
      const index = counters.indexOf(counter);
      counters[index]= {...counter}; // copy counter object
      counters[index].value++;
      this.setState({counters});
  }

  render() { 
    console.log('App - render')
    return (   
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
    <main className='container'>
      <Counters 
      counters = {this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement} 
      onDelete ={this.handleDelete}
      />

    </main>
    </React.Fragment>
     );
  }
}
 
export default App;
