import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Link, Route } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';

const App = () => (
    <div>
        <header>
            <h1 className="logo1">
                <Link to="/" className="logo1">DigDog</Link>
            </h1>
            
            <GreetingContainer />
        </header>

        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        <VideoIndexContainer />

        <footer>
            <p className="copyright">© 2020 DigDog</p>
        </footer>
    </div>
);

export default App;