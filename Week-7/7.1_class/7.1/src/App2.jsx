import { useContext, useState } from 'react'
import { CounterContext } from './Context'

import './App.css'

function App2 () {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterContext.Provider value={count}>
      <Count setCount = {setCount}/>
      </CounterContext.Provider>
    </>
  )
}

function Count ({setCount}){
return(
  <div>
    <CountRenderer />
    <Buttons  setCount={setCount}/>
  </div>
)
}

function CountRenderer(){
  const count = useContext(CounterContext)
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons ({setCount}){
  const count = useContext(CounterContext)
return(
  <div>
    <button onClick={()=>{
      setCount( count + 1)
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount( count - 1)
    }}>
      Decrease
    </button>
  </div>
)
}

export default App2
