import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeTransitionProvider from './components/ThemeTransitionProvider'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    return (
        <ThemeTransitionProvider>
            <div className="min-h-screen bg-background text-copy-primary transition-colors duration-300">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                   </Routes>
                <Footer />
            </div>
        </ThemeTransitionProvider>
    )
}

export default App