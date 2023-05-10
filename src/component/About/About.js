import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const About = () => {
    return ( 
        <div className="pl-20 bg-white dark:bg-gray-800 text-black dark:text-white h-screen">
            <Header />
            <div className="">
                <div className="">
                    <h1>LET ME INTRODUCE MYSELF</h1>
                    <p>
                        Currently a undergraduate student at FPT university, majoring in Computer Science.
                        Learning and exploring new things is my passion. I'm always looking for new challenges and opportunities to learn and grow.
                    </p>
                </div>
                <div className=''>
                    <h2>My skillset so far</h2>
                    <h2>Proficiency</h2>
                </div>
            </div>
            <div className="">
                <h2>Connect with me on <Link to="/Contact">Contact</Link></h2>
            </div>
        </div>
     );
}

export default About;
