import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={styles['error-window__overlay']}>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>

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
    </div>
  );
};

export default ErrorModal;
