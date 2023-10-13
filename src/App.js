import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import RightBar from './components/RightBar'

export default function App() {
  return (
    <div className='w-full flex relative h-screen bg-main'>
      <BrowserRouter>
        <Sidebar />
        <RightBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/blog' Component={Blog} />
          <Route path='/portfolio' Component={Portfolio} />
        </Routes>
      </BrowserRouter>
    </div>

  ) 
}
