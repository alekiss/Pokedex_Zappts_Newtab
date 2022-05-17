import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./../assets/pikachu-background.png"

const Home = () => {
    return(
        <>
            <div className="home">
                <div className="home-text">
                    <div className="home-text-container">
                        <h1>Qual pokemon você <span>escolheria</span>?</h1>
                        <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
                        <Link to="/pokemons">
                        <button>Veja os pokemons</button>
                        </Link>
                    </div>
                </div>
                <div className="home-background">
                    <img alt="background" src={ backgroundImage }/>
                </div>
            </div>
        </>
    )
}

export default Home