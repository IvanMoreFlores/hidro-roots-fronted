import React from "react";
import Button from "../button";
import Image from "next/image";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <div className="modal-div-img">
          <div className="modal-div-text">
            <p className="modal-text-title">Curso</p>
            <p className="modal-text-subtitle">
              Aprende a cultivar tus alimentos
            </p>
          </div>
          <Image
            src="/img/modal/img-modal-one.png"
            alt="Logo"
           
            className="modal-image"
            width={248}
            height={117}
            priority
          />
        </div>

        <Button className="modal-button" onClick={onClose}>
          Saber más
        </Button>
      </div>
    </div>
  );
};

export default Modal;

