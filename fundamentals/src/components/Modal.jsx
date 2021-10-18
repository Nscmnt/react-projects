import React, { useContext } from "react";
import ModalCard from "./ModalCard";

import { GlobalContext } from "../GlobalContext";

const Modal = (props) => {
  const { produtos } = useContext(GlobalContext);

  function closeModal(e) {
    if (e.currentTarget === e.target) {
      props.setModal(false);
    }
  }

  const top = window.scrollY;
  return (
    <div
      onClick={closeModal}
      style={{
        width: "100vw",
        height: "100%",
        position: "absolute",
        top: `${top}px`,
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,.3)",
      }}
    >
      {produtos ? (
        <ModalCard />
      ) : (
        <div
          style={{
            padding: "15px",
            color: "white",
            background: "rebeccaPurple",
          }}
        >
          O Produto foi removido
        </div>
      )}
    </div>
  );
};

export default Modal;
