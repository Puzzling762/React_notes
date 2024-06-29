import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(5)

  //let counter =5;
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1
    setCounter(counter)
  }

  const removeValue= ()=>{
    counter=counter-1;
    if (counter<0) {
      counter=0;
    }
    setCounter(counter)
  }
  

  return (
    <>
    <h1>React</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter} </button>

    </>
  ) 
}

export default App
