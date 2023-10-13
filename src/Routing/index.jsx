import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import { AnimatePresence } from 'framer-motion'

export default function Routing() {
    const location = useLocation();

    return (
            <Routes location={location} key={location.pathname}>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path='/blog' Component={Blog} />
                <Route path='/service' Component={Services} />
                <Route path='/portfolio' Component={Portfolio} />
            </Routes>


    )
}
