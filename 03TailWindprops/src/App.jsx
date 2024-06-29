import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"raj",
    age:20
  }

  return (
    <>
    <h1 className='bg-green-400 text-white p-4
    rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Luffy" someObj={myobj}/>
    <Card username="Zoro" someObj={myobj}/>

    </>
  )
}

export default App
