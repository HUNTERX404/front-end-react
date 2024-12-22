import React from "react";

function Modal({ children, onClose, modalState }) {
    console.log('modalState',modalState);
  return (
    <>
      {modalState && (
        <div className="fixed w-full top-0 left-0 h-full z-50">
          <div
            className="bg-black/50 w-full h-full absolute top-0 left-0 blur-lg"
            onClick={onClose}
          ></div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
