import FormAddingUser from '../../Form/FormAddingUser/FormAddingUser';

const CreateUser = (props) => {
  const userCreationHandler = (name, age) => {
    const userData = {
      name: name,
      age: age,
      id: Math.random().toString(),
    };

    props.onAddUser(userData);
  };

  return <FormAddingUser onSaveUserData={userCreationHandler} />;
};

export default CreateUser;
