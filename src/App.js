import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import RightBar from './components/RightBar'
import ScrollToTop from 'react-scroll-to-top'
import DarkMode from './components/DarkMode'
import Routing from './Routing'
import "./App.css"

export default function App() {

 

  return (
    <div className='w-full flex relative h-screen bg-main'>
      <BrowserRouter>
        <Sidebar />
        <RightBar />
        <Routing />
        <DarkMode />
        <ScrollToTop smooth />
      </BrowserRouter>
    </div>

  ) 
}
