import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
// import VideoIndexContainer from './videos/video_index_container';

const App = () => (
    <div>
        <Switch>

            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        </Switch>

        <footer>
            <p className="copyright">© 2020 DigDog</p>
        </footer>
    </div>
);

export default App;