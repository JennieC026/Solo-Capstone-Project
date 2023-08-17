import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./LeftSideModal.css";

const LeftSideModalContext = React.createContext();

export function LeftSideModalProvider({ children }) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);

  const closeModal = () => {
    setModalContent(null); // clear the modal contents
    // If callback function is truthy, call the callback function and reset it
    // to null:
    if (typeof onModalClose === "function") {
      setOnModalClose(null);
      onModalClose();
    }
  };

  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    closeModal, // function to close the modal
  };

  return (
    <>
      <LeftSideModalContext.Provider value={contextValue}>
        {children}
      </LeftSideModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function LeftSideModal() {
  const { modalRef, modalContent, closeModal } = useContext(LeftSideModalContext);
  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing:
  if (!modalRef || !modalRef.current || !modalContent) return null;

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div id="left-modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="left-modal-content">{modalContent}</div>
    </div>,
    modalRef.current
  );
}

export const useLeftSideModal = () => useContext(LeftSideModalContext);