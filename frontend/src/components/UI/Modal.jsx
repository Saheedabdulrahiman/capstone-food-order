import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      className="  bg-white rounded-lg border-none shadow-md p-4 w-80 md:w-96 max-w-screen-sm animate-fade-slide-up backdrop:bg-black backdrop:opacity-70  "
      ref={dialog}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
