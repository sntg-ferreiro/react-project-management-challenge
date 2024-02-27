import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import {Button} from './Button'

const Modal = forwardRef(({ children, buttonLabel }, ref) => {
  const refDialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        refDialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={refDialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>
          {buttonLabel || "Anda pa' lla', bobo"}
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
