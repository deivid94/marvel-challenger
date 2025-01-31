import React, { useEffect, useState } from "react";
import "../styles/CharacterApi.css";
import ApiConfig from "./ApiConfig";

function GetCharactersApi() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState(""); 

  const CardClick = (char) => {
    setSelectedCharacter(char);
    setEditedName(char.name);
    setEditedDescription(char.description || ""); 
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const fetchCharacters = (query = "") => {
    ApiConfig.get("characters", {
      params: {
        nameStartsWith: query || undefined,
        limit: 20,
      },
    })
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      fetchCharacters(search);
    } else {
      fetchCharacters();
    }
  }, [search]);


  const saveNameEdit = () => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === selectedCharacter.id ? { ...char, name: editedName } : char
      )
    );
    setSelectedCharacter({ ...selectedCharacter, name: editedName });
  };


  const saveDescriptionEdit = () => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === selectedCharacter.id ? { ...char, description: editedDescription } : char
      )
    );
    setSelectedCharacter({ ...selectedCharacter, description: editedDescription });
  };

  return (
    <div className="character-container">
      <input
        type="text"
        className="character-search-bar"
        placeholder="Digite o nome do personagem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {characters.length > 0 ? (
        <ul className="character-list">
          {characters.map((char) => (
            <li
              className="character-card"
              key={char.id}
              onClick={() => CardClick(char)}
            >
              <h2 className="character-name">{char.name}</h2>
              <img
                className="character-image"
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt={char.name}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Nenhum personagem encontrado</h1>
      )}

      {selectedCharacter && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="modal-image"
              src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              alt={selectedCharacter.name}
            />
            <h2>Nome:</h2>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <button onClick={saveNameEdit}>Salvar Nome</button>

            <h3>Descrição:</h3>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              rows="4"
              cols="50"
            />
            <button onClick={saveDescriptionEdit}>Salvar Descrição</button>

            <h3>Séries:</h3>
            <ul>
              {selectedCharacter.series.items.slice(0, 3).map((serie, index) => (
                <li key={index}>{serie.name}</li>
              ))}
            </ul>

            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetCharactersApi;
