 import React, { useEffect, useState } from "react"
import '../styles/CharacterApi.css'
import  iconMarvel  from '../assets/icon-marvel.png'

import ApiConfig from "./ApiConfig";

function  GetCharactersApi (){
  const [Character, setCharacter]  = useState([])
  const [Search, setSearch] = useState('')

    useEffect(() => {
        ApiConfig.get("characters")
        .then (response => {
          setCharacter(response.data.data.results);
        
        })
        .catch(err => console.log(err))
      }, []);


      const handleSearchChange = (e) => {
        setSearch(e.target.value)
      };

      return (
        <div className="character-container">
          <div>
          <h1 >Lista de Personagens</h1>
        
          <input 
          className="character-search-bar"
          value={Search}
          onChange={handleSearchChange}
           type="text"
          placeholder="Pesquise um personagem" />
          </div>

          <div><h1>{Search}</h1></div>
        


          {Character.length > 0 ? (
            <ul className="character-list"> 

              {Character.map((char) => (
                <li className="character-card">
                  <h2 className="character-name">{char.name}</h2>
                  <img className="character-image" src={`${char.thumbnail.path}.${char.thumbnail.extension}`} 
              alt={char.name}/> 

             
                <p>{char.description}</p>
                
                
                </li> 
              ))}
            </ul>
          ) : (
            <div> 
              <h1>Carregando...</h1>
            <img src={iconMarvel} alt="icon marvel" />
            </div>
           
          )}
        </div>
      );
}



export default GetCharactersApi


