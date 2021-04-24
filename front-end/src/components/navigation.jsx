import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <ul>
        <NavLink to='/users'>
            <li>users</li>
        </NavLink>
        <NavLink to='/transactions'>
            <li>transactions</li>
        </NavLink>
    </ul>
);

export default Nav;
