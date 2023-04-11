import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../index.css';
import { Navigate } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Navbar from './Navbar';

function Content() {
    return (
        <Router className="flex flex-row">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>

                <Route exact path="/About" element={<About />}></Route>

                <Route path="/Work" element={<Work />}></Route>

                <Route path="/Contact" element={<Contact />}></Route>

                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </Router>
    )
}

export default Content;