import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = (props) => {
  const {onSearch} = props

  const [search, setSearch] = useState("ditto");
  // const [pokemon, setPokemon] = useState("");

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(undefined)
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-bnt">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {/* {pokemon ? (
          <div>
              <div>Nome: {pokemon.name}</div>
              <div>Peso: {pokemon.weight}</div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
      ): null} */}
    </div>
  );
};

export default Searchbar;
