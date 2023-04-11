import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Home = () => {
    return ( 
        <div className ="">
            <Header />
            <h1 className="text-6xl font-bold">Hi, I'm Long.</h1>
            <p className="text-xl">I'm a software developer based in Hanoi, Vietnam</p>
            <p className="text-xl">
                I'm passionate about creating eyes appealing, functional websites and learning new things along the way.
                Please view my <Link to="/Work">Work</Link> here!
                Or send me an email at <a href="mailto:phmvtlong@gmail.com">phmvtlong@gmail.com</a>
            </p>
            <p>
            <Link to="/About">See More About Me</Link>
            </p>

        </div>
     );
}

export default Home;