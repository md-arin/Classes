
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import  Header  from './components/Header'
import React, { Suspense } from 'react'

const Dashboard = React.lazy(()=> import("./components/Dashboard"))

const Landing  = React.lazy(()=> import('./components/Landing'))

function App() {

   

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path='/dashboard' element={<Suspense fallback={"loading....."}> <Dashboard/> </Suspense>}/>
      <Route path='/' element={<Suspense fallback={"loading....."}><Landing/></Suspense>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar (){

  const navigate = useNavigate();

  return(
    <div>
      <button onClick={()=>{
        navigate("/dashboard");
      }}> 
        Dashboard
      </button>

      <button onClick={()=>{
        navigate("/");
      }}>
        Landing
      </button>
    </div>
  )
}

export default App
