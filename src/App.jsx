import React, { useState } from 'react';
import CreateUser from './components/Users/CreateUser/CreateUser';
import UserList from './components/Users/UserList/UserList';
import Wrapper from './components/helpers/Wrapper';

const App = () => {
  const [users, setUsers] = useState([]);

  const userDataAdditionHandler = (userData) => {
    setUsers((prevUsers) => [userData, ...prevUsers]);
  };

  return (
    <Wrapper>
      <CreateUser onAddUser={userDataAdditionHandler} />
      <UserList users={users} />
    </Wrapper>
  );
};

export default App;
