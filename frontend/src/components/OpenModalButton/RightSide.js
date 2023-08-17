import React from "react";
import { useRightSideModal } from "../../context/SideModal/RightSideModal";

function OpenRightSideModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose,
  className // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useRightSideModal();

  const onClick = () => {
    if (typeof onButtonClick === "function") onButtonClick();
    if (typeof onModalClose === "function") setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return <button onClick={onClick} className='cursor-button'>{buttonText}</button>;
}

export default OpenRightSideModalButton;