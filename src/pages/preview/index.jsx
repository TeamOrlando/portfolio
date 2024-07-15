import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Resume from "./components/resume"
import ScrollAnimation from "./components/scrollAnimation"
import { motion } from "framer-motion"

const Index = () => {
    return (
        <div className="relative overflow-hidden bg-black text-white">
            <Navbar/>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Hero />
                <section id="about"><About /></section>
                <section id="resume"><Resume /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </motion.div>
            <Footer/>
            <ScrollAnimation/>
        </div>
    )
}

export default Index