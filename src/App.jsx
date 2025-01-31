 import './styles/App.css'
import GetCharactersApi from './service/CharactersApi'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return ( 
    <div>
      <Header/>
      <GetCharactersApi/>
      <Footer />
    </div>
  )
    
   
     
}

export default App
