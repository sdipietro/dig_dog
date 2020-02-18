import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexContainer from '../videos/video_index_container';
import SplashContainer from '../splash/splash_container';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Signup</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="greeting">
            {/* <p className="greeting-user-profile">&#128100; {currentUser.username}'s Profile</p> */}
            <button className="logout-button" onClick={logout}>Log Out</button>
            <img className="upload-symbol" src={window.uploadSymbol} />
        </div>
    );

    if (currentUser) {
        return (
            <div>
                <header className="page-header">
                    <h1 className="logo">
                        <Link to="/" className="logo">DigDog</Link>
                    </h1>
                    
                    { personalGreeting() }
                </header>
                <VideoIndexContainer />
            </div>
        )
    } else {
        return (
            <div>
                <header className="page-header">
                    <h1 className="logo">
                        <Link to="/" className="logo">DigDog</Link>
                    </h1>

                    {sessionLinks()}
                </header>
                <SplashContainer />
            </div>
        )
    }
};


export default Greeting;