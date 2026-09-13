import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="code-decoration">
                <span>&gt; Hello World!</span>
                <span>GET /portfolio</span>
                <span>200 OK</span>
                <span>$ git status</span>
                <span>System.out.println()</span>
                <span>Error 404</span>
            </div>
            <div>
                <div className="container-info">

                    <h1>Sebastian Pereira</h1>

                    <p>Desarrollador Java</p>
                </div>

                <a className="ancla-cv" href="../../../public/CV-Sebastian.pdf" download>
                    <Button 
                        text="Download CV"
                    />
                </a>
            </div>

        </section>
    );
}

export default Hero;