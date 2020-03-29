import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personState , setPersonState ] = useState({
      person: [
        { name:'Aayushi', age:24, female:true },
        { name:'Allan', age:22, female:false },
        { name:'Anahita', age:25, female:true },
        
      ],
      otherState : 'some other value',
    }
  )

  const [useOtherState, seOtherState] = useState({
    otherState: 'other some value'
  })
  
  console.log(personState,useOtherState);

  const switchNameHandler = () => {
    setPersonState( {
        person : [
          {name:'Monikesh', age:30, female:false },
          {name:'Nomi', age:24, female:true},
          {name:'Baller', age:26, female:false},
        ],

      }
    )
  }

  
  // render() {
    return (
      <div className="App">
       <h1>Hello, This is a react app.</h1>
       <button onClick={switchNameHandler}>Click me</button>
       <Person name={personState.person[0].name} age={personState.person[0].age} gender={personState.person[0].female ? 'she' : 'he'}/>
       <Person name={personState.person[1].name} age={personState.person[1].age} gender={personState.person[1].female ? 'she' : 'he'}/>
       <Person name={personState.person[2].name} age={personState.person[2].age} gender={personState.person[2].female ? 'she' : 'he'}/>
      </div>
    );
  // }
}

export default app;

