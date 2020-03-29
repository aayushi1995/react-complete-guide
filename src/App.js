import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {name:'Aayushi', age:24, female:true },
      {name:'Allan', age:22, female:false},
      {name:'Anahita', age:25, female:true},
    ]
  }

  switchNameHandler = () => {
    this.setState( {
        person : [
          {name:'Monikesh', age:30, female:false },
          {name:'Namra', age:24, female:true},
          {name:'Brandon', age:26, female:false},
        ]
      }
    )
  }
  
  render() {
    return (
      <div className="App">
       <h1>Hello, This is a react app.</h1>
       <button onClick={this.switchNameHandler}>Click me</button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age} gender={this.state.person[0].female ? 'she' : 'he'}/>
       <Person name={this.state.person[1].name} age={this.state.person[1].age} gender={this.state.person[1].female ? 'she' : 'he'}/>
       <Person name={this.state.person[2].name} age={this.state.person[2].age} gender={this.state.person[2].female ? 'she' : 'he'}/>
      </div>
    );
  }
}

export default App;
