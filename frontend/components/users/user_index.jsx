import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllUsers();
    };

    render() {
        // const users = this.props.users.map((user, idx) => {
        //     return <li className="user-item-container" key={idx}><UserIndexItem user={user} />

        //     </li>;
        // });

        return (
            <div>
                <div className="reccomended-aside">
                    <div className="aside-links-container">
                        <a href="" className="aside-link">
                            <img className="upload-symbol" src={window.facebookSymbol} />
                        </a>
                        <a href="" className="aside-link">
                            <img className="upload-symbol" src={window.pinterestSymbol} />
                        </a>
                        <a href="" className="aside-link">
                            <img className="upload-symbol" src={window.twitterSymbol} />
                        </a>
                    </div>
                    <div className="suggested-container">
                        <div className="suggested-header">
                            <h3 className="suggested-header-title">Suggested accounts</h3>
                        </div>
                        <ul className="user-index" > 
                            {this.props.users.map((user, idx) => {
                                return <li className="user-item-container" key={idx}><UserIndexItem user={user} />
                                    <a href={`/users/${user.id}`} className="user-item-link">
                                        <div className="profile-pic-container">
                                            <img className="profile-pic" src={user.profilePhotoUrl}>
                                            </img>
                                        </div>
                                        <div className="user-item-name-container">
                                            <h4 className="user-index-name">{user.name}</h4>
                                            <p className="user-index-username">@{user.username}</p>
                                        </div>
                                        <div className="user-item-arrow">
                                            <img src={window.arrowLeftSymbol} className="user-item-arrow"/>
                                        </div>
                                    </a>
                                </li>;
                            })}
                        </ul >
                    </div>
                    <div className="discover-container">
                        <div className="suggested-header">
                            <h3 className="suggested-header-title">Discover</h3>
                        </div>
                        <ul className="user-index" >
                            {this.props.users.map((user, idx) => {
                                return <li className="user-item-container" key={idx}><UserIndexItem user={user} />
                                    <a href={`/users/${user.id}`} className="user-item-link">
                                        <div className="profile-pic-container">
                                            <img className="profile-pic" src={user.profilePhotoUrl}>
                                            </img>
                                        </div>
                                        <div className="user-item-name-container">
                                            <h4 className="user-index-name">{user.name}</h4>
                                            <p className="user-index-username">@{user.username}</p>
                                        </div>
                                        <div className="user-item-arrow">
                                            >
                                        </div>
                                    </a>
                                </li>;
                            })}
                        </ul >
                    </div>
                    {/* <div className="splash-footer-phone">
                        <h2 className="splash-footer-text">Text yourself a link to download DigDog</h2>
                        <div className="splash-phone-input">
                            <form className="phone-form">
                                <input value="US+1" readOnly className="splash-us1"></input>
                                <img className="up-down-symbol" src={window.upDownSymbol}></img>
                                <input placeholder="Phone number" className="phone-number-input"></input>
                                <button type="submit" className="phone-submit">Send</button>
                            </form>
                        </div>
                        <div className="policy-message-container">
                            <div className="policy-message">
                                <p className="policy">
                                    By clicking the "send" button, you confirm that you agree to our Terms of Use
                                    and acknowledge you have read and understood our  Privacy Policy
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="splash-footer-links">
                        <h2 className="download-header">Download now</h2>
                        <div className="splash-links">
                            <a href="https://github.com/sdipietro">Github</a>
                            <a href="https://www.linkedin.com/in/stephen-a-dipietro-940ba8104/">LinkedIn</a>
                            <a href="https://github.com/sdipietro/dig_dog/blob/master/README.md">About</a>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
};

export default UserIndex;