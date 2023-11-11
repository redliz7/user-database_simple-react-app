import Card from '../../UI/Card/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card>
      {props.users.length === 0 && <p>Cписок пуст</p>}
      {props.users.length > 0 && (
        <ul className={styles['users_wrapp']}>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} лет
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UserList;
