import React, { useState } from 'react';
import CreateUser from './components/Users/CreateUser/CreateUser';
import UserList from './components/Users/UserList/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const userDataAdditionHandler = (userData) => {
    setUsers((prevUsers) => [userData, ...prevUsers]);
  };

  return (
    <div>
      <CreateUser onAddUser={userDataAdditionHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
