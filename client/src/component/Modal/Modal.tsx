import React from 'react';
import './modal.css';
const Modal = (props: any) => {
  const { open, closeModal, header } = props;
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      <div className="background" onClick={closeModal}></div>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={closeModal}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={closeModal}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
