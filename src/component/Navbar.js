import { Link } from 'react-router-dom';
import {
    AiOutlinePhone,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiFillGithub,
    AiFillInstagram,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import React from 'react';

const Navbar = () => {
    const NavIcon = ({ icon, text }) => {
        return (
            <div className="navbar-icon group">
                {icon}
                <span className="navbar-notion group-hover:scale-100">
                    {text}
                </span>
            </div>
        );
    }

    return (
        <nav className="fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col justify-between items-center
                        bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg">
            <div>
                <Link to="/">
                    <NavIcon icon={<AiOutlineHome size="30" />} text="Home" />
                </Link>
                <Link to="/About">
                    <NavIcon icon={<AiOutlineUser size="30" />} text="About" />
                </Link>
                <Link to="/Work">
                    <NavIcon icon={<AiOutlineFundProjectionScreen size="30" />} text="Work" />
                </Link>
                <Link to="/Contact">
                    <NavIcon icon={<AiOutlinePhone size="30" />} text="Contact" />
                </Link>
            </div>
            <div>
                <a href="https://github.com/daylapvlong">
                    <NavIcon icon={<AiFillGithub size="28" />} text="Github" />
                </a>

                <a href="https://www.linkedin.com/in/pham-long-1b3591257/">
                    <NavIcon icon={<FaLinkedinIn size="28" />} text="LinkedinIn" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100012864726826">
                    <NavIcon icon={<AiFillFacebook size="28" />} text="Facebook" />
                </a>

                <a href="https://www.instagram.com/_.longpham._/">
                    <NavIcon icon={<AiFillInstagram size="28" />} text="Instagram" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;