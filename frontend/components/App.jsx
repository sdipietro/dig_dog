import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import VideoShowContainer from './videos/video_index_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <Switch>

            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        </Switch>
    </div>
);

export default App;