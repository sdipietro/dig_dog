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
            <Link to={`/users/${currentUser.id}`} > 
                <img src={currentUser.profilePhotoUrl} className="current-user-photo" />
            </Link>
            <button className="logout-button" onClick={logout}>Log Out</button>
            <Link to="/videos/new">
                <img className="upload-symbol" src={window.uploadSymbol} />
            </Link>
        </div>
    );

    if (currentUser) {
        return (
            <div className="index-page">
                <header className="page-header">
                    <div>
                        <Link to="/" className="logo">
                            <img className="dig-dog" src={window.digDogSymbol} alt="DigDog" />
                            <h1 className="">DigDog</h1>
                        </Link>
                    </div>
                    
                    { personalGreeting() }
                </header>
                <VideoIndexContainer />
            </div>
        )
    } else {
        return (
            <div>
                <header className="page-header">
                    <div>
                        <Link to="/" className="logo">
                            <img className="dig-dog" src={window.digDogSymbol} alt="DigDog" />
                            <h1 className="">DigDog</h1>
                        </Link>
                    </div>

                    {sessionLinks()}
                </header>
                <SplashContainer />
            </div>
        )
    }
};


export default Greeting;