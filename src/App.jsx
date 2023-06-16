import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

function App() {
 

  return (
     <BrowserRouter>
     <Navbar />
       <Routes>
        <Route index element={<Home />}>
         <Route path='about' element={<About />}></Route>
         <Route path='portfolio' element={<Portfolio />}></Route>
         <Route path='contact' element={<Contact />}></Route>
        </Route>
       </Routes>
     </BrowserRouter>
  )
}

export default App
