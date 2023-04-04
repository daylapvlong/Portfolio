import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Work from './component/Work/Work';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';
import './assets/css/index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar className="App-Navbar" />
                <div className="App-Content">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>

                        <Route exact path="/About" element={<About />}></Route>

                        <Route path="/Work" element={<Work />}></Route>

                        <Route path="/Contact" element={<Contact />}></Route>

                        <Route path="*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
                <Footer className="App-Footer"/>
            </div>
        </Router>
    );
}

export default App;