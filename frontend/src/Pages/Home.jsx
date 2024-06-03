import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero"
import Food from "../Components/Food"
import Menu from "../Components/Menu"
import Testimonial from "../Components/Testimonial"
import Contact from '../Components/Contact'
import Footer from "../Components/Footer"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Food />
            <Menu />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home