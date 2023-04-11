import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className=" px-5 py-5 mb-12 flex justify-between">
            <h1>Logo</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill />
                </li>
                <li>Resume</li>
            </ul>
        </div>
    );
}
 
export default Header;