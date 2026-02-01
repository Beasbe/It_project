import React from 'react'
import Hero from '../components/Home/Hero.jsx'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Partners from '../components/Partners'
import ContactForm from '../components/ContactForm'

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Partners />
            <ContactForm />
        </>
    )
}

export default Home