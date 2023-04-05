import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div className="about">
            <div className="about-content">
                <div className="about-content-me">
                    <h1>LET ME INTRODUCE MYSELF</h1>
                    <p>
                        Currently a undergraduate student at FPT university, majoring in Computer Science.
                        Learning and exploring new things is my passion. I'm always looking for new challenges and opportunities to learn and grow.
                    </p>
                </div>
                <div className='about-content-skill'>
                    <h2>My skillset so far</h2>
                </div>
            </div>
            <div className="about-connect">
                <h2>Connect with me on <Link to="/Contact">Contact</Link></h2>
            </div>
        </div>
     );
}

export default About;
