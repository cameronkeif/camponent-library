import React from 'react';

export type ModalProps = {
  isOpen: boolean,
  title: string,
  children: React.ReactNode
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <div className="modal-header">
          {title}
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
