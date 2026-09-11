import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero-section">
            <Navbar />
            <Hero />
        </section>
    );
}

export default HeroSection;