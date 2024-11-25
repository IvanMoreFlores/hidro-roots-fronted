import React from "react";
import "./styles.css";
import Input from "@/components/input";
import Button from "@/components/button";

const ContComponent = () => {
  return (
    <div className="container-body-contact">
      <div className="container-title-contact">
        <div className="container-title-contact">
          <p className="text-title-contact">Contáctanos</p>
          <p className="text-subtitle-contact ">Conversemos</p>
        </div>
        <p className="text-description-contact">
          Déjanos tu mensaje y te responderemos lo más pronto
        </p>
      </div>
      <div className="container-form-contact">
        <div className="container-input-form-contact">
          <Input  label="Nombre" name="name" />
          <Input label="Correo" name="email" type="email" />
          <Input label="Celular" name="phone" type="tel" />
          <textarea
            className="textarea-field-contact"
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

export default ContComponent;
