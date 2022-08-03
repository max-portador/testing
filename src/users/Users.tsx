import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const loadUsers = async () => {
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])


    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            gap: 20,
            marginBottom: 20,
        }}
        data-testid='users-page'
        >
            {
                users.map(user =>
                    <Link
                        to={`/users/${user.id}`}
                        key={user.id}
                        data-testid='user-item'>
                        {user.name}
                    </Link>
                )
            }
        </div>
    );
};

export default Users;