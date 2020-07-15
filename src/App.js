import React, {useState} from 'react';
import './App.css';

function App() {

  const [counter,setCounter]= useState(0);

  const increment =()=>{
    setCounter(counter+1);
  }
  const decrement =()=>{
    setCounter(counter-1);
  }
  const reset =()=>{
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button className='increment' onClick={increment}>+</button>
      <button className='reset' onClick={reset}>Reset</button>
      <button className='decrement' onClick={decrement}>-</button>
    </div>
  );
}

export default App;
