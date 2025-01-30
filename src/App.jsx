 import './styles/App.css'
import GetCharactersApi from './service/CharactersApi'
import Header from './components/Header'


function App() {


  return ( 
    <div>
      <Header/>
      <GetCharactersApi/>
      
   
    </div>
  )
    
   
     
}

export default App
