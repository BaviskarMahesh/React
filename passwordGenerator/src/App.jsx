import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "?><:{}[]\\|@#$%^&*()~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllow, charAllow]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()

    //setting the range of the password copy
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800'>

        <div className='w-full max-w-md mx-auto shadow-2xl rounded-3xl px-6 py-6 text-orange-500 bg-gray-900 border border-gray-700 backdrop-blur-lg'>

          <h1 className='text-white text-center text-3xl font-bold tracking-wide mb-5'>
            Password Generator
          </h1>

          <div className="flex shadow-lg rounded-2xl overflow-hidden mb-4 border border-gray-600 bg-gray-800">

            <input
              type='text'
              value={password}
              className="outline-none w-full py-3 px-4 text-cyan-300 bg-transparent placeholder:text-gray-500 text-lg font-medium"
              placeholder='password'
              readOnly
              ref={passwordRef}

            />
            <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type='range' min={6} max={100} value={length} className='cursor-pointer'
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              ></input>
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                defaultChecked={numberAllow}
                id="numberInput"
                onChange={() => {
                  setNumberAllow((prev) => !prev);
                }}></input>
              <label htmlFor='numberInput'>Numbers</label>

            </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox'
                defaultChecked={charAllow}
                id="charInput"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}></input>
              <label htmlFor='charInput'>Characters</label>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App