import React, { useState } from "react";
import searchIcon from "./../assets/search.svg"

const Searchbar = (props) => {
  const {onSearch} = props

  const [search, setSearch] = useState("ditto");

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
      <section>
        <p>Mais de 250 Pokemons para você escolher o seu favorito</p>
      </section>
      <div className="searchbar">
        <input placeholder="Pesquisar pokemon" onChange={onChangeHandler} />
        <button onClick={onButtonClickHandler}>
          <img 
            alt="pesquisar" 
            src={searchIcon} 
          />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
