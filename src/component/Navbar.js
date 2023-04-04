import {Link} from 'react-router-dom';
import {  AiOutlinePhone,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,} from 'react-icons/ai';

import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome to my portfolio</h1>
            <div className="links">
                <Link to="/"><AiOutlineHome />Home</Link>
                <Link to="/About"><AiOutlineUser />About</Link>
                <Link to="/Work"><AiOutlineFundProjectionScreen />Work</Link>
                <Link to="/Contact"><AiOutlinePhone />Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;