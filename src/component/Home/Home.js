import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <h1>Hello There!</h1>
            <h1>MY NAME IS PHAM VIET LONG</h1>
            <p>I'm a front-end software developer based in Hanoi, Vietnam</p>
            <p>
                I'm passionate about creating eyes appealing website and learning new things along the way.
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