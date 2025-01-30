 import React, { useEffect, useState } from "react"
import '../styles/CharacterApi.css'

import ApiConfig from "./ApiConfig";

function  GetCharactersApi (){
  const [Character, setCharacter]  = useState([])

    useEffect(() => {
        ApiConfig.get("characters")
        .then (response => {
          setCharacter(response.data.data.results);
        
        })
        .catch(err => console.log(err))
      }, []);

      return (
        <div className="character-container">
          <h1 >Lista de Personagens</h1>
          {Character.length > 0 ? (
            <ul className="character-list"> 
              {Character.map((char) => (
                <li className="character-card" key={char.id}>
                  <h2 className="character-name">{char.name}</h2>
                  <img className="character-image" src={`${char.thumbnail.path}.${char.thumbnail.extension}`} 
              alt={char.name}/>
                
                </li> 
              ))}
            </ul>
          ) : (
            <p>Carregando personagens...</p> 
          )}
        </div>
      );
}



export default GetCharactersApi


