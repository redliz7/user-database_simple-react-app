import Card from '../UI/Card';
import User from './User/User';

const Users = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <User users={user} key={user.id} />
      ))}
    </Card>
  );
};

export default Users;
