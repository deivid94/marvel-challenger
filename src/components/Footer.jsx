import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <nav>
                <span>Developed by Deivid Martins</span>
                <div>
                    <a href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin"></i> 
                    </a>
                </div>

                <div>
                    <a href="https://github.com" target="_blank">
                        <i className="fab fa-github"></i> 
                        
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;