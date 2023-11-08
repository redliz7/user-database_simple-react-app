import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';
import React, { useState } from 'react';

const INITIAL_USER = [
  { id: 'c1', name: 'John', age: 18 },
  { id: 'c2', name: 'YouRa', age: 25 },
];

const App = () => {
  const [users, setUsers] = useState(INITIAL_USER);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
