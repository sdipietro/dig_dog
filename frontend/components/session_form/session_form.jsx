import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <div className="error-messages">
                {this.props.errors.map((error, i) => (
                    <p key={`error#${i}`}>
                        {error}
                    </p>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="form-title">{this.props.formType}</div>
                    {/* <br /> */}
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {/* <div className="form-header">
                        <a href="#/signup">Sign Up</a>
                        <a href="#/login">Log in</a>
                    </div> */}
                    <div className="login-form">
                        {/* <br /> */}
                        {this.props.formType === "Sign up" ?
                            (<>
                            <div className="form-header-signup">
                                <a href="#/signup">Sign Up</a>
                                <a href="#/login">Log in</a>
                            </div>
                            <label>
                                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email"
                                />
                            </label>
                            </>) : 
                            (<div className="form-header-login">
                                <a href="#/signup">Sign Up</a>
                                <a href="#/login">Log in</a>
                            </div>)}
                        <label>
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Username"
                            />
                        </label>
                        {/* <br /> */}
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                            />
                        </label>
                        {/* <br /> */}
                        {this.renderErrors()}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;