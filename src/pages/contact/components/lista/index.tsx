import React from "react";
import "./styles.css";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import Image from "next/image";

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-form-title-section">
                <Image
                    src="/img/contacta/lista-one.png"
                    alt="Logo"
                    width={714}
                    height={185}
                />
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
