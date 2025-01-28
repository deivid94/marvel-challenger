import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/heder'
import Main from './components/Main/main'
import ApiService from './service/apiService'

function App() {


  return ( 
    <div className='container'>
    <ApiService/>  

      <Header />
      <Main/>
      <Footer/>
    </div>
  )
    
   
     
}

export default App
