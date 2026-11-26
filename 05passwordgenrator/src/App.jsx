import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length,setlength]=useState(8)
  const [numallowed,setnumallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)

  const [pass,setpass]=useState("")

  //useref hook vo copy button copy krega clipbaord p tb
  const Passwordref=useRef(null)

const PasswordGenrator =useCallback(()=>{
  let pass =""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numallowed) str +="01234567890"
  if(charallowed) str +="!@#$%^&*(){}[]"

  for(let i =1; i<=length;i++){
    let char=Math.floor(Math.random()*str.length +1)

    pass +=str.charAt(char)
  }
  setpass(pass)


},[length,numallowed,charallowed,setpass])

const copypasswordtoclipboard=useCallback(()=>{
  Passwordref.current?.select();
  Passwordref.current?.setselctionrange(0,20)
  window.navigator.clipboard.writetext(pass)
},[pass])


useEffect(()=>{
  PasswordGenrator()

},[length,numallowed,charallowed,PasswordGenrator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-pink-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Genrator</h1>
      <div className='flex-shadow flex rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={pass}
        className="outline-none w-full py-1 px-2"
        placeholder="pass"
        readOnly
        ref={Passwordref}
        />
        <button 
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numallowed}
          id="numberinput"
          onChange={()=>{
            setnumallowed((prev)=>!prev);
          }}
          />
          <label htmlFor="numberinput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charallowed}
          id="charinput"
          onChange={()=>{
            setcharallowed((prev)=>!prev);
          }}
          />
          <label htmlFor="charrinput">Charcters</label>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
