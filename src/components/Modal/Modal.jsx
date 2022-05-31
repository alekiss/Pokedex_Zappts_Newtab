import React from "react"
import "./modal.scss"

const Modal = (props) => {

    const { closeModal } = props
    return (
        <>
            <div className="modal-container">
                <button onClick={ () => closeModal(false)}>X</button>
                Teste
            </div>
        </>
    )
}

export default Modal