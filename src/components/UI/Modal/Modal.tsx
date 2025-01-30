import React, { FC, ReactNode } from 'react'
import c from "@/components/UI/Modal/Modal.module.css"

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({visible, onClose, children}) => {
    if (!visible) return null;

    return (
        <div className={c.modal} onClick={onClose}>
            <div className={c.modal__conteiner} onClick={(e) => e.stopPropagation()}>
                <button className={c.btn} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal