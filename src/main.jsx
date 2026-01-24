import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from 'next-themes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/It_project/">
    <React.StrictMode>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="it-project-theme"
            forcedTheme={undefined}
            disableTransitionOnChange={false}
            value={{ light: 'light', dark: 'dark' }}
        >
            <App />
        </ThemeProvider>
    </React.StrictMode>
    </BrowserRouter>
)