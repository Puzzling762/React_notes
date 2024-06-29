import { useCallback, useEffect, useState, useRef } from "react"
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false)

  //ref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "~`!@#$%^&*()-_=+[{]}/.><?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => { 
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    setButtonClicked(true)
  }, [password])

  useEffect(() => { 
    passwordGenerator()
    setButtonClicked(false)
  }, [length, number, char, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-500">
      <h1 className='text-white text-center my-3'>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/1e/45/fd/1e45fdf8-cbd2-a055-fdb3-bd0ca8f340c3/source/512x512bb.jpg" alt=""
          style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`outline-none px-3 py-0.5 shrink-0 ${buttonClicked ? 'bg-black text-white' : 'bg-blue-700 text-white'}`}>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characterInput"
            onChange={() => {
              setChar((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
      <div>
        <iframe 
          src="https://giphy.com/embed/ujvhLZGsTajgQ" 
          width="420" 
          height="336" 
          style={{ border: "none" }} 
          frameBorder="0" 
          // className="giphy-embed" 
          // allowFullScreen
          // title="password-gif"
        ></iframe>
      </div>
    </div>
  )
}

export default App
