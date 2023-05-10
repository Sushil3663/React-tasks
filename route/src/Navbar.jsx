import React from "react";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <NavLink exact activeClassName ="active" to = '/'>Home</NavLink>
            <NavLink to = '/contact'></NavLink>
        </>
    )
}
export default Navbar;