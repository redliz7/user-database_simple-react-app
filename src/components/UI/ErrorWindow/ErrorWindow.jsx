import Button from '../Button';
import Card from '../Card';
import styles from './ErrorWindow.module.css';

const ErrorWindow = (props) => {
  const hideWindowHandler = () => {
    props.onHideWindowHandler(false);
  };

  return (
    <div
      onClick={hideWindowHandler}
      className={styles['error-window__overlay']}
    >
      <div className={styles['error-window__wrapp']}>
        <div>
          <h1>{props.onErrorTitle}</h1>
        </div>
        <p>{props.onErrorText}</p>
        <div>
          <Button
            onType={'button'}
            onClick={hideWindowHandler}
            nameButton={'Закрыть'}
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorWindow;
