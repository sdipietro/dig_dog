import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {signup, login, logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    // debugger
    if (window.currentUser) {
        console.log(window.currentUser)
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});