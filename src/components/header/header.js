import React from 'react';
import './header.css'
import Logo from './logo.png'
const header = () => {
    return (
        <div className="header">
            <div className="nav-div">
                <div className="class-1"><img src={Logo} alt=""/></div>
                <div className="class-2">
                    <a href="#" className="nav">Login</a>
                    <a href="#" className="nav nav-2">All Courses</a>
                </div>
            </div>
            <div className="proverb-div">
                <h1 className="proverb">
                    Never too late to <span className="navy proverb">learn.</span> 
                </h1>
            </div>
            <div className="course-head-div">
                <h1 className="proverb-2">
                    Chose your next <span className="navy">skill.</span> 
                </h1>
            </div>
        </div>
    );
};

export default header;