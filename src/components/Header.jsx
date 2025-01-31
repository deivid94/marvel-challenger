import '../styles/Header.css'
import logoMarvel from '../assets/marvel.png'


function Header (){
    return (
        <div className="header-container">
            <nav>
                <div>
                    <h1>Marvel Heroes Search</h1>
                    </div>

                <div>
                <img src={logoMarvel} alt="logo marvel estudios" />
                </div>
            </nav>


        </div>
    )
}
export default Header