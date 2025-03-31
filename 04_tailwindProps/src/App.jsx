import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <Card title="Card 1" desc="This is the first card sample" />
      <Card title="Card 2" desc="This is the description for second card" />
    </>
  )
}

export default App
