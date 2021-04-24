import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formStructure } from './formed';
import Component from './Component';

const Users = () => {
    const [users, setUsers] = useState({ columns: [], rows: [] });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:3003/users');
            const formed = formStructure(data.users);
            setUsers(formed);
        };
        fetchData();
    }, []);

    return <Component structure={users} />;
};

export default Users;
