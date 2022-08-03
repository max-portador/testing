import React from 'react';
import {Link} from "react-router-dom";
import AppRouter from "../../router/AppRouter";

const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            gap: 20,
            marginBottom: 20,
        }}>
            <Link data-testid={'link-main'} to={'/'}>Main</Link>
            <Link data-testid={'link-about'} to={'/about'}>About</Link>
            <Link data-testid={'link-users'} to={'/users'}>Users</Link>
        </div>
    );
};

export default Navbar;