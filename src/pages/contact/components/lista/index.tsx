import React from "react";
import "./styles.css";
import Input from "../../../../components/input";
import Button from "../../../../components/button";
import Image from "next/image";
const ConComponent = () => {
    return (
        <div className="component-container-body-contact">
            <div className="container-title-contact">
                
                <div className="image-header-contact">
                <Image
              src="/img/contacta/lista-one.png"
              alt="Logo"
              width={714}
              height={185}
            />

                </div>

                {/* Título principal */}
                <h1 className="text-title-contact">Crezcamos juntos</h1>
                <p className="text-description-contact">Completa el formulario</p>
            </div>
            <div className="container-form-contact">
                <div className="container-input-form">
                    <Input label="Nombre" name="name" />
                    <Input label="Correo" name="email" type="email" />
                    <Input label="Celular" name="phone" type="tel" />
                    <textarea
                        className="textarea-field"
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


export default ConComponent;
