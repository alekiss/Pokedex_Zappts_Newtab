import React, { useState } from 'react';
import Modal from './Modal/Modal';

const Pokemon = (props) => {

    const {pokemon} = props
    const type = pokemon.types.map((type, index) => type.type.name)
    const [ showModal, setShowModal ] = useState(false)

    const openModal = () => {
        setShowModal(prev => {
            return !prev
        })
    }

    return (
        <>
            <div className="pokemon-card" onClick={openModal}>
                <div className="card-body">
                    <div className="card-top">
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className="card-bottom">
                        <div className="pokemon-type">
                        {pokemon.types.map( (type, index) => {
                            return (
                                <div 
                                    key={index}
                                    className="pokemon-type-text"
                                >
                                    <section className={type}>{type.type.name}</section>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div className="pokemon-image-container">
                    <div className="id">#{pokemon.id}</div>
                    <img 
                    alt={pokemon.name} 
                    src={pokemon.sprites.front_default}
                    className="pokemon-image"
                    />
                </div>
            </div>

            {showModal && (
                <Modal 
                    closeModal={setShowModal}
                />
            )}
        </>
    )
}

export default Pokemon