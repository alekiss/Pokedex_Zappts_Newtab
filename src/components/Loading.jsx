import React from "react";
import pokebola from "./../assets/pokeball.png"

const Loading = () => {
    return (
        <>
            <div className="loading">
                <div className="loading-container">
                    <div className="ball"><img alt="loading" src={pokebola} /></div>
                    <div className="ball"><img alt="loading" src={pokebola} /></div>
                    <div className="ball"><img alt="loading" src={pokebola} /></div>
                    <span className="text-loading">Carregando...</span>
                </div>
            </div>
        </>
    )
}

export default Loading