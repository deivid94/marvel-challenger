import '../styles/Footer.css';
import icoGithub from '../assets/github.svg'
import icoLinkdin from '../assets/linkedin.svg'


function Footer() {
    return (
        <div className="footer-container">
            <nav>
                <div>
                <span>Developed by Deivid Martins</span>
                </div>
                
                <div>
                    <a href="https://github.com/deivid94"  target="_blank">
                       <img src={icoGithub} alt="logo github" />
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/deivid-martins1994/" target="_blank">
                        <img src={icoLinkdin} alt="logo linkedin" />
                        
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;