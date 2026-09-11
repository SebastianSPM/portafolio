import "./Footer.css";

import githubIcon from "../../assets/Footer/gitHub.svg";
import linkedinIcon from "../../assets/linkedIn.png";
import instagramIcon from "../../assets/Footer/instagram.svg";
import twitterIcon from "../../assets/Footer/twitter.svg";

function Footer() {
    return (
        <footer className="footer">

            <ul className="footer-list">
                <li>
                    <a href="https://github.com/SebastianSPM">
                        <img src={githubIcon} alt="Github" />
                        <span>Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sebastians-pereira-maldonado-/">
                        <img src={linkedinIcon} alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={instagramIcon} alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twitterIcon} alt="Twitter" />
                        <span>Twitter</span>
                    </a>
                </li>
            </ul>

        </footer>
    );
}

export default Footer;