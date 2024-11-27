import React from "react";
import "./styles.css";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import Image from "next/image";

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-form-title-section">
                <div className="img-cont">
                    <Image
                        src="/img/contacta/G-con.png"
                        alt="Logo"
                        width={251}
                        height={290.3}
                        style={{
                            position: "absolute",
                            transform: "rotate(-13.2deg)",
                        }}
                    />
                </div>
                <h1 className="contact-form-title">Crezcamos juntos</h1>
                <p className="contact-form-description">Completa el formulario</p>
            </div>
            <div className="contact-form-body">
                <div className="contact-form-inputs">
                    <Input label="Nombre" name="name" type="name" />
                    <Input label="Correo" name="email" type="email" />
                    <Input label="Celular" name="phone" type="tel" />
                    <textarea
                        className="contact-form-textarea"
                        name="message"
                        placeholder="Mensaje"
                        rows={4}
                    />
                </div>
                <Button width="100%">Enviar</Button>
            </div>
        </div>
    );
};

export default ContactForm;
