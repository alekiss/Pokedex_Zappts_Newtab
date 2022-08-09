import React from "react"
import "./modal.scss"
import CloseIcon from "./../../assets/closeIcon.png"

const Modal = (props) => {

    const { closeModal, image, name, peso, altura, type } = props

    console.log(type[0])

    return (
        <>
            <div className="modal-container">
                <div className="modal-close">
                    <img src={CloseIcon} onClick={ () => closeModal(false)}/>
                </div>
                <div className="modal-wrapper">
                    <div className={type[0]}>
                        <img src={image} />
                    </div>
                    <div className="modal-contant">
                        <h1>{name}</h1>
                        <p>{peso} kg</p>
                        <p>{altura}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal