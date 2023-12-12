import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();

    const [users, setUsers] = useState(loadedUsers);

    return (
      <h2>Users: {users.length}</h2>
    );
};

export default Users;