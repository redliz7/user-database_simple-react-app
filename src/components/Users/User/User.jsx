import styles from './User.module.css';

const User = (props) => {
  const users = props.users;
  return (
    <div className={styles['user_wrapp']}>
      <div>
        {users.name} - {users.age} лет
      </div>
    </div>
  );
};

export default User;
