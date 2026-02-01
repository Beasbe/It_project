import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeTransitionProvider from './components/ThemeTransitionProvider'
import Home from './pages/Home'
import About from './pages/About'
import NewsPage from './pages/NewsPage'
import NewsDetail from './pages/NewsDetail'

function App() {
    return (
        <ThemeTransitionProvider>
            <div className="min-h-screen bg-background text-copy-primary transition-colors duration-300">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/news/category/:category" element={<NewsPage />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                </Routes>
                <Footer />
            </div>
        </ThemeTransitionProvider>
    )
}

export default App