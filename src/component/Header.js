import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import resume from "../assets/PhamVietLong_Resume.pdf";

const Header = () => {
    const isDarkLocal = localStorage?.getItem("darkmode") === "true";

    useEffect(() => {
        if (isDarkLocal) {
            document.getElementsByTagName("html")[0].classList.add("dark");
        } else {
            document.getElementsByTagName("html")[0].classList.add("dark");
        }
    }, []);

    const [isDarkMode, setIsDark] = useState(isDarkLocal)

    const toggleDarkMode = () => {
        localStorage.setItem("darkmode", !isDarkMode ? "true" : "false");
        setIsDark(!isDarkMode);
        document.getElementsByTagName("html")[0].classList.toggle("dark");
    };

    return (
        <div className=" px-8 pt-4 grid justify-items-end bg-white dark:bg-gray-800 text-black dark:text-green-500">
            <ul className="flex items-center">
                <div className="cursor-pointer" onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <BsFillSunFill size={18} className="m-5 h-5 w-5" />
                    ) : (
                        <BsFillMoonStarsFill size={10} className="m-5 h-5 w-5" />
                    )}
                </div>
                <a href={resume} download ="PhamVietLong_Resume">
                    <button className="font-bold bg-transparent
                         hover:bg-green-500 text-green-500
                         hover:text-white py-2 px-4 rounded"
                    >Resume</button>
                </a>
            </ul>
        </div>
    );
}

export default Header;