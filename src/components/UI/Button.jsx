import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.onType}
      onClick={props.onClick}
      className={styles['button']}
    >
      {props.nameButton}
    </button>
  );
};

export default Button;
