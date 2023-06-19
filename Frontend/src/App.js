import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Components/Nav'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App