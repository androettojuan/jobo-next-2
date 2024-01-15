import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";


const ModalAlert = ({ active, text, disabled, onClose }) => {
  return (
    <div>
      <div active={active} onClick={onClose} />
      <div active={active}>
        <div>
          <span>Pausar cuenta</span>
          <AiOutlineClose onClick={onClose} />
        </div>
        <div>
          <p>{text}</p>
          <Button>
            Desactivar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
