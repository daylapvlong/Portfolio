import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

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
        <div className=" px-8 pt-4 mb-12 flex justify-between bg-white dark:bg-gray-800 text-black dark:text-green-500">
            <h1></h1>
            <ul className="flex items-center">
                <div className="cursor-pointer" onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <BsFillSunFill size={18} className="m-5 h-5 w-5" />
                    ) : (
                        <BsFillMoonStarsFill size={10} className="m-5 h-5 w-5" />
                    )}
                </div>
                <button className="font-bold">Resume</button>
            </ul>
        </div>
    );
}

export default Header;