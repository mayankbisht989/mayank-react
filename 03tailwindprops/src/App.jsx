import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"manku",
    age:20
  }

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
   <Card username="codewithmayank" btntext="click me"/>
   <Card username="codewithchai" btntext="visit me"/>
    </>
  )
}

export default App
