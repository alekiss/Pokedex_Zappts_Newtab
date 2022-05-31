import React from "react";
import contact from "./../assets/contact.jpeg"
import github from "./../assets/icon-github.svg"
import email from "./../assets/icon-envelope.svg"
import linkedin from "./../assets/icon-linkedin.svg"

const Contact = () => {
    return(
        <>
            <div className="contact-container">
                <div className="contact-card">
                    <div>
                        <img className="contact-img" alt="Contact" src={contact}/>
                    </div>
                    <div>
                        <h2>Álekiss Melo</h2>
                        <p>Desenvolvedor Front-End</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/alekiss" target="_blank" rel="noreferrer">
                            <img alt="github" src={github} />
                        </a>
                        <a href="mailto:alekiss.melo@dcx.ufpb.br" target="_blank" rel="noreferrer">
                            <img alt="e-mail" src={email} />
                        </a>
                        <a href="https://www.linkedin.com/in/alekissmelo/" target="_blank" rel="noreferrer">
                            <img alt="linkedin" src={linkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact