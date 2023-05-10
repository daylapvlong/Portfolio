import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Home = () => {
    return (
        <div className="pl-20 bg-white dark:bg-gray-800 text-black dark:text-white h-screen">
            <Header />
            <div className="px-3 ">
                <h1 className="text-6xl font-bold py-6">Hi, I'm Long.</h1>
                <p className="text-xl py-1">I'm a software developer based in Hanoi, Vietnam</p>
                <p className="text-xl py-1">
                    I'm passionate about creating eyes appealing, functional websites and learning new things along the way.
                    Please view my <Link to="/Work">Work</Link> here!
                </p>
                <p className="text-xl py-1">
                    <Link to="/About">See More About Me</Link>
                </p>
            </div>

        </div>
    );
}

export default Home;