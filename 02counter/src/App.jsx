import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]= useState(5)
  // let counter =5
  const addvalue =()=>{
    
    counter=counter+1
    setcounter(counter)
    // console.log("clicked",counter);
  }
 const removevalue =()=>{
  setcounter(counter-1)
 }

  return (

    <>
     <h1> Counter Project</h1>
     <h2> counter value:{counter}</h2>
     <button onClick={addvalue}>add value{counter}</button>
     <br/>
     <button onClick={removevalue}>remove value{counter}</button>
     <p>footer:{counter}</p>

    </>
  )
}

export default App
