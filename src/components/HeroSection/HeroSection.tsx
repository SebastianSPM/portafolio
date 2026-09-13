import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section id="HeroSection" className="hero-section">
            <Navbar />
            <Hero />
        </section>
    );
}

export default HeroSection;