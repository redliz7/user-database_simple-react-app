import React from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const Modal = (props) => {
  return (
    <div className={styles['error-window__wrapp']}>
      <header>
        <h2>{props.errorTitle}</h2>
      </header>
      <div>
        <p>{props.errorMessage}</p>
      </div>
      <footer>
        <Button onClick={props.onCloseModal}>Закрыть</Button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return createPortal(
    <React.Fragment>
      <Backdrop onCloseModal={props.onCloseModal} />
      <Modal
        errorTitle={props.errorTitle}
        errorMessage={props.errorMessage}
        onCloseModal={props.onCloseModal}
      />
    </React.Fragment>,
    document.getElementById('backdrop')
  );
};

export default ErrorModal;
