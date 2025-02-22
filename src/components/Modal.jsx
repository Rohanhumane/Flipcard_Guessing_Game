import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useEffect, useRef } from "react";

const Modal = ({ children, open, onClose, ...props }) => {
  const dialog = useRef(null);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog className={classes.modal} ref={dialog} {...props} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
export default Modal;
