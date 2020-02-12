import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom';

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

        <footer>
            <p className="copyright">©2020 DigDog</p>
        </footer>
    </div>
);

export default App;