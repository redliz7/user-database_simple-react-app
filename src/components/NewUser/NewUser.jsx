import Card from '../UI/Card';
import UserForm from './UserForm/UserFrom';
import styles from './NewUser.module.css';

const NewUser = (props) => {
  const saveUserDataHandler = (inputUserData) => {
    const userData = {
      ...inputUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };

  return (
    <Card>
      <UserForm onSaveUserData={saveUserDataHandler} />
    </Card>
  );
};

export default NewUser;
