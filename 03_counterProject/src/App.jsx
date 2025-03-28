import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    if(count < 20) {
      setCount(count + 1);
    }
  }

  const decrementCounter = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Plus</button> <br />
      <button onClick={decrementCounter}>Minus</button>
    </>
  )
}

export default App
