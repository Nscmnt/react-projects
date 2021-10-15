import React from "react";
import ModalCard from "./ModalCard";

const Modal = (props) => {
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
      <ModalCard />
    </div>
  );
};

export default Modal;
