import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="greeting">
            <h2>Hello, {currentUser.username}!</h2>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;