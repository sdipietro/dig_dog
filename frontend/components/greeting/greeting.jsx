import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Signup</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="greeting">
            <p className="greeting-user-profile">&#128100; {currentUser.username}'s Profile</p>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;