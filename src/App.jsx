import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
function App() {


    return (
        <div className="min-h-screen bg-background text-copy-primary transition-colors duration-300">
            <Header />
            <Hero />
            <Services />
            <Projects />
            <Partners />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;